var a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p;for(a in c=(b=document.body.children[0]).getContext("experimental-webgl"))c[a[0]+(a[6]||"")+(a[8]||"")]=c[a];p=b.width=b.height=800,m=0,n=c.cPo(),o=[{c:"attribute vec3 l;varying vec2 p;void main(void){gl_Position=vec4(l, 1.0);p=vec2(l);}",t:c.VERTEX_SHADER},{c:"precision highp float;uniform float t;varying vec2 p;void main(void){vec2 q=vec2(0.1*sin(0.75*t),0.4*cos(t*3.1));float i=6.7*sin(t*0.61+sin(t*0.21));vec2 c=vec2(0.1*sin(distance(p, vec2(0.1,0.3))*i+t*3.1), 0.1*sin((p.x+p.y)*i));float h=mod(float(int(mod(distance(q,p+c)*20.0,2.0))+2*int(mod(distance(-q,p+c)*20.0,2.0))),3.0)/2.0; gl_FragColor=vec4(h,h,h,1.0);}",t:c.FN_}];for(d in o)j=c.cSa(o[d].t),c.sSu(j,o[d].c),c.ceh(j),c.aSa(n,j);c.lor(n),c.uga(n),h=c.gfr(n,"t"),i=[1,1,e=-.7,-1,1,e,1,-1,e,-1,-1,e],g=c.grb(n,"l"),c.eVr(g),c.bfe(f=c.ARRAY_BUFFER,c.cBf()),c.bDt(f,new Float32Array(i),c.STATIC_DRAW),setInterval(function(){c.uniform1f(h,m+=.02),c.vr(0,0,p,p),c.vAt(g,3,c.FLOAT,!1,0,0),c.dry(c.TRIANGLE_STRIP,0,4)},20);