/* Original vector town and mascot. Each search object changes inside its own fixed region. */
(function(root){'use strict';const ink='#354d58',gold='#d8954b',teal='#4e7e7c',cream='#e8d8b6',rust='#b46d52';
const R=(x,y,w,h,c,r=4)=>`<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="${r}" fill="${c}"/>`,C=(x,y,r,c)=>`<circle cx="${x}" cy="${y}" r="${r}" fill="${c}"/>`,P=(d,c,stroke=ink,width=2)=>`<path d="${d}" fill="${c}" stroke="${stroke}" stroke-width="${width}" stroke-linecap="round" stroke-linejoin="round"/>`,E=(x,y,rx,ry,c)=>`<ellipse cx="${x}" cy="${y}" rx="${rx}" ry="${ry}" fill="${c}"/>`;
function star(x,y,r,c,n=5){let pts=[];for(let i=0;i<n*2;i++){let a=-Math.PI/2+i*Math.PI/n,k=i%2?r*.45:r;pts.push((x+Math.cos(a)*k)+','+(y+Math.sin(a)*k));}return`<polygon points="${pts.join(' ')}" fill="${c}"/>`;}
function pip(x=0,y=0,s=1,joy=false){return`<g transform="translate(${x} ${y}) scale(${s})" stroke="${ink}" stroke-width="2.5" stroke-linejoin="round">${E(8,48,45,7,'#304e5925')}${P('M20 25 Q66 31 56 -5','none',gold,13)}${C(58,-17,25,gold)}${C(58,-17,18,ink)}${C(58,-17,13,'#abc8c5')}${P('M52 -24 L61 -29','none','#e5ece0',3)}${E(0,22,23,26,teal)}${P('M-18 41 L-16 53 L-3 53 L-3 42',cream)}${P('M7 42 L8 52 L23 52 L20 40',gold)}${R(-18,43,16,5,ink,1)}${R(-17,50,15,4,ink,1)}${C(-20,-31,13,gold)}${C(19,-31,13,gold)}${C(-20,-31,6,'#bf7655')}${C(19,-31,6,'#bf7655')}${P('M-29 -20 Q-30 -43 0 -40 Q31 -42 30 -17 L24 0 Q0 22 -23 0 Z',gold)}${P('M-27 -12 Q-14 -21 -1 -7 Q12 -22 28 -12 L21 4 Q0 19 -21 4 Z',cream)}${joy?P('M-14 -12 Q-10 -17 -6 -12 M8 -12 Q12 -17 16 -12','none',ink,3):C(-11,-13,3,ink)+C(12,-13,3,ink)}${P('M-4 -4 L4 -4 L0 1 Z',ink)}${P('M0 1 Q-2 8 -7 5 M0 1 Q3 8 8 5','none',ink,1.8)}${P('M-22 8 L22 8 L17 17 L-18 17 Z',rust)}${P('M13 15 L29 26 L17 27 Z',rust)}${P('M-19 21 L-32 31 M21 19 L33 13','none',teal,9)}${C(-33,32,5,gold)}${C(35,12,5,gold)}</g>`;}
function object(kind,v){let s='';switch(kind){
case'sign':s=R(-39,-23,78,46,teal,9)+(v?P('M0 11 C-25 -4 -15 -25 0 -12 C15 -25 25 -4 0 11',cream,'none'):star(0,-1,18,cream))+C(-31,-15,2,cream)+C(31,-15,2,cream);break;
case'clock':s=C(0,0,28,ink)+C(0,0,23,cream)+P(v?'M0 -16 L0 0 L14 0':'M0 -16 L0 0 L-11 10','none',ink,3)+C(0,0,3,rust)+[0,1,2,3].map(i=>C(Math.cos(i*Math.PI/2)*18,Math.sin(i*Math.PI/2)*18,1.8,ink)).join('');break;
case'cake':s=E(0,24,34,5,teal)+R(-27,-10,54,33,rust,5)+R(-29,-15,58,13,cream,7)+C(0,-21,7,'#a25053')+(v?C(-17,-21,6,'#a25053')+C(17,-21,6,'#a25053'):'')+P('M-22 6 L22 6','none','#e3b988',3);break;
case'basket':s=P('M-33 -9 L-26 25 L26 25 L33 -9 Z','#b18a54')+P('M-23 -10 Q0 -38 23 -10','none',ink,3)+[-15,0,15].map((x,i)=>C(x,-8,10,i===1?'#bb7556':'#cda958')).join('')+(v?C(0,-25,9,'#718a59'):'')+P('M-21 2 L21 2 M-18 12 L18 12','none','#e2c28b',2);break;
case'plant':s=P('M-15 4 L-12 27 L12 27 L15 4 Z',rust)+P('M0 4 L0 -26','none',teal,4)+E(-9,-9,13,5,teal)+E(10,-21,13,6,teal)+(v?star(0,-30,13,gold,6):E(0,-30,8,12,teal));break;
case'cup':s=R(-22,-10,39,33,cream,8)+P('M17 -5 Q39 -7 33 10 Q27 19 17 13','none',ink,4)+P('M-27 26 L28 26','none',teal,4)+(v?P('M-7 -19 Q-18 -27 -7 -34 M6 -19 Q-5 -27 6 -34','none',ink,2):star(-3,6,9,rust));break;
case'bird':s=P('M-28 23 L27 23','none',ink,3)+E(0,6,20,15,teal)+C(13,-7,12,teal)+P('M23 -9 L34 -4 L23 0 Z',gold)+C(15,-10,2,ink)+P('M-15 1 Q-4 -4 4 8 Q-10 19 -15 1',cream)+(v?P('M-1 -16 L-7 -30 L8 -27 L12 -18 Z',rust):'');break;
case'window':s=R(-27,-29,54,58,ink,5)+R(-22,-24,44,48,'#aec5c0',3)+P('M0 -24 L0 24 M-22 0 L22 0','none',cream,4)+(v?P('M-21 -23 L-5 -23 L-16 21 L-21 21 Z',rust):P('M5 -23 L21 -23 L21 21 L16 21 Z',rust));break;
case'bow':s=P('M0 0 Q-39 -30 -30 7 Q-20 22 0 0 Q29 23 32 2 Q35 -26 0 0 Z',rust)+C(0,0,8,gold)+P(v?'M-3 6 L-25 32 L-8 25 L0 33 L3 8':'M-3 6 L-10 32 L0 24 L10 32 L3 6',rust);break;
case'cat':s=E(0,17,20,13,teal)+P('M-19 -5 L-19 -28 L-5 -17 L10 -18 L24 -29 L22 -4 Q5 17 -19 -5',teal)+C(-7,-5,2,cream)+C(10,-5,2,cream)+P('M-13 17 Q-40 24 -31 0','none',teal,6)+(v?R(-18,8,36,7,rust,2):'');break;
case'fish':s=E(-3,0,27,15,teal)+P('M20 0 L38 -17 L38 17 Z',teal)+C(-17,-3,3,cream)+C(-17,-3,1.4,ink)+(v?P('M-3 -13 L3 -29 L14 -11 Z',gold):P('M-3 -13 L8 -21 L14 -11 Z',gold))+P('M-7 0 Q2 10 6 0','none',cream,2);break;
case'flag':s=P('M-17 -30 L-17 33','none',ink,4)+P(v?'M-15 -28 L31 -28 L13 -12 L31 3 L-15 3 Z':'M-15 -28 L31 -12 L-15 3 Z',rust);break;
case'anchor':s=C(0,-22,8,ink)+C(0,-22,4,cream)+P('M0 -14 L0 24 M-16 -6 L16 -6 M-26 8 Q-23 33 0 25 Q22 33 27 8 M-26 8 L-30 16 M27 8 L31 16','none',teal,5)+(v?R(-12,-5,24,5,gold,2):'');break;
case'flower':s=P('M0 29 L0 -3','none',teal,4)+E(-12,15,12,5,teal)+Array.from({length:v?8:5},(_,i)=>{const a=i*Math.PI*2/(v?8:5);return E(Math.cos(a)*15,Math.sin(a)*15-9,9,9,rust);}).join('')+C(0,-9,9,gold);break;
case'mushroom':s=R(-8,-5,16,33,cream,5)+P('M-33 -3 Q0 -53 33 -3 Z',rust)+C(-13,-13,5,cream)+C(10,-17,5,cream)+(v?C(0,-30,4,cream):'');break;
case'kite':s=P('M0 -32 L26 -3 L0 22 L-25 -3 Z',v?rust:gold)+P('M0 -32 L0 22 M-25 -3 L26 -3','none',cream,2)+P('M0 22 Q20 27 5 38','none',ink,2)+(v?P('M6 26 L-3 21 L-4 32 Z',teal):'');break;
case'umbrella':s=P('M-35 -2 Q0 -49 35 -2 Z',teal)+P('M0 -29 L0 27 Q-2 38 -13 27','none',ink,3)+P('M0 -29 Q-13 -18 -12 -2 M0 -29 Q13 -18 12 -2','none',cream,2)+(v?C(0,-11,7,gold):'');break;
case'mail':s=R(-32,-18,64,43,cream,4)+P('M-30 -16 L0 5 L30 -16','none',ink,2)+R(16,-12,9,11,teal,1)+(v?star(-1,8,9,rust):C(-1,8,8,rust));break;
case'bell':s=P('M-25 15 Q-14 3 -14 -12 Q0 -34 14 -12 Q14 3 25 15 Z',gold)+C(0,23,6,ink)+(v?P('M-30 -21 L-35 -27 M29 -21 L34 -27','none',rust,4):'');break;
case'star':s=star(0,0,31,gold,v?6:5)+C(-7,-3,2,ink)+C(7,-3,2,ink)+P('M-5 6 Q0 12 5 6','none',ink,2);break;
}return s;}
const themes={bakery:{sky:'#b5c9cb',ground:'#bcad90',wall:'#dfc9a7',roof:'#517d7b',sign:'CRUMB & CO.'},harbor:{sky:'#a7c3cb',ground:'#afa991',wall:'#dbcbaf',roof:'#567d91',sign:'WHISKER WHARF'},garden:{sky:'#b7c9be',ground:'#a4b296',wall:'#d9d5b2',roof:'#597e70',sign:'FERN & FRIENDS'},market:{sky:'#c3c4b6',ground:'#c4b398',wall:'#dfc6a1',roof:'#a96e57',sign:'APRICOT MARKET'},post:{sky:'#b0c4cf',ground:'#b4b3a6',wall:'#d3d2bd',roof:'#647f96',sign:'CLOUD POST'},fair:{sky:'#758e9d',ground:'#a2a299',wall:'#d0bb9d',roof:'#756983',sign:'STARLIGHT FAIR'}};
function scene(level,bottom=false){const t=themes[level.world],e=level.edition;let out=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 330" aria-hidden="true" focusable="false"><defs><pattern id="grain${bottom?'b':'a'}" width="23" height="23" patternUnits="userSpaceOnUse"><circle cx="3" cy="8" r=".55" fill="#243f4a" opacity=".12"/><circle cx="17" cy="20" r=".45" fill="#fff" opacity=".25"/></pattern></defs>${R(0,0,600,330,t.sky,0)}${C(534,47,24,level.world==='fair'?'#dfcf9b':'#ded0a3')}`;
for(let i=0;i<5;i++)out+=E(i*145+13,105+i%2*10,100,35,i%2?'#90a8a2':'#9db2aa');
out+=P('M0 213 Q145 184 300 217 Q454 185 600 208 L600 330 L0 330 Z',t.ground,'none');
if(level.world==='harbor')out+=R(0,180,600,64,'#638e9a',0)+P('M0 196 Q30 189 60 196 T180 196 T300 196 T420 196 T600 196 M0 220 Q30 213 60 220 T180 220 T300 220 T420 220 T600 220','none','#b5cbc8',2);
out+=R(30,74,185,166,t.wall,5)+P('M17 78 L54 39 L183 39 L228 78 Z',t.roof)+P('M45 47 L193 47 M36 59 L204 59 M27 71 L218 71','none','#ffffff25',2)+R(171,23,18,27,t.wall,2)+R(166,20,28,7,ink,2)+R(39,155,167,67,'#c7b69c',1);
out+=R(54,158,50,65,teal,2)+R(116,158,77,49,'#8baead',2)+P('M155 158 L155 207 M116 181 L193 181','none',cream,4)+C(94,193,2,gold);
for(let i=0;i<7;i++)out+=R(40+i*24,141,24,17,i%2?cream:rust,2);
out+=R(374,101,119,128,t.wall,4)+P('M363 104 L433 63 L504 104 Z',t.roof)+R(388,190,31,39,teal,2)+R(447,192,26,34,'#ad9d82',2)+P('M428 109 L428 180','none','#a4967e',2);
if(level.world==='garden')out+=P('M228 216 L228 124 L291 97 L353 124 L353 216 Z','#a8bebb')+P('M228 124 L353 124 M291 98 L291 216 M253 114 L253 216 M328 113 L328 216 M228 162 L353 162','none',teal,3);
else out+=P('M239 216 L239 142 Q290 93 342 142 L342 216 Z',e?'#b6b1a0':'#b4bca9')+P('M250 211 L250 150 Q290 114 330 150 L330 211','none',teal,5)+P('M290 124 L290 216','none',teal,3);
out+=P('M248 248 Q301 217 348 250 L418 330 L169 330 Z','#d2c5aa','none');
for(let i=0;i<19;i++){let x=(i*83+17)%600,y=239+(i*31)%89;out+=P(`M${x} ${y} l16 0 m-8 7 l11 0`,'none','#847e6b45',1.5);}
out+=R(256,27,89,18,ink,4)+`<text x="300" y="39" fill="${cream}" font-size="8" font-family="system-ui" font-weight="800" text-anchor="middle">${t.sign}</text>`+P('M300 45 L300 48','none',ink,3);
out+=R(140,284,101,10,teal,3)+P('M151 294 L147 318 M229 294 L233 318','none',ink,4)+C(157,313,6,ink)+C(222,313,6,ink);
out+=R(354,300,86,9,teal,3)+P('M363 309 L360 326 M431 309 L435 326','none',ink,3);
for(let i=0;i<4;i++)out+=P(`M${22+i*12} 245 l0 -22`,'none',teal,3)+C(22+i*12,220,5,gold);
out+=P('M220 57 Q330 111 505 57','none',ink,1.5);
for(let i=0;i<8;i++){let x=232+i*34,y=60+Math.sin((i+1)/9*Math.PI)*22;out+=P(`M${x} ${y} l12 3 l-6 14 Z`,i%2?rust:gold,'none');}
if(level.world==='fair')for(let i=0;i<12;i++)out+=star((i*53+27)%600,12+(i*17)%74,i%3?2:4,'#e4d7ad');
out+=pip(519,265,.76);
for(let i=0;i<5;i++){const r=level.regions[i];out+=`<g data-object="${i}" transform="translate(${r.x} ${r.y})" stroke="${ink}" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">${object(level.kinds[i],bottom?1:0)}</g>`;}
out+=R(0,0,600,330,`url(#grain${bottom?'b':'a'})`,0)+'</svg>';return out;}
root.PipArt={scene,pip,object};if(typeof module!=='undefined')module.exports=root.PipArt;
})(globalThis);
