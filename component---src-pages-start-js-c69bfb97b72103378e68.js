/*! For license information please see component---src-pages-start-js-c69bfb97b72103378e68.js.LICENSE.txt */
(self.webpackChunkmaking_connections_visible=self.webpackChunkmaking_connections_visible||[]).push([[497],{1133:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return o}});var r=n(7294);n(5072),n(5444);function a(e){var t=e.link1,n=e.link2,a=e.link3,i=e.what,o=e.cta;return r.createElement("div",{className:"container-fluid",style:{height:"90vh"}},r.createElement("div",{className:"row"},r.createElement("div",{className:"col-9"},r.createElement("div",{className:"row"},r.createElement("p",null,"BECAUSE STORING THIS DATA COMPANIES KNOW:"),r.createElement("p",null,i))),r.createElement("div",{className:"col-12"},r.createElement("div",{className:"row"},r.createElement("div",{className:"col-4"},t),r.createElement("div",{className:"col-4"},n),r.createElement("div",{className:"col-4"},a)),r.createElement("div",{className:"row"},r.createElement("p",null,o)),r.createElement("div",{className:"row"},r.createElement("p",null,"explore more")))))}var i=n(2932);function o(){return r.createElement("section",{className:"bg-primary"},r.createElement(a,{what:"how much you use your spaces in the house (map + dirtiness) how untidy you are",link1:"a",link2:"b",link3:"c",cta:"can i use roomba more safely?"}))}n(2884).p8.registerPlugin(i.i)},5567:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return Re}});var r=n(7294),a=n(2884),i=n(2932),o=/[achlmqstvz]|(-?\d*\.?\d*(?:e[\-+]?\d+)?)[0-9]/gi,l=/(?:(-)?\d*\.?\d*(?:e[\-+]?\d+)?)[0-9]/gi,s=/[\+\-]?\d*\.?\d+e[\+\-]?\d+/gi,c=/(^[#\.][a-z]|[a-y][a-z])/i,u=Math.PI/180,h=180/Math.PI,f=Math.sin,p=Math.cos,g=Math.abs,d=Math.sqrt,m=Math.atan2,v=1e8,y=function(e){return"string"==typeof e},x=function(e){return"number"==typeof e},w={},b={},N=1e5,E=function(e){return Math.round((e+v)%1*N)/N||(e<0?0:1)},P=function(e){return Math.round(e*N)/N||0},L=function(e){return Math.round(1e10*e)/1e10||0},M=function(e,t,n,r){var a=e[t],i=1===r?6:V(a,n,r);if(i&&i+n+2<a.length)return e.splice(t,0,a.slice(0,n+i+2)),a.splice(0,n+i),1},C=function(e,t){return t.totalLength=e.totalLength,e.samples?(t.samples=e.samples.slice(0),t.lookup=e.lookup.slice(0),t.minLength=e.minLength,t.resolution=e.resolution):e.totalPoints&&(t.totalPoints=e.totalPoints),t},S=function(e,t){var n=e.length,r=e[n-1]||[],a=r.length;n&&t[0]===r[a-2]&&t[1]===r[a-1]&&(t=r.concat(t.slice(2)),n--),e[n]=t};function A(e){var t,n=(e=y(e)&&c.test(e)&&document.querySelector(e)||e).getAttribute?e:0;return n&&(e=e.getAttribute("d"))?(n._gsPath||(n._gsPath={}),(t=n._gsPath[e])&&!t._dirty?t:n._gsPath[e]=D(e)):e?y(e)?D(e):x(e[0])?[e]:e:console.warn("Expecting a <path> element or an SVG path data string")}function _(e){var t,n=0;for(e.reverse();n<e.length;n+=2)t=e[n],e[n]=e[n+1],e[n+1]=t;e.reversed=!e.reversed}var T={rect:"rx,ry,x,y,width,height",circle:"r,cx,cy",ellipse:"rx,ry,cx,cy",line:"x1,x2,y1,y2"};function k(e,t){var n,r,a,i,o,s,c,u,h,f,p,g,d,m,v,y,x,w,b,N,E,P,L=e.tagName.toLowerCase(),M=.552284749831;return"path"!==L&&e.getBBox?(s=function(e,t){var n,r=document.createElementNS("http://www.w3.org/2000/svg","path"),a=[].slice.call(e.attributes),i=a.length;for(t=","+t+",";--i>-1;)n=a[i].nodeName.toLowerCase(),t.indexOf(","+n+",")<0&&r.setAttributeNS(null,n,a[i].nodeValue);return r}(e,"x,y,width,height,cx,cy,rx,ry,r,x1,x2,y1,y2,points"),P=function(e,t){for(var n=t?t.split(","):[],r={},a=n.length;--a>-1;)r[n[a]]=+e.getAttribute(n[a])||0;return r}(e,T[L]),"rect"===L?(i=P.rx,o=P.ry||i,r=P.x,a=P.y,f=P.width-2*i,p=P.height-2*o,n=i||o?"M"+(y=(m=(d=r+i)+f)+i)+","+(w=a+o)+" V"+(b=w+p)+" C"+[y,N=b+o*M,v=m+i*M,E=b+o,m,E,m-(m-d)/3,E,d+(m-d)/3,E,d,E,g=r+i*(1-M),E,r,N,r,b,r,b-(b-w)/3,r,w+(b-w)/3,r,w,r,x=a+o*(1-M),g,a,d,a,d+(m-d)/3,a,m-(m-d)/3,a,m,a,v,a,y,x,y,w].join(",")+"z":"M"+(r+f)+","+a+" v"+p+" h"+-f+" v"+-p+" h"+f+"z"):"circle"===L||"ellipse"===L?("circle"===L?u=(i=o=P.r)*M:(i=P.rx,u=(o=P.ry)*M),n="M"+((r=P.cx)+i)+","+(a=P.cy)+" C"+[r+i,a+u,r+(c=i*M),a+o,r,a+o,r-c,a+o,r-i,a+u,r-i,a,r-i,a-u,r-c,a-o,r,a-o,r+c,a-o,r+i,a-u,r+i,a].join(",")+"z"):"line"===L?n="M"+P.x1+","+P.y1+" L"+P.x2+","+P.y2:"polyline"!==L&&"polygon"!==L||(n="M"+(r=(h=(e.getAttribute("points")+"").match(l)||[]).shift())+","+(a=h.shift())+" L"+h.join(","),"polygon"===L&&(n+=","+r+","+a+"z")),s.setAttribute("d",q(s._gsRawPath=D(n))),t&&e.parentNode&&(e.parentNode.insertBefore(s,e),e.parentNode.removeChild(e)),s):e}function I(e,t,n){var r,a=e[t],i=e[t+2],o=e[t+4];return a+=(i-a)*n,a+=((i+=(o-i)*n)-a)*n,r=i+(o+(e[t+6]-o)*n-i)*n-a,a=e[t+1],a+=((i=e[t+3])-a)*n,a+=((i+=((o=e[t+5])-i)*n)-a)*n,P(m(i+(o+(e[t+7]-o)*n-i)*n-a,r)*h)}function O(e,t,n){n=void 0===n?1:L(n)||0,t=L(t)||0;var r=Math.max(0,~~(g(n-t)-1e-8)),a=function(e){for(var t=[],n=0;n<e.length;n++)t[n]=C(e[n],e[n].slice(0));return C(e,t)}(e);if(t>n&&(t=1-t,n=1-n,function(e,t){var n=e.length;for(t||e.reverse();n--;)e[n].reversed||_(e[n])}(a),a.totalLength=0),t<0||n<0){var i=Math.abs(~~Math.min(t,n))+1;t+=i,n+=i}a.totalLength||R(a);var o,l,s,c,u,h,f,p,d=n>1,m=j(a,t,w,!0),v=j(a,n,b),y=v.segment,x=m.segment,N=v.segIndex,E=m.segIndex,P=v.i,A=m.i,T=E===N,k=P===A&&T;if(d||r){for(o=N<E||T&&P<A||k&&v.t<m.t,M(a,E,A,m.t)&&(E++,o||(N++,k?(v.t=(v.t-m.t)/(1-m.t),P=0):T&&(P-=A))),1-(n-t)<1e-5?N=E-1:!v.t&&N?N--:M(a,N,P,v.t)&&o&&E++,1===m.t&&(E=(E+1)%a.length),u=[],f=1+(h=a.length)*r,p=E,f+=(h-E+N)%h,c=0;c<f;c++)S(u,a[p++%h]);a=u}else if(s=1===v.t?6:V(y,P,v.t),t!==n)for(l=V(x,A,k?m.t/v.t:m.t),T&&(s+=l),y.splice(P+s+2),(l||A)&&x.splice(0,A+l),c=a.length;c--;)(c<E||c>N)&&a.splice(c,1);else y.angle=I(y,P+s,0),m=y[P+=s],v=y[P+1],y.length=y.totalLength=0,y.totalPoints=a.totalPoints=8,y.push(m,v,m,v,m,v,m,v);return a.totalLength=0,a}function B(e,t,n){t=t||0,e.samples||(e.samples=[],e.lookup=[]);var r,a,i,o,l,s,c,u,h,f,p,m,y,x,w,b,N,E=~~e.resolution||12,P=1/E,L=n?t+6*n+1:e.length,M=e[t],C=e[t+1],S=t?t/6*E:0,A=e.samples,_=e.lookup,T=(t?e.minLength:v)||v,k=A[S+n*E-1],I=t?A[S-1]:0;for(A.length=_.length=0,a=t+2;a<L;a+=6){if(i=e[a+4]-M,o=e[a+2]-M,l=e[a]-M,u=e[a+5]-C,h=e[a+3]-C,f=e[a+1]-C,s=c=p=m=0,g(i)<1e-5&&g(u)<1e-5&&g(l)+g(f)<1e-5)e.length>8&&(e.splice(a,6),a-=6,L-=6);else for(r=1;r<=E;r++)s=c-(c=((x=P*r)*x*i+3*(y=1-x)*(x*o+y*l))*x),p=m-(m=(x*x*u+3*y*(x*h+y*f))*x),(b=d(p*p+s*s))<T&&(T=b),I+=b,A[S++]=I;M+=i,C+=u}if(k)for(k-=I;S<A.length;S++)A[S]+=k;if(A.length&&T)for(e.totalLength=N=A[A.length-1]||0,e.minLength=T,b=w=0,r=0;r<N;r+=T)_[b++]=A[w]<r?++w:w;else e.totalLength=A[0]=0;return t?I-A[t/2-1]:I}function R(e,t){var n,r,a;for(a=n=r=0;a<e.length;a++)e[a].resolution=~~t||12,r+=e[a].length,n+=B(e[a]);return e.totalPoints=r,e.totalLength=n,e}function V(e,t,n){if(n<=0||n>=1)return 0;var r=e[t],a=e[t+1],i=e[t+2],o=e[t+3],l=e[t+4],s=e[t+5],c=r+(i-r)*n,u=i+(l-i)*n,h=a+(o-a)*n,f=o+(s-o)*n,p=c+(u-c)*n,g=h+(f-h)*n,d=l+(e[t+6]-l)*n,m=s+(e[t+7]-s)*n;return u+=(d-u)*n,f+=(m-f)*n,e.splice(t+2,4,P(c),P(h),P(p),P(g),P(p+(u-p)*n),P(g+(f-g)*n),P(u),P(f),P(d),P(m)),e.samples&&e.samples.splice(t/6*e.resolution|0,0,0,0,0,0,0,0),6}function j(e,t,n,r){n=n||{},e.totalLength||R(e),(t<0||t>1)&&(t=E(t));var a,i,o,l,s,c,u,h=0,f=e[0];if(t)if(1===t)u=1,c=(f=e[h=e.length-1]).length-8;else{if(e.length>1){for(o=e.totalLength*t,s=c=0;(s+=e[c++].totalLength)<o;)h=c;t=(o-(l=s-(f=e[h]).totalLength))/(s-l)||0}a=f.samples,i=f.resolution,o=f.totalLength*t,l=(c=f.lookup[~~(o/f.minLength)]||0)?a[c-1]:0,(s=a[c])<o&&(l=s,s=a[++c]),u=1/i*((o-l)/(s-l)+c%i),c=6*~~(c/i),r&&1===u&&(c+6<f.length?(c+=6,u=0):h+1<e.length&&(c=u=0,f=e[++h]))}else u=c=h=0,f=e[0];return n.t=u,n.i=c,n.path=e,n.segment=f,n.segIndex=h,n}function z(e,t,n,r){var a,i,o,l,s,c,u,h,f,p=e[0],g=r||{};if((t<0||t>1)&&(t=E(t)),e.length>1){for(o=e.totalLength*t,s=c=0;(s+=e[c++].totalLength)<o;)p=e[c];t=(o-(l=s-p.totalLength))/(s-l)||0}return a=p.samples,i=p.resolution,o=p.totalLength*t,l=(c=p.lookup[t<1?~~(o/p.minLength):p.lookup.length-1]||0)?a[c-1]:0,(s=a[c])<o&&(l=s,s=a[++c]),f=1-(u=1/i*((o-l)/(s-l)+c%i)||0),h=p[c=6*~~(c/i)],g.x=P((u*u*(p[c+6]-h)+3*f*(u*(p[c+4]-h)+f*(p[c+2]-h)))*u+h),g.y=P((u*u*(p[c+7]-(h=p[c+1]))+3*f*(u*(p[c+5]-h)+f*(p[c+3]-h)))*u+h),n&&(g.angle=p.totalLength?I(p,c,u>=1?1-1e-9:u||1e-9):p.angle||0),g}function X(e,t,n,r,a,i,o){for(var l,s,c,u,h,f=e.length;--f>-1;)for(s=(l=e[f]).length,c=0;c<s;c+=2)u=l[c],h=l[c+1],l[c]=u*t+h*r+i,l[c+1]=u*n+h*a+o;return e._dirty=1,e}function Y(e,t,n,r,a,i,o,l,s){if(e!==l||t!==s){n=g(n),r=g(r);var c=a%360*u,h=p(c),m=f(c),v=Math.PI,y=2*v,x=(e-l)/2,w=(t-s)/2,b=h*x+m*w,N=-m*x+h*w,E=b*b,P=N*N,L=E/(n*n)+P/(r*r);L>1&&(n=d(L)*n,r=d(L)*r);var M=n*n,C=r*r,S=(M*C-M*P-C*E)/(M*P+C*E);S<0&&(S=0);var A=(i===o?-1:1)*d(S),_=A*(n*N/r),T=A*(-r*b/n),k=(e+l)/2+(h*_-m*T),I=(t+s)/2+(m*_+h*T),O=(b-_)/n,B=(N-T)/r,R=(-b-_)/n,V=(-N-T)/r,j=O*O+B*B,z=(B<0?-1:1)*Math.acos(O/d(j)),X=(O*V-B*R<0?-1:1)*Math.acos((O*R+B*V)/d(j*(R*R+V*V)));isNaN(X)&&(X=v),!o&&X>0?X-=y:o&&X<0&&(X+=y),z%=y,X%=y;var Y,D=Math.ceil(g(X)/(y/4)),G=[],U=X/D,q=4/3*f(U/2)/(1+p(U/2)),W=h*n,Z=m*n,F=m*-r,H=h*r;for(Y=0;Y<D;Y++)b=p(a=z+Y*U),N=f(a),O=p(a+=U),B=f(a),G.push(b-q*N,N+q*b,O+q*B,B-q*O,O,B);for(Y=0;Y<G.length;Y+=2)b=G[Y],N=G[Y+1],G[Y]=b*W+N*F+k,G[Y+1]=b*Z+N*H+I;return G[Y-2]=l,G[Y-1]=s,G}}function D(e){var t,n,r,a,i,l,c,u,h,f,p,d,m,v,y,x=(e+"").replace(s,(function(e){var t=+e;return t<1e-4&&t>-1e-4?0:t})).match(o)||[],w=[],b=0,N=0,E=2/3,P=x.length,L=0,M="ERROR: malformed path: "+e,C=function(e,t,n,r){f=(n-e)/3,p=(r-t)/3,c.push(e+f,t+p,n-f,r-p,n,r)};if(!e||!isNaN(x[0])||isNaN(x[1]))return console.log(M),w;for(t=0;t<P;t++)if(m=i,isNaN(x[t])?l=(i=x[t].toUpperCase())!==x[t]:t--,r=+x[t+1],a=+x[t+2],l&&(r+=b,a+=N),t||(u=r,h=a),"M"===i)c&&(c.length<8?w.length-=1:L+=c.length),b=u=r,N=h=a,c=[r,a],w.push(c),t+=2,i="L";else if("C"===i)c||(c=[0,0]),l||(b=N=0),c.push(r,a,b+1*x[t+3],N+1*x[t+4],b+=1*x[t+5],N+=1*x[t+6]),t+=6;else if("S"===i)f=b,p=N,"C"!==m&&"S"!==m||(f+=b-c[c.length-4],p+=N-c[c.length-3]),l||(b=N=0),c.push(f,p,r,a,b+=1*x[t+3],N+=1*x[t+4]),t+=4;else if("Q"===i)f=b+(r-b)*E,p=N+(a-N)*E,l||(b=N=0),b+=1*x[t+3],N+=1*x[t+4],c.push(f,p,b+(r-b)*E,N+(a-N)*E,b,N),t+=4;else if("T"===i)f=b-c[c.length-4],p=N-c[c.length-3],c.push(b+f,N+p,r+(b+1.5*f-r)*E,a+(N+1.5*p-a)*E,b=r,N=a),t+=2;else if("H"===i)C(b,N,b=r,N),t+=1;else if("V"===i)C(b,N,b,N=r+(l?N-b:0)),t+=1;else if("L"===i||"Z"===i)"Z"===i&&(r=u,a=h,c.closed=!0),("L"===i||g(b-r)>.5||g(N-a)>.5)&&(C(b,N,r,a),"L"===i&&(t+=2)),b=r,N=a;else if("A"===i){if(v=x[t+4],y=x[t+5],f=x[t+6],p=x[t+7],n=7,v.length>1&&(v.length<3?(p=f,f=y,n--):(p=y,f=v.substr(2),n-=2),y=v.charAt(1),v=v.charAt(0)),d=Y(b,N,+x[t+1],+x[t+2],+x[t+3],+v,+y,(l?b:0)+1*f,(l?N:0)+1*p),t+=n,d)for(n=0;n<d.length;n++)c.push(d[n]);b=c[c.length-2],N=c[c.length-1]}else console.log(M);return(t=c.length)<6?(w.pop(),t=0):c[0]===c[t-2]&&c[1]===c[t-1]&&(c.closed=!0),w.totalPoints=L+t,w}function G(e,t){void 0===t&&(t=1);for(var n=e[0],r=0,a=[n,r],i=2;i<e.length;i+=2)a.push(n,r,e[i],r=(e[i]-n)*t/2,n=e[i],-r);return a}function U(e,t,n){g(e[0]-e[2])<1e-4&&g(e[1]-e[3])<1e-4&&(e=e.slice(2));var r,a,i,o,l,s,c,u,h,v,y,x,w,b,N=e.length-2,E=+e[0],L=+e[1],M=+e[2],C=+e[3],S=[E,L,E,L],A=M-E,_=C-L,T=Math.abs(e[N]-E)<.001&&Math.abs(e[N+1]-L)<.001;for(isNaN(n)&&(n=Math.PI/10),T&&(e.push(M,C),M=E,C=L,E=e[N-2],L=e[N-1],e.unshift(E,L),N+=4),t=t||0===t?+t:1,l=2;l<N;l+=2)r=E,a=L,E=M,L=C,M=+e[l+2],C=+e[l+3],E===M&&L===C||(x=(s=A)*s+(u=_)*u,w=(A=M-E)*A+(_=C-L)*_,b=(c=M-r)*c+(h=C-a)*h,y=(i=Math.acos((x+w-b)/d(4*x*w)))/Math.PI*t,v=d(x)*y,y*=d(w),E===r&&L===a||(i>n?(o=m(h,c),S.push(P(E-p(o)*v),P(L-f(o)*v),P(E),P(L),P(E+p(o)*y),P(L+f(o)*y))):(o=m(u,s),S.push(P(E-p(o)*v),P(L-f(o)*v)),o=m(_,A),S.push(P(E),P(L),P(E+p(o)*y),P(L+f(o)*y)))));return E!==M||L!==C||S.length<4?S.push(P(M),P(C),P(M),P(C)):S.length-=2,T&&(S.splice(0,6),S.length=S.length-6),S}function q(e){x(e[0])&&(e=[e]);var t,n,r,a,i="",o=e.length;for(n=0;n<o;n++){for(a=e[n],i+="M"+P(a[0])+","+P(a[1])+" C",t=a.length,r=2;r<t;r++)i+=P(a[r++])+","+P(a[r++])+" "+P(a[r++])+","+P(a[r++])+" "+P(a[r++])+","+P(a[r])+" ";a.closed&&(i+="z")}return i}var W,Z,F,H,K,Q,$,J,ee="transform",te=ee+"Origin",ne=function(e){var t=e.ownerDocument||e;!(ee in e.style)&&"msTransform"in e.style&&(te=(ee="msTransform")+"Origin");for(;t.parentNode&&(t=t.parentNode););if(Z=window,$=new ue,t){W=t,F=t.documentElement,H=t.body;var n=t.createElement("div"),r=t.createElement("div");H.appendChild(n),n.appendChild(r),n.style.position="static",n.style[ee]="translate3d(0,0,1px)",J=r.offsetParent!==n,H.removeChild(n)}return t},re=[],ae=[],ie=function(e){return e.ownerSVGElement||("svg"===(e.tagName+"").toLowerCase()?e:null)},oe=function e(t){return"fixed"===Z.getComputedStyle(t).position||((t=t.parentNode)&&1===t.nodeType?e(t):void 0)},le=function e(t,n){if(t.parentNode&&(W||ne(t))){var r=ie(t),a=r?r.getAttribute("xmlns")||"http://www.w3.org/2000/svg":"http://www.w3.org/1999/xhtml",i=r?n?"rect":"g":"div",o=2!==n?0:100,l=3===n?100:0,s="position:absolute;display:block;pointer-events:none;margin:0;padding:0;",c=W.createElementNS?W.createElementNS(a.replace(/^https/,"http"),i):W.createElement(i);return n&&(r?(Q||(Q=e(t)),c.setAttribute("width",.01),c.setAttribute("height",.01),c.setAttribute("transform","translate("+o+","+l+")"),Q.appendChild(c)):(K||((K=e(t)).style.cssText=s),c.style.cssText=s+"width:0.1px;height:0.1px;top:"+l+"px;left:"+o+"px",K.appendChild(c))),c}throw"Need document and parent."},se=function(e,t){var n,r,a,i,o,l,s=ie(e),c=e===s,u=s?re:ae,h=e.parentNode;if(e===Z)return e;if(u.length||u.push(le(e,1),le(e,2),le(e,3)),n=s?Q:K,s)a=c?{x:0,y:0}:e.getBBox(),(r=e.transform?e.transform.baseVal:{}).numberOfItems?(i=(r=r.numberOfItems>1?function(e){for(var t=new ue,n=0;n<e.numberOfItems;n++)t.multiply(e.getItem(n).matrix);return t}(r):r.getItem(0).matrix).a*a.x+r.c*a.y,o=r.b*a.x+r.d*a.y):(r=$,i=a.x,o=a.y),t&&"g"===e.tagName.toLowerCase()&&(i=o=0),n.setAttribute("transform","matrix("+r.a+","+r.b+","+r.c+","+r.d+","+(r.e+i)+","+(r.f+o)+")"),(c?s:h).appendChild(n);else{if(i=o=0,J)for(r=e.offsetParent,a=e;a&&(a=a.parentNode)&&a!==r&&a.parentNode;)(Z.getComputedStyle(a)[ee]+"").length>4&&(i=a.offsetLeft,o=a.offsetTop,a=0);if("absolute"!==(l=Z.getComputedStyle(e)).position)for(r=e.offsetParent;h!==r;)i+=h.scrollLeft||0,o+=h.scrollTop||0,h=h.parentNode;(a=n.style).top=e.offsetTop-o+"px",a.left=e.offsetLeft-i+"px",a[ee]=l[ee],a[te]=l[te],a.position="fixed"===l.position?"fixed":"absolute",e.parentNode.appendChild(n)}return n},ce=function(e,t,n,r,a,i,o){return e.a=t,e.b=n,e.c=r,e.d=a,e.e=i,e.f=o,e},ue=function(){function e(e,t,n,r,a,i){void 0===e&&(e=1),void 0===t&&(t=0),void 0===n&&(n=0),void 0===r&&(r=1),void 0===a&&(a=0),void 0===i&&(i=0),ce(this,e,t,n,r,a,i)}var t=e.prototype;return t.inverse=function(){var e=this.a,t=this.b,n=this.c,r=this.d,a=this.e,i=this.f,o=e*r-t*n||1e-10;return ce(this,r/o,-t/o,-n/o,e/o,(n*i-r*a)/o,-(e*i-t*a)/o)},t.multiply=function(e){var t=this.a,n=this.b,r=this.c,a=this.d,i=this.e,o=this.f,l=e.a,s=e.c,c=e.b,u=e.d,h=e.e,f=e.f;return ce(this,l*t+c*r,l*n+c*a,s*t+u*r,s*n+u*a,i+h*t+f*r,o+h*n+f*a)},t.clone=function(){return new e(this.a,this.b,this.c,this.d,this.e,this.f)},t.equals=function(e){var t=this.a,n=this.b,r=this.c,a=this.d,i=this.e,o=this.f;return t===e.a&&n===e.b&&r===e.c&&a===e.d&&i===e.e&&o===e.f},t.apply=function(e,t){void 0===t&&(t={});var n=e.x,r=e.y,a=this.a,i=this.b,o=this.c,l=this.d,s=this.e,c=this.f;return t.x=n*a+r*o+s||0,t.y=n*i+r*l+c||0,t},e}();function he(e,t,n,r){if(!e||!e.parentNode||(W||ne(e)).documentElement===e)return new ue;var a=function(e){for(var t,n;e&&e!==H;)(n=e._gsap)&&n.uncache&&n.get(e,"x"),n&&!n.scaleX&&!n.scaleY&&n.renderTransform&&(n.scaleX=n.scaleY=1e-4,n.renderTransform(1,n),t?t.push(n):t=[n]),e=e.parentNode;return t}(e),i=ie(e)?re:ae,o=se(e,n),l=i[0].getBoundingClientRect(),s=i[1].getBoundingClientRect(),c=i[2].getBoundingClientRect(),u=o.parentNode,h=!r&&oe(e),f=new ue((s.left-l.left)/100,(s.top-l.top)/100,(c.left-l.left)/100,(c.top-l.top)/100,l.left+(h?0:Z.pageXOffset||W.scrollLeft||F.scrollLeft||H.scrollLeft||0),l.top+(h?0:Z.pageYOffset||W.scrollTop||F.scrollTop||H.scrollTop||0));if(u.removeChild(o),a)for(l=a.length;l--;)(s=a[l]).scaleX=s.scaleY=0,s.renderTransform(1,s);return t?f.inverse():f}var fe,pe,ge,de,me="x,translateX,left,marginLeft,xPercent".split(","),ve="y,translateY,top,marginTop,yPercent".split(","),ye=Math.PI/180,xe=function(e,t,n,r){for(var a=t.length,i=2===r?0:r,o=0;o<a;o++)e[i]=parseFloat(t[o][n]),2===r&&(e[i+1]=0),i+=2;return e},we=function(e,t,n){return parseFloat(e._gsap.get(e,t,n||"px"))||0},be=function(e){var t,n=e[0],r=e[1];for(t=2;t<e.length;t+=2)n=e[t]+=n,r=e[t+1]+=r},Ne=function(e,t,n,r,a,i,o,l,s){"cubic"===o.type?t=[t]:(t.unshift(we(n,r,l),a?we(n,a,s):0),o.relative&&be(t),t=[(a?U:G)(t,o.curviness)]);return t=i(Ce(t,n,o)),Se(e,n,r,t,"x",l),a&&Se(e,n,a,t,"y",s),R(t,o.resolution||(0===o.curviness?20:12))},Ee=function(e){return e},Pe=/[-+\.]*\d+[\.e\-\+]*\d*[e\-\+]*\d*/g,Le=function(e,t,n){var r,a,i,o=he(e);return"svg"===(e.tagName+"").toLowerCase()?(a=(r=e.viewBox.baseVal).x,i=r.y,r.width||(r={width:+e.getAttribute("width"),height:+e.getAttribute("height")})):(r=t&&e.getBBox&&e.getBBox(),a=i=0),t&&"auto"!==t&&(a+=t.push?t[0]*(r?r.width:e.offsetWidth||0):t.x,i+=t.push?t[1]*(r?r.height:e.offsetHeight||0):t.y),n.apply(a||i?o.apply({x:a,y:i}):{x:o.e,y:o.f})},Me=function(e,t,n,r){var a,i=he(e.parentNode,!0,!0),o=i.clone().multiply(he(t)),l=Le(e,n,i),s=Le(t,r,i),c=s.x,u=s.y;return o.e=o.f=0,"auto"===r&&t.getTotalLength&&"path"===t.tagName.toLowerCase()&&(a=t.getAttribute("d").match(Pe)||[],c+=(a=o.apply({x:+a[0],y:+a[1]})).x,u+=a.y),(a||t.getBBox&&e.getBBox&&t.ownerSVGElement===e.ownerSVGElement)&&(c-=(a=o.apply(t.getBBox())).x,u-=a.y),o.e=c-l.x,o.f=u-l.y,o},Ce=function(e,t,n){var r,a,i,o=n.align,l=n.matrix,s=n.offsetX,c=n.offsetY,u=n.alignOrigin,h=e[0][0],f=e[0][1],p=we(t,"x"),g=we(t,"y");return e&&e.length?(o&&("self"===o||(r=de(o)[0]||t)===t?X(e,1,0,0,1,p-h,g-f):(u&&!1!==u[2]?fe.set(t,{transformOrigin:100*u[0]+"% "+100*u[1]+"%"}):u=[we(t,"xPercent")/-100,we(t,"yPercent")/-100],i=(a=Me(t,r,u,"auto")).apply({x:h,y:f}),X(e,a.a,a.b,a.c,a.d,p+a.e-(i.x-a.e),g+a.f-(i.y-a.f)))),l?X(e,l.a,l.b,l.c,l.d,l.e,l.f):(s||c)&&X(e,1,0,0,1,s||0,c||0),e):A("M0,0L0,0")},Se=function(e,t,n,r,a,i){var o=t._gsap,l=o.harness,s=l&&l.aliases&&l.aliases[n],c=s&&s.indexOf(",")<0?s:n,u=e._pt=new pe(e._pt,t,c,0,0,Ee,0,o.set(t,c,e));u.u=ge(o.get(t,c,i))||0,u.path=r,u.pp=a,e._props.push(c)},Ae={version:"3.6.0",name:"motionPath",register:function(e,t,n){ge=(fe=e).utils.getUnit,de=fe.utils.toArray,pe=n},init:function(e,t){if(!fe)return console.warn("Please gsap.registerPlugin(MotionPathPlugin)"),!1;"object"==typeof t&&!t.style&&t.path||(t={path:t});var n,r,a,i,o=[],l=t,s=l.path,c=l.autoRotate,u=l.unitX,h=l.unitY,f=l.x,p=l.y,g=s[0],d=(a=t.start,i="end"in t?t.end:1,function(e){return a||1!==i?O(e,a,i):e});if(this.rawPaths=o,this.target=e,(this.rotate=c||0===c)&&(this.rOffset=parseFloat(c)||0,this.radians=!!t.useRadians,this.rProp=t.rotation||"rotation",this.rSet=e._gsap.set(e,this.rProp,this),this.ru=ge(e._gsap.get(e,this.rProp))||0),Array.isArray(s)&&!("closed"in s)&&"number"!=typeof g){for(r in g)!f&&~me.indexOf(r)?f=r:!p&&~ve.indexOf(r)&&(p=r);for(r in f&&p?o.push(Ne(this,xe(xe([],s,f,0),s,p,1),e,f,p,d,t,u||ge(s[0][f]),h||ge(s[0][p]))):f=p=0,g)r!==f&&r!==p&&o.push(Ne(this,xe([],s,r,2),e,r,0,d,t,ge(s[0][r])))}else R(n=d(Ce(A(t.path),e,t)),t.resolution),o.push(n),Se(this,e,t.x||"x",n,"x",t.unitX||"px"),Se(this,e,t.y||"y",n,"y",t.unitY||"px")},render:function(e,t){var n=t.rawPaths,r=n.length,a=t._pt;for(e>1?e=1:e<0&&(e=0);r--;)z(n[r],e,!r&&t.rotate,n[r]);for(;a;)a.set(a.t,a.p,a.path[a.pp]+a.u,a.d,e),a=a._next;t.rotate&&t.rSet(t.target,t.rProp,n[0].angle*(t.radians?ye:1)+t.rOffset+t.ru,t,e)},getLength:function(e){return R(A(e)).totalLength},sliceRawPath:O,getRawPath:A,pointsToSegment:U,stringToRawPath:D,rawPathToString:q,transformRawPath:X,getGlobalMatrix:he,getPositionOnPath:z,cacheRawPathMeasurements:R,convertToPath:function(e,t){return de(e).map((function(e){return k(e,!1!==t)}))},convertCoordinates:function(e,t,n){var r=he(t,!0,!0).multiply(he(e));return n?r.apply(n):r},getAlignMatrix:Me,getRelativePosition:function(e,t,n,r){var a=Me(e,t,n,r);return{x:a.e,y:a.f}},arrayToRawPath:function(e,t){var n=xe(xe([],e,(t=t||{}).x||"x",0),e,t.y||"y",1);return t.relative&&be(n),["cubic"===t.type?n:U(n,t.curviness)]}};(fe||"undefined"!=typeof window&&(fe=window.gsap)&&fe.registerPlugin&&fe)&&fe.registerPlugin(Ae);var _e=n(5072),Te=n(1133),ke=n(8952);function Ie(e,t){var n;if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(n=function(e,t){if(!e)return;if("string"==typeof e)return Oe(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Oe(e,t)}(e))||t&&e&&"number"==typeof e.length){n&&(e=n);var r=0;return function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}return(n=e[Symbol.iterator]()).next.bind(n)}function Oe(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function Be(e){var t=e.Svg,n=e.collectedData,i=e.prefix,o=i||"test_svg",l=[{id:"uno",className:"unoa"},{id:"due",className:"duea"},{id:"tre",className:"trea"}],s=(0,r.useRef)();return(0,r.useLayoutEffect)((function(){for(var e,t=function(){var t=e.value,n=t.id,r=t.className;document.getElementById((i||"test_svg")+"__"+n).addEventListener("click",(function(){var e=document.getElementById(n);e.classList.remove(r),e.classList.add(r+"Post")}))},n=Ie(l);!(e=n()).done;)t();var r=a.p8.timeline({scrollTrigger:{trigger:"#panels-container",start:"top top",pin:!0,scrub:0,end:function(){return"+="+(s.current.offsetWidth-innerWidth)}}});r.to("#"+o+"__simuove",{motionPath:{path:"#"+o+"__path",align:"#"+o+"__path",alignOrigin:[.5,.9]}},0),r.to("#fuck",{xPercent:-66,ease:"none"},0)}),[t]),r.createElement("div",null,r.createElement("section",{id:"panels",className:"bg-primary bigText"},r.createElement("div",{id:"panels-container",style:{width:"300%"},ref:s},r.createElement("div",{className:"panel"},r.createElement(t,{className:"position-relative",id:"fuck"}),n.map((function(e,t){var n=e.label,a=e.description;return r.createElement("div",{id:l[t].id,className:l[t].className,key:n},r.createElement("div",{style:{width:"30%"},className:"box"},r.createElement("div",{style:{padding:"15px"}},r.createElement("p",null,n,":"),r.createElement("p",null,a))))}))))),r.createElement("section",null,r.createElement(Te.default,null)))}function Re(){var e=(0,r.useState)(),t=e[0],n=e[1],a=0;if("undefined"!=typeof window){var i=new URLSearchParams(window.location.search);a=void 0!==i.get("selected")?i.get("selected"):0}var o=ke.Z[a],l=o.options,s=o.Icon;return r.createElement("div",null,r.createElement(_e.Z,{className:"sticky-top"}),r.createElement("main",{id:"content",className:"site-content",role:"main"},r.createElement("section",{id:"intro",className:"full-screen  "},r.createElement("div",{className:"container-fluid"},r.createElement("div",{className:"row justify-content-center align-items-center",style:{height:"90vh"}},r.createElement("div",{className:"col-6"},r.createElement(s,{style:{height:"40vh"},className:"mx-auto w-100"})),r.createElement("div",{className:"col-6"},r.createElement("p",{className:"bigText display-4"},"Choose one option to",r.createElement("br",null),"interact with the device"),l.map((function(e,t){var a=e.label,i=e.Svg,o=e.collectedData,l=e.prefix;return r.createElement("div",{className:"row pb-3",key:t},r.createElement("div",{className:"col-5"},r.createElement("a",{href:"#discover-data",onClick:function(){return n({label:a,Svg:i,collectedData:o,prefix:l})}},r.createElement("button",{className:"display-7"},a))))})))))),r.createElement("div",{className:"w-100",id:"discover-data"}),t&&r.createElement(Be,{Svg:t.Svg,collectedData:t.collectedData,prefix:t.prefix})))}a.p8.registerPlugin(i.i),a.p8.registerPlugin(Ae)}}]);
//# sourceMappingURL=component---src-pages-start-js-c69bfb97b72103378e68.js.map