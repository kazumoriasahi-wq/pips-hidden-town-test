/* Twelve distinct compositions. All decoration is seeded; only five local details differ. */
(function(root){'use strict';const A=root.PipArt,I='#354d58',T='#527d79',W='#dbcaab',G='#c19652',RUST='#ad705a';
const r=(x,y,w,h,c,rad=3)=>`<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="${rad}" fill="${c}"/>`,c=(x,y,rr,col)=>`<circle cx="${x}" cy="${y}" r="${rr}" fill="${col}"/>`,p=(d,col='none',s=I,w=2)=>`<path d="${d}" fill="${col}" stroke="${s}" stroke-width="${w}" stroke-linecap="round" stroke-linejoin="round"/>`,e=(x,y,rx,ry,col)=>`<ellipse cx="${x}" cy="${y}" rx="${rx}" ry="${ry}" fill="${col}"/>`;
function win(x,y,w=49,h=65){return r(x,y,w,h,I)+r(x+4,y+4,w-8,h-8,'#9dbbb9')+p(`M${x+w/2} ${y+4}v${h-8} M${x+4} ${y+h/2}h${w-8}`,'none',W,3);}
function tree(x,y,s=1){return`<g transform="translate(${x} ${y}) scale(${s})">${p('M0 0 L-3 -100','none','#7d7560',12)}${e(-25,-103,49,39,'#6e9380')}${e(27,-115,49,45,'#83a18a')}${e(0,-145,45,38,'#90ac8e')}</g>`;}
function building(x,y,w,h,col=W){return r(x,y,w,h,col)+p(`M${x-10} ${y}L${x+w/2} ${y-36}L${x+w+10} ${y}Z`,T)+win(x+17,y+25,35,44)+win(x+w-51,y+25,35,44)+r(x+w/2-17,y+h-53,34,53,T);}
function boat(x,y,s=1){return`<g transform="translate(${x} ${y}) scale(${s})">${p('M-75 0 L78 0 L55 30 L-55 30Z',RUST)}${p('M0 -5V-98 M0 -95L61 -10H0Z',W)}${p('M-5 -77L-57 -12H-5Z',T)}${p('M-74 36Q-45 28 -16 36T47 36T90 36','none','#d4dbcd',2)}</g>`;}
function stripes(x,y,w,h,a=RUST){return Array.from({length:8},(_,i)=>r(x+i*w/8,y,w/8,h,i%2?W:a,0)).join('');}
function base(l){const night=[7,10,11].includes(l.id),sky=night?'#6d8294':['#b7c8c6','#aec4ce','#b9c9b6'][l.decor%3];let s=r(0,0,600,330,sky,0)+r(0,224,600,106,'#b6ad96',0);switch(l.id){
case 0: // Kitchen: tiled wall, shelves, oven and workbench.
s=r(0,0,600,330,'#cfc3aa',0);for(let x=0;x<600;x+=40)for(let y=0;y<230;y+=29)s+=r(x+1,y+1,38,27,(x+y)%3?'#d8ccb5':'#c8bfaa',1);
s+=r(16,96,568,8,'#8b8168')+r(16,187,568,10,'#8b8168')+r(18,214,562,112,'#9d9277')+r(28,230,545,11,W)+p('M231 325V248Q291 184 352 248V325Z','#8e7160')+p('M246 322V252Q291 211 337 252V322Z','#46585b')+p('M267 302Q280 265 294 302Q306 268 320 303',G,'none')+win(468,20,93,100);break;
case 1: // Roof terrace with skyline and pergola.
for(let i=0;i<9;i++)s+=r(i*77-16,104+(i%3)*20,59,144,'#91a6a0')+r(i*77+7,120+(i%3)*20,15,25,'#bfcdbf');
s+=r(0,215,600,115,'#b6a187',0)+p('M0 210H600 M0 224H600','none',I,3);for(let x=12;x<600;x+=28)s+=p(`M${x} 213V248`,'none',T,3);
s+=p('M17 203V20H578V203 M8 26H590','none',T,7)+stripes(8,22,584,14)+r(110,251,365,13,W)+p('M132 264V323 M451 264V323','none',I,5)+tree(564,279,.65);break;
case 2: // Large lighthouse and quay with moored sailboat.
s+=r(0,150,600,180,'#7099a3',0);for(let y=172;y<330;y+=21)s+=p(`M0 ${y}Q40 ${y-8}80 ${y}T240 ${y}T400 ${y}T600 ${y}`,'none','#a9c1bd',2);
s+=p('M35 231L52 26H126L150 231Z',W)+stripes(47,80,85,25,RUST)+stripes(41,148,99,23,RUST)+r(43,19,91,11,I)+r(54,2,69,19,G)+r(72,195,30,36,T)+boat(369,214,1.25)+p('M0 280L600 242V330H0Z','#9e9077')+p('M0 287L600 249 M0 312L600 274','none','#d3c2a2',3);break;
case 3: // Cabin interior, portholes, hanging map and captain's desk.
s=r(0,0,600,330,'#b7a88c',0);for(let y=0;y<330;y+=24)s+=p(`M0 ${y}H600`,'none','#988d76',1);
for(const x of[90,295,502])s+=c(x,113,61,I)+c(x,113,54,G)+c(x,113,45,'#88aab3')+p(`M${x-39} 129Q${x-12} 121 ${x+14} 130T${x+41} 128`,'none',W,2);
s+=r(23,227,555,14,W)+r(30,242,540,88,T)+r(233,232,133,74,'#bdad8e')+p('M244 243L348 294 M345 243L249 294','none','#7d8b7c',2)+c(295,266,17,I)+p('M295 251L299 267L286 276','none',W,2)+r(256,8,79,28,I);break;
case 4: // Glasshouse with tall arched panes and benches.
s=r(0,0,600,330,'#a7beb0',0)+p('M9 311V71L300 7L590 71V311Z','#bad0c0',T,6);for(let x=50;x<600;x+=79)s+=p(`M${x} 63V315`,'none',T,4);
s+=p('M11 118H589 M11 211H589 M300 9V325','none',T,5)+tree(87,285,.85)+tree(506,287,.95)+r(28,282,543,12,'#8e8b6d')+p('M42 294V330 M557 294V330','none',I,6)+e(302,303,89,11,'#829c83');break;
case 5: // Picnic under large willows, pond and bridge.
s+=p('M0 193Q174 112 322 205T600 170V330H0Z','#9ab18d','none')+e(351,258,179,67,'#779fa0')+tree(61,250,1.5)+tree(546,213,1.15);
for(let i=0;i<10;i++)s+=p(`M${8+i*15} 78Q${26+i*14} 149 ${10+i*15} 201`,'none','#5d896e',4);
s+=p('M247 270Q357 177 474 267L463 279Q358 201 255 282Z','#c1ad8a')+p('M254 251Q359 160 469 248','none',I,4)+r(55,257,137,67,'#d0bb99',0);for(let i=0;i<7;i++)s+=p(`M${59+i*20} 259V323`,'none','#ad705a66',7);break;
case 6: // A long covered arcade with three different stalls.
s=r(0,0,600,330,'#c5bea8',0)+p('M0 57L300 0L600 57V87L300 29L0 87Z',T)+p('M20 79V327 M580 79V327','none',I,8);
for(let i=0;i<3;i++){const x=30+i*187;s+=r(x,103,164,143,['#b6c0a7','#c6af96','#adbaba'][i])+stripes(x-5,94,174,23,[RUST,T,'#a58b57'][i])+r(x,244,164,23,'#8c8b70')+r(x+7,267,150,62,W)+p(`M${x+11} 277H${x+154} M${x+11} 289H${x+154}`,'none','#ab9779',2);}break;
case 7: // Night street with noodle cart and lanterns.
s=r(0,0,600,330,'#667e8c',0)+r(0,235,600,95,'#8e9693',0);for(let i=0;i<5;i++)s+=building(i*135-35,110+(i%2)*24,112,147,'#9baba4');
s+=r(109,133,377,110,'#c3ad8f')+p('M87 130L114 95H484L512 130Z',RUST)+r(97,232,405,13,W)+r(117,245,363,75,T)+c(153,320,11,I)+c(450,320,11,I)+p('M0 25Q300 106 600 25','none',I,2);
for(let i=0;i<7;i++){const x=40+i*86,y=44+Math.sin(i/6*Math.PI)*30;s+=p(`M${x} ${y-10}v8`,'none',I)+r(x-12,y,24,31,i%2?G:RUST,10)+p(`M${x-7} ${y+8}h14 M${x-7} ${y+23}h14`,'none',W,1);}break;
case 8: // Sorting room wall of pigeonholes, conveyor desk.
s=r(0,0,600,330,'#c4c6b2',0);for(let row=0;row<3;row++)for(let col=0;col<6;col++)s+=r(16+col*96,17+row*70,86,60,'#7d9187')+r(21+col*96,22+row*70,76,49,'#afbaa3')+r(31+col*96,54+row*70,37,7,W,1);
s+=r(16,234,568,18,T)+r(30,252,540,74,'#a19477')+p('M43 263H554 M43 292H554','none',I,2)+c(69,307,10,I)+c(529,307,10,I)+r(255,246,94,54,W)+p('M260 250L302 280L342 250','none',RUST,2);break;
case 9: // Airfield: giant balloon airship, cloud islands and tower.
s=r(0,0,600,330,'#abc0cd',0);for(let i=0;i<7;i++)s+=e(i*99,155+(i%3)*43,88,24,'#d0d5c6');
s+=e(334,98,187,73,'#c8b99a')+p('M161 73Q333 29 505 73 M150 102H519 M170 132Q333 177 497 132','none',T,4)+p('M286 158L296 204H384L397 158','none',I,3)+r(293,195,95,28,T)+p('M102 87L145 103L104 120Z',RUST)+r(38,135,83,158,W)+win(49,143,62,47)+p('M24 135L80 104L136 135Z',T)+p('M0 280Q300 237 600 276V330H0Z','#9aab94','none')+p('M35 294H571','none',W,4);break;
case 10: // Round carousel dominates plaza; horses and poles.
s+=r(0,209,600,121,'#a7a395',0)+p('M82 124L300 24L521 124Z',RUST)+p('M300 24L258 123 M300 24L146 123 M300 24L351 123 M300 24L452 123','none',W,12)+r(76,120,452,19,G)+e(300,286,247,29,T)+e(300,276,231,25,W)+r(290,132,20,139,G);
for(let i=0;i<4;i++){const x=147+i*103;s+=p(`M${x} 139V269`,'none',G,5)+`<g transform="translate(${x} 221)">${p('M-30 -3L-18 -18H16L26 -36L39 -30L33 -5L20 4L20 26L11 26L5 7H-12L-18 27H-27L-22 1Z',i%2?T:RUST)}${r(-12,-23,24,7,G)}</g>`;}break;
case 11: // Dome observatory, mountain terrace and telescope.
s=r(0,0,600,330,'#647c8e',0)+p('M0 244L63 137L118 219L211 142L289 228L409 116L486 209L550 151L600 223V330H0Z','#7c9694','none')+r(57,140,234,141,'#abb5aa')+p('M42 143Q42 16 173 16Q305 16 305 143Z',T)+p('M172 18L197 143 M64 89H282','none',W,4)+r(58,279,485,49,'#9b9c8d')+p('M394 154L381 264 M394 154L454 264','none',I,5)+`<g transform="translate(397 147) rotate(-28)">${r(-72,-17,144,34,W,7)}${r(65,-23,16,46,T,3)}${r(-78,-13,14,26,I,2)}</g>`+p('M335 286H545','none',W,3);break;
}
if(night)for(let i=0;i<23;i++)s+=c((i*73+21)%600,12+(i*31)%93,i%4?1.1:2,'#d9cfa9');
return s;
}
function detail(kind,flip,n){const f=flip?1:0;let s='';switch(kind){
case'book':s=r(-24,-20,13,42,T)+r(-9,-25,14,47,RUST)+r(7,-17,15,39,G)+p(`M-21 -7h7 M-6 -13h8 M10 ${f?4:-2}h9`,'none',W,3);break;
case'bottle':s=r(-8,-28,16,12,T)+p('M-8 -16L-17 -6V24H17V-6L8 -16Z','#7b9b8c')+r(-13,0,26,16,W)+p(f?'M-7 8H7 M0 3V13':'M-7 8H7','none',RUST,2.8);break;
case'clock':s=c(0,0,27,I)+c(0,0,22,W)+p(`M0 -15V0L${f?12:8} ${f?5:12}`,'none',I,2.5)+c(0,0,2,RUST);for(let i=0;i<4;i++)s+=c(Math.cos(i*Math.PI/2)*18,Math.sin(i*Math.PI/2)*18,1.3,I);break;
case'plant':s=p('M-15 7L-12 27H12L15 7Z',RUST)+p('M0 7V-28','none',T,3)+e(-10,-7,13,6,T)+e(11,-19,13,6,T)+p(f?'M6 -20L15 -20 M-15 -7L-5 -7':'M6 -23L15 -17 M-15 -7L-5 -7','none',W,1.8);break;
case'cup':case'mug':s=r(-22,-13,39,35,W,7)+p('M17 -8Q38 -9 33 9Q28 20 17 14','none',I,3)+p('M-26 25H26','none',T,3)+p(`M-14 0H9 M-14 ${f?12:6}H9`,'none',RUST,2.8);break;
case'bird':s=e(-2,5,21,15,T)+c(13,-9,12,T)+p('M24 -11L34 -5L24 -2Z',G)+c(15,-11,2,I)+p(f?'M-13 2Q-3 11 9 3':'M-13 3Q-3 -4 9 3','none',W,2.5)+p('M-10 19V27 M3 19V27','none',I,2);break;
case'window':s=win(-24,-26,48,53)+p(`M-18 ${f?13:6}L-7 ${f?6:13}`,'none',W,3);break;
case'cake':s=r(-25,-9,50,33,RUST)+r(-27,-14,54,12,W,5)+c(0,-20,6,'#a05454')+p(f?'M1 -26L9 -31':'M1 -26L-7 -31','none',T,3)+p('M-21 8H21','none',G,3);break;
case'fish':s=e(-4,0,25,14,T)+p('M17 0L33 -14V14Z',T)+c(-16,-3,2,W)+p(f?'M-3 -8Q-11 0 -3 8':'M-3 -8Q5 0 -3 8','none',W,2.5);break;
case'mail':s=r(-27,-18,54,38,W)+p('M-25 -16L0 3L25 -16','none',I,2)+r(15,-12,7,9,T)+p(f?'M-8 10H8 M0 5V15':'M-8 10H8','none',RUST,2.5);break;
case'basket':s=p('M-27 -7L-21 24H21L27 -7Z','#a68b5a')+p('M-19 -7Q0 -32 19 -7','none',I,3)+[-12,0,12].map((x,i)=>c(x,-7,8,i===n%3?G:RUST)).join('')+p(`M-20 5H20 M${f?-7:7} 2V19`,'none',W,2.3);break;
case'lantern':s=r(-17,-22,34,45,G,9)+r(-13,-28,26,7,I)+p('M-12 -8H12 M-12 9H12','none',RUST,2.5)+p(`M${f?-4:4} -19V19`,'none',W,2.5);break;
case'flower':s=p('M0 4V28','none',T,3);for(let i=0;i<6;i++){let a=i*Math.PI/3;s+=e(Math.cos(a)*13,Math.sin(a)*13-7,7,8,RUST);}s+=c(0,-7,8,G)+p(f?'M-3 -7L3 -7 M0 -10V-4':'M-3 -7L3 -7','none',I,1.8);break;
case'shell':s=p('M-27 12Q-26 -21 0 -26Q26 -21 27 12L6 26H-6Z',W)+p('M0 -22V21 M-15 -15L-5 19 M15 -15L5 19','none',RUST,2)+(f?p('M-22 -2L-10 18','none',RUST,2):p('M22 -2L10 18','none',RUST,2));break;
case'hat':s=r(-24,8,48,8,T,6)+p('M-17 9L-13 -21H13L17 9Z',G)+r(-15,-1,30,7,RUST,1)+p(f?'M-3 1L3 5 M3 1L-3 5':'M-3 1H3V5H-3Z','none',W,1.8);break;
}return`<g stroke="${I}" stroke-width="1.4" stroke-linejoin="round">${s}</g>`;}
function scene(l,bottom=false){let out=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 330" aria-hidden="true" focusable="false">${base(l)}`;
for(let i=0;i<l.candidates.length;i++){const a=l.candidates[i],target=l.selected.indexOf(i),variant=(a.normal%2)^((bottom&&target>=0)?1:0);out+=`<g data-candidate="${i}" ${target>=0?`data-object="${target}"`:''} transform="translate(${a.x} ${a.y})">`;
// Indoor curios sit on shelving; outdoor curios are on small crates or hanging trays.
const indoor=[0,3,4,6,8].includes(l.id);out+=r(-27,23,54,indoor?4:6,indoor?'#8e8269':'#9c9277',2)+`<g transform="scale(${a.scale})">${detail(a.kind,variant,a.normal)}</g></g>`;}
out+=`<g>${A.pip(566,297,.42)}</g>`;
const random=root.PipEngine.rng(l.seed^0x112233);for(let i=0;i<35;i++){const x=15+random()*570,y=15+random()*300;out+=c(x,y,.45,'#29445322');}
return out+'</svg>';}
A.scene=scene;A.detail=detail;A.background=base;if(typeof module!=='undefined')module.exports=A;
})(globalThis);
