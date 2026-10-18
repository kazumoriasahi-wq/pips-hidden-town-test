/* Expert edition: differences are architectural or organic details inside the illustration. */
(function(root){'use strict';const A=root.PipArt,E=root.PipEngine,I='#425c60',wood='#756d59',cream='#e2d3b4',green='#527b64';
const r=(x,y,w,h,c,rad=2)=>`<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="${rad}" fill="${c}"/>`,c=(x,y,rr,col)=>`<circle cx="${x}" cy="${y}" r="${rr}" fill="${col}"/>`,p=(d,s=I,w=1.8)=>`<path d="${d}" fill="none" stroke="${s}" stroke-width="${w}" stroke-linecap="round" stroke-linejoin="round"/>`;
function leaf(x,y,rot=0,col=green){return`<ellipse cx="${x}" cy="${y}" rx="6" ry="2.8" transform="rotate(${rot} ${x} ${y})" fill="${col}"/>`;}
function plant(x,y,s=1){return`<g transform="translate(${x} ${y}) scale(${s})">${r(-13,-14,26,22,'#a47959',3)}${p('M0 -14Q-9 -47 8 -70',green,2.5)}${leaf(-6,-29,-25)}${leaf(5,-38,25)}${leaf(-5,-48,-20)}${leaf(8,-61,25)}</g>`;}
function incidental(l){let s='',rand=E.rng(l.seed^0x701036);const pot=(x,y,sc)=>plant(x,y,sc);switch(l.id){
case 0:s+=pot(435,185,.7);for(let i=0;i<6;i++)s+=`<g transform="translate(${50+i*24} 83) scale(.43)">${A.object(i%2?'cup':'bottle',0)}</g>`;s+=p('M305 26V58 M323 26V49 M339 26V60',wood,2)+p('M299 56Q305 77 311 56 M334 59Q339 75 344 59',wood,2);for(let i=0;i<4;i++)s+=r(44+i*48,247,34,59,'#a89d80')+r(48+i*48,254,26,45,'#9a8e72');break;
case 1:s+=pot(49,295,.8)+pot(555,293,1);for(let i=0;i<7;i++)s+=r(12+i*83,142,14,20,'#718d8d')+r(35+i*83,171,11,17,'#718d8d');s+=p('M194 255L187 309 M165 263H204 M153 259L148 309 M418 256L426 312 M413 268H453 M455 258L462 310',wood,4)+`<g transform="translate(292 244) scale(.47)">${A.object('cup',0)}</g>`;break;
case 2:for(let i=0;i<4;i++)s+=r(38+i*149,258-i*8,9,45,wood)+p(`M${43+i*149} ${266-i*8}Q${116+i*149} ${283-i*8} ${192+i*149} ${258-i*8}`,wood,2);s+=p('M473 227Q501 214 527 236 M478 233Q503 220 525 242 M482 239Q504 228 521 247',wood,2)+c(171,211,9,'#b87859')+c(171,211,4,cream);for(let i=0;i<4;i++)s+=p(`M${222+i*66} ${36+i%2*16}q5 -6 10 0q5 -6 10 0`,I,1.5);break;
case 3:s+=p('M8 22Q24 97 12 198 M18 22Q35 98 22 199','#81735a',5);for(let i=0;i<6;i++)s+=r(46+i*23,211,17,17,['#7c8b77','#ad705a','#c19652'][i%3]);s+=`<g transform="translate(443 223) scale(.5)">${A.object('bottle',0)}</g>`+r(339,253,69,35,'#bca98a')+p('M345 260l23 12 31 -13',wood,1.6);break;
case 4:s+=pot(57,307,1.2)+pot(128,306,.8)+pot(461,306,.7)+pot(536,311,1.3);for(let i=0;i<18;i++){const x=24+i*30,y=76+Math.sin(i*.8)*13;s+=leaf(x,y,-20,'#6f927a')+p(`M${x-14} ${y+1}q17 -10 31 1`,green,1.4);}break;
case 5:for(let i=0;i<29;i++){let x=20+rand()*550,y=230+rand()*92;if(x>225&&x<465&&y>250)continue;s+=p(`M${x} ${y}l-3 -8m3 8l4 -6`,green,1.2);if(i%3===0)s+=c(x,y-9,2.3,'#d2bd86');}s+=leaf(330,299,0,'#73966b')+leaf(466,264,0,'#73966b')+p('M341 301q7 -2 13 0 M443 269q8 -3 14 0','#c4d3c3',1.4);break;
case 6:for(let i=0;i<16;i++){const x=48+(i%4)*35+(Math.floor(i/4)%3)*185,y=222-(i%3)*5;if(x<570)s+=c(x,y,5.5,['#a76f54','#b28d4c','#72915f'][i%3]);}s+=pot(555,247,.6);for(const x of[44,232,420])s+=r(x,139,59,33,'#b8b391')+p(`M${x+8} 151h43m-39 8h32`,wood,1);break;
case 7:s+=p('M202 237Q188 222 204 209 M225 235Q211 219 226 205','#d9d8c1',1.4)+`<g transform="translate(288 227) scale(.48)">${A.object('cup',0)}</g>`;for(let i=0;i<4;i++)s+=r(133+i*90,252,37,53,'#5a7f76')+p(`M${139+i*90} 261h25m-25 14h25`,cream,1);break;
case 8:for(let row=0;row<3;row++)for(let col=0;col<6;col++){let x=31+col*96,y=39+row*70;s+=r(x,y,39,15,'#d2c8ae')+p(`M${x+2} ${y+2}l18 9 17 -9`,wood,1);}s+=r(59,262,62,42,'#baa580')+r(411,262,54,43,'#c7b595')+p('M88 264V303 M62 285H119 M440 264V303 M414 282H462','#88765a',2);break;
case 9:for(const x of[232,261,290])s+=r(x,268,21,20,'#bda87f')+p(`M${x+2} 269l18 18m0 -18l-18 18`,wood,1);s+=p('M208 309h31m40 0h31m40 0h31m40 0h31',cream,3);for(let i=0;i<5;i++)s+=c(282+i*23,207,5,'#b2c9c4');break;
case 10:for(let i=0;i<13;i++){let x=90+i*34,y=132;s+=c(x,y,2.4,cream);}for(let i=0;i<11;i++){let x=111+i*38,y=280+Math.sin(i/10*Math.PI)*13;s+=r(x-10,y-8,20,14,'#a17a57');}s+=p('M150 207l20 -13 M253 207l20 -13 M356 207l20 -13 M459 207l20 -13',cream,2);break;
case 11:s+=p('M82 279V188H261V279 M91 279V206H252V279','#6d8381',3);for(let i=0;i<5;i++)s+=p(`M${98+i*34} 204V279`,'#6d8381',2);for(let i=0;i<30;i++){let x=12+rand()*575,y=10+rand()*107;s+=c(x,y,i%6===0?1.8:.85,'#d2d1b7');}s+=r(51,291,29,24,'#9a967f')+r(493,294,35,22,'#909380');break;
}
return s;}
function feature(kind,v){const d=v?1:0;switch(kind){
case'joint':case'tile':return p(`M-13 0H13 M${d?5:-3} 0V13`,'#a99f88',1.5);
case'reflection':return p(`M-10 -11L${d?4:9} ${d?3:8} M-4 -12L10 2`,'#dce4d2',1.8);
case'latch':return p(`M-8 0H8 M${d?3:0} -5V5`,wood,2)+c(-8,0,1.8,wood);
case'hinge':return r(-3,-12,6,24,'#7c806d')+p(`M-7 -5H7 M${d?7:-7} 6H${d?-1:1}`,cream,1.6);
case'wood':return p(`M-16 -3Q-4 -7 14 -3 M-13 5Q${d?6:-3} ${d?0:9} 12 5 M-6 0Q0 -4 6 0Q0 4 -6 0`,wood,1.3);
case'brick':return p(`M-14 -7H14 M-14 6H14 M${d?5:-5} -7V6 M-12 6V13`,'#8d826b',1.5);
case'handle':return p(`M-11 -3V4H11V-3 M${d?-8:8} -3V-7`,wood,2.2);
case'weave':return p(`M-15 -8H15 M-15 0H15 M-15 8H15 M-8 -11V11 M${d?5:9} -11V11`,wood,1.3);
case'utensil':return p(`M0 -15V1Q-12 15 0 16Q12 15 0 1 M${d?-4:4} -15V-3`,wood,1.8);
case'label':return r(-13,-6,26,12,'#d2c4a5')+p(`M-8 -1H8 M-8 3H${d?1:6}`,'#8a7d65',1.5);
case'seam':case'stitch':return p(`M-16 0Q0 ${d?5:-3} 16 0 M-9 -3L-7 3 M0 -3L2 3 M9 -3L11 3`,kind==='stitch'?'#927c60':'#7e8574',1.5);
case'window':return p(`M-12 -12H12V12H-12Z M0 -12V12 M-12 ${d?3:-3}H12`,cream,1.8);
case'rail':return p(`M-14 0H14 M-8 0V15 M8 0V15 M${d?-8:8} 7L${d?2:-2} 12`,wood,1.7);
case'leaf':return leaf(-5,-2,-25)+leaf(7,4,25)+p(`M-12 0L12 0 M-4 0L${d?-5:1} -6`,cream,1.5);
case'twig':case'vine':return p(`M-9 15Q0 0 5 -15 M-1 1L${d?-12:12} -9 M-5 8L-14 4`,green,1.8)+leaf(6,-12,-35)+leaf(-12,4,20);
case'napkin':return p(`M-15 -12L15 -8L12 13L-13 10Z M-10 -6H9 M-9 0L${d?5:-1} 6`,'#8b7965',1.4);
case'screw':case'bolt':return c(0,0,4.4,'#7b8578')+p(d?'M-2 -2L2 2':'M-2 2L2 -2',cream,1.4)+c(12,3,1.6,'#7b8578');
case'rope':case'knot':return p(`M-17 -5Q-4 10 15 -5 M-14 -2Q0 12 14 -1 M-3 1Q${d?-12:10} -14 4 -3 M0 0L4 12`,'#817357',1.8);
case'sail':return p(`M-13 -11L12 12 M-6 -7L${d?0:6} ${d?0:-3} M3 4L10 0`,'#a29373',1.5);
case'ripple':return p(`M-17 0Q-8 -6 0 0T17 0 M-9 6Q0 ${d?0:10} 9 6`,'#b9d0c7',1.5);
case'chart':return p(`M-15 6L-7 -9L1 3L${d?6:11} -3L16 8 M-10 10H10`,'#7a8e7c',1.3);
case'soil':return p(`M-14 2l4 -3m9 5l4 -4m${d?7:1} -10l3 2`,'#6b8066',1.8);
case'grass':return p(`M0 13L-5 -9 M0 13L8 -6 M0 13L${d?-12:13} 2`,green,1.5);
case'stone':return p(`M-16 1L-4 -5L3 4L16 -2 M-4 -5L${d?-6:2} -13`,'#7d8173',1.5);
case'lantern':return p(`M-9 -9Q-12 0 -9 10 M0 -10Q${d?7:-7} 0 0 11 M9 -9Q12 0 9 10`,'#b7a67e',1.4);
case'bowl':return p('M-16 -6Q-13 14 0 14Q13 14 16 -6Z','#6e8177',1.7)+p(`M-11 -5H11 M-4 -6L${d?3:8} -17`,wood,1.5);
case'spoke':return c(0,0,2.5,cream)+p(`M-8 -7L8 7 M-8 7L8 -7 M0 -10V10 M${d?-10:-7} 0H10`,cream,1.5);
case'letter':return p('M-17 -8H17V8H-17Z','#978c72',1)+p(`M-15 -6L0 ${d?4:0}L15 -6 M9 2H13`,wood,1.2);
case'bridle':return p(`M-9 -10L8 6 M-7 -5L${d?-11:0} 6 M-3 0L8 -5`,cream,1.8);
case'panel':return p(`M-17 -8H17V8H-17Z M-13 -4H13V4H-13Z M${d?-6:6} -4V4`,'#807d64',1.4);
case'telescope':return p(`M-11 -9L-3 12 M-5 -12L4 9 M${d?-5:6} -9L13 8`,'#8a917e',1.7);
case'star':return c(-12,-6,1.8,cream)+c(2,-12,1.5,cream)+c(12,7,1.9,cream)+c(-6,10,1.4,cream)+p(`M-12 -6L2 -12L12 7L${d?-6:2} 10`,'#bfcab7',.9);
default:throw Error('Unknown embedded detail '+kind);
}}
function scene(l,bottom=false){let out=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 330" aria-hidden="true" focusable="false">${A.background(l)}${incidental(l)}`;for(const a of l.candidates){const target=l.selected.indexOf(a.id),v=a.normal^((bottom&&target>=0)?1:0);out+=`<g data-feature="${a.id}" ${target>=0?`data-object="${target}"`:''} transform="translate(${a.x} ${a.y})">${feature(a.kind,v)}</g>`;}out+=A.pip(566,297,.42);return out+'</svg>';}
A.scene=scene;A.embeddedFeature=feature;if(typeof module!=='undefined')module.exports=A;
})(globalThis);
