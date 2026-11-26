function Qp(i,e){for(var t=0;t<e.length;t++){const n=e[t];if(typeof n!="string"&&!Array.isArray(n)){for(const s in n)if(s!=="default"&&!(s in i)){const r=Object.getOwnPropertyDescriptor(n,s);r&&Object.defineProperty(i,s,r.get?r:{enumerable:!0,get:()=>n[s]})}}}return Object.freeze(Object.defineProperty(i,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function t(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(s){if(s.ep)return;s.ep=!0;const r=t(s);fetch(s.href,r)}})();const Vl="181",e0=0,wh=1,t0=2,bd=1,Ed=2,mi=3,Hi=0,xn=1,jt=2,si=0,Xs=1,Ya=2,Ph=3,Lh=4,n0=5,rs=100,i0=101,s0=102,r0=103,a0=104,o0=200,c0=201,l0=202,h0=203,wc=204,Pc=205,u0=206,d0=207,f0=208,p0=209,m0=210,x0=211,g0=212,_0=213,v0=214,Lc=0,Ic=1,Dc=2,js=3,Uc=4,Nc=5,Oc=6,Fc=7,Td=0,y0=1,S0=2,ki=0,Cd=1,Ad=2,Rd=3,Hl=4,wd=5,Pd=6,Ld=7,Id=300,Ks=301,Js=302,Bc=303,kc=304,fo=306,Xn=1e3,gi=1001,zc=1002,bn=1003,M0=1004,na=1005,Ln=1006,wo=1007,hs=1008,ai=1009,Dd=1010,Ud=1011,Lr=1012,Wl=1013,ds=1014,_i=1015,ri=1016,Xl=1017,$l=1018,Ir=1020,Nd=35902,Od=35899,Fd=1021,Bd=1022,$n=1023,Dr=1026,Ur=1027,kd=1028,ql=1029,Yl=1030,jl=1031,Kl=1033,Ia=33776,Da=33777,Ua=33778,Na=33779,Gc=35840,Vc=35841,Hc=35842,Wc=35843,Xc=36196,$c=37492,qc=37496,Yc=37808,jc=37809,Kc=37810,Jc=37811,Zc=37812,Qc=37813,el=37814,tl=37815,nl=37816,il=37817,sl=37818,rl=37819,al=37820,ol=37821,cl=36492,ll=36494,hl=36495,ul=36283,dl=36284,fl=36285,pl=36286,b0=3200,E0=3201,zd=0,T0=1,Ni="",Wt="srgb",Zs="srgb-linear",ja="linear",dt="srgb",Rs=7680,Ih=519,C0=512,A0=513,R0=514,Gd=515,w0=516,P0=517,L0=518,I0=519,Dh=35044,Uh="300 es",ii=2e3,Ka=2001;function Vd(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function Ja(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function D0(){const i=Ja("canvas");return i.style.display="block",i}const Nh={};function Oh(...i){const e="THREE."+i.shift();console.log(e,...i)}function je(...i){const e="THREE."+i.shift();console.warn(e,...i)}function Rt(...i){const e="THREE."+i.shift();console.error(e,...i)}function Nr(...i){const e=i.join(" ");e in Nh||(Nh[e]=!0,je(...i))}function U0(i,e,t){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}class sr{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){const n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){const n=this._listeners;if(n===void 0)return;const s=n[e];if(s!==void 0){const r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const n=t[e.type];if(n!==void 0){e.target=this;const s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,e);e.target=null}}}const Xt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Po=Math.PI/180,Za=180/Math.PI;function rr(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Xt[i&255]+Xt[i>>8&255]+Xt[i>>16&255]+Xt[i>>24&255]+"-"+Xt[e&255]+Xt[e>>8&255]+"-"+Xt[e>>16&15|64]+Xt[e>>24&255]+"-"+Xt[t&63|128]+Xt[t>>8&255]+"-"+Xt[t>>16&255]+Xt[t>>24&255]+Xt[n&255]+Xt[n>>8&255]+Xt[n>>16&255]+Xt[n>>24&255]).toLowerCase()}function tt(i,e,t){return Math.max(e,Math.min(t,i))}function N0(i,e){return(i%e+e)%e}function Lo(i,e,t){return(1-t)*i+t*e}function ur(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function un(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}class le{constructor(e=0,t=0){le.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=tt(this.x,e.x,t.x),this.y=tt(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=tt(this.x,e,t),this.y=tt(this.y,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(tt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(tt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*n-a*s+e.x,this.y=r*s+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class ar{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,a,o){let c=n[s+0],h=n[s+1],l=n[s+2],u=n[s+3],d=r[a+0],f=r[a+1],m=r[a+2],g=r[a+3];if(o<=0){e[t+0]=c,e[t+1]=h,e[t+2]=l,e[t+3]=u;return}if(o>=1){e[t+0]=d,e[t+1]=f,e[t+2]=m,e[t+3]=g;return}if(u!==g||c!==d||h!==f||l!==m){let x=c*d+h*f+l*m+u*g;x<0&&(d=-d,f=-f,m=-m,g=-g,x=-x);let p=1-o;if(x<.9995){const v=Math.acos(x),y=Math.sin(v);p=Math.sin(p*v)/y,o=Math.sin(o*v)/y,c=c*p+d*o,h=h*p+f*o,l=l*p+m*o,u=u*p+g*o}else{c=c*p+d*o,h=h*p+f*o,l=l*p+m*o,u=u*p+g*o;const v=1/Math.sqrt(c*c+h*h+l*l+u*u);c*=v,h*=v,l*=v,u*=v}}e[t]=c,e[t+1]=h,e[t+2]=l,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,s,r,a){const o=n[s],c=n[s+1],h=n[s+2],l=n[s+3],u=r[a],d=r[a+1],f=r[a+2],m=r[a+3];return e[t]=o*m+l*u+c*f-h*d,e[t+1]=c*m+l*d+h*u-o*f,e[t+2]=h*m+l*f+o*d-c*u,e[t+3]=l*m-o*u-c*d-h*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,s=e._y,r=e._z,a=e._order,o=Math.cos,c=Math.sin,h=o(n/2),l=o(s/2),u=o(r/2),d=c(n/2),f=c(s/2),m=c(r/2);switch(a){case"XYZ":this._x=d*l*u+h*f*m,this._y=h*f*u-d*l*m,this._z=h*l*m+d*f*u,this._w=h*l*u-d*f*m;break;case"YXZ":this._x=d*l*u+h*f*m,this._y=h*f*u-d*l*m,this._z=h*l*m-d*f*u,this._w=h*l*u+d*f*m;break;case"ZXY":this._x=d*l*u-h*f*m,this._y=h*f*u+d*l*m,this._z=h*l*m+d*f*u,this._w=h*l*u-d*f*m;break;case"ZYX":this._x=d*l*u-h*f*m,this._y=h*f*u+d*l*m,this._z=h*l*m-d*f*u,this._w=h*l*u+d*f*m;break;case"YZX":this._x=d*l*u+h*f*m,this._y=h*f*u+d*l*m,this._z=h*l*m-d*f*u,this._w=h*l*u-d*f*m;break;case"XZY":this._x=d*l*u-h*f*m,this._y=h*f*u-d*l*m,this._z=h*l*m+d*f*u,this._w=h*l*u+d*f*m;break;default:je("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],s=t[4],r=t[8],a=t[1],o=t[5],c=t[9],h=t[2],l=t[6],u=t[10],d=n+o+u;if(d>0){const f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(l-c)*f,this._y=(r-h)*f,this._z=(a-s)*f}else if(n>o&&n>u){const f=2*Math.sqrt(1+n-o-u);this._w=(l-c)/f,this._x=.25*f,this._y=(s+a)/f,this._z=(r+h)/f}else if(o>u){const f=2*Math.sqrt(1+o-n-u);this._w=(r-h)/f,this._x=(s+a)/f,this._y=.25*f,this._z=(c+l)/f}else{const f=2*Math.sqrt(1+u-n-o);this._w=(a-s)/f,this._x=(r+h)/f,this._y=(c+l)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(tt(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,s=e._y,r=e._z,a=e._w,o=t._x,c=t._y,h=t._z,l=t._w;return this._x=n*l+a*o+s*h-r*c,this._y=s*l+a*c+r*o-n*h,this._z=r*l+a*h+n*c-s*o,this._w=a*l-n*o-s*c-r*h,this._onChangeCallback(),this}slerp(e,t){if(t<=0)return this;if(t>=1)return this.copy(e);let n=e._x,s=e._y,r=e._z,a=e._w,o=this.dot(e);o<0&&(n=-n,s=-s,r=-r,a=-a,o=-o);let c=1-t;if(o<.9995){const h=Math.acos(o),l=Math.sin(h);c=Math.sin(c*h)/l,t=Math.sin(t*h)/l,this._x=this._x*c+n*t,this._y=this._y*c+s*t,this._z=this._z*c+r*t,this._w=this._w*c+a*t,this._onChangeCallback()}else this._x=this._x*c+n*t,this._y=this._y*c+s*t,this._z=this._z*c+r*t,this._w=this._w*c+a*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class I{constructor(e=0,t=0,n=0){I.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Fh.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Fh.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,s=this.z,r=e.elements,a=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(e){const t=this.x,n=this.y,s=this.z,r=e.x,a=e.y,o=e.z,c=e.w,h=2*(a*s-o*n),l=2*(o*t-r*s),u=2*(r*n-a*t);return this.x=t+c*h+a*u-o*l,this.y=n+c*l+o*h-r*u,this.z=s+c*u+r*l-a*h,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=tt(this.x,e.x,t.x),this.y=tt(this.y,e.y,t.y),this.z=tt(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=tt(this.x,e,t),this.y=tt(this.y,e,t),this.z=tt(this.z,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(tt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,s=e.y,r=e.z,a=t.x,o=t.y,c=t.z;return this.x=s*c-r*o,this.y=r*a-n*c,this.z=n*o-s*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Io.copy(this).projectOnVector(e),this.sub(Io)}reflect(e){return this.sub(Io.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(tt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Io=new I,Fh=new ar;class Je{constructor(e,t,n,s,r,a,o,c,h){Je.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,c,h)}set(e,t,n,s,r,a,o,c,h){const l=this.elements;return l[0]=e,l[1]=s,l[2]=o,l[3]=t,l[4]=r,l[5]=c,l[6]=n,l[7]=a,l[8]=h,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[3],c=n[6],h=n[1],l=n[4],u=n[7],d=n[2],f=n[5],m=n[8],g=s[0],x=s[3],p=s[6],v=s[1],y=s[4],b=s[7],R=s[2],T=s[5],w=s[8];return r[0]=a*g+o*v+c*R,r[3]=a*x+o*y+c*T,r[6]=a*p+o*b+c*w,r[1]=h*g+l*v+u*R,r[4]=h*x+l*y+u*T,r[7]=h*p+l*b+u*w,r[2]=d*g+f*v+m*R,r[5]=d*x+f*y+m*T,r[8]=d*p+f*b+m*w,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],c=e[6],h=e[7],l=e[8];return t*a*l-t*o*h-n*r*l+n*o*c+s*r*h-s*a*c}invert(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],c=e[6],h=e[7],l=e[8],u=l*a-o*h,d=o*c-l*r,f=h*r-a*c,m=t*u+n*d+s*f;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);const g=1/m;return e[0]=u*g,e[1]=(s*h-l*n)*g,e[2]=(o*n-s*a)*g,e[3]=d*g,e[4]=(l*t-s*c)*g,e[5]=(s*r-o*t)*g,e[6]=f*g,e[7]=(n*c-h*t)*g,e[8]=(a*t-n*r)*g,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,a,o){const c=Math.cos(r),h=Math.sin(r);return this.set(n*c,n*h,-n*(c*a+h*o)+a+e,-s*h,s*c,-s*(-h*a+c*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(Do.makeScale(e,t)),this}rotate(e){return this.premultiply(Do.makeRotation(-e)),this}translate(e,t){return this.premultiply(Do.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Do=new Je,Bh=new Je().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),kh=new Je().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function O0(){const i={enabled:!0,workingColorSpace:Zs,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===dt&&(s.r=bi(s.r),s.g=bi(s.g),s.b=bi(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===dt&&(s.r=$s(s.r),s.g=$s(s.g),s.b=$s(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Ni?ja:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return Nr("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return Nr("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(s,r)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[Zs]:{primaries:e,whitePoint:n,transfer:ja,toXYZ:Bh,fromXYZ:kh,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Wt},outputColorSpaceConfig:{drawingBufferColorSpace:Wt}},[Wt]:{primaries:e,whitePoint:n,transfer:dt,toXYZ:Bh,fromXYZ:kh,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Wt}}}),i}const ct=O0();function bi(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function $s(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let ws;class F0{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{ws===void 0&&(ws=Ja("canvas")),ws.width=e.width,ws.height=e.height;const s=ws.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),n=ws}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Ja("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=bi(r[a]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(bi(t[n]/255)*255):t[n]=bi(t[n]);return{data:t,width:e.width,height:e.height}}else return je("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let B0=0;class Jl{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:B0++}),this.uuid=rr(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(Uo(s[a].image)):r.push(Uo(s[a]))}else r=Uo(s);n.url=r}return t||(e.images[this.uuid]=n),n}}function Uo(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?F0.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(je("Texture: Unable to serialize Texture."),{})}let k0=0;const No=new I;class Jt extends sr{constructor(e=Jt.DEFAULT_IMAGE,t=Jt.DEFAULT_MAPPING,n=gi,s=gi,r=Ln,a=hs,o=$n,c=ai,h=Jt.DEFAULT_ANISOTROPY,l=Ni){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:k0++}),this.uuid=rr(),this.name="",this.source=new Jl(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=h,this.format=o,this.internalFormat=null,this.type=c,this.offset=new le(0,0),this.repeat=new le(1,1),this.center=new le(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Je,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=l,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(No).x}get height(){return this.source.getSize(No).y}get depth(){return this.source.getSize(No).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const n=e[t];if(n===void 0){je(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){je(`Texture.setValues(): property '${t}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Id)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Xn:e.x=e.x-Math.floor(e.x);break;case gi:e.x=e.x<0?0:1;break;case zc:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Xn:e.y=e.y-Math.floor(e.y);break;case gi:e.y=e.y<0?0:1;break;case zc:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Jt.DEFAULT_IMAGE=null;Jt.DEFAULT_MAPPING=Id;Jt.DEFAULT_ANISOTROPY=1;class xt{constructor(e=0,t=0,n=0,s=1){xt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,s=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*t+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*t+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*t+a[7]*n+a[11]*s+a[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r;const c=e.elements,h=c[0],l=c[4],u=c[8],d=c[1],f=c[5],m=c[9],g=c[2],x=c[6],p=c[10];if(Math.abs(l-d)<.01&&Math.abs(u-g)<.01&&Math.abs(m-x)<.01){if(Math.abs(l+d)<.1&&Math.abs(u+g)<.1&&Math.abs(m+x)<.1&&Math.abs(h+f+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const y=(h+1)/2,b=(f+1)/2,R=(p+1)/2,T=(l+d)/4,w=(u+g)/4,D=(m+x)/4;return y>b&&y>R?y<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(y),s=T/n,r=w/n):b>R?b<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(b),n=T/s,r=D/s):R<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(R),n=w/r,s=D/r),this.set(n,s,r,t),this}let v=Math.sqrt((x-m)*(x-m)+(u-g)*(u-g)+(d-l)*(d-l));return Math.abs(v)<.001&&(v=1),this.x=(x-m)/v,this.y=(u-g)/v,this.z=(d-l)/v,this.w=Math.acos((h+f+p-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=tt(this.x,e.x,t.x),this.y=tt(this.y,e.y,t.y),this.z=tt(this.z,e.z,t.z),this.w=tt(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=tt(this.x,e,t),this.y=tt(this.y,e,t),this.z=tt(this.z,e,t),this.w=tt(this.w,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(tt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class z0 extends sr{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ln,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new xt(0,0,e,t),this.scissorTest=!1,this.viewport=new xt(0,0,e,t);const s={width:e,height:t,depth:n.depth},r=new Jt(s);this.textures=[];const a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(e={}){const t={minFilter:Ln,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=n,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const s=Object.assign({},e.textures[t].image);this.textures[t].source=new Jl(s)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class qn extends z0{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class Hd extends Jt{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=bn,this.minFilter=bn,this.wrapR=gi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class G0 extends Jt{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=bn,this.minFilter=bn,this.wrapR=gi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class qr{constructor(e=new I(1/0,1/0,1/0),t=new I(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Nn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Nn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=Nn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,Nn):Nn.fromBufferAttribute(r,a),Nn.applyMatrix4(e.matrixWorld),this.expandByPoint(Nn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),ia.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),ia.copy(n.boundingBox)),ia.applyMatrix4(e.matrixWorld),this.union(ia)}const s=e.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Nn),Nn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(dr),sa.subVectors(this.max,dr),Ps.subVectors(e.a,dr),Ls.subVectors(e.b,dr),Is.subVectors(e.c,dr),Ti.subVectors(Ls,Ps),Ci.subVectors(Is,Ls),Ki.subVectors(Ps,Is);let t=[0,-Ti.z,Ti.y,0,-Ci.z,Ci.y,0,-Ki.z,Ki.y,Ti.z,0,-Ti.x,Ci.z,0,-Ci.x,Ki.z,0,-Ki.x,-Ti.y,Ti.x,0,-Ci.y,Ci.x,0,-Ki.y,Ki.x,0];return!Oo(t,Ps,Ls,Is,sa)||(t=[1,0,0,0,1,0,0,0,1],!Oo(t,Ps,Ls,Is,sa))?!1:(ra.crossVectors(Ti,Ci),t=[ra.x,ra.y,ra.z],Oo(t,Ps,Ls,Is,sa))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Nn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Nn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(li[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),li[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),li[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),li[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),li[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),li[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),li[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),li[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(li),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const li=[new I,new I,new I,new I,new I,new I,new I,new I],Nn=new I,ia=new qr,Ps=new I,Ls=new I,Is=new I,Ti=new I,Ci=new I,Ki=new I,dr=new I,sa=new I,ra=new I,Ji=new I;function Oo(i,e,t,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){Ji.fromArray(i,r);const o=s.x*Math.abs(Ji.x)+s.y*Math.abs(Ji.y)+s.z*Math.abs(Ji.z),c=e.dot(Ji),h=t.dot(Ji),l=n.dot(Ji);if(Math.max(-Math.max(c,h,l),Math.min(c,h,l))>o)return!1}return!0}const V0=new qr,fr=new I,Fo=new I;class Yr{constructor(e=new I,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):V0.setFromPoints(e).getCenter(n);let s=0;for(let r=0,a=e.length;r<a;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;fr.subVectors(e,this.center);const t=fr.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(fr,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Fo.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(fr.copy(e.center).add(Fo)),this.expandByPoint(fr.copy(e.center).sub(Fo))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const hi=new I,Bo=new I,aa=new I,Ai=new I,ko=new I,oa=new I,zo=new I;class po{constructor(e=new I,t=new I(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,hi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=hi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(hi.copy(this.origin).addScaledVector(this.direction,t),hi.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){Bo.copy(e).add(t).multiplyScalar(.5),aa.copy(t).sub(e).normalize(),Ai.copy(this.origin).sub(Bo);const r=e.distanceTo(t)*.5,a=-this.direction.dot(aa),o=Ai.dot(this.direction),c=-Ai.dot(aa),h=Ai.lengthSq(),l=Math.abs(1-a*a);let u,d,f,m;if(l>0)if(u=a*c-o,d=a*o-c,m=r*l,u>=0)if(d>=-m)if(d<=m){const g=1/l;u*=g,d*=g,f=u*(u+a*d+2*o)+d*(a*u+d+2*c)+h}else d=r,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*c)+h;else d=-r,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*c)+h;else d<=-m?(u=Math.max(0,-(-a*r+o)),d=u>0?-r:Math.min(Math.max(-r,-c),r),f=-u*u+d*(d+2*c)+h):d<=m?(u=0,d=Math.min(Math.max(-r,-c),r),f=d*(d+2*c)+h):(u=Math.max(0,-(a*r+o)),d=u>0?r:Math.min(Math.max(-r,-c),r),f=-u*u+d*(d+2*c)+h);else d=a>0?-r:r,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*c)+h;return n&&n.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(Bo).addScaledVector(aa,d),f}intersectSphere(e,t){hi.subVectors(e.center,this.origin);const n=hi.dot(this.direction),s=hi.dot(hi)-n*n,r=e.radius*e.radius;if(s>r)return null;const a=Math.sqrt(r-s),o=n-a,c=n+a;return c<0?null:o<0?this.at(c,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,a,o,c;const h=1/this.direction.x,l=1/this.direction.y,u=1/this.direction.z,d=this.origin;return h>=0?(n=(e.min.x-d.x)*h,s=(e.max.x-d.x)*h):(n=(e.max.x-d.x)*h,s=(e.min.x-d.x)*h),l>=0?(r=(e.min.y-d.y)*l,a=(e.max.y-d.y)*l):(r=(e.max.y-d.y)*l,a=(e.min.y-d.y)*l),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),u>=0?(o=(e.min.z-d.z)*u,c=(e.max.z-d.z)*u):(o=(e.max.z-d.z)*u,c=(e.min.z-d.z)*u),n>c||o>s)||((o>n||n!==n)&&(n=o),(c<s||s!==s)&&(s=c),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,hi)!==null}intersectTriangle(e,t,n,s,r){ko.subVectors(t,e),oa.subVectors(n,e),zo.crossVectors(ko,oa);let a=this.direction.dot(zo),o;if(a>0){if(s)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Ai.subVectors(this.origin,e);const c=o*this.direction.dot(oa.crossVectors(Ai,oa));if(c<0)return null;const h=o*this.direction.dot(ko.cross(Ai));if(h<0||c+h>a)return null;const l=-o*Ai.dot(zo);return l<0?null:this.at(l/a,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class yt{constructor(e,t,n,s,r,a,o,c,h,l,u,d,f,m,g,x){yt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,c,h,l,u,d,f,m,g,x)}set(e,t,n,s,r,a,o,c,h,l,u,d,f,m,g,x){const p=this.elements;return p[0]=e,p[4]=t,p[8]=n,p[12]=s,p[1]=r,p[5]=a,p[9]=o,p[13]=c,p[2]=h,p[6]=l,p[10]=u,p[14]=d,p[3]=f,p[7]=m,p[11]=g,p[15]=x,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new yt().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,s=1/Ds.setFromMatrixColumn(e,0).length(),r=1/Ds.setFromMatrixColumn(e,1).length(),a=1/Ds.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,s=e.y,r=e.z,a=Math.cos(n),o=Math.sin(n),c=Math.cos(s),h=Math.sin(s),l=Math.cos(r),u=Math.sin(r);if(e.order==="XYZ"){const d=a*l,f=a*u,m=o*l,g=o*u;t[0]=c*l,t[4]=-c*u,t[8]=h,t[1]=f+m*h,t[5]=d-g*h,t[9]=-o*c,t[2]=g-d*h,t[6]=m+f*h,t[10]=a*c}else if(e.order==="YXZ"){const d=c*l,f=c*u,m=h*l,g=h*u;t[0]=d+g*o,t[4]=m*o-f,t[8]=a*h,t[1]=a*u,t[5]=a*l,t[9]=-o,t[2]=f*o-m,t[6]=g+d*o,t[10]=a*c}else if(e.order==="ZXY"){const d=c*l,f=c*u,m=h*l,g=h*u;t[0]=d-g*o,t[4]=-a*u,t[8]=m+f*o,t[1]=f+m*o,t[5]=a*l,t[9]=g-d*o,t[2]=-a*h,t[6]=o,t[10]=a*c}else if(e.order==="ZYX"){const d=a*l,f=a*u,m=o*l,g=o*u;t[0]=c*l,t[4]=m*h-f,t[8]=d*h+g,t[1]=c*u,t[5]=g*h+d,t[9]=f*h-m,t[2]=-h,t[6]=o*c,t[10]=a*c}else if(e.order==="YZX"){const d=a*c,f=a*h,m=o*c,g=o*h;t[0]=c*l,t[4]=g-d*u,t[8]=m*u+f,t[1]=u,t[5]=a*l,t[9]=-o*l,t[2]=-h*l,t[6]=f*u+m,t[10]=d-g*u}else if(e.order==="XZY"){const d=a*c,f=a*h,m=o*c,g=o*h;t[0]=c*l,t[4]=-u,t[8]=h*l,t[1]=d*u+g,t[5]=a*l,t[9]=f*u-m,t[2]=m*u-f,t[6]=o*l,t[10]=g*u+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(H0,e,W0)}lookAt(e,t,n){const s=this.elements;return yn.subVectors(e,t),yn.lengthSq()===0&&(yn.z=1),yn.normalize(),Ri.crossVectors(n,yn),Ri.lengthSq()===0&&(Math.abs(n.z)===1?yn.x+=1e-4:yn.z+=1e-4,yn.normalize(),Ri.crossVectors(n,yn)),Ri.normalize(),ca.crossVectors(yn,Ri),s[0]=Ri.x,s[4]=ca.x,s[8]=yn.x,s[1]=Ri.y,s[5]=ca.y,s[9]=yn.y,s[2]=Ri.z,s[6]=ca.z,s[10]=yn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[4],c=n[8],h=n[12],l=n[1],u=n[5],d=n[9],f=n[13],m=n[2],g=n[6],x=n[10],p=n[14],v=n[3],y=n[7],b=n[11],R=n[15],T=s[0],w=s[4],D=s[8],E=s[12],S=s[1],P=s[5],N=s[9],B=s[13],q=s[2],z=s[6],G=s[10],J=s[14],k=s[3],re=s[7],de=s[11],Ce=s[15];return r[0]=a*T+o*S+c*q+h*k,r[4]=a*w+o*P+c*z+h*re,r[8]=a*D+o*N+c*G+h*de,r[12]=a*E+o*B+c*J+h*Ce,r[1]=l*T+u*S+d*q+f*k,r[5]=l*w+u*P+d*z+f*re,r[9]=l*D+u*N+d*G+f*de,r[13]=l*E+u*B+d*J+f*Ce,r[2]=m*T+g*S+x*q+p*k,r[6]=m*w+g*P+x*z+p*re,r[10]=m*D+g*N+x*G+p*de,r[14]=m*E+g*B+x*J+p*Ce,r[3]=v*T+y*S+b*q+R*k,r[7]=v*w+y*P+b*z+R*re,r[11]=v*D+y*N+b*G+R*de,r[15]=v*E+y*B+b*J+R*Ce,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],a=e[1],o=e[5],c=e[9],h=e[13],l=e[2],u=e[6],d=e[10],f=e[14],m=e[3],g=e[7],x=e[11],p=e[15];return m*(+r*c*u-s*h*u-r*o*d+n*h*d+s*o*f-n*c*f)+g*(+t*c*f-t*h*d+r*a*d-s*a*f+s*h*l-r*c*l)+x*(+t*h*u-t*o*f-r*a*u+n*a*f+r*o*l-n*h*l)+p*(-s*o*l-t*c*u+t*o*d+s*a*u-n*a*d+n*c*l)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],c=e[6],h=e[7],l=e[8],u=e[9],d=e[10],f=e[11],m=e[12],g=e[13],x=e[14],p=e[15],v=u*x*h-g*d*h+g*c*f-o*x*f-u*c*p+o*d*p,y=m*d*h-l*x*h-m*c*f+a*x*f+l*c*p-a*d*p,b=l*g*h-m*u*h+m*o*f-a*g*f-l*o*p+a*u*p,R=m*u*c-l*g*c-m*o*d+a*g*d+l*o*x-a*u*x,T=t*v+n*y+s*b+r*R;if(T===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const w=1/T;return e[0]=v*w,e[1]=(g*d*r-u*x*r-g*s*f+n*x*f+u*s*p-n*d*p)*w,e[2]=(o*x*r-g*c*r+g*s*h-n*x*h-o*s*p+n*c*p)*w,e[3]=(u*c*r-o*d*r-u*s*h+n*d*h+o*s*f-n*c*f)*w,e[4]=y*w,e[5]=(l*x*r-m*d*r+m*s*f-t*x*f-l*s*p+t*d*p)*w,e[6]=(m*c*r-a*x*r-m*s*h+t*x*h+a*s*p-t*c*p)*w,e[7]=(a*d*r-l*c*r+l*s*h-t*d*h-a*s*f+t*c*f)*w,e[8]=b*w,e[9]=(m*u*r-l*g*r-m*n*f+t*g*f+l*n*p-t*u*p)*w,e[10]=(a*g*r-m*o*r+m*n*h-t*g*h-a*n*p+t*o*p)*w,e[11]=(l*o*r-a*u*r-l*n*h+t*u*h+a*n*f-t*o*f)*w,e[12]=R*w,e[13]=(l*g*s-m*u*s+m*n*d-t*g*d-l*n*x+t*u*x)*w,e[14]=(m*o*s-a*g*s-m*n*c+t*g*c+a*n*x-t*o*x)*w,e[15]=(a*u*s-l*o*s+l*n*c-t*u*c-a*n*d+t*o*d)*w,this}scale(e){const t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),s=Math.sin(t),r=1-n,a=e.x,o=e.y,c=e.z,h=r*a,l=r*o;return this.set(h*a+n,h*o-s*c,h*c+s*o,0,h*o+s*c,l*o+n,l*c-s*a,0,h*c-s*o,l*c+s*a,r*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,a){return this.set(1,n,r,0,e,1,a,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){const s=this.elements,r=t._x,a=t._y,o=t._z,c=t._w,h=r+r,l=a+a,u=o+o,d=r*h,f=r*l,m=r*u,g=a*l,x=a*u,p=o*u,v=c*h,y=c*l,b=c*u,R=n.x,T=n.y,w=n.z;return s[0]=(1-(g+p))*R,s[1]=(f+b)*R,s[2]=(m-y)*R,s[3]=0,s[4]=(f-b)*T,s[5]=(1-(d+p))*T,s[6]=(x+v)*T,s[7]=0,s[8]=(m+y)*w,s[9]=(x-v)*w,s[10]=(1-(d+g))*w,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){const s=this.elements;let r=Ds.set(s[0],s[1],s[2]).length();const a=Ds.set(s[4],s[5],s[6]).length(),o=Ds.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],On.copy(this);const h=1/r,l=1/a,u=1/o;return On.elements[0]*=h,On.elements[1]*=h,On.elements[2]*=h,On.elements[4]*=l,On.elements[5]*=l,On.elements[6]*=l,On.elements[8]*=u,On.elements[9]*=u,On.elements[10]*=u,t.setFromRotationMatrix(On),n.x=r,n.y=a,n.z=o,this}makePerspective(e,t,n,s,r,a,o=ii,c=!1){const h=this.elements,l=2*r/(t-e),u=2*r/(n-s),d=(t+e)/(t-e),f=(n+s)/(n-s);let m,g;if(c)m=r/(a-r),g=a*r/(a-r);else if(o===ii)m=-(a+r)/(a-r),g=-2*a*r/(a-r);else if(o===Ka)m=-a/(a-r),g=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return h[0]=l,h[4]=0,h[8]=d,h[12]=0,h[1]=0,h[5]=u,h[9]=f,h[13]=0,h[2]=0,h[6]=0,h[10]=m,h[14]=g,h[3]=0,h[7]=0,h[11]=-1,h[15]=0,this}makeOrthographic(e,t,n,s,r,a,o=ii,c=!1){const h=this.elements,l=2/(t-e),u=2/(n-s),d=-(t+e)/(t-e),f=-(n+s)/(n-s);let m,g;if(c)m=1/(a-r),g=a/(a-r);else if(o===ii)m=-2/(a-r),g=-(a+r)/(a-r);else if(o===Ka)m=-1/(a-r),g=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return h[0]=l,h[4]=0,h[8]=0,h[12]=d,h[1]=0,h[5]=u,h[9]=0,h[13]=f,h[2]=0,h[6]=0,h[10]=m,h[14]=g,h[3]=0,h[7]=0,h[11]=0,h[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const Ds=new I,On=new yt,H0=new I(0,0,0),W0=new I(1,1,1),Ri=new I,ca=new I,yn=new I,zh=new yt,Gh=new ar;class oi{constructor(e=0,t=0,n=0,s=oi.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const s=e.elements,r=s[0],a=s[4],o=s[8],c=s[1],h=s[5],l=s[9],u=s[2],d=s[6],f=s[10];switch(t){case"XYZ":this._y=Math.asin(tt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-l,f),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(d,h),this._z=0);break;case"YXZ":this._x=Math.asin(-tt(l,-1,1)),Math.abs(l)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(c,h)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(tt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-a,h)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-tt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-a,h));break;case"YZX":this._z=Math.asin(tt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-l,h),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-tt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,h),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-l,f),this._y=0);break;default:je("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return zh.makeRotationFromQuaternion(e),this.setFromRotationMatrix(zh,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Gh.setFromEuler(this),this.setFromQuaternion(Gh,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}oi.DEFAULT_ORDER="XYZ";class Zl{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let X0=0;const Vh=new I,Us=new ar,ui=new yt,la=new I,pr=new I,$0=new I,q0=new ar,Hh=new I(1,0,0),Wh=new I(0,1,0),Xh=new I(0,0,1),$h={type:"added"},Y0={type:"removed"},Ns={type:"childadded",child:null},Go={type:"childremoved",child:null};class Nt extends sr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:X0++}),this.uuid=rr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Nt.DEFAULT_UP.clone();const e=new I,t=new oi,n=new ar,s=new I(1,1,1);function r(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new yt},normalMatrix:{value:new Je}}),this.matrix=new yt,this.matrixWorld=new yt,this.matrixAutoUpdate=Nt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Nt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Zl,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Us.setFromAxisAngle(e,t),this.quaternion.multiply(Us),this}rotateOnWorldAxis(e,t){return Us.setFromAxisAngle(e,t),this.quaternion.premultiply(Us),this}rotateX(e){return this.rotateOnAxis(Hh,e)}rotateY(e){return this.rotateOnAxis(Wh,e)}rotateZ(e){return this.rotateOnAxis(Xh,e)}translateOnAxis(e,t){return Vh.copy(e).applyQuaternion(this.quaternion),this.position.add(Vh.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Hh,e)}translateY(e){return this.translateOnAxis(Wh,e)}translateZ(e){return this.translateOnAxis(Xh,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(ui.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?la.copy(e):la.set(e,t,n);const s=this.parent;this.updateWorldMatrix(!0,!1),pr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ui.lookAt(pr,la,this.up):ui.lookAt(la,pr,this.up),this.quaternion.setFromRotationMatrix(ui),s&&(ui.extractRotation(s.matrixWorld),Us.setFromRotationMatrix(ui),this.quaternion.premultiply(Us.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(Rt("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent($h),Ns.child=e,this.dispatchEvent(Ns),Ns.child=null):Rt("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Y0),Go.child=e,this.dispatchEvent(Go),Go.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),ui.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),ui.multiply(e.parent.matrixWorld)),e.applyMatrix4(ui),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent($h),Ns.child=e,this.dispatchEvent(Ns),Ns.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){const a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(pr,e,$0),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(pr,q0,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const c=o.shapes;if(Array.isArray(c))for(let h=0,l=c.length;h<l;h++){const u=c[h];r(e.shapes,u)}else r(e.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let c=0,h=this.material.length;c<h;c++)o.push(r(e.materials,this.material[c]));s.material=o}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){const c=this.animations[o];s.animations.push(r(e.animations,c))}}if(t){const o=a(e.geometries),c=a(e.materials),h=a(e.textures),l=a(e.images),u=a(e.shapes),d=a(e.skeletons),f=a(e.animations),m=a(e.nodes);o.length>0&&(n.geometries=o),c.length>0&&(n.materials=c),h.length>0&&(n.textures=h),l.length>0&&(n.images=l),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f),m.length>0&&(n.nodes=m)}return n.object=s,n;function a(o){const c=[];for(const h in o){const l=o[h];delete l.metadata,c.push(l)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const s=e.children[n];this.add(s.clone())}return this}}Nt.DEFAULT_UP=new I(0,1,0);Nt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Nt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Fn=new I,di=new I,Vo=new I,fi=new I,Os=new I,Fs=new I,qh=new I,Ho=new I,Wo=new I,Xo=new I,$o=new xt,qo=new xt,Yo=new xt;class Gn{constructor(e=new I,t=new I,n=new I){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),Fn.subVectors(e,t),s.cross(Fn);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){Fn.subVectors(s,t),di.subVectors(n,t),Vo.subVectors(e,t);const a=Fn.dot(Fn),o=Fn.dot(di),c=Fn.dot(Vo),h=di.dot(di),l=di.dot(Vo),u=a*h-o*o;if(u===0)return r.set(0,0,0),null;const d=1/u,f=(h*c-o*l)*d,m=(a*l-o*c)*d;return r.set(1-f-m,m,f)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,fi)===null?!1:fi.x>=0&&fi.y>=0&&fi.x+fi.y<=1}static getInterpolation(e,t,n,s,r,a,o,c){return this.getBarycoord(e,t,n,s,fi)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,fi.x),c.addScaledVector(a,fi.y),c.addScaledVector(o,fi.z),c)}static getInterpolatedAttribute(e,t,n,s,r,a){return $o.setScalar(0),qo.setScalar(0),Yo.setScalar(0),$o.fromBufferAttribute(e,t),qo.fromBufferAttribute(e,n),Yo.fromBufferAttribute(e,s),a.setScalar(0),a.addScaledVector($o,r.x),a.addScaledVector(qo,r.y),a.addScaledVector(Yo,r.z),a}static isFrontFacing(e,t,n,s){return Fn.subVectors(n,t),di.subVectors(e,t),Fn.cross(di).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Fn.subVectors(this.c,this.b),di.subVectors(this.a,this.b),Fn.cross(di).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Gn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Gn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,r){return Gn.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return Gn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Gn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,s=this.b,r=this.c;let a,o;Os.subVectors(s,n),Fs.subVectors(r,n),Ho.subVectors(e,n);const c=Os.dot(Ho),h=Fs.dot(Ho);if(c<=0&&h<=0)return t.copy(n);Wo.subVectors(e,s);const l=Os.dot(Wo),u=Fs.dot(Wo);if(l>=0&&u<=l)return t.copy(s);const d=c*u-l*h;if(d<=0&&c>=0&&l<=0)return a=c/(c-l),t.copy(n).addScaledVector(Os,a);Xo.subVectors(e,r);const f=Os.dot(Xo),m=Fs.dot(Xo);if(m>=0&&f<=m)return t.copy(r);const g=f*h-c*m;if(g<=0&&h>=0&&m<=0)return o=h/(h-m),t.copy(n).addScaledVector(Fs,o);const x=l*m-f*u;if(x<=0&&u-l>=0&&f-m>=0)return qh.subVectors(r,s),o=(u-l)/(u-l+(f-m)),t.copy(s).addScaledVector(qh,o);const p=1/(x+g+d);return a=g*p,o=d*p,t.copy(n).addScaledVector(Os,a).addScaledVector(Fs,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Wd={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},wi={h:0,s:0,l:0},ha={h:0,s:0,l:0};function jo(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}class He{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Wt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,ct.colorSpaceToWorking(this,t),this}setRGB(e,t,n,s=ct.workingColorSpace){return this.r=e,this.g=t,this.b=n,ct.colorSpaceToWorking(this,s),this}setHSL(e,t,n,s=ct.workingColorSpace){if(e=N0(e,1),t=tt(t,0,1),n=tt(n,0,1),t===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+t):n+t-n*t,a=2*n-r;this.r=jo(a,r,e+1/3),this.g=jo(a,r,e),this.b=jo(a,r,e-1/3)}return ct.colorSpaceToWorking(this,s),this}setStyle(e,t=Wt){function n(r){r!==void 0&&parseFloat(r)<1&&je("Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:je("Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);je("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Wt){const n=Wd[e.toLowerCase()];return n!==void 0?this.setHex(n,t):je("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=bi(e.r),this.g=bi(e.g),this.b=bi(e.b),this}copyLinearToSRGB(e){return this.r=$s(e.r),this.g=$s(e.g),this.b=$s(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Wt){return ct.workingToColorSpace($t.copy(this),e),Math.round(tt($t.r*255,0,255))*65536+Math.round(tt($t.g*255,0,255))*256+Math.round(tt($t.b*255,0,255))}getHexString(e=Wt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=ct.workingColorSpace){ct.workingToColorSpace($t.copy(this),t);const n=$t.r,s=$t.g,r=$t.b,a=Math.max(n,s,r),o=Math.min(n,s,r);let c,h;const l=(o+a)/2;if(o===a)c=0,h=0;else{const u=a-o;switch(h=l<=.5?u/(a+o):u/(2-a-o),a){case n:c=(s-r)/u+(s<r?6:0);break;case s:c=(r-n)/u+2;break;case r:c=(n-s)/u+4;break}c/=6}return e.h=c,e.s=h,e.l=l,e}getRGB(e,t=ct.workingColorSpace){return ct.workingToColorSpace($t.copy(this),t),e.r=$t.r,e.g=$t.g,e.b=$t.b,e}getStyle(e=Wt){ct.workingToColorSpace($t.copy(this),e);const t=$t.r,n=$t.g,s=$t.b;return e!==Wt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(wi),this.setHSL(wi.h+e,wi.s+t,wi.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(wi),e.getHSL(ha);const n=Lo(wi.h,ha.h,t),s=Lo(wi.s,ha.s,t),r=Lo(wi.l,ha.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const $t=new He;He.NAMES=Wd;let j0=0;class vs extends sr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:j0++}),this.uuid=rr(),this.name="",this.type="Material",this.blending=Xs,this.side=Hi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=wc,this.blendDst=Pc,this.blendEquation=rs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new He(0,0,0),this.blendAlpha=0,this.depthFunc=js,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Ih,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Rs,this.stencilZFail=Rs,this.stencilZPass=Rs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){je(`Material: parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){je(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Xs&&(n.blending=this.blending),this.side!==Hi&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==wc&&(n.blendSrc=this.blendSrc),this.blendDst!==Pc&&(n.blendDst=this.blendDst),this.blendEquation!==rs&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==js&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Ih&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Rs&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Rs&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Rs&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){const a=[];for(const o in r){const c=r[o];delete c.metadata,a.push(c)}return a}if(t){const r=s(e.textures),a=s(e.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Dt extends vs{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new He(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new oi,this.combine=Td,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Ot=new I,ua=new le;let K0=0;class In{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:K0++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Dh,this.updateRanges=[],this.gpuType=_i,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)ua.fromBufferAttribute(this,t),ua.applyMatrix3(e),this.setXY(t,ua.x,ua.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Ot.fromBufferAttribute(this,t),Ot.applyMatrix3(e),this.setXYZ(t,Ot.x,Ot.y,Ot.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Ot.fromBufferAttribute(this,t),Ot.applyMatrix4(e),this.setXYZ(t,Ot.x,Ot.y,Ot.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Ot.fromBufferAttribute(this,t),Ot.applyNormalMatrix(e),this.setXYZ(t,Ot.x,Ot.y,Ot.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Ot.fromBufferAttribute(this,t),Ot.transformDirection(e),this.setXYZ(t,Ot.x,Ot.y,Ot.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=ur(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=un(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=ur(t,this.array)),t}setX(e,t){return this.normalized&&(t=un(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=ur(t,this.array)),t}setY(e,t){return this.normalized&&(t=un(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=ur(t,this.array)),t}setZ(e,t){return this.normalized&&(t=un(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=ur(t,this.array)),t}setW(e,t){return this.normalized&&(t=un(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=un(t,this.array),n=un(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=un(t,this.array),n=un(n,this.array),s=un(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=un(t,this.array),n=un(n,this.array),s=un(s,this.array),r=un(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Dh&&(e.usage=this.usage),e}}class Xd extends In{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class $d extends In{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class Et extends In{constructor(e,t,n){super(new Float32Array(e),t,n)}}let J0=0;const An=new yt,Ko=new Nt,Bs=new I,Sn=new qr,mr=new qr,Vt=new I;class Ut extends sr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:J0++}),this.uuid=rr(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Vd(e)?$d:Xd)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new Je().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return An.makeRotationFromQuaternion(e),this.applyMatrix4(An),this}rotateX(e){return An.makeRotationX(e),this.applyMatrix4(An),this}rotateY(e){return An.makeRotationY(e),this.applyMatrix4(An),this}rotateZ(e){return An.makeRotationZ(e),this.applyMatrix4(An),this}translate(e,t,n){return An.makeTranslation(e,t,n),this.applyMatrix4(An),this}scale(e,t,n){return An.makeScale(e,t,n),this.applyMatrix4(An),this}lookAt(e){return Ko.lookAt(e),Ko.updateMatrix(),this.applyMatrix4(Ko.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Bs).negate(),this.translate(Bs.x,Bs.y,Bs.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let s=0,r=e.length;s<r;s++){const a=e[s];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new Et(n,3))}else{const n=Math.min(e.length,t.count);for(let s=0;s<n;s++){const r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&je("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new qr);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Rt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new I(-1/0,-1/0,-1/0),new I(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){const r=t[n];Sn.setFromBufferAttribute(r),this.morphTargetsRelative?(Vt.addVectors(this.boundingBox.min,Sn.min),this.boundingBox.expandByPoint(Vt),Vt.addVectors(this.boundingBox.max,Sn.max),this.boundingBox.expandByPoint(Vt)):(this.boundingBox.expandByPoint(Sn.min),this.boundingBox.expandByPoint(Sn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Rt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Yr);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Rt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new I,1/0);return}if(e){const n=this.boundingSphere.center;if(Sn.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){const o=t[r];mr.setFromBufferAttribute(o),this.morphTargetsRelative?(Vt.addVectors(Sn.min,mr.min),Sn.expandByPoint(Vt),Vt.addVectors(Sn.max,mr.max),Sn.expandByPoint(Vt)):(Sn.expandByPoint(mr.min),Sn.expandByPoint(mr.max))}Sn.getCenter(n);let s=0;for(let r=0,a=e.count;r<a;r++)Vt.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(Vt));if(t)for(let r=0,a=t.length;r<a;r++){const o=t[r],c=this.morphTargetsRelative;for(let h=0,l=o.count;h<l;h++)Vt.fromBufferAttribute(o,h),c&&(Bs.fromBufferAttribute(e,h),Vt.add(Bs)),s=Math.max(s,n.distanceToSquared(Vt))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&Rt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){Rt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,s=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new In(new Float32Array(4*n.count),4));const a=this.getAttribute("tangent"),o=[],c=[];for(let D=0;D<n.count;D++)o[D]=new I,c[D]=new I;const h=new I,l=new I,u=new I,d=new le,f=new le,m=new le,g=new I,x=new I;function p(D,E,S){h.fromBufferAttribute(n,D),l.fromBufferAttribute(n,E),u.fromBufferAttribute(n,S),d.fromBufferAttribute(r,D),f.fromBufferAttribute(r,E),m.fromBufferAttribute(r,S),l.sub(h),u.sub(h),f.sub(d),m.sub(d);const P=1/(f.x*m.y-m.x*f.y);isFinite(P)&&(g.copy(l).multiplyScalar(m.y).addScaledVector(u,-f.y).multiplyScalar(P),x.copy(u).multiplyScalar(f.x).addScaledVector(l,-m.x).multiplyScalar(P),o[D].add(g),o[E].add(g),o[S].add(g),c[D].add(x),c[E].add(x),c[S].add(x))}let v=this.groups;v.length===0&&(v=[{start:0,count:e.count}]);for(let D=0,E=v.length;D<E;++D){const S=v[D],P=S.start,N=S.count;for(let B=P,q=P+N;B<q;B+=3)p(e.getX(B+0),e.getX(B+1),e.getX(B+2))}const y=new I,b=new I,R=new I,T=new I;function w(D){R.fromBufferAttribute(s,D),T.copy(R);const E=o[D];y.copy(E),y.sub(R.multiplyScalar(R.dot(E))).normalize(),b.crossVectors(T,E);const P=b.dot(c[D])<0?-1:1;a.setXYZW(D,y.x,y.y,y.z,P)}for(let D=0,E=v.length;D<E;++D){const S=v[D],P=S.start,N=S.count;for(let B=P,q=P+N;B<q;B+=3)w(e.getX(B+0)),w(e.getX(B+1)),w(e.getX(B+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new In(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);const s=new I,r=new I,a=new I,o=new I,c=new I,h=new I,l=new I,u=new I;if(e)for(let d=0,f=e.count;d<f;d+=3){const m=e.getX(d+0),g=e.getX(d+1),x=e.getX(d+2);s.fromBufferAttribute(t,m),r.fromBufferAttribute(t,g),a.fromBufferAttribute(t,x),l.subVectors(a,r),u.subVectors(s,r),l.cross(u),o.fromBufferAttribute(n,m),c.fromBufferAttribute(n,g),h.fromBufferAttribute(n,x),o.add(l),c.add(l),h.add(l),n.setXYZ(m,o.x,o.y,o.z),n.setXYZ(g,c.x,c.y,c.z),n.setXYZ(x,h.x,h.y,h.z)}else for(let d=0,f=t.count;d<f;d+=3)s.fromBufferAttribute(t,d+0),r.fromBufferAttribute(t,d+1),a.fromBufferAttribute(t,d+2),l.subVectors(a,r),u.subVectors(s,r),l.cross(u),n.setXYZ(d+0,l.x,l.y,l.z),n.setXYZ(d+1,l.x,l.y,l.z),n.setXYZ(d+2,l.x,l.y,l.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Vt.fromBufferAttribute(e,t),Vt.normalize(),e.setXYZ(t,Vt.x,Vt.y,Vt.z)}toNonIndexed(){function e(o,c){const h=o.array,l=o.itemSize,u=o.normalized,d=new h.constructor(c.length*l);let f=0,m=0;for(let g=0,x=c.length;g<x;g++){o.isInterleavedBufferAttribute?f=c[g]*o.data.stride+o.offset:f=c[g]*l;for(let p=0;p<l;p++)d[m++]=h[f++]}return new In(d,l,u)}if(this.index===null)return je("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Ut,n=this.index.array,s=this.attributes;for(const o in s){const c=s[o],h=e(c,n);t.setAttribute(o,h)}const r=this.morphAttributes;for(const o in r){const c=[],h=r[o];for(let l=0,u=h.length;l<u;l++){const d=h[l],f=e(d,n);c.push(f)}t.morphAttributes[o]=c}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,c=a.length;o<c;o++){const h=a[o];t.addGroup(h.start,h.count,h.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const h in c)c[h]!==void 0&&(e[h]=c[h]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const c in n){const h=n[c];e.data.attributes[c]=h.toJSON(e.data)}const s={};let r=!1;for(const c in this.morphAttributes){const h=this.morphAttributes[c],l=[];for(let u=0,d=h.length;u<d;u++){const f=h[u];l.push(f.toJSON(e.data))}l.length>0&&(s[c]=l,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone());const s=e.attributes;for(const h in s){const l=s[h];this.setAttribute(h,l.clone(t))}const r=e.morphAttributes;for(const h in r){const l=[],u=r[h];for(let d=0,f=u.length;d<f;d++)l.push(u[d].clone(t));this.morphAttributes[h]=l}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let h=0,l=a.length;h<l;h++){const u=a[h];this.addGroup(u.start,u.count,u.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Yh=new yt,Zi=new po,da=new Yr,jh=new I,fa=new I,pa=new I,ma=new I,Jo=new I,xa=new I,Kh=new I,ga=new I;class ye extends Nt{constructor(e=new Ut,t=new Dt){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){const n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(s,e);const o=this.morphTargetInfluences;if(r&&o){xa.set(0,0,0);for(let c=0,h=r.length;c<h;c++){const l=o[c],u=r[c];l!==0&&(Jo.fromBufferAttribute(u,e),a?xa.addScaledVector(Jo,l):xa.addScaledVector(Jo.sub(t),l))}t.add(xa)}return t}raycast(e,t){const n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),da.copy(n.boundingSphere),da.applyMatrix4(r),Zi.copy(e.ray).recast(e.near),!(da.containsPoint(Zi.origin)===!1&&(Zi.intersectSphere(da,jh)===null||Zi.origin.distanceToSquared(jh)>(e.far-e.near)**2))&&(Yh.copy(r).invert(),Zi.copy(e.ray).applyMatrix4(Yh),!(n.boundingBox!==null&&Zi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Zi)))}_computeIntersections(e,t,n){let s;const r=this.geometry,a=this.material,o=r.index,c=r.attributes.position,h=r.attributes.uv,l=r.attributes.uv1,u=r.attributes.normal,d=r.groups,f=r.drawRange;if(o!==null)if(Array.isArray(a))for(let m=0,g=d.length;m<g;m++){const x=d[m],p=a[x.materialIndex],v=Math.max(x.start,f.start),y=Math.min(o.count,Math.min(x.start+x.count,f.start+f.count));for(let b=v,R=y;b<R;b+=3){const T=o.getX(b),w=o.getX(b+1),D=o.getX(b+2);s=_a(this,p,e,n,h,l,u,T,w,D),s&&(s.faceIndex=Math.floor(b/3),s.face.materialIndex=x.materialIndex,t.push(s))}}else{const m=Math.max(0,f.start),g=Math.min(o.count,f.start+f.count);for(let x=m,p=g;x<p;x+=3){const v=o.getX(x),y=o.getX(x+1),b=o.getX(x+2);s=_a(this,a,e,n,h,l,u,v,y,b),s&&(s.faceIndex=Math.floor(x/3),t.push(s))}}else if(c!==void 0)if(Array.isArray(a))for(let m=0,g=d.length;m<g;m++){const x=d[m],p=a[x.materialIndex],v=Math.max(x.start,f.start),y=Math.min(c.count,Math.min(x.start+x.count,f.start+f.count));for(let b=v,R=y;b<R;b+=3){const T=b,w=b+1,D=b+2;s=_a(this,p,e,n,h,l,u,T,w,D),s&&(s.faceIndex=Math.floor(b/3),s.face.materialIndex=x.materialIndex,t.push(s))}}else{const m=Math.max(0,f.start),g=Math.min(c.count,f.start+f.count);for(let x=m,p=g;x<p;x+=3){const v=x,y=x+1,b=x+2;s=_a(this,a,e,n,h,l,u,v,y,b),s&&(s.faceIndex=Math.floor(x/3),t.push(s))}}}}function Z0(i,e,t,n,s,r,a,o){let c;if(e.side===xn?c=n.intersectTriangle(a,r,s,!0,o):c=n.intersectTriangle(s,r,a,e.side===Hi,o),c===null)return null;ga.copy(o),ga.applyMatrix4(i.matrixWorld);const h=t.ray.origin.distanceTo(ga);return h<t.near||h>t.far?null:{distance:h,point:ga.clone(),object:i}}function _a(i,e,t,n,s,r,a,o,c,h){i.getVertexPosition(o,fa),i.getVertexPosition(c,pa),i.getVertexPosition(h,ma);const l=Z0(i,e,t,n,fa,pa,ma,Kh);if(l){const u=new I;Gn.getBarycoord(Kh,fa,pa,ma,u),s&&(l.uv=Gn.getInterpolatedAttribute(s,o,c,h,u,new le)),r&&(l.uv1=Gn.getInterpolatedAttribute(r,o,c,h,u,new le)),a&&(l.normal=Gn.getInterpolatedAttribute(a,o,c,h,u,new I),l.normal.dot(n.direction)>0&&l.normal.multiplyScalar(-1));const d={a:o,b:c,c:h,normal:new I,materialIndex:0};Gn.getNormal(fa,pa,ma,d.normal),l.face=d,l.barycoord=u}return l}class mt extends Ut{constructor(e=1,t=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};const o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);const c=[],h=[],l=[],u=[];let d=0,f=0;m("z","y","x",-1,-1,n,t,e,a,r,0),m("z","y","x",1,-1,n,t,-e,a,r,1),m("x","z","y",1,1,e,n,t,s,a,2),m("x","z","y",1,-1,e,n,-t,s,a,3),m("x","y","z",1,-1,e,t,n,s,r,4),m("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(c),this.setAttribute("position",new Et(h,3)),this.setAttribute("normal",new Et(l,3)),this.setAttribute("uv",new Et(u,2));function m(g,x,p,v,y,b,R,T,w,D,E){const S=b/w,P=R/D,N=b/2,B=R/2,q=T/2,z=w+1,G=D+1;let J=0,k=0;const re=new I;for(let de=0;de<G;de++){const Ce=de*P-B;for(let Ke=0;Ke<z;Ke++){const Ze=Ke*S-N;re[g]=Ze*v,re[x]=Ce*y,re[p]=q,h.push(re.x,re.y,re.z),re[g]=0,re[x]=0,re[p]=T>0?1:-1,l.push(re.x,re.y,re.z),u.push(Ke/w),u.push(1-de/D),J+=1}}for(let de=0;de<D;de++)for(let Ce=0;Ce<w;Ce++){const Ke=d+Ce+z*de,Ze=d+Ce+z*(de+1),rt=d+(Ce+1)+z*(de+1),lt=d+(Ce+1)+z*de;c.push(Ke,Ze,lt),c.push(Ze,rt,lt),k+=6}o.addGroup(f,k,E),f+=k,d+=J}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new mt(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Qs(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const s=i[t][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(je("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone():Array.isArray(s)?e[t][n]=s.slice():e[t][n]=s}}return e}function tn(i){const e={};for(let t=0;t<i.length;t++){const n=Qs(i[t]);for(const s in n)e[s]=n[s]}return e}function Q0(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function qd(i){const e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:ct.workingColorSpace}const Or={clone:Qs,merge:tn};var em=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,tm=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Kt extends vs{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=em,this.fragmentShader=tm,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Qs(e.uniforms),this.uniformsGroups=Q0(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const s in this.uniforms){const a=this.uniforms[s].value;a&&a.isTexture?t.uniforms[s]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[s]={type:"m4",value:a.toArray()}:t.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class Yd extends Nt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new yt,this.projectionMatrix=new yt,this.projectionMatrixInverse=new yt,this.coordinateSystem=ii,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Pi=new I,Jh=new le,Zh=new le;class pn extends Yd{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Za*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Po*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Za*2*Math.atan(Math.tan(Po*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Pi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Pi.x,Pi.y).multiplyScalar(-e/Pi.z),Pi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Pi.x,Pi.y).multiplyScalar(-e/Pi.z)}getViewSize(e,t){return this.getViewBounds(e,Jh,Zh),t.subVectors(Zh,Jh)}setViewOffset(e,t,n,s,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Po*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s;const a=this.view;if(this.view!==null&&this.view.enabled){const c=a.fullWidth,h=a.fullHeight;r+=a.offsetX*s/c,t-=a.offsetY*n/h,s*=a.width/c,n*=a.height/h}const o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const ks=-90,zs=1;class nm extends Nt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new pn(ks,zs,e,t);s.layers=this.layers,this.add(s);const r=new pn(ks,zs,e,t);r.layers=this.layers,this.add(r);const a=new pn(ks,zs,e,t);a.layers=this.layers,this.add(a);const o=new pn(ks,zs,e,t);o.layers=this.layers,this.add(o);const c=new pn(ks,zs,e,t);c.layers=this.layers,this.add(c);const h=new pn(ks,zs,e,t);h.layers=this.layers,this.add(h)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,s,r,a,o,c]=t;for(const h of t)this.remove(h);if(e===ii)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===Ka)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const h of t)this.add(h),h.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,a,o,c,h,l]=this.children,u=e.getRenderTarget(),d=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),m=e.xr.enabled;e.xr.enabled=!1;const g=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,s),e.render(t,r),e.setRenderTarget(n,1,s),e.render(t,a),e.setRenderTarget(n,2,s),e.render(t,o),e.setRenderTarget(n,3,s),e.render(t,c),e.setRenderTarget(n,4,s),e.render(t,h),n.texture.generateMipmaps=g,e.setRenderTarget(n,5,s),e.render(t,l),e.setRenderTarget(u,d,f),e.xr.enabled=m,n.texture.needsPMREMUpdate=!0}}class jd extends Jt{constructor(e=[],t=Ks,n,s,r,a,o,c,h,l){super(e,t,n,s,r,a,o,c,h,l),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class im extends qn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new jd(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new mt(5,5,5),r=new Kt({name:"CubemapFromEquirect",uniforms:Qs(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:xn,blending:si});r.uniforms.tEquirect.value=t;const a=new ye(s,r),o=t.minFilter;return t.minFilter===hs&&(t.minFilter=Ln),new nm(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,s=!0){const r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,s);e.setRenderTarget(r)}}class Vn extends Nt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const sm={type:"move"};class Zo{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Vn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Vn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new I,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new I),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Vn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new I,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new I),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,a=null;const o=this._targetRay,c=this._grip,h=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(h&&e.hand){a=!0;for(const g of e.hand.values()){const x=t.getJointPose(g,n),p=this._getHandJoint(h,g);x!==null&&(p.matrix.fromArray(x.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=x.radius),p.visible=x!==null}const l=h.joints["index-finger-tip"],u=h.joints["thumb-tip"],d=l.position.distanceTo(u.position),f=.02,m=.005;h.inputState.pinching&&d>f+m?(h.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!h.inputState.pinching&&d<=f-m&&(h.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));o!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(sm)))}return o!==null&&(o.visible=s!==null),c!==null&&(c.visible=r!==null),h!==null&&(h.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new Vn;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}class Ql{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new He(e),this.density=t}clone(){return new Ql(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class Kd extends Nt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new oi,this.environmentIntensity=1,this.environmentRotation=new oi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class rm extends Jt{constructor(e=null,t=1,n=1,s,r,a,o,c,h=bn,l=bn,u,d){super(null,a,o,c,h,l,s,r,u,d),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Qo=new I,am=new I,om=new Je;class Ii{constructor(e=new I(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const s=Qo.subVectors(n,t).cross(am.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(Qo),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||om.getNormalMatrix(e),s=this.coplanarPoint(Qo).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Qi=new Yr,cm=new le(.5,.5),va=new I;class eh{constructor(e=new Ii,t=new Ii,n=new Ii,s=new Ii,r=new Ii,a=new Ii){this.planes=[e,t,n,s,r,a]}set(e,t,n,s,r,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=ii,n=!1){const s=this.planes,r=e.elements,a=r[0],o=r[1],c=r[2],h=r[3],l=r[4],u=r[5],d=r[6],f=r[7],m=r[8],g=r[9],x=r[10],p=r[11],v=r[12],y=r[13],b=r[14],R=r[15];if(s[0].setComponents(h-a,f-l,p-m,R-v).normalize(),s[1].setComponents(h+a,f+l,p+m,R+v).normalize(),s[2].setComponents(h+o,f+u,p+g,R+y).normalize(),s[3].setComponents(h-o,f-u,p-g,R-y).normalize(),n)s[4].setComponents(c,d,x,b).normalize(),s[5].setComponents(h-c,f-d,p-x,R-b).normalize();else if(s[4].setComponents(h-c,f-d,p-x,R-b).normalize(),t===ii)s[5].setComponents(h+c,f+d,p+x,R+b).normalize();else if(t===Ka)s[5].setComponents(c,d,x,b).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Qi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Qi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Qi)}intersectsSprite(e){Qi.center.set(0,0,0);const t=cm.distanceTo(e.center);return Qi.radius=.7071067811865476+t,Qi.applyMatrix4(e.matrixWorld),this.intersectsSphere(Qi)}intersectsSphere(e){const t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const s=t[n];if(va.x=s.normal.x>0?e.max.x:e.min.x,va.y=s.normal.y>0?e.max.y:e.min.y,va.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(va)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Hs extends vs{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new He(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Qa=new I,eo=new I,Qh=new yt,xr=new po,ya=new Yr,ec=new I,eu=new I;class gr extends Nt{constructor(e=new Ut,t=new Hs){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let s=1,r=t.count;s<r;s++)Qa.fromBufferAttribute(t,s-1),eo.fromBufferAttribute(t,s),n[s]=n[s-1],n[s]+=Qa.distanceTo(eo);e.setAttribute("lineDistance",new Et(n,1))}else je("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),ya.copy(n.boundingSphere),ya.applyMatrix4(s),ya.radius+=r,e.ray.intersectsSphere(ya)===!1)return;Qh.copy(s).invert(),xr.copy(e.ray).applyMatrix4(Qh);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,h=this.isLineSegments?2:1,l=n.index,d=n.attributes.position;if(l!==null){const f=Math.max(0,a.start),m=Math.min(l.count,a.start+a.count);for(let g=f,x=m-1;g<x;g+=h){const p=l.getX(g),v=l.getX(g+1),y=Sa(this,e,xr,c,p,v,g);y&&t.push(y)}if(this.isLineLoop){const g=l.getX(m-1),x=l.getX(f),p=Sa(this,e,xr,c,g,x,m-1);p&&t.push(p)}}else{const f=Math.max(0,a.start),m=Math.min(d.count,a.start+a.count);for(let g=f,x=m-1;g<x;g+=h){const p=Sa(this,e,xr,c,g,g+1,g);p&&t.push(p)}if(this.isLineLoop){const g=Sa(this,e,xr,c,m-1,f,m-1);g&&t.push(g)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function Sa(i,e,t,n,s,r,a){const o=i.geometry.attributes.position;if(Qa.fromBufferAttribute(o,s),eo.fromBufferAttribute(o,r),t.distanceSqToSegment(Qa,eo,ec,eu)>n)return;ec.applyMatrix4(i.matrixWorld);const h=e.ray.origin.distanceTo(ec);if(!(h<e.near||h>e.far))return{distance:h,point:eu.clone().applyMatrix4(i.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:i}}class Jd extends vs{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new He(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const tu=new yt,ml=new po,Ma=new Yr,ba=new I;class lm extends Nt{constructor(e=new Ut,t=new Jd){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Ma.copy(n.boundingSphere),Ma.applyMatrix4(s),Ma.radius+=r,e.ray.intersectsSphere(Ma)===!1)return;tu.copy(s).invert(),ml.copy(e.ray).applyMatrix4(tu);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,h=n.index,u=n.attributes.position;if(h!==null){const d=Math.max(0,a.start),f=Math.min(h.count,a.start+a.count);for(let m=d,g=f;m<g;m++){const x=h.getX(m);ba.fromBufferAttribute(u,x),nu(ba,x,c,s,e,t,this)}}else{const d=Math.max(0,a.start),f=Math.min(u.count,a.start+a.count);for(let m=d,g=f;m<g;m++)ba.fromBufferAttribute(u,m),nu(ba,m,c,s,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function nu(i,e,t,n,s,r,a){const o=ml.distanceSqToPoint(i);if(o<t){const c=new I;ml.closestPointToPoint(i,c),c.applyMatrix4(n);const h=s.ray.origin.distanceTo(c);if(h<s.near||h>s.far)return;r.push({distance:h,distanceToRay:Math.sqrt(o),point:c,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}class Ei extends Jt{constructor(e,t,n,s,r,a,o,c,h){super(e,t,n,s,r,a,o,c,h),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Zd extends Jt{constructor(e,t,n=ds,s,r,a,o=bn,c=bn,h,l=Dr,u=1){if(l!==Dr&&l!==Ur)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const d={width:e,height:t,depth:u};super(d,s,r,a,o,c,l,n,h),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Jl(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class Qd extends Jt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class th extends Ut{constructor(e=1,t=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:s},t=Math.max(3,t);const r=[],a=[],o=[],c=[],h=new I,l=new le;a.push(0,0,0),o.push(0,0,1),c.push(.5,.5);for(let u=0,d=3;u<=t;u++,d+=3){const f=n+u/t*s;h.x=e*Math.cos(f),h.y=e*Math.sin(f),a.push(h.x,h.y,h.z),o.push(0,0,1),l.x=(a[d]/e+1)/2,l.y=(a[d+1]/e+1)/2,c.push(l.x,l.y)}for(let u=1;u<=t;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new Et(a,3)),this.setAttribute("normal",new Et(o,3)),this.setAttribute("uv",new Et(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new th(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class sn extends Ut{constructor(e=1,t=1,n=1,s=32,r=1,a=!1,o=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:c};const h=this;s=Math.floor(s),r=Math.floor(r);const l=[],u=[],d=[],f=[];let m=0;const g=[],x=n/2;let p=0;v(),a===!1&&(e>0&&y(!0),t>0&&y(!1)),this.setIndex(l),this.setAttribute("position",new Et(u,3)),this.setAttribute("normal",new Et(d,3)),this.setAttribute("uv",new Et(f,2));function v(){const b=new I,R=new I;let T=0;const w=(t-e)/n;for(let D=0;D<=r;D++){const E=[],S=D/r,P=S*(t-e)+e;for(let N=0;N<=s;N++){const B=N/s,q=B*c+o,z=Math.sin(q),G=Math.cos(q);R.x=P*z,R.y=-S*n+x,R.z=P*G,u.push(R.x,R.y,R.z),b.set(z,w,G).normalize(),d.push(b.x,b.y,b.z),f.push(B,1-S),E.push(m++)}g.push(E)}for(let D=0;D<s;D++)for(let E=0;E<r;E++){const S=g[E][D],P=g[E+1][D],N=g[E+1][D+1],B=g[E][D+1];(e>0||E!==0)&&(l.push(S,P,B),T+=3),(t>0||E!==r-1)&&(l.push(P,N,B),T+=3)}h.addGroup(p,T,0),p+=T}function y(b){const R=m,T=new le,w=new I;let D=0;const E=b===!0?e:t,S=b===!0?1:-1;for(let N=1;N<=s;N++)u.push(0,x*S,0),d.push(0,S,0),f.push(.5,.5),m++;const P=m;for(let N=0;N<=s;N++){const q=N/s*c+o,z=Math.cos(q),G=Math.sin(q);w.x=E*G,w.y=x*S,w.z=E*z,u.push(w.x,w.y,w.z),d.push(0,S,0),T.x=z*.5+.5,T.y=G*.5*S+.5,f.push(T.x,T.y),m++}for(let N=0;N<s;N++){const B=R+N,q=P+N;b===!0?l.push(q,q+1,B):l.push(q+1,q,B),D+=3}h.addGroup(p,D,b===!0?1:2),p+=D}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new sn(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class ci{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){je("Curve: .getPoint() not implemented.")}getPointAt(e,t){const n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let n,s=this.getPoint(0),r=0;t.push(0);for(let a=1;a<=e;a++)n=this.getPoint(a/e),r+=n.distanceTo(s),t.push(r),s=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){const n=this.getLengths();let s=0;const r=n.length;let a;t?a=t:a=e*n[r-1];let o=0,c=r-1,h;for(;o<=c;)if(s=Math.floor(o+(c-o)/2),h=n[s]-a,h<0)o=s+1;else if(h>0)c=s-1;else{c=s;break}if(s=c,n[s]===a)return s/(r-1);const l=n[s],d=n[s+1]-l,f=(a-l)/d;return(s+f)/(r-1)}getTangent(e,t){let s=e-1e-4,r=e+1e-4;s<0&&(s=0),r>1&&(r=1);const a=this.getPoint(s),o=this.getPoint(r),c=t||(a.isVector2?new le:new I);return c.copy(o).sub(a).normalize(),c}getTangentAt(e,t){const n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t=!1){const n=new I,s=[],r=[],a=[],o=new I,c=new yt;for(let f=0;f<=e;f++){const m=f/e;s[f]=this.getTangentAt(m,new I)}r[0]=new I,a[0]=new I;let h=Number.MAX_VALUE;const l=Math.abs(s[0].x),u=Math.abs(s[0].y),d=Math.abs(s[0].z);l<=h&&(h=l,n.set(1,0,0)),u<=h&&(h=u,n.set(0,1,0)),d<=h&&n.set(0,0,1),o.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],o),a[0].crossVectors(s[0],r[0]);for(let f=1;f<=e;f++){if(r[f]=r[f-1].clone(),a[f]=a[f-1].clone(),o.crossVectors(s[f-1],s[f]),o.length()>Number.EPSILON){o.normalize();const m=Math.acos(tt(s[f-1].dot(s[f]),-1,1));r[f].applyMatrix4(c.makeRotationAxis(o,m))}a[f].crossVectors(s[f],r[f])}if(t===!0){let f=Math.acos(tt(r[0].dot(r[e]),-1,1));f/=e,s[0].dot(o.crossVectors(r[0],r[e]))>0&&(f=-f);for(let m=1;m<=e;m++)r[m].applyMatrix4(c.makeRotationAxis(s[m],f*m)),a[m].crossVectors(s[m],r[m])}return{tangents:s,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class nh extends ci{constructor(e=0,t=0,n=1,s=1,r=0,a=Math.PI*2,o=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=c}getPoint(e,t=new le){const n=t,s=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(a?r=0:r=s),this.aClockwise===!0&&!a&&(r===s?r=-s:r=r-s);const o=this.aStartAngle+e*r;let c=this.aX+this.xRadius*Math.cos(o),h=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){const l=Math.cos(this.aRotation),u=Math.sin(this.aRotation),d=c-this.aX,f=h-this.aY;c=d*l-f*u+this.aX,h=d*u+f*l+this.aY}return n.set(c,h)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class hm extends nh{constructor(e,t,n,s,r,a){super(e,t,n,n,s,r,a),this.isArcCurve=!0,this.type="ArcCurve"}}function ih(){let i=0,e=0,t=0,n=0;function s(r,a,o,c){i=r,e=o,t=-3*r+3*a-2*o-c,n=2*r-2*a+o+c}return{initCatmullRom:function(r,a,o,c,h){s(a,o,h*(o-r),h*(c-a))},initNonuniformCatmullRom:function(r,a,o,c,h,l,u){let d=(a-r)/h-(o-r)/(h+l)+(o-a)/l,f=(o-a)/l-(c-a)/(l+u)+(c-o)/u;d*=l,f*=l,s(a,o,d,f)},calc:function(r){const a=r*r,o=a*r;return i+e*r+t*a+n*o}}}const Ea=new I,tc=new ih,nc=new ih,ic=new ih;class um extends ci{constructor(e=[],t=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=s}getPoint(e,t=new I){const n=t,s=this.points,r=s.length,a=(r-(this.closed?0:1))*e;let o=Math.floor(a),c=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:c===0&&o===r-1&&(o=r-2,c=1);let h,l;this.closed||o>0?h=s[(o-1)%r]:(Ea.subVectors(s[0],s[1]).add(s[0]),h=Ea);const u=s[o%r],d=s[(o+1)%r];if(this.closed||o+2<r?l=s[(o+2)%r]:(Ea.subVectors(s[r-1],s[r-2]).add(s[r-1]),l=Ea),this.curveType==="centripetal"||this.curveType==="chordal"){const f=this.curveType==="chordal"?.5:.25;let m=Math.pow(h.distanceToSquared(u),f),g=Math.pow(u.distanceToSquared(d),f),x=Math.pow(d.distanceToSquared(l),f);g<1e-4&&(g=1),m<1e-4&&(m=g),x<1e-4&&(x=g),tc.initNonuniformCatmullRom(h.x,u.x,d.x,l.x,m,g,x),nc.initNonuniformCatmullRom(h.y,u.y,d.y,l.y,m,g,x),ic.initNonuniformCatmullRom(h.z,u.z,d.z,l.z,m,g,x)}else this.curveType==="catmullrom"&&(tc.initCatmullRom(h.x,u.x,d.x,l.x,this.tension),nc.initCatmullRom(h.y,u.y,d.y,l.y,this.tension),ic.initCatmullRom(h.z,u.z,d.z,l.z,this.tension));return n.set(tc.calc(c),nc.calc(c),ic.calc(c)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const s=e.points[t];this.points.push(new I().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function iu(i,e,t,n,s){const r=(n-e)*.5,a=(s-t)*.5,o=i*i,c=i*o;return(2*t-2*n+r+a)*c+(-3*t+3*n-2*r-a)*o+r*i+t}function dm(i,e){const t=1-i;return t*t*e}function fm(i,e){return 2*(1-i)*i*e}function pm(i,e){return i*i*e}function Cr(i,e,t,n){return dm(i,e)+fm(i,t)+pm(i,n)}function mm(i,e){const t=1-i;return t*t*t*e}function xm(i,e){const t=1-i;return 3*t*t*i*e}function gm(i,e){return 3*(1-i)*i*i*e}function _m(i,e){return i*i*i*e}function Ar(i,e,t,n,s){return mm(i,e)+xm(i,t)+gm(i,n)+_m(i,s)}class ef extends ci{constructor(e=new le,t=new le,n=new le,s=new le){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new le){const n=t,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(Ar(e,s.x,r.x,a.x,o.x),Ar(e,s.y,r.y,a.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class vm extends ci{constructor(e=new I,t=new I,n=new I,s=new I){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new I){const n=t,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(Ar(e,s.x,r.x,a.x,o.x),Ar(e,s.y,r.y,a.y,o.y),Ar(e,s.z,r.z,a.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class tf extends ci{constructor(e=new le,t=new le){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new le){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new le){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class ym extends ci{constructor(e=new I,t=new I){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new I){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new I){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class nf extends ci{constructor(e=new le,t=new le,n=new le){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new le){const n=t,s=this.v0,r=this.v1,a=this.v2;return n.set(Cr(e,s.x,r.x,a.x),Cr(e,s.y,r.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Sm extends ci{constructor(e=new I,t=new I,n=new I){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new I){const n=t,s=this.v0,r=this.v1,a=this.v2;return n.set(Cr(e,s.x,r.x,a.x),Cr(e,s.y,r.y,a.y),Cr(e,s.z,r.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class sf extends ci{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new le){const n=t,s=this.points,r=(s.length-1)*e,a=Math.floor(r),o=r-a,c=s[a===0?a:a-1],h=s[a],l=s[a>s.length-2?s.length-1:a+1],u=s[a>s.length-3?s.length-1:a+2];return n.set(iu(o,c.x,h.x,l.x,u.x),iu(o,c.y,h.y,l.y,u.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const s=e.points[t];this.points.push(s.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const s=this.points[t];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const s=e.points[t];this.points.push(new le().fromArray(s))}return this}}var xl=Object.freeze({__proto__:null,ArcCurve:hm,CatmullRomCurve3:um,CubicBezierCurve:ef,CubicBezierCurve3:vm,EllipseCurve:nh,LineCurve:tf,LineCurve3:ym,QuadraticBezierCurve:nf,QuadraticBezierCurve3:Sm,SplineCurve:sf});class Mm extends ci{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){const e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){const n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new xl[n](t,e))}return this}getPoint(e,t){const n=e*this.getLength(),s=this.getCurveLengths();let r=0;for(;r<s.length;){if(s[r]>=n){const a=s[r]-n,o=this.curves[r],c=o.getLength(),h=c===0?0:1-a/c;return o.getPointAt(h,t)}r++}return null}getLength(){const e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let t=0;for(let n=0,s=this.curves.length;n<s;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){const t=[];let n;for(let s=0,r=this.curves;s<r.length;s++){const a=r[s],o=a.isEllipseCurve?e*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?e*a.points.length:e,c=a.getPoints(o);for(let h=0;h<c.length;h++){const l=c[h];n&&n.equals(l)||(t.push(l),n=l)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const s=e.curves[t];this.curves.push(s.clone())}return this.autoClose=e.autoClose,this}toJSON(){const e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){const s=this.curves[t];e.curves.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const s=e.curves[t];this.curves.push(new xl[s.type]().fromJSON(s))}return this}}class gl extends Mm{constructor(e){super(),this.type="Path",this.currentPoint=new le,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){const n=new tf(this.currentPoint.clone(),new le(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,s){const r=new nf(this.currentPoint.clone(),new le(e,t),new le(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(e,t,n,s,r,a){const o=new ef(this.currentPoint.clone(),new le(e,t),new le(n,s),new le(r,a));return this.curves.push(o),this.currentPoint.set(r,a),this}splineThru(e){const t=[this.currentPoint.clone()].concat(e),n=new sf(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,s,r,a){const o=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(e+o,t+c,n,s,r,a),this}absarc(e,t,n,s,r,a){return this.absellipse(e,t,n,n,s,r,a),this}ellipse(e,t,n,s,r,a,o,c){const h=this.currentPoint.x,l=this.currentPoint.y;return this.absellipse(e+h,t+l,n,s,r,a,o,c),this}absellipse(e,t,n,s,r,a,o,c){const h=new nh(e,t,n,s,r,a,o,c);if(this.curves.length>0){const u=h.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(h);const l=h.getPoint(1);return this.currentPoint.copy(l),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){const e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}}class or extends gl{constructor(e){super(e),this.uuid=rr(),this.type="Shape",this.holes=[]}getPointsHoles(e){const t=[];for(let n=0,s=this.holes.length;n<s;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const s=e.holes[t];this.holes.push(s.clone())}return this}toJSON(){const e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){const s=this.holes[t];e.holes.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const s=e.holes[t];this.holes.push(new gl().fromJSON(s))}return this}}function bm(i,e,t=2){const n=e&&e.length,s=n?e[0]*t:i.length;let r=rf(i,0,s,t,!0);const a=[];if(!r||r.next===r.prev)return a;let o,c,h;if(n&&(r=Rm(i,e,r,t)),i.length>80*t){o=i[0],c=i[1];let l=o,u=c;for(let d=t;d<s;d+=t){const f=i[d],m=i[d+1];f<o&&(o=f),m<c&&(c=m),f>l&&(l=f),m>u&&(u=m)}h=Math.max(l-o,u-c),h=h!==0?32767/h:0}return Fr(r,a,t,o,c,h,0),a}function rf(i,e,t,n,s){let r;if(s===km(i,e,t,n)>0)for(let a=e;a<t;a+=n)r=su(a/n|0,i[a],i[a+1],r);else for(let a=t-n;a>=e;a-=n)r=su(a/n|0,i[a],i[a+1],r);return r&&er(r,r.next)&&(kr(r),r=r.next),r}function fs(i,e){if(!i)return i;e||(e=i);let t=i,n;do if(n=!1,!t.steiner&&(er(t,t.next)||wt(t.prev,t,t.next)===0)){if(kr(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function Fr(i,e,t,n,s,r,a){if(!i)return;!a&&r&&Dm(i,n,s,r);let o=i;for(;i.prev!==i.next;){const c=i.prev,h=i.next;if(r?Tm(i,n,s,r):Em(i)){e.push(c.i,i.i,h.i),kr(i),i=h.next,o=h.next;continue}if(i=h,i===o){a?a===1?(i=Cm(fs(i),e),Fr(i,e,t,n,s,r,2)):a===2&&Am(i,e,t,n,s,r):Fr(fs(i),e,t,n,s,r,1);break}}}function Em(i){const e=i.prev,t=i,n=i.next;if(wt(e,t,n)>=0)return!1;const s=e.x,r=t.x,a=n.x,o=e.y,c=t.y,h=n.y,l=Math.min(s,r,a),u=Math.min(o,c,h),d=Math.max(s,r,a),f=Math.max(o,c,h);let m=n.next;for(;m!==e;){if(m.x>=l&&m.x<=d&&m.y>=u&&m.y<=f&&Sr(s,o,r,c,a,h,m.x,m.y)&&wt(m.prev,m,m.next)>=0)return!1;m=m.next}return!0}function Tm(i,e,t,n){const s=i.prev,r=i,a=i.next;if(wt(s,r,a)>=0)return!1;const o=s.x,c=r.x,h=a.x,l=s.y,u=r.y,d=a.y,f=Math.min(o,c,h),m=Math.min(l,u,d),g=Math.max(o,c,h),x=Math.max(l,u,d),p=_l(f,m,e,t,n),v=_l(g,x,e,t,n);let y=i.prevZ,b=i.nextZ;for(;y&&y.z>=p&&b&&b.z<=v;){if(y.x>=f&&y.x<=g&&y.y>=m&&y.y<=x&&y!==s&&y!==a&&Sr(o,l,c,u,h,d,y.x,y.y)&&wt(y.prev,y,y.next)>=0||(y=y.prevZ,b.x>=f&&b.x<=g&&b.y>=m&&b.y<=x&&b!==s&&b!==a&&Sr(o,l,c,u,h,d,b.x,b.y)&&wt(b.prev,b,b.next)>=0))return!1;b=b.nextZ}for(;y&&y.z>=p;){if(y.x>=f&&y.x<=g&&y.y>=m&&y.y<=x&&y!==s&&y!==a&&Sr(o,l,c,u,h,d,y.x,y.y)&&wt(y.prev,y,y.next)>=0)return!1;y=y.prevZ}for(;b&&b.z<=v;){if(b.x>=f&&b.x<=g&&b.y>=m&&b.y<=x&&b!==s&&b!==a&&Sr(o,l,c,u,h,d,b.x,b.y)&&wt(b.prev,b,b.next)>=0)return!1;b=b.nextZ}return!0}function Cm(i,e){let t=i;do{const n=t.prev,s=t.next.next;!er(n,s)&&of(n,t,t.next,s)&&Br(n,s)&&Br(s,n)&&(e.push(n.i,t.i,s.i),kr(t),kr(t.next),t=i=s),t=t.next}while(t!==i);return fs(t)}function Am(i,e,t,n,s,r){let a=i;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&Om(a,o)){let c=cf(a,o);a=fs(a,a.next),c=fs(c,c.next),Fr(a,e,t,n,s,r,0),Fr(c,e,t,n,s,r,0);return}o=o.next}a=a.next}while(a!==i)}function Rm(i,e,t,n){const s=[];for(let r=0,a=e.length;r<a;r++){const o=e[r]*n,c=r<a-1?e[r+1]*n:i.length,h=rf(i,o,c,n,!1);h===h.next&&(h.steiner=!0),s.push(Nm(h))}s.sort(wm);for(let r=0;r<s.length;r++)t=Pm(s[r],t);return t}function wm(i,e){let t=i.x-e.x;if(t===0&&(t=i.y-e.y,t===0)){const n=(i.next.y-i.y)/(i.next.x-i.x),s=(e.next.y-e.y)/(e.next.x-e.x);t=n-s}return t}function Pm(i,e){const t=Lm(i,e);if(!t)return e;const n=cf(t,i);return fs(n,n.next),fs(t,t.next)}function Lm(i,e){let t=e;const n=i.x,s=i.y;let r=-1/0,a;if(er(i,t))return t;do{if(er(i,t.next))return t.next;if(s<=t.y&&s>=t.next.y&&t.next.y!==t.y){const u=t.x+(s-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(u<=n&&u>r&&(r=u,a=t.x<t.next.x?t:t.next,u===n))return a}t=t.next}while(t!==e);if(!a)return null;const o=a,c=a.x,h=a.y;let l=1/0;t=a;do{if(n>=t.x&&t.x>=c&&n!==t.x&&af(s<h?n:r,s,c,h,s<h?r:n,s,t.x,t.y)){const u=Math.abs(s-t.y)/(n-t.x);Br(t,i)&&(u<l||u===l&&(t.x>a.x||t.x===a.x&&Im(a,t)))&&(a=t,l=u)}t=t.next}while(t!==o);return a}function Im(i,e){return wt(i.prev,i,e.prev)<0&&wt(e.next,i,i.next)<0}function Dm(i,e,t,n){let s=i;do s.z===0&&(s.z=_l(s.x,s.y,e,t,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,Um(s)}function Um(i){let e,t=1;do{let n=i,s;i=null;let r=null;for(e=0;n;){e++;let a=n,o=0;for(let h=0;h<t&&(o++,a=a.nextZ,!!a);h++);let c=t;for(;o>0||c>0&&a;)o!==0&&(c===0||!a||n.z<=a.z)?(s=n,n=n.nextZ,o--):(s=a,a=a.nextZ,c--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;n=a}r.nextZ=null,t*=2}while(e>1);return i}function _l(i,e,t,n,s){return i=(i-t)*s|0,e=(e-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,i|e<<1}function Nm(i){let e=i,t=i;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==i);return t}function af(i,e,t,n,s,r,a,o){return(s-a)*(e-o)>=(i-a)*(r-o)&&(i-a)*(n-o)>=(t-a)*(e-o)&&(t-a)*(r-o)>=(s-a)*(n-o)}function Sr(i,e,t,n,s,r,a,o){return!(i===a&&e===o)&&af(i,e,t,n,s,r,a,o)}function Om(i,e){return i.next.i!==e.i&&i.prev.i!==e.i&&!Fm(i,e)&&(Br(i,e)&&Br(e,i)&&Bm(i,e)&&(wt(i.prev,i,e.prev)||wt(i,e.prev,e))||er(i,e)&&wt(i.prev,i,i.next)>0&&wt(e.prev,e,e.next)>0)}function wt(i,e,t){return(e.y-i.y)*(t.x-e.x)-(e.x-i.x)*(t.y-e.y)}function er(i,e){return i.x===e.x&&i.y===e.y}function of(i,e,t,n){const s=Ca(wt(i,e,t)),r=Ca(wt(i,e,n)),a=Ca(wt(t,n,i)),o=Ca(wt(t,n,e));return!!(s!==r&&a!==o||s===0&&Ta(i,t,e)||r===0&&Ta(i,n,e)||a===0&&Ta(t,i,n)||o===0&&Ta(t,e,n))}function Ta(i,e,t){return e.x<=Math.max(i.x,t.x)&&e.x>=Math.min(i.x,t.x)&&e.y<=Math.max(i.y,t.y)&&e.y>=Math.min(i.y,t.y)}function Ca(i){return i>0?1:i<0?-1:0}function Fm(i,e){let t=i;do{if(t.i!==i.i&&t.next.i!==i.i&&t.i!==e.i&&t.next.i!==e.i&&of(t,t.next,i,e))return!0;t=t.next}while(t!==i);return!1}function Br(i,e){return wt(i.prev,i,i.next)<0?wt(i,e,i.next)>=0&&wt(i,i.prev,e)>=0:wt(i,e,i.prev)<0||wt(i,i.next,e)<0}function Bm(i,e){let t=i,n=!1;const s=(i.x+e.x)/2,r=(i.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&s<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==i);return n}function cf(i,e){const t=vl(i.i,i.x,i.y),n=vl(e.i,e.x,e.y),s=i.next,r=e.prev;return i.next=e,e.prev=i,t.next=s,s.prev=t,n.next=t,t.prev=n,r.next=n,n.prev=r,n}function su(i,e,t,n){const s=vl(i,e,t);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function kr(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function vl(i,e,t){return{i,x:e,y:t,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function km(i,e,t,n){let s=0;for(let r=e,a=t-n;r<t;r+=n)s+=(i[a]-i[r])*(i[r+1]+i[a+1]),a=r;return s}class zm{static triangulate(e,t,n=2){return bm(e,t,n)}}class Ws{static area(e){const t=e.length;let n=0;for(let s=t-1,r=0;r<t;s=r++)n+=e[s].x*e[r].y-e[r].x*e[s].y;return n*.5}static isClockWise(e){return Ws.area(e)<0}static triangulateShape(e,t){const n=[],s=[],r=[];ru(e),au(n,e);let a=e.length;t.forEach(ru);for(let c=0;c<t.length;c++)s.push(a),a+=t[c].length,au(n,t[c]);const o=zm.triangulate(n,s);for(let c=0;c<o.length;c+=3)r.push(o.slice(c,c+3));return r}}function ru(i){const e=i.length;e>2&&i[e-1].equals(i[0])&&i.pop()}function au(i,e){for(let t=0;t<e.length;t++)i.push(e[t].x),i.push(e[t].y)}class ys extends Ut{constructor(e=new or([new le(.5,.5),new le(-.5,.5),new le(-.5,-.5),new le(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];const n=this,s=[],r=[];for(let o=0,c=e.length;o<c;o++){const h=e[o];a(h)}this.setAttribute("position",new Et(s,3)),this.setAttribute("uv",new Et(r,2)),this.computeVertexNormals();function a(o){const c=[],h=t.curveSegments!==void 0?t.curveSegments:12,l=t.steps!==void 0?t.steps:1,u=t.depth!==void 0?t.depth:1;let d=t.bevelEnabled!==void 0?t.bevelEnabled:!0,f=t.bevelThickness!==void 0?t.bevelThickness:.2,m=t.bevelSize!==void 0?t.bevelSize:f-.1,g=t.bevelOffset!==void 0?t.bevelOffset:0,x=t.bevelSegments!==void 0?t.bevelSegments:3;const p=t.extrudePath,v=t.UVGenerator!==void 0?t.UVGenerator:Gm;let y,b=!1,R,T,w,D;p&&(y=p.getSpacedPoints(l),b=!0,d=!1,R=p.computeFrenetFrames(l,!1),T=new I,w=new I,D=new I),d||(x=0,f=0,m=0,g=0);const E=o.extractPoints(h);let S=E.shape;const P=E.holes;if(!Ws.isClockWise(S)){S=S.reverse();for(let ne=0,A=P.length;ne<A;ne++){const se=P[ne];Ws.isClockWise(se)&&(P[ne]=se.reverse())}}function B(ne){const se=10000000000000001e-36;let oe=ne[0];for(let he=1;he<=ne.length;he++){const ae=he%ne.length,Re=ne[ae],ge=Re.x-oe.x,be=Re.y-oe.y,C=ge*ge+be*be,_=Math.max(Math.abs(Re.x),Math.abs(Re.y),Math.abs(oe.x),Math.abs(oe.y)),F=se*_*_;if(C<=F){ne.splice(ae,1),he--;continue}oe=Re}}B(S),P.forEach(B);const q=P.length,z=S;for(let ne=0;ne<q;ne++){const A=P[ne];S=S.concat(A)}function G(ne,A,se){return A||Rt("ExtrudeGeometry: vec does not exist"),ne.clone().addScaledVector(A,se)}const J=S.length;function k(ne,A,se){let oe,he,ae;const Re=ne.x-A.x,ge=ne.y-A.y,be=se.x-ne.x,C=se.y-ne.y,_=Re*Re+ge*ge,F=Re*C-ge*be;if(Math.abs(F)>Number.EPSILON){const Y=Math.sqrt(_),ee=Math.sqrt(be*be+C*C),$=A.x-ge/Y,Ie=A.y+Re/Y,ve=se.x-C/ee,j=se.y+be/ee,K=((ve-$)*C-(j-Ie)*be)/(Re*C-ge*be);oe=$+Re*K-ne.x,he=Ie+ge*K-ne.y;const H=oe*oe+he*he;if(H<=2)return new le(oe,he);ae=Math.sqrt(H/2)}else{let Y=!1;Re>Number.EPSILON?be>Number.EPSILON&&(Y=!0):Re<-Number.EPSILON?be<-Number.EPSILON&&(Y=!0):Math.sign(ge)===Math.sign(C)&&(Y=!0),Y?(oe=-ge,he=Re,ae=Math.sqrt(_)):(oe=Re,he=ge,ae=Math.sqrt(_/2))}return new le(oe/ae,he/ae)}const re=[];for(let ne=0,A=z.length,se=A-1,oe=ne+1;ne<A;ne++,se++,oe++)se===A&&(se=0),oe===A&&(oe=0),re[ne]=k(z[ne],z[se],z[oe]);const de=[];let Ce,Ke=re.concat();for(let ne=0,A=q;ne<A;ne++){const se=P[ne];Ce=[];for(let oe=0,he=se.length,ae=he-1,Re=oe+1;oe<he;oe++,ae++,Re++)ae===he&&(ae=0),Re===he&&(Re=0),Ce[oe]=k(se[oe],se[ae],se[Re]);de.push(Ce),Ke=Ke.concat(Ce)}let Ze;if(x===0)Ze=Ws.triangulateShape(z,P);else{const ne=[],A=[];for(let se=0;se<x;se++){const oe=se/x,he=f*Math.cos(oe*Math.PI/2),ae=m*Math.sin(oe*Math.PI/2)+g;for(let Re=0,ge=z.length;Re<ge;Re++){const be=G(z[Re],re[Re],ae);Fe(be.x,be.y,-he),oe===0&&ne.push(be)}for(let Re=0,ge=q;Re<ge;Re++){const be=P[Re];Ce=de[Re];const C=[];for(let _=0,F=be.length;_<F;_++){const Y=G(be[_],Ce[_],ae);Fe(Y.x,Y.y,-he),oe===0&&C.push(Y)}oe===0&&A.push(C)}}Ze=Ws.triangulateShape(ne,A)}const rt=Ze.length,lt=m+g;for(let ne=0;ne<J;ne++){const A=d?G(S[ne],Ke[ne],lt):S[ne];b?(w.copy(R.normals[0]).multiplyScalar(A.x),T.copy(R.binormals[0]).multiplyScalar(A.y),D.copy(y[0]).add(w).add(T),Fe(D.x,D.y,D.z)):Fe(A.x,A.y,0)}for(let ne=1;ne<=l;ne++)for(let A=0;A<J;A++){const se=d?G(S[A],Ke[A],lt):S[A];b?(w.copy(R.normals[ne]).multiplyScalar(se.x),T.copy(R.binormals[ne]).multiplyScalar(se.y),D.copy(y[ne]).add(w).add(T),Fe(D.x,D.y,D.z)):Fe(se.x,se.y,u/l*ne)}for(let ne=x-1;ne>=0;ne--){const A=ne/x,se=f*Math.cos(A*Math.PI/2),oe=m*Math.sin(A*Math.PI/2)+g;for(let he=0,ae=z.length;he<ae;he++){const Re=G(z[he],re[he],oe);Fe(Re.x,Re.y,u+se)}for(let he=0,ae=P.length;he<ae;he++){const Re=P[he];Ce=de[he];for(let ge=0,be=Re.length;ge<be;ge++){const C=G(Re[ge],Ce[ge],oe);b?Fe(C.x,C.y+y[l-1].y,y[l-1].x+se):Fe(C.x,C.y,u+se)}}}Z(),ie();function Z(){const ne=s.length/3;if(d){let A=0,se=J*A;for(let oe=0;oe<rt;oe++){const he=Ze[oe];Ne(he[2]+se,he[1]+se,he[0]+se)}A=l+x*2,se=J*A;for(let oe=0;oe<rt;oe++){const he=Ze[oe];Ne(he[0]+se,he[1]+se,he[2]+se)}}else{for(let A=0;A<rt;A++){const se=Ze[A];Ne(se[2],se[1],se[0])}for(let A=0;A<rt;A++){const se=Ze[A];Ne(se[0]+J*l,se[1]+J*l,se[2]+J*l)}}n.addGroup(ne,s.length/3-ne,0)}function ie(){const ne=s.length/3;let A=0;Ee(z,A),A+=z.length;for(let se=0,oe=P.length;se<oe;se++){const he=P[se];Ee(he,A),A+=he.length}n.addGroup(ne,s.length/3-ne,1)}function Ee(ne,A){let se=ne.length;for(;--se>=0;){const oe=se;let he=se-1;he<0&&(he=ne.length-1);for(let ae=0,Re=l+x*2;ae<Re;ae++){const ge=J*ae,be=J*(ae+1),C=A+oe+ge,_=A+he+ge,F=A+he+be,Y=A+oe+be;Qe(C,_,F,Y)}}}function Fe(ne,A,se){c.push(ne),c.push(A),c.push(se)}function Ne(ne,A,se){at(ne),at(A),at(se);const oe=s.length/3,he=v.generateTopUV(n,s,oe-3,oe-2,oe-1);Oe(he[0]),Oe(he[1]),Oe(he[2])}function Qe(ne,A,se,oe){at(ne),at(A),at(oe),at(A),at(se),at(oe);const he=s.length/3,ae=v.generateSideWallUV(n,s,he-6,he-3,he-2,he-1);Oe(ae[0]),Oe(ae[1]),Oe(ae[3]),Oe(ae[1]),Oe(ae[2]),Oe(ae[3])}function at(ne){s.push(c[ne*3+0]),s.push(c[ne*3+1]),s.push(c[ne*3+2])}function Oe(ne){r.push(ne.x),r.push(ne.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),t=this.parameters.shapes,n=this.parameters.options;return Vm(t,n,e)}static fromJSON(e,t){const n=[];for(let r=0,a=e.shapes.length;r<a;r++){const o=t[e.shapes[r]];n.push(o)}const s=e.options.extrudePath;return s!==void 0&&(e.options.extrudePath=new xl[s.type]().fromJSON(s)),new ys(n,e.options)}}const Gm={generateTopUV:function(i,e,t,n,s){const r=e[t*3],a=e[t*3+1],o=e[n*3],c=e[n*3+1],h=e[s*3],l=e[s*3+1];return[new le(r,a),new le(o,c),new le(h,l)]},generateSideWallUV:function(i,e,t,n,s,r){const a=e[t*3],o=e[t*3+1],c=e[t*3+2],h=e[n*3],l=e[n*3+1],u=e[n*3+2],d=e[s*3],f=e[s*3+1],m=e[s*3+2],g=e[r*3],x=e[r*3+1],p=e[r*3+2];return Math.abs(o-l)<Math.abs(a-h)?[new le(a,1-c),new le(h,1-u),new le(d,1-m),new le(g,1-p)]:[new le(o,1-c),new le(l,1-u),new le(f,1-m),new le(x,1-p)]}};function Vm(i,e,t){if(t.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){const r=i[n];t.shapes.push(r.uuid)}else t.shapes.push(i.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}class qt extends Ut{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};const r=e/2,a=t/2,o=Math.floor(n),c=Math.floor(s),h=o+1,l=c+1,u=e/o,d=t/c,f=[],m=[],g=[],x=[];for(let p=0;p<l;p++){const v=p*d-a;for(let y=0;y<h;y++){const b=y*u-r;m.push(b,-v,0),g.push(0,0,1),x.push(y/o),x.push(1-p/c)}}for(let p=0;p<c;p++)for(let v=0;v<o;v++){const y=v+h*p,b=v+h*(p+1),R=v+1+h*(p+1),T=v+1+h*p;f.push(y,b,T),f.push(b,R,T)}this.setIndex(f),this.setAttribute("position",new Et(m,3)),this.setAttribute("normal",new Et(g,3)),this.setAttribute("uv",new Et(x,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new qt(e.width,e.height,e.widthSegments,e.heightSegments)}}class as extends Ut{constructor(e=.5,t=1,n=32,s=1,r=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:s,thetaStart:r,thetaLength:a},n=Math.max(3,n),s=Math.max(1,s);const o=[],c=[],h=[],l=[];let u=e;const d=(t-e)/s,f=new I,m=new le;for(let g=0;g<=s;g++){for(let x=0;x<=n;x++){const p=r+x/n*a;f.x=u*Math.cos(p),f.y=u*Math.sin(p),c.push(f.x,f.y,f.z),h.push(0,0,1),m.x=(f.x/t+1)/2,m.y=(f.y/t+1)/2,l.push(m.x,m.y)}u+=d}for(let g=0;g<s;g++){const x=g*(n+1);for(let p=0;p<n;p++){const v=p+x,y=v,b=v+n+1,R=v+n+2,T=v+1;o.push(y,b,T),o.push(b,R,T)}}this.setIndex(o),this.setAttribute("position",new Et(c,3)),this.setAttribute("normal",new Et(h,3)),this.setAttribute("uv",new Et(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new as(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class tr extends Ut{constructor(e=1,t=32,n=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const c=Math.min(a+o,Math.PI);let h=0;const l=[],u=new I,d=new I,f=[],m=[],g=[],x=[];for(let p=0;p<=n;p++){const v=[],y=p/n;let b=0;p===0&&a===0?b=.5/t:p===n&&c===Math.PI&&(b=-.5/t);for(let R=0;R<=t;R++){const T=R/t;u.x=-e*Math.cos(s+T*r)*Math.sin(a+y*o),u.y=e*Math.cos(a+y*o),u.z=e*Math.sin(s+T*r)*Math.sin(a+y*o),m.push(u.x,u.y,u.z),d.copy(u).normalize(),g.push(d.x,d.y,d.z),x.push(T+b,1-y),v.push(h++)}l.push(v)}for(let p=0;p<n;p++)for(let v=0;v<t;v++){const y=l[p][v+1],b=l[p][v],R=l[p+1][v],T=l[p+1][v+1];(p!==0||a>0)&&f.push(y,b,T),(p!==n-1||c<Math.PI)&&f.push(b,R,T)}this.setIndex(f),this.setAttribute("position",new Et(m,3)),this.setAttribute("normal",new Et(g,3)),this.setAttribute("uv",new Et(x,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new tr(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Hm extends Kt{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class nn extends vs{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new He(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new He(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=zd,this.normalScale=new le(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new oi,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class kn extends nn{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new le(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return tt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new He(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new He(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new He(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class Wm extends vs{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=b0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Xm extends vs{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class mo extends Nt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new He(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}class $m extends mo{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Nt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new He(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}}const sc=new yt,ou=new I,cu=new I;class sh{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new le(512,512),this.mapType=ai,this.map=null,this.mapPass=null,this.matrix=new yt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new eh,this._frameExtents=new le(1,1),this._viewportCount=1,this._viewports=[new xt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;ou.setFromMatrixPosition(e.matrixWorld),t.position.copy(ou),cu.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(cu),t.updateMatrixWorld(),sc.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(sc,t.coordinateSystem,t.reversedDepth),t.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(sc)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class qm extends sh{constructor(){super(new pn(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){const t=this.camera,n=Za*2*e.angle*this.focus,s=this.mapSize.width/this.mapSize.height*this.aspect,r=e.distance||t.far;(n!==t.fov||s!==t.aspect||r!==t.far)&&(t.fov=n,t.aspect=s,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class Ym extends mo{constructor(e,t,n=0,s=Math.PI/3,r=0,a=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Nt.DEFAULT_UP),this.updateMatrix(),this.target=new Nt,this.distance=n,this.angle=s,this.penumbra=r,this.decay=a,this.map=null,this.shadow=new qm}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const lu=new yt,_r=new I,rc=new I;class jm extends sh{constructor(){super(new pn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new le(4,2),this._viewportCount=6,this._viewports=[new xt(2,1,1,1),new xt(0,1,1,1),new xt(3,1,1,1),new xt(1,1,1,1),new xt(3,0,1,1),new xt(1,0,1,1)],this._cubeDirections=[new I(1,0,0),new I(-1,0,0),new I(0,0,1),new I(0,0,-1),new I(0,1,0),new I(0,-1,0)],this._cubeUps=[new I(0,1,0),new I(0,1,0),new I(0,1,0),new I(0,1,0),new I(0,0,1),new I(0,0,-1)]}updateMatrices(e,t=0){const n=this.camera,s=this.matrix,r=e.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),_r.setFromMatrixPosition(e.matrixWorld),n.position.copy(_r),rc.copy(n.position),rc.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(rc),n.updateMatrixWorld(),s.makeTranslation(-_r.x,-_r.y,-_r.z),lu.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(lu,n.coordinateSystem,n.reversedDepth)}}class Km extends mo{constructor(e,t,n=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new jm}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class rh extends Yd{constructor(e=-1,t=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=n-e,a=n+e,o=s+t,c=s-t;if(this.view!==null&&this.view.enabled){const h=(this.right-this.left)/this.view.fullWidth/this.zoom,l=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=h*this.view.offsetX,a=r+h*this.view.width,o-=l*this.view.offsetY,c=o-l*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class Jm extends sh{constructor(){super(new rh(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Zm extends mo{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Nt.DEFAULT_UP),this.updateMatrix(),this.target=new Nt,this.shadow=new Jm}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class Qm extends pn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class ex{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=performance.now();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}const hu=new yt;class tx{constructor(e,t,n=0,s=1/0){this.ray=new po(e,t),this.near=n,this.far=s,this.camera=null,this.layers=new Zl,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):Rt("Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return hu.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(hu),this}intersectObject(e,t=!0,n=[]){return yl(e,this,n,t),n.sort(uu),n}intersectObjects(e,t=!0,n=[]){for(let s=0,r=e.length;s<r;s++)yl(e[s],this,n,t);return n.sort(uu),n}}function uu(i,e){return i.distance-e.distance}function yl(i,e,t,n){let s=!0;if(i.layers.test(e.layers)&&i.raycast(e,t)===!1&&(s=!1),s===!0&&n===!0){const r=i.children;for(let a=0,o=r.length;a<o;a++)yl(r[a],e,t,!0)}}function du(i,e,t,n){const s=nx(n);switch(t){case Fd:return i*e;case kd:return i*e/s.components*s.byteLength;case ql:return i*e/s.components*s.byteLength;case Yl:return i*e*2/s.components*s.byteLength;case jl:return i*e*2/s.components*s.byteLength;case Bd:return i*e*3/s.components*s.byteLength;case $n:return i*e*4/s.components*s.byteLength;case Kl:return i*e*4/s.components*s.byteLength;case Ia:case Da:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Ua:case Na:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Vc:case Wc:return Math.max(i,16)*Math.max(e,8)/4;case Gc:case Hc:return Math.max(i,8)*Math.max(e,8)/2;case Xc:case $c:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case qc:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Yc:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case jc:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case Kc:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case Jc:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case Zc:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case Qc:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case el:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case tl:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case nl:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case il:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case sl:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case rl:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case al:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case ol:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case cl:case ll:case hl:return Math.ceil(i/4)*Math.ceil(e/4)*16;case ul:case dl:return Math.ceil(i/4)*Math.ceil(e/4)*8;case fl:case pl:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function nx(i){switch(i){case ai:case Dd:return{byteLength:1,components:1};case Lr:case Ud:case ri:return{byteLength:2,components:1};case Xl:case $l:return{byteLength:2,components:4};case ds:case Wl:case _i:return{byteLength:4,components:1};case Nd:case Od:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Vl}}));typeof window<"u"&&(window.__THREE__?je("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Vl);function lf(){let i=null,e=!1,t=null,n=null;function s(r,a){t(r,a),n=i.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function ix(i){const e=new WeakMap;function t(o,c){const h=o.array,l=o.usage,u=h.byteLength,d=i.createBuffer();i.bindBuffer(c,d),i.bufferData(c,h,l),o.onUploadCallback();let f;if(h instanceof Float32Array)f=i.FLOAT;else if(typeof Float16Array<"u"&&h instanceof Float16Array)f=i.HALF_FLOAT;else if(h instanceof Uint16Array)o.isFloat16BufferAttribute?f=i.HALF_FLOAT:f=i.UNSIGNED_SHORT;else if(h instanceof Int16Array)f=i.SHORT;else if(h instanceof Uint32Array)f=i.UNSIGNED_INT;else if(h instanceof Int32Array)f=i.INT;else if(h instanceof Int8Array)f=i.BYTE;else if(h instanceof Uint8Array)f=i.UNSIGNED_BYTE;else if(h instanceof Uint8ClampedArray)f=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:d,type:f,bytesPerElement:h.BYTES_PER_ELEMENT,version:o.version,size:u}}function n(o,c,h){const l=c.array,u=c.updateRanges;if(i.bindBuffer(h,o),u.length===0)i.bufferSubData(h,0,l);else{u.sort((f,m)=>f.start-m.start);let d=0;for(let f=1;f<u.length;f++){const m=u[d],g=u[f];g.start<=m.start+m.count+1?m.count=Math.max(m.count,g.start+g.count-m.start):(++d,u[d]=g)}u.length=d+1;for(let f=0,m=u.length;f<m;f++){const g=u[f];i.bufferSubData(h,g.start*l.BYTES_PER_ELEMENT,l,g.start,g.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);const c=e.get(o);c&&(i.deleteBuffer(c.buffer),e.delete(o))}function a(o,c){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const l=e.get(o);(!l||l.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const h=e.get(o);if(h===void 0)e.set(o,t(o,c));else if(h.version<o.version){if(h.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(h.buffer,o,c),h.version=o.version}}return{get:s,remove:r,update:a}}var sx=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,rx=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,ax=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,ox=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,cx=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,lx=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,hx=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,ux=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,dx=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,fx=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,px=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,mx=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,xx=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,gx=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,_x=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,vx=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,yx=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Sx=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Mx=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,bx=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Ex=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Tx=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Cx=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,Ax=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Rx=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,wx=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Px=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Lx=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Ix=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Dx=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Ux="gl_FragColor = linearToOutputTexel( gl_FragColor );",Nx=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Ox=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Fx=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,Bx=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,kx=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,zx=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Gx=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Vx=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Hx=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Wx=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Xx=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,$x=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,qx=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Yx=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,jx=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,Kx=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,Jx=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Zx=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Qx=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,eg=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,tg=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,ng=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 uv = vec2( roughness, dotNV );
	return texture2D( dfgLUT, uv ).rg;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = DFGApprox( vec3(0.0, 0.0, 1.0), vec3(sqrt(1.0 - dotNV * dotNV), 0.0, dotNV), material.roughness );
	vec2 dfgL = DFGApprox( vec3(0.0, 0.0, 1.0), vec3(sqrt(1.0 - dotNL * dotNL), 0.0, dotNL), material.roughness );
	vec3 FssEss_V = material.specularColor * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColor * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColor + ( 1.0 - material.specularColor ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,ig=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,sg=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,rg=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,ag=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,og=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,cg=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,lg=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,hg=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,ug=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,dg=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,fg=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,pg=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,mg=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,xg=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,gg=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,_g=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,vg=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,yg=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Sg=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Mg=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,bg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Eg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Tg=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Cg=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Ag=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Rg=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,wg=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Pg=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Lg=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Ig=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Dg=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Ug=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Ng=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Og=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Fg=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Bg=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,kg=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		float depth = unpackRGBAToDepth( texture2D( depths, uv ) );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			return step( depth, compare );
		#else
			return step( compare, depth );
		#endif
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow( sampler2D shadow, vec2 uv, float compare ) {
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			float hard_shadow = step( distribution.x, compare );
		#else
			float hard_shadow = step( compare, distribution.x );
		#endif
		if ( hard_shadow != 1.0 ) {
			float distance = compare - distribution.x;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,zg=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Gg=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Vg=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Hg=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Wg=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Xg=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,$g=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,qg=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Yg=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,jg=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Kg=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Jg=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Zg=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Qg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,e_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,t_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,n_=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const i_=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,s_=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,r_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,a_=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,o_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,c_=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,l_=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,h_=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,u_=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,d_=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,f_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,p_=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,m_=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,x_=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,g_=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,__=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,v_=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,y_=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,S_=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,M_=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,b_=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,E_=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,T_=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,C_=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,A_=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,R_=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,w_=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,P_=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,L_=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,I_=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,D_=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,U_=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,N_=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,O_=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,et={alphahash_fragment:sx,alphahash_pars_fragment:rx,alphamap_fragment:ax,alphamap_pars_fragment:ox,alphatest_fragment:cx,alphatest_pars_fragment:lx,aomap_fragment:hx,aomap_pars_fragment:ux,batching_pars_vertex:dx,batching_vertex:fx,begin_vertex:px,beginnormal_vertex:mx,bsdfs:xx,iridescence_fragment:gx,bumpmap_pars_fragment:_x,clipping_planes_fragment:vx,clipping_planes_pars_fragment:yx,clipping_planes_pars_vertex:Sx,clipping_planes_vertex:Mx,color_fragment:bx,color_pars_fragment:Ex,color_pars_vertex:Tx,color_vertex:Cx,common:Ax,cube_uv_reflection_fragment:Rx,defaultnormal_vertex:wx,displacementmap_pars_vertex:Px,displacementmap_vertex:Lx,emissivemap_fragment:Ix,emissivemap_pars_fragment:Dx,colorspace_fragment:Ux,colorspace_pars_fragment:Nx,envmap_fragment:Ox,envmap_common_pars_fragment:Fx,envmap_pars_fragment:Bx,envmap_pars_vertex:kx,envmap_physical_pars_fragment:Kx,envmap_vertex:zx,fog_vertex:Gx,fog_pars_vertex:Vx,fog_fragment:Hx,fog_pars_fragment:Wx,gradientmap_pars_fragment:Xx,lightmap_pars_fragment:$x,lights_lambert_fragment:qx,lights_lambert_pars_fragment:Yx,lights_pars_begin:jx,lights_toon_fragment:Jx,lights_toon_pars_fragment:Zx,lights_phong_fragment:Qx,lights_phong_pars_fragment:eg,lights_physical_fragment:tg,lights_physical_pars_fragment:ng,lights_fragment_begin:ig,lights_fragment_maps:sg,lights_fragment_end:rg,logdepthbuf_fragment:ag,logdepthbuf_pars_fragment:og,logdepthbuf_pars_vertex:cg,logdepthbuf_vertex:lg,map_fragment:hg,map_pars_fragment:ug,map_particle_fragment:dg,map_particle_pars_fragment:fg,metalnessmap_fragment:pg,metalnessmap_pars_fragment:mg,morphinstance_vertex:xg,morphcolor_vertex:gg,morphnormal_vertex:_g,morphtarget_pars_vertex:vg,morphtarget_vertex:yg,normal_fragment_begin:Sg,normal_fragment_maps:Mg,normal_pars_fragment:bg,normal_pars_vertex:Eg,normal_vertex:Tg,normalmap_pars_fragment:Cg,clearcoat_normal_fragment_begin:Ag,clearcoat_normal_fragment_maps:Rg,clearcoat_pars_fragment:wg,iridescence_pars_fragment:Pg,opaque_fragment:Lg,packing:Ig,premultiplied_alpha_fragment:Dg,project_vertex:Ug,dithering_fragment:Ng,dithering_pars_fragment:Og,roughnessmap_fragment:Fg,roughnessmap_pars_fragment:Bg,shadowmap_pars_fragment:kg,shadowmap_pars_vertex:zg,shadowmap_vertex:Gg,shadowmask_pars_fragment:Vg,skinbase_vertex:Hg,skinning_pars_vertex:Wg,skinning_vertex:Xg,skinnormal_vertex:$g,specularmap_fragment:qg,specularmap_pars_fragment:Yg,tonemapping_fragment:jg,tonemapping_pars_fragment:Kg,transmission_fragment:Jg,transmission_pars_fragment:Zg,uv_pars_fragment:Qg,uv_pars_vertex:e_,uv_vertex:t_,worldpos_vertex:n_,background_vert:i_,background_frag:s_,backgroundCube_vert:r_,backgroundCube_frag:a_,cube_vert:o_,cube_frag:c_,depth_vert:l_,depth_frag:h_,distanceRGBA_vert:u_,distanceRGBA_frag:d_,equirect_vert:f_,equirect_frag:p_,linedashed_vert:m_,linedashed_frag:x_,meshbasic_vert:g_,meshbasic_frag:__,meshlambert_vert:v_,meshlambert_frag:y_,meshmatcap_vert:S_,meshmatcap_frag:M_,meshnormal_vert:b_,meshnormal_frag:E_,meshphong_vert:T_,meshphong_frag:C_,meshphysical_vert:A_,meshphysical_frag:R_,meshtoon_vert:w_,meshtoon_frag:P_,points_vert:L_,points_frag:I_,shadow_vert:D_,shadow_frag:U_,sprite_vert:N_,sprite_frag:O_},Me={common:{diffuse:{value:new He(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Je},alphaMap:{value:null},alphaMapTransform:{value:new Je},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Je}},envmap:{envMap:{value:null},envMapRotation:{value:new Je},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Je}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Je}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Je},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Je},normalScale:{value:new le(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Je},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Je}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Je}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Je}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new He(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new He(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Je},alphaTest:{value:0},uvTransform:{value:new Je}},sprite:{diffuse:{value:new He(16777215)},opacity:{value:1},center:{value:new le(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Je},alphaMap:{value:null},alphaMapTransform:{value:new Je},alphaTest:{value:0}}},ti={basic:{uniforms:tn([Me.common,Me.specularmap,Me.envmap,Me.aomap,Me.lightmap,Me.fog]),vertexShader:et.meshbasic_vert,fragmentShader:et.meshbasic_frag},lambert:{uniforms:tn([Me.common,Me.specularmap,Me.envmap,Me.aomap,Me.lightmap,Me.emissivemap,Me.bumpmap,Me.normalmap,Me.displacementmap,Me.fog,Me.lights,{emissive:{value:new He(0)}}]),vertexShader:et.meshlambert_vert,fragmentShader:et.meshlambert_frag},phong:{uniforms:tn([Me.common,Me.specularmap,Me.envmap,Me.aomap,Me.lightmap,Me.emissivemap,Me.bumpmap,Me.normalmap,Me.displacementmap,Me.fog,Me.lights,{emissive:{value:new He(0)},specular:{value:new He(1118481)},shininess:{value:30}}]),vertexShader:et.meshphong_vert,fragmentShader:et.meshphong_frag},standard:{uniforms:tn([Me.common,Me.envmap,Me.aomap,Me.lightmap,Me.emissivemap,Me.bumpmap,Me.normalmap,Me.displacementmap,Me.roughnessmap,Me.metalnessmap,Me.fog,Me.lights,{emissive:{value:new He(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:et.meshphysical_vert,fragmentShader:et.meshphysical_frag},toon:{uniforms:tn([Me.common,Me.aomap,Me.lightmap,Me.emissivemap,Me.bumpmap,Me.normalmap,Me.displacementmap,Me.gradientmap,Me.fog,Me.lights,{emissive:{value:new He(0)}}]),vertexShader:et.meshtoon_vert,fragmentShader:et.meshtoon_frag},matcap:{uniforms:tn([Me.common,Me.bumpmap,Me.normalmap,Me.displacementmap,Me.fog,{matcap:{value:null}}]),vertexShader:et.meshmatcap_vert,fragmentShader:et.meshmatcap_frag},points:{uniforms:tn([Me.points,Me.fog]),vertexShader:et.points_vert,fragmentShader:et.points_frag},dashed:{uniforms:tn([Me.common,Me.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:et.linedashed_vert,fragmentShader:et.linedashed_frag},depth:{uniforms:tn([Me.common,Me.displacementmap]),vertexShader:et.depth_vert,fragmentShader:et.depth_frag},normal:{uniforms:tn([Me.common,Me.bumpmap,Me.normalmap,Me.displacementmap,{opacity:{value:1}}]),vertexShader:et.meshnormal_vert,fragmentShader:et.meshnormal_frag},sprite:{uniforms:tn([Me.sprite,Me.fog]),vertexShader:et.sprite_vert,fragmentShader:et.sprite_frag},background:{uniforms:{uvTransform:{value:new Je},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:et.background_vert,fragmentShader:et.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Je}},vertexShader:et.backgroundCube_vert,fragmentShader:et.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:et.cube_vert,fragmentShader:et.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:et.equirect_vert,fragmentShader:et.equirect_frag},distanceRGBA:{uniforms:tn([Me.common,Me.displacementmap,{referencePosition:{value:new I},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:et.distanceRGBA_vert,fragmentShader:et.distanceRGBA_frag},shadow:{uniforms:tn([Me.lights,Me.fog,{color:{value:new He(0)},opacity:{value:1}}]),vertexShader:et.shadow_vert,fragmentShader:et.shadow_frag}};ti.physical={uniforms:tn([ti.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Je},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Je},clearcoatNormalScale:{value:new le(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Je},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Je},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Je},sheen:{value:0},sheenColor:{value:new He(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Je},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Je},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Je},transmissionSamplerSize:{value:new le},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Je},attenuationDistance:{value:0},attenuationColor:{value:new He(0)},specularColor:{value:new He(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Je},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Je},anisotropyVector:{value:new le},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Je}}]),vertexShader:et.meshphysical_vert,fragmentShader:et.meshphysical_frag};const Aa={r:0,b:0,g:0},es=new oi,F_=new yt;function B_(i,e,t,n,s,r,a){const o=new He(0);let c=r===!0?0:1,h,l,u=null,d=0,f=null;function m(y){let b=y.isScene===!0?y.background:null;return b&&b.isTexture&&(b=(y.backgroundBlurriness>0?t:e).get(b)),b}function g(y){let b=!1;const R=m(y);R===null?p(o,c):R&&R.isColor&&(p(R,1),b=!0);const T=i.xr.getEnvironmentBlendMode();T==="additive"?n.buffers.color.setClear(0,0,0,1,a):T==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(i.autoClear||b)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function x(y,b){const R=m(b);R&&(R.isCubeTexture||R.mapping===fo)?(l===void 0&&(l=new ye(new mt(1,1,1),new Kt({name:"BackgroundCubeMaterial",uniforms:Qs(ti.backgroundCube.uniforms),vertexShader:ti.backgroundCube.vertexShader,fragmentShader:ti.backgroundCube.fragmentShader,side:xn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),l.geometry.deleteAttribute("uv"),l.onBeforeRender=function(T,w,D){this.matrixWorld.copyPosition(D.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(l)),es.copy(b.backgroundRotation),es.x*=-1,es.y*=-1,es.z*=-1,R.isCubeTexture&&R.isRenderTargetTexture===!1&&(es.y*=-1,es.z*=-1),l.material.uniforms.envMap.value=R,l.material.uniforms.flipEnvMap.value=R.isCubeTexture&&R.isRenderTargetTexture===!1?-1:1,l.material.uniforms.backgroundBlurriness.value=b.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,l.material.uniforms.backgroundRotation.value.setFromMatrix4(F_.makeRotationFromEuler(es)),l.material.toneMapped=ct.getTransfer(R.colorSpace)!==dt,(u!==R||d!==R.version||f!==i.toneMapping)&&(l.material.needsUpdate=!0,u=R,d=R.version,f=i.toneMapping),l.layers.enableAll(),y.unshift(l,l.geometry,l.material,0,0,null)):R&&R.isTexture&&(h===void 0&&(h=new ye(new qt(2,2),new Kt({name:"BackgroundMaterial",uniforms:Qs(ti.background.uniforms),vertexShader:ti.background.vertexShader,fragmentShader:ti.background.fragmentShader,side:Hi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),Object.defineProperty(h.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(h)),h.material.uniforms.t2D.value=R,h.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,h.material.toneMapped=ct.getTransfer(R.colorSpace)!==dt,R.matrixAutoUpdate===!0&&R.updateMatrix(),h.material.uniforms.uvTransform.value.copy(R.matrix),(u!==R||d!==R.version||f!==i.toneMapping)&&(h.material.needsUpdate=!0,u=R,d=R.version,f=i.toneMapping),h.layers.enableAll(),y.unshift(h,h.geometry,h.material,0,0,null))}function p(y,b){y.getRGB(Aa,qd(i)),n.buffers.color.setClear(Aa.r,Aa.g,Aa.b,b,a)}function v(){l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0),h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0)}return{getClearColor:function(){return o},setClearColor:function(y,b=1){o.set(y),c=b,p(o,c)},getClearAlpha:function(){return c},setClearAlpha:function(y){c=y,p(o,c)},render:g,addToRenderList:x,dispose:v}}function k_(i,e){const t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=d(null);let r=s,a=!1;function o(S,P,N,B,q){let z=!1;const G=u(B,N,P);r!==G&&(r=G,h(r.object)),z=f(S,B,N,q),z&&m(S,B,N,q),q!==null&&e.update(q,i.ELEMENT_ARRAY_BUFFER),(z||a)&&(a=!1,b(S,P,N,B),q!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(q).buffer))}function c(){return i.createVertexArray()}function h(S){return i.bindVertexArray(S)}function l(S){return i.deleteVertexArray(S)}function u(S,P,N){const B=N.wireframe===!0;let q=n[S.id];q===void 0&&(q={},n[S.id]=q);let z=q[P.id];z===void 0&&(z={},q[P.id]=z);let G=z[B];return G===void 0&&(G=d(c()),z[B]=G),G}function d(S){const P=[],N=[],B=[];for(let q=0;q<t;q++)P[q]=0,N[q]=0,B[q]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:P,enabledAttributes:N,attributeDivisors:B,object:S,attributes:{},index:null}}function f(S,P,N,B){const q=r.attributes,z=P.attributes;let G=0;const J=N.getAttributes();for(const k in J)if(J[k].location>=0){const de=q[k];let Ce=z[k];if(Ce===void 0&&(k==="instanceMatrix"&&S.instanceMatrix&&(Ce=S.instanceMatrix),k==="instanceColor"&&S.instanceColor&&(Ce=S.instanceColor)),de===void 0||de.attribute!==Ce||Ce&&de.data!==Ce.data)return!0;G++}return r.attributesNum!==G||r.index!==B}function m(S,P,N,B){const q={},z=P.attributes;let G=0;const J=N.getAttributes();for(const k in J)if(J[k].location>=0){let de=z[k];de===void 0&&(k==="instanceMatrix"&&S.instanceMatrix&&(de=S.instanceMatrix),k==="instanceColor"&&S.instanceColor&&(de=S.instanceColor));const Ce={};Ce.attribute=de,de&&de.data&&(Ce.data=de.data),q[k]=Ce,G++}r.attributes=q,r.attributesNum=G,r.index=B}function g(){const S=r.newAttributes;for(let P=0,N=S.length;P<N;P++)S[P]=0}function x(S){p(S,0)}function p(S,P){const N=r.newAttributes,B=r.enabledAttributes,q=r.attributeDivisors;N[S]=1,B[S]===0&&(i.enableVertexAttribArray(S),B[S]=1),q[S]!==P&&(i.vertexAttribDivisor(S,P),q[S]=P)}function v(){const S=r.newAttributes,P=r.enabledAttributes;for(let N=0,B=P.length;N<B;N++)P[N]!==S[N]&&(i.disableVertexAttribArray(N),P[N]=0)}function y(S,P,N,B,q,z,G){G===!0?i.vertexAttribIPointer(S,P,N,q,z):i.vertexAttribPointer(S,P,N,B,q,z)}function b(S,P,N,B){g();const q=B.attributes,z=N.getAttributes(),G=P.defaultAttributeValues;for(const J in z){const k=z[J];if(k.location>=0){let re=q[J];if(re===void 0&&(J==="instanceMatrix"&&S.instanceMatrix&&(re=S.instanceMatrix),J==="instanceColor"&&S.instanceColor&&(re=S.instanceColor)),re!==void 0){const de=re.normalized,Ce=re.itemSize,Ke=e.get(re);if(Ke===void 0)continue;const Ze=Ke.buffer,rt=Ke.type,lt=Ke.bytesPerElement,Z=rt===i.INT||rt===i.UNSIGNED_INT||re.gpuType===Wl;if(re.isInterleavedBufferAttribute){const ie=re.data,Ee=ie.stride,Fe=re.offset;if(ie.isInstancedInterleavedBuffer){for(let Ne=0;Ne<k.locationSize;Ne++)p(k.location+Ne,ie.meshPerAttribute);S.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=ie.meshPerAttribute*ie.count)}else for(let Ne=0;Ne<k.locationSize;Ne++)x(k.location+Ne);i.bindBuffer(i.ARRAY_BUFFER,Ze);for(let Ne=0;Ne<k.locationSize;Ne++)y(k.location+Ne,Ce/k.locationSize,rt,de,Ee*lt,(Fe+Ce/k.locationSize*Ne)*lt,Z)}else{if(re.isInstancedBufferAttribute){for(let ie=0;ie<k.locationSize;ie++)p(k.location+ie,re.meshPerAttribute);S.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=re.meshPerAttribute*re.count)}else for(let ie=0;ie<k.locationSize;ie++)x(k.location+ie);i.bindBuffer(i.ARRAY_BUFFER,Ze);for(let ie=0;ie<k.locationSize;ie++)y(k.location+ie,Ce/k.locationSize,rt,de,Ce*lt,Ce/k.locationSize*ie*lt,Z)}}else if(G!==void 0){const de=G[J];if(de!==void 0)switch(de.length){case 2:i.vertexAttrib2fv(k.location,de);break;case 3:i.vertexAttrib3fv(k.location,de);break;case 4:i.vertexAttrib4fv(k.location,de);break;default:i.vertexAttrib1fv(k.location,de)}}}}v()}function R(){D();for(const S in n){const P=n[S];for(const N in P){const B=P[N];for(const q in B)l(B[q].object),delete B[q];delete P[N]}delete n[S]}}function T(S){if(n[S.id]===void 0)return;const P=n[S.id];for(const N in P){const B=P[N];for(const q in B)l(B[q].object),delete B[q];delete P[N]}delete n[S.id]}function w(S){for(const P in n){const N=n[P];if(N[S.id]===void 0)continue;const B=N[S.id];for(const q in B)l(B[q].object),delete B[q];delete N[S.id]}}function D(){E(),a=!0,r!==s&&(r=s,h(r.object))}function E(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:D,resetDefaultState:E,dispose:R,releaseStatesOfGeometry:T,releaseStatesOfProgram:w,initAttributes:g,enableAttribute:x,disableUnusedAttributes:v}}function z_(i,e,t){let n;function s(h){n=h}function r(h,l){i.drawArrays(n,h,l),t.update(l,n,1)}function a(h,l,u){u!==0&&(i.drawArraysInstanced(n,h,l,u),t.update(l,n,u))}function o(h,l,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,h,0,l,0,u);let f=0;for(let m=0;m<u;m++)f+=l[m];t.update(f,n,1)}function c(h,l,u,d){if(u===0)return;const f=e.get("WEBGL_multi_draw");if(f===null)for(let m=0;m<h.length;m++)a(h[m],l[m],d[m]);else{f.multiDrawArraysInstancedWEBGL(n,h,0,l,0,d,0,u);let m=0;for(let g=0;g<u;g++)m+=l[g]*d[g];t.update(m,n,1)}}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=c}function G_(i,e,t,n){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){const w=e.get("EXT_texture_filter_anisotropic");s=i.getParameter(w.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(w){return!(w!==$n&&n.convert(w)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(w){const D=w===ri&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(w!==ai&&n.convert(w)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&w!==_i&&!D)}function c(w){if(w==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";w="mediump"}return w==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let h=t.precision!==void 0?t.precision:"highp";const l=c(h);l!==h&&(je("WebGLRenderer:",h,"not supported, using",l,"instead."),h=l);const u=t.logarithmicDepthBuffer===!0,d=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),f=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),m=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_TEXTURE_SIZE),x=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),v=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),y=i.getParameter(i.MAX_VARYING_VECTORS),b=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),R=m>0,T=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:a,textureTypeReadable:o,precision:h,logarithmicDepthBuffer:u,reversedDepthBuffer:d,maxTextures:f,maxVertexTextures:m,maxTextureSize:g,maxCubemapSize:x,maxAttributes:p,maxVertexUniforms:v,maxVaryings:y,maxFragmentUniforms:b,vertexTextures:R,maxSamples:T}}function V_(i){const e=this;let t=null,n=0,s=!1,r=!1;const a=new Ii,o=new Je,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){const f=u.length!==0||d||n!==0||s;return s=d,n=u.length,f},this.beginShadows=function(){r=!0,l(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,d){t=l(u,d,0)},this.setState=function(u,d,f){const m=u.clippingPlanes,g=u.clipIntersection,x=u.clipShadows,p=i.get(u);if(!s||m===null||m.length===0||r&&!x)r?l(null):h();else{const v=r?0:n,y=v*4;let b=p.clippingState||null;c.value=b,b=l(m,d,y,f);for(let R=0;R!==y;++R)b[R]=t[R];p.clippingState=b,this.numIntersection=g?this.numPlanes:0,this.numPlanes+=v}};function h(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function l(u,d,f,m){const g=u!==null?u.length:0;let x=null;if(g!==0){if(x=c.value,m!==!0||x===null){const p=f+g*4,v=d.matrixWorldInverse;o.getNormalMatrix(v),(x===null||x.length<p)&&(x=new Float32Array(p));for(let y=0,b=f;y!==g;++y,b+=4)a.copy(u[y]).applyMatrix4(v,o),a.normal.toArray(x,b),x[b+3]=a.constant}c.value=x,c.needsUpdate=!0}return e.numPlanes=g,e.numIntersection=0,x}}function H_(i){let e=new WeakMap;function t(a,o){return o===Bc?a.mapping=Ks:o===kc&&(a.mapping=Js),a}function n(a){if(a&&a.isTexture){const o=a.mapping;if(o===Bc||o===kc)if(e.has(a)){const c=e.get(a).texture;return t(c,a.mapping)}else{const c=a.image;if(c&&c.height>0){const h=new im(c.height);return h.fromEquirectangularTexture(i,a),e.set(a,h),a.addEventListener("dispose",s),t(h.texture,a.mapping)}else return null}}return a}function s(a){const o=a.target;o.removeEventListener("dispose",s);const c=e.get(o);c!==void 0&&(e.delete(o),c.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}const Oi=4,fu=[.125,.215,.35,.446,.526,.582],os=20,W_=256,vr=new rh,pu=new He;let ac=null,oc=0,cc=0,lc=!1;const X_=new I;class Sl{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,n=.1,s=100,r={}){const{size:a=256,position:o=X_}=r;ac=this._renderer.getRenderTarget(),oc=this._renderer.getActiveCubeFace(),cc=this._renderer.getActiveMipmapLevel(),lc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);const c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(e,n,s,c,o),t>0&&this._blur(c,0,0,t),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=gu(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=xu(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(ac,oc,cc),this._renderer.xr.enabled=lc,e.scissorTest=!1,Gs(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Ks||e.mapping===Js?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),ac=this._renderer.getRenderTarget(),oc=this._renderer.getActiveCubeFace(),cc=this._renderer.getActiveMipmapLevel(),lc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Ln,minFilter:Ln,generateMipmaps:!1,type:ri,format:$n,colorSpace:Zs,depthBuffer:!1},s=mu(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=mu(e,t,n);const{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=$_(r)),this._blurMaterial=Y_(r,e,t),this._ggxMaterial=q_(r,e,t)}return s}_compileMaterial(e){const t=new ye(new Ut,e);this._renderer.compile(t,vr)}_sceneToCubeUV(e,t,n,s,r){const c=new pn(90,1,t,n),h=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],u=this._renderer,d=u.autoClear,f=u.toneMapping;u.getClearColor(pu),u.toneMapping=ki,u.autoClear=!1,u.state.buffers.depth.getReversed()&&(u.setRenderTarget(s),u.clearDepth(),u.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new ye(new mt,new Dt({name:"PMREM.Background",side:xn,depthWrite:!1,depthTest:!1})));const g=this._backgroundBox,x=g.material;let p=!1;const v=e.background;v?v.isColor&&(x.color.copy(v),e.background=null,p=!0):(x.color.copy(pu),p=!0);for(let y=0;y<6;y++){const b=y%3;b===0?(c.up.set(0,h[y],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x+l[y],r.y,r.z)):b===1?(c.up.set(0,0,h[y]),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y+l[y],r.z)):(c.up.set(0,h[y],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y,r.z+l[y]));const R=this._cubeSize;Gs(s,b*R,y>2?R:0,R,R),u.setRenderTarget(s),p&&u.render(g,c),u.render(e,c)}u.toneMapping=f,u.autoClear=d,e.background=v}_textureToCubeUV(e,t){const n=this._renderer,s=e.mapping===Ks||e.mapping===Js;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=gu()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=xu());const r=s?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=r;const o=r.uniforms;o.envMap.value=e;const c=this._cubeSize;Gs(t,0,0,3*c,2*c),n.setRenderTarget(t),n.render(a,vr)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(e,r-1,r);t.autoClear=n}_applyGGXFilter(e,t,n){const s=this._renderer,r=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[n];o.material=a;const c=a.uniforms,h=n/(this._lodMeshes.length-1),l=t/(this._lodMeshes.length-1),u=Math.sqrt(h*h-l*l),d=.05+h*.95,f=u*d,{_lodMax:m}=this,g=this._sizeLods[n],x=3*g*(n>m-Oi?n-m+Oi:0),p=4*(this._cubeSize-g);c.envMap.value=e.texture,c.roughness.value=f,c.mipInt.value=m-t,Gs(r,x,p,3*g,2*g),s.setRenderTarget(r),s.render(o,vr),c.envMap.value=r.texture,c.roughness.value=0,c.mipInt.value=m-n,Gs(e,x,p,3*g,2*g),s.setRenderTarget(e),s.render(o,vr)}_blur(e,t,n,s,r){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,s,"latitudinal",r),this._halfBlur(a,e,n,n,s,"longitudinal",r)}_halfBlur(e,t,n,s,r,a,o){const c=this._renderer,h=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&Rt("blur direction must be either latitudinal or longitudinal!");const l=3,u=this._lodMeshes[s];u.material=h;const d=h.uniforms,f=this._sizeLods[n]-1,m=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*os-1),g=r/m,x=isFinite(r)?1+Math.floor(l*g):os;x>os&&je(`sigmaRadians, ${r}, is too large and will clip, as it requested ${x} samples when the maximum is set to ${os}`);const p=[];let v=0;for(let w=0;w<os;++w){const D=w/g,E=Math.exp(-D*D/2);p.push(E),w===0?v+=E:w<x&&(v+=2*E)}for(let w=0;w<p.length;w++)p[w]=p[w]/v;d.envMap.value=e.texture,d.samples.value=x,d.weights.value=p,d.latitudinal.value=a==="latitudinal",o&&(d.poleAxis.value=o);const{_lodMax:y}=this;d.dTheta.value=m,d.mipInt.value=y-n;const b=this._sizeLods[s],R=3*b*(s>y-Oi?s-y+Oi:0),T=4*(this._cubeSize-b);Gs(t,R,T,3*b,2*b),c.setRenderTarget(t),c.render(u,vr)}}function $_(i){const e=[],t=[],n=[];let s=i;const r=i-Oi+1+fu.length;for(let a=0;a<r;a++){const o=Math.pow(2,s);e.push(o);let c=1/o;a>i-Oi?c=fu[a-i+Oi-1]:a===0&&(c=0),t.push(c);const h=1/(o-2),l=-h,u=1+h,d=[l,l,u,l,u,u,l,l,u,u,l,u],f=6,m=6,g=3,x=2,p=1,v=new Float32Array(g*m*f),y=new Float32Array(x*m*f),b=new Float32Array(p*m*f);for(let T=0;T<f;T++){const w=T%3*2/3-1,D=T>2?0:-1,E=[w,D,0,w+2/3,D,0,w+2/3,D+1,0,w,D,0,w+2/3,D+1,0,w,D+1,0];v.set(E,g*m*T),y.set(d,x*m*T);const S=[T,T,T,T,T,T];b.set(S,p*m*T)}const R=new Ut;R.setAttribute("position",new In(v,g)),R.setAttribute("uv",new In(y,x)),R.setAttribute("faceIndex",new In(b,p)),n.push(new ye(R,null)),s>Oi&&s--}return{lodMeshes:n,sizeLods:e,sigmas:t}}function mu(i,e,t){const n=new qn(i,e,t);return n.texture.mapping=fo,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Gs(i,e,t,n,s){i.viewport.set(e,t,n,s),i.scissor.set(e,t,n,s)}function q_(i,e,t){return new Kt({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:W_,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:xo(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 3.2: Transform view direction to hemisphere configuration
				vec3 Vh = normalize(vec3(alpha * V.x, alpha * V.y, V.z));

				// Section 4.1: Orthonormal basis
				float lensq = Vh.x * Vh.x + Vh.y * Vh.y;
				vec3 T1 = lensq > 0.0 ? vec3(-Vh.y, Vh.x, 0.0) / sqrt(lensq) : vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(Vh, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + Vh.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * Vh;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:si,depthTest:!1,depthWrite:!1})}function Y_(i,e,t){const n=new Float32Array(os),s=new I(0,1,0);return new Kt({name:"SphericalGaussianBlur",defines:{n:os,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:xo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:si,depthTest:!1,depthWrite:!1})}function xu(){return new Kt({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:xo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:si,depthTest:!1,depthWrite:!1})}function gu(){return new Kt({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:xo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:si,depthTest:!1,depthWrite:!1})}function xo(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function j_(i){let e=new WeakMap,t=null;function n(o){if(o&&o.isTexture){const c=o.mapping,h=c===Bc||c===kc,l=c===Ks||c===Js;if(h||l){let u=e.get(o);const d=u!==void 0?u.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==d)return t===null&&(t=new Sl(i)),u=h?t.fromEquirectangular(o,u):t.fromCubemap(o,u),u.texture.pmremVersion=o.pmremVersion,e.set(o,u),u.texture;if(u!==void 0)return u.texture;{const f=o.image;return h&&f&&f.height>0||l&&f&&s(f)?(t===null&&(t=new Sl(i)),u=h?t.fromEquirectangular(o):t.fromCubemap(o),u.texture.pmremVersion=o.pmremVersion,e.set(o,u),o.addEventListener("dispose",r),u.texture):null}}}return o}function s(o){let c=0;const h=6;for(let l=0;l<h;l++)o[l]!==void 0&&c++;return c===h}function r(o){const c=o.target;c.removeEventListener("dispose",r);const h=e.get(c);h!==void 0&&(e.delete(c),h.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:a}}function K_(i){const e={};function t(n){if(e[n]!==void 0)return e[n];const s=i.getExtension(n);return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const s=t(n);return s===null&&Nr("WebGLRenderer: "+n+" extension not supported."),s}}}function J_(i,e,t,n){const s={},r=new WeakMap;function a(u){const d=u.target;d.index!==null&&e.remove(d.index);for(const m in d.attributes)e.remove(d.attributes[m]);d.removeEventListener("dispose",a),delete s[d.id];const f=r.get(d);f&&(e.remove(f),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function o(u,d){return s[d.id]===!0||(d.addEventListener("dispose",a),s[d.id]=!0,t.memory.geometries++),d}function c(u){const d=u.attributes;for(const f in d)e.update(d[f],i.ARRAY_BUFFER)}function h(u){const d=[],f=u.index,m=u.attributes.position;let g=0;if(f!==null){const v=f.array;g=f.version;for(let y=0,b=v.length;y<b;y+=3){const R=v[y+0],T=v[y+1],w=v[y+2];d.push(R,T,T,w,w,R)}}else if(m!==void 0){const v=m.array;g=m.version;for(let y=0,b=v.length/3-1;y<b;y+=3){const R=y+0,T=y+1,w=y+2;d.push(R,T,T,w,w,R)}}else return;const x=new(Vd(d)?$d:Xd)(d,1);x.version=g;const p=r.get(u);p&&e.remove(p),r.set(u,x)}function l(u){const d=r.get(u);if(d){const f=u.index;f!==null&&d.version<f.version&&h(u)}else h(u);return r.get(u)}return{get:o,update:c,getWireframeAttribute:l}}function Z_(i,e,t){let n;function s(d){n=d}let r,a;function o(d){r=d.type,a=d.bytesPerElement}function c(d,f){i.drawElements(n,f,r,d*a),t.update(f,n,1)}function h(d,f,m){m!==0&&(i.drawElementsInstanced(n,f,r,d*a,m),t.update(f,n,m))}function l(d,f,m){if(m===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,r,d,0,m);let x=0;for(let p=0;p<m;p++)x+=f[p];t.update(x,n,1)}function u(d,f,m,g){if(m===0)return;const x=e.get("WEBGL_multi_draw");if(x===null)for(let p=0;p<d.length;p++)h(d[p]/a,f[p],g[p]);else{x.multiDrawElementsInstancedWEBGL(n,f,0,r,d,0,g,0,m);let p=0;for(let v=0;v<m;v++)p+=f[v]*g[v];t.update(p,n,1)}}this.setMode=s,this.setIndex=o,this.render=c,this.renderInstances=h,this.renderMultiDraw=l,this.renderMultiDrawInstances=u}function Q_(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(t.calls++,a){case i.TRIANGLES:t.triangles+=o*(r/3);break;case i.LINES:t.lines+=o*(r/2);break;case i.LINE_STRIP:t.lines+=o*(r-1);break;case i.LINE_LOOP:t.lines+=o*r;break;case i.POINTS:t.points+=o*r;break;default:Rt("WebGLInfo: Unknown draw mode:",a);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function ev(i,e,t){const n=new WeakMap,s=new xt;function r(a,o,c){const h=a.morphTargetInfluences,l=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=l!==void 0?l.length:0;let d=n.get(o);if(d===void 0||d.count!==u){let S=function(){D.dispose(),n.delete(o),o.removeEventListener("dispose",S)};var f=S;d!==void 0&&d.texture.dispose();const m=o.morphAttributes.position!==void 0,g=o.morphAttributes.normal!==void 0,x=o.morphAttributes.color!==void 0,p=o.morphAttributes.position||[],v=o.morphAttributes.normal||[],y=o.morphAttributes.color||[];let b=0;m===!0&&(b=1),g===!0&&(b=2),x===!0&&(b=3);let R=o.attributes.position.count*b,T=1;R>e.maxTextureSize&&(T=Math.ceil(R/e.maxTextureSize),R=e.maxTextureSize);const w=new Float32Array(R*T*4*u),D=new Hd(w,R,T,u);D.type=_i,D.needsUpdate=!0;const E=b*4;for(let P=0;P<u;P++){const N=p[P],B=v[P],q=y[P],z=R*T*4*P;for(let G=0;G<N.count;G++){const J=G*E;m===!0&&(s.fromBufferAttribute(N,G),w[z+J+0]=s.x,w[z+J+1]=s.y,w[z+J+2]=s.z,w[z+J+3]=0),g===!0&&(s.fromBufferAttribute(B,G),w[z+J+4]=s.x,w[z+J+5]=s.y,w[z+J+6]=s.z,w[z+J+7]=0),x===!0&&(s.fromBufferAttribute(q,G),w[z+J+8]=s.x,w[z+J+9]=s.y,w[z+J+10]=s.z,w[z+J+11]=q.itemSize===4?s.w:1)}}d={count:u,texture:D,size:new le(R,T)},n.set(o,d),o.addEventListener("dispose",S)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",a.morphTexture,t);else{let m=0;for(let x=0;x<h.length;x++)m+=h[x];const g=o.morphTargetsRelative?1:1-m;c.getUniforms().setValue(i,"morphTargetBaseInfluence",g),c.getUniforms().setValue(i,"morphTargetInfluences",h)}c.getUniforms().setValue(i,"morphTargetsTexture",d.texture,t),c.getUniforms().setValue(i,"morphTargetsTextureSize",d.size)}return{update:r}}function tv(i,e,t,n){let s=new WeakMap;function r(c){const h=n.render.frame,l=c.geometry,u=e.get(c,l);if(s.get(u)!==h&&(e.update(u),s.set(u,h)),c.isInstancedMesh&&(c.hasEventListener("dispose",o)===!1&&c.addEventListener("dispose",o),s.get(c)!==h&&(t.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,i.ARRAY_BUFFER),s.set(c,h))),c.isSkinnedMesh){const d=c.skeleton;s.get(d)!==h&&(d.update(),s.set(d,h))}return u}function a(){s=new WeakMap}function o(c){const h=c.target;h.removeEventListener("dispose",o),t.remove(h.instanceMatrix),h.instanceColor!==null&&t.remove(h.instanceColor)}return{update:r,dispose:a}}const hf=new Jt,_u=new Zd(1,1),uf=new Hd,df=new G0,ff=new jd,vu=[],yu=[],Su=new Float32Array(16),Mu=new Float32Array(9),bu=new Float32Array(4);function cr(i,e,t){const n=i[0];if(n<=0||n>0)return i;const s=e*t;let r=vu[s];if(r===void 0&&(r=new Float32Array(s),vu[s]=r),e!==0){n.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,i[a].toArray(r,o)}return r}function zt(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function Gt(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function go(i,e){let t=yu[e];t===void 0&&(t=new Int32Array(e),yu[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function nv(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function iv(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(zt(t,e))return;i.uniform2fv(this.addr,e),Gt(t,e)}}function sv(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(zt(t,e))return;i.uniform3fv(this.addr,e),Gt(t,e)}}function rv(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(zt(t,e))return;i.uniform4fv(this.addr,e),Gt(t,e)}}function av(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(zt(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),Gt(t,e)}else{if(zt(t,n))return;bu.set(n),i.uniformMatrix2fv(this.addr,!1,bu),Gt(t,n)}}function ov(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(zt(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),Gt(t,e)}else{if(zt(t,n))return;Mu.set(n),i.uniformMatrix3fv(this.addr,!1,Mu),Gt(t,n)}}function cv(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(zt(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),Gt(t,e)}else{if(zt(t,n))return;Su.set(n),i.uniformMatrix4fv(this.addr,!1,Su),Gt(t,n)}}function lv(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function hv(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(zt(t,e))return;i.uniform2iv(this.addr,e),Gt(t,e)}}function uv(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(zt(t,e))return;i.uniform3iv(this.addr,e),Gt(t,e)}}function dv(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(zt(t,e))return;i.uniform4iv(this.addr,e),Gt(t,e)}}function fv(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function pv(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(zt(t,e))return;i.uniform2uiv(this.addr,e),Gt(t,e)}}function mv(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(zt(t,e))return;i.uniform3uiv(this.addr,e),Gt(t,e)}}function xv(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(zt(t,e))return;i.uniform4uiv(this.addr,e),Gt(t,e)}}function gv(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(_u.compareFunction=Gd,r=_u):r=hf,t.setTexture2D(e||r,s)}function _v(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||df,s)}function vv(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTextureCube(e||ff,s)}function yv(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||uf,s)}function Sv(i){switch(i){case 5126:return nv;case 35664:return iv;case 35665:return sv;case 35666:return rv;case 35674:return av;case 35675:return ov;case 35676:return cv;case 5124:case 35670:return lv;case 35667:case 35671:return hv;case 35668:case 35672:return uv;case 35669:case 35673:return dv;case 5125:return fv;case 36294:return pv;case 36295:return mv;case 36296:return xv;case 35678:case 36198:case 36298:case 36306:case 35682:return gv;case 35679:case 36299:case 36307:return _v;case 35680:case 36300:case 36308:case 36293:return vv;case 36289:case 36303:case 36311:case 36292:return yv}}function Mv(i,e){i.uniform1fv(this.addr,e)}function bv(i,e){const t=cr(e,this.size,2);i.uniform2fv(this.addr,t)}function Ev(i,e){const t=cr(e,this.size,3);i.uniform3fv(this.addr,t)}function Tv(i,e){const t=cr(e,this.size,4);i.uniform4fv(this.addr,t)}function Cv(i,e){const t=cr(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function Av(i,e){const t=cr(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function Rv(i,e){const t=cr(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function wv(i,e){i.uniform1iv(this.addr,e)}function Pv(i,e){i.uniform2iv(this.addr,e)}function Lv(i,e){i.uniform3iv(this.addr,e)}function Iv(i,e){i.uniform4iv(this.addr,e)}function Dv(i,e){i.uniform1uiv(this.addr,e)}function Uv(i,e){i.uniform2uiv(this.addr,e)}function Nv(i,e){i.uniform3uiv(this.addr,e)}function Ov(i,e){i.uniform4uiv(this.addr,e)}function Fv(i,e,t){const n=this.cache,s=e.length,r=go(t,s);zt(n,r)||(i.uniform1iv(this.addr,r),Gt(n,r));for(let a=0;a!==s;++a)t.setTexture2D(e[a]||hf,r[a])}function Bv(i,e,t){const n=this.cache,s=e.length,r=go(t,s);zt(n,r)||(i.uniform1iv(this.addr,r),Gt(n,r));for(let a=0;a!==s;++a)t.setTexture3D(e[a]||df,r[a])}function kv(i,e,t){const n=this.cache,s=e.length,r=go(t,s);zt(n,r)||(i.uniform1iv(this.addr,r),Gt(n,r));for(let a=0;a!==s;++a)t.setTextureCube(e[a]||ff,r[a])}function zv(i,e,t){const n=this.cache,s=e.length,r=go(t,s);zt(n,r)||(i.uniform1iv(this.addr,r),Gt(n,r));for(let a=0;a!==s;++a)t.setTexture2DArray(e[a]||uf,r[a])}function Gv(i){switch(i){case 5126:return Mv;case 35664:return bv;case 35665:return Ev;case 35666:return Tv;case 35674:return Cv;case 35675:return Av;case 35676:return Rv;case 5124:case 35670:return wv;case 35667:case 35671:return Pv;case 35668:case 35672:return Lv;case 35669:case 35673:return Iv;case 5125:return Dv;case 36294:return Uv;case 36295:return Nv;case 36296:return Ov;case 35678:case 36198:case 36298:case 36306:case 35682:return Fv;case 35679:case 36299:case 36307:return Bv;case 35680:case 36300:case 36308:case 36293:return kv;case 36289:case 36303:case 36311:case 36292:return zv}}class Vv{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=Sv(t.type)}}class Hv{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Gv(t.type)}}class Wv{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const s=this.seq;for(let r=0,a=s.length;r!==a;++r){const o=s[r];o.setValue(e,t[o.id],n)}}}const hc=/(\w+)(\])?(\[|\.)?/g;function Eu(i,e){i.seq.push(e),i.map[e.id]=e}function Xv(i,e,t){const n=i.name,s=n.length;for(hc.lastIndex=0;;){const r=hc.exec(n),a=hc.lastIndex;let o=r[1];const c=r[2]==="]",h=r[3];if(c&&(o=o|0),h===void 0||h==="["&&a+2===s){Eu(t,h===void 0?new Vv(o,i,e):new Hv(o,i,e));break}else{let u=t.map[o];u===void 0&&(u=new Wv(o),Eu(t,u)),t=u}}}class Oa{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){const r=e.getActiveUniform(t,s),a=e.getUniformLocation(t,r.name);Xv(r,a,this)}}setValue(e,t,n,s){const r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){const s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,a=t.length;r!==a;++r){const o=t[r],c=n[o.id];c.needsUpdate!==!1&&o.setValue(e,c.value,s)}}static seqWithValue(e,t){const n=[];for(let s=0,r=e.length;s!==r;++s){const a=e[s];a.id in t&&n.push(a)}return n}}function Tu(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}const $v=37297;let qv=0;function Yv(i,e){const t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=s;a<r;a++){const o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}const Cu=new Je;function jv(i){ct._getMatrix(Cu,ct.workingColorSpace,i);const e=`mat3( ${Cu.elements.map(t=>t.toFixed(4))} )`;switch(ct.getTransfer(i)){case ja:return[e,"LinearTransferOETF"];case dt:return[e,"sRGBTransferOETF"];default:return je("WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function Au(i,e,t){const n=i.getShaderParameter(e,i.COMPILE_STATUS),r=(i.getShaderInfoLog(e)||"").trim();if(n&&r==="")return"";const a=/ERROR: 0:(\d+)/.exec(r);if(a){const o=parseInt(a[1]);return t.toUpperCase()+`

`+r+`

`+Yv(i.getShaderSource(e),o)}else return r}function Kv(i,e){const t=jv(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function Jv(i,e){let t;switch(e){case Cd:t="Linear";break;case Ad:t="Reinhard";break;case Rd:t="Cineon";break;case Hl:t="ACESFilmic";break;case Pd:t="AgX";break;case Ld:t="Neutral";break;case wd:t="Custom";break;default:je("WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Ra=new I;function Zv(){ct.getLuminanceCoefficients(Ra);const i=Ra.x.toFixed(4),e=Ra.y.toFixed(4),t=Ra.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Qv(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Mr).join(`
`)}function ey(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function ty(i,e){const t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const r=i.getActiveAttrib(e,s),a=r.name;let o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:i.getAttribLocation(e,a),locationSize:o}}return t}function Mr(i){return i!==""}function Ru(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function wu(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const ny=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ml(i){return i.replace(ny,sy)}const iy=new Map;function sy(i,e){let t=et[e];if(t===void 0){const n=iy.get(e);if(n!==void 0)t=et[n],je('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return Ml(t)}const ry=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Pu(i){return i.replace(ry,ay)}function ay(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Lu(i){let e=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function oy(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===bd?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===Ed?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===mi&&(e="SHADOWMAP_TYPE_VSM"),e}function cy(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Ks:case Js:e="ENVMAP_TYPE_CUBE";break;case fo:e="ENVMAP_TYPE_CUBE_UV";break}return e}function ly(i){let e="ENVMAP_MODE_REFLECTION";return i.envMap&&i.envMapMode===Js&&(e="ENVMAP_MODE_REFRACTION"),e}function hy(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Td:e="ENVMAP_BLENDING_MULTIPLY";break;case y0:e="ENVMAP_BLENDING_MIX";break;case S0:e="ENVMAP_BLENDING_ADD";break}return e}function uy(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function dy(i,e,t,n){const s=i.getContext(),r=t.defines;let a=t.vertexShader,o=t.fragmentShader;const c=oy(t),h=cy(t),l=ly(t),u=hy(t),d=uy(t),f=Qv(t),m=ey(r),g=s.createProgram();let x,p,v=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(x=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m].filter(Mr).join(`
`),x.length>0&&(x+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m].filter(Mr).join(`
`),p.length>0&&(p+=`
`)):(x=[Lu(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Mr).join(`
`),p=[Lu(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.envMap?"#define "+l:"",t.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==ki?"#define TONE_MAPPING":"",t.toneMapping!==ki?et.tonemapping_pars_fragment:"",t.toneMapping!==ki?Jv("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",et.colorspace_pars_fragment,Kv("linearToOutputTexel",t.outputColorSpace),Zv(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Mr).join(`
`)),a=Ml(a),a=Ru(a,t),a=wu(a,t),o=Ml(o),o=Ru(o,t),o=wu(o,t),a=Pu(a),o=Pu(o),t.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,x=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+x,p=["#define varying in",t.glslVersion===Uh?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Uh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const y=v+x+a,b=v+p+o,R=Tu(s,s.VERTEX_SHADER,y),T=Tu(s,s.FRAGMENT_SHADER,b);s.attachShader(g,R),s.attachShader(g,T),t.index0AttributeName!==void 0?s.bindAttribLocation(g,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(g,0,"position"),s.linkProgram(g);function w(P){if(i.debug.checkShaderErrors){const N=s.getProgramInfoLog(g)||"",B=s.getShaderInfoLog(R)||"",q=s.getShaderInfoLog(T)||"",z=N.trim(),G=B.trim(),J=q.trim();let k=!0,re=!0;if(s.getProgramParameter(g,s.LINK_STATUS)===!1)if(k=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,g,R,T);else{const de=Au(s,R,"vertex"),Ce=Au(s,T,"fragment");Rt("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(g,s.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+z+`
`+de+`
`+Ce)}else z!==""?je("WebGLProgram: Program Info Log:",z):(G===""||J==="")&&(re=!1);re&&(P.diagnostics={runnable:k,programLog:z,vertexShader:{log:G,prefix:x},fragmentShader:{log:J,prefix:p}})}s.deleteShader(R),s.deleteShader(T),D=new Oa(s,g),E=ty(s,g)}let D;this.getUniforms=function(){return D===void 0&&w(this),D};let E;this.getAttributes=function(){return E===void 0&&w(this),E};let S=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return S===!1&&(S=s.getProgramParameter(g,$v)),S},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(g),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=qv++,this.cacheKey=e,this.usedTimes=1,this.program=g,this.vertexShader=R,this.fragmentShader=T,this}let fy=0;class py{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(e);return a.has(s)===!1&&(a.add(s),s.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new my(e),t.set(e,n)),n}}class my{constructor(e){this.id=fy++,this.code=e,this.usedTimes=0}}function xy(i,e,t,n,s,r,a){const o=new Zl,c=new py,h=new Set,l=[],u=s.logarithmicDepthBuffer,d=s.vertexTextures;let f=s.precision;const m={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(E){return h.add(E),E===0?"uv":`uv${E}`}function x(E,S,P,N,B){const q=N.fog,z=B.geometry,G=E.isMeshStandardMaterial?N.environment:null,J=(E.isMeshStandardMaterial?t:e).get(E.envMap||G),k=J&&J.mapping===fo?J.image.height:null,re=m[E.type];E.precision!==null&&(f=s.getMaxPrecision(E.precision),f!==E.precision&&je("WebGLProgram.getParameters:",E.precision,"not supported, using",f,"instead."));const de=z.morphAttributes.position||z.morphAttributes.normal||z.morphAttributes.color,Ce=de!==void 0?de.length:0;let Ke=0;z.morphAttributes.position!==void 0&&(Ke=1),z.morphAttributes.normal!==void 0&&(Ke=2),z.morphAttributes.color!==void 0&&(Ke=3);let Ze,rt,lt,Z;if(re){const ft=ti[re];Ze=ft.vertexShader,rt=ft.fragmentShader}else Ze=E.vertexShader,rt=E.fragmentShader,c.update(E),lt=c.getVertexShaderID(E),Z=c.getFragmentShaderID(E);const ie=i.getRenderTarget(),Ee=i.state.buffers.depth.getReversed(),Fe=B.isInstancedMesh===!0,Ne=B.isBatchedMesh===!0,Qe=!!E.map,at=!!E.matcap,Oe=!!J,ne=!!E.aoMap,A=!!E.lightMap,se=!!E.bumpMap,oe=!!E.normalMap,he=!!E.displacementMap,ae=!!E.emissiveMap,Re=!!E.metalnessMap,ge=!!E.roughnessMap,be=E.anisotropy>0,C=E.clearcoat>0,_=E.dispersion>0,F=E.iridescence>0,Y=E.sheen>0,ee=E.transmission>0,$=be&&!!E.anisotropyMap,Ie=C&&!!E.clearcoatMap,ve=C&&!!E.clearcoatNormalMap,j=C&&!!E.clearcoatRoughnessMap,K=F&&!!E.iridescenceMap,H=F&&!!E.iridescenceThicknessMap,Q=Y&&!!E.sheenColorMap,Ae=Y&&!!E.sheenRoughnessMap,Be=!!E.specularMap,Se=!!E.specularColorMap,Ge=!!E.specularIntensityMap,L=ee&&!!E.transmissionMap,xe=ee&&!!E.thicknessMap,ue=!!E.gradientMap,_e=!!E.alphaMap,ce=E.alphaTest>0,te=!!E.alphaHash,De=!!E.extensions;let Ye=ki;E.toneMapped&&(ie===null||ie.isXRRenderTarget===!0)&&(Ye=i.toneMapping);const St={shaderID:re,shaderType:E.type,shaderName:E.name,vertexShader:Ze,fragmentShader:rt,defines:E.defines,customVertexShaderID:lt,customFragmentShaderID:Z,isRawShaderMaterial:E.isRawShaderMaterial===!0,glslVersion:E.glslVersion,precision:f,batching:Ne,batchingColor:Ne&&B._colorsTexture!==null,instancing:Fe,instancingColor:Fe&&B.instanceColor!==null,instancingMorph:Fe&&B.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:ie===null?i.outputColorSpace:ie.isXRRenderTarget===!0?ie.texture.colorSpace:Zs,alphaToCoverage:!!E.alphaToCoverage,map:Qe,matcap:at,envMap:Oe,envMapMode:Oe&&J.mapping,envMapCubeUVHeight:k,aoMap:ne,lightMap:A,bumpMap:se,normalMap:oe,displacementMap:d&&he,emissiveMap:ae,normalMapObjectSpace:oe&&E.normalMapType===T0,normalMapTangentSpace:oe&&E.normalMapType===zd,metalnessMap:Re,roughnessMap:ge,anisotropy:be,anisotropyMap:$,clearcoat:C,clearcoatMap:Ie,clearcoatNormalMap:ve,clearcoatRoughnessMap:j,dispersion:_,iridescence:F,iridescenceMap:K,iridescenceThicknessMap:H,sheen:Y,sheenColorMap:Q,sheenRoughnessMap:Ae,specularMap:Be,specularColorMap:Se,specularIntensityMap:Ge,transmission:ee,transmissionMap:L,thicknessMap:xe,gradientMap:ue,opaque:E.transparent===!1&&E.blending===Xs&&E.alphaToCoverage===!1,alphaMap:_e,alphaTest:ce,alphaHash:te,combine:E.combine,mapUv:Qe&&g(E.map.channel),aoMapUv:ne&&g(E.aoMap.channel),lightMapUv:A&&g(E.lightMap.channel),bumpMapUv:se&&g(E.bumpMap.channel),normalMapUv:oe&&g(E.normalMap.channel),displacementMapUv:he&&g(E.displacementMap.channel),emissiveMapUv:ae&&g(E.emissiveMap.channel),metalnessMapUv:Re&&g(E.metalnessMap.channel),roughnessMapUv:ge&&g(E.roughnessMap.channel),anisotropyMapUv:$&&g(E.anisotropyMap.channel),clearcoatMapUv:Ie&&g(E.clearcoatMap.channel),clearcoatNormalMapUv:ve&&g(E.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:j&&g(E.clearcoatRoughnessMap.channel),iridescenceMapUv:K&&g(E.iridescenceMap.channel),iridescenceThicknessMapUv:H&&g(E.iridescenceThicknessMap.channel),sheenColorMapUv:Q&&g(E.sheenColorMap.channel),sheenRoughnessMapUv:Ae&&g(E.sheenRoughnessMap.channel),specularMapUv:Be&&g(E.specularMap.channel),specularColorMapUv:Se&&g(E.specularColorMap.channel),specularIntensityMapUv:Ge&&g(E.specularIntensityMap.channel),transmissionMapUv:L&&g(E.transmissionMap.channel),thicknessMapUv:xe&&g(E.thicknessMap.channel),alphaMapUv:_e&&g(E.alphaMap.channel),vertexTangents:!!z.attributes.tangent&&(oe||be),vertexColors:E.vertexColors,vertexAlphas:E.vertexColors===!0&&!!z.attributes.color&&z.attributes.color.itemSize===4,pointsUvs:B.isPoints===!0&&!!z.attributes.uv&&(Qe||_e),fog:!!q,useFog:E.fog===!0,fogExp2:!!q&&q.isFogExp2,flatShading:E.flatShading===!0&&E.wireframe===!1,sizeAttenuation:E.sizeAttenuation===!0,logarithmicDepthBuffer:u,reversedDepthBuffer:Ee,skinning:B.isSkinnedMesh===!0,morphTargets:z.morphAttributes.position!==void 0,morphNormals:z.morphAttributes.normal!==void 0,morphColors:z.morphAttributes.color!==void 0,morphTargetsCount:Ce,morphTextureStride:Ke,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:E.dithering,shadowMapEnabled:i.shadowMap.enabled&&P.length>0,shadowMapType:i.shadowMap.type,toneMapping:Ye,decodeVideoTexture:Qe&&E.map.isVideoTexture===!0&&ct.getTransfer(E.map.colorSpace)===dt,decodeVideoTextureEmissive:ae&&E.emissiveMap.isVideoTexture===!0&&ct.getTransfer(E.emissiveMap.colorSpace)===dt,premultipliedAlpha:E.premultipliedAlpha,doubleSided:E.side===jt,flipSided:E.side===xn,useDepthPacking:E.depthPacking>=0,depthPacking:E.depthPacking||0,index0AttributeName:E.index0AttributeName,extensionClipCullDistance:De&&E.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(De&&E.extensions.multiDraw===!0||Ne)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:E.customProgramCacheKey()};return St.vertexUv1s=h.has(1),St.vertexUv2s=h.has(2),St.vertexUv3s=h.has(3),h.clear(),St}function p(E){const S=[];if(E.shaderID?S.push(E.shaderID):(S.push(E.customVertexShaderID),S.push(E.customFragmentShaderID)),E.defines!==void 0)for(const P in E.defines)S.push(P),S.push(E.defines[P]);return E.isRawShaderMaterial===!1&&(v(S,E),y(S,E),S.push(i.outputColorSpace)),S.push(E.customProgramCacheKey),S.join()}function v(E,S){E.push(S.precision),E.push(S.outputColorSpace),E.push(S.envMapMode),E.push(S.envMapCubeUVHeight),E.push(S.mapUv),E.push(S.alphaMapUv),E.push(S.lightMapUv),E.push(S.aoMapUv),E.push(S.bumpMapUv),E.push(S.normalMapUv),E.push(S.displacementMapUv),E.push(S.emissiveMapUv),E.push(S.metalnessMapUv),E.push(S.roughnessMapUv),E.push(S.anisotropyMapUv),E.push(S.clearcoatMapUv),E.push(S.clearcoatNormalMapUv),E.push(S.clearcoatRoughnessMapUv),E.push(S.iridescenceMapUv),E.push(S.iridescenceThicknessMapUv),E.push(S.sheenColorMapUv),E.push(S.sheenRoughnessMapUv),E.push(S.specularMapUv),E.push(S.specularColorMapUv),E.push(S.specularIntensityMapUv),E.push(S.transmissionMapUv),E.push(S.thicknessMapUv),E.push(S.combine),E.push(S.fogExp2),E.push(S.sizeAttenuation),E.push(S.morphTargetsCount),E.push(S.morphAttributeCount),E.push(S.numDirLights),E.push(S.numPointLights),E.push(S.numSpotLights),E.push(S.numSpotLightMaps),E.push(S.numHemiLights),E.push(S.numRectAreaLights),E.push(S.numDirLightShadows),E.push(S.numPointLightShadows),E.push(S.numSpotLightShadows),E.push(S.numSpotLightShadowsWithMaps),E.push(S.numLightProbes),E.push(S.shadowMapType),E.push(S.toneMapping),E.push(S.numClippingPlanes),E.push(S.numClipIntersection),E.push(S.depthPacking)}function y(E,S){o.disableAll(),S.supportsVertexTextures&&o.enable(0),S.instancing&&o.enable(1),S.instancingColor&&o.enable(2),S.instancingMorph&&o.enable(3),S.matcap&&o.enable(4),S.envMap&&o.enable(5),S.normalMapObjectSpace&&o.enable(6),S.normalMapTangentSpace&&o.enable(7),S.clearcoat&&o.enable(8),S.iridescence&&o.enable(9),S.alphaTest&&o.enable(10),S.vertexColors&&o.enable(11),S.vertexAlphas&&o.enable(12),S.vertexUv1s&&o.enable(13),S.vertexUv2s&&o.enable(14),S.vertexUv3s&&o.enable(15),S.vertexTangents&&o.enable(16),S.anisotropy&&o.enable(17),S.alphaHash&&o.enable(18),S.batching&&o.enable(19),S.dispersion&&o.enable(20),S.batchingColor&&o.enable(21),S.gradientMap&&o.enable(22),E.push(o.mask),o.disableAll(),S.fog&&o.enable(0),S.useFog&&o.enable(1),S.flatShading&&o.enable(2),S.logarithmicDepthBuffer&&o.enable(3),S.reversedDepthBuffer&&o.enable(4),S.skinning&&o.enable(5),S.morphTargets&&o.enable(6),S.morphNormals&&o.enable(7),S.morphColors&&o.enable(8),S.premultipliedAlpha&&o.enable(9),S.shadowMapEnabled&&o.enable(10),S.doubleSided&&o.enable(11),S.flipSided&&o.enable(12),S.useDepthPacking&&o.enable(13),S.dithering&&o.enable(14),S.transmission&&o.enable(15),S.sheen&&o.enable(16),S.opaque&&o.enable(17),S.pointsUvs&&o.enable(18),S.decodeVideoTexture&&o.enable(19),S.decodeVideoTextureEmissive&&o.enable(20),S.alphaToCoverage&&o.enable(21),E.push(o.mask)}function b(E){const S=m[E.type];let P;if(S){const N=ti[S];P=Or.clone(N.uniforms)}else P=E.uniforms;return P}function R(E,S){let P;for(let N=0,B=l.length;N<B;N++){const q=l[N];if(q.cacheKey===S){P=q,++P.usedTimes;break}}return P===void 0&&(P=new dy(i,S,E,r),l.push(P)),P}function T(E){if(--E.usedTimes===0){const S=l.indexOf(E);l[S]=l[l.length-1],l.pop(),E.destroy()}}function w(E){c.remove(E)}function D(){c.dispose()}return{getParameters:x,getProgramCacheKey:p,getUniforms:b,acquireProgram:R,releaseProgram:T,releaseShaderCache:w,programs:l,dispose:D}}function gy(){let i=new WeakMap;function e(a){return i.has(a)}function t(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function s(a,o,c){i.get(a)[o]=c}function r(){i=new WeakMap}return{has:e,get:t,remove:n,update:s,dispose:r}}function _y(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function Iu(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function Du(){const i=[];let e=0;const t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function a(u,d,f,m,g,x){let p=i[e];return p===void 0?(p={id:u.id,object:u,geometry:d,material:f,groupOrder:m,renderOrder:u.renderOrder,z:g,group:x},i[e]=p):(p.id=u.id,p.object=u,p.geometry=d,p.material=f,p.groupOrder=m,p.renderOrder=u.renderOrder,p.z=g,p.group=x),e++,p}function o(u,d,f,m,g,x){const p=a(u,d,f,m,g,x);f.transmission>0?n.push(p):f.transparent===!0?s.push(p):t.push(p)}function c(u,d,f,m,g,x){const p=a(u,d,f,m,g,x);f.transmission>0?n.unshift(p):f.transparent===!0?s.unshift(p):t.unshift(p)}function h(u,d){t.length>1&&t.sort(u||_y),n.length>1&&n.sort(d||Iu),s.length>1&&s.sort(d||Iu)}function l(){for(let u=e,d=i.length;u<d;u++){const f=i[u];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:o,unshift:c,finish:l,sort:h}}function vy(){let i=new WeakMap;function e(n,s){const r=i.get(n);let a;return r===void 0?(a=new Du,i.set(n,[a])):s>=r.length?(a=new Du,r.push(a)):a=r[s],a}function t(){i=new WeakMap}return{get:e,dispose:t}}function yy(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new I,color:new He};break;case"SpotLight":t={position:new I,direction:new I,color:new He,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new I,color:new He,distance:0,decay:0};break;case"HemisphereLight":t={direction:new I,skyColor:new He,groundColor:new He};break;case"RectAreaLight":t={color:new He,position:new I,halfWidth:new I,halfHeight:new I};break}return i[e.id]=t,t}}}function Sy(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new le};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new le};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new le,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let My=0;function by(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function Ey(i){const e=new yy,t=Sy(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)n.probe.push(new I);const s=new I,r=new yt,a=new yt;function o(h){let l=0,u=0,d=0;for(let E=0;E<9;E++)n.probe[E].set(0,0,0);let f=0,m=0,g=0,x=0,p=0,v=0,y=0,b=0,R=0,T=0,w=0;h.sort(by);for(let E=0,S=h.length;E<S;E++){const P=h[E],N=P.color,B=P.intensity,q=P.distance,z=P.shadow&&P.shadow.map?P.shadow.map.texture:null;if(P.isAmbientLight)l+=N.r*B,u+=N.g*B,d+=N.b*B;else if(P.isLightProbe){for(let G=0;G<9;G++)n.probe[G].addScaledVector(P.sh.coefficients[G],B);w++}else if(P.isDirectionalLight){const G=e.get(P);if(G.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){const J=P.shadow,k=t.get(P);k.shadowIntensity=J.intensity,k.shadowBias=J.bias,k.shadowNormalBias=J.normalBias,k.shadowRadius=J.radius,k.shadowMapSize=J.mapSize,n.directionalShadow[f]=k,n.directionalShadowMap[f]=z,n.directionalShadowMatrix[f]=P.shadow.matrix,v++}n.directional[f]=G,f++}else if(P.isSpotLight){const G=e.get(P);G.position.setFromMatrixPosition(P.matrixWorld),G.color.copy(N).multiplyScalar(B),G.distance=q,G.coneCos=Math.cos(P.angle),G.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),G.decay=P.decay,n.spot[g]=G;const J=P.shadow;if(P.map&&(n.spotLightMap[R]=P.map,R++,J.updateMatrices(P),P.castShadow&&T++),n.spotLightMatrix[g]=J.matrix,P.castShadow){const k=t.get(P);k.shadowIntensity=J.intensity,k.shadowBias=J.bias,k.shadowNormalBias=J.normalBias,k.shadowRadius=J.radius,k.shadowMapSize=J.mapSize,n.spotShadow[g]=k,n.spotShadowMap[g]=z,b++}g++}else if(P.isRectAreaLight){const G=e.get(P);G.color.copy(N).multiplyScalar(B),G.halfWidth.set(P.width*.5,0,0),G.halfHeight.set(0,P.height*.5,0),n.rectArea[x]=G,x++}else if(P.isPointLight){const G=e.get(P);if(G.color.copy(P.color).multiplyScalar(P.intensity),G.distance=P.distance,G.decay=P.decay,P.castShadow){const J=P.shadow,k=t.get(P);k.shadowIntensity=J.intensity,k.shadowBias=J.bias,k.shadowNormalBias=J.normalBias,k.shadowRadius=J.radius,k.shadowMapSize=J.mapSize,k.shadowCameraNear=J.camera.near,k.shadowCameraFar=J.camera.far,n.pointShadow[m]=k,n.pointShadowMap[m]=z,n.pointShadowMatrix[m]=P.shadow.matrix,y++}n.point[m]=G,m++}else if(P.isHemisphereLight){const G=e.get(P);G.skyColor.copy(P.color).multiplyScalar(B),G.groundColor.copy(P.groundColor).multiplyScalar(B),n.hemi[p]=G,p++}}x>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Me.LTC_FLOAT_1,n.rectAreaLTC2=Me.LTC_FLOAT_2):(n.rectAreaLTC1=Me.LTC_HALF_1,n.rectAreaLTC2=Me.LTC_HALF_2)),n.ambient[0]=l,n.ambient[1]=u,n.ambient[2]=d;const D=n.hash;(D.directionalLength!==f||D.pointLength!==m||D.spotLength!==g||D.rectAreaLength!==x||D.hemiLength!==p||D.numDirectionalShadows!==v||D.numPointShadows!==y||D.numSpotShadows!==b||D.numSpotMaps!==R||D.numLightProbes!==w)&&(n.directional.length=f,n.spot.length=g,n.rectArea.length=x,n.point.length=m,n.hemi.length=p,n.directionalShadow.length=v,n.directionalShadowMap.length=v,n.pointShadow.length=y,n.pointShadowMap.length=y,n.spotShadow.length=b,n.spotShadowMap.length=b,n.directionalShadowMatrix.length=v,n.pointShadowMatrix.length=y,n.spotLightMatrix.length=b+R-T,n.spotLightMap.length=R,n.numSpotLightShadowsWithMaps=T,n.numLightProbes=w,D.directionalLength=f,D.pointLength=m,D.spotLength=g,D.rectAreaLength=x,D.hemiLength=p,D.numDirectionalShadows=v,D.numPointShadows=y,D.numSpotShadows=b,D.numSpotMaps=R,D.numLightProbes=w,n.version=My++)}function c(h,l){let u=0,d=0,f=0,m=0,g=0;const x=l.matrixWorldInverse;for(let p=0,v=h.length;p<v;p++){const y=h[p];if(y.isDirectionalLight){const b=n.directional[u];b.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),b.direction.sub(s),b.direction.transformDirection(x),u++}else if(y.isSpotLight){const b=n.spot[f];b.position.setFromMatrixPosition(y.matrixWorld),b.position.applyMatrix4(x),b.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),b.direction.sub(s),b.direction.transformDirection(x),f++}else if(y.isRectAreaLight){const b=n.rectArea[m];b.position.setFromMatrixPosition(y.matrixWorld),b.position.applyMatrix4(x),a.identity(),r.copy(y.matrixWorld),r.premultiply(x),a.extractRotation(r),b.halfWidth.set(y.width*.5,0,0),b.halfHeight.set(0,y.height*.5,0),b.halfWidth.applyMatrix4(a),b.halfHeight.applyMatrix4(a),m++}else if(y.isPointLight){const b=n.point[d];b.position.setFromMatrixPosition(y.matrixWorld),b.position.applyMatrix4(x),d++}else if(y.isHemisphereLight){const b=n.hemi[g];b.direction.setFromMatrixPosition(y.matrixWorld),b.direction.transformDirection(x),g++}}}return{setup:o,setupView:c,state:n}}function Uu(i){const e=new Ey(i),t=[],n=[];function s(l){h.camera=l,t.length=0,n.length=0}function r(l){t.push(l)}function a(l){n.push(l)}function o(){e.setup(t)}function c(l){e.setupView(t,l)}const h={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:s,state:h,setupLights:o,setupLightsView:c,pushLight:r,pushShadow:a}}function Ty(i){let e=new WeakMap;function t(s,r=0){const a=e.get(s);let o;return a===void 0?(o=new Uu(i),e.set(s,[o])):r>=a.length?(o=new Uu(i),a.push(o)):o=a[r],o}function n(){e=new WeakMap}return{get:t,dispose:n}}const Cy=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Ay=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function Ry(i,e,t){let n=new eh;const s=new le,r=new le,a=new xt,o=new Wm({depthPacking:E0}),c=new Xm,h={},l=t.maxTextureSize,u={[Hi]:xn,[xn]:Hi,[jt]:jt},d=new Kt({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new le},radius:{value:4}},vertexShader:Cy,fragmentShader:Ay}),f=d.clone();f.defines.HORIZONTAL_PASS=1;const m=new Ut;m.setAttribute("position",new In(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const g=new ye(m,d),x=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=bd;let p=this.type;this.render=function(T,w,D){if(x.enabled===!1||x.autoUpdate===!1&&x.needsUpdate===!1||T.length===0)return;const E=i.getRenderTarget(),S=i.getActiveCubeFace(),P=i.getActiveMipmapLevel(),N=i.state;N.setBlending(si),N.buffers.depth.getReversed()===!0?N.buffers.color.setClear(0,0,0,0):N.buffers.color.setClear(1,1,1,1),N.buffers.depth.setTest(!0),N.setScissorTest(!1);const B=p!==mi&&this.type===mi,q=p===mi&&this.type!==mi;for(let z=0,G=T.length;z<G;z++){const J=T[z],k=J.shadow;if(k===void 0){je("WebGLShadowMap:",J,"has no shadow.");continue}if(k.autoUpdate===!1&&k.needsUpdate===!1)continue;s.copy(k.mapSize);const re=k.getFrameExtents();if(s.multiply(re),r.copy(k.mapSize),(s.x>l||s.y>l)&&(s.x>l&&(r.x=Math.floor(l/re.x),s.x=r.x*re.x,k.mapSize.x=r.x),s.y>l&&(r.y=Math.floor(l/re.y),s.y=r.y*re.y,k.mapSize.y=r.y)),k.map===null||B===!0||q===!0){const Ce=this.type!==mi?{minFilter:bn,magFilter:bn}:{};k.map!==null&&k.map.dispose(),k.map=new qn(s.x,s.y,Ce),k.map.texture.name=J.name+".shadowMap",k.camera.updateProjectionMatrix()}i.setRenderTarget(k.map),i.clear();const de=k.getViewportCount();for(let Ce=0;Ce<de;Ce++){const Ke=k.getViewport(Ce);a.set(r.x*Ke.x,r.y*Ke.y,r.x*Ke.z,r.y*Ke.w),N.viewport(a),k.updateMatrices(J,Ce),n=k.getFrustum(),b(w,D,k.camera,J,this.type)}k.isPointLightShadow!==!0&&this.type===mi&&v(k,D),k.needsUpdate=!1}p=this.type,x.needsUpdate=!1,i.setRenderTarget(E,S,P)};function v(T,w){const D=e.update(g);d.defines.VSM_SAMPLES!==T.blurSamples&&(d.defines.VSM_SAMPLES=T.blurSamples,f.defines.VSM_SAMPLES=T.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),T.mapPass===null&&(T.mapPass=new qn(s.x,s.y)),d.uniforms.shadow_pass.value=T.map.texture,d.uniforms.resolution.value=T.mapSize,d.uniforms.radius.value=T.radius,i.setRenderTarget(T.mapPass),i.clear(),i.renderBufferDirect(w,null,D,d,g,null),f.uniforms.shadow_pass.value=T.mapPass.texture,f.uniforms.resolution.value=T.mapSize,f.uniforms.radius.value=T.radius,i.setRenderTarget(T.map),i.clear(),i.renderBufferDirect(w,null,D,f,g,null)}function y(T,w,D,E){let S=null;const P=D.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(P!==void 0)S=P;else if(S=D.isPointLight===!0?c:o,i.localClippingEnabled&&w.clipShadows===!0&&Array.isArray(w.clippingPlanes)&&w.clippingPlanes.length!==0||w.displacementMap&&w.displacementScale!==0||w.alphaMap&&w.alphaTest>0||w.map&&w.alphaTest>0||w.alphaToCoverage===!0){const N=S.uuid,B=w.uuid;let q=h[N];q===void 0&&(q={},h[N]=q);let z=q[B];z===void 0&&(z=S.clone(),q[B]=z,w.addEventListener("dispose",R)),S=z}if(S.visible=w.visible,S.wireframe=w.wireframe,E===mi?S.side=w.shadowSide!==null?w.shadowSide:w.side:S.side=w.shadowSide!==null?w.shadowSide:u[w.side],S.alphaMap=w.alphaMap,S.alphaTest=w.alphaToCoverage===!0?.5:w.alphaTest,S.map=w.map,S.clipShadows=w.clipShadows,S.clippingPlanes=w.clippingPlanes,S.clipIntersection=w.clipIntersection,S.displacementMap=w.displacementMap,S.displacementScale=w.displacementScale,S.displacementBias=w.displacementBias,S.wireframeLinewidth=w.wireframeLinewidth,S.linewidth=w.linewidth,D.isPointLight===!0&&S.isMeshDistanceMaterial===!0){const N=i.properties.get(S);N.light=D}return S}function b(T,w,D,E,S){if(T.visible===!1)return;if(T.layers.test(w.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&S===mi)&&(!T.frustumCulled||n.intersectsObject(T))){T.modelViewMatrix.multiplyMatrices(D.matrixWorldInverse,T.matrixWorld);const B=e.update(T),q=T.material;if(Array.isArray(q)){const z=B.groups;for(let G=0,J=z.length;G<J;G++){const k=z[G],re=q[k.materialIndex];if(re&&re.visible){const de=y(T,re,E,S);T.onBeforeShadow(i,T,w,D,B,de,k),i.renderBufferDirect(D,null,B,de,T,k),T.onAfterShadow(i,T,w,D,B,de,k)}}}else if(q.visible){const z=y(T,q,E,S);T.onBeforeShadow(i,T,w,D,B,z,null),i.renderBufferDirect(D,null,B,z,T,null),T.onAfterShadow(i,T,w,D,B,z,null)}}const N=T.children;for(let B=0,q=N.length;B<q;B++)b(N[B],w,D,E,S)}function R(T){T.target.removeEventListener("dispose",R);for(const D in h){const E=h[D],S=T.target.uuid;S in E&&(E[S].dispose(),delete E[S])}}}const wy={[Lc]:Ic,[Dc]:Oc,[Uc]:Fc,[js]:Nc,[Ic]:Lc,[Oc]:Dc,[Fc]:Uc,[Nc]:js};function Py(i,e){function t(){let L=!1;const xe=new xt;let ue=null;const _e=new xt(0,0,0,0);return{setMask:function(ce){ue!==ce&&!L&&(i.colorMask(ce,ce,ce,ce),ue=ce)},setLocked:function(ce){L=ce},setClear:function(ce,te,De,Ye,St){St===!0&&(ce*=Ye,te*=Ye,De*=Ye),xe.set(ce,te,De,Ye),_e.equals(xe)===!1&&(i.clearColor(ce,te,De,Ye),_e.copy(xe))},reset:function(){L=!1,ue=null,_e.set(-1,0,0,0)}}}function n(){let L=!1,xe=!1,ue=null,_e=null,ce=null;return{setReversed:function(te){if(xe!==te){const De=e.get("EXT_clip_control");te?De.clipControlEXT(De.LOWER_LEFT_EXT,De.ZERO_TO_ONE_EXT):De.clipControlEXT(De.LOWER_LEFT_EXT,De.NEGATIVE_ONE_TO_ONE_EXT),xe=te;const Ye=ce;ce=null,this.setClear(Ye)}},getReversed:function(){return xe},setTest:function(te){te?ie(i.DEPTH_TEST):Ee(i.DEPTH_TEST)},setMask:function(te){ue!==te&&!L&&(i.depthMask(te),ue=te)},setFunc:function(te){if(xe&&(te=wy[te]),_e!==te){switch(te){case Lc:i.depthFunc(i.NEVER);break;case Ic:i.depthFunc(i.ALWAYS);break;case Dc:i.depthFunc(i.LESS);break;case js:i.depthFunc(i.LEQUAL);break;case Uc:i.depthFunc(i.EQUAL);break;case Nc:i.depthFunc(i.GEQUAL);break;case Oc:i.depthFunc(i.GREATER);break;case Fc:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}_e=te}},setLocked:function(te){L=te},setClear:function(te){ce!==te&&(xe&&(te=1-te),i.clearDepth(te),ce=te)},reset:function(){L=!1,ue=null,_e=null,ce=null,xe=!1}}}function s(){let L=!1,xe=null,ue=null,_e=null,ce=null,te=null,De=null,Ye=null,St=null;return{setTest:function(ft){L||(ft?ie(i.STENCIL_TEST):Ee(i.STENCIL_TEST))},setMask:function(ft){xe!==ft&&!L&&(i.stencilMask(ft),xe=ft)},setFunc:function(ft,jn,Un){(ue!==ft||_e!==jn||ce!==Un)&&(i.stencilFunc(ft,jn,Un),ue=ft,_e=jn,ce=Un)},setOp:function(ft,jn,Un){(te!==ft||De!==jn||Ye!==Un)&&(i.stencilOp(ft,jn,Un),te=ft,De=jn,Ye=Un)},setLocked:function(ft){L=ft},setClear:function(ft){St!==ft&&(i.clearStencil(ft),St=ft)},reset:function(){L=!1,xe=null,ue=null,_e=null,ce=null,te=null,De=null,Ye=null,St=null}}}const r=new t,a=new n,o=new s,c=new WeakMap,h=new WeakMap;let l={},u={},d=new WeakMap,f=[],m=null,g=!1,x=null,p=null,v=null,y=null,b=null,R=null,T=null,w=new He(0,0,0),D=0,E=!1,S=null,P=null,N=null,B=null,q=null;const z=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let G=!1,J=0;const k=i.getParameter(i.VERSION);k.indexOf("WebGL")!==-1?(J=parseFloat(/^WebGL (\d)/.exec(k)[1]),G=J>=1):k.indexOf("OpenGL ES")!==-1&&(J=parseFloat(/^OpenGL ES (\d)/.exec(k)[1]),G=J>=2);let re=null,de={};const Ce=i.getParameter(i.SCISSOR_BOX),Ke=i.getParameter(i.VIEWPORT),Ze=new xt().fromArray(Ce),rt=new xt().fromArray(Ke);function lt(L,xe,ue,_e){const ce=new Uint8Array(4),te=i.createTexture();i.bindTexture(L,te),i.texParameteri(L,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(L,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let De=0;De<ue;De++)L===i.TEXTURE_3D||L===i.TEXTURE_2D_ARRAY?i.texImage3D(xe,0,i.RGBA,1,1,_e,0,i.RGBA,i.UNSIGNED_BYTE,ce):i.texImage2D(xe+De,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,ce);return te}const Z={};Z[i.TEXTURE_2D]=lt(i.TEXTURE_2D,i.TEXTURE_2D,1),Z[i.TEXTURE_CUBE_MAP]=lt(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),Z[i.TEXTURE_2D_ARRAY]=lt(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),Z[i.TEXTURE_3D]=lt(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),ie(i.DEPTH_TEST),a.setFunc(js),se(!1),oe(wh),ie(i.CULL_FACE),ne(si);function ie(L){l[L]!==!0&&(i.enable(L),l[L]=!0)}function Ee(L){l[L]!==!1&&(i.disable(L),l[L]=!1)}function Fe(L,xe){return u[L]!==xe?(i.bindFramebuffer(L,xe),u[L]=xe,L===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=xe),L===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=xe),!0):!1}function Ne(L,xe){let ue=f,_e=!1;if(L){ue=d.get(xe),ue===void 0&&(ue=[],d.set(xe,ue));const ce=L.textures;if(ue.length!==ce.length||ue[0]!==i.COLOR_ATTACHMENT0){for(let te=0,De=ce.length;te<De;te++)ue[te]=i.COLOR_ATTACHMENT0+te;ue.length=ce.length,_e=!0}}else ue[0]!==i.BACK&&(ue[0]=i.BACK,_e=!0);_e&&i.drawBuffers(ue)}function Qe(L){return m!==L?(i.useProgram(L),m=L,!0):!1}const at={[rs]:i.FUNC_ADD,[i0]:i.FUNC_SUBTRACT,[s0]:i.FUNC_REVERSE_SUBTRACT};at[r0]=i.MIN,at[a0]=i.MAX;const Oe={[o0]:i.ZERO,[c0]:i.ONE,[l0]:i.SRC_COLOR,[wc]:i.SRC_ALPHA,[m0]:i.SRC_ALPHA_SATURATE,[f0]:i.DST_COLOR,[u0]:i.DST_ALPHA,[h0]:i.ONE_MINUS_SRC_COLOR,[Pc]:i.ONE_MINUS_SRC_ALPHA,[p0]:i.ONE_MINUS_DST_COLOR,[d0]:i.ONE_MINUS_DST_ALPHA,[x0]:i.CONSTANT_COLOR,[g0]:i.ONE_MINUS_CONSTANT_COLOR,[_0]:i.CONSTANT_ALPHA,[v0]:i.ONE_MINUS_CONSTANT_ALPHA};function ne(L,xe,ue,_e,ce,te,De,Ye,St,ft){if(L===si){g===!0&&(Ee(i.BLEND),g=!1);return}if(g===!1&&(ie(i.BLEND),g=!0),L!==n0){if(L!==x||ft!==E){if((p!==rs||b!==rs)&&(i.blendEquation(i.FUNC_ADD),p=rs,b=rs),ft)switch(L){case Xs:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Ya:i.blendFunc(i.ONE,i.ONE);break;case Ph:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Lh:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:Rt("WebGLState: Invalid blending: ",L);break}else switch(L){case Xs:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Ya:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case Ph:Rt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Lh:Rt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Rt("WebGLState: Invalid blending: ",L);break}v=null,y=null,R=null,T=null,w.set(0,0,0),D=0,x=L,E=ft}return}ce=ce||xe,te=te||ue,De=De||_e,(xe!==p||ce!==b)&&(i.blendEquationSeparate(at[xe],at[ce]),p=xe,b=ce),(ue!==v||_e!==y||te!==R||De!==T)&&(i.blendFuncSeparate(Oe[ue],Oe[_e],Oe[te],Oe[De]),v=ue,y=_e,R=te,T=De),(Ye.equals(w)===!1||St!==D)&&(i.blendColor(Ye.r,Ye.g,Ye.b,St),w.copy(Ye),D=St),x=L,E=!1}function A(L,xe){L.side===jt?Ee(i.CULL_FACE):ie(i.CULL_FACE);let ue=L.side===xn;xe&&(ue=!ue),se(ue),L.blending===Xs&&L.transparent===!1?ne(si):ne(L.blending,L.blendEquation,L.blendSrc,L.blendDst,L.blendEquationAlpha,L.blendSrcAlpha,L.blendDstAlpha,L.blendColor,L.blendAlpha,L.premultipliedAlpha),a.setFunc(L.depthFunc),a.setTest(L.depthTest),a.setMask(L.depthWrite),r.setMask(L.colorWrite);const _e=L.stencilWrite;o.setTest(_e),_e&&(o.setMask(L.stencilWriteMask),o.setFunc(L.stencilFunc,L.stencilRef,L.stencilFuncMask),o.setOp(L.stencilFail,L.stencilZFail,L.stencilZPass)),ae(L.polygonOffset,L.polygonOffsetFactor,L.polygonOffsetUnits),L.alphaToCoverage===!0?ie(i.SAMPLE_ALPHA_TO_COVERAGE):Ee(i.SAMPLE_ALPHA_TO_COVERAGE)}function se(L){S!==L&&(L?i.frontFace(i.CW):i.frontFace(i.CCW),S=L)}function oe(L){L!==e0?(ie(i.CULL_FACE),L!==P&&(L===wh?i.cullFace(i.BACK):L===t0?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Ee(i.CULL_FACE),P=L}function he(L){L!==N&&(G&&i.lineWidth(L),N=L)}function ae(L,xe,ue){L?(ie(i.POLYGON_OFFSET_FILL),(B!==xe||q!==ue)&&(i.polygonOffset(xe,ue),B=xe,q=ue)):Ee(i.POLYGON_OFFSET_FILL)}function Re(L){L?ie(i.SCISSOR_TEST):Ee(i.SCISSOR_TEST)}function ge(L){L===void 0&&(L=i.TEXTURE0+z-1),re!==L&&(i.activeTexture(L),re=L)}function be(L,xe,ue){ue===void 0&&(re===null?ue=i.TEXTURE0+z-1:ue=re);let _e=de[ue];_e===void 0&&(_e={type:void 0,texture:void 0},de[ue]=_e),(_e.type!==L||_e.texture!==xe)&&(re!==ue&&(i.activeTexture(ue),re=ue),i.bindTexture(L,xe||Z[L]),_e.type=L,_e.texture=xe)}function C(){const L=de[re];L!==void 0&&L.type!==void 0&&(i.bindTexture(L.type,null),L.type=void 0,L.texture=void 0)}function _(){try{i.compressedTexImage2D(...arguments)}catch(L){L("WebGLState:",L)}}function F(){try{i.compressedTexImage3D(...arguments)}catch(L){L("WebGLState:",L)}}function Y(){try{i.texSubImage2D(...arguments)}catch(L){L("WebGLState:",L)}}function ee(){try{i.texSubImage3D(...arguments)}catch(L){L("WebGLState:",L)}}function $(){try{i.compressedTexSubImage2D(...arguments)}catch(L){L("WebGLState:",L)}}function Ie(){try{i.compressedTexSubImage3D(...arguments)}catch(L){L("WebGLState:",L)}}function ve(){try{i.texStorage2D(...arguments)}catch(L){L("WebGLState:",L)}}function j(){try{i.texStorage3D(...arguments)}catch(L){L("WebGLState:",L)}}function K(){try{i.texImage2D(...arguments)}catch(L){L("WebGLState:",L)}}function H(){try{i.texImage3D(...arguments)}catch(L){L("WebGLState:",L)}}function Q(L){Ze.equals(L)===!1&&(i.scissor(L.x,L.y,L.z,L.w),Ze.copy(L))}function Ae(L){rt.equals(L)===!1&&(i.viewport(L.x,L.y,L.z,L.w),rt.copy(L))}function Be(L,xe){let ue=h.get(xe);ue===void 0&&(ue=new WeakMap,h.set(xe,ue));let _e=ue.get(L);_e===void 0&&(_e=i.getUniformBlockIndex(xe,L.name),ue.set(L,_e))}function Se(L,xe){const _e=h.get(xe).get(L);c.get(xe)!==_e&&(i.uniformBlockBinding(xe,_e,L.__bindingPointIndex),c.set(xe,_e))}function Ge(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),l={},re=null,de={},u={},d=new WeakMap,f=[],m=null,g=!1,x=null,p=null,v=null,y=null,b=null,R=null,T=null,w=new He(0,0,0),D=0,E=!1,S=null,P=null,N=null,B=null,q=null,Ze.set(0,0,i.canvas.width,i.canvas.height),rt.set(0,0,i.canvas.width,i.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:ie,disable:Ee,bindFramebuffer:Fe,drawBuffers:Ne,useProgram:Qe,setBlending:ne,setMaterial:A,setFlipSided:se,setCullFace:oe,setLineWidth:he,setPolygonOffset:ae,setScissorTest:Re,activeTexture:ge,bindTexture:be,unbindTexture:C,compressedTexImage2D:_,compressedTexImage3D:F,texImage2D:K,texImage3D:H,updateUBOMapping:Be,uniformBlockBinding:Se,texStorage2D:ve,texStorage3D:j,texSubImage2D:Y,texSubImage3D:ee,compressedTexSubImage2D:$,compressedTexSubImage3D:Ie,scissor:Q,viewport:Ae,reset:Ge}}function Ly(i,e,t,n,s,r,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new le,l=new WeakMap;let u;const d=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function m(C,_){return f?new OffscreenCanvas(C,_):Ja("canvas")}function g(C,_,F){let Y=1;const ee=be(C);if((ee.width>F||ee.height>F)&&(Y=F/Math.max(ee.width,ee.height)),Y<1)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap||typeof VideoFrame<"u"&&C instanceof VideoFrame){const $=Math.floor(Y*ee.width),Ie=Math.floor(Y*ee.height);u===void 0&&(u=m($,Ie));const ve=_?m($,Ie):u;return ve.width=$,ve.height=Ie,ve.getContext("2d").drawImage(C,0,0,$,Ie),je("WebGLRenderer: Texture has been resized from ("+ee.width+"x"+ee.height+") to ("+$+"x"+Ie+")."),ve}else return"data"in C&&je("WebGLRenderer: Image in DataTexture is too big ("+ee.width+"x"+ee.height+")."),C;return C}function x(C){return C.generateMipmaps}function p(C){i.generateMipmap(C)}function v(C){return C.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:C.isWebGL3DRenderTarget?i.TEXTURE_3D:C.isWebGLArrayRenderTarget||C.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function y(C,_,F,Y,ee=!1){if(C!==null){if(i[C]!==void 0)return i[C];je("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let $=_;if(_===i.RED&&(F===i.FLOAT&&($=i.R32F),F===i.HALF_FLOAT&&($=i.R16F),F===i.UNSIGNED_BYTE&&($=i.R8)),_===i.RED_INTEGER&&(F===i.UNSIGNED_BYTE&&($=i.R8UI),F===i.UNSIGNED_SHORT&&($=i.R16UI),F===i.UNSIGNED_INT&&($=i.R32UI),F===i.BYTE&&($=i.R8I),F===i.SHORT&&($=i.R16I),F===i.INT&&($=i.R32I)),_===i.RG&&(F===i.FLOAT&&($=i.RG32F),F===i.HALF_FLOAT&&($=i.RG16F),F===i.UNSIGNED_BYTE&&($=i.RG8)),_===i.RG_INTEGER&&(F===i.UNSIGNED_BYTE&&($=i.RG8UI),F===i.UNSIGNED_SHORT&&($=i.RG16UI),F===i.UNSIGNED_INT&&($=i.RG32UI),F===i.BYTE&&($=i.RG8I),F===i.SHORT&&($=i.RG16I),F===i.INT&&($=i.RG32I)),_===i.RGB_INTEGER&&(F===i.UNSIGNED_BYTE&&($=i.RGB8UI),F===i.UNSIGNED_SHORT&&($=i.RGB16UI),F===i.UNSIGNED_INT&&($=i.RGB32UI),F===i.BYTE&&($=i.RGB8I),F===i.SHORT&&($=i.RGB16I),F===i.INT&&($=i.RGB32I)),_===i.RGBA_INTEGER&&(F===i.UNSIGNED_BYTE&&($=i.RGBA8UI),F===i.UNSIGNED_SHORT&&($=i.RGBA16UI),F===i.UNSIGNED_INT&&($=i.RGBA32UI),F===i.BYTE&&($=i.RGBA8I),F===i.SHORT&&($=i.RGBA16I),F===i.INT&&($=i.RGBA32I)),_===i.RGB&&(F===i.UNSIGNED_INT_5_9_9_9_REV&&($=i.RGB9_E5),F===i.UNSIGNED_INT_10F_11F_11F_REV&&($=i.R11F_G11F_B10F)),_===i.RGBA){const Ie=ee?ja:ct.getTransfer(Y);F===i.FLOAT&&($=i.RGBA32F),F===i.HALF_FLOAT&&($=i.RGBA16F),F===i.UNSIGNED_BYTE&&($=Ie===dt?i.SRGB8_ALPHA8:i.RGBA8),F===i.UNSIGNED_SHORT_4_4_4_4&&($=i.RGBA4),F===i.UNSIGNED_SHORT_5_5_5_1&&($=i.RGB5_A1)}return($===i.R16F||$===i.R32F||$===i.RG16F||$===i.RG32F||$===i.RGBA16F||$===i.RGBA32F)&&e.get("EXT_color_buffer_float"),$}function b(C,_){let F;return C?_===null||_===ds||_===Ir?F=i.DEPTH24_STENCIL8:_===_i?F=i.DEPTH32F_STENCIL8:_===Lr&&(F=i.DEPTH24_STENCIL8,je("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):_===null||_===ds||_===Ir?F=i.DEPTH_COMPONENT24:_===_i?F=i.DEPTH_COMPONENT32F:_===Lr&&(F=i.DEPTH_COMPONENT16),F}function R(C,_){return x(C)===!0||C.isFramebufferTexture&&C.minFilter!==bn&&C.minFilter!==Ln?Math.log2(Math.max(_.width,_.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?_.mipmaps.length:1}function T(C){const _=C.target;_.removeEventListener("dispose",T),D(_),_.isVideoTexture&&l.delete(_)}function w(C){const _=C.target;_.removeEventListener("dispose",w),S(_)}function D(C){const _=n.get(C);if(_.__webglInit===void 0)return;const F=C.source,Y=d.get(F);if(Y){const ee=Y[_.__cacheKey];ee.usedTimes--,ee.usedTimes===0&&E(C),Object.keys(Y).length===0&&d.delete(F)}n.remove(C)}function E(C){const _=n.get(C);i.deleteTexture(_.__webglTexture);const F=C.source,Y=d.get(F);delete Y[_.__cacheKey],a.memory.textures--}function S(C){const _=n.get(C);if(C.depthTexture&&(C.depthTexture.dispose(),n.remove(C.depthTexture)),C.isWebGLCubeRenderTarget)for(let Y=0;Y<6;Y++){if(Array.isArray(_.__webglFramebuffer[Y]))for(let ee=0;ee<_.__webglFramebuffer[Y].length;ee++)i.deleteFramebuffer(_.__webglFramebuffer[Y][ee]);else i.deleteFramebuffer(_.__webglFramebuffer[Y]);_.__webglDepthbuffer&&i.deleteRenderbuffer(_.__webglDepthbuffer[Y])}else{if(Array.isArray(_.__webglFramebuffer))for(let Y=0;Y<_.__webglFramebuffer.length;Y++)i.deleteFramebuffer(_.__webglFramebuffer[Y]);else i.deleteFramebuffer(_.__webglFramebuffer);if(_.__webglDepthbuffer&&i.deleteRenderbuffer(_.__webglDepthbuffer),_.__webglMultisampledFramebuffer&&i.deleteFramebuffer(_.__webglMultisampledFramebuffer),_.__webglColorRenderbuffer)for(let Y=0;Y<_.__webglColorRenderbuffer.length;Y++)_.__webglColorRenderbuffer[Y]&&i.deleteRenderbuffer(_.__webglColorRenderbuffer[Y]);_.__webglDepthRenderbuffer&&i.deleteRenderbuffer(_.__webglDepthRenderbuffer)}const F=C.textures;for(let Y=0,ee=F.length;Y<ee;Y++){const $=n.get(F[Y]);$.__webglTexture&&(i.deleteTexture($.__webglTexture),a.memory.textures--),n.remove(F[Y])}n.remove(C)}let P=0;function N(){P=0}function B(){const C=P;return C>=s.maxTextures&&je("WebGLTextures: Trying to use "+C+" texture units while this GPU supports only "+s.maxTextures),P+=1,C}function q(C){const _=[];return _.push(C.wrapS),_.push(C.wrapT),_.push(C.wrapR||0),_.push(C.magFilter),_.push(C.minFilter),_.push(C.anisotropy),_.push(C.internalFormat),_.push(C.format),_.push(C.type),_.push(C.generateMipmaps),_.push(C.premultiplyAlpha),_.push(C.flipY),_.push(C.unpackAlignment),_.push(C.colorSpace),_.join()}function z(C,_){const F=n.get(C);if(C.isVideoTexture&&Re(C),C.isRenderTargetTexture===!1&&C.isExternalTexture!==!0&&C.version>0&&F.__version!==C.version){const Y=C.image;if(Y===null)je("WebGLRenderer: Texture marked for update but no image data found.");else if(Y.complete===!1)je("WebGLRenderer: Texture marked for update but image is incomplete");else{Z(F,C,_);return}}else C.isExternalTexture&&(F.__webglTexture=C.sourceTexture?C.sourceTexture:null);t.bindTexture(i.TEXTURE_2D,F.__webglTexture,i.TEXTURE0+_)}function G(C,_){const F=n.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&F.__version!==C.version){Z(F,C,_);return}else C.isExternalTexture&&(F.__webglTexture=C.sourceTexture?C.sourceTexture:null);t.bindTexture(i.TEXTURE_2D_ARRAY,F.__webglTexture,i.TEXTURE0+_)}function J(C,_){const F=n.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&F.__version!==C.version){Z(F,C,_);return}t.bindTexture(i.TEXTURE_3D,F.__webglTexture,i.TEXTURE0+_)}function k(C,_){const F=n.get(C);if(C.version>0&&F.__version!==C.version){ie(F,C,_);return}t.bindTexture(i.TEXTURE_CUBE_MAP,F.__webglTexture,i.TEXTURE0+_)}const re={[Xn]:i.REPEAT,[gi]:i.CLAMP_TO_EDGE,[zc]:i.MIRRORED_REPEAT},de={[bn]:i.NEAREST,[M0]:i.NEAREST_MIPMAP_NEAREST,[na]:i.NEAREST_MIPMAP_LINEAR,[Ln]:i.LINEAR,[wo]:i.LINEAR_MIPMAP_NEAREST,[hs]:i.LINEAR_MIPMAP_LINEAR},Ce={[C0]:i.NEVER,[I0]:i.ALWAYS,[A0]:i.LESS,[Gd]:i.LEQUAL,[R0]:i.EQUAL,[L0]:i.GEQUAL,[w0]:i.GREATER,[P0]:i.NOTEQUAL};function Ke(C,_){if(_.type===_i&&e.has("OES_texture_float_linear")===!1&&(_.magFilter===Ln||_.magFilter===wo||_.magFilter===na||_.magFilter===hs||_.minFilter===Ln||_.minFilter===wo||_.minFilter===na||_.minFilter===hs)&&je("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(C,i.TEXTURE_WRAP_S,re[_.wrapS]),i.texParameteri(C,i.TEXTURE_WRAP_T,re[_.wrapT]),(C===i.TEXTURE_3D||C===i.TEXTURE_2D_ARRAY)&&i.texParameteri(C,i.TEXTURE_WRAP_R,re[_.wrapR]),i.texParameteri(C,i.TEXTURE_MAG_FILTER,de[_.magFilter]),i.texParameteri(C,i.TEXTURE_MIN_FILTER,de[_.minFilter]),_.compareFunction&&(i.texParameteri(C,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(C,i.TEXTURE_COMPARE_FUNC,Ce[_.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(_.magFilter===bn||_.minFilter!==na&&_.minFilter!==hs||_.type===_i&&e.has("OES_texture_float_linear")===!1)return;if(_.anisotropy>1||n.get(_).__currentAnisotropy){const F=e.get("EXT_texture_filter_anisotropic");i.texParameterf(C,F.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(_.anisotropy,s.getMaxAnisotropy())),n.get(_).__currentAnisotropy=_.anisotropy}}}function Ze(C,_){let F=!1;C.__webglInit===void 0&&(C.__webglInit=!0,_.addEventListener("dispose",T));const Y=_.source;let ee=d.get(Y);ee===void 0&&(ee={},d.set(Y,ee));const $=q(_);if($!==C.__cacheKey){ee[$]===void 0&&(ee[$]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,F=!0),ee[$].usedTimes++;const Ie=ee[C.__cacheKey];Ie!==void 0&&(ee[C.__cacheKey].usedTimes--,Ie.usedTimes===0&&E(_)),C.__cacheKey=$,C.__webglTexture=ee[$].texture}return F}function rt(C,_,F){return Math.floor(Math.floor(C/F)/_)}function lt(C,_,F,Y){const $=C.updateRanges;if($.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,_.width,_.height,F,Y,_.data);else{$.sort((H,Q)=>H.start-Q.start);let Ie=0;for(let H=1;H<$.length;H++){const Q=$[Ie],Ae=$[H],Be=Q.start+Q.count,Se=rt(Ae.start,_.width,4),Ge=rt(Q.start,_.width,4);Ae.start<=Be+1&&Se===Ge&&rt(Ae.start+Ae.count-1,_.width,4)===Se?Q.count=Math.max(Q.count,Ae.start+Ae.count-Q.start):(++Ie,$[Ie]=Ae)}$.length=Ie+1;const ve=i.getParameter(i.UNPACK_ROW_LENGTH),j=i.getParameter(i.UNPACK_SKIP_PIXELS),K=i.getParameter(i.UNPACK_SKIP_ROWS);i.pixelStorei(i.UNPACK_ROW_LENGTH,_.width);for(let H=0,Q=$.length;H<Q;H++){const Ae=$[H],Be=Math.floor(Ae.start/4),Se=Math.ceil(Ae.count/4),Ge=Be%_.width,L=Math.floor(Be/_.width),xe=Se,ue=1;i.pixelStorei(i.UNPACK_SKIP_PIXELS,Ge),i.pixelStorei(i.UNPACK_SKIP_ROWS,L),t.texSubImage2D(i.TEXTURE_2D,0,Ge,L,xe,ue,F,Y,_.data)}C.clearUpdateRanges(),i.pixelStorei(i.UNPACK_ROW_LENGTH,ve),i.pixelStorei(i.UNPACK_SKIP_PIXELS,j),i.pixelStorei(i.UNPACK_SKIP_ROWS,K)}}function Z(C,_,F){let Y=i.TEXTURE_2D;(_.isDataArrayTexture||_.isCompressedArrayTexture)&&(Y=i.TEXTURE_2D_ARRAY),_.isData3DTexture&&(Y=i.TEXTURE_3D);const ee=Ze(C,_),$=_.source;t.bindTexture(Y,C.__webglTexture,i.TEXTURE0+F);const Ie=n.get($);if($.version!==Ie.__version||ee===!0){t.activeTexture(i.TEXTURE0+F);const ve=ct.getPrimaries(ct.workingColorSpace),j=_.colorSpace===Ni?null:ct.getPrimaries(_.colorSpace),K=_.colorSpace===Ni||ve===j?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,_.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,_.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,K);let H=g(_.image,!1,s.maxTextureSize);H=ge(_,H);const Q=r.convert(_.format,_.colorSpace),Ae=r.convert(_.type);let Be=y(_.internalFormat,Q,Ae,_.colorSpace,_.isVideoTexture);Ke(Y,_);let Se;const Ge=_.mipmaps,L=_.isVideoTexture!==!0,xe=Ie.__version===void 0||ee===!0,ue=$.dataReady,_e=R(_,H);if(_.isDepthTexture)Be=b(_.format===Ur,_.type),xe&&(L?t.texStorage2D(i.TEXTURE_2D,1,Be,H.width,H.height):t.texImage2D(i.TEXTURE_2D,0,Be,H.width,H.height,0,Q,Ae,null));else if(_.isDataTexture)if(Ge.length>0){L&&xe&&t.texStorage2D(i.TEXTURE_2D,_e,Be,Ge[0].width,Ge[0].height);for(let ce=0,te=Ge.length;ce<te;ce++)Se=Ge[ce],L?ue&&t.texSubImage2D(i.TEXTURE_2D,ce,0,0,Se.width,Se.height,Q,Ae,Se.data):t.texImage2D(i.TEXTURE_2D,ce,Be,Se.width,Se.height,0,Q,Ae,Se.data);_.generateMipmaps=!1}else L?(xe&&t.texStorage2D(i.TEXTURE_2D,_e,Be,H.width,H.height),ue&&lt(_,H,Q,Ae)):t.texImage2D(i.TEXTURE_2D,0,Be,H.width,H.height,0,Q,Ae,H.data);else if(_.isCompressedTexture)if(_.isCompressedArrayTexture){L&&xe&&t.texStorage3D(i.TEXTURE_2D_ARRAY,_e,Be,Ge[0].width,Ge[0].height,H.depth);for(let ce=0,te=Ge.length;ce<te;ce++)if(Se=Ge[ce],_.format!==$n)if(Q!==null)if(L){if(ue)if(_.layerUpdates.size>0){const De=du(Se.width,Se.height,_.format,_.type);for(const Ye of _.layerUpdates){const St=Se.data.subarray(Ye*De/Se.data.BYTES_PER_ELEMENT,(Ye+1)*De/Se.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ce,0,0,Ye,Se.width,Se.height,1,Q,St)}_.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ce,0,0,0,Se.width,Se.height,H.depth,Q,Se.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,ce,Be,Se.width,Se.height,H.depth,0,Se.data,0,0);else je("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else L?ue&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,ce,0,0,0,Se.width,Se.height,H.depth,Q,Ae,Se.data):t.texImage3D(i.TEXTURE_2D_ARRAY,ce,Be,Se.width,Se.height,H.depth,0,Q,Ae,Se.data)}else{L&&xe&&t.texStorage2D(i.TEXTURE_2D,_e,Be,Ge[0].width,Ge[0].height);for(let ce=0,te=Ge.length;ce<te;ce++)Se=Ge[ce],_.format!==$n?Q!==null?L?ue&&t.compressedTexSubImage2D(i.TEXTURE_2D,ce,0,0,Se.width,Se.height,Q,Se.data):t.compressedTexImage2D(i.TEXTURE_2D,ce,Be,Se.width,Se.height,0,Se.data):je("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):L?ue&&t.texSubImage2D(i.TEXTURE_2D,ce,0,0,Se.width,Se.height,Q,Ae,Se.data):t.texImage2D(i.TEXTURE_2D,ce,Be,Se.width,Se.height,0,Q,Ae,Se.data)}else if(_.isDataArrayTexture)if(L){if(xe&&t.texStorage3D(i.TEXTURE_2D_ARRAY,_e,Be,H.width,H.height,H.depth),ue)if(_.layerUpdates.size>0){const ce=du(H.width,H.height,_.format,_.type);for(const te of _.layerUpdates){const De=H.data.subarray(te*ce/H.data.BYTES_PER_ELEMENT,(te+1)*ce/H.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,te,H.width,H.height,1,Q,Ae,De)}_.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,H.width,H.height,H.depth,Q,Ae,H.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,Be,H.width,H.height,H.depth,0,Q,Ae,H.data);else if(_.isData3DTexture)L?(xe&&t.texStorage3D(i.TEXTURE_3D,_e,Be,H.width,H.height,H.depth),ue&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,H.width,H.height,H.depth,Q,Ae,H.data)):t.texImage3D(i.TEXTURE_3D,0,Be,H.width,H.height,H.depth,0,Q,Ae,H.data);else if(_.isFramebufferTexture){if(xe)if(L)t.texStorage2D(i.TEXTURE_2D,_e,Be,H.width,H.height);else{let ce=H.width,te=H.height;for(let De=0;De<_e;De++)t.texImage2D(i.TEXTURE_2D,De,Be,ce,te,0,Q,Ae,null),ce>>=1,te>>=1}}else if(Ge.length>0){if(L&&xe){const ce=be(Ge[0]);t.texStorage2D(i.TEXTURE_2D,_e,Be,ce.width,ce.height)}for(let ce=0,te=Ge.length;ce<te;ce++)Se=Ge[ce],L?ue&&t.texSubImage2D(i.TEXTURE_2D,ce,0,0,Q,Ae,Se):t.texImage2D(i.TEXTURE_2D,ce,Be,Q,Ae,Se);_.generateMipmaps=!1}else if(L){if(xe){const ce=be(H);t.texStorage2D(i.TEXTURE_2D,_e,Be,ce.width,ce.height)}ue&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,Q,Ae,H)}else t.texImage2D(i.TEXTURE_2D,0,Be,Q,Ae,H);x(_)&&p(Y),Ie.__version=$.version,_.onUpdate&&_.onUpdate(_)}C.__version=_.version}function ie(C,_,F){if(_.image.length!==6)return;const Y=Ze(C,_),ee=_.source;t.bindTexture(i.TEXTURE_CUBE_MAP,C.__webglTexture,i.TEXTURE0+F);const $=n.get(ee);if(ee.version!==$.__version||Y===!0){t.activeTexture(i.TEXTURE0+F);const Ie=ct.getPrimaries(ct.workingColorSpace),ve=_.colorSpace===Ni?null:ct.getPrimaries(_.colorSpace),j=_.colorSpace===Ni||Ie===ve?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,_.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,_.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,j);const K=_.isCompressedTexture||_.image[0].isCompressedTexture,H=_.image[0]&&_.image[0].isDataTexture,Q=[];for(let te=0;te<6;te++)!K&&!H?Q[te]=g(_.image[te],!0,s.maxCubemapSize):Q[te]=H?_.image[te].image:_.image[te],Q[te]=ge(_,Q[te]);const Ae=Q[0],Be=r.convert(_.format,_.colorSpace),Se=r.convert(_.type),Ge=y(_.internalFormat,Be,Se,_.colorSpace),L=_.isVideoTexture!==!0,xe=$.__version===void 0||Y===!0,ue=ee.dataReady;let _e=R(_,Ae);Ke(i.TEXTURE_CUBE_MAP,_);let ce;if(K){L&&xe&&t.texStorage2D(i.TEXTURE_CUBE_MAP,_e,Ge,Ae.width,Ae.height);for(let te=0;te<6;te++){ce=Q[te].mipmaps;for(let De=0;De<ce.length;De++){const Ye=ce[De];_.format!==$n?Be!==null?L?ue&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+te,De,0,0,Ye.width,Ye.height,Be,Ye.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+te,De,Ge,Ye.width,Ye.height,0,Ye.data):je("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):L?ue&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+te,De,0,0,Ye.width,Ye.height,Be,Se,Ye.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+te,De,Ge,Ye.width,Ye.height,0,Be,Se,Ye.data)}}}else{if(ce=_.mipmaps,L&&xe){ce.length>0&&_e++;const te=be(Q[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,_e,Ge,te.width,te.height)}for(let te=0;te<6;te++)if(H){L?ue&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,0,0,Q[te].width,Q[te].height,Be,Se,Q[te].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,Ge,Q[te].width,Q[te].height,0,Be,Se,Q[te].data);for(let De=0;De<ce.length;De++){const St=ce[De].image[te].image;L?ue&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+te,De+1,0,0,St.width,St.height,Be,Se,St.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+te,De+1,Ge,St.width,St.height,0,Be,Se,St.data)}}else{L?ue&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,0,0,Be,Se,Q[te]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,Ge,Be,Se,Q[te]);for(let De=0;De<ce.length;De++){const Ye=ce[De];L?ue&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+te,De+1,0,0,Be,Se,Ye.image[te]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+te,De+1,Ge,Be,Se,Ye.image[te])}}}x(_)&&p(i.TEXTURE_CUBE_MAP),$.__version=ee.version,_.onUpdate&&_.onUpdate(_)}C.__version=_.version}function Ee(C,_,F,Y,ee,$){const Ie=r.convert(F.format,F.colorSpace),ve=r.convert(F.type),j=y(F.internalFormat,Ie,ve,F.colorSpace),K=n.get(_),H=n.get(F);if(H.__renderTarget=_,!K.__hasExternalTextures){const Q=Math.max(1,_.width>>$),Ae=Math.max(1,_.height>>$);ee===i.TEXTURE_3D||ee===i.TEXTURE_2D_ARRAY?t.texImage3D(ee,$,j,Q,Ae,_.depth,0,Ie,ve,null):t.texImage2D(ee,$,j,Q,Ae,0,Ie,ve,null)}t.bindFramebuffer(i.FRAMEBUFFER,C),ae(_)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Y,ee,H.__webglTexture,0,he(_)):(ee===i.TEXTURE_2D||ee>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&ee<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,Y,ee,H.__webglTexture,$),t.bindFramebuffer(i.FRAMEBUFFER,null)}function Fe(C,_,F){if(i.bindRenderbuffer(i.RENDERBUFFER,C),_.depthBuffer){const Y=_.depthTexture,ee=Y&&Y.isDepthTexture?Y.type:null,$=b(_.stencilBuffer,ee),Ie=_.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ve=he(_);ae(_)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ve,$,_.width,_.height):F?i.renderbufferStorageMultisample(i.RENDERBUFFER,ve,$,_.width,_.height):i.renderbufferStorage(i.RENDERBUFFER,$,_.width,_.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Ie,i.RENDERBUFFER,C)}else{const Y=_.textures;for(let ee=0;ee<Y.length;ee++){const $=Y[ee],Ie=r.convert($.format,$.colorSpace),ve=r.convert($.type),j=y($.internalFormat,Ie,ve,$.colorSpace),K=he(_);F&&ae(_)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,K,j,_.width,_.height):ae(_)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,K,j,_.width,_.height):i.renderbufferStorage(i.RENDERBUFFER,j,_.width,_.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Ne(C,_){if(_&&_.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,C),!(_.depthTexture&&_.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const Y=n.get(_.depthTexture);Y.__renderTarget=_,(!Y.__webglTexture||_.depthTexture.image.width!==_.width||_.depthTexture.image.height!==_.height)&&(_.depthTexture.image.width=_.width,_.depthTexture.image.height=_.height,_.depthTexture.needsUpdate=!0),z(_.depthTexture,0);const ee=Y.__webglTexture,$=he(_);if(_.depthTexture.format===Dr)ae(_)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,ee,0,$):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,ee,0);else if(_.depthTexture.format===Ur)ae(_)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,ee,0,$):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,ee,0);else throw new Error("Unknown depthTexture format")}function Qe(C){const _=n.get(C),F=C.isWebGLCubeRenderTarget===!0;if(_.__boundDepthTexture!==C.depthTexture){const Y=C.depthTexture;if(_.__depthDisposeCallback&&_.__depthDisposeCallback(),Y){const ee=()=>{delete _.__boundDepthTexture,delete _.__depthDisposeCallback,Y.removeEventListener("dispose",ee)};Y.addEventListener("dispose",ee),_.__depthDisposeCallback=ee}_.__boundDepthTexture=Y}if(C.depthTexture&&!_.__autoAllocateDepthBuffer){if(F)throw new Error("target.depthTexture not supported in Cube render targets");const Y=C.texture.mipmaps;Y&&Y.length>0?Ne(_.__webglFramebuffer[0],C):Ne(_.__webglFramebuffer,C)}else if(F){_.__webglDepthbuffer=[];for(let Y=0;Y<6;Y++)if(t.bindFramebuffer(i.FRAMEBUFFER,_.__webglFramebuffer[Y]),_.__webglDepthbuffer[Y]===void 0)_.__webglDepthbuffer[Y]=i.createRenderbuffer(),Fe(_.__webglDepthbuffer[Y],C,!1);else{const ee=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,$=_.__webglDepthbuffer[Y];i.bindRenderbuffer(i.RENDERBUFFER,$),i.framebufferRenderbuffer(i.FRAMEBUFFER,ee,i.RENDERBUFFER,$)}}else{const Y=C.texture.mipmaps;if(Y&&Y.length>0?t.bindFramebuffer(i.FRAMEBUFFER,_.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,_.__webglFramebuffer),_.__webglDepthbuffer===void 0)_.__webglDepthbuffer=i.createRenderbuffer(),Fe(_.__webglDepthbuffer,C,!1);else{const ee=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,$=_.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,$),i.framebufferRenderbuffer(i.FRAMEBUFFER,ee,i.RENDERBUFFER,$)}}t.bindFramebuffer(i.FRAMEBUFFER,null)}function at(C,_,F){const Y=n.get(C);_!==void 0&&Ee(Y.__webglFramebuffer,C,C.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),F!==void 0&&Qe(C)}function Oe(C){const _=C.texture,F=n.get(C),Y=n.get(_);C.addEventListener("dispose",w);const ee=C.textures,$=C.isWebGLCubeRenderTarget===!0,Ie=ee.length>1;if(Ie||(Y.__webglTexture===void 0&&(Y.__webglTexture=i.createTexture()),Y.__version=_.version,a.memory.textures++),$){F.__webglFramebuffer=[];for(let ve=0;ve<6;ve++)if(_.mipmaps&&_.mipmaps.length>0){F.__webglFramebuffer[ve]=[];for(let j=0;j<_.mipmaps.length;j++)F.__webglFramebuffer[ve][j]=i.createFramebuffer()}else F.__webglFramebuffer[ve]=i.createFramebuffer()}else{if(_.mipmaps&&_.mipmaps.length>0){F.__webglFramebuffer=[];for(let ve=0;ve<_.mipmaps.length;ve++)F.__webglFramebuffer[ve]=i.createFramebuffer()}else F.__webglFramebuffer=i.createFramebuffer();if(Ie)for(let ve=0,j=ee.length;ve<j;ve++){const K=n.get(ee[ve]);K.__webglTexture===void 0&&(K.__webglTexture=i.createTexture(),a.memory.textures++)}if(C.samples>0&&ae(C)===!1){F.__webglMultisampledFramebuffer=i.createFramebuffer(),F.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,F.__webglMultisampledFramebuffer);for(let ve=0;ve<ee.length;ve++){const j=ee[ve];F.__webglColorRenderbuffer[ve]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,F.__webglColorRenderbuffer[ve]);const K=r.convert(j.format,j.colorSpace),H=r.convert(j.type),Q=y(j.internalFormat,K,H,j.colorSpace,C.isXRRenderTarget===!0),Ae=he(C);i.renderbufferStorageMultisample(i.RENDERBUFFER,Ae,Q,C.width,C.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ve,i.RENDERBUFFER,F.__webglColorRenderbuffer[ve])}i.bindRenderbuffer(i.RENDERBUFFER,null),C.depthBuffer&&(F.__webglDepthRenderbuffer=i.createRenderbuffer(),Fe(F.__webglDepthRenderbuffer,C,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if($){t.bindTexture(i.TEXTURE_CUBE_MAP,Y.__webglTexture),Ke(i.TEXTURE_CUBE_MAP,_);for(let ve=0;ve<6;ve++)if(_.mipmaps&&_.mipmaps.length>0)for(let j=0;j<_.mipmaps.length;j++)Ee(F.__webglFramebuffer[ve][j],C,_,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ve,j);else Ee(F.__webglFramebuffer[ve],C,_,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ve,0);x(_)&&p(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Ie){for(let ve=0,j=ee.length;ve<j;ve++){const K=ee[ve],H=n.get(K);let Q=i.TEXTURE_2D;(C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(Q=C.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(Q,H.__webglTexture),Ke(Q,K),Ee(F.__webglFramebuffer,C,K,i.COLOR_ATTACHMENT0+ve,Q,0),x(K)&&p(Q)}t.unbindTexture()}else{let ve=i.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(ve=C.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(ve,Y.__webglTexture),Ke(ve,_),_.mipmaps&&_.mipmaps.length>0)for(let j=0;j<_.mipmaps.length;j++)Ee(F.__webglFramebuffer[j],C,_,i.COLOR_ATTACHMENT0,ve,j);else Ee(F.__webglFramebuffer,C,_,i.COLOR_ATTACHMENT0,ve,0);x(_)&&p(ve),t.unbindTexture()}C.depthBuffer&&Qe(C)}function ne(C){const _=C.textures;for(let F=0,Y=_.length;F<Y;F++){const ee=_[F];if(x(ee)){const $=v(C),Ie=n.get(ee).__webglTexture;t.bindTexture($,Ie),p($),t.unbindTexture()}}}const A=[],se=[];function oe(C){if(C.samples>0){if(ae(C)===!1){const _=C.textures,F=C.width,Y=C.height;let ee=i.COLOR_BUFFER_BIT;const $=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Ie=n.get(C),ve=_.length>1;if(ve)for(let K=0;K<_.length;K++)t.bindFramebuffer(i.FRAMEBUFFER,Ie.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+K,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,Ie.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+K,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,Ie.__webglMultisampledFramebuffer);const j=C.texture.mipmaps;j&&j.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ie.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ie.__webglFramebuffer);for(let K=0;K<_.length;K++){if(C.resolveDepthBuffer&&(C.depthBuffer&&(ee|=i.DEPTH_BUFFER_BIT),C.stencilBuffer&&C.resolveStencilBuffer&&(ee|=i.STENCIL_BUFFER_BIT)),ve){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Ie.__webglColorRenderbuffer[K]);const H=n.get(_[K]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,H,0)}i.blitFramebuffer(0,0,F,Y,0,0,F,Y,ee,i.NEAREST),c===!0&&(A.length=0,se.length=0,A.push(i.COLOR_ATTACHMENT0+K),C.depthBuffer&&C.resolveDepthBuffer===!1&&(A.push($),se.push($),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,se)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,A))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),ve)for(let K=0;K<_.length;K++){t.bindFramebuffer(i.FRAMEBUFFER,Ie.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+K,i.RENDERBUFFER,Ie.__webglColorRenderbuffer[K]);const H=n.get(_[K]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,Ie.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+K,i.TEXTURE_2D,H,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ie.__webglMultisampledFramebuffer)}else if(C.depthBuffer&&C.resolveDepthBuffer===!1&&c){const _=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[_])}}}function he(C){return Math.min(s.maxSamples,C.samples)}function ae(C){const _=n.get(C);return C.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&_.__useRenderToTexture!==!1}function Re(C){const _=a.render.frame;l.get(C)!==_&&(l.set(C,_),C.update())}function ge(C,_){const F=C.colorSpace,Y=C.format,ee=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||F!==Zs&&F!==Ni&&(ct.getTransfer(F)===dt?(Y!==$n||ee!==ai)&&je("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Rt("WebGLTextures: Unsupported texture color space:",F)),_}function be(C){return typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement?(h.width=C.naturalWidth||C.width,h.height=C.naturalHeight||C.height):typeof VideoFrame<"u"&&C instanceof VideoFrame?(h.width=C.displayWidth,h.height=C.displayHeight):(h.width=C.width,h.height=C.height),h}this.allocateTextureUnit=B,this.resetTextureUnits=N,this.setTexture2D=z,this.setTexture2DArray=G,this.setTexture3D=J,this.setTextureCube=k,this.rebindTextures=at,this.setupRenderTarget=Oe,this.updateRenderTargetMipmap=ne,this.updateMultisampleRenderTarget=oe,this.setupDepthRenderbuffer=Qe,this.setupFrameBufferTexture=Ee,this.useMultisampledRTT=ae}function Iy(i,e){function t(n,s=Ni){let r;const a=ct.getTransfer(s);if(n===ai)return i.UNSIGNED_BYTE;if(n===Xl)return i.UNSIGNED_SHORT_4_4_4_4;if(n===$l)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Nd)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Od)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===Dd)return i.BYTE;if(n===Ud)return i.SHORT;if(n===Lr)return i.UNSIGNED_SHORT;if(n===Wl)return i.INT;if(n===ds)return i.UNSIGNED_INT;if(n===_i)return i.FLOAT;if(n===ri)return i.HALF_FLOAT;if(n===Fd)return i.ALPHA;if(n===Bd)return i.RGB;if(n===$n)return i.RGBA;if(n===Dr)return i.DEPTH_COMPONENT;if(n===Ur)return i.DEPTH_STENCIL;if(n===kd)return i.RED;if(n===ql)return i.RED_INTEGER;if(n===Yl)return i.RG;if(n===jl)return i.RG_INTEGER;if(n===Kl)return i.RGBA_INTEGER;if(n===Ia||n===Da||n===Ua||n===Na)if(a===dt)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Ia)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Da)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Ua)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Na)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Ia)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Da)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Ua)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Na)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Gc||n===Vc||n===Hc||n===Wc)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Gc)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Vc)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Hc)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Wc)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Xc||n===$c||n===qc)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Xc||n===$c)return a===dt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===qc)return a===dt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Yc||n===jc||n===Kc||n===Jc||n===Zc||n===Qc||n===el||n===tl||n===nl||n===il||n===sl||n===rl||n===al||n===ol)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Yc)return a===dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===jc)return a===dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Kc)return a===dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Jc)return a===dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Zc)return a===dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Qc)return a===dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===el)return a===dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===tl)return a===dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===nl)return a===dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===il)return a===dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===sl)return a===dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===rl)return a===dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===al)return a===dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===ol)return a===dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===cl||n===ll||n===hl)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===cl)return a===dt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===ll)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===hl)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===ul||n===dl||n===fl||n===pl)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===ul)return r.COMPRESSED_RED_RGTC1_EXT;if(n===dl)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===fl)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===pl)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Ir?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}const Dy=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Uy=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class Ny{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const n=new Qd(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new Kt({vertexShader:Dy,fragmentShader:Uy,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new ye(new qt(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Oy extends sr{constructor(e,t){super();const n=this;let s=null,r=1,a=null,o="local-floor",c=1,h=null,l=null,u=null,d=null,f=null,m=null;const g=typeof XRWebGLBinding<"u",x=new Ny,p={},v=t.getContextAttributes();let y=null,b=null;const R=[],T=[],w=new le;let D=null;const E=new pn;E.viewport=new xt;const S=new pn;S.viewport=new xt;const P=[E,S],N=new Qm;let B=null,q=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Z){let ie=R[Z];return ie===void 0&&(ie=new Zo,R[Z]=ie),ie.getTargetRaySpace()},this.getControllerGrip=function(Z){let ie=R[Z];return ie===void 0&&(ie=new Zo,R[Z]=ie),ie.getGripSpace()},this.getHand=function(Z){let ie=R[Z];return ie===void 0&&(ie=new Zo,R[Z]=ie),ie.getHandSpace()};function z(Z){const ie=T.indexOf(Z.inputSource);if(ie===-1)return;const Ee=R[ie];Ee!==void 0&&(Ee.update(Z.inputSource,Z.frame,h||a),Ee.dispatchEvent({type:Z.type,data:Z.inputSource}))}function G(){s.removeEventListener("select",z),s.removeEventListener("selectstart",z),s.removeEventListener("selectend",z),s.removeEventListener("squeeze",z),s.removeEventListener("squeezestart",z),s.removeEventListener("squeezeend",z),s.removeEventListener("end",G),s.removeEventListener("inputsourceschange",J);for(let Z=0;Z<R.length;Z++){const ie=T[Z];ie!==null&&(T[Z]=null,R[Z].disconnect(ie))}B=null,q=null,x.reset();for(const Z in p)delete p[Z];e.setRenderTarget(y),f=null,d=null,u=null,s=null,b=null,lt.stop(),n.isPresenting=!1,e.setPixelRatio(D),e.setSize(w.width,w.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Z){r=Z,n.isPresenting===!0&&je("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Z){o=Z,n.isPresenting===!0&&je("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return h||a},this.setReferenceSpace=function(Z){h=Z},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return u===null&&g&&(u=new XRWebGLBinding(s,t)),u},this.getFrame=function(){return m},this.getSession=function(){return s},this.setSession=async function(Z){if(s=Z,s!==null){if(y=e.getRenderTarget(),s.addEventListener("select",z),s.addEventListener("selectstart",z),s.addEventListener("selectend",z),s.addEventListener("squeeze",z),s.addEventListener("squeezestart",z),s.addEventListener("squeezeend",z),s.addEventListener("end",G),s.addEventListener("inputsourceschange",J),v.xrCompatible!==!0&&await t.makeXRCompatible(),D=e.getPixelRatio(),e.getSize(w),g&&"createProjectionLayer"in XRWebGLBinding.prototype){let Ee=null,Fe=null,Ne=null;v.depth&&(Ne=v.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,Ee=v.stencil?Ur:Dr,Fe=v.stencil?Ir:ds);const Qe={colorFormat:t.RGBA8,depthFormat:Ne,scaleFactor:r};u=this.getBinding(),d=u.createProjectionLayer(Qe),s.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),b=new qn(d.textureWidth,d.textureHeight,{format:$n,type:ai,depthTexture:new Zd(d.textureWidth,d.textureHeight,Fe,void 0,void 0,void 0,void 0,void 0,void 0,Ee),stencilBuffer:v.stencil,colorSpace:e.outputColorSpace,samples:v.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}else{const Ee={antialias:v.antialias,alpha:!0,depth:v.depth,stencil:v.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,t,Ee),s.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),b=new qn(f.framebufferWidth,f.framebufferHeight,{format:$n,type:ai,colorSpace:e.outputColorSpace,stencilBuffer:v.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}b.isXRRenderTarget=!0,this.setFoveation(c),h=null,a=await s.requestReferenceSpace(o),lt.setContext(s),lt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return x.getDepthTexture()};function J(Z){for(let ie=0;ie<Z.removed.length;ie++){const Ee=Z.removed[ie],Fe=T.indexOf(Ee);Fe>=0&&(T[Fe]=null,R[Fe].disconnect(Ee))}for(let ie=0;ie<Z.added.length;ie++){const Ee=Z.added[ie];let Fe=T.indexOf(Ee);if(Fe===-1){for(let Qe=0;Qe<R.length;Qe++)if(Qe>=T.length){T.push(Ee),Fe=Qe;break}else if(T[Qe]===null){T[Qe]=Ee,Fe=Qe;break}if(Fe===-1)break}const Ne=R[Fe];Ne&&Ne.connect(Ee)}}const k=new I,re=new I;function de(Z,ie,Ee){k.setFromMatrixPosition(ie.matrixWorld),re.setFromMatrixPosition(Ee.matrixWorld);const Fe=k.distanceTo(re),Ne=ie.projectionMatrix.elements,Qe=Ee.projectionMatrix.elements,at=Ne[14]/(Ne[10]-1),Oe=Ne[14]/(Ne[10]+1),ne=(Ne[9]+1)/Ne[5],A=(Ne[9]-1)/Ne[5],se=(Ne[8]-1)/Ne[0],oe=(Qe[8]+1)/Qe[0],he=at*se,ae=at*oe,Re=Fe/(-se+oe),ge=Re*-se;if(ie.matrixWorld.decompose(Z.position,Z.quaternion,Z.scale),Z.translateX(ge),Z.translateZ(Re),Z.matrixWorld.compose(Z.position,Z.quaternion,Z.scale),Z.matrixWorldInverse.copy(Z.matrixWorld).invert(),Ne[10]===-1)Z.projectionMatrix.copy(ie.projectionMatrix),Z.projectionMatrixInverse.copy(ie.projectionMatrixInverse);else{const be=at+Re,C=Oe+Re,_=he-ge,F=ae+(Fe-ge),Y=ne*Oe/C*be,ee=A*Oe/C*be;Z.projectionMatrix.makePerspective(_,F,Y,ee,be,C),Z.projectionMatrixInverse.copy(Z.projectionMatrix).invert()}}function Ce(Z,ie){ie===null?Z.matrixWorld.copy(Z.matrix):Z.matrixWorld.multiplyMatrices(ie.matrixWorld,Z.matrix),Z.matrixWorldInverse.copy(Z.matrixWorld).invert()}this.updateCamera=function(Z){if(s===null)return;let ie=Z.near,Ee=Z.far;x.texture!==null&&(x.depthNear>0&&(ie=x.depthNear),x.depthFar>0&&(Ee=x.depthFar)),N.near=S.near=E.near=ie,N.far=S.far=E.far=Ee,(B!==N.near||q!==N.far)&&(s.updateRenderState({depthNear:N.near,depthFar:N.far}),B=N.near,q=N.far),N.layers.mask=Z.layers.mask|6,E.layers.mask=N.layers.mask&3,S.layers.mask=N.layers.mask&5;const Fe=Z.parent,Ne=N.cameras;Ce(N,Fe);for(let Qe=0;Qe<Ne.length;Qe++)Ce(Ne[Qe],Fe);Ne.length===2?de(N,E,S):N.projectionMatrix.copy(E.projectionMatrix),Ke(Z,N,Fe)};function Ke(Z,ie,Ee){Ee===null?Z.matrix.copy(ie.matrixWorld):(Z.matrix.copy(Ee.matrixWorld),Z.matrix.invert(),Z.matrix.multiply(ie.matrixWorld)),Z.matrix.decompose(Z.position,Z.quaternion,Z.scale),Z.updateMatrixWorld(!0),Z.projectionMatrix.copy(ie.projectionMatrix),Z.projectionMatrixInverse.copy(ie.projectionMatrixInverse),Z.isPerspectiveCamera&&(Z.fov=Za*2*Math.atan(1/Z.projectionMatrix.elements[5]),Z.zoom=1)}this.getCamera=function(){return N},this.getFoveation=function(){if(!(d===null&&f===null))return c},this.setFoveation=function(Z){c=Z,d!==null&&(d.fixedFoveation=Z),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=Z)},this.hasDepthSensing=function(){return x.texture!==null},this.getDepthSensingMesh=function(){return x.getMesh(N)},this.getCameraTexture=function(Z){return p[Z]};let Ze=null;function rt(Z,ie){if(l=ie.getViewerPose(h||a),m=ie,l!==null){const Ee=l.views;f!==null&&(e.setRenderTargetFramebuffer(b,f.framebuffer),e.setRenderTarget(b));let Fe=!1;Ee.length!==N.cameras.length&&(N.cameras.length=0,Fe=!0);for(let Oe=0;Oe<Ee.length;Oe++){const ne=Ee[Oe];let A=null;if(f!==null)A=f.getViewport(ne);else{const oe=u.getViewSubImage(d,ne);A=oe.viewport,Oe===0&&(e.setRenderTargetTextures(b,oe.colorTexture,oe.depthStencilTexture),e.setRenderTarget(b))}let se=P[Oe];se===void 0&&(se=new pn,se.layers.enable(Oe),se.viewport=new xt,P[Oe]=se),se.matrix.fromArray(ne.transform.matrix),se.matrix.decompose(se.position,se.quaternion,se.scale),se.projectionMatrix.fromArray(ne.projectionMatrix),se.projectionMatrixInverse.copy(se.projectionMatrix).invert(),se.viewport.set(A.x,A.y,A.width,A.height),Oe===0&&(N.matrix.copy(se.matrix),N.matrix.decompose(N.position,N.quaternion,N.scale)),Fe===!0&&N.cameras.push(se)}const Ne=s.enabledFeatures;if(Ne&&Ne.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&g){u=n.getBinding();const Oe=u.getDepthInformation(Ee[0]);Oe&&Oe.isValid&&Oe.texture&&x.init(Oe,s.renderState)}if(Ne&&Ne.includes("camera-access")&&g){e.state.unbindTexture(),u=n.getBinding();for(let Oe=0;Oe<Ee.length;Oe++){const ne=Ee[Oe].camera;if(ne){let A=p[ne];A||(A=new Qd,p[ne]=A);const se=u.getCameraImage(ne);A.sourceTexture=se}}}}for(let Ee=0;Ee<R.length;Ee++){const Fe=T[Ee],Ne=R[Ee];Fe!==null&&Ne!==void 0&&Ne.update(Fe,ie,h||a)}Ze&&Ze(Z,ie),ie.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ie}),m=null}const lt=new lf;lt.setAnimationLoop(rt),this.setAnimationLoop=function(Z){Ze=Z},this.dispose=function(){}}}const ts=new oi,Fy=new yt;function By(i,e){function t(x,p){x.matrixAutoUpdate===!0&&x.updateMatrix(),p.value.copy(x.matrix)}function n(x,p){p.color.getRGB(x.fogColor.value,qd(i)),p.isFog?(x.fogNear.value=p.near,x.fogFar.value=p.far):p.isFogExp2&&(x.fogDensity.value=p.density)}function s(x,p,v,y,b){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(x,p):p.isMeshToonMaterial?(r(x,p),u(x,p)):p.isMeshPhongMaterial?(r(x,p),l(x,p)):p.isMeshStandardMaterial?(r(x,p),d(x,p),p.isMeshPhysicalMaterial&&f(x,p,b)):p.isMeshMatcapMaterial?(r(x,p),m(x,p)):p.isMeshDepthMaterial?r(x,p):p.isMeshDistanceMaterial?(r(x,p),g(x,p)):p.isMeshNormalMaterial?r(x,p):p.isLineBasicMaterial?(a(x,p),p.isLineDashedMaterial&&o(x,p)):p.isPointsMaterial?c(x,p,v,y):p.isSpriteMaterial?h(x,p):p.isShadowMaterial?(x.color.value.copy(p.color),x.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(x,p){x.opacity.value=p.opacity,p.color&&x.diffuse.value.copy(p.color),p.emissive&&x.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(x.map.value=p.map,t(p.map,x.mapTransform)),p.alphaMap&&(x.alphaMap.value=p.alphaMap,t(p.alphaMap,x.alphaMapTransform)),p.bumpMap&&(x.bumpMap.value=p.bumpMap,t(p.bumpMap,x.bumpMapTransform),x.bumpScale.value=p.bumpScale,p.side===xn&&(x.bumpScale.value*=-1)),p.normalMap&&(x.normalMap.value=p.normalMap,t(p.normalMap,x.normalMapTransform),x.normalScale.value.copy(p.normalScale),p.side===xn&&x.normalScale.value.negate()),p.displacementMap&&(x.displacementMap.value=p.displacementMap,t(p.displacementMap,x.displacementMapTransform),x.displacementScale.value=p.displacementScale,x.displacementBias.value=p.displacementBias),p.emissiveMap&&(x.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,x.emissiveMapTransform)),p.specularMap&&(x.specularMap.value=p.specularMap,t(p.specularMap,x.specularMapTransform)),p.alphaTest>0&&(x.alphaTest.value=p.alphaTest);const v=e.get(p),y=v.envMap,b=v.envMapRotation;y&&(x.envMap.value=y,ts.copy(b),ts.x*=-1,ts.y*=-1,ts.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(ts.y*=-1,ts.z*=-1),x.envMapRotation.value.setFromMatrix4(Fy.makeRotationFromEuler(ts)),x.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,x.reflectivity.value=p.reflectivity,x.ior.value=p.ior,x.refractionRatio.value=p.refractionRatio),p.lightMap&&(x.lightMap.value=p.lightMap,x.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,x.lightMapTransform)),p.aoMap&&(x.aoMap.value=p.aoMap,x.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,x.aoMapTransform))}function a(x,p){x.diffuse.value.copy(p.color),x.opacity.value=p.opacity,p.map&&(x.map.value=p.map,t(p.map,x.mapTransform))}function o(x,p){x.dashSize.value=p.dashSize,x.totalSize.value=p.dashSize+p.gapSize,x.scale.value=p.scale}function c(x,p,v,y){x.diffuse.value.copy(p.color),x.opacity.value=p.opacity,x.size.value=p.size*v,x.scale.value=y*.5,p.map&&(x.map.value=p.map,t(p.map,x.uvTransform)),p.alphaMap&&(x.alphaMap.value=p.alphaMap,t(p.alphaMap,x.alphaMapTransform)),p.alphaTest>0&&(x.alphaTest.value=p.alphaTest)}function h(x,p){x.diffuse.value.copy(p.color),x.opacity.value=p.opacity,x.rotation.value=p.rotation,p.map&&(x.map.value=p.map,t(p.map,x.mapTransform)),p.alphaMap&&(x.alphaMap.value=p.alphaMap,t(p.alphaMap,x.alphaMapTransform)),p.alphaTest>0&&(x.alphaTest.value=p.alphaTest)}function l(x,p){x.specular.value.copy(p.specular),x.shininess.value=Math.max(p.shininess,1e-4)}function u(x,p){p.gradientMap&&(x.gradientMap.value=p.gradientMap)}function d(x,p){x.metalness.value=p.metalness,p.metalnessMap&&(x.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,x.metalnessMapTransform)),x.roughness.value=p.roughness,p.roughnessMap&&(x.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,x.roughnessMapTransform)),p.envMap&&(x.envMapIntensity.value=p.envMapIntensity)}function f(x,p,v){x.ior.value=p.ior,p.sheen>0&&(x.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),x.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(x.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,x.sheenColorMapTransform)),p.sheenRoughnessMap&&(x.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,x.sheenRoughnessMapTransform))),p.clearcoat>0&&(x.clearcoat.value=p.clearcoat,x.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(x.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,x.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(x.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,x.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(x.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,x.clearcoatNormalMapTransform),x.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===xn&&x.clearcoatNormalScale.value.negate())),p.dispersion>0&&(x.dispersion.value=p.dispersion),p.iridescence>0&&(x.iridescence.value=p.iridescence,x.iridescenceIOR.value=p.iridescenceIOR,x.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],x.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(x.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,x.iridescenceMapTransform)),p.iridescenceThicknessMap&&(x.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,x.iridescenceThicknessMapTransform))),p.transmission>0&&(x.transmission.value=p.transmission,x.transmissionSamplerMap.value=v.texture,x.transmissionSamplerSize.value.set(v.width,v.height),p.transmissionMap&&(x.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,x.transmissionMapTransform)),x.thickness.value=p.thickness,p.thicknessMap&&(x.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,x.thicknessMapTransform)),x.attenuationDistance.value=p.attenuationDistance,x.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(x.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(x.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,x.anisotropyMapTransform))),x.specularIntensity.value=p.specularIntensity,x.specularColor.value.copy(p.specularColor),p.specularColorMap&&(x.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,x.specularColorMapTransform)),p.specularIntensityMap&&(x.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,x.specularIntensityMapTransform))}function m(x,p){p.matcap&&(x.matcap.value=p.matcap)}function g(x,p){const v=e.get(p).light;x.referencePosition.value.setFromMatrixPosition(v.matrixWorld),x.nearDistance.value=v.shadow.camera.near,x.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function ky(i,e,t,n){let s={},r={},a=[];const o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function c(v,y){const b=y.program;n.uniformBlockBinding(v,b)}function h(v,y){let b=s[v.id];b===void 0&&(m(v),b=l(v),s[v.id]=b,v.addEventListener("dispose",x));const R=y.program;n.updateUBOMapping(v,R);const T=e.render.frame;r[v.id]!==T&&(d(v),r[v.id]=T)}function l(v){const y=u();v.__bindingPointIndex=y;const b=i.createBuffer(),R=v.__size,T=v.usage;return i.bindBuffer(i.UNIFORM_BUFFER,b),i.bufferData(i.UNIFORM_BUFFER,R,T),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,y,b),b}function u(){for(let v=0;v<o;v++)if(a.indexOf(v)===-1)return a.push(v),v;return Rt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(v){const y=s[v.id],b=v.uniforms,R=v.__cache;i.bindBuffer(i.UNIFORM_BUFFER,y);for(let T=0,w=b.length;T<w;T++){const D=Array.isArray(b[T])?b[T]:[b[T]];for(let E=0,S=D.length;E<S;E++){const P=D[E];if(f(P,T,E,R)===!0){const N=P.__offset,B=Array.isArray(P.value)?P.value:[P.value];let q=0;for(let z=0;z<B.length;z++){const G=B[z],J=g(G);typeof G=="number"||typeof G=="boolean"?(P.__data[0]=G,i.bufferSubData(i.UNIFORM_BUFFER,N+q,P.__data)):G.isMatrix3?(P.__data[0]=G.elements[0],P.__data[1]=G.elements[1],P.__data[2]=G.elements[2],P.__data[3]=0,P.__data[4]=G.elements[3],P.__data[5]=G.elements[4],P.__data[6]=G.elements[5],P.__data[7]=0,P.__data[8]=G.elements[6],P.__data[9]=G.elements[7],P.__data[10]=G.elements[8],P.__data[11]=0):(G.toArray(P.__data,q),q+=J.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,N,P.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function f(v,y,b,R){const T=v.value,w=y+"_"+b;if(R[w]===void 0)return typeof T=="number"||typeof T=="boolean"?R[w]=T:R[w]=T.clone(),!0;{const D=R[w];if(typeof T=="number"||typeof T=="boolean"){if(D!==T)return R[w]=T,!0}else if(D.equals(T)===!1)return D.copy(T),!0}return!1}function m(v){const y=v.uniforms;let b=0;const R=16;for(let w=0,D=y.length;w<D;w++){const E=Array.isArray(y[w])?y[w]:[y[w]];for(let S=0,P=E.length;S<P;S++){const N=E[S],B=Array.isArray(N.value)?N.value:[N.value];for(let q=0,z=B.length;q<z;q++){const G=B[q],J=g(G),k=b%R,re=k%J.boundary,de=k+re;b+=re,de!==0&&R-de<J.storage&&(b+=R-de),N.__data=new Float32Array(J.storage/Float32Array.BYTES_PER_ELEMENT),N.__offset=b,b+=J.storage}}}const T=b%R;return T>0&&(b+=R-T),v.__size=b,v.__cache={},this}function g(v){const y={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(y.boundary=4,y.storage=4):v.isVector2?(y.boundary=8,y.storage=8):v.isVector3||v.isColor?(y.boundary=16,y.storage=12):v.isVector4?(y.boundary=16,y.storage=16):v.isMatrix3?(y.boundary=48,y.storage=48):v.isMatrix4?(y.boundary=64,y.storage=64):v.isTexture?je("WebGLRenderer: Texture samplers can not be part of an uniforms group."):je("WebGLRenderer: Unsupported uniform value type.",v),y}function x(v){const y=v.target;y.removeEventListener("dispose",x);const b=a.indexOf(y.__bindingPointIndex);a.splice(b,1),i.deleteBuffer(s[y.id]),delete s[y.id],delete r[y.id]}function p(){for(const v in s)i.deleteBuffer(s[v]);a=[],s={},r={}}return{bind:c,update:h,dispose:p}}const zy=new Uint16Array([11481,15204,11534,15171,11808,15015,12385,14843,12894,14716,13396,14600,13693,14483,13976,14366,14237,14171,14405,13961,14511,13770,14605,13598,14687,13444,14760,13305,14822,13066,14876,12857,14923,12675,14963,12517,14997,12379,15025,12230,15049,12023,15070,11843,15086,11687,15100,11551,15111,11433,15120,11330,15127,11217,15132,11060,15135,10922,15138,10801,15139,10695,15139,10600,13012,14923,13020,14917,13064,14886,13176,14800,13349,14666,13513,14526,13724,14398,13960,14230,14200,14020,14383,13827,14488,13651,14583,13491,14667,13348,14740,13132,14803,12908,14856,12713,14901,12542,14938,12394,14968,12241,14992,12017,15010,11822,15024,11654,15034,11507,15041,11380,15044,11269,15044,11081,15042,10913,15037,10764,15031,10635,15023,10520,15014,10419,15003,10330,13657,14676,13658,14673,13670,14660,13698,14622,13750,14547,13834,14442,13956,14317,14112,14093,14291,13889,14407,13704,14499,13538,14586,13389,14664,13201,14733,12966,14792,12758,14842,12577,14882,12418,14915,12272,14940,12033,14959,11826,14972,11646,14980,11490,14983,11355,14983,11212,14979,11008,14971,10830,14961,10675,14950,10540,14936,10420,14923,10315,14909,10204,14894,10041,14089,14460,14090,14459,14096,14452,14112,14431,14141,14388,14186,14305,14252,14130,14341,13941,14399,13756,14467,13585,14539,13430,14610,13272,14677,13026,14737,12808,14790,12617,14833,12449,14869,12303,14896,12065,14916,11845,14929,11655,14937,11490,14939,11347,14936,11184,14930,10970,14921,10783,14912,10621,14900,10480,14885,10356,14867,10247,14848,10062,14827,9894,14805,9745,14400,14208,14400,14206,14402,14198,14406,14174,14415,14122,14427,14035,14444,13913,14469,13767,14504,13613,14548,13463,14598,13324,14651,13082,14704,12858,14752,12658,14795,12483,14831,12330,14860,12106,14881,11875,14895,11675,14903,11501,14905,11351,14903,11178,14900,10953,14892,10757,14880,10589,14865,10442,14847,10313,14827,10162,14805,9965,14782,9792,14757,9642,14731,9507,14562,13883,14562,13883,14563,13877,14566,13862,14570,13830,14576,13773,14584,13689,14595,13582,14613,13461,14637,13336,14668,13120,14704,12897,14741,12695,14776,12516,14808,12358,14835,12150,14856,11910,14870,11701,14878,11519,14882,11361,14884,11187,14880,10951,14871,10748,14858,10572,14842,10418,14823,10286,14801,10099,14777,9897,14751,9722,14725,9567,14696,9430,14666,9309,14702,13604,14702,13604,14702,13600,14703,13591,14705,13570,14707,13533,14709,13477,14712,13400,14718,13305,14727,13106,14743,12907,14762,12716,14784,12539,14807,12380,14827,12190,14844,11943,14855,11727,14863,11539,14870,11376,14871,11204,14868,10960,14858,10748,14845,10565,14829,10406,14809,10269,14786,10058,14761,9852,14734,9671,14705,9512,14674,9374,14641,9253,14608,9076,14821,13366,14821,13365,14821,13364,14821,13358,14821,13344,14821,13320,14819,13252,14817,13145,14815,13011,14814,12858,14817,12698,14823,12539,14832,12389,14841,12214,14850,11968,14856,11750,14861,11558,14866,11390,14867,11226,14862,10972,14853,10754,14840,10565,14823,10401,14803,10259,14780,10032,14754,9820,14725,9635,14694,9473,14661,9333,14627,9203,14593,8988,14557,8798,14923,13014,14922,13014,14922,13012,14922,13004,14920,12987,14919,12957,14915,12907,14909,12834,14902,12738,14894,12623,14888,12498,14883,12370,14880,12203,14878,11970,14875,11759,14873,11569,14874,11401,14872,11243,14865,10986,14855,10762,14842,10568,14825,10401,14804,10255,14781,10017,14754,9799,14725,9611,14692,9445,14658,9301,14623,9139,14587,8920,14548,8729,14509,8562,15008,12672,15008,12672,15008,12671,15007,12667,15005,12656,15001,12637,14997,12605,14989,12556,14978,12490,14966,12407,14953,12313,14940,12136,14927,11934,14914,11742,14903,11563,14896,11401,14889,11247,14879,10992,14866,10767,14851,10570,14833,10400,14812,10252,14789,10007,14761,9784,14731,9592,14698,9424,14663,9279,14627,9088,14588,8868,14548,8676,14508,8508,14467,8360,15080,12386,15080,12386,15079,12385,15078,12383,15076,12378,15072,12367,15066,12347,15057,12315,15045,12253,15030,12138,15012,11998,14993,11845,14972,11685,14951,11530,14935,11383,14920,11228,14904,10981,14887,10762,14870,10567,14850,10397,14827,10248,14803,9997,14774,9771,14743,9578,14710,9407,14674,9259,14637,9048,14596,8826,14555,8632,14514,8464,14471,8317,14427,8182,15139,12008,15139,12008,15138,12008,15137,12007,15135,12003,15130,11990,15124,11969,15115,11929,15102,11872,15086,11794,15064,11693,15041,11581,15013,11459,14987,11336,14966,11170,14944,10944,14921,10738,14898,10552,14875,10387,14850,10239,14824,9983,14794,9758,14762,9563,14728,9392,14692,9244,14653,9014,14611,8791,14569,8597,14526,8427,14481,8281,14436,8110,14391,7885,15188,11617,15188,11617,15187,11617,15186,11618,15183,11617,15179,11612,15173,11601,15163,11581,15150,11546,15133,11495,15110,11427,15083,11346,15051,11246,15024,11057,14996,10868,14967,10687,14938,10517,14911,10362,14882,10206,14853,9956,14821,9737,14787,9543,14752,9375,14715,9228,14675,8980,14632,8760,14589,8565,14544,8395,14498,8248,14451,8049,14404,7824,14357,7630,15228,11298,15228,11298,15227,11299,15226,11301,15223,11303,15219,11302,15213,11299,15204,11290,15191,11271,15174,11217,15150,11129,15119,11015,15087,10886,15057,10744,15024,10599,14990,10455,14957,10318,14924,10143,14891,9911,14856,9701,14820,9516,14782,9352,14744,9200,14703,8946,14659,8725,14615,8533,14568,8366,14521,8220,14472,7992,14423,7770,14374,7578,14315,7408,15260,10819,15260,10819,15259,10822,15258,10826,15256,10832,15251,10836,15246,10841,15237,10838,15225,10821,15207,10788,15183,10734,15151,10660,15120,10571,15087,10469,15049,10359,15012,10249,14974,10041,14937,9837,14900,9647,14860,9475,14820,9320,14779,9147,14736,8902,14691,8688,14646,8499,14598,8335,14549,8189,14499,7940,14448,7720,14397,7529,14347,7363,14256,7218,15285,10410,15285,10411,15285,10413,15284,10418,15282,10425,15278,10434,15272,10442,15264,10449,15252,10445,15235,10433,15210,10403,15179,10358,15149,10301,15113,10218,15073,10059,15033,9894,14991,9726,14951,9565,14909,9413,14865,9273,14822,9073,14777,8845,14730,8641,14682,8459,14633,8300,14583,8129,14531,7883,14479,7670,14426,7482,14373,7321,14305,7176,14201,6939,15305,9939,15305,9940,15305,9945,15304,9955,15302,9967,15298,9989,15293,10010,15286,10033,15274,10044,15258,10045,15233,10022,15205,9975,15174,9903,15136,9808,15095,9697,15053,9578,15009,9451,14965,9327,14918,9198,14871,8973,14825,8766,14775,8579,14725,8408,14675,8259,14622,8058,14569,7821,14515,7615,14460,7435,14405,7276,14350,7108,14256,6866,14149,6653,15321,9444,15321,9445,15321,9448,15320,9458,15317,9470,15314,9490,15310,9515,15302,9540,15292,9562,15276,9579,15251,9577,15226,9559,15195,9519,15156,9463,15116,9389,15071,9304,15025,9208,14978,9023,14927,8838,14878,8661,14827,8496,14774,8344,14722,8206,14667,7973,14612,7749,14556,7555,14499,7382,14443,7229,14385,7025,14322,6791,14210,6588,14100,6409,15333,8920,15333,8921,15332,8927,15332,8943,15329,8965,15326,9002,15322,9048,15316,9106,15307,9162,15291,9204,15267,9221,15244,9221,15212,9196,15175,9134,15133,9043,15088,8930,15040,8801,14990,8665,14938,8526,14886,8391,14830,8261,14775,8087,14719,7866,14661,7664,14603,7482,14544,7322,14485,7178,14426,6936,14367,6713,14281,6517,14166,6348,14054,6198,15341,8360,15341,8361,15341,8366,15341,8379,15339,8399,15336,8431,15332,8473,15326,8527,15318,8585,15302,8632,15281,8670,15258,8690,15227,8690,15191,8664,15149,8612,15104,8543,15055,8456,15001,8360,14948,8259,14892,8122,14834,7923,14776,7734,14716,7558,14656,7397,14595,7250,14534,7070,14472,6835,14410,6628,14350,6443,14243,6283,14125,6135,14010,5889,15348,7715,15348,7717,15348,7725,15347,7745,15345,7780,15343,7836,15339,7905,15334,8e3,15326,8103,15310,8193,15293,8239,15270,8270,15240,8287,15204,8283,15163,8260,15118,8223,15067,8143,15014,8014,14958,7873,14899,7723,14839,7573,14778,7430,14715,7293,14652,7164,14588,6931,14524,6720,14460,6531,14396,6362,14330,6210,14207,6015,14086,5781,13969,5576,15352,7114,15352,7116,15352,7128,15352,7159,15350,7195,15348,7237,15345,7299,15340,7374,15332,7457,15317,7544,15301,7633,15280,7703,15251,7754,15216,7775,15176,7767,15131,7733,15079,7670,15026,7588,14967,7492,14906,7387,14844,7278,14779,7171,14714,6965,14648,6770,14581,6587,14515,6420,14448,6269,14382,6123,14299,5881,14172,5665,14049,5477,13929,5310,15355,6329,15355,6330,15355,6339,15355,6362,15353,6410,15351,6472,15349,6572,15344,6688,15337,6835,15323,6985,15309,7142,15287,7220,15260,7277,15226,7310,15188,7326,15142,7318,15090,7285,15036,7239,14976,7177,14914,7045,14849,6892,14782,6736,14714,6581,14645,6433,14576,6293,14506,6164,14438,5946,14369,5733,14270,5540,14140,5369,14014,5216,13892,5043,15357,5483,15357,5484,15357,5496,15357,5528,15356,5597,15354,5692,15351,5835,15347,6011,15339,6195,15328,6317,15314,6446,15293,6566,15268,6668,15235,6746,15197,6796,15152,6811,15101,6790,15046,6748,14985,6673,14921,6583,14854,6479,14785,6371,14714,6259,14643,6149,14571,5946,14499,5750,14428,5567,14358,5401,14242,5250,14109,5111,13980,4870,13856,4657,15359,4555,15359,4557,15358,4573,15358,4633,15357,4715,15355,4841,15353,5061,15349,5216,15342,5391,15331,5577,15318,5770,15299,5967,15274,6150,15243,6223,15206,6280,15161,6310,15111,6317,15055,6300,14994,6262,14928,6208,14860,6141,14788,5994,14715,5838,14641,5684,14566,5529,14492,5384,14418,5247,14346,5121,14216,4892,14079,4682,13948,4496,13822,4330,15359,3498,15359,3501,15359,3520,15359,3598,15358,3719,15356,3860,15355,4137,15351,4305,15344,4563,15334,4809,15321,5116,15303,5273,15280,5418,15250,5547,15214,5653,15170,5722,15120,5761,15064,5763,15002,5733,14935,5673,14865,5597,14792,5504,14716,5400,14640,5294,14563,5185,14486,5041,14410,4841,14335,4655,14191,4482,14051,4325,13918,4183,13790,4012,15360,2282,15360,2285,15360,2306,15360,2401,15359,2547,15357,2748,15355,3103,15352,3349,15345,3675,15336,4020,15324,4272,15307,4496,15285,4716,15255,4908,15220,5086,15178,5170,15128,5214,15072,5234,15010,5231,14943,5206,14871,5166,14796,5102,14718,4971,14639,4833,14559,4687,14480,4541,14402,4401,14315,4268,14167,4142,14025,3958,13888,3747,13759,3556,15360,923,15360,925,15360,946,15360,1052,15359,1214,15357,1494,15356,1892,15352,2274,15346,2663,15338,3099,15326,3393,15309,3679,15288,3980,15260,4183,15226,4325,15185,4437,15136,4517,15080,4570,15018,4591,14950,4581,14877,4545,14800,4485,14720,4411,14638,4325,14556,4231,14475,4136,14395,3988,14297,3803,14145,3628,13999,3465,13861,3314,13729,3177,15360,263,15360,264,15360,272,15360,325,15359,407,15358,548,15356,780,15352,1144,15347,1580,15339,2099,15328,2425,15312,2795,15292,3133,15264,3329,15232,3517,15191,3689,15143,3819,15088,3923,15025,3978,14956,3999,14882,3979,14804,3931,14722,3855,14639,3756,14554,3645,14470,3529,14388,3409,14279,3289,14124,3173,13975,3055,13834,2848,13701,2658,15360,49,15360,49,15360,52,15360,75,15359,111,15358,201,15356,283,15353,519,15348,726,15340,1045,15329,1415,15314,1795,15295,2173,15269,2410,15237,2649,15197,2866,15150,3054,15095,3140,15032,3196,14963,3228,14888,3236,14808,3224,14725,3191,14639,3146,14553,3088,14466,2976,14382,2836,14262,2692,14103,2549,13952,2409,13808,2278,13674,2154,15360,4,15360,4,15360,4,15360,13,15359,33,15358,59,15357,112,15353,199,15348,302,15341,456,15331,628,15316,827,15297,1082,15272,1332,15241,1601,15202,1851,15156,2069,15101,2172,15039,2256,14970,2314,14894,2348,14813,2358,14728,2344,14640,2311,14551,2263,14463,2203,14376,2133,14247,2059,14084,1915,13930,1761,13784,1609,13648,1464,15360,0,15360,0,15360,0,15360,3,15359,18,15358,26,15357,53,15354,80,15348,97,15341,165,15332,238,15318,326,15299,427,15275,529,15245,654,15207,771,15161,885,15108,994,15046,1089,14976,1170,14900,1229,14817,1266,14731,1284,14641,1282,14550,1260,14460,1223,14370,1174,14232,1116,14066,1050,13909,981,13761,910,13623,839]);let pi=null;function Gy(){return pi===null&&(pi=new rm(zy,32,32,Yl,ri),pi.minFilter=Ln,pi.magFilter=Ln,pi.wrapS=gi,pi.wrapT=gi,pi.generateMipmaps=!1,pi.needsUpdate=!0),pi}class Vy{constructor(e={}){const{canvas:t=D0(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:h=!1,powerPreference:l="default",failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:d=!1}=e;this.isWebGLRenderer=!0;let f;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=n.getContextAttributes().alpha}else f=a;const m=new Set([Kl,jl,ql]),g=new Set([ai,ds,Lr,Ir,Xl,$l]),x=new Uint32Array(4),p=new Int32Array(4);let v=null,y=null;const b=[],R=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=ki,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const T=this;let w=!1;this._outputColorSpace=Wt;let D=0,E=0,S=null,P=-1,N=null;const B=new xt,q=new xt;let z=null;const G=new He(0);let J=0,k=t.width,re=t.height,de=1,Ce=null,Ke=null;const Ze=new xt(0,0,k,re),rt=new xt(0,0,k,re);let lt=!1;const Z=new eh;let ie=!1,Ee=!1;const Fe=new yt,Ne=new I,Qe=new xt,at={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Oe=!1;function ne(){return S===null?de:1}let A=n;function se(M,U){return t.getContext(M,U)}try{const M={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:h,powerPreference:l,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Vl}`),t.addEventListener("webglcontextlost",ce,!1),t.addEventListener("webglcontextrestored",te,!1),t.addEventListener("webglcontextcreationerror",De,!1),A===null){const U="webgl2";if(A=se(U,M),A===null)throw se(U)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(M){throw M("WebGLRenderer: "+M.message),M}let oe,he,ae,Re,ge,be,C,_,F,Y,ee,$,Ie,ve,j,K,H,Q,Ae,Be,Se,Ge,L,xe;function ue(){oe=new K_(A),oe.init(),Ge=new Iy(A,oe),he=new G_(A,oe,e,Ge),ae=new Py(A,oe),he.reversedDepthBuffer&&d&&ae.buffers.depth.setReversed(!0),Re=new Q_(A),ge=new gy,be=new Ly(A,oe,ae,ge,he,Ge,Re),C=new H_(T),_=new j_(T),F=new ix(A),L=new k_(A,F),Y=new J_(A,F,Re,L),ee=new tv(A,Y,F,Re),Ae=new ev(A,he,be),K=new V_(ge),$=new xy(T,C,_,oe,he,L,K),Ie=new By(T,ge),ve=new vy,j=new Ty(oe),Q=new B_(T,C,_,ae,ee,f,c),H=new Ry(T,ee,he),xe=new ky(A,Re,he,ae),Be=new z_(A,oe,Re),Se=new Z_(A,oe,Re),Re.programs=$.programs,T.capabilities=he,T.extensions=oe,T.properties=ge,T.renderLists=ve,T.shadowMap=H,T.state=ae,T.info=Re}ue();const _e=new Oy(T,A);this.xr=_e,this.getContext=function(){return A},this.getContextAttributes=function(){return A.getContextAttributes()},this.forceContextLoss=function(){const M=oe.get("WEBGL_lose_context");M&&M.loseContext()},this.forceContextRestore=function(){const M=oe.get("WEBGL_lose_context");M&&M.restoreContext()},this.getPixelRatio=function(){return de},this.setPixelRatio=function(M){M!==void 0&&(de=M,this.setSize(k,re,!1))},this.getSize=function(M){return M.set(k,re)},this.setSize=function(M,U,V=!0){if(_e.isPresenting){je("WebGLRenderer: Can't change size while VR device is presenting.");return}k=M,re=U,t.width=Math.floor(M*de),t.height=Math.floor(U*de),V===!0&&(t.style.width=M+"px",t.style.height=U+"px"),this.setViewport(0,0,M,U)},this.getDrawingBufferSize=function(M){return M.set(k*de,re*de).floor()},this.setDrawingBufferSize=function(M,U,V){k=M,re=U,de=V,t.width=Math.floor(M*V),t.height=Math.floor(U*V),this.setViewport(0,0,M,U)},this.getCurrentViewport=function(M){return M.copy(B)},this.getViewport=function(M){return M.copy(Ze)},this.setViewport=function(M,U,V,W){M.isVector4?Ze.set(M.x,M.y,M.z,M.w):Ze.set(M,U,V,W),ae.viewport(B.copy(Ze).multiplyScalar(de).round())},this.getScissor=function(M){return M.copy(rt)},this.setScissor=function(M,U,V,W){M.isVector4?rt.set(M.x,M.y,M.z,M.w):rt.set(M,U,V,W),ae.scissor(q.copy(rt).multiplyScalar(de).round())},this.getScissorTest=function(){return lt},this.setScissorTest=function(M){ae.setScissorTest(lt=M)},this.setOpaqueSort=function(M){Ce=M},this.setTransparentSort=function(M){Ke=M},this.getClearColor=function(M){return M.copy(Q.getClearColor())},this.setClearColor=function(){Q.setClearColor(...arguments)},this.getClearAlpha=function(){return Q.getClearAlpha()},this.setClearAlpha=function(){Q.setClearAlpha(...arguments)},this.clear=function(M=!0,U=!0,V=!0){let W=0;if(M){let O=!1;if(S!==null){const me=S.texture.format;O=m.has(me)}if(O){const me=S.texture.type,Te=g.has(me),Ue=Q.getClearColor(),we=Q.getClearAlpha(),$e=Ue.r,qe=Ue.g,We=Ue.b;Te?(x[0]=$e,x[1]=qe,x[2]=We,x[3]=we,A.clearBufferuiv(A.COLOR,0,x)):(p[0]=$e,p[1]=qe,p[2]=We,p[3]=we,A.clearBufferiv(A.COLOR,0,p))}else W|=A.COLOR_BUFFER_BIT}U&&(W|=A.DEPTH_BUFFER_BIT),V&&(W|=A.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),A.clear(W)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",ce,!1),t.removeEventListener("webglcontextrestored",te,!1),t.removeEventListener("webglcontextcreationerror",De,!1),Q.dispose(),ve.dispose(),j.dispose(),ge.dispose(),C.dispose(),_.dispose(),ee.dispose(),L.dispose(),xe.dispose(),$.dispose(),_e.dispose(),_e.removeEventListener("sessionstart",Mh),_e.removeEventListener("sessionend",bh),Yi.stop()};function ce(M){M.preventDefault(),Oh("WebGLRenderer: Context Lost."),w=!0}function te(){Oh("WebGLRenderer: Context Restored."),w=!1;const M=Re.autoReset,U=H.enabled,V=H.autoUpdate,W=H.needsUpdate,O=H.type;ue(),Re.autoReset=M,H.enabled=U,H.autoUpdate=V,H.needsUpdate=W,H.type=O}function De(M){Rt("WebGLRenderer: A WebGL context could not be created. Reason: ",M.statusMessage)}function Ye(M){const U=M.target;U.removeEventListener("dispose",Ye),St(U)}function St(M){ft(M),ge.remove(M)}function ft(M){const U=ge.get(M).programs;U!==void 0&&(U.forEach(function(V){$.releaseProgram(V)}),M.isShaderMaterial&&$.releaseShaderCache(M))}this.renderBufferDirect=function(M,U,V,W,O,me){U===null&&(U=at);const Te=O.isMesh&&O.matrixWorld.determinant()<0,Ue=qp(M,U,V,W,O);ae.setMaterial(W,Te);let we=V.index,$e=1;if(W.wireframe===!0){if(we=Y.getWireframeAttribute(V),we===void 0)return;$e=2}const qe=V.drawRange,We=V.attributes.position;let it=qe.start*$e,pt=(qe.start+qe.count)*$e;me!==null&&(it=Math.max(it,me.start*$e),pt=Math.min(pt,(me.start+me.count)*$e)),we!==null?(it=Math.max(it,0),pt=Math.min(pt,we.count)):We!=null&&(it=Math.max(it,0),pt=Math.min(pt,We.count));const Pt=pt-it;if(Pt<0||Pt===1/0)return;L.setup(O,W,Ue,V,we);let Lt,gt=Be;if(we!==null&&(Lt=F.get(we),gt=Se,gt.setIndex(Lt)),O.isMesh)W.wireframe===!0?(ae.setLineWidth(W.wireframeLinewidth*ne()),gt.setMode(A.LINES)):gt.setMode(A.TRIANGLES);else if(O.isLine){let Xe=W.linewidth;Xe===void 0&&(Xe=1),ae.setLineWidth(Xe*ne()),O.isLineSegments?gt.setMode(A.LINES):O.isLineLoop?gt.setMode(A.LINE_LOOP):gt.setMode(A.LINE_STRIP)}else O.isPoints?gt.setMode(A.POINTS):O.isSprite&&gt.setMode(A.TRIANGLES);if(O.isBatchedMesh)if(O._multiDrawInstances!==null)Nr("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),gt.renderMultiDrawInstances(O._multiDrawStarts,O._multiDrawCounts,O._multiDrawCount,O._multiDrawInstances);else if(oe.get("WEBGL_multi_draw"))gt.renderMultiDraw(O._multiDrawStarts,O._multiDrawCounts,O._multiDrawCount);else{const Xe=O._multiDrawStarts,Ct=O._multiDrawCounts,ht=O._multiDrawCount,_n=we?F.get(we).bytesPerElement:1,As=ge.get(W).currentProgram.getUniforms();for(let vn=0;vn<ht;vn++)As.setValue(A,"_gl_DrawID",vn),gt.render(Xe[vn]/_n,Ct[vn])}else if(O.isInstancedMesh)gt.renderInstances(it,Pt,O.count);else if(V.isInstancedBufferGeometry){const Xe=V._maxInstanceCount!==void 0?V._maxInstanceCount:1/0,Ct=Math.min(V.instanceCount,Xe);gt.renderInstances(it,Pt,Ct)}else gt.render(it,Pt)};function jn(M,U,V){M.transparent===!0&&M.side===jt&&M.forceSinglePass===!1?(M.side=xn,M.needsUpdate=!0,ta(M,U,V),M.side=Hi,M.needsUpdate=!0,ta(M,U,V),M.side=jt):ta(M,U,V)}this.compile=function(M,U,V=null){V===null&&(V=M),y=j.get(V),y.init(U),R.push(y),V.traverseVisible(function(O){O.isLight&&O.layers.test(U.layers)&&(y.pushLight(O),O.castShadow&&y.pushShadow(O))}),M!==V&&M.traverseVisible(function(O){O.isLight&&O.layers.test(U.layers)&&(y.pushLight(O),O.castShadow&&y.pushShadow(O))}),y.setupLights();const W=new Set;return M.traverse(function(O){if(!(O.isMesh||O.isPoints||O.isLine||O.isSprite))return;const me=O.material;if(me)if(Array.isArray(me))for(let Te=0;Te<me.length;Te++){const Ue=me[Te];jn(Ue,V,O),W.add(Ue)}else jn(me,V,O),W.add(me)}),y=R.pop(),W},this.compileAsync=function(M,U,V=null){const W=this.compile(M,U,V);return new Promise(O=>{function me(){if(W.forEach(function(Te){ge.get(Te).currentProgram.isReady()&&W.delete(Te)}),W.size===0){O(M);return}setTimeout(me,10)}oe.get("KHR_parallel_shader_compile")!==null?me():setTimeout(me,10)})};let Un=null;function $p(M){Un&&Un(M)}function Mh(){Yi.stop()}function bh(){Yi.start()}const Yi=new lf;Yi.setAnimationLoop($p),typeof self<"u"&&Yi.setContext(self),this.setAnimationLoop=function(M){Un=M,_e.setAnimationLoop(M),M===null?Yi.stop():Yi.start()},_e.addEventListener("sessionstart",Mh),_e.addEventListener("sessionend",bh),this.render=function(M,U){if(U!==void 0&&U.isCamera!==!0){Rt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(w===!0)return;if(M.matrixWorldAutoUpdate===!0&&M.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),_e.enabled===!0&&_e.isPresenting===!0&&(_e.cameraAutoUpdate===!0&&_e.updateCamera(U),U=_e.getCamera()),M.isScene===!0&&M.onBeforeRender(T,M,U,S),y=j.get(M,R.length),y.init(U),R.push(y),Fe.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),Z.setFromProjectionMatrix(Fe,ii,U.reversedDepth),Ee=this.localClippingEnabled,ie=K.init(this.clippingPlanes,Ee),v=ve.get(M,b.length),v.init(),b.push(v),_e.enabled===!0&&_e.isPresenting===!0){const me=T.xr.getDepthSensingMesh();me!==null&&Ao(me,U,-1/0,T.sortObjects)}Ao(M,U,0,T.sortObjects),v.finish(),T.sortObjects===!0&&v.sort(Ce,Ke),Oe=_e.enabled===!1||_e.isPresenting===!1||_e.hasDepthSensing()===!1,Oe&&Q.addToRenderList(v,M),this.info.render.frame++,ie===!0&&K.beginShadows();const V=y.state.shadowsArray;H.render(V,M,U),ie===!0&&K.endShadows(),this.info.autoReset===!0&&this.info.reset();const W=v.opaque,O=v.transmissive;if(y.setupLights(),U.isArrayCamera){const me=U.cameras;if(O.length>0)for(let Te=0,Ue=me.length;Te<Ue;Te++){const we=me[Te];Th(W,O,M,we)}Oe&&Q.render(M);for(let Te=0,Ue=me.length;Te<Ue;Te++){const we=me[Te];Eh(v,M,we,we.viewport)}}else O.length>0&&Th(W,O,M,U),Oe&&Q.render(M),Eh(v,M,U);S!==null&&E===0&&(be.updateMultisampleRenderTarget(S),be.updateRenderTargetMipmap(S)),M.isScene===!0&&M.onAfterRender(T,M,U),L.resetDefaultState(),P=-1,N=null,R.pop(),R.length>0?(y=R[R.length-1],ie===!0&&K.setGlobalState(T.clippingPlanes,y.state.camera)):y=null,b.pop(),b.length>0?v=b[b.length-1]:v=null};function Ao(M,U,V,W){if(M.visible===!1)return;if(M.layers.test(U.layers)){if(M.isGroup)V=M.renderOrder;else if(M.isLOD)M.autoUpdate===!0&&M.update(U);else if(M.isLight)y.pushLight(M),M.castShadow&&y.pushShadow(M);else if(M.isSprite){if(!M.frustumCulled||Z.intersectsSprite(M)){W&&Qe.setFromMatrixPosition(M.matrixWorld).applyMatrix4(Fe);const Te=ee.update(M),Ue=M.material;Ue.visible&&v.push(M,Te,Ue,V,Qe.z,null)}}else if((M.isMesh||M.isLine||M.isPoints)&&(!M.frustumCulled||Z.intersectsObject(M))){const Te=ee.update(M),Ue=M.material;if(W&&(M.boundingSphere!==void 0?(M.boundingSphere===null&&M.computeBoundingSphere(),Qe.copy(M.boundingSphere.center)):(Te.boundingSphere===null&&Te.computeBoundingSphere(),Qe.copy(Te.boundingSphere.center)),Qe.applyMatrix4(M.matrixWorld).applyMatrix4(Fe)),Array.isArray(Ue)){const we=Te.groups;for(let $e=0,qe=we.length;$e<qe;$e++){const We=we[$e],it=Ue[We.materialIndex];it&&it.visible&&v.push(M,Te,it,V,Qe.z,We)}}else Ue.visible&&v.push(M,Te,Ue,V,Qe.z,null)}}const me=M.children;for(let Te=0,Ue=me.length;Te<Ue;Te++)Ao(me[Te],U,V,W)}function Eh(M,U,V,W){const{opaque:O,transmissive:me,transparent:Te}=M;y.setupLightsView(V),ie===!0&&K.setGlobalState(T.clippingPlanes,V),W&&ae.viewport(B.copy(W)),O.length>0&&ea(O,U,V),me.length>0&&ea(me,U,V),Te.length>0&&ea(Te,U,V),ae.buffers.depth.setTest(!0),ae.buffers.depth.setMask(!0),ae.buffers.color.setMask(!0),ae.setPolygonOffset(!1)}function Th(M,U,V,W){if((V.isScene===!0?V.overrideMaterial:null)!==null)return;y.state.transmissionRenderTarget[W.id]===void 0&&(y.state.transmissionRenderTarget[W.id]=new qn(1,1,{generateMipmaps:!0,type:oe.has("EXT_color_buffer_half_float")||oe.has("EXT_color_buffer_float")?ri:ai,minFilter:hs,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:ct.workingColorSpace}));const me=y.state.transmissionRenderTarget[W.id],Te=W.viewport||B;me.setSize(Te.z*T.transmissionResolutionScale,Te.w*T.transmissionResolutionScale);const Ue=T.getRenderTarget(),we=T.getActiveCubeFace(),$e=T.getActiveMipmapLevel();T.setRenderTarget(me),T.getClearColor(G),J=T.getClearAlpha(),J<1&&T.setClearColor(16777215,.5),T.clear(),Oe&&Q.render(V);const qe=T.toneMapping;T.toneMapping=ki;const We=W.viewport;if(W.viewport!==void 0&&(W.viewport=void 0),y.setupLightsView(W),ie===!0&&K.setGlobalState(T.clippingPlanes,W),ea(M,V,W),be.updateMultisampleRenderTarget(me),be.updateRenderTargetMipmap(me),oe.has("WEBGL_multisampled_render_to_texture")===!1){let it=!1;for(let pt=0,Pt=U.length;pt<Pt;pt++){const Lt=U[pt],{object:gt,geometry:Xe,material:Ct,group:ht}=Lt;if(Ct.side===jt&&gt.layers.test(W.layers)){const _n=Ct.side;Ct.side=xn,Ct.needsUpdate=!0,Ch(gt,V,W,Xe,Ct,ht),Ct.side=_n,Ct.needsUpdate=!0,it=!0}}it===!0&&(be.updateMultisampleRenderTarget(me),be.updateRenderTargetMipmap(me))}T.setRenderTarget(Ue,we,$e),T.setClearColor(G,J),We!==void 0&&(W.viewport=We),T.toneMapping=qe}function ea(M,U,V){const W=U.isScene===!0?U.overrideMaterial:null;for(let O=0,me=M.length;O<me;O++){const Te=M[O],{object:Ue,geometry:we,group:$e}=Te;let qe=Te.material;qe.allowOverride===!0&&W!==null&&(qe=W),Ue.layers.test(V.layers)&&Ch(Ue,U,V,we,qe,$e)}}function Ch(M,U,V,W,O,me){M.onBeforeRender(T,U,V,W,O,me),M.modelViewMatrix.multiplyMatrices(V.matrixWorldInverse,M.matrixWorld),M.normalMatrix.getNormalMatrix(M.modelViewMatrix),O.onBeforeRender(T,U,V,W,M,me),O.transparent===!0&&O.side===jt&&O.forceSinglePass===!1?(O.side=xn,O.needsUpdate=!0,T.renderBufferDirect(V,U,W,O,M,me),O.side=Hi,O.needsUpdate=!0,T.renderBufferDirect(V,U,W,O,M,me),O.side=jt):T.renderBufferDirect(V,U,W,O,M,me),M.onAfterRender(T,U,V,W,O,me)}function ta(M,U,V){U.isScene!==!0&&(U=at);const W=ge.get(M),O=y.state.lights,me=y.state.shadowsArray,Te=O.state.version,Ue=$.getParameters(M,O.state,me,U,V),we=$.getProgramCacheKey(Ue);let $e=W.programs;W.environment=M.isMeshStandardMaterial?U.environment:null,W.fog=U.fog,W.envMap=(M.isMeshStandardMaterial?_:C).get(M.envMap||W.environment),W.envMapRotation=W.environment!==null&&M.envMap===null?U.environmentRotation:M.envMapRotation,$e===void 0&&(M.addEventListener("dispose",Ye),$e=new Map,W.programs=$e);let qe=$e.get(we);if(qe!==void 0){if(W.currentProgram===qe&&W.lightsStateVersion===Te)return Rh(M,Ue),qe}else Ue.uniforms=$.getUniforms(M),M.onBeforeCompile(Ue,T),qe=$.acquireProgram(Ue,we),$e.set(we,qe),W.uniforms=Ue.uniforms;const We=W.uniforms;return(!M.isShaderMaterial&&!M.isRawShaderMaterial||M.clipping===!0)&&(We.clippingPlanes=K.uniform),Rh(M,Ue),W.needsLights=jp(M),W.lightsStateVersion=Te,W.needsLights&&(We.ambientLightColor.value=O.state.ambient,We.lightProbe.value=O.state.probe,We.directionalLights.value=O.state.directional,We.directionalLightShadows.value=O.state.directionalShadow,We.spotLights.value=O.state.spot,We.spotLightShadows.value=O.state.spotShadow,We.rectAreaLights.value=O.state.rectArea,We.ltc_1.value=O.state.rectAreaLTC1,We.ltc_2.value=O.state.rectAreaLTC2,We.pointLights.value=O.state.point,We.pointLightShadows.value=O.state.pointShadow,We.hemisphereLights.value=O.state.hemi,We.directionalShadowMap.value=O.state.directionalShadowMap,We.directionalShadowMatrix.value=O.state.directionalShadowMatrix,We.spotShadowMap.value=O.state.spotShadowMap,We.spotLightMatrix.value=O.state.spotLightMatrix,We.spotLightMap.value=O.state.spotLightMap,We.pointShadowMap.value=O.state.pointShadowMap,We.pointShadowMatrix.value=O.state.pointShadowMatrix),W.currentProgram=qe,W.uniformsList=null,qe}function Ah(M){if(M.uniformsList===null){const U=M.currentProgram.getUniforms();M.uniformsList=Oa.seqWithValue(U.seq,M.uniforms)}return M.uniformsList}function Rh(M,U){const V=ge.get(M);V.outputColorSpace=U.outputColorSpace,V.batching=U.batching,V.batchingColor=U.batchingColor,V.instancing=U.instancing,V.instancingColor=U.instancingColor,V.instancingMorph=U.instancingMorph,V.skinning=U.skinning,V.morphTargets=U.morphTargets,V.morphNormals=U.morphNormals,V.morphColors=U.morphColors,V.morphTargetsCount=U.morphTargetsCount,V.numClippingPlanes=U.numClippingPlanes,V.numIntersection=U.numClipIntersection,V.vertexAlphas=U.vertexAlphas,V.vertexTangents=U.vertexTangents,V.toneMapping=U.toneMapping}function qp(M,U,V,W,O){U.isScene!==!0&&(U=at),be.resetTextureUnits();const me=U.fog,Te=W.isMeshStandardMaterial?U.environment:null,Ue=S===null?T.outputColorSpace:S.isXRRenderTarget===!0?S.texture.colorSpace:Zs,we=(W.isMeshStandardMaterial?_:C).get(W.envMap||Te),$e=W.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,qe=!!V.attributes.tangent&&(!!W.normalMap||W.anisotropy>0),We=!!V.morphAttributes.position,it=!!V.morphAttributes.normal,pt=!!V.morphAttributes.color;let Pt=ki;W.toneMapped&&(S===null||S.isXRRenderTarget===!0)&&(Pt=T.toneMapping);const Lt=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,gt=Lt!==void 0?Lt.length:0,Xe=ge.get(W),Ct=y.state.lights;if(ie===!0&&(Ee===!0||M!==N)){const en=M===N&&W.id===P;K.setState(W,M,en)}let ht=!1;W.version===Xe.__version?(Xe.needsLights&&Xe.lightsStateVersion!==Ct.state.version||Xe.outputColorSpace!==Ue||O.isBatchedMesh&&Xe.batching===!1||!O.isBatchedMesh&&Xe.batching===!0||O.isBatchedMesh&&Xe.batchingColor===!0&&O.colorTexture===null||O.isBatchedMesh&&Xe.batchingColor===!1&&O.colorTexture!==null||O.isInstancedMesh&&Xe.instancing===!1||!O.isInstancedMesh&&Xe.instancing===!0||O.isSkinnedMesh&&Xe.skinning===!1||!O.isSkinnedMesh&&Xe.skinning===!0||O.isInstancedMesh&&Xe.instancingColor===!0&&O.instanceColor===null||O.isInstancedMesh&&Xe.instancingColor===!1&&O.instanceColor!==null||O.isInstancedMesh&&Xe.instancingMorph===!0&&O.morphTexture===null||O.isInstancedMesh&&Xe.instancingMorph===!1&&O.morphTexture!==null||Xe.envMap!==we||W.fog===!0&&Xe.fog!==me||Xe.numClippingPlanes!==void 0&&(Xe.numClippingPlanes!==K.numPlanes||Xe.numIntersection!==K.numIntersection)||Xe.vertexAlphas!==$e||Xe.vertexTangents!==qe||Xe.morphTargets!==We||Xe.morphNormals!==it||Xe.morphColors!==pt||Xe.toneMapping!==Pt||Xe.morphTargetsCount!==gt)&&(ht=!0):(ht=!0,Xe.__version=W.version);let _n=Xe.currentProgram;ht===!0&&(_n=ta(W,U,O));let As=!1,vn=!1,hr=!1;const At=_n.getUniforms(),ln=Xe.uniforms;if(ae.useProgram(_n.program)&&(As=!0,vn=!0,hr=!0),W.id!==P&&(P=W.id,vn=!0),As||N!==M){ae.buffers.depth.getReversed()&&M.reversedDepth!==!0&&(M._reversedDepth=!0,M.updateProjectionMatrix()),At.setValue(A,"projectionMatrix",M.projectionMatrix),At.setValue(A,"viewMatrix",M.matrixWorldInverse);const hn=At.map.cameraPosition;hn!==void 0&&hn.setValue(A,Ne.setFromMatrixPosition(M.matrixWorld)),he.logarithmicDepthBuffer&&At.setValue(A,"logDepthBufFC",2/(Math.log(M.far+1)/Math.LN2)),(W.isMeshPhongMaterial||W.isMeshToonMaterial||W.isMeshLambertMaterial||W.isMeshBasicMaterial||W.isMeshStandardMaterial||W.isShaderMaterial)&&At.setValue(A,"isOrthographic",M.isOrthographicCamera===!0),N!==M&&(N=M,vn=!0,hr=!0)}if(O.isSkinnedMesh){At.setOptional(A,O,"bindMatrix"),At.setOptional(A,O,"bindMatrixInverse");const en=O.skeleton;en&&(en.boneTexture===null&&en.computeBoneTexture(),At.setValue(A,"boneTexture",en.boneTexture,be))}O.isBatchedMesh&&(At.setOptional(A,O,"batchingTexture"),At.setValue(A,"batchingTexture",O._matricesTexture,be),At.setOptional(A,O,"batchingIdTexture"),At.setValue(A,"batchingIdTexture",O._indirectTexture,be),At.setOptional(A,O,"batchingColorTexture"),O._colorsTexture!==null&&At.setValue(A,"batchingColorTexture",O._colorsTexture,be));const Cn=V.morphAttributes;if((Cn.position!==void 0||Cn.normal!==void 0||Cn.color!==void 0)&&Ae.update(O,V,_n),(vn||Xe.receiveShadow!==O.receiveShadow)&&(Xe.receiveShadow=O.receiveShadow,At.setValue(A,"receiveShadow",O.receiveShadow)),W.isMeshGouraudMaterial&&W.envMap!==null&&(ln.envMap.value=we,ln.flipEnvMap.value=we.isCubeTexture&&we.isRenderTargetTexture===!1?-1:1),W.isMeshStandardMaterial&&W.envMap===null&&U.environment!==null&&(ln.envMapIntensity.value=U.environmentIntensity),ln.dfgLUT!==void 0&&(ln.dfgLUT.value=Gy()),vn&&(At.setValue(A,"toneMappingExposure",T.toneMappingExposure),Xe.needsLights&&Yp(ln,hr),me&&W.fog===!0&&Ie.refreshFogUniforms(ln,me),Ie.refreshMaterialUniforms(ln,W,de,re,y.state.transmissionRenderTarget[M.id]),Oa.upload(A,Ah(Xe),ln,be)),W.isShaderMaterial&&W.uniformsNeedUpdate===!0&&(Oa.upload(A,Ah(Xe),ln,be),W.uniformsNeedUpdate=!1),W.isSpriteMaterial&&At.setValue(A,"center",O.center),At.setValue(A,"modelViewMatrix",O.modelViewMatrix),At.setValue(A,"normalMatrix",O.normalMatrix),At.setValue(A,"modelMatrix",O.matrixWorld),W.isShaderMaterial||W.isRawShaderMaterial){const en=W.uniformsGroups;for(let hn=0,Ro=en.length;hn<Ro;hn++){const ji=en[hn];xe.update(ji,_n),xe.bind(ji,_n)}}return _n}function Yp(M,U){M.ambientLightColor.needsUpdate=U,M.lightProbe.needsUpdate=U,M.directionalLights.needsUpdate=U,M.directionalLightShadows.needsUpdate=U,M.pointLights.needsUpdate=U,M.pointLightShadows.needsUpdate=U,M.spotLights.needsUpdate=U,M.spotLightShadows.needsUpdate=U,M.rectAreaLights.needsUpdate=U,M.hemisphereLights.needsUpdate=U}function jp(M){return M.isMeshLambertMaterial||M.isMeshToonMaterial||M.isMeshPhongMaterial||M.isMeshStandardMaterial||M.isShadowMaterial||M.isShaderMaterial&&M.lights===!0}this.getActiveCubeFace=function(){return D},this.getActiveMipmapLevel=function(){return E},this.getRenderTarget=function(){return S},this.setRenderTargetTextures=function(M,U,V){const W=ge.get(M);W.__autoAllocateDepthBuffer=M.resolveDepthBuffer===!1,W.__autoAllocateDepthBuffer===!1&&(W.__useRenderToTexture=!1),ge.get(M.texture).__webglTexture=U,ge.get(M.depthTexture).__webglTexture=W.__autoAllocateDepthBuffer?void 0:V,W.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(M,U){const V=ge.get(M);V.__webglFramebuffer=U,V.__useDefaultFramebuffer=U===void 0};const Kp=A.createFramebuffer();this.setRenderTarget=function(M,U=0,V=0){S=M,D=U,E=V;let W=!0,O=null,me=!1,Te=!1;if(M){const we=ge.get(M);if(we.__useDefaultFramebuffer!==void 0)ae.bindFramebuffer(A.FRAMEBUFFER,null),W=!1;else if(we.__webglFramebuffer===void 0)be.setupRenderTarget(M);else if(we.__hasExternalTextures)be.rebindTextures(M,ge.get(M.texture).__webglTexture,ge.get(M.depthTexture).__webglTexture);else if(M.depthBuffer){const We=M.depthTexture;if(we.__boundDepthTexture!==We){if(We!==null&&ge.has(We)&&(M.width!==We.image.width||M.height!==We.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");be.setupDepthRenderbuffer(M)}}const $e=M.texture;($e.isData3DTexture||$e.isDataArrayTexture||$e.isCompressedArrayTexture)&&(Te=!0);const qe=ge.get(M).__webglFramebuffer;M.isWebGLCubeRenderTarget?(Array.isArray(qe[U])?O=qe[U][V]:O=qe[U],me=!0):M.samples>0&&be.useMultisampledRTT(M)===!1?O=ge.get(M).__webglMultisampledFramebuffer:Array.isArray(qe)?O=qe[V]:O=qe,B.copy(M.viewport),q.copy(M.scissor),z=M.scissorTest}else B.copy(Ze).multiplyScalar(de).floor(),q.copy(rt).multiplyScalar(de).floor(),z=lt;if(V!==0&&(O=Kp),ae.bindFramebuffer(A.FRAMEBUFFER,O)&&W&&ae.drawBuffers(M,O),ae.viewport(B),ae.scissor(q),ae.setScissorTest(z),me){const we=ge.get(M.texture);A.framebufferTexture2D(A.FRAMEBUFFER,A.COLOR_ATTACHMENT0,A.TEXTURE_CUBE_MAP_POSITIVE_X+U,we.__webglTexture,V)}else if(Te){const we=U;for(let $e=0;$e<M.textures.length;$e++){const qe=ge.get(M.textures[$e]);A.framebufferTextureLayer(A.FRAMEBUFFER,A.COLOR_ATTACHMENT0+$e,qe.__webglTexture,V,we)}}else if(M!==null&&V!==0){const we=ge.get(M.texture);A.framebufferTexture2D(A.FRAMEBUFFER,A.COLOR_ATTACHMENT0,A.TEXTURE_2D,we.__webglTexture,V)}P=-1},this.readRenderTargetPixels=function(M,U,V,W,O,me,Te,Ue=0){if(!(M&&M.isWebGLRenderTarget)){Rt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let we=ge.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&Te!==void 0&&(we=we[Te]),we){ae.bindFramebuffer(A.FRAMEBUFFER,we);try{const $e=M.textures[Ue],qe=$e.format,We=$e.type;if(!he.textureFormatReadable(qe)){Rt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!he.textureTypeReadable(We)){Rt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=M.width-W&&V>=0&&V<=M.height-O&&(M.textures.length>1&&A.readBuffer(A.COLOR_ATTACHMENT0+Ue),A.readPixels(U,V,W,O,Ge.convert(qe),Ge.convert(We),me))}finally{const $e=S!==null?ge.get(S).__webglFramebuffer:null;ae.bindFramebuffer(A.FRAMEBUFFER,$e)}}},this.readRenderTargetPixelsAsync=async function(M,U,V,W,O,me,Te,Ue=0){if(!(M&&M.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let we=ge.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&Te!==void 0&&(we=we[Te]),we)if(U>=0&&U<=M.width-W&&V>=0&&V<=M.height-O){ae.bindFramebuffer(A.FRAMEBUFFER,we);const $e=M.textures[Ue],qe=$e.format,We=$e.type;if(!he.textureFormatReadable(qe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!he.textureTypeReadable(We))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const it=A.createBuffer();A.bindBuffer(A.PIXEL_PACK_BUFFER,it),A.bufferData(A.PIXEL_PACK_BUFFER,me.byteLength,A.STREAM_READ),M.textures.length>1&&A.readBuffer(A.COLOR_ATTACHMENT0+Ue),A.readPixels(U,V,W,O,Ge.convert(qe),Ge.convert(We),0);const pt=S!==null?ge.get(S).__webglFramebuffer:null;ae.bindFramebuffer(A.FRAMEBUFFER,pt);const Pt=A.fenceSync(A.SYNC_GPU_COMMANDS_COMPLETE,0);return A.flush(),await U0(A,Pt,4),A.bindBuffer(A.PIXEL_PACK_BUFFER,it),A.getBufferSubData(A.PIXEL_PACK_BUFFER,0,me),A.deleteBuffer(it),A.deleteSync(Pt),me}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(M,U=null,V=0){const W=Math.pow(2,-V),O=Math.floor(M.image.width*W),me=Math.floor(M.image.height*W),Te=U!==null?U.x:0,Ue=U!==null?U.y:0;be.setTexture2D(M,0),A.copyTexSubImage2D(A.TEXTURE_2D,V,0,0,Te,Ue,O,me),ae.unbindTexture()};const Jp=A.createFramebuffer(),Zp=A.createFramebuffer();this.copyTextureToTexture=function(M,U,V=null,W=null,O=0,me=null){me===null&&(O!==0?(Nr("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),me=O,O=0):me=0);let Te,Ue,we,$e,qe,We,it,pt,Pt;const Lt=M.isCompressedTexture?M.mipmaps[me]:M.image;if(V!==null)Te=V.max.x-V.min.x,Ue=V.max.y-V.min.y,we=V.isBox3?V.max.z-V.min.z:1,$e=V.min.x,qe=V.min.y,We=V.isBox3?V.min.z:0;else{const Cn=Math.pow(2,-O);Te=Math.floor(Lt.width*Cn),Ue=Math.floor(Lt.height*Cn),M.isDataArrayTexture?we=Lt.depth:M.isData3DTexture?we=Math.floor(Lt.depth*Cn):we=1,$e=0,qe=0,We=0}W!==null?(it=W.x,pt=W.y,Pt=W.z):(it=0,pt=0,Pt=0);const gt=Ge.convert(U.format),Xe=Ge.convert(U.type);let Ct;U.isData3DTexture?(be.setTexture3D(U,0),Ct=A.TEXTURE_3D):U.isDataArrayTexture||U.isCompressedArrayTexture?(be.setTexture2DArray(U,0),Ct=A.TEXTURE_2D_ARRAY):(be.setTexture2D(U,0),Ct=A.TEXTURE_2D),A.pixelStorei(A.UNPACK_FLIP_Y_WEBGL,U.flipY),A.pixelStorei(A.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),A.pixelStorei(A.UNPACK_ALIGNMENT,U.unpackAlignment);const ht=A.getParameter(A.UNPACK_ROW_LENGTH),_n=A.getParameter(A.UNPACK_IMAGE_HEIGHT),As=A.getParameter(A.UNPACK_SKIP_PIXELS),vn=A.getParameter(A.UNPACK_SKIP_ROWS),hr=A.getParameter(A.UNPACK_SKIP_IMAGES);A.pixelStorei(A.UNPACK_ROW_LENGTH,Lt.width),A.pixelStorei(A.UNPACK_IMAGE_HEIGHT,Lt.height),A.pixelStorei(A.UNPACK_SKIP_PIXELS,$e),A.pixelStorei(A.UNPACK_SKIP_ROWS,qe),A.pixelStorei(A.UNPACK_SKIP_IMAGES,We);const At=M.isDataArrayTexture||M.isData3DTexture,ln=U.isDataArrayTexture||U.isData3DTexture;if(M.isDepthTexture){const Cn=ge.get(M),en=ge.get(U),hn=ge.get(Cn.__renderTarget),Ro=ge.get(en.__renderTarget);ae.bindFramebuffer(A.READ_FRAMEBUFFER,hn.__webglFramebuffer),ae.bindFramebuffer(A.DRAW_FRAMEBUFFER,Ro.__webglFramebuffer);for(let ji=0;ji<we;ji++)At&&(A.framebufferTextureLayer(A.READ_FRAMEBUFFER,A.COLOR_ATTACHMENT0,ge.get(M).__webglTexture,O,We+ji),A.framebufferTextureLayer(A.DRAW_FRAMEBUFFER,A.COLOR_ATTACHMENT0,ge.get(U).__webglTexture,me,Pt+ji)),A.blitFramebuffer($e,qe,Te,Ue,it,pt,Te,Ue,A.DEPTH_BUFFER_BIT,A.NEAREST);ae.bindFramebuffer(A.READ_FRAMEBUFFER,null),ae.bindFramebuffer(A.DRAW_FRAMEBUFFER,null)}else if(O!==0||M.isRenderTargetTexture||ge.has(M)){const Cn=ge.get(M),en=ge.get(U);ae.bindFramebuffer(A.READ_FRAMEBUFFER,Jp),ae.bindFramebuffer(A.DRAW_FRAMEBUFFER,Zp);for(let hn=0;hn<we;hn++)At?A.framebufferTextureLayer(A.READ_FRAMEBUFFER,A.COLOR_ATTACHMENT0,Cn.__webglTexture,O,We+hn):A.framebufferTexture2D(A.READ_FRAMEBUFFER,A.COLOR_ATTACHMENT0,A.TEXTURE_2D,Cn.__webglTexture,O),ln?A.framebufferTextureLayer(A.DRAW_FRAMEBUFFER,A.COLOR_ATTACHMENT0,en.__webglTexture,me,Pt+hn):A.framebufferTexture2D(A.DRAW_FRAMEBUFFER,A.COLOR_ATTACHMENT0,A.TEXTURE_2D,en.__webglTexture,me),O!==0?A.blitFramebuffer($e,qe,Te,Ue,it,pt,Te,Ue,A.COLOR_BUFFER_BIT,A.NEAREST):ln?A.copyTexSubImage3D(Ct,me,it,pt,Pt+hn,$e,qe,Te,Ue):A.copyTexSubImage2D(Ct,me,it,pt,$e,qe,Te,Ue);ae.bindFramebuffer(A.READ_FRAMEBUFFER,null),ae.bindFramebuffer(A.DRAW_FRAMEBUFFER,null)}else ln?M.isDataTexture||M.isData3DTexture?A.texSubImage3D(Ct,me,it,pt,Pt,Te,Ue,we,gt,Xe,Lt.data):U.isCompressedArrayTexture?A.compressedTexSubImage3D(Ct,me,it,pt,Pt,Te,Ue,we,gt,Lt.data):A.texSubImage3D(Ct,me,it,pt,Pt,Te,Ue,we,gt,Xe,Lt):M.isDataTexture?A.texSubImage2D(A.TEXTURE_2D,me,it,pt,Te,Ue,gt,Xe,Lt.data):M.isCompressedTexture?A.compressedTexSubImage2D(A.TEXTURE_2D,me,it,pt,Lt.width,Lt.height,gt,Lt.data):A.texSubImage2D(A.TEXTURE_2D,me,it,pt,Te,Ue,gt,Xe,Lt);A.pixelStorei(A.UNPACK_ROW_LENGTH,ht),A.pixelStorei(A.UNPACK_IMAGE_HEIGHT,_n),A.pixelStorei(A.UNPACK_SKIP_PIXELS,As),A.pixelStorei(A.UNPACK_SKIP_ROWS,vn),A.pixelStorei(A.UNPACK_SKIP_IMAGES,hr),me===0&&U.generateMipmaps&&A.generateMipmap(Ct),ae.unbindTexture()},this.initRenderTarget=function(M){ge.get(M).__webglFramebuffer===void 0&&be.setupRenderTarget(M)},this.initTexture=function(M){M.isCubeTexture?be.setTextureCube(M,0):M.isData3DTexture?be.setTexture3D(M,0):M.isDataArrayTexture||M.isCompressedArrayTexture?be.setTexture2DArray(M,0):be.setTexture2D(M,0),ae.unbindTexture()},this.resetState=function(){D=0,E=0,S=null,ae.reset(),L.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ii}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=ct._getDrawingBufferColorSpace(e),t.unpackColorSpace=ct._getUnpackColorSpace()}}const Fa={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`};class lr{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const Hy=new rh(-1,1,1,-1,0,1);class Wy extends Ut{constructor(){super(),this.setAttribute("position",new Et([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new Et([0,2,0,0,2,0],2))}}const Xy=new Wy;class ah{constructor(e){this._mesh=new ye(Xy,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,Hy)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}}class $y extends lr{constructor(e,t="tDiffuse"){super(),this.textureID=t,this.uniforms=null,this.material=null,e instanceof Kt?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=Or.clone(e.uniforms),this.material=new Kt({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this._fsQuad=new ah(this.material)}render(e,t,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this._fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}}class Nu extends lr{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,n){const s=e.getContext(),r=e.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let a,o;this.inverse?(a=0,o=1):(a=1,o=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(s.REPLACE,s.REPLACE,s.REPLACE),r.buffers.stencil.setFunc(s.ALWAYS,a,4294967295),r.buffers.stencil.setClear(o),r.buffers.stencil.setLocked(!0),e.setRenderTarget(n),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(s.EQUAL,1,4294967295),r.buffers.stencil.setOp(s.KEEP,s.KEEP,s.KEEP),r.buffers.stencil.setLocked(!0)}}class qy extends lr{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}}class Yy{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){const n=e.getSize(new le);this._width=n.width,this._height=n.height,t=new qn(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:ri}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new $y(Fa),this.copyPass.material.blending=si,this.clock=new ex}swapBuffers(){const e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){const t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());const t=this.renderer.getRenderTarget();let n=!1;for(let s=0,r=this.passes.length;s<r;s++){const a=this.passes[s];if(a.enabled!==!1){if(a.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(s),a.render(this.renderer,this.writeBuffer,this.readBuffer,e,n),a.needsSwap){if(n){const o=this.renderer.getContext(),c=this.renderer.state.buffers.stencil;c.setFunc(o.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),c.setFunc(o.EQUAL,1,4294967295)}this.swapBuffers()}Nu!==void 0&&(a instanceof Nu?n=!0:a instanceof qy&&(n=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){const t=this.renderer.getSize(new le);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;const n=this._width*this._pixelRatio,s=this._height*this._pixelRatio;this.renderTarget1.setSize(n,s),this.renderTarget2.setSize(n,s);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(n,s)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class jy extends lr{constructor(e,t,n=null,s=null,r=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=n,this.clearColor=s,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new He}render(e,t,n){const s=e.autoClear;e.autoClear=!1;let r,a;this.overrideMaterial!==null&&(a=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(r=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=a),e.autoClear=s}}const Ky={uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new He(0)},defaultOpacity:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform vec3 defaultColor;
		uniform float defaultOpacity;
		uniform float luminosityThreshold;
		uniform float smoothWidth;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );

			float v = luminance( texel.xyz );

			vec4 outputColor = vec4( defaultColor.rgb, defaultOpacity );

			float alpha = smoothstep( luminosityThreshold, luminosityThreshold + smoothWidth, v );

			gl_FragColor = mix( outputColor, texel, alpha );

		}`};class nr extends lr{constructor(e,t=1,n,s){super(),this.strength=t,this.radius=n,this.threshold=s,this.resolution=e!==void 0?new le(e.x,e.y):new le(256,256),this.clearColor=new He(0,0,0),this.needsSwap=!1,this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);this.renderTargetBright=new qn(r,a,{type:ri}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let l=0;l<this.nMips;l++){const u=new qn(r,a,{type:ri});u.texture.name="UnrealBloomPass.h"+l,u.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(u);const d=new qn(r,a,{type:ri});d.texture.name="UnrealBloomPass.v"+l,d.texture.generateMipmaps=!1,this.renderTargetsVertical.push(d),r=Math.round(r/2),a=Math.round(a/2)}const o=Ky;this.highPassUniforms=Or.clone(o.uniforms),this.highPassUniforms.luminosityThreshold.value=s,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new Kt({uniforms:this.highPassUniforms,vertexShader:o.vertexShader,fragmentShader:o.fragmentShader}),this.separableBlurMaterials=[];const c=[6,10,14,18,22];r=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);for(let l=0;l<this.nMips;l++)this.separableBlurMaterials.push(this._getSeparableBlurMaterial(c[l])),this.separableBlurMaterials[l].uniforms.invSize.value=new le(1/r,1/a),r=Math.round(r/2),a=Math.round(a/2);this.compositeMaterial=this._getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1;const h=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=h,this.bloomTintColors=[new I(1,1,1),new I(1,1,1),new I(1,1,1),new I(1,1,1),new I(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,this.copyUniforms=Or.clone(Fa.uniforms),this.blendMaterial=new Kt({uniforms:this.copyUniforms,vertexShader:Fa.vertexShader,fragmentShader:Fa.fragmentShader,blending:Ya,depthTest:!1,depthWrite:!1,transparent:!0}),this._oldClearColor=new He,this._oldClearAlpha=1,this._basic=new Dt,this._fsQuad=new ah(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this._basic.dispose(),this._fsQuad.dispose()}setSize(e,t){let n=Math.round(e/2),s=Math.round(t/2);this.renderTargetBright.setSize(n,s);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(n,s),this.renderTargetsVertical[r].setSize(n,s),this.separableBlurMaterials[r].uniforms.invSize.value=new le(1/n,1/s),n=Math.round(n/2),s=Math.round(s/2)}render(e,t,n,s,r){e.getClearColor(this._oldClearColor),this._oldClearAlpha=e.getClearAlpha();const a=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),r&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this._fsQuad.material=this._basic,this._basic.map=n.texture,e.setRenderTarget(null),e.clear(),this._fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this._fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this._fsQuad.render(e);let o=this.renderTargetBright;for(let c=0;c<this.nMips;c++)this._fsQuad.material=this.separableBlurMaterials[c],this.separableBlurMaterials[c].uniforms.colorTexture.value=o.texture,this.separableBlurMaterials[c].uniforms.direction.value=nr.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[c]),e.clear(),this._fsQuad.render(e),this.separableBlurMaterials[c].uniforms.colorTexture.value=this.renderTargetsHorizontal[c].texture,this.separableBlurMaterials[c].uniforms.direction.value=nr.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[c]),e.clear(),this._fsQuad.render(e),o=this.renderTargetsVertical[c];this._fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this._fsQuad.render(e),this._fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(n),this._fsQuad.render(e)),e.setClearColor(this._oldClearColor,this._oldClearAlpha),e.autoClear=a}_getSeparableBlurMaterial(e){const t=[],n=e/3;for(let s=0;s<e;s++)t.push(.39894*Math.exp(-.5*s*s/(n*n))/n);return new Kt({defines:{KERNEL_RADIUS:e},uniforms:{colorTexture:{value:null},invSize:{value:new le(.5,.5)},direction:{value:new le(.5,.5)},gaussianCoefficients:{value:t}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`#include <common>
				varying vec2 vUv;
				uniform sampler2D colorTexture;
				uniform vec2 invSize;
				uniform vec2 direction;
				uniform float gaussianCoefficients[KERNEL_RADIUS];

				void main() {
					float weightSum = gaussianCoefficients[0];
					vec3 diffuseSum = texture2D( colorTexture, vUv ).rgb * weightSum;
					for( int i = 1; i < KERNEL_RADIUS; i ++ ) {
						float x = float(i);
						float w = gaussianCoefficients[i];
						vec2 uvOffset = direction * invSize * x;
						vec3 sample1 = texture2D( colorTexture, vUv + uvOffset ).rgb;
						vec3 sample2 = texture2D( colorTexture, vUv - uvOffset ).rgb;
						diffuseSum += ( sample1 + sample2 ) * w;
					}
					gl_FragColor = vec4( diffuseSum, 1.0 );
				}`})}_getCompositeMaterial(e){return new Kt({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`varying vec2 vUv;
				uniform sampler2D blurTexture1;
				uniform sampler2D blurTexture2;
				uniform sampler2D blurTexture3;
				uniform sampler2D blurTexture4;
				uniform sampler2D blurTexture5;
				uniform float bloomStrength;
				uniform float bloomRadius;
				uniform float bloomFactors[NUM_MIPS];
				uniform vec3 bloomTintColors[NUM_MIPS];

				float lerpBloomFactor(const in float factor) {
					float mirrorFactor = 1.2 - factor;
					return mix(factor, mirrorFactor, bloomRadius);
				}

				void main() {
					gl_FragColor = bloomStrength * ( lerpBloomFactor(bloomFactors[0]) * vec4(bloomTintColors[0], 1.0) * texture2D(blurTexture1, vUv) +
						lerpBloomFactor(bloomFactors[1]) * vec4(bloomTintColors[1], 1.0) * texture2D(blurTexture2, vUv) +
						lerpBloomFactor(bloomFactors[2]) * vec4(bloomTintColors[2], 1.0) * texture2D(blurTexture3, vUv) +
						lerpBloomFactor(bloomFactors[3]) * vec4(bloomTintColors[3], 1.0) * texture2D(blurTexture4, vUv) +
						lerpBloomFactor(bloomFactors[4]) * vec4(bloomTintColors[4], 1.0) * texture2D(blurTexture5, vUv) );
				}`})}}nr.BlurDirectionX=new le(1,0);nr.BlurDirectionY=new le(0,1);const wa={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
		precision highp float;

		uniform mat4 modelViewMatrix;
		uniform mat4 projectionMatrix;

		attribute vec3 position;
		attribute vec2 uv;

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		precision highp float;

		uniform sampler2D tDiffuse;

		#include <tonemapping_pars_fragment>
		#include <colorspace_pars_fragment>

		varying vec2 vUv;

		void main() {

			gl_FragColor = texture2D( tDiffuse, vUv );

			// tone mapping

			#ifdef LINEAR_TONE_MAPPING

				gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );

			#elif defined( REINHARD_TONE_MAPPING )

				gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );

			#elif defined( CINEON_TONE_MAPPING )

				gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );

			#elif defined( ACES_FILMIC_TONE_MAPPING )

				gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );

			#elif defined( AGX_TONE_MAPPING )

				gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );

			#elif defined( NEUTRAL_TONE_MAPPING )

				gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );

			#elif defined( CUSTOM_TONE_MAPPING )

				gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );

			#endif

			// color space

			#ifdef SRGB_TRANSFER

				gl_FragColor = sRGBTransferOETF( gl_FragColor );

			#endif

		}`};class Jy extends lr{constructor(){super(),this.uniforms=Or.clone(wa.uniforms),this.material=new Hm({name:wa.name,uniforms:this.uniforms,vertexShader:wa.vertexShader,fragmentShader:wa.fragmentShader}),this._fsQuad=new ah(this.material),this._outputColorSpace=null,this._toneMapping=null}render(e,t,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=e.toneMappingExposure,(this._outputColorSpace!==e.outputColorSpace||this._toneMapping!==e.toneMapping)&&(this._outputColorSpace=e.outputColorSpace,this._toneMapping=e.toneMapping,this.material.defines={},ct.getTransfer(this._outputColorSpace)===dt&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===Cd?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===Ad?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===Rd?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===Hl?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===Pd?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===Ld?this.material.defines.NEUTRAL_TONE_MAPPING="":this._toneMapping===wd&&(this.material.defines.CUSTOM_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}}const zi=2.54,xi=1.27,ke=zi/2,Le=xi/2,Ve=.028575,Hn=Ve*2,pf=.056,mf=.05,Pa=.052,Ou=.049,xf=.018,Wn=-ke+zi*.25,oh=ke-zi*.25,Zy=.037,br=.045,Kn=.115,Rn=.048,Bn=.8,Li=.012,Fu=.024,Pn=[{id:0,name:"左底袋",x:-ke-Li,z:-Le-Li,isCorner:!0,dropRadius:Pa},{id:1,name:"右底袋",x:ke+Li,z:-Le-Li,isCorner:!0,dropRadius:Pa},{id:2,name:"左顶袋",x:-ke-Li,z:Le+Li,isCorner:!0,dropRadius:Pa},{id:3,name:"右顶袋",x:ke+Li,z:Le+Li,isCorner:!0,dropRadius:Pa},{id:4,name:"上中袋",x:0,z:-Le-Fu,isCorner:!1,dropRadius:Ou},{id:5,name:"下中袋",x:0,z:Le+Fu,isCorner:!1,dropRadius:Ou}];function Qy(){const i=pf,e=mf,t=xf,n=[{x1:-ke+i,z1:-Le,x2:-e,z2:-Le,nx:0,nz:1},{x1:e,z1:-Le,x2:ke-i,z2:-Le,nx:0,nz:1},{x1:-ke+i,z1:Le,x2:-e,z2:Le,nx:0,nz:-1},{x1:e,z1:Le,x2:ke-i,z2:Le,nx:0,nz:-1},{x1:-ke,z1:-Le+i,x2:-ke,z2:Le-i,nx:1,nz:0},{x1:ke,z1:-Le+i,x2:ke,z2:Le-i,nx:-1,nz:0}],s=[{x:-ke+i,z:-Le-t,r:t},{x:-e,z:-Le-t,r:t},{x:e,z:-Le-t,r:t},{x:ke-i,z:-Le-t,r:t},{x:-ke+i,z:Le+t,r:t},{x:-e,z:Le+t,r:t},{x:e,z:Le+t,r:t},{x:ke-i,z:Le+t,r:t},{x:-ke-t,z:-Le+i,r:t},{x:-ke-t,z:Le-i,r:t},{x:ke+t,z:-Le+i,r:t},{x:ke+t,z:Le-i,r:t}];return{segments:n,knuckles:s}}const Zn={GRAVITY:9.81,MU_SLIDE:.2,MU_ROLL:.0135,MU_SPIN:.04,KNUCKLE_RESTITUTION:.76,STOP_SPEED:.007,STOP_OMEGA:.1},bl={0:"#f7f4ea",1:"#f4c41c",2:"#1c52b8",3:"#d92626",4:"#5c278f",5:"#f26a1b",6:"#157a42",7:"#7c1a24",8:"#141518",9:"#f4c41c",10:"#1c52b8",11:"#d92626",12:"#5c278f",13:"#f26a1b",14:"#157a42",15:"#7c1a24"};function Vs(i){return i===0?"cue":i===8?"eight":i>=1&&i<=7?"solid":"stripe"}const Bu={emerald:{name:"翡翠绿",center:"#16835d",mid:"#106c4c",edge:"#0b543b",dark:"#073f2c",cushion:942918,sheen:3126146,bounce:[.08,.36,.24]},blue:{name:"国际蓝",center:"#18689c",mid:"#125482",edge:"#0c3f64",dark:"#082c48",cushion:1068149,sheen:3709140,bounce:[.08,.24,.42]},burgundy:{name:"皇家红",center:"#7f1d2d",mid:"#651623",edge:"#4c101a",dark:"#360a12",cushion:6034464,sheen:11876428,bounce:[.35,.08,.12]}},uc=new Map;let ns=null;function eS(i){const e=new Sl(i);e.compileEquirectangularShader();const t=new Kd;t.background=new He(724241);const n=new Dt({color:new He(4.6,4.3,3.6)});[-1.35,0,1.35].forEach(c=>{const h=new ye(new qt(1.15,.85),n);h.position.set(c,4,0),h.rotation.x=Math.PI/2,t.add(h)});const s=new Dt({color:new He(2.4,1.6,.9)});[[-6,2.2,-4],[6,2.2,-4],[-6,2.2,4],[6,2.2,4]].forEach(([c,h,l])=>{const u=new ye(new tr(.45,12,12),s);u.position.set(c,h,l),t.add(u)});const r=new ye(new qt(5,2.6),new Dt({color:new He(.08,.36,.24)}));r.position.set(0,-1.8,0),r.rotation.x=-Math.PI/2,t.add(r);const a=new ye(new qt(8,3),new Dt({color:new He(.28,.36,.48)}));a.position.set(0,1.5,-7),t.add(a);const o=e.fromScene(t,.035);return e.dispose(),o.texture}function tS(i){const n=document.createElement("canvas");n.width=1024,n.height=512;const s=n.getContext("2d");if(i===0){s.fillStyle="#f8f3e6",s.fillRect(0,0,1024,512);const a=s.createLinearGradient(0,0,0,512);a.addColorStop(0,"rgba(255,253,246,0.45)"),a.addColorStop(.5,"rgba(242,235,218,0)"),a.addColorStop(1,"rgba(218,207,185,0.28)"),s.fillStyle=a,s.fillRect(0,0,1024,512),s.fillStyle="#c81927";const o=23;for(let c=0;c<4;c++){const h=(c+.5)*256,l=512/2;s.beginPath(),s.arc(h,l,o,0,Math.PI*2),s.fill()}s.fillRect(0,0,1024,30),s.fillRect(0,482,1024,30)}else{const a=bl[i];if(i>=9){s.fillStyle="#f8f3e6",s.fillRect(0,0,1024,512);const u=512*.21,d=512*.58;s.fillStyle=a,s.fillRect(0,u,1024,d),s.fillStyle="rgba(0,0,0,0.16)",s.fillRect(0,u,1024,3),s.fillRect(0,u+d-3,1024,3)}else s.fillStyle=a,s.fillRect(0,0,1024,512);const c=s.createLinearGradient(0,0,0,512);c.addColorStop(0,"rgba(255,255,255,0.1)"),c.addColorStop(.5,"rgba(255,255,255,0)"),c.addColorStop(1,"rgba(0,0,0,0.16)"),s.fillStyle=c,s.fillRect(0,0,1024,512);const h=[1024*.25,1024*.75],l=78;h.forEach(u=>{s.save(),s.beginPath(),s.arc(u,256,l,0,Math.PI*2),s.fillStyle="#fbf8ef",s.fill(),s.lineWidth=4,s.strokeStyle=i===8?"rgba(255,255,255,0.22)":"rgba(0,0,0,0.14)",s.stroke(),s.fillStyle="#111216",s.font=i>=10?'900 84px "Inter", "Helvetica Neue", Arial, sans-serif':'900 96px "Inter", "Helvetica Neue", Arial, sans-serif',s.textAlign="center",s.textBaseline="middle",s.fillText(String(i),u,260),(i===6||i===9)&&s.fillRect(u-26,304,52,7),s.restore()})}const r=new Ei(n);return r.colorSpace=Wt,r.anisotropy=16,r.needsUpdate=!0,r}function ku(){if(ns)return ns;const i=document.createElement("canvas");i.width=256,i.height=256;const e=i.getContext("2d"),t=e.createImageData(256,256);for(let n=0;n<t.data.length;n+=4){const s=n/4%256,r=Math.floor(n/4/256),a=128+Math.sin((s+r)*1.5)*28+(Math.random()-.5)*52,o=Math.max(0,Math.min(255,a));t.data[n]=t.data[n+1]=t.data[n+2]=o,t.data[n+3]=255}return e.putImageData(t,0,0),ns=new Ei(i),ns.wrapS=Xn,ns.wrapT=Xn,ns.repeat.set(16,8),ns}function zu(i="emerald"){const e=Bu[i]||Bu.emerald;if(uc.has(i))return{map:uc.get(i),bumpMap:ku(),theme:e};const t=2048,n=1024,s=document.createElement("canvas");s.width=t,s.height=n;const r=s.getContext("2d"),a=r.createRadialGradient(t*.5,n*.5,t*.06,t*.5,n*.5,t*.66);a.addColorStop(0,e.center),a.addColorStop(.52,e.mid),a.addColorStop(.85,e.edge),a.addColorStop(1,e.dark),r.fillStyle=a,r.fillRect(0,0,t,n);const o=46,c=r.createLinearGradient(0,0,0,o);c.addColorStop(0,"rgba(0,0,0,0.42)"),c.addColorStop(1,"rgba(0,0,0,0)"),r.fillStyle=c,r.fillRect(0,0,t,o);const h=r.createLinearGradient(0,n,0,n-o);h.addColorStop(0,"rgba(0,0,0,0.42)"),h.addColorStop(1,"rgba(0,0,0,0)"),r.fillStyle=h,r.fillRect(0,n-o,t,o);const l=r.createLinearGradient(0,0,o,0);l.addColorStop(0,"rgba(0,0,0,0.42)"),l.addColorStop(1,"rgba(0,0,0,0)"),r.fillStyle=l,r.fillRect(0,0,o,n);const u=r.createLinearGradient(t,0,t-o,0);u.addColorStop(0,"rgba(0,0,0,0.42)"),u.addColorStop(1,"rgba(0,0,0,0)"),r.fillStyle=u,r.fillRect(t-o,0,o,n);const d=r.getImageData(0,0,t,n),f=d.data;for(let b=0;b<f.length;b+=4){const R=b/4%t,T=Math.floor(b/4/t),w=Math.sin((R+T)*1.45)*2,D=(Math.random()-.5)*7.5+w;f[b]=Math.max(0,Math.min(255,f[b]+D*.7)),f[b+1]=Math.max(0,Math.min(255,f[b+1]+D*.85)),f[b+2]=Math.max(0,Math.min(255,f[b+2]+D*.75))}r.putImageData(d,0,0);const m=b=>(b+ke)/zi*t,g=b=>(b+Le)/xi*n;for(let b=0;b<40;b++){const R=m(Wn-.1+(Math.random()-.5)*.25),T=g((Math.random()-.5)*.55);r.fillStyle=`rgba(220, 240, 250, ${.014+Math.random()*.022})`,r.beginPath(),r.arc(R,T,4+Math.random()*14,0,Math.PI*2),r.fill()}const x=m(Wn);r.strokeStyle="rgba(238, 248, 244, 0.44)",r.lineWidth=3,r.beginPath(),r.moveTo(x,0),r.lineTo(x,n),r.stroke();const p=.21/xi*n;r.strokeStyle="rgba(238, 248, 244, 0.28)",r.lineWidth=2.5,r.beginPath(),r.arc(x,n*.5,p,Math.PI*.5,Math.PI*1.5),r.stroke(),r.fillStyle="rgba(242, 250, 246, 0.78)",r.beginPath(),r.arc(x,n*.5,6.5,0,Math.PI*2),r.fill(),r.fillStyle="rgba(242, 250, 246, 0.48)",r.beginPath(),r.arc(m(0),n*.5,5,0,Math.PI*2),r.fill();const v=m(oh);r.fillStyle="#0f1312",r.beginPath(),r.arc(v,n*.5,10,0,Math.PI*2),r.fill(),r.fillStyle="rgba(246, 250, 246, 0.9)",r.beginPath(),r.arc(v,n*.5,3.5,0,Math.PI*2),r.fill(),r.save(),r.translate(m(0),g(0)),r.strokeStyle="rgba(228, 192, 102, 0.13)",r.lineWidth=3,r.beginPath(),r.arc(0,0,88,0,Math.PI*2),r.stroke(),r.beginPath(),r.arc(0,0,78,0,Math.PI*2),r.lineWidth=1.5,r.stroke(),r.fillStyle="rgba(228, 192, 102, 0.16)",r.font='800 30px "Songti SC", "Georgia", serif',r.textAlign="center",r.textBaseline="middle",r.fillText("独牙 · 兰博金",0,-10),r.font='700 12px "Inter", sans-serif',r.fillText("DUYA LAMBO GOLD · HEYBALL",0,22),r.restore();const y=new Ei(s);return y.colorSpace=Wt,y.anisotropy=16,uc.set(i,y),{map:y,bumpMap:ku(),theme:e}}function nS(){const t=document.createElement("canvas");t.width=512,t.height=512;const n=t.getContext("2d"),s=document.createElement("canvas");s.width=512,s.height=512;const r=s.getContext("2d");n.fillStyle="#14171d",n.fillRect(0,0,512,512),r.fillStyle="#808080",r.fillRect(0,0,512,512);const a=8;for(let h=0;h<512;h+=a)for(let l=0;l<512;l+=a){const u=(l/a+h/a)%2===0;n.fillStyle=u?"#1a1e26":"#101318",n.fillRect(l,h,a,a),n.fillStyle=u?"rgba(255,255,255,0.03)":"rgba(0,0,0,0.18)",n.fillRect(l,h,a,2),r.fillStyle=u?"#929292":"#6e6e6e",r.fillRect(l,h,a,a)}const o=new Ei(t);o.colorSpace=Wt,o.wrapS=Xn,o.wrapT=Xn,o.repeat.set(6,2),o.anisotropy=16;const c=new Ei(s);return c.wrapS=Xn,c.wrapT=Xn,c.repeat.set(6,2),{map:o,bumpMap:c}}function iS(){const i=document.createElement("canvas");i.width=512,i.height=128;const e=i.getContext("2d");e.fillStyle="#111419",e.fillRect(0,0,512,128),e.strokeStyle="#e5be60",e.lineWidth=4,e.strokeRect(8,8,496,112),e.fillStyle="#e5be60",e.beginPath(),e.moveTo(46,28),e.lineTo(84,64),e.lineTo(46,100),e.lineTo(64,64),e.closePath(),e.fill(),e.beginPath(),e.moveTo(466,28),e.lineTo(428,64),e.lineTo(466,100),e.lineTo(448,64),e.closePath(),e.fill(),e.fillStyle="#f3d37c",e.font='900 38px "Inter", "PingFang SC", sans-serif',e.textAlign="center",e.textBaseline="middle",e.fillText("DUYA · 独牙",256,52),e.fillStyle="#d4aa4c",e.font='700 16px "Inter", sans-serif',e.fillText("LAMBO GOLD EDITION",256,92);const t=new Ei(i);return t.colorSpace=Wt,t.anisotropy=8,t}function sS(){const e=document.createElement("canvas");e.width=128,e.height=128;const t=e.getContext("2d"),n=t.createRadialGradient(128/2,128/2,128*.04,128/2,128/2,128*.48);n.addColorStop(0,"rgba(0, 0, 0, 0.78)"),n.addColorStop(.42,"rgba(0, 0, 0, 0.36)"),n.addColorStop(.75,"rgba(0, 0, 0, 0.09)"),n.addColorStop(1,"rgba(0, 0, 0, 0)"),t.fillStyle=n,t.fillRect(0,0,128,128);const s=new Ei(e);return s.needsUpdate=!0,s}function rS(){const e=document.createElement("canvas");e.width=512,e.height=512;const t=e.getContext("2d");t.fillStyle="#121010",t.fillRect(0,0,512,512);const n=64,s=256;for(let a=0;a<512;a+=n)for(let o=0;o<512;o+=s){const c=a/n%2*(s/2),h=16+(a*7+o*13)%10;t.fillStyle=`rgb(${h+5}, ${h}, ${h-3})`,t.fillRect(a+1,(o+c)%512,n-2,s-2)}const r=new Ei(e);return r.colorSpace=Wt,r.wrapS=Xn,r.wrapT=Xn,r.repeat.set(10,10),r.anisotropy=8,r}function aS(){const i=document.createElement("canvas");i.width=512,i.height=320;const e=i.getContext("2d"),t=e.createLinearGradient(0,0,512,320);t.addColorStop(0,"#0d1419"),t.addColorStop(1,"#12151c"),e.fillStyle=t,e.fillRect(0,0,512,320),e.strokeStyle="#e5be60",e.lineWidth=4,e.strokeRect(18,18,476,284),e.lineWidth=1.5,e.strokeRect(26,26,460,268),e.beginPath(),e.arc(256,114,44,0,Math.PI*2),e.fillStyle="#111317",e.fill(),e.lineWidth=3,e.strokeStyle="#e5be60",e.stroke(),e.beginPath(),e.arc(256,114,19,0,Math.PI*2),e.fillStyle="#faf7ef",e.fill(),e.fillStyle="#111317",e.font='900 24px "Inter", Arial, sans-serif',e.textAlign="center",e.textBaseline="middle",e.fillText("8",256,116),e.fillStyle="#f3d27c",e.font='800 29px "Songti SC", "Georgia", serif',e.fillText("独牙 · 兰博金大师赛",256,204),e.fillStyle="#94a3b8",e.font='700 12.5px "Inter", sans-serif',e.fillText("DUYA LAMBO GOLD · HEYBALL CHAMPIONSHIP",256,244);const n=new Ei(i);return n.colorSpace=Wt,n}function oS(){const e=new or;e.moveTo(-ke-.055,-Le-.055),e.lineTo(ke+.055,-Le-.055),e.lineTo(ke+.055,Le+.055),e.lineTo(-ke-.055,Le+.055),e.closePath(),Pn.forEach(a=>{const o=new gl,c=a.dropRadius*1.03;o.absarc(a.x,-a.z,c,0,Math.PI*2,!0),e.holes.push(o)});const t=.052,n=new ys(e,{depth:t,curveSegments:36,bevelEnabled:!0,bevelThickness:.0025,bevelSize:.0025,bevelSegments:3});n.rotateX(-Math.PI/2),n.translate(0,-t-.0025,0);const s=n.attributes.position,r=n.attributes.uv;for(let a=0;a<s.count;a++){const o=s.getX(a),c=s.getZ(a),h=(o+ke)/zi,l=1-(c+Le)/xi;r.setXY(a,h,l)}return r.needsUpdate=!0,n.computeVertexNormals(),n}function cS(i,e,t,n){const s=i/2,r=br,a=e,o=t?.022:.015,c=n?.022:.015,h=new or;h.moveTo(-s,0),h.lineTo(s,0),h.absarc(s,a,a,-Math.PI/2,.28,!1),h.lineTo(s+a+c,r),h.lineTo(-(s+a+o),r),h.absarc(-s,a,a,Math.PI-.28,-Math.PI/2,!1),h.closePath();const l=new ys(h,{depth:Zy-.005,curveSegments:24,bevelEnabled:!0,bevelThickness:.004,bevelSize:.0035,bevelSegments:4});return l.rotateX(-Math.PI/2),l.translate(0,.003,0),l.computeVertexNormals(),l}function La(i,e,t,n,s){const r=new or,a=36;for(let c=0;c<=a;c++){const h=t+c/a*n,l=Math.cos(h)*e,u=Math.sin(h)*e;c===0?r.moveTo(l,u):r.lineTo(l,u)}for(let c=a;c>=0;c--){const h=t+c/a*n;r.lineTo(Math.cos(h)*i,Math.sin(h)*i)}r.closePath();const o=new ys(r,{depth:s,curveSegments:32,bevelEnabled:!0,bevelThickness:.0035,bevelSize:.003,bevelSegments:4});return o.rotateX(-Math.PI/2),o.computeVertexNormals(),o}function Gu(i){const e=Kn,t=Rn,n=new or;n.moveTo(0,0),n.lineTo(e,0),n.lineTo(e+.018,t*.32),n.lineTo(e-.004,t),n.lineTo(.008,t),n.lineTo(0,t*.86),n.closePath();const s=new ys(n,{depth:i,bevelEnabled:!0,bevelThickness:.004,bevelSize:.003,bevelSegments:3});return s.translate(0,0,-i/2),s}function lS(i,e){const t=i/2,n=new or;n.moveTo(-t,e),n.lineTo(t,e),n.lineTo(t*.78,e*.45),n.lineTo(t*.96,0),n.lineTo(t*.52,0),n.lineTo(t*.34,e*.42),n.lineTo(-t*.34,e*.42),n.lineTo(-t*.52,0),n.lineTo(-t*.96,0),n.lineTo(-t*.78,e*.45),n.closePath();const s=new ys(n,{depth:.16,bevelEnabled:!0,bevelThickness:.018,bevelSize:.014,bevelSegments:3});return s.translate(0,0,-.08),s}function hS(i){const e=new Vn,t=zu("emerald"),n=nS(),s=rS(),r=iS(),a=new kn({map:t.map,bumpMap:t.bumpMap,bumpScale:.0022,roughness:.9,metalness:0,sheen:.48,sheenRoughness:.7,sheenColor:new He(3126146)}),o=new kn({color:942918,bumpMap:t.bumpMap,bumpScale:.0018,roughness:.86,metalness:0,sheen:.4,sheenRoughness:.68,sheenColor:new He(2663543)}),c=new kn({map:n.map,bumpMap:n.bumpMap,bumpScale:.002,color:2238e3,roughness:.24,metalness:.28,clearcoat:.82,clearcoatRoughness:.14}),h=new kn({color:2369584,roughness:.3,metalness:.78,clearcoat:.45,clearcoatRoughness:.2}),l=new kn({color:15252552,roughness:.18,metalness:.93,clearcoat:.78,clearcoatRoughness:.1,envMapIntensity:1.5}),u=new kn({color:15912818,roughness:.25,metalness:.95,clearcoat:.4}),d=new Dt({color:new He(2.4,1.9,.85)}),f=new nn({color:1316637,roughness:.32,metalness:.85}),m=new nn({color:723983,roughness:.8,metalness:.06,side:jt}),g=new ye(oS(),a);g.receiveShadow=!0,e.add(g);const x=new ye(new mt(zi+.18,.012,xi+.18),new Dt({color:131844}));x.position.set(0,-.155,0),e.add(x);const p=pf,v=mf,y=xf;function b(j,K,H,Q,Ae,Be,Se,Ge){const L=Math.hypot(H-j,Q-K),xe=cS(L,y,Se,Ge),ue=new ye(xe,o);ue.position.set((j+H)/2,0,(K+Q)/2),Ae===0&&Be===-1?ue.rotation.y=0:Ae===0&&Be===1?ue.rotation.y=Math.PI:Ae===-1&&Be===0?ue.rotation.y=Math.PI/2:ue.rotation.y=-Math.PI/2,ue.castShadow=!0,ue.receiveShadow=!0,e.add(ue)}b(-ke+p,-Le,-v,-Le,0,-1,!0,!1),b(v,-Le,ke-p,-Le,0,-1,!1,!0),b(-ke+p,Le,-v,Le,0,1,!1,!0),b(v,Le,ke-p,Le,0,1,!0,!1),b(-ke,-Le+p,-ke,Le-p,-1,0,!0,!0),b(ke,-Le+p,ke,Le-p,1,0,!0,!0);const R=ke+br-.008,T=Le+br-.008,w=ke-p-v+.004,D=(v+ke-p)/2,E=Gu(w);[-1,1].forEach(j=>{[-1,1].forEach(K=>{const H=new ye(E,c);H.position.set(K*D,-.002,j*T),H.rotation.y=j<0?Math.PI/2:-Math.PI/2,H.castShadow=!0,H.receiveShadow=!0,e.add(H);const Q=new ye(new mt(w-.006,.022,.024),l);Q.position.set(K*D,Rn-.011,j*(T+Kn+.004)),Q.castShadow=!0,e.add(Q);const Ae=new ye(new mt(w-.03,.005,.005),d);Ae.position.set(K*D,Rn*.25,j*(T+Kn+.018)),e.add(Ae)})});const S=xi-p*2+.004,P=Gu(S);[-1,1].forEach(j=>{const K=new ye(P,c);K.position.set(j*R,-.002,0),K.rotation.y=j<0?Math.PI:0,K.castShadow=!0,K.receiveShadow=!0,e.add(K);const H=new ye(new mt(.024,.022,S-.006),l);H.position.set(j*(R+Kn+.004),Rn-.011,0),H.castShadow=!0,e.add(H);const Q=new ye(new mt(.005,.005,S-.03),d);Q.position.set(j*(R+Kn+.018),Rn*.25,0),e.add(Q)});const N=new ye(new mt(.04,.005,.18),u);N.position.set(-1.3621999999999999,Rn-5e-4,0),e.add(N);const B=new mt(.012,.003,.012);function q(j,K){const H=new ye(B,u);H.rotation.y=Math.PI/4,H.position.set(j,Rn-3e-4,K),e.add(H)}[-3,-2,-1,1,2,3].map(j=>j*zi/8).forEach(j=>{[-1,1].forEach(K=>q(j,K*(T+Kn*.45)))}),[-1,1].map(j=>j*xi/4).forEach(j=>{[-1,1].forEach(K=>q(K*(R+Kn*.45),j))});function z(j,K,H){const Q=new Vn;Q.add(new ye(new mt(.023,.023,.023),new nn({color:1461895,roughness:.78})));const Ae=new ye(new mt(.021,.002,.021),new nn({color:3900100,roughness:.96}));Ae.position.y=.0115,Q.add(Ae),Q.position.set(j,Rn+.011,K),Q.rotation.y=H,Q.castShadow=!0,e.add(Q)}z(-ke+.16,T+Kn*.5,.42),z(ke-.16,-.7295,-.28),Pn.forEach(j=>{const K=j.dropRadius*1.03,H=new ye(new sn(K+.002,K*.88,.16,36,1,!0),m);H.position.set(j.x,-.082,j.z),e.add(H);const Q=new ye(new th(K*.88,28),new Dt({color:131587}));Q.rotation.x=-Math.PI/2,Q.position.set(j.x,-.158,j.z),e.add(Q);const Ae=new ye(new sn(K*.92,K*.58,.17,20),m);if(Ae.position.set(j.x,-.19,j.z),e.add(Ae),j.isCorner){const Se=Math.atan2(-Math.sign(j.z),Math.sign(j.x))-116*Math.PI/180,Ge=232*Math.PI/180,L=new ye(La(K+.006,K+.105,Se,Ge,Rn-.003),l);L.position.set(j.x,.002,j.z),L.castShadow=!0,L.receiveShadow=!0,e.add(L);const xe=new ye(La(K-.001,K+.008,Se+.06,Ge-.12,Rn+.001),m);xe.position.set(j.x,.001,j.z),e.add(xe)}else{const Se=(Math.sign(j.z)>0?-Math.PI/2:Math.PI/2)-92*Math.PI/180,Ge=184*Math.PI/180,L=new ye(La(K+.006,K+.095,Se,Ge,Rn-.003),l);L.position.set(j.x,.002,j.z),L.castShadow=!0,L.receiveShadow=!0,e.add(L);const xe=new ye(La(K-.001,K+.008,Se+.06,Ge-.12,Rn+.001),m);xe.position.set(j.x,.001,j.z),e.add(xe)}});const G=zi+(br+Kn)*2-.01,J=xi+(br+Kn)*2-.01,k=new ye(new mt(G-.04,.155,J-.04),l);k.position.set(0,-.095,0),k.castShadow=!0,k.receiveShadow=!0,e.add(k),[-1,1].forEach(j=>{[-.78,.78].forEach(K=>{const H=new ye(new mt(.68,.085,.016),h);H.position.set(K,-.095,j*(J/2-.016)),e.add(H);const Q=new ye(new mt(.45,.014,.022),u);Q.position.set(K,-.095,j*(J/2-.014)),e.add(Q)})});const re=new ye(new mt(G-.22,.085,J-.22),h);re.position.set(0,-.215,0),re.castShadow=!0,e.add(re);const de=new nn({map:r,emissive:new He(14395706),emissiveMap:r,emissiveIntensity:.45,roughness:.22,metalness:.35});[-1,1].forEach(j=>{const K=new ye(new qt(.62,.135),de);K.position.set(0,-.095,j*(J/2-.012)),j<0&&(K.rotation.y=Math.PI),e.add(K)});const Ce=new ye(new mt(G-.26,.008,J-.26),d);Ce.position.set(0,-.26,0),e.add(Ce);const Ke=new ye(new mt(.06,.12,.38),f);Ke.position.set(G/2-.018,-.12,0),e.add(Ke);const Ze=Bn-.24,rt=xi-.06,lt=lS(rt,Ze);[-.78,.78].forEach(j=>{const K=new Vn;K.position.set(j,-Bn,0),K.rotation.y=Math.PI/2;const H=new ye(lt,h);H.castShadow=!0,H.receiveShadow=!0,K.add(H);const Q=new ye(lt,l);Q.scale.set(.92,.94,1.18),Q.position.y=.02,K.add(Q),e.add(K)});const Z=new ye(new mt(1.56,.14,.22),h);Z.position.set(0,-Bn+Ze*.56,0),Z.castShadow=!0,e.add(Z);const ie=new ye(new mt(1.58,.036,.25),l);ie.position.set(0,-Bn+Ze*.56,0),e.add(ie);const Ee=new ye(new qt(16,16),new nn({map:s,roughness:.58,metalness:.08}));Ee.rotation.x=-Math.PI/2,Ee.position.y=-Bn,Ee.receiveShadow=!0,e.add(Ee);const Fe=new ye(new qt(G+1.8,J+1.8),new nn({color:1053723,roughness:.96}));Fe.rotation.x=-Math.PI/2,Fe.position.y=-Bn+.003,Fe.receiveShadow=!0,e.add(Fe);const Ne=new nn({color:921878,roughness:.85,metalness:.05}),Qe=new nn({color:1446936,roughness:.55,metalness:.1}),at=9.5,Oe=7.4,ne=4.2;[{pos:[0,ne/2-Bn,-Oe/2],rotY:0,w:at},{pos:[0,ne/2-Bn,Oe/2],rotY:Math.PI,w:at},{pos:[-at/2,ne/2-Bn,0],rotY:Math.PI/2,w:Oe},{pos:[at/2,ne/2-Bn,0],rotY:-Math.PI/2,w:Oe}].forEach(({pos:j,rotY:K,w:H})=>{const Q=new ye(new qt(H,ne),Ne);Q.position.set(...j),Q.rotation.y=K,e.add(Q);const Ae=new ye(new qt(H,1.3),Qe);Ae.position.set(j[0],.65-Bn,j[2]),Ae.rotation.y=K,Ae.translateZ(.01),e.add(Ae)});const A=aS(),se=new ye(new mt(1.52,.96,.04),l);se.position.set(0,1.12,-Oe/2+.03),e.add(se);const oe=new ye(new qt(1.42,.86),new nn({map:A,roughness:.4}));oe.position.set(0,1.12,-Oe/2+.055),e.add(oe);const he=new Vn;he.add(new ye(new mt(.05,1.55,.72),c));const ae=new nn({color:15124630,roughness:.35}),Re=new nn({color:1708044,roughness:.3});[-.21,-.07,.07,.21].forEach(j=>{const K=new ye(new sn(.011,.015,.72,10),Re);K.position.set(-.045,-.35,j),he.add(K);const H=new ye(new sn(.006,.011,.74,10),ae);H.position.set(-.045,.38,j),he.add(H)}),he.position.set(at/2-.04,.75,-.8),e.add(he);const ge=new Dt({color:new He(2.4,1.75,.9)});[[-2.4,1.1,-Oe/2+.06],[2.4,1.1,-Oe/2+.06],[-2.4,1.1,Oe/2-.06],[2.4,1.1,Oe/2-.06]].forEach(([j,K,H])=>{const Q=new ye(new mt(.12,.32,.06),ge);Q.position.set(j,K,H),e.add(Q);const Ae=new ye(new mt(.15,.03,.08),l);Ae.position.set(j,K-.17,H),e.add(Ae)});const be=new Vn;be.add(new ye(new mt(1.94,.075,.48),f));const C=new ye(new mt(1.96,.016,.5),l);C.position.y=-.032,be.add(C);const _=new ye(new qt(1.82,.38),new Dt({color:new He(1.9,1.8,1.55)}));_.rotation.x=Math.PI/2,_.position.y=-.04,be.add(_),[-.65,.65].forEach(j=>{const K=new ye(new sn(.01,.01,1.4,10),l);K.position.set(j,.72,0),be.add(K)}),be.position.set(0,2.38,0),e.add(be);const F=new ye(new sn(.95,1.85,2.25,32,1,!0),new Dt({color:16771266,transparent:!0,opacity:.022,side:jt,depthWrite:!1,blending:Ya}));F.position.set(0,1.22,0),F.scale.set(1.15,1,.62),e.add(F);const Y=95,ee=new Float32Array(Y*3);for(let j=0;j<Y;j++)ee[j*3+0]=(Math.random()-.5)*3,ee[j*3+1]=.25+Math.random()*1.9,ee[j*3+2]=(Math.random()-.5)*1.6;const $=new Ut;$.setAttribute("position",new In(ee,3));const Ie=new lm($,new Jd({color:16771266,size:.011,transparent:!0,opacity:.28,depthWrite:!1}));e.add(Ie);function ve(j){const K=zu(j);a.map=K.map,a.sheenColor.setHex(K.theme.sheen),a.needsUpdate=!0,o.color.setHex(K.theme.cushion),o.sheenColor.setHex(K.theme.sheen),o.needsUpdate=!0}return i.add(e),{tableGroup:e,dustPoints:Ie,setClothTheme:ve}}class uS{constructor(){this.ctx=null,this.masterOut=null,this.muted=!1,this.noiseBuffer=null,this.lastBallHitTime=0,this.rollGain=null,this.rollFilter=null}ensureContext(){if(this.muted)return null;if(!this.ctx){const e=window.AudioContext||window.webkitAudioContext;if(!e)return null;this.ctx=new e,this.masterOut=this.ctx.createDynamicsCompressor(),this.masterOut.threshold.setValueAtTime(-10,this.ctx.currentTime),this.masterOut.knee.setValueAtTime(12,this.ctx.currentTime),this.masterOut.ratio.setValueAtTime(6,this.ctx.currentTime),this.masterOut.attack.setValueAtTime(.002,this.ctx.currentTime),this.masterOut.release.setValueAtTime(.12,this.ctx.currentTime),this.masterOut.connect(this.ctx.destination),this.createNoiseBuffer(),this.initRollingClothLayer()}return this.ctx.state==="suspended"&&this.ctx.resume().catch(()=>{}),this.ctx}createNoiseBuffer(){if(!this.ctx)return;const e=Math.floor(this.ctx.sampleRate*1.2),t=this.ctx.createBuffer(1,e,this.ctx.sampleRate),n=t.getChannelData(0);for(let s=0;s<e;s++)n[s]=Math.random()*2-1;this.noiseBuffer=t}initRollingClothLayer(){if(!this.ctx||!this.noiseBuffer)return;const e=this.ctx.createBufferSource();e.buffer=this.noiseBuffer,e.loop=!0;const t=this.ctx.createBiquadFilter();t.type="bandpass",t.frequency.setValueAtTime(420,this.ctx.currentTime),t.Q.setValueAtTime(.9,this.ctx.currentTime);const n=this.ctx.createGain();n.gain.setValueAtTime(0,this.ctx.currentTime),e.connect(t),t.connect(n),n.connect(this.masterOut),e.start(),this.rollFilter=t,this.rollGain=n}updateRollingSound(e){if(!this.ctx||!this.rollGain)return;const t=this.ctx.currentTime;if(this.muted||e<.05){this.rollGain.gain.setTargetAtTime(0,t,.06);return}const n=Math.min(1,e/12);this.rollGain.gain.setTargetAtTime(n*.032,t,.05),this.rollFilter.frequency.setTargetAtTime(340+n*420,t,.08)}setMuted(e){this.muted=e,e&&this.rollGain&&this.ctx&&this.rollGain.gain.setTargetAtTime(0,this.ctx.currentTime,.03)}playBallHit(e){const t=this.ensureContext();if(!t)return;const n=t.currentTime;if(n-this.lastBallHitTime<.008&&e<1.1)return;this.lastBallHitTime=n;const s=Math.min(1,Math.max(.05,e/5.2)),r=t.createGain();r.gain.setValueAtTime(s*.62,n),r.gain.exponentialRampToValueAtTime(.001,n+.055),r.connect(this.masterOut||t.destination);const a=t.createOscillator();a.type="triangle";const o=2450+Math.random()*380+s*350;a.frequency.setValueAtTime(o,n),a.frequency.exponentialRampToValueAtTime(1050,n+.024);const c=t.createOscillator();c.type="sine",c.frequency.setValueAtTime(5100+Math.random()*600,n),c.frequency.exponentialRampToValueAtTime(2800,n+.015);const h=t.createGain();h.gain.setValueAtTime(.45,n),h.gain.exponentialRampToValueAtTime(.001,n+.018);const l=t.createBufferSource();l.buffer=this.noiseBuffer;const u=t.createBiquadFilter();u.type="bandpass",u.frequency.setValueAtTime(3800,n),u.Q.setValueAtTime(2.2,n);const d=t.createGain();d.gain.setValueAtTime(.65,n),d.gain.exponentialRampToValueAtTime(.001,n+.016),a.connect(r),c.connect(h),h.connect(r),l.connect(u),u.connect(d),d.connect(r),a.start(n),a.stop(n+.058),c.start(n),c.stop(n+.025),l.start(n),l.stop(n+.022)}playCueStrike(e){const t=this.ensureContext();if(!t)return;const n=t.currentTime,s=Math.min(1,Math.max(.08,e)),r=t.createOscillator();r.type="sine",r.frequency.setValueAtTime(210+s*115,n),r.frequency.exponentialRampToValueAtTime(58,n+.085);const a=t.createGain();a.gain.setValueAtTime(.36*s,n),a.gain.exponentialRampToValueAtTime(.001,n+.095);const o=t.createBufferSource();o.buffer=this.noiseBuffer;const c=t.createBiquadFilter();c.type="bandpass",c.frequency.setValueAtTime(1750+s*950,n),c.Q.setValueAtTime(1.9,n);const h=t.createGain();h.gain.setValueAtTime(.34*s,n),h.gain.exponentialRampToValueAtTime(.001,n+.032);const l=this.masterOut||t.destination;r.connect(a),a.connect(l),o.connect(c),c.connect(h),h.connect(l),r.start(n),r.stop(n+.1),o.start(n),o.stop(n+.04)}playChalk(){const e=this.ensureContext();if(!e)return;const t=e.currentTime,n=this.masterOut||e.destination;[0,.11].forEach(s=>{const r=e.createBufferSource();r.buffer=this.noiseBuffer;const a=e.createBiquadFilter();a.type="bandpass",a.frequency.setValueAtTime(4200,t+s),a.Q.setValueAtTime(3.2,t+s);const o=e.createGain();o.gain.setValueAtTime(.001,t+s),o.gain.linearRampToValueAtTime(.055,t+s+.025),o.gain.exponentialRampToValueAtTime(.001,t+s+.085),r.connect(a),a.connect(o),o.connect(n),r.start(t+s),r.stop(t+s+.095)})}playCushionHit(e){const t=this.ensureContext();if(!t)return;const n=t.currentTime,s=Math.min(1,Math.max(.05,e/4.2)),r=t.createOscillator();r.type="sine",r.frequency.setValueAtTime(108+s*38,n),r.frequency.exponentialRampToValueAtTime(38,n+.095);const a=t.createGain();a.gain.setValueAtTime(s*.32,n),a.gain.exponentialRampToValueAtTime(.001,n+.105),r.connect(a),a.connect(this.masterOut||t.destination),r.start(n),r.stop(n+.11)}playPocketDrop(){const e=this.ensureContext();if(!e)return;const t=e.currentTime,n=this.masterOut||e.destination;[0,.068,.145,.22].forEach((s,r)=>{const a=e.createOscillator();a.type="triangle",a.frequency.setValueAtTime(310-r*55,t+s),a.frequency.exponentialRampToValueAtTime(75,t+s+.06);const o=e.createGain();o.gain.setValueAtTime(.24-r*.048,t+s),o.gain.exponentialRampToValueAtTime(.001,t+s+.075),a.connect(o),o.connect(n),a.start(t+s),a.stop(t+s+.08)})}playFoul(){const e=this.ensureContext();if(!e)return;const t=e.currentTime,n=e.createOscillator();n.type="sawtooth",n.frequency.setValueAtTime(196,t),n.frequency.linearRampToValueAtTime(142,t+.26);const s=e.createBiquadFilter();s.type="lowpass",s.frequency.setValueAtTime(480,t);const r=e.createGain();r.gain.setValueAtTime(.11,t),r.gain.exponentialRampToValueAtTime(.001,t+.28),n.connect(s),s.connect(r),r.connect(this.masterOut||e.destination),n.start(t),n.stop(t+.3)}playTick(e=!1){const t=this.ensureContext();if(!t)return;const n=t.currentTime,s=t.createOscillator();s.type="sine",s.frequency.setValueAtTime(e?980:720,n);const r=t.createGain();r.gain.setValueAtTime(e?.11:.06,n),r.gain.exponentialRampToValueAtTime(.001,n+.06),s.connect(r),r.connect(this.masterOut||t.destination),s.start(n),s.stop(n+.07)}playWin(){const e=this.ensureContext();if(!e)return;const t=e.currentTime,n=this.masterOut||e.destination;[523.25,659.25,783.99,1046.5].forEach((s,r)=>{const a=e.createOscillator();a.type="triangle",a.frequency.setValueAtTime(s,t+r*.11);const o=e.createGain();o.gain.setValueAtTime(.001,t+r*.11),o.gain.linearRampToValueAtTime(.15,t+r*.11+.02),o.gain.exponentialRampToValueAtTime(.001,t+r*.11+.48),a.connect(o),o.connect(n),a.start(t+r*.11),a.stop(t+r*.11+.52)})}}const bt=new uS,{segments:Vu,knuckles:Hu}=Qy();class dS{constructor(){this.balls=[],this.shotEvents=this.createEmptyShotEvents(),this.isMoving=!1,this.totalRollingSpeed=0,this.onHeavyImpact=null,this.onBallCollision=null,this._axis=new I,this._dq=new ar}createEmptyShotEvents(){return{firstHitBall:null,pocketedBalls:[],cushionHitAfterContact:!1,objectBallsHitCushion:new Set,cueScratched:!1}}resetShotEvents(){this.shotEvents=this.createEmptyShotEvents()}getStandardRackPositions(){const e=[];e.push({num:0,x:Wn-.12,z:0});const t=Ve+3e-4,n=t*Math.sqrt(3),s=[1,9,2,3,8,10,11,4,12,5,6,13,14,7,15];let r=0;for(let a=0;a<5;a++){const o=oh+a*n;for(let c=0;c<=a;c++){const h=(c-a/2)*(t*2);e.push({num:s[r++],x:o,z:h})}}return e}setBalls(e){this.balls=e}getCueBall(){return this.balls.find(e=>e.num===0)}getBallByNum(e){return this.balls.find(t=>t.num===e)}findFreeSpot(e,t){const n=Hn*.6;for(let s=0;s<30;s++){const r=e+s*n;if(r>ke-Ve*1.5)break;if(this.isPositionFree(r,t,-1))return{x:r,z:t}}return{x:e,z:t}}isPositionFree(e,t,n=0){if(e<-ke+Ve+.002||e>ke-Ve-.002||t<-Le+Ve+.002||t>Le-Ve-.002)return!1;for(const s of this.balls){if(s.num===n||s.pocketed||s.dropping)continue;if(Math.hypot(s.x-e,s.z-t)<Hn+.002)return!1}return!0}strikeCueBall(e,t,n=0,s=0,r=0){const a=this.getCueBall();if(!a||a.pocketed||a.dropping)return 0;this.resetShotEvents();const o=Math.max(0,Math.min(35,r))*Math.PI/180,c=Math.cos(o),h=Math.sin(o),l=Math.max(.02,Math.min(1,t)),u=.28+Math.pow(l,1.58)*6.52,d=u*(.45+.55*c),f=-n*.0085*c,m=e+f,g=Math.cos(m),x=Math.sin(m);a.vx=g*d,a.vz=x*d;const p=Ve,v=s>=0?s*2.05:s*2.45;let y=a.vz/p*v,b=-(a.vx/p)*v;const T=-n*(u/p)*1.55*c,w=-n*(u/p)*2.4*h;return y+=g*w,b+=x*w,a.wx=y,a.wy=T,a.wz=b,this.isMoving=!0,bt.playCueStrike(t),d}step(e){const t=Math.min(e,.033),n=10,s=t/n;let r=!1;for(let h=0;h<n;h++)r=this.substep(s);let a=0;const o=this._axis,c=this._dq;for(let h=0;h<this.balls.length;h++){const l=this.balls[h];if(!l.mesh)continue;if(l.pocketed&&!l.dropping){l.mesh.visible=!1,l.shadowMesh&&(l.shadowMesh.visible=!1);continue}if(l.mesh.visible=!0,l.mesh.position.set(l.x,l.y,l.z),l.dropping||(a+=Math.hypot(l.vx,l.vz)),l.shadowMesh){l.shadowMesh.visible=!l.dropping||l.y>-.02,l.shadowMesh.position.set(l.x,.0014,l.z);const d=Math.max(0,Math.min(1,(l.y+.02)/(Ve+.02)));l.shadowMesh.material.opacity=.72*d}const u=Math.hypot(l.wx,l.wy,l.wz);u>.001&&(o.set(l.wx/u,l.wy/u,l.wz/u),c.setFromAxisAngle(o,u*t),l.mesh.quaternion.premultiply(c))}return this.totalRollingSpeed=a,bt.updateRollingSound(r?a:0),this.isMoving=r,r}substep(e){const t=Ve,n=Zn.GRAVITY;let s=!1;for(let h=0;h<this.balls.length;h++){const l=this.balls[h];if(l.pocketed&&!l.dropping)continue;if(l.dropping){l.vy-=n*1.45*e,l.y+=l.vy*e,l.x+=l.vx*e,l.z+=l.vz*e,l.vx*=.93,l.vz*=.93;const x=Pn[l.pocketId];x&&(l.x+=(x.x-l.x)*8.5*e,l.z+=(x.z-l.z)*8.5*e),l.y<-.115?(l.dropping=!1,l.pocketed=!0,l.vx=l.vy=l.vz=0,l.wx=l.wy=l.wz=0):s=!0;continue}l.x+=l.vx*e,l.z+=l.vz*e;const u=l.vx+l.wz*t,d=l.vz-l.wx*t,f=Math.hypot(u,d);if(f>.012){const x=Zn.MU_SLIDE*n*e,p=3.5*x;if(f<=p){const v=f/3.5,y=u/f,b=d/f;l.vx-=y*v,l.vz-=b*v,l.wx=l.vz/t,l.wz=-l.vx/t}else{const v=u/f,y=d/f;l.vx-=v*x,l.vz-=y*x;const b=2.5*(x/t);l.wx+=y*b,l.wz-=v*b}}else{const x=Math.hypot(l.vx,l.vz);if(x>1e-4){const p=Zn.MU_ROLL*n*e;if(x<=p)l.vx=0,l.vz=0,l.wx=0,l.wz=0;else{const v=(x-p)/x;l.vx*=v,l.vz*=v,l.wx=l.vz/t,l.wz=-l.vx/t}}}if(Math.abs(l.wy)>.001){const x=Zn.MU_SPIN*n/t*e*1.65;Math.abs(l.wy)<=x?l.wy=0:l.wy-=Math.sign(l.wy)*x}const m=Math.hypot(l.vx,l.vz),g=Math.hypot(l.wx,l.wy,l.wz);m<Zn.STOP_SPEED&&g<Zn.STOP_OMEGA?(l.vx=l.vz=0,l.wx=l.wy=l.wz=0):s=!0}for(let h=0;h<this.balls.length;h++){const l=this.balls[h];if(!(l.pocketed||l.dropping))for(let u=0;u<Pn.length;u++){const d=Pn[u];if(Math.hypot(l.x-d.x,l.z-d.z)<d.dropRadius){l.dropping=!0,l.pocketId=d.id,l.vy=-.36,bt.playPocketDrop(),l.num===0?this.shotEvents.cueScratched=!0:this.shotEvents.pocketedBalls.push(l.num),s=!0;break}}}const r=Hn,a=r*r,o=.055,c=this.balls.length;for(let h=0;h<2;h++){let l=!1;for(let u=0;u<c;u++){const d=this.balls[u];if(!(d.pocketed||d.dropping))for(let f=u+1;f<c;f++){const m=this.balls[f];if(m.pocketed||m.dropping)continue;const g=m.x-d.x,x=m.z-d.z,p=g*g+x*x;if(p<a&&p>1e-10){l=!0;const v=Math.sqrt(p),y=g/v,b=x/v,R=(r-v)*.502;d.x-=y*R,d.z-=b*R,m.x+=y*R,m.z+=b*R;const T=m.vx-d.vx,w=m.vz-d.vz,D=T*y+w*b;if(D<0){this.shotEvents.firstHitBall===null&&(d.num===0&&m.num!==0?this.shotEvents.firstHitBall=m.num:m.num===0&&d.num!==0&&(this.shotEvents.firstHitBall=d.num));const E=-1.96*D*.5;d.vx-=E*y,d.vz-=E*b,m.vx+=E*y,m.vz+=E*b;const S=-b,P=y,N=T*S+w*P,B=(d.wy+m.wy)*t,q=N-B,z=o*E,G=Math.max(-z,Math.min(z,-q*(1/7)));d.vx-=G*S,d.vz-=G*P,m.vx+=G*S,m.vz+=G*P;const J=2.5*G/t;d.wy+=J,m.wy+=J;const k=Math.abs(D);h===0&&k>.07&&(bt.playBallHit(k),k>1.6&&this.onBallCollision&&this.onBallCollision((d.x+m.x)*.5,(d.z+m.z)*.5,k),k>3.6&&this.onHeavyImpact&&this.onHeavyImpact(k)),s=!0}}}}if(!l)break}for(let h=0;h<c;h++){const l=this.balls[h];if(l.pocketed||l.dropping)continue;let u=!1;for(let f=0;f<Vu.length;f++){const m=Vu[f];if(m.nx===0){if(l.x>=m.x1&&l.x<=m.x2){const x=(l.z-m.z1)*m.nz;if(x<t&&x>-t*1.4){l.z=m.z1+m.nz*t;const p=l.vz*m.nz;if(p<0){const v=Math.abs(p),y=Math.max(.77,Math.min(.87,.87-v*.014));l.vz=-l.vz*y;const b=l.vx-l.wy*t*m.nz,R=Math.max(-.22*v,Math.min(.22*v,-b*.14));l.vx+=R,l.wy=l.wy*.68-R/t*.45*m.nz,l.wx=l.vz/t,u=!0,v>.08&&bt.playCushionHit(v)}}}}else if(l.z>=m.z1&&l.z<=m.z2){const x=(l.x-m.x1)*m.nx;if(x<t&&x>-t*1.4){l.x=m.x1+m.nx*t;const p=l.vx*m.nx;if(p<0){const v=Math.abs(p),y=Math.max(.77,Math.min(.87,.87-v*.014));l.vx=-l.vx*y;const b=l.vz+l.wy*t*m.nx,R=Math.max(-.22*v,Math.min(.22*v,-b*.14));l.vz+=R,l.wy=l.wy*.68+R/t*.45*m.nx,l.wz=-l.vx/t,u=!0,v>.08&&bt.playCushionHit(v)}}}}for(let f=0;f<Hu.length;f++){const m=Hu[f],g=l.x-m.x,x=l.z-m.z,p=t+m.r,v=g*g+x*x;if(v<p*p&&v>1e-10){const y=Math.sqrt(v),b=g/y,R=x/y;l.x=m.x+b*p,l.z=m.z+R*p;const T=l.vx*b+l.vz*R;if(T<0){const w=Math.abs(T);l.vx-=(1+Zn.KNUCKLE_RESTITUTION)*T*b,l.vz-=(1+Zn.KNUCKLE_RESTITUTION)*T*R,u=!0,w>.1&&bt.playCushionHit(w)}}}u&&(this.shotEvents.firstHitBall!==null&&(this.shotEvents.cushionHitAfterContact=!0),l.num!==0&&this.shotEvents.objectBallsHitCushion.add(l.num),s=!0);const d=.065;if(Math.abs(l.x)>ke+d||Math.abs(l.z)>Le+d){let f=Pn[0],m=1/0;for(let g=0;g<Pn.length;g++){const x=Pn[g],p=Math.hypot(l.x-x.x,l.z-x.z);p<m&&(m=p,f=x)}l.dropping=!0,l.pocketId=f.id,l.vy=-.36,bt.playPocketDrop(),l.num===0?this.shotEvents.cueScratched=!0:this.shotEvents.pocketedBalls.push(l.num)}}return s}}class fS{constructor(e="ai"){this.mode=e,this.reset(e)}reset(e=this.mode){this.mode=e,this.onlineNames=this.onlineNames||["房主","挑战者"],this.currentPlayer=0,this.playerGroups=[null,null],this.isBreakShot=!0,this.isOpenTable=!0,this.ballInHand=!0,this.ballInHandBehindLine=!0,this.gameOver=!1,this.winner=null,this.winReason="",this.turnCount=1}setOnlineNames(e){Array.isArray(e)&&e.length>=2&&(this.onlineNames=[e[0],e[1]])}exportState(){return{currentPlayer:this.currentPlayer,playerGroups:[...this.playerGroups],isBreakShot:this.isBreakShot,isOpenTable:this.isOpenTable,ballInHand:this.ballInHand,ballInHandBehindLine:this.ballInHandBehindLine,gameOver:this.gameOver,winner:this.winner,winReason:this.winReason,turnCount:this.turnCount}}importState(e){e&&(this.currentPlayer=e.currentPlayer,this.playerGroups=[...e.playerGroups],this.isBreakShot=e.isBreakShot,this.isOpenTable=e.isOpenTable,this.ballInHand=e.ballInHand,this.ballInHandBehindLine=e.ballInHandBehindLine,this.gameOver=e.gameOver,this.winner=e.winner,this.winReason=e.winReason,this.turnCount=e.turnCount)}getPlayerName(e){return this.mode==="practice"?"自由练习":this.mode==="online"?this.onlineNames[e]||(e===0?"房主":"挑战者"):this.mode==="ai"?e===0?"玩家":"AI 对手":e===0?"玩家 1":"玩家 2"}getGroupLabel(e){return e==="solid"?"全色 (1-7)":e==="stripe"?"花色 (9-15)":"开放球局"}getRemainingByGroup(e,t){return e.filter(n=>!n.pocketed&&!n.dropping&&Vs(n.num)===t)}isOnEightBall(e,t){const n=this.playerGroups[e];return n?this.getRemainingByGroup(t,n).length===0:!1}getLegalTargetNums(e,t=this.currentPlayer){const n=e.filter(r=>r.num!==0&&!r.pocketed&&!r.dropping);if(this.mode==="practice")return n.map(r=>r.num);if(this.isBreakShot||this.isOpenTable){const r=n.filter(a=>a.num!==8).map(a=>a.num);return r.length>0?r:[8]}if(this.isOnEightBall(t,e))return[8];const s=this.playerGroups[t];return n.filter(r=>Vs(r.num)===s).map(r=>r.num)}evaluateShot(e,t){const{firstHitBall:n,pocketedBalls:s,cushionHitAfterContact:r,objectBallsHitCushion:a,cueScratched:o}=e,c=this.currentPlayer,h=1-c,l=s.includes(8),u=s.filter(p=>Vs(p)==="solid"),d=s.filter(p=>Vs(p)==="stripe");if(this.mode==="practice")return this.isBreakShot=!1,o?(this.ballInHand=!0,this.ballInHandBehindLine=!1,{message:"白球落袋 · 自由摆放白球",type:"foul",respotEight:!1}):(this.ballInHand=!1,this.ballInHandBehindLine=!1,l?{message:"黑八进袋！可点击「重新开局」继续练习",type:"info",respotEight:!1}:s.length>0?{message:`漂亮进球！进 ${s.join("、")} 号球`,type:"good",respotEight:!1}:{message:"继续击球",type:"normal",respotEight:!1});if(this.isBreakShot){this.isBreakShot=!1;let p=!1;l&&(p=!0);const v=s.length>0||a.size>=4;if(o)return this.currentPlayer=h,this.ballInHand=!0,this.ballInHandBehindLine=!0,this.turnCount++,{message:`${this.getPlayerName(c)} 开球白球落袋犯规！${this.getPlayerName(h)} 获得开球线后自由球`,type:"foul",respotEight:p};if(!v)return this.currentPlayer=h,this.ballInHand=!0,this.ballInHandBehindLine=!1,this.turnCount++,{message:`开球未达标（需进球或至少4颗目标球碰库）· 换 ${this.getPlayerName(h)} 自由球`,type:"foul",respotEight:p};const y=u.length+d.length>0;return this.ballInHand=!1,this.ballInHandBehindLine=!1,y?{message:`${this.getPlayerName(c)} 有效开球并进球！开放球局，继续击球${p?"（黑八已重置）":""}`,type:"good",respotEight:p}:(this.currentPlayer=h,this.turnCount++,{message:`有效开球 · 开放球局，轮到 ${this.getPlayerName(h)}${p?"（黑八已重置）":""}`,type:"info",respotEight:p})}const f=this.isOnEightBall(c,t),m=this.playerGroups[c];let g=null;if(o?g="白球落袋":n===null?g="空杆未碰球":(this.isOpenTable?n===8&&(g="开放球局不能先碰黑八"):f?n!==8&&(g="必须先击打黑八"):Vs(n)!==m&&(g=n===8?"未清完本方球不能先碰黑八":"先击打了对方目标球"),!g&&s.length===0&&!r&&(g="击球后无进球且无球碰库")),l)return f&&!g?(this.gameOver=!0,this.winner=c,this.winReason=`${this.getPlayerName(c)} 成功清台打进黑八获胜！`,{message:this.winReason,type:"win",respotEight:!1}):(this.gameOver=!0,this.winner=h,this.winReason=g?`${this.getPlayerName(c)} 击打黑八时犯规（${g}），${this.getPlayerName(h)} 获胜！`:`${this.getPlayerName(c)} 提前误进黑八，${this.getPlayerName(h)} 获胜！`,{message:this.winReason,type:"win",respotEight:!1});if(g)return this.currentPlayer=h,this.ballInHand=!0,this.ballInHandBehindLine=!1,this.turnCount++,{message:`${this.getPlayerName(c)} 犯规（${g}）！${this.getPlayerName(h)} 获得全场自由球`,type:"foul",respotEight:!1};if(this.ballInHand=!1,this.ballInHandBehindLine=!1,this.isOpenTable){const p=s.find(v=>v!==8);if(p!==void 0){const v=Vs(p),y=v==="solid"?"stripe":"solid";return this.playerGroups[c]=v,this.playerGroups[h]=y,this.isOpenTable=!1,{message:`分球成功！${this.getPlayerName(c)} 选择 ${this.getGroupLabel(v)}，继续击球`,type:"good",respotEight:!1}}else return this.currentPlayer=h,this.turnCount++,{message:`未进球 · 开放球局，轮到 ${this.getPlayerName(h)}`,type:"normal",respotEight:!1}}return m==="solid"&&u.length>0||m==="stripe"&&d.length>0?{message:this.isOnEightBall(c,t)?`好球！${this.getPlayerName(c)} 已清完本方球，可以击打黑八！`:`好球！${this.getPlayerName(c)} 继续击球`,type:"good",respotEight:!1}:(this.currentPlayer=h,this.turnCount++,{message:`换手 · 轮到 ${this.getPlayerName(h)}`,type:"normal",respotEight:!1})}}const dc={amateur:{error:.032,label:"业余"},pro:{error:.011,label:"职业"},master:{error:.003,label:"大师"}};class pS{constructor(e="pro"){this.setDifficulty(e)}setDifficulty(e){this.difficulty=dc[e]?e:"pro",this.accuracyError=dc[this.difficulty].error}getDifficultyLabel(){return dc[this.difficulty].label}chooseBallInHandPosition(e,t,n,s){if(n){const o=[{x:Wn-.06,z:0},{x:Wn-.08,z:.18},{x:Wn-.08,z:-.18}];for(const c of o)if(s.isPositionFree(c.x,c.z,0))return c;return{x:Wn-.1,z:0}}let r=null,a=-1/0;for(const o of t){const c=e.find(h=>h.num===o&&!h.pocketed&&!h.dropping);if(c)for(const h of Pn){const l=h.x-c.x,u=h.z-c.z,d=Math.hypot(l,u);if(d<.05)continue;const f=l/d,m=u/d,g=.34,x=c.x-f*g,p=c.z-m*g;if(!s.isPositionFree(x,p,0)||!this.isPathClear(c.x,c.z,h.x,h.z,e,[0,c.num])||!this.isPathClear(x,p,c.x-f*Hn,c.z-m*Hn,e,[0,c.num]))continue;const v=2-d;v>a&&(a=v,r={x,z:p})}}if(r)return r;for(let o=0;o<25;o++){const c=(Math.random()-.5)*(ke*1.4),h=(Math.random()-.5)*(Le*1.4);if(s.isPositionFree(c,h,0))return{x:c,z:h}}return{x:Wn-.08,z:0}}isScratchRisk(e,t,n,s,r,a){let o=-a,c=r;o*n+c*s<0&&(o=-o,c=-c);for(const h of Pn){const l=h.x-e,u=h.z-t,d=l*o+u*c;if(d>.05&&d<1.1&&Math.abs(l*-c+u*o)<h.dropRadius*1.05)return!0}return!1}computeShot(e,t,n){const s=e.find(u=>u.num===0);if(!s)return{angle:0,power:.5,spinX:0,spinY:0,elevation:0};if(n){const u=e.find(f=>f.num===1&&!f.pocketed);return{angle:u?Math.atan2(u.z-s.z,u.x-s.x)+(Math.random()-.5)*.015:0,power:.95,spinX:0,spinY:.15,elevation:0}}let r=null,a=-1/0;for(const u of t){const d=e.find(f=>f.num===u&&!f.pocketed&&!f.dropping);if(d)for(const f of Pn){const m=f.x*.985,g=f.z*.985,x=m-d.x,p=g-d.z,v=Math.hypot(x,p);if(v<.03)continue;const y=x/v,b=p/v,R=d.x-y*Hn,T=d.z-b*Hn,w=R-s.x,D=T-s.z,E=Math.hypot(w,D);if(E<.01)continue;const S=w/E,P=D/E,N=S*y+P*b;if(N<.28||!this.isPathClear(s.x,s.z,R,T,e,[0,d.num])||!this.isPathClear(d.x,d.z,m,g,e,[0,d.num]))continue;const B=this.isScratchRisk(R,T,S,P,y,b),q=f.isCorner?.16:0,z=N*3.2-v*.85-E*.55+q-(B?1.1:0);if(z>a){a=z;const G=Math.atan2(D,w),J=.28+(E+v)*.18+(1-N)*.18,k=Math.max(.24,Math.min(.78,J)),re=B?-.55:N>.85?-.15:.12;r={angle:G+(Math.random()-.5)*this.accuracyError,power:k,spinX:0,spinY:re,elevation:0}}}}if(r)return r;let o=null,c=1/0;for(const u of t){const d=e.find(m=>m.num===u&&!m.pocketed&&!m.dropping);if(!d)continue;const f=Math.hypot(d.x-s.x,d.z-s.z);this.isPathClear(s.x,s.z,d.x,d.z,e,[0,d.num])&&f<c&&(c=f,o=d)}if(o)return{angle:Math.atan2(o.z-s.z,o.x-s.x),power:.44,spinX:0,spinY:0,elevation:0};const h=[{axis:"z",val:-Le+Ve},{axis:"z",val:Le-Ve},{axis:"x",val:-ke+Ve},{axis:"x",val:ke-Ve}];for(const u of t){const d=e.find(f=>f.num===u&&!f.pocketed&&!f.dropping);if(d)for(const f of h){const m=f.axis==="x"?2*f.val-d.x:d.x,g=f.axis==="z"?2*f.val-d.z:d.z,x=f.axis==="x"?(f.val-s.x)/(m-s.x||1e-6):(f.val-s.z)/(g-s.z||1e-6);if(x<=.05||x>=.95)continue;const p=s.x+(m-s.x)*x,v=s.z+(g-s.z)*x;if(!(Math.abs(p)>ke-.08||Math.abs(v)>Le-.08)&&this.isPathClear(s.x,s.z,p,v,e,[0,d.num])&&this.isPathClear(p,v,d.x,d.z,e,[0,d.num]))return{angle:Math.atan2(v-s.z,p-s.x),power:.56,spinX:0,spinY:0,elevation:0}}}const l=e.find(u=>t.includes(u.num)&&!u.pocketed&&!u.dropping);return l?{angle:Math.atan2(l.z-s.z,l.x-s.x),power:.5,spinX:0,spinY:0,elevation:0}:{angle:0,power:.45,spinX:0,spinY:0,elevation:0}}isPathClear(e,t,n,s,r,a){const o=n-e,c=s-t,h=o*o+c*c;if(h<1e-6)return!0;const l=Hn*.96,u=l*l;for(const d of r){if(d.pocketed||d.dropping||a.includes(d.num))continue;const f=Math.max(0,Math.min(1,((d.x-e)*o+(d.z-t)*c)/h)),m=e+f*o,g=t+f*c;if((d.x-m)**2+(d.z-g)**2<u)return!1}return!0}}class mS{constructor(e){this.scene=e,this.guideMode="full",this.cueGroup=this.buildCueMesh(),this.scene.add(this.cueGroup),this.aimGroup=this.buildAimGuide(),this.scene.add(this.aimGroup);const t=new as(Ve*1.15,Ve*1.58,36);this.placeRingMat=new Dt({color:3462041,side:jt,transparent:!0,opacity:.9}),this.placeRing=new ye(t,this.placeRingMat),this.placeRing.rotation.x=-Math.PI/2,this.placeRing.position.y=.004,this.placeRing.visible=!1,this.scene.add(this.placeRing),this.pocketGlow=new ye(new as(.052,.068,32),new Dt({color:16498468,side:jt,transparent:!0,opacity:.85})),this.pocketGlow.rotation.x=-Math.PI/2,this.pocketGlow.position.y=.0045,this.pocketGlow.visible=!1,this.scene.add(this.pocketGlow);const n=ke*.5;this.baulkZoneOverlay=new ye(new qt(n,Le*2-.02),new Dt({color:3462041,transparent:!0,opacity:.11,depthWrite:!1})),this.baulkZoneOverlay.rotation.x=-Math.PI/2,this.baulkZoneOverlay.position.set(-ke+n/2,.0022,0),this.baulkZoneOverlay.visible=!1,this.scene.add(this.baulkZoneOverlay),this.aimTelemetry={hasTarget:!1,cutAngleDeg:0,pocketLocked:!1,isLegal:!0},this.chalkParticles=[],this.chalkGeo=new tr(.0045,6,6),this.impactRings=[],this.impactRingGeo=new as(.008,.015,24),this.highlightHalos=[],this.haloGeo=new as(Ve*1.12,Ve*1.48,28);for(let r=0;r<15;r++){const a=new Dt({color:3462041,side:jt,transparent:!0,opacity:0,depthWrite:!1}),o=new ye(this.haloGeo,a);o.rotation.x=-Math.PI/2,o.position.y=.0032,o.visible=!1,this.scene.add(o),this.highlightHalos.push(o)}this.haloTimer=0,this.trailCount=22,this.trailPositions=new Float32Array(this.trailCount*3);const s=new Ut;s.setAttribute("position",new In(this.trailPositions,3)),this.trailMat=new Hs({color:16708551,transparent:!0,opacity:0,depthWrite:!1}),this.trailLine=new gr(s,this.trailMat),this.trailLine.frustumCulled=!1,this.scene.add(this.trailLine),this.trailActive=!1}buildCueMesh(){const e=new Vn,t=1.48,n=new kn({color:14728298,roughness:.2,metalness:.92,clearcoat:.4}),s=new ye(new sn(.0054,.006,.009,16),new nn({color:2781107,roughness:.92}));s.rotation.z=Math.PI/2,s.position.x=-.0045,e.add(s);const r=new ye(new sn(.006,.0064,.022,16),new kn({color:16447471,roughness:.18,clearcoat:.8}));r.rotation.z=Math.PI/2,r.position.x=-.02,e.add(r);const a=.72;this.shaftMat=new kn({color:15256473,roughness:.28,metalness:.02,clearcoat:.45,clearcoatRoughness:.25});const o=new ye(new sn(.0064,.0108,a,18),this.shaftMat);o.rotation.z=Math.PI/2,o.position.x=-.031-a/2,o.castShadow=!0,e.add(o),this.jointMat=n;const c=new ye(new sn(.0109,.0112,.026,18),this.jointMat);c.rotation.z=Math.PI/2,c.position.x=-.764,e.add(c);const h=t-.777;this.buttMat=new kn({color:1708302,roughness:.22,metalness:.08,clearcoat:.85,clearcoatRoughness:.12});const l=new ye(new sn(.0112,.0156,h,18),this.buttMat);l.rotation.z=Math.PI/2,l.position.x=-.777-h/2,l.castShadow=!0,e.add(l);const u=new ye(new sn(.0124,.014,.28,18),new nn({color:1381914,roughness:.92}));return u.rotation.z=Math.PI/2,u.position.x=-1.07,e.add(u),[-.92,-1.22,-1.43].forEach(d=>{const f=.0118+(-d-.78)/h*.0042,m=new ye(new sn(f,f+2e-4,.01,18),n);m.rotation.z=Math.PI/2,m.position.x=d,e.add(m)}),e}buildAimGuide(){const e=new Vn;this.aimLineMat=new Hs({color:16777215,transparent:!0,opacity:.78}),this.aimLine=new gr(new Ut().setFromPoints([new I,new I(1,0,0)]),this.aimLineMat),e.add(this.aimLine);const t=Array.from({length:28},()=>new I);return this.curveLineMat=new Hs({color:3718648,transparent:!0,opacity:.88}),this.curveLine=new gr(new Ut().setFromPoints(t),this.curveLineMat),this.curveLine.visible=!1,e.add(this.curveLine),this.ghostMat=new Dt({color:16777215,transparent:!0,opacity:.22}),this.ghostBall=new ye(new tr(Ve*.99,24,18),this.ghostMat),e.add(this.ghostBall),this.ghostRingMat=new Dt({color:6220500,side:jt,transparent:!0,opacity:.9}),this.ghostRing=new ye(new as(Ve*.92,Ve*1.07,32),this.ghostRingMat),this.ghostRing.rotation.x=-Math.PI/2,e.add(this.ghostRing),this.objLineMat=new Hs({color:16498468,transparent:!0,opacity:.9}),this.objLine=new gr(new Ut().setFromPoints([new I,new I(1,0,0)]),this.objLineMat),e.add(this.objLine),this.deflLineMat=new Hs({color:9684477,transparent:!0,opacity:.65}),this.deflLine=new gr(new Ut().setFromPoints([new I,new I(1,0,0)]),this.deflLineMat),e.add(this.deflLine),e}emitChalkPuff(e,t,n,s,r){const a=Math.round(6+r*10),o=Math.cos(s),c=Math.sin(s);for(let h=0;h<a;h++){const l=new Dt({color:8246268,transparent:!0,opacity:.52,depthWrite:!1}),u=new ye(this.chalkGeo,l);u.position.set(e-o*Ve*.8+(Math.random()-.5)*.015,t+(Math.random()-.5)*.012,n-c*Ve*.8+(Math.random()-.5)*.015),this.scene.add(u),this.chalkParticles.push({mesh:u,vx:(Math.random()-.5)*.25-o*.08,vy:.06+Math.random()*.16,vz:(Math.random()-.5)*.25-c*.08,life:0,maxLife:.42+Math.random()*.25})}}emitImpactFlash(e,t,n){const s=new Dt({color:16774084,side:jt,transparent:!0,opacity:Math.min(.85,.35+n*.12),depthWrite:!1}),r=new ye(this.impactRingGeo,s);r.rotation.x=-Math.PI/2,r.position.set(e,.005,t),this.scene.add(r),this.impactRings.push({mesh:r,life:0,maxLife:.22})}updateParticles(e){for(let t=this.chalkParticles.length-1;t>=0;t--){const n=this.chalkParticles[t];if(n.life+=e,n.life>=n.maxLife){this.scene.remove(n.mesh),n.mesh.material.dispose(),this.chalkParticles.splice(t,1);continue}const s=n.life/n.maxLife;n.mesh.position.x+=n.vx*e,n.mesh.position.y+=n.vy*e,n.mesh.position.z+=n.vz*e,n.vx*=.94,n.vy*=.94,n.vz*=.94,n.mesh.scale.setScalar(1+s*2.4),n.mesh.material.opacity=.52*(1-s)}for(let t=this.impactRings.length-1;t>=0;t--){const n=this.impactRings[t];if(n.life+=e,n.life>=n.maxLife){this.scene.remove(n.mesh),n.mesh.material.dispose(),this.impactRings.splice(t,1);continue}const s=n.life/n.maxLife;n.mesh.scale.setScalar(1+s*4.5),n.mesh.material.opacity=.75*(1-s)}}triggerLegalHighlight(e=2.6){this.haloTimer=e}updateHalos(e,t,n,s,r=!0){this.haloTimer>0&&(this.haloTimer=Math.max(0,this.haloTimer-e));let a=0;const o=1+Math.sin(performance.now()*.007)*.09;for(const c of t){if(c.num===0||c.pocketed||c.dropping)continue;const h=s&&c.num===8&&r,l=this.haloTimer>0&&n.includes(c.num);if((h||l)&&a<this.highlightHalos.length){const u=this.highlightHalos[a++];u.visible=!0,u.position.set(c.x,.0032,c.z),u.scale.setScalar(o),h?(u.material.color.setHex(16498468),u.material.opacity=.72):(u.material.color.setHex(3462041),u.material.opacity=Math.min(.75,this.haloTimer*.65))}}for(let c=a;c<this.highlightHalos.length;c++)this.highlightHalos[c].visible=!1}resetCueTrail(e){if(e){for(let t=0;t<this.trailCount;t++)this.trailPositions[t*3+0]=e.x,this.trailPositions[t*3+1]=Ve*.65,this.trailPositions[t*3+2]=e.z;this.trailLine.geometry.attributes.position.needsUpdate=!0,this.trailMat.opacity=0,this.trailActive=!0}}updateCueTrail(e,t){if(!t||!e||e.pocketed||e.dropping){this.trailMat.opacity*=.84,this.trailMat.opacity<.01&&(this.trailMat.opacity=0,this.trailActive=!1);return}for(let r=this.trailCount-1;r>0;r--)this.trailPositions[r*3+0]=this.trailPositions[(r-1)*3+0],this.trailPositions[r*3+1]=this.trailPositions[(r-1)*3+1],this.trailPositions[r*3+2]=this.trailPositions[(r-1)*3+2];this.trailPositions[0]=e.x,this.trailPositions[1]=Ve*.65,this.trailPositions[2]=e.z,this.trailLine.geometry.attributes.position.needsUpdate=!0;const n=Math.hypot(e.vx,e.vz),s=n>2.2?Math.min(.45,(n-2.2)*.12):0;this.trailMat.opacity+=(s-this.trailMat.opacity)*.2}setGuideMode(e){this.guideMode=e}setCueSkin(e){!this.shaftMat||!this.buttMat||!this.jointMat||(e==="carbon"?(this.shaftMat.color.setHex(1974826),this.shaftMat.roughness=.24,this.shaftMat.metalness=.35,this.buttMat.color.setHex(987671),this.jointMat.color.setHex(13358561)):e==="royal"?(this.shaftMat.color.setHex(15783592),this.shaftMat.roughness=.22,this.shaftMat.metalness=.02,this.buttMat.color.setHex(4854300),this.jointMat.color.setHex(15911275)):e==="aurora"?(this.shaftMat.color.setHex(14477557),this.shaftMat.roughness=.18,this.shaftMat.metalness=.42,this.buttMat.color.setHex(861752),this.jointMat.color.setHex(3718648)):(this.shaftMat.color.setHex(15256473),this.shaftMat.roughness=.28,this.shaftMat.metalness=.02,this.buttMat.color.setHex(1708302),this.jointMat.color.setHex(14728298)))}setVisible(e,t){this.cueGroup.visible=e,this.bridgeHandGroup&&(this.bridgeHandGroup.visible=e),this.aimGroup.visible=t&&this.guideMode!=="off",(!t||this.guideMode==="off")&&(this.pocketGlow.visible=!1)}updatePlacementRing(e,t,n,s,r=!1){this.placeRing.visible=e,this.baulkZoneOverlay.visible=e&&r,e&&(this.placeRing.position.set(t,.004,n),this.placeRingMat.color.setHex(s?3462041:15680580))}updateCurvePreview(e,t,n,s,r,a){const o=r*Math.PI/180,c=Math.cos(o),h=Math.sin(o),l=3.2,u=l*(.45+.55*c),d=Math.cos(t),f=Math.sin(t),m=Ve,g=Zn.GRAVITY;let x=e.x,p=e.z,v=d*u,y=f*u;const b=s>=0?s*2.05:s*2.45;let R=y/m*b+d*(-n*(l/m)*2.4*h),T=-(v/m)*b+f*(-n*(l/m)*2.4*h);const w=this.curveLine.geometry.attributes.position,D=w.count,E=.022,S=Ve*.95;let P=!1;for(let N=0;N<D;N++){if(w.setXYZ(N,x,S,p),P)continue;if(x+=v*E,p+=y*E,Math.abs(x)>ke-m||Math.abs(p)>Le-m){P=!0;continue}for(const G of a)if(!(G.num===0||G.pocketed||G.dropping)&&Math.hypot(G.x-x,G.z-p)<Hn){P=!0;break}const B=v+T*m,q=y-R*m,z=Math.hypot(B,q);if(z>.015){const G=Zn.MU_SLIDE*g*E,J=B/z,k=q/z;v-=J*G,y-=k*G;const re=2.5*(G/m);R+=k*re,T-=J*re}}w.needsUpdate=!0}findAimedPocket(e,t,n,s){for(const r of Pn){const a=r.x-e,o=r.z-t;if(a*n+o*s<=0)continue;if(Math.abs(a*-s+o*n)<r.dropRadius*.92)return r}return null}update(e,t,n,s,r,a=!0,o=0,c=0,h=0){if(!e||e.pocketed||e.dropping){this.setVisible(!1,!1);return}const l=Math.cos(t),u=Math.sin(t),d=-u,f=l,m=(3.2+o)*Math.PI/180,g=Ve+.015+n,x=c*Ve*.45,p=h*Ve*.42;if(this.cueGroup.position.set(e.x-l*g*Math.cos(m)+d*x,Ve+p+g*Math.sin(m),e.z-u*g*Math.cos(m)+f*x),this.cueGroup.rotation.set(0,-t,-m,"YXZ"),this.cueGroup.visible=!0,!a||this.guideMode==="off"){this.aimGroup.visible=!1,this.pocketGlow.visible=!1;return}this.aimGroup.visible=!0;const v=this.raycastShot(e,l,u,s),y=Ve*.92,b=this.guideMode==="full"&&o>=6&&Math.abs(c)>.15;this.curveLine.visible=b,b&&this.updateCurvePreview(e,t,c,h,o,s);const R=this.aimLine.geometry.attributes.position;if(R.setXYZ(0,e.x,y,e.z),R.setXYZ(1,v.gx,y,v.gz),R.needsUpdate=!0,this.ghostBall.position.set(v.gx,Ve,v.gz),this.ghostRing.position.set(v.gx,.003,v.gz),v.hitBall){const T=r.includes(v.hitBall.num);this.ghostRingMat.color.setHex(T?3462041:16281969),this.aimLineMat.color.setHex(T?16777215:16557477);const w=v.hitBall.x-v.gx,D=v.hitBall.z-v.gz,E=Math.hypot(w,D)||1,S=w/E,P=D/E,N=this.guideMode==="full"?.72:.24,B=this.objLine.geometry.attributes.position;B.setXYZ(0,v.hitBall.x,y,v.hitBall.z),B.setXYZ(1,v.hitBall.x+S*N,y,v.hitBall.z+P*N),B.needsUpdate=!0,this.objLine.visible=!0,this.objLineMat.color.setHex(T?16498468:15680580);const q=T&&this.guideMode==="full"?this.findAimedPocket(v.hitBall.x,v.hitBall.z,S,P):null;if(q){this.pocketGlow.visible=!0,this.pocketGlow.position.set(q.x,.0045,q.z);const Ce=1+Math.sin(performance.now()*.008)*.08;this.pocketGlow.scale.setScalar(Ce)}else this.pocketGlow.visible=!1;const z=Math.max(0,Math.min(1,l*S+u*P)),G=Math.round(Math.acos(z)*180/Math.PI);this.aimTelemetry={hasTarget:!0,targetNum:v.hitBall.num,cutAngleDeg:G,pocketLocked:!!q,isLegal:T};let J=-P,k=S;const re=J*l+k*u;re<0&&(J=-J,k=-k);const de=Math.abs(re)*(this.guideMode==="full"?.38:.15);if(de>.03){const Ce=this.deflLine.geometry.attributes.position;Ce.setXYZ(0,v.gx,y,v.gz),Ce.setXYZ(1,v.gx+J*de,y,v.gz+k*de),Ce.needsUpdate=!0,this.deflLine.visible=!0}else this.deflLine.visible=!1}else if(this.pocketGlow.visible=!1,this.aimTelemetry={hasTarget:!1,targetNum:null,cutAngleDeg:0,pocketLocked:!1,isLegal:!0},this.ghostRingMat.color.setHex(9741240),this.aimLineMat.color.setHex(14870768),this.objLine.visible=!1,this.guideMode==="full"&&v.cushionNormal){const T=v.cushionNormal.x!==0?-l:l,w=v.cushionNormal.z!==0?-u:u,D=.55,E=this.deflLine.geometry.attributes.position;E.setXYZ(0,v.gx,y,v.gz),E.setXYZ(1,v.gx+T*D,y,v.gz+w*D),E.needsUpdate=!0,this.deflLine.visible=!0}else this.deflLine.visible=!1}raycastShot(e,t,n,s){let r=1/0,a=null,o=null;const c=-ke+Ve,h=ke-Ve,l=-Le+Ve,u=Le-Ve;if(t>1e-6){const f=(h-e.x)/t;f<r&&(r=f,o={x:-1,z:0})}if(t<-1e-6){const f=(c-e.x)/t;f<r&&(r=f,o={x:1,z:0})}if(n>1e-6){const f=(u-e.z)/n;f<r&&(r=f,o={x:0,z:-1})}if(n<-1e-6){const f=(l-e.z)/n;f<r&&(r=f,o={x:0,z:1})}const d=Hn*Hn;for(const f of s){if(f.num===0||f.pocketed||f.dropping)continue;const m=f.x-e.x,g=f.z-e.z,x=m*t+g*n;if(x<=0)continue;const p=m*m+g*g-x*x;if(p>=d)continue;const v=Math.sqrt(d-p),y=x-v;y>.001&&y<r&&(r=y,a=f,o=null)}return(!Number.isFinite(r)||r<0)&&(r=.5),{t:r,gx:e.x+t*r,gz:e.z+n*r,hitBall:a,cushionNormal:o}}}const Wu=[{id:"rack",name:"标准开球阵型",desc:"标准 15 球中式八球摆球，练习大力炸球与清台",build:null},{id:"draw_follow",name:"高低杆定杆特训",desc:"直线中袋与底袋球型，体验低杆拉回、中杆定杆与高杆跟进",build:()=>[{num:0,x:-.42,z:0},{num:1,x:.18,z:0},{num:2,x:.72,z:-.26},{num:3,x:.72,z:.26},{num:8,x:1.02,z:0}]},{id:"masse_curve",name:"扎杆弧线绕球特训",desc:"障碍球挡住直线！调高「抬杆 22°–30°」+ 强左/右塞打出真实弧线绕球",build:()=>[{num:0,x:-.58,z:0},{num:9,x:-.05,z:0},{num:3,x:.52,z:.08},{num:8,x:.96,z:-.32}]},{id:"endgame",name:"清台残局 · 决胜黑八",desc:"3 颗全色球 + 黑八残局，考验走位与加塞细腻控球",build:()=>[{num:0,x:-.55,z:.18},{num:1,x:-.08,z:-.38},{num:4,x:.45,z:.34},{num:6,x:.88,z:-.24},{num:8,x:.15,z:.04}]}];class xS{constructor(){this.encoder=new TextEncoder,this._pieces=[],this._parts=[]}append_buffer(e){this.flush(),this._parts.push(e)}append(e){this._pieces.push(e)}flush(){if(this._pieces.length>0){const e=new Uint8Array(this._pieces);this._parts.push(e),this._pieces=[]}}toArrayBuffer(){const e=[];for(const t of this._parts)e.push(t);return gS(e).buffer}}function gS(i){let e=0;for(const s of i)e+=s.byteLength;const t=new Uint8Array(e);let n=0;for(const s of i){const r=new Uint8Array(s.buffer,s.byteOffset,s.byteLength);t.set(r,n),n+=s.byteLength}return t}function gf(i){return new _S(i).unpack()}function _f(i){const e=new vS,t=e.pack(i);return t instanceof Promise?t.then(()=>e.getBuffer()):e.getBuffer()}class _S{constructor(e){this.index=0,this.dataBuffer=e,this.dataView=new Uint8Array(this.dataBuffer),this.length=this.dataBuffer.byteLength}unpack(){const e=this.unpack_uint8();if(e<128)return e;if((e^224)<32)return(e^224)-32;let t;if((t=e^160)<=15)return this.unpack_raw(t);if((t=e^176)<=15)return this.unpack_string(t);if((t=e^144)<=15)return this.unpack_array(t);if((t=e^128)<=15)return this.unpack_map(t);switch(e){case 192:return null;case 193:return;case 194:return!1;case 195:return!0;case 202:return this.unpack_float();case 203:return this.unpack_double();case 204:return this.unpack_uint8();case 205:return this.unpack_uint16();case 206:return this.unpack_uint32();case 207:return this.unpack_uint64();case 208:return this.unpack_int8();case 209:return this.unpack_int16();case 210:return this.unpack_int32();case 211:return this.unpack_int64();case 212:return;case 213:return;case 214:return;case 215:return;case 216:return t=this.unpack_uint16(),this.unpack_string(t);case 217:return t=this.unpack_uint32(),this.unpack_string(t);case 218:return t=this.unpack_uint16(),this.unpack_raw(t);case 219:return t=this.unpack_uint32(),this.unpack_raw(t);case 220:return t=this.unpack_uint16(),this.unpack_array(t);case 221:return t=this.unpack_uint32(),this.unpack_array(t);case 222:return t=this.unpack_uint16(),this.unpack_map(t);case 223:return t=this.unpack_uint32(),this.unpack_map(t)}}unpack_uint8(){const e=this.dataView[this.index]&255;return this.index++,e}unpack_uint16(){const e=this.read(2),t=(e[0]&255)*256+(e[1]&255);return this.index+=2,t}unpack_uint32(){const e=this.read(4),t=((e[0]*256+e[1])*256+e[2])*256+e[3];return this.index+=4,t}unpack_uint64(){const e=this.read(8),t=((((((e[0]*256+e[1])*256+e[2])*256+e[3])*256+e[4])*256+e[5])*256+e[6])*256+e[7];return this.index+=8,t}unpack_int8(){const e=this.unpack_uint8();return e<128?e:e-256}unpack_int16(){const e=this.unpack_uint16();return e<32768?e:e-65536}unpack_int32(){const e=this.unpack_uint32();return e<2**31?e:e-2**32}unpack_int64(){const e=this.unpack_uint64();return e<2**63?e:e-2**64}unpack_raw(e){if(this.length<this.index+e)throw new Error(`BinaryPackFailure: index is out of range ${this.index} ${e} ${this.length}`);const t=this.dataBuffer.slice(this.index,this.index+e);return this.index+=e,t}unpack_string(e){const t=this.read(e);let n=0,s="",r,a;for(;n<e;)r=t[n],r<160?(a=r,n++):(r^192)<32?(a=(r&31)<<6|t[n+1]&63,n+=2):(r^224)<16?(a=(r&15)<<12|(t[n+1]&63)<<6|t[n+2]&63,n+=3):(a=(r&7)<<18|(t[n+1]&63)<<12|(t[n+2]&63)<<6|t[n+3]&63,n+=4),s+=String.fromCodePoint(a);return this.index+=e,s}unpack_array(e){const t=new Array(e);for(let n=0;n<e;n++)t[n]=this.unpack();return t}unpack_map(e){const t={};for(let n=0;n<e;n++){const s=this.unpack();t[s]=this.unpack()}return t}unpack_float(){const e=this.unpack_uint32(),t=e>>31,n=(e>>23&255)-127,s=e&8388607|8388608;return(t===0?1:-1)*s*2**(n-23)}unpack_double(){const e=this.unpack_uint32(),t=this.unpack_uint32(),n=e>>31,s=(e>>20&2047)-1023,a=(e&1048575|1048576)*2**(s-20)+t*2**(s-52);return(n===0?1:-1)*a}read(e){const t=this.index;if(t+e<=this.length)return this.dataView.subarray(t,t+e);throw new Error("BinaryPackFailure: read index out of range")}}class vS{getBuffer(){return this._bufferBuilder.toArrayBuffer()}pack(e){if(typeof e=="string")this.pack_string(e);else if(typeof e=="number")Math.floor(e)===e?this.pack_integer(e):this.pack_double(e);else if(typeof e=="boolean")e===!0?this._bufferBuilder.append(195):e===!1&&this._bufferBuilder.append(194);else if(e===void 0)this._bufferBuilder.append(192);else if(typeof e=="object")if(e===null)this._bufferBuilder.append(192);else{const t=e.constructor;if(e instanceof Array){const n=this.pack_array(e);if(n instanceof Promise)return n.then(()=>this._bufferBuilder.flush())}else if(e instanceof ArrayBuffer)this.pack_bin(new Uint8Array(e));else if("BYTES_PER_ELEMENT"in e){const n=e;this.pack_bin(new Uint8Array(n.buffer,n.byteOffset,n.byteLength))}else if(e instanceof Date)this.pack_string(e.toString());else{if(e instanceof Blob)return e.arrayBuffer().then(n=>{this.pack_bin(new Uint8Array(n)),this._bufferBuilder.flush()});if(t==Object||t.toString().startsWith("class")){const n=this.pack_object(e);if(n instanceof Promise)return n.then(()=>this._bufferBuilder.flush())}else throw new Error(`Type "${t.toString()}" not yet supported`)}}else throw new Error(`Type "${typeof e}" not yet supported`);this._bufferBuilder.flush()}pack_bin(e){const t=e.length;if(t<=15)this.pack_uint8(160+t);else if(t<=65535)this._bufferBuilder.append(218),this.pack_uint16(t);else if(t<=4294967295)this._bufferBuilder.append(219),this.pack_uint32(t);else throw new Error("Invalid length");this._bufferBuilder.append_buffer(e)}pack_string(e){const t=this._textEncoder.encode(e),n=t.length;if(n<=15)this.pack_uint8(176+n);else if(n<=65535)this._bufferBuilder.append(216),this.pack_uint16(n);else if(n<=4294967295)this._bufferBuilder.append(217),this.pack_uint32(n);else throw new Error("Invalid length");this._bufferBuilder.append_buffer(t)}pack_array(e){const t=e.length;if(t<=15)this.pack_uint8(144+t);else if(t<=65535)this._bufferBuilder.append(220),this.pack_uint16(t);else if(t<=4294967295)this._bufferBuilder.append(221),this.pack_uint32(t);else throw new Error("Invalid length");const n=s=>{if(s<t){const r=this.pack(e[s]);return r instanceof Promise?r.then(()=>n(s+1)):n(s+1)}};return n(0)}pack_integer(e){if(e>=-32&&e<=127)this._bufferBuilder.append(e&255);else if(e>=0&&e<=255)this._bufferBuilder.append(204),this.pack_uint8(e);else if(e>=-128&&e<=127)this._bufferBuilder.append(208),this.pack_int8(e);else if(e>=0&&e<=65535)this._bufferBuilder.append(205),this.pack_uint16(e);else if(e>=-32768&&e<=32767)this._bufferBuilder.append(209),this.pack_int16(e);else if(e>=0&&e<=4294967295)this._bufferBuilder.append(206),this.pack_uint32(e);else if(e>=-2147483648&&e<=2147483647)this._bufferBuilder.append(210),this.pack_int32(e);else if(e>=-9223372036854776e3&&e<=9223372036854776e3)this._bufferBuilder.append(211),this.pack_int64(e);else if(e>=0&&e<=18446744073709552e3)this._bufferBuilder.append(207),this.pack_uint64(e);else throw new Error("Invalid integer")}pack_double(e){let t=0;e<0&&(t=1,e=-e);const n=Math.floor(Math.log(e)/Math.LN2),s=e/2**n-1,r=Math.floor(s*2**52),a=2**32,o=t<<31|n+1023<<20|r/a&1048575,c=r%a;this._bufferBuilder.append(203),this.pack_int32(o),this.pack_int32(c)}pack_object(e){const t=Object.keys(e),n=t.length;if(n<=15)this.pack_uint8(128+n);else if(n<=65535)this._bufferBuilder.append(222),this.pack_uint16(n);else if(n<=4294967295)this._bufferBuilder.append(223),this.pack_uint32(n);else throw new Error("Invalid length");const s=r=>{if(r<t.length){const a=t[r];if(e.hasOwnProperty(a)){this.pack(a);const o=this.pack(e[a]);if(o instanceof Promise)return o.then(()=>s(r+1))}return s(r+1)}};return s(0)}pack_uint8(e){this._bufferBuilder.append(e)}pack_uint16(e){this._bufferBuilder.append(e>>8),this._bufferBuilder.append(e&255)}pack_uint32(e){const t=e&4294967295;this._bufferBuilder.append((t&4278190080)>>>24),this._bufferBuilder.append((t&16711680)>>>16),this._bufferBuilder.append((t&65280)>>>8),this._bufferBuilder.append(t&255)}pack_uint64(e){const t=e/4294967296,n=e%2**32;this._bufferBuilder.append((t&4278190080)>>>24),this._bufferBuilder.append((t&16711680)>>>16),this._bufferBuilder.append((t&65280)>>>8),this._bufferBuilder.append(t&255),this._bufferBuilder.append((n&4278190080)>>>24),this._bufferBuilder.append((n&16711680)>>>16),this._bufferBuilder.append((n&65280)>>>8),this._bufferBuilder.append(n&255)}pack_int8(e){this._bufferBuilder.append(e&255)}pack_int16(e){this._bufferBuilder.append((e&65280)>>8),this._bufferBuilder.append(e&255)}pack_int32(e){this._bufferBuilder.append(e>>>24&255),this._bufferBuilder.append((e&16711680)>>>16),this._bufferBuilder.append((e&65280)>>>8),this._bufferBuilder.append(e&255)}pack_int64(e){const t=Math.floor(e/4294967296),n=e%2**32;this._bufferBuilder.append((t&4278190080)>>>24),this._bufferBuilder.append((t&16711680)>>>16),this._bufferBuilder.append((t&65280)>>>8),this._bufferBuilder.append(t&255),this._bufferBuilder.append((n&4278190080)>>>24),this._bufferBuilder.append((n&16711680)>>>16),this._bufferBuilder.append((n&65280)>>>8),this._bufferBuilder.append(n&255)}constructor(){this._bufferBuilder=new xS,this._textEncoder=new TextEncoder}}let vf=!0,yf=!0;function Er(i,e,t){const n=i.match(e);return n&&n.length>=t&&parseFloat(n[t],10)}function Ss(i,e,t){if(!i.RTCPeerConnection)return;if(!Object.getOwnPropertyDescriptor(EventTarget.prototype,"addEventListener").writable){ch("Unable to polyfill events");return}const s=i.RTCPeerConnection.prototype,r=s.addEventListener;s.addEventListener=function(o,c){if(o!==e)return r.apply(this,arguments);const h=l=>{const u=t(l);u&&(c.handleEvent?c.handleEvent(u):c(u))};return this._eventMap=this._eventMap||{},this._eventMap[e]||(this._eventMap[e]=new Map),this._eventMap[e].set(c,h),r.apply(this,[o,h])};const a=s.removeEventListener;s.removeEventListener=function(o,c){if(o!==e||!this._eventMap||!this._eventMap[e])return a.apply(this,arguments);if(!this._eventMap[e].has(c))return a.apply(this,arguments);const h=this._eventMap[e].get(c);return this._eventMap[e].delete(c),this._eventMap[e].size===0&&delete this._eventMap[e],Object.keys(this._eventMap).length===0&&delete this._eventMap,a.apply(this,[o,h])},Object.defineProperty(s,"on"+e,{get(){return this["_on"+e]},set(o){this["_on"+e]&&(this.removeEventListener(e,this["_on"+e]),delete this["_on"+e]),o&&this.addEventListener(e,this["_on"+e]=o)},enumerable:!0,configurable:!0})}function yS(i){return typeof i!="boolean"?new Error("Argument type: "+typeof i+". Please use a boolean."):(vf=i,i?"adapter.js logging disabled":"adapter.js logging enabled")}function SS(i){return typeof i!="boolean"?new Error("Argument type: "+typeof i+". Please use a boolean."):(yf=!i,"adapter.js deprecation warnings "+(i?"disabled":"enabled"))}function ch(){if(typeof window=="object"){if(vf)return;typeof console<"u"&&typeof console.log=="function"&&console.log.apply(console,arguments)}}function lh(i,e){yf&&console.warn(i+" is deprecated, please use "+e+" instead.")}function MS(i){const e={browser:null,version:null};if(typeof i>"u"||!i.navigator||!i.navigator.userAgent)return e.browser="Not a browser.",e;const{navigator:t}=i;if(t.userAgentData&&t.userAgentData.brands){const n=t.userAgentData.brands.find(s=>s.brand==="Chromium");if(n){const s=parseInt(n.version,10);if(s>=90)return{browser:"chrome",version:s}}}if(t.mozGetUserMedia)e.browser="firefox",e.version=parseInt(Er(t.userAgent,/Firefox\/(\d+)\./,1));else if(t.webkitGetUserMedia||i.isSecureContext===!1&&i.webkitRTCPeerConnection)e.browser="chrome",e.version=parseInt(Er(t.userAgent,/Chrom(e|ium)\/(\d+)\./,2))||null;else if(i.RTCPeerConnection&&t.userAgent.match(/AppleWebKit\/(\d+)\./))e.browser="safari",e.version=parseInt(Er(t.userAgent,/AppleWebKit\/(\d+)\./,1)),e.supportsUnifiedPlan=i.RTCRtpTransceiver&&"currentDirection"in i.RTCRtpTransceiver.prototype,e._safariVersion=Er(t.userAgent,/Version\/(\d+(\.?\d+))/,1);else return e.browser="Not a supported browser.",e;return e}function Xu(i){return Object.prototype.toString.call(i)==="[object Object]"}function Sf(i){return Xu(i)?Object.keys(i).reduce(function(e,t){const n=Xu(i[t]),s=n?Sf(i[t]):i[t],r=n&&!Object.keys(s).length;return s===void 0||r?e:Object.assign(e,{[t]:s})},{}):i}function El(i,e,t){!e||t.has(e.id)||(t.set(e.id,e),Object.keys(e).forEach(n=>{n.endsWith("Id")?El(i,i.get(e[n]),t):n.endsWith("Ids")&&e[n].forEach(s=>{El(i,i.get(s),t)})}))}function $u(i,e,t){const n=t?"outbound-rtp":"inbound-rtp",s=new Map;if(e===null)return s;const r=[];return i.forEach(a=>{a.type==="track"&&a.trackIdentifier===e.id&&r.push(a)}),r.forEach(a=>{i.forEach(o=>{o.type===n&&o.trackId===a.id&&El(i,o,s)})}),s}const qu=ch;function Mf(i,e){if(e.version>=64)return;const t=i&&i.navigator;if(!t.mediaDevices)return;const n=function(o){if(typeof o!="object"||o.mandatory||o.optional)return o;const c={};return Object.keys(o).forEach(h=>{if(h==="require"||h==="advanced"||h==="mediaSource")return;const l=typeof o[h]=="object"?o[h]:{ideal:o[h]};l.exact!==void 0&&typeof l.exact=="number"&&(l.min=l.max=l.exact);const u=function(d,f){return d?d+f.charAt(0).toUpperCase()+f.slice(1):f==="deviceId"?"sourceId":f};if(l.ideal!==void 0){c.optional=c.optional||[];let d={};typeof l.ideal=="number"?(d[u("min",h)]=l.ideal,c.optional.push(d),d={},d[u("max",h)]=l.ideal,c.optional.push(d)):(d[u("",h)]=l.ideal,c.optional.push(d))}l.exact!==void 0&&typeof l.exact!="number"?(c.mandatory=c.mandatory||{},c.mandatory[u("",h)]=l.exact):["min","max"].forEach(d=>{l[d]!==void 0&&(c.mandatory=c.mandatory||{},c.mandatory[u(d,h)]=l[d])})}),o.advanced&&(c.optional=(c.optional||[]).concat(o.advanced)),c},s=function(o,c){if(e.version>=61)return c(o);if(o=JSON.parse(JSON.stringify(o)),o&&typeof o.audio=="object"){const h=function(l,u,d){u in l&&!(d in l)&&(l[d]=l[u],delete l[u])};o=JSON.parse(JSON.stringify(o)),h(o.audio,"autoGainControl","googAutoGainControl"),h(o.audio,"noiseSuppression","googNoiseSuppression"),o.audio=n(o.audio)}if(o&&typeof o.video=="object"){let h=o.video.facingMode;h=h&&(typeof h=="object"?h:{ideal:h});const l=e.version<66;if(h&&(h.exact==="user"||h.exact==="environment"||h.ideal==="user"||h.ideal==="environment")&&!(t.mediaDevices.getSupportedConstraints&&t.mediaDevices.getSupportedConstraints().facingMode&&!l)){delete o.video.facingMode;let u;if(h.exact==="environment"||h.ideal==="environment"?u=["back","rear"]:(h.exact==="user"||h.ideal==="user")&&(u=["front"]),u)return t.mediaDevices.enumerateDevices().then(d=>{d=d.filter(m=>m.kind==="videoinput");let f=d.find(m=>u.some(g=>m.label.toLowerCase().includes(g)));return!f&&d.length&&u.includes("back")&&(f=d[d.length-1]),f&&(o.video.deviceId=h.exact?{exact:f.deviceId}:{ideal:f.deviceId}),o.video=n(o.video),qu("chrome: "+JSON.stringify(o)),c(o)})}o.video=n(o.video)}return qu("chrome: "+JSON.stringify(o)),c(o)},r=function(o){return e.version>=64?o:{name:{PermissionDeniedError:"NotAllowedError",PermissionDismissedError:"NotAllowedError",InvalidStateError:"NotAllowedError",DevicesNotFoundError:"NotFoundError",ConstraintNotSatisfiedError:"OverconstrainedError",TrackStartError:"NotReadableError",MediaDeviceFailedDueToShutdown:"NotAllowedError",MediaDeviceKillSwitchOn:"NotAllowedError",TabCaptureError:"AbortError",ScreenCaptureError:"AbortError",DeviceCaptureError:"AbortError"}[o.name]||o.name,message:o.message,constraint:o.constraint||o.constraintName,toString(){return this.name+(this.message&&": ")+this.message}}},a=function(o,c,h){s(o,l=>{t.webkitGetUserMedia(l,c,u=>{h&&h(r(u))})})};if(t.getUserMedia=a.bind(t),t.mediaDevices.getUserMedia){const o=t.mediaDevices.getUserMedia.bind(t.mediaDevices);t.mediaDevices.getUserMedia=function(c){return s(c,h=>o(h).then(l=>{if(h.audio&&!l.getAudioTracks().length||h.video&&!l.getVideoTracks().length)throw l.getTracks().forEach(u=>{u.stop()}),new DOMException("","NotFoundError");return l},l=>Promise.reject(r(l))))}}}function bf(i){i.MediaStream=i.MediaStream||i.webkitMediaStream}function Ef(i,e){if(!(e.version>102))if(typeof i=="object"&&i.RTCPeerConnection&&!("ontrack"in i.RTCPeerConnection.prototype)){Object.defineProperty(i.RTCPeerConnection.prototype,"ontrack",{get(){return this._ontrack},set(n){this._ontrack&&this.removeEventListener("track",this._ontrack),this.addEventListener("track",this._ontrack=n)},enumerable:!0,configurable:!0});const t=i.RTCPeerConnection.prototype.setRemoteDescription;i.RTCPeerConnection.prototype.setRemoteDescription=function(){return this._ontrackpoly||(this._ontrackpoly=s=>{s.stream.addEventListener("addtrack",r=>{let a;i.RTCPeerConnection.prototype.getReceivers?a=this.getReceivers().find(c=>c.track&&c.track.id===r.track.id):a={track:r.track};const o=new Event("track");o.track=r.track,o.receiver=a,o.transceiver={receiver:a},o.streams=[s.stream],this.dispatchEvent(o)}),s.stream.getTracks().forEach(r=>{let a;i.RTCPeerConnection.prototype.getReceivers?a=this.getReceivers().find(c=>c.track&&c.track.id===r.id):a={track:r};const o=new Event("track");o.track=r,o.receiver=a,o.transceiver={receiver:a},o.streams=[s.stream],this.dispatchEvent(o)})},this.addEventListener("addstream",this._ontrackpoly)),t.apply(this,arguments)}}else Ss(i,"track",t=>(t.transceiver||Object.defineProperty(t,"transceiver",{value:{receiver:t.receiver}}),t))}function Tf(i){if(typeof i=="object"&&i.RTCPeerConnection&&!("getSenders"in i.RTCPeerConnection.prototype)&&"createDTMFSender"in i.RTCPeerConnection.prototype){const e=function(s,r){return{track:r,get dtmf(){return this._dtmf===void 0&&(r.kind==="audio"?this._dtmf=s.createDTMFSender(r):this._dtmf=null),this._dtmf},_pc:s}};if(!i.RTCPeerConnection.prototype.getSenders){i.RTCPeerConnection.prototype.getSenders=function(){return this._senders=this._senders||[],this._senders.slice()};const s=i.RTCPeerConnection.prototype.addTrack;i.RTCPeerConnection.prototype.addTrack=function(o,c){let h=s.apply(this,arguments);return h||(h=e(this,o),this._senders.push(h)),h};const r=i.RTCPeerConnection.prototype.removeTrack;i.RTCPeerConnection.prototype.removeTrack=function(o){r.apply(this,arguments);const c=this._senders.indexOf(o);c!==-1&&this._senders.splice(c,1)}}const t=i.RTCPeerConnection.prototype.addStream;i.RTCPeerConnection.prototype.addStream=function(r){this._senders=this._senders||[],t.apply(this,[r]),r.getTracks().forEach(a=>{this._senders.push(e(this,a))})};const n=i.RTCPeerConnection.prototype.removeStream;i.RTCPeerConnection.prototype.removeStream=function(r){this._senders=this._senders||[],n.apply(this,[r]),r.getTracks().forEach(a=>{const o=this._senders.find(c=>c.track===a);o&&this._senders.splice(this._senders.indexOf(o),1)})}}else if(typeof i=="object"&&i.RTCPeerConnection&&"getSenders"in i.RTCPeerConnection.prototype&&"createDTMFSender"in i.RTCPeerConnection.prototype&&i.RTCRtpSender&&!("dtmf"in i.RTCRtpSender.prototype)){const e=i.RTCPeerConnection.prototype.getSenders;i.RTCPeerConnection.prototype.getSenders=function(){const n=e.apply(this,[]);return n.forEach(s=>s._pc=this),n},Object.defineProperty(i.RTCRtpSender.prototype,"dtmf",{get(){return this._dtmf===void 0&&(this.track.kind==="audio"?this._dtmf=this._pc.createDTMFSender(this.track):this._dtmf=null),this._dtmf}})}}function Cf(i,e){if(e.version>=67||!(typeof i=="object"&&i.RTCPeerConnection&&i.RTCRtpSender&&i.RTCRtpReceiver))return;if(!("getStats"in i.RTCRtpSender.prototype)){const n=i.RTCPeerConnection.prototype.getSenders;n&&(i.RTCPeerConnection.prototype.getSenders=function(){const a=n.apply(this,[]);return a.forEach(o=>o._pc=this),a});const s=i.RTCPeerConnection.prototype.addTrack;s&&(i.RTCPeerConnection.prototype.addTrack=function(){const a=s.apply(this,arguments);return a._pc=this,a}),i.RTCRtpSender.prototype.getStats=function(){const a=this;return this._pc.getStats().then(o=>$u(o,a.track,!0))}}if(!("getStats"in i.RTCRtpReceiver.prototype)){const n=i.RTCPeerConnection.prototype.getReceivers;n&&(i.RTCPeerConnection.prototype.getReceivers=function(){const r=n.apply(this,[]);return r.forEach(a=>a._pc=this),r}),Ss(i,"track",s=>(s.receiver._pc=s.srcElement,s)),i.RTCRtpReceiver.prototype.getStats=function(){const r=this;return this._pc.getStats().then(a=>$u(a,r.track,!1))}}if(!("getStats"in i.RTCRtpSender.prototype&&"getStats"in i.RTCRtpReceiver.prototype))return;const t=i.RTCPeerConnection.prototype.getStats;i.RTCPeerConnection.prototype.getStats=function(){if(arguments.length>0&&arguments[0]instanceof i.MediaStreamTrack){const s=arguments[0];let r,a,o;return this.getSenders().forEach(c=>{c.track===s&&(r?o=!0:r=c)}),this.getReceivers().forEach(c=>(c.track===s&&(a?o=!0:a=c),c.track===s)),o||r&&a?Promise.reject(new DOMException("There are more than one sender or receiver for the track.","InvalidAccessError")):r?r.getStats():a?a.getStats():Promise.reject(new DOMException("There is no sender or receiver for the track.","InvalidAccessError"))}return t.apply(this,arguments)}}function Af(i){i.RTCPeerConnection.prototype.getLocalStreams=function(){return this._shimmedLocalStreams=this._shimmedLocalStreams||{},Object.keys(this._shimmedLocalStreams).map(a=>this._shimmedLocalStreams[a][0])};const e=i.RTCPeerConnection.prototype.addTrack;i.RTCPeerConnection.prototype.addTrack=function(a,o){if(!o)return e.apply(this,arguments);this._shimmedLocalStreams=this._shimmedLocalStreams||{};const c=e.apply(this,arguments);return this._shimmedLocalStreams[o.id]?this._shimmedLocalStreams[o.id].indexOf(c)===-1&&this._shimmedLocalStreams[o.id].push(c):this._shimmedLocalStreams[o.id]=[o,c],c};const t=i.RTCPeerConnection.prototype.addStream;i.RTCPeerConnection.prototype.addStream=function(a){this._shimmedLocalStreams=this._shimmedLocalStreams||{},a.getTracks().forEach(h=>{if(this.getSenders().find(u=>u.track===h))throw new DOMException("Track already exists.","InvalidAccessError")});const o=this.getSenders();t.apply(this,arguments);const c=this.getSenders().filter(h=>o.indexOf(h)===-1);this._shimmedLocalStreams[a.id]=[a].concat(c)};const n=i.RTCPeerConnection.prototype.removeStream;i.RTCPeerConnection.prototype.removeStream=function(a){return this._shimmedLocalStreams=this._shimmedLocalStreams||{},delete this._shimmedLocalStreams[a.id],n.apply(this,arguments)};const s=i.RTCPeerConnection.prototype.removeTrack;i.RTCPeerConnection.prototype.removeTrack=function(a){return this._shimmedLocalStreams=this._shimmedLocalStreams||{},a&&Object.keys(this._shimmedLocalStreams).forEach(o=>{const c=this._shimmedLocalStreams[o].indexOf(a);c!==-1&&this._shimmedLocalStreams[o].splice(c,1),this._shimmedLocalStreams[o].length===1&&delete this._shimmedLocalStreams[o]}),s.apply(this,arguments)}}function Rf(i,e){if(!i.RTCPeerConnection)return;if(i.RTCPeerConnection.prototype.addTrack&&e.version>=65)return Af(i);const t=i.RTCPeerConnection.prototype.getLocalStreams;i.RTCPeerConnection.prototype.getLocalStreams=function(){const l=t.apply(this);return this._reverseStreams=this._reverseStreams||{},l.map(u=>this._reverseStreams[u.id])};const n=i.RTCPeerConnection.prototype.addStream;i.RTCPeerConnection.prototype.addStream=function(l){if(this._streams=this._streams||{},this._reverseStreams=this._reverseStreams||{},l.getTracks().forEach(u=>{if(this.getSenders().find(f=>f.track===u))throw new DOMException("Track already exists.","InvalidAccessError")}),!this._reverseStreams[l.id]){const u=new i.MediaStream(l.getTracks());this._streams[l.id]=u,this._reverseStreams[u.id]=l,l=u}n.apply(this,[l])};const s=i.RTCPeerConnection.prototype.removeStream;i.RTCPeerConnection.prototype.removeStream=function(l){this._streams=this._streams||{},this._reverseStreams=this._reverseStreams||{},s.apply(this,[this._streams[l.id]||l]),delete this._reverseStreams[this._streams[l.id]?this._streams[l.id].id:l.id],delete this._streams[l.id]},i.RTCPeerConnection.prototype.addTrack=function(l,u){if(this.signalingState==="closed")throw new DOMException("The RTCPeerConnection's signalingState is 'closed'.","InvalidStateError");const d=[].slice.call(arguments,1);if(d.length!==1||!d[0].getTracks().find(g=>g===l))throw new DOMException("The adapter.js addTrack polyfill only supports a single  stream which is associated with the specified track.","NotSupportedError");if(this.getSenders().find(g=>g.track===l))throw new DOMException("Track already exists.","InvalidAccessError");this._streams=this._streams||{},this._reverseStreams=this._reverseStreams||{};const m=this._streams[u.id];if(m)m.addTrack(l),Promise.resolve().then(()=>{this.dispatchEvent(new Event("negotiationneeded"))});else{const g=new i.MediaStream([l]);this._streams[u.id]=g,this._reverseStreams[g.id]=u,this.addStream(g)}return this.getSenders().find(g=>g.track===l)};function r(h,l){let u=l.sdp;return Object.keys(h._reverseStreams||[]).forEach(d=>{const f=h._reverseStreams[d],m=h._streams[f.id];u=u.replace(new RegExp(m.id,"g"),f.id)}),new RTCSessionDescription({type:l.type,sdp:u})}function a(h,l){let u=l.sdp;return Object.keys(h._reverseStreams||[]).forEach(d=>{const f=h._reverseStreams[d],m=h._streams[f.id];u=u.replace(new RegExp(f.id,"g"),m.id)}),new RTCSessionDescription({type:l.type,sdp:u})}["createOffer","createAnswer"].forEach(function(h){const l=i.RTCPeerConnection.prototype[h],u={[h](){const d=arguments;return arguments.length&&typeof arguments[0]=="function"?l.apply(this,[m=>{const g=r(this,m);d[0].apply(null,[g])},m=>{d[1]&&d[1].apply(null,m)},arguments[2]]):l.apply(this,arguments).then(m=>r(this,m))}};i.RTCPeerConnection.prototype[h]=u[h]});const o=i.RTCPeerConnection.prototype.setLocalDescription;i.RTCPeerConnection.prototype.setLocalDescription=function(){return!arguments.length||!arguments[0].type?o.apply(this,arguments):(arguments[0]=a(this,arguments[0]),o.apply(this,arguments))};const c=Object.getOwnPropertyDescriptor(i.RTCPeerConnection.prototype,"localDescription");Object.defineProperty(i.RTCPeerConnection.prototype,"localDescription",{get(){const h=c.get.apply(this);return h.type===""?h:r(this,h)}}),i.RTCPeerConnection.prototype.removeTrack=function(l){if(this.signalingState==="closed")throw new DOMException("The RTCPeerConnection's signalingState is 'closed'.","InvalidStateError");if(!l._pc)throw new DOMException("Argument 1 of RTCPeerConnection.removeTrack does not implement interface RTCRtpSender.","TypeError");if(!(l._pc===this))throw new DOMException("Sender was not created by this connection.","InvalidAccessError");this._streams=this._streams||{};let d;Object.keys(this._streams).forEach(f=>{this._streams[f].getTracks().find(g=>l.track===g)&&(d=this._streams[f])}),d&&(d.getTracks().length===1?this.removeStream(this._reverseStreams[d.id]):d.removeTrack(l.track),this.dispatchEvent(new Event("negotiationneeded")))}}function Tl(i,e){!i.RTCPeerConnection&&i.webkitRTCPeerConnection&&(i.RTCPeerConnection=i.webkitRTCPeerConnection),i.RTCPeerConnection&&e.version<53&&["setLocalDescription","setRemoteDescription","addIceCandidate"].forEach(function(t){const n=i.RTCPeerConnection.prototype[t],s={[t](){return arguments[0]=new(t==="addIceCandidate"?i.RTCIceCandidate:i.RTCSessionDescription)(arguments[0]),n.apply(this,arguments)}};i.RTCPeerConnection.prototype[t]=s[t]})}function wf(i,e){e.version>102||Ss(i,"negotiationneeded",t=>{const n=t.target;if(!((e.version<72||n.getConfiguration&&n.getConfiguration().sdpSemantics==="plan-b")&&n.signalingState!=="stable"))return t})}const Yu=Object.freeze(Object.defineProperty({__proto__:null,fixNegotiationNeeded:wf,shimAddTrackRemoveTrack:Rf,shimAddTrackRemoveTrackWithNative:Af,shimGetSendersWithDtmf:Tf,shimGetUserMedia:Mf,shimMediaStream:bf,shimOnTrack:Ef,shimPeerConnection:Tl,shimSenderReceiverGetStats:Cf},Symbol.toStringTag,{value:"Module"}));function Pf(i,e){const t=i&&i.navigator;if(!t.mediaDevices)return;const n=i&&i.MediaStreamTrack;if(t.getUserMedia=function(s,r,a){lh("navigator.getUserMedia","navigator.mediaDevices.getUserMedia"),t.mediaDevices.getUserMedia(s).then(r,a)},!(e.version>55&&"autoGainControl"in t.mediaDevices.getSupportedConstraints())){const s=function(a,o,c){o in a&&!(c in a)&&(a[c]=a[o],delete a[o])},r=t.mediaDevices.getUserMedia.bind(t.mediaDevices);if(t.mediaDevices.getUserMedia=function(a){return typeof a=="object"&&typeof a.audio=="object"&&(a=JSON.parse(JSON.stringify(a)),s(a.audio,"autoGainControl","mozAutoGainControl"),s(a.audio,"noiseSuppression","mozNoiseSuppression")),r(a)},n&&n.prototype.getSettings){const a=n.prototype.getSettings;n.prototype.getSettings=function(){const o=a.apply(this,arguments);return s(o,"mozAutoGainControl","autoGainControl"),s(o,"mozNoiseSuppression","noiseSuppression"),o}}if(n&&n.prototype.applyConstraints){const a=n.prototype.applyConstraints;n.prototype.applyConstraints=function(o){return this.kind==="audio"&&typeof o=="object"&&(o=JSON.parse(JSON.stringify(o)),s(o,"autoGainControl","mozAutoGainControl"),s(o,"noiseSuppression","mozNoiseSuppression")),a.apply(this,[o])}}}}function bS(i,e){i.navigator.mediaDevices&&(i.navigator.mediaDevices&&"getDisplayMedia"in i.navigator.mediaDevices||(i.navigator.mediaDevices.getDisplayMedia=function(n){if(!(n&&n.video)){const s=new DOMException("getDisplayMedia without video constraints is undefined");return s.name="NotFoundError",s.code=8,Promise.reject(s)}return n.video===!0?n.video={mediaSource:e}:n.video.mediaSource=e,i.navigator.mediaDevices.getUserMedia(n)}))}function Lf(i){typeof i=="object"&&i.RTCTrackEvent&&"receiver"in i.RTCTrackEvent.prototype&&!("transceiver"in i.RTCTrackEvent.prototype)&&Object.defineProperty(i.RTCTrackEvent.prototype,"transceiver",{get(){return{receiver:this.receiver}}})}function Cl(i,e){typeof i!="object"||!(i.RTCPeerConnection||i.mozRTCPeerConnection)||(!i.RTCPeerConnection&&i.mozRTCPeerConnection&&(i.RTCPeerConnection=i.mozRTCPeerConnection),e.version<53&&["setLocalDescription","setRemoteDescription","addIceCandidate"].forEach(function(t){const n=i.RTCPeerConnection.prototype[t],s={[t](){return arguments[0]=new(t==="addIceCandidate"?i.RTCIceCandidate:i.RTCSessionDescription)(arguments[0]),n.apply(this,arguments)}};i.RTCPeerConnection.prototype[t]=s[t]}))}function If(i,e){if(typeof i!="object"||!(i.RTCPeerConnection||i.mozRTCPeerConnection)||e.version>=151)return;const t={inboundrtp:"inbound-rtp",outboundrtp:"outbound-rtp",candidatepair:"candidate-pair",localcandidate:"local-candidate",remotecandidate:"remote-candidate"},n=i.RTCPeerConnection.prototype.getStats;i.RTCPeerConnection.prototype.getStats=function(){const[r,a,o]=arguments;return this.signalingState==="closed"?Promise.resolve(new Map):n.apply(this,[r||null]).then(c=>{if(e.version<53&&!a)try{c.forEach(h=>{h.type=t[h.type]||h.type})}catch(h){if(h.name!=="TypeError")throw h;c.forEach((l,u)=>{c.set(u,Object.assign({},l,{type:t[l.type]||l.type}))})}return c}).then(a,o)}}function Df(i){if(!(typeof i=="object"&&i.RTCPeerConnection&&i.RTCRtpSender)||i.RTCRtpSender&&"getStats"in i.RTCRtpSender.prototype)return;const e=i.RTCPeerConnection.prototype.getSenders;e&&(i.RTCPeerConnection.prototype.getSenders=function(){const s=e.apply(this,[]);return s.forEach(r=>r._pc=this),s});const t=i.RTCPeerConnection.prototype.addTrack;t&&(i.RTCPeerConnection.prototype.addTrack=function(){const s=t.apply(this,arguments);return s._pc=this,s}),i.RTCRtpSender.prototype.getStats=function(){return this.track?this._pc.getStats(this.track):Promise.resolve(new Map)}}function Uf(i){if(!(typeof i=="object"&&i.RTCPeerConnection&&i.RTCRtpSender)||i.RTCRtpSender&&"getStats"in i.RTCRtpReceiver.prototype)return;const e=i.RTCPeerConnection.prototype.getReceivers;e&&(i.RTCPeerConnection.prototype.getReceivers=function(){const n=e.apply(this,[]);return n.forEach(s=>s._pc=this),n}),Ss(i,"track",t=>(t.receiver._pc=t.srcElement,t)),i.RTCRtpReceiver.prototype.getStats=function(){return this._pc.getStats(this.track)}}function Nf(i){!i.RTCPeerConnection||"removeStream"in i.RTCPeerConnection.prototype||(i.RTCPeerConnection.prototype.removeStream=function(t){lh("removeStream","removeTrack"),this.getSenders().forEach(n=>{n.track&&t.getTracks().includes(n.track)&&this.removeTrack(n)})})}function Of(i){i.DataChannel&&!i.RTCDataChannel&&(i.RTCDataChannel=i.DataChannel)}function Ff(i,e){if(!(typeof i=="object"&&i.RTCPeerConnection)||e.version>=110)return;const t=i.RTCPeerConnection.prototype.addTransceiver;t&&(i.RTCPeerConnection.prototype.addTransceiver=function(){this.setParametersPromises=[];let s=arguments[1]&&arguments[1].sendEncodings;s===void 0&&(s=[]),s=[...s];const r=s.length>0;r&&s.forEach(o=>{if("rid"in o&&!/^[a-z0-9]{0,16}$/i.test(o.rid))throw new TypeError("Invalid RID value provided.");if("scaleResolutionDownBy"in o&&!(parseFloat(o.scaleResolutionDownBy)>=1))throw new RangeError("scale_resolution_down_by must be >= 1.0");if("maxFramerate"in o&&!(parseFloat(o.maxFramerate)>=0))throw new RangeError("max_framerate must be >= 0.0")});const a=t.apply(this,arguments);if(r){const{sender:o}=a,c=o.getParameters();(!("encodings"in c)||c.encodings.length===1&&Object.keys(c.encodings[0]).length===0)&&(c.encodings=s,o.sendEncodings=s,this.setParametersPromises.push(o.setParameters(c).then(()=>{delete o.sendEncodings}).catch(()=>{delete o.sendEncodings})))}return a})}function Bf(i,e){if(!(typeof i=="object"&&i.RTCRtpSender)||e.version>=110)return;const t=i.RTCRtpSender.prototype.getParameters;t&&(i.RTCRtpSender.prototype.getParameters=function(){const s=t.apply(this,arguments);return"encodings"in s||(s.encodings=[].concat(this.sendEncodings||[{}])),s})}function kf(i,e){if(!(typeof i=="object"&&i.RTCPeerConnection)||e.version>=110)return;const t=i.RTCPeerConnection.prototype.createOffer;i.RTCPeerConnection.prototype.createOffer=function(){return this.setParametersPromises&&this.setParametersPromises.length?Promise.all(this.setParametersPromises).then(()=>t.apply(this,arguments)).finally(()=>{this.setParametersPromises=[]}):t.apply(this,arguments)}}function zf(i,e){if(!(typeof i=="object"&&i.RTCPeerConnection)||e.version>=110)return;const t=i.RTCPeerConnection.prototype.createAnswer;i.RTCPeerConnection.prototype.createAnswer=function(){return this.setParametersPromises&&this.setParametersPromises.length?Promise.all(this.setParametersPromises).then(()=>t.apply(this,arguments)).finally(()=>{this.setParametersPromises=[]}):t.apply(this,arguments)}}const ju=Object.freeze(Object.defineProperty({__proto__:null,shimAddTransceiver:Ff,shimCreateAnswer:zf,shimCreateOffer:kf,shimGetDisplayMedia:bS,shimGetParameters:Bf,shimGetStats:If,shimGetUserMedia:Pf,shimOnTrack:Lf,shimPeerConnection:Cl,shimRTCDataChannel:Of,shimReceiverGetStats:Uf,shimRemoveStream:Nf,shimSenderGetStats:Df},Symbol.toStringTag,{value:"Module"}));function Gf(i){if(!(typeof i!="object"||!i.RTCPeerConnection)){if("getLocalStreams"in i.RTCPeerConnection.prototype||(i.RTCPeerConnection.prototype.getLocalStreams=function(){return this._localStreams||(this._localStreams=[]),this._localStreams}),!("addStream"in i.RTCPeerConnection.prototype)){const e=i.RTCPeerConnection.prototype.addTrack;i.RTCPeerConnection.prototype.addStream=function(n){this._localStreams||(this._localStreams=[]),this._localStreams.includes(n)||this._localStreams.push(n),n.getAudioTracks().forEach(s=>e.call(this,s,n)),n.getVideoTracks().forEach(s=>e.call(this,s,n))},i.RTCPeerConnection.prototype.addTrack=function(n,...s){return s&&s.forEach(r=>{this._localStreams?this._localStreams.includes(r)||this._localStreams.push(r):this._localStreams=[r]}),e.apply(this,arguments)}}"removeStream"in i.RTCPeerConnection.prototype||(i.RTCPeerConnection.prototype.removeStream=function(t){this._localStreams||(this._localStreams=[]);const n=this._localStreams.indexOf(t);if(n===-1)return;this._localStreams.splice(n,1);const s=t.getTracks();this.getSenders().forEach(r=>{s.includes(r.track)&&this.removeTrack(r)})})}}function Vf(i){if(!(typeof i!="object"||!i.RTCPeerConnection)&&("getRemoteStreams"in i.RTCPeerConnection.prototype||(i.RTCPeerConnection.prototype.getRemoteStreams=function(){return this._remoteStreams?this._remoteStreams:[]}),!("onaddstream"in i.RTCPeerConnection.prototype))){Object.defineProperty(i.RTCPeerConnection.prototype,"onaddstream",{get(){return this._onaddstream},set(t){this._onaddstream&&(this.removeEventListener("addstream",this._onaddstream),this.removeEventListener("track",this._onaddstreampoly)),this.addEventListener("addstream",this._onaddstream=t),this.addEventListener("track",this._onaddstreampoly=n=>{n.streams.forEach(s=>{if(this._remoteStreams||(this._remoteStreams=[]),this._remoteStreams.includes(s))return;this._remoteStreams.push(s);const r=new Event("addstream");r.stream=s,this.dispatchEvent(r)})})}});const e=i.RTCPeerConnection.prototype.setRemoteDescription;i.RTCPeerConnection.prototype.setRemoteDescription=function(){const n=this;return this._onaddstreampoly||this.addEventListener("track",this._onaddstreampoly=function(s){s.streams.forEach(r=>{if(n._remoteStreams||(n._remoteStreams=[]),n._remoteStreams.indexOf(r)>=0)return;n._remoteStreams.push(r);const a=new Event("addstream");a.stream=r,n.dispatchEvent(a)})}),e.apply(n,arguments)}}}function Hf(i){if(typeof i!="object"||!i.RTCPeerConnection)return;const e=i.RTCPeerConnection.prototype,t=e.createOffer,n=e.createAnswer,s=e.setLocalDescription,r=e.setRemoteDescription,a=e.addIceCandidate;e.createOffer=function(h,l){const u=arguments.length>=2?arguments[2]:arguments[0],d=t.apply(this,[u]);return l?(d.then(h,l),Promise.resolve()):d},e.createAnswer=function(h,l){const u=arguments.length>=2?arguments[2]:arguments[0],d=n.apply(this,[u]);return l?(d.then(h,l),Promise.resolve()):d};let o=function(c,h,l){const u=s.apply(this,[c]);return l?(u.then(h,l),Promise.resolve()):u};e.setLocalDescription=o,o=function(c,h,l){const u=r.apply(this,[c]);return l?(u.then(h,l),Promise.resolve()):u},e.setRemoteDescription=o,o=function(c,h,l){const u=a.apply(this,[c]);return l?(u.then(h,l),Promise.resolve()):u},e.addIceCandidate=o}function Wf(i){const e=i&&i.navigator;if(e.mediaDevices&&e.mediaDevices.getUserMedia){const t=e.mediaDevices,n=t.getUserMedia.bind(t);e.mediaDevices.getUserMedia=s=>n(Xf(s))}!e.getUserMedia&&e.mediaDevices&&e.mediaDevices.getUserMedia&&(e.getUserMedia=(function(n,s,r){e.mediaDevices.getUserMedia(n).then(s,r)}).bind(e))}function Xf(i){return i&&i.video!==void 0?Object.assign({},i,{video:Sf(i.video)}):i}function $f(i){if(!i.RTCPeerConnection)return;const e=i.RTCPeerConnection;i.RTCPeerConnection=function(n,s){if(n&&n.iceServers){const r=[];for(let a=0;a<n.iceServers.length;a++){let o=n.iceServers[a];o.urls===void 0&&o.url?(lh("RTCIceServer.url","RTCIceServer.urls"),o=JSON.parse(JSON.stringify(o)),o.urls=o.url,delete o.url,r.push(o)):r.push(n.iceServers[a])}n.iceServers=r}return new e(n,s)},i.RTCPeerConnection.prototype=e.prototype,"generateCertificate"in e&&Object.defineProperty(i.RTCPeerConnection,"generateCertificate",{get(){return e.generateCertificate}})}function qf(i){typeof i=="object"&&i.RTCTrackEvent&&"receiver"in i.RTCTrackEvent.prototype&&!("transceiver"in i.RTCTrackEvent.prototype)&&Object.defineProperty(i.RTCTrackEvent.prototype,"transceiver",{get(){return{receiver:this.receiver}}})}function Yf(i){const e=i.RTCPeerConnection.prototype.createOffer;i.RTCPeerConnection.prototype.createOffer=function(n){if(n){typeof n.offerToReceiveAudio<"u"&&(n.offerToReceiveAudio=!!n.offerToReceiveAudio);const s=this.getTransceivers().find(a=>a.receiver.track.kind==="audio");n.offerToReceiveAudio===!1&&s?s.direction==="sendrecv"?s.setDirection?s.setDirection("sendonly"):s.direction="sendonly":s.direction==="recvonly"&&(s.setDirection?s.setDirection("inactive"):s.direction="inactive"):n.offerToReceiveAudio===!0&&!s&&this.addTransceiver("audio",{direction:"recvonly"}),typeof n.offerToReceiveVideo<"u"&&(n.offerToReceiveVideo=!!n.offerToReceiveVideo);const r=this.getTransceivers().find(a=>a.receiver.track.kind==="video");n.offerToReceiveVideo===!1&&r?r.direction==="sendrecv"?r.setDirection?r.setDirection("sendonly"):r.direction="sendonly":r.direction==="recvonly"&&(r.setDirection?r.setDirection("inactive"):r.direction="inactive"):n.offerToReceiveVideo===!0&&!r&&this.addTransceiver("video",{direction:"recvonly"})}return e.apply(this,arguments)}}function jf(i){typeof i!="object"||i.AudioContext||(i.AudioContext=i.webkitAudioContext)}const Ku=Object.freeze(Object.defineProperty({__proto__:null,shimAudioContext:jf,shimCallbacksAPI:Hf,shimConstraints:Xf,shimCreateOfferLegacy:Yf,shimGetUserMedia:Wf,shimLocalStreamsAPI:Gf,shimRTCIceServerUrls:$f,shimRemoteStreamsAPI:Vf,shimTrackEventTransceiver:qf},Symbol.toStringTag,{value:"Module"}));function ES(i){return i&&i.__esModule&&Object.prototype.hasOwnProperty.call(i,"default")?i.default:i}var fc={exports:{}},Ju;function TS(){return Ju||(Ju=1,(function(i){const e={};e.generateIdentifier=function(){return Math.random().toString(36).substring(2,12)},e.localCName=e.generateIdentifier(),e.splitLines=function(t){return t.trim().split(`
`).map(n=>n.trim())},e.splitSections=function(t){return t.split(`
m=`).map((s,r)=>(r>0?"m="+s:s).trim()+`\r
`)},e.getDescription=function(t){const n=e.splitSections(t);return n&&n[0]},e.getMediaSections=function(t){const n=e.splitSections(t);return n.shift(),n},e.matchPrefix=function(t,n){return e.splitLines(t).filter(s=>s.indexOf(n)===0)},e.parseCandidate=function(t){let n;t.indexOf("a=candidate:")===0?n=t.substring(12).split(" "):n=t.substring(10).split(" ");const s={foundation:n[0],component:{1:"rtp",2:"rtcp"}[n[1]]||n[1],protocol:n[2].toLowerCase(),priority:parseInt(n[3],10),ip:n[4],address:n[4],port:parseInt(n[5],10),type:n[7]};for(let r=8;r<n.length;r+=2)switch(n[r]){case"raddr":s.relatedAddress=n[r+1];break;case"rport":s.relatedPort=parseInt(n[r+1],10);break;case"tcptype":s.tcpType=n[r+1];break;case"ufrag":s.ufrag=n[r+1],s.usernameFragment=n[r+1];break;default:s[n[r]]===void 0&&(s[n[r]]=n[r+1]);break}return s},e.writeCandidate=function(t){const n=[];n.push(t.foundation);const s=t.component;s==="rtp"?n.push(1):s==="rtcp"?n.push(2):n.push(s),n.push(t.protocol.toUpperCase()),n.push(t.priority),n.push(t.address||t.ip),n.push(t.port);const r=t.type;return n.push("typ"),n.push(r),r!=="host"&&t.relatedAddress&&t.relatedPort!==void 0&&(n.push("raddr"),n.push(t.relatedAddress),n.push("rport"),n.push(t.relatedPort)),t.tcpType&&t.protocol.toLowerCase()==="tcp"&&(n.push("tcptype"),n.push(t.tcpType)),(t.usernameFragment||t.ufrag)&&(n.push("ufrag"),n.push(t.usernameFragment||t.ufrag)),"candidate:"+n.join(" ")},e.parseIceOptions=function(t){return t.substring(14).split(" ")},e.parseRtpMap=function(t){let n=t.substring(9).split(" ");const s={payloadType:parseInt(n.shift(),10)};return n=n[0].split("/"),s.name=n[0],s.clockRate=parseInt(n[1],10),s.channels=n.length===3?parseInt(n[2],10):1,s.numChannels=s.channels,s},e.writeRtpMap=function(t){let n=t.payloadType;t.preferredPayloadType!==void 0&&(n=t.preferredPayloadType);const s=t.channels||t.numChannels||1;return"a=rtpmap:"+n+" "+t.name+"/"+t.clockRate+(s!==1?"/"+s:"")+`\r
`},e.parseExtmap=function(t){const n=t.substring(9).split(" ");return{id:parseInt(n[0],10),direction:n[0].indexOf("/")>0?n[0].split("/")[1]:"sendrecv",uri:n[1],attributes:n.slice(2).join(" ")}},e.writeExtmap=function(t){return"a=extmap:"+(t.id||t.preferredId)+(t.direction&&t.direction!=="sendrecv"?"/"+t.direction:"")+" "+t.uri+(t.attributes?" "+t.attributes:"")+`\r
`},e.parseFmtp=function(t){const n={},s=t.substring(t.indexOf(" ")+1).split(";");for(let r=0;r<s.length;r++){const[a,...o]=s[r].trim().split("=");n[a.trim()]=o.length?o.join("="):void 0}return n},e.writeFmtp=function(t){let n="",s=t.payloadType;if(t.preferredPayloadType!==void 0&&(s=t.preferredPayloadType),t.parameters&&Object.keys(t.parameters).length){const r=[];Object.keys(t.parameters).forEach(a=>{t.parameters[a]!==void 0?r.push(a+"="+t.parameters[a]):r.push(a)}),n+="a=fmtp:"+s+" "+r.join(";")+`\r
`}return n},e.parseRtcpFb=function(t){const n=t.substring(t.indexOf(" ")+1).split(" ");return{type:n.shift(),parameter:n.join(" ")}},e.writeRtcpFb=function(t){let n="",s=t.payloadType;return t.preferredPayloadType!==void 0&&(s=t.preferredPayloadType),t.rtcpFeedback&&t.rtcpFeedback.length&&t.rtcpFeedback.forEach(r=>{n+="a=rtcp-fb:"+s+" "+r.type+(r.parameter&&r.parameter.length?" "+r.parameter:"")+`\r
`}),n},e.parseSsrcMedia=function(t){const n=t.indexOf(" "),s={ssrc:parseInt(t.substring(7,n),10)},r=t.indexOf(":",n);return r>-1?(s.attribute=t.substring(n+1,r),s.value=t.substring(r+1)):s.attribute=t.substring(n+1),s},e.parseSsrcGroup=function(t){const n=t.substring(13).split(" ");return{semantics:n.shift(),ssrcs:n.map(s=>parseInt(s,10))}},e.getMid=function(t){const n=e.matchPrefix(t,"a=mid:")[0];if(n)return n.substring(6)},e.parseFingerprint=function(t){const n=t.substring(14).split(" ");return{algorithm:n[0].toLowerCase(),value:n[1].toUpperCase()}},e.getDtlsParameters=function(t,n){return{role:"auto",fingerprints:e.matchPrefix(t+n,"a=fingerprint:").map(e.parseFingerprint)}},e.writeDtlsParameters=function(t,n){let s="a=setup:"+n+`\r
`;return t.fingerprints.forEach(r=>{s+="a=fingerprint:"+r.algorithm+" "+r.value+`\r
`}),s},e.parseCryptoLine=function(t){const n=t.substring(9).split(" ");return{tag:parseInt(n[0],10),cryptoSuite:n[1],keyParams:n[2],sessionParams:n.slice(3)}},e.writeCryptoLine=function(t){return"a=crypto:"+t.tag+" "+t.cryptoSuite+" "+(typeof t.keyParams=="object"?e.writeCryptoKeyParams(t.keyParams):t.keyParams)+(t.sessionParams?" "+t.sessionParams.join(" "):"")+`\r
`},e.parseCryptoKeyParams=function(t){if(t.indexOf("inline:")!==0)return null;const n=t.substring(7).split("|");return{keyMethod:"inline",keySalt:n[0],lifeTime:n[1],mkiValue:n[2]?n[2].split(":")[0]:void 0,mkiLength:n[2]?n[2].split(":")[1]:void 0}},e.writeCryptoKeyParams=function(t){return t.keyMethod+":"+t.keySalt+(t.lifeTime?"|"+t.lifeTime:"")+(t.mkiValue&&t.mkiLength?"|"+t.mkiValue+":"+t.mkiLength:"")},e.getCryptoParameters=function(t,n){return e.matchPrefix(t+n,"a=crypto:").map(e.parseCryptoLine)},e.getIceParameters=function(t,n){const s=e.matchPrefix(t+n,"a=ice-ufrag:")[0],r=e.matchPrefix(t+n,"a=ice-pwd:")[0];return s&&r?{usernameFragment:s.substring(12),password:r.substring(10)}:null},e.writeIceParameters=function(t){let n="a=ice-ufrag:"+t.usernameFragment+`\r
a=ice-pwd:`+t.password+`\r
`;return t.iceLite&&(n+=`a=ice-lite\r
`),n},e.parseRtpParameters=function(t){const n={codecs:[],headerExtensions:[],fecMechanisms:[],rtcp:[]},r=e.splitLines(t)[0].split(" ");n.profile=r[2];for(let o=3;o<r.length;o++){const c=r[o],h=e.matchPrefix(t,"a=rtpmap:"+c+" ")[0];if(h){const l=e.parseRtpMap(h),u=e.matchPrefix(t,"a=fmtp:"+c+" ");switch(l.parameters=u.length?e.parseFmtp(u[0]):{},l.rtcpFeedback=e.matchPrefix(t,"a=rtcp-fb:"+c+" ").map(e.parseRtcpFb),n.codecs.push(l),l.name.toUpperCase()){case"RED":case"ULPFEC":n.fecMechanisms.push(l.name.toUpperCase());break}}}e.matchPrefix(t,"a=extmap:").forEach(o=>{n.headerExtensions.push(e.parseExtmap(o))});const a=e.matchPrefix(t,"a=rtcp-fb:* ").map(e.parseRtcpFb);return n.codecs.forEach(o=>{a.forEach(c=>{o.rtcpFeedback.find(l=>l.type===c.type&&l.parameter===c.parameter)||o.rtcpFeedback.push(c)})}),n},e.writeRtpDescription=function(t,n){let s="";s+="m="+t+" ",s+=n.codecs.length>0?"9":"0",s+=" "+(n.profile||"UDP/TLS/RTP/SAVPF")+" ",s+=n.codecs.map(a=>a.preferredPayloadType!==void 0?a.preferredPayloadType:a.payloadType).join(" ")+`\r
`,s+=`c=IN IP4 0.0.0.0\r
`,s+=`a=rtcp:9 IN IP4 0.0.0.0\r
`,n.codecs.forEach(a=>{s+=e.writeRtpMap(a),s+=e.writeFmtp(a),s+=e.writeRtcpFb(a)});let r=0;return n.codecs.forEach(a=>{a.maxptime>r&&(r=a.maxptime)}),r>0&&(s+="a=maxptime:"+r+`\r
`),n.headerExtensions&&n.headerExtensions.forEach(a=>{s+=e.writeExtmap(a)}),s},e.parseRtpEncodingParameters=function(t){const n=[],s=e.parseRtpParameters(t),r=s.fecMechanisms.indexOf("RED")!==-1,a=s.fecMechanisms.indexOf("ULPFEC")!==-1,o=e.matchPrefix(t,"a=ssrc:").map(d=>e.parseSsrcMedia(d)).filter(d=>d.attribute==="cname"),c=o.length>0&&o[0].ssrc;let h;const l=e.matchPrefix(t,"a=ssrc-group:FID").map(d=>d.substring(17).split(" ").map(m=>parseInt(m,10)));l.length>0&&l[0].length>1&&l[0][0]===c&&(h=l[0][1]),s.codecs.forEach(d=>{if(d.name.toUpperCase()==="RTX"&&d.parameters.apt){let f={ssrc:c,codecPayloadType:parseInt(d.parameters.apt,10)};c&&h&&(f.rtx={ssrc:h}),n.push(f),r&&(f=JSON.parse(JSON.stringify(f)),f.fec={ssrc:c,mechanism:a?"red+ulpfec":"red"},n.push(f))}}),n.length===0&&c&&n.push({ssrc:c});let u=e.matchPrefix(t,"b=");return u.length&&(u[0].indexOf("b=TIAS:")===0?u=parseInt(u[0].substring(7),10):u[0].indexOf("b=AS:")===0?u=parseInt(u[0].substring(5),10)*1e3*.95-2e3*8:u=void 0,n.forEach(d=>{d.maxBitrate=u})),n},e.parseRtcpParameters=function(t){const n={},s=e.matchPrefix(t,"a=ssrc:").map(o=>e.parseSsrcMedia(o)).filter(o=>o.attribute==="cname")[0];s&&(n.cname=s.value,n.ssrc=s.ssrc);const r=e.matchPrefix(t,"a=rtcp-rsize");n.reducedSize=r.length>0,n.compound=r.length===0;const a=e.matchPrefix(t,"a=rtcp-mux");return n.mux=a.length>0,n},e.writeRtcpParameters=function(t){let n="";return t.reducedSize&&(n+=`a=rtcp-rsize\r
`),t.mux&&(n+=`a=rtcp-mux\r
`),t.ssrc!==void 0&&t.cname&&(n+="a=ssrc:"+t.ssrc+" cname:"+t.cname+`\r
`),n},e.parseMsid=function(t){let n;const s=e.matchPrefix(t,"a=msid:");if(s.length===1)return n=s[0].substring(7).split(" "),{stream:n[0],track:n[1]};const r=e.matchPrefix(t,"a=ssrc:").map(a=>e.parseSsrcMedia(a)).filter(a=>a.attribute==="msid");if(r.length>0)return n=r[0].value.split(" "),{stream:n[0],track:n[1]}},e.parseSctpDescription=function(t){const n=e.parseMLine(t),s=e.matchPrefix(t,"a=max-message-size:");let r;s.length>0&&(r=parseInt(s[0].substring(19),10)),isNaN(r)&&(r=65536);const a=e.matchPrefix(t,"a=sctp-port:");if(a.length>0)return{port:parseInt(a[0].substring(12),10),protocol:n.fmt,maxMessageSize:r};const o=e.matchPrefix(t,"a=sctpmap:");if(o.length>0){const c=o[0].substring(10).split(" ");return{port:parseInt(c[0],10),protocol:c[1],maxMessageSize:r}}},e.writeSctpDescription=function(t,n){let s=[];return t.protocol!=="DTLS/SCTP"?s=["m="+t.kind+" 9 "+t.protocol+" "+n.protocol+`\r
`,`c=IN IP4 0.0.0.0\r
`,"a=sctp-port:"+n.port+`\r
`]:s=["m="+t.kind+" 9 "+t.protocol+" "+n.port+`\r
`,`c=IN IP4 0.0.0.0\r
`,"a=sctpmap:"+n.port+" "+n.protocol+` 65535\r
`],n.maxMessageSize!==void 0&&s.push("a=max-message-size:"+n.maxMessageSize+`\r
`),s.join("")},e.generateSessionId=function(){return Math.random().toString().substr(2,22)},e.writeSessionBoilerplate=function(t,n,s){let r;const a=n!==void 0?n:2;return t?r=t:r=e.generateSessionId(),`v=0\r
o=`+(s||"thisisadapterortc")+" "+r+" "+a+` IN IP4 127.0.0.1\r
s=-\r
t=0 0\r
`},e.getDirection=function(t,n){const s=e.splitLines(t);for(let r=0;r<s.length;r++)switch(s[r]){case"a=sendrecv":case"a=sendonly":case"a=recvonly":case"a=inactive":return s[r].substring(2)}return n?e.getDirection(n):"sendrecv"},e.getKind=function(t){return e.splitLines(t)[0].split(" ")[0].substring(2)},e.isRejected=function(t){return t.split(" ",2)[1]==="0"},e.parseMLine=function(t){const s=e.splitLines(t)[0].substring(2).split(" ");return{kind:s[0],port:parseInt(s[1],10),protocol:s[2],fmt:s.slice(3).join(" ")}},e.parseOLine=function(t){const s=e.matchPrefix(t,"o=")[0].substring(2).split(" ");return{username:s[0],sessionId:s[1],sessionVersion:parseInt(s[2],10),netType:s[3],addressType:s[4],address:s[5]}},e.isValidSDP=function(t){if(typeof t!="string"||t.length===0)return!1;const n=e.splitLines(t);for(let s=0;s<n.length;s++)if(n[s].length<2||n[s].charAt(1)!=="=")return!1;return!0},i.exports=e})(fc)),fc.exports}var Kf=TS();const qs=ES(Kf),CS=Qp({__proto__:null,default:qs},[Kf]);function Ba(i){if(!i.RTCIceCandidate||i.RTCIceCandidate&&"foundation"in i.RTCIceCandidate.prototype)return;const e=i.RTCIceCandidate;i.RTCIceCandidate=function(n){if(typeof n=="object"&&n.candidate&&n.candidate.indexOf("a=")===0&&(n=JSON.parse(JSON.stringify(n)),n.candidate=n.candidate.substring(2)),n.candidate&&n.candidate.length){const s=new e(n),r=qs.parseCandidate(n.candidate);for(const a in r)a in s||Object.defineProperty(s,a,{value:r[a]});return s.toJSON=function(){return{candidate:s.candidate,sdpMid:s.sdpMid,sdpMLineIndex:s.sdpMLineIndex,usernameFragment:s.usernameFragment}},s}return new e(n)},i.RTCIceCandidate.prototype=e.prototype,Ss(i,"icecandidate",t=>(t.candidate&&Object.defineProperty(t,"candidate",{value:new i.RTCIceCandidate(t.candidate),writable:"false"}),t))}function Al(i){!i.RTCIceCandidate||i.RTCIceCandidate&&"relayProtocol"in i.RTCIceCandidate.prototype||Ss(i,"icecandidate",e=>{if(e.candidate){const t=qs.parseCandidate(e.candidate.candidate);t.type==="relay"&&(e.candidate.relayProtocol={0:"tls",1:"tcp",2:"udp"}[t.priority>>24])}return e})}function ka(i,e){if(!i.RTCPeerConnection||e.browser==="chrome"&&e.version>102||e.browser==="firefox"&&e.version>=113)return;"sctp"in i.RTCPeerConnection.prototype||Object.defineProperty(i.RTCPeerConnection.prototype,"sctp",{get(){return typeof this._sctp>"u"?null:this._sctp}});const t=function(o){if(!o||!o.sdp)return!1;const c=qs.splitSections(o.sdp);return c.shift(),c.some(h=>{const l=qs.parseMLine(h);return l&&l.kind==="application"&&l.protocol.indexOf("SCTP")!==-1})},n=function(o){const c=o.sdp.match(/mozilla...THIS_IS_SDPARTA-(\d+)/);if(c===null||c.length<2)return-1;const h=parseInt(c[1],10);return h!==h?-1:h},s=function(o){let c=65536;return e.browser==="firefox"&&(e.version<57?o===-1?c=16384:c=2147483637:e.version<60?c=e.version===57?65535:65536:c=2147483637),c},r=function(o,c){let h=65536;e.browser==="firefox"&&e.version===57&&(h=65535);const l=qs.matchPrefix(o.sdp,"a=max-message-size:");return l.length>0?h=parseInt(l[0].substring(19),10):e.browser==="firefox"&&c!==-1&&(h=2147483637),h},a=i.RTCPeerConnection.prototype.setRemoteDescription;i.RTCPeerConnection.prototype.setRemoteDescription=function(){if(this._sctp=null,e.browser==="chrome"&&e.version>=76){const{sdpSemantics:c}=this.getConfiguration();c==="plan-b"&&Object.defineProperty(this,"sctp",{get(){return typeof this._sctp>"u"?null:this._sctp},enumerable:!0,configurable:!0})}if(t(arguments[0])){const c=n(arguments[0]),h=s(c),l=r(arguments[0],c);let u;h===0&&l===0?u=Number.POSITIVE_INFINITY:h===0||l===0?u=Math.max(h,l):u=Math.min(h,l);const d={};Object.defineProperty(d,"maxMessageSize",{get(){return u}}),this._sctp=d}return a.apply(this,arguments)}}function za(i,e){if(!(i.RTCPeerConnection&&"createDataChannel"in i.RTCPeerConnection.prototype)||e.browser==="chrome"&&e.version>=149||e.browser==="firefox"&&e.version>60)return;function t(s,r){const a=s.send;s.send=function(){const c=arguments[0],h=c.length||c.size||c.byteLength;if(s.readyState==="open"&&r.sctp&&h>r.sctp.maxMessageSize)throw new TypeError("Message too large (can send a maximum of "+r.sctp.maxMessageSize+" bytes)");return a.apply(s,arguments)}}const n=i.RTCPeerConnection.prototype.createDataChannel;i.RTCPeerConnection.prototype.createDataChannel=function(){const r=n.apply(this,arguments);return t(r,this),r},Ss(i,"datachannel",s=>(t(s.channel,s.target),s))}function Rl(i){if(!i.RTCPeerConnection||"connectionState"in i.RTCPeerConnection.prototype)return;const e=i.RTCPeerConnection.prototype;Object.defineProperty(e,"connectionState",{get(){return{completed:"connected",checking:"connecting"}[this.iceConnectionState]||this.iceConnectionState},enumerable:!0,configurable:!0}),Object.defineProperty(e,"onconnectionstatechange",{get(){return this._onconnectionstatechange||null},set(t){this._onconnectionstatechange&&(this.removeEventListener("connectionstatechange",this._onconnectionstatechange),delete this._onconnectionstatechange),t&&this.addEventListener("connectionstatechange",this._onconnectionstatechange=t)},enumerable:!0,configurable:!0}),["setLocalDescription","setRemoteDescription"].forEach(t=>{const n=e[t];e[t]=function(){return this._connectionstatechangepoly||(this._connectionstatechangepoly=s=>{const r=s.target;if(r._lastConnectionState!==r.connectionState){r._lastConnectionState=r.connectionState;const a=new Event("connectionstatechange",s);r.dispatchEvent(a)}return s},this.addEventListener("iceconnectionstatechange",this._connectionstatechangepoly)),n.apply(this,arguments)}})}function wl(i,e){if(!i.RTCPeerConnection||e.browser==="chrome"&&e.version>=71||e.browser==="safari"&&e._safariVersion>=13.1)return;const t=i.RTCPeerConnection.prototype.setRemoteDescription;i.RTCPeerConnection.prototype.setRemoteDescription=function(s){if(s&&s.sdp&&s.sdp.indexOf(`
a=extmap-allow-mixed`)!==-1){const r=s.sdp.split(`
`).filter(a=>a.trim()!=="a=extmap-allow-mixed").join(`
`);i.RTCSessionDescription&&s instanceof i.RTCSessionDescription?arguments[0]=new i.RTCSessionDescription({type:s.type,sdp:r}):s.sdp=r}return t.apply(this,arguments)}}function Ga(i,e){if(!(i.RTCPeerConnection&&i.RTCPeerConnection.prototype))return;const t=i.RTCPeerConnection.prototype.addIceCandidate;!t||t.length===0||(i.RTCPeerConnection.prototype.addIceCandidate=function(){return arguments[0]?(e.browser==="chrome"&&e.version<78||e.browser==="firefox"&&e.version<68||e.browser==="safari")&&arguments[0]&&arguments[0].candidate===""?Promise.resolve():t.apply(this,arguments):(arguments[1]&&arguments[1].apply(null),Promise.resolve())})}function Va(i,e){if(!(i.RTCPeerConnection&&i.RTCPeerConnection.prototype))return;const t=i.RTCPeerConnection.prototype.setLocalDescription;!t||t.length===0||(i.RTCPeerConnection.prototype.setLocalDescription=function(){let s=arguments[0]||{};if(typeof s!="object"||s.type&&s.sdp)return t.apply(this,arguments);if(s={type:s.type,sdp:s.sdp},!s.type)switch(this.signalingState){case"stable":case"have-local-offer":case"have-remote-pranswer":s.type="offer";break;default:s.type="answer";break}return s.sdp||s.type!=="offer"&&s.type!=="answer"?t.apply(this,[s]):(s.type==="offer"?this.createOffer:this.createAnswer).apply(this).then(a=>t.apply(this,[a]))})}const AS=Object.freeze(Object.defineProperty({__proto__:null,removeExtmapAllowMixed:wl,shimAddIceCandidateNullOrEmpty:Ga,shimConnectionState:Rl,shimMaxMessageSize:ka,shimParameterlessSetLocalDescription:Va,shimRTCIceCandidate:Ba,shimRTCIceCandidateRelayProtocol:Al,shimSendThrowTypeError:za},Symbol.toStringTag,{value:"Module"}));function RS({window:i}={},e={shimChrome:!0,shimFirefox:!0,shimSafari:!0}){const t=ch,n=MS(i),s={browserDetails:n,commonShim:AS,extractVersion:Er,disableLog:yS,disableWarnings:SS,sdp:CS};switch(n.browser){case"chrome":if(!Yu||!Tl||!e.shimChrome)return t("Chrome shim is not included in this adapter release."),s;if(n.version===null)return t("Chrome shim can not determine version, not shimming."),s;t("adapter.js shimming chrome."),s.browserShim=Yu,Ga(i,n),Va(i),Mf(i,n),bf(i),Tl(i,n),Ef(i,n),Rf(i,n),Tf(i),Cf(i,n),wf(i,n),Ba(i),Al(i),Rl(i),ka(i,n),za(i,n),wl(i,n);break;case"firefox":if(!ju||!Cl||!e.shimFirefox)return t("Firefox shim is not included in this adapter release."),s;t("adapter.js shimming firefox."),s.browserShim=ju,Ga(i,n),Va(i),Pf(i,n),Cl(i,n),If(i,n),Lf(i),Nf(i),Df(i),Uf(i),Of(i),Ff(i,n),Bf(i,n),kf(i,n),zf(i,n),Ba(i),Rl(i),ka(i,n),za(i,n);break;case"safari":if(!Ku||!e.shimSafari)return t("Safari shim is not included in this adapter release."),s;t("adapter.js shimming safari."),s.browserShim=Ku,Ga(i,n),Va(i),$f(i),Yf(i),Hf(i),Gf(i),Vf(i),qf(i),Wf(i),jf(i),Ba(i),Al(i),ka(i,n),za(i,n),wl(i,n);break;default:t("Unsupported browser!");break}return s}const Zu=RS({window:typeof window>"u"?void 0:window});function Ms(i,e,t,n){Object.defineProperty(i,e,{get:t,set:n,enumerable:!0,configurable:!0})}class Jf{constructor(){this.chunkedMTU=16300,this._dataCount=1,this.chunk=e=>{const t=[],n=e.byteLength,s=Math.ceil(n/this.chunkedMTU);let r=0,a=0;for(;a<n;){const o=Math.min(n,a+this.chunkedMTU),c=e.slice(a,o),h={__peerData:this._dataCount,n:r,data:c,total:s};t.push(h),a=o,r++}return this._dataCount++,t}}}function wS(i){let e=0;for(const s of i)e+=s.byteLength;const t=new Uint8Array(e);let n=0;for(const s of i)t.set(s,n),n+=s.byteLength;return t}const pc=Zu.default||Zu,yr=new class{isWebRTCSupported(){return typeof RTCPeerConnection<"u"}isBrowserSupported(){const i=this.getBrowser(),e=this.getVersion();return this.supportedBrowsers.includes(i)?i==="chrome"?e>=this.minChromeVersion:i==="firefox"?e>=this.minFirefoxVersion:i==="safari"?!this.isIOS&&e>=this.minSafariVersion:!1:!1}getBrowser(){return pc.browserDetails.browser}getVersion(){return pc.browserDetails.version||0}isUnifiedPlanSupported(){const i=this.getBrowser(),e=pc.browserDetails.version||0;if(i==="chrome"&&e<this.minChromeVersion)return!1;if(i==="firefox"&&e>=this.minFirefoxVersion)return!0;if(!window.RTCRtpTransceiver||!("currentDirection"in RTCRtpTransceiver.prototype))return!1;let t,n=!1;try{t=new RTCPeerConnection,t.addTransceiver("audio"),n=!0}catch{}finally{t&&t.close()}return n}toString(){return`Supports:
    browser:${this.getBrowser()}
    version:${this.getVersion()}
    isIOS:${this.isIOS}
    isWebRTCSupported:${this.isWebRTCSupported()}
    isBrowserSupported:${this.isBrowserSupported()}
    isUnifiedPlanSupported:${this.isUnifiedPlanSupported()}`}constructor(){this.isIOS=typeof navigator<"u"?["iPad","iPhone","iPod"].includes(navigator.platform):!1,this.supportedBrowsers=["firefox","chrome","safari"],this.minFirefoxVersion=59,this.minChromeVersion=72,this.minSafariVersion=605}},PS=i=>!i||/^[A-Za-z0-9]+(?:[ _-][A-Za-z0-9]+)*$/.test(i),Zf=()=>Math.random().toString(36).slice(2),Qu={iceServers:[{urls:"stun:stun.l.google.com:19302"},{urls:["turn:eu-0.turn.peerjs.com:3478","turn:us-0.turn.peerjs.com:3478"],username:"peerjs",credential:"peerjsp"}],sdpSemantics:"unified-plan"};class LS extends Jf{noop(){}blobToArrayBuffer(e,t){const n=new FileReader;return n.onload=function(s){s.target&&t(s.target.result)},n.readAsArrayBuffer(e),n}binaryStringToArrayBuffer(e){const t=new Uint8Array(e.length);for(let n=0;n<e.length;n++)t[n]=e.charCodeAt(n)&255;return t.buffer}isSecure(){return location.protocol==="https:"}constructor(...e){super(...e),this.CLOUD_HOST="0.peerjs.com",this.CLOUD_PORT=443,this.chunkedBrowsers={Chrome:1,chrome:1},this.defaultConfig=Qu,this.browser=yr.getBrowser(),this.browserVersion=yr.getVersion(),this.pack=_f,this.unpack=gf,this.supports=(function(){const t={browser:yr.isBrowserSupported(),webRTC:yr.isWebRTCSupported(),audioVideo:!1,data:!1,binaryBlob:!1,reliable:!1};if(!t.webRTC)return t;let n;try{n=new RTCPeerConnection(Qu),t.audioVideo=!0;let s;try{s=n.createDataChannel("_PEERJSTEST",{ordered:!0}),t.data=!0,t.reliable=!!s.ordered;try{s.binaryType="blob",t.binaryBlob=!yr.isIOS}catch{}}catch{}finally{s&&s.close()}}catch{}finally{n&&n.close()}return t})(),this.validateId=PS,this.randomToken=Zf}}const fn=new LS,IS="PeerJS: ";class DS{get logLevel(){return this._logLevel}set logLevel(e){this._logLevel=e}log(...e){this._logLevel>=3&&this._print(3,...e)}warn(...e){this._logLevel>=2&&this._print(2,...e)}error(...e){this._logLevel>=1&&this._print(1,...e)}setLogFunction(e){this._print=e}_print(e,...t){const n=[IS,...t];for(const s in n)n[s]instanceof Error&&(n[s]="("+n[s].name+") "+n[s].message);e>=3?console.log(...n):e>=2?console.warn("WARNING",...n):e>=1&&console.error("ERROR",...n)}constructor(){this._logLevel=0}}var Pe=new DS,hh={},US=Object.prototype.hasOwnProperty,on="~";function zr(){}Object.create&&(zr.prototype=Object.create(null),new zr().__proto__||(on=!1));function NS(i,e,t){this.fn=i,this.context=e,this.once=t||!1}function Qf(i,e,t,n,s){if(typeof t!="function")throw new TypeError("The listener must be a function");var r=new NS(t,n||i,s),a=on?on+e:e;return i._events[a]?i._events[a].fn?i._events[a]=[i._events[a],r]:i._events[a].push(r):(i._events[a]=r,i._eventsCount++),i}function Ha(i,e){--i._eventsCount===0?i._events=new zr:delete i._events[e]}function Qt(){this._events=new zr,this._eventsCount=0}Qt.prototype.eventNames=function(){var e=[],t,n;if(this._eventsCount===0)return e;for(n in t=this._events)US.call(t,n)&&e.push(on?n.slice(1):n);return Object.getOwnPropertySymbols?e.concat(Object.getOwnPropertySymbols(t)):e};Qt.prototype.listeners=function(e){var t=on?on+e:e,n=this._events[t];if(!n)return[];if(n.fn)return[n.fn];for(var s=0,r=n.length,a=new Array(r);s<r;s++)a[s]=n[s].fn;return a};Qt.prototype.listenerCount=function(e){var t=on?on+e:e,n=this._events[t];return n?n.fn?1:n.length:0};Qt.prototype.emit=function(e,t,n,s,r,a){var o=on?on+e:e;if(!this._events[o])return!1;var c=this._events[o],h=arguments.length,l,u;if(c.fn){switch(c.once&&this.removeListener(e,c.fn,void 0,!0),h){case 1:return c.fn.call(c.context),!0;case 2:return c.fn.call(c.context,t),!0;case 3:return c.fn.call(c.context,t,n),!0;case 4:return c.fn.call(c.context,t,n,s),!0;case 5:return c.fn.call(c.context,t,n,s,r),!0;case 6:return c.fn.call(c.context,t,n,s,r,a),!0}for(u=1,l=new Array(h-1);u<h;u++)l[u-1]=arguments[u];c.fn.apply(c.context,l)}else{var d=c.length,f;for(u=0;u<d;u++)switch(c[u].once&&this.removeListener(e,c[u].fn,void 0,!0),h){case 1:c[u].fn.call(c[u].context);break;case 2:c[u].fn.call(c[u].context,t);break;case 3:c[u].fn.call(c[u].context,t,n);break;case 4:c[u].fn.call(c[u].context,t,n,s);break;default:if(!l)for(f=1,l=new Array(h-1);f<h;f++)l[f-1]=arguments[f];c[u].fn.apply(c[u].context,l)}}return!0};Qt.prototype.on=function(e,t,n){return Qf(this,e,t,n,!1)};Qt.prototype.once=function(e,t,n){return Qf(this,e,t,n,!0)};Qt.prototype.removeListener=function(e,t,n,s){var r=on?on+e:e;if(!this._events[r])return this;if(!t)return Ha(this,r),this;var a=this._events[r];if(a.fn)a.fn===t&&(!s||a.once)&&(!n||a.context===n)&&Ha(this,r);else{for(var o=0,c=[],h=a.length;o<h;o++)(a[o].fn!==t||s&&!a[o].once||n&&a[o].context!==n)&&c.push(a[o]);c.length?this._events[r]=c.length===1?c[0]:c:Ha(this,r)}return this};Qt.prototype.removeAllListeners=function(e){var t;return e?(t=on?on+e:e,this._events[t]&&Ha(this,t)):(this._events=new zr,this._eventsCount=0),this};Qt.prototype.off=Qt.prototype.removeListener;Qt.prototype.addListener=Qt.prototype.on;Qt.prefixed=on;Qt.EventEmitter=Qt;hh=Qt;var bs={};Ms(bs,"ConnectionType",()=>Gi);Ms(bs,"PeerErrorType",()=>Ft);Ms(bs,"BaseConnectionErrorType",()=>Pl);Ms(bs,"DataConnectionErrorType",()=>uh);Ms(bs,"SerializationType",()=>_o);Ms(bs,"SocketEventType",()=>Fi);Ms(bs,"ServerMessageType",()=>Yt);var Gi=(function(i){return i.Data="data",i.Media="media",i})({}),Ft=(function(i){return i.BrowserIncompatible="browser-incompatible",i.Disconnected="disconnected",i.InvalidID="invalid-id",i.InvalidKey="invalid-key",i.Network="network",i.PeerUnavailable="peer-unavailable",i.SslUnavailable="ssl-unavailable",i.ServerError="server-error",i.SocketError="socket-error",i.SocketClosed="socket-closed",i.UnavailableID="unavailable-id",i.WebRTC="webrtc",i})({}),Pl=(function(i){return i.NegotiationFailed="negotiation-failed",i.ConnectionClosed="connection-closed",i})({}),uh=(function(i){return i.NotOpenYet="not-open-yet",i.MessageToBig="message-too-big",i})({}),_o=(function(i){return i.Binary="binary",i.BinaryUTF8="binary-utf8",i.JSON="json",i.None="raw",i})({}),Fi=(function(i){return i.Message="message",i.Disconnected="disconnected",i.Error="error",i.Close="close",i})({}),Yt=(function(i){return i.Heartbeat="HEARTBEAT",i.Candidate="CANDIDATE",i.Offer="OFFER",i.Answer="ANSWER",i.Open="OPEN",i.Error="ERROR",i.IdTaken="ID-TAKEN",i.InvalidKey="INVALID-KEY",i.Leave="LEAVE",i.Expire="EXPIRE",i})({});const ep="1.5.5";class OS extends hh.EventEmitter{constructor(e,t,n,s,r,a=5e3){super(),this.pingInterval=a,this._disconnected=!0,this._messagesQueue=[];const o=e?"wss://":"ws://";this._baseUrl=o+t+":"+n+s+"peerjs?key="+r}start(e,t){this._id=e;const n=`${this._baseUrl}&id=${e}&token=${t}`;this._socket||!this._disconnected||(this._socket=new WebSocket(n+"&version="+ep),this._disconnected=!1,this._socket.onmessage=s=>{let r;try{r=JSON.parse(s.data),Pe.log("Server message received:",r)}catch{Pe.log("Invalid server message",s.data);return}this.emit(Fi.Message,r)},this._socket.onclose=s=>{this._disconnected||(Pe.log("Socket closed.",s),this._cleanup(),this._disconnected=!0,this.emit(Fi.Disconnected))},this._socket.onopen=()=>{this._disconnected||(this._sendQueuedMessages(),Pe.log("Socket open"),this._scheduleHeartbeat())})}_scheduleHeartbeat(){this._wsPingTimer=setTimeout(()=>{this._sendHeartbeat()},this.pingInterval)}_sendHeartbeat(){if(!this._wsOpen()){Pe.log("Cannot send heartbeat, because socket closed");return}const e=JSON.stringify({type:Yt.Heartbeat});this._socket.send(e),this._scheduleHeartbeat()}_wsOpen(){return!!this._socket&&this._socket.readyState===1}_sendQueuedMessages(){const e=[...this._messagesQueue];this._messagesQueue=[];for(const t of e)this.send(t)}send(e){if(this._disconnected)return;if(!this._id){this._messagesQueue.push(e);return}if(!e.type){this.emit(Fi.Error,"Invalid message");return}if(!this._wsOpen())return;const t=JSON.stringify(e);this._socket.send(t)}close(){this._disconnected||(this._cleanup(),this._disconnected=!0)}_cleanup(){this._socket&&(this._socket.onopen=this._socket.onmessage=this._socket.onclose=null,this._socket.close(),this._socket=void 0),clearTimeout(this._wsPingTimer)}}class tp{constructor(e){this.connection=e}startConnection(e){const t=this._startPeerConnection();if(this.connection.peerConnection=t,this.connection.type===Gi.Media&&e._stream&&this._addTracksToConnection(e._stream,t),e.originator){const n=this.connection,s={ordered:!!e.reliable},r=t.createDataChannel(n.label,s);n._initializeDataChannel(r),this._makeOffer()}else this.handleSDP("OFFER",e.sdp)}_startPeerConnection(){Pe.log("Creating RTCPeerConnection.");const e=new RTCPeerConnection(this.connection.provider.options.config);return this._setupListeners(e),e}_setupListeners(e){const t=this.connection.peer,n=this.connection.connectionId,s=this.connection.type,r=this.connection.provider;Pe.log("Listening for ICE candidates."),e.onicecandidate=a=>{!a.candidate||!a.candidate.candidate||(Pe.log(`Received ICE candidates for ${t}:`,a.candidate),r.socket.send({type:Yt.Candidate,payload:{candidate:a.candidate,type:s,connectionId:n},dst:t}))},e.oniceconnectionstatechange=()=>{switch(e.iceConnectionState){case"failed":Pe.log("iceConnectionState is failed, closing connections to "+t),this.connection.emitError(Pl.NegotiationFailed,"Negotiation of connection to "+t+" failed."),this.connection.close();break;case"closed":Pe.log("iceConnectionState is closed, closing connections to "+t),this.connection.emitError(Pl.ConnectionClosed,"Connection to "+t+" closed."),this.connection.close();break;case"disconnected":Pe.log("iceConnectionState changed to disconnected on the connection with "+t);break;case"completed":e.onicecandidate=()=>{};break}this.connection.emit("iceStateChanged",e.iceConnectionState)},Pe.log("Listening for data channel"),e.ondatachannel=a=>{Pe.log("Received data channel");const o=a.channel;r.getConnection(t,n)._initializeDataChannel(o)},Pe.log("Listening for remote stream"),e.ontrack=a=>{Pe.log("Received remote stream");const o=a.streams[0],c=r.getConnection(t,n);if(c.type===Gi.Media){const h=c;this._addStreamToMediaConnection(o,h)}}}cleanup(){Pe.log("Cleaning up PeerConnection to "+this.connection.peer);const e=this.connection.peerConnection;if(!e)return;this.connection.peerConnection=null,e.onicecandidate=e.oniceconnectionstatechange=e.ondatachannel=e.ontrack=()=>{};const t=e.signalingState!=="closed";let n=!1;const s=this.connection.dataChannel;s&&(n=!!s.readyState&&s.readyState!=="closed"),(t||n)&&e.close()}async _makeOffer(){const e=this.connection.peerConnection,t=this.connection.provider;try{const n=await e.createOffer(this.connection.options.constraints);Pe.log("Created offer."),this.connection.options.sdpTransform&&typeof this.connection.options.sdpTransform=="function"&&(n.sdp=this.connection.options.sdpTransform(n.sdp)||n.sdp);try{await e.setLocalDescription(n),Pe.log("Set localDescription:",n,`for:${this.connection.peer}`);let s={sdp:n,type:this.connection.type,connectionId:this.connection.connectionId,metadata:this.connection.metadata};if(this.connection.type===Gi.Data){const r=this.connection;s={...s,label:r.label,reliable:r.reliable,serialization:r.serialization}}t.socket.send({type:Yt.Offer,payload:s,dst:this.connection.peer})}catch(s){s!="OperationError: Failed to set local offer sdp: Called in wrong state: kHaveRemoteOffer"&&(t.emitError(Ft.WebRTC,s),Pe.log("Failed to setLocalDescription, ",s))}}catch(n){t.emitError(Ft.WebRTC,n),Pe.log("Failed to createOffer, ",n)}}async _makeAnswer(){const e=this.connection.peerConnection,t=this.connection.provider;try{const n=await e.createAnswer();Pe.log("Created answer."),this.connection.options.sdpTransform&&typeof this.connection.options.sdpTransform=="function"&&(n.sdp=this.connection.options.sdpTransform(n.sdp)||n.sdp);try{await e.setLocalDescription(n),Pe.log("Set localDescription:",n,`for:${this.connection.peer}`),t.socket.send({type:Yt.Answer,payload:{sdp:n,type:this.connection.type,connectionId:this.connection.connectionId},dst:this.connection.peer})}catch(s){t.emitError(Ft.WebRTC,s),Pe.log("Failed to setLocalDescription, ",s)}}catch(n){t.emitError(Ft.WebRTC,n),Pe.log("Failed to create answer, ",n)}}async handleSDP(e,t){t=new RTCSessionDescription(t);const n=this.connection.peerConnection,s=this.connection.provider;Pe.log("Setting remote description",t);const r=this;try{await n.setRemoteDescription(t),Pe.log(`Set remoteDescription:${e} for:${this.connection.peer}`),e==="OFFER"&&await r._makeAnswer()}catch(a){s.emitError(Ft.WebRTC,a),Pe.log("Failed to setRemoteDescription, ",a)}}async handleCandidate(e){Pe.log("handleCandidate:",e);try{await this.connection.peerConnection.addIceCandidate(e),Pe.log(`Added ICE candidate for:${this.connection.peer}`)}catch(t){this.connection.provider.emitError(Ft.WebRTC,t),Pe.log("Failed to handleCandidate, ",t)}}_addTracksToConnection(e,t){if(Pe.log(`add tracks from stream ${e.id} to peer connection`),!t.addTrack)return Pe.error("Your browser does't support RTCPeerConnection#addTrack. Ignored.");e.getTracks().forEach(n=>{t.addTrack(n,e)})}_addStreamToMediaConnection(e,t){Pe.log(`add stream ${e.id} to media connection ${t.connectionId}`),t.addStream(e)}}class np extends hh.EventEmitter{emitError(e,t){Pe.error("Error:",t),this.emit("error",new FS(`${e}`,t))}}class FS extends Error{constructor(e,t){typeof t=="string"?super(t):(super(),Object.assign(this,t)),this.type=e}}class ip extends np{get open(){return this._open}constructor(e,t,n){super(),this.peer=e,this.provider=t,this.options=n,this._open=!1,this.metadata=n.metadata}}class to extends ip{static#e=this.ID_PREFIX="mc_";get type(){return Gi.Media}get localStream(){return this._localStream}get remoteStream(){return this._remoteStream}constructor(e,t,n){super(e,t,n),this._localStream=this.options._stream,this.connectionId=this.options.connectionId||to.ID_PREFIX+fn.randomToken(),this._negotiator=new tp(this),this._localStream&&this._negotiator.startConnection({_stream:this._localStream,originator:!0})}_initializeDataChannel(e){this.dataChannel=e,this.dataChannel.onopen=()=>{Pe.log(`DC#${this.connectionId} dc connection success`),this.emit("willCloseOnRemote")},this.dataChannel.onclose=()=>{Pe.log(`DC#${this.connectionId} dc closed for:`,this.peer),this.close()}}addStream(e){Pe.log("Receiving stream",e),this._remoteStream=e,super.emit("stream",e)}handleMessage(e){const t=e.type,n=e.payload;switch(e.type){case Yt.Answer:this._negotiator.handleSDP(t,n.sdp),this._open=!0;break;case Yt.Candidate:this._negotiator.handleCandidate(n.candidate);break;default:Pe.warn(`Unrecognized message type:${t} from peer:${this.peer}`);break}}answer(e,t={}){if(this._localStream){Pe.warn("Local stream already exists on this MediaConnection. Are you answering a call twice?");return}this._localStream=e,t&&t.sdpTransform&&(this.options.sdpTransform=t.sdpTransform),this._negotiator.startConnection({...this.options._payload,_stream:e});const n=this.provider._getMessages(this.connectionId);for(const s of n)this.handleMessage(s);this._open=!0}close(){this._negotiator&&(this._negotiator.cleanup(),this._negotiator=null),this._localStream=null,this._remoteStream=null,this.provider&&(this.provider._removeConnection(this),this.provider=null),this.options&&this.options._stream&&(this.options._stream=null),this.open&&(this._open=!1,super.emit("close"))}}class BS{constructor(e){this._options=e}_buildRequest(e){const t=this._options.secure?"https":"http",{host:n,port:s,path:r,key:a}=this._options,o=new URL(`${t}://${n}:${s}${r}${a}/${e}`);return o.searchParams.set("ts",`${Date.now()}${Math.random()}`),o.searchParams.set("version",ep),fetch(o.href,{referrerPolicy:this._options.referrerPolicy})}async retrieveId(){try{const e=await this._buildRequest("id");if(e.status!==200)throw new Error(`Error. Status:${e.status}`);return e.text()}catch(e){Pe.error("Error retrieving ID",e);let t="";throw this._options.path==="/"&&this._options.host!==fn.CLOUD_HOST&&(t=" If you passed in a `path` to your self-hosted PeerServer, you'll also need to pass in that same path when creating a new Peer."),new Error("Could not get an ID from the server."+t)}}async listAllPeers(){try{const e=await this._buildRequest("peers");if(e.status!==200){if(e.status===401){let t="";throw this._options.host===fn.CLOUD_HOST?t="It looks like you're using the cloud server. You can email team@peerjs.com to enable peer listing for your API key.":t="You need to enable `allow_discovery` on your self-hosted PeerServer to use this feature.",new Error("It doesn't look like you have permission to list peers IDs. "+t)}throw new Error(`Error. Status:${e.status}`)}return e.json()}catch(e){throw Pe.error("Error retrieving list peers",e),new Error("Could not get list peers from the server."+e)}}}class no extends ip{static#e=this.ID_PREFIX="dc_";static#t=this.MAX_BUFFERED_AMOUNT=8388608;get type(){return Gi.Data}constructor(e,t,n){super(e,t,n),this.connectionId=this.options.connectionId||no.ID_PREFIX+Zf(),this.label=this.options.label||this.connectionId,this.reliable=!!this.options.reliable,this._negotiator=new tp(this),this._negotiator.startConnection(this.options._payload||{originator:!0,reliable:this.reliable})}_initializeDataChannel(e){this.dataChannel=e,this.dataChannel.onopen=()=>{Pe.log(`DC#${this.connectionId} dc connection success`),this._open=!0,this.emit("open")},this.dataChannel.onmessage=t=>{Pe.log(`DC#${this.connectionId} dc onmessage:`,t.data)},this.dataChannel.onclose=()=>{Pe.log(`DC#${this.connectionId} dc closed for:`,this.peer),this.close()}}close(e){if(e?.flush){this.send({__peerData:{type:"close"}});return}this._negotiator&&(this._negotiator.cleanup(),this._negotiator=null),this.provider&&(this.provider._removeConnection(this),this.provider=null),this.dataChannel&&(this.dataChannel.onopen=null,this.dataChannel.onmessage=null,this.dataChannel.onclose=null,this.dataChannel=null),this.open&&(this._open=!1,super.emit("close"))}send(e,t=!1){if(!this.open){this.emitError(uh.NotOpenYet,"Connection is not open. You should listen for the `open` event before sending messages.");return}return this._send(e,t)}async handleMessage(e){const t=e.payload;switch(e.type){case Yt.Answer:await this._negotiator.handleSDP(e.type,t.sdp);break;case Yt.Candidate:await this._negotiator.handleCandidate(t.candidate);break;default:Pe.warn("Unrecognized message type:",e.type,"from peer:",this.peer);break}}}class dh extends no{get bufferSize(){return this._bufferSize}_initializeDataChannel(e){super._initializeDataChannel(e),this.dataChannel.binaryType="arraybuffer",this.dataChannel.addEventListener("message",t=>this._handleDataMessage(t))}_bufferedSend(e){(this._buffering||!this._trySend(e))&&(this._buffer.push(e),this._bufferSize=this._buffer.length)}_trySend(e){if(!this.open)return!1;if(this.dataChannel.bufferedAmount>no.MAX_BUFFERED_AMOUNT)return this._buffering=!0,setTimeout(()=>{this._buffering=!1,this._tryBuffer()},50),!1;try{this.dataChannel.send(e)}catch(t){return Pe.error(`DC#:${this.connectionId} Error when sending:`,t),this._buffering=!0,this.close(),!1}return!0}_tryBuffer(){if(!this.open||this._buffer.length===0)return;const e=this._buffer[0];this._trySend(e)&&(this._buffer.shift(),this._bufferSize=this._buffer.length,this._tryBuffer())}close(e){if(e?.flush){this.send({__peerData:{type:"close"}});return}this._buffer=[],this._bufferSize=0,super.close()}constructor(...e){super(...e),this._buffer=[],this._bufferSize=0,this._buffering=!1}}class mc extends dh{close(e){super.close(e),this._chunkedData={}}constructor(e,t,n){super(e,t,n),this.chunker=new Jf,this.serialization=_o.Binary,this._chunkedData={}}_handleDataMessage({data:e}){const t=gf(e),n=t.__peerData;if(n){if(n.type==="close"){this.close();return}this._handleChunk(t);return}this.emit("data",t)}_handleChunk(e){const t=e.__peerData,n=this._chunkedData[t]||{data:[],count:0,total:e.total};if(n.data[e.n]=new Uint8Array(e.data),n.count++,this._chunkedData[t]=n,n.total===n.count){delete this._chunkedData[t];const s=wS(n.data);this._handleDataMessage({data:s})}}_send(e,t){const n=_f(e);if(n instanceof Promise)return this._send_blob(n);if(!t&&n.byteLength>this.chunker.chunkedMTU){this._sendChunks(n);return}this._bufferedSend(n)}async _send_blob(e){const t=await e;if(t.byteLength>this.chunker.chunkedMTU){this._sendChunks(t);return}this._bufferedSend(t)}_sendChunks(e){const t=this.chunker.chunk(e);Pe.log(`DC#${this.connectionId} Try to send ${t.length} chunks...`);for(const n of t)this.send(n,!0)}}class kS extends dh{_handleDataMessage({data:e}){super.emit("data",e)}_send(e,t){this._bufferedSend(e)}constructor(...e){super(...e),this.serialization=_o.None}}class zS extends dh{_handleDataMessage({data:e}){const t=this.parse(this.decoder.decode(e)),n=t.__peerData;if(n&&n.type==="close"){this.close();return}this.emit("data",t)}_send(e,t){const n=this.encoder.encode(this.stringify(e));if(n.byteLength>=fn.chunkedMTU){this.emitError(uh.MessageToBig,"Message too big for JSON channel");return}this._bufferedSend(n)}constructor(...e){super(...e),this.serialization=_o.JSON,this.encoder=new TextEncoder,this.decoder=new TextDecoder,this.stringify=JSON.stringify,this.parse=JSON.parse}}class fh extends np{static#e=this.DEFAULT_KEY="peerjs";get id(){return this._id}get options(){return this._options}get open(){return this._open}get socket(){return this._socket}get connections(){const e=Object.create(null);for(const[t,n]of this._connections)e[t]=n;return e}get destroyed(){return this._destroyed}get disconnected(){return this._disconnected}constructor(e,t){super(),this._serializers={raw:kS,json:zS,binary:mc,"binary-utf8":mc,default:mc},this._id=null,this._lastServerId=null,this._destroyed=!1,this._disconnected=!1,this._open=!1,this._connections=new Map,this._lostMessages=new Map;let n;if(e&&e.constructor==Object?t=e:e&&(n=e.toString()),t={debug:0,host:fn.CLOUD_HOST,port:fn.CLOUD_PORT,path:"/",key:fh.DEFAULT_KEY,token:fn.randomToken(),config:fn.defaultConfig,referrerPolicy:"strict-origin-when-cross-origin",serializers:{},...t},this._options=t,this._serializers={...this._serializers,...this.options.serializers},this._options.host==="/"&&(this._options.host=window.location.hostname),this._options.path&&(this._options.path[0]!=="/"&&(this._options.path="/"+this._options.path),this._options.path[this._options.path.length-1]!=="/"&&(this._options.path+="/")),this._options.secure===void 0&&this._options.host!==fn.CLOUD_HOST?this._options.secure=fn.isSecure():this._options.host==fn.CLOUD_HOST&&(this._options.secure=!0),this._options.logFunction&&Pe.setLogFunction(this._options.logFunction),Pe.logLevel=this._options.debug||0,this._api=new BS(t),this._socket=this._createServerConnection(),!fn.supports.audioVideo&&!fn.supports.data){this._delayedAbort(Ft.BrowserIncompatible,"The current browser does not support WebRTC");return}if(n&&!fn.validateId(n)){this._delayedAbort(Ft.InvalidID,`ID "${n}" is invalid`);return}n?this._initialize(n):this._api.retrieveId().then(s=>this._initialize(s)).catch(s=>this._abort(Ft.ServerError,s))}_createServerConnection(){const e=new OS(this._options.secure,this._options.host,this._options.port,this._options.path,this._options.key,this._options.pingInterval);return e.on(Fi.Message,t=>{this._handleMessage(t)}),e.on(Fi.Error,t=>{this._abort(Ft.SocketError,t)}),e.on(Fi.Disconnected,()=>{this.disconnected||(this.emitError(Ft.Network,"Lost connection to server."),this.disconnect())}),e.on(Fi.Close,()=>{this.disconnected||this._abort(Ft.SocketClosed,"Underlying socket is already closed.")}),e}_initialize(e){this._id=e,this.socket.start(e,this._options.token)}_handleMessage(e){const t=e.type,n=e.payload,s=e.src;switch(t){case Yt.Open:this._lastServerId=this.id,this._open=!0,this.emit("open",this.id);break;case Yt.Error:this._abort(Ft.ServerError,n.msg);break;case Yt.IdTaken:this._abort(Ft.UnavailableID,`ID "${this.id}" is taken`);break;case Yt.InvalidKey:this._abort(Ft.InvalidKey,`API KEY "${this._options.key}" is invalid`);break;case Yt.Leave:Pe.log(`Received leave message from ${s}`),this._cleanupPeer(s),this._connections.delete(s);break;case Yt.Expire:this.emitError(Ft.PeerUnavailable,`Could not connect to peer ${s}`);break;case Yt.Offer:{const r=n.connectionId;let a=this.getConnection(s,r);if(a&&(a.close(),Pe.warn(`Offer received for existing Connection ID:${r}`)),n.type===Gi.Media){const c=new to(s,this,{connectionId:r,_payload:n,metadata:n.metadata});a=c,this._addConnection(s,a),this.emit("call",c)}else if(n.type===Gi.Data){const c=new this._serializers[n.serialization](s,this,{connectionId:r,_payload:n,metadata:n.metadata,label:n.label,serialization:n.serialization,reliable:n.reliable});a=c,this._addConnection(s,a),this.emit("connection",c)}else{Pe.warn(`Received malformed connection type:${n.type}`);return}const o=this._getMessages(r);for(const c of o)a.handleMessage(c);break}default:{if(!n){Pe.warn(`You received a malformed message from ${s} of type ${t}`);return}const r=n.connectionId,a=this.getConnection(s,r);a&&a.peerConnection?a.handleMessage(e):r?this._storeMessage(r,e):Pe.warn("You received an unrecognized message:",e);break}}}_storeMessage(e,t){this._lostMessages.has(e)||this._lostMessages.set(e,[]),this._lostMessages.get(e).push(t)}_getMessages(e){const t=this._lostMessages.get(e);return t?(this._lostMessages.delete(e),t):[]}connect(e,t={}){if(t={serialization:"default",...t},this.disconnected){Pe.warn("You cannot connect to a new Peer because you called .disconnect() on this Peer and ended your connection with the server. You can create a new Peer to reconnect, or call reconnect on this peer if you believe its ID to still be available."),this.emitError(Ft.Disconnected,"Cannot connect to new Peer after disconnecting from server.");return}const n=new this._serializers[t.serialization](e,this,t);return this._addConnection(e,n),n}call(e,t,n={}){if(this.disconnected){Pe.warn("You cannot connect to a new Peer because you called .disconnect() on this Peer and ended your connection with the server. You can create a new Peer to reconnect."),this.emitError(Ft.Disconnected,"Cannot connect to new Peer after disconnecting from server.");return}if(!t){Pe.error("To call a peer, you must provide a stream from your browser's `getUserMedia`.");return}const s=new to(e,this,{...n,_stream:t});return this._addConnection(e,s),s}_addConnection(e,t){Pe.log(`add connection ${t.type}:${t.connectionId} to peerId:${e}`),this._connections.has(e)||this._connections.set(e,[]),this._connections.get(e).push(t)}_removeConnection(e){const t=this._connections.get(e.peer);if(t){const n=t.indexOf(e);n!==-1&&t.splice(n,1)}this._lostMessages.delete(e.connectionId)}getConnection(e,t){const n=this._connections.get(e);if(!n)return null;for(const s of n)if(s.connectionId===t)return s;return null}_delayedAbort(e,t){setTimeout(()=>{this._abort(e,t)},0)}_abort(e,t){Pe.error("Aborting!"),this.emitError(e,t),this._lastServerId?this.disconnect():this.destroy()}destroy(){this.destroyed||(Pe.log(`Destroy peer with ID:${this.id}`),this.disconnect(),this._cleanup(),this._destroyed=!0,this.emit("close"))}_cleanup(){for(const e of this._connections.keys())this._cleanupPeer(e),this._connections.delete(e);this.socket.removeAllListeners()}_cleanupPeer(e){const t=this._connections.get(e);if(t)for(const n of t)n.close()}disconnect(){if(this.disconnected)return;const e=this.id;Pe.log(`Disconnect peer with ID:${e}`),this._disconnected=!0,this._open=!1,this.socket.close(),this._lastServerId=e,this._id=null,this.emit("disconnected",e)}reconnect(){if(this.disconnected&&!this.destroyed)Pe.log(`Attempting reconnection to server with ID ${this._lastServerId}`),this._disconnected=!1,this._initialize(this._lastServerId);else{if(this.destroyed)throw new Error("This peer cannot reconnect to the server. It has already been destroyed.");if(!this.disconnected&&!this.open)Pe.error("In a hurry? We're still trying to make the initial connection!");else throw new Error(`Peer ${this.id} cannot reconnect because it is not disconnected from the server!`)}}listAllPeers(e=t=>{}){this._api.listAllPeers().then(t=>e(t)).catch(t=>this._abort(Ft.ServerError,t))}}var ed=fh;const td="heyball3d-room-";class GS{constructor(e={}){this.handlers=e,this.transport=null,this.ws=null,this.peer=null,this.conn=null,this.connected=!1,this.roomCode=null,this.myPlayerIndex=-1,this.myName="玩家",this.playerNames=["房主","挑战者"],this.inMatch=!1,this.lastAimSentAt=0}isLocalHostEnv(){const e=window.location.hostname;return e==="localhost"||e==="127.0.0.1"||e.startsWith("192.168.")||e.startsWith("10.")||e.startsWith("172.")}tryConnectWS(){return new Promise((e,t)=>{if(!this.isLocalHostEnv()){t(new Error("static host"));return}if(this.ws&&this.ws.readyState===WebSocket.OPEN){this.transport="ws",e();return}const n=window.location.protocol==="https:"?"wss:":"ws:",s=new WebSocket(`${n}//${window.location.host}/ws`),r=setTimeout(()=>{try{s.close()}catch{}t(new Error("ws timeout"))},1500);s.onopen=()=>{clearTimeout(r),this.ws=s,this.transport="ws",this.connected=!0,e()},s.onerror=()=>{clearTimeout(r),t(new Error("ws unavailable"))},s.onclose=()=>{this.transport==="ws"&&(this.connected=!1,this.inMatch&&(this.inMatch=!1,this.roomCode=null,this.myPlayerIndex=-1,this.handlers.onDisconnected?.()))},s.onmessage=a=>{try{this.handleMessage(JSON.parse(a.data))}catch{}}})}handleMessage(e){switch(e.type){case"room_created":this.roomCode=e.code,this.myPlayerIndex=0,this.inMatch=!1,this.handlers.onRoomCreated?.(e.code);break;case"match_start":this.roomCode=e.code,this.myPlayerIndex=e.playerIndex,this.playerNames=e.names||["房主","挑战者"],this.inMatch=!0,this.handlers.onMatchStart?.(e);break;case"aim":this.handlers.onOpponentAim?.(e);break;case"place_cue":this.handlers.onOpponentPlaceCue?.(e);break;case"strike":this.handlers.onOpponentStrike?.(e);break;case"state_sync":this.handlers.onStateSync?.(e);break;case"rematch":this.handlers.onRematch?.();break;case"next_frame":this.handlers.onNextFrame?.(e);break;case"extension":this.handlers.onExtension?.();break;case"chat":this.handlers.onChat?.(e.sender,e.text);break;case"emote":this.handlers.onEmote?.(e.text);break;case"opponent_left":this.inMatch=!1,this.roomCode=null,this.myPlayerIndex=-1,this.handlers.onOpponentLeft?.();break;case"error":this.handlers.onError?.(e.message||"联机出错");break}}send(e){this.transport==="ws"&&this.ws&&this.ws.readyState===WebSocket.OPEN?this.ws.send(JSON.stringify(e)):this.transport==="p2p"&&this.conn&&this.conn.open&&this.conn.send(e)}cleanupPeer(){if(this.conn){try{this.conn.close()}catch{}this.conn=null}if(this.peer){try{this.peer.destroy()}catch{}this.peer=null}}async createRoom(e,t=1){this.myName=String(e||"房主").slice(0,12),this.bestOf=t;try{await this.tryConnectWS(),this.send({type:"create_room",name:this.myName,bestOf:t});return}catch{}this.cleanupPeer(),this.transport="p2p";const n=String(Math.floor(1e3+Math.random()*9e3));return new Promise((s,r)=>{const a=new ed(`${td}${n}`,{debug:0});this.peer=a,a.on("open",()=>{this.connected=!0,this.roomCode=n,this.myPlayerIndex=0,this.inMatch=!1,this.handlers.onRoomCreated?.(n),s()}),a.on("connection",o=>{if(this.conn&&this.conn.open){o.close();return}this.conn=o,o.on("data",c=>{if(c&&c.type==="p2p_hello"){const h=String(c.name||"挑战者").slice(0,12),l=[this.myName,h];this.playerNames=l,this.inMatch=!0,o.send({type:"match_start",code:n,playerIndex:1,names:l,bestOf:this.bestOf,transport:"p2p"}),this.handlers.onMatchStart?.({type:"match_start",code:n,playerIndex:0,names:l,bestOf:this.bestOf,transport:"p2p"})}else c&&this.handleMessage(c)}),o.on("close",()=>{this.inMatch&&(this.inMatch=!1,this.roomCode=null,this.myPlayerIndex=-1,this.handlers.onOpponentLeft?.())})}),a.on("error",o=>{this.roomCode?this.handlers.onError?.("P2P 联机连接波动，请重试"):r(new Error(`联机房间创建失败：${o.type||o.message}`))})})}async joinRoom(e,t){const n=String(e||"").trim();this.myName=String(t||"挑战者").slice(0,12);try{await this.tryConnectWS(),this.send({type:"join_room",code:n,name:this.myName});return}catch{}return this.cleanupPeer(),this.transport="p2p",new Promise((s,r)=>{const a=new ed({debug:0});this.peer=a;const o=setTimeout(()=>{this.cleanupPeer(),r(new Error(`连接房间 ${n} 超时，请确认房间号正确`))},1e4);a.on("open",()=>{const c=a.connect(`${td}${n}`,{reliable:!0});this.conn=c,c.on("open",()=>{clearTimeout(o),this.connected=!0,c.send({type:"p2p_hello",name:this.myName}),s()}),c.on("data",h=>{h&&this.handleMessage(h)}),c.on("close",()=>{this.inMatch&&(this.inMatch=!1,this.roomCode=null,this.myPlayerIndex=-1,this.handlers.onOpponentLeft?.())}),c.on("error",()=>{clearTimeout(o),r(new Error(`无法加入房间 ${n}`))})}),a.on("error",c=>{clearTimeout(o),r(new Error(`找不到房间 ${n}（${c.type||"连接失败"}）`))})})}leaveRoom(){this.transport==="ws"&&this.ws&&this.ws.readyState===WebSocket.OPEN?this.send({type:"leave_room"}):this.transport==="p2p"&&(this.send({type:"opponent_left"}),this.cleanupPeer()),this.inMatch=!1,this.roomCode=null,this.myPlayerIndex=-1}sendAim(e,t=!1){if(!this.inMatch)return;const n=performance.now();!t&&n-this.lastAimSentAt<48||(this.lastAimSentAt=n,this.send({type:"aim",...e}))}sendPlaceCue(e,t,n=!1){this.inMatch&&this.send({type:"place_cue",x:e,z:t,confirmed:n})}sendStrike(e){this.inMatch&&this.send({type:"strike",...e})}sendStateSync(e){this.inMatch&&this.send({type:"state_sync",...e})}sendRematch(){this.inMatch&&this.send({type:"rematch"})}sendNextFrame(e){this.inMatch&&this.send({type:"next_frame",...e})}sendExtension(){this.inMatch&&this.send({type:"extension"})}sendChat(e){this.inMatch&&this.send({type:"chat",sender:this.myName,text:String(e).slice(0,60)})}sendEmote(e){this.inMatch&&this.send({type:"emote",text:e})}}const sp="heyball3d_profile_v2",nd=[{name:"青铜新秀",minElo:0,icon:"🥉",color:"#cd7f32"},{name:"白银球手",minElo:1100,icon:"🥈",color:"#cbd5e1"},{name:"黄金大师",minElo:1300,icon:"🥇",color:"#f5c556"},{name:"铂金精英",minElo:1550,icon:"💎",color:"#38bdf8"},{name:"钻石宗师",minElo:1800,icon:"💠",color:"#a78bfa"},{name:"传奇球王",minElo:2100,icon:"👑",color:"#fbbf24"}],xc=["🎱","🏆","🦁","🐉","⚡","🔥","👑","🎯"];function rp(i){let e=nd[0];for(const t of nd)i>=t.minElo&&(e=t);return e}function VS(){const i={name:"台球大师",avatar:"🎱",elo:1200,coins:1500,wins:0,losses:0,pots:0,bestRun:0,topSpeed:0,clothTheme:"emerald",cueSkin:"maple",lightingMood:"warm",aiDifficulty:"pro",guideMode:"off",highGraphics:!0,muted:!1};try{const e=localStorage.getItem(sp);return e?{...i,...JSON.parse(e)}:i}catch{return i}}function Yn(i){try{localStorage.setItem(sp,JSON.stringify(i))}catch{}}function HS(i,e,t,n){let s=0,r=0;if(t==="ai"){const a=n==="master"?1.5:n==="pro"?1:.65;s=e?Math.round(28*a):-Math.round(16*a),r=e?Math.round(200*a):35}else t==="online"?(s=e?36:-20,r=e?320:60):r=e?50:20;return e?i.wins++:i.losses++,i.elo=Math.max(800,i.elo+s),i.coins=Math.max(0,i.coins+r),Yn(i),{eloDelta:s,coinDelta:r}}const ze=VS(),WS=document.getElementById("canvas-container"),gn=new Kd;gn.background=new He(526862);gn.fog=new Ql(526862,.068);const Mn=new pn(42,window.innerWidth/window.innerHeight,.05,35),Tt=new Vy({antialias:!0,powerPreference:"high-performance"});Tt.setSize(window.innerWidth,window.innerHeight);Tt.setPixelRatio(Math.min(window.devicePixelRatio,2));Tt.shadowMap.enabled=!0;Tt.shadowMap.type=Ed;Tt.toneMapping=Hl;Tt.toneMappingExposure=1.08;WS.appendChild(Tt.domElement);gn.environment=eS(Tt);gn.environmentIntensity=.95;const jr=new Yy(Tt);jr.addPass(new jy(gn,Mn));const ap=new nr(new le(window.innerWidth,window.innerHeight),.22,.55,.92);jr.addPass(ap);jr.addPass(new Jy);let Rr=ze.highGraphics!==!1;gn.add(new $m(16774628,1055768,.45));const $i=new Ym(16774626,5.8,12,Math.PI*.43,.58,1.15);$i.position.set(0,2.34,0);$i.castShadow=!0;$i.shadow.mapSize.set(2048,2048);$i.shadow.bias=-4e-4;$i.shadow.normalBias=.008;$i.shadow.camera.near=.8;$i.shadow.camera.far=5.5;gn.add($i);[-.78,.78].forEach(i=>{const e=new Km(16773852,1.5,6.2,1.45);e.position.set(i,1.88,0),gn.add(e)});const op=new Zm(8038622,.28);op.position.set(-3.2,1.8,-2.6);gn.add(op);const{dustPoints:gc,setClothTheme:XS}=hS(gn),nt=new dS,X=new fS("ai"),vi=new pS(ze.aiDifficulty||"pro"),_t=new mS(gn),$S=new tr(Ve,44,34),qS=sS(),YS=new qt(Ve*2.55,Ve*2.55),It=[];for(let i=0;i<=15;i++){const e=tS(i),t=new kn({map:e,roughness:.075,metalness:.01,clearcoat:1,clearcoatRoughness:.045,ior:1.55,reflectivity:.95,envMapIntensity:1.15}),n=new ye($S,t);n.castShadow=!0,n.receiveShadow=!0,n.userData.ballNum=i,gn.add(n);const s=new Dt({map:qS,transparent:!0,opacity:.72,depthWrite:!1}),r=new ye(YS,s);r.rotation.x=-Math.PI/2,r.position.y=.0014,gn.add(r),It.push({num:i,x:0,y:Ve,z:0,vx:0,vy:0,vz:0,wx:0,wy:0,wz:0,pocketed:!1,dropping:!1,pocketId:-1,mesh:n,shadowMesh:r})}nt.setBalls(It);nt.onHeavyImpact=i=>{};nt.onBallCollision=(i,e,t)=>{_t.emitImpactFlash(i,e,t)};const fe={LOBBY:"LOBBY",PLACE_CUE:"PLACE_CUE",AIMING:"AIMING",STRIKING:"STRIKING",SIMULATING:"SIMULATING",AI_THINKING:"AI_THINKING",REMOTE_TURN:"REMOTE_TURN",REPLAYING:"REPLAYING",GAME_OVER:"GAME_OVER"};let pe=fe.LOBBY,ot=0,st=0,io=0,mn=0,En=0,Zt=0,ps="rack",Tn=1,cp=1,zn=[0,0],Gr=!1;const ph=30;let yi=ph,so=99,ro=[!1,!1],Vr=null,vo=!1,cs={angle:0,power:0,spinX:0,spinY:0,elevation:0};function lp(){return[{shots:0,pots:0,fouls:0,streak:0,maxRun:0,topSpeed:0},{shots:0,pots:0,fouls:0,streak:0,maxRun:0,topSpeed:0}]}let rn=lp(),Si=0,vt=null;function yo(){return It.map(i=>({num:i.num,x:i.x,y:i.y,z:i.z,pocketed:i.pocketed,dropping:!1,pocketId:i.pocketId,qx:i.mesh.quaternion.x,qy:i.mesh.quaternion.y,qz:i.mesh.quaternion.z,qw:i.mesh.quaternion.w}))}function Kr(i){i.forEach(e=>{const t=nt.getBallByNum(e.num);t&&(t.x=e.x,t.y=e.pocketed?-.12:Ve,t.z=e.z,t.vx=t.vy=t.vz=0,t.wx=t.wy=t.wz=0,t.pocketed=e.pocketed,t.dropping=!1,t.pocketId=e.pocketId,t.mesh.visible=!e.pocketed,t.mesh.position.set(t.x,t.y,t.z),t.mesh.quaternion.set(e.qx,e.qy,e.qz,e.qw),t.shadowMesh&&(t.shadowMesh.visible=!e.pocketed,t.shadowMesh.position.set(t.x,.0014,t.z),t.shadowMesh.material.opacity=.72))})}let Ht={active:!1,pullback:0,targetPower:0,spinX:0,spinY:0,elevation:0,elapsed:0,duration:.105,executed:!1},Wa=0,Jn=null,an="stand",Bt="aim",ms=Math.PI,Mi=2.05,So=0,Mo=0,_c=.65,Ll=-Math.PI*.72,wr=.56,Pr=2.55,ao=1;const is=new I,ss=new I,Il=new I(0,0,0),Xa=new I,hp=new I;Mn.position.set(-2.2,1.5,2);let Dn=!1,Di=0,wn=0,oo=!1,xs=!1,bo=!1,Vi=!1,$a=1,Ys=!1,ni=!1,vc=0,Dl=0,Tr=0,ei=0,Es=!0;const dn=new Set;function id(){try{document.pointerLockElement!==Tt.domElement&&Tt.domElement.requestPointerLock&&Tt.domElement.requestPointerLock()}catch{}}function mh(){try{document.pointerLockElement&&document.exitPointerLock()}catch{}}const sd=new tx,jS=new Ii(new I(0,1,0),-Ve),yc=new le,up=document.getElementById("home-lobby"),dp=document.getElementById("ingame-hud"),fp=document.getElementById("avatar-btn"),Ul=document.getElementById("profile-name-input"),KS=document.getElementById("lobby-rank-chip"),JS=document.getElementById("lobby-coins"),ZS=document.getElementById("lobby-winrate"),QS=document.getElementById("lobby-armory-btn"),eM=document.getElementById("lobby-stats-btn"),tM=document.getElementById("lobby-rules-btn"),nM=document.getElementById("lobby-fs-btn"),rd=document.querySelectorAll("[data-bo]"),pp=document.querySelectorAll("[data-ldiff]"),iM=document.getElementById("start-ai-btn"),sM=document.getElementById("start-online-btn"),rM=document.getElementById("start-pvp-btn"),aM=document.getElementById("start-practice-btn"),oM=document.getElementById("p0-card"),cM=document.getElementById("p1-card"),lM=document.getElementById("p0-name"),hM=document.getElementById("p1-name"),ad=document.getElementById("p0-group"),od=document.getElementById("p1-group"),cd=document.getElementById("p0-streak"),ld=document.getElementById("p1-streak"),uM=document.getElementById("p0-balls"),dM=document.getElementById("p1-balls"),fM=document.getElementById("p0-frames"),pM=document.getElementById("p1-frames"),mM=document.getElementById("series-tag"),Sc=document.getElementById("p0-clock-bar"),Mc=document.getElementById("p1-clock-bar"),hd=document.getElementById("clock-row"),xM=document.getElementById("clock-text"),mp=document.getElementById("ext-btn"),Qn=document.getElementById("status-line"),bc=document.getElementById("callout-banner"),Ec=document.getElementById("toast-banner"),Nl=document.getElementById("speed-pill"),gM=document.getElementById("speed-val"),_M=document.getElementById("replay-badge"),vM=document.getElementById("drill-bar"),xp=document.querySelectorAll("[data-drill]"),yM=document.getElementById("undo-btn"),gp=document.getElementById("move-cue-pill"),Hr=document.getElementById("power-track"),SM=document.getElementById("power-fill"),Tc=document.getElementById("power-memory-tick"),MM=document.getElementById("power-handle"),bM=document.getElementById("power-pct"),_p=document.getElementById("cancel-shot-btn"),EM=document.querySelectorAll("[data-qp]"),Wr=document.getElementById("cue-ball-pad"),ud=document.getElementById("spin-dot"),Cc=document.getElementById("spin-readout"),TM=document.getElementById("reset-spin-btn"),Wi=document.getElementById("elev-slider"),Ts=document.getElementById("elev-val"),co=document.getElementById("fine-aim-track"),CM=document.getElementById("nudge-left"),AM=document.getElementById("nudge-right"),RM=document.getElementById("hint-aim-btn"),wM=document.getElementById("highlight-btn"),PM=document.getElementById("home-btn"),LM=document.getElementById("online-btn"),IM=document.getElementById("replay-btn"),DM=document.getElementById("stats-btn"),UM=document.getElementById("settings-btn"),Ol=document.getElementById("mute-btn"),NM=document.getElementById("fs-btn"),OM=document.getElementById("restart-btn"),vp=document.querySelectorAll("[data-cam]"),FM=document.getElementById("online-bar"),BM=document.getElementById("online-room-tag"),kM=document.getElementById("leave-online-btn"),zM=document.getElementById("chat-toggle-btn"),lo=document.getElementById("chat-drawer"),qa=document.getElementById("chat-messages"),ho=document.getElementById("chat-input"),GM=document.getElementById("chat-send-btn"),VM=document.querySelectorAll("[data-emote]"),gs=document.getElementById("online-modal"),xh=document.getElementById("online-name-input"),Fl=document.getElementById("online-lobby-view"),Bl=document.getElementById("online-waiting-view"),dd=document.querySelectorAll("[data-obo]"),HM=document.getElementById("create-room-btn"),yp=document.getElementById("join-code-input"),WM=document.getElementById("join-room-btn"),XM=document.getElementById("waiting-room-code"),Ui=document.getElementById("invite-link-text"),$M=document.getElementById("copy-invite-btn"),qM=document.getElementById("cancel-room-btn"),YM=document.getElementById("online-close-btn"),Xr=document.getElementById("settings-modal"),jM=document.getElementById("settings-close-btn"),Sp=document.querySelectorAll("[data-cloth]"),Mp=document.querySelectorAll("[data-cue]"),bp=document.querySelectorAll("[data-diff]"),Ep=document.querySelectorAll("[data-guide]"),Tp=document.querySelectorAll("[data-gfx]"),uo=document.getElementById("rules-modal"),KM=document.getElementById("rules-close-btn"),us=document.getElementById("stats-modal"),JM=document.getElementById("stats-table"),ZM=document.getElementById("career-grid"),QM=document.getElementById("stats-close-btn"),Jr=document.getElementById("gameover-modal"),fd=document.getElementById("modal-trophy"),pd=document.getElementById("modal-title"),md=document.getElementById("modal-desc"),Ac=document.getElementById("reward-row"),eb=document.getElementById("modal-stats"),kl=document.getElementById("modal-rematch-btn"),tb=document.getElementById("modal-replay-btn"),nb=document.getElementById("modal-home-btn");let xd=null;function ut(i,e="normal",t=2600){Ec.textContent=i,Ec.className=`toast-banner show ${e}`,clearTimeout(xd),xd=setTimeout(()=>Ec.classList.remove("show"),t)}let gd=null;function Eo(i){bc.textContent=i,bc.classList.add("show"),clearTimeout(gd),gd=setTimeout(()=>bc.classList.remove("show"),2100)}let _d=null;function ib(i){gM.textContent=(i*3.6).toFixed(1),Nl.classList.remove("hidden"),clearTimeout(_d),_d=setTimeout(()=>Nl.classList.add("hidden"),2600)}function Zr(){const i=rp(ze.elo);fp.textContent=ze.avatar,Ul.value=ze.name,xh.value=ze.name,KS.textContent=`${i.icon} ${i.name} · ${ze.elo}`,JS.textContent=`🪙 ${ze.coins.toLocaleString()}`;const e=ze.wins+ze.losses,t=e>0?` (${Math.round(ze.wins/e*100)}%)`:"";ZS.textContent=`生涯 ${ze.wins}胜 ${ze.losses}负${t}`}function sb(){const i=rp(ze.elo),e=ze.wins+ze.losses,t=e>0?`${Math.round(ze.wins/e*100)}%`:"-";ZM.innerHTML=[{num:`${i.icon} ${ze.elo}`,lbl:i.name},{num:`${ze.wins}胜`,lbl:`胜率 ${t}`},{num:ze.pots,lbl:"生涯进球"},{num:`${ze.bestRun}连`,lbl:`极速 ${ze.topSpeed.toFixed(0)}km/h`}].map(n=>`<div class="career-card">
        <div class="career-num">${n.num}</div>
        <div class="career-lbl">${n.lbl}</div>
      </div>`).join("")}function ir(){X.mode==="online"&&Mt.leaveRoom(),bt.updateRollingSound(0),pe=fe.LOBBY,_t.setVisible(!1,!1),_t.updatePlacementRing(!1,0,0,!0,!1),Jr.classList.add("hidden"),lo.classList.add("hidden"),dp.classList.add("hidden"),up.classList.remove("hidden"),Pp(nt.getStandardRackPositions()),Zr()}function rb(){up.classList.add("hidden"),dp.classList.remove("hidden")}function Cp(i,e){const t=document.createElement("div");t.className="chat-msg",t.innerHTML=`<strong>${i}:</strong> ${e.replace(/</g,"&lt;")}`,qa.appendChild(t),qa.scrollTop=qa.scrollHeight}function cn(i){const e=Math.round(i*100);SM.style.height=`${e}%`,MM.style.top=`calc(${e}% - ${e*.14}px)`,bM.textContent=`${e}%`,_p.classList.toggle("active",i>.01),io>.03?(Tc.classList.remove("hidden"),Tc.style.top=`${Math.round(io*100)}%`):Tc.classList.add("hidden")}function qi(){const i=50+mn*36,e=50-En*36;ud.style.left=`${i}%`,ud.style.top=`${e}%`;const t=En>.2?"高杆":En<-.2?"低杆":"中杆",n=mn>.2?"右塞":mn<-.2?"左塞":"",s=Zt>=10&&Math.abs(mn)>.2?" · 弧线":"";!n&&t==="中杆"?Cc.textContent=Zt>=10?`中杆 · 扎杆 ${Zt}°`:"中杆 (定杆)":n?Cc.textContent=`${t} · ${n}${s}`:Cc.textContent=t}function Ap(i){const e=rn[0],t=rn[1],n=e.shots?`${Math.round(e.pots/e.shots*100)}%`:"0%",s=t.shots?`${Math.round(t.pots/t.shots*100)}%`:"0%",r=[{label:"击球次数",v0:e.shots,v1:t.shots},{label:"总进球数",v0:e.pots,v1:t.pots},{label:"单杆进球率",v0:n,v1:s},{label:"最高连进",v0:e.maxRun,v1:t.maxRun},{label:"犯规次数",v0:e.fouls,v1:t.fouls},{label:"最高球速",v0:`${e.topSpeed.toFixed(1)} km/h`,v1:`${t.topSpeed.toFixed(1)} km/h`}];i.innerHTML=`<div class="stats-row header">
      <span>${X.getPlayerName(0)}</span>
      <span>项目</span>
      <span>${X.mode==="practice"?"-":X.getPlayerName(1)}</span>
    </div>`+r.map(a=>`<div class="stats-row">
        <span class="stat-val">${a.v0}</span>
        <span class="stat-label">${a.label}</span>
        <span class="stat-val">${X.mode==="practice"?"-":a.v1}</span>
      </div>`).join("")}function vd(i,e){i.innerHTML="";const t=e==="solid"?[1,2,3,4,5,6,7]:e==="stripe"?[9,10,11,12,13,14,15]:[];if(t.length===0){const s=document.createElement("span");s.style.fontSize="11px",s.style.color="#64748b",s.textContent="进球后自动分球",i.appendChild(s);return}let n=0;if(t.forEach(s=>{const r=nt.getBallByNum(s),a=r?r.pocketed:!1;a||n++;const o=document.createElement("div");o.className=`mini-ball ${s>=9?"stripe":""} ${a?"pocketed":""}`,o.style.backgroundColor=bl[s],o.style.setProperty("--ball-color",bl[s]),o.innerHTML=`<span class="num-dot">${s}</span>`,i.appendChild(o)}),n===0){const s=nt.getBallByNum(8),r=document.createElement("div");r.className=`mini-ball ${s&&s.pocketed?"pocketed":""}`,r.style.backgroundColor="#141518",r.style.boxShadow="0 0 10px rgba(251, 191, 36, 0.9)",r.innerHTML='<span class="num-dot">8</span>',i.appendChild(r)}}function Rp(){return X.mode==="ai"||X.mode==="online"}function wp(){yi=ph,so=99,To()}function To(){const i=Rp()&&(pe===fe.AIMING||pe===fe.PLACE_CUE||pe===fe.REMOTE_TURN);if(hd.classList.toggle("hidden",!i),!i){Sc.style.width="0%",Mc.style.width="0%";return}const e=Math.max(0,Math.min(1,yi/ph)),t=Math.ceil(yi),n=t<=5;xM.textContent=`⏱ ${t}s`,hd.classList.toggle("urgent",n),mp.disabled=!_s()||ro[X.currentPlayer],Sc.style.width=X.currentPlayer===0?`${e*100}%`:"0%",Mc.style.width=X.currentPlayer===1?`${e*100}%`:"0%",Sc.classList.toggle("urgent",n&&X.currentPlayer===0),Mc.classList.toggle("urgent",n&&X.currentPlayer===1)}function kt(){if(pe===fe.LOBBY)return;lM.textContent=X.mode==="ai"?`${ze.avatar} ${ze.name}`:X.getPlayerName(0),hM.textContent=X.mode==="practice"?"自由模式":X.getPlayerName(1),fM.textContent=String(zn[0]),pM.textContent=String(zn[1]),mM.textContent=X.mode==="practice"?"特训":`BO${Tn}`,oM.classList.toggle("active",X.currentPlayer===0&&!X.gameOver),cM.classList.toggle("active",X.currentPlayer===1&&!X.gameOver&&X.mode!=="practice");const i=X.playerGroups[0],e=X.playerGroups[1];ad.textContent=X.mode==="practice"?"全自由":X.getGroupLabel(i),ad.className=`group-badge ${i||""}`,od.textContent=X.mode==="practice"?"无对手":X.getGroupLabel(e),od.className=`group-badge ${e||""}`,cd.classList.toggle("hidden",rn[0].streak<2),cd.textContent=`🔥 ×${rn[0].streak}`,ld.classList.toggle("hidden",rn[1].streak<2||X.mode==="practice"),ld.textContent=`🔥 ×${rn[1].streak}`,vd(uM,i),vd(dM,e),vM.classList.toggle("hidden",X.mode!=="practice"),FM.classList.toggle("hidden",X.mode!=="online"),_M.classList.toggle("hidden",pe!==fe.REPLAYING);const t=pe===fe.AIMING&&X.isBreakShot&&!$r()&&_s();if(gp.classList.toggle("hidden",!t),pe===fe.REPLAYING)Qn.textContent="精彩回放中 · 0.45× 慢动作";else if(X.gameOver)Qn.textContent=Gr?"整场比赛结束":"本局结束";else if(pe===fe.REMOTE_TURN)Qn.textContent=`等待 ${X.getPlayerName(X.currentPlayer)} 出杆...`;else if(pe===fe.PLACE_CUE)Qn.textContent=X.ballInHandBehindLine?"开球线后摆放白球（左键确认）":"全场自由球摆放（左键确认）";else if(pe===fe.AI_THINKING)Qn.textContent=`AI (${vi.getDifficultyLabel()}) 瞄准中...`;else if(pe===fe.SIMULATING||pe===fe.STRIKING)Qn.textContent="击球运行中...";else{const n=X.isOnEightBall(X.currentPlayer,It);Bt==="aim"&&an==="stand"?Qn.textContent=n?"站立观察 · WSAD 绕台看黑八，单击屏幕趴下瞄准":"站立观察 · WSAD 绕台观察，单击屏幕进入瞄准":Qn.textContent=n?`${X.getPlayerName(X.currentPlayer)} · 决胜黑八（按住左键运杆出杆）`:X.isBreakShot?"趴下瞄准 · 按住左键向后拉杆，前推/松开开球":"趴下瞄准 · 移动鼠标瞄准，WSAD 可起身绕台"}To()}function Pp(i){const e=new Set(i.map(t=>t.num));It.forEach(t=>{e.has(t.num)||(t.pocketed=!0,t.dropping=!1,t.y=-.12,t.vx=t.vy=t.vz=0,t.wx=t.wy=t.wz=0,t.mesh.visible=!1,t.shadowMesh&&(t.shadowMesh.visible=!1))}),i.forEach(t=>{const n=nt.getBallByNum(t.num);n&&(n.x=t.x,n.y=Ve,n.z=t.z,n.vx=n.vy=n.vz=0,n.wx=n.wy=n.wz=0,n.pocketed=!1,n.dropping=!1,n.pocketId=-1,n.mesh.visible=!0,n.mesh.position.set(n.x,n.y,n.z),n.mesh.rotation.set(0,Math.random()*Math.PI*2,0),n.shadowMesh&&(n.shadowMesh.visible=!0,n.shadowMesh.position.set(n.x,.0014,n.z),n.shadowMesh.material.opacity=.72))})}function Xi(i,e=Tn,t=ps){Tn=i==="practice"?1:e,zn=[0,0],Gr=!1,rb(),Qr(i,t,0)}function Qr(i=X.mode,e=ps,t=0){X.reset(i),X.currentPlayer=t,rn=lp(),ro=[!1,!1],vt=null,io=0,Jr.classList.add("hidden"),us.classList.add("hidden"),Nl.classList.add("hidden");let n=nt.getStandardRackPositions();if(i==="practice"){ps=e;const s=Wu.find(r=>r.id===e)||Wu[0];xp.forEach(r=>r.classList.toggle("active",r.dataset.drill===s.id)),s.build&&(n=s.build(),X.isBreakShot=!1),ut(`${s.name}：${s.desc}`,"info",3400)}else i==="online"?ut(_s()?"轮到你开球！移动鼠标瞄准，按住左键蓄力松开":`等待 ${X.getPlayerName(t)} 开球...`,"good",3e3):ut("开球就绪！移动鼠标瞄准，按住左键蓄力松开击球","good",2600);X.ballInHand=!1,Pp(n),ot=0,i==="practice"&&e!=="rack"&&Co(),st=0,mn=0,En=0,Zt=0,Ys=!1,ni=!1,Wi.value="0",Ts.textContent="0°",Ht.active=!1,cn(0),qi(),Vr=null,vo=!1,wp(),i==="online"?(pe=_s()?fe.AIMING:fe.REMOTE_TURN,an="stand"):$r()?zl():(pe=fe.AIMING,an="stand",ms=Math.PI,Mi=2.05,So=0,Mo=0),Es=!0,kt()}function Lp(i){X.ballInHand=!0,X.ballInHandBehindLine=i,pe=fe.PLACE_CUE,Es=!0,kt(),ut("移动鼠标在开球区摆放白球，左键确认","info",2200)}function gh(){if(!vt||pe===fe.SIMULATING||pe===fe.STRIKING||pe===fe.REPLAYING){ut("暂无可重播的击球记录","info",1500);return}Jr.classList.add("hidden"),vt.prevState=pe,vt.prevCam=Bt,vt.postBalls=yo(),Kr(vt.preBalls),Bi("tv"),_t.setVisible(!1,!1);const i=nt.getCueBall();_t.emitChalkPuff(i.x,i.y,i.z,vt.angle,vt.power),_t.resetCueTrail(i),nt.strikeCueBall(vt.angle,vt.power,vt.spinX,vt.spinY,vt.elevation),pe=fe.REPLAYING,kt()}function Ip(){vt&&(bt.updateRollingSound(0),Kr(vt.postBalls),Bi(vt.prevCam||"aim"),pe=vt.prevState||fe.AIMING,kt(),pe===fe.GAME_OVER&&Jr.classList.remove("hidden"))}function Dp(){if(X.mode!=="practice"||!vt||pe===fe.SIMULATING||pe===fe.STRIKING){ut("仅自由练习模式下且出杆后可撤回","info",1600);return}Kr(vt.preBalls),ot=vt.angle,mn=vt.spinX,En=vt.spinY,Zt=vt.elevation,Wi.value=String(Zt),Ts.textContent=`${Zt}°`,qi(),pe=fe.AIMING,kt(),ut("已恢复上一杆球型，继续特训！","good",1800)}function $r(){return X.mode==="ai"&&X.currentPlayer===1&&!X.gameOver}function _s(){return X.gameOver||pe===fe.LOBBY?!1:X.mode==="online"?X.currentPlayer===Mt.myPlayerIndex:X.mode==="ai"?X.currentPlayer===0:!0}function yd(){return X.mode==="online"&&X.currentPlayer!==Mt.myPlayerIndex&&!X.gameOver}function _h(){st=0,Ys=!1,ni=!1,cn(0),wp();const i=nt.getCueBall();if(X.ballInHand||i.pocketed){if(i.pocketed=!1,i.dropping=!1,i.y=Ve,i.vx=i.vy=i.vz=0,i.wx=i.wy=i.wz=0,i.mesh.visible=!0,i.shadowMesh&&(i.shadowMesh.visible=!0,i.shadowMesh.material.opacity=.72),$r()){const t=X.getLegalTargetNums(It,1),n=vi.chooseBallInHandPosition(It,t,X.ballInHandBehindLine,nt);i.x=n.x,i.z=n.z,i.mesh.position.set(i.x,i.y,i.z),i.shadowMesh&&i.shadowMesh.position.set(i.x,.0014,i.z),X.ballInHand=!1,zl();return}if(yd()){const t=nt.findFreeSpot(X.ballInHandBehindLine?Wn-.1:-.45,0);i.x=t.x,i.z=t.z,i.mesh.position.set(i.x,i.y,i.z),i.shadowMesh&&i.shadowMesh.position.set(i.x,.0014,i.z),pe=fe.REMOTE_TURN,kt();return}const e=nt.findFreeSpot(X.ballInHandBehindLine?Wn-.1:-.45,0);i.x=e.x,i.z=e.z,i.mesh.position.set(i.x,i.y,i.z),i.shadowMesh&&i.shadowMesh.position.set(i.x,.0014,i.z),Es=!0,pe=fe.PLACE_CUE,kt();return}if($r())zl();else if(yd())pe=fe.REMOTE_TURN,kt();else{Co();const e=nt.getCueBall();e&&!e.pocketed&&(ms=ot+Math.PI,Mi=1.95,So=0,Mo=0),an="stand",pe=fe.AIMING,kt()}}function Co(){const i=nt.getCueBall(),e=X.getLegalTargetNums(It,X.currentPlayer);let t=null,n=1/0;for(const s of e){const r=nt.getBallByNum(s);if(!r||r.pocketed||r.dropping)continue;const a=Math.hypot(r.x-i.x,r.z-i.z);a<n&&(n=a,t=r)}t&&(ot=Math.atan2(t.z-i.z,t.x-i.x))}function zl(){pe=fe.AI_THINKING,Wa=.85;const i=X.getLegalTargetNums(It,1);Jn=vi.computeShot(It,i,X.isBreakShot),kt()}function Cs(i,e=mn,t=En,n=Zt,s=!1){if(i<.03){st=0,cn(0);return}!$r()&&!s&&(io=i),Si=X.currentPlayer;const r=yo();vt={preBalls:r,postBalls:null,angle:ot,power:i,spinX:e,spinY:t,elevation:n,prevState:null,prevCam:null},X.mode==="online"&&!s&&Mt.sendStrike({angle:ot,power:i,spinX:e,spinY:t,elevation:n,ballsSnapshot:r}),pe=fe.STRIKING,Xa.copy(Mn.position),Xa.y=Math.max(Xa.y,.72),hp.set(0,.02,0).lerp(Il,.55),Ht={active:!0,pullback:i*.36,targetPower:i,spinX:e,spinY:t,elevation:n,elapsed:0,duration:.11,executed:!1},kt()}function ab(){if(!_s())return;bt.playFoul();const i=X.currentPlayer,e=1-i;rn[i].fouls++,rn[i].streak=0,X.currentPlayer=e,X.ballInHand=!0,X.ballInHandBehindLine=!1;const t=`${X.getPlayerName(i)} 30秒出杆超时犯规！${X.getPlayerName(e)} 获得全场自由球`;ut(t,"foul",3e3),X.mode==="online"&&Mt.sendStateSync({ballsSnapshot:yo(),rulesState:X.exportState(),matchStats:rn,toastMessage:t,toastType:"foul",calloutText:"⏱ 出杆超时！"}),_h()}function Up(){pe=fe.GAME_OVER,bt.playWin();const i=X.winner;zn[i]++;const e=Math.ceil(Tn/2);if(Gr=zn[i]>=e,kt(),Ap(eb),Ac.classList.add("hidden"),Gr){fd.textContent="🏆",pd.textContent=`${X.getPlayerName(i)} 赢得比赛！`,md.textContent=Tn>1?`最终局分 ${zn[0]} : ${zn[1]} · ${X.winReason}`:X.winReason,kl.textContent="再来一局";const t=X.mode==="online"?i===Mt.myPlayerIndex:i===0;if(X.mode==="ai"||X.mode==="online"){const{eloDelta:n,coinDelta:s}=HS(ze,t,X.mode,vi.difficulty),r=n>=0?"+":"";Ac.textContent=`${r}${n} 段位分 · +${s} 🪙 金币`,Ac.classList.remove("hidden"),Zr()}}else fd.textContent="🎱",pd.textContent=`${X.getPlayerName(i)} 拿下本局！`,md.textContent=`当前局分 ${zn[0]} : ${zn[1]}（BO${Tn} 抢 ${e} 局）`,kl.textContent="进入下一局";Jr.classList.remove("hidden")}function Np(i){if(Vr=null,vo=!1,bt.updateRollingSound(0),Kr(i.ballsSnapshot),X.importState(i.rulesState),i.matchStats&&(rn=i.matchStats),i.toastType==="foul"&&bt.playFoul(),i.toastMessage&&ut(i.toastMessage,i.toastType||"normal",i.toastType==="win"?4500:2800),i.calloutText&&Eo(i.calloutText),X.gameOver){Up();return}mn=0,En=0,Zt=0,Wi.value="0",Ts.textContent="0°",qi(),_h()}function ob(){if(bt.updateRollingSound(0),X.mode==="online"&&Si!==Mt.myPlayerIndex){Vr?Np(Vr):vo=!0;return}const i=nt.shotEvents,e=X.isBreakShot,t=X.evaluateShot(i,It);let n="";const s=rn[Si];if(s.shots++,t.type==="foul"?(s.fouls++,s.streak=0):i.pocketedBalls.length>0&&(t.type==="good"||t.type==="win")?(s.pots+=i.pocketedBalls.length,s.streak+=i.pocketedBalls.length,s.streak>s.maxRun&&(s.maxRun=s.streak),(X.mode==="online"?Si===Mt.myPlayerIndex:Si===0)&&(ze.pots+=i.pocketedBalls.length,s.streak>ze.bestRun&&(ze.bestRun=s.streak),Yn(ze)),t.type==="win"?n="🏆 绝杀黑八！":e&&s.topSpeed>=21?n="💥 雷霆开球！":vt&&vt.elevation>=10&&Math.abs(vt.spinX)>=.25?n="🌀 完美弧线球！":s.streak>=3&&(n=`🔥 一杆连进 ×${s.streak}！`),n&&Eo(n)):s.streak=0,t.respotEight){const r=nt.getBallByNum(8);if(r){const a=nt.findFreeSpot(oh,0);r.pocketed=!1,r.dropping=!1,r.x=a.x,r.y=Ve,r.z=a.z,r.vx=r.vy=r.vz=0,r.wx=r.wy=r.wz=0,r.mesh.visible=!0,r.mesh.position.set(r.x,r.y,r.z),r.shadowMesh&&(r.shadowMesh.visible=!0,r.shadowMesh.position.set(r.x,.0014,r.z),r.shadowMesh.material.opacity=.72)}}if(X.mode==="online"&&Mt.sendStateSync({ballsSnapshot:yo(),rulesState:X.exportState(),matchStats:rn,toastMessage:t.message,toastType:t.type,calloutText:n}),t.type==="foul"&&bt.playFoul(),ut(t.message,t.type,t.type==="win"?4500:2800),X.gameOver){Up();return}mn=0,En=0,Zt=0,Wi.value="0",Ts.textContent="0°",qi(),_h()}function Sd(i,e){const t=Tt.domElement.getBoundingClientRect();yc.x=(i-t.left)/t.width*2-1,yc.y=-((e-t.top)/t.height)*2+1,sd.setFromCamera(yc,Mn);const n=new I;return sd.ray.intersectPlane(jS,n)?n:null}Tt.domElement.addEventListener("contextmenu",i=>i.preventDefault());Tt.domElement.addEventListener("pointerdown",i=>{if(pe!==fe.LOBBY){if(bt.ensureContext(),Dl=i.clientX,Tr=i.clientY,i.button===2){if(Dn){Dn=!1,wn=0,st=0,cn(0);return}oo=!0;return}if(i.button===0){if(pe===fe.PLACE_CUE){if(Es){const e=nt.getCueBall();X.mode==="online"&&Mt.sendPlaceCue(e.x,e.z,!0),X.ballInHand=!1,X.ballInHandBehindLine=!1,_t.updatePlacementRing(!1,0,0,!0,!1),X.isBreakShot||Co(),pe=fe.AIMING,ni=!1,kt(),ut("白球已放好！移动鼠标瞄准，按住左键前后运杆、拉杆定力后推杆出杆","good",2400)}else ut("此处与其他球重叠，请移到空位","foul",1500);return}if(pe===fe.AIMING){if(Bt==="aim"&&an==="stand"){an="aim",ni=!1,ei=0;const e=nt.getCueBall();if(e&&!e.pocketed){const t=e.x-Mn.position.x,n=e.z-Mn.position.z;Math.hypot(t,n)>.1&&(ot=Math.atan2(n,t))}id(),kt(),ut("已进入瞄准（鼠标已锁定，可无限旋转）· 按住左键拉杆出杆，Esc/WSAD 退出锁定","good",2600);return}Bt==="aim"&&document.pointerLockElement!==Tt.domElement&&id(),Dn=!0,Di=0,wn=0,st=0,cn(0),Qn.textContent="握杆中 · 向后拉杆定力，前后运杆，向前推杆（或松开）出杆"}}}});Tt.domElement.addEventListener("pointerleave",()=>{ni=!1});window.addEventListener("pointermove",i=>{if(pe===fe.LOBBY)return;if(pe===fe.PLACE_CUE&&!oo){const t=Sd(i.clientX,i.clientY);if(t){const n=nt.getCueBall(),s=X.ballInHandBehindLine?Wn-Ve:ke-Ve-.004,r=-ke+Ve+.004,a=-Le+Ve+.004,o=Le-Ve-.004;n.x=Math.max(r,Math.min(s,t.x)),n.z=Math.max(a,Math.min(o,t.z)),n.mesh.position.set(n.x,Ve,n.z),n.shadowMesh&&n.shadowMesh.position.set(n.x,.0014,n.z),Es=nt.isPositionFree(n.x,n.z,0),X.mode==="online"&&Mt.sendPlaceCue(n.x,n.z,!1)}return}if(oo){const t=i.clientX-Dl,n=i.clientY-Tr;Dl=i.clientX,Tr=i.clientY,Bt!=="free"&&Bi("free"),Ll-=t*.0065,wr=Math.max(.12,Math.min(1.48,wr+n*.0055));return}if(Dn&&pe===fe.AIMING){const t=document.pointerLockElement===Tt.domElement?i.movementY:i.clientY-Tr;Tr=i.clientY,Di=Math.max(-25,Math.min(260,Di+t));const s=Math.max(0,Math.min(1,Di/220));if(s>wn&&(wn=s),Di<=-10&&wn>=.07){const a=wn;Dn=!1,wn=0,Di=0,st=a,cn(st),mh(),Cs(a);return}s<.03&&Di>=0&&(wn=Math.max(wn*.85,s)),st=s,cn(st);const r=(st*36).toFixed(1);Qn.textContent=`拉杆 ${r} cm (${Math.round(st*100)}%) · 向前推杆或松开出杆`;return}const e=document.pointerLockElement===Tt.domElement;if(pe===fe.AIMING&&!Dn&&!xs&&!bo&&!Vi&&!Ys&&(e||i.target===Tt.domElement))if(Bt==="aim"&&an==="stand"){const t=(i.clientX/window.innerWidth-.5)*2,n=(i.clientY/window.innerHeight-.5)*2;So=t*.45,Mo=n*.28,ei=0,ni=!1}else if(Bt==="top"||Bt==="tv"||Bt==="free"){const t=Sd(i.clientX,i.clientY);if(t){const n=nt.getCueBall();Math.hypot(t.x-n.x,t.z-n.z)>.025&&(ot=Math.atan2(t.z-n.z,t.x-n.x))}ei=0,ni=!1}else if(e){const t=i.shiftKey?7e-4:.0026;ot+=i.movementX*t,ei=0}else{if(!ni){ni=!0,vc=i.clientX;return}const t=i.clientX-vc;vc=i.clientX;const n=i.shiftKey?8e-4:.0032;ot+=t*n;const s=window.innerWidth*.08;i.clientX<s?ei=-1:i.clientX>window.innerWidth-s?ei=1:ei=0}else ni=!1,ei=0});window.addEventListener("pointerup",()=>{Dn&&(Dn=!1,pe===fe.AIMING&&st>=.05?(mh(),Cs(st)):(st=0,cn(0),kt()),wn=0,Di=0),oo=!1});Tt.domElement.addEventListener("wheel",i=>{pe!==fe.LOBBY&&(i.preventDefault(),Bt==="free"?Pr=Math.max(1.05,Math.min(4.4,Pr+i.deltaY*.002)):Bt==="aim"&&(ao=Math.max(.62,Math.min(1.55,ao+i.deltaY*.001))))},{passive:!1});let Gl=0;co.addEventListener("pointerdown",i=>{pe===fe.AIMING&&(bo=!0,Gl=i.clientX,co.setPointerCapture(i.pointerId))});co.addEventListener("pointermove",i=>{if(!bo||pe!==fe.AIMING)return;const e=i.clientX-Gl;Gl=i.clientX,ot+=e*85e-5});co.addEventListener("pointerup",()=>{bo=!1});CM.addEventListener("click",()=>{pe===fe.AIMING&&(ot-=.25*Math.PI/180)});AM.addEventListener("click",()=>{pe===fe.AIMING&&(ot+=.25*Math.PI/180)});function Op(){if(pe!==fe.AIMING)return;const i=X.getLegalTargetNums(It,X.currentPlayer),e=vi.accuracyError;vi.accuracyError=0;const t=vi.computeShot(It,i,X.isBreakShot);vi.accuracyError=e,t&&(ot=t.angle,ut(`已对准推荐线路（建议力度 ${Math.round(t.power*100)}%）`,"good",2e3))}RM.addEventListener("click",Op);wM.addEventListener("click",()=>{_t.triggerLegalHighlight(2.8),ut("已高亮本方所有合法目标球","info",1600)});function Fp(i){const e=Hr.getBoundingClientRect();st=Math.max(0,Math.min(1,(i-e.top)/e.height)),cn(st)}Hr.addEventListener("pointerdown",i=>{pe===fe.AIMING&&(bt.ensureContext(),xs=!0,Hr.setPointerCapture(i.pointerId),Fp(i.clientY))});Hr.addEventListener("pointermove",i=>{xs&&Fp(i.clientY)});Hr.addEventListener("pointerup",()=>{xs&&(xs=!1,st>=.04&&pe===fe.AIMING?Cs(st):(st=0,cn(0)))});EM.forEach(i=>{i.addEventListener("click",()=>{if(pe!==fe.AIMING)return;bt.ensureContext();const e=Number(i.dataset.qp);st=e,cn(e),Cs(e)})});_p.addEventListener("click",()=>{xs=!1,Dn=!1,wn=0,Vi=!1,st=0,cn(0)});gp.addEventListener("click",()=>{pe===fe.AIMING&&X.isBreakShot&&Lp(!0)});mp.addEventListener("click",()=>{!_s()||ro[X.currentPlayer]||(ro[X.currentPlayer]=!0,yi+=15,so=99,To(),ut("已使用加时 +15 秒！","good",1600),X.mode==="online"&&Mt.sendExtension())});let vh=!1;function Bp(i){const e=Wr.getBoundingClientRect(),t=e.left+e.width/2,n=e.top+e.height/2,s=e.width*.42;let r=(i.clientX-t)/s,a=-(i.clientY-n)/s;const o=Math.hypot(r,a);o>1&&(r/=o,a/=o),mn=r,En=a,qi()}Wr.addEventListener("pointerdown",i=>{vh=!0,Wr.setPointerCapture(i.pointerId),Bp(i)});Wr.addEventListener("pointermove",i=>{vh&&Bp(i)});Wr.addEventListener("pointerup",()=>{vh=!1});TM.addEventListener("click",()=>{mn=0,En=0,Zt=0,Wi.value="0",Ts.textContent="0°",qi()});Wi.addEventListener("input",()=>{Zt=Number(Wi.value),Ts.textContent=`${Zt}°`,qi()});window.addEventListener("keydown",i=>{if(!(document.activeElement&&document.activeElement.tagName==="INPUT")){if(dn.add(i.code),pe===fe.LOBBY){i.code==="Escape"&&(Xr.classList.add("hidden"),us.classList.add("hidden"),uo.classList.add("hidden"),gs.classList.add("hidden"));return}if(i.code==="Digit1"&&(Bi("aim"),pe===fe.AIMING&&(an=an==="stand"?"aim":"stand",kt())),i.code==="Digit2"&&Bi("top"),i.code==="Digit3"&&Bi("tv"),i.code==="Digit4"&&Bi("free"),pe===fe.AIMING&&Bt==="aim"&&an==="aim"&&!Dn&&(i.code==="KeyW"||i.code==="KeyS"||i.code==="KeyA"||i.code==="KeyD")&&(an="stand",ms=ot+Math.PI,Mi=1.95,mh(),kt()),i.code==="KeyM"&&pe===fe.AIMING&&X.isBreakShot&&Lp(!0),i.code==="KeyC"&&(bt.playChalk(),ut("已擦巧粉 · 增大摩擦力防滑杆","info",1400)),i.code==="KeyV"&&gh(),i.code==="KeyT"&&Op(),i.code==="KeyL"&&pe===fe.AIMING&&(Ys=!Ys,ut(Ys?"已锁定瞄准方向":"已解锁鼠标移动瞄准","info",1400)),i.code==="KeyH"&&(_t.triggerLegalHighlight(2.8),ut("已高亮本方所有合法目标球","info",1600)),i.code==="KeyZ"&&X.mode==="practice"&&Dp(),i.code==="Tab"&&(i.preventDefault(),yh()),i.code==="KeyR"&&(mn=0,En=0,Zt=0,Wi.value="0",Ts.textContent="0°",qi()),i.code==="Escape"){if(pe===fe.REPLAYING){Ip();return}us.classList.add("hidden"),Xr.classList.add("hidden"),uo.classList.add("hidden"),gs.classList.add("hidden"),Vi=!1,xs=!1,Dn=!1,wn=0,st=0,cn(0)}if(i.code==="Space"){if(i.preventDefault(),bt.ensureContext(),pe===fe.PLACE_CUE&&Es){const e=nt.getCueBall();X.mode==="online"&&Mt.sendPlaceCue(e.x,e.z,!0),X.ballInHand=!1,X.ballInHandBehindLine=!1,_t.updatePlacementRing(!1,0,0,!0,!1),X.isBreakShot||Co(),pe=fe.AIMING,kt();return}pe===fe.AIMING&&!Vi&&(Vi=!0,$a=1,st=.05)}}});window.addEventListener("keyup",i=>{dn.delete(i.code),i.code==="Space"&&Vi&&(Vi=!1,pe===fe.AIMING&&st>=.04?Cs(st):(st=0,cn(0)))});function kp(){document.fullscreenElement?document.exitFullscreen?.().catch(()=>{}):document.documentElement.requestFullscreen?.().catch(()=>{})}nM.addEventListener("click",kp);NM.addEventListener("click",kp);fp.addEventListener("click",()=>{const i=(xc.indexOf(ze.avatar)+1)%xc.length;ze.avatar=xc[i],Yn(ze),Zr()});Ul.addEventListener("change",()=>{const i=Ul.value.trim()||"台球大师";ze.name=i.slice(0,10),Yn(ze),Zr()});rd.forEach(i=>{i.addEventListener("click",()=>{Tn=Number(i.dataset.bo),rd.forEach(e=>e.classList.toggle("active",e===i))})});pp.forEach(i=>{i.addEventListener("click",()=>{Sh(i.dataset.ldiff)})});iM.addEventListener("click",()=>Xi("ai",Tn));sM.addEventListener("click",()=>gs.classList.remove("hidden"));rM.addEventListener("click",()=>Xi("pvp",Tn));aM.addEventListener("click",()=>Xi("practice",1,ps));QS.addEventListener("click",()=>Xr.classList.remove("hidden"));eM.addEventListener("click",yh);tM.addEventListener("click",()=>uo.classList.remove("hidden"));KM.addEventListener("click",()=>uo.classList.add("hidden"));PM.addEventListener("click",ir);nb.addEventListener("click",ir);function Bi(i){Bt=i,vp.forEach(e=>e.classList.toggle("active",e.dataset.cam===i))}vp.forEach(i=>i.addEventListener("click",()=>Bi(i.dataset.cam)));xp.forEach(i=>{i.addEventListener("click",()=>Qr("practice",i.dataset.drill,0))});yM.addEventListener("click",Dp);IM.addEventListener("click",gh);tb.addEventListener("click",gh);function yh(){us.classList.contains("hidden")?(Ap(JM),sb(),us.classList.remove("hidden")):us.classList.add("hidden")}DM.addEventListener("click",yh);QM.addEventListener("click",()=>us.classList.add("hidden"));UM.addEventListener("click",()=>Xr.classList.remove("hidden"));jM.addEventListener("click",()=>Xr.classList.add("hidden"));function zp(i){XS(i),Sp.forEach(e=>e.classList.toggle("active",e.dataset.cloth===i)),ze.clothTheme=i,Yn(ze)}Sp.forEach(i=>i.addEventListener("click",()=>zp(i.dataset.cloth)));function Gp(i){_t.setCueSkin(i),Mp.forEach(e=>e.classList.toggle("active",e.dataset.cue===i)),ze.cueSkin=i,Yn(ze)}Mp.forEach(i=>i.addEventListener("click",()=>Gp(i.dataset.cue)));function Sh(i){vi.setDifficulty(i),bp.forEach(e=>e.classList.toggle("active",e.dataset.diff===i)),pp.forEach(e=>e.classList.toggle("active",e.dataset.ldiff===i)),ze.aiDifficulty=i,Yn(ze)}bp.forEach(i=>i.addEventListener("click",()=>Sh(i.dataset.diff)));function Vp(i){_t.setGuideMode(i),Ep.forEach(e=>e.classList.toggle("active",e.dataset.guide===i)),ze.guideMode=i,Yn(ze)}Ep.forEach(i=>i.addEventListener("click",()=>Vp(i.dataset.guide)));function Hp(i){Rr=i==="high",Tt.setPixelRatio(Rr?Math.min(window.devicePixelRatio,2):1),Tp.forEach(e=>e.classList.toggle("active",e.dataset.gfx===i)),ze.highGraphics=Rr,Yn(ze)}Tp.forEach(i=>i.addEventListener("click",()=>Hp(i.dataset.gfx)));let ls=!!ze.muted;bt.setMuted(ls);Ol.textContent=ls?"🔇":"🔊";Ol.addEventListener("click",()=>{ls=!ls,bt.setMuted(ls),Ol.textContent=ls?"🔇":"🔊",ze.muted=ls,Yn(ze)});const Mt=new GS({onRoomCreated(i){Fl.classList.add("hidden"),Bl.classList.remove("hidden"),XM.textContent=i;const e=window.location.pathname.replace(/index\.html$/,"");if(window.location.hostname==="localhost"||window.location.hostname==="127.0.0.1")fetch("/api/lan-info").then(n=>n.json()).then(({ip:n,port:s})=>{const r=`${window.location.protocol}//${n}:${s}${e}?room=${i}`;Ui.textContent=r,Ui.dataset.link=r}).catch(()=>{const n=`${window.location.origin}${e}?room=${i}`;Ui.textContent=n,Ui.dataset.link=n});else{const n=`${window.location.origin}${e}?room=${i}`;Ui.textContent=n,Ui.dataset.link=n}},onMatchStart(i){gs.classList.add("hidden"),Fl.classList.remove("hidden"),Bl.classList.add("hidden");const e=i.transport==="ws"?"局域网":"P2P";BM.textContent=`🟢 ${e} · 房间 ${i.code}`,qa.innerHTML="",X.setOnlineNames(i.names),Xi("online",i.bestOf||1)},onOpponentAim(i){cs={angle:i.angle??cs.angle,power:i.power??0,spinX:i.spinX??0,spinY:i.spinY??0,elevation:i.elevation??0}},onOpponentPlaceCue(i){const e=nt.getCueBall();e&&(e.pocketed=!1,e.dropping=!1,e.x=i.x,e.y=Ve,e.z=i.z,e.mesh.visible=!0,e.mesh.position.set(e.x,e.y,e.z),e.shadowMesh&&(e.shadowMesh.visible=!0,e.shadowMesh.position.set(e.x,.0014,e.z)))},onOpponentStrike(i){i.ballsSnapshot&&Kr(i.ballsSnapshot),ot=i.angle,Cs(i.power,i.spinX,i.spinY,i.elevation||0,!0)},onStateSync(i){vo||pe!==fe.SIMULATING?Np(i):Vr=i},onNextFrame(i){Qr("online","rack",i.breakerIdx??0)},onRematch(){ut("对手发起了再来一局！","good",2200),Xi("online",Tn)},onExtension(){yi+=15,ut("对手使用了 +15 秒加时","info",1800)},onChat(i,e){Cp(i,e),lo.classList.contains("hidden")&&ut(`💬 ${i}: ${e}`,"info",2600)},onEmote(i){const e=1-Mt.myPlayerIndex;Eo(`${X.getPlayerName(e)}: ${i}`)},onOpponentLeft(){ut("对手已离开房间，返回主大厅","foul",3e3),ir()},onDisconnected(){ut("联机连接已断开","foul",2800),ir()},onError(i){ut(i,"foul",2600)}});LM.addEventListener("click",()=>gs.classList.remove("hidden"));YM.addEventListener("click",()=>gs.classList.add("hidden"));dd.forEach(i=>{i.addEventListener("click",()=>{cp=Number(i.dataset.obo),dd.forEach(e=>e.classList.toggle("active",e===i))})});HM.addEventListener("click",async()=>{const i=(xh.value||ze.name||"房主").trim();try{await Mt.createRoom(i,cp)}catch(e){ut(e.message||"连接联机服务失败","foul",2600)}});WM.addEventListener("click",async()=>{const i=yp.value.trim();if(i.length<4){ut("请输入 4 位房间号","foul",1800);return}const e=(xh.value||ze.name||"挑战者").trim();try{await Mt.joinRoom(i,e)}catch(t){ut(t.message||"加入房间失败","foul",2600)}});qM.addEventListener("click",()=>{Mt.leaveRoom(),Bl.classList.add("hidden"),Fl.classList.remove("hidden")});$M.addEventListener("click",async()=>{const i=Ui.dataset.link||Ui.textContent;try{await navigator.clipboard.writeText(i),ut("邀请链接已复制！发给好友浏览器打开即可直接开战","good",2600)}catch{ut("请手动复制上方邀请链接","info",2e3)}});kM.addEventListener("click",()=>{Mt.leaveRoom(),ir(),ut("已退出联机房间","info",1800)});zM.addEventListener("click",()=>{lo.classList.toggle("hidden"),lo.classList.contains("hidden")||ho.focus()});function Wp(){const i=ho.value.trim();i&&(Mt.sendChat(i),Cp(ze.name,i),ho.value="")}GM.addEventListener("click",Wp);ho.addEventListener("keydown",i=>{i.key==="Enter"&&Wp()});VM.forEach(i=>{i.addEventListener("click",()=>{const e=i.dataset.emote;Mt.sendEmote(e),Eo(`我: ${e}`)})});function cb(){if(!Gr&&X.gameOver){const i=(zn[0]+zn[1])%2;X.mode==="online"&&Mt.sendNextFrame({breakerIdx:i}),Qr(X.mode,ps,i)}else X.mode==="online"?(Mt.sendRematch(),Xi("online",Tn)):Xi(X.mode,Tn,ps)}OM.addEventListener("click",()=>{X.mode==="online"?(Mt.sendRematch(),Xi("online",Tn)):Qr(X.mode,ps,0)});kl.addEventListener("click",cb);zp(ze.clothTheme);Gp(ze.cueSkin);Sh(ze.aiDifficulty);Vp("off");Hp(Rr?"high":"fast");Zr();window.addEventListener("resize",()=>{const i=window.innerWidth,e=window.innerHeight;Mn.aspect=i/e,Mn.updateProjectionMatrix(),Tt.setSize(i,e),jr.setSize(i,e),ap.setSize(i,e)});function lb(i){if(pe===fe.LOBBY){_c+=i*.14;const n=2.45;Mn.position.set(Math.cos(_c)*n,1.32,Math.sin(_c)*n*.85),Mn.lookAt(0,-.05,0);return}const e=nt.getCueBall(),t=1-Math.exp(-4.2*i);if(Bt==="top"||pe===fe.PLACE_CUE){const n=pe===fe.PLACE_CUE&&Bt!=="top"?2.6:2.88;is.set(0,n,.001),ss.set(0,0,0)}else if(Bt==="tv"||pe===fe.REPLAYING){const n=e&&!e.pocketed?e.x*.18:0,s=e&&!e.pocketed?e.z*.18:0;is.set(-1.72+n*.2,1.52,1.62),ss.set(n,.02,s)}else if(Bt==="free"){const n=Math.cos(Ll)*Math.cos(wr)*Pr,s=Math.sin(wr)*Pr,r=Math.sin(Ll)*Math.cos(wr)*Pr;is.set(n,s,r),ss.set(0,0,0)}else if(pe===fe.SIMULATING||pe===fe.STRIKING)is.copy(Xa),ss.copy(hp);else if(an==="stand"){const n=Math.cos(ms)*Mi*1.18,s=Math.sin(ms)*Mi*.82;is.set(n,.86,s),ss.set(So,.02,Mo)}else if(e&&!e.pocketed){const n=.96*ao,s=.24*ao,r=Math.cos(ot),a=Math.sin(ot);is.set(e.x-r*n,s,e.z-a*n),ss.set(e.x+r*.65,Ve*.95,e.z+a*.65)}Mn.position.lerp(is,t),Il.lerp(ss,t),Mn.lookAt(Il)}let Md=performance.now();function Xp(i){requestAnimationFrame(Xp);const e=Math.min(.05,(i-Md)/1e3);if(Md=i,gc&&(gc.rotation.y+=e*.015,gc.position.y=Math.sin(i*4e-4)*.03),_t.updateParticles(e),Rp()&&(pe===fe.AIMING||pe===fe.PLACE_CUE||pe===fe.REMOTE_TURN)){yi-=e;const n=Math.ceil(yi);n<=5&&n>=1&&n<so&&(so=n,bt.playTick(n<=2)),yi<=0&&(yi=0,_s()&&ab()),To()}if(pe===fe.AIMING){const n=dn.has("ShiftLeft")||dn.has("ShiftRight");if(Bt==="aim"&&an==="stand"){const s=n?.55:1.35;(dn.has("KeyA")||dn.has("ArrowLeft"))&&(ms+=s*e),(dn.has("KeyD")||dn.has("ArrowRight"))&&(ms-=s*e),(dn.has("KeyW")||dn.has("ArrowUp"))&&(Mi=Math.max(1.28,Mi-1.45*e)),(dn.has("KeyS")||dn.has("ArrowDown"))&&(Mi=Math.min(2.85,Mi+1.45*e))}else{const s=n?.25:1.2;dn.has("ArrowLeft")&&(ot-=s*e),dn.has("ArrowRight")&&(ot+=s*e),ei!==0&&!Dn&&(ot+=ei*(n?.3:1.1)*e)}Vi&&(st+=$a*.85*e,st>=1?(st=1,$a=-1):st<=.05&&(st=.05,$a=1),cn(st))}if(pe===fe.AI_THINKING&&Jn){let n=Jn.angle-ot;for(;n>Math.PI;)n-=Math.PI*2;for(;n<-Math.PI;)n+=Math.PI*2;ot+=n*Math.min(1,e*8),Wa-=e;const s=nt.getCueBall(),r=X.getLegalTargetNums(It,1),a=Math.max(0,(.4-Wa)*.45)*Jn.power;_t.update(s,ot,Math.max(0,a),It,r,!1,0,0,0),Wa<=0&&(ot=Jn.angle,Cs(Jn.power,Jn.spinX,Jn.spinY,Jn.elevation||0),Jn=null)}if(pe===fe.STRIKING&&Ht.active){Ht.elapsed+=e;const n=Math.min(1,Ht.elapsed/Ht.duration),s=Ht.pullback*(1-n*n)-.025*n,r=nt.getCueBall();if(_t.update(r,ot,s,It,[],!1,Ht.elevation,Ht.spinX,Ht.spinY),n>=1&&!Ht.executed){Ht.executed=!0,Ht.active=!1,_t.setVisible(!1,!1),_t.emitChalkPuff(r.x,r.y,r.z,ot,Ht.targetPower),_t.resetCueTrail(r);const a=nt.strikeCueBall(ot,Ht.targetPower,Ht.spinX,Ht.spinY,Ht.elevation),o=a*3.6;o>rn[Si].topSpeed&&(rn[Si].topSpeed=o),(X.mode==="online"?Si===Mt.myPlayerIndex:Si===0)&&o>ze.topSpeed&&(ze.topSpeed=o,Yn(ze)),ib(a),pe=fe.SIMULATING,kt()}}if(pe===fe.AIMING){const n=nt.getCueBall(),s=X.getLegalTargetNums(It,X.currentPlayer);Bt==="aim"&&an==="stand"?_t.setVisible(!1,!1):_t.update(n,ot,st*.36,It,s,!0,Zt,mn,En),_t.updatePlacementRing(!1,0,0,!0,!1),X.mode==="online"&&an==="aim"&&Mt.sendAim({angle:ot,power:st,spinX:mn,spinY:En,elevation:Zt})}else if(pe===fe.REMOTE_TURN){let n=cs.angle-ot;for(;n>Math.PI;)n-=Math.PI*2;for(;n<-Math.PI;)n+=Math.PI*2;ot+=n*Math.min(1,e*14);const s=nt.getCueBall();_t.update(s,ot,cs.power*.36,It,[],!1,cs.elevation,cs.spinX,cs.spinY),_t.updatePlacementRing(!1,0,0,!0,!1)}else if(pe===fe.PLACE_CUE){const n=nt.getCueBall();_t.setVisible(!1,!1),_t.updatePlacementRing(!0,n.x,n.z,Es,X.ballInHandBehindLine)}const t=X.getLegalTargetNums(It,X.currentPlayer);_t.updateHalos(e,It,t,X.isOnEightBall(X.currentPlayer,It),pe===fe.AIMING),_t.updateCueTrail(nt.getCueBall(),pe===fe.SIMULATING||pe===fe.REPLAYING),pe===fe.SIMULATING?nt.step(e)||ob():pe===fe.REPLAYING&&(nt.step(e*.45)||Ip()),lb(e),Rr?jr.render():Tt.render(gn,Mn)}ir();const Rc=new URLSearchParams(window.location.search).get("room");Rc&&(yp.value=Rc.slice(0,4),gs.classList.remove("hidden"),ut(`已填入邀请房间号 ${Rc}，点击「加入房间」即可开战！`,"good",4e3));requestAnimationFrame(Xp);
