var a=new Image;a.onload=function(){var b=Math,c=b.sin,d=b.cos,e=b.PI,f=requestAnimationFrame,g=Date.now,h=320,i=h/2,j=240,k=j/2,l=i,m=k,n=.07,o=.04,p=50,q=h-2*p,r=j-2*p,s=-.5,t=-.5,u=.7071,v=150,w=4,x=g(),y=document.body.children[0];y.style.width="640px";var z=y.getContext("2d");z.drawImage(a,0,0);for(var A=z.getImageData(0,0,a.width,a.height).data,B=z.createImageData(h,j),C=B.data,D=3;D<B.data.length;D+=4)C[D]=255;var E,F,G,H,I,J,K,L,M,N,O,P,Q=function(){for(E=g()-x,H=1.5/(8*Math.abs(d(E/5e3+e/2))+.25),rot=E/1500,l=Math.abs(n*E%(2*q)-q)+p,m=Math.abs(o*E%(2*r)-r)+p,P=0,G=0;j>G;G++)for(J=(G-m)/p,lensV=2*b.asin(J)/e*p+m,F=0;h>F;F++){for(I=(F-l)/p,K=1-I*I-J*J,K>0?(K=b.sqrt(K),L=2*b.atan2(I,K)/e*p+l,M=lensV,N=b.pow(I*s+J*t+K*u,w)*v):(L=F,M=G,N=0),cosOfRot=d(rot),sinOfRot=c(rot),L-=i,M-=k,temp=L*cosOfRot-M*sinOfRot,M=M*cosOfRot+L*sinOfRot,L=temp,L=((L/H>>0)+i)%h,0>L&&(L+=h),M=((M/H>>0)+k)%j,0>M&&(M+=j),O=4*(M*h+L),temp=0;3>temp;temp++)C[P++]=A[O++]+N;P++}z.putImageData(B,0,0),f(Q)};f(Q)},a.src="img/meanman.png";