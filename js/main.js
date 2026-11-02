const d=document;d.documentElement.classList.add('js');
const wa='https://wa.me/5511980963126?text='+encodeURIComponent('Olá! Conheci seu trabalho pelo site e gostaria de conversar sobre a criação de um projeto digital.');
d.querySelectorAll('[data-wa]').forEach(a=>a.href=wa);
const io=new IntersectionObserver(e=>e.forEach(x=>{if(x.isIntersecting){x.target.classList.add('on');io.unobserve(x.target)}}),{threshold:.15});
d.querySelectorAll('.rv').forEach(e=>io.observe(e));
const mb=d.querySelector('.mb'),ln=d.querySelector('.links');
const tg=o=>{ln.classList.toggle('open',o);mb.setAttribute('aria-expanded',o)};
mb.onclick=()=>tg(!ln.classList.contains('open'));
ln.querySelectorAll('a').forEach(a=>a.onclick=()=>tg(false));
const dk=d.querySelector('.deck'),cs=[...dk.children],n=cs.length,ct=d.querySelector('.ct');
let i=0,busy=false,sx=0,dx=0,drag=false;
const pos=()=>{cs.forEach((c,k)=>{const p=(k-i+n)%n;c.style.setProperty('--d',p);c.style.opacity=p>2?0:1-p*.28;c.style.zIndex=9-p;c.style.pointerEvents=p?'none':'auto';c.setAttribute('aria-hidden',p?'true':'false')});ct.textContent=String(i+1).padStart(2,'0')+' / '+String(n).padStart(2,'0')};
const go=(dir,side=1)=>{if(busy)return;const o=cs[i];setTimeout(()=>o.style.setProperty('--p',0),430);ch.p=ch.tp=0;
if(dir>0){busy=true;const t=cs[i];t.style.transform=`translateX(${side*130}%) rotate(${side*16}deg)`;i=(i+1)%n;pos();
setTimeout(()=>{t.style.transition='none';t.style.transform='';void t.offsetWidth;t.style.transition='';busy=false},420)}
else{i=(i-1+n)%n;pos()}};
d.querySelector('.nx').onclick=()=>go(1,-1);d.querySelector('.pv').onclick=()=>go(-1);
dk.addEventListener('keydown',e=>{if(e.key==='ArrowRight')go(1,-1);if(e.key==='ArrowLeft')go(-1)});
dk.addEventListener('pointerdown',e=>{if(busy||!cs[i].contains(e.target))return;drag=true;sx=e.clientX;dx=0;cs[i].classList.add('drag');dk.setPointerCapture(e.pointerId)});
dk.addEventListener('pointermove',e=>{if(!drag)return;dx=e.clientX-sx;cs[i].style.transform=`translateX(${dx}px) rotate(${dx/18}deg)`});
const end=()=>{if(!drag)return;drag=false;const c=cs[i];c.classList.remove('drag');if(Math.abs(dx)>90)go(1,Math.sign(dx));else c.style.transform=''};
dk.addEventListener('pointerup',end);dk.addEventListener('pointercancel',end);
cs.forEach(c=>{const im=c.querySelector('img'),m=d.createElement('div'),cl=im.cloneNode();m.className='med';cl.alt='';cl.setAttribute('aria-hidden','true');cl.className='cl';im.className='mn';im.before(m);m.append(im,cl)});
const ch={x:0,y:0,tx:0,ty:0,p:0,tp:0,r:0};
const chf=()=>{ch.r=0;const c=cs[i];ch.x+=(ch.tx-ch.x)*.2;ch.y+=(ch.ty-ch.y)*.2;ch.p+=(ch.tp-ch.p)*.12;c.style.setProperty('--x',ch.x+'px');c.style.setProperty('--y',ch.y+'px');c.style.setProperty('--p',ch.p.toFixed(3));if(Math.abs(ch.tx-ch.x)>.3||Math.abs(ch.ty-ch.y)>.3||Math.abs(ch.tp-ch.p)>.01)ch.r=requestAnimationFrame(chf)};
dk.addEventListener('pointermove',e=>{const r=cs[i].querySelector('.med').getBoundingClientRect();ch.tx=e.clientX-r.left;ch.ty=e.clientY-r.top;if(ch.p<.02){ch.x=ch.tx;ch.y=ch.ty}ch.tp=1;if(!ch.r)ch.r=requestAnimationFrame(chf)});
dk.addEventListener('pointerleave',()=>{ch.tp=0;if(!ch.r)ch.r=requestAnimationFrame(chf)});
(()=>{const box=d.querySelector('.tt'),cv=box.firstElementChild,q=cv.getContext('2d'),T='GABRIELLY',FAM="'Circuit Forem',Impact,sans-serif",AC='#00E0FF',rm=matchMedia('(prefers-reduced-motion:reduce)').matches;
let W=1,H=1,dp=1,G=[],base=0,sz=100,vis=false,raf=0,t=0,last=0,drag=-1,act=-1,press=null,INK='#fff';
const P={x:0,y:0,in:false},gr={x:0,y:0},fr={x1:0,y1:0,x2:0,y2:0,a:0,g:null};
const ap=(a,b,dt,s)=>a+(b-a)*(1-Math.exp(-dt/s)),rn=(a,b,c)=>((Math.imul(a*73856093^b*19349663^c*83492791,2654435761)>>>0)%10007)/10007;
const wk=()=>{if(!raf&&vis){last=performance.now();raf=requestAnimationFrame(tk)}};
const lay=()=>{W=box.clientWidth||1;H=box.clientHeight||1;dp=Math.min(devicePixelRatio||1,2);cv.width=W*dp;cv.height=H*dp;INK=getComputedStyle(box).color;
q.setTransform(dp,0,0,dp,0,0);q.font='100px '+FAM;
const ch=[...T],ws=ch.map(c=>q.measureText(c).width),cap=q.measureText('H').actualBoundingBoxAscent,tot=ws.reduce((a,b)=>a+b+3,-3);
sz=Math.min(260,100*W*.9/tot,100*H*.64/cap);const k=sz/100;let px=(W-tot*k)/2;base=H/2+cap*k/2;
G=ch.map((c,n)=>{const g={c,x:px,w:ws[n]*k,h:cap*k,ox:0,oy:0,vx:0,vy:0,o:0};px+=g.w+3*k;return g});wk()};
const at=(a,b)=>{if(!G.length||b<base-G[0].h-24||b>base+24)return -1;let bi=-1,bd=28;G.forEach((g,n)=>{const l=g.x+g.ox,dd=a<l?l-a:a>l+g.w?a-l-g.w:0;if(dd<bd){bd=dd;bi=n}});return bi};
const draw=()=>{q.setTransform(dp,0,0,dp,0,0);q.clearRect(0,0,W,H);q.font=sz+'px '+FAM;q.textBaseline='alphabetic';q.lineJoin='round';
G.forEach(g=>{const X=g.x+g.ox,Y=base+g.oy;
if(g.o<.999){q.globalAlpha=1-g.o;q.fillStyle=INK;q.fillText(g.c,X,Y)}
if(g.o>.001){q.globalAlpha=g.o;q.strokeStyle=AC;q.lineWidth=1.5;q.setLineDash([4,2]);q.strokeText(g.c,X,Y);q.setLineDash([])}});
q.globalAlpha=1;const g0=fr.g;
if(fr.a>.01&&g0){const a=fr.a,{x1,y1,x2,y2}=fr,w=x2-x1,h=y2-y1,pr=2*(w+h),sd=G.indexOf(g0)+1;q.fillStyle=q.strokeStyle=AC;q.lineWidth=1;
q.globalAlpha=.5*a;q.strokeRect(Math.round(x1)+.5,Math.round(y1)+.5,w,h);
q.globalAlpha=.95*a;[[x1,y1],[x2,y1],[x2,y2],[x1,y2]].forEach(([u,v])=>q.fillRect(Math.round(u)-2,Math.round(v)-2,5,5));
for(let k=0;k<14;k++){const per=.5+rn(sd,k,11)*1.2,u=t/per+rn(sd,k,17),cy=Math.floor(u),lf=u-cy;if(lf>.7)continue;
let dd=rn(sd,k,cy)*pr,px,py,nx=0,ny=0;
if(dd<w){px=x1+dd;py=y1;ny=-1}else if((dd-=w)<h){px=x2;py=y1+dd;nx=1}else if((dd-=h)<w){px=x2-dd;py=y2;ny=1}else{dd-=w;px=x1;py=y2-dd;nx=-1}
const pk=rn(sd,k,cy+7),s2=pk<.5?2:pk<.75?3:pk<.9?5:8,out=4+Math.floor(rn(sd,k,cy+3)*5)*3;
q.globalAlpha=a*(.3+.6*rn(sd,k,cy+5))*((lf<.06||(lf>.32&&lf<.36))?.35:1);
q.fillRect(Math.round(px+nx*out-s2/2),Math.round(py+ny*out-s2/2),s2,s2)}
q.globalAlpha=.62*a;q.font='10px ui-monospace,Menlo,monospace';q.textBaseline='bottom';
q.fillText(Math.hypot(g0.ox,g0.oy)>1?`${g0.ox>0?'+':''}${Math.round(g0.ox)}, ${Math.round(-g0.oy)}`:`${g0.c}  ${Math.round(g0.w)} × ${Math.round(g0.h)}`,Math.round(x1),Math.round(y1)-7);q.globalAlpha=1}};
const tk=n=>{raf=0;const dt=Math.min(.05,Math.max(.001,(n-last)/1000));last=n;t+=dt;
const sw=!P.in&&drag<0&&!rm;let tx=P.x,ty=P.y;
if(sw){tx=W*.05+W*.9*(.5-.5*Math.cos(t*.45));ty=base-sz*.3}
act=drag>=0?drag:(P.in||sw)?at(tx,ty):-1;
const dm=2*Math.sqrt(320)*.62;let mv=false;
G.forEach((g,i)=>{if(i===drag){g.ox=ap(g.ox,P.x-gr.x,dt,.03);g.oy=ap(g.oy,P.y-gr.y,dt,.03);g.vx=g.vy=0;mv=true}
else if(Math.abs(g.ox)>.05||Math.abs(g.oy)>.05||Math.hypot(g.vx,g.vy)>.5){g.vx+=(-320*g.ox-dm*g.vx)*dt;g.vy+=(-320*g.oy-dm*g.vy)*dt;g.ox+=g.vx*dt;g.oy+=g.vy*dt;mv=true}
else{g.ox=g.oy=g.vx=g.vy=0}
g.o=ap(g.o,i===act&&i!==drag?1:0,dt,.09)});
const ag=G[act];
if(ag){fr.g=ag;const b=[ag.x+ag.ox-6,base-ag.h+ag.oy-6,ag.x+ag.w+ag.ox+6,base+ag.oy+6];if(fr.a<.02){fr.x1=b[0];fr.y1=b[1];fr.x2=b[2];fr.y2=b[3]}
const gl=drag>=0?.02:.08;fr.x1=ap(fr.x1,b[0],dt,gl);fr.y1=ap(fr.y1,b[1],dt,gl);fr.x2=ap(fr.x2,b[2],dt,gl);fr.y2=ap(fr.y2,b[3],dt,gl)}
fr.a=ap(fr.a,ag?1:0,dt,.1);draw();
if(vis&&(!rm||P.in||mv||fr.a>.01))raf=requestAnimationFrame(tk)};
const loc=e=>{const r=box.getBoundingClientRect();P.x=e.clientX-r.left;P.y=e.clientY-r.top};
['pointermove','pointerenter'].forEach(ev=>box.addEventListener(ev,e=>{loc(e);P.in=true;wk()}));
box.addEventListener('pointerleave',()=>{if(drag<0){P.in=false;wk()}});
box.addEventListener('pointerdown',e=>{loc(e);P.in=true;const n=at(P.x,P.y);press={x:P.x,y:P.y,t:performance.now(),n};if(n>=0&&!rm){drag=n;gr.x=P.x-G[n].ox;gr.y=P.y-G[n].oy;box.setPointerCapture(e.pointerId)}wk()});
const up=e=>{if(drag>=0){drag=-1;try{box.releasePointerCapture(e.pointerId)}catch(_){}}
if(e.type==='pointerup'&&press&&press.n>=0&&!rm&&performance.now()-press.t<450&&Math.hypot(P.x-press.x,P.y-press.y)<6)G[press.n].vy-=sz*11;
press=null;wk()};
box.addEventListener('pointerup',up);box.addEventListener('pointercancel',up);
new ResizeObserver(lay).observe(box);new IntersectionObserver(([e])=>{vis=e.isIntersecting;wk()}).observe(box);
document.fonts.load('100px '+FAM,T).then(lay,lay);lay()})();

(()=>{const box=d.querySelector('.flux'),cv=box.firstElementChild,gl=cv.getContext('webgl2',{alpha:true,premultipliedAlpha:true,antialias:false,depth:false,stencil:false});if(!gl)return;
const rm=matchMedia('(prefers-reduced-motion:reduce)').matches,PAL=new Float32Array(24);PAL.set([1,.302,0,1,.62,0,0,.878,1,.29,.306,.412]);
const VS=`#version 300 es
in vec2 aPosition;void main(){gl_Position=vec4(aPosition,0.0,1.0);}`;
const FS=`#version 300 es
precision highp float;
precision highp int;
uniform vec2 uResolution;uniform float uTime;uniform vec2 uFlow;uniform float uSpeed;uniform float uScale;uniform float uTurbulence;uniform float uFluidity;uniform float uRimWidth;uniform float uSharpness;uniform float uShimmer;uniform float uGlow;uniform float uLine;uniform float uMaxHalf;uniform vec3 uColors[8];uniform int uColorCount;uniform vec4 uMagnet;uniform vec4 uSwirl;uniform float uReveal;uniform float uOpacity;
out vec4 outColor;
float hash(vec3 p3){p3=fract(p3*0.1031);p3+=dot(p3,p3.zyx+33.33);return fract((p3.x+p3.y)*p3.z);}
float smin(float a,float b,float k){float r=exp2(-a/k)+exp2(-b/k);return -k*log2(r);}
float sinlerp(float a,float b,float w){return mix(a,b,(sin(w*3.14159265-3.14159265/2.0)+1.0)/2.0);}
float vn(vec2 p,float s,float seed){vec2 cellp=floor(p/s);vec2 relp=mod(p,s);float g1=hash(vec3(cellp,seed));float g2=hash(vec3(cellp.x+1.0,cellp.y,seed));float g3=hash(vec3(cellp.x+1.0,cellp.y+1.0,seed));float g4=hash(vec3(cellp.x,cellp.y+1.0,seed));float bx=sinlerp(g1,g2,relp.x/s);float tx=sinlerp(g4,g3,relp.x/s);return sinlerp(bx,tx,relp.y/s);}
float dbn(vec2 p,float s,float seed){float o=s/2.0;float n0=vn(p,s,seed);float n1=vn(p+vec2(o,o),s,seed+0.1);float n2=vn(p+vec2(-o,o),s,seed+0.2);float n3=vn(p+vec2(o,-o),s,seed+0.3);float n4=vn(p+vec2(-o,-o),s,seed+0.4);return (2.0*n0+1.5*n1+1.25*n2+1.125*n3+n4)/7.0;}
vec3 palette(float h){float x=clamp(h,0.0,1.0)*float(uColorCount-1);int i=int(floor(x));int j=min(i+1,uColorCount-1);return mix(uColors[i],uColors[j],smoothstep(0.0,1.0,x-float(i)));}
void main(){
float ref=700.0/max(uScale,0.05);
vec2 frag=gl_FragCoord.xy;
vec2 toMagnet=(frag-uMagnet.xy)/uResolution.y;
float pull=uMagnet.z*exp(-dot(toMagnet,toMagnet)/(uMagnet.w*uMagnet.w));
if(pull>0.001){float angle=pull*0.55;float c=cos(angle);float s=sin(angle);frag=uMagnet.xy+mat2(c,s,-s,c)*(frag-uMagnet.xy);}
if(uSwirl.w>0.0){vec2 d=frag-uSwirl.xy;float reach=uSwirl.z;float angle=uSwirl.w*exp(-dot(d,d)/(reach*reach));float c=cos(angle);float s=sin(angle);frag=uSwirl.xy+mat2(c,s,-s,c)*d;}
vec2 p=frag/uResolution.y*ref;
float spd=200.0*uSpeed;float t=uTime;vec2 dir=uFlow;vec2 perp=vec2(-dir.y,dir.x);
float distort1=vn(p+perp*(t*spd),60.0,10.0)*50.0*uTurbulence;
float distort2=vn(p-perp*(t*spd),120.0,15.0)*100.0*uTurbulence;
float peaks=dbn(p+distort1+dir*(t*spd*0.5),40.0,1.0);
float peaks2=dbn(p+distort2-dir*(t*spd*0.5),40.0,0.0);
float field=smin(peaks,peaks2,max(uFluidity,0.001));
float slope=length(vec2(dFdx(field),dFdy(field)));
float gap=abs(field-0.4);
float pixels=gap/max(slope,1e-6);
float halfBand=max(uRimWidth,0.001)*0.5;
float across=max(gap/halfBand,pixels/uMaxHalf);
float band=5.0*uRimWidth*(1.0-across);
float reveal=smoothstep(0.2,0.85,pull);
float shimmer=vn(p+dir*(t*spd*0.5),60.0,12.0)*uShimmer*(1.0-reveal*0.75);
float lit=clamp(band-shimmer,0.0,1.0);
float glow=pow(lit,uSharpness)*uGlow*(1.0+reveal*0.25);
float core=uLine>0.0?smoothstep(uLine+0.75,uLine-0.75,pixels)*max(smoothstep(0.08,0.6,glow),reveal):0.0;
float shine=clamp(glow,0.0,1.0);
float energy=max(shine*shine,core*0.85)*uReveal;
float h=clamp(0.5+(peaks-peaks2)*0.8,0.0,1.0);
vec3 light=palette(h)*energy*uOpacity;
outColor=vec4(light,max(light.r,max(light.g,light.b)));}`;
const sh=(t,s)=>{const o=gl.createShader(t);gl.shaderSource(o,s);gl.compileShader(o);return o},pr=gl.createProgram();
gl.attachShader(pr,sh(gl.VERTEX_SHADER,VS));gl.attachShader(pr,sh(gl.FRAGMENT_SHADER,FS));gl.bindAttribLocation(pr,0,'aPosition');gl.linkProgram(pr);
if(!gl.getProgramParameter(pr,gl.LINK_STATUS))return;
const U={};for(let k=gl.getProgramParameter(pr,gl.ACTIVE_UNIFORMS);k--;){const f=gl.getActiveUniform(pr,k);U[f.name.replace('[0]','')]=gl.getUniformLocation(pr,f.name)}
const va=gl.createVertexArray();gl.bindVertexArray(va);gl.bindBuffer(gl.ARRAY_BUFFER,gl.createBuffer());gl.bufferData(gl.ARRAY_BUFFER,new Float32Array([-1,-1,3,-1,-1,3]),gl.STATIC_DRAW);gl.enableVertexAttribArray(0);gl.vertexAttribPointer(0,2,gl.FLOAT,false,0,0);
let tm=0,rv=rm?1:0,last=0,raf=0,R=1;const P={x:0,y:0,in:false},M={x:0,y:0,a:0},S={x:0,y:0,age:10};
const draw=()=>{const a=S.age,tw=1.9*Math.min(1,a/.23)*Math.exp(-Math.max(0,a-.23)*1.1);
gl.uniform1f(U.uTime,tm);gl.uniform4f(U.uMagnet,M.x,M.y,M.a,.35);gl.uniform4f(U.uSwirl,S.x,S.y,cv.height*.22*(1+a*.5),a<6?tw:0);gl.uniform1f(U.uReveal,rv*rv*(3-2*rv));gl.drawArrays(gl.TRIANGLES,0,3)};
const lay=()=>{const w=Math.max(1,box.clientWidth),h=Math.max(1,box.clientHeight),dp=Math.min(devicePixelRatio||1,w<800?1:1.5);cv.width=Math.round(w*dp);cv.height=Math.round(h*dp);R=cv.width/w;
gl.viewport(0,0,cv.width,cv.height);gl.useProgram(pr);gl.bindVertexArray(va);gl.uniform2f(U.uResolution,cv.width,cv.height);gl.uniform2f(U.uFlow,0,-1);gl.uniform1f(U.uSpeed,.5);gl.uniform1f(U.uScale,1.6);gl.uniform1f(U.uTurbulence,1);gl.uniform1f(U.uFluidity,.1);gl.uniform1f(U.uRimWidth,.2);gl.uniform1f(U.uSharpness,2.5);gl.uniform1f(U.uShimmer,1.5);gl.uniform1f(U.uGlow,1.6);gl.uniform1f(U.uLine,R*.5);gl.uniform1f(U.uMaxHalf,28*R);gl.uniform3fv(U.uColors,PAL);gl.uniform1i(U.uColorCount,4);gl.uniform1f(U.uOpacity,.55);draw();wk()};
const wk=()=>{if(!raf&&!document.hidden){last=0;raf=requestAnimationFrame(fr)}};
const fr=n=>{raf=0;if(document.hidden)return;const dt=last?Math.min(.05,Math.max(.0005,(n-last)/1000)):1/60;last=n;if(!rm)tm+=dt;S.age+=dt;if(rv<1)rv=Math.min(1,rv+dt/1.8);
if(P.in){const f=1-Math.exp(-dt/.15);M.x+=(P.x-M.x)*f;M.y+=(P.y-M.y)*f}
const tg=P.in?1:0;M.a+=(tg-M.a)*(1-Math.exp(-dt/.3));if(Math.abs(tg-M.a)<.001)M.a=tg;draw();
if(!rm||rv<1||M.a!==tg||S.age<6)raf=requestAnimationFrame(fr)};
addEventListener('pointermove',e=>{const was=P.in;P.in=true;P.x=e.clientX*R;P.y=(box.clientHeight-e.clientY)*R;if(!was&&M.a<.05){M.x=P.x;M.y=P.y}wk()},{passive:true});
addEventListener('pointerdown',e=>{P.in=true;P.x=e.clientX*R;P.y=(box.clientHeight-e.clientY)*R;if(!rm){S.x=P.x;S.y=P.y;S.age=0}wk()},{passive:true});
const out=e=>{if(e.pointerType!=='mouse')P.in=false};addEventListener('pointerup',out);addEventListener('pointercancel',out);
d.documentElement.addEventListener('pointerleave',()=>{P.in=false});d.addEventListener('visibilitychange',wk);
new ResizeObserver(lay).observe(box);lay()})();

(()=>{const se=d.querySelector('.se'),tr=se.querySelector('.se-track'),st=se.querySelector('.se-stage'),fr=se.querySelector('.se-frame'),md=se.querySelector('.se-media'),sc=se.querySelector('.se-scrim'),ti=se.querySelector('.se-title'),hi=se.querySelector('.se-hint'),ov=se.querySelector('.se-ov');
const rm=matchMedia('(prefers-reduced-motion:reduce)').matches,cl=(v,a,b)=>v<a?a:v>b?b:v,ss=(a,b,x)=>{const k=cl((x-a)/(b-a),0,1);return k*k*(3-2*k)};
let H=1,cur=0,tg=0,run=false,raf=0,SW=42;
const ap=p=>{const e=ss(0,1,p),w=SW+(100-SW)*e,h=58+42*e,ix=Math.max(0,(100-w)/2),iy=Math.max(0,(100-h)/2);
fr.style.clipPath=`inset(${iy}% ${ix}% ${iy}% ${ix}% round ${24*(1-e)}px)`;md.style.transform=`scale(${1.35-.35*e})`;sc.style.opacity=.7*e;
const o=ss(.4,.88,p);ti.style.opacity=1-o;ti.style.transform=`translate3d(0,${-28*o}px,0) scale(${1+.06*o})`;
const g=ss(0,.12,p);hi.style.opacity=1-g;hi.style.transform=`translate3d(0,${8*g}px,0)`;
const n=ss(.68,1,p);ov.style.opacity=n;ov.style.transform=`translate3d(0,${18*(1-n)}px,0)`;ov.style.pointerEvents=n>.6?'auto':'none'};
const rp=()=>cl(-tr.getBoundingClientRect().top/(H*1.2),0,1);
const tick=()=>{cur+=(tg-cur)*(1-Math.exp(-1/6));if(Math.abs(tg-cur)<.0004){cur=tg;run=false}ap(cur);raf=run?requestAnimationFrame(tick):0};
const onS=()=>{tg=rp();if(rm){cur=tg;ap(cur);return}if(!run){run=true;if(!raf)raf=requestAnimationFrame(tick)}};
const meas=()=>{H=st.offsetHeight||innerHeight;SW=innerWidth<700?72:42;tg=cur=rp();ap(cur)};
addEventListener('scroll',onS,{passive:true});new ResizeObserver(meas).observe(st);meas()})();

pos();
