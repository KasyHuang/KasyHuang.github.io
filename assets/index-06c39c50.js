(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function t(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(s){if(s.ep)return;s.ep=!0;const r=t(s);fetch(s.href,r)}})();function $l(i,e){const t=Object.create(null),n=i.split(",");for(let s=0;s<n.length;s++)t[n[s]]=!0;return e?s=>!!t[s.toLowerCase()]:s=>!!t[s]}function Kl(i){if(ze(i)){const e={};for(let t=0;t<i.length;t++){const n=i[t],s=yt(n)?dm(n):Kl(n);if(s)for(const r in s)e[r]=s[r]}return e}else{if(yt(i))return i;if(ut(i))return i}}const um=/;(?![^(]*\))/g,hm=/:([^]+)/,fm=/\/\*.*?\*\//gs;function dm(i){const e={};return i.replace(fm,"").split(um).forEach(t=>{if(t){const n=t.split(hm);n.length>1&&(e[n[0].trim()]=n[1].trim())}}),e}function Jl(i){let e="";if(yt(i))e=i;else if(ze(i))for(let t=0;t<i.length;t++){const n=Jl(i[t]);n&&(e+=n+" ")}else if(ut(i))for(const t in i)i[t]&&(e+=t+" ");return e.trim()}const pm="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",mm=$l(pm);function Hf(i){return!!i||i===""}const gm=i=>yt(i)?i:i==null?"":ze(i)||ut(i)&&(i.toString===jf||!Ne(i.toString))?JSON.stringify(i,Gf,2):String(i),Gf=(i,e)=>e&&e.__v_isRef?Gf(i,e.value):ys(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((t,[n,s])=>(t[`${n} =>`]=s,t),{})}:Wf(e)?{[`Set(${e.size})`]:[...e.values()]}:ut(e)&&!ze(e)&&!qf(e)?String(e):e,lt={},vs=[],bn=()=>{},_m=()=>!1,xm=/^on[^a-z]/,Ho=i=>xm.test(i),Ql=i=>i.startsWith("onUpdate:"),It=Object.assign,ec=(i,e)=>{const t=i.indexOf(e);t>-1&&i.splice(t,1)},vm=Object.prototype.hasOwnProperty,Ze=(i,e)=>vm.call(i,e),ze=Array.isArray,ys=i=>Go(i)==="[object Map]",Wf=i=>Go(i)==="[object Set]",Ne=i=>typeof i=="function",yt=i=>typeof i=="string",tc=i=>typeof i=="symbol",ut=i=>i!==null&&typeof i=="object",Xf=i=>ut(i)&&Ne(i.then)&&Ne(i.catch),jf=Object.prototype.toString,Go=i=>jf.call(i),ym=i=>Go(i).slice(8,-1),qf=i=>Go(i)==="[object Object]",nc=i=>yt(i)&&i!=="NaN"&&i[0]!=="-"&&""+parseInt(i,10)===i,wo=$l(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Wo=i=>{const e=Object.create(null);return t=>e[t]||(e[t]=i(t))},Mm=/-(\w)/g,Dn=Wo(i=>i.replace(Mm,(e,t)=>t?t.toUpperCase():"")),bm=/\B([A-Z])/g,zs=Wo(i=>i.replace(bm,"-$1").toLowerCase()),Xo=Wo(i=>i.charAt(0).toUpperCase()+i.slice(1)),pa=Wo(i=>i?`on${Xo(i)}`:""),mr=(i,e)=>!Object.is(i,e),ma=(i,e)=>{for(let t=0;t<i.length;t++)i[t](e)},Ro=(i,e,t)=>{Object.defineProperty(i,e,{configurable:!0,enumerable:!1,value:t})},wm=i=>{const e=parseFloat(i);return isNaN(e)?i:e};let Wc;const Sm=()=>Wc||(Wc=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});let xn;class Tm{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this.parent=xn,!e&&xn&&(this.index=(xn.scopes||(xn.scopes=[])).push(this)-1)}get active(){return this._active}run(e){if(this._active){const t=xn;try{return xn=this,e()}finally{xn=t}}}on(){xn=this}off(){xn=this.parent}stop(e){if(this._active){let t,n;for(t=0,n=this.effects.length;t<n;t++)this.effects[t].stop();for(t=0,n=this.cleanups.length;t<n;t++)this.cleanups[t]();if(this.scopes)for(t=0,n=this.scopes.length;t<n;t++)this.scopes[t].stop(!0);if(!this.detached&&this.parent&&!e){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0,this._active=!1}}}function Em(i,e=xn){e&&e.active&&e.effects.push(i)}function Am(){return xn}const ic=i=>{const e=new Set(i);return e.w=0,e.n=0,e},Yf=i=>(i.w&gi)>0,Zf=i=>(i.n&gi)>0,Cm=({deps:i})=>{if(i.length)for(let e=0;e<i.length;e++)i[e].w|=gi},Pm=i=>{const{deps:e}=i;if(e.length){let t=0;for(let n=0;n<e.length;n++){const s=e[n];Yf(s)&&!Zf(s)?s.delete(i):e[t++]=s,s.w&=~gi,s.n&=~gi}e.length=t}},xl=new WeakMap;let tr=0,gi=1;const vl=30;let yn;const ki=Symbol(""),yl=Symbol("");class sc{constructor(e,t=null,n){this.fn=e,this.scheduler=t,this.active=!0,this.deps=[],this.parent=void 0,Em(this,n)}run(){if(!this.active)return this.fn();let e=yn,t=di;for(;e;){if(e===this)return;e=e.parent}try{return this.parent=yn,yn=this,di=!0,gi=1<<++tr,tr<=vl?Cm(this):Xc(this),this.fn()}finally{tr<=vl&&Pm(this),gi=1<<--tr,yn=this.parent,di=t,this.parent=void 0,this.deferStop&&this.stop()}}stop(){yn===this?this.deferStop=!0:this.active&&(Xc(this),this.onStop&&this.onStop(),this.active=!1)}}function Xc(i){const{deps:e}=i;if(e.length){for(let t=0;t<e.length;t++)e[t].delete(i);e.length=0}}let di=!0;const $f=[];function Ns(){$f.push(di),di=!1}function Us(){const i=$f.pop();di=i===void 0?!0:i}function Yt(i,e,t){if(di&&yn){let n=xl.get(i);n||xl.set(i,n=new Map);let s=n.get(t);s||n.set(t,s=ic()),Kf(s)}}function Kf(i,e){let t=!1;tr<=vl?Zf(i)||(i.n|=gi,t=!Yf(i)):t=!i.has(yn),t&&(i.add(yn),yn.deps.push(i))}function Kn(i,e,t,n,s,r){const o=xl.get(i);if(!o)return;let a=[];if(e==="clear")a=[...o.values()];else if(t==="length"&&ze(i)){const l=Number(n);o.forEach((c,u)=>{(u==="length"||u>=l)&&a.push(c)})}else switch(t!==void 0&&a.push(o.get(t)),e){case"add":ze(i)?nc(t)&&a.push(o.get("length")):(a.push(o.get(ki)),ys(i)&&a.push(o.get(yl)));break;case"delete":ze(i)||(a.push(o.get(ki)),ys(i)&&a.push(o.get(yl)));break;case"set":ys(i)&&a.push(o.get(ki));break}if(a.length===1)a[0]&&Ml(a[0]);else{const l=[];for(const c of a)c&&l.push(...c);Ml(ic(l))}}function Ml(i,e){const t=ze(i)?i:[...i];for(const n of t)n.computed&&jc(n);for(const n of t)n.computed||jc(n)}function jc(i,e){(i!==yn||i.allowRecurse)&&(i.scheduler?i.scheduler():i.run())}const Lm=$l("__proto__,__v_isRef,__isVue"),Jf=new Set(Object.getOwnPropertyNames(Symbol).filter(i=>i!=="arguments"&&i!=="caller").map(i=>Symbol[i]).filter(tc)),Rm=rc(),Dm=rc(!1,!0),Im=rc(!0),qc=Fm();function Fm(){const i={};return["includes","indexOf","lastIndexOf"].forEach(e=>{i[e]=function(...t){const n=Je(this);for(let r=0,o=this.length;r<o;r++)Yt(n,"get",r+"");const s=n[e](...t);return s===-1||s===!1?n[e](...t.map(Je)):s}}),["push","pop","shift","unshift","splice"].forEach(e=>{i[e]=function(...t){Ns();const n=Je(this)[e].apply(this,t);return Us(),n}}),i}function Om(i){const e=Je(this);return Yt(e,"has",i),e.hasOwnProperty(i)}function rc(i=!1,e=!1){return function(n,s,r){if(s==="__v_isReactive")return!i;if(s==="__v_isReadonly")return i;if(s==="__v_isShallow")return e;if(s==="__v_raw"&&r===(i?e?Km:id:e?nd:td).get(n))return n;const o=ze(n);if(!i){if(o&&Ze(qc,s))return Reflect.get(qc,s,r);if(s==="hasOwnProperty")return Om}const a=Reflect.get(n,s,r);return(tc(s)?Jf.has(s):Lm(s))||(i||Yt(n,"get",s),e)?a:Dt(a)?o&&nc(s)?a:a.value:ut(a)?i?sd(a):Ir(a):a}}const zm=Qf(),Nm=Qf(!0);function Qf(i=!1){return function(t,n,s,r){let o=t[n];if(Cs(o)&&Dt(o)&&!Dt(s))return!1;if(!i&&(!Do(s)&&!Cs(s)&&(o=Je(o),s=Je(s)),!ze(t)&&Dt(o)&&!Dt(s)))return o.value=s,!0;const a=ze(t)&&nc(n)?Number(n)<t.length:Ze(t,n),l=Reflect.set(t,n,s,r);return t===Je(r)&&(a?mr(s,o)&&Kn(t,"set",n,s):Kn(t,"add",n,s)),l}}function Um(i,e){const t=Ze(i,e);i[e];const n=Reflect.deleteProperty(i,e);return n&&t&&Kn(i,"delete",e,void 0),n}function km(i,e){const t=Reflect.has(i,e);return(!tc(e)||!Jf.has(e))&&Yt(i,"has",e),t}function Bm(i){return Yt(i,"iterate",ze(i)?"length":ki),Reflect.ownKeys(i)}const ed={get:Rm,set:zm,deleteProperty:Um,has:km,ownKeys:Bm},Vm={get:Im,set(i,e){return!0},deleteProperty(i,e){return!0}},Hm=It({},ed,{get:Dm,set:Nm}),oc=i=>i,jo=i=>Reflect.getPrototypeOf(i);function Br(i,e,t=!1,n=!1){i=i.__v_raw;const s=Je(i),r=Je(e);t||(e!==r&&Yt(s,"get",e),Yt(s,"get",r));const{has:o}=jo(s),a=n?oc:t?cc:gr;if(o.call(s,e))return a(i.get(e));if(o.call(s,r))return a(i.get(r));i!==s&&i.get(e)}function Vr(i,e=!1){const t=this.__v_raw,n=Je(t),s=Je(i);return e||(i!==s&&Yt(n,"has",i),Yt(n,"has",s)),i===s?t.has(i):t.has(i)||t.has(s)}function Hr(i,e=!1){return i=i.__v_raw,!e&&Yt(Je(i),"iterate",ki),Reflect.get(i,"size",i)}function Yc(i){i=Je(i);const e=Je(this);return jo(e).has.call(e,i)||(e.add(i),Kn(e,"add",i,i)),this}function Zc(i,e){e=Je(e);const t=Je(this),{has:n,get:s}=jo(t);let r=n.call(t,i);r||(i=Je(i),r=n.call(t,i));const o=s.call(t,i);return t.set(i,e),r?mr(e,o)&&Kn(t,"set",i,e):Kn(t,"add",i,e),this}function $c(i){const e=Je(this),{has:t,get:n}=jo(e);let s=t.call(e,i);s||(i=Je(i),s=t.call(e,i)),n&&n.call(e,i);const r=e.delete(i);return s&&Kn(e,"delete",i,void 0),r}function Kc(){const i=Je(this),e=i.size!==0,t=i.clear();return e&&Kn(i,"clear",void 0,void 0),t}function Gr(i,e){return function(n,s){const r=this,o=r.__v_raw,a=Je(o),l=e?oc:i?cc:gr;return!i&&Yt(a,"iterate",ki),o.forEach((c,u)=>n.call(s,l(c),l(u),r))}}function Wr(i,e,t){return function(...n){const s=this.__v_raw,r=Je(s),o=ys(r),a=i==="entries"||i===Symbol.iterator&&o,l=i==="keys"&&o,c=s[i](...n),u=t?oc:e?cc:gr;return!e&&Yt(r,"iterate",l?yl:ki),{next(){const{value:h,done:f}=c.next();return f?{value:h,done:f}:{value:a?[u(h[0]),u(h[1])]:u(h),done:f}},[Symbol.iterator](){return this}}}}function ti(i){return function(...e){return i==="delete"?!1:this}}function Gm(){const i={get(r){return Br(this,r)},get size(){return Hr(this)},has:Vr,add:Yc,set:Zc,delete:$c,clear:Kc,forEach:Gr(!1,!1)},e={get(r){return Br(this,r,!1,!0)},get size(){return Hr(this)},has:Vr,add:Yc,set:Zc,delete:$c,clear:Kc,forEach:Gr(!1,!0)},t={get(r){return Br(this,r,!0)},get size(){return Hr(this,!0)},has(r){return Vr.call(this,r,!0)},add:ti("add"),set:ti("set"),delete:ti("delete"),clear:ti("clear"),forEach:Gr(!0,!1)},n={get(r){return Br(this,r,!0,!0)},get size(){return Hr(this,!0)},has(r){return Vr.call(this,r,!0)},add:ti("add"),set:ti("set"),delete:ti("delete"),clear:ti("clear"),forEach:Gr(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(r=>{i[r]=Wr(r,!1,!1),t[r]=Wr(r,!0,!1),e[r]=Wr(r,!1,!0),n[r]=Wr(r,!0,!0)}),[i,t,e,n]}const[Wm,Xm,jm,qm]=Gm();function ac(i,e){const t=e?i?qm:jm:i?Xm:Wm;return(n,s,r)=>s==="__v_isReactive"?!i:s==="__v_isReadonly"?i:s==="__v_raw"?n:Reflect.get(Ze(t,s)&&s in n?t:n,s,r)}const Ym={get:ac(!1,!1)},Zm={get:ac(!1,!0)},$m={get:ac(!0,!1)},td=new WeakMap,nd=new WeakMap,id=new WeakMap,Km=new WeakMap;function Jm(i){switch(i){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Qm(i){return i.__v_skip||!Object.isExtensible(i)?0:Jm(ym(i))}function Ir(i){return Cs(i)?i:lc(i,!1,ed,Ym,td)}function eg(i){return lc(i,!1,Hm,Zm,nd)}function sd(i){return lc(i,!0,Vm,$m,id)}function lc(i,e,t,n,s){if(!ut(i)||i.__v_raw&&!(e&&i.__v_isReactive))return i;const r=s.get(i);if(r)return r;const o=Qm(i);if(o===0)return i;const a=new Proxy(i,o===2?n:t);return s.set(i,a),a}function Ms(i){return Cs(i)?Ms(i.__v_raw):!!(i&&i.__v_isReactive)}function Cs(i){return!!(i&&i.__v_isReadonly)}function Do(i){return!!(i&&i.__v_isShallow)}function rd(i){return Ms(i)||Cs(i)}function Je(i){const e=i&&i.__v_raw;return e?Je(e):i}function od(i){return Ro(i,"__v_skip",!0),i}const gr=i=>ut(i)?Ir(i):i,cc=i=>ut(i)?sd(i):i;function ad(i){di&&yn&&(i=Je(i),Kf(i.dep||(i.dep=ic())))}function ld(i,e){i=Je(i);const t=i.dep;t&&Ml(t)}function Dt(i){return!!(i&&i.__v_isRef===!0)}function tg(i){return cd(i,!1)}function ng(i){return cd(i,!0)}function cd(i,e){return Dt(i)?i:new ig(i,e)}class ig{constructor(e,t){this.__v_isShallow=t,this.dep=void 0,this.__v_isRef=!0,this._rawValue=t?e:Je(e),this._value=t?e:gr(e)}get value(){return ad(this),this._value}set value(e){const t=this.__v_isShallow||Do(e)||Cs(e);e=t?e:Je(e),mr(e,this._rawValue)&&(this._rawValue=e,this._value=t?e:gr(e),ld(this))}}function bs(i){return Dt(i)?i.value:i}const sg={get:(i,e,t)=>bs(Reflect.get(i,e,t)),set:(i,e,t,n)=>{const s=i[e];return Dt(s)&&!Dt(t)?(s.value=t,!0):Reflect.set(i,e,t,n)}};function ud(i){return Ms(i)?i:new Proxy(i,sg)}var hd;class rg{constructor(e,t,n,s){this._setter=t,this.dep=void 0,this.__v_isRef=!0,this[hd]=!1,this._dirty=!0,this.effect=new sc(e,()=>{this._dirty||(this._dirty=!0,ld(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!s,this.__v_isReadonly=n}get value(){const e=Je(this);return ad(e),(e._dirty||!e._cacheable)&&(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}hd="__v_isReadonly";function og(i,e,t=!1){let n,s;const r=Ne(i);return r?(n=i,s=bn):(n=i.get,s=i.set),new rg(n,s,r||!s,t)}function pi(i,e,t,n){let s;try{s=n?i(...n):i()}catch(r){qo(r,e,t)}return s}function fn(i,e,t,n){if(Ne(i)){const r=pi(i,e,t,n);return r&&Xf(r)&&r.catch(o=>{qo(o,e,t)}),r}const s=[];for(let r=0;r<i.length;r++)s.push(fn(i[r],e,t,n));return s}function qo(i,e,t,n=!0){const s=e?e.vnode:null;if(e){let r=e.parent;const o=e.proxy,a=t;for(;r;){const c=r.ec;if(c){for(let u=0;u<c.length;u++)if(c[u](i,o,a)===!1)return}r=r.parent}const l=e.appContext.config.errorHandler;if(l){pi(l,null,10,[i,o,a]);return}}ag(i,t,s,n)}function ag(i,e,t,n=!0){console.error(i)}let _r=!1,bl=!1;const Rt=[];let Pn=0;const ws=[];let jn=null,Di=0;const fd=Promise.resolve();let uc=null;function dd(i){const e=uc||fd;return i?e.then(this?i.bind(this):i):e}function lg(i){let e=Pn+1,t=Rt.length;for(;e<t;){const n=e+t>>>1;xr(Rt[n])<i?e=n+1:t=n}return e}function hc(i){(!Rt.length||!Rt.includes(i,_r&&i.allowRecurse?Pn+1:Pn))&&(i.id==null?Rt.push(i):Rt.splice(lg(i.id),0,i),pd())}function pd(){!_r&&!bl&&(bl=!0,uc=fd.then(gd))}function cg(i){const e=Rt.indexOf(i);e>Pn&&Rt.splice(e,1)}function ug(i){ze(i)?ws.push(...i):(!jn||!jn.includes(i,i.allowRecurse?Di+1:Di))&&ws.push(i),pd()}function Jc(i,e=_r?Pn+1:0){for(;e<Rt.length;e++){const t=Rt[e];t&&t.pre&&(Rt.splice(e,1),e--,t())}}function md(i){if(ws.length){const e=[...new Set(ws)];if(ws.length=0,jn){jn.push(...e);return}for(jn=e,jn.sort((t,n)=>xr(t)-xr(n)),Di=0;Di<jn.length;Di++)jn[Di]();jn=null,Di=0}}const xr=i=>i.id==null?1/0:i.id,hg=(i,e)=>{const t=xr(i)-xr(e);if(t===0){if(i.pre&&!e.pre)return-1;if(e.pre&&!i.pre)return 1}return t};function gd(i){bl=!1,_r=!0,Rt.sort(hg);const e=bn;try{for(Pn=0;Pn<Rt.length;Pn++){const t=Rt[Pn];t&&t.active!==!1&&pi(t,null,14)}}finally{Pn=0,Rt.length=0,md(),_r=!1,uc=null,(Rt.length||ws.length)&&gd()}}function fg(i,e,...t){if(i.isUnmounted)return;const n=i.vnode.props||lt;let s=t;const r=e.startsWith("update:"),o=r&&e.slice(7);if(o&&o in n){const u=`${o==="modelValue"?"model":o}Modifiers`,{number:h,trim:f}=n[u]||lt;f&&(s=t.map(d=>yt(d)?d.trim():d)),h&&(s=t.map(wm))}let a,l=n[a=pa(e)]||n[a=pa(Dn(e))];!l&&r&&(l=n[a=pa(zs(e))]),l&&fn(l,i,6,s);const c=n[a+"Once"];if(c){if(!i.emitted)i.emitted={};else if(i.emitted[a])return;i.emitted[a]=!0,fn(c,i,6,s)}}function _d(i,e,t=!1){const n=e.emitsCache,s=n.get(i);if(s!==void 0)return s;const r=i.emits;let o={},a=!1;if(!Ne(i)){const l=c=>{const u=_d(c,e,!0);u&&(a=!0,It(o,u))};!t&&e.mixins.length&&e.mixins.forEach(l),i.extends&&l(i.extends),i.mixins&&i.mixins.forEach(l)}return!r&&!a?(ut(i)&&n.set(i,null),null):(ze(r)?r.forEach(l=>o[l]=null):It(o,r),ut(i)&&n.set(i,o),o)}function Yo(i,e){return!i||!Ho(e)?!1:(e=e.slice(2).replace(/Once$/,""),Ze(i,e[0].toLowerCase()+e.slice(1))||Ze(i,zs(e))||Ze(i,e))}let cn=null,xd=null;function Io(i){const e=cn;return cn=i,xd=i&&i.type.__scopeId||null,e}function vd(i,e=cn,t){if(!e||i._n)return i;const n=(...s)=>{n._d&&cu(-1);const r=Io(e);let o;try{o=i(...s)}finally{Io(r),n._d&&cu(1)}return o};return n._n=!0,n._c=!0,n._d=!0,n}function ga(i){const{type:e,vnode:t,proxy:n,withProxy:s,props:r,propsOptions:[o],slots:a,attrs:l,emit:c,render:u,renderCache:h,data:f,setupState:d,ctx:g,inheritAttrs:p}=i;let m,_;const M=Io(i);try{if(t.shapeFlag&4){const w=s||n;m=An(u.call(w,w,h,r,d,f,g)),_=l}else{const w=e;m=An(w.length>1?w(r,{attrs:l,slots:a,emit:c}):w(r,null)),_=e.props?l:dg(l)}}catch(w){lr.length=0,qo(w,i,1),m=en(Yn)}let x=m;if(_&&p!==!1){const w=Object.keys(_),{shapeFlag:S}=x;w.length&&S&7&&(o&&w.some(Ql)&&(_=pg(_,o)),x=_i(x,_))}return t.dirs&&(x=_i(x),x.dirs=x.dirs?x.dirs.concat(t.dirs):t.dirs),t.transition&&(x.transition=t.transition),m=x,Io(M),m}const dg=i=>{let e;for(const t in i)(t==="class"||t==="style"||Ho(t))&&((e||(e={}))[t]=i[t]);return e},pg=(i,e)=>{const t={};for(const n in i)(!Ql(n)||!(n.slice(9)in e))&&(t[n]=i[n]);return t};function mg(i,e,t){const{props:n,children:s,component:r}=i,{props:o,children:a,patchFlag:l}=e,c=r.emitsOptions;if(e.dirs||e.transition)return!0;if(t&&l>=0){if(l&1024)return!0;if(l&16)return n?Qc(n,o,c):!!o;if(l&8){const u=e.dynamicProps;for(let h=0;h<u.length;h++){const f=u[h];if(o[f]!==n[f]&&!Yo(c,f))return!0}}}else return(s||a)&&(!a||!a.$stable)?!0:n===o?!1:n?o?Qc(n,o,c):!0:!!o;return!1}function Qc(i,e,t){const n=Object.keys(e);if(n.length!==Object.keys(i).length)return!0;for(let s=0;s<n.length;s++){const r=n[s];if(e[r]!==i[r]&&!Yo(t,r))return!0}return!1}function gg({vnode:i,parent:e},t){for(;e&&e.subTree===i;)(i=e.vnode).el=t,e=e.parent}const _g=i=>i.__isSuspense;function xg(i,e){e&&e.pendingBranch?ze(i)?e.effects.push(...i):e.effects.push(i):ug(i)}function So(i,e){if(mt){let t=mt.provides;const n=mt.parent&&mt.parent.provides;n===t&&(t=mt.provides=Object.create(n)),t[i]=e}}function qn(i,e,t=!1){const n=mt||cn;if(n){const s=n.parent==null?n.vnode.appContext&&n.vnode.appContext.provides:n.parent.provides;if(s&&i in s)return s[i];if(arguments.length>1)return t&&Ne(e)?e.call(n.proxy):e}}const Xr={};function To(i,e,t){return yd(i,e,t)}function yd(i,e,{immediate:t,deep:n,flush:s,onTrack:r,onTrigger:o}=lt){const a=Am()===(mt==null?void 0:mt.scope)?mt:null;let l,c=!1,u=!1;if(Dt(i)?(l=()=>i.value,c=Do(i)):Ms(i)?(l=()=>i,n=!0):ze(i)?(u=!0,c=i.some(x=>Ms(x)||Do(x)),l=()=>i.map(x=>{if(Dt(x))return x.value;if(Ms(x))return ms(x);if(Ne(x))return pi(x,a,2)})):Ne(i)?e?l=()=>pi(i,a,2):l=()=>{if(!(a&&a.isUnmounted))return h&&h(),fn(i,a,3,[f])}:l=bn,e&&n){const x=l;l=()=>ms(x())}let h,f=x=>{h=_.onStop=()=>{pi(x,a,4)}},d;if(yr)if(f=bn,e?t&&fn(e,a,3,[l(),u?[]:void 0,f]):l(),s==="sync"){const x=m0();d=x.__watcherHandles||(x.__watcherHandles=[])}else return bn;let g=u?new Array(i.length).fill(Xr):Xr;const p=()=>{if(_.active)if(e){const x=_.run();(n||c||(u?x.some((w,S)=>mr(w,g[S])):mr(x,g)))&&(h&&h(),fn(e,a,3,[x,g===Xr?void 0:u&&g[0]===Xr?[]:g,f]),g=x)}else _.run()};p.allowRecurse=!!e;let m;s==="sync"?m=p:s==="post"?m=()=>Xt(p,a&&a.suspense):(p.pre=!0,a&&(p.id=a.uid),m=()=>hc(p));const _=new sc(l,m);e?t?p():g=_.run():s==="post"?Xt(_.run.bind(_),a&&a.suspense):_.run();const M=()=>{_.stop(),a&&a.scope&&ec(a.scope.effects,_)};return d&&d.push(M),M}function vg(i,e,t){const n=this.proxy,s=yt(i)?i.includes(".")?Md(n,i):()=>n[i]:i.bind(n,n);let r;Ne(e)?r=e:(r=e.handler,t=e);const o=mt;Ps(this);const a=yd(s,r.bind(n),t);return o?Ps(o):Bi(),a}function Md(i,e){const t=e.split(".");return()=>{let n=i;for(let s=0;s<t.length&&n;s++)n=n[t[s]];return n}}function ms(i,e){if(!ut(i)||i.__v_skip||(e=e||new Set,e.has(i)))return i;if(e.add(i),Dt(i))ms(i.value,e);else if(ze(i))for(let t=0;t<i.length;t++)ms(i[t],e);else if(Wf(i)||ys(i))i.forEach(t=>{ms(t,e)});else if(qf(i))for(const t in i)ms(i[t],e);return i}function yg(){const i={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return Ed(()=>{i.isMounted=!0}),Ad(()=>{i.isUnmounting=!0}),i}const nn=[Function,Array],Mg={name:"BaseTransition",props:{mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:nn,onEnter:nn,onAfterEnter:nn,onEnterCancelled:nn,onBeforeLeave:nn,onLeave:nn,onAfterLeave:nn,onLeaveCancelled:nn,onBeforeAppear:nn,onAppear:nn,onAfterAppear:nn,onAppearCancelled:nn},setup(i,{slots:e}){const t=a0(),n=yg();let s;return()=>{const r=e.default&&wd(e.default(),!0);if(!r||!r.length)return;let o=r[0];if(r.length>1){for(const p of r)if(p.type!==Yn){o=p;break}}const a=Je(i),{mode:l}=a;if(n.isLeaving)return _a(o);const c=eu(o);if(!c)return _a(o);const u=wl(c,a,n,t);Sl(c,u);const h=t.subTree,f=h&&eu(h);let d=!1;const{getTransitionKey:g}=c.type;if(g){const p=g();s===void 0?s=p:p!==s&&(s=p,d=!0)}if(f&&f.type!==Yn&&(!Fi(c,f)||d)){const p=wl(f,a,n,t);if(Sl(f,p),l==="out-in")return n.isLeaving=!0,p.afterLeave=()=>{n.isLeaving=!1,t.update.active!==!1&&t.update()},_a(o);l==="in-out"&&c.type!==Yn&&(p.delayLeave=(m,_,M)=>{const x=bd(n,f);x[String(f.key)]=f,m._leaveCb=()=>{_(),m._leaveCb=void 0,delete u.delayedLeave},u.delayedLeave=M})}return o}}},bg=Mg;function bd(i,e){const{leavingVNodes:t}=i;let n=t.get(e.type);return n||(n=Object.create(null),t.set(e.type,n)),n}function wl(i,e,t,n){const{appear:s,mode:r,persisted:o=!1,onBeforeEnter:a,onEnter:l,onAfterEnter:c,onEnterCancelled:u,onBeforeLeave:h,onLeave:f,onAfterLeave:d,onLeaveCancelled:g,onBeforeAppear:p,onAppear:m,onAfterAppear:_,onAppearCancelled:M}=e,x=String(i.key),w=bd(t,i),S=(v,A)=>{v&&fn(v,n,9,A)},P=(v,A)=>{const R=A[1];S(v,A),ze(v)?v.every(j=>j.length<=1)&&R():v.length<=1&&R()},I={mode:r,persisted:o,beforeEnter(v){let A=a;if(!t.isMounted)if(s)A=p||a;else return;v._leaveCb&&v._leaveCb(!0);const R=w[x];R&&Fi(i,R)&&R.el._leaveCb&&R.el._leaveCb(),S(A,[v])},enter(v){let A=l,R=c,j=u;if(!t.isMounted)if(s)A=m||l,R=_||c,j=M||u;else return;let Q=!1;const k=v._enterCb=z=>{Q||(Q=!0,z?S(j,[v]):S(R,[v]),I.delayedLeave&&I.delayedLeave(),v._enterCb=void 0)};A?P(A,[v,k]):k()},leave(v,A){const R=String(i.key);if(v._enterCb&&v._enterCb(!0),t.isUnmounting)return A();S(h,[v]);let j=!1;const Q=v._leaveCb=k=>{j||(j=!0,A(),k?S(g,[v]):S(d,[v]),v._leaveCb=void 0,w[R]===i&&delete w[R])};w[R]=i,f?P(f,[v,Q]):Q()},clone(v){return wl(v,e,t,n)}};return I}function _a(i){if(Zo(i))return i=_i(i),i.children=null,i}function eu(i){return Zo(i)?i.children?i.children[0]:void 0:i}function Sl(i,e){i.shapeFlag&6&&i.component?Sl(i.component.subTree,e):i.shapeFlag&128?(i.ssContent.transition=e.clone(i.ssContent),i.ssFallback.transition=e.clone(i.ssFallback)):i.transition=e}function wd(i,e=!1,t){let n=[],s=0;for(let r=0;r<i.length;r++){let o=i[r];const a=t==null?o.key:String(t)+String(o.key!=null?o.key:r);o.type===vn?(o.patchFlag&128&&s++,n=n.concat(wd(o.children,e,a))):(e||o.type!==Yn)&&n.push(a!=null?_i(o,{key:a}):o)}if(s>1)for(let r=0;r<n.length;r++)n[r].patchFlag=-2;return n}function Sd(i){return Ne(i)?{setup:i,name:i.name}:i}const Eo=i=>!!i.type.__asyncLoader,Zo=i=>i.type.__isKeepAlive;function wg(i,e){Td(i,"a",e)}function Sg(i,e){Td(i,"da",e)}function Td(i,e,t=mt){const n=i.__wdc||(i.__wdc=()=>{let s=t;for(;s;){if(s.isDeactivated)return;s=s.parent}return i()});if($o(e,n,t),t){let s=t.parent;for(;s&&s.parent;)Zo(s.parent.vnode)&&Tg(n,e,t,s),s=s.parent}}function Tg(i,e,t,n){const s=$o(e,i,n,!0);Cd(()=>{ec(n[e],s)},t)}function $o(i,e,t=mt,n=!1){if(t){const s=t[i]||(t[i]=[]),r=e.__weh||(e.__weh=(...o)=>{if(t.isUnmounted)return;Ns(),Ps(t);const a=fn(e,t,i,o);return Bi(),Us(),a});return n?s.unshift(r):s.push(r),r}}const Jn=i=>(e,t=mt)=>(!yr||i==="sp")&&$o(i,(...n)=>e(...n),t),Eg=Jn("bm"),Ed=Jn("m"),Ag=Jn("bu"),Cg=Jn("u"),Ad=Jn("bum"),Cd=Jn("um"),Pg=Jn("sp"),Lg=Jn("rtg"),Rg=Jn("rtc");function Dg(i,e=mt){$o("ec",i,e)}function Si(i,e,t,n){const s=i.dirs,r=e&&e.dirs;for(let o=0;o<s.length;o++){const a=s[o];r&&(a.oldValue=r[o].value);let l=a.dir[n];l&&(Ns(),fn(l,t,8,[i.el,a,i,e]),Us())}}const Pd="components";function tu(i,e){return Fg(Pd,i,!0,e)||i}const Ig=Symbol();function Fg(i,e,t=!0,n=!1){const s=cn||mt;if(s){const r=s.type;if(i===Pd){const a=f0(r,!1);if(a&&(a===e||a===Dn(e)||a===Xo(Dn(e))))return r}const o=nu(s[i]||r[i],e)||nu(s.appContext[i],e);return!o&&n?r:o}}function nu(i,e){return i&&(i[e]||i[Dn(e)]||i[Xo(Dn(e))])}function Og(i,e,t,n){let s;const r=t&&t[n];if(ze(i)||yt(i)){s=new Array(i.length);for(let o=0,a=i.length;o<a;o++)s[o]=e(i[o],o,void 0,r&&r[o])}else if(typeof i=="number"){s=new Array(i);for(let o=0;o<i;o++)s[o]=e(o+1,o,void 0,r&&r[o])}else if(ut(i))if(i[Symbol.iterator])s=Array.from(i,(o,a)=>e(o,a,void 0,r&&r[a]));else{const o=Object.keys(i);s=new Array(o.length);for(let a=0,l=o.length;a<l;a++){const c=o[a];s[a]=e(i[c],c,a,r&&r[a])}}else s=[];return t&&(t[n]=s),s}const Tl=i=>i?Vd(i)?gc(i)||i.proxy:Tl(i.parent):null,ar=It(Object.create(null),{$:i=>i,$el:i=>i.vnode.el,$data:i=>i.data,$props:i=>i.props,$attrs:i=>i.attrs,$slots:i=>i.slots,$refs:i=>i.refs,$parent:i=>Tl(i.parent),$root:i=>Tl(i.root),$emit:i=>i.emit,$options:i=>fc(i),$forceUpdate:i=>i.f||(i.f=()=>hc(i.update)),$nextTick:i=>i.n||(i.n=dd.bind(i.proxy)),$watch:i=>vg.bind(i)}),xa=(i,e)=>i!==lt&&!i.__isScriptSetup&&Ze(i,e),zg={get({_:i},e){const{ctx:t,setupState:n,data:s,props:r,accessCache:o,type:a,appContext:l}=i;let c;if(e[0]!=="$"){const d=o[e];if(d!==void 0)switch(d){case 1:return n[e];case 2:return s[e];case 4:return t[e];case 3:return r[e]}else{if(xa(n,e))return o[e]=1,n[e];if(s!==lt&&Ze(s,e))return o[e]=2,s[e];if((c=i.propsOptions[0])&&Ze(c,e))return o[e]=3,r[e];if(t!==lt&&Ze(t,e))return o[e]=4,t[e];El&&(o[e]=0)}}const u=ar[e];let h,f;if(u)return e==="$attrs"&&Yt(i,"get",e),u(i);if((h=a.__cssModules)&&(h=h[e]))return h;if(t!==lt&&Ze(t,e))return o[e]=4,t[e];if(f=l.config.globalProperties,Ze(f,e))return f[e]},set({_:i},e,t){const{data:n,setupState:s,ctx:r}=i;return xa(s,e)?(s[e]=t,!0):n!==lt&&Ze(n,e)?(n[e]=t,!0):Ze(i.props,e)||e[0]==="$"&&e.slice(1)in i?!1:(r[e]=t,!0)},has({_:{data:i,setupState:e,accessCache:t,ctx:n,appContext:s,propsOptions:r}},o){let a;return!!t[o]||i!==lt&&Ze(i,o)||xa(e,o)||(a=r[0])&&Ze(a,o)||Ze(n,o)||Ze(ar,o)||Ze(s.config.globalProperties,o)},defineProperty(i,e,t){return t.get!=null?i._.accessCache[e]=0:Ze(t,"value")&&this.set(i,e,t.value,null),Reflect.defineProperty(i,e,t)}};let El=!0;function Ng(i){const e=fc(i),t=i.proxy,n=i.ctx;El=!1,e.beforeCreate&&iu(e.beforeCreate,i,"bc");const{data:s,computed:r,methods:o,watch:a,provide:l,inject:c,created:u,beforeMount:h,mounted:f,beforeUpdate:d,updated:g,activated:p,deactivated:m,beforeDestroy:_,beforeUnmount:M,destroyed:x,unmounted:w,render:S,renderTracked:P,renderTriggered:I,errorCaptured:v,serverPrefetch:A,expose:R,inheritAttrs:j,components:Q,directives:k,filters:z}=e;if(c&&Ug(c,n,null,i.appContext.config.unwrapInjectedRef),o)for(const ie in o){const Y=o[ie];Ne(Y)&&(n[ie]=Y.bind(t))}if(s){const ie=s.call(t,t);ut(ie)&&(i.data=Ir(ie))}if(El=!0,r)for(const ie in r){const Y=r[ie],fe=Ne(Y)?Y.bind(t,t):Ne(Y.get)?Y.get.bind(t,t):bn,de=!Ne(Y)&&Ne(Y.set)?Y.set.bind(t):bn,ye=on({get:fe,set:de});Object.defineProperty(n,ie,{enumerable:!0,configurable:!0,get:()=>ye.value,set:W=>ye.value=W})}if(a)for(const ie in a)Ld(a[ie],n,t,ie);if(l){const ie=Ne(l)?l.call(t):l;Reflect.ownKeys(ie).forEach(Y=>{So(Y,ie[Y])})}u&&iu(u,i,"c");function $(ie,Y){ze(Y)?Y.forEach(fe=>ie(fe.bind(t))):Y&&ie(Y.bind(t))}if($(Eg,h),$(Ed,f),$(Ag,d),$(Cg,g),$(wg,p),$(Sg,m),$(Dg,v),$(Rg,P),$(Lg,I),$(Ad,M),$(Cd,w),$(Pg,A),ze(R))if(R.length){const ie=i.exposed||(i.exposed={});R.forEach(Y=>{Object.defineProperty(ie,Y,{get:()=>t[Y],set:fe=>t[Y]=fe})})}else i.exposed||(i.exposed={});S&&i.render===bn&&(i.render=S),j!=null&&(i.inheritAttrs=j),Q&&(i.components=Q),k&&(i.directives=k)}function Ug(i,e,t=bn,n=!1){ze(i)&&(i=Al(i));for(const s in i){const r=i[s];let o;ut(r)?"default"in r?o=qn(r.from||s,r.default,!0):o=qn(r.from||s):o=qn(r),Dt(o)&&n?Object.defineProperty(e,s,{enumerable:!0,configurable:!0,get:()=>o.value,set:a=>o.value=a}):e[s]=o}}function iu(i,e,t){fn(ze(i)?i.map(n=>n.bind(e.proxy)):i.bind(e.proxy),e,t)}function Ld(i,e,t,n){const s=n.includes(".")?Md(t,n):()=>t[n];if(yt(i)){const r=e[i];Ne(r)&&To(s,r)}else if(Ne(i))To(s,i.bind(t));else if(ut(i))if(ze(i))i.forEach(r=>Ld(r,e,t,n));else{const r=Ne(i.handler)?i.handler.bind(t):e[i.handler];Ne(r)&&To(s,r,i)}}function fc(i){const e=i.type,{mixins:t,extends:n}=e,{mixins:s,optionsCache:r,config:{optionMergeStrategies:o}}=i.appContext,a=r.get(e);let l;return a?l=a:!s.length&&!t&&!n?l=e:(l={},s.length&&s.forEach(c=>Fo(l,c,o,!0)),Fo(l,e,o)),ut(e)&&r.set(e,l),l}function Fo(i,e,t,n=!1){const{mixins:s,extends:r}=e;r&&Fo(i,r,t,!0),s&&s.forEach(o=>Fo(i,o,t,!0));for(const o in e)if(!(n&&o==="expose")){const a=kg[o]||t&&t[o];i[o]=a?a(i[o],e[o]):e[o]}return i}const kg={data:su,props:Pi,emits:Pi,methods:Pi,computed:Pi,beforeCreate:Nt,created:Nt,beforeMount:Nt,mounted:Nt,beforeUpdate:Nt,updated:Nt,beforeDestroy:Nt,beforeUnmount:Nt,destroyed:Nt,unmounted:Nt,activated:Nt,deactivated:Nt,errorCaptured:Nt,serverPrefetch:Nt,components:Pi,directives:Pi,watch:Vg,provide:su,inject:Bg};function su(i,e){return e?i?function(){return It(Ne(i)?i.call(this,this):i,Ne(e)?e.call(this,this):e)}:e:i}function Bg(i,e){return Pi(Al(i),Al(e))}function Al(i){if(ze(i)){const e={};for(let t=0;t<i.length;t++)e[i[t]]=i[t];return e}return i}function Nt(i,e){return i?[...new Set([].concat(i,e))]:e}function Pi(i,e){return i?It(It(Object.create(null),i),e):e}function Vg(i,e){if(!i)return e;if(!e)return i;const t=It(Object.create(null),i);for(const n in e)t[n]=Nt(i[n],e[n]);return t}function Hg(i,e,t,n=!1){const s={},r={};Ro(r,Jo,1),i.propsDefaults=Object.create(null),Rd(i,e,s,r);for(const o in i.propsOptions[0])o in s||(s[o]=void 0);t?i.props=n?s:eg(s):i.type.props?i.props=s:i.props=r,i.attrs=r}function Gg(i,e,t,n){const{props:s,attrs:r,vnode:{patchFlag:o}}=i,a=Je(s),[l]=i.propsOptions;let c=!1;if((n||o>0)&&!(o&16)){if(o&8){const u=i.vnode.dynamicProps;for(let h=0;h<u.length;h++){let f=u[h];if(Yo(i.emitsOptions,f))continue;const d=e[f];if(l)if(Ze(r,f))d!==r[f]&&(r[f]=d,c=!0);else{const g=Dn(f);s[g]=Cl(l,a,g,d,i,!1)}else d!==r[f]&&(r[f]=d,c=!0)}}}else{Rd(i,e,s,r)&&(c=!0);let u;for(const h in a)(!e||!Ze(e,h)&&((u=zs(h))===h||!Ze(e,u)))&&(l?t&&(t[h]!==void 0||t[u]!==void 0)&&(s[h]=Cl(l,a,h,void 0,i,!0)):delete s[h]);if(r!==a)for(const h in r)(!e||!Ze(e,h))&&(delete r[h],c=!0)}c&&Kn(i,"set","$attrs")}function Rd(i,e,t,n){const[s,r]=i.propsOptions;let o=!1,a;if(e)for(let l in e){if(wo(l))continue;const c=e[l];let u;s&&Ze(s,u=Dn(l))?!r||!r.includes(u)?t[u]=c:(a||(a={}))[u]=c:Yo(i.emitsOptions,l)||(!(l in n)||c!==n[l])&&(n[l]=c,o=!0)}if(r){const l=Je(t),c=a||lt;for(let u=0;u<r.length;u++){const h=r[u];t[h]=Cl(s,l,h,c[h],i,!Ze(c,h))}}return o}function Cl(i,e,t,n,s,r){const o=i[t];if(o!=null){const a=Ze(o,"default");if(a&&n===void 0){const l=o.default;if(o.type!==Function&&Ne(l)){const{propsDefaults:c}=s;t in c?n=c[t]:(Ps(s),n=c[t]=l.call(null,e),Bi())}else n=l}o[0]&&(r&&!a?n=!1:o[1]&&(n===""||n===zs(t))&&(n=!0))}return n}function Dd(i,e,t=!1){const n=e.propsCache,s=n.get(i);if(s)return s;const r=i.props,o={},a=[];let l=!1;if(!Ne(i)){const u=h=>{l=!0;const[f,d]=Dd(h,e,!0);It(o,f),d&&a.push(...d)};!t&&e.mixins.length&&e.mixins.forEach(u),i.extends&&u(i.extends),i.mixins&&i.mixins.forEach(u)}if(!r&&!l)return ut(i)&&n.set(i,vs),vs;if(ze(r))for(let u=0;u<r.length;u++){const h=Dn(r[u]);ru(h)&&(o[h]=lt)}else if(r)for(const u in r){const h=Dn(u);if(ru(h)){const f=r[u],d=o[h]=ze(f)||Ne(f)?{type:f}:Object.assign({},f);if(d){const g=lu(Boolean,d.type),p=lu(String,d.type);d[0]=g>-1,d[1]=p<0||g<p,(g>-1||Ze(d,"default"))&&a.push(h)}}}const c=[o,a];return ut(i)&&n.set(i,c),c}function ru(i){return i[0]!=="$"}function ou(i){const e=i&&i.toString().match(/^\s*(function|class) (\w+)/);return e?e[2]:i===null?"null":""}function au(i,e){return ou(i)===ou(e)}function lu(i,e){return ze(e)?e.findIndex(t=>au(t,i)):Ne(e)&&au(e,i)?0:-1}const Id=i=>i[0]==="_"||i==="$stable",dc=i=>ze(i)?i.map(An):[An(i)],Wg=(i,e,t)=>{if(e._n)return e;const n=vd((...s)=>dc(e(...s)),t);return n._c=!1,n},Fd=(i,e,t)=>{const n=i._ctx;for(const s in i){if(Id(s))continue;const r=i[s];if(Ne(r))e[s]=Wg(s,r,n);else if(r!=null){const o=dc(r);e[s]=()=>o}}},Od=(i,e)=>{const t=dc(e);i.slots.default=()=>t},Xg=(i,e)=>{if(i.vnode.shapeFlag&32){const t=e._;t?(i.slots=Je(e),Ro(e,"_",t)):Fd(e,i.slots={})}else i.slots={},e&&Od(i,e);Ro(i.slots,Jo,1)},jg=(i,e,t)=>{const{vnode:n,slots:s}=i;let r=!0,o=lt;if(n.shapeFlag&32){const a=e._;a?t&&a===1?r=!1:(It(s,e),!t&&a===1&&delete s._):(r=!e.$stable,Fd(e,s)),o=e}else e&&(Od(i,e),o={default:1});if(r)for(const a in s)!Id(a)&&!(a in o)&&delete s[a]};function zd(){return{app:null,config:{isNativeTag:_m,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let qg=0;function Yg(i,e){return function(n,s=null){Ne(n)||(n=Object.assign({},n)),s!=null&&!ut(s)&&(s=null);const r=zd(),o=new Set;let a=!1;const l=r.app={_uid:qg++,_component:n,_props:s,_container:null,_context:r,_instance:null,version:g0,get config(){return r.config},set config(c){},use(c,...u){return o.has(c)||(c&&Ne(c.install)?(o.add(c),c.install(l,...u)):Ne(c)&&(o.add(c),c(l,...u))),l},mixin(c){return r.mixins.includes(c)||r.mixins.push(c),l},component(c,u){return u?(r.components[c]=u,l):r.components[c]},directive(c,u){return u?(r.directives[c]=u,l):r.directives[c]},mount(c,u,h){if(!a){const f=en(n,s);return f.appContext=r,u&&e?e(f,c):i(f,c,h),a=!0,l._container=c,c.__vue_app__=l,gc(f.component)||f.component.proxy}},unmount(){a&&(i(null,l._container),delete l._container.__vue_app__)},provide(c,u){return r.provides[c]=u,l}};return l}}function Pl(i,e,t,n,s=!1){if(ze(i)){i.forEach((f,d)=>Pl(f,e&&(ze(e)?e[d]:e),t,n,s));return}if(Eo(n)&&!s)return;const r=n.shapeFlag&4?gc(n.component)||n.component.proxy:n.el,o=s?null:r,{i:a,r:l}=i,c=e&&e.r,u=a.refs===lt?a.refs={}:a.refs,h=a.setupState;if(c!=null&&c!==l&&(yt(c)?(u[c]=null,Ze(h,c)&&(h[c]=null)):Dt(c)&&(c.value=null)),Ne(l))pi(l,a,12,[o,u]);else{const f=yt(l),d=Dt(l);if(f||d){const g=()=>{if(i.f){const p=f?Ze(h,l)?h[l]:u[l]:l.value;s?ze(p)&&ec(p,r):ze(p)?p.includes(r)||p.push(r):f?(u[l]=[r],Ze(h,l)&&(h[l]=u[l])):(l.value=[r],i.k&&(u[i.k]=l.value))}else f?(u[l]=o,Ze(h,l)&&(h[l]=o)):d&&(l.value=o,i.k&&(u[i.k]=o))};o?(g.id=-1,Xt(g,t)):g()}}}const Xt=xg;function Zg(i){return $g(i)}function $g(i,e){const t=Sm();t.__VUE__=!0;const{insert:n,remove:s,patchProp:r,createElement:o,createText:a,createComment:l,setText:c,setElementText:u,parentNode:h,nextSibling:f,setScopeId:d=bn,insertStaticContent:g}=i,p=(y,T,F,H=null,B=null,te=null,se=!1,Z=null,he=!!T.dynamicChildren)=>{if(y===T)return;y&&!Fi(y,T)&&(H=ee(y),W(y,B,te,!0),y=null),T.patchFlag===-2&&(he=!1,T.dynamicChildren=null);const{type:ne,ref:E,shapeFlag:b}=T;switch(ne){case Ko:m(y,T,F,H);break;case Yn:_(y,T,F,H);break;case va:y==null&&M(T,F,H,se);break;case vn:Q(y,T,F,H,B,te,se,Z,he);break;default:b&1?S(y,T,F,H,B,te,se,Z,he):b&6?k(y,T,F,H,B,te,se,Z,he):(b&64||b&128)&&ne.process(y,T,F,H,B,te,se,Z,he,ge)}E!=null&&B&&Pl(E,y&&y.ref,te,T||y,!T)},m=(y,T,F,H)=>{if(y==null)n(T.el=a(T.children),F,H);else{const B=T.el=y.el;T.children!==y.children&&c(B,T.children)}},_=(y,T,F,H)=>{y==null?n(T.el=l(T.children||""),F,H):T.el=y.el},M=(y,T,F,H)=>{[y.el,y.anchor]=g(y.children,T,F,H,y.el,y.anchor)},x=({el:y,anchor:T},F,H)=>{let B;for(;y&&y!==T;)B=f(y),n(y,F,H),y=B;n(T,F,H)},w=({el:y,anchor:T})=>{let F;for(;y&&y!==T;)F=f(y),s(y),y=F;s(T)},S=(y,T,F,H,B,te,se,Z,he)=>{se=se||T.type==="svg",y==null?P(T,F,H,B,te,se,Z,he):A(y,T,B,te,se,Z,he)},P=(y,T,F,H,B,te,se,Z)=>{let he,ne;const{type:E,props:b,shapeFlag:U,transition:K,dirs:re}=y;if(he=y.el=o(y.type,te,b&&b.is,b),U&8?u(he,y.children):U&16&&v(y.children,he,null,H,B,te&&E!=="foreignObject",se,Z),re&&Si(y,null,H,"created"),I(he,y,y.scopeId,se,H),b){for(const be in b)be!=="value"&&!wo(be)&&r(he,be,null,b[be],te,y.children,H,B,O);"value"in b&&r(he,"value",null,b.value),(ne=b.onVnodeBeforeMount)&&Tn(ne,H,y)}re&&Si(y,null,H,"beforeMount");const me=(!B||B&&!B.pendingBranch)&&K&&!K.persisted;me&&K.beforeEnter(he),n(he,T,F),((ne=b&&b.onVnodeMounted)||me||re)&&Xt(()=>{ne&&Tn(ne,H,y),me&&K.enter(he),re&&Si(y,null,H,"mounted")},B)},I=(y,T,F,H,B)=>{if(F&&d(y,F),H)for(let te=0;te<H.length;te++)d(y,H[te]);if(B){let te=B.subTree;if(T===te){const se=B.vnode;I(y,se,se.scopeId,se.slotScopeIds,B.parent)}}},v=(y,T,F,H,B,te,se,Z,he=0)=>{for(let ne=he;ne<y.length;ne++){const E=y[ne]=Z?ci(y[ne]):An(y[ne]);p(null,E,T,F,H,B,te,se,Z)}},A=(y,T,F,H,B,te,se)=>{const Z=T.el=y.el;let{patchFlag:he,dynamicChildren:ne,dirs:E}=T;he|=y.patchFlag&16;const b=y.props||lt,U=T.props||lt;let K;F&&Ti(F,!1),(K=U.onVnodeBeforeUpdate)&&Tn(K,F,T,y),E&&Si(T,y,F,"beforeUpdate"),F&&Ti(F,!0);const re=B&&T.type!=="foreignObject";if(ne?R(y.dynamicChildren,ne,Z,F,H,re,te):se||Y(y,T,Z,null,F,H,re,te,!1),he>0){if(he&16)j(Z,T,b,U,F,H,B);else if(he&2&&b.class!==U.class&&r(Z,"class",null,U.class,B),he&4&&r(Z,"style",b.style,U.style,B),he&8){const me=T.dynamicProps;for(let be=0;be<me.length;be++){const L=me[be],G=b[L],we=U[L];(we!==G||L==="value")&&r(Z,L,G,we,B,y.children,F,H,O)}}he&1&&y.children!==T.children&&u(Z,T.children)}else!se&&ne==null&&j(Z,T,b,U,F,H,B);((K=U.onVnodeUpdated)||E)&&Xt(()=>{K&&Tn(K,F,T,y),E&&Si(T,y,F,"updated")},H)},R=(y,T,F,H,B,te,se)=>{for(let Z=0;Z<T.length;Z++){const he=y[Z],ne=T[Z],E=he.el&&(he.type===vn||!Fi(he,ne)||he.shapeFlag&70)?h(he.el):F;p(he,ne,E,null,H,B,te,se,!0)}},j=(y,T,F,H,B,te,se)=>{if(F!==H){if(F!==lt)for(const Z in F)!wo(Z)&&!(Z in H)&&r(y,Z,F[Z],null,se,T.children,B,te,O);for(const Z in H){if(wo(Z))continue;const he=H[Z],ne=F[Z];he!==ne&&Z!=="value"&&r(y,Z,ne,he,se,T.children,B,te,O)}"value"in H&&r(y,"value",F.value,H.value)}},Q=(y,T,F,H,B,te,se,Z,he)=>{const ne=T.el=y?y.el:a(""),E=T.anchor=y?y.anchor:a("");let{patchFlag:b,dynamicChildren:U,slotScopeIds:K}=T;K&&(Z=Z?Z.concat(K):K),y==null?(n(ne,F,H),n(E,F,H),v(T.children,F,E,B,te,se,Z,he)):b>0&&b&64&&U&&y.dynamicChildren?(R(y.dynamicChildren,U,F,B,te,se,Z),(T.key!=null||B&&T===B.subTree)&&Nd(y,T,!0)):Y(y,T,F,E,B,te,se,Z,he)},k=(y,T,F,H,B,te,se,Z,he)=>{T.slotScopeIds=Z,y==null?T.shapeFlag&512?B.ctx.activate(T,F,H,se,he):z(T,F,H,B,te,se,he):J(y,T,he)},z=(y,T,F,H,B,te,se)=>{const Z=y.component=o0(y,H,B);if(Zo(y)&&(Z.ctx.renderer=ge),l0(Z),Z.asyncDep){if(B&&B.registerDep(Z,$),!y.el){const he=Z.subTree=en(Yn);_(null,he,T,F)}return}$(Z,y,T,F,B,te,se)},J=(y,T,F)=>{const H=T.component=y.component;if(mg(y,T,F))if(H.asyncDep&&!H.asyncResolved){ie(H,T,F);return}else H.next=T,cg(H.update),H.update();else T.el=y.el,H.vnode=T},$=(y,T,F,H,B,te,se)=>{const Z=()=>{if(y.isMounted){let{next:E,bu:b,u:U,parent:K,vnode:re}=y,me=E,be;Ti(y,!1),E?(E.el=re.el,ie(y,E,se)):E=re,b&&ma(b),(be=E.props&&E.props.onVnodeBeforeUpdate)&&Tn(be,K,E,re),Ti(y,!0);const L=ga(y),G=y.subTree;y.subTree=L,p(G,L,h(G.el),ee(G),y,B,te),E.el=L.el,me===null&&gg(y,L.el),U&&Xt(U,B),(be=E.props&&E.props.onVnodeUpdated)&&Xt(()=>Tn(be,K,E,re),B)}else{let E;const{el:b,props:U}=T,{bm:K,m:re,parent:me}=y,be=Eo(T);if(Ti(y,!1),K&&ma(K),!be&&(E=U&&U.onVnodeBeforeMount)&&Tn(E,me,T),Ti(y,!0),b&&Me){const L=()=>{y.subTree=ga(y),Me(b,y.subTree,y,B,null)};be?T.type.__asyncLoader().then(()=>!y.isUnmounted&&L()):L()}else{const L=y.subTree=ga(y);p(null,L,F,H,y,B,te),T.el=L.el}if(re&&Xt(re,B),!be&&(E=U&&U.onVnodeMounted)){const L=T;Xt(()=>Tn(E,me,L),B)}(T.shapeFlag&256||me&&Eo(me.vnode)&&me.vnode.shapeFlag&256)&&y.a&&Xt(y.a,B),y.isMounted=!0,T=F=H=null}},he=y.effect=new sc(Z,()=>hc(ne),y.scope),ne=y.update=()=>he.run();ne.id=y.uid,Ti(y,!0),ne()},ie=(y,T,F)=>{T.component=y;const H=y.vnode.props;y.vnode=T,y.next=null,Gg(y,T.props,H,F),jg(y,T.children,F),Ns(),Jc(),Us()},Y=(y,T,F,H,B,te,se,Z,he=!1)=>{const ne=y&&y.children,E=y?y.shapeFlag:0,b=T.children,{patchFlag:U,shapeFlag:K}=T;if(U>0){if(U&128){de(ne,b,F,H,B,te,se,Z,he);return}else if(U&256){fe(ne,b,F,H,B,te,se,Z,he);return}}K&8?(E&16&&O(ne,B,te),b!==ne&&u(F,b)):E&16?K&16?de(ne,b,F,H,B,te,se,Z,he):O(ne,B,te,!0):(E&8&&u(F,""),K&16&&v(b,F,H,B,te,se,Z,he))},fe=(y,T,F,H,B,te,se,Z,he)=>{y=y||vs,T=T||vs;const ne=y.length,E=T.length,b=Math.min(ne,E);let U;for(U=0;U<b;U++){const K=T[U]=he?ci(T[U]):An(T[U]);p(y[U],K,F,null,B,te,se,Z,he)}ne>E?O(y,B,te,!0,!1,b):v(T,F,H,B,te,se,Z,he,b)},de=(y,T,F,H,B,te,se,Z,he)=>{let ne=0;const E=T.length;let b=y.length-1,U=E-1;for(;ne<=b&&ne<=U;){const K=y[ne],re=T[ne]=he?ci(T[ne]):An(T[ne]);if(Fi(K,re))p(K,re,F,null,B,te,se,Z,he);else break;ne++}for(;ne<=b&&ne<=U;){const K=y[b],re=T[U]=he?ci(T[U]):An(T[U]);if(Fi(K,re))p(K,re,F,null,B,te,se,Z,he);else break;b--,U--}if(ne>b){if(ne<=U){const K=U+1,re=K<E?T[K].el:H;for(;ne<=U;)p(null,T[ne]=he?ci(T[ne]):An(T[ne]),F,re,B,te,se,Z,he),ne++}}else if(ne>U)for(;ne<=b;)W(y[ne],B,te,!0),ne++;else{const K=ne,re=ne,me=new Map;for(ne=re;ne<=U;ne++){const Ee=T[ne]=he?ci(T[ne]):An(T[ne]);Ee.key!=null&&me.set(Ee.key,ne)}let be,L=0;const G=U-re+1;let we=!1,Ae=0;const Te=new Array(G);for(ne=0;ne<G;ne++)Te[ne]=0;for(ne=K;ne<=b;ne++){const Ee=y[ne];if(L>=G){W(Ee,B,te,!0);continue}let Fe;if(Ee.key!=null)Fe=me.get(Ee.key);else for(be=re;be<=U;be++)if(Te[be-re]===0&&Fi(Ee,T[be])){Fe=be;break}Fe===void 0?W(Ee,B,te,!0):(Te[Fe-re]=ne+1,Fe>=Ae?Ae=Fe:we=!0,p(Ee,T[Fe],F,null,B,te,se,Z,he),L++)}const Le=we?Kg(Te):vs;for(be=Le.length-1,ne=G-1;ne>=0;ne--){const Ee=re+ne,Fe=T[Ee],Ve=Ee+1<E?T[Ee+1].el:H;Te[ne]===0?p(null,Fe,F,Ve,B,te,se,Z,he):we&&(be<0||ne!==Le[be]?ye(Fe,F,Ve,2):be--)}}},ye=(y,T,F,H,B=null)=>{const{el:te,type:se,transition:Z,children:he,shapeFlag:ne}=y;if(ne&6){ye(y.component.subTree,T,F,H);return}if(ne&128){y.suspense.move(T,F,H);return}if(ne&64){se.move(y,T,F,ge);return}if(se===vn){n(te,T,F);for(let b=0;b<he.length;b++)ye(he[b],T,F,H);n(y.anchor,T,F);return}if(se===va){x(y,T,F);return}if(H!==2&&ne&1&&Z)if(H===0)Z.beforeEnter(te),n(te,T,F),Xt(()=>Z.enter(te),B);else{const{leave:b,delayLeave:U,afterLeave:K}=Z,re=()=>n(te,T,F),me=()=>{b(te,()=>{re(),K&&K()})};U?U(te,re,me):me()}else n(te,T,F)},W=(y,T,F,H=!1,B=!1)=>{const{type:te,props:se,ref:Z,children:he,dynamicChildren:ne,shapeFlag:E,patchFlag:b,dirs:U}=y;if(Z!=null&&Pl(Z,null,F,y,!0),E&256){T.ctx.deactivate(y);return}const K=E&1&&U,re=!Eo(y);let me;if(re&&(me=se&&se.onVnodeBeforeUnmount)&&Tn(me,T,y),E&6)N(y.component,F,H);else{if(E&128){y.suspense.unmount(F,H);return}K&&Si(y,null,T,"beforeUnmount"),E&64?y.type.remove(y,T,F,B,ge,H):ne&&(te!==vn||b>0&&b&64)?O(ne,T,F,!1,!0):(te===vn&&b&384||!B&&E&16)&&O(he,T,F),H&&oe(y)}(re&&(me=se&&se.onVnodeUnmounted)||K)&&Xt(()=>{me&&Tn(me,T,y),K&&Si(y,null,T,"unmounted")},F)},oe=y=>{const{type:T,el:F,anchor:H,transition:B}=y;if(T===vn){ve(F,H);return}if(T===va){w(y);return}const te=()=>{s(F),B&&!B.persisted&&B.afterLeave&&B.afterLeave()};if(y.shapeFlag&1&&B&&!B.persisted){const{leave:se,delayLeave:Z}=B,he=()=>se(F,te);Z?Z(y.el,te,he):he()}else te()},ve=(y,T)=>{let F;for(;y!==T;)F=f(y),s(y),y=F;s(T)},N=(y,T,F)=>{const{bum:H,scope:B,update:te,subTree:se,um:Z}=y;H&&ma(H),B.stop(),te&&(te.active=!1,W(se,y,T,F)),Z&&Xt(Z,T),Xt(()=>{y.isUnmounted=!0},T),T&&T.pendingBranch&&!T.isUnmounted&&y.asyncDep&&!y.asyncResolved&&y.suspenseId===T.pendingId&&(T.deps--,T.deps===0&&T.resolve())},O=(y,T,F,H=!1,B=!1,te=0)=>{for(let se=te;se<y.length;se++)W(y[se],T,F,H,B)},ee=y=>y.shapeFlag&6?ee(y.component.subTree):y.shapeFlag&128?y.suspense.next():f(y.anchor||y.el),ce=(y,T,F)=>{y==null?T._vnode&&W(T._vnode,null,null,!0):p(T._vnode||null,y,T,null,null,null,F),Jc(),md(),T._vnode=y},ge={p,um:W,m:ye,r:oe,mt:z,mc:v,pc:Y,pbc:R,n:ee,o:i};let pe,Me;return e&&([pe,Me]=e(ge)),{render:ce,hydrate:pe,createApp:Yg(ce,pe)}}function Ti({effect:i,update:e},t){i.allowRecurse=e.allowRecurse=t}function Nd(i,e,t=!1){const n=i.children,s=e.children;if(ze(n)&&ze(s))for(let r=0;r<n.length;r++){const o=n[r];let a=s[r];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=s[r]=ci(s[r]),a.el=o.el),t||Nd(o,a)),a.type===Ko&&(a.el=o.el)}}function Kg(i){const e=i.slice(),t=[0];let n,s,r,o,a;const l=i.length;for(n=0;n<l;n++){const c=i[n];if(c!==0){if(s=t[t.length-1],i[s]<c){e[n]=s,t.push(n);continue}for(r=0,o=t.length-1;r<o;)a=r+o>>1,i[t[a]]<c?r=a+1:o=a;c<i[t[r]]&&(r>0&&(e[n]=t[r-1]),t[r]=n)}}for(r=t.length,o=t[r-1];r-- >0;)t[r]=o,o=e[o];return t}const Jg=i=>i.__isTeleport,vn=Symbol(void 0),Ko=Symbol(void 0),Yn=Symbol(void 0),va=Symbol(void 0),lr=[];let Mn=null;function Ii(i=!1){lr.push(Mn=i?null:[])}function Qg(){lr.pop(),Mn=lr[lr.length-1]||null}let vr=1;function cu(i){vr+=i}function Ud(i){return i.dynamicChildren=vr>0?Mn||vs:null,Qg(),vr>0&&Mn&&Mn.push(i),i}function gs(i,e,t,n,s,r){return Ud(pc(i,e,t,n,s,r,!0))}function e0(i,e,t,n,s){return Ud(en(i,e,t,n,s,!0))}function Ll(i){return i?i.__v_isVNode===!0:!1}function Fi(i,e){return i.type===e.type&&i.key===e.key}const Jo="__vInternal",kd=({key:i})=>i??null,Ao=({ref:i,ref_key:e,ref_for:t})=>i!=null?yt(i)||Dt(i)||Ne(i)?{i:cn,r:i,k:e,f:!!t}:i:null;function pc(i,e=null,t=null,n=0,s=null,r=i===vn?0:1,o=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:i,props:e,key:e&&kd(e),ref:e&&Ao(e),scopeId:xd,slotScopeIds:null,children:t,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:r,patchFlag:n,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:cn};return a?(mc(l,t),r&128&&i.normalize(l)):t&&(l.shapeFlag|=yt(t)?8:16),vr>0&&!o&&Mn&&(l.patchFlag>0||r&6)&&l.patchFlag!==32&&Mn.push(l),l}const en=t0;function t0(i,e=null,t=null,n=0,s=null,r=!1){if((!i||i===Ig)&&(i=Yn),Ll(i)){const a=_i(i,e,!0);return t&&mc(a,t),vr>0&&!r&&Mn&&(a.shapeFlag&6?Mn[Mn.indexOf(i)]=a:Mn.push(a)),a.patchFlag|=-2,a}if(d0(i)&&(i=i.__vccOpts),e){e=n0(e);let{class:a,style:l}=e;a&&!yt(a)&&(e.class=Jl(a)),ut(l)&&(rd(l)&&!ze(l)&&(l=It({},l)),e.style=Kl(l))}const o=yt(i)?1:_g(i)?128:Jg(i)?64:ut(i)?4:Ne(i)?2:0;return pc(i,e,t,n,s,o,r,!0)}function n0(i){return i?rd(i)||Jo in i?It({},i):i:null}function _i(i,e,t=!1){const{props:n,ref:s,patchFlag:r,children:o}=i,a=e?i0(n||{},e):n;return{__v_isVNode:!0,__v_skip:!0,type:i.type,props:a,key:a&&kd(a),ref:e&&e.ref?t&&s?ze(s)?s.concat(Ao(e)):[s,Ao(e)]:Ao(e):s,scopeId:i.scopeId,slotScopeIds:i.slotScopeIds,children:o,target:i.target,targetAnchor:i.targetAnchor,staticCount:i.staticCount,shapeFlag:i.shapeFlag,patchFlag:e&&i.type!==vn?r===-1?16:r|16:r,dynamicProps:i.dynamicProps,dynamicChildren:i.dynamicChildren,appContext:i.appContext,dirs:i.dirs,transition:i.transition,component:i.component,suspense:i.suspense,ssContent:i.ssContent&&_i(i.ssContent),ssFallback:i.ssFallback&&_i(i.ssFallback),el:i.el,anchor:i.anchor,ctx:i.ctx,ce:i.ce}}function Bd(i=" ",e=0){return en(Ko,null,i,e)}function An(i){return i==null||typeof i=="boolean"?en(Yn):ze(i)?en(vn,null,i.slice()):typeof i=="object"?ci(i):en(Ko,null,String(i))}function ci(i){return i.el===null&&i.patchFlag!==-1||i.memo?i:_i(i)}function mc(i,e){let t=0;const{shapeFlag:n}=i;if(e==null)e=null;else if(ze(e))t=16;else if(typeof e=="object")if(n&65){const s=e.default;s&&(s._c&&(s._d=!1),mc(i,s()),s._c&&(s._d=!0));return}else{t=32;const s=e._;!s&&!(Jo in e)?e._ctx=cn:s===3&&cn&&(cn.slots._===1?e._=1:(e._=2,i.patchFlag|=1024))}else Ne(e)?(e={default:e,_ctx:cn},t=32):(e=String(e),n&64?(t=16,e=[Bd(e)]):t=8);i.children=e,i.shapeFlag|=t}function i0(...i){const e={};for(let t=0;t<i.length;t++){const n=i[t];for(const s in n)if(s==="class")e.class!==n.class&&(e.class=Jl([e.class,n.class]));else if(s==="style")e.style=Kl([e.style,n.style]);else if(Ho(s)){const r=e[s],o=n[s];o&&r!==o&&!(ze(r)&&r.includes(o))&&(e[s]=r?[].concat(r,o):o)}else s!==""&&(e[s]=n[s])}return e}function Tn(i,e,t,n=null){fn(i,e,7,[t,n])}const s0=zd();let r0=0;function o0(i,e,t){const n=i.type,s=(e?e.appContext:i.appContext)||s0,r={uid:r0++,vnode:i,type:n,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,scope:new Tm(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Dd(n,s),emitsOptions:_d(n,s),emit:null,emitted:null,propsDefaults:lt,inheritAttrs:n.inheritAttrs,ctx:lt,data:lt,props:lt,attrs:lt,slots:lt,refs:lt,setupState:lt,setupContext:null,suspense:t,suspenseId:t?t.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return r.ctx={_:r},r.root=e?e.root:r,r.emit=fg.bind(null,r),i.ce&&i.ce(r),r}let mt=null;const a0=()=>mt||cn,Ps=i=>{mt=i,i.scope.on()},Bi=()=>{mt&&mt.scope.off(),mt=null};function Vd(i){return i.vnode.shapeFlag&4}let yr=!1;function l0(i,e=!1){yr=e;const{props:t,children:n}=i.vnode,s=Vd(i);Hg(i,t,s,e),Xg(i,n);const r=s?c0(i,e):void 0;return yr=!1,r}function c0(i,e){const t=i.type;i.accessCache=Object.create(null),i.proxy=od(new Proxy(i.ctx,zg));const{setup:n}=t;if(n){const s=i.setupContext=n.length>1?h0(i):null;Ps(i),Ns();const r=pi(n,i,0,[i.props,s]);if(Us(),Bi(),Xf(r)){if(r.then(Bi,Bi),e)return r.then(o=>{uu(i,o,e)}).catch(o=>{qo(o,i,0)});i.asyncDep=r}else uu(i,r,e)}else Hd(i,e)}function uu(i,e,t){Ne(e)?i.type.__ssrInlineRender?i.ssrRender=e:i.render=e:ut(e)&&(i.setupState=ud(e)),Hd(i,t)}let hu;function Hd(i,e,t){const n=i.type;if(!i.render){if(!e&&hu&&!n.render){const s=n.template||fc(i).template;if(s){const{isCustomElement:r,compilerOptions:o}=i.appContext.config,{delimiters:a,compilerOptions:l}=n,c=It(It({isCustomElement:r,delimiters:a},o),l);n.render=hu(s,c)}}i.render=n.render||bn}Ps(i),Ns(),Ng(i),Us(),Bi()}function u0(i){return new Proxy(i.attrs,{get(e,t){return Yt(i,"get","$attrs"),e[t]}})}function h0(i){const e=n=>{i.exposed=n||{}};let t;return{get attrs(){return t||(t=u0(i))},slots:i.slots,emit:i.emit,expose:e}}function gc(i){if(i.exposed)return i.exposeProxy||(i.exposeProxy=new Proxy(ud(od(i.exposed)),{get(e,t){if(t in e)return e[t];if(t in ar)return ar[t](i)},has(e,t){return t in e||t in ar}}))}function f0(i,e=!0){return Ne(i)?i.displayName||i.name:i.name||e&&i.__name}function d0(i){return Ne(i)&&"__vccOpts"in i}const on=(i,e)=>og(i,e,yr);function Gd(i,e,t){const n=arguments.length;return n===2?ut(e)&&!ze(e)?Ll(e)?en(i,null,[e]):en(i,e):en(i,null,e):(n>3?t=Array.prototype.slice.call(arguments,2):n===3&&Ll(t)&&(t=[t]),en(i,e,t))}const p0=Symbol(""),m0=()=>qn(p0),g0="3.2.47",_0="http://www.w3.org/2000/svg",Oi=typeof document<"u"?document:null,fu=Oi&&Oi.createElement("template"),x0={insert:(i,e,t)=>{e.insertBefore(i,t||null)},remove:i=>{const e=i.parentNode;e&&e.removeChild(i)},createElement:(i,e,t,n)=>{const s=e?Oi.createElementNS(_0,i):Oi.createElement(i,t?{is:t}:void 0);return i==="select"&&n&&n.multiple!=null&&s.setAttribute("multiple",n.multiple),s},createText:i=>Oi.createTextNode(i),createComment:i=>Oi.createComment(i),setText:(i,e)=>{i.nodeValue=e},setElementText:(i,e)=>{i.textContent=e},parentNode:i=>i.parentNode,nextSibling:i=>i.nextSibling,querySelector:i=>Oi.querySelector(i),setScopeId(i,e){i.setAttribute(e,"")},insertStaticContent(i,e,t,n,s,r){const o=t?t.previousSibling:e.lastChild;if(s&&(s===r||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),t),!(s===r||!(s=s.nextSibling)););else{fu.innerHTML=n?`<svg>${i}</svg>`:i;const a=fu.content;if(n){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}e.insertBefore(a,t)}return[o?o.nextSibling:e.firstChild,t?t.previousSibling:e.lastChild]}};function v0(i,e,t){const n=i._vtc;n&&(e=(e?[e,...n]:[...n]).join(" ")),e==null?i.removeAttribute("class"):t?i.setAttribute("class",e):i.className=e}function y0(i,e,t){const n=i.style,s=yt(t);if(t&&!s){if(e&&!yt(e))for(const r in e)t[r]==null&&Rl(n,r,"");for(const r in t)Rl(n,r,t[r])}else{const r=n.display;s?e!==t&&(n.cssText=t):e&&i.removeAttribute("style"),"_vod"in i&&(n.display=r)}}const du=/\s*!important$/;function Rl(i,e,t){if(ze(t))t.forEach(n=>Rl(i,e,n));else if(t==null&&(t=""),e.startsWith("--"))i.setProperty(e,t);else{const n=M0(i,e);du.test(t)?i.setProperty(zs(n),t.replace(du,""),"important"):i[n]=t}}const pu=["Webkit","Moz","ms"],ya={};function M0(i,e){const t=ya[e];if(t)return t;let n=Dn(e);if(n!=="filter"&&n in i)return ya[e]=n;n=Xo(n);for(let s=0;s<pu.length;s++){const r=pu[s]+n;if(r in i)return ya[e]=r}return e}const mu="http://www.w3.org/1999/xlink";function b0(i,e,t,n,s){if(n&&e.startsWith("xlink:"))t==null?i.removeAttributeNS(mu,e.slice(6,e.length)):i.setAttributeNS(mu,e,t);else{const r=mm(e);t==null||r&&!Hf(t)?i.removeAttribute(e):i.setAttribute(e,r?"":t)}}function w0(i,e,t,n,s,r,o){if(e==="innerHTML"||e==="textContent"){n&&o(n,s,r),i[e]=t??"";return}if(e==="value"&&i.tagName!=="PROGRESS"&&!i.tagName.includes("-")){i._value=t;const l=t??"";(i.value!==l||i.tagName==="OPTION")&&(i.value=l),t==null&&i.removeAttribute(e);return}let a=!1;if(t===""||t==null){const l=typeof i[e];l==="boolean"?t=Hf(t):t==null&&l==="string"?(t="",a=!0):l==="number"&&(t=0,a=!0)}try{i[e]=t}catch{}a&&i.removeAttribute(e)}function S0(i,e,t,n){i.addEventListener(e,t,n)}function T0(i,e,t,n){i.removeEventListener(e,t,n)}function E0(i,e,t,n,s=null){const r=i._vei||(i._vei={}),o=r[e];if(n&&o)o.value=n;else{const[a,l]=A0(e);if(n){const c=r[e]=L0(n,s);S0(i,a,c,l)}else o&&(T0(i,a,o,l),r[e]=void 0)}}const gu=/(?:Once|Passive|Capture)$/;function A0(i){let e;if(gu.test(i)){e={};let n;for(;n=i.match(gu);)i=i.slice(0,i.length-n[0].length),e[n[0].toLowerCase()]=!0}return[i[2]===":"?i.slice(3):zs(i.slice(2)),e]}let Ma=0;const C0=Promise.resolve(),P0=()=>Ma||(C0.then(()=>Ma=0),Ma=Date.now());function L0(i,e){const t=n=>{if(!n._vts)n._vts=Date.now();else if(n._vts<=t.attached)return;fn(R0(n,t.value),e,5,[n])};return t.value=i,t.attached=P0(),t}function R0(i,e){if(ze(e)){const t=i.stopImmediatePropagation;return i.stopImmediatePropagation=()=>{t.call(i),i._stopped=!0},e.map(n=>s=>!s._stopped&&n&&n(s))}else return e}const _u=/^on[a-z]/,D0=(i,e,t,n,s=!1,r,o,a,l)=>{e==="class"?v0(i,n,s):e==="style"?y0(i,t,n):Ho(e)?Ql(e)||E0(i,e,t,n,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):I0(i,e,n,s))?w0(i,e,n,r,o,a,l):(e==="true-value"?i._trueValue=n:e==="false-value"&&(i._falseValue=n),b0(i,e,n,s))};function I0(i,e,t,n){return n?!!(e==="innerHTML"||e==="textContent"||e in i&&_u.test(e)&&Ne(t)):e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&i.tagName==="INPUT"||e==="type"&&i.tagName==="TEXTAREA"||_u.test(e)&&yt(t)?!1:e in i}const F0={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String};bg.props;const O0=It({patchProp:D0},x0);let xu;function z0(){return xu||(xu=Zg(O0))}const N0=(...i)=>{const e=z0().createApp(...i),{mount:t}=e;return e.mount=n=>{const s=U0(n);if(!s)return;const r=e._component;!Ne(r)&&!r.render&&!r.template&&(r.template=s.innerHTML),s.innerHTML="";const o=t(s,!1,s instanceof SVGElement);return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},e};function U0(i){return yt(i)?document.querySelector(i):i}/*!
  * vue-router v4.1.6
  * (c) 2022 Eduardo San Martin Morote
  * @license MIT
  */const fs=typeof window<"u";function k0(i){return i.__esModule||i[Symbol.toStringTag]==="Module"}const it=Object.assign;function ba(i,e){const t={};for(const n in e){const s=e[n];t[n]=wn(s)?s.map(i):i(s)}return t}const cr=()=>{},wn=Array.isArray,B0=/\/$/,V0=i=>i.replace(B0,"");function wa(i,e,t="/"){let n,s={},r="",o="";const a=e.indexOf("#");let l=e.indexOf("?");return a<l&&a>=0&&(l=-1),l>-1&&(n=e.slice(0,l),r=e.slice(l+1,a>-1?a:e.length),s=i(r)),a>-1&&(n=n||e.slice(0,a),o=e.slice(a,e.length)),n=X0(n??e,t),{fullPath:n+(r&&"?")+r+o,path:n,query:s,hash:o}}function H0(i,e){const t=e.query?i(e.query):"";return e.path+(t&&"?")+t+(e.hash||"")}function vu(i,e){return!e||!i.toLowerCase().startsWith(e.toLowerCase())?i:i.slice(e.length)||"/"}function G0(i,e,t){const n=e.matched.length-1,s=t.matched.length-1;return n>-1&&n===s&&Ls(e.matched[n],t.matched[s])&&Wd(e.params,t.params)&&i(e.query)===i(t.query)&&e.hash===t.hash}function Ls(i,e){return(i.aliasOf||i)===(e.aliasOf||e)}function Wd(i,e){if(Object.keys(i).length!==Object.keys(e).length)return!1;for(const t in i)if(!W0(i[t],e[t]))return!1;return!0}function W0(i,e){return wn(i)?yu(i,e):wn(e)?yu(e,i):i===e}function yu(i,e){return wn(e)?i.length===e.length&&i.every((t,n)=>t===e[n]):i.length===1&&i[0]===e}function X0(i,e){if(i.startsWith("/"))return i;if(!i)return e;const t=e.split("/"),n=i.split("/");let s=t.length-1,r,o;for(r=0;r<n.length;r++)if(o=n[r],o!==".")if(o==="..")s>1&&s--;else break;return t.slice(0,s).join("/")+"/"+n.slice(r-(r===n.length?1:0)).join("/")}var Mr;(function(i){i.pop="pop",i.push="push"})(Mr||(Mr={}));var ur;(function(i){i.back="back",i.forward="forward",i.unknown=""})(ur||(ur={}));function j0(i){if(!i)if(fs){const e=document.querySelector("base");i=e&&e.getAttribute("href")||"/",i=i.replace(/^\w+:\/\/[^\/]+/,"")}else i="/";return i[0]!=="/"&&i[0]!=="#"&&(i="/"+i),V0(i)}const q0=/^[^#]+#/;function Y0(i,e){return i.replace(q0,"#")+e}function Z0(i,e){const t=document.documentElement.getBoundingClientRect(),n=i.getBoundingClientRect();return{behavior:e.behavior,left:n.left-t.left-(e.left||0),top:n.top-t.top-(e.top||0)}}const Qo=()=>({left:window.pageXOffset,top:window.pageYOffset});function $0(i){let e;if("el"in i){const t=i.el,n=typeof t=="string"&&t.startsWith("#"),s=typeof t=="string"?n?document.getElementById(t.slice(1)):document.querySelector(t):t;if(!s)return;e=Z0(s,i)}else e=i;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.pageXOffset,e.top!=null?e.top:window.pageYOffset)}function Mu(i,e){return(history.state?history.state.position-e:-1)+i}const Dl=new Map;function K0(i,e){Dl.set(i,e)}function J0(i){const e=Dl.get(i);return Dl.delete(i),e}let Q0=()=>location.protocol+"//"+location.host;function Xd(i,e){const{pathname:t,search:n,hash:s}=e,r=i.indexOf("#");if(r>-1){let a=s.includes(i.slice(r))?i.slice(r).length:1,l=s.slice(a);return l[0]!=="/"&&(l="/"+l),vu(l,"")}return vu(t,i)+n+s}function e_(i,e,t,n){let s=[],r=[],o=null;const a=({state:f})=>{const d=Xd(i,location),g=t.value,p=e.value;let m=0;if(f){if(t.value=d,e.value=f,o&&o===g){o=null;return}m=p?f.position-p.position:0}else n(d);s.forEach(_=>{_(t.value,g,{delta:m,type:Mr.pop,direction:m?m>0?ur.forward:ur.back:ur.unknown})})};function l(){o=t.value}function c(f){s.push(f);const d=()=>{const g=s.indexOf(f);g>-1&&s.splice(g,1)};return r.push(d),d}function u(){const{history:f}=window;f.state&&f.replaceState(it({},f.state,{scroll:Qo()}),"")}function h(){for(const f of r)f();r=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",u)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",u),{pauseListeners:l,listen:c,destroy:h}}function bu(i,e,t,n=!1,s=!1){return{back:i,current:e,forward:t,replaced:n,position:window.history.length,scroll:s?Qo():null}}function t_(i){const{history:e,location:t}=window,n={value:Xd(i,t)},s={value:e.state};s.value||r(n.value,{back:null,current:n.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function r(l,c,u){const h=i.indexOf("#"),f=h>-1?(t.host&&document.querySelector("base")?i:i.slice(h))+l:Q0()+i+l;try{e[u?"replaceState":"pushState"](c,"",f),s.value=c}catch(d){console.error(d),t[u?"replace":"assign"](f)}}function o(l,c){const u=it({},e.state,bu(s.value.back,l,s.value.forward,!0),c,{position:s.value.position});r(l,u,!0),n.value=l}function a(l,c){const u=it({},s.value,e.state,{forward:l,scroll:Qo()});r(u.current,u,!0);const h=it({},bu(n.value,l,null),{position:u.position+1},c);r(l,h,!1),n.value=l}return{location:n,state:s,push:a,replace:o}}function n_(i){i=j0(i);const e=t_(i),t=e_(i,e.state,e.location,e.replace);function n(r,o=!0){o||t.pauseListeners(),history.go(r)}const s=it({location:"",base:i,go:n,createHref:Y0.bind(null,i)},e,t);return Object.defineProperty(s,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(s,"state",{enumerable:!0,get:()=>e.state.value}),s}function i_(i){return i=location.host?i||location.pathname+location.search:"",i.includes("#")||(i+="#"),n_(i)}function s_(i){return typeof i=="string"||i&&typeof i=="object"}function jd(i){return typeof i=="string"||typeof i=="symbol"}const ni={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},qd=Symbol("");var wu;(function(i){i[i.aborted=4]="aborted",i[i.cancelled=8]="cancelled",i[i.duplicated=16]="duplicated"})(wu||(wu={}));function Rs(i,e){return it(new Error,{type:i,[qd]:!0},e)}function Un(i,e){return i instanceof Error&&qd in i&&(e==null||!!(i.type&e))}const Su="[^/]+?",r_={sensitive:!1,strict:!1,start:!0,end:!0},o_=/[.+*?^${}()[\]/\\]/g;function a_(i,e){const t=it({},r_,e),n=[];let s=t.start?"^":"";const r=[];for(const c of i){const u=c.length?[]:[90];t.strict&&!c.length&&(s+="/");for(let h=0;h<c.length;h++){const f=c[h];let d=40+(t.sensitive?.25:0);if(f.type===0)h||(s+="/"),s+=f.value.replace(o_,"\\$&"),d+=40;else if(f.type===1){const{value:g,repeatable:p,optional:m,regexp:_}=f;r.push({name:g,repeatable:p,optional:m});const M=_||Su;if(M!==Su){d+=10;try{new RegExp(`(${M})`)}catch(w){throw new Error(`Invalid custom RegExp for param "${g}" (${M}): `+w.message)}}let x=p?`((?:${M})(?:/(?:${M}))*)`:`(${M})`;h||(x=m&&c.length<2?`(?:/${x})`:"/"+x),m&&(x+="?"),s+=x,d+=20,m&&(d+=-8),p&&(d+=-20),M===".*"&&(d+=-50)}u.push(d)}n.push(u)}if(t.strict&&t.end){const c=n.length-1;n[c][n[c].length-1]+=.7000000000000001}t.strict||(s+="/?"),t.end?s+="$":t.strict&&(s+="(?:/|$)");const o=new RegExp(s,t.sensitive?"":"i");function a(c){const u=c.match(o),h={};if(!u)return null;for(let f=1;f<u.length;f++){const d=u[f]||"",g=r[f-1];h[g.name]=d&&g.repeatable?d.split("/"):d}return h}function l(c){let u="",h=!1;for(const f of i){(!h||!u.endsWith("/"))&&(u+="/"),h=!1;for(const d of f)if(d.type===0)u+=d.value;else if(d.type===1){const{value:g,repeatable:p,optional:m}=d,_=g in c?c[g]:"";if(wn(_)&&!p)throw new Error(`Provided param "${g}" is an array but it is not repeatable (* or + modifiers)`);const M=wn(_)?_.join("/"):_;if(!M)if(m)f.length<2&&(u.endsWith("/")?u=u.slice(0,-1):h=!0);else throw new Error(`Missing required param "${g}"`);u+=M}}return u||"/"}return{re:o,score:n,keys:r,parse:a,stringify:l}}function l_(i,e){let t=0;for(;t<i.length&&t<e.length;){const n=e[t]-i[t];if(n)return n;t++}return i.length<e.length?i.length===1&&i[0]===40+40?-1:1:i.length>e.length?e.length===1&&e[0]===40+40?1:-1:0}function c_(i,e){let t=0;const n=i.score,s=e.score;for(;t<n.length&&t<s.length;){const r=l_(n[t],s[t]);if(r)return r;t++}if(Math.abs(s.length-n.length)===1){if(Tu(n))return 1;if(Tu(s))return-1}return s.length-n.length}function Tu(i){const e=i[i.length-1];return i.length>0&&e[e.length-1]<0}const u_={type:0,value:""},h_=/[a-zA-Z0-9_]/;function f_(i){if(!i)return[[]];if(i==="/")return[[u_]];if(!i.startsWith("/"))throw new Error(`Invalid path "${i}"`);function e(d){throw new Error(`ERR (${t})/"${c}": ${d}`)}let t=0,n=t;const s=[];let r;function o(){r&&s.push(r),r=[]}let a=0,l,c="",u="";function h(){c&&(t===0?r.push({type:0,value:c}):t===1||t===2||t===3?(r.length>1&&(l==="*"||l==="+")&&e(`A repeatable param (${c}) must be alone in its segment. eg: '/:ids+.`),r.push({type:1,value:c,regexp:u,repeatable:l==="*"||l==="+",optional:l==="*"||l==="?"})):e("Invalid state to consume buffer"),c="")}function f(){c+=l}for(;a<i.length;){if(l=i[a++],l==="\\"&&t!==2){n=t,t=4;continue}switch(t){case 0:l==="/"?(c&&h(),o()):l===":"?(h(),t=1):f();break;case 4:f(),t=n;break;case 1:l==="("?t=2:h_.test(l)?f():(h(),t=0,l!=="*"&&l!=="?"&&l!=="+"&&a--);break;case 2:l===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+l:t=3:u+=l;break;case 3:h(),t=0,l!=="*"&&l!=="?"&&l!=="+"&&a--,u="";break;default:e("Unknown state");break}}return t===2&&e(`Unfinished custom RegExp for param "${c}"`),h(),o(),s}function d_(i,e,t){const n=a_(f_(i.path),t),s=it(n,{record:i,parent:e,children:[],alias:[]});return e&&!s.record.aliasOf==!e.record.aliasOf&&e.children.push(s),s}function p_(i,e){const t=[],n=new Map;e=Cu({strict:!1,end:!0,sensitive:!1},e);function s(u){return n.get(u)}function r(u,h,f){const d=!f,g=m_(u);g.aliasOf=f&&f.record;const p=Cu(e,u),m=[g];if("alias"in u){const x=typeof u.alias=="string"?[u.alias]:u.alias;for(const w of x)m.push(it({},g,{components:f?f.record.components:g.components,path:w,aliasOf:f?f.record:g}))}let _,M;for(const x of m){const{path:w}=x;if(h&&w[0]!=="/"){const S=h.record.path,P=S[S.length-1]==="/"?"":"/";x.path=h.record.path+(w&&P+w)}if(_=d_(x,h,p),f?f.alias.push(_):(M=M||_,M!==_&&M.alias.push(_),d&&u.name&&!Au(_)&&o(u.name)),g.children){const S=g.children;for(let P=0;P<S.length;P++)r(S[P],_,f&&f.children[P])}f=f||_,(_.record.components&&Object.keys(_.record.components).length||_.record.name||_.record.redirect)&&l(_)}return M?()=>{o(M)}:cr}function o(u){if(jd(u)){const h=n.get(u);h&&(n.delete(u),t.splice(t.indexOf(h),1),h.children.forEach(o),h.alias.forEach(o))}else{const h=t.indexOf(u);h>-1&&(t.splice(h,1),u.record.name&&n.delete(u.record.name),u.children.forEach(o),u.alias.forEach(o))}}function a(){return t}function l(u){let h=0;for(;h<t.length&&c_(u,t[h])>=0&&(u.record.path!==t[h].record.path||!Yd(u,t[h]));)h++;t.splice(h,0,u),u.record.name&&!Au(u)&&n.set(u.record.name,u)}function c(u,h){let f,d={},g,p;if("name"in u&&u.name){if(f=n.get(u.name),!f)throw Rs(1,{location:u});p=f.record.name,d=it(Eu(h.params,f.keys.filter(M=>!M.optional).map(M=>M.name)),u.params&&Eu(u.params,f.keys.map(M=>M.name))),g=f.stringify(d)}else if("path"in u)g=u.path,f=t.find(M=>M.re.test(g)),f&&(d=f.parse(g),p=f.record.name);else{if(f=h.name?n.get(h.name):t.find(M=>M.re.test(h.path)),!f)throw Rs(1,{location:u,currentLocation:h});p=f.record.name,d=it({},h.params,u.params),g=f.stringify(d)}const m=[];let _=f;for(;_;)m.unshift(_.record),_=_.parent;return{name:p,path:g,params:d,matched:m,meta:__(m)}}return i.forEach(u=>r(u)),{addRoute:r,resolve:c,removeRoute:o,getRoutes:a,getRecordMatcher:s}}function Eu(i,e){const t={};for(const n of e)n in i&&(t[n]=i[n]);return t}function m_(i){return{path:i.path,redirect:i.redirect,name:i.name,meta:i.meta||{},aliasOf:void 0,beforeEnter:i.beforeEnter,props:g_(i),children:i.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in i?i.components||null:i.component&&{default:i.component}}}function g_(i){const e={},t=i.props||!1;if("component"in i)e.default=t;else for(const n in i.components)e[n]=typeof t=="boolean"?t:t[n];return e}function Au(i){for(;i;){if(i.record.aliasOf)return!0;i=i.parent}return!1}function __(i){return i.reduce((e,t)=>it(e,t.meta),{})}function Cu(i,e){const t={};for(const n in i)t[n]=n in e?e[n]:i[n];return t}function Yd(i,e){return e.children.some(t=>t===i||Yd(i,t))}const Zd=/#/g,x_=/&/g,v_=/\//g,y_=/=/g,M_=/\?/g,$d=/\+/g,b_=/%5B/g,w_=/%5D/g,Kd=/%5E/g,S_=/%60/g,Jd=/%7B/g,T_=/%7C/g,Qd=/%7D/g,E_=/%20/g;function _c(i){return encodeURI(""+i).replace(T_,"|").replace(b_,"[").replace(w_,"]")}function A_(i){return _c(i).replace(Jd,"{").replace(Qd,"}").replace(Kd,"^")}function Il(i){return _c(i).replace($d,"%2B").replace(E_,"+").replace(Zd,"%23").replace(x_,"%26").replace(S_,"`").replace(Jd,"{").replace(Qd,"}").replace(Kd,"^")}function C_(i){return Il(i).replace(y_,"%3D")}function P_(i){return _c(i).replace(Zd,"%23").replace(M_,"%3F")}function L_(i){return i==null?"":P_(i).replace(v_,"%2F")}function Oo(i){try{return decodeURIComponent(""+i)}catch{}return""+i}function R_(i){const e={};if(i===""||i==="?")return e;const n=(i[0]==="?"?i.slice(1):i).split("&");for(let s=0;s<n.length;++s){const r=n[s].replace($d," "),o=r.indexOf("="),a=Oo(o<0?r:r.slice(0,o)),l=o<0?null:Oo(r.slice(o+1));if(a in e){let c=e[a];wn(c)||(c=e[a]=[c]),c.push(l)}else e[a]=l}return e}function Pu(i){let e="";for(let t in i){const n=i[t];if(t=C_(t),n==null){n!==void 0&&(e+=(e.length?"&":"")+t);continue}(wn(n)?n.map(r=>r&&Il(r)):[n&&Il(n)]).forEach(r=>{r!==void 0&&(e+=(e.length?"&":"")+t,r!=null&&(e+="="+r))})}return e}function D_(i){const e={};for(const t in i){const n=i[t];n!==void 0&&(e[t]=wn(n)?n.map(s=>s==null?null:""+s):n==null?n:""+n)}return e}const I_=Symbol(""),Lu=Symbol(""),xc=Symbol(""),ep=Symbol(""),Fl=Symbol("");function Xs(){let i=[];function e(n){return i.push(n),()=>{const s=i.indexOf(n);s>-1&&i.splice(s,1)}}function t(){i=[]}return{add:e,list:()=>i,reset:t}}function ui(i,e,t,n,s){const r=n&&(n.enterCallbacks[s]=n.enterCallbacks[s]||[]);return()=>new Promise((o,a)=>{const l=h=>{h===!1?a(Rs(4,{from:t,to:e})):h instanceof Error?a(h):s_(h)?a(Rs(2,{from:e,to:h})):(r&&n.enterCallbacks[s]===r&&typeof h=="function"&&r.push(h),o())},c=i.call(n&&n.instances[s],e,t,l);let u=Promise.resolve(c);i.length<3&&(u=u.then(l)),u.catch(h=>a(h))})}function Sa(i,e,t,n){const s=[];for(const r of i)for(const o in r.components){let a=r.components[o];if(!(e!=="beforeRouteEnter"&&!r.instances[o]))if(F_(a)){const c=(a.__vccOpts||a)[e];c&&s.push(ui(c,t,n,r,o))}else{let l=a();s.push(()=>l.then(c=>{if(!c)return Promise.reject(new Error(`Couldn't resolve component "${o}" at "${r.path}"`));const u=k0(c)?c.default:c;r.components[o]=u;const f=(u.__vccOpts||u)[e];return f&&ui(f,t,n,r,o)()}))}}return s}function F_(i){return typeof i=="object"||"displayName"in i||"props"in i||"__vccOpts"in i}function Ru(i){const e=qn(xc),t=qn(ep),n=on(()=>e.resolve(bs(i.to))),s=on(()=>{const{matched:l}=n.value,{length:c}=l,u=l[c-1],h=t.matched;if(!u||!h.length)return-1;const f=h.findIndex(Ls.bind(null,u));if(f>-1)return f;const d=Du(l[c-2]);return c>1&&Du(u)===d&&h[h.length-1].path!==d?h.findIndex(Ls.bind(null,l[c-2])):f}),r=on(()=>s.value>-1&&U_(t.params,n.value.params)),o=on(()=>s.value>-1&&s.value===t.matched.length-1&&Wd(t.params,n.value.params));function a(l={}){return N_(l)?e[bs(i.replace)?"replace":"push"](bs(i.to)).catch(cr):Promise.resolve()}return{route:n,href:on(()=>n.value.href),isActive:r,isExactActive:o,navigate:a}}const O_=Sd({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:Ru,setup(i,{slots:e}){const t=Ir(Ru(i)),{options:n}=qn(xc),s=on(()=>({[Iu(i.activeClass,n.linkActiveClass,"router-link-active")]:t.isActive,[Iu(i.exactActiveClass,n.linkExactActiveClass,"router-link-exact-active")]:t.isExactActive}));return()=>{const r=e.default&&e.default(t);return i.custom?r:Gd("a",{"aria-current":t.isExactActive?i.ariaCurrentValue:null,href:t.href,onClick:t.navigate,class:s.value},r)}}}),z_=O_;function N_(i){if(!(i.metaKey||i.altKey||i.ctrlKey||i.shiftKey)&&!i.defaultPrevented&&!(i.button!==void 0&&i.button!==0)){if(i.currentTarget&&i.currentTarget.getAttribute){const e=i.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return i.preventDefault&&i.preventDefault(),!0}}function U_(i,e){for(const t in e){const n=e[t],s=i[t];if(typeof n=="string"){if(n!==s)return!1}else if(!wn(s)||s.length!==n.length||n.some((r,o)=>r!==s[o]))return!1}return!0}function Du(i){return i?i.aliasOf?i.aliasOf.path:i.path:""}const Iu=(i,e,t)=>i??e??t,k_=Sd({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(i,{attrs:e,slots:t}){const n=qn(Fl),s=on(()=>i.route||n.value),r=qn(Lu,0),o=on(()=>{let c=bs(r);const{matched:u}=s.value;let h;for(;(h=u[c])&&!h.components;)c++;return c}),a=on(()=>s.value.matched[o.value]);So(Lu,on(()=>o.value+1)),So(I_,a),So(Fl,s);const l=tg();return To(()=>[l.value,a.value,i.name],([c,u,h],[f,d,g])=>{u&&(u.instances[h]=c,d&&d!==u&&c&&c===f&&(u.leaveGuards.size||(u.leaveGuards=d.leaveGuards),u.updateGuards.size||(u.updateGuards=d.updateGuards))),c&&u&&(!d||!Ls(u,d)||!f)&&(u.enterCallbacks[h]||[]).forEach(p=>p(c))},{flush:"post"}),()=>{const c=s.value,u=i.name,h=a.value,f=h&&h.components[u];if(!f)return Fu(t.default,{Component:f,route:c});const d=h.props[u],g=d?d===!0?c.params:typeof d=="function"?d(c):d:null,m=Gd(f,it({},g,e,{onVnodeUnmounted:_=>{_.component.isUnmounted&&(h.instances[u]=null)},ref:l}));return Fu(t.default,{Component:m,route:c})||m}}});function Fu(i,e){if(!i)return null;const t=i(e);return t.length===1?t[0]:t}const B_=k_;function V_(i){const e=p_(i.routes,i),t=i.parseQuery||R_,n=i.stringifyQuery||Pu,s=i.history,r=Xs(),o=Xs(),a=Xs(),l=ng(ni);let c=ni;fs&&i.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=ba.bind(null,N=>""+N),h=ba.bind(null,L_),f=ba.bind(null,Oo);function d(N,O){let ee,ce;return jd(N)?(ee=e.getRecordMatcher(N),ce=O):ce=N,e.addRoute(ce,ee)}function g(N){const O=e.getRecordMatcher(N);O&&e.removeRoute(O)}function p(){return e.getRoutes().map(N=>N.record)}function m(N){return!!e.getRecordMatcher(N)}function _(N,O){if(O=it({},O||l.value),typeof N=="string"){const y=wa(t,N,O.path),T=e.resolve({path:y.path},O),F=s.createHref(y.fullPath);return it(y,T,{params:f(T.params),hash:Oo(y.hash),redirectedFrom:void 0,href:F})}let ee;if("path"in N)ee=it({},N,{path:wa(t,N.path,O.path).path});else{const y=it({},N.params);for(const T in y)y[T]==null&&delete y[T];ee=it({},N,{params:h(N.params)}),O.params=h(O.params)}const ce=e.resolve(ee,O),ge=N.hash||"";ce.params=u(f(ce.params));const pe=H0(n,it({},N,{hash:A_(ge),path:ce.path})),Me=s.createHref(pe);return it({fullPath:pe,hash:ge,query:n===Pu?D_(N.query):N.query||{}},ce,{redirectedFrom:void 0,href:Me})}function M(N){return typeof N=="string"?wa(t,N,l.value.path):it({},N)}function x(N,O){if(c!==N)return Rs(8,{from:O,to:N})}function w(N){return I(N)}function S(N){return w(it(M(N),{replace:!0}))}function P(N){const O=N.matched[N.matched.length-1];if(O&&O.redirect){const{redirect:ee}=O;let ce=typeof ee=="function"?ee(N):ee;return typeof ce=="string"&&(ce=ce.includes("?")||ce.includes("#")?ce=M(ce):{path:ce},ce.params={}),it({query:N.query,hash:N.hash,params:"path"in ce?{}:N.params},ce)}}function I(N,O){const ee=c=_(N),ce=l.value,ge=N.state,pe=N.force,Me=N.replace===!0,y=P(ee);if(y)return I(it(M(y),{state:typeof y=="object"?it({},ge,y.state):ge,force:pe,replace:Me}),O||ee);const T=ee;T.redirectedFrom=O;let F;return!pe&&G0(n,ce,ee)&&(F=Rs(16,{to:T,from:ce}),de(ce,ce,!0,!1)),(F?Promise.resolve(F):A(T,ce)).catch(H=>Un(H)?Un(H,2)?H:fe(H):ie(H,T,ce)).then(H=>{if(H){if(Un(H,2))return I(it({replace:Me},M(H.to),{state:typeof H.to=="object"?it({},ge,H.to.state):ge,force:pe}),O||T)}else H=j(T,ce,!0,Me,ge);return R(T,ce,H),H})}function v(N,O){const ee=x(N,O);return ee?Promise.reject(ee):Promise.resolve()}function A(N,O){let ee;const[ce,ge,pe]=H_(N,O);ee=Sa(ce.reverse(),"beforeRouteLeave",N,O);for(const y of ce)y.leaveGuards.forEach(T=>{ee.push(ui(T,N,O))});const Me=v.bind(null,N,O);return ee.push(Me),Yi(ee).then(()=>{ee=[];for(const y of r.list())ee.push(ui(y,N,O));return ee.push(Me),Yi(ee)}).then(()=>{ee=Sa(ge,"beforeRouteUpdate",N,O);for(const y of ge)y.updateGuards.forEach(T=>{ee.push(ui(T,N,O))});return ee.push(Me),Yi(ee)}).then(()=>{ee=[];for(const y of N.matched)if(y.beforeEnter&&!O.matched.includes(y))if(wn(y.beforeEnter))for(const T of y.beforeEnter)ee.push(ui(T,N,O));else ee.push(ui(y.beforeEnter,N,O));return ee.push(Me),Yi(ee)}).then(()=>(N.matched.forEach(y=>y.enterCallbacks={}),ee=Sa(pe,"beforeRouteEnter",N,O),ee.push(Me),Yi(ee))).then(()=>{ee=[];for(const y of o.list())ee.push(ui(y,N,O));return ee.push(Me),Yi(ee)}).catch(y=>Un(y,8)?y:Promise.reject(y))}function R(N,O,ee){for(const ce of a.list())ce(N,O,ee)}function j(N,O,ee,ce,ge){const pe=x(N,O);if(pe)return pe;const Me=O===ni,y=fs?history.state:{};ee&&(ce||Me?s.replace(N.fullPath,it({scroll:Me&&y&&y.scroll},ge)):s.push(N.fullPath,ge)),l.value=N,de(N,O,ee,Me),fe()}let Q;function k(){Q||(Q=s.listen((N,O,ee)=>{if(!ve.listening)return;const ce=_(N),ge=P(ce);if(ge){I(it(ge,{replace:!0}),ce).catch(cr);return}c=ce;const pe=l.value;fs&&K0(Mu(pe.fullPath,ee.delta),Qo()),A(ce,pe).catch(Me=>Un(Me,12)?Me:Un(Me,2)?(I(Me.to,ce).then(y=>{Un(y,20)&&!ee.delta&&ee.type===Mr.pop&&s.go(-1,!1)}).catch(cr),Promise.reject()):(ee.delta&&s.go(-ee.delta,!1),ie(Me,ce,pe))).then(Me=>{Me=Me||j(ce,pe,!1),Me&&(ee.delta&&!Un(Me,8)?s.go(-ee.delta,!1):ee.type===Mr.pop&&Un(Me,20)&&s.go(-1,!1)),R(ce,pe,Me)}).catch(cr)}))}let z=Xs(),J=Xs(),$;function ie(N,O,ee){fe(N);const ce=J.list();return ce.length?ce.forEach(ge=>ge(N,O,ee)):console.error(N),Promise.reject(N)}function Y(){return $&&l.value!==ni?Promise.resolve():new Promise((N,O)=>{z.add([N,O])})}function fe(N){return $||($=!N,k(),z.list().forEach(([O,ee])=>N?ee(N):O()),z.reset()),N}function de(N,O,ee,ce){const{scrollBehavior:ge}=i;if(!fs||!ge)return Promise.resolve();const pe=!ee&&J0(Mu(N.fullPath,0))||(ce||!ee)&&history.state&&history.state.scroll||null;return dd().then(()=>ge(N,O,pe)).then(Me=>Me&&$0(Me)).catch(Me=>ie(Me,N,O))}const ye=N=>s.go(N);let W;const oe=new Set,ve={currentRoute:l,listening:!0,addRoute:d,removeRoute:g,hasRoute:m,getRoutes:p,resolve:_,options:i,push:w,replace:S,go:ye,back:()=>ye(-1),forward:()=>ye(1),beforeEach:r.add,beforeResolve:o.add,afterEach:a.add,onError:J.add,isReady:Y,install(N){const O=this;N.component("RouterLink",z_),N.component("RouterView",B_),N.config.globalProperties.$router=O,Object.defineProperty(N.config.globalProperties,"$route",{enumerable:!0,get:()=>bs(l)}),fs&&!W&&l.value===ni&&(W=!0,w(s.location).catch(ge=>{}));const ee={};for(const ge in ni)ee[ge]=on(()=>l.value[ge]);N.provide(xc,O),N.provide(ep,Ir(ee)),N.provide(Fl,l);const ce=N.unmount;oe.add(N),N.unmount=function(){oe.delete(N),oe.size<1&&(c=ni,Q&&Q(),Q=null,l.value=ni,W=!1,$=!1),ce()}}};return ve}function Yi(i){return i.reduce((e,t)=>e.then(()=>t()),Promise.resolve())}function H_(i,e){const t=[],n=[],s=[],r=Math.max(e.matched.length,i.matched.length);for(let o=0;o<r;o++){const a=e.matched[o];a&&(i.matched.find(c=>Ls(c,a))?n.push(a):t.push(a));const l=i.matched[o];l&&(e.matched.find(c=>Ls(c,l))||s.push(l))}return[t,n,s]}/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const vc="149",Zi={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},$i={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},G_=0,Ou=1,W_=2,tp=1,np=2,nr=3,dn=0,Ht=1,Bt=2,mi=0,Ss=1,zu=2,Nu=3,Uu=4,X_=5,ds=100,j_=101,q_=102,ku=103,Bu=104,Y_=200,Z_=201,$_=202,K_=203,ip=204,sp=205,J_=206,Q_=207,ex=208,tx=209,nx=210,ix=0,sx=1,rx=2,Ol=3,ox=4,ax=5,lx=6,cx=7,ea=0,ux=1,hx=2,Zn=0,fx=1,dx=2,px=3,mx=4,gx=5,rp=300,Ds=301,Is=302,zo=303,zl=304,ta=306,br=1e3,Qt=1001,Nl=1002,Et=1003,Vu=1004,Ta=1005,rn=1006,_x=1007,wr=1008,Gi=1009,xx=1010,vx=1011,op=1012,yx=1013,Ni=1014,hi=1015,Sr=1016,Mx=1017,bx=1018,Ts=1020,wx=1021,an=1023,Sx=1024,Tx=1025,Vi=1026,Fs=1027,Ex=1028,Ax=1029,Cx=1030,Px=1031,Lx=1033,Ea=33776,Aa=33777,Ca=33778,Pa=33779,Hu=35840,Gu=35841,Wu=35842,Xu=35843,Rx=36196,ju=37492,qu=37496,Yu=37808,Zu=37809,$u=37810,Ku=37811,Ju=37812,Qu=37813,eh=37814,th=37815,nh=37816,ih=37817,sh=37818,rh=37819,oh=37820,ah=37821,La=36492,Dx=36283,lh=36284,ch=36285,uh=36286,No=2300,Uo=2301,Ra=2302,hh=2400,fh=2401,dh=2402,Ix=2500,Wi=3e3,nt=3001,Fx=3200,Ox=3201,na=0,zx=1,En="srgb",Tr="srgb-linear",Da=7680,Nx=519,ph=35044,mh="300 es",Ul=1035;class qi{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const s=this._listeners[e];if(s!==void 0){const r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,e);e.target=null}}}const Lt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let gh=1234567;const Es=Math.PI/180,Er=180/Math.PI;function Qn(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Lt[i&255]+Lt[i>>8&255]+Lt[i>>16&255]+Lt[i>>24&255]+"-"+Lt[e&255]+Lt[e>>8&255]+"-"+Lt[e>>16&15|64]+Lt[e>>24&255]+"-"+Lt[t&63|128]+Lt[t>>8&255]+"-"+Lt[t>>16&255]+Lt[t>>24&255]+Lt[n&255]+Lt[n>>8&255]+Lt[n>>16&255]+Lt[n>>24&255]).toLowerCase()}function At(i,e,t){return Math.max(e,Math.min(t,i))}function yc(i,e){return(i%e+e)%e}function Ux(i,e,t,n,s){return n+(i-e)*(s-n)/(t-e)}function kx(i,e,t){return i!==e?(t-i)/(e-i):0}function hr(i,e,t){return(1-t)*i+t*e}function Bx(i,e,t,n){return hr(i,e,1-Math.exp(-t*n))}function Vx(i,e=1){return e-Math.abs(yc(i,e*2)-e)}function Hx(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function Gx(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function Wx(i,e){return i+Math.floor(Math.random()*(e-i+1))}function Xx(i,e){return i+Math.random()*(e-i)}function jx(i){return i*(.5-Math.random())}function qx(i){i!==void 0&&(gh=i);let e=gh+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Yx(i){return i*Es}function Zx(i){return i*Er}function kl(i){return(i&i-1)===0&&i!==0}function ap(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function ko(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function $x(i,e,t,n,s){const r=Math.cos,o=Math.sin,a=r(t/2),l=o(t/2),c=r((e+n)/2),u=o((e+n)/2),h=r((e-n)/2),f=o((e-n)/2),d=r((n-e)/2),g=o((n-e)/2);switch(s){case"XYX":i.set(a*u,l*h,l*f,a*c);break;case"YZY":i.set(l*f,a*u,l*h,a*c);break;case"ZXZ":i.set(l*h,l*f,a*u,a*c);break;case"XZX":i.set(a*u,l*g,l*d,a*c);break;case"YXY":i.set(l*d,a*u,l*g,a*c);break;case"ZYZ":i.set(l*g,l*d,a*u,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function ir(i,e){switch(e.constructor){case Float32Array:return i;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function Gt(i,e){switch(e.constructor){case Float32Array:return i;case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}var Ln=Object.freeze({__proto__:null,DEG2RAD:Es,RAD2DEG:Er,ceilPowerOfTwo:ap,clamp:At,damp:Bx,degToRad:Yx,denormalize:ir,euclideanModulo:yc,floorPowerOfTwo:ko,generateUUID:Qn,inverseLerp:kx,isPowerOfTwo:kl,lerp:hr,mapLinear:Ux,normalize:Gt,pingpong:Vx,radToDeg:Zx,randFloat:Xx,randFloatSpread:jx,randInt:Wx,seededRandom:qx,setQuaternionFromProperEuler:$x,smootherstep:Gx,smoothstep:Hx});class xe{constructor(e=0,t=0){xe.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*n-o*s+e.x,this.y=r*s+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class qt{constructor(){qt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1]}set(e,t,n,s,r,o,a,l,c){const u=this.elements;return u[0]=e,u[1]=s,u[2]=a,u[3]=t,u[4]=r,u[5]=l,u[6]=n,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,s=t.elements,r=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],u=n[4],h=n[7],f=n[2],d=n[5],g=n[8],p=s[0],m=s[3],_=s[6],M=s[1],x=s[4],w=s[7],S=s[2],P=s[5],I=s[8];return r[0]=o*p+a*M+l*S,r[3]=o*m+a*x+l*P,r[6]=o*_+a*w+l*I,r[1]=c*p+u*M+h*S,r[4]=c*m+u*x+h*P,r[7]=c*_+u*w+h*I,r[2]=f*p+d*M+g*S,r[5]=f*m+d*x+g*P,r[8]=f*_+d*w+g*I,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return t*o*u-t*a*c-n*r*u+n*a*l+s*r*c-s*o*l}invert(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],h=u*o-a*c,f=a*l-u*r,d=c*r-o*l,g=t*h+n*f+s*d;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const p=1/g;return e[0]=h*p,e[1]=(s*c-u*n)*p,e[2]=(a*n-s*o)*p,e[3]=f*p,e[4]=(u*t-s*l)*p,e[5]=(s*r-a*t)*p,e[6]=d*p,e[7]=(n*l-c*t)*p,e[8]=(o*t-n*r)*p,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,o,a){const l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*o+c*a)+o+e,-s*c,s*l,-s*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(Ia.makeScale(e,t)),this}rotate(e){return this.premultiply(Ia.makeRotation(-e)),this}translate(e,t){return this.premultiply(Ia.makeTranslation(e,t)),this}makeTranslation(e,t){return this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Ia=new qt;function lp(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function Ar(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Hi(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Co(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}const Fa={[En]:{[Tr]:Hi},[Tr]:{[En]:Co}},zt={legacyMode:!0,get workingColorSpace(){return Tr},set workingColorSpace(i){console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")},convert:function(i,e,t){if(this.legacyMode||e===t||!e||!t)return i;if(Fa[e]&&Fa[e][t]!==void 0){const n=Fa[e][t];return i.r=n(i.r),i.g=n(i.g),i.b=n(i.b),i}throw new Error("Unsupported color space conversion.")},fromWorkingColorSpace:function(i,e){return this.convert(i,this.workingColorSpace,e)},toWorkingColorSpace:function(i,e){return this.convert(i,e,this.workingColorSpace)}},cp={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},vt={r:0,g:0,b:0},pn={h:0,s:0,l:0},jr={h:0,s:0,l:0};function Oa(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}function qr(i,e){return e.r=i.r,e.g=i.g,e.b=i.b,e}class Pe{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,t===void 0&&n===void 0?this.set(e):this.setRGB(e,t,n)}set(e){return e&&e.isColor?this.copy(e):typeof e=="number"?this.setHex(e):typeof e=="string"&&this.setStyle(e),this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=En){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,zt.toWorkingColorSpace(this,t),this}setRGB(e,t,n,s=zt.workingColorSpace){return this.r=e,this.g=t,this.b=n,zt.toWorkingColorSpace(this,s),this}setHSL(e,t,n,s=zt.workingColorSpace){if(e=yc(e,1),t=At(t,0,1),n=At(n,0,1),t===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+t):n+t-n*t,o=2*n-r;this.r=Oa(o,r,e+1/3),this.g=Oa(o,r,e),this.b=Oa(o,r,e-1/3)}return zt.toWorkingColorSpace(this,s),this}setStyle(e,t=En){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^((?:rgb|hsl)a?)\(([^\)]*)\)/.exec(e)){let r;const o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return this.r=Math.min(255,parseInt(r[1],10))/255,this.g=Math.min(255,parseInt(r[2],10))/255,this.b=Math.min(255,parseInt(r[3],10))/255,zt.toWorkingColorSpace(this,t),n(r[4]),this;if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return this.r=Math.min(100,parseInt(r[1],10))/100,this.g=Math.min(100,parseInt(r[2],10))/100,this.b=Math.min(100,parseInt(r[3],10))/100,zt.toWorkingColorSpace(this,t),n(r[4]),this;break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a)){const l=parseFloat(r[1])/360,c=parseFloat(r[2])/100,u=parseFloat(r[3])/100;return n(r[4]),this.setHSL(l,c,u,t)}break}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=s[1],o=r.length;if(o===3)return this.r=parseInt(r.charAt(0)+r.charAt(0),16)/255,this.g=parseInt(r.charAt(1)+r.charAt(1),16)/255,this.b=parseInt(r.charAt(2)+r.charAt(2),16)/255,zt.toWorkingColorSpace(this,t),this;if(o===6)return this.r=parseInt(r.charAt(0)+r.charAt(1),16)/255,this.g=parseInt(r.charAt(2)+r.charAt(3),16)/255,this.b=parseInt(r.charAt(4)+r.charAt(5),16)/255,zt.toWorkingColorSpace(this,t),this}return e&&e.length>0?this.setColorName(e,t):this}setColorName(e,t=En){const n=cp[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Hi(e.r),this.g=Hi(e.g),this.b=Hi(e.b),this}copyLinearToSRGB(e){return this.r=Co(e.r),this.g=Co(e.g),this.b=Co(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=En){return zt.fromWorkingColorSpace(qr(this,vt),e),At(vt.r*255,0,255)<<16^At(vt.g*255,0,255)<<8^At(vt.b*255,0,255)<<0}getHexString(e=En){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=zt.workingColorSpace){zt.fromWorkingColorSpace(qr(this,vt),t);const n=vt.r,s=vt.g,r=vt.b,o=Math.max(n,s,r),a=Math.min(n,s,r);let l,c;const u=(a+o)/2;if(a===o)l=0,c=0;else{const h=o-a;switch(c=u<=.5?h/(o+a):h/(2-o-a),o){case n:l=(s-r)/h+(s<r?6:0);break;case s:l=(r-n)/h+2;break;case r:l=(n-s)/h+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=zt.workingColorSpace){return zt.fromWorkingColorSpace(qr(this,vt),t),e.r=vt.r,e.g=vt.g,e.b=vt.b,e}getStyle(e=En){return zt.fromWorkingColorSpace(qr(this,vt),e),e!==En?`color(${e} ${vt.r} ${vt.g} ${vt.b})`:`rgb(${vt.r*255|0},${vt.g*255|0},${vt.b*255|0})`}offsetHSL(e,t,n){return this.getHSL(pn),pn.h+=e,pn.s+=t,pn.l+=n,this.setHSL(pn.h,pn.s,pn.l),this}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(pn),e.getHSL(jr);const n=hr(pn.h,jr.h,t),s=hr(pn.s,jr.s,t),r=hr(pn.l,jr.l,t);return this.setHSL(n,s,r),this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}Pe.NAMES=cp;let Ki;class up{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Ki===void 0&&(Ki=Ar("canvas")),Ki.width=e.width,Ki.height=e.height;const n=Ki.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=Ki}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Ar("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=Hi(r[o]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Hi(t[n]/255)*255):t[n]=Hi(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}class hp{constructor(e=null){this.isSource=!0,this.uuid=Qn(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(za(s[o].image)):r.push(za(s[o]))}else r=za(s);n.url=r}return t||(e.images[this.uuid]=n),n}}function za(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?up.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Kx=0;class Ct extends qi{constructor(e=Ct.DEFAULT_IMAGE,t=Ct.DEFAULT_MAPPING,n=Qt,s=Qt,r=rn,o=wr,a=an,l=Gi,c=Ct.DEFAULT_ANISOTROPY,u=Wi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Kx++}),this.uuid=Qn(),this.name="",this.source=new hp(e),this.mipmaps=[],this.mapping=t,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new xe(0,0),this.repeat=new xe(1,1),this.center=new xe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new qt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.encoding=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.encoding=e.encoding,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.5,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,type:this.type,encoding:this.encoding,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==rp)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case br:e.x=e.x-Math.floor(e.x);break;case Qt:e.x=e.x<0?0:1;break;case Nl:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case br:e.y=e.y-Math.floor(e.y);break;case Qt:e.y=e.y<0?0:1;break;case Nl:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}}Ct.DEFAULT_IMAGE=null;Ct.DEFAULT_MAPPING=rp;Ct.DEFAULT_ANISOTROPY=1;class Qe{constructor(e=0,t=0,n=0,s=1){Qe.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,s=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*t+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*t+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*t+o[7]*n+o[11]*s+o[15]*r,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r;const l=e.elements,c=l[0],u=l[4],h=l[8],f=l[1],d=l[5],g=l[9],p=l[2],m=l[6],_=l[10];if(Math.abs(u-f)<.01&&Math.abs(h-p)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+f)<.1&&Math.abs(h+p)<.1&&Math.abs(g+m)<.1&&Math.abs(c+d+_-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const x=(c+1)/2,w=(d+1)/2,S=(_+1)/2,P=(u+f)/4,I=(h+p)/4,v=(g+m)/4;return x>w&&x>S?x<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(x),s=P/n,r=I/n):w>S?w<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(w),n=P/s,r=v/s):S<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(S),n=I/r,s=v/r),this.set(n,s,r,t),this}let M=Math.sqrt((m-g)*(m-g)+(h-p)*(h-p)+(f-u)*(f-u));return Math.abs(M)<.001&&(M=1),this.x=(m-g)/M,this.y=(h-p)/M,this.z=(f-u)/M,this.w=Math.acos((c+d+_-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Xi extends qi{constructor(e=1,t=1,n={}){super(),this.isWebGLRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new Qe(0,0,e,t),this.scissorTest=!1,this.viewport=new Qe(0,0,e,t);const s={width:e,height:t,depth:1};this.texture=new Ct(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.encoding),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.internalFormat=n.internalFormat!==void 0?n.internalFormat:null,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:rn,this.depthBuffer=n.depthBuffer!==void 0?n.depthBuffer:!0,this.stencilBuffer=n.stencilBuffer!==void 0?n.stencilBuffer:!1,this.depthTexture=n.depthTexture!==void 0?n.depthTexture:null,this.samples=n.samples!==void 0?n.samples:0}setSize(e,t,n=1){(this.width!==e||this.height!==t||this.depth!==n)&&(this.width=e,this.height=t,this.depth=n,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new hp(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class fp extends Ct{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Et,this.minFilter=Et,this.wrapR=Qt,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Jx extends Ct{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Et,this.minFilter=Et,this.wrapR=Qt,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class un{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,o,a){let l=n[s+0],c=n[s+1],u=n[s+2],h=n[s+3];const f=r[o+0],d=r[o+1],g=r[o+2],p=r[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h;return}if(a===1){e[t+0]=f,e[t+1]=d,e[t+2]=g,e[t+3]=p;return}if(h!==p||l!==f||c!==d||u!==g){let m=1-a;const _=l*f+c*d+u*g+h*p,M=_>=0?1:-1,x=1-_*_;if(x>Number.EPSILON){const S=Math.sqrt(x),P=Math.atan2(S,_*M);m=Math.sin(m*P)/S,a=Math.sin(a*P)/S}const w=a*M;if(l=l*m+f*w,c=c*m+d*w,u=u*m+g*w,h=h*m+p*w,m===1-a){const S=1/Math.sqrt(l*l+c*c+u*u+h*h);l*=S,c*=S,u*=S,h*=S}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h}static multiplyQuaternionsFlat(e,t,n,s,r,o){const a=n[s],l=n[s+1],c=n[s+2],u=n[s+3],h=r[o],f=r[o+1],d=r[o+2],g=r[o+3];return e[t]=a*g+u*h+l*d-c*f,e[t+1]=l*g+u*f+c*h-a*d,e[t+2]=c*g+u*d+a*f-l*h,e[t+3]=u*g-a*h-l*f-c*d,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t){const n=e._x,s=e._y,r=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(n/2),u=a(s/2),h=a(r/2),f=l(n/2),d=l(s/2),g=l(r/2);switch(o){case"XYZ":this._x=f*u*h+c*d*g,this._y=c*d*h-f*u*g,this._z=c*u*g+f*d*h,this._w=c*u*h-f*d*g;break;case"YXZ":this._x=f*u*h+c*d*g,this._y=c*d*h-f*u*g,this._z=c*u*g-f*d*h,this._w=c*u*h+f*d*g;break;case"ZXY":this._x=f*u*h-c*d*g,this._y=c*d*h+f*u*g,this._z=c*u*g+f*d*h,this._w=c*u*h-f*d*g;break;case"ZYX":this._x=f*u*h-c*d*g,this._y=c*d*h+f*u*g,this._z=c*u*g-f*d*h,this._w=c*u*h+f*d*g;break;case"YZX":this._x=f*u*h+c*d*g,this._y=c*d*h+f*u*g,this._z=c*u*g-f*d*h,this._w=c*u*h-f*d*g;break;case"XZY":this._x=f*u*h-c*d*g,this._y=c*d*h-f*u*g,this._z=c*u*g+f*d*h,this._w=c*u*h+f*d*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],s=t[4],r=t[8],o=t[1],a=t[5],l=t[9],c=t[2],u=t[6],h=t[10],f=n+a+h;if(f>0){const d=.5/Math.sqrt(f+1);this._w=.25/d,this._x=(u-l)*d,this._y=(r-c)*d,this._z=(o-s)*d}else if(n>a&&n>h){const d=2*Math.sqrt(1+n-a-h);this._w=(u-l)/d,this._x=.25*d,this._y=(s+o)/d,this._z=(r+c)/d}else if(a>h){const d=2*Math.sqrt(1+a-n-h);this._w=(r-c)/d,this._x=(s+o)/d,this._y=.25*d,this._z=(l+u)/d}else{const d=2*Math.sqrt(1+h-n-a);this._w=(o-s)/d,this._x=(r+c)/d,this._y=(l+u)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(At(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,s=e._y,r=e._z,o=e._w,a=t._x,l=t._y,c=t._z,u=t._w;return this._x=n*u+o*a+s*c-r*l,this._y=s*u+o*l+r*a-n*c,this._z=r*u+o*c+n*l-s*a,this._w=o*u-n*a-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,s=this._y,r=this._z,o=this._w;let a=o*e._w+n*e._x+s*e._y+r*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=n,this._y=s,this._z=r,this;const l=1-a*a;if(l<=Number.EPSILON){const d=1-t;return this._w=d*o+t*this._w,this._x=d*n+t*this._x,this._y=d*s+t*this._y,this._z=d*r+t*this._z,this.normalize(),this._onChangeCallback(),this}const c=Math.sqrt(l),u=Math.atan2(c,a),h=Math.sin((1-t)*u)/c,f=Math.sin(t*u)/c;return this._w=o*h+this._w*f,this._x=n*h+this._x*f,this._y=s*h+this._y*f,this._z=r*h+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=Math.random(),t=Math.sqrt(1-e),n=Math.sqrt(e),s=2*Math.PI*Math.random(),r=2*Math.PI*Math.random();return this.set(t*Math.cos(s),n*Math.sin(r),n*Math.cos(r),t*Math.sin(s))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class D{constructor(e=0,t=0,n=0){D.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(_h.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(_h.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,s=this.z,r=e.elements,o=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(e){const t=this.x,n=this.y,s=this.z,r=e.x,o=e.y,a=e.z,l=e.w,c=l*t+o*s-a*n,u=l*n+a*t-r*s,h=l*s+r*n-o*t,f=-r*t-o*n-a*s;return this.x=c*l+f*-r+u*-a-h*-o,this.y=u*l+f*-o+h*-r-c*-a,this.z=h*l+f*-a+c*-o-u*-r,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,s=e.y,r=e.z,o=t.x,a=t.y,l=t.z;return this.x=s*l-r*a,this.y=r*o-n*l,this.z=n*a-s*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Na.copy(this).projectOnVector(e),this.sub(Na)}reflect(e){return this.sub(Na.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(At(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,n=Math.sqrt(1-e**2);return this.x=n*Math.cos(t),this.y=n*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Na=new D,_h=new un;class Fr{constructor(e=new D(1/0,1/0,1/0),t=new D(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){let t=1/0,n=1/0,s=1/0,r=-1/0,o=-1/0,a=-1/0;for(let l=0,c=e.length;l<c;l+=3){const u=e[l],h=e[l+1],f=e[l+2];u<t&&(t=u),h<n&&(n=h),f<s&&(s=f),u>r&&(r=u),h>o&&(o=h),f>a&&(a=f)}return this.min.set(t,n,s),this.max.set(r,o,a),this}setFromBufferAttribute(e){let t=1/0,n=1/0,s=1/0,r=-1/0,o=-1/0,a=-1/0;for(let l=0,c=e.count;l<c;l++){const u=e.getX(l),h=e.getY(l),f=e.getZ(l);u<t&&(t=u),h<n&&(n=h),f<s&&(s=f),u>r&&(r=u),h>o&&(o=h),f>a&&(a=f)}return this.min.set(t,n,s),this.max.set(r,o,a),this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=Ei.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0)if(t&&n.attributes!=null&&n.attributes.position!==void 0){const r=n.attributes.position;for(let o=0,a=r.count;o<a;o++)Ei.fromBufferAttribute(r,o).applyMatrix4(e.matrixWorld),this.expandByPoint(Ei)}else n.boundingBox===null&&n.computeBoundingBox(),Ua.copy(n.boundingBox),Ua.applyMatrix4(e.matrixWorld),this.union(Ua);const s=e.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Ei),Ei.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(js),Yr.subVectors(this.max,js),Ji.subVectors(e.a,js),Qi.subVectors(e.b,js),es.subVectors(e.c,js),ii.subVectors(Qi,Ji),si.subVectors(es,Qi),Ai.subVectors(Ji,es);let t=[0,-ii.z,ii.y,0,-si.z,si.y,0,-Ai.z,Ai.y,ii.z,0,-ii.x,si.z,0,-si.x,Ai.z,0,-Ai.x,-ii.y,ii.x,0,-si.y,si.x,0,-Ai.y,Ai.x,0];return!ka(t,Ji,Qi,es,Yr)||(t=[1,0,0,0,1,0,0,0,1],!ka(t,Ji,Qi,es,Yr))?!1:(Zr.crossVectors(ii,si),t=[Zr.x,Zr.y,Zr.z],ka(t,Ji,Qi,es,Yr))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return Ei.copy(e).clamp(this.min,this.max).sub(e).length()}getBoundingSphere(e){return this.getCenter(e.center),e.radius=this.getSize(Ei).length()*.5,e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(kn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),kn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),kn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),kn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),kn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),kn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),kn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),kn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(kn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const kn=[new D,new D,new D,new D,new D,new D,new D,new D],Ei=new D,Ua=new Fr,Ji=new D,Qi=new D,es=new D,ii=new D,si=new D,Ai=new D,js=new D,Yr=new D,Zr=new D,Ci=new D;function ka(i,e,t,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){Ci.fromArray(i,r);const a=s.x*Math.abs(Ci.x)+s.y*Math.abs(Ci.y)+s.z*Math.abs(Ci.z),l=e.dot(Ci),c=t.dot(Ci),u=n.dot(Ci);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const Qx=new Fr,qs=new D,Ba=new D;let Or=class{constructor(e=new D,t=-1){this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):Qx.setFromPoints(e).getCenter(n);let s=0;for(let r=0,o=e.length;r<o;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;qs.subVectors(e,this.center);const t=qs.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(qs,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Ba.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(qs.copy(e.center).add(Ba)),this.expandByPoint(qs.copy(e.center).sub(Ba))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}};const Bn=new D,Va=new D,$r=new D,ri=new D,Ha=new D,Kr=new D,Ga=new D;class ia{constructor(e=new D,t=new D(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.direction).multiplyScalar(e).add(this.origin)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Bn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.direction).multiplyScalar(n).add(this.origin)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Bn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Bn.copy(this.direction).multiplyScalar(t).add(this.origin),Bn.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){Va.copy(e).add(t).multiplyScalar(.5),$r.copy(t).sub(e).normalize(),ri.copy(this.origin).sub(Va);const r=e.distanceTo(t)*.5,o=-this.direction.dot($r),a=ri.dot(this.direction),l=-ri.dot($r),c=ri.lengthSq(),u=Math.abs(1-o*o);let h,f,d,g;if(u>0)if(h=o*l-a,f=o*a-l,g=r*u,h>=0)if(f>=-g)if(f<=g){const p=1/u;h*=p,f*=p,d=h*(h+o*f+2*a)+f*(o*h+f+2*l)+c}else f=r,h=Math.max(0,-(o*f+a)),d=-h*h+f*(f+2*l)+c;else f=-r,h=Math.max(0,-(o*f+a)),d=-h*h+f*(f+2*l)+c;else f<=-g?(h=Math.max(0,-(-o*r+a)),f=h>0?-r:Math.min(Math.max(-r,-l),r),d=-h*h+f*(f+2*l)+c):f<=g?(h=0,f=Math.min(Math.max(-r,-l),r),d=f*(f+2*l)+c):(h=Math.max(0,-(o*r+a)),f=h>0?r:Math.min(Math.max(-r,-l),r),d=-h*h+f*(f+2*l)+c);else f=o>0?-r:r,h=Math.max(0,-(o*f+a)),d=-h*h+f*(f+2*l)+c;return n&&n.copy(this.direction).multiplyScalar(h).add(this.origin),s&&s.copy($r).multiplyScalar(f).add(Va),d}intersectSphere(e,t){Bn.subVectors(e.center,this.origin);const n=Bn.dot(this.direction),s=Bn.dot(Bn)-n*n,r=e.radius*e.radius;if(s>r)return null;const o=Math.sqrt(r-s),a=n-o,l=n+o;return a<0&&l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,o,a,l;const c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,f=this.origin;return c>=0?(n=(e.min.x-f.x)*c,s=(e.max.x-f.x)*c):(n=(e.max.x-f.x)*c,s=(e.min.x-f.x)*c),u>=0?(r=(e.min.y-f.y)*u,o=(e.max.y-f.y)*u):(r=(e.max.y-f.y)*u,o=(e.min.y-f.y)*u),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),h>=0?(a=(e.min.z-f.z)*h,l=(e.max.z-f.z)*h):(a=(e.max.z-f.z)*h,l=(e.min.z-f.z)*h),n>l||a>s)||((a>n||n!==n)&&(n=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,Bn)!==null}intersectTriangle(e,t,n,s,r){Ha.subVectors(t,e),Kr.subVectors(n,e),Ga.crossVectors(Ha,Kr);let o=this.direction.dot(Ga),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;ri.subVectors(this.origin,e);const l=a*this.direction.dot(Kr.crossVectors(ri,Kr));if(l<0)return null;const c=a*this.direction.dot(Ha.cross(ri));if(c<0||l+c>o)return null;const u=-a*ri.dot(Ga);return u<0?null:this.at(u/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class De{constructor(){De.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]}set(e,t,n,s,r,o,a,l,c,u,h,f,d,g,p,m){const _=this.elements;return _[0]=e,_[4]=t,_[8]=n,_[12]=s,_[1]=r,_[5]=o,_[9]=a,_[13]=l,_[2]=c,_[6]=u,_[10]=h,_[14]=f,_[3]=d,_[7]=g,_[11]=p,_[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new De().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,s=1/ts.setFromMatrixColumn(e,0).length(),r=1/ts.setFromMatrixColumn(e,1).length(),o=1/ts.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,s=e.y,r=e.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(s),c=Math.sin(s),u=Math.cos(r),h=Math.sin(r);if(e.order==="XYZ"){const f=o*u,d=o*h,g=a*u,p=a*h;t[0]=l*u,t[4]=-l*h,t[8]=c,t[1]=d+g*c,t[5]=f-p*c,t[9]=-a*l,t[2]=p-f*c,t[6]=g+d*c,t[10]=o*l}else if(e.order==="YXZ"){const f=l*u,d=l*h,g=c*u,p=c*h;t[0]=f+p*a,t[4]=g*a-d,t[8]=o*c,t[1]=o*h,t[5]=o*u,t[9]=-a,t[2]=d*a-g,t[6]=p+f*a,t[10]=o*l}else if(e.order==="ZXY"){const f=l*u,d=l*h,g=c*u,p=c*h;t[0]=f-p*a,t[4]=-o*h,t[8]=g+d*a,t[1]=d+g*a,t[5]=o*u,t[9]=p-f*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const f=o*u,d=o*h,g=a*u,p=a*h;t[0]=l*u,t[4]=g*c-d,t[8]=f*c+p,t[1]=l*h,t[5]=p*c+f,t[9]=d*c-g,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const f=o*l,d=o*c,g=a*l,p=a*c;t[0]=l*u,t[4]=p-f*h,t[8]=g*h+d,t[1]=h,t[5]=o*u,t[9]=-a*u,t[2]=-c*u,t[6]=d*h+g,t[10]=f-p*h}else if(e.order==="XZY"){const f=o*l,d=o*c,g=a*l,p=a*c;t[0]=l*u,t[4]=-h,t[8]=c*u,t[1]=f*h+p,t[5]=o*u,t[9]=d*h-g,t[2]=g*h-d,t[6]=a*u,t[10]=p*h+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(ev,e,tv)}lookAt(e,t,n){const s=this.elements;return Kt.subVectors(e,t),Kt.lengthSq()===0&&(Kt.z=1),Kt.normalize(),oi.crossVectors(n,Kt),oi.lengthSq()===0&&(Math.abs(n.z)===1?Kt.x+=1e-4:Kt.z+=1e-4,Kt.normalize(),oi.crossVectors(n,Kt)),oi.normalize(),Jr.crossVectors(Kt,oi),s[0]=oi.x,s[4]=Jr.x,s[8]=Kt.x,s[1]=oi.y,s[5]=Jr.y,s[9]=Kt.y,s[2]=oi.z,s[6]=Jr.z,s[10]=Kt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,s=t.elements,r=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],u=n[1],h=n[5],f=n[9],d=n[13],g=n[2],p=n[6],m=n[10],_=n[14],M=n[3],x=n[7],w=n[11],S=n[15],P=s[0],I=s[4],v=s[8],A=s[12],R=s[1],j=s[5],Q=s[9],k=s[13],z=s[2],J=s[6],$=s[10],ie=s[14],Y=s[3],fe=s[7],de=s[11],ye=s[15];return r[0]=o*P+a*R+l*z+c*Y,r[4]=o*I+a*j+l*J+c*fe,r[8]=o*v+a*Q+l*$+c*de,r[12]=o*A+a*k+l*ie+c*ye,r[1]=u*P+h*R+f*z+d*Y,r[5]=u*I+h*j+f*J+d*fe,r[9]=u*v+h*Q+f*$+d*de,r[13]=u*A+h*k+f*ie+d*ye,r[2]=g*P+p*R+m*z+_*Y,r[6]=g*I+p*j+m*J+_*fe,r[10]=g*v+p*Q+m*$+_*de,r[14]=g*A+p*k+m*ie+_*ye,r[3]=M*P+x*R+w*z+S*Y,r[7]=M*I+x*j+w*J+S*fe,r[11]=M*v+x*Q+w*$+S*de,r[15]=M*A+x*k+w*ie+S*ye,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],h=e[6],f=e[10],d=e[14],g=e[3],p=e[7],m=e[11],_=e[15];return g*(+r*l*h-s*c*h-r*a*f+n*c*f+s*a*d-n*l*d)+p*(+t*l*d-t*c*f+r*o*f-s*o*d+s*c*u-r*l*u)+m*(+t*c*h-t*a*d-r*o*h+n*o*d+r*a*u-n*c*u)+_*(-s*a*u-t*l*h+t*a*f+s*o*h-n*o*f+n*l*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],h=e[9],f=e[10],d=e[11],g=e[12],p=e[13],m=e[14],_=e[15],M=h*m*c-p*f*c+p*l*d-a*m*d-h*l*_+a*f*_,x=g*f*c-u*m*c-g*l*d+o*m*d+u*l*_-o*f*_,w=u*p*c-g*h*c+g*a*d-o*p*d-u*a*_+o*h*_,S=g*h*l-u*p*l-g*a*f+o*p*f+u*a*m-o*h*m,P=t*M+n*x+s*w+r*S;if(P===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const I=1/P;return e[0]=M*I,e[1]=(p*f*r-h*m*r-p*s*d+n*m*d+h*s*_-n*f*_)*I,e[2]=(a*m*r-p*l*r+p*s*c-n*m*c-a*s*_+n*l*_)*I,e[3]=(h*l*r-a*f*r-h*s*c+n*f*c+a*s*d-n*l*d)*I,e[4]=x*I,e[5]=(u*m*r-g*f*r+g*s*d-t*m*d-u*s*_+t*f*_)*I,e[6]=(g*l*r-o*m*r-g*s*c+t*m*c+o*s*_-t*l*_)*I,e[7]=(o*f*r-u*l*r+u*s*c-t*f*c-o*s*d+t*l*d)*I,e[8]=w*I,e[9]=(g*h*r-u*p*r-g*n*d+t*p*d+u*n*_-t*h*_)*I,e[10]=(o*p*r-g*a*r+g*n*c-t*p*c-o*n*_+t*a*_)*I,e[11]=(u*a*r-o*h*r-u*n*c+t*h*c+o*n*d-t*a*d)*I,e[12]=S*I,e[13]=(u*p*s-g*h*s+g*n*f-t*p*f-u*n*m+t*h*m)*I,e[14]=(g*a*s-o*p*s-g*n*l+t*p*l+o*n*m-t*a*m)*I,e[15]=(o*h*s-u*a*s+u*n*l-t*h*l-o*n*f+t*a*f)*I,this}scale(e){const t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),s=Math.sin(t),r=1-n,o=e.x,a=e.y,l=e.z,c=r*o,u=r*a;return this.set(c*o+n,c*a-s*l,c*l+s*a,0,c*a+s*l,u*a+n,u*l-s*o,0,c*l-s*a,u*l+s*o,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,o){return this.set(1,n,r,0,e,1,o,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){const s=this.elements,r=t._x,o=t._y,a=t._z,l=t._w,c=r+r,u=o+o,h=a+a,f=r*c,d=r*u,g=r*h,p=o*u,m=o*h,_=a*h,M=l*c,x=l*u,w=l*h,S=n.x,P=n.y,I=n.z;return s[0]=(1-(p+_))*S,s[1]=(d+w)*S,s[2]=(g-x)*S,s[3]=0,s[4]=(d-w)*P,s[5]=(1-(f+_))*P,s[6]=(m+M)*P,s[7]=0,s[8]=(g+x)*I,s[9]=(m-M)*I,s[10]=(1-(f+p))*I,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){const s=this.elements;let r=ts.set(s[0],s[1],s[2]).length();const o=ts.set(s[4],s[5],s[6]).length(),a=ts.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],mn.copy(this);const c=1/r,u=1/o,h=1/a;return mn.elements[0]*=c,mn.elements[1]*=c,mn.elements[2]*=c,mn.elements[4]*=u,mn.elements[5]*=u,mn.elements[6]*=u,mn.elements[8]*=h,mn.elements[9]*=h,mn.elements[10]*=h,t.setFromRotationMatrix(mn),n.x=r,n.y=o,n.z=a,this}makePerspective(e,t,n,s,r,o){const a=this.elements,l=2*r/(t-e),c=2*r/(n-s),u=(t+e)/(t-e),h=(n+s)/(n-s),f=-(o+r)/(o-r),d=-2*o*r/(o-r);return a[0]=l,a[4]=0,a[8]=u,a[12]=0,a[1]=0,a[5]=c,a[9]=h,a[13]=0,a[2]=0,a[6]=0,a[10]=f,a[14]=d,a[3]=0,a[7]=0,a[11]=-1,a[15]=0,this}makeOrthographic(e,t,n,s,r,o){const a=this.elements,l=1/(t-e),c=1/(n-s),u=1/(o-r),h=(t+e)*l,f=(n+s)*c,d=(o+r)*u;return a[0]=2*l,a[4]=0,a[8]=0,a[12]=-h,a[1]=0,a[5]=2*c,a[9]=0,a[13]=-f,a[2]=0,a[6]=0,a[10]=-2*u,a[14]=-d,a[3]=0,a[7]=0,a[11]=0,a[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const ts=new D,mn=new De,ev=new D(0,0,0),tv=new D(1,1,1),oi=new D,Jr=new D,Kt=new D,xh=new De,vh=new un;class hn{constructor(e=0,t=0,n=0,s=hn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const s=e.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],u=s[9],h=s[2],f=s[6],d=s[10];switch(t){case"XYZ":this._y=Math.asin(At(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,d),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-At(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,r),this._z=0);break;case"ZXY":this._x=Math.asin(At(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-h,d),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-At(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(f,d),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(At(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,r)):(this._x=0,this._y=Math.atan2(a,d));break;case"XZY":this._z=Math.asin(-At(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-u,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return xh.makeRotationFromQuaternion(e),this.setFromRotationMatrix(xh,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return vh.setFromEuler(this),this.setFromQuaternion(vh,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}hn.DEFAULT_ORDER="XYZ";class Mc{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let nv=0;const yh=new D,ns=new un,Vn=new De,Qr=new D,Ys=new D,iv=new D,sv=new un,Mh=new D(1,0,0),bh=new D(0,1,0),wh=new D(0,0,1),rv={type:"added"},Sh={type:"removed"};class ot extends qi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:nv++}),this.uuid=Qn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=ot.DEFAULT_UP.clone();const e=new D,t=new hn,n=new un,s=new D(1,1,1);function r(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new De},normalMatrix:{value:new qt}}),this.matrix=new De,this.matrixWorld=new De,this.matrixAutoUpdate=ot.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=ot.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.layers=new Mc,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return ns.setFromAxisAngle(e,t),this.quaternion.multiply(ns),this}rotateOnWorldAxis(e,t){return ns.setFromAxisAngle(e,t),this.quaternion.premultiply(ns),this}rotateX(e){return this.rotateOnAxis(Mh,e)}rotateY(e){return this.rotateOnAxis(bh,e)}rotateZ(e){return this.rotateOnAxis(wh,e)}translateOnAxis(e,t){return yh.copy(e).applyQuaternion(this.quaternion),this.position.add(yh.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Mh,e)}translateY(e){return this.translateOnAxis(bh,e)}translateZ(e){return this.translateOnAxis(wh,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Vn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Qr.copy(e):Qr.set(e,t,n);const s=this.parent;this.updateWorldMatrix(!0,!1),Ys.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Vn.lookAt(Ys,Qr,this.up):Vn.lookAt(Qr,Ys,this.up),this.quaternion.setFromRotationMatrix(Vn),s&&(Vn.extractRotation(s.matrixWorld),ns.setFromRotationMatrix(Vn),this.quaternion.premultiply(ns.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(rv)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Sh)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){for(let e=0;e<this.children.length;e++){const t=this.children[e];t.parent=null,t.dispatchEvent(Sh)}return this.children.length=0,this}attach(e){return this.updateWorldMatrix(!0,!1),Vn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Vn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Vn),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){const o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t){let n=[];this[e]===t&&n.push(this);for(let s=0,r=this.children.length;s<r;s++){const o=this.children[s].getObjectsByProperty(e,t);o.length>0&&(n=n.concat(o))}return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ys,e,iv),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ys,sv,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,s=t.length;n<s;n++){const r=t[n];(r.matrixWorldAutoUpdate===!0||e===!0)&&r.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const s=this.children;for(let r=0,o=s.length;r<o;r++){const a=s[r];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.5,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON()));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const h=l[c];r(e.shapes,h)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(e.materials,this.material[l]));s.material=a}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];s.animations.push(r(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),h=o(e.shapes),f=o(e.skeletons),d=o(e.animations),g=o(e.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),h.length>0&&(n.shapes=h),f.length>0&&(n.skeletons=f),d.length>0&&(n.animations=d),g.length>0&&(n.nodes=g)}return n.object=s,n;function o(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const s=e.children[n];this.add(s.clone())}return this}}ot.DEFAULT_UP=new D(0,1,0);ot.DEFAULT_MATRIX_AUTO_UPDATE=!0;ot.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const gn=new D,Hn=new D,Wa=new D,Gn=new D,is=new D,ss=new D,Th=new D,Xa=new D,ja=new D,qa=new D;class Rn{constructor(e=new D,t=new D,n=new D){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),gn.subVectors(e,t),s.cross(gn);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){gn.subVectors(s,t),Hn.subVectors(n,t),Wa.subVectors(e,t);const o=gn.dot(gn),a=gn.dot(Hn),l=gn.dot(Wa),c=Hn.dot(Hn),u=Hn.dot(Wa),h=o*c-a*a;if(h===0)return r.set(-2,-1,-1);const f=1/h,d=(c*l-a*u)*f,g=(o*u-a*l)*f;return r.set(1-d-g,g,d)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,Gn),Gn.x>=0&&Gn.y>=0&&Gn.x+Gn.y<=1}static getUV(e,t,n,s,r,o,a,l){return this.getBarycoord(e,t,n,s,Gn),l.set(0,0),l.addScaledVector(r,Gn.x),l.addScaledVector(o,Gn.y),l.addScaledVector(a,Gn.z),l}static isFrontFacing(e,t,n,s){return gn.subVectors(n,t),Hn.subVectors(e,t),gn.cross(Hn).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return gn.subVectors(this.c,this.b),Hn.subVectors(this.a,this.b),gn.cross(Hn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Rn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Rn.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,n,s,r){return Rn.getUV(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return Rn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Rn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,s=this.b,r=this.c;let o,a;is.subVectors(s,n),ss.subVectors(r,n),Xa.subVectors(e,n);const l=is.dot(Xa),c=ss.dot(Xa);if(l<=0&&c<=0)return t.copy(n);ja.subVectors(e,s);const u=is.dot(ja),h=ss.dot(ja);if(u>=0&&h<=u)return t.copy(s);const f=l*h-u*c;if(f<=0&&l>=0&&u<=0)return o=l/(l-u),t.copy(n).addScaledVector(is,o);qa.subVectors(e,r);const d=is.dot(qa),g=ss.dot(qa);if(g>=0&&d<=g)return t.copy(r);const p=d*c-l*g;if(p<=0&&c>=0&&g<=0)return a=c/(c-g),t.copy(n).addScaledVector(ss,a);const m=u*g-d*h;if(m<=0&&h-u>=0&&d-g>=0)return Th.subVectors(r,s),a=(h-u)/(h-u+(d-g)),t.copy(s).addScaledVector(Th,a);const _=1/(m+p+f);return o=p*_,a=f*_,t.copy(n).addScaledVector(is,o).addScaledVector(ss,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}let ov=0;class ei extends qi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:ov++}),this.uuid=Qn(),this.name="",this.type="Material",this.blending=Ss,this.side=dn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.blendSrc=ip,this.blendDst=sp,this.blendEquation=ds,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=Ol,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Nx,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Da,this.stencilZFail=Da,this.stencilZPass=Da,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn("THREE.Material: '"+t+"' parameter is undefined.");continue}const s=this[t];if(s===void 0){console.warn("THREE."+this.type+": '"+t+"' is not a property of this material.");continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.5,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Ss&&(n.blending=this.blending),this.side!==dn&&(n.side=this.side),this.vertexColors&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=this.transparent),n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.stencilWrite=this.stencilWrite,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaToCoverage===!0&&(n.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=this.premultipliedAlpha),this.forceSinglePass===!0&&(n.forceSinglePass=this.forceSinglePass),this.wireframe===!0&&(n.wireframe=this.wireframe),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=this.flatShading),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){const o=[];for(const a in r){const l=r[a];delete l.metadata,o.push(l)}return o}if(t){const r=s(e.textures),o=s(e.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class vi extends ei{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Pe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=ea,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const xt=new D,eo=new xe;class Vt{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=ph,this.updateRange={offset:0,count:-1},this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)eo.fromBufferAttribute(this,t),eo.applyMatrix3(e),this.setXY(t,eo.x,eo.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)xt.fromBufferAttribute(this,t),xt.applyMatrix3(e),this.setXYZ(t,xt.x,xt.y,xt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)xt.fromBufferAttribute(this,t),xt.applyMatrix4(e),this.setXYZ(t,xt.x,xt.y,xt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)xt.fromBufferAttribute(this,t),xt.applyNormalMatrix(e),this.setXYZ(t,xt.x,xt.y,xt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)xt.fromBufferAttribute(this,t),xt.transformDirection(e),this.setXYZ(t,xt.x,xt.y,xt.z);return this}set(e,t=0){return this.array.set(e,t),this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=ir(t,this.array)),t}setX(e,t){return this.normalized&&(t=Gt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=ir(t,this.array)),t}setY(e,t){return this.normalized&&(t=Gt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=ir(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Gt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=ir(t,this.array)),t}setW(e,t){return this.normalized&&(t=Gt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Gt(t,this.array),n=Gt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=Gt(t,this.array),n=Gt(n,this.array),s=Gt(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=Gt(t,this.array),n=Gt(n,this.array),s=Gt(s,this.array),r=Gt(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==ph&&(e.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(e.updateRange=this.updateRange),e}copyColorsArray(){console.error("THREE.BufferAttribute: copyColorsArray() was removed in r144.")}copyVector2sArray(){console.error("THREE.BufferAttribute: copyVector2sArray() was removed in r144.")}copyVector3sArray(){console.error("THREE.BufferAttribute: copyVector3sArray() was removed in r144.")}copyVector4sArray(){console.error("THREE.BufferAttribute: copyVector4sArray() was removed in r144.")}}class bc extends Vt{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class dp extends Vt{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class ke extends Vt{constructor(e,t,n){super(new Float32Array(e),t,n)}}let av=0;const sn=new De,Ya=new ot,rs=new D,Jt=new Fr,Zs=new Fr,Tt=new D;class ct extends qi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:av++}),this.uuid=Qn(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(lp(e)?dp:bc)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new qt().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return sn.makeRotationFromQuaternion(e),this.applyMatrix4(sn),this}rotateX(e){return sn.makeRotationX(e),this.applyMatrix4(sn),this}rotateY(e){return sn.makeRotationY(e),this.applyMatrix4(sn),this}rotateZ(e){return sn.makeRotationZ(e),this.applyMatrix4(sn),this}translate(e,t,n){return sn.makeTranslation(e,t,n),this.applyMatrix4(sn),this}scale(e,t,n){return sn.makeScale(e,t,n),this.applyMatrix4(sn),this}lookAt(e){return Ya.lookAt(e),Ya.updateMatrix(),this.applyMatrix4(Ya.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(rs).negate(),this.translate(rs.x,rs.y,rs.z),this}setFromPoints(e){const t=[];for(let n=0,s=e.length;n<s;n++){const r=e[n];t.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new ke(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Fr);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new D(-1/0,-1/0,-1/0),new D(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){const r=t[n];Jt.setFromBufferAttribute(r),this.morphTargetsRelative?(Tt.addVectors(this.boundingBox.min,Jt.min),this.boundingBox.expandByPoint(Tt),Tt.addVectors(this.boundingBox.max,Jt.max),this.boundingBox.expandByPoint(Tt)):(this.boundingBox.expandByPoint(Jt.min),this.boundingBox.expandByPoint(Jt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Or);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new D,1/0);return}if(e){const n=this.boundingSphere.center;if(Jt.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){const a=t[r];Zs.setFromBufferAttribute(a),this.morphTargetsRelative?(Tt.addVectors(Jt.min,Zs.min),Jt.expandByPoint(Tt),Tt.addVectors(Jt.max,Zs.max),Jt.expandByPoint(Tt)):(Jt.expandByPoint(Zs.min),Jt.expandByPoint(Zs.max))}Jt.getCenter(n);let s=0;for(let r=0,o=e.count;r<o;r++)Tt.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(Tt));if(t)for(let r=0,o=t.length;r<o;r++){const a=t[r],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)Tt.fromBufferAttribute(a,c),l&&(rs.fromBufferAttribute(e,c),Tt.add(rs)),s=Math.max(s,n.distanceToSquared(Tt))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.array,s=t.position.array,r=t.normal.array,o=t.uv.array,a=s.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Vt(new Float32Array(4*a),4));const l=this.getAttribute("tangent").array,c=[],u=[];for(let R=0;R<a;R++)c[R]=new D,u[R]=new D;const h=new D,f=new D,d=new D,g=new xe,p=new xe,m=new xe,_=new D,M=new D;function x(R,j,Q){h.fromArray(s,R*3),f.fromArray(s,j*3),d.fromArray(s,Q*3),g.fromArray(o,R*2),p.fromArray(o,j*2),m.fromArray(o,Q*2),f.sub(h),d.sub(h),p.sub(g),m.sub(g);const k=1/(p.x*m.y-m.x*p.y);isFinite(k)&&(_.copy(f).multiplyScalar(m.y).addScaledVector(d,-p.y).multiplyScalar(k),M.copy(d).multiplyScalar(p.x).addScaledVector(f,-m.x).multiplyScalar(k),c[R].add(_),c[j].add(_),c[Q].add(_),u[R].add(M),u[j].add(M),u[Q].add(M))}let w=this.groups;w.length===0&&(w=[{start:0,count:n.length}]);for(let R=0,j=w.length;R<j;++R){const Q=w[R],k=Q.start,z=Q.count;for(let J=k,$=k+z;J<$;J+=3)x(n[J+0],n[J+1],n[J+2])}const S=new D,P=new D,I=new D,v=new D;function A(R){I.fromArray(r,R*3),v.copy(I);const j=c[R];S.copy(j),S.sub(I.multiplyScalar(I.dot(j))).normalize(),P.crossVectors(v,j);const k=P.dot(u[R])<0?-1:1;l[R*4]=S.x,l[R*4+1]=S.y,l[R*4+2]=S.z,l[R*4+3]=k}for(let R=0,j=w.length;R<j;++R){const Q=w[R],k=Q.start,z=Q.count;for(let J=k,$=k+z;J<$;J+=3)A(n[J+0]),A(n[J+1]),A(n[J+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Vt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let f=0,d=n.count;f<d;f++)n.setXYZ(f,0,0,0);const s=new D,r=new D,o=new D,a=new D,l=new D,c=new D,u=new D,h=new D;if(e)for(let f=0,d=e.count;f<d;f+=3){const g=e.getX(f+0),p=e.getX(f+1),m=e.getX(f+2);s.fromBufferAttribute(t,g),r.fromBufferAttribute(t,p),o.fromBufferAttribute(t,m),u.subVectors(o,r),h.subVectors(s,r),u.cross(h),a.fromBufferAttribute(n,g),l.fromBufferAttribute(n,p),c.fromBufferAttribute(n,m),a.add(u),l.add(u),c.add(u),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(p,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let f=0,d=t.count;f<d;f+=3)s.fromBufferAttribute(t,f+0),r.fromBufferAttribute(t,f+1),o.fromBufferAttribute(t,f+2),u.subVectors(o,r),h.subVectors(s,r),u.cross(h),n.setXYZ(f+0,u.x,u.y,u.z),n.setXYZ(f+1,u.x,u.y,u.z),n.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}merge(){return console.error("THREE.BufferGeometry.merge() has been removed. Use THREE.BufferGeometryUtils.mergeBufferGeometries() instead."),this}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Tt.fromBufferAttribute(e,t),Tt.normalize(),e.setXYZ(t,Tt.x,Tt.y,Tt.z)}toNonIndexed(){function e(a,l){const c=a.array,u=a.itemSize,h=a.normalized,f=new c.constructor(l.length*u);let d=0,g=0;for(let p=0,m=l.length;p<m;p++){a.isInterleavedBufferAttribute?d=l[p]*a.data.stride+a.offset:d=l[p]*u;for(let _=0;_<u;_++)f[g++]=c[d++]}return new Vt(f,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new ct,n=this.index.array,s=this.attributes;for(const a in s){const l=s[a],c=e(l,n);t.setAttribute(a,c)}const r=this.morphAttributes;for(const a in r){const l=[],c=r[a];for(let u=0,h=c.length;u<h;u++){const f=c[u],d=e(f,n);l.push(d)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.5,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const s={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let h=0,f=c.length;h<f;h++){const d=c[h];u.push(d.toJSON(e.data))}u.length>0&&(s[l]=u,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const s=e.attributes;for(const c in s){const u=s[c];this.setAttribute(c,u.clone(t))}const r=e.morphAttributes;for(const c in r){const u=[],h=r[c];for(let f=0,d=h.length;f<d;f++)u.push(h[f].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,u=o.length;c<u;c++){const h=o[c];this.addGroup(h.start,h.count,h.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,e.parameters!==void 0&&(this.parameters=Object.assign({},e.parameters)),this}dispose(){this.dispatchEvent({type:"dispose"})}}const Eh=new De,os=new ia,Za=new Or,$s=new D,Ks=new D,Js=new D,$a=new D,to=new D,no=new xe,io=new xe,so=new xe,Ka=new D,ro=new D;class et extends ot{constructor(e=new ct,t=new vi){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){const n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(s,e);const a=this.morphTargetInfluences;if(r&&a){to.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const u=a[l],h=r[l];u!==0&&($a.fromBufferAttribute(h,e),o?to.addScaledVector($a,u):to.addScaledVector($a.sub(t),u))}t.add(to)}return this.isSkinnedMesh&&this.boneTransform(e,t),t}raycast(e,t){const n=this.geometry,s=this.material,r=this.matrixWorld;if(s===void 0||(n.boundingSphere===null&&n.computeBoundingSphere(),Za.copy(n.boundingSphere),Za.applyMatrix4(r),e.ray.intersectsSphere(Za)===!1)||(Eh.copy(r).invert(),os.copy(e.ray).applyMatrix4(Eh),n.boundingBox!==null&&os.intersectsBox(n.boundingBox)===!1))return;let o;const a=n.index,l=n.attributes.position,c=n.attributes.uv,u=n.attributes.uv2,h=n.groups,f=n.drawRange;if(a!==null)if(Array.isArray(s))for(let d=0,g=h.length;d<g;d++){const p=h[d],m=s[p.materialIndex],_=Math.max(p.start,f.start),M=Math.min(a.count,Math.min(p.start+p.count,f.start+f.count));for(let x=_,w=M;x<w;x+=3){const S=a.getX(x),P=a.getX(x+1),I=a.getX(x+2);o=oo(this,m,e,os,c,u,S,P,I),o&&(o.faceIndex=Math.floor(x/3),o.face.materialIndex=p.materialIndex,t.push(o))}}else{const d=Math.max(0,f.start),g=Math.min(a.count,f.start+f.count);for(let p=d,m=g;p<m;p+=3){const _=a.getX(p),M=a.getX(p+1),x=a.getX(p+2);o=oo(this,s,e,os,c,u,_,M,x),o&&(o.faceIndex=Math.floor(p/3),t.push(o))}}else if(l!==void 0)if(Array.isArray(s))for(let d=0,g=h.length;d<g;d++){const p=h[d],m=s[p.materialIndex],_=Math.max(p.start,f.start),M=Math.min(l.count,Math.min(p.start+p.count,f.start+f.count));for(let x=_,w=M;x<w;x+=3){const S=x,P=x+1,I=x+2;o=oo(this,m,e,os,c,u,S,P,I),o&&(o.faceIndex=Math.floor(x/3),o.face.materialIndex=p.materialIndex,t.push(o))}}else{const d=Math.max(0,f.start),g=Math.min(l.count,f.start+f.count);for(let p=d,m=g;p<m;p+=3){const _=p,M=p+1,x=p+2;o=oo(this,s,e,os,c,u,_,M,x),o&&(o.faceIndex=Math.floor(p/3),t.push(o))}}}}function lv(i,e,t,n,s,r,o,a){let l;if(e.side===Ht?l=n.intersectTriangle(o,r,s,!0,a):l=n.intersectTriangle(s,r,o,e.side===dn,a),l===null)return null;ro.copy(a),ro.applyMatrix4(i.matrixWorld);const c=t.ray.origin.distanceTo(ro);return c<t.near||c>t.far?null:{distance:c,point:ro.clone(),object:i}}function oo(i,e,t,n,s,r,o,a,l){i.getVertexPosition(o,$s),i.getVertexPosition(a,Ks),i.getVertexPosition(l,Js);const c=lv(i,e,t,n,$s,Ks,Js,Ka);if(c){s&&(no.fromBufferAttribute(s,o),io.fromBufferAttribute(s,a),so.fromBufferAttribute(s,l),c.uv=Rn.getUV(Ka,$s,Ks,Js,no,io,so,new xe)),r&&(no.fromBufferAttribute(r,o),io.fromBufferAttribute(r,a),so.fromBufferAttribute(r,l),c.uv2=Rn.getUV(Ka,$s,Ks,Js,no,io,so,new xe));const u={a:o,b:a,c:l,normal:new D,materialIndex:0};Rn.getNormal($s,Ks,Js,u.normal),c.face=u}return c}class zr extends ct{constructor(e=1,t=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};const a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);const l=[],c=[],u=[],h=[];let f=0,d=0;g("z","y","x",-1,-1,n,t,e,o,r,0),g("z","y","x",1,-1,n,t,-e,o,r,1),g("x","z","y",1,1,e,n,t,s,o,2),g("x","z","y",1,-1,e,n,-t,s,o,3),g("x","y","z",1,-1,e,t,n,s,r,4),g("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new ke(c,3)),this.setAttribute("normal",new ke(u,3)),this.setAttribute("uv",new ke(h,2));function g(p,m,_,M,x,w,S,P,I,v,A){const R=w/I,j=S/v,Q=w/2,k=S/2,z=P/2,J=I+1,$=v+1;let ie=0,Y=0;const fe=new D;for(let de=0;de<$;de++){const ye=de*j-k;for(let W=0;W<J;W++){const oe=W*R-Q;fe[p]=oe*M,fe[m]=ye*x,fe[_]=z,c.push(fe.x,fe.y,fe.z),fe[p]=0,fe[m]=0,fe[_]=P>0?1:-1,u.push(fe.x,fe.y,fe.z),h.push(W/I),h.push(1-de/v),ie+=1}}for(let de=0;de<v;de++)for(let ye=0;ye<I;ye++){const W=f+ye+J*de,oe=f+ye+J*(de+1),ve=f+(ye+1)+J*(de+1),N=f+(ye+1)+J*de;l.push(W,oe,N),l.push(oe,ve,N),Y+=6}a.addGroup(d,Y,A),d+=Y,f+=ie}}static fromJSON(e){return new zr(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Os(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const s=i[t][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?e[t][n]=s.clone():Array.isArray(s)?e[t][n]=s.slice():e[t][n]=s}}return e}function Ut(i){const e={};for(let t=0;t<i.length;t++){const n=Os(i[t]);for(const s in n)e[s]=n[s]}return e}function cv(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function pp(i){return i.getRenderTarget()===null&&i.outputEncoding===nt?En:Tr}const uv={clone:Os,merge:Ut};var hv=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,fv=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Ft extends ei{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=hv,this.fragmentShader=fv,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv2:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Os(e.uniforms),this.uniformsGroups=cv(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const s in this.uniforms){const o=this.uniforms[s].value;o&&o.isTexture?t.uniforms[s]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[s]={type:"m4",value:o.toArray()}:t.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class wc extends ot{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new De,this.projectionMatrix=new De,this.projectionMatrixInverse=new De}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(-t[8],-t[9],-t[10]).normalize()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class kt extends wc{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Er*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Es*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Er*2*Math.atan(Math.tan(Es*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,n,s,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Es*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,t-=o.offsetY*n/c,s*=o.width/l,n*=o.height/c}const a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const as=-90,ls=1;class dv extends ot{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n;const s=new kt(as,ls,e,t);s.layers=this.layers,s.up.set(0,1,0),s.lookAt(1,0,0),this.add(s);const r=new kt(as,ls,e,t);r.layers=this.layers,r.up.set(0,1,0),r.lookAt(-1,0,0),this.add(r);const o=new kt(as,ls,e,t);o.layers=this.layers,o.up.set(0,0,-1),o.lookAt(0,1,0),this.add(o);const a=new kt(as,ls,e,t);a.layers=this.layers,a.up.set(0,0,1),a.lookAt(0,-1,0),this.add(a);const l=new kt(as,ls,e,t);l.layers=this.layers,l.up.set(0,1,0),l.lookAt(0,0,1),this.add(l);const c=new kt(as,ls,e,t);c.layers=this.layers,c.up.set(0,1,0),c.lookAt(0,0,-1),this.add(c)}update(e,t){this.parent===null&&this.updateMatrixWorld();const n=this.renderTarget,[s,r,o,a,l,c]=this.children,u=e.getRenderTarget(),h=e.toneMapping,f=e.xr.enabled;e.toneMapping=Zn,e.xr.enabled=!1;const d=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0),e.render(t,s),e.setRenderTarget(n,1),e.render(t,r),e.setRenderTarget(n,2),e.render(t,o),e.setRenderTarget(n,3),e.render(t,a),e.setRenderTarget(n,4),e.render(t,l),n.texture.generateMipmaps=d,e.setRenderTarget(n,5),e.render(t,c),e.setRenderTarget(u),e.toneMapping=h,e.xr.enabled=f,n.texture.needsPMREMUpdate=!0}}class mp extends Ct{constructor(e,t,n,s,r,o,a,l,c,u){e=e!==void 0?e:[],t=t!==void 0?t:Ds,super(e,t,n,s,r,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class pv extends Xi{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new mp(s,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.encoding),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:rn}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.encoding=t.encoding,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new zr(5,5,5),r=new Ft({name:"CubemapFromEquirect",uniforms:Os(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Ht,blending:mi});r.uniforms.tEquirect.value=t;const o=new et(s,r),a=t.minFilter;return t.minFilter===wr&&(t.minFilter=rn),new dv(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,n,s){const r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,s);e.setRenderTarget(r)}}const Ja=new D,mv=new D,gv=new qt;let Li=class{constructor(e=new D(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const s=Ja.subVectors(n,t).cross(mv.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(this.normal).multiplyScalar(-this.distanceToPoint(e)).add(e)}intersectLine(e,t){const n=e.delta(Ja),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(n).multiplyScalar(r).add(e.start)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||gv.getNormalMatrix(e),s=this.coplanarPoint(Ja).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}};const cs=new Or,ao=new D;class Sc{constructor(e=new Li,t=new Li,n=new Li,s=new Li,r=new Li,o=new Li){this.planes=[e,t,n,s,r,o]}set(e,t,n,s,r,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e){const t=this.planes,n=e.elements,s=n[0],r=n[1],o=n[2],a=n[3],l=n[4],c=n[5],u=n[6],h=n[7],f=n[8],d=n[9],g=n[10],p=n[11],m=n[12],_=n[13],M=n[14],x=n[15];return t[0].setComponents(a-s,h-l,p-f,x-m).normalize(),t[1].setComponents(a+s,h+l,p+f,x+m).normalize(),t[2].setComponents(a+r,h+c,p+d,x+_).normalize(),t[3].setComponents(a-r,h-c,p-d,x-_).normalize(),t[4].setComponents(a-o,h-u,p-g,x-M).normalize(),t[5].setComponents(a+o,h+u,p+g,x+M).normalize(),this}intersectsObject(e){const t=e.geometry;return t.boundingSphere===null&&t.computeBoundingSphere(),cs.copy(t.boundingSphere).applyMatrix4(e.matrixWorld),this.intersectsSphere(cs)}intersectsSprite(e){return cs.center.set(0,0,0),cs.radius=.7071067811865476,cs.applyMatrix4(e.matrixWorld),this.intersectsSphere(cs)}intersectsSphere(e){const t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const s=t[n];if(ao.x=s.normal.x>0?e.max.x:e.min.x,ao.y=s.normal.y>0?e.max.y:e.min.y,ao.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(ao)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function gp(){let i=null,e=!1,t=null,n=null;function s(r,o){t(r,o),n=i.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function _v(i,e){const t=e.isWebGL2,n=new WeakMap;function s(c,u){const h=c.array,f=c.usage,d=i.createBuffer();i.bindBuffer(u,d),i.bufferData(u,h,f),c.onUploadCallback();let g;if(h instanceof Float32Array)g=5126;else if(h instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(t)g=5131;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else g=5123;else if(h instanceof Int16Array)g=5122;else if(h instanceof Uint32Array)g=5125;else if(h instanceof Int32Array)g=5124;else if(h instanceof Int8Array)g=5120;else if(h instanceof Uint8Array)g=5121;else if(h instanceof Uint8ClampedArray)g=5121;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:d,type:g,bytesPerElement:h.BYTES_PER_ELEMENT,version:c.version}}function r(c,u,h){const f=u.array,d=u.updateRange;i.bindBuffer(h,c),d.count===-1?i.bufferSubData(h,0,f):(t?i.bufferSubData(h,d.offset*f.BYTES_PER_ELEMENT,f,d.offset,d.count):i.bufferSubData(h,d.offset*f.BYTES_PER_ELEMENT,f.subarray(d.offset,d.offset+d.count)),d.count=-1),u.onUploadCallback()}function o(c){return c.isInterleavedBufferAttribute&&(c=c.data),n.get(c)}function a(c){c.isInterleavedBufferAttribute&&(c=c.data);const u=n.get(c);u&&(i.deleteBuffer(u.buffer),n.delete(c))}function l(c,u){if(c.isGLBufferAttribute){const f=n.get(c);(!f||f.version<c.version)&&n.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const h=n.get(c);h===void 0?n.set(c,s(c,u)):h.version<c.version&&(r(h.buffer,c,u),h.version=c.version)}return{get:o,remove:a,update:l}}class Nr extends ct{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};const r=e/2,o=t/2,a=Math.floor(n),l=Math.floor(s),c=a+1,u=l+1,h=e/a,f=t/l,d=[],g=[],p=[],m=[];for(let _=0;_<u;_++){const M=_*f-o;for(let x=0;x<c;x++){const w=x*h-r;g.push(w,-M,0),p.push(0,0,1),m.push(x/a),m.push(1-_/l)}}for(let _=0;_<l;_++)for(let M=0;M<a;M++){const x=M+c*_,w=M+c*(_+1),S=M+1+c*(_+1),P=M+1+c*_;d.push(x,w,P),d.push(w,S,P)}this.setIndex(d),this.setAttribute("position",new ke(g,3)),this.setAttribute("normal",new ke(p,3)),this.setAttribute("uv",new ke(m,2))}static fromJSON(e){return new Nr(e.width,e.height,e.widthSegments,e.heightSegments)}}var xv=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vUv ).g;
#endif`,vv=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,yv=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,Mv=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,bv=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vUv2 ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,wv=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Sv="vec3 transformed = vec3( position );",Tv=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Ev=`vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
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
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float roughness ) {
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
#ifdef USE_IRIDESCENCE
	vec3 BRDF_GGX_Iridescence( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float iridescence, const in vec3 iridescenceFresnel, const in float roughness ) {
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = mix( F_Schlick( f0, f90, dotVH ), iridescenceFresnel, iridescence );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
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
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
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
float G_BlinnPhong_Implicit( ) {
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
#endif`,Av=`#ifdef USE_IRIDESCENCE
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
		float R21 = R12;
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
#endif`,Cv=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vUv );
		vec2 dSTdy = dFdy( vUv );
		float Hll = bumpScale * texture2D( bumpMap, vUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = dFdx( surf_pos.xyz );
		vec3 vSigmaY = dFdy( surf_pos.xyz );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Pv=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
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
#endif`,Lv=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Rv=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Dv=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Iv=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Fv=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Ov=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,zv=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,Nv=`#define PI 3.141592653589793
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
struct GeometricContext {
	vec3 position;
	vec3 normal;
	vec3 viewDir;
#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal;
#endif
};
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}`,Uv=`#ifdef ENVMAP_TYPE_CUBE_UV
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
	#define cubeUV_v0 0.339
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_v1 0.276
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_v4 0.046
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_v5 0.016
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_v6 0.0038
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
#endif`,kv=`vec3 transformedNormal = objectNormal;
#ifdef USE_INSTANCING
	mat3 m = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );
	transformedNormal = m * transformedNormal;
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	vec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Bv=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Vv=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vUv ).x * displacementScale + displacementBias );
#endif`,Hv=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Gv=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Wv="gl_FragColor = linearToOutputTexel( gl_FragColor );",Xv=`vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,jv=`#ifdef USE_ENVMAP
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
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
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
#endif`,qv=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Yv=`#ifdef USE_ENVMAP
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
#endif`,Zv=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,$v=`#ifdef USE_ENVMAP
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
#endif`,Kv=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Jv=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Qv=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,ey=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,ty=`#ifdef USE_GRADIENTMAP
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
}`,ny=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vUv2 );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,iy=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,sy=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,ry=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,oy=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
uniform vec3 lightProbe[ 9 ];
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
	#if defined ( PHYSICALLY_CORRECT_LIGHTS )
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#else
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#endif
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
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight light ) {
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
	void getPointLightInfo( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometry.position;
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
	void getSpotLightInfo( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometry.position;
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
#endif`,ay=`#if defined( USE_ENVMAP )
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
#endif`,ly=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,cy=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,uy=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,hy=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,fy=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULARINTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vUv ).a;
		#endif
		#ifdef USE_SPECULARCOLORMAP
			specularColorFactor *= texture2D( specularColorMap, vUv ).rgb;
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
		material.clearcoat *= texture2D( clearcoatMap, vUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEENCOLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEENROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vUv ).a;
	#endif
#endif`,dy=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
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
};
vec3 clearcoatSpecular = vec3( 0.0 );
vec3 sheenSpecular = vec3( 0.0 );
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
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
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
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometry.normal;
		vec3 viewDir = geometry.viewDir;
		vec3 position = geometry.position;
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
void RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometry.clearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecular += ccIrradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.clearcoatNormal, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * BRDF_Sheen( directLight.direction, geometry.viewDir, geometry.normal, material.sheenColor, material.sheenRoughness );
	#endif
	#ifdef USE_IRIDESCENCE
		reflectedLight.directSpecular += irradiance * BRDF_GGX_Iridescence( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness );
	#else
		reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.roughness );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecular += clearcoatRadiance * EnvironmentBRDF( geometry.clearcoatNormal, geometry.viewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * material.sheenColor * IBLSheenBRDF( geometry.normal, geometry.viewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
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
}`,py=`
GeometricContext geometry;
geometry.position = - vViewPosition;
geometry.normal = normal;
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
#ifdef USE_CLEARCOAT
	geometry.clearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometry.viewDir ) );
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
		getPointLightInfo( pointLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
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
		getSpotLightInfo( spotLight, geometry, directLight );
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
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
		getDirectionalLightInfo( directionalLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	irradiance += getLightProbeIrradiance( lightProbe, geometry.normal );
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,my=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vUv2 );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometry.normal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	radiance += getIBLRadiance( geometry.viewDir, geometry.normal, material.roughness );
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometry.viewDir, geometry.clearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,gy=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,_y=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,xy=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,vy=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,yy=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,My=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,by=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,wy=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Sy=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	uniform mat3 uvTransform;
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Ty=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Ey=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Ay=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Cy=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,Py=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,Ly=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,Ry=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	#ifdef USE_TANGENT
		vec3 tangent = normalize( vTangent );
		vec3 bitangent = normalize( vBitangent );
		#ifdef DOUBLE_SIDED
			tangent = tangent * faceDirection;
			bitangent = bitangent * faceDirection;
		#endif
		#if defined( TANGENTSPACE_NORMALMAP ) || defined( USE_CLEARCOAT_NORMALMAP )
			mat3 vTBN = mat3( tangent, bitangent, normal );
		#endif
	#endif
#endif
vec3 geometryNormal = normal;`,Dy=`#ifdef OBJECTSPACE_NORMALMAP
	normal = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( TANGENTSPACE_NORMALMAP )
	vec3 mapN = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	#ifdef USE_TANGENT
		normal = normalize( vTBN * mapN );
	#else
		normal = perturbNormal2Arb( - vViewPosition, normal, mapN, faceDirection );
	#endif
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Iy=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Fy=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Oy=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,zy=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef OBJECTSPACE_NORMALMAP
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( TANGENTSPACE_NORMALMAP ) || defined ( USE_CLEARCOAT_NORMALMAP ) )
	vec3 perturbNormal2Arb( vec3 eye_pos, vec3 surf_norm, vec3 mapN, float faceDirection ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( vUv.st );
		vec2 st1 = dFdy( vUv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : faceDirection * inversesqrt( det );
		return normalize( T * ( mapN.x * scale ) + B * ( mapN.y * scale ) + N * mapN.z );
	}
#endif`,Ny=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,Uy=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	#ifdef USE_TANGENT
		clearcoatNormal = normalize( vTBN * clearcoatMapN );
	#else
		clearcoatNormal = perturbNormal2Arb( - vViewPosition, clearcoatNormal, clearcoatMapN, faceDirection );
	#endif
#endif`,ky=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif`,By=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Vy=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha + 0.1;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Hy=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float linearClipZ, const in float near, const in float far ) {
	return linearClipZ * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float invClipZ, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * invClipZ - far );
}`,Gy=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Wy=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Xy=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,jy=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,qy=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Yy=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Zy=`#if NUM_SPOT_LIGHT_COORDS > 0
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
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
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
		return shadow;
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
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
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
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,$y=`#if NUM_SPOT_LIGHT_COORDS > 0
  uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
  varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
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
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Ky=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Jy=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Qy=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,eM=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	uniform int boneTextureSize;
	mat4 getBoneMatrix( const in float i ) {
		float j = i * 4.0;
		float x = mod( j, float( boneTextureSize ) );
		float y = floor( j / float( boneTextureSize ) );
		float dx = 1.0 / float( boneTextureSize );
		float dy = 1.0 / float( boneTextureSize );
		y = dy * ( y + 0.5 );
		vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );
		vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );
		vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );
		vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );
		mat4 bone = mat4( v1, v2, v3, v4 );
		return bone;
	}
#endif`,tM=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,nM=`#ifdef USE_SKINNING
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
#endif`,iM=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,sM=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,rM=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,oM=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return toneMappingExposure * color;
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,aM=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmission = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmission.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmission.rgb, material.transmission );
#endif`,lM=`#ifdef USE_TRANSMISSION
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
		float framebufferLod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		#ifdef texture2DLodEXT
			return texture2DLodEXT( transmissionSamplerMap, fragCoord.xy, framebufferLod );
		#else
			return texture2D( transmissionSamplerMap, fragCoord.xy, framebufferLod );
		#endif
	}
	vec3 applyVolumeAttenuation( const in vec3 radiance, const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return radiance;
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance * radiance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 attenuatedColor = applyVolumeAttenuation( transmittedLight.rgb, length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		return vec4( ( 1.0 - F ) * attenuatedColor * diffuseColor, transmittedLight.a );
	}
#endif`,cM=`#if ( defined( USE_UV ) && ! defined( UVS_VERTEX_ONLY ) )
	varying vec2 vUv;
#endif`,uM=`#ifdef USE_UV
	#ifdef UVS_VERTEX_ONLY
		vec2 vUv;
	#else
		varying vec2 vUv;
	#endif
	uniform mat3 uvTransform;
#endif`,hM=`#ifdef USE_UV
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
#endif`,fM=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	varying vec2 vUv2;
#endif`,dM=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	attribute vec2 uv2;
	varying vec2 vUv2;
	uniform mat3 uv2Transform;
#endif`,pM=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	vUv2 = ( uv2Transform * vec3( uv2, 1 ) ).xy;
#endif`,mM=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const gM=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,_M=`uniform sampler2D t2D;
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
	#include <encodings_fragment>
}`,xM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,vM=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,yM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,MM=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,bM=`#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
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
}`,wM=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,SM=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
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
}`,TM=`#define DISTANCE
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
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,EM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,AM=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,CM=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,PM=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,LM=`#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
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
}`,RM=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vUv2 );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,DM=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
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
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
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
}`,IM=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
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
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,FM=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
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
	#include <morphcolor_vertex>
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
}`,OM=`#define MATCAP
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
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
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
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,zM=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
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
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	vViewPosition = - mvPosition.xyz;
#endif
}`,NM=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
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
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,UM=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
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
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
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
}`,kM=`#define PHONG
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
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
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
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,BM=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
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
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
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
}`,VM=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULARINTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
	#ifdef USE_SPECULARCOLORMAP
		uniform sampler2D specularColorMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
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
	#ifdef USE_SHEENCOLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEENROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <bsdfs>
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
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
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecular;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometry.clearcoatNormal, geometry.viewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + clearcoatSpecular * material.clearcoat;
	#endif
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,HM=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
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
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
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
}`,GM=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,WM=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <color_vertex>
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
}`,XM=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,jM=`#include <common>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,qM=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,YM=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
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
}`,ZM=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,Ue={alphamap_fragment:xv,alphamap_pars_fragment:vv,alphatest_fragment:yv,alphatest_pars_fragment:Mv,aomap_fragment:bv,aomap_pars_fragment:wv,begin_vertex:Sv,beginnormal_vertex:Tv,bsdfs:Ev,iridescence_fragment:Av,bumpmap_pars_fragment:Cv,clipping_planes_fragment:Pv,clipping_planes_pars_fragment:Lv,clipping_planes_pars_vertex:Rv,clipping_planes_vertex:Dv,color_fragment:Iv,color_pars_fragment:Fv,color_pars_vertex:Ov,color_vertex:zv,common:Nv,cube_uv_reflection_fragment:Uv,defaultnormal_vertex:kv,displacementmap_pars_vertex:Bv,displacementmap_vertex:Vv,emissivemap_fragment:Hv,emissivemap_pars_fragment:Gv,encodings_fragment:Wv,encodings_pars_fragment:Xv,envmap_fragment:jv,envmap_common_pars_fragment:qv,envmap_pars_fragment:Yv,envmap_pars_vertex:Zv,envmap_physical_pars_fragment:ay,envmap_vertex:$v,fog_vertex:Kv,fog_pars_vertex:Jv,fog_fragment:Qv,fog_pars_fragment:ey,gradientmap_pars_fragment:ty,lightmap_fragment:ny,lightmap_pars_fragment:iy,lights_lambert_fragment:sy,lights_lambert_pars_fragment:ry,lights_pars_begin:oy,lights_toon_fragment:ly,lights_toon_pars_fragment:cy,lights_phong_fragment:uy,lights_phong_pars_fragment:hy,lights_physical_fragment:fy,lights_physical_pars_fragment:dy,lights_fragment_begin:py,lights_fragment_maps:my,lights_fragment_end:gy,logdepthbuf_fragment:_y,logdepthbuf_pars_fragment:xy,logdepthbuf_pars_vertex:vy,logdepthbuf_vertex:yy,map_fragment:My,map_pars_fragment:by,map_particle_fragment:wy,map_particle_pars_fragment:Sy,metalnessmap_fragment:Ty,metalnessmap_pars_fragment:Ey,morphcolor_vertex:Ay,morphnormal_vertex:Cy,morphtarget_pars_vertex:Py,morphtarget_vertex:Ly,normal_fragment_begin:Ry,normal_fragment_maps:Dy,normal_pars_fragment:Iy,normal_pars_vertex:Fy,normal_vertex:Oy,normalmap_pars_fragment:zy,clearcoat_normal_fragment_begin:Ny,clearcoat_normal_fragment_maps:Uy,clearcoat_pars_fragment:ky,iridescence_pars_fragment:By,output_fragment:Vy,packing:Hy,premultiplied_alpha_fragment:Gy,project_vertex:Wy,dithering_fragment:Xy,dithering_pars_fragment:jy,roughnessmap_fragment:qy,roughnessmap_pars_fragment:Yy,shadowmap_pars_fragment:Zy,shadowmap_pars_vertex:$y,shadowmap_vertex:Ky,shadowmask_pars_fragment:Jy,skinbase_vertex:Qy,skinning_pars_vertex:eM,skinning_vertex:tM,skinnormal_vertex:nM,specularmap_fragment:iM,specularmap_pars_fragment:sM,tonemapping_fragment:rM,tonemapping_pars_fragment:oM,transmission_fragment:aM,transmission_pars_fragment:lM,uv_pars_fragment:cM,uv_pars_vertex:uM,uv_vertex:hM,uv2_pars_fragment:fM,uv2_pars_vertex:dM,uv2_vertex:pM,worldpos_vertex:mM,background_vert:gM,background_frag:_M,backgroundCube_vert:xM,backgroundCube_frag:vM,cube_vert:yM,cube_frag:MM,depth_vert:bM,depth_frag:wM,distanceRGBA_vert:SM,distanceRGBA_frag:TM,equirect_vert:EM,equirect_frag:AM,linedashed_vert:CM,linedashed_frag:PM,meshbasic_vert:LM,meshbasic_frag:RM,meshlambert_vert:DM,meshlambert_frag:IM,meshmatcap_vert:FM,meshmatcap_frag:OM,meshnormal_vert:zM,meshnormal_frag:NM,meshphong_vert:UM,meshphong_frag:kM,meshphysical_vert:BM,meshphysical_frag:VM,meshtoon_vert:HM,meshtoon_frag:GM,points_vert:WM,points_frag:XM,shadow_vert:jM,shadow_frag:qM,sprite_vert:YM,sprite_frag:ZM},Se={common:{diffuse:{value:new Pe(16777215)},opacity:{value:1},map:{value:null},uvTransform:{value:new qt},uv2Transform:{value:new qt},alphaMap:{value:null},alphaTest:{value:0}},specularmap:{specularMap:{value:null}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1}},emissivemap:{emissiveMap:{value:null}},bumpmap:{bumpMap:{value:null},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalScale:{value:new xe(1,1)}},displacementmap:{displacementMap:{value:null},displacementScale:{value:1},displacementBias:{value:0}},roughnessmap:{roughnessMap:{value:null}},metalnessmap:{metalnessMap:{value:null}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Pe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Pe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new qt}},sprite:{diffuse:{value:new Pe(16777215)},opacity:{value:1},center:{value:new xe(.5,.5)},rotation:{value:0},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new qt}}},Cn={basic:{uniforms:Ut([Se.common,Se.specularmap,Se.envmap,Se.aomap,Se.lightmap,Se.fog]),vertexShader:Ue.meshbasic_vert,fragmentShader:Ue.meshbasic_frag},lambert:{uniforms:Ut([Se.common,Se.specularmap,Se.envmap,Se.aomap,Se.lightmap,Se.emissivemap,Se.bumpmap,Se.normalmap,Se.displacementmap,Se.fog,Se.lights,{emissive:{value:new Pe(0)}}]),vertexShader:Ue.meshlambert_vert,fragmentShader:Ue.meshlambert_frag},phong:{uniforms:Ut([Se.common,Se.specularmap,Se.envmap,Se.aomap,Se.lightmap,Se.emissivemap,Se.bumpmap,Se.normalmap,Se.displacementmap,Se.fog,Se.lights,{emissive:{value:new Pe(0)},specular:{value:new Pe(1118481)},shininess:{value:30}}]),vertexShader:Ue.meshphong_vert,fragmentShader:Ue.meshphong_frag},standard:{uniforms:Ut([Se.common,Se.envmap,Se.aomap,Se.lightmap,Se.emissivemap,Se.bumpmap,Se.normalmap,Se.displacementmap,Se.roughnessmap,Se.metalnessmap,Se.fog,Se.lights,{emissive:{value:new Pe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ue.meshphysical_vert,fragmentShader:Ue.meshphysical_frag},toon:{uniforms:Ut([Se.common,Se.aomap,Se.lightmap,Se.emissivemap,Se.bumpmap,Se.normalmap,Se.displacementmap,Se.gradientmap,Se.fog,Se.lights,{emissive:{value:new Pe(0)}}]),vertexShader:Ue.meshtoon_vert,fragmentShader:Ue.meshtoon_frag},matcap:{uniforms:Ut([Se.common,Se.bumpmap,Se.normalmap,Se.displacementmap,Se.fog,{matcap:{value:null}}]),vertexShader:Ue.meshmatcap_vert,fragmentShader:Ue.meshmatcap_frag},points:{uniforms:Ut([Se.points,Se.fog]),vertexShader:Ue.points_vert,fragmentShader:Ue.points_frag},dashed:{uniforms:Ut([Se.common,Se.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ue.linedashed_vert,fragmentShader:Ue.linedashed_frag},depth:{uniforms:Ut([Se.common,Se.displacementmap]),vertexShader:Ue.depth_vert,fragmentShader:Ue.depth_frag},normal:{uniforms:Ut([Se.common,Se.bumpmap,Se.normalmap,Se.displacementmap,{opacity:{value:1}}]),vertexShader:Ue.meshnormal_vert,fragmentShader:Ue.meshnormal_frag},sprite:{uniforms:Ut([Se.sprite,Se.fog]),vertexShader:Ue.sprite_vert,fragmentShader:Ue.sprite_frag},background:{uniforms:{uvTransform:{value:new qt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ue.background_vert,fragmentShader:Ue.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Ue.backgroundCube_vert,fragmentShader:Ue.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ue.cube_vert,fragmentShader:Ue.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ue.equirect_vert,fragmentShader:Ue.equirect_frag},distanceRGBA:{uniforms:Ut([Se.common,Se.displacementmap,{referencePosition:{value:new D},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ue.distanceRGBA_vert,fragmentShader:Ue.distanceRGBA_frag},shadow:{uniforms:Ut([Se.lights,Se.fog,{color:{value:new Pe(0)},opacity:{value:1}}]),vertexShader:Ue.shadow_vert,fragmentShader:Ue.shadow_frag}};Cn.physical={uniforms:Ut([Cn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatNormalScale:{value:new xe(1,1)},clearcoatNormalMap:{value:null},iridescence:{value:0},iridescenceMap:{value:null},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},sheen:{value:0},sheenColor:{value:new Pe(0)},sheenColorMap:{value:null},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},transmission:{value:0},transmissionMap:{value:null},transmissionSamplerSize:{value:new xe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},attenuationDistance:{value:0},attenuationColor:{value:new Pe(0)},specularIntensity:{value:1},specularIntensityMap:{value:null},specularColor:{value:new Pe(1,1,1)},specularColorMap:{value:null}}]),vertexShader:Ue.meshphysical_vert,fragmentShader:Ue.meshphysical_frag};const lo={r:0,b:0,g:0};function $M(i,e,t,n,s,r,o){const a=new Pe(0);let l=r===!0?0:1,c,u,h=null,f=0,d=null;function g(m,_){let M=!1,x=_.isScene===!0?_.background:null;x&&x.isTexture&&(x=(_.backgroundBlurriness>0?t:e).get(x));const w=i.xr,S=w.getSession&&w.getSession();S&&S.environmentBlendMode==="additive"&&(x=null),x===null?p(a,l):x&&x.isColor&&(p(x,1),M=!0),(i.autoClear||M)&&i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil),x&&(x.isCubeTexture||x.mapping===ta)?(u===void 0&&(u=new et(new zr(1,1,1),new Ft({name:"BackgroundCubeMaterial",uniforms:Os(Cn.backgroundCube.uniforms),vertexShader:Cn.backgroundCube.vertexShader,fragmentShader:Cn.backgroundCube.fragmentShader,side:Ht,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(P,I,v){this.matrixWorld.copyPosition(v.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(u)),u.material.uniforms.envMap.value=x,u.material.uniforms.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=_.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,u.material.toneMapped=x.encoding!==nt,(h!==x||f!==x.version||d!==i.toneMapping)&&(u.material.needsUpdate=!0,h=x,f=x.version,d=i.toneMapping),u.layers.enableAll(),m.unshift(u,u.geometry,u.material,0,0,null)):x&&x.isTexture&&(c===void 0&&(c=new et(new Nr(2,2),new Ft({name:"BackgroundMaterial",uniforms:Os(Cn.background.uniforms),vertexShader:Cn.background.vertexShader,fragmentShader:Cn.background.fragmentShader,side:dn,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=x,c.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,c.material.toneMapped=x.encoding!==nt,x.matrixAutoUpdate===!0&&x.updateMatrix(),c.material.uniforms.uvTransform.value.copy(x.matrix),(h!==x||f!==x.version||d!==i.toneMapping)&&(c.material.needsUpdate=!0,h=x,f=x.version,d=i.toneMapping),c.layers.enableAll(),m.unshift(c,c.geometry,c.material,0,0,null))}function p(m,_){m.getRGB(lo,pp(i)),n.buffers.color.setClear(lo.r,lo.g,lo.b,_,o)}return{getClearColor:function(){return a},setClearColor:function(m,_=1){a.set(m),l=_,p(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(m){l=m,p(a,l)},render:g}}function KM(i,e,t,n){const s=i.getParameter(34921),r=n.isWebGL2?null:e.get("OES_vertex_array_object"),o=n.isWebGL2||r!==null,a={},l=m(null);let c=l,u=!1;function h(z,J,$,ie,Y){let fe=!1;if(o){const de=p(ie,$,J);c!==de&&(c=de,d(c.object)),fe=_(z,ie,$,Y),fe&&M(z,ie,$,Y)}else{const de=J.wireframe===!0;(c.geometry!==ie.id||c.program!==$.id||c.wireframe!==de)&&(c.geometry=ie.id,c.program=$.id,c.wireframe=de,fe=!0)}Y!==null&&t.update(Y,34963),(fe||u)&&(u=!1,v(z,J,$,ie),Y!==null&&i.bindBuffer(34963,t.get(Y).buffer))}function f(){return n.isWebGL2?i.createVertexArray():r.createVertexArrayOES()}function d(z){return n.isWebGL2?i.bindVertexArray(z):r.bindVertexArrayOES(z)}function g(z){return n.isWebGL2?i.deleteVertexArray(z):r.deleteVertexArrayOES(z)}function p(z,J,$){const ie=$.wireframe===!0;let Y=a[z.id];Y===void 0&&(Y={},a[z.id]=Y);let fe=Y[J.id];fe===void 0&&(fe={},Y[J.id]=fe);let de=fe[ie];return de===void 0&&(de=m(f()),fe[ie]=de),de}function m(z){const J=[],$=[],ie=[];for(let Y=0;Y<s;Y++)J[Y]=0,$[Y]=0,ie[Y]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:J,enabledAttributes:$,attributeDivisors:ie,object:z,attributes:{},index:null}}function _(z,J,$,ie){const Y=c.attributes,fe=J.attributes;let de=0;const ye=$.getAttributes();for(const W in ye)if(ye[W].location>=0){const ve=Y[W];let N=fe[W];if(N===void 0&&(W==="instanceMatrix"&&z.instanceMatrix&&(N=z.instanceMatrix),W==="instanceColor"&&z.instanceColor&&(N=z.instanceColor)),ve===void 0||ve.attribute!==N||N&&ve.data!==N.data)return!0;de++}return c.attributesNum!==de||c.index!==ie}function M(z,J,$,ie){const Y={},fe=J.attributes;let de=0;const ye=$.getAttributes();for(const W in ye)if(ye[W].location>=0){let ve=fe[W];ve===void 0&&(W==="instanceMatrix"&&z.instanceMatrix&&(ve=z.instanceMatrix),W==="instanceColor"&&z.instanceColor&&(ve=z.instanceColor));const N={};N.attribute=ve,ve&&ve.data&&(N.data=ve.data),Y[W]=N,de++}c.attributes=Y,c.attributesNum=de,c.index=ie}function x(){const z=c.newAttributes;for(let J=0,$=z.length;J<$;J++)z[J]=0}function w(z){S(z,0)}function S(z,J){const $=c.newAttributes,ie=c.enabledAttributes,Y=c.attributeDivisors;$[z]=1,ie[z]===0&&(i.enableVertexAttribArray(z),ie[z]=1),Y[z]!==J&&((n.isWebGL2?i:e.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](z,J),Y[z]=J)}function P(){const z=c.newAttributes,J=c.enabledAttributes;for(let $=0,ie=J.length;$<ie;$++)J[$]!==z[$]&&(i.disableVertexAttribArray($),J[$]=0)}function I(z,J,$,ie,Y,fe){n.isWebGL2===!0&&($===5124||$===5125)?i.vertexAttribIPointer(z,J,$,Y,fe):i.vertexAttribPointer(z,J,$,ie,Y,fe)}function v(z,J,$,ie){if(n.isWebGL2===!1&&(z.isInstancedMesh||ie.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;x();const Y=ie.attributes,fe=$.getAttributes(),de=J.defaultAttributeValues;for(const ye in fe){const W=fe[ye];if(W.location>=0){let oe=Y[ye];if(oe===void 0&&(ye==="instanceMatrix"&&z.instanceMatrix&&(oe=z.instanceMatrix),ye==="instanceColor"&&z.instanceColor&&(oe=z.instanceColor)),oe!==void 0){const ve=oe.normalized,N=oe.itemSize,O=t.get(oe);if(O===void 0)continue;const ee=O.buffer,ce=O.type,ge=O.bytesPerElement;if(oe.isInterleavedBufferAttribute){const pe=oe.data,Me=pe.stride,y=oe.offset;if(pe.isInstancedInterleavedBuffer){for(let T=0;T<W.locationSize;T++)S(W.location+T,pe.meshPerAttribute);z.isInstancedMesh!==!0&&ie._maxInstanceCount===void 0&&(ie._maxInstanceCount=pe.meshPerAttribute*pe.count)}else for(let T=0;T<W.locationSize;T++)w(W.location+T);i.bindBuffer(34962,ee);for(let T=0;T<W.locationSize;T++)I(W.location+T,N/W.locationSize,ce,ve,Me*ge,(y+N/W.locationSize*T)*ge)}else{if(oe.isInstancedBufferAttribute){for(let pe=0;pe<W.locationSize;pe++)S(W.location+pe,oe.meshPerAttribute);z.isInstancedMesh!==!0&&ie._maxInstanceCount===void 0&&(ie._maxInstanceCount=oe.meshPerAttribute*oe.count)}else for(let pe=0;pe<W.locationSize;pe++)w(W.location+pe);i.bindBuffer(34962,ee);for(let pe=0;pe<W.locationSize;pe++)I(W.location+pe,N/W.locationSize,ce,ve,N*ge,N/W.locationSize*pe*ge)}}else if(de!==void 0){const ve=de[ye];if(ve!==void 0)switch(ve.length){case 2:i.vertexAttrib2fv(W.location,ve);break;case 3:i.vertexAttrib3fv(W.location,ve);break;case 4:i.vertexAttrib4fv(W.location,ve);break;default:i.vertexAttrib1fv(W.location,ve)}}}}P()}function A(){Q();for(const z in a){const J=a[z];for(const $ in J){const ie=J[$];for(const Y in ie)g(ie[Y].object),delete ie[Y];delete J[$]}delete a[z]}}function R(z){if(a[z.id]===void 0)return;const J=a[z.id];for(const $ in J){const ie=J[$];for(const Y in ie)g(ie[Y].object),delete ie[Y];delete J[$]}delete a[z.id]}function j(z){for(const J in a){const $=a[J];if($[z.id]===void 0)continue;const ie=$[z.id];for(const Y in ie)g(ie[Y].object),delete ie[Y];delete $[z.id]}}function Q(){k(),u=!0,c!==l&&(c=l,d(c.object))}function k(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:h,reset:Q,resetDefaultState:k,dispose:A,releaseStatesOfGeometry:R,releaseStatesOfProgram:j,initAttributes:x,enableAttribute:w,disableUnusedAttributes:P}}function JM(i,e,t,n){const s=n.isWebGL2;let r;function o(c){r=c}function a(c,u){i.drawArrays(r,c,u),t.update(u,r,1)}function l(c,u,h){if(h===0)return;let f,d;if(s)f=i,d="drawArraysInstanced";else if(f=e.get("ANGLE_instanced_arrays"),d="drawArraysInstancedANGLE",f===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}f[d](r,c,u,h),t.update(u,r,h)}this.setMode=o,this.render=a,this.renderInstances=l}function QM(i,e,t){let n;function s(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){const I=e.get("EXT_texture_filter_anisotropic");n=i.getParameter(I.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function r(I){if(I==="highp"){if(i.getShaderPrecisionFormat(35633,36338).precision>0&&i.getShaderPrecisionFormat(35632,36338).precision>0)return"highp";I="mediump"}return I==="mediump"&&i.getShaderPrecisionFormat(35633,36337).precision>0&&i.getShaderPrecisionFormat(35632,36337).precision>0?"mediump":"lowp"}const o=typeof WebGL2RenderingContext<"u"&&i instanceof WebGL2RenderingContext;let a=t.precision!==void 0?t.precision:"highp";const l=r(a);l!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",l,"instead."),a=l);const c=o||e.has("WEBGL_draw_buffers"),u=t.logarithmicDepthBuffer===!0,h=i.getParameter(34930),f=i.getParameter(35660),d=i.getParameter(3379),g=i.getParameter(34076),p=i.getParameter(34921),m=i.getParameter(36347),_=i.getParameter(36348),M=i.getParameter(36349),x=f>0,w=o||e.has("OES_texture_float"),S=x&&w,P=o?i.getParameter(36183):0;return{isWebGL2:o,drawBuffers:c,getMaxAnisotropy:s,getMaxPrecision:r,precision:a,logarithmicDepthBuffer:u,maxTextures:h,maxVertexTextures:f,maxTextureSize:d,maxCubemapSize:g,maxAttributes:p,maxVertexUniforms:m,maxVaryings:_,maxFragmentUniforms:M,vertexTextures:x,floatFragmentTextures:w,floatVertexTextures:S,maxSamples:P}}function eb(i){const e=this;let t=null,n=0,s=!1,r=!1;const o=new Li,a=new qt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,f){const d=h.length!==0||f||n!==0||s;return s=f,n=h.length,d},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(h,f){t=u(h,f,0)},this.setState=function(h,f,d){const g=h.clippingPlanes,p=h.clipIntersection,m=h.clipShadows,_=i.get(h);if(!s||g===null||g.length===0||r&&!m)r?u(null):c();else{const M=r?0:n,x=M*4;let w=_.clippingState||null;l.value=w,w=u(g,f,x,d);for(let S=0;S!==x;++S)w[S]=t[S];_.clippingState=w,this.numIntersection=p?this.numPlanes:0,this.numPlanes+=M}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(h,f,d,g){const p=h!==null?h.length:0;let m=null;if(p!==0){if(m=l.value,g!==!0||m===null){const _=d+p*4,M=f.matrixWorldInverse;a.getNormalMatrix(M),(m===null||m.length<_)&&(m=new Float32Array(_));for(let x=0,w=d;x!==p;++x,w+=4)o.copy(h[x]).applyMatrix4(M,a),o.normal.toArray(m,w),m[w+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=p,e.numIntersection=0,m}}function tb(i){let e=new WeakMap;function t(o,a){return a===zo?o.mapping=Ds:a===zl&&(o.mapping=Is),o}function n(o){if(o&&o.isTexture&&o.isRenderTargetTexture===!1){const a=o.mapping;if(a===zo||a===zl)if(e.has(o)){const l=e.get(o).texture;return t(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new pv(l.height/2);return c.fromEquirectangularTexture(i,o),e.set(o,c),o.addEventListener("dispose",s),t(c.texture,o.mapping)}else return null}}return o}function s(o){const a=o.target;a.removeEventListener("dispose",s);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}class Tc extends wc{constructor(e=-1,t=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=n-e,o=n+e,a=s+t,l=s-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const _s=4,Ah=[.125,.215,.35,.446,.526,.582],zi=20,Qa=new Tc,Ch=new Pe;let el=null;const Ri=(1+Math.sqrt(5))/2,us=1/Ri,Ph=[new D(1,1,1),new D(-1,1,1),new D(1,1,-1),new D(-1,1,-1),new D(0,Ri,us),new D(0,Ri,-us),new D(us,0,Ri),new D(-us,0,Ri),new D(Ri,us,0),new D(-Ri,us,0)];class Lh{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,s=100){el=this._renderer.getRenderTarget(),this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,n,s,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Ih(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Dh(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(el),e.scissorTest=!1,co(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Ds||e.mapping===Is?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),el=this._renderer.getRenderTarget();const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:rn,minFilter:rn,generateMipmaps:!1,type:Sr,format:an,encoding:Wi,depthBuffer:!1},s=Rh(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Rh(e,t,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=nb(r)),this._blurMaterial=ib(r,e,t)}return s}_compileMaterial(e){const t=new et(this._lodPlanes[0],e);this._renderer.compile(t,Qa)}_sceneToCubeUV(e,t,n,s){const a=new kt(90,1,t,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,h=u.autoClear,f=u.toneMapping;u.getClearColor(Ch),u.toneMapping=Zn,u.autoClear=!1;const d=new vi({name:"PMREM.Background",side:Ht,depthWrite:!1,depthTest:!1}),g=new et(new zr,d);let p=!1;const m=e.background;m?m.isColor&&(d.color.copy(m),e.background=null,p=!0):(d.color.copy(Ch),p=!0);for(let _=0;_<6;_++){const M=_%3;M===0?(a.up.set(0,l[_],0),a.lookAt(c[_],0,0)):M===1?(a.up.set(0,0,l[_]),a.lookAt(0,c[_],0)):(a.up.set(0,l[_],0),a.lookAt(0,0,c[_]));const x=this._cubeSize;co(s,M*x,_>2?x:0,x,x),u.setRenderTarget(s),p&&u.render(g,a),u.render(e,a)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=f,u.autoClear=h,e.background=m}_textureToCubeUV(e,t){const n=this._renderer,s=e.mapping===Ds||e.mapping===Is;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Ih()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Dh());const r=s?this._cubemapMaterial:this._equirectMaterial,o=new et(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=e;const l=this._cubeSize;co(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(o,Qa)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;for(let s=1;s<this._lodPlanes.length;s++){const r=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),o=Ph[(s-1)%Ph.length];this._blur(e,s-1,s,r,o)}t.autoClear=n}_blur(e,t,n,s,r){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,s,"latitudinal",r),this._halfBlur(o,e,n,n,s,"longitudinal",r)}_halfBlur(e,t,n,s,r,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,h=new et(this._lodPlanes[s],c),f=c.uniforms,d=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*d):2*Math.PI/(2*zi-1),p=r/g,m=isFinite(r)?1+Math.floor(u*p):zi;m>zi&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${zi}`);const _=[];let M=0;for(let I=0;I<zi;++I){const v=I/p,A=Math.exp(-v*v/2);_.push(A),I===0?M+=A:I<m&&(M+=2*A)}for(let I=0;I<_.length;I++)_[I]=_[I]/M;f.envMap.value=e.texture,f.samples.value=m,f.weights.value=_,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);const{_lodMax:x}=this;f.dTheta.value=g,f.mipInt.value=x-n;const w=this._sizeLods[s],S=3*w*(s>x-_s?s-x+_s:0),P=4*(this._cubeSize-w);co(t,S,P,3*w,2*w),l.setRenderTarget(t),l.render(h,Qa)}}function nb(i){const e=[],t=[],n=[];let s=i;const r=i-_s+1+Ah.length;for(let o=0;o<r;o++){const a=Math.pow(2,s);t.push(a);let l=1/a;o>i-_s?l=Ah[o-i+_s-1]:o===0&&(l=0),n.push(l);const c=1/(a-2),u=-c,h=1+c,f=[u,u,h,u,h,h,u,u,h,h,u,h],d=6,g=6,p=3,m=2,_=1,M=new Float32Array(p*g*d),x=new Float32Array(m*g*d),w=new Float32Array(_*g*d);for(let P=0;P<d;P++){const I=P%3*2/3-1,v=P>2?0:-1,A=[I,v,0,I+2/3,v,0,I+2/3,v+1,0,I,v,0,I+2/3,v+1,0,I,v+1,0];M.set(A,p*g*P),x.set(f,m*g*P);const R=[P,P,P,P,P,P];w.set(R,_*g*P)}const S=new ct;S.setAttribute("position",new Vt(M,p)),S.setAttribute("uv",new Vt(x,m)),S.setAttribute("faceIndex",new Vt(w,_)),e.push(S),s>_s&&s--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function Rh(i,e,t){const n=new Xi(i,e,t);return n.texture.mapping=ta,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function co(i,e,t,n,s){i.viewport.set(e,t,n,s),i.scissor.set(e,t,n,s)}function ib(i,e,t){const n=new Float32Array(zi),s=new D(0,1,0);return new Ft({name:"SphericalGaussianBlur",defines:{n:zi,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Ec(),fragmentShader:`

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
		`,blending:mi,depthTest:!1,depthWrite:!1})}function Dh(){return new Ft({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Ec(),fragmentShader:`

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
		`,blending:mi,depthTest:!1,depthWrite:!1})}function Ih(){return new Ft({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Ec(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:mi,depthTest:!1,depthWrite:!1})}function Ec(){return`

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
	`}function sb(i){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){const l=a.mapping,c=l===zo||l===zl,u=l===Ds||l===Is;if(c||u)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let h=e.get(a);return t===null&&(t=new Lh(i)),h=c?t.fromEquirectangular(a,h):t.fromCubemap(a,h),e.set(a,h),h.texture}else{if(e.has(a))return e.get(a).texture;{const h=a.image;if(c&&h&&h.height>0||u&&h&&s(h)){t===null&&(t=new Lh(i));const f=c?t.fromEquirectangular(a):t.fromCubemap(a);return e.set(a,f),a.addEventListener("dispose",r),f.texture}else return null}}}return a}function s(a){let l=0;const c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function r(a){const l=a.target;l.removeEventListener("dispose",r);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function rb(i){const e={};function t(n){if(e[n]!==void 0)return e[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(n){n.isWebGL2?t("EXT_color_buffer_float"):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(n){const s=t(n);return s===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function ob(i,e,t,n){const s={},r=new WeakMap;function o(h){const f=h.target;f.index!==null&&e.remove(f.index);for(const g in f.attributes)e.remove(f.attributes[g]);f.removeEventListener("dispose",o),delete s[f.id];const d=r.get(f);d&&(e.remove(d),r.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function a(h,f){return s[f.id]===!0||(f.addEventListener("dispose",o),s[f.id]=!0,t.memory.geometries++),f}function l(h){const f=h.attributes;for(const g in f)e.update(f[g],34962);const d=h.morphAttributes;for(const g in d){const p=d[g];for(let m=0,_=p.length;m<_;m++)e.update(p[m],34962)}}function c(h){const f=[],d=h.index,g=h.attributes.position;let p=0;if(d!==null){const M=d.array;p=d.version;for(let x=0,w=M.length;x<w;x+=3){const S=M[x+0],P=M[x+1],I=M[x+2];f.push(S,P,P,I,I,S)}}else{const M=g.array;p=g.version;for(let x=0,w=M.length/3-1;x<w;x+=3){const S=x+0,P=x+1,I=x+2;f.push(S,P,P,I,I,S)}}const m=new(lp(f)?dp:bc)(f,1);m.version=p;const _=r.get(h);_&&e.remove(_),r.set(h,m)}function u(h){const f=r.get(h);if(f){const d=h.index;d!==null&&f.version<d.version&&c(h)}else c(h);return r.get(h)}return{get:a,update:l,getWireframeAttribute:u}}function ab(i,e,t,n){const s=n.isWebGL2;let r;function o(f){r=f}let a,l;function c(f){a=f.type,l=f.bytesPerElement}function u(f,d){i.drawElements(r,d,a,f*l),t.update(d,r,1)}function h(f,d,g){if(g===0)return;let p,m;if(s)p=i,m="drawElementsInstanced";else if(p=e.get("ANGLE_instanced_arrays"),m="drawElementsInstancedANGLE",p===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}p[m](r,d,a,f*l,g),t.update(d,r,g)}this.setMode=o,this.setIndex=c,this.render=u,this.renderInstances=h}function lb(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(t.calls++,o){case 4:t.triangles+=a*(r/3);break;case 1:t.lines+=a*(r/2);break;case 3:t.lines+=a*(r-1);break;case 2:t.lines+=a*r;break;case 0:t.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){t.frame++,t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function cb(i,e){return i[0]-e[0]}function ub(i,e){return Math.abs(e[1])-Math.abs(i[1])}function hb(i,e,t){const n={},s=new Float32Array(8),r=new WeakMap,o=new Qe,a=[];for(let c=0;c<8;c++)a[c]=[c,0];function l(c,u,h,f){const d=c.morphTargetInfluences;if(e.isWebGL2===!0){const p=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,m=p!==void 0?p.length:0;let _=r.get(u);if(_===void 0||_.count!==m){let $=function(){z.dispose(),r.delete(u),u.removeEventListener("dispose",$)};var g=$;_!==void 0&&_.texture.dispose();const w=u.morphAttributes.position!==void 0,S=u.morphAttributes.normal!==void 0,P=u.morphAttributes.color!==void 0,I=u.morphAttributes.position||[],v=u.morphAttributes.normal||[],A=u.morphAttributes.color||[];let R=0;w===!0&&(R=1),S===!0&&(R=2),P===!0&&(R=3);let j=u.attributes.position.count*R,Q=1;j>e.maxTextureSize&&(Q=Math.ceil(j/e.maxTextureSize),j=e.maxTextureSize);const k=new Float32Array(j*Q*4*m),z=new fp(k,j,Q,m);z.type=hi,z.needsUpdate=!0;const J=R*4;for(let ie=0;ie<m;ie++){const Y=I[ie],fe=v[ie],de=A[ie],ye=j*Q*4*ie;for(let W=0;W<Y.count;W++){const oe=W*J;w===!0&&(o.fromBufferAttribute(Y,W),k[ye+oe+0]=o.x,k[ye+oe+1]=o.y,k[ye+oe+2]=o.z,k[ye+oe+3]=0),S===!0&&(o.fromBufferAttribute(fe,W),k[ye+oe+4]=o.x,k[ye+oe+5]=o.y,k[ye+oe+6]=o.z,k[ye+oe+7]=0),P===!0&&(o.fromBufferAttribute(de,W),k[ye+oe+8]=o.x,k[ye+oe+9]=o.y,k[ye+oe+10]=o.z,k[ye+oe+11]=de.itemSize===4?o.w:1)}}_={count:m,texture:z,size:new xe(j,Q)},r.set(u,_),u.addEventListener("dispose",$)}let M=0;for(let w=0;w<d.length;w++)M+=d[w];const x=u.morphTargetsRelative?1:1-M;f.getUniforms().setValue(i,"morphTargetBaseInfluence",x),f.getUniforms().setValue(i,"morphTargetInfluences",d),f.getUniforms().setValue(i,"morphTargetsTexture",_.texture,t),f.getUniforms().setValue(i,"morphTargetsTextureSize",_.size)}else{const p=d===void 0?0:d.length;let m=n[u.id];if(m===void 0||m.length!==p){m=[];for(let S=0;S<p;S++)m[S]=[S,0];n[u.id]=m}for(let S=0;S<p;S++){const P=m[S];P[0]=S,P[1]=d[S]}m.sort(ub);for(let S=0;S<8;S++)S<p&&m[S][1]?(a[S][0]=m[S][0],a[S][1]=m[S][1]):(a[S][0]=Number.MAX_SAFE_INTEGER,a[S][1]=0);a.sort(cb);const _=u.morphAttributes.position,M=u.morphAttributes.normal;let x=0;for(let S=0;S<8;S++){const P=a[S],I=P[0],v=P[1];I!==Number.MAX_SAFE_INTEGER&&v?(_&&u.getAttribute("morphTarget"+S)!==_[I]&&u.setAttribute("morphTarget"+S,_[I]),M&&u.getAttribute("morphNormal"+S)!==M[I]&&u.setAttribute("morphNormal"+S,M[I]),s[S]=v,x+=v):(_&&u.hasAttribute("morphTarget"+S)===!0&&u.deleteAttribute("morphTarget"+S),M&&u.hasAttribute("morphNormal"+S)===!0&&u.deleteAttribute("morphNormal"+S),s[S]=0)}const w=u.morphTargetsRelative?1:1-x;f.getUniforms().setValue(i,"morphTargetBaseInfluence",w),f.getUniforms().setValue(i,"morphTargetInfluences",s)}}return{update:l}}function fb(i,e,t,n){let s=new WeakMap;function r(l){const c=n.render.frame,u=l.geometry,h=e.get(l,u);return s.get(h)!==c&&(e.update(h),s.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),t.update(l.instanceMatrix,34962),l.instanceColor!==null&&t.update(l.instanceColor,34962)),h}function o(){s=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:o}}const _p=new Ct,xp=new fp,vp=new Jx,yp=new mp,Fh=[],Oh=[],zh=new Float32Array(16),Nh=new Float32Array(9),Uh=new Float32Array(4);function ks(i,e,t){const n=i[0];if(n<=0||n>0)return i;const s=e*t;let r=Fh[s];if(r===void 0&&(r=new Float32Array(s),Fh[s]=r),e!==0){n.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,i[o].toArray(r,a)}return r}function Mt(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function bt(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function sa(i,e){let t=Oh[e];t===void 0&&(t=new Int32Array(e),Oh[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function db(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function pb(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Mt(t,e))return;i.uniform2fv(this.addr,e),bt(t,e)}}function mb(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Mt(t,e))return;i.uniform3fv(this.addr,e),bt(t,e)}}function gb(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Mt(t,e))return;i.uniform4fv(this.addr,e),bt(t,e)}}function _b(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Mt(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),bt(t,e)}else{if(Mt(t,n))return;Uh.set(n),i.uniformMatrix2fv(this.addr,!1,Uh),bt(t,n)}}function xb(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Mt(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),bt(t,e)}else{if(Mt(t,n))return;Nh.set(n),i.uniformMatrix3fv(this.addr,!1,Nh),bt(t,n)}}function vb(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Mt(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),bt(t,e)}else{if(Mt(t,n))return;zh.set(n),i.uniformMatrix4fv(this.addr,!1,zh),bt(t,n)}}function yb(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function Mb(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Mt(t,e))return;i.uniform2iv(this.addr,e),bt(t,e)}}function bb(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Mt(t,e))return;i.uniform3iv(this.addr,e),bt(t,e)}}function wb(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Mt(t,e))return;i.uniform4iv(this.addr,e),bt(t,e)}}function Sb(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function Tb(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Mt(t,e))return;i.uniform2uiv(this.addr,e),bt(t,e)}}function Eb(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Mt(t,e))return;i.uniform3uiv(this.addr,e),bt(t,e)}}function Ab(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Mt(t,e))return;i.uniform4uiv(this.addr,e),bt(t,e)}}function Cb(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2D(e||_p,s)}function Pb(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||vp,s)}function Lb(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTextureCube(e||yp,s)}function Rb(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||xp,s)}function Db(i){switch(i){case 5126:return db;case 35664:return pb;case 35665:return mb;case 35666:return gb;case 35674:return _b;case 35675:return xb;case 35676:return vb;case 5124:case 35670:return yb;case 35667:case 35671:return Mb;case 35668:case 35672:return bb;case 35669:case 35673:return wb;case 5125:return Sb;case 36294:return Tb;case 36295:return Eb;case 36296:return Ab;case 35678:case 36198:case 36298:case 36306:case 35682:return Cb;case 35679:case 36299:case 36307:return Pb;case 35680:case 36300:case 36308:case 36293:return Lb;case 36289:case 36303:case 36311:case 36292:return Rb}}function Ib(i,e){i.uniform1fv(this.addr,e)}function Fb(i,e){const t=ks(e,this.size,2);i.uniform2fv(this.addr,t)}function Ob(i,e){const t=ks(e,this.size,3);i.uniform3fv(this.addr,t)}function zb(i,e){const t=ks(e,this.size,4);i.uniform4fv(this.addr,t)}function Nb(i,e){const t=ks(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function Ub(i,e){const t=ks(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function kb(i,e){const t=ks(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function Bb(i,e){i.uniform1iv(this.addr,e)}function Vb(i,e){i.uniform2iv(this.addr,e)}function Hb(i,e){i.uniform3iv(this.addr,e)}function Gb(i,e){i.uniform4iv(this.addr,e)}function Wb(i,e){i.uniform1uiv(this.addr,e)}function Xb(i,e){i.uniform2uiv(this.addr,e)}function jb(i,e){i.uniform3uiv(this.addr,e)}function qb(i,e){i.uniform4uiv(this.addr,e)}function Yb(i,e,t){const n=this.cache,s=e.length,r=sa(t,s);Mt(n,r)||(i.uniform1iv(this.addr,r),bt(n,r));for(let o=0;o!==s;++o)t.setTexture2D(e[o]||_p,r[o])}function Zb(i,e,t){const n=this.cache,s=e.length,r=sa(t,s);Mt(n,r)||(i.uniform1iv(this.addr,r),bt(n,r));for(let o=0;o!==s;++o)t.setTexture3D(e[o]||vp,r[o])}function $b(i,e,t){const n=this.cache,s=e.length,r=sa(t,s);Mt(n,r)||(i.uniform1iv(this.addr,r),bt(n,r));for(let o=0;o!==s;++o)t.setTextureCube(e[o]||yp,r[o])}function Kb(i,e,t){const n=this.cache,s=e.length,r=sa(t,s);Mt(n,r)||(i.uniform1iv(this.addr,r),bt(n,r));for(let o=0;o!==s;++o)t.setTexture2DArray(e[o]||xp,r[o])}function Jb(i){switch(i){case 5126:return Ib;case 35664:return Fb;case 35665:return Ob;case 35666:return zb;case 35674:return Nb;case 35675:return Ub;case 35676:return kb;case 5124:case 35670:return Bb;case 35667:case 35671:return Vb;case 35668:case 35672:return Hb;case 35669:case 35673:return Gb;case 5125:return Wb;case 36294:return Xb;case 36295:return jb;case 36296:return qb;case 35678:case 36198:case 36298:case 36306:case 35682:return Yb;case 35679:case 36299:case 36307:return Zb;case 35680:case 36300:case 36308:case 36293:return $b;case 36289:case 36303:case 36311:case 36292:return Kb}}class Qb{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.setValue=Db(t.type)}}class ew{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.size=t.size,this.setValue=Jb(t.type)}}class tw{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const s=this.seq;for(let r=0,o=s.length;r!==o;++r){const a=s[r];a.setValue(e,t[a.id],n)}}}const tl=/(\w+)(\])?(\[|\.)?/g;function kh(i,e){i.seq.push(e),i.map[e.id]=e}function nw(i,e,t){const n=i.name,s=n.length;for(tl.lastIndex=0;;){const r=tl.exec(n),o=tl.lastIndex;let a=r[1];const l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){kh(t,c===void 0?new Qb(a,i,e):new ew(a,i,e));break}else{let h=t.map[a];h===void 0&&(h=new tw(a),kh(t,h)),t=h}}}class Po{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,35718);for(let s=0;s<n;++s){const r=e.getActiveUniform(t,s),o=e.getUniformLocation(t,r.name);nw(r,o,this)}}setValue(e,t,n,s){const r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){const s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,o=t.length;r!==o;++r){const a=t[r],l=n[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,s)}}static seqWithValue(e,t){const n=[];for(let s=0,r=e.length;s!==r;++s){const o=e[s];o.id in t&&n.push(o)}return n}}function Bh(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}let iw=0;function sw(i,e){const t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=s;o<r;o++){const a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}function rw(i){switch(i){case Wi:return["Linear","( value )"];case nt:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported encoding:",i),["Linear","( value )"]}}function Vh(i,e,t){const n=i.getShaderParameter(e,35713),s=i.getShaderInfoLog(e).trim();if(n&&s==="")return"";const r=/ERROR: 0:(\d+)/.exec(s);if(r){const o=parseInt(r[1]);return t.toUpperCase()+`

`+s+`

`+sw(i.getShaderSource(e),o)}else return s}function ow(i,e){const t=rw(e);return"vec4 "+i+"( vec4 value ) { return LinearTo"+t[0]+t[1]+"; }"}function aw(i,e){let t;switch(e){case fx:t="Linear";break;case dx:t="Reinhard";break;case px:t="OptimizedCineon";break;case mx:t="ACESFilmic";break;case gx:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function lw(i){return[i.extensionDerivatives||i.envMapCubeUVHeight||i.bumpMap||i.tangentSpaceNormalMap||i.clearcoatNormalMap||i.flatShading||i.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(i.extensionFragDepth||i.logarithmicDepthBuffer)&&i.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",i.extensionDrawBuffers&&i.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(i.extensionShaderTextureLOD||i.envMap||i.transmission)&&i.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(sr).join(`
`)}function cw(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function uw(i,e){const t={},n=i.getProgramParameter(e,35721);for(let s=0;s<n;s++){const r=i.getActiveAttrib(e,s),o=r.name;let a=1;r.type===35674&&(a=2),r.type===35675&&(a=3),r.type===35676&&(a=4),t[o]={type:r.type,location:i.getAttribLocation(e,o),locationSize:a}}return t}function sr(i){return i!==""}function Hh(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Gh(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const hw=/^[ \t]*#include +<([\w\d./]+)>/gm;function Bl(i){return i.replace(hw,fw)}function fw(i,e){const t=Ue[e];if(t===void 0)throw new Error("Can not resolve #include <"+e+">");return Bl(t)}const dw=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Wh(i){return i.replace(dw,pw)}function pw(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Xh(i){let e="precision "+i.precision+` float;
precision `+i.precision+" int;";return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function mw(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===tp?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===np?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===nr&&(e="SHADOWMAP_TYPE_VSM"),e}function gw(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Ds:case Is:e="ENVMAP_TYPE_CUBE";break;case ta:e="ENVMAP_TYPE_CUBE_UV";break}return e}function _w(i){let e="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case Is:e="ENVMAP_MODE_REFRACTION";break}return e}function xw(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case ea:e="ENVMAP_BLENDING_MULTIPLY";break;case ux:e="ENVMAP_BLENDING_MIX";break;case hx:e="ENVMAP_BLENDING_ADD";break}return e}function vw(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function yw(i,e,t,n){const s=i.getContext(),r=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=mw(t),c=gw(t),u=_w(t),h=xw(t),f=vw(t),d=t.isWebGL2?"":lw(t),g=cw(r),p=s.createProgram();let m,_,M=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=[g].filter(sr).join(`
`),m.length>0&&(m+=`
`),_=[d,g].filter(sr).join(`
`),_.length>0&&(_+=`
`)):(m=[Xh(t),"#define SHADER_NAME "+t.shaderName,g,t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.supportsVertexTextures?"#define VERTEX_TEXTURES":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.displacementMap&&t.supportsVertexTextures?"#define USE_DISPLACEMENTMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",t.specularColorMap?"#define USE_SPECULARCOLORMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEENCOLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(sr).join(`
`),_=[d,Xh(t),"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",t.specularColorMap?"#define USE_SPECULARCOLORMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEENCOLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.physicallyCorrectLights?"#define PHYSICALLY_CORRECT_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Zn?"#define TONE_MAPPING":"",t.toneMapping!==Zn?Ue.tonemapping_pars_fragment:"",t.toneMapping!==Zn?aw("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ue.encodings_pars_fragment,ow("linearToOutputTexel",t.outputEncoding),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(sr).join(`
`)),o=Bl(o),o=Hh(o,t),o=Gh(o,t),a=Bl(a),a=Hh(a,t),a=Gh(a,t),o=Wh(o),a=Wh(a),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(M=`#version 300 es
`,m=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,_=["#define varying in",t.glslVersion===mh?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===mh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+_);const x=M+m+o,w=M+_+a,S=Bh(s,35633,x),P=Bh(s,35632,w);if(s.attachShader(p,S),s.attachShader(p,P),t.index0AttributeName!==void 0?s.bindAttribLocation(p,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(p,0,"position"),s.linkProgram(p),i.debug.checkShaderErrors){const A=s.getProgramInfoLog(p).trim(),R=s.getShaderInfoLog(S).trim(),j=s.getShaderInfoLog(P).trim();let Q=!0,k=!0;if(s.getProgramParameter(p,35714)===!1){Q=!1;const z=Vh(s,S,"vertex"),J=Vh(s,P,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(p,35715)+`

Program Info Log: `+A+`
`+z+`
`+J)}else A!==""?console.warn("THREE.WebGLProgram: Program Info Log:",A):(R===""||j==="")&&(k=!1);k&&(this.diagnostics={runnable:Q,programLog:A,vertexShader:{log:R,prefix:m},fragmentShader:{log:j,prefix:_}})}s.deleteShader(S),s.deleteShader(P);let I;this.getUniforms=function(){return I===void 0&&(I=new Po(s,p)),I};let v;return this.getAttributes=function(){return v===void 0&&(v=uw(s,p)),v},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(p),this.program=void 0},this.name=t.shaderName,this.id=iw++,this.cacheKey=e,this.usedTimes=1,this.program=p,this.vertexShader=S,this.fragmentShader=P,this}let Mw=0;class bw{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new ww(e),t.set(e,n)),n}}class ww{constructor(e){this.id=Mw++,this.code=e,this.usedTimes=0}}function Sw(i,e,t,n,s,r,o){const a=new Mc,l=new bw,c=[],u=s.isWebGL2,h=s.logarithmicDepthBuffer,f=s.vertexTextures;let d=s.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function p(v,A,R,j,Q){const k=j.fog,z=Q.geometry,J=v.isMeshStandardMaterial?j.environment:null,$=(v.isMeshStandardMaterial?t:e).get(v.envMap||J),ie=$&&$.mapping===ta?$.image.height:null,Y=g[v.type];v.precision!==null&&(d=s.getMaxPrecision(v.precision),d!==v.precision&&console.warn("THREE.WebGLProgram.getParameters:",v.precision,"not supported, using",d,"instead."));const fe=z.morphAttributes.position||z.morphAttributes.normal||z.morphAttributes.color,de=fe!==void 0?fe.length:0;let ye=0;z.morphAttributes.position!==void 0&&(ye=1),z.morphAttributes.normal!==void 0&&(ye=2),z.morphAttributes.color!==void 0&&(ye=3);let W,oe,ve,N;if(Y){const Me=Cn[Y];W=Me.vertexShader,oe=Me.fragmentShader}else W=v.vertexShader,oe=v.fragmentShader,l.update(v),ve=l.getVertexShaderID(v),N=l.getFragmentShaderID(v);const O=i.getRenderTarget(),ee=v.alphaTest>0,ce=v.clearcoat>0,ge=v.iridescence>0;return{isWebGL2:u,shaderID:Y,shaderName:v.type,vertexShader:W,fragmentShader:oe,defines:v.defines,customVertexShaderID:ve,customFragmentShaderID:N,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:d,instancing:Q.isInstancedMesh===!0,instancingColor:Q.isInstancedMesh===!0&&Q.instanceColor!==null,supportsVertexTextures:f,outputEncoding:O===null?i.outputEncoding:O.isXRRenderTarget===!0?O.texture.encoding:Wi,map:!!v.map,matcap:!!v.matcap,envMap:!!$,envMapMode:$&&$.mapping,envMapCubeUVHeight:ie,lightMap:!!v.lightMap,aoMap:!!v.aoMap,emissiveMap:!!v.emissiveMap,bumpMap:!!v.bumpMap,normalMap:!!v.normalMap,objectSpaceNormalMap:v.normalMapType===zx,tangentSpaceNormalMap:v.normalMapType===na,decodeVideoTexture:!!v.map&&v.map.isVideoTexture===!0&&v.map.encoding===nt,clearcoat:ce,clearcoatMap:ce&&!!v.clearcoatMap,clearcoatRoughnessMap:ce&&!!v.clearcoatRoughnessMap,clearcoatNormalMap:ce&&!!v.clearcoatNormalMap,iridescence:ge,iridescenceMap:ge&&!!v.iridescenceMap,iridescenceThicknessMap:ge&&!!v.iridescenceThicknessMap,displacementMap:!!v.displacementMap,roughnessMap:!!v.roughnessMap,metalnessMap:!!v.metalnessMap,specularMap:!!v.specularMap,specularIntensityMap:!!v.specularIntensityMap,specularColorMap:!!v.specularColorMap,opaque:v.transparent===!1&&v.blending===Ss,alphaMap:!!v.alphaMap,alphaTest:ee,gradientMap:!!v.gradientMap,sheen:v.sheen>0,sheenColorMap:!!v.sheenColorMap,sheenRoughnessMap:!!v.sheenRoughnessMap,transmission:v.transmission>0,transmissionMap:!!v.transmissionMap,thicknessMap:!!v.thicknessMap,combine:v.combine,vertexTangents:!!v.normalMap&&!!z.attributes.tangent,vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!z.attributes.color&&z.attributes.color.itemSize===4,vertexUvs:!!v.map||!!v.bumpMap||!!v.normalMap||!!v.specularMap||!!v.alphaMap||!!v.emissiveMap||!!v.roughnessMap||!!v.metalnessMap||!!v.clearcoatMap||!!v.clearcoatRoughnessMap||!!v.clearcoatNormalMap||!!v.iridescenceMap||!!v.iridescenceThicknessMap||!!v.displacementMap||!!v.transmissionMap||!!v.thicknessMap||!!v.specularIntensityMap||!!v.specularColorMap||!!v.sheenColorMap||!!v.sheenRoughnessMap,uvsVertexOnly:!(v.map||v.bumpMap||v.normalMap||v.specularMap||v.alphaMap||v.emissiveMap||v.roughnessMap||v.metalnessMap||v.clearcoatNormalMap||v.iridescenceMap||v.iridescenceThicknessMap||v.transmission>0||v.transmissionMap||v.thicknessMap||v.specularIntensityMap||v.specularColorMap||v.sheen>0||v.sheenColorMap||v.sheenRoughnessMap)&&!!v.displacementMap,fog:!!k,useFog:v.fog===!0,fogExp2:k&&k.isFogExp2,flatShading:!!v.flatShading,sizeAttenuation:v.sizeAttenuation,logarithmicDepthBuffer:h,skinning:Q.isSkinnedMesh===!0,morphTargets:z.morphAttributes.position!==void 0,morphNormals:z.morphAttributes.normal!==void 0,morphColors:z.morphAttributes.color!==void 0,morphTargetsCount:de,morphTextureStride:ye,numDirLights:A.directional.length,numPointLights:A.point.length,numSpotLights:A.spot.length,numSpotLightMaps:A.spotLightMap.length,numRectAreaLights:A.rectArea.length,numHemiLights:A.hemi.length,numDirLightShadows:A.directionalShadowMap.length,numPointLightShadows:A.pointShadowMap.length,numSpotLightShadows:A.spotShadowMap.length,numSpotLightShadowsWithMaps:A.numSpotLightShadowsWithMaps,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:v.dithering,shadowMapEnabled:i.shadowMap.enabled&&R.length>0,shadowMapType:i.shadowMap.type,toneMapping:v.toneMapped?i.toneMapping:Zn,physicallyCorrectLights:i.physicallyCorrectLights,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===Bt,flipSided:v.side===Ht,useDepthPacking:!!v.depthPacking,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionDerivatives:v.extensions&&v.extensions.derivatives,extensionFragDepth:v.extensions&&v.extensions.fragDepth,extensionDrawBuffers:v.extensions&&v.extensions.drawBuffers,extensionShaderTextureLOD:v.extensions&&v.extensions.shaderTextureLOD,rendererExtensionFragDepth:u||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:u||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:u||n.has("EXT_shader_texture_lod"),customProgramCacheKey:v.customProgramCacheKey()}}function m(v){const A=[];if(v.shaderID?A.push(v.shaderID):(A.push(v.customVertexShaderID),A.push(v.customFragmentShaderID)),v.defines!==void 0)for(const R in v.defines)A.push(R),A.push(v.defines[R]);return v.isRawShaderMaterial===!1&&(_(A,v),M(A,v),A.push(i.outputEncoding)),A.push(v.customProgramCacheKey),A.join()}function _(v,A){v.push(A.precision),v.push(A.outputEncoding),v.push(A.envMapMode),v.push(A.envMapCubeUVHeight),v.push(A.combine),v.push(A.vertexUvs),v.push(A.fogExp2),v.push(A.sizeAttenuation),v.push(A.morphTargetsCount),v.push(A.morphAttributeCount),v.push(A.numDirLights),v.push(A.numPointLights),v.push(A.numSpotLights),v.push(A.numSpotLightMaps),v.push(A.numHemiLights),v.push(A.numRectAreaLights),v.push(A.numDirLightShadows),v.push(A.numPointLightShadows),v.push(A.numSpotLightShadows),v.push(A.numSpotLightShadowsWithMaps),v.push(A.shadowMapType),v.push(A.toneMapping),v.push(A.numClippingPlanes),v.push(A.numClipIntersection),v.push(A.depthPacking)}function M(v,A){a.disableAll(),A.isWebGL2&&a.enable(0),A.supportsVertexTextures&&a.enable(1),A.instancing&&a.enable(2),A.instancingColor&&a.enable(3),A.map&&a.enable(4),A.matcap&&a.enable(5),A.envMap&&a.enable(6),A.lightMap&&a.enable(7),A.aoMap&&a.enable(8),A.emissiveMap&&a.enable(9),A.bumpMap&&a.enable(10),A.normalMap&&a.enable(11),A.objectSpaceNormalMap&&a.enable(12),A.tangentSpaceNormalMap&&a.enable(13),A.clearcoat&&a.enable(14),A.clearcoatMap&&a.enable(15),A.clearcoatRoughnessMap&&a.enable(16),A.clearcoatNormalMap&&a.enable(17),A.iridescence&&a.enable(18),A.iridescenceMap&&a.enable(19),A.iridescenceThicknessMap&&a.enable(20),A.displacementMap&&a.enable(21),A.specularMap&&a.enable(22),A.roughnessMap&&a.enable(23),A.metalnessMap&&a.enable(24),A.gradientMap&&a.enable(25),A.alphaMap&&a.enable(26),A.alphaTest&&a.enable(27),A.vertexColors&&a.enable(28),A.vertexAlphas&&a.enable(29),A.vertexUvs&&a.enable(30),A.vertexTangents&&a.enable(31),A.uvsVertexOnly&&a.enable(32),v.push(a.mask),a.disableAll(),A.fog&&a.enable(0),A.useFog&&a.enable(1),A.flatShading&&a.enable(2),A.logarithmicDepthBuffer&&a.enable(3),A.skinning&&a.enable(4),A.morphTargets&&a.enable(5),A.morphNormals&&a.enable(6),A.morphColors&&a.enable(7),A.premultipliedAlpha&&a.enable(8),A.shadowMapEnabled&&a.enable(9),A.physicallyCorrectLights&&a.enable(10),A.doubleSided&&a.enable(11),A.flipSided&&a.enable(12),A.useDepthPacking&&a.enable(13),A.dithering&&a.enable(14),A.specularIntensityMap&&a.enable(15),A.specularColorMap&&a.enable(16),A.transmission&&a.enable(17),A.transmissionMap&&a.enable(18),A.thicknessMap&&a.enable(19),A.sheen&&a.enable(20),A.sheenColorMap&&a.enable(21),A.sheenRoughnessMap&&a.enable(22),A.decodeVideoTexture&&a.enable(23),A.opaque&&a.enable(24),v.push(a.mask)}function x(v){const A=g[v.type];let R;if(A){const j=Cn[A];R=uv.clone(j.uniforms)}else R=v.uniforms;return R}function w(v,A){let R;for(let j=0,Q=c.length;j<Q;j++){const k=c[j];if(k.cacheKey===A){R=k,++R.usedTimes;break}}return R===void 0&&(R=new yw(i,A,v,r),c.push(R)),R}function S(v){if(--v.usedTimes===0){const A=c.indexOf(v);c[A]=c[c.length-1],c.pop(),v.destroy()}}function P(v){l.remove(v)}function I(){l.dispose()}return{getParameters:p,getProgramCacheKey:m,getUniforms:x,acquireProgram:w,releaseProgram:S,releaseShaderCache:P,programs:c,dispose:I}}function Tw(){let i=new WeakMap;function e(r){let o=i.get(r);return o===void 0&&(o={},i.set(r,o)),o}function t(r){i.delete(r)}function n(r,o,a){i.get(r)[o]=a}function s(){i=new WeakMap}return{get:e,remove:t,update:n,dispose:s}}function Ew(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function jh(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function qh(){const i=[];let e=0;const t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function o(h,f,d,g,p,m){let _=i[e];return _===void 0?(_={id:h.id,object:h,geometry:f,material:d,groupOrder:g,renderOrder:h.renderOrder,z:p,group:m},i[e]=_):(_.id=h.id,_.object=h,_.geometry=f,_.material=d,_.groupOrder=g,_.renderOrder=h.renderOrder,_.z=p,_.group=m),e++,_}function a(h,f,d,g,p,m){const _=o(h,f,d,g,p,m);d.transmission>0?n.push(_):d.transparent===!0?s.push(_):t.push(_)}function l(h,f,d,g,p,m){const _=o(h,f,d,g,p,m);d.transmission>0?n.unshift(_):d.transparent===!0?s.unshift(_):t.unshift(_)}function c(h,f){t.length>1&&t.sort(h||Ew),n.length>1&&n.sort(f||jh),s.length>1&&s.sort(f||jh)}function u(){for(let h=e,f=i.length;h<f;h++){const d=i[h];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:a,unshift:l,finish:u,sort:c}}function Aw(){let i=new WeakMap;function e(n,s){const r=i.get(n);let o;return r===void 0?(o=new qh,i.set(n,[o])):s>=r.length?(o=new qh,r.push(o)):o=r[s],o}function t(){i=new WeakMap}return{get:e,dispose:t}}function Cw(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new D,color:new Pe};break;case"SpotLight":t={position:new D,direction:new D,color:new Pe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new D,color:new Pe,distance:0,decay:0};break;case"HemisphereLight":t={direction:new D,skyColor:new Pe,groundColor:new Pe};break;case"RectAreaLight":t={color:new Pe,position:new D,halfWidth:new D,halfHeight:new D};break}return i[e.id]=t,t}}}function Pw(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new xe};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new xe};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new xe,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let Lw=0;function Rw(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function Dw(i,e){const t=new Cw,n=Pw(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0};for(let u=0;u<9;u++)s.probe.push(new D);const r=new D,o=new De,a=new De;function l(u,h){let f=0,d=0,g=0;for(let j=0;j<9;j++)s.probe[j].set(0,0,0);let p=0,m=0,_=0,M=0,x=0,w=0,S=0,P=0,I=0,v=0;u.sort(Rw);const A=h!==!0?Math.PI:1;for(let j=0,Q=u.length;j<Q;j++){const k=u[j],z=k.color,J=k.intensity,$=k.distance,ie=k.shadow&&k.shadow.map?k.shadow.map.texture:null;if(k.isAmbientLight)f+=z.r*J*A,d+=z.g*J*A,g+=z.b*J*A;else if(k.isLightProbe)for(let Y=0;Y<9;Y++)s.probe[Y].addScaledVector(k.sh.coefficients[Y],J);else if(k.isDirectionalLight){const Y=t.get(k);if(Y.color.copy(k.color).multiplyScalar(k.intensity*A),k.castShadow){const fe=k.shadow,de=n.get(k);de.shadowBias=fe.bias,de.shadowNormalBias=fe.normalBias,de.shadowRadius=fe.radius,de.shadowMapSize=fe.mapSize,s.directionalShadow[p]=de,s.directionalShadowMap[p]=ie,s.directionalShadowMatrix[p]=k.shadow.matrix,w++}s.directional[p]=Y,p++}else if(k.isSpotLight){const Y=t.get(k);Y.position.setFromMatrixPosition(k.matrixWorld),Y.color.copy(z).multiplyScalar(J*A),Y.distance=$,Y.coneCos=Math.cos(k.angle),Y.penumbraCos=Math.cos(k.angle*(1-k.penumbra)),Y.decay=k.decay,s.spot[_]=Y;const fe=k.shadow;if(k.map&&(s.spotLightMap[I]=k.map,I++,fe.updateMatrices(k),k.castShadow&&v++),s.spotLightMatrix[_]=fe.matrix,k.castShadow){const de=n.get(k);de.shadowBias=fe.bias,de.shadowNormalBias=fe.normalBias,de.shadowRadius=fe.radius,de.shadowMapSize=fe.mapSize,s.spotShadow[_]=de,s.spotShadowMap[_]=ie,P++}_++}else if(k.isRectAreaLight){const Y=t.get(k);Y.color.copy(z).multiplyScalar(J),Y.halfWidth.set(k.width*.5,0,0),Y.halfHeight.set(0,k.height*.5,0),s.rectArea[M]=Y,M++}else if(k.isPointLight){const Y=t.get(k);if(Y.color.copy(k.color).multiplyScalar(k.intensity*A),Y.distance=k.distance,Y.decay=k.decay,k.castShadow){const fe=k.shadow,de=n.get(k);de.shadowBias=fe.bias,de.shadowNormalBias=fe.normalBias,de.shadowRadius=fe.radius,de.shadowMapSize=fe.mapSize,de.shadowCameraNear=fe.camera.near,de.shadowCameraFar=fe.camera.far,s.pointShadow[m]=de,s.pointShadowMap[m]=ie,s.pointShadowMatrix[m]=k.shadow.matrix,S++}s.point[m]=Y,m++}else if(k.isHemisphereLight){const Y=t.get(k);Y.skyColor.copy(k.color).multiplyScalar(J*A),Y.groundColor.copy(k.groundColor).multiplyScalar(J*A),s.hemi[x]=Y,x++}}M>0&&(e.isWebGL2||i.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=Se.LTC_FLOAT_1,s.rectAreaLTC2=Se.LTC_FLOAT_2):i.has("OES_texture_half_float_linear")===!0?(s.rectAreaLTC1=Se.LTC_HALF_1,s.rectAreaLTC2=Se.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),s.ambient[0]=f,s.ambient[1]=d,s.ambient[2]=g;const R=s.hash;(R.directionalLength!==p||R.pointLength!==m||R.spotLength!==_||R.rectAreaLength!==M||R.hemiLength!==x||R.numDirectionalShadows!==w||R.numPointShadows!==S||R.numSpotShadows!==P||R.numSpotMaps!==I)&&(s.directional.length=p,s.spot.length=_,s.rectArea.length=M,s.point.length=m,s.hemi.length=x,s.directionalShadow.length=w,s.directionalShadowMap.length=w,s.pointShadow.length=S,s.pointShadowMap.length=S,s.spotShadow.length=P,s.spotShadowMap.length=P,s.directionalShadowMatrix.length=w,s.pointShadowMatrix.length=S,s.spotLightMatrix.length=P+I-v,s.spotLightMap.length=I,s.numSpotLightShadowsWithMaps=v,R.directionalLength=p,R.pointLength=m,R.spotLength=_,R.rectAreaLength=M,R.hemiLength=x,R.numDirectionalShadows=w,R.numPointShadows=S,R.numSpotShadows=P,R.numSpotMaps=I,s.version=Lw++)}function c(u,h){let f=0,d=0,g=0,p=0,m=0;const _=h.matrixWorldInverse;for(let M=0,x=u.length;M<x;M++){const w=u[M];if(w.isDirectionalLight){const S=s.directional[f];S.direction.setFromMatrixPosition(w.matrixWorld),r.setFromMatrixPosition(w.target.matrixWorld),S.direction.sub(r),S.direction.transformDirection(_),f++}else if(w.isSpotLight){const S=s.spot[g];S.position.setFromMatrixPosition(w.matrixWorld),S.position.applyMatrix4(_),S.direction.setFromMatrixPosition(w.matrixWorld),r.setFromMatrixPosition(w.target.matrixWorld),S.direction.sub(r),S.direction.transformDirection(_),g++}else if(w.isRectAreaLight){const S=s.rectArea[p];S.position.setFromMatrixPosition(w.matrixWorld),S.position.applyMatrix4(_),a.identity(),o.copy(w.matrixWorld),o.premultiply(_),a.extractRotation(o),S.halfWidth.set(w.width*.5,0,0),S.halfHeight.set(0,w.height*.5,0),S.halfWidth.applyMatrix4(a),S.halfHeight.applyMatrix4(a),p++}else if(w.isPointLight){const S=s.point[d];S.position.setFromMatrixPosition(w.matrixWorld),S.position.applyMatrix4(_),d++}else if(w.isHemisphereLight){const S=s.hemi[m];S.direction.setFromMatrixPosition(w.matrixWorld),S.direction.transformDirection(_),m++}}}return{setup:l,setupView:c,state:s}}function Yh(i,e){const t=new Dw(i,e),n=[],s=[];function r(){n.length=0,s.length=0}function o(h){n.push(h)}function a(h){s.push(h)}function l(h){t.setup(n,h)}function c(h){t.setupView(n,h)}return{init:r,state:{lightsArray:n,shadowsArray:s,lights:t},setupLights:l,setupLightsView:c,pushLight:o,pushShadow:a}}function Iw(i,e){let t=new WeakMap;function n(r,o=0){const a=t.get(r);let l;return a===void 0?(l=new Yh(i,e),t.set(r,[l])):o>=a.length?(l=new Yh(i,e),a.push(l)):l=a[o],l}function s(){t=new WeakMap}return{get:n,dispose:s}}class Fw extends ei{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Fx,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Ow extends ei{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.referencePosition=new D,this.nearDistance=1,this.farDistance=1e3,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.referencePosition.copy(e.referencePosition),this.nearDistance=e.nearDistance,this.farDistance=e.farDistance,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const zw=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Nw=`uniform sampler2D shadow_pass;
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
}`;function Uw(i,e,t){let n=new Sc;const s=new xe,r=new xe,o=new Qe,a=new Fw({depthPacking:Ox}),l=new Ow,c={},u=t.maxTextureSize,h={[dn]:Ht,[Ht]:dn,[Bt]:Bt},f=new Ft({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new xe},radius:{value:4}},vertexShader:zw,fragmentShader:Nw}),d=f.clone();d.defines.HORIZONTAL_PASS=1;const g=new ct;g.setAttribute("position",new Vt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const p=new et(g,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=tp,this.render=function(w,S,P){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||w.length===0)return;const I=i.getRenderTarget(),v=i.getActiveCubeFace(),A=i.getActiveMipmapLevel(),R=i.state;R.setBlending(mi),R.buffers.color.setClear(1,1,1,1),R.buffers.depth.setTest(!0),R.setScissorTest(!1);for(let j=0,Q=w.length;j<Q;j++){const k=w[j],z=k.shadow;if(z===void 0){console.warn("THREE.WebGLShadowMap:",k,"has no shadow.");continue}if(z.autoUpdate===!1&&z.needsUpdate===!1)continue;s.copy(z.mapSize);const J=z.getFrameExtents();if(s.multiply(J),r.copy(z.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/J.x),s.x=r.x*J.x,z.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/J.y),s.y=r.y*J.y,z.mapSize.y=r.y)),z.map===null){const ie=this.type!==nr?{minFilter:Et,magFilter:Et}:{};z.map=new Xi(s.x,s.y,ie),z.map.texture.name=k.name+".shadowMap",z.camera.updateProjectionMatrix()}i.setRenderTarget(z.map),i.clear();const $=z.getViewportCount();for(let ie=0;ie<$;ie++){const Y=z.getViewport(ie);o.set(r.x*Y.x,r.y*Y.y,r.x*Y.z,r.y*Y.w),R.viewport(o),z.updateMatrices(k,ie),n=z.getFrustum(),x(S,P,z.camera,k,this.type)}z.isPointLightShadow!==!0&&this.type===nr&&_(z,P),z.needsUpdate=!1}m.needsUpdate=!1,i.setRenderTarget(I,v,A)};function _(w,S){const P=e.update(p);f.defines.VSM_SAMPLES!==w.blurSamples&&(f.defines.VSM_SAMPLES=w.blurSamples,d.defines.VSM_SAMPLES=w.blurSamples,f.needsUpdate=!0,d.needsUpdate=!0),w.mapPass===null&&(w.mapPass=new Xi(s.x,s.y)),f.uniforms.shadow_pass.value=w.map.texture,f.uniforms.resolution.value=w.mapSize,f.uniforms.radius.value=w.radius,i.setRenderTarget(w.mapPass),i.clear(),i.renderBufferDirect(S,null,P,f,p,null),d.uniforms.shadow_pass.value=w.mapPass.texture,d.uniforms.resolution.value=w.mapSize,d.uniforms.radius.value=w.radius,i.setRenderTarget(w.map),i.clear(),i.renderBufferDirect(S,null,P,d,p,null)}function M(w,S,P,I,v,A){let R=null;const j=P.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(j!==void 0)R=j;else if(R=P.isPointLight===!0?l:a,i.localClippingEnabled&&S.clipShadows===!0&&Array.isArray(S.clippingPlanes)&&S.clippingPlanes.length!==0||S.displacementMap&&S.displacementScale!==0||S.alphaMap&&S.alphaTest>0||S.map&&S.alphaTest>0){const Q=R.uuid,k=S.uuid;let z=c[Q];z===void 0&&(z={},c[Q]=z);let J=z[k];J===void 0&&(J=R.clone(),z[k]=J),R=J}return R.visible=S.visible,R.wireframe=S.wireframe,A===nr?R.side=S.shadowSide!==null?S.shadowSide:S.side:R.side=S.shadowSide!==null?S.shadowSide:h[S.side],R.alphaMap=S.alphaMap,R.alphaTest=S.alphaTest,R.map=S.map,R.clipShadows=S.clipShadows,R.clippingPlanes=S.clippingPlanes,R.clipIntersection=S.clipIntersection,R.displacementMap=S.displacementMap,R.displacementScale=S.displacementScale,R.displacementBias=S.displacementBias,R.wireframeLinewidth=S.wireframeLinewidth,R.linewidth=S.linewidth,P.isPointLight===!0&&R.isMeshDistanceMaterial===!0&&(R.referencePosition.setFromMatrixPosition(P.matrixWorld),R.nearDistance=I,R.farDistance=v),R}function x(w,S,P,I,v){if(w.visible===!1)return;if(w.layers.test(S.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&v===nr)&&(!w.frustumCulled||n.intersectsObject(w))){w.modelViewMatrix.multiplyMatrices(P.matrixWorldInverse,w.matrixWorld);const j=e.update(w),Q=w.material;if(Array.isArray(Q)){const k=j.groups;for(let z=0,J=k.length;z<J;z++){const $=k[z],ie=Q[$.materialIndex];if(ie&&ie.visible){const Y=M(w,ie,I,P.near,P.far,v);i.renderBufferDirect(P,null,j,Y,w,$)}}}else if(Q.visible){const k=M(w,Q,I,P.near,P.far,v);i.renderBufferDirect(P,null,j,k,w,null)}}const R=w.children;for(let j=0,Q=R.length;j<Q;j++)x(R[j],S,P,I,v)}}function kw(i,e,t){const n=t.isWebGL2;function s(){let V=!1;const ae=new Qe;let _e=null;const Ce=new Qe(0,0,0,0);return{setMask:function(Re){_e!==Re&&!V&&(i.colorMask(Re,Re,Re,Re),_e=Re)},setLocked:function(Re){V=Re},setClear:function(Re,tt,wt,Pt,yi){yi===!0&&(Re*=Pt,tt*=Pt,wt*=Pt),ae.set(Re,tt,wt,Pt),Ce.equals(ae)===!1&&(i.clearColor(Re,tt,wt,Pt),Ce.copy(ae))},reset:function(){V=!1,_e=null,Ce.set(-1,0,0,0)}}}function r(){let V=!1,ae=null,_e=null,Ce=null;return{setTest:function(Re){Re?ee(2929):ce(2929)},setMask:function(Re){ae!==Re&&!V&&(i.depthMask(Re),ae=Re)},setFunc:function(Re){if(_e!==Re){switch(Re){case ix:i.depthFunc(512);break;case sx:i.depthFunc(519);break;case rx:i.depthFunc(513);break;case Ol:i.depthFunc(515);break;case ox:i.depthFunc(514);break;case ax:i.depthFunc(518);break;case lx:i.depthFunc(516);break;case cx:i.depthFunc(517);break;default:i.depthFunc(515)}_e=Re}},setLocked:function(Re){V=Re},setClear:function(Re){Ce!==Re&&(i.clearDepth(Re),Ce=Re)},reset:function(){V=!1,ae=null,_e=null,Ce=null}}}function o(){let V=!1,ae=null,_e=null,Ce=null,Re=null,tt=null,wt=null,Pt=null,yi=null;return{setTest:function(at){V||(at?ee(2960):ce(2960))},setMask:function(at){ae!==at&&!V&&(i.stencilMask(at),ae=at)},setFunc:function(at,zn,tn){(_e!==at||Ce!==zn||Re!==tn)&&(i.stencilFunc(at,zn,tn),_e=at,Ce=zn,Re=tn)},setOp:function(at,zn,tn){(tt!==at||wt!==zn||Pt!==tn)&&(i.stencilOp(at,zn,tn),tt=at,wt=zn,Pt=tn)},setLocked:function(at){V=at},setClear:function(at){yi!==at&&(i.clearStencil(at),yi=at)},reset:function(){V=!1,ae=null,_e=null,Ce=null,Re=null,tt=null,wt=null,Pt=null,yi=null}}}const a=new s,l=new r,c=new o,u=new WeakMap,h=new WeakMap;let f={},d={},g=new WeakMap,p=[],m=null,_=!1,M=null,x=null,w=null,S=null,P=null,I=null,v=null,A=!1,R=null,j=null,Q=null,k=null,z=null;const J=i.getParameter(35661);let $=!1,ie=0;const Y=i.getParameter(7938);Y.indexOf("WebGL")!==-1?(ie=parseFloat(/^WebGL (\d)/.exec(Y)[1]),$=ie>=1):Y.indexOf("OpenGL ES")!==-1&&(ie=parseFloat(/^OpenGL ES (\d)/.exec(Y)[1]),$=ie>=2);let fe=null,de={};const ye=i.getParameter(3088),W=i.getParameter(2978),oe=new Qe().fromArray(ye),ve=new Qe().fromArray(W);function N(V,ae,_e){const Ce=new Uint8Array(4),Re=i.createTexture();i.bindTexture(V,Re),i.texParameteri(V,10241,9728),i.texParameteri(V,10240,9728);for(let tt=0;tt<_e;tt++)i.texImage2D(ae+tt,0,6408,1,1,0,6408,5121,Ce);return Re}const O={};O[3553]=N(3553,3553,1),O[34067]=N(34067,34069,6),a.setClear(0,0,0,1),l.setClear(1),c.setClear(0),ee(2929),l.setFunc(Ol),B(!1),te(Ou),ee(2884),F(mi);function ee(V){f[V]!==!0&&(i.enable(V),f[V]=!0)}function ce(V){f[V]!==!1&&(i.disable(V),f[V]=!1)}function ge(V,ae){return d[V]!==ae?(i.bindFramebuffer(V,ae),d[V]=ae,n&&(V===36009&&(d[36160]=ae),V===36160&&(d[36009]=ae)),!0):!1}function pe(V,ae){let _e=p,Ce=!1;if(V)if(_e=g.get(ae),_e===void 0&&(_e=[],g.set(ae,_e)),V.isWebGLMultipleRenderTargets){const Re=V.texture;if(_e.length!==Re.length||_e[0]!==36064){for(let tt=0,wt=Re.length;tt<wt;tt++)_e[tt]=36064+tt;_e.length=Re.length,Ce=!0}}else _e[0]!==36064&&(_e[0]=36064,Ce=!0);else _e[0]!==1029&&(_e[0]=1029,Ce=!0);Ce&&(t.isWebGL2?i.drawBuffers(_e):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(_e))}function Me(V){return m!==V?(i.useProgram(V),m=V,!0):!1}const y={[ds]:32774,[j_]:32778,[q_]:32779};if(n)y[ku]=32775,y[Bu]=32776;else{const V=e.get("EXT_blend_minmax");V!==null&&(y[ku]=V.MIN_EXT,y[Bu]=V.MAX_EXT)}const T={[Y_]:0,[Z_]:1,[$_]:768,[ip]:770,[nx]:776,[ex]:774,[J_]:772,[K_]:769,[sp]:771,[tx]:775,[Q_]:773};function F(V,ae,_e,Ce,Re,tt,wt,Pt){if(V===mi){_===!0&&(ce(3042),_=!1);return}if(_===!1&&(ee(3042),_=!0),V!==X_){if(V!==M||Pt!==A){if((x!==ds||P!==ds)&&(i.blendEquation(32774),x=ds,P=ds),Pt)switch(V){case Ss:i.blendFuncSeparate(1,771,1,771);break;case zu:i.blendFunc(1,1);break;case Nu:i.blendFuncSeparate(0,769,0,1);break;case Uu:i.blendFuncSeparate(0,768,0,770);break;default:console.error("THREE.WebGLState: Invalid blending: ",V);break}else switch(V){case Ss:i.blendFuncSeparate(770,771,1,771);break;case zu:i.blendFunc(770,1);break;case Nu:i.blendFuncSeparate(0,769,0,1);break;case Uu:i.blendFunc(0,768);break;default:console.error("THREE.WebGLState: Invalid blending: ",V);break}w=null,S=null,I=null,v=null,M=V,A=Pt}return}Re=Re||ae,tt=tt||_e,wt=wt||Ce,(ae!==x||Re!==P)&&(i.blendEquationSeparate(y[ae],y[Re]),x=ae,P=Re),(_e!==w||Ce!==S||tt!==I||wt!==v)&&(i.blendFuncSeparate(T[_e],T[Ce],T[tt],T[wt]),w=_e,S=Ce,I=tt,v=wt),M=V,A=!1}function H(V,ae){V.side===Bt?ce(2884):ee(2884);let _e=V.side===Ht;ae&&(_e=!_e),B(_e),V.blending===Ss&&V.transparent===!1?F(mi):F(V.blending,V.blendEquation,V.blendSrc,V.blendDst,V.blendEquationAlpha,V.blendSrcAlpha,V.blendDstAlpha,V.premultipliedAlpha),l.setFunc(V.depthFunc),l.setTest(V.depthTest),l.setMask(V.depthWrite),a.setMask(V.colorWrite);const Ce=V.stencilWrite;c.setTest(Ce),Ce&&(c.setMask(V.stencilWriteMask),c.setFunc(V.stencilFunc,V.stencilRef,V.stencilFuncMask),c.setOp(V.stencilFail,V.stencilZFail,V.stencilZPass)),Z(V.polygonOffset,V.polygonOffsetFactor,V.polygonOffsetUnits),V.alphaToCoverage===!0?ee(32926):ce(32926)}function B(V){R!==V&&(V?i.frontFace(2304):i.frontFace(2305),R=V)}function te(V){V!==G_?(ee(2884),V!==j&&(V===Ou?i.cullFace(1029):V===W_?i.cullFace(1028):i.cullFace(1032))):ce(2884),j=V}function se(V){V!==Q&&($&&i.lineWidth(V),Q=V)}function Z(V,ae,_e){V?(ee(32823),(k!==ae||z!==_e)&&(i.polygonOffset(ae,_e),k=ae,z=_e)):ce(32823)}function he(V){V?ee(3089):ce(3089)}function ne(V){V===void 0&&(V=33984+J-1),fe!==V&&(i.activeTexture(V),fe=V)}function E(V,ae,_e){_e===void 0&&(fe===null?_e=33984+J-1:_e=fe);let Ce=de[_e];Ce===void 0&&(Ce={type:void 0,texture:void 0},de[_e]=Ce),(Ce.type!==V||Ce.texture!==ae)&&(fe!==_e&&(i.activeTexture(_e),fe=_e),i.bindTexture(V,ae||O[V]),Ce.type=V,Ce.texture=ae)}function b(){const V=de[fe];V!==void 0&&V.type!==void 0&&(i.bindTexture(V.type,null),V.type=void 0,V.texture=void 0)}function U(){try{i.compressedTexImage2D.apply(i,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function K(){try{i.compressedTexImage3D.apply(i,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function re(){try{i.texSubImage2D.apply(i,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function me(){try{i.texSubImage3D.apply(i,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function be(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function L(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function G(){try{i.texStorage2D.apply(i,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function we(){try{i.texStorage3D.apply(i,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Ae(){try{i.texImage2D.apply(i,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Te(){try{i.texImage3D.apply(i,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Le(V){oe.equals(V)===!1&&(i.scissor(V.x,V.y,V.z,V.w),oe.copy(V))}function Ee(V){ve.equals(V)===!1&&(i.viewport(V.x,V.y,V.z,V.w),ve.copy(V))}function Fe(V,ae){let _e=h.get(ae);_e===void 0&&(_e=new WeakMap,h.set(ae,_e));let Ce=_e.get(V);Ce===void 0&&(Ce=i.getUniformBlockIndex(ae,V.name),_e.set(V,Ce))}function Ve(V,ae){const Ce=h.get(ae).get(V);u.get(ae)!==Ce&&(i.uniformBlockBinding(ae,Ce,V.__bindingPointIndex),u.set(ae,Ce))}function st(){i.disable(3042),i.disable(2884),i.disable(2929),i.disable(32823),i.disable(3089),i.disable(2960),i.disable(32926),i.blendEquation(32774),i.blendFunc(1,0),i.blendFuncSeparate(1,0,1,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(513),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(519,0,4294967295),i.stencilOp(7680,7680,7680),i.clearStencil(0),i.cullFace(1029),i.frontFace(2305),i.polygonOffset(0,0),i.activeTexture(33984),i.bindFramebuffer(36160,null),n===!0&&(i.bindFramebuffer(36009,null),i.bindFramebuffer(36008,null)),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),f={},fe=null,de={},d={},g=new WeakMap,p=[],m=null,_=!1,M=null,x=null,w=null,S=null,P=null,I=null,v=null,A=!1,R=null,j=null,Q=null,k=null,z=null,oe.set(0,0,i.canvas.width,i.canvas.height),ve.set(0,0,i.canvas.width,i.canvas.height),a.reset(),l.reset(),c.reset()}return{buffers:{color:a,depth:l,stencil:c},enable:ee,disable:ce,bindFramebuffer:ge,drawBuffers:pe,useProgram:Me,setBlending:F,setMaterial:H,setFlipSided:B,setCullFace:te,setLineWidth:se,setPolygonOffset:Z,setScissorTest:he,activeTexture:ne,bindTexture:E,unbindTexture:b,compressedTexImage2D:U,compressedTexImage3D:K,texImage2D:Ae,texImage3D:Te,updateUBOMapping:Fe,uniformBlockBinding:Ve,texStorage2D:G,texStorage3D:we,texSubImage2D:re,texSubImage3D:me,compressedTexSubImage2D:be,compressedTexSubImage3D:L,scissor:Le,viewport:Ee,reset:st}}function Bw(i,e,t,n,s,r,o){const a=s.isWebGL2,l=s.maxTextures,c=s.maxCubemapSize,u=s.maxTextureSize,h=s.maxSamples,f=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,d=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),g=new WeakMap;let p;const m=new WeakMap;let _=!1;try{_=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function M(E,b){return _?new OffscreenCanvas(E,b):Ar("canvas")}function x(E,b,U,K){let re=1;if((E.width>K||E.height>K)&&(re=K/Math.max(E.width,E.height)),re<1||b===!0)if(typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&E instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&E instanceof ImageBitmap){const me=b?ko:Math.floor,be=me(re*E.width),L=me(re*E.height);p===void 0&&(p=M(be,L));const G=U?M(be,L):p;return G.width=be,G.height=L,G.getContext("2d").drawImage(E,0,0,be,L),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+E.width+"x"+E.height+") to ("+be+"x"+L+")."),G}else return"data"in E&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+E.width+"x"+E.height+")."),E;return E}function w(E){return kl(E.width)&&kl(E.height)}function S(E){return a?!1:E.wrapS!==Qt||E.wrapT!==Qt||E.minFilter!==Et&&E.minFilter!==rn}function P(E,b){return E.generateMipmaps&&b&&E.minFilter!==Et&&E.minFilter!==rn}function I(E){i.generateMipmap(E)}function v(E,b,U,K,re=!1){if(a===!1)return b;if(E!==null){if(i[E]!==void 0)return i[E];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+E+"'")}let me=b;return b===6403&&(U===5126&&(me=33326),U===5131&&(me=33325),U===5121&&(me=33321)),b===33319&&(U===5126&&(me=33328),U===5131&&(me=33327),U===5121&&(me=33323)),b===6408&&(U===5126&&(me=34836),U===5131&&(me=34842),U===5121&&(me=K===nt&&re===!1?35907:32856),U===32819&&(me=32854),U===32820&&(me=32855)),(me===33325||me===33326||me===33327||me===33328||me===34842||me===34836)&&e.get("EXT_color_buffer_float"),me}function A(E,b,U){return P(E,U)===!0||E.isFramebufferTexture&&E.minFilter!==Et&&E.minFilter!==rn?Math.log2(Math.max(b.width,b.height))+1:E.mipmaps!==void 0&&E.mipmaps.length>0?E.mipmaps.length:E.isCompressedTexture&&Array.isArray(E.image)?b.mipmaps.length:1}function R(E){return E===Et||E===Vu||E===Ta?9728:9729}function j(E){const b=E.target;b.removeEventListener("dispose",j),k(b),b.isVideoTexture&&g.delete(b)}function Q(E){const b=E.target;b.removeEventListener("dispose",Q),J(b)}function k(E){const b=n.get(E);if(b.__webglInit===void 0)return;const U=E.source,K=m.get(U);if(K){const re=K[b.__cacheKey];re.usedTimes--,re.usedTimes===0&&z(E),Object.keys(K).length===0&&m.delete(U)}n.remove(E)}function z(E){const b=n.get(E);i.deleteTexture(b.__webglTexture);const U=E.source,K=m.get(U);delete K[b.__cacheKey],o.memory.textures--}function J(E){const b=E.texture,U=n.get(E),K=n.get(b);if(K.__webglTexture!==void 0&&(i.deleteTexture(K.__webglTexture),o.memory.textures--),E.depthTexture&&E.depthTexture.dispose(),E.isWebGLCubeRenderTarget)for(let re=0;re<6;re++)i.deleteFramebuffer(U.__webglFramebuffer[re]),U.__webglDepthbuffer&&i.deleteRenderbuffer(U.__webglDepthbuffer[re]);else{if(i.deleteFramebuffer(U.__webglFramebuffer),U.__webglDepthbuffer&&i.deleteRenderbuffer(U.__webglDepthbuffer),U.__webglMultisampledFramebuffer&&i.deleteFramebuffer(U.__webglMultisampledFramebuffer),U.__webglColorRenderbuffer)for(let re=0;re<U.__webglColorRenderbuffer.length;re++)U.__webglColorRenderbuffer[re]&&i.deleteRenderbuffer(U.__webglColorRenderbuffer[re]);U.__webglDepthRenderbuffer&&i.deleteRenderbuffer(U.__webglDepthRenderbuffer)}if(E.isWebGLMultipleRenderTargets)for(let re=0,me=b.length;re<me;re++){const be=n.get(b[re]);be.__webglTexture&&(i.deleteTexture(be.__webglTexture),o.memory.textures--),n.remove(b[re])}n.remove(b),n.remove(E)}let $=0;function ie(){$=0}function Y(){const E=$;return E>=l&&console.warn("THREE.WebGLTextures: Trying to use "+E+" texture units while this GPU supports only "+l),$+=1,E}function fe(E){const b=[];return b.push(E.wrapS),b.push(E.wrapT),b.push(E.wrapR||0),b.push(E.magFilter),b.push(E.minFilter),b.push(E.anisotropy),b.push(E.internalFormat),b.push(E.format),b.push(E.type),b.push(E.generateMipmaps),b.push(E.premultiplyAlpha),b.push(E.flipY),b.push(E.unpackAlignment),b.push(E.encoding),b.join()}function de(E,b){const U=n.get(E);if(E.isVideoTexture&&he(E),E.isRenderTargetTexture===!1&&E.version>0&&U.__version!==E.version){const K=E.image;if(K===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(K.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ce(U,E,b);return}}t.bindTexture(3553,U.__webglTexture,33984+b)}function ye(E,b){const U=n.get(E);if(E.version>0&&U.__version!==E.version){ce(U,E,b);return}t.bindTexture(35866,U.__webglTexture,33984+b)}function W(E,b){const U=n.get(E);if(E.version>0&&U.__version!==E.version){ce(U,E,b);return}t.bindTexture(32879,U.__webglTexture,33984+b)}function oe(E,b){const U=n.get(E);if(E.version>0&&U.__version!==E.version){ge(U,E,b);return}t.bindTexture(34067,U.__webglTexture,33984+b)}const ve={[br]:10497,[Qt]:33071,[Nl]:33648},N={[Et]:9728,[Vu]:9984,[Ta]:9986,[rn]:9729,[_x]:9985,[wr]:9987};function O(E,b,U){if(U?(i.texParameteri(E,10242,ve[b.wrapS]),i.texParameteri(E,10243,ve[b.wrapT]),(E===32879||E===35866)&&i.texParameteri(E,32882,ve[b.wrapR]),i.texParameteri(E,10240,N[b.magFilter]),i.texParameteri(E,10241,N[b.minFilter])):(i.texParameteri(E,10242,33071),i.texParameteri(E,10243,33071),(E===32879||E===35866)&&i.texParameteri(E,32882,33071),(b.wrapS!==Qt||b.wrapT!==Qt)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),i.texParameteri(E,10240,R(b.magFilter)),i.texParameteri(E,10241,R(b.minFilter)),b.minFilter!==Et&&b.minFilter!==rn&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),e.has("EXT_texture_filter_anisotropic")===!0){const K=e.get("EXT_texture_filter_anisotropic");if(b.magFilter===Et||b.minFilter!==Ta&&b.minFilter!==wr||b.type===hi&&e.has("OES_texture_float_linear")===!1||a===!1&&b.type===Sr&&e.has("OES_texture_half_float_linear")===!1)return;(b.anisotropy>1||n.get(b).__currentAnisotropy)&&(i.texParameterf(E,K.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,s.getMaxAnisotropy())),n.get(b).__currentAnisotropy=b.anisotropy)}}function ee(E,b){let U=!1;E.__webglInit===void 0&&(E.__webglInit=!0,b.addEventListener("dispose",j));const K=b.source;let re=m.get(K);re===void 0&&(re={},m.set(K,re));const me=fe(b);if(me!==E.__cacheKey){re[me]===void 0&&(re[me]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,U=!0),re[me].usedTimes++;const be=re[E.__cacheKey];be!==void 0&&(re[E.__cacheKey].usedTimes--,be.usedTimes===0&&z(b)),E.__cacheKey=me,E.__webglTexture=re[me].texture}return U}function ce(E,b,U){let K=3553;(b.isDataArrayTexture||b.isCompressedArrayTexture)&&(K=35866),b.isData3DTexture&&(K=32879);const re=ee(E,b),me=b.source;t.bindTexture(K,E.__webglTexture,33984+U);const be=n.get(me);if(me.version!==be.__version||re===!0){t.activeTexture(33984+U),i.pixelStorei(37440,b.flipY),i.pixelStorei(37441,b.premultiplyAlpha),i.pixelStorei(3317,b.unpackAlignment),i.pixelStorei(37443,0);const L=S(b)&&w(b.image)===!1;let G=x(b.image,L,!1,u);G=ne(b,G);const we=w(G)||a,Ae=r.convert(b.format,b.encoding);let Te=r.convert(b.type),Le=v(b.internalFormat,Ae,Te,b.encoding,b.isVideoTexture);O(K,b,we);let Ee;const Fe=b.mipmaps,Ve=a&&b.isVideoTexture!==!0,st=be.__version===void 0||re===!0,V=A(b,G,we);if(b.isDepthTexture)Le=6402,a?b.type===hi?Le=36012:b.type===Ni?Le=33190:b.type===Ts?Le=35056:Le=33189:b.type===hi&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),b.format===Vi&&Le===6402&&b.type!==op&&b.type!==Ni&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),b.type=Ni,Te=r.convert(b.type)),b.format===Fs&&Le===6402&&(Le=34041,b.type!==Ts&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),b.type=Ts,Te=r.convert(b.type))),st&&(Ve?t.texStorage2D(3553,1,Le,G.width,G.height):t.texImage2D(3553,0,Le,G.width,G.height,0,Ae,Te,null));else if(b.isDataTexture)if(Fe.length>0&&we){Ve&&st&&t.texStorage2D(3553,V,Le,Fe[0].width,Fe[0].height);for(let ae=0,_e=Fe.length;ae<_e;ae++)Ee=Fe[ae],Ve?t.texSubImage2D(3553,ae,0,0,Ee.width,Ee.height,Ae,Te,Ee.data):t.texImage2D(3553,ae,Le,Ee.width,Ee.height,0,Ae,Te,Ee.data);b.generateMipmaps=!1}else Ve?(st&&t.texStorage2D(3553,V,Le,G.width,G.height),t.texSubImage2D(3553,0,0,0,G.width,G.height,Ae,Te,G.data)):t.texImage2D(3553,0,Le,G.width,G.height,0,Ae,Te,G.data);else if(b.isCompressedTexture)if(b.isCompressedArrayTexture){Ve&&st&&t.texStorage3D(35866,V,Le,Fe[0].width,Fe[0].height,G.depth);for(let ae=0,_e=Fe.length;ae<_e;ae++)Ee=Fe[ae],b.format!==an?Ae!==null?Ve?t.compressedTexSubImage3D(35866,ae,0,0,0,Ee.width,Ee.height,G.depth,Ae,Ee.data,0,0):t.compressedTexImage3D(35866,ae,Le,Ee.width,Ee.height,G.depth,0,Ee.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ve?t.texSubImage3D(35866,ae,0,0,0,Ee.width,Ee.height,G.depth,Ae,Te,Ee.data):t.texImage3D(35866,ae,Le,Ee.width,Ee.height,G.depth,0,Ae,Te,Ee.data)}else{Ve&&st&&t.texStorage2D(3553,V,Le,Fe[0].width,Fe[0].height);for(let ae=0,_e=Fe.length;ae<_e;ae++)Ee=Fe[ae],b.format!==an?Ae!==null?Ve?t.compressedTexSubImage2D(3553,ae,0,0,Ee.width,Ee.height,Ae,Ee.data):t.compressedTexImage2D(3553,ae,Le,Ee.width,Ee.height,0,Ee.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ve?t.texSubImage2D(3553,ae,0,0,Ee.width,Ee.height,Ae,Te,Ee.data):t.texImage2D(3553,ae,Le,Ee.width,Ee.height,0,Ae,Te,Ee.data)}else if(b.isDataArrayTexture)Ve?(st&&t.texStorage3D(35866,V,Le,G.width,G.height,G.depth),t.texSubImage3D(35866,0,0,0,0,G.width,G.height,G.depth,Ae,Te,G.data)):t.texImage3D(35866,0,Le,G.width,G.height,G.depth,0,Ae,Te,G.data);else if(b.isData3DTexture)Ve?(st&&t.texStorage3D(32879,V,Le,G.width,G.height,G.depth),t.texSubImage3D(32879,0,0,0,0,G.width,G.height,G.depth,Ae,Te,G.data)):t.texImage3D(32879,0,Le,G.width,G.height,G.depth,0,Ae,Te,G.data);else if(b.isFramebufferTexture){if(st)if(Ve)t.texStorage2D(3553,V,Le,G.width,G.height);else{let ae=G.width,_e=G.height;for(let Ce=0;Ce<V;Ce++)t.texImage2D(3553,Ce,Le,ae,_e,0,Ae,Te,null),ae>>=1,_e>>=1}}else if(Fe.length>0&&we){Ve&&st&&t.texStorage2D(3553,V,Le,Fe[0].width,Fe[0].height);for(let ae=0,_e=Fe.length;ae<_e;ae++)Ee=Fe[ae],Ve?t.texSubImage2D(3553,ae,0,0,Ae,Te,Ee):t.texImage2D(3553,ae,Le,Ae,Te,Ee);b.generateMipmaps=!1}else Ve?(st&&t.texStorage2D(3553,V,Le,G.width,G.height),t.texSubImage2D(3553,0,0,0,Ae,Te,G)):t.texImage2D(3553,0,Le,Ae,Te,G);P(b,we)&&I(K),be.__version=me.version,b.onUpdate&&b.onUpdate(b)}E.__version=b.version}function ge(E,b,U){if(b.image.length!==6)return;const K=ee(E,b),re=b.source;t.bindTexture(34067,E.__webglTexture,33984+U);const me=n.get(re);if(re.version!==me.__version||K===!0){t.activeTexture(33984+U),i.pixelStorei(37440,b.flipY),i.pixelStorei(37441,b.premultiplyAlpha),i.pixelStorei(3317,b.unpackAlignment),i.pixelStorei(37443,0);const be=b.isCompressedTexture||b.image[0].isCompressedTexture,L=b.image[0]&&b.image[0].isDataTexture,G=[];for(let ae=0;ae<6;ae++)!be&&!L?G[ae]=x(b.image[ae],!1,!0,c):G[ae]=L?b.image[ae].image:b.image[ae],G[ae]=ne(b,G[ae]);const we=G[0],Ae=w(we)||a,Te=r.convert(b.format,b.encoding),Le=r.convert(b.type),Ee=v(b.internalFormat,Te,Le,b.encoding),Fe=a&&b.isVideoTexture!==!0,Ve=me.__version===void 0||K===!0;let st=A(b,we,Ae);O(34067,b,Ae);let V;if(be){Fe&&Ve&&t.texStorage2D(34067,st,Ee,we.width,we.height);for(let ae=0;ae<6;ae++){V=G[ae].mipmaps;for(let _e=0;_e<V.length;_e++){const Ce=V[_e];b.format!==an?Te!==null?Fe?t.compressedTexSubImage2D(34069+ae,_e,0,0,Ce.width,Ce.height,Te,Ce.data):t.compressedTexImage2D(34069+ae,_e,Ee,Ce.width,Ce.height,0,Ce.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Fe?t.texSubImage2D(34069+ae,_e,0,0,Ce.width,Ce.height,Te,Le,Ce.data):t.texImage2D(34069+ae,_e,Ee,Ce.width,Ce.height,0,Te,Le,Ce.data)}}}else{V=b.mipmaps,Fe&&Ve&&(V.length>0&&st++,t.texStorage2D(34067,st,Ee,G[0].width,G[0].height));for(let ae=0;ae<6;ae++)if(L){Fe?t.texSubImage2D(34069+ae,0,0,0,G[ae].width,G[ae].height,Te,Le,G[ae].data):t.texImage2D(34069+ae,0,Ee,G[ae].width,G[ae].height,0,Te,Le,G[ae].data);for(let _e=0;_e<V.length;_e++){const Re=V[_e].image[ae].image;Fe?t.texSubImage2D(34069+ae,_e+1,0,0,Re.width,Re.height,Te,Le,Re.data):t.texImage2D(34069+ae,_e+1,Ee,Re.width,Re.height,0,Te,Le,Re.data)}}else{Fe?t.texSubImage2D(34069+ae,0,0,0,Te,Le,G[ae]):t.texImage2D(34069+ae,0,Ee,Te,Le,G[ae]);for(let _e=0;_e<V.length;_e++){const Ce=V[_e];Fe?t.texSubImage2D(34069+ae,_e+1,0,0,Te,Le,Ce.image[ae]):t.texImage2D(34069+ae,_e+1,Ee,Te,Le,Ce.image[ae])}}}P(b,Ae)&&I(34067),me.__version=re.version,b.onUpdate&&b.onUpdate(b)}E.__version=b.version}function pe(E,b,U,K,re){const me=r.convert(U.format,U.encoding),be=r.convert(U.type),L=v(U.internalFormat,me,be,U.encoding);n.get(b).__hasExternalTextures||(re===32879||re===35866?t.texImage3D(re,0,L,b.width,b.height,b.depth,0,me,be,null):t.texImage2D(re,0,L,b.width,b.height,0,me,be,null)),t.bindFramebuffer(36160,E),Z(b)?f.framebufferTexture2DMultisampleEXT(36160,K,re,n.get(U).__webglTexture,0,se(b)):(re===3553||re>=34069&&re<=34074)&&i.framebufferTexture2D(36160,K,re,n.get(U).__webglTexture,0),t.bindFramebuffer(36160,null)}function Me(E,b,U){if(i.bindRenderbuffer(36161,E),b.depthBuffer&&!b.stencilBuffer){let K=33189;if(U||Z(b)){const re=b.depthTexture;re&&re.isDepthTexture&&(re.type===hi?K=36012:re.type===Ni&&(K=33190));const me=se(b);Z(b)?f.renderbufferStorageMultisampleEXT(36161,me,K,b.width,b.height):i.renderbufferStorageMultisample(36161,me,K,b.width,b.height)}else i.renderbufferStorage(36161,K,b.width,b.height);i.framebufferRenderbuffer(36160,36096,36161,E)}else if(b.depthBuffer&&b.stencilBuffer){const K=se(b);U&&Z(b)===!1?i.renderbufferStorageMultisample(36161,K,35056,b.width,b.height):Z(b)?f.renderbufferStorageMultisampleEXT(36161,K,35056,b.width,b.height):i.renderbufferStorage(36161,34041,b.width,b.height),i.framebufferRenderbuffer(36160,33306,36161,E)}else{const K=b.isWebGLMultipleRenderTargets===!0?b.texture:[b.texture];for(let re=0;re<K.length;re++){const me=K[re],be=r.convert(me.format,me.encoding),L=r.convert(me.type),G=v(me.internalFormat,be,L,me.encoding),we=se(b);U&&Z(b)===!1?i.renderbufferStorageMultisample(36161,we,G,b.width,b.height):Z(b)?f.renderbufferStorageMultisampleEXT(36161,we,G,b.width,b.height):i.renderbufferStorage(36161,G,b.width,b.height)}}i.bindRenderbuffer(36161,null)}function y(E,b){if(b&&b.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(36160,E),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(b.depthTexture).__webglTexture||b.depthTexture.image.width!==b.width||b.depthTexture.image.height!==b.height)&&(b.depthTexture.image.width=b.width,b.depthTexture.image.height=b.height,b.depthTexture.needsUpdate=!0),de(b.depthTexture,0);const K=n.get(b.depthTexture).__webglTexture,re=se(b);if(b.depthTexture.format===Vi)Z(b)?f.framebufferTexture2DMultisampleEXT(36160,36096,3553,K,0,re):i.framebufferTexture2D(36160,36096,3553,K,0);else if(b.depthTexture.format===Fs)Z(b)?f.framebufferTexture2DMultisampleEXT(36160,33306,3553,K,0,re):i.framebufferTexture2D(36160,33306,3553,K,0);else throw new Error("Unknown depthTexture format")}function T(E){const b=n.get(E),U=E.isWebGLCubeRenderTarget===!0;if(E.depthTexture&&!b.__autoAllocateDepthBuffer){if(U)throw new Error("target.depthTexture not supported in Cube render targets");y(b.__webglFramebuffer,E)}else if(U){b.__webglDepthbuffer=[];for(let K=0;K<6;K++)t.bindFramebuffer(36160,b.__webglFramebuffer[K]),b.__webglDepthbuffer[K]=i.createRenderbuffer(),Me(b.__webglDepthbuffer[K],E,!1)}else t.bindFramebuffer(36160,b.__webglFramebuffer),b.__webglDepthbuffer=i.createRenderbuffer(),Me(b.__webglDepthbuffer,E,!1);t.bindFramebuffer(36160,null)}function F(E,b,U){const K=n.get(E);b!==void 0&&pe(K.__webglFramebuffer,E,E.texture,36064,3553),U!==void 0&&T(E)}function H(E){const b=E.texture,U=n.get(E),K=n.get(b);E.addEventListener("dispose",Q),E.isWebGLMultipleRenderTargets!==!0&&(K.__webglTexture===void 0&&(K.__webglTexture=i.createTexture()),K.__version=b.version,o.memory.textures++);const re=E.isWebGLCubeRenderTarget===!0,me=E.isWebGLMultipleRenderTargets===!0,be=w(E)||a;if(re){U.__webglFramebuffer=[];for(let L=0;L<6;L++)U.__webglFramebuffer[L]=i.createFramebuffer()}else{if(U.__webglFramebuffer=i.createFramebuffer(),me)if(s.drawBuffers){const L=E.texture;for(let G=0,we=L.length;G<we;G++){const Ae=n.get(L[G]);Ae.__webglTexture===void 0&&(Ae.__webglTexture=i.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&E.samples>0&&Z(E)===!1){const L=me?b:[b];U.__webglMultisampledFramebuffer=i.createFramebuffer(),U.__webglColorRenderbuffer=[],t.bindFramebuffer(36160,U.__webglMultisampledFramebuffer);for(let G=0;G<L.length;G++){const we=L[G];U.__webglColorRenderbuffer[G]=i.createRenderbuffer(),i.bindRenderbuffer(36161,U.__webglColorRenderbuffer[G]);const Ae=r.convert(we.format,we.encoding),Te=r.convert(we.type),Le=v(we.internalFormat,Ae,Te,we.encoding,E.isXRRenderTarget===!0),Ee=se(E);i.renderbufferStorageMultisample(36161,Ee,Le,E.width,E.height),i.framebufferRenderbuffer(36160,36064+G,36161,U.__webglColorRenderbuffer[G])}i.bindRenderbuffer(36161,null),E.depthBuffer&&(U.__webglDepthRenderbuffer=i.createRenderbuffer(),Me(U.__webglDepthRenderbuffer,E,!0)),t.bindFramebuffer(36160,null)}}if(re){t.bindTexture(34067,K.__webglTexture),O(34067,b,be);for(let L=0;L<6;L++)pe(U.__webglFramebuffer[L],E,b,36064,34069+L);P(b,be)&&I(34067),t.unbindTexture()}else if(me){const L=E.texture;for(let G=0,we=L.length;G<we;G++){const Ae=L[G],Te=n.get(Ae);t.bindTexture(3553,Te.__webglTexture),O(3553,Ae,be),pe(U.__webglFramebuffer,E,Ae,36064+G,3553),P(Ae,be)&&I(3553)}t.unbindTexture()}else{let L=3553;(E.isWebGL3DRenderTarget||E.isWebGLArrayRenderTarget)&&(a?L=E.isWebGL3DRenderTarget?32879:35866:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(L,K.__webglTexture),O(L,b,be),pe(U.__webglFramebuffer,E,b,36064,L),P(b,be)&&I(L),t.unbindTexture()}E.depthBuffer&&T(E)}function B(E){const b=w(E)||a,U=E.isWebGLMultipleRenderTargets===!0?E.texture:[E.texture];for(let K=0,re=U.length;K<re;K++){const me=U[K];if(P(me,b)){const be=E.isWebGLCubeRenderTarget?34067:3553,L=n.get(me).__webglTexture;t.bindTexture(be,L),I(be),t.unbindTexture()}}}function te(E){if(a&&E.samples>0&&Z(E)===!1){const b=E.isWebGLMultipleRenderTargets?E.texture:[E.texture],U=E.width,K=E.height;let re=16384;const me=[],be=E.stencilBuffer?33306:36096,L=n.get(E),G=E.isWebGLMultipleRenderTargets===!0;if(G)for(let we=0;we<b.length;we++)t.bindFramebuffer(36160,L.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(36160,36064+we,36161,null),t.bindFramebuffer(36160,L.__webglFramebuffer),i.framebufferTexture2D(36009,36064+we,3553,null,0);t.bindFramebuffer(36008,L.__webglMultisampledFramebuffer),t.bindFramebuffer(36009,L.__webglFramebuffer);for(let we=0;we<b.length;we++){me.push(36064+we),E.depthBuffer&&me.push(be);const Ae=L.__ignoreDepthValues!==void 0?L.__ignoreDepthValues:!1;if(Ae===!1&&(E.depthBuffer&&(re|=256),E.stencilBuffer&&(re|=1024)),G&&i.framebufferRenderbuffer(36008,36064,36161,L.__webglColorRenderbuffer[we]),Ae===!0&&(i.invalidateFramebuffer(36008,[be]),i.invalidateFramebuffer(36009,[be])),G){const Te=n.get(b[we]).__webglTexture;i.framebufferTexture2D(36009,36064,3553,Te,0)}i.blitFramebuffer(0,0,U,K,0,0,U,K,re,9728),d&&i.invalidateFramebuffer(36008,me)}if(t.bindFramebuffer(36008,null),t.bindFramebuffer(36009,null),G)for(let we=0;we<b.length;we++){t.bindFramebuffer(36160,L.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(36160,36064+we,36161,L.__webglColorRenderbuffer[we]);const Ae=n.get(b[we]).__webglTexture;t.bindFramebuffer(36160,L.__webglFramebuffer),i.framebufferTexture2D(36009,36064+we,3553,Ae,0)}t.bindFramebuffer(36009,L.__webglMultisampledFramebuffer)}}function se(E){return Math.min(h,E.samples)}function Z(E){const b=n.get(E);return a&&E.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}function he(E){const b=o.render.frame;g.get(E)!==b&&(g.set(E,b),E.update())}function ne(E,b){const U=E.encoding,K=E.format,re=E.type;return E.isCompressedTexture===!0||E.isVideoTexture===!0||E.format===Ul||U!==Wi&&(U===nt?a===!1?e.has("EXT_sRGB")===!0&&K===an?(E.format=Ul,E.minFilter=rn,E.generateMipmaps=!1):b=up.sRGBToLinear(b):(K!==an||re!==Gi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture encoding:",U)),b}this.allocateTextureUnit=Y,this.resetTextureUnits=ie,this.setTexture2D=de,this.setTexture2DArray=ye,this.setTexture3D=W,this.setTextureCube=oe,this.rebindTextures=F,this.setupRenderTarget=H,this.updateRenderTargetMipmap=B,this.updateMultisampleRenderTarget=te,this.setupDepthRenderbuffer=T,this.setupFrameBufferTexture=pe,this.useMultisampledRTT=Z}function Vw(i,e,t){const n=t.isWebGL2;function s(r,o=null){let a;if(r===Gi)return 5121;if(r===Mx)return 32819;if(r===bx)return 32820;if(r===xx)return 5120;if(r===vx)return 5122;if(r===op)return 5123;if(r===yx)return 5124;if(r===Ni)return 5125;if(r===hi)return 5126;if(r===Sr)return n?5131:(a=e.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(r===wx)return 6406;if(r===an)return 6408;if(r===Sx)return 6409;if(r===Tx)return 6410;if(r===Vi)return 6402;if(r===Fs)return 34041;if(r===Ul)return a=e.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(r===Ex)return 6403;if(r===Ax)return 36244;if(r===Cx)return 33319;if(r===Px)return 33320;if(r===Lx)return 36249;if(r===Ea||r===Aa||r===Ca||r===Pa)if(o===nt)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(r===Ea)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===Aa)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===Ca)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===Pa)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(r===Ea)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===Aa)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===Ca)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===Pa)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===Hu||r===Gu||r===Wu||r===Xu)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(r===Hu)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===Gu)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===Wu)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===Xu)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===Rx)return a=e.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(r===ju||r===qu)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(r===ju)return o===nt?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(r===qu)return o===nt?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===Yu||r===Zu||r===$u||r===Ku||r===Ju||r===Qu||r===eh||r===th||r===nh||r===ih||r===sh||r===rh||r===oh||r===ah)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(r===Yu)return o===nt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===Zu)return o===nt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===$u)return o===nt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===Ku)return o===nt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===Ju)return o===nt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===Qu)return o===nt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===eh)return o===nt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===th)return o===nt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===nh)return o===nt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===ih)return o===nt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===sh)return o===nt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===rh)return o===nt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===oh)return o===nt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===ah)return o===nt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===La)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(r===La)return o===nt?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT}else return null;if(r===Dx||r===lh||r===ch||r===uh)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(r===La)return a.COMPRESSED_RED_RGTC1_EXT;if(r===lh)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===ch)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===uh)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===Ts?n?34042:(a=e.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):i[r]!==void 0?i[r]:null}return{convert:s}}class Hw extends kt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}let Ui=class extends ot{constructor(){super(),this.isGroup=!0,this.type="Group"}};const Gw={type:"move"};class nl{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ui,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ui,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new D,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new D),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ui,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new D,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new D),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const p of e.hand.values()){const m=t.getJointPose(p,n),_=this._getHandJoint(c,p);m!==null&&(_.matrix.fromArray(m.transform.matrix),_.matrix.decompose(_.position,_.rotation,_.scale),_.jointRadius=m.radius),_.visible=m!==null}const u=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],f=u.position.distanceTo(h.position),d=.02,g=.005;c.inputState.pinching&&f>d+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=d-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Gw)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new Ui;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}class Ww extends Ct{constructor(e,t,n,s,r,o,a,l,c,u){if(u=u!==void 0?u:Vi,u!==Vi&&u!==Fs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===Vi&&(n=Ni),n===void 0&&u===Fs&&(n=Ts),super(null,s,r,o,a,l,u,n,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:Et,this.minFilter=l!==void 0?l:Et,this.flipY=!1,this.generateMipmaps=!1}}class Xw extends qi{constructor(e,t){super();const n=this;let s=null,r=1,o=null,a="local-floor",l=1,c=null,u=null,h=null,f=null,d=null,g=null;const p=t.getContextAttributes();let m=null,_=null;const M=[],x=[],w=new Set,S=new Map,P=new kt;P.layers.enable(1),P.viewport=new Qe;const I=new kt;I.layers.enable(2),I.viewport=new Qe;const v=[P,I],A=new Hw;A.layers.enable(1),A.layers.enable(2);let R=null,j=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(W){let oe=M[W];return oe===void 0&&(oe=new nl,M[W]=oe),oe.getTargetRaySpace()},this.getControllerGrip=function(W){let oe=M[W];return oe===void 0&&(oe=new nl,M[W]=oe),oe.getGripSpace()},this.getHand=function(W){let oe=M[W];return oe===void 0&&(oe=new nl,M[W]=oe),oe.getHandSpace()};function Q(W){const oe=x.indexOf(W.inputSource);if(oe===-1)return;const ve=M[oe];ve!==void 0&&ve.dispatchEvent({type:W.type,data:W.inputSource})}function k(){s.removeEventListener("select",Q),s.removeEventListener("selectstart",Q),s.removeEventListener("selectend",Q),s.removeEventListener("squeeze",Q),s.removeEventListener("squeezestart",Q),s.removeEventListener("squeezeend",Q),s.removeEventListener("end",k),s.removeEventListener("inputsourceschange",z);for(let W=0;W<M.length;W++){const oe=x[W];oe!==null&&(x[W]=null,M[W].disconnect(oe))}R=null,j=null,e.setRenderTarget(m),d=null,f=null,h=null,s=null,_=null,ye.stop(),n.isPresenting=!1,n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(W){r=W,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(W){a=W,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(W){c=W},this.getBaseLayer=function(){return f!==null?f:d},this.getBinding=function(){return h},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(W){if(s=W,s!==null){if(m=e.getRenderTarget(),s.addEventListener("select",Q),s.addEventListener("selectstart",Q),s.addEventListener("selectend",Q),s.addEventListener("squeeze",Q),s.addEventListener("squeezestart",Q),s.addEventListener("squeezeend",Q),s.addEventListener("end",k),s.addEventListener("inputsourceschange",z),p.xrCompatible!==!0&&await t.makeXRCompatible(),s.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const oe={antialias:s.renderState.layers===void 0?p.antialias:!0,alpha:p.alpha,depth:p.depth,stencil:p.stencil,framebufferScaleFactor:r};d=new XRWebGLLayer(s,t,oe),s.updateRenderState({baseLayer:d}),_=new Xi(d.framebufferWidth,d.framebufferHeight,{format:an,type:Gi,encoding:e.outputEncoding,stencilBuffer:p.stencil})}else{let oe=null,ve=null,N=null;p.depth&&(N=p.stencil?35056:33190,oe=p.stencil?Fs:Vi,ve=p.stencil?Ts:Ni);const O={colorFormat:32856,depthFormat:N,scaleFactor:r};h=new XRWebGLBinding(s,t),f=h.createProjectionLayer(O),s.updateRenderState({layers:[f]}),_=new Xi(f.textureWidth,f.textureHeight,{format:an,type:Gi,depthTexture:new Ww(f.textureWidth,f.textureHeight,ve,void 0,void 0,void 0,void 0,void 0,void 0,oe),stencilBuffer:p.stencil,encoding:e.outputEncoding,samples:p.antialias?4:0});const ee=e.properties.get(_);ee.__ignoreDepthValues=f.ignoreDepthValues}_.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),ye.setContext(s),ye.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}};function z(W){for(let oe=0;oe<W.removed.length;oe++){const ve=W.removed[oe],N=x.indexOf(ve);N>=0&&(x[N]=null,M[N].disconnect(ve))}for(let oe=0;oe<W.added.length;oe++){const ve=W.added[oe];let N=x.indexOf(ve);if(N===-1){for(let ee=0;ee<M.length;ee++)if(ee>=x.length){x.push(ve),N=ee;break}else if(x[ee]===null){x[ee]=ve,N=ee;break}if(N===-1)break}const O=M[N];O&&O.connect(ve)}}const J=new D,$=new D;function ie(W,oe,ve){J.setFromMatrixPosition(oe.matrixWorld),$.setFromMatrixPosition(ve.matrixWorld);const N=J.distanceTo($),O=oe.projectionMatrix.elements,ee=ve.projectionMatrix.elements,ce=O[14]/(O[10]-1),ge=O[14]/(O[10]+1),pe=(O[9]+1)/O[5],Me=(O[9]-1)/O[5],y=(O[8]-1)/O[0],T=(ee[8]+1)/ee[0],F=ce*y,H=ce*T,B=N/(-y+T),te=B*-y;oe.matrixWorld.decompose(W.position,W.quaternion,W.scale),W.translateX(te),W.translateZ(B),W.matrixWorld.compose(W.position,W.quaternion,W.scale),W.matrixWorldInverse.copy(W.matrixWorld).invert();const se=ce+B,Z=ge+B,he=F-te,ne=H+(N-te),E=pe*ge/Z*se,b=Me*ge/Z*se;W.projectionMatrix.makePerspective(he,ne,E,b,se,Z)}function Y(W,oe){oe===null?W.matrixWorld.copy(W.matrix):W.matrixWorld.multiplyMatrices(oe.matrixWorld,W.matrix),W.matrixWorldInverse.copy(W.matrixWorld).invert()}this.updateCamera=function(W){if(s===null)return;A.near=I.near=P.near=W.near,A.far=I.far=P.far=W.far,(R!==A.near||j!==A.far)&&(s.updateRenderState({depthNear:A.near,depthFar:A.far}),R=A.near,j=A.far);const oe=W.parent,ve=A.cameras;Y(A,oe);for(let O=0;O<ve.length;O++)Y(ve[O],oe);A.matrixWorld.decompose(A.position,A.quaternion,A.scale),W.matrix.copy(A.matrix),W.matrix.decompose(W.position,W.quaternion,W.scale);const N=W.children;for(let O=0,ee=N.length;O<ee;O++)N[O].updateMatrixWorld(!0);ve.length===2?ie(A,P,I):A.projectionMatrix.copy(P.projectionMatrix)},this.getCamera=function(){return A},this.getFoveation=function(){if(!(f===null&&d===null))return l},this.setFoveation=function(W){l=W,f!==null&&(f.fixedFoveation=W),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=W)},this.getPlanes=function(){return w};let fe=null;function de(W,oe){if(u=oe.getViewerPose(c||o),g=oe,u!==null){const ve=u.views;d!==null&&(e.setRenderTargetFramebuffer(_,d.framebuffer),e.setRenderTarget(_));let N=!1;ve.length!==A.cameras.length&&(A.cameras.length=0,N=!0);for(let O=0;O<ve.length;O++){const ee=ve[O];let ce=null;if(d!==null)ce=d.getViewport(ee);else{const pe=h.getViewSubImage(f,ee);ce=pe.viewport,O===0&&(e.setRenderTargetTextures(_,pe.colorTexture,f.ignoreDepthValues?void 0:pe.depthStencilTexture),e.setRenderTarget(_))}let ge=v[O];ge===void 0&&(ge=new kt,ge.layers.enable(O),ge.viewport=new Qe,v[O]=ge),ge.matrix.fromArray(ee.transform.matrix),ge.projectionMatrix.fromArray(ee.projectionMatrix),ge.viewport.set(ce.x,ce.y,ce.width,ce.height),O===0&&A.matrix.copy(ge.matrix),N===!0&&A.cameras.push(ge)}}for(let ve=0;ve<M.length;ve++){const N=x[ve],O=M[ve];N!==null&&O!==void 0&&O.update(N,oe,c||o)}if(fe&&fe(W,oe),oe.detectedPlanes){n.dispatchEvent({type:"planesdetected",data:oe.detectedPlanes});let ve=null;for(const N of w)oe.detectedPlanes.has(N)||(ve===null&&(ve=[]),ve.push(N));if(ve!==null)for(const N of ve)w.delete(N),S.delete(N),n.dispatchEvent({type:"planeremoved",data:N});for(const N of oe.detectedPlanes)if(!w.has(N))w.add(N),S.set(N,oe.lastChangedTime),n.dispatchEvent({type:"planeadded",data:N});else{const O=S.get(N);N.lastChangedTime>O&&(S.set(N,N.lastChangedTime),n.dispatchEvent({type:"planechanged",data:N}))}}g=null}const ye=new gp;ye.setAnimationLoop(de),this.setAnimationLoop=function(W){fe=W},this.dispose=function(){}}}function jw(i,e){function t(p,m){m.color.getRGB(p.fogColor.value,pp(i)),m.isFog?(p.fogNear.value=m.near,p.fogFar.value=m.far):m.isFogExp2&&(p.fogDensity.value=m.density)}function n(p,m,_,M,x){m.isMeshBasicMaterial||m.isMeshLambertMaterial?s(p,m):m.isMeshToonMaterial?(s(p,m),u(p,m)):m.isMeshPhongMaterial?(s(p,m),c(p,m)):m.isMeshStandardMaterial?(s(p,m),h(p,m),m.isMeshPhysicalMaterial&&f(p,m,x)):m.isMeshMatcapMaterial?(s(p,m),d(p,m)):m.isMeshDepthMaterial?s(p,m):m.isMeshDistanceMaterial?(s(p,m),g(p,m)):m.isMeshNormalMaterial?s(p,m):m.isLineBasicMaterial?(r(p,m),m.isLineDashedMaterial&&o(p,m)):m.isPointsMaterial?a(p,m,_,M):m.isSpriteMaterial?l(p,m):m.isShadowMaterial?(p.color.value.copy(m.color),p.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function s(p,m){p.opacity.value=m.opacity,m.color&&p.diffuse.value.copy(m.color),m.emissive&&p.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(p.map.value=m.map),m.alphaMap&&(p.alphaMap.value=m.alphaMap),m.bumpMap&&(p.bumpMap.value=m.bumpMap,p.bumpScale.value=m.bumpScale,m.side===Ht&&(p.bumpScale.value*=-1)),m.displacementMap&&(p.displacementMap.value=m.displacementMap,p.displacementScale.value=m.displacementScale,p.displacementBias.value=m.displacementBias),m.emissiveMap&&(p.emissiveMap.value=m.emissiveMap),m.normalMap&&(p.normalMap.value=m.normalMap,p.normalScale.value.copy(m.normalScale),m.side===Ht&&p.normalScale.value.negate()),m.specularMap&&(p.specularMap.value=m.specularMap),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest);const _=e.get(m).envMap;if(_&&(p.envMap.value=_,p.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=m.reflectivity,p.ior.value=m.ior,p.refractionRatio.value=m.refractionRatio),m.lightMap){p.lightMap.value=m.lightMap;const w=i.physicallyCorrectLights!==!0?Math.PI:1;p.lightMapIntensity.value=m.lightMapIntensity*w}m.aoMap&&(p.aoMap.value=m.aoMap,p.aoMapIntensity.value=m.aoMapIntensity);let M;m.map?M=m.map:m.specularMap?M=m.specularMap:m.displacementMap?M=m.displacementMap:m.normalMap?M=m.normalMap:m.bumpMap?M=m.bumpMap:m.roughnessMap?M=m.roughnessMap:m.metalnessMap?M=m.metalnessMap:m.alphaMap?M=m.alphaMap:m.emissiveMap?M=m.emissiveMap:m.clearcoatMap?M=m.clearcoatMap:m.clearcoatNormalMap?M=m.clearcoatNormalMap:m.clearcoatRoughnessMap?M=m.clearcoatRoughnessMap:m.iridescenceMap?M=m.iridescenceMap:m.iridescenceThicknessMap?M=m.iridescenceThicknessMap:m.specularIntensityMap?M=m.specularIntensityMap:m.specularColorMap?M=m.specularColorMap:m.transmissionMap?M=m.transmissionMap:m.thicknessMap?M=m.thicknessMap:m.sheenColorMap?M=m.sheenColorMap:m.sheenRoughnessMap&&(M=m.sheenRoughnessMap),M!==void 0&&(M.isWebGLRenderTarget&&(M=M.texture),M.matrixAutoUpdate===!0&&M.updateMatrix(),p.uvTransform.value.copy(M.matrix));let x;m.aoMap?x=m.aoMap:m.lightMap&&(x=m.lightMap),x!==void 0&&(x.isWebGLRenderTarget&&(x=x.texture),x.matrixAutoUpdate===!0&&x.updateMatrix(),p.uv2Transform.value.copy(x.matrix))}function r(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity}function o(p,m){p.dashSize.value=m.dashSize,p.totalSize.value=m.dashSize+m.gapSize,p.scale.value=m.scale}function a(p,m,_,M){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.size.value=m.size*_,p.scale.value=M*.5,m.map&&(p.map.value=m.map),m.alphaMap&&(p.alphaMap.value=m.alphaMap),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest);let x;m.map?x=m.map:m.alphaMap&&(x=m.alphaMap),x!==void 0&&(x.matrixAutoUpdate===!0&&x.updateMatrix(),p.uvTransform.value.copy(x.matrix))}function l(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.rotation.value=m.rotation,m.map&&(p.map.value=m.map),m.alphaMap&&(p.alphaMap.value=m.alphaMap),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest);let _;m.map?_=m.map:m.alphaMap&&(_=m.alphaMap),_!==void 0&&(_.matrixAutoUpdate===!0&&_.updateMatrix(),p.uvTransform.value.copy(_.matrix))}function c(p,m){p.specular.value.copy(m.specular),p.shininess.value=Math.max(m.shininess,1e-4)}function u(p,m){m.gradientMap&&(p.gradientMap.value=m.gradientMap)}function h(p,m){p.roughness.value=m.roughness,p.metalness.value=m.metalness,m.roughnessMap&&(p.roughnessMap.value=m.roughnessMap),m.metalnessMap&&(p.metalnessMap.value=m.metalnessMap),e.get(m).envMap&&(p.envMapIntensity.value=m.envMapIntensity)}function f(p,m,_){p.ior.value=m.ior,m.sheen>0&&(p.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),p.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(p.sheenColorMap.value=m.sheenColorMap),m.sheenRoughnessMap&&(p.sheenRoughnessMap.value=m.sheenRoughnessMap)),m.clearcoat>0&&(p.clearcoat.value=m.clearcoat,p.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(p.clearcoatMap.value=m.clearcoatMap),m.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap),m.clearcoatNormalMap&&(p.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),p.clearcoatNormalMap.value=m.clearcoatNormalMap,m.side===Ht&&p.clearcoatNormalScale.value.negate())),m.iridescence>0&&(p.iridescence.value=m.iridescence,p.iridescenceIOR.value=m.iridescenceIOR,p.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(p.iridescenceMap.value=m.iridescenceMap),m.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=m.iridescenceThicknessMap)),m.transmission>0&&(p.transmission.value=m.transmission,p.transmissionSamplerMap.value=_.texture,p.transmissionSamplerSize.value.set(_.width,_.height),m.transmissionMap&&(p.transmissionMap.value=m.transmissionMap),p.thickness.value=m.thickness,m.thicknessMap&&(p.thicknessMap.value=m.thicknessMap),p.attenuationDistance.value=m.attenuationDistance,p.attenuationColor.value.copy(m.attenuationColor)),p.specularIntensity.value=m.specularIntensity,p.specularColor.value.copy(m.specularColor),m.specularIntensityMap&&(p.specularIntensityMap.value=m.specularIntensityMap),m.specularColorMap&&(p.specularColorMap.value=m.specularColorMap)}function d(p,m){m.matcap&&(p.matcap.value=m.matcap)}function g(p,m){p.referencePosition.value.copy(m.referencePosition),p.nearDistance.value=m.nearDistance,p.farDistance.value=m.farDistance}return{refreshFogUniforms:t,refreshMaterialUniforms:n}}function qw(i,e,t,n){let s={},r={},o=[];const a=t.isWebGL2?i.getParameter(35375):0;function l(M,x){const w=x.program;n.uniformBlockBinding(M,w)}function c(M,x){let w=s[M.id];w===void 0&&(g(M),w=u(M),s[M.id]=w,M.addEventListener("dispose",m));const S=x.program;n.updateUBOMapping(M,S);const P=e.render.frame;r[M.id]!==P&&(f(M),r[M.id]=P)}function u(M){const x=h();M.__bindingPointIndex=x;const w=i.createBuffer(),S=M.__size,P=M.usage;return i.bindBuffer(35345,w),i.bufferData(35345,S,P),i.bindBuffer(35345,null),i.bindBufferBase(35345,x,w),w}function h(){for(let M=0;M<a;M++)if(o.indexOf(M)===-1)return o.push(M),M;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(M){const x=s[M.id],w=M.uniforms,S=M.__cache;i.bindBuffer(35345,x);for(let P=0,I=w.length;P<I;P++){const v=w[P];if(d(v,P,S)===!0){const A=v.__offset,R=Array.isArray(v.value)?v.value:[v.value];let j=0;for(let Q=0;Q<R.length;Q++){const k=R[Q],z=p(k);typeof k=="number"?(v.__data[0]=k,i.bufferSubData(35345,A+j,v.__data)):k.isMatrix3?(v.__data[0]=k.elements[0],v.__data[1]=k.elements[1],v.__data[2]=k.elements[2],v.__data[3]=k.elements[0],v.__data[4]=k.elements[3],v.__data[5]=k.elements[4],v.__data[6]=k.elements[5],v.__data[7]=k.elements[0],v.__data[8]=k.elements[6],v.__data[9]=k.elements[7],v.__data[10]=k.elements[8],v.__data[11]=k.elements[0]):(k.toArray(v.__data,j),j+=z.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(35345,A,v.__data)}}i.bindBuffer(35345,null)}function d(M,x,w){const S=M.value;if(w[x]===void 0){if(typeof S=="number")w[x]=S;else{const P=Array.isArray(S)?S:[S],I=[];for(let v=0;v<P.length;v++)I.push(P[v].clone());w[x]=I}return!0}else if(typeof S=="number"){if(w[x]!==S)return w[x]=S,!0}else{const P=Array.isArray(w[x])?w[x]:[w[x]],I=Array.isArray(S)?S:[S];for(let v=0;v<P.length;v++){const A=P[v];if(A.equals(I[v])===!1)return A.copy(I[v]),!0}}return!1}function g(M){const x=M.uniforms;let w=0;const S=16;let P=0;for(let I=0,v=x.length;I<v;I++){const A=x[I],R={boundary:0,storage:0},j=Array.isArray(A.value)?A.value:[A.value];for(let Q=0,k=j.length;Q<k;Q++){const z=j[Q],J=p(z);R.boundary+=J.boundary,R.storage+=J.storage}if(A.__data=new Float32Array(R.storage/Float32Array.BYTES_PER_ELEMENT),A.__offset=w,I>0){P=w%S;const Q=S-P;P!==0&&Q-R.boundary<0&&(w+=S-P,A.__offset=w)}w+=R.storage}return P=w%S,P>0&&(w+=S-P),M.__size=w,M.__cache={},this}function p(M){const x={boundary:0,storage:0};return typeof M=="number"?(x.boundary=4,x.storage=4):M.isVector2?(x.boundary=8,x.storage=8):M.isVector3||M.isColor?(x.boundary=16,x.storage=12):M.isVector4?(x.boundary=16,x.storage=16):M.isMatrix3?(x.boundary=48,x.storage=48):M.isMatrix4?(x.boundary=64,x.storage=64):M.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",M),x}function m(M){const x=M.target;x.removeEventListener("dispose",m);const w=o.indexOf(x.__bindingPointIndex);o.splice(w,1),i.deleteBuffer(s[x.id]),delete s[x.id],delete r[x.id]}function _(){for(const M in s)i.deleteBuffer(s[M]);o=[],s={},r={}}return{bind:l,update:c,dispose:_}}function Yw(){const i=Ar("canvas");return i.style.display="block",i}function Mp(i={}){this.isWebGLRenderer=!0;const e=i.canvas!==void 0?i.canvas:Yw(),t=i.context!==void 0?i.context:null,n=i.depth!==void 0?i.depth:!0,s=i.stencil!==void 0?i.stencil:!0,r=i.antialias!==void 0?i.antialias:!1,o=i.premultipliedAlpha!==void 0?i.premultipliedAlpha:!0,a=i.preserveDrawingBuffer!==void 0?i.preserveDrawingBuffer:!1,l=i.powerPreference!==void 0?i.powerPreference:"default",c=i.failIfMajorPerformanceCaveat!==void 0?i.failIfMajorPerformanceCaveat:!1;let u;t!==null?u=t.getContextAttributes().alpha:u=i.alpha!==void 0?i.alpha:!1;let h=null,f=null;const d=[],g=[];this.domElement=e,this.debug={checkShaderErrors:!0},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.outputEncoding=Wi,this.physicallyCorrectLights=!1,this.toneMapping=Zn,this.toneMappingExposure=1;const p=this;let m=!1,_=0,M=0,x=null,w=-1,S=null;const P=new Qe,I=new Qe;let v=null,A=e.width,R=e.height,j=1,Q=null,k=null;const z=new Qe(0,0,A,R),J=new Qe(0,0,A,R);let $=!1;const ie=new Sc;let Y=!1,fe=!1,de=null;const ye=new De,W=new xe,oe=new D,ve={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function N(){return x===null?j:1}let O=t;function ee(C,q){for(let le=0;le<C.length;le++){const X=C[le],ue=e.getContext(X,q);if(ue!==null)return ue}return null}try{const C={alpha:!0,depth:n,stencil:s,antialias:r,premultipliedAlpha:o,preserveDrawingBuffer:a,powerPreference:l,failIfMajorPerformanceCaveat:c};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${vc}`),e.addEventListener("webglcontextlost",Le,!1),e.addEventListener("webglcontextrestored",Ee,!1),e.addEventListener("webglcontextcreationerror",Fe,!1),O===null){const q=["webgl2","webgl","experimental-webgl"];if(p.isWebGL1Renderer===!0&&q.shift(),O=ee(q,C),O===null)throw ee(q)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}O.getShaderPrecisionFormat===void 0&&(O.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(C){throw console.error("THREE.WebGLRenderer: "+C.message),C}let ce,ge,pe,Me,y,T,F,H,B,te,se,Z,he,ne,E,b,U,K,re,me,be,L,G,we;function Ae(){ce=new rb(O),ge=new QM(O,ce,i),ce.init(ge),L=new Vw(O,ce,ge),pe=new kw(O,ce,ge),Me=new lb,y=new Tw,T=new Bw(O,ce,pe,y,ge,L,Me),F=new tb(p),H=new sb(p),B=new _v(O,ge),G=new KM(O,ce,B,ge),te=new ob(O,B,Me,G),se=new fb(O,te,B,Me),re=new hb(O,ge,T),b=new eb(y),Z=new Sw(p,F,H,ce,ge,G,b),he=new jw(p,y),ne=new Aw,E=new Iw(ce,ge),K=new $M(p,F,H,pe,se,u,o),U=new Uw(p,se,ge),we=new qw(O,Me,ge,pe),me=new JM(O,ce,Me,ge),be=new ab(O,ce,Me,ge),Me.programs=Z.programs,p.capabilities=ge,p.extensions=ce,p.properties=y,p.renderLists=ne,p.shadowMap=U,p.state=pe,p.info=Me}Ae();const Te=new Xw(p,O);this.xr=Te,this.getContext=function(){return O},this.getContextAttributes=function(){return O.getContextAttributes()},this.forceContextLoss=function(){const C=ce.get("WEBGL_lose_context");C&&C.loseContext()},this.forceContextRestore=function(){const C=ce.get("WEBGL_lose_context");C&&C.restoreContext()},this.getPixelRatio=function(){return j},this.setPixelRatio=function(C){C!==void 0&&(j=C,this.setSize(A,R,!1))},this.getSize=function(C){return C.set(A,R)},this.setSize=function(C,q,le){if(Te.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}A=C,R=q,e.width=Math.floor(C*j),e.height=Math.floor(q*j),le!==!1&&(e.style.width=C+"px",e.style.height=q+"px"),this.setViewport(0,0,C,q)},this.getDrawingBufferSize=function(C){return C.set(A*j,R*j).floor()},this.setDrawingBufferSize=function(C,q,le){A=C,R=q,j=le,e.width=Math.floor(C*le),e.height=Math.floor(q*le),this.setViewport(0,0,C,q)},this.getCurrentViewport=function(C){return C.copy(P)},this.getViewport=function(C){return C.copy(z)},this.setViewport=function(C,q,le,X){C.isVector4?z.set(C.x,C.y,C.z,C.w):z.set(C,q,le,X),pe.viewport(P.copy(z).multiplyScalar(j).floor())},this.getScissor=function(C){return C.copy(J)},this.setScissor=function(C,q,le,X){C.isVector4?J.set(C.x,C.y,C.z,C.w):J.set(C,q,le,X),pe.scissor(I.copy(J).multiplyScalar(j).floor())},this.getScissorTest=function(){return $},this.setScissorTest=function(C){pe.setScissorTest($=C)},this.setOpaqueSort=function(C){Q=C},this.setTransparentSort=function(C){k=C},this.getClearColor=function(C){return C.copy(K.getClearColor())},this.setClearColor=function(){K.setClearColor.apply(K,arguments)},this.getClearAlpha=function(){return K.getClearAlpha()},this.setClearAlpha=function(){K.setClearAlpha.apply(K,arguments)},this.clear=function(C=!0,q=!0,le=!0){let X=0;C&&(X|=16384),q&&(X|=256),le&&(X|=1024),O.clear(X)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",Le,!1),e.removeEventListener("webglcontextrestored",Ee,!1),e.removeEventListener("webglcontextcreationerror",Fe,!1),ne.dispose(),E.dispose(),y.dispose(),F.dispose(),H.dispose(),se.dispose(),G.dispose(),we.dispose(),Z.dispose(),Te.dispose(),Te.removeEventListener("sessionstart",Ce),Te.removeEventListener("sessionend",Re),de&&(de.dispose(),de=null),tt.stop()};function Le(C){C.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),m=!0}function Ee(){console.log("THREE.WebGLRenderer: Context Restored."),m=!1;const C=Me.autoReset,q=U.enabled,le=U.autoUpdate,X=U.needsUpdate,ue=U.type;Ae(),Me.autoReset=C,U.enabled=q,U.autoUpdate=le,U.needsUpdate=X,U.type=ue}function Fe(C){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",C.statusMessage)}function Ve(C){const q=C.target;q.removeEventListener("dispose",Ve),st(q)}function st(C){V(C),y.remove(C)}function V(C){const q=y.get(C).programs;q!==void 0&&(q.forEach(function(le){Z.releaseProgram(le)}),C.isShaderMaterial&&Z.releaseShaderCache(C))}this.renderBufferDirect=function(C,q,le,X,ue,Ie){q===null&&(q=ve);const Oe=ue.isMesh&&ue.matrixWorld.determinant()<0,Be=om(C,q,le,X,ue);pe.setMaterial(X,Oe);let He=le.index,$e=1;X.wireframe===!0&&(He=te.getWireframeAttribute(le),$e=2);const Xe=le.drawRange,je=le.attributes.position;let gt=Xe.start*$e,Zt=(Xe.start+Xe.count)*$e;Ie!==null&&(gt=Math.max(gt,Ie.start*$e),Zt=Math.min(Zt,(Ie.start+Ie.count)*$e)),He!==null?(gt=Math.max(gt,0),Zt=Math.min(Zt,He.count)):je!=null&&(gt=Math.max(gt,0),Zt=Math.min(Zt,je.count));const Nn=Zt-gt;if(Nn<0||Nn===1/0)return;G.setup(ue,X,Be,le,He);let Mi,_t=me;if(He!==null&&(Mi=B.get(He),_t=be,_t.setIndex(Mi)),ue.isMesh)X.wireframe===!0?(pe.setLineWidth(X.wireframeLinewidth*N()),_t.setMode(1)):_t.setMode(4);else if(ue.isLine){let qe=X.linewidth;qe===void 0&&(qe=1),pe.setLineWidth(qe*N()),ue.isLineSegments?_t.setMode(1):ue.isLineLoop?_t.setMode(2):_t.setMode(3)}else ue.isPoints?_t.setMode(0):ue.isSprite&&_t.setMode(4);if(ue.isInstancedMesh)_t.renderInstances(gt,Nn,ue.count);else if(le.isInstancedBufferGeometry){const qe=le._maxInstanceCount!==void 0?le._maxInstanceCount:1/0,ua=Math.min(le.instanceCount,qe);_t.renderInstances(gt,Nn,ua)}else _t.render(gt,Nn)},this.compile=function(C,q){function le(X,ue,Ie){X.transparent===!0&&X.side===Bt&&X.forceSinglePass===!1?(X.side=Ht,X.needsUpdate=!0,tn(X,ue,Ie),X.side=dn,X.needsUpdate=!0,tn(X,ue,Ie),X.side=Bt):tn(X,ue,Ie)}f=E.get(C),f.init(),g.push(f),C.traverseVisible(function(X){X.isLight&&X.layers.test(q.layers)&&(f.pushLight(X),X.castShadow&&f.pushShadow(X))}),f.setupLights(p.physicallyCorrectLights),C.traverse(function(X){const ue=X.material;if(ue)if(Array.isArray(ue))for(let Ie=0;Ie<ue.length;Ie++){const Oe=ue[Ie];le(Oe,C,X)}else le(ue,C,X)}),g.pop(),f=null};let ae=null;function _e(C){ae&&ae(C)}function Ce(){tt.stop()}function Re(){tt.start()}const tt=new gp;tt.setAnimationLoop(_e),typeof self<"u"&&tt.setContext(self),this.setAnimationLoop=function(C){ae=C,Te.setAnimationLoop(C),C===null?tt.stop():tt.start()},Te.addEventListener("sessionstart",Ce),Te.addEventListener("sessionend",Re),this.render=function(C,q){if(q!==void 0&&q.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(m===!0)return;C.matrixWorldAutoUpdate===!0&&C.updateMatrixWorld(),q.parent===null&&q.matrixWorldAutoUpdate===!0&&q.updateMatrixWorld(),Te.enabled===!0&&Te.isPresenting===!0&&(Te.cameraAutoUpdate===!0&&Te.updateCamera(q),q=Te.getCamera()),C.isScene===!0&&C.onBeforeRender(p,C,q,x),f=E.get(C,g.length),f.init(),g.push(f),ye.multiplyMatrices(q.projectionMatrix,q.matrixWorldInverse),ie.setFromProjectionMatrix(ye),fe=this.localClippingEnabled,Y=b.init(this.clippingPlanes,fe),h=ne.get(C,d.length),h.init(),d.push(h),wt(C,q,0,p.sortObjects),h.finish(),p.sortObjects===!0&&h.sort(Q,k),Y===!0&&b.beginShadows();const le=f.state.shadowsArray;if(U.render(le,C,q),Y===!0&&b.endShadows(),this.info.autoReset===!0&&this.info.reset(),K.render(h,C),f.setupLights(p.physicallyCorrectLights),q.isArrayCamera){const X=q.cameras;for(let ue=0,Ie=X.length;ue<Ie;ue++){const Oe=X[ue];Pt(h,C,Oe,Oe.viewport)}}else Pt(h,C,q);x!==null&&(T.updateMultisampleRenderTarget(x),T.updateRenderTargetMipmap(x)),C.isScene===!0&&C.onAfterRender(p,C,q),G.resetDefaultState(),w=-1,S=null,g.pop(),g.length>0?f=g[g.length-1]:f=null,d.pop(),d.length>0?h=d[d.length-1]:h=null};function wt(C,q,le,X){if(C.visible===!1)return;if(C.layers.test(q.layers)){if(C.isGroup)le=C.renderOrder;else if(C.isLOD)C.autoUpdate===!0&&C.update(q);else if(C.isLight)f.pushLight(C),C.castShadow&&f.pushShadow(C);else if(C.isSprite){if(!C.frustumCulled||ie.intersectsSprite(C)){X&&oe.setFromMatrixPosition(C.matrixWorld).applyMatrix4(ye);const Oe=se.update(C),Be=C.material;Be.visible&&h.push(C,Oe,Be,le,oe.z,null)}}else if((C.isMesh||C.isLine||C.isPoints)&&(C.isSkinnedMesh&&C.skeleton.frame!==Me.render.frame&&(C.skeleton.update(),C.skeleton.frame=Me.render.frame),!C.frustumCulled||ie.intersectsObject(C))){X&&oe.setFromMatrixPosition(C.matrixWorld).applyMatrix4(ye);const Oe=se.update(C),Be=C.material;if(Array.isArray(Be)){const He=Oe.groups;for(let $e=0,Xe=He.length;$e<Xe;$e++){const je=He[$e],gt=Be[je.materialIndex];gt&&gt.visible&&h.push(C,Oe,gt,le,oe.z,je)}}else Be.visible&&h.push(C,Oe,Be,le,oe.z,null)}}const Ie=C.children;for(let Oe=0,Be=Ie.length;Oe<Be;Oe++)wt(Ie[Oe],q,le,X)}function Pt(C,q,le,X){const ue=C.opaque,Ie=C.transmissive,Oe=C.transparent;f.setupLightsView(le),Y===!0&&b.setGlobalState(p.clippingPlanes,le),Ie.length>0&&yi(ue,q,le),X&&pe.viewport(P.copy(X)),ue.length>0&&at(ue,q,le),Ie.length>0&&at(Ie,q,le),Oe.length>0&&at(Oe,q,le),pe.buffers.depth.setTest(!0),pe.buffers.depth.setMask(!0),pe.buffers.color.setMask(!0),pe.setPolygonOffset(!1)}function yi(C,q,le){const X=ge.isWebGL2;de===null&&(de=new Xi(1,1,{generateMipmaps:!0,type:ce.has("EXT_color_buffer_half_float")?Sr:Gi,minFilter:wr,samples:X&&r===!0?4:0})),p.getDrawingBufferSize(W),X?de.setSize(W.x,W.y):de.setSize(ko(W.x),ko(W.y));const ue=p.getRenderTarget();p.setRenderTarget(de),p.clear();const Ie=p.toneMapping;p.toneMapping=Zn,at(C,q,le),p.toneMapping=Ie,T.updateMultisampleRenderTarget(de),T.updateRenderTargetMipmap(de),p.setRenderTarget(ue)}function at(C,q,le){const X=q.isScene===!0?q.overrideMaterial:null;for(let ue=0,Ie=C.length;ue<Ie;ue++){const Oe=C[ue],Be=Oe.object,He=Oe.geometry,$e=X===null?Oe.material:X,Xe=Oe.group;Be.layers.test(le.layers)&&zn(Be,q,le,He,$e,Xe)}}function zn(C,q,le,X,ue,Ie){C.onBeforeRender(p,q,le,X,ue,Ie),C.modelViewMatrix.multiplyMatrices(le.matrixWorldInverse,C.matrixWorld),C.normalMatrix.getNormalMatrix(C.modelViewMatrix),ue.onBeforeRender(p,q,le,X,C,Ie),ue.transparent===!0&&ue.side===Bt&&ue.forceSinglePass===!1?(ue.side=Ht,ue.needsUpdate=!0,p.renderBufferDirect(le,q,X,ue,C,Ie),ue.side=dn,ue.needsUpdate=!0,p.renderBufferDirect(le,q,X,ue,C,Ie),ue.side=Bt):p.renderBufferDirect(le,q,X,ue,C,Ie),C.onAfterRender(p,q,le,X,ue,Ie)}function tn(C,q,le){q.isScene!==!0&&(q=ve);const X=y.get(C),ue=f.state.lights,Ie=f.state.shadowsArray,Oe=ue.state.version,Be=Z.getParameters(C,ue.state,Ie,q,le),He=Z.getProgramCacheKey(Be);let $e=X.programs;X.environment=C.isMeshStandardMaterial?q.environment:null,X.fog=q.fog,X.envMap=(C.isMeshStandardMaterial?H:F).get(C.envMap||X.environment),$e===void 0&&(C.addEventListener("dispose",Ve),$e=new Map,X.programs=$e);let Xe=$e.get(He);if(Xe!==void 0){if(X.currentProgram===Xe&&X.lightsStateVersion===Oe)return Vc(C,Be),Xe}else Be.uniforms=Z.getUniforms(C),C.onBuild(le,Be,p),C.onBeforeCompile(Be,p),Xe=Z.acquireProgram(Be,He),$e.set(He,Xe),X.uniforms=Be.uniforms;const je=X.uniforms;(!C.isShaderMaterial&&!C.isRawShaderMaterial||C.clipping===!0)&&(je.clippingPlanes=b.uniform),Vc(C,Be),X.needsLights=lm(C),X.lightsStateVersion=Oe,X.needsLights&&(je.ambientLightColor.value=ue.state.ambient,je.lightProbe.value=ue.state.probe,je.directionalLights.value=ue.state.directional,je.directionalLightShadows.value=ue.state.directionalShadow,je.spotLights.value=ue.state.spot,je.spotLightShadows.value=ue.state.spotShadow,je.rectAreaLights.value=ue.state.rectArea,je.ltc_1.value=ue.state.rectAreaLTC1,je.ltc_2.value=ue.state.rectAreaLTC2,je.pointLights.value=ue.state.point,je.pointLightShadows.value=ue.state.pointShadow,je.hemisphereLights.value=ue.state.hemi,je.directionalShadowMap.value=ue.state.directionalShadowMap,je.directionalShadowMatrix.value=ue.state.directionalShadowMatrix,je.spotShadowMap.value=ue.state.spotShadowMap,je.spotLightMatrix.value=ue.state.spotLightMatrix,je.spotLightMap.value=ue.state.spotLightMap,je.pointShadowMap.value=ue.state.pointShadowMap,je.pointShadowMatrix.value=ue.state.pointShadowMatrix);const gt=Xe.getUniforms(),Zt=Po.seqWithValue(gt.seq,je);return X.currentProgram=Xe,X.uniformsList=Zt,Xe}function Vc(C,q){const le=y.get(C);le.outputEncoding=q.outputEncoding,le.instancing=q.instancing,le.skinning=q.skinning,le.morphTargets=q.morphTargets,le.morphNormals=q.morphNormals,le.morphColors=q.morphColors,le.morphTargetsCount=q.morphTargetsCount,le.numClippingPlanes=q.numClippingPlanes,le.numIntersection=q.numClipIntersection,le.vertexAlphas=q.vertexAlphas,le.vertexTangents=q.vertexTangents,le.toneMapping=q.toneMapping}function om(C,q,le,X,ue){q.isScene!==!0&&(q=ve),T.resetTextureUnits();const Ie=q.fog,Oe=X.isMeshStandardMaterial?q.environment:null,Be=x===null?p.outputEncoding:x.isXRRenderTarget===!0?x.texture.encoding:Wi,He=(X.isMeshStandardMaterial?H:F).get(X.envMap||Oe),$e=X.vertexColors===!0&&!!le.attributes.color&&le.attributes.color.itemSize===4,Xe=!!X.normalMap&&!!le.attributes.tangent,je=!!le.morphAttributes.position,gt=!!le.morphAttributes.normal,Zt=!!le.morphAttributes.color,Nn=X.toneMapped?p.toneMapping:Zn,Mi=le.morphAttributes.position||le.morphAttributes.normal||le.morphAttributes.color,_t=Mi!==void 0?Mi.length:0,qe=y.get(X),ua=f.state.lights;if(Y===!0&&(fe===!0||C!==S)){const $t=C===S&&X.id===w;b.setState(X,C,$t)}let St=!1;X.version===qe.__version?(qe.needsLights&&qe.lightsStateVersion!==ua.state.version||qe.outputEncoding!==Be||ue.isInstancedMesh&&qe.instancing===!1||!ue.isInstancedMesh&&qe.instancing===!0||ue.isSkinnedMesh&&qe.skinning===!1||!ue.isSkinnedMesh&&qe.skinning===!0||qe.envMap!==He||X.fog===!0&&qe.fog!==Ie||qe.numClippingPlanes!==void 0&&(qe.numClippingPlanes!==b.numPlanes||qe.numIntersection!==b.numIntersection)||qe.vertexAlphas!==$e||qe.vertexTangents!==Xe||qe.morphTargets!==je||qe.morphNormals!==gt||qe.morphColors!==Zt||qe.toneMapping!==Nn||ge.isWebGL2===!0&&qe.morphTargetsCount!==_t)&&(St=!0):(St=!0,qe.__version=X.version);let bi=qe.currentProgram;St===!0&&(bi=tn(X,q,ue));let Hc=!1,Ws=!1,ha=!1;const Ot=bi.getUniforms(),wi=qe.uniforms;if(pe.useProgram(bi.program)&&(Hc=!0,Ws=!0,ha=!0),X.id!==w&&(w=X.id,Ws=!0),Hc||S!==C){if(Ot.setValue(O,"projectionMatrix",C.projectionMatrix),ge.logarithmicDepthBuffer&&Ot.setValue(O,"logDepthBufFC",2/(Math.log(C.far+1)/Math.LN2)),S!==C&&(S=C,Ws=!0,ha=!0),X.isShaderMaterial||X.isMeshPhongMaterial||X.isMeshToonMaterial||X.isMeshStandardMaterial||X.envMap){const $t=Ot.map.cameraPosition;$t!==void 0&&$t.setValue(O,oe.setFromMatrixPosition(C.matrixWorld))}(X.isMeshPhongMaterial||X.isMeshToonMaterial||X.isMeshLambertMaterial||X.isMeshBasicMaterial||X.isMeshStandardMaterial||X.isShaderMaterial)&&Ot.setValue(O,"isOrthographic",C.isOrthographicCamera===!0),(X.isMeshPhongMaterial||X.isMeshToonMaterial||X.isMeshLambertMaterial||X.isMeshBasicMaterial||X.isMeshStandardMaterial||X.isShaderMaterial||X.isShadowMaterial||ue.isSkinnedMesh)&&Ot.setValue(O,"viewMatrix",C.matrixWorldInverse)}if(ue.isSkinnedMesh){Ot.setOptional(O,ue,"bindMatrix"),Ot.setOptional(O,ue,"bindMatrixInverse");const $t=ue.skeleton;$t&&(ge.floatVertexTextures?($t.boneTexture===null&&$t.computeBoneTexture(),Ot.setValue(O,"boneTexture",$t.boneTexture,T),Ot.setValue(O,"boneTextureSize",$t.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const fa=le.morphAttributes;if((fa.position!==void 0||fa.normal!==void 0||fa.color!==void 0&&ge.isWebGL2===!0)&&re.update(ue,le,X,bi),(Ws||qe.receiveShadow!==ue.receiveShadow)&&(qe.receiveShadow=ue.receiveShadow,Ot.setValue(O,"receiveShadow",ue.receiveShadow)),X.isMeshGouraudMaterial&&X.envMap!==null&&(wi.envMap.value=He,wi.flipEnvMap.value=He.isCubeTexture&&He.isRenderTargetTexture===!1?-1:1),Ws&&(Ot.setValue(O,"toneMappingExposure",p.toneMappingExposure),qe.needsLights&&am(wi,ha),Ie&&X.fog===!0&&he.refreshFogUniforms(wi,Ie),he.refreshMaterialUniforms(wi,X,j,R,de),Po.upload(O,qe.uniformsList,wi,T)),X.isShaderMaterial&&X.uniformsNeedUpdate===!0&&(Po.upload(O,qe.uniformsList,wi,T),X.uniformsNeedUpdate=!1),X.isSpriteMaterial&&Ot.setValue(O,"center",ue.center),Ot.setValue(O,"modelViewMatrix",ue.modelViewMatrix),Ot.setValue(O,"normalMatrix",ue.normalMatrix),Ot.setValue(O,"modelMatrix",ue.matrixWorld),X.isShaderMaterial||X.isRawShaderMaterial){const $t=X.uniformsGroups;for(let da=0,cm=$t.length;da<cm;da++)if(ge.isWebGL2){const Gc=$t[da];we.update(Gc,bi),we.bind(Gc,bi)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return bi}function am(C,q){C.ambientLightColor.needsUpdate=q,C.lightProbe.needsUpdate=q,C.directionalLights.needsUpdate=q,C.directionalLightShadows.needsUpdate=q,C.pointLights.needsUpdate=q,C.pointLightShadows.needsUpdate=q,C.spotLights.needsUpdate=q,C.spotLightShadows.needsUpdate=q,C.rectAreaLights.needsUpdate=q,C.hemisphereLights.needsUpdate=q}function lm(C){return C.isMeshLambertMaterial||C.isMeshToonMaterial||C.isMeshPhongMaterial||C.isMeshStandardMaterial||C.isShadowMaterial||C.isShaderMaterial&&C.lights===!0}this.getActiveCubeFace=function(){return _},this.getActiveMipmapLevel=function(){return M},this.getRenderTarget=function(){return x},this.setRenderTargetTextures=function(C,q,le){y.get(C.texture).__webglTexture=q,y.get(C.depthTexture).__webglTexture=le;const X=y.get(C);X.__hasExternalTextures=!0,X.__hasExternalTextures&&(X.__autoAllocateDepthBuffer=le===void 0,X.__autoAllocateDepthBuffer||ce.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),X.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(C,q){const le=y.get(C);le.__webglFramebuffer=q,le.__useDefaultFramebuffer=q===void 0},this.setRenderTarget=function(C,q=0,le=0){x=C,_=q,M=le;let X=!0,ue=null,Ie=!1,Oe=!1;if(C){const He=y.get(C);He.__useDefaultFramebuffer!==void 0?(pe.bindFramebuffer(36160,null),X=!1):He.__webglFramebuffer===void 0?T.setupRenderTarget(C):He.__hasExternalTextures&&T.rebindTextures(C,y.get(C.texture).__webglTexture,y.get(C.depthTexture).__webglTexture);const $e=C.texture;($e.isData3DTexture||$e.isDataArrayTexture||$e.isCompressedArrayTexture)&&(Oe=!0);const Xe=y.get(C).__webglFramebuffer;C.isWebGLCubeRenderTarget?(ue=Xe[q],Ie=!0):ge.isWebGL2&&C.samples>0&&T.useMultisampledRTT(C)===!1?ue=y.get(C).__webglMultisampledFramebuffer:ue=Xe,P.copy(C.viewport),I.copy(C.scissor),v=C.scissorTest}else P.copy(z).multiplyScalar(j).floor(),I.copy(J).multiplyScalar(j).floor(),v=$;if(pe.bindFramebuffer(36160,ue)&&ge.drawBuffers&&X&&pe.drawBuffers(C,ue),pe.viewport(P),pe.scissor(I),pe.setScissorTest(v),Ie){const He=y.get(C.texture);O.framebufferTexture2D(36160,36064,34069+q,He.__webglTexture,le)}else if(Oe){const He=y.get(C.texture),$e=q||0;O.framebufferTextureLayer(36160,36064,He.__webglTexture,le||0,$e)}w=-1},this.readRenderTargetPixels=function(C,q,le,X,ue,Ie,Oe){if(!(C&&C.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Be=y.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&Oe!==void 0&&(Be=Be[Oe]),Be){pe.bindFramebuffer(36160,Be);try{const He=C.texture,$e=He.format,Xe=He.type;if($e!==an&&L.convert($e)!==O.getParameter(35739)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const je=Xe===Sr&&(ce.has("EXT_color_buffer_half_float")||ge.isWebGL2&&ce.has("EXT_color_buffer_float"));if(Xe!==Gi&&L.convert(Xe)!==O.getParameter(35738)&&!(Xe===hi&&(ge.isWebGL2||ce.has("OES_texture_float")||ce.has("WEBGL_color_buffer_float")))&&!je){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}q>=0&&q<=C.width-X&&le>=0&&le<=C.height-ue&&O.readPixels(q,le,X,ue,L.convert($e),L.convert(Xe),Ie)}finally{const He=x!==null?y.get(x).__webglFramebuffer:null;pe.bindFramebuffer(36160,He)}}},this.copyFramebufferToTexture=function(C,q,le=0){const X=Math.pow(2,-le),ue=Math.floor(q.image.width*X),Ie=Math.floor(q.image.height*X);T.setTexture2D(q,0),O.copyTexSubImage2D(3553,le,0,0,C.x,C.y,ue,Ie),pe.unbindTexture()},this.copyTextureToTexture=function(C,q,le,X=0){const ue=q.image.width,Ie=q.image.height,Oe=L.convert(le.format),Be=L.convert(le.type);T.setTexture2D(le,0),O.pixelStorei(37440,le.flipY),O.pixelStorei(37441,le.premultiplyAlpha),O.pixelStorei(3317,le.unpackAlignment),q.isDataTexture?O.texSubImage2D(3553,X,C.x,C.y,ue,Ie,Oe,Be,q.image.data):q.isCompressedTexture?O.compressedTexSubImage2D(3553,X,C.x,C.y,q.mipmaps[0].width,q.mipmaps[0].height,Oe,q.mipmaps[0].data):O.texSubImage2D(3553,X,C.x,C.y,Oe,Be,q.image),X===0&&le.generateMipmaps&&O.generateMipmap(3553),pe.unbindTexture()},this.copyTextureToTexture3D=function(C,q,le,X,ue=0){if(p.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const Ie=C.max.x-C.min.x+1,Oe=C.max.y-C.min.y+1,Be=C.max.z-C.min.z+1,He=L.convert(X.format),$e=L.convert(X.type);let Xe;if(X.isData3DTexture)T.setTexture3D(X,0),Xe=32879;else if(X.isDataArrayTexture)T.setTexture2DArray(X,0),Xe=35866;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}O.pixelStorei(37440,X.flipY),O.pixelStorei(37441,X.premultiplyAlpha),O.pixelStorei(3317,X.unpackAlignment);const je=O.getParameter(3314),gt=O.getParameter(32878),Zt=O.getParameter(3316),Nn=O.getParameter(3315),Mi=O.getParameter(32877),_t=le.isCompressedTexture?le.mipmaps[0]:le.image;O.pixelStorei(3314,_t.width),O.pixelStorei(32878,_t.height),O.pixelStorei(3316,C.min.x),O.pixelStorei(3315,C.min.y),O.pixelStorei(32877,C.min.z),le.isDataTexture||le.isData3DTexture?O.texSubImage3D(Xe,ue,q.x,q.y,q.z,Ie,Oe,Be,He,$e,_t.data):le.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),O.compressedTexSubImage3D(Xe,ue,q.x,q.y,q.z,Ie,Oe,Be,He,_t.data)):O.texSubImage3D(Xe,ue,q.x,q.y,q.z,Ie,Oe,Be,He,$e,_t),O.pixelStorei(3314,je),O.pixelStorei(32878,gt),O.pixelStorei(3316,Zt),O.pixelStorei(3315,Nn),O.pixelStorei(32877,Mi),ue===0&&X.generateMipmaps&&O.generateMipmap(Xe),pe.unbindTexture()},this.initTexture=function(C){C.isCubeTexture?T.setTextureCube(C,0):C.isData3DTexture?T.setTexture3D(C,0):C.isDataArrayTexture||C.isCompressedArrayTexture?T.setTexture2DArray(C,0):T.setTexture2D(C,0),pe.unbindTexture()},this.resetState=function(){_=0,M=0,x=null,pe.reset(),G.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}class Zw extends Mp{}Zw.prototype.isWebGL1Renderer=!0;class $w extends ot{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}get autoUpdate(){return console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate}set autoUpdate(e){console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate=e}}const Zh=new D,$h=new Qe,Kh=new Qe,Kw=new D,Jh=new De;class Jw extends et{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode="attached",this.bindMatrix=new De,this.bindMatrixInverse=new De}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,this}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new Qe,t=this.geometry.attributes.skinWeight;for(let n=0,s=t.count;n<s;n++){e.fromBufferAttribute(t,n);const r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode==="attached"?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode==="detached"?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}boneTransform(e,t){const n=this.skeleton,s=this.geometry;$h.fromBufferAttribute(s.attributes.skinIndex,e),Kh.fromBufferAttribute(s.attributes.skinWeight,e),Zh.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let r=0;r<4;r++){const o=Kh.getComponent(r);if(o!==0){const a=$h.getComponent(r);Jh.multiplyMatrices(n.bones[a].matrixWorld,n.boneInverses[a]),t.addScaledVector(Kw.copy(Zh).applyMatrix4(Jh),o)}}return t.applyMatrix4(this.bindMatrixInverse)}}class Vl extends ot{constructor(){super(),this.isBone=!0,this.type="Bone"}}class Qw extends Ct{constructor(e=null,t=1,n=1,s,r,o,a,l,c=Et,u=Et,h,f){super(null,o,a,l,c,u,s,r,h,f),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Qh=new De,e1=new De;class Ac{constructor(e=[],t=[]){this.uuid=Qn(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.boneTextureSize=0,this.frame=-1,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,s=this.bones.length;n<s;n++)this.boneInverses.push(new De)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const n=new De;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const e=this.bones,t=this.boneInverses,n=this.boneMatrices,s=this.boneTexture;for(let r=0,o=e.length;r<o;r++){const a=e[r]?e[r].matrixWorld:e1;Qh.multiplyMatrices(a,t[r]),Qh.toArray(n,r*16)}s!==null&&(s.needsUpdate=!0)}clone(){return new Ac(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=ap(e),e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const n=new Qw(t,e,e,an,hi);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this.boneTextureSize=e,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){const s=this.bones[t];if(s.name===e)return s}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,s=e.bones.length;n<s;n++){const r=e.bones[n];let o=t[r];o===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",r),o=new Vl),this.bones.push(o),this.boneInverses.push(new De().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){const e={metadata:{version:4.5,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,n=this.boneInverses;for(let s=0,r=t.length;s<r;s++){const o=t[s];e.bones.push(o.uuid);const a=n[s];e.boneInverses.push(a.toArray())}return e}}class Cc extends ei{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Pe(16777215),this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const ef=new D,tf=new D,nf=new De,il=new ia,uo=new Or;class bp extends ot{constructor(e=new ct,t=new Cc){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let s=1,r=t.count;s<r;s++)ef.fromBufferAttribute(t,s-1),tf.fromBufferAttribute(t,s),n[s]=n[s-1],n[s]+=ef.distanceTo(tf);e.setAttribute("lineDistance",new ke(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),uo.copy(n.boundingSphere),uo.applyMatrix4(s),uo.radius+=r,e.ray.intersectsSphere(uo)===!1)return;nf.copy(s).invert(),il.copy(e.ray).applyMatrix4(nf);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=new D,u=new D,h=new D,f=new D,d=this.isLineSegments?2:1,g=n.index,m=n.attributes.position;if(g!==null){const _=Math.max(0,o.start),M=Math.min(g.count,o.start+o.count);for(let x=_,w=M-1;x<w;x+=d){const S=g.getX(x),P=g.getX(x+1);if(c.fromBufferAttribute(m,S),u.fromBufferAttribute(m,P),il.distanceSqToSegment(c,u,f,h)>l)continue;f.applyMatrix4(this.matrixWorld);const v=e.ray.origin.distanceTo(f);v<e.near||v>e.far||t.push({distance:v,point:h.clone().applyMatrix4(this.matrixWorld),index:x,face:null,faceIndex:null,object:this})}}else{const _=Math.max(0,o.start),M=Math.min(m.count,o.start+o.count);for(let x=_,w=M-1;x<w;x+=d){if(c.fromBufferAttribute(m,x),u.fromBufferAttribute(m,x+1),il.distanceSqToSegment(c,u,f,h)>l)continue;f.applyMatrix4(this.matrixWorld);const P=e.ray.origin.distanceTo(f);P<e.near||P>e.far||t.push({distance:P,point:h.clone().applyMatrix4(this.matrixWorld),index:x,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}const sf=new D,rf=new D;class wp extends bp{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let s=0,r=t.count;s<r;s+=2)sf.fromBufferAttribute(t,s),rf.fromBufferAttribute(t,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+sf.distanceTo(rf);e.setAttribute("lineDistance",new ke(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Sp extends ei{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Pe(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const of=new De,Hl=new ia,ho=new Or,fo=new D;class Pc extends ot{constructor(e=new ct,t=new Sp){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),ho.copy(n.boundingSphere),ho.applyMatrix4(s),ho.radius+=r,e.ray.intersectsSphere(ho)===!1)return;of.copy(s).invert(),Hl.copy(e.ray).applyMatrix4(of);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=n.index,h=n.attributes.position;if(c!==null){const f=Math.max(0,o.start),d=Math.min(c.count,o.start+o.count);for(let g=f,p=d;g<p;g++){const m=c.getX(g);fo.fromBufferAttribute(h,m),af(fo,m,l,s,e,t,this)}}else{const f=Math.max(0,o.start),d=Math.min(h.count,o.start+o.count);for(let g=f,p=d;g<p;g++)fo.fromBufferAttribute(h,g),af(fo,g,l,s,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function af(i,e,t,n,s,r,o){const a=Hl.distanceSqToPoint(i);if(a<t){const l=new D;Hl.closestPointToPoint(i,l),l.applyMatrix4(n);const c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,object:o})}}class Sn{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){const n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let n,s=this.getPoint(0),r=0;t.push(0);for(let o=1;o<=e;o++)n=this.getPoint(o/e),r+=n.distanceTo(s),t.push(r),s=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){const n=this.getLengths();let s=0;const r=n.length;let o;t?o=t:o=e*n[r-1];let a=0,l=r-1,c;for(;a<=l;)if(s=Math.floor(a+(l-a)/2),c=n[s]-o,c<0)a=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,n[s]===o)return s/(r-1);const u=n[s],f=n[s+1]-u,d=(o-u)/f;return(s+d)/(r-1)}getTangent(e,t){let s=e-1e-4,r=e+1e-4;s<0&&(s=0),r>1&&(r=1);const o=this.getPoint(s),a=this.getPoint(r),l=t||(o.isVector2?new xe:new D);return l.copy(a).sub(o).normalize(),l}getTangentAt(e,t){const n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t){const n=new D,s=[],r=[],o=[],a=new D,l=new De;for(let d=0;d<=e;d++){const g=d/e;s[d]=this.getTangentAt(g,new D)}r[0]=new D,o[0]=new D;let c=Number.MAX_VALUE;const u=Math.abs(s[0].x),h=Math.abs(s[0].y),f=Math.abs(s[0].z);u<=c&&(c=u,n.set(1,0,0)),h<=c&&(c=h,n.set(0,1,0)),f<=c&&n.set(0,0,1),a.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let d=1;d<=e;d++){if(r[d]=r[d-1].clone(),o[d]=o[d-1].clone(),a.crossVectors(s[d-1],s[d]),a.length()>Number.EPSILON){a.normalize();const g=Math.acos(At(s[d-1].dot(s[d]),-1,1));r[d].applyMatrix4(l.makeRotationAxis(a,g))}o[d].crossVectors(s[d],r[d])}if(t===!0){let d=Math.acos(At(r[0].dot(r[e]),-1,1));d/=e,s[0].dot(a.crossVectors(r[0],r[e]))>0&&(d=-d);for(let g=1;g<=e;g++)r[g].applyMatrix4(l.makeRotationAxis(s[g],d*g)),o[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.5,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class Lc extends Sn{constructor(e=0,t=0,n=1,s=1,r=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(e,t){const n=t||new xe,s=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);const a=this.aStartAngle+e*r;let l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const u=Math.cos(this.aRotation),h=Math.sin(this.aRotation),f=l-this.aX,d=c-this.aY;l=f*u-d*h+this.aX,c=f*h+d*u+this.aY}return n.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class t1 extends Lc{constructor(e,t,n,s,r,o){super(e,t,n,n,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}}function Rc(){let i=0,e=0,t=0,n=0;function s(r,o,a,l){i=r,e=a,t=-3*r+3*o-2*a-l,n=2*r-2*o+a+l}return{initCatmullRom:function(r,o,a,l,c){s(o,a,c*(a-r),c*(l-o))},initNonuniformCatmullRom:function(r,o,a,l,c,u,h){let f=(o-r)/c-(a-r)/(c+u)+(a-o)/u,d=(a-o)/u-(l-o)/(u+h)+(l-a)/h;f*=u,d*=u,s(o,a,f,d)},calc:function(r){const o=r*r,a=o*r;return i+e*r+t*o+n*a}}}const po=new D,sl=new Rc,rl=new Rc,ol=new Rc;class Tp extends Sn{constructor(e=[],t=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=s}getPoint(e,t=new D){const n=t,s=this.points,r=s.length,o=(r-(this.closed?0:1))*e;let a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:l===0&&a===r-1&&(a=r-2,l=1);let c,u;this.closed||a>0?c=s[(a-1)%r]:(po.subVectors(s[0],s[1]).add(s[0]),c=po);const h=s[a%r],f=s[(a+1)%r];if(this.closed||a+2<r?u=s[(a+2)%r]:(po.subVectors(s[r-1],s[r-2]).add(s[r-1]),u=po),this.curveType==="centripetal"||this.curveType==="chordal"){const d=this.curveType==="chordal"?.5:.25;let g=Math.pow(c.distanceToSquared(h),d),p=Math.pow(h.distanceToSquared(f),d),m=Math.pow(f.distanceToSquared(u),d);p<1e-4&&(p=1),g<1e-4&&(g=p),m<1e-4&&(m=p),sl.initNonuniformCatmullRom(c.x,h.x,f.x,u.x,g,p,m),rl.initNonuniformCatmullRom(c.y,h.y,f.y,u.y,g,p,m),ol.initNonuniformCatmullRom(c.z,h.z,f.z,u.z,g,p,m)}else this.curveType==="catmullrom"&&(sl.initCatmullRom(c.x,h.x,f.x,u.x,this.tension),rl.initCatmullRom(c.y,h.y,f.y,u.y,this.tension),ol.initCatmullRom(c.z,h.z,f.z,u.z,this.tension));return n.set(sl.calc(l),rl.calc(l),ol.calc(l)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const s=e.points[t];this.points.push(new D().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function lf(i,e,t,n,s){const r=(n-e)*.5,o=(s-t)*.5,a=i*i,l=i*a;return(2*t-2*n+r+o)*l+(-3*t+3*n-2*r-o)*a+r*i+t}function n1(i,e){const t=1-i;return t*t*e}function i1(i,e){return 2*(1-i)*i*e}function s1(i,e){return i*i*e}function fr(i,e,t,n){return n1(i,e)+i1(i,t)+s1(i,n)}function r1(i,e){const t=1-i;return t*t*t*e}function o1(i,e){const t=1-i;return 3*t*t*i*e}function a1(i,e){return 3*(1-i)*i*i*e}function l1(i,e){return i*i*i*e}function dr(i,e,t,n,s){return r1(i,e)+o1(i,t)+a1(i,n)+l1(i,s)}class Ep extends Sn{constructor(e=new xe,t=new xe,n=new xe,s=new xe){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new xe){const n=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(dr(e,s.x,r.x,o.x,a.x),dr(e,s.y,r.y,o.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class c1 extends Sn{constructor(e=new D,t=new D,n=new D,s=new D){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new D){const n=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(dr(e,s.x,r.x,o.x,a.x),dr(e,s.y,r.y,o.y,a.y),dr(e,s.z,r.z,o.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class Dc extends Sn{constructor(e=new xe,t=new xe){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new xe){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t){const n=t||new xe;return n.copy(this.v2).sub(this.v1).normalize(),n}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class u1 extends Sn{constructor(e=new D,t=new D){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new D){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Ap extends Sn{constructor(e=new xe,t=new xe,n=new xe){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new xe){const n=t,s=this.v0,r=this.v1,o=this.v2;return n.set(fr(e,s.x,r.x,o.x),fr(e,s.y,r.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Cp extends Sn{constructor(e=new D,t=new D,n=new D){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new D){const n=t,s=this.v0,r=this.v1,o=this.v2;return n.set(fr(e,s.x,r.x,o.x),fr(e,s.y,r.y,o.y),fr(e,s.z,r.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Pp extends Sn{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new xe){const n=t,s=this.points,r=(s.length-1)*e,o=Math.floor(r),a=r-o,l=s[o===0?o:o-1],c=s[o],u=s[o>s.length-2?s.length-1:o+1],h=s[o>s.length-3?s.length-1:o+2];return n.set(lf(a,l.x,c.x,u.x,h.x),lf(a,l.y,c.y,u.y,h.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const s=e.points[t];this.points.push(s.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const s=this.points[t];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const s=e.points[t];this.points.push(new xe().fromArray(s))}return this}}var Lp=Object.freeze({__proto__:null,ArcCurve:t1,CatmullRomCurve3:Tp,CubicBezierCurve:Ep,CubicBezierCurve3:c1,EllipseCurve:Lc,LineCurve:Dc,LineCurve3:u1,QuadraticBezierCurve:Ap,QuadraticBezierCurve3:Cp,SplineCurve:Pp});class h1 extends Sn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){const e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);e.equals(t)||this.curves.push(new Dc(t,e))}getPoint(e,t){const n=e*this.getLength(),s=this.getCurveLengths();let r=0;for(;r<s.length;){if(s[r]>=n){const o=s[r]-n,a=this.curves[r],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,t)}r++}return null}getLength(){const e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let t=0;for(let n=0,s=this.curves.length;n<s;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){const t=[];let n;for(let s=0,r=this.curves;s<r.length;s++){const o=r[s],a=o.isEllipseCurve?e*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?e*o.points.length:e,l=o.getPoints(a);for(let c=0;c<l.length;c++){const u=l[c];n&&n.equals(u)||(t.push(u),n=u)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const s=e.curves[t];this.curves.push(s.clone())}return this.autoClose=e.autoClose,this}toJSON(){const e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){const s=this.curves[t];e.curves.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const s=e.curves[t];this.curves.push(new Lp[s.type]().fromJSON(s))}return this}}class Gl extends h1{constructor(e){super(),this.type="Path",this.currentPoint=new xe,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){const n=new Dc(this.currentPoint.clone(),new xe(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,s){const r=new Ap(this.currentPoint.clone(),new xe(e,t),new xe(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(e,t,n,s,r,o){const a=new Ep(this.currentPoint.clone(),new xe(e,t),new xe(n,s),new xe(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(e){const t=[this.currentPoint.clone()].concat(e),n=new Pp(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,s,r,o){const a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+a,t+l,n,s,r,o),this}absarc(e,t,n,s,r,o){return this.absellipse(e,t,n,n,s,r,o),this}ellipse(e,t,n,s,r,o,a,l){const c=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(e+c,t+u,n,s,r,o,a,l),this}absellipse(e,t,n,s,r,o,a,l){const c=new Lc(e,t,n,s,r,o,a,l);if(this.curves.length>0){const h=c.getPoint(0);h.equals(this.currentPoint)||this.lineTo(h.x,h.y)}this.curves.push(c);const u=c.getPoint(1);return this.currentPoint.copy(u),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){const e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}}class ra extends ct{constructor(e=1,t=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:s},t=Math.max(3,t);const r=[],o=[],a=[],l=[],c=new D,u=new xe;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let h=0,f=3;h<=t;h++,f+=3){const d=n+h/t*s;c.x=e*Math.cos(d),c.y=e*Math.sin(d),o.push(c.x,c.y,c.z),a.push(0,0,1),u.x=(o[f]/e+1)/2,u.y=(o[f+1]/e+1)/2,l.push(u.x,u.y)}for(let h=1;h<=t;h++)r.push(h,h+1,0);this.setIndex(r),this.setAttribute("position",new ke(o,3)),this.setAttribute("normal",new ke(a,3)),this.setAttribute("uv",new ke(l,2))}static fromJSON(e){return new ra(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class Bs extends ct{constructor(e=1,t=1,n=1,s=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};const c=this;s=Math.floor(s),r=Math.floor(r);const u=[],h=[],f=[],d=[];let g=0;const p=[],m=n/2;let _=0;M(),o===!1&&(e>0&&x(!0),t>0&&x(!1)),this.setIndex(u),this.setAttribute("position",new ke(h,3)),this.setAttribute("normal",new ke(f,3)),this.setAttribute("uv",new ke(d,2));function M(){const w=new D,S=new D;let P=0;const I=(t-e)/n;for(let v=0;v<=r;v++){const A=[],R=v/r,j=R*(t-e)+e;for(let Q=0;Q<=s;Q++){const k=Q/s,z=k*l+a,J=Math.sin(z),$=Math.cos(z);S.x=j*J,S.y=-R*n+m,S.z=j*$,h.push(S.x,S.y,S.z),w.set(J,I,$).normalize(),f.push(w.x,w.y,w.z),d.push(k,1-R),A.push(g++)}p.push(A)}for(let v=0;v<s;v++)for(let A=0;A<r;A++){const R=p[A][v],j=p[A+1][v],Q=p[A+1][v+1],k=p[A][v+1];u.push(R,j,k),u.push(j,Q,k),P+=6}c.addGroup(_,P,0),_+=P}function x(w){const S=g,P=new xe,I=new D;let v=0;const A=w===!0?e:t,R=w===!0?1:-1;for(let Q=1;Q<=s;Q++)h.push(0,m*R,0),f.push(0,R,0),d.push(.5,.5),g++;const j=g;for(let Q=0;Q<=s;Q++){const z=Q/s*l+a,J=Math.cos(z),$=Math.sin(z);I.x=A*$,I.y=m*R,I.z=A*J,h.push(I.x,I.y,I.z),f.push(0,R,0),P.x=J*.5+.5,P.y=$*.5*R+.5,d.push(P.x,P.y),g++}for(let Q=0;Q<s;Q++){const k=S+Q,z=j+Q;w===!0?u.push(z,z+1,k):u.push(z+1,z,k),v+=3}c.addGroup(_,v,w===!0?1:2),_+=v}}static fromJSON(e){return new Bs(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Ic extends Bs{constructor(e=1,t=1,n=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,e,t,n,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(e){return new Ic(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}const mo=new D,go=new D,al=new D,_o=new Rn;class f1 extends ct{constructor(e=null,t=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:e,thresholdAngle:t},e!==null){const s=Math.pow(10,4),r=Math.cos(Es*t),o=e.getIndex(),a=e.getAttribute("position"),l=o?o.count:a.count,c=[0,0,0],u=["a","b","c"],h=new Array(3),f={},d=[];for(let g=0;g<l;g+=3){o?(c[0]=o.getX(g),c[1]=o.getX(g+1),c[2]=o.getX(g+2)):(c[0]=g,c[1]=g+1,c[2]=g+2);const{a:p,b:m,c:_}=_o;if(p.fromBufferAttribute(a,c[0]),m.fromBufferAttribute(a,c[1]),_.fromBufferAttribute(a,c[2]),_o.getNormal(al),h[0]=`${Math.round(p.x*s)},${Math.round(p.y*s)},${Math.round(p.z*s)}`,h[1]=`${Math.round(m.x*s)},${Math.round(m.y*s)},${Math.round(m.z*s)}`,h[2]=`${Math.round(_.x*s)},${Math.round(_.y*s)},${Math.round(_.z*s)}`,!(h[0]===h[1]||h[1]===h[2]||h[2]===h[0]))for(let M=0;M<3;M++){const x=(M+1)%3,w=h[M],S=h[x],P=_o[u[M]],I=_o[u[x]],v=`${w}_${S}`,A=`${S}_${w}`;A in f&&f[A]?(al.dot(f[A].normal)<=r&&(d.push(P.x,P.y,P.z),d.push(I.x,I.y,I.z)),f[A]=null):v in f||(f[v]={index0:c[M],index1:c[x],normal:al.clone()})}}for(const g in f)if(f[g]){const{index0:p,index1:m}=f[g];mo.fromBufferAttribute(a,p),go.fromBufferAttribute(a,m),d.push(mo.x,mo.y,mo.z),d.push(go.x,go.y,go.z)}this.setAttribute("position",new ke(d,3))}}}class As extends Gl{constructor(e){super(e),this.uuid=Qn(),this.type="Shape",this.holes=[]}getPointsHoles(e){const t=[];for(let n=0,s=this.holes.length;n<s;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const s=e.holes[t];this.holes.push(s.clone())}return this}toJSON(){const e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){const s=this.holes[t];e.holes.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const s=e.holes[t];this.holes.push(new Gl().fromJSON(s))}return this}}const d1={triangulate:function(i,e,t=2){const n=e&&e.length,s=n?e[0]*t:i.length;let r=Rp(i,0,s,t,!0);const o=[];if(!r||r.next===r.prev)return o;let a,l,c,u,h,f,d;if(n&&(r=x1(i,e,r,t)),i.length>80*t){a=c=i[0],l=u=i[1];for(let g=t;g<s;g+=t)h=i[g],f=i[g+1],h<a&&(a=h),f<l&&(l=f),h>c&&(c=h),f>u&&(u=f);d=Math.max(c-a,u-l),d=d!==0?32767/d:0}return Cr(r,o,t,a,l,d,0),o}};function Rp(i,e,t,n,s){let r,o;if(s===P1(i,e,t,n)>0)for(r=e;r<t;r+=n)o=cf(r,i[r],i[r+1],o);else for(r=t-n;r>=e;r-=n)o=cf(r,i[r],i[r+1],o);return o&&oa(o,o.next)&&(Lr(o),o=o.next),o}function ji(i,e){if(!i)return i;e||(e=i);let t=i,n;do if(n=!1,!t.steiner&&(oa(t,t.next)||ht(t.prev,t,t.next)===0)){if(Lr(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function Cr(i,e,t,n,s,r,o){if(!i)return;!o&&r&&w1(i,n,s,r);let a=i,l,c;for(;i.prev!==i.next;){if(l=i.prev,c=i.next,r?m1(i,n,s,r):p1(i)){e.push(l.i/t|0),e.push(i.i/t|0),e.push(c.i/t|0),Lr(i),i=c.next,a=c.next;continue}if(i=c,i===a){o?o===1?(i=g1(ji(i),e,t),Cr(i,e,t,n,s,r,2)):o===2&&_1(i,e,t,n,s,r):Cr(ji(i),e,t,n,s,r,1);break}}}function p1(i){const e=i.prev,t=i,n=i.next;if(ht(e,t,n)>=0)return!1;const s=e.x,r=t.x,o=n.x,a=e.y,l=t.y,c=n.y,u=s<r?s<o?s:o:r<o?r:o,h=a<l?a<c?a:c:l<c?l:c,f=s>r?s>o?s:o:r>o?r:o,d=a>l?a>c?a:c:l>c?l:c;let g=n.next;for(;g!==e;){if(g.x>=u&&g.x<=f&&g.y>=h&&g.y<=d&&xs(s,a,r,l,o,c,g.x,g.y)&&ht(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function m1(i,e,t,n){const s=i.prev,r=i,o=i.next;if(ht(s,r,o)>=0)return!1;const a=s.x,l=r.x,c=o.x,u=s.y,h=r.y,f=o.y,d=a<l?a<c?a:c:l<c?l:c,g=u<h?u<f?u:f:h<f?h:f,p=a>l?a>c?a:c:l>c?l:c,m=u>h?u>f?u:f:h>f?h:f,_=Wl(d,g,e,t,n),M=Wl(p,m,e,t,n);let x=i.prevZ,w=i.nextZ;for(;x&&x.z>=_&&w&&w.z<=M;){if(x.x>=d&&x.x<=p&&x.y>=g&&x.y<=m&&x!==s&&x!==o&&xs(a,u,l,h,c,f,x.x,x.y)&&ht(x.prev,x,x.next)>=0||(x=x.prevZ,w.x>=d&&w.x<=p&&w.y>=g&&w.y<=m&&w!==s&&w!==o&&xs(a,u,l,h,c,f,w.x,w.y)&&ht(w.prev,w,w.next)>=0))return!1;w=w.nextZ}for(;x&&x.z>=_;){if(x.x>=d&&x.x<=p&&x.y>=g&&x.y<=m&&x!==s&&x!==o&&xs(a,u,l,h,c,f,x.x,x.y)&&ht(x.prev,x,x.next)>=0)return!1;x=x.prevZ}for(;w&&w.z<=M;){if(w.x>=d&&w.x<=p&&w.y>=g&&w.y<=m&&w!==s&&w!==o&&xs(a,u,l,h,c,f,w.x,w.y)&&ht(w.prev,w,w.next)>=0)return!1;w=w.nextZ}return!0}function g1(i,e,t){let n=i;do{const s=n.prev,r=n.next.next;!oa(s,r)&&Dp(s,n,n.next,r)&&Pr(s,r)&&Pr(r,s)&&(e.push(s.i/t|0),e.push(n.i/t|0),e.push(r.i/t|0),Lr(n),Lr(n.next),n=i=r),n=n.next}while(n!==i);return ji(n)}function _1(i,e,t,n,s,r){let o=i;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&E1(o,a)){let l=Ip(o,a);o=ji(o,o.next),l=ji(l,l.next),Cr(o,e,t,n,s,r,0),Cr(l,e,t,n,s,r,0);return}a=a.next}o=o.next}while(o!==i)}function x1(i,e,t,n){const s=[];let r,o,a,l,c;for(r=0,o=e.length;r<o;r++)a=e[r]*n,l=r<o-1?e[r+1]*n:i.length,c=Rp(i,a,l,n,!1),c===c.next&&(c.steiner=!0),s.push(T1(c));for(s.sort(v1),r=0;r<s.length;r++)t=y1(s[r],t);return t}function v1(i,e){return i.x-e.x}function y1(i,e){const t=M1(i,e);if(!t)return e;const n=Ip(t,i);return ji(n,n.next),ji(t,t.next)}function M1(i,e){let t=e,n=-1/0,s;const r=i.x,o=i.y;do{if(o<=t.y&&o>=t.next.y&&t.next.y!==t.y){const f=t.x+(o-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(f<=r&&f>n&&(n=f,s=t.x<t.next.x?t:t.next,f===r))return s}t=t.next}while(t!==e);if(!s)return null;const a=s,l=s.x,c=s.y;let u=1/0,h;t=s;do r>=t.x&&t.x>=l&&r!==t.x&&xs(o<c?r:n,o,l,c,o<c?n:r,o,t.x,t.y)&&(h=Math.abs(o-t.y)/(r-t.x),Pr(t,i)&&(h<u||h===u&&(t.x>s.x||t.x===s.x&&b1(s,t)))&&(s=t,u=h)),t=t.next;while(t!==a);return s}function b1(i,e){return ht(i.prev,i,e.prev)<0&&ht(e.next,i,i.next)<0}function w1(i,e,t,n){let s=i;do s.z===0&&(s.z=Wl(s.x,s.y,e,t,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,S1(s)}function S1(i){let e,t,n,s,r,o,a,l,c=1;do{for(t=i,i=null,r=null,o=0;t;){for(o++,n=t,a=0,e=0;e<c&&(a++,n=n.nextZ,!!n);e++);for(l=c;a>0||l>0&&n;)a!==0&&(l===0||!n||t.z<=n.z)?(s=t,t=t.nextZ,a--):(s=n,n=n.nextZ,l--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;t=n}r.nextZ=null,c*=2}while(o>1);return i}function Wl(i,e,t,n,s){return i=(i-t)*s|0,e=(e-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,i|e<<1}function T1(i){let e=i,t=i;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==i);return t}function xs(i,e,t,n,s,r,o,a){return(s-o)*(e-a)>=(i-o)*(r-a)&&(i-o)*(n-a)>=(t-o)*(e-a)&&(t-o)*(r-a)>=(s-o)*(n-a)}function E1(i,e){return i.next.i!==e.i&&i.prev.i!==e.i&&!A1(i,e)&&(Pr(i,e)&&Pr(e,i)&&C1(i,e)&&(ht(i.prev,i,e.prev)||ht(i,e.prev,e))||oa(i,e)&&ht(i.prev,i,i.next)>0&&ht(e.prev,e,e.next)>0)}function ht(i,e,t){return(e.y-i.y)*(t.x-e.x)-(e.x-i.x)*(t.y-e.y)}function oa(i,e){return i.x===e.x&&i.y===e.y}function Dp(i,e,t,n){const s=vo(ht(i,e,t)),r=vo(ht(i,e,n)),o=vo(ht(t,n,i)),a=vo(ht(t,n,e));return!!(s!==r&&o!==a||s===0&&xo(i,t,e)||r===0&&xo(i,n,e)||o===0&&xo(t,i,n)||a===0&&xo(t,e,n))}function xo(i,e,t){return e.x<=Math.max(i.x,t.x)&&e.x>=Math.min(i.x,t.x)&&e.y<=Math.max(i.y,t.y)&&e.y>=Math.min(i.y,t.y)}function vo(i){return i>0?1:i<0?-1:0}function A1(i,e){let t=i;do{if(t.i!==i.i&&t.next.i!==i.i&&t.i!==e.i&&t.next.i!==e.i&&Dp(t,t.next,i,e))return!0;t=t.next}while(t!==i);return!1}function Pr(i,e){return ht(i.prev,i,i.next)<0?ht(i,e,i.next)>=0&&ht(i,i.prev,e)>=0:ht(i,e,i.prev)<0||ht(i,i.next,e)<0}function C1(i,e){let t=i,n=!1;const s=(i.x+e.x)/2,r=(i.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&s<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==i);return n}function Ip(i,e){const t=new Xl(i.i,i.x,i.y),n=new Xl(e.i,e.x,e.y),s=i.next,r=e.prev;return i.next=e,e.prev=i,t.next=s,s.prev=t,n.next=t,t.prev=n,r.next=n,n.prev=r,n}function cf(i,e,t,n){const s=new Xl(i,e,t);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function Lr(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function Xl(i,e,t){this.i=i,this.x=e,this.y=t,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function P1(i,e,t,n){let s=0;for(let r=e,o=t-n;r<t;r+=n)s+=(i[o]-i[r])*(i[r+1]+i[o+1]),o=r;return s}class $n{static area(e){const t=e.length;let n=0;for(let s=t-1,r=0;r<t;s=r++)n+=e[s].x*e[r].y-e[r].x*e[s].y;return n*.5}static isClockWise(e){return $n.area(e)<0}static triangulateShape(e,t){const n=[],s=[],r=[];uf(e),hf(n,e);let o=e.length;t.forEach(uf);for(let l=0;l<t.length;l++)s.push(o),o+=t[l].length,hf(n,t[l]);const a=d1.triangulate(n,s);for(let l=0;l<a.length;l+=3)r.push(a.slice(l,l+3));return r}}function uf(i){const e=i.length;e>2&&i[e-1].equals(i[0])&&i.pop()}function hf(i,e){for(let t=0;t<e.length;t++)i.push(e[t].x),i.push(e[t].y)}class Fc extends ct{constructor(e=new As([new xe(.5,.5),new xe(-.5,.5),new xe(-.5,-.5),new xe(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];const n=this,s=[],r=[];for(let a=0,l=e.length;a<l;a++){const c=e[a];o(c)}this.setAttribute("position",new ke(s,3)),this.setAttribute("uv",new ke(r,2)),this.computeVertexNormals();function o(a){const l=[],c=t.curveSegments!==void 0?t.curveSegments:12,u=t.steps!==void 0?t.steps:1,h=t.depth!==void 0?t.depth:1;let f=t.bevelEnabled!==void 0?t.bevelEnabled:!0,d=t.bevelThickness!==void 0?t.bevelThickness:.2,g=t.bevelSize!==void 0?t.bevelSize:d-.1,p=t.bevelOffset!==void 0?t.bevelOffset:0,m=t.bevelSegments!==void 0?t.bevelSegments:3;const _=t.extrudePath,M=t.UVGenerator!==void 0?t.UVGenerator:L1;let x,w=!1,S,P,I,v;_&&(x=_.getSpacedPoints(u),w=!0,f=!1,S=_.computeFrenetFrames(u,!1),P=new D,I=new D,v=new D),f||(m=0,d=0,g=0,p=0);const A=a.extractPoints(c);let R=A.shape;const j=A.holes;if(!$n.isClockWise(R)){R=R.reverse();for(let y=0,T=j.length;y<T;y++){const F=j[y];$n.isClockWise(F)&&(j[y]=F.reverse())}}const k=$n.triangulateShape(R,j),z=R;for(let y=0,T=j.length;y<T;y++){const F=j[y];R=R.concat(F)}function J(y,T,F){return T||console.error("THREE.ExtrudeGeometry: vec does not exist"),T.clone().multiplyScalar(F).add(y)}const $=R.length,ie=k.length;function Y(y,T,F){let H,B,te;const se=y.x-T.x,Z=y.y-T.y,he=F.x-y.x,ne=F.y-y.y,E=se*se+Z*Z,b=se*ne-Z*he;if(Math.abs(b)>Number.EPSILON){const U=Math.sqrt(E),K=Math.sqrt(he*he+ne*ne),re=T.x-Z/U,me=T.y+se/U,be=F.x-ne/K,L=F.y+he/K,G=((be-re)*ne-(L-me)*he)/(se*ne-Z*he);H=re+se*G-y.x,B=me+Z*G-y.y;const we=H*H+B*B;if(we<=2)return new xe(H,B);te=Math.sqrt(we/2)}else{let U=!1;se>Number.EPSILON?he>Number.EPSILON&&(U=!0):se<-Number.EPSILON?he<-Number.EPSILON&&(U=!0):Math.sign(Z)===Math.sign(ne)&&(U=!0),U?(H=-Z,B=se,te=Math.sqrt(E)):(H=se,B=Z,te=Math.sqrt(E/2))}return new xe(H/te,B/te)}const fe=[];for(let y=0,T=z.length,F=T-1,H=y+1;y<T;y++,F++,H++)F===T&&(F=0),H===T&&(H=0),fe[y]=Y(z[y],z[F],z[H]);const de=[];let ye,W=fe.concat();for(let y=0,T=j.length;y<T;y++){const F=j[y];ye=[];for(let H=0,B=F.length,te=B-1,se=H+1;H<B;H++,te++,se++)te===B&&(te=0),se===B&&(se=0),ye[H]=Y(F[H],F[te],F[se]);de.push(ye),W=W.concat(ye)}for(let y=0;y<m;y++){const T=y/m,F=d*Math.cos(T*Math.PI/2),H=g*Math.sin(T*Math.PI/2)+p;for(let B=0,te=z.length;B<te;B++){const se=J(z[B],fe[B],H);ee(se.x,se.y,-F)}for(let B=0,te=j.length;B<te;B++){const se=j[B];ye=de[B];for(let Z=0,he=se.length;Z<he;Z++){const ne=J(se[Z],ye[Z],H);ee(ne.x,ne.y,-F)}}}const oe=g+p;for(let y=0;y<$;y++){const T=f?J(R[y],W[y],oe):R[y];w?(I.copy(S.normals[0]).multiplyScalar(T.x),P.copy(S.binormals[0]).multiplyScalar(T.y),v.copy(x[0]).add(I).add(P),ee(v.x,v.y,v.z)):ee(T.x,T.y,0)}for(let y=1;y<=u;y++)for(let T=0;T<$;T++){const F=f?J(R[T],W[T],oe):R[T];w?(I.copy(S.normals[y]).multiplyScalar(F.x),P.copy(S.binormals[y]).multiplyScalar(F.y),v.copy(x[y]).add(I).add(P),ee(v.x,v.y,v.z)):ee(F.x,F.y,h/u*y)}for(let y=m-1;y>=0;y--){const T=y/m,F=d*Math.cos(T*Math.PI/2),H=g*Math.sin(T*Math.PI/2)+p;for(let B=0,te=z.length;B<te;B++){const se=J(z[B],fe[B],H);ee(se.x,se.y,h+F)}for(let B=0,te=j.length;B<te;B++){const se=j[B];ye=de[B];for(let Z=0,he=se.length;Z<he;Z++){const ne=J(se[Z],ye[Z],H);w?ee(ne.x,ne.y+x[u-1].y,x[u-1].x+F):ee(ne.x,ne.y,h+F)}}}ve(),N();function ve(){const y=s.length/3;if(f){let T=0,F=$*T;for(let H=0;H<ie;H++){const B=k[H];ce(B[2]+F,B[1]+F,B[0]+F)}T=u+m*2,F=$*T;for(let H=0;H<ie;H++){const B=k[H];ce(B[0]+F,B[1]+F,B[2]+F)}}else{for(let T=0;T<ie;T++){const F=k[T];ce(F[2],F[1],F[0])}for(let T=0;T<ie;T++){const F=k[T];ce(F[0]+$*u,F[1]+$*u,F[2]+$*u)}}n.addGroup(y,s.length/3-y,0)}function N(){const y=s.length/3;let T=0;O(z,T),T+=z.length;for(let F=0,H=j.length;F<H;F++){const B=j[F];O(B,T),T+=B.length}n.addGroup(y,s.length/3-y,1)}function O(y,T){let F=y.length;for(;--F>=0;){const H=F;let B=F-1;B<0&&(B=y.length-1);for(let te=0,se=u+m*2;te<se;te++){const Z=$*te,he=$*(te+1),ne=T+H+Z,E=T+B+Z,b=T+B+he,U=T+H+he;ge(ne,E,b,U)}}}function ee(y,T,F){l.push(y),l.push(T),l.push(F)}function ce(y,T,F){pe(y),pe(T),pe(F);const H=s.length/3,B=M.generateTopUV(n,s,H-3,H-2,H-1);Me(B[0]),Me(B[1]),Me(B[2])}function ge(y,T,F,H){pe(y),pe(T),pe(H),pe(T),pe(F),pe(H);const B=s.length/3,te=M.generateSideWallUV(n,s,B-6,B-3,B-2,B-1);Me(te[0]),Me(te[1]),Me(te[3]),Me(te[1]),Me(te[2]),Me(te[3])}function pe(y){s.push(l[y*3+0]),s.push(l[y*3+1]),s.push(l[y*3+2])}function Me(y){r.push(y.x),r.push(y.y)}}}toJSON(){const e=super.toJSON(),t=this.parameters.shapes,n=this.parameters.options;return R1(t,n,e)}static fromJSON(e,t){const n=[];for(let r=0,o=e.shapes.length;r<o;r++){const a=t[e.shapes[r]];n.push(a)}const s=e.options.extrudePath;return s!==void 0&&(e.options.extrudePath=new Lp[s.type]().fromJSON(s)),new Fc(n,e.options)}}const L1={generateTopUV:function(i,e,t,n,s){const r=e[t*3],o=e[t*3+1],a=e[n*3],l=e[n*3+1],c=e[s*3],u=e[s*3+1];return[new xe(r,o),new xe(a,l),new xe(c,u)]},generateSideWallUV:function(i,e,t,n,s,r){const o=e[t*3],a=e[t*3+1],l=e[t*3+2],c=e[n*3],u=e[n*3+1],h=e[n*3+2],f=e[s*3],d=e[s*3+1],g=e[s*3+2],p=e[r*3],m=e[r*3+1],_=e[r*3+2];return Math.abs(a-u)<Math.abs(o-c)?[new xe(o,1-l),new xe(c,1-h),new xe(f,1-g),new xe(p,1-_)]:[new xe(a,1-l),new xe(u,1-h),new xe(d,1-g),new xe(m,1-_)]}};function R1(i,e,t){if(t.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){const r=i[n];t.shapes.push(r.uuid)}else t.shapes.push(i.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}class Oc extends ct{constructor(e=.5,t=1,n=32,s=1,r=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:s,thetaStart:r,thetaLength:o},n=Math.max(3,n),s=Math.max(1,s);const a=[],l=[],c=[],u=[];let h=e;const f=(t-e)/s,d=new D,g=new xe;for(let p=0;p<=s;p++){for(let m=0;m<=n;m++){const _=r+m/n*o;d.x=h*Math.cos(_),d.y=h*Math.sin(_),l.push(d.x,d.y,d.z),c.push(0,0,1),g.x=(d.x/t+1)/2,g.y=(d.y/t+1)/2,u.push(g.x,g.y)}h+=f}for(let p=0;p<s;p++){const m=p*(n+1);for(let _=0;_<n;_++){const M=_+m,x=M,w=M+n+1,S=M+n+2,P=M+1;a.push(x,w,P),a.push(w,S,P)}}this.setIndex(a),this.setAttribute("position",new ke(l,3)),this.setAttribute("normal",new ke(c,3)),this.setAttribute("uv",new ke(u,2))}static fromJSON(e){return new Oc(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class zc extends ct{constructor(e=new As([new xe(0,.5),new xe(-.5,-.5),new xe(.5,-.5)]),t=12){super(),this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:t};const n=[],s=[],r=[],o=[];let a=0,l=0;if(Array.isArray(e)===!1)c(e);else for(let u=0;u<e.length;u++)c(e[u]),this.addGroup(a,l,u),a+=l,l=0;this.setIndex(n),this.setAttribute("position",new ke(s,3)),this.setAttribute("normal",new ke(r,3)),this.setAttribute("uv",new ke(o,2));function c(u){const h=s.length/3,f=u.extractPoints(t);let d=f.shape;const g=f.holes;$n.isClockWise(d)===!1&&(d=d.reverse());for(let m=0,_=g.length;m<_;m++){const M=g[m];$n.isClockWise(M)===!0&&(g[m]=M.reverse())}const p=$n.triangulateShape(d,g);for(let m=0,_=g.length;m<_;m++){const M=g[m];d=d.concat(M)}for(let m=0,_=d.length;m<_;m++){const M=d[m];s.push(M.x,M.y,0),r.push(0,0,1),o.push(M.x,M.y)}for(let m=0,_=p.length;m<_;m++){const M=p[m],x=M[0]+h,w=M[1]+h,S=M[2]+h;n.push(x,w,S),l+=3}}}toJSON(){const e=super.toJSON(),t=this.parameters.shapes;return D1(t,e)}static fromJSON(e,t){const n=[];for(let s=0,r=e.shapes.length;s<r;s++){const o=t[e.shapes[s]];n.push(o)}return new zc(n,e.curveSegments)}}function D1(i,e){if(e.shapes=[],Array.isArray(i))for(let t=0,n=i.length;t<n;t++){const s=i[t];e.shapes.push(s.uuid)}else e.shapes.push(i.uuid);return e}class Fn extends ct{constructor(e=1,t=32,n=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const l=Math.min(o+a,Math.PI);let c=0;const u=[],h=new D,f=new D,d=[],g=[],p=[],m=[];for(let _=0;_<=n;_++){const M=[],x=_/n;let w=0;_==0&&o==0?w=.5/t:_==n&&l==Math.PI&&(w=-.5/t);for(let S=0;S<=t;S++){const P=S/t;h.x=-e*Math.cos(s+P*r)*Math.sin(o+x*a),h.y=e*Math.cos(o+x*a),h.z=e*Math.sin(s+P*r)*Math.sin(o+x*a),g.push(h.x,h.y,h.z),f.copy(h).normalize(),p.push(f.x,f.y,f.z),m.push(P+w,1-x),M.push(c++)}u.push(M)}for(let _=0;_<n;_++)for(let M=0;M<t;M++){const x=u[_][M+1],w=u[_][M],S=u[_+1][M],P=u[_+1][M+1];(_!==0||o>0)&&d.push(x,w,P),(_!==n-1||l<Math.PI)&&d.push(w,S,P)}this.setIndex(d),this.setAttribute("position",new ke(g,3)),this.setAttribute("normal",new ke(p,3)),this.setAttribute("uv",new ke(m,2))}static fromJSON(e){return new Fn(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class xi extends ei{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Pe(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Pe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=na,this.normalScale=new xe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class ll extends ei{constructor(e){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new Pe(16777215),this.specular=new Pe(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Pe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=na,this.normalScale=new xe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=ea,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Fp extends ei{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Pe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Pe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=na,this.normalScale=new xe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=ea,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}function ai(i,e,t){return Op(i)?new i.constructor(i.subarray(e,t!==void 0?t:i.length)):i.slice(e,t)}function yo(i,e,t){return!i||!t&&i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}function Op(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function I1(i){function e(s,r){return i[s]-i[r]}const t=i.length,n=new Array(t);for(let s=0;s!==t;++s)n[s]=s;return n.sort(e),n}function ff(i,e,t){const n=i.length,s=new i.constructor(n);for(let r=0,o=0;o!==n;++r){const a=t[r]*e;for(let l=0;l!==e;++l)s[o++]=i[a+l]}return s}function zp(i,e,t,n){let s=1,r=i[0];for(;r!==void 0&&r[n]===void 0;)r=i[s++];if(r===void 0)return;let o=r[n];if(o!==void 0)if(Array.isArray(o))do o=r[n],o!==void 0&&(e.push(r.time),t.push.apply(t,o)),r=i[s++];while(r!==void 0);else if(o.toArray!==void 0)do o=r[n],o!==void 0&&(e.push(r.time),o.toArray(t,t.length)),r=i[s++];while(r!==void 0);else do o=r[n],o!==void 0&&(e.push(r.time),t.push(o)),r=i[s++];while(r!==void 0)}class aa{constructor(e,t,n,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let n=this._cachedIndex,s=t[n],r=t[n-1];n:{e:{let o;t:{i:if(!(e<s)){for(let a=n+2;;){if(s===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=s,s=t[++n],e<s)break e}o=t.length;break t}if(!(e>=r)){const a=t[1];e<a&&(n=2,r=a);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(s=r,r=t[--n-1],e>=r)break e}o=n,n=0;break t}break n}for(;n<o;){const a=n+o>>>1;e<t[a]?o=a:n=a+1}if(s=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s;for(let o=0;o!==s;++o)t[o]=n[r+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class F1 extends aa{constructor(e,t,n,s){super(e,t,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:hh,endingEnd:hh}}intervalChanged_(e,t,n){const s=this.parameterPositions;let r=e-2,o=e+1,a=s[r],l=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case fh:r=e,a=2*t-n;break;case dh:r=s.length-2,a=t+s[r]-s[r+1];break;default:r=e,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case fh:o=e,l=2*n-t;break;case dh:o=1,l=n+s[1]-s[0];break;default:o=e-1,l=t}const c=(n-t)*.5,u=this.valueSize;this._weightPrev=c/(t-a),this._weightNext=c/(l-n),this._offsetPrev=r*u,this._offsetNext=o*u}interpolate_(e,t,n,s){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=this._offsetPrev,h=this._offsetNext,f=this._weightPrev,d=this._weightNext,g=(n-t)/(s-t),p=g*g,m=p*g,_=-f*m+2*f*p-f*g,M=(1+f)*m+(-1.5-2*f)*p+(-.5+f)*g+1,x=(-1-d)*m+(1.5+d)*p+.5*g,w=d*m-d*p;for(let S=0;S!==a;++S)r[S]=_*o[u+S]+M*o[c+S]+x*o[l+S]+w*o[h+S];return r}}class O1 extends aa{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=(n-t)/(s-t),h=1-u;for(let f=0;f!==a;++f)r[f]=o[c+f]*h+o[l+f]*u;return r}}class z1 extends aa{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e){return this.copySampleValue_(e-1)}}class On{constructor(e,t,n,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=yo(t,this.TimeBufferType),this.values=yo(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:yo(e.times,Array),values:yo(e.values,Array)};const s=e.getInterpolation();s!==e.DefaultInterpolation&&(n.interpolation=s)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new z1(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new O1(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new F1(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case No:t=this.InterpolantFactoryMethodDiscrete;break;case Uo:t=this.InterpolantFactoryMethodLinear;break;case Ra:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return No;case this.InterpolantFactoryMethodLinear:return Uo;case this.InterpolantFactoryMethodSmooth:return Ra}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]*=e}return this}trim(e,t){const n=this.times,s=n.length;let r=0,o=s-1;for(;r!==s&&n[r]<e;)++r;for(;o!==-1&&n[o]>t;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);const a=this.getValueSize();this.times=ai(n,r,o),this.values=ai(this.values,r*a,o*a)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);const n=this.times,s=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==r;a++){const l=n[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),e=!1;break}if(o!==null&&o>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,o),e=!1;break}o=l}if(s!==void 0&&Op(s))for(let a=0,l=s.length;a!==l;++a){const c=s[a];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,c),e=!1;break}}return e}optimize(){const e=ai(this.times),t=ai(this.values),n=this.getValueSize(),s=this.getInterpolation()===Ra,r=e.length-1;let o=1;for(let a=1;a<r;++a){let l=!1;const c=e[a],u=e[a+1];if(c!==u&&(a!==1||c!==e[0]))if(s)l=!0;else{const h=a*n,f=h-n,d=h+n;for(let g=0;g!==n;++g){const p=t[h+g];if(p!==t[f+g]||p!==t[d+g]){l=!0;break}}}if(l){if(a!==o){e[o]=e[a];const h=a*n,f=o*n;for(let d=0;d!==n;++d)t[f+d]=t[h+d]}++o}}if(r>0){e[o]=e[r];for(let a=r*n,l=o*n,c=0;c!==n;++c)t[l+c]=t[a+c];++o}return o!==e.length?(this.times=ai(e,0,o),this.values=ai(t,0,o*n)):(this.times=e,this.values=t),this}clone(){const e=ai(this.times,0),t=ai(this.values,0),n=this.constructor,s=new n(this.name,e,t);return s.createInterpolant=this.createInterpolant,s}}On.prototype.TimeBufferType=Float32Array;On.prototype.ValueBufferType=Float32Array;On.prototype.DefaultInterpolation=Uo;class Vs extends On{}Vs.prototype.ValueTypeName="bool";Vs.prototype.ValueBufferType=Array;Vs.prototype.DefaultInterpolation=No;Vs.prototype.InterpolantFactoryMethodLinear=void 0;Vs.prototype.InterpolantFactoryMethodSmooth=void 0;class Np extends On{}Np.prototype.ValueTypeName="color";class Rr extends On{}Rr.prototype.ValueTypeName="number";class N1 extends aa{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-t)/(s-t);let c=e*a;for(let u=c+a;c!==u;c+=4)un.slerpFlat(r,0,o,c-a,o,c,l);return r}}class Hs extends On{InterpolantFactoryMethodLinear(e){return new N1(this.times,this.values,this.getValueSize(),e)}}Hs.prototype.ValueTypeName="quaternion";Hs.prototype.DefaultInterpolation=Uo;Hs.prototype.InterpolantFactoryMethodSmooth=void 0;class Gs extends On{}Gs.prototype.ValueTypeName="string";Gs.prototype.ValueBufferType=Array;Gs.prototype.DefaultInterpolation=No;Gs.prototype.InterpolantFactoryMethodLinear=void 0;Gs.prototype.InterpolantFactoryMethodSmooth=void 0;class Dr extends On{}Dr.prototype.ValueTypeName="vector";class U1{constructor(e,t=-1,n,s=Ix){this.name=e,this.tracks=n,this.duration=t,this.blendMode=s,this.uuid=Qn(),this.duration<0&&this.resetDuration()}static parse(e){const t=[],n=e.tracks,s=1/(e.fps||1);for(let o=0,a=n.length;o!==a;++o)t.push(B1(n[o]).scale(s));const r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r}static toJSON(e){const t=[],n=e.tracks,s={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let r=0,o=n.length;r!==o;++r)t.push(On.toJSON(n[r]));return s}static CreateFromMorphTargetSequence(e,t,n,s){const r=t.length,o=[];for(let a=0;a<r;a++){let l=[],c=[];l.push((a+r-1)%r,a,(a+1)%r),c.push(0,1,0);const u=I1(l);l=ff(l,1,u),c=ff(c,1,u),!s&&l[0]===0&&(l.push(r),c.push(c[0])),o.push(new Rr(".morphTargetInfluences["+t[a].name+"]",l,c).scale(1/n))}return new this(e,-1,o)}static findByName(e,t){let n=e;if(!Array.isArray(e)){const s=e;n=s.geometry&&s.geometry.animations||s.animations}for(let s=0;s<n.length;s++)if(n[s].name===t)return n[s];return null}static CreateClipsFromMorphTargetSequences(e,t,n){const s={},r=/^([\w-]*?)([\d]+)$/;for(let a=0,l=e.length;a<l;a++){const c=e[a],u=c.name.match(r);if(u&&u.length>1){const h=u[1];let f=s[h];f||(s[h]=f=[]),f.push(c)}}const o=[];for(const a in s)o.push(this.CreateFromMorphTargetSequence(a,s[a],t,n));return o}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const n=function(h,f,d,g,p){if(d.length!==0){const m=[],_=[];zp(d,m,_,g),m.length!==0&&p.push(new h(f,m,_))}},s=[],r=e.name||"default",o=e.fps||30,a=e.blendMode;let l=e.length||-1;const c=e.hierarchy||[];for(let h=0;h<c.length;h++){const f=c[h].keys;if(!(!f||f.length===0))if(f[0].morphTargets){const d={};let g;for(g=0;g<f.length;g++)if(f[g].morphTargets)for(let p=0;p<f[g].morphTargets.length;p++)d[f[g].morphTargets[p]]=-1;for(const p in d){const m=[],_=[];for(let M=0;M!==f[g].morphTargets.length;++M){const x=f[g];m.push(x.time),_.push(x.morphTarget===p?1:0)}s.push(new Rr(".morphTargetInfluence["+p+"]",m,_))}l=d.length*o}else{const d=".bones["+t[h].name+"]";n(Dr,d+".position",f,"pos",s),n(Hs,d+".quaternion",f,"rot",s),n(Dr,d+".scale",f,"scl",s)}}return s.length===0?null:new this(r,l,s,a)}resetDuration(){const e=this.tracks;let t=0;for(let n=0,s=e.length;n!==s;++n){const r=this.tracks[n];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function k1(i){switch(i.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Rr;case"vector":case"vector2":case"vector3":case"vector4":return Dr;case"color":return Np;case"quaternion":return Hs;case"bool":case"boolean":return Vs;case"string":return Gs}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+i)}function B1(i){if(i.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=k1(i.type);if(i.times===void 0){const t=[],n=[];zp(i.keys,t,n,"value"),i.times=t,i.values=n}return e.parse!==void 0?e.parse(i):new e(i.name,i.times,i.values,i.interpolation)}const Bo={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(this.files[i]=e)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};class V1{constructor(e,t,n){const s=this;let r=!1,o=0,a=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(u){a++,r===!1&&s.onStart!==void 0&&s.onStart(u,o,a),r=!0},this.itemEnd=function(u){o++,s.onProgress!==void 0&&s.onProgress(u,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(u){s.onError!==void 0&&s.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,h){return c.push(u,h),this},this.removeHandler=function(u){const h=c.indexOf(u);return h!==-1&&c.splice(h,2),this},this.getHandler=function(u){for(let h=0,f=c.length;h<f;h+=2){const d=c[h],g=c[h+1];if(d.global&&(d.lastIndex=0),d.test(u))return g}return null}}}const H1=new V1;class Ur{constructor(e){this.manager=e!==void 0?e:H1,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(s,r){n.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}const Wn={};class G1 extends Error{constructor(e,t){super(e),this.response=t}}class Up extends Ur{constructor(e){super(e)}load(e,t,n,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=Bo.get(e);if(r!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0),r;if(Wn[e]!==void 0){Wn[e].push({onLoad:t,onProgress:n,onError:s});return}Wn[e]=[],Wn[e].push({onLoad:t,onProgress:n,onError:s});const o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),a=this.mimeType,l=this.responseType;fetch(o).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;const u=Wn[e],h=c.body.getReader(),f=c.headers.get("Content-Length")||c.headers.get("X-File-Size"),d=f?parseInt(f):0,g=d!==0;let p=0;const m=new ReadableStream({start(_){M();function M(){h.read().then(({done:x,value:w})=>{if(x)_.close();else{p+=w.byteLength;const S=new ProgressEvent("progress",{lengthComputable:g,loaded:p,total:d});for(let P=0,I=u.length;P<I;P++){const v=u[P];v.onProgress&&v.onProgress(S)}_.enqueue(w),M()}})}}});return new Response(m)}else throw new G1(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(u=>new DOMParser().parseFromString(u,a));case"json":return c.json();default:if(a===void 0)return c.text();{const h=/charset="?([^;"\s]*)"?/i.exec(a),f=h&&h[1]?h[1].toLowerCase():void 0,d=new TextDecoder(f);return c.arrayBuffer().then(g=>d.decode(g))}}}).then(c=>{Bo.add(e,c);const u=Wn[e];delete Wn[e];for(let h=0,f=u.length;h<f;h++){const d=u[h];d.onLoad&&d.onLoad(c)}}).catch(c=>{const u=Wn[e];if(u===void 0)throw this.manager.itemError(e),c;delete Wn[e];for(let h=0,f=u.length;h<f;h++){const d=u[h];d.onError&&d.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class W1 extends Ur{constructor(e){super(e)}load(e,t,n,s){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,o=Bo.get(e);if(o!==void 0)return r.manager.itemStart(e),setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0),o;const a=Ar("img");function l(){u(),Bo.add(e,this),t&&t(this),r.manager.itemEnd(e)}function c(h){u(),s&&s(h),r.manager.itemError(e),r.manager.itemEnd(e)}function u(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),r.manager.itemStart(e),a.src=e,a}}class la extends Ur{constructor(e){super(e)}load(e,t,n,s){const r=new Ct,o=new W1(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){r.image=a,r.needsUpdate=!0,t!==void 0&&t(r)},n,s),r}}class ca extends ot{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Pe(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}}const cl=new De,df=new D,pf=new D;class Nc{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new xe(512,512),this.map=null,this.mapPass=null,this.matrix=new De,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Sc,this._frameExtents=new xe(1,1),this._viewportCount=1,this._viewports=[new Qe(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;df.setFromMatrixPosition(e.matrixWorld),t.position.copy(df),pf.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(pf),t.updateMatrixWorld(),cl.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(cl),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(cl)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class X1 extends Nc{constructor(){super(new kt(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){const t=this.camera,n=Er*2*e.angle*this.focus,s=this.mapSize.width/this.mapSize.height,r=e.distance||t.far;(n!==t.fov||s!==t.aspect||r!==t.far)&&(t.fov=n,t.aspect=s,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class j1 extends ca{constructor(e,t,n=0,s=Math.PI/3,r=0,o=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(ot.DEFAULT_UP),this.updateMatrix(),this.target=new ot,this.distance=n,this.angle=s,this.penumbra=r,this.decay=o,this.map=null,this.shadow=new X1}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const mf=new De,Qs=new D,ul=new D;class q1 extends Nc{constructor(){super(new kt(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new xe(4,2),this._viewportCount=6,this._viewports=[new Qe(2,1,1,1),new Qe(0,1,1,1),new Qe(3,1,1,1),new Qe(1,1,1,1),new Qe(3,0,1,1),new Qe(1,0,1,1)],this._cubeDirections=[new D(1,0,0),new D(-1,0,0),new D(0,0,1),new D(0,0,-1),new D(0,1,0),new D(0,-1,0)],this._cubeUps=[new D(0,1,0),new D(0,1,0),new D(0,1,0),new D(0,1,0),new D(0,0,1),new D(0,0,-1)]}updateMatrices(e,t=0){const n=this.camera,s=this.matrix,r=e.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),Qs.setFromMatrixPosition(e.matrixWorld),n.position.copy(Qs),ul.copy(n.position),ul.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(ul),n.updateMatrixWorld(),s.makeTranslation(-Qs.x,-Qs.y,-Qs.z),mf.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(mf)}}class jl extends ca{constructor(e,t,n=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new q1}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class Y1 extends Nc{constructor(){super(new Tc(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Z1 extends ca{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(ot.DEFAULT_UP),this.updateMatrix(),this.target=new ot,this.shadow=new Y1}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class kp extends ca{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class $1{static decodeText(e){if(typeof TextDecoder<"u")return new TextDecoder().decode(e);let t="";for(let n=0,s=e.length;n<s;n++)t+=String.fromCharCode(e[n]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}class Bp{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=gf(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=gf();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function gf(){return(typeof performance>"u"?Date:performance).now()}const Uc="\\[\\]\\.:\\/",K1=new RegExp("["+Uc+"]","g"),kc="[^"+Uc+"]",J1="[^"+Uc.replace("\\.","")+"]",Q1=/((?:WC+[\/:])*)/.source.replace("WC",kc),eS=/(WCOD+)?/.source.replace("WCOD",J1),tS=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",kc),nS=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",kc),iS=new RegExp("^"+Q1+eS+tS+nS+"$"),sS=["material","materials","bones","map"];class rS{constructor(e,t,n){const s=n||Ke.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();const n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(e,t)}setValue(e,t){const n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}}class Ke{constructor(e,t,n){this.path=t,this.parsedPath=n||Ke.parseTrackName(t),this.node=Ke.findNode(e,this.parsedPath.nodeName)||e,this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new Ke.Composite(e,t,n):new Ke(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(K1,"")}static parseTrackName(e){const t=iS.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){const r=n.nodeName.substring(s+1);sS.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){const n=function(r){for(let o=0;o<r.length;o++){const a=r[o];if(a.name===t||a.uuid===t)return a;const l=n(a.children);if(l)return l}return null},s=n(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)e[t++]=n[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,n=t.objectName,s=t.propertyName;let r=t.propertyIndex;if(e||(e=Ke.findNode(this.rootNode,t.nodeName)||this.rootNode,this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.error("THREE.PropertyBinding: Trying to update node for track: "+this.path+" but it wasn't found.");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let u=0;u<e.length;u++)if(e[u].name===c){c=u;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}const o=e[s];if(o===void 0){const c=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}Ke.Composite=rS;Ke.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Ke.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Ke.prototype.GetterByBindingType=[Ke.prototype._getValue_direct,Ke.prototype._getValue_array,Ke.prototype._getValue_arrayElement,Ke.prototype._getValue_toArray];Ke.prototype.SetterByBindingTypeAndVersioning=[[Ke.prototype._setValue_direct,Ke.prototype._setValue_direct_setNeedsUpdate,Ke.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Ke.prototype._setValue_array,Ke.prototype._setValue_array_setNeedsUpdate,Ke.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Ke.prototype._setValue_arrayElement,Ke.prototype._setValue_arrayElement_setNeedsUpdate,Ke.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Ke.prototype._setValue_fromArray,Ke.prototype._setValue_fromArray_setNeedsUpdate,Ke.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];class oS{constructor(e,t,n=0,s=1/0){this.ray=new ia(e,t),this.near=n,this.far=s,this.camera=null,this.layers=new Mc,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}intersectObject(e,t=!0,n=[]){return ql(e,this,n,t),n.sort(_f),n}intersectObjects(e,t=!0,n=[]){for(let s=0,r=e.length;s<r;s++)ql(e[s],this,n,t);return n.sort(_f),n}}function _f(i,e){return i.distance-e.distance}function ql(i,e,t,n){if(i.layers.test(e.layers)&&i.raycast(e,t),n===!0){const s=i.children;for(let r=0,o=s.length;r<o;r++)ql(s[r],e,t,!0)}}class xf{constructor(e=1,t=0,n=0){return this.radius=e,this.phi=t,this.theta=n,this}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(At(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}const Mo=new D,ft=new wc;class aS extends wp{constructor(e){const t=new ct,n=new Cc({color:16777215,vertexColors:!0,toneMapped:!1}),s=[],r=[],o={};a("n1","n2"),a("n2","n4"),a("n4","n3"),a("n3","n1"),a("f1","f2"),a("f2","f4"),a("f4","f3"),a("f3","f1"),a("n1","f1"),a("n2","f2"),a("n3","f3"),a("n4","f4"),a("p","n1"),a("p","n2"),a("p","n3"),a("p","n4"),a("u1","u2"),a("u2","u3"),a("u3","u1"),a("c","t"),a("p","c"),a("cn1","cn2"),a("cn3","cn4"),a("cf1","cf2"),a("cf3","cf4");function a(g,p){l(g),l(p)}function l(g){s.push(0,0,0),r.push(0,0,0),o[g]===void 0&&(o[g]=[]),o[g].push(s.length/3-1)}t.setAttribute("position",new ke(s,3)),t.setAttribute("color",new ke(r,3)),super(t,n),this.type="CameraHelper",this.camera=e,this.camera.updateProjectionMatrix&&this.camera.updateProjectionMatrix(),this.matrix=e.matrixWorld,this.matrixAutoUpdate=!1,this.pointMap=o,this.update();const c=new Pe(16755200),u=new Pe(16711680),h=new Pe(43775),f=new Pe(16777215),d=new Pe(3355443);this.setColors(c,u,h,f,d)}setColors(e,t,n,s,r){const a=this.geometry.getAttribute("color");a.setXYZ(0,e.r,e.g,e.b),a.setXYZ(1,e.r,e.g,e.b),a.setXYZ(2,e.r,e.g,e.b),a.setXYZ(3,e.r,e.g,e.b),a.setXYZ(4,e.r,e.g,e.b),a.setXYZ(5,e.r,e.g,e.b),a.setXYZ(6,e.r,e.g,e.b),a.setXYZ(7,e.r,e.g,e.b),a.setXYZ(8,e.r,e.g,e.b),a.setXYZ(9,e.r,e.g,e.b),a.setXYZ(10,e.r,e.g,e.b),a.setXYZ(11,e.r,e.g,e.b),a.setXYZ(12,e.r,e.g,e.b),a.setXYZ(13,e.r,e.g,e.b),a.setXYZ(14,e.r,e.g,e.b),a.setXYZ(15,e.r,e.g,e.b),a.setXYZ(16,e.r,e.g,e.b),a.setXYZ(17,e.r,e.g,e.b),a.setXYZ(18,e.r,e.g,e.b),a.setXYZ(19,e.r,e.g,e.b),a.setXYZ(20,e.r,e.g,e.b),a.setXYZ(21,e.r,e.g,e.b),a.setXYZ(22,e.r,e.g,e.b),a.setXYZ(23,e.r,e.g,e.b),a.setXYZ(24,t.r,t.g,t.b),a.setXYZ(25,t.r,t.g,t.b),a.setXYZ(26,t.r,t.g,t.b),a.setXYZ(27,t.r,t.g,t.b),a.setXYZ(28,t.r,t.g,t.b),a.setXYZ(29,t.r,t.g,t.b),a.setXYZ(30,t.r,t.g,t.b),a.setXYZ(31,t.r,t.g,t.b),a.setXYZ(32,n.r,n.g,n.b),a.setXYZ(33,n.r,n.g,n.b),a.setXYZ(34,n.r,n.g,n.b),a.setXYZ(35,n.r,n.g,n.b),a.setXYZ(36,n.r,n.g,n.b),a.setXYZ(37,n.r,n.g,n.b),a.setXYZ(38,s.r,s.g,s.b),a.setXYZ(39,s.r,s.g,s.b),a.setXYZ(40,r.r,r.g,r.b),a.setXYZ(41,r.r,r.g,r.b),a.setXYZ(42,r.r,r.g,r.b),a.setXYZ(43,r.r,r.g,r.b),a.setXYZ(44,r.r,r.g,r.b),a.setXYZ(45,r.r,r.g,r.b),a.setXYZ(46,r.r,r.g,r.b),a.setXYZ(47,r.r,r.g,r.b),a.setXYZ(48,r.r,r.g,r.b),a.setXYZ(49,r.r,r.g,r.b),a.needsUpdate=!0}update(){const e=this.geometry,t=this.pointMap,n=1,s=1;ft.projectionMatrixInverse.copy(this.camera.projectionMatrixInverse),dt("c",t,e,ft,0,0,-1),dt("t",t,e,ft,0,0,1),dt("n1",t,e,ft,-n,-s,-1),dt("n2",t,e,ft,n,-s,-1),dt("n3",t,e,ft,-n,s,-1),dt("n4",t,e,ft,n,s,-1),dt("f1",t,e,ft,-n,-s,1),dt("f2",t,e,ft,n,-s,1),dt("f3",t,e,ft,-n,s,1),dt("f4",t,e,ft,n,s,1),dt("u1",t,e,ft,n*.7,s*1.1,-1),dt("u2",t,e,ft,-n*.7,s*1.1,-1),dt("u3",t,e,ft,0,s*2,-1),dt("cf1",t,e,ft,-n,0,1),dt("cf2",t,e,ft,n,0,1),dt("cf3",t,e,ft,0,-s,1),dt("cf4",t,e,ft,0,s,1),dt("cn1",t,e,ft,-n,0,-1),dt("cn2",t,e,ft,n,0,-1),dt("cn3",t,e,ft,0,-s,-1),dt("cn4",t,e,ft,0,s,-1),e.getAttribute("position").needsUpdate=!0}dispose(){this.geometry.dispose(),this.material.dispose()}}function dt(i,e,t,n,s,r,o){Mo.set(s,r,o).unproject(n);const a=e[i];if(a!==void 0){const l=t.getAttribute("position");for(let c=0,u=a.length;c<u;c++)l.setXYZ(a[c],Mo.x,Mo.y,Mo.z)}}class lS{constructor(){this.type="ShapePath",this.color=new Pe,this.subPaths=[],this.currentPath=null}moveTo(e,t){return this.currentPath=new Gl,this.subPaths.push(this.currentPath),this.currentPath.moveTo(e,t),this}lineTo(e,t){return this.currentPath.lineTo(e,t),this}quadraticCurveTo(e,t,n,s){return this.currentPath.quadraticCurveTo(e,t,n,s),this}bezierCurveTo(e,t,n,s,r,o){return this.currentPath.bezierCurveTo(e,t,n,s,r,o),this}splineThru(e){return this.currentPath.splineThru(e),this}toShapes(e){function t(_){const M=[];for(let x=0,w=_.length;x<w;x++){const S=_[x],P=new As;P.curves=S.curves,M.push(P)}return M}function n(_,M){const x=M.length;let w=!1;for(let S=x-1,P=0;P<x;S=P++){let I=M[S],v=M[P],A=v.x-I.x,R=v.y-I.y;if(Math.abs(R)>Number.EPSILON){if(R<0&&(I=M[P],A=-A,v=M[S],R=-R),_.y<I.y||_.y>v.y)continue;if(_.y===I.y){if(_.x===I.x)return!0}else{const j=R*(_.x-I.x)-A*(_.y-I.y);if(j===0)return!0;if(j<0)continue;w=!w}}else{if(_.y!==I.y)continue;if(v.x<=_.x&&_.x<=I.x||I.x<=_.x&&_.x<=v.x)return!0}}return w}const s=$n.isClockWise,r=this.subPaths;if(r.length===0)return[];let o,a,l;const c=[];if(r.length===1)return a=r[0],l=new As,l.curves=a.curves,c.push(l),c;let u=!s(r[0].getPoints());u=e?!u:u;const h=[],f=[];let d=[],g=0,p;f[g]=void 0,d[g]=[];for(let _=0,M=r.length;_<M;_++)a=r[_],p=a.getPoints(),o=s(p),o=e?!o:o,o?(!u&&f[g]&&g++,f[g]={s:new As,p},f[g].s.curves=a.curves,u&&g++,d[g]=[]):d[g].push({h:a,p:p[0]});if(!f[0])return t(r);if(f.length>1){let _=!1,M=0;for(let x=0,w=f.length;x<w;x++)h[x]=[];for(let x=0,w=f.length;x<w;x++){const S=d[x];for(let P=0;P<S.length;P++){const I=S[P];let v=!0;for(let A=0;A<f.length;A++)n(I.p,f[A].p)&&(x!==A&&M++,v?(v=!1,h[A].push(I)):_=!0);v&&h[x].push(I)}}M>0&&_===!1&&(d=h)}let m;for(let _=0,M=f.length;_<M;_++){l=f[_].s,c.push(l),m=d[_];for(let x=0,w=m.length;x<w;x++)l.holes.push(m[x].h)}return c}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:vc}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=vc);var Lo={Linear:{None:function(i){return i}},Quadratic:{In:function(i){return i*i},Out:function(i){return i*(2-i)},InOut:function(i){return(i*=2)<1?.5*i*i:-.5*(--i*(i-2)-1)}},Cubic:{In:function(i){return i*i*i},Out:function(i){return--i*i*i+1},InOut:function(i){return(i*=2)<1?.5*i*i*i:.5*((i-=2)*i*i+2)}},Quartic:{In:function(i){return i*i*i*i},Out:function(i){return 1- --i*i*i*i},InOut:function(i){return(i*=2)<1?.5*i*i*i*i:-.5*((i-=2)*i*i*i-2)}},Quintic:{In:function(i){return i*i*i*i*i},Out:function(i){return--i*i*i*i*i+1},InOut:function(i){return(i*=2)<1?.5*i*i*i*i*i:.5*((i-=2)*i*i*i*i+2)}},Sinusoidal:{In:function(i){return 1-Math.cos(i*Math.PI/2)},Out:function(i){return Math.sin(i*Math.PI/2)},InOut:function(i){return .5*(1-Math.cos(Math.PI*i))}},Exponential:{In:function(i){return i===0?0:Math.pow(1024,i-1)},Out:function(i){return i===1?1:1-Math.pow(2,-10*i)},InOut:function(i){return i===0?0:i===1?1:(i*=2)<1?.5*Math.pow(1024,i-1):.5*(-Math.pow(2,-10*(i-1))+2)}},Circular:{In:function(i){return 1-Math.sqrt(1-i*i)},Out:function(i){return Math.sqrt(1- --i*i)},InOut:function(i){return(i*=2)<1?-.5*(Math.sqrt(1-i*i)-1):.5*(Math.sqrt(1-(i-=2)*i)+1)}},Elastic:{In:function(i){return i===0?0:i===1?1:-Math.pow(2,10*(i-1))*Math.sin((i-1.1)*5*Math.PI)},Out:function(i){return i===0?0:i===1?1:Math.pow(2,-10*i)*Math.sin((i-.1)*5*Math.PI)+1},InOut:function(i){return i===0?0:i===1?1:(i*=2,i<1?-.5*Math.pow(2,10*(i-1))*Math.sin((i-1.1)*5*Math.PI):.5*Math.pow(2,-10*(i-1))*Math.sin((i-1.1)*5*Math.PI)+1)}},Back:{In:function(i){var e=1.70158;return i*i*((e+1)*i-e)},Out:function(i){var e=1.70158;return--i*i*((e+1)*i+e)+1},InOut:function(i){var e=2.5949095;return(i*=2)<1?.5*(i*i*((e+1)*i-e)):.5*((i-=2)*i*((e+1)*i+e)+2)}},Bounce:{In:function(i){return 1-Lo.Bounce.Out(1-i)},Out:function(i){return i<1/2.75?7.5625*i*i:i<2/2.75?7.5625*(i-=1.5/2.75)*i+.75:i<2.5/2.75?7.5625*(i-=2.25/2.75)*i+.9375:7.5625*(i-=2.625/2.75)*i+.984375},InOut:function(i){return i<.5?Lo.Bounce.In(i*2)*.5:Lo.Bounce.Out(i*2-1)*.5+.5}}},rr;typeof self>"u"&&typeof process<"u"&&process.hrtime?rr=function(){var i=process.hrtime();return i[0]*1e3+i[1]/1e6}:typeof self<"u"&&self.performance!==void 0&&self.performance.now!==void 0?rr=self.performance.now.bind(self.performance):Date.now!==void 0?rr=Date.now:rr=function(){return new Date().getTime()};var ps=rr,cS=function(){function i(){this._tweens={},this._tweensAddedDuringUpdate={}}return i.prototype.getAll=function(){var e=this;return Object.keys(this._tweens).map(function(t){return e._tweens[t]})},i.prototype.removeAll=function(){this._tweens={}},i.prototype.add=function(e){this._tweens[e.getId()]=e,this._tweensAddedDuringUpdate[e.getId()]=e},i.prototype.remove=function(e){delete this._tweens[e.getId()],delete this._tweensAddedDuringUpdate[e.getId()]},i.prototype.update=function(e,t){e===void 0&&(e=ps()),t===void 0&&(t=!1);var n=Object.keys(this._tweens);if(n.length===0)return!1;for(;n.length>0;){this._tweensAddedDuringUpdate={};for(var s=0;s<n.length;s++){var r=this._tweens[n[s]],o=!t;r&&r.update(e,o)===!1&&!t&&delete this._tweens[n[s]]}n=Object.keys(this._tweensAddedDuringUpdate)}return!0},i}(),or={Linear:function(i,e){var t=i.length-1,n=t*e,s=Math.floor(n),r=or.Utils.Linear;return e<0?r(i[0],i[1],n):e>1?r(i[t],i[t-1],t-n):r(i[s],i[s+1>t?t:s+1],n-s)},Bezier:function(i,e){for(var t=0,n=i.length-1,s=Math.pow,r=or.Utils.Bernstein,o=0;o<=n;o++)t+=s(1-e,n-o)*s(e,o)*i[o]*r(n,o);return t},CatmullRom:function(i,e){var t=i.length-1,n=t*e,s=Math.floor(n),r=or.Utils.CatmullRom;return i[0]===i[t]?(e<0&&(s=Math.floor(n=t*(1+e))),r(i[(s-1+t)%t],i[s],i[(s+1)%t],i[(s+2)%t],n-s)):e<0?i[0]-(r(i[0],i[0],i[1],i[1],-n)-i[0]):e>1?i[t]-(r(i[t],i[t],i[t-1],i[t-1],n-t)-i[t]):r(i[s?s-1:0],i[s],i[t<s+1?t:s+1],i[t<s+2?t:s+2],n-s)},Utils:{Linear:function(i,e,t){return(e-i)*t+i},Bernstein:function(i,e){var t=or.Utils.Factorial;return t(i)/t(e)/t(i-e)},Factorial:function(){var i=[1];return function(e){var t=1;if(i[e])return i[e];for(var n=e;n>1;n--)t*=n;return i[e]=t,t}}(),CatmullRom:function(i,e,t,n,s){var r=(t-i)*.5,o=(n-e)*.5,a=s*s,l=s*a;return(2*e-2*t+r+o)*l+(-3*e+3*t-2*r-o)*a+r*s+e}}},uS=function(){function i(){}return i.nextId=function(){return i._nextId++},i._nextId=0,i}(),Vp=new cS,Vo=function(){function i(e,t){t===void 0&&(t=Vp),this._object=e,this._group=t,this._isPaused=!1,this._pauseStart=0,this._valuesStart={},this._valuesEnd={},this._valuesStartRepeat={},this._duration=1e3,this._initialRepeat=0,this._repeat=0,this._yoyo=!1,this._isPlaying=!1,this._reversed=!1,this._delayTime=0,this._startTime=0,this._easingFunction=Lo.Linear.None,this._interpolationFunction=or.Linear,this._chainedTweens=[],this._onStartCallbackFired=!1,this._id=uS.nextId(),this._isChainStopped=!1,this._goToEnd=!1}return i.prototype.getId=function(){return this._id},i.prototype.isPlaying=function(){return this._isPlaying},i.prototype.isPaused=function(){return this._isPaused},i.prototype.to=function(e,t){return this._valuesEnd=Object.create(e),t!==void 0&&(this._duration=t),this},i.prototype.duration=function(e){return this._duration=e,this},i.prototype.start=function(e){if(this._isPlaying)return this;if(this._group&&this._group.add(this),this._repeat=this._initialRepeat,this._reversed){this._reversed=!1;for(var t in this._valuesStartRepeat)this._swapEndStartRepeatValues(t),this._valuesStart[t]=this._valuesStartRepeat[t]}return this._isPlaying=!0,this._isPaused=!1,this._onStartCallbackFired=!1,this._isChainStopped=!1,this._startTime=e!==void 0?typeof e=="string"?ps()+parseFloat(e):e:ps(),this._startTime+=this._delayTime,this._setupProperties(this._object,this._valuesStart,this._valuesEnd,this._valuesStartRepeat),this},i.prototype._setupProperties=function(e,t,n,s){for(var r in n){var o=e[r],a=Array.isArray(o),l=a?"array":typeof o,c=!a&&Array.isArray(n[r]);if(!(l==="undefined"||l==="function")){if(c){var u=n[r];if(u.length===0)continue;u=u.map(this._handleRelativeValue.bind(this,o)),n[r]=[o].concat(u)}if((l==="object"||a)&&o&&!c){t[r]=a?[]:{};for(var h in o)t[r][h]=o[h];s[r]=a?[]:{},this._setupProperties(o,t[r],n[r],s[r])}else typeof t[r]>"u"&&(t[r]=o),a||(t[r]*=1),c?s[r]=n[r].slice().reverse():s[r]=t[r]||0}}},i.prototype.stop=function(){return this._isChainStopped||(this._isChainStopped=!0,this.stopChainedTweens()),this._isPlaying?(this._group&&this._group.remove(this),this._isPlaying=!1,this._isPaused=!1,this._onStopCallback&&this._onStopCallback(this._object),this):this},i.prototype.end=function(){return this._goToEnd=!0,this.update(1/0),this},i.prototype.pause=function(e){return e===void 0&&(e=ps()),this._isPaused||!this._isPlaying?this:(this._isPaused=!0,this._pauseStart=e,this._group&&this._group.remove(this),this)},i.prototype.resume=function(e){return e===void 0&&(e=ps()),!this._isPaused||!this._isPlaying?this:(this._isPaused=!1,this._startTime+=e-this._pauseStart,this._pauseStart=0,this._group&&this._group.add(this),this)},i.prototype.stopChainedTweens=function(){for(var e=0,t=this._chainedTweens.length;e<t;e++)this._chainedTweens[e].stop();return this},i.prototype.group=function(e){return this._group=e,this},i.prototype.delay=function(e){return this._delayTime=e,this},i.prototype.repeat=function(e){return this._initialRepeat=e,this._repeat=e,this},i.prototype.repeatDelay=function(e){return this._repeatDelayTime=e,this},i.prototype.yoyo=function(e){return this._yoyo=e,this},i.prototype.easing=function(e){return this._easingFunction=e,this},i.prototype.interpolation=function(e){return this._interpolationFunction=e,this},i.prototype.chain=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];return this._chainedTweens=e,this},i.prototype.onStart=function(e){return this._onStartCallback=e,this},i.prototype.onUpdate=function(e){return this._onUpdateCallback=e,this},i.prototype.onRepeat=function(e){return this._onRepeatCallback=e,this},i.prototype.onComplete=function(e){return this._onCompleteCallback=e,this},i.prototype.onStop=function(e){return this._onStopCallback=e,this},i.prototype.update=function(e,t){if(e===void 0&&(e=ps()),t===void 0&&(t=!0),this._isPaused)return!0;var n,s,r=this._startTime+this._duration;if(!this._goToEnd&&!this._isPlaying){if(e>r)return!1;t&&this.start(e)}if(this._goToEnd=!1,e<this._startTime)return!0;this._onStartCallbackFired===!1&&(this._onStartCallback&&this._onStartCallback(this._object),this._onStartCallbackFired=!0),s=(e-this._startTime)/this._duration,s=this._duration===0||s>1?1:s;var o=this._easingFunction(s);if(this._updateProperties(this._object,this._valuesStart,this._valuesEnd,o),this._onUpdateCallback&&this._onUpdateCallback(this._object,s),s===1)if(this._repeat>0){isFinite(this._repeat)&&this._repeat--;for(n in this._valuesStartRepeat)!this._yoyo&&typeof this._valuesEnd[n]=="string"&&(this._valuesStartRepeat[n]=this._valuesStartRepeat[n]+parseFloat(this._valuesEnd[n])),this._yoyo&&this._swapEndStartRepeatValues(n),this._valuesStart[n]=this._valuesStartRepeat[n];return this._yoyo&&(this._reversed=!this._reversed),this._repeatDelayTime!==void 0?this._startTime=e+this._repeatDelayTime:this._startTime=e+this._delayTime,this._onRepeatCallback&&this._onRepeatCallback(this._object),!0}else{this._onCompleteCallback&&this._onCompleteCallback(this._object);for(var a=0,l=this._chainedTweens.length;a<l;a++)this._chainedTweens[a].start(this._startTime+this._duration);return this._isPlaying=!1,!1}return!0},i.prototype._updateProperties=function(e,t,n,s){for(var r in n)if(t[r]!==void 0){var o=t[r]||0,a=n[r],l=Array.isArray(e[r]),c=Array.isArray(a),u=!l&&c;u?e[r]=this._interpolationFunction(a,s):typeof a=="object"&&a?this._updateProperties(e[r],o,a,s):(a=this._handleRelativeValue(o,a),typeof a=="number"&&(e[r]=o+(a-o)*s))}},i.prototype._handleRelativeValue=function(e,t){return typeof t!="string"?t:t.charAt(0)==="+"||t.charAt(0)==="-"?e+parseFloat(t):parseFloat(t)},i.prototype._swapEndStartRepeatValues=function(e){var t=this._valuesStartRepeat[e],n=this._valuesEnd[e];typeof n=="string"?this._valuesStartRepeat[e]=this._valuesStartRepeat[e]+parseFloat(n):this._valuesStartRepeat[e]=this._valuesEnd[e],this._valuesEnd[e]=t},i}(),In=Vp;In.getAll.bind(In);In.removeAll.bind(In);In.add.bind(In);In.remove.bind(In);In.update.bind(In);const vf={type:"change"},hl={type:"start"},yf={type:"end"};class hS extends qi{constructor(e,t){super(),this.object=e,this.domElement=t,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new D,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Zi.ROTATE,MIDDLE:Zi.DOLLY,RIGHT:Zi.PAN},this.touches={ONE:$i.ROTATE,TWO:$i.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return a.phi},this.getAzimuthalAngle=function(){return a.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(L){L.addEventListener("keydown",ne),this._domElementKeyEvents=L},this.saveState=function(){n.target0.copy(n.target),n.position0.copy(n.object.position),n.zoom0=n.object.zoom},this.reset=function(){n.target.copy(n.target0),n.object.position.copy(n.position0),n.object.zoom=n.zoom0,n.object.updateProjectionMatrix(),n.dispatchEvent(vf),n.update(),r=s.NONE},this.update=function(){const L=new D,G=new un().setFromUnitVectors(e.up,new D(0,1,0)),we=G.clone().invert(),Ae=new D,Te=new un,Le=2*Math.PI;return function(){const Fe=n.object.position;L.copy(Fe).sub(n.target),L.applyQuaternion(G),a.setFromVector3(L),n.autoRotate&&r===s.NONE&&A(I()),n.enableDamping?(a.theta+=l.theta*n.dampingFactor,a.phi+=l.phi*n.dampingFactor):(a.theta+=l.theta,a.phi+=l.phi);let Ve=n.minAzimuthAngle,st=n.maxAzimuthAngle;return isFinite(Ve)&&isFinite(st)&&(Ve<-Math.PI?Ve+=Le:Ve>Math.PI&&(Ve-=Le),st<-Math.PI?st+=Le:st>Math.PI&&(st-=Le),Ve<=st?a.theta=Math.max(Ve,Math.min(st,a.theta)):a.theta=a.theta>(Ve+st)/2?Math.max(Ve,a.theta):Math.min(st,a.theta)),a.phi=Math.max(n.minPolarAngle,Math.min(n.maxPolarAngle,a.phi)),a.makeSafe(),a.radius*=c,a.radius=Math.max(n.minDistance,Math.min(n.maxDistance,a.radius)),n.enableDamping===!0?n.target.addScaledVector(u,n.dampingFactor):n.target.add(u),L.setFromSpherical(a),L.applyQuaternion(we),Fe.copy(n.target).add(L),n.object.lookAt(n.target),n.enableDamping===!0?(l.theta*=1-n.dampingFactor,l.phi*=1-n.dampingFactor,u.multiplyScalar(1-n.dampingFactor)):(l.set(0,0,0),u.set(0,0,0)),c=1,h||Ae.distanceToSquared(n.object.position)>o||8*(1-Te.dot(n.object.quaternion))>o?(n.dispatchEvent(vf),Ae.copy(n.object.position),Te.copy(n.object.quaternion),h=!1,!0):!1}}(),this.dispose=function(){n.domElement.removeEventListener("contextmenu",U),n.domElement.removeEventListener("pointerdown",F),n.domElement.removeEventListener("pointercancel",te),n.domElement.removeEventListener("wheel",he),n.domElement.removeEventListener("pointermove",H),n.domElement.removeEventListener("pointerup",B),n._domElementKeyEvents!==null&&n._domElementKeyEvents.removeEventListener("keydown",ne)};const n=this,s={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let r=s.NONE;const o=1e-6,a=new xf,l=new xf;let c=1;const u=new D;let h=!1;const f=new xe,d=new xe,g=new xe,p=new xe,m=new xe,_=new xe,M=new xe,x=new xe,w=new xe,S=[],P={};function I(){return 2*Math.PI/60/60*n.autoRotateSpeed}function v(){return Math.pow(.95,n.zoomSpeed)}function A(L){l.theta-=L}function R(L){l.phi-=L}const j=function(){const L=new D;return function(we,Ae){L.setFromMatrixColumn(Ae,0),L.multiplyScalar(-we),u.add(L)}}(),Q=function(){const L=new D;return function(we,Ae){n.screenSpacePanning===!0?L.setFromMatrixColumn(Ae,1):(L.setFromMatrixColumn(Ae,0),L.crossVectors(n.object.up,L)),L.multiplyScalar(we),u.add(L)}}(),k=function(){const L=new D;return function(we,Ae){const Te=n.domElement;if(n.object.isPerspectiveCamera){const Le=n.object.position;L.copy(Le).sub(n.target);let Ee=L.length();Ee*=Math.tan(n.object.fov/2*Math.PI/180),j(2*we*Ee/Te.clientHeight,n.object.matrix),Q(2*Ae*Ee/Te.clientHeight,n.object.matrix)}else n.object.isOrthographicCamera?(j(we*(n.object.right-n.object.left)/n.object.zoom/Te.clientWidth,n.object.matrix),Q(Ae*(n.object.top-n.object.bottom)/n.object.zoom/Te.clientHeight,n.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),n.enablePan=!1)}}();function z(L){n.object.isPerspectiveCamera?c/=L:n.object.isOrthographicCamera?(n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom*L)),n.object.updateProjectionMatrix(),h=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function J(L){n.object.isPerspectiveCamera?c*=L:n.object.isOrthographicCamera?(n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/L)),n.object.updateProjectionMatrix(),h=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function $(L){f.set(L.clientX,L.clientY)}function ie(L){M.set(L.clientX,L.clientY)}function Y(L){p.set(L.clientX,L.clientY)}function fe(L){d.set(L.clientX,L.clientY),g.subVectors(d,f).multiplyScalar(n.rotateSpeed);const G=n.domElement;A(2*Math.PI*g.x/G.clientHeight),R(2*Math.PI*g.y/G.clientHeight),f.copy(d),n.update()}function de(L){x.set(L.clientX,L.clientY),w.subVectors(x,M),w.y>0?z(v()):w.y<0&&J(v()),M.copy(x),n.update()}function ye(L){m.set(L.clientX,L.clientY),_.subVectors(m,p).multiplyScalar(n.panSpeed),k(_.x,_.y),p.copy(m),n.update()}function W(L){L.deltaY<0?J(v()):L.deltaY>0&&z(v()),n.update()}function oe(L){let G=!1;switch(L.code){case n.keys.UP:L.ctrlKey||L.metaKey||L.shiftKey?R(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):k(0,n.keyPanSpeed),G=!0;break;case n.keys.BOTTOM:L.ctrlKey||L.metaKey||L.shiftKey?R(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):k(0,-n.keyPanSpeed),G=!0;break;case n.keys.LEFT:L.ctrlKey||L.metaKey||L.shiftKey?A(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):k(n.keyPanSpeed,0),G=!0;break;case n.keys.RIGHT:L.ctrlKey||L.metaKey||L.shiftKey?A(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):k(-n.keyPanSpeed,0),G=!0;break}G&&(L.preventDefault(),n.update())}function ve(){if(S.length===1)f.set(S[0].pageX,S[0].pageY);else{const L=.5*(S[0].pageX+S[1].pageX),G=.5*(S[0].pageY+S[1].pageY);f.set(L,G)}}function N(){if(S.length===1)p.set(S[0].pageX,S[0].pageY);else{const L=.5*(S[0].pageX+S[1].pageX),G=.5*(S[0].pageY+S[1].pageY);p.set(L,G)}}function O(){const L=S[0].pageX-S[1].pageX,G=S[0].pageY-S[1].pageY,we=Math.sqrt(L*L+G*G);M.set(0,we)}function ee(){n.enableZoom&&O(),n.enablePan&&N()}function ce(){n.enableZoom&&O(),n.enableRotate&&ve()}function ge(L){if(S.length==1)d.set(L.pageX,L.pageY);else{const we=be(L),Ae=.5*(L.pageX+we.x),Te=.5*(L.pageY+we.y);d.set(Ae,Te)}g.subVectors(d,f).multiplyScalar(n.rotateSpeed);const G=n.domElement;A(2*Math.PI*g.x/G.clientHeight),R(2*Math.PI*g.y/G.clientHeight),f.copy(d)}function pe(L){if(S.length===1)m.set(L.pageX,L.pageY);else{const G=be(L),we=.5*(L.pageX+G.x),Ae=.5*(L.pageY+G.y);m.set(we,Ae)}_.subVectors(m,p).multiplyScalar(n.panSpeed),k(_.x,_.y),p.copy(m)}function Me(L){const G=be(L),we=L.pageX-G.x,Ae=L.pageY-G.y,Te=Math.sqrt(we*we+Ae*Ae);x.set(0,Te),w.set(0,Math.pow(x.y/M.y,n.zoomSpeed)),z(w.y),M.copy(x)}function y(L){n.enableZoom&&Me(L),n.enablePan&&pe(L)}function T(L){n.enableZoom&&Me(L),n.enableRotate&&ge(L)}function F(L){n.enabled!==!1&&(S.length===0&&(n.domElement.setPointerCapture(L.pointerId),n.domElement.addEventListener("pointermove",H),n.domElement.addEventListener("pointerup",B)),K(L),L.pointerType==="touch"?E(L):se(L))}function H(L){n.enabled!==!1&&(L.pointerType==="touch"?b(L):Z(L))}function B(L){re(L),S.length===0&&(n.domElement.releasePointerCapture(L.pointerId),n.domElement.removeEventListener("pointermove",H),n.domElement.removeEventListener("pointerup",B)),n.dispatchEvent(yf),r=s.NONE}function te(L){re(L)}function se(L){let G;switch(L.button){case 0:G=n.mouseButtons.LEFT;break;case 1:G=n.mouseButtons.MIDDLE;break;case 2:G=n.mouseButtons.RIGHT;break;default:G=-1}switch(G){case Zi.DOLLY:if(n.enableZoom===!1)return;ie(L),r=s.DOLLY;break;case Zi.ROTATE:if(L.ctrlKey||L.metaKey||L.shiftKey){if(n.enablePan===!1)return;Y(L),r=s.PAN}else{if(n.enableRotate===!1)return;$(L),r=s.ROTATE}break;case Zi.PAN:if(L.ctrlKey||L.metaKey||L.shiftKey){if(n.enableRotate===!1)return;$(L),r=s.ROTATE}else{if(n.enablePan===!1)return;Y(L),r=s.PAN}break;default:r=s.NONE}r!==s.NONE&&n.dispatchEvent(hl)}function Z(L){switch(r){case s.ROTATE:if(n.enableRotate===!1)return;fe(L);break;case s.DOLLY:if(n.enableZoom===!1)return;de(L);break;case s.PAN:if(n.enablePan===!1)return;ye(L);break}}function he(L){n.enabled===!1||n.enableZoom===!1||r!==s.NONE||(L.preventDefault(),n.dispatchEvent(hl),W(L),n.dispatchEvent(yf))}function ne(L){n.enabled===!1||n.enablePan===!1||oe(L)}function E(L){switch(me(L),S.length){case 1:switch(n.touches.ONE){case $i.ROTATE:if(n.enableRotate===!1)return;ve(),r=s.TOUCH_ROTATE;break;case $i.PAN:if(n.enablePan===!1)return;N(),r=s.TOUCH_PAN;break;default:r=s.NONE}break;case 2:switch(n.touches.TWO){case $i.DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;ee(),r=s.TOUCH_DOLLY_PAN;break;case $i.DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;ce(),r=s.TOUCH_DOLLY_ROTATE;break;default:r=s.NONE}break;default:r=s.NONE}r!==s.NONE&&n.dispatchEvent(hl)}function b(L){switch(me(L),r){case s.TOUCH_ROTATE:if(n.enableRotate===!1)return;ge(L),n.update();break;case s.TOUCH_PAN:if(n.enablePan===!1)return;pe(L),n.update();break;case s.TOUCH_DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;y(L),n.update();break;case s.TOUCH_DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;T(L),n.update();break;default:r=s.NONE}}function U(L){n.enabled!==!1&&L.preventDefault()}function K(L){S.push(L)}function re(L){delete P[L.pointerId];for(let G=0;G<S.length;G++)if(S[G].pointerId==L.pointerId){S.splice(G,1);return}}function me(L){let G=P[L.pointerId];G===void 0&&(G=new xe,P[L.pointerId]=G),G.set(L.pageX,L.pageY)}function be(L){const G=L.pointerId===S[0].pointerId?S[1]:S[0];return P[G.pointerId]}n.domElement.addEventListener("contextmenu",U),n.domElement.addEventListener("pointerdown",F),n.domElement.addEventListener("pointercancel",te),n.domElement.addEventListener("wheel",he,{passive:!1}),this.update()}}/*!
fflate - fast JavaScript compression/decompression
<https://101arrowz.github.io/fflate>
Licensed under MIT. https://github.com/101arrowz/fflate/blob/master/LICENSE
version 0.6.9
*/var Mf=function(i){return URL.createObjectURL(new Blob([i],{type:"text/javascript"}))};try{URL.revokeObjectURL(Mf(""))}catch{Mf=function(e){return"data:application/javascript;charset=UTF-8,"+encodeURI(e)}}var ln=Uint8Array,fi=Uint16Array,Yl=Uint32Array,Hp=new ln([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0,0]),Gp=new ln([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,0,0]),fS=new ln([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),Wp=function(i,e){for(var t=new fi(31),n=0;n<31;++n)t[n]=e+=1<<i[n-1];for(var s=new Yl(t[30]),n=1;n<30;++n)for(var r=t[n];r<t[n+1];++r)s[r]=r-t[n]<<5|n;return[t,s]},Xp=Wp(Hp,2),jp=Xp[0],dS=Xp[1];jp[28]=258,dS[258]=28;var pS=Wp(Gp,0),mS=pS[0],Zl=new fi(32768);for(var rt=0;rt<32768;++rt){var li=(rt&43690)>>>1|(rt&21845)<<1;li=(li&52428)>>>2|(li&13107)<<2,li=(li&61680)>>>4|(li&3855)<<4,Zl[rt]=((li&65280)>>>8|(li&255)<<8)>>>1}var pr=function(i,e,t){for(var n=i.length,s=0,r=new fi(e);s<n;++s)++r[i[s]-1];var o=new fi(e);for(s=0;s<e;++s)o[s]=o[s-1]+r[s-1]<<1;var a;if(t){a=new fi(1<<e);var l=15-e;for(s=0;s<n;++s)if(i[s])for(var c=s<<4|i[s],u=e-i[s],h=o[i[s]-1]++<<u,f=h|(1<<u)-1;h<=f;++h)a[Zl[h]>>>l]=c}else for(a=new fi(n),s=0;s<n;++s)i[s]&&(a[s]=Zl[o[i[s]-1]++]>>>15-i[s]);return a},kr=new ln(288);for(var rt=0;rt<144;++rt)kr[rt]=8;for(var rt=144;rt<256;++rt)kr[rt]=9;for(var rt=256;rt<280;++rt)kr[rt]=7;for(var rt=280;rt<288;++rt)kr[rt]=8;var qp=new ln(32);for(var rt=0;rt<32;++rt)qp[rt]=5;var gS=pr(kr,9,1),_S=pr(qp,5,1),fl=function(i){for(var e=i[0],t=1;t<i.length;++t)i[t]>e&&(e=i[t]);return e},_n=function(i,e,t){var n=e/8|0;return(i[n]|i[n+1]<<8)>>(e&7)&t},dl=function(i,e){var t=e/8|0;return(i[t]|i[t+1]<<8|i[t+2]<<16)>>(e&7)},xS=function(i){return(i/8|0)+(i&7&&1)},vS=function(i,e,t){(e==null||e<0)&&(e=0),(t==null||t>i.length)&&(t=i.length);var n=new(i instanceof fi?fi:i instanceof Yl?Yl:ln)(t-e);return n.set(i.subarray(e,t)),n},yS=function(i,e,t){var n=i.length;if(!n||t&&!t.l&&n<5)return e||new ln(0);var s=!e||t,r=!t||t.i;t||(t={}),e||(e=new ln(n*3));var o=function(O){var ee=e.length;if(O>ee){var ce=new ln(Math.max(ee*2,O));ce.set(e),e=ce}},a=t.f||0,l=t.p||0,c=t.b||0,u=t.l,h=t.d,f=t.m,d=t.n,g=n*8;do{if(!u){t.f=a=_n(i,l,1);var p=_n(i,l+1,3);if(l+=3,p)if(p==1)u=gS,h=_S,f=9,d=5;else if(p==2){var x=_n(i,l,31)+257,w=_n(i,l+10,15)+4,S=x+_n(i,l+5,31)+1;l+=14;for(var P=new ln(S),I=new ln(19),v=0;v<w;++v)I[fS[v]]=_n(i,l+v*3,7);l+=w*3;for(var A=fl(I),R=(1<<A)-1,j=pr(I,A,1),v=0;v<S;){var Q=j[_n(i,l,R)];l+=Q&15;var m=Q>>>4;if(m<16)P[v++]=m;else{var k=0,z=0;for(m==16?(z=3+_n(i,l,3),l+=2,k=P[v-1]):m==17?(z=3+_n(i,l,7),l+=3):m==18&&(z=11+_n(i,l,127),l+=7);z--;)P[v++]=k}}var J=P.subarray(0,x),$=P.subarray(x);f=fl(J),d=fl($),u=pr(J,f,1),h=pr($,d,1)}else throw"invalid block type";else{var m=xS(l)+4,_=i[m-4]|i[m-3]<<8,M=m+_;if(M>n){if(r)throw"unexpected EOF";break}s&&o(c+_),e.set(i.subarray(m,M),c),t.b=c+=_,t.p=l=M*8;continue}if(l>g){if(r)throw"unexpected EOF";break}}s&&o(c+131072);for(var ie=(1<<f)-1,Y=(1<<d)-1,fe=l;;fe=l){var k=u[dl(i,l)&ie],de=k>>>4;if(l+=k&15,l>g){if(r)throw"unexpected EOF";break}if(!k)throw"invalid length/literal";if(de<256)e[c++]=de;else if(de==256){fe=l,u=null;break}else{var ye=de-254;if(de>264){var v=de-257,W=Hp[v];ye=_n(i,l,(1<<W)-1)+jp[v],l+=W}var oe=h[dl(i,l)&Y],ve=oe>>>4;if(!oe)throw"invalid distance";l+=oe&15;var $=mS[ve];if(ve>3){var W=Gp[ve];$+=dl(i,l)&(1<<W)-1,l+=W}if(l>g){if(r)throw"unexpected EOF";break}s&&o(c+131072);for(var N=c+ye;c<N;c+=4)e[c]=e[c-$],e[c+1]=e[c+1-$],e[c+2]=e[c+2-$],e[c+3]=e[c+3-$];c=N}}t.l=u,t.p=fe,t.b=c,u&&(a=1,t.m=f,t.d=h,t.n=d)}while(!a);return c==e.length?e:vS(e,0,c)},MS=new ln(0),bS=function(i){if((i[0]&15)!=8||i[0]>>>4>7||(i[0]<<8|i[1])%31)throw"invalid zlib data";if(i[1]&32)throw"invalid zlib data: preset dictionaries not supported"};function wS(i,e){return yS((bS(i),i.subarray(2,-4)),e)}var SS=typeof TextDecoder<"u"&&new TextDecoder,TS=0;try{SS.decode(MS,{stream:!0}),TS=1}catch{}function Yp(i,e,t){const n=t.length-i-1;if(e>=t[n])return n-1;if(e<=t[i])return i;let s=i,r=n,o=Math.floor((s+r)/2);for(;e<t[o]||e>=t[o+1];)e<t[o]?r=o:s=o,o=Math.floor((s+r)/2);return o}function ES(i,e,t,n){const s=[],r=[],o=[];s[0]=1;for(let a=1;a<=t;++a){r[a]=e-n[i+1-a],o[a]=n[i+a]-e;let l=0;for(let c=0;c<a;++c){const u=o[c+1],h=r[a-c],f=s[c]/(u+h);s[c]=l+u*f,l=h*f}s[a]=l}return s}function AS(i,e,t,n){const s=Yp(i,n,e),r=ES(s,n,i,e),o=new Qe(0,0,0,0);for(let a=0;a<=i;++a){const l=t[s-i+a],c=r[a],u=l.w*c;o.x+=l.x*u,o.y+=l.y*u,o.z+=l.z*u,o.w+=l.w*c}return o}function CS(i,e,t,n,s){const r=[];for(let h=0;h<=t;++h)r[h]=0;const o=[];for(let h=0;h<=n;++h)o[h]=r.slice(0);const a=[];for(let h=0;h<=t;++h)a[h]=r.slice(0);a[0][0]=1;const l=r.slice(0),c=r.slice(0);for(let h=1;h<=t;++h){l[h]=e-s[i+1-h],c[h]=s[i+h]-e;let f=0;for(let d=0;d<h;++d){const g=c[d+1],p=l[h-d];a[h][d]=g+p;const m=a[d][h-1]/a[h][d];a[d][h]=f+g*m,f=p*m}a[h][h]=f}for(let h=0;h<=t;++h)o[0][h]=a[h][t];for(let h=0;h<=t;++h){let f=0,d=1;const g=[];for(let p=0;p<=t;++p)g[p]=r.slice(0);g[0][0]=1;for(let p=1;p<=n;++p){let m=0;const _=h-p,M=t-p;h>=p&&(g[d][0]=g[f][0]/a[M+1][_],m=g[d][0]*a[_][M]);const x=_>=-1?1:-_,w=h-1<=M?p-1:t-h;for(let P=x;P<=w;++P)g[d][P]=(g[f][P]-g[f][P-1])/a[M+1][_+P],m+=g[d][P]*a[_+P][M];h<=M&&(g[d][p]=-g[f][p-1]/a[M+1][h],m+=g[d][p]*a[h][M]),o[p][h]=m;const S=f;f=d,d=S}}let u=t;for(let h=1;h<=n;++h){for(let f=0;f<=t;++f)o[h][f]*=u;u*=t-h}return o}function PS(i,e,t,n,s){const r=s<i?s:i,o=[],a=Yp(i,n,e),l=CS(a,n,i,r,e),c=[];for(let u=0;u<t.length;++u){const h=t[u].clone(),f=h.w;h.x*=f,h.y*=f,h.z*=f,c[u]=h}for(let u=0;u<=r;++u){const h=c[a-i].clone().multiplyScalar(l[u][0]);for(let f=1;f<=i;++f)h.add(c[a-i+f].clone().multiplyScalar(l[u][f]));o[u]=h}for(let u=r+1;u<=s+1;++u)o[u]=new Qe(0,0,0);return o}function LS(i,e){let t=1;for(let s=2;s<=i;++s)t*=s;let n=1;for(let s=2;s<=e;++s)n*=s;for(let s=2;s<=i-e;++s)n*=s;return t/n}function RS(i){const e=i.length,t=[],n=[];for(let r=0;r<e;++r){const o=i[r];t[r]=new D(o.x,o.y,o.z),n[r]=o.w}const s=[];for(let r=0;r<e;++r){const o=t[r].clone();for(let a=1;a<=r;++a)o.sub(s[r-a].clone().multiplyScalar(LS(r,a)*n[a]));s[r]=o.divideScalar(n[0])}return s}function DS(i,e,t,n,s){const r=PS(i,e,t,n,s);return RS(r)}class IS extends Sn{constructor(e,t,n,s,r){super(),this.degree=e,this.knots=t,this.controlPoints=[],this.startKnot=s||0,this.endKnot=r||this.knots.length-1;for(let o=0;o<n.length;++o){const a=n[o];this.controlPoints[o]=new Qe(a.x,a.y,a.z,a.w)}}getPoint(e,t=new D){const n=t,s=this.knots[this.startKnot]+e*(this.knots[this.endKnot]-this.knots[this.startKnot]),r=AS(this.degree,this.knots,this.controlPoints,s);return r.w!==1&&r.divideScalar(r.w),n.set(r.x,r.y,r.z)}getTangent(e,t=new D){const n=t,s=this.knots[0]+e*(this.knots[this.knots.length-1]-this.knots[0]),r=DS(this.degree,this.knots,this.controlPoints,s,1);return n.copy(r[1]).normalize(),n}}let We,pt,Wt;class FS extends Ur{constructor(e){super(e)}load(e,t,n,s){const r=this,o=r.path===""?$1.extractUrlBase(e):r.path,a=new Up(this.manager);a.setPath(r.path),a.setResponseType("arraybuffer"),a.setRequestHeader(r.requestHeader),a.setWithCredentials(r.withCredentials),a.load(e,function(l){try{t(r.parse(l,o))}catch(c){s?s(c):console.error(c),r.manager.itemError(e)}},n,s)}parse(e,t){if(BS(e))We=new kS().parse(e);else{const s=Jp(e);if(!VS(s))throw new Error("THREE.FBXLoader: Unknown format.");if(wf(s)<7e3)throw new Error("THREE.FBXLoader: FBX version not supported, FileVersion: "+wf(s));We=new US().parse(s)}const n=new la(this.manager).setPath(this.resourcePath||t).setCrossOrigin(this.crossOrigin);return new OS(n,this.manager).parse(We)}}class OS{constructor(e,t){this.textureLoader=e,this.manager=t}parse(){pt=this.parseConnections();const e=this.parseImages(),t=this.parseTextures(e),n=this.parseMaterials(t),s=this.parseDeformers(),r=new zS().parse(s);return this.parseScene(s,r,n),Wt}parseConnections(){const e=new Map;return"Connections"in We&&We.Connections.connections.forEach(function(n){const s=n[0],r=n[1],o=n[2];e.has(s)||e.set(s,{parents:[],children:[]});const a={ID:r,relationship:o};e.get(s).parents.push(a),e.has(r)||e.set(r,{parents:[],children:[]});const l={ID:s,relationship:o};e.get(r).children.push(l)}),e}parseImages(){const e={},t={};if("Video"in We.Objects){const n=We.Objects.Video;for(const s in n){const r=n[s],o=parseInt(s);if(e[o]=r.RelativeFilename||r.Filename,"Content"in r){const a=r.Content instanceof ArrayBuffer&&r.Content.byteLength>0,l=typeof r.Content=="string"&&r.Content!=="";if(a||l){const c=this.parseImage(n[s]);t[r.RelativeFilename||r.Filename]=c}}}}for(const n in e){const s=e[n];t[s]!==void 0?e[n]=t[s]:e[n]=e[n].split("\\").pop()}return e}parseImage(e){const t=e.Content,n=e.RelativeFilename||e.Filename,s=n.slice(n.lastIndexOf(".")+1).toLowerCase();let r;switch(s){case"bmp":r="image/bmp";break;case"jpg":case"jpeg":r="image/jpeg";break;case"png":r="image/png";break;case"tif":r="image/tiff";break;case"tga":this.manager.getHandler(".tga")===null&&console.warn("FBXLoader: TGA loader not found, skipping ",n),r="image/tga";break;default:console.warn('FBXLoader: Image type "'+s+'" is not supported.');return}if(typeof t=="string")return"data:"+r+";base64,"+t;{const o=new Uint8Array(t);return window.URL.createObjectURL(new Blob([o],{type:r}))}}parseTextures(e){const t=new Map;if("Texture"in We.Objects){const n=We.Objects.Texture;for(const s in n){const r=this.parseTexture(n[s],e);t.set(parseInt(s),r)}}return t}parseTexture(e,t){const n=this.loadTexture(e,t);n.ID=e.id,n.name=e.attrName;const s=e.WrapModeU,r=e.WrapModeV,o=s!==void 0?s.value:0,a=r!==void 0?r.value:0;if(n.wrapS=o===0?br:Qt,n.wrapT=a===0?br:Qt,"Scaling"in e){const l=e.Scaling.value;n.repeat.x=l[0],n.repeat.y=l[1]}if("Translation"in e){const l=e.Translation.value;n.offset.x=l[0],n.offset.y=l[1]}return n}loadTexture(e,t){let n;const s=this.textureLoader.path,r=pt.get(e.id).children;r!==void 0&&r.length>0&&t[r[0].ID]!==void 0&&(n=t[r[0].ID],(n.indexOf("blob:")===0||n.indexOf("data:")===0)&&this.textureLoader.setPath(void 0));let o;const a=e.FileName.slice(-3).toLowerCase();if(a==="tga"){const l=this.manager.getHandler(".tga");l===null?(console.warn("FBXLoader: TGA loader not found, creating placeholder texture for",e.RelativeFilename),o=new Ct):(l.setPath(this.textureLoader.path),o=l.load(n))}else a==="psd"?(console.warn("FBXLoader: PSD textures are not supported, creating placeholder texture for",e.RelativeFilename),o=new Ct):o=this.textureLoader.load(n);return this.textureLoader.setPath(s),o}parseMaterials(e){const t=new Map;if("Material"in We.Objects){const n=We.Objects.Material;for(const s in n){const r=this.parseMaterial(n[s],e);r!==null&&t.set(parseInt(s),r)}}return t}parseMaterial(e,t){const n=e.id,s=e.attrName;let r=e.ShadingModel;if(typeof r=="object"&&(r=r.value),!pt.has(n))return null;const o=this.parseParameters(e,t,n);let a;switch(r.toLowerCase()){case"phong":a=new ll;break;case"lambert":a=new Fp;break;default:console.warn('THREE.FBXLoader: unknown material type "%s". Defaulting to MeshPhongMaterial.',r),a=new ll;break}return a.setValues(o),a.name=s,a}parseParameters(e,t,n){const s={};e.BumpFactor&&(s.bumpScale=e.BumpFactor.value),e.Diffuse?s.color=new Pe().fromArray(e.Diffuse.value):e.DiffuseColor&&(e.DiffuseColor.type==="Color"||e.DiffuseColor.type==="ColorRGB")&&(s.color=new Pe().fromArray(e.DiffuseColor.value)),e.DisplacementFactor&&(s.displacementScale=e.DisplacementFactor.value),e.Emissive?s.emissive=new Pe().fromArray(e.Emissive.value):e.EmissiveColor&&(e.EmissiveColor.type==="Color"||e.EmissiveColor.type==="ColorRGB")&&(s.emissive=new Pe().fromArray(e.EmissiveColor.value)),e.EmissiveFactor&&(s.emissiveIntensity=parseFloat(e.EmissiveFactor.value)),e.Opacity&&(s.opacity=parseFloat(e.Opacity.value)),s.opacity<1&&(s.transparent=!0),e.ReflectionFactor&&(s.reflectivity=e.ReflectionFactor.value),e.Shininess&&(s.shininess=e.Shininess.value),e.Specular?s.specular=new Pe().fromArray(e.Specular.value):e.SpecularColor&&e.SpecularColor.type==="Color"&&(s.specular=new Pe().fromArray(e.SpecularColor.value));const r=this;return pt.get(n).children.forEach(function(o){const a=o.relationship;switch(a){case"Bump":s.bumpMap=r.getTexture(t,o.ID);break;case"Maya|TEX_ao_map":s.aoMap=r.getTexture(t,o.ID);break;case"DiffuseColor":case"Maya|TEX_color_map":s.map=r.getTexture(t,o.ID),s.map!==void 0&&(s.map.encoding=nt);break;case"DisplacementColor":s.displacementMap=r.getTexture(t,o.ID);break;case"EmissiveColor":s.emissiveMap=r.getTexture(t,o.ID),s.emissiveMap!==void 0&&(s.emissiveMap.encoding=nt);break;case"NormalMap":case"Maya|TEX_normal_map":s.normalMap=r.getTexture(t,o.ID);break;case"ReflectionColor":s.envMap=r.getTexture(t,o.ID),s.envMap!==void 0&&(s.envMap.mapping=zo,s.envMap.encoding=nt);break;case"SpecularColor":s.specularMap=r.getTexture(t,o.ID),s.specularMap!==void 0&&(s.specularMap.encoding=nt);break;case"TransparentColor":case"TransparencyFactor":s.alphaMap=r.getTexture(t,o.ID),s.transparent=!0;break;case"AmbientColor":case"ShininessExponent":case"SpecularFactor":case"VectorDisplacementColor":default:console.warn("THREE.FBXLoader: %s map is not supported in three.js, skipping texture.",a);break}}),s}getTexture(e,t){return"LayeredTexture"in We.Objects&&t in We.Objects.LayeredTexture&&(console.warn("THREE.FBXLoader: layered textures are not supported in three.js. Discarding all but first layer."),t=pt.get(t).children[0].ID),e.get(t)}parseDeformers(){const e={},t={};if("Deformer"in We.Objects){const n=We.Objects.Deformer;for(const s in n){const r=n[s],o=pt.get(parseInt(s));if(r.attrType==="Skin"){const a=this.parseSkeleton(o,n);a.ID=s,o.parents.length>1&&console.warn("THREE.FBXLoader: skeleton attached to more than one geometry is not supported."),a.geometryID=o.parents[0].ID,e[s]=a}else if(r.attrType==="BlendShape"){const a={id:s};a.rawTargets=this.parseMorphTargets(o,n),a.id=s,o.parents.length>1&&console.warn("THREE.FBXLoader: morph target attached to more than one geometry is not supported."),t[s]=a}}}return{skeletons:e,morphTargets:t}}parseSkeleton(e,t){const n=[];return e.children.forEach(function(s){const r=t[s.ID];if(r.attrType!=="Cluster")return;const o={ID:s.ID,indices:[],weights:[],transformLink:new De().fromArray(r.TransformLink.a)};"Indexes"in r&&(o.indices=r.Indexes.a,o.weights=r.Weights.a),n.push(o)}),{rawBones:n,bones:[]}}parseMorphTargets(e,t){const n=[];for(let s=0;s<e.children.length;s++){const r=e.children[s],o=t[r.ID],a={name:o.attrName,initialWeight:o.DeformPercent,id:o.id,fullWeights:o.FullWeights.a};if(o.attrType!=="BlendShapeChannel")return;a.geoID=pt.get(parseInt(r.ID)).children.filter(function(l){return l.relationship===void 0})[0].ID,n.push(a)}return n}parseScene(e,t,n){Wt=new Ui;const s=this.parseModels(e.skeletons,t,n),r=We.Objects.Model,o=this;s.forEach(function(l){const c=r[l.ID];o.setLookAtProperties(l,c),pt.get(l.ID).parents.forEach(function(h){const f=s.get(h.ID);f!==void 0&&f.add(l)}),l.parent===null&&Wt.add(l)}),this.bindSkeleton(e.skeletons,t,s),this.createAmbientLight(),Wt.traverse(function(l){if(l.userData.transformData){l.parent&&(l.userData.transformData.parentMatrix=l.parent.matrix,l.userData.transformData.parentMatrixWorld=l.parent.matrixWorld);const c=$p(l.userData.transformData);l.applyMatrix4(c),l.updateWorldMatrix()}});const a=new NS().parse();Wt.children.length===1&&Wt.children[0].isGroup&&(Wt.children[0].animations=a,Wt=Wt.children[0]),Wt.animations=a}parseModels(e,t,n){const s=new Map,r=We.Objects.Model;for(const o in r){const a=parseInt(o),l=r[o],c=pt.get(a);let u=this.buildSkeleton(c,e,a,l.attrName);if(!u){switch(l.attrType){case"Camera":u=this.createCamera(c);break;case"Light":u=this.createLight(c);break;case"Mesh":u=this.createMesh(c,t,n);break;case"NurbsCurve":u=this.createCurve(c,t);break;case"LimbNode":case"Root":u=new Vl;break;case"Null":default:u=new Ui;break}u.name=l.attrName?Ke.sanitizeNodeName(l.attrName):"",u.ID=a}this.getTransformData(u,l),s.set(a,u)}return s}buildSkeleton(e,t,n,s){let r=null;return e.parents.forEach(function(o){for(const a in t){const l=t[a];l.rawBones.forEach(function(c,u){if(c.ID===o.ID){const h=r;r=new Vl,r.matrixWorld.copy(c.transformLink),r.name=s?Ke.sanitizeNodeName(s):"",r.ID=n,l.bones[u]=r,h!==null&&r.add(h)}})}}),r}createCamera(e){let t,n;if(e.children.forEach(function(s){const r=We.Objects.NodeAttribute[s.ID];r!==void 0&&(n=r)}),n===void 0)t=new ot;else{let s=0;n.CameraProjectionType!==void 0&&n.CameraProjectionType.value===1&&(s=1);let r=1;n.NearPlane!==void 0&&(r=n.NearPlane.value/1e3);let o=1e3;n.FarPlane!==void 0&&(o=n.FarPlane.value/1e3);let a=window.innerWidth,l=window.innerHeight;n.AspectWidth!==void 0&&n.AspectHeight!==void 0&&(a=n.AspectWidth.value,l=n.AspectHeight.value);const c=a/l;let u=45;n.FieldOfView!==void 0&&(u=n.FieldOfView.value);const h=n.FocalLength?n.FocalLength.value:null;switch(s){case 0:t=new kt(u,c,r,o),h!==null&&t.setFocalLength(h);break;case 1:t=new Tc(-a/2,a/2,l/2,-l/2,r,o);break;default:console.warn("THREE.FBXLoader: Unknown camera type "+s+"."),t=new ot;break}}return t}createLight(e){let t,n;if(e.children.forEach(function(s){const r=We.Objects.NodeAttribute[s.ID];r!==void 0&&(n=r)}),n===void 0)t=new ot;else{let s;n.LightType===void 0?s=0:s=n.LightType.value;let r=16777215;n.Color!==void 0&&(r=new Pe().fromArray(n.Color.value));let o=n.Intensity===void 0?1:n.Intensity.value/100;n.CastLightOnObject!==void 0&&n.CastLightOnObject.value===0&&(o=0);let a=0;n.FarAttenuationEnd!==void 0&&(n.EnableFarAttenuation!==void 0&&n.EnableFarAttenuation.value===0?a=0:a=n.FarAttenuationEnd.value);const l=1;switch(s){case 0:t=new jl(r,o,a,l);break;case 1:t=new Z1(r,o);break;case 2:let c=Math.PI/3;n.InnerAngle!==void 0&&(c=Ln.degToRad(n.InnerAngle.value));let u=0;n.OuterAngle!==void 0&&(u=Ln.degToRad(n.OuterAngle.value),u=Math.max(u,1)),t=new j1(r,o,a,c,u,l);break;default:console.warn("THREE.FBXLoader: Unknown light type "+n.LightType.value+", defaulting to a PointLight."),t=new jl(r,o);break}n.CastShadows!==void 0&&n.CastShadows.value===1&&(t.castShadow=!0)}return t}createMesh(e,t,n){let s,r=null,o=null;const a=[];return e.children.forEach(function(l){t.has(l.ID)&&(r=t.get(l.ID)),n.has(l.ID)&&a.push(n.get(l.ID))}),a.length>1?o=a:a.length>0?o=a[0]:(o=new ll({color:13421772}),a.push(o)),"color"in r.attributes&&a.forEach(function(l){l.vertexColors=!0}),r.FBX_Deformer?(s=new Jw(r,o),s.normalizeSkinWeights()):s=new et(r,o),s}createCurve(e,t){const n=e.children.reduce(function(r,o){return t.has(o.ID)&&(r=t.get(o.ID)),r},null),s=new Cc({color:3342591,linewidth:1});return new bp(n,s)}getTransformData(e,t){const n={};"InheritType"in t&&(n.inheritType=parseInt(t.InheritType.value)),"RotationOrder"in t?n.eulerOrder=Kp(t.RotationOrder.value):n.eulerOrder="ZYX","Lcl_Translation"in t&&(n.translation=t.Lcl_Translation.value),"PreRotation"in t&&(n.preRotation=t.PreRotation.value),"Lcl_Rotation"in t&&(n.rotation=t.Lcl_Rotation.value),"PostRotation"in t&&(n.postRotation=t.PostRotation.value),"Lcl_Scaling"in t&&(n.scale=t.Lcl_Scaling.value),"ScalingOffset"in t&&(n.scalingOffset=t.ScalingOffset.value),"ScalingPivot"in t&&(n.scalingPivot=t.ScalingPivot.value),"RotationOffset"in t&&(n.rotationOffset=t.RotationOffset.value),"RotationPivot"in t&&(n.rotationPivot=t.RotationPivot.value),e.userData.transformData=n}setLookAtProperties(e,t){"LookAtProperty"in t&&pt.get(e.ID).children.forEach(function(s){if(s.relationship==="LookAtProperty"){const r=We.Objects.Model[s.ID];if("Lcl_Translation"in r){const o=r.Lcl_Translation.value;e.target!==void 0?(e.target.position.fromArray(o),Wt.add(e.target)):e.lookAt(new D().fromArray(o))}}})}bindSkeleton(e,t,n){const s=this.parsePoseNodes();for(const r in e){const o=e[r];pt.get(parseInt(o.ID)).parents.forEach(function(l){if(t.has(l.ID)){const c=l.ID;pt.get(c).parents.forEach(function(h){n.has(h.ID)&&n.get(h.ID).bind(new Ac(o.bones),s[h.ID])})}})}}parsePoseNodes(){const e={};if("Pose"in We.Objects){const t=We.Objects.Pose;for(const n in t)if(t[n].attrType==="BindPose"&&t[n].NbPoseNodes>0){const s=t[n].PoseNode;Array.isArray(s)?s.forEach(function(r){e[r.Node]=new De().fromArray(r.Matrix.a)}):e[s.Node]=new De().fromArray(s.Matrix.a)}}return e}createAmbientLight(){if("GlobalSettings"in We&&"AmbientColor"in We.GlobalSettings){const e=We.GlobalSettings.AmbientColor.value,t=e[0],n=e[1],s=e[2];if(t!==0||n!==0||s!==0){const r=new Pe(t,n,s);Wt.add(new kp(r,1))}}}}class zS{constructor(){this.negativeMaterialIndices=!1}parse(e){const t=new Map;if("Geometry"in We.Objects){const n=We.Objects.Geometry;for(const s in n){const r=pt.get(parseInt(s)),o=this.parseGeometry(r,n[s],e);t.set(parseInt(s),o)}}return this.negativeMaterialIndices===!0&&console.warn("THREE.FBXLoader: The FBX file contains invalid (negative) material indices. The asset might not render as expected."),t}parseGeometry(e,t,n){switch(t.attrType){case"Mesh":return this.parseMeshGeometry(e,t,n);case"NurbsCurve":return this.parseNurbsGeometry(t)}}parseMeshGeometry(e,t,n){const s=n.skeletons,r=[],o=e.parents.map(function(h){return We.Objects.Model[h.ID]});if(o.length===0)return;const a=e.children.reduce(function(h,f){return s[f.ID]!==void 0&&(h=s[f.ID]),h},null);e.children.forEach(function(h){n.morphTargets[h.ID]!==void 0&&r.push(n.morphTargets[h.ID])});const l=o[0],c={};"RotationOrder"in l&&(c.eulerOrder=Kp(l.RotationOrder.value)),"InheritType"in l&&(c.inheritType=parseInt(l.InheritType.value)),"GeometricTranslation"in l&&(c.translation=l.GeometricTranslation.value),"GeometricRotation"in l&&(c.rotation=l.GeometricRotation.value),"GeometricScaling"in l&&(c.scale=l.GeometricScaling.value);const u=$p(c);return this.genGeometry(t,a,r,u)}genGeometry(e,t,n,s){const r=new ct;e.attrName&&(r.name=e.attrName);const o=this.parseGeoNode(e,t),a=this.genBuffers(o),l=new ke(a.vertex,3);if(l.applyMatrix4(s),r.setAttribute("position",l),a.colors.length>0&&r.setAttribute("color",new ke(a.colors,3)),t&&(r.setAttribute("skinIndex",new bc(a.weightsIndices,4)),r.setAttribute("skinWeight",new ke(a.vertexWeights,4)),r.FBX_Deformer=t),a.normal.length>0){const c=new qt().getNormalMatrix(s),u=new ke(a.normal,3);u.applyNormalMatrix(c),r.setAttribute("normal",u)}if(a.uvs.forEach(function(c,u){let h="uv"+(u+1).toString();u===0&&(h="uv"),r.setAttribute(h,new ke(a.uvs[u],2))}),o.material&&o.material.mappingType!=="AllSame"){let c=a.materialIndex[0],u=0;if(a.materialIndex.forEach(function(h,f){h!==c&&(r.addGroup(u,f-u,c),c=h,u=f)}),r.groups.length>0){const h=r.groups[r.groups.length-1],f=h.start+h.count;f!==a.materialIndex.length&&r.addGroup(f,a.materialIndex.length-f,c)}r.groups.length===0&&r.addGroup(0,a.materialIndex.length,a.materialIndex[0])}return this.addMorphTargets(r,e,n,s),r}parseGeoNode(e,t){const n={};if(n.vertexPositions=e.Vertices!==void 0?e.Vertices.a:[],n.vertexIndices=e.PolygonVertexIndex!==void 0?e.PolygonVertexIndex.a:[],e.LayerElementColor&&(n.color=this.parseVertexColors(e.LayerElementColor[0])),e.LayerElementMaterial&&(n.material=this.parseMaterialIndices(e.LayerElementMaterial[0])),e.LayerElementNormal&&(n.normal=this.parseNormals(e.LayerElementNormal[0])),e.LayerElementUV){n.uv=[];let s=0;for(;e.LayerElementUV[s];)e.LayerElementUV[s].UV&&n.uv.push(this.parseUVs(e.LayerElementUV[s])),s++}return n.weightTable={},t!==null&&(n.skeleton=t,t.rawBones.forEach(function(s,r){s.indices.forEach(function(o,a){n.weightTable[o]===void 0&&(n.weightTable[o]=[]),n.weightTable[o].push({id:r,weight:s.weights[a]})})})),n}genBuffers(e){const t={vertex:[],normal:[],colors:[],uvs:[],materialIndex:[],vertexWeights:[],weightsIndices:[]};let n=0,s=0,r=!1,o=[],a=[],l=[],c=[],u=[],h=[];const f=this;return e.vertexIndices.forEach(function(d,g){let p,m=!1;d<0&&(d=d^-1,m=!0);let _=[],M=[];if(o.push(d*3,d*3+1,d*3+2),e.color){const x=bo(g,n,d,e.color);l.push(x[0],x[1],x[2])}if(e.skeleton){if(e.weightTable[d]!==void 0&&e.weightTable[d].forEach(function(x){M.push(x.weight),_.push(x.id)}),M.length>4){r||(console.warn("THREE.FBXLoader: Vertex has more than 4 skinning weights assigned to vertex. Deleting additional weights."),r=!0);const x=[0,0,0,0],w=[0,0,0,0];M.forEach(function(S,P){let I=S,v=_[P];w.forEach(function(A,R,j){if(I>A){j[R]=I,I=A;const Q=x[R];x[R]=v,v=Q}})}),_=x,M=w}for(;M.length<4;)M.push(0),_.push(0);for(let x=0;x<4;++x)u.push(M[x]),h.push(_[x])}if(e.normal){const x=bo(g,n,d,e.normal);a.push(x[0],x[1],x[2])}e.material&&e.material.mappingType!=="AllSame"&&(p=bo(g,n,d,e.material)[0],p<0&&(f.negativeMaterialIndices=!0,p=0)),e.uv&&e.uv.forEach(function(x,w){const S=bo(g,n,d,x);c[w]===void 0&&(c[w]=[]),c[w].push(S[0]),c[w].push(S[1])}),s++,m&&(s>4&&console.warn("THREE.FBXLoader: Polygons with more than four sides are not supported. Make sure to triangulate the geometry during export."),f.genFace(t,e,o,p,a,l,c,u,h,s),n++,s=0,o=[],a=[],l=[],c=[],u=[],h=[])}),t}genFace(e,t,n,s,r,o,a,l,c,u){for(let h=2;h<u;h++)e.vertex.push(t.vertexPositions[n[0]]),e.vertex.push(t.vertexPositions[n[1]]),e.vertex.push(t.vertexPositions[n[2]]),e.vertex.push(t.vertexPositions[n[(h-1)*3]]),e.vertex.push(t.vertexPositions[n[(h-1)*3+1]]),e.vertex.push(t.vertexPositions[n[(h-1)*3+2]]),e.vertex.push(t.vertexPositions[n[h*3]]),e.vertex.push(t.vertexPositions[n[h*3+1]]),e.vertex.push(t.vertexPositions[n[h*3+2]]),t.skeleton&&(e.vertexWeights.push(l[0]),e.vertexWeights.push(l[1]),e.vertexWeights.push(l[2]),e.vertexWeights.push(l[3]),e.vertexWeights.push(l[(h-1)*4]),e.vertexWeights.push(l[(h-1)*4+1]),e.vertexWeights.push(l[(h-1)*4+2]),e.vertexWeights.push(l[(h-1)*4+3]),e.vertexWeights.push(l[h*4]),e.vertexWeights.push(l[h*4+1]),e.vertexWeights.push(l[h*4+2]),e.vertexWeights.push(l[h*4+3]),e.weightsIndices.push(c[0]),e.weightsIndices.push(c[1]),e.weightsIndices.push(c[2]),e.weightsIndices.push(c[3]),e.weightsIndices.push(c[(h-1)*4]),e.weightsIndices.push(c[(h-1)*4+1]),e.weightsIndices.push(c[(h-1)*4+2]),e.weightsIndices.push(c[(h-1)*4+3]),e.weightsIndices.push(c[h*4]),e.weightsIndices.push(c[h*4+1]),e.weightsIndices.push(c[h*4+2]),e.weightsIndices.push(c[h*4+3])),t.color&&(e.colors.push(o[0]),e.colors.push(o[1]),e.colors.push(o[2]),e.colors.push(o[(h-1)*3]),e.colors.push(o[(h-1)*3+1]),e.colors.push(o[(h-1)*3+2]),e.colors.push(o[h*3]),e.colors.push(o[h*3+1]),e.colors.push(o[h*3+2])),t.material&&t.material.mappingType!=="AllSame"&&(e.materialIndex.push(s),e.materialIndex.push(s),e.materialIndex.push(s)),t.normal&&(e.normal.push(r[0]),e.normal.push(r[1]),e.normal.push(r[2]),e.normal.push(r[(h-1)*3]),e.normal.push(r[(h-1)*3+1]),e.normal.push(r[(h-1)*3+2]),e.normal.push(r[h*3]),e.normal.push(r[h*3+1]),e.normal.push(r[h*3+2])),t.uv&&t.uv.forEach(function(f,d){e.uvs[d]===void 0&&(e.uvs[d]=[]),e.uvs[d].push(a[d][0]),e.uvs[d].push(a[d][1]),e.uvs[d].push(a[d][(h-1)*2]),e.uvs[d].push(a[d][(h-1)*2+1]),e.uvs[d].push(a[d][h*2]),e.uvs[d].push(a[d][h*2+1])})}addMorphTargets(e,t,n,s){if(n.length===0)return;e.morphTargetsRelative=!0,e.morphAttributes.position=[];const r=this;n.forEach(function(o){o.rawTargets.forEach(function(a){const l=We.Objects.Geometry[a.geoID];l!==void 0&&r.genMorphGeometry(e,t,l,s,a.name)})})}genMorphGeometry(e,t,n,s,r){const o=t.PolygonVertexIndex!==void 0?t.PolygonVertexIndex.a:[],a=n.Vertices!==void 0?n.Vertices.a:[],l=n.Indexes!==void 0?n.Indexes.a:[],c=e.attributes.position.count*3,u=new Float32Array(c);for(let g=0;g<l.length;g++){const p=l[g]*3;u[p]=a[g*3],u[p+1]=a[g*3+1],u[p+2]=a[g*3+2]}const h={vertexIndices:o,vertexPositions:u},f=this.genBuffers(h),d=new ke(f.vertex,3);d.name=r||n.attrName,d.applyMatrix4(s),e.morphAttributes.position.push(d)}parseNormals(e){const t=e.MappingInformationType,n=e.ReferenceInformationType,s=e.Normals.a;let r=[];return n==="IndexToDirect"&&("NormalIndex"in e?r=e.NormalIndex.a:"NormalsIndex"in e&&(r=e.NormalsIndex.a)),{dataSize:3,buffer:s,indices:r,mappingType:t,referenceType:n}}parseUVs(e){const t=e.MappingInformationType,n=e.ReferenceInformationType,s=e.UV.a;let r=[];return n==="IndexToDirect"&&(r=e.UVIndex.a),{dataSize:2,buffer:s,indices:r,mappingType:t,referenceType:n}}parseVertexColors(e){const t=e.MappingInformationType,n=e.ReferenceInformationType,s=e.Colors.a;let r=[];return n==="IndexToDirect"&&(r=e.ColorIndex.a),{dataSize:4,buffer:s,indices:r,mappingType:t,referenceType:n}}parseMaterialIndices(e){const t=e.MappingInformationType,n=e.ReferenceInformationType;if(t==="NoMappingInformation")return{dataSize:1,buffer:[0],indices:[0],mappingType:"AllSame",referenceType:n};const s=e.Materials.a,r=[];for(let o=0;o<s.length;++o)r.push(o);return{dataSize:1,buffer:s,indices:r,mappingType:t,referenceType:n}}parseNurbsGeometry(e){const t=parseInt(e.Order);if(isNaN(t))return console.error("THREE.FBXLoader: Invalid Order %s given for geometry ID: %s",e.Order,e.id),new ct;const n=t-1,s=e.KnotVector.a,r=[],o=e.Points.a;for(let h=0,f=o.length;h<f;h+=4)r.push(new Qe().fromArray(o,h));let a,l;if(e.Form==="Closed")r.push(r[0]);else if(e.Form==="Periodic"){a=n,l=s.length-1-a;for(let h=0;h<n;++h)r.push(r[h])}const u=new IS(n,s,r,a,l).getPoints(r.length*12);return new ct().setFromPoints(u)}}class NS{parse(){const e=[],t=this.parseClips();if(t!==void 0)for(const n in t){const s=t[n],r=this.addClip(s);e.push(r)}return e}parseClips(){if(We.Objects.AnimationCurve===void 0)return;const e=this.parseAnimationCurveNodes();this.parseAnimationCurves(e);const t=this.parseAnimationLayers(e);return this.parseAnimStacks(t)}parseAnimationCurveNodes(){const e=We.Objects.AnimationCurveNode,t=new Map;for(const n in e){const s=e[n];if(s.attrName.match(/S|R|T|DeformPercent/)!==null){const r={id:s.id,attr:s.attrName,curves:{}};t.set(r.id,r)}}return t}parseAnimationCurves(e){const t=We.Objects.AnimationCurve;for(const n in t){const s={id:t[n].id,times:t[n].KeyTime.a.map(HS),values:t[n].KeyValueFloat.a},r=pt.get(s.id);if(r!==void 0){const o=r.parents[0].ID,a=r.parents[0].relationship;a.match(/X/)?e.get(o).curves.x=s:a.match(/Y/)?e.get(o).curves.y=s:a.match(/Z/)?e.get(o).curves.z=s:a.match(/d|DeformPercent/)&&e.has(o)&&(e.get(o).curves.morph=s)}}}parseAnimationLayers(e){const t=We.Objects.AnimationLayer,n=new Map;for(const s in t){const r=[],o=pt.get(parseInt(s));o!==void 0&&(o.children.forEach(function(l,c){if(e.has(l.ID)){const u=e.get(l.ID);if(u.curves.x!==void 0||u.curves.y!==void 0||u.curves.z!==void 0){if(r[c]===void 0){const h=pt.get(l.ID).parents.filter(function(f){return f.relationship!==void 0})[0].ID;if(h!==void 0){const f=We.Objects.Model[h.toString()];if(f===void 0){console.warn("THREE.FBXLoader: Encountered a unused curve.",l);return}const d={modelName:f.attrName?Ke.sanitizeNodeName(f.attrName):"",ID:f.id,initialPosition:[0,0,0],initialRotation:[0,0,0],initialScale:[1,1,1]};Wt.traverse(function(g){g.ID===f.id&&(d.transform=g.matrix,g.userData.transformData&&(d.eulerOrder=g.userData.transformData.eulerOrder))}),d.transform||(d.transform=new De),"PreRotation"in f&&(d.preRotation=f.PreRotation.value),"PostRotation"in f&&(d.postRotation=f.PostRotation.value),r[c]=d}}r[c]&&(r[c][u.attr]=u)}else if(u.curves.morph!==void 0){if(r[c]===void 0){const h=pt.get(l.ID).parents.filter(function(_){return _.relationship!==void 0})[0].ID,f=pt.get(h).parents[0].ID,d=pt.get(f).parents[0].ID,g=pt.get(d).parents[0].ID,p=We.Objects.Model[g],m={modelName:p.attrName?Ke.sanitizeNodeName(p.attrName):"",morphName:We.Objects.Deformer[h].attrName};r[c]=m}r[c][u.attr]=u}}}),n.set(parseInt(s),r))}return n}parseAnimStacks(e){const t=We.Objects.AnimationStack,n={};for(const s in t){const r=pt.get(parseInt(s)).children;r.length>1&&console.warn("THREE.FBXLoader: Encountered an animation stack with multiple layers, this is currently not supported. Ignoring subsequent layers.");const o=e.get(r[0].ID);n[s]={name:t[s].attrName,layer:o}}return n}addClip(e){let t=[];const n=this;return e.layer.forEach(function(s){t=t.concat(n.generateTracks(s))}),new U1(e.name,-1,t)}generateTracks(e){const t=[];let n=new D,s=new un,r=new D;if(e.transform&&e.transform.decompose(n,s,r),n=n.toArray(),s=new hn().setFromQuaternion(s,e.eulerOrder).toArray(),r=r.toArray(),e.T!==void 0&&Object.keys(e.T.curves).length>0){const o=this.generateVectorTrack(e.modelName,e.T.curves,n,"position");o!==void 0&&t.push(o)}if(e.R!==void 0&&Object.keys(e.R.curves).length>0){const o=this.generateRotationTrack(e.modelName,e.R.curves,s,e.preRotation,e.postRotation,e.eulerOrder);o!==void 0&&t.push(o)}if(e.S!==void 0&&Object.keys(e.S.curves).length>0){const o=this.generateVectorTrack(e.modelName,e.S.curves,r,"scale");o!==void 0&&t.push(o)}if(e.DeformPercent!==void 0){const o=this.generateMorphTrack(e);o!==void 0&&t.push(o)}return t}generateVectorTrack(e,t,n,s){const r=this.getTimesForAllAxes(t),o=this.getKeyframeTrackValues(r,t,n);return new Dr(e+"."+s,r,o)}generateRotationTrack(e,t,n,s,r,o){t.x!==void 0&&(this.interpolateRotations(t.x),t.x.values=t.x.values.map(Ln.degToRad)),t.y!==void 0&&(this.interpolateRotations(t.y),t.y.values=t.y.values.map(Ln.degToRad)),t.z!==void 0&&(this.interpolateRotations(t.z),t.z.values=t.z.values.map(Ln.degToRad));const a=this.getTimesForAllAxes(t),l=this.getKeyframeTrackValues(a,t,n);s!==void 0&&(s=s.map(Ln.degToRad),s.push(o),s=new hn().fromArray(s),s=new un().setFromEuler(s)),r!==void 0&&(r=r.map(Ln.degToRad),r.push(o),r=new hn().fromArray(r),r=new un().setFromEuler(r).invert());const c=new un,u=new hn,h=[];for(let f=0;f<l.length;f+=3)u.set(l[f],l[f+1],l[f+2],o),c.setFromEuler(u),s!==void 0&&c.premultiply(s),r!==void 0&&c.multiply(r),c.toArray(h,f/3*4);return new Hs(e+".quaternion",a,h)}generateMorphTrack(e){const t=e.DeformPercent.curves.morph,n=t.values.map(function(r){return r/100}),s=Wt.getObjectByName(e.modelName).morphTargetDictionary[e.morphName];return new Rr(e.modelName+".morphTargetInfluences["+s+"]",t.times,n)}getTimesForAllAxes(e){let t=[];if(e.x!==void 0&&(t=t.concat(e.x.times)),e.y!==void 0&&(t=t.concat(e.y.times)),e.z!==void 0&&(t=t.concat(e.z.times)),t=t.sort(function(n,s){return n-s}),t.length>1){let n=1,s=t[0];for(let r=1;r<t.length;r++){const o=t[r];o!==s&&(t[n]=o,s=o,n++)}t=t.slice(0,n)}return t}getKeyframeTrackValues(e,t,n){const s=n,r=[];let o=-1,a=-1,l=-1;return e.forEach(function(c){if(t.x&&(o=t.x.times.indexOf(c)),t.y&&(a=t.y.times.indexOf(c)),t.z&&(l=t.z.times.indexOf(c)),o!==-1){const u=t.x.values[o];r.push(u),s[0]=u}else r.push(s[0]);if(a!==-1){const u=t.y.values[a];r.push(u),s[1]=u}else r.push(s[1]);if(l!==-1){const u=t.z.values[l];r.push(u),s[2]=u}else r.push(s[2])}),r}interpolateRotations(e){for(let t=1;t<e.values.length;t++){const n=e.values[t-1],s=e.values[t]-n,r=Math.abs(s);if(r>=180){const o=r/180,a=s/o;let l=n+a;const c=e.times[t-1],h=(e.times[t]-c)/o;let f=c+h;const d=[],g=[];for(;f<e.times[t];)d.push(f),f+=h,g.push(l),l+=a;e.times=Sf(e.times,t,d),e.values=Sf(e.values,t,g)}}}}class US{getPrevNode(){return this.nodeStack[this.currentIndent-2]}getCurrentNode(){return this.nodeStack[this.currentIndent-1]}getCurrentProp(){return this.currentProp}pushStack(e){this.nodeStack.push(e),this.currentIndent+=1}popStack(){this.nodeStack.pop(),this.currentIndent-=1}setCurrentProp(e,t){this.currentProp=e,this.currentPropName=t}parse(e){this.currentIndent=0,this.allNodes=new Zp,this.nodeStack=[],this.currentProp=[],this.currentPropName="";const t=this,n=e.split(/[\r\n]+/);return n.forEach(function(s,r){const o=s.match(/^[\s\t]*;/),a=s.match(/^[\s\t]*$/);if(o||a)return;const l=s.match("^\\t{"+t.currentIndent+"}(\\w+):(.*){",""),c=s.match("^\\t{"+t.currentIndent+"}(\\w+):[\\s\\t\\r\\n](.*)"),u=s.match("^\\t{"+(t.currentIndent-1)+"}}");l?t.parseNodeBegin(s,l):c?t.parseNodeProperty(s,c,n[++r]):u?t.popStack():s.match(/^[^\s\t}]/)&&t.parseNodePropertyContinued(s)}),this.allNodes}parseNodeBegin(e,t){const n=t[1].trim().replace(/^"/,"").replace(/"$/,""),s=t[2].split(",").map(function(l){return l.trim().replace(/^"/,"").replace(/"$/,"")}),r={name:n},o=this.parseNodeAttr(s),a=this.getCurrentNode();this.currentIndent===0?this.allNodes.add(n,r):n in a?(n==="PoseNode"?a.PoseNode.push(r):a[n].id!==void 0&&(a[n]={},a[n][a[n].id]=a[n]),o.id!==""&&(a[n][o.id]=r)):typeof o.id=="number"?(a[n]={},a[n][o.id]=r):n!=="Properties70"&&(n==="PoseNode"?a[n]=[r]:a[n]=r),typeof o.id=="number"&&(r.id=o.id),o.name!==""&&(r.attrName=o.name),o.type!==""&&(r.attrType=o.type),this.pushStack(r)}parseNodeAttr(e){let t=e[0];e[0]!==""&&(t=parseInt(e[0]),isNaN(t)&&(t=e[0]));let n="",s="";return e.length>1&&(n=e[1].replace(/^(\w+)::/,""),s=e[2]),{id:t,name:n,type:s}}parseNodeProperty(e,t,n){let s=t[1].replace(/^"/,"").replace(/"$/,"").trim(),r=t[2].replace(/^"/,"").replace(/"$/,"").trim();s==="Content"&&r===","&&(r=n.replace(/"/g,"").replace(/,$/,"").trim());const o=this.getCurrentNode();if(o.name==="Properties70"){this.parseNodeSpecialProperty(e,s,r);return}if(s==="C"){const l=r.split(",").slice(1),c=parseInt(l[0]),u=parseInt(l[1]);let h=r.split(",").slice(3);h=h.map(function(f){return f.trim().replace(/^"/,"")}),s="connections",r=[c,u],WS(r,h),o[s]===void 0&&(o[s]=[])}s==="Node"&&(o.id=r),s in o&&Array.isArray(o[s])?o[s].push(r):s!=="a"?o[s]=r:o.a=r,this.setCurrentProp(o,s),s==="a"&&r.slice(-1)!==","&&(o.a=ml(r))}parseNodePropertyContinued(e){const t=this.getCurrentNode();t.a+=e,e.slice(-1)!==","&&(t.a=ml(t.a))}parseNodeSpecialProperty(e,t,n){const s=n.split('",').map(function(u){return u.trim().replace(/^\"/,"").replace(/\s/,"_")}),r=s[0],o=s[1],a=s[2],l=s[3];let c=s[4];switch(o){case"int":case"enum":case"bool":case"ULongLong":case"double":case"Number":case"FieldOfView":c=parseFloat(c);break;case"Color":case"ColorRGB":case"Vector3D":case"Lcl_Translation":case"Lcl_Rotation":case"Lcl_Scaling":c=ml(c);break}this.getPrevNode()[r]={type:o,type2:a,flag:l,value:c},this.setCurrentProp(this.getPrevNode(),r)}}class kS{parse(e){const t=new bf(e);t.skip(23);const n=t.getUint32();if(n<6400)throw new Error("THREE.FBXLoader: FBX version not supported, FileVersion: "+n);const s=new Zp;for(;!this.endOfContent(t);){const r=this.parseNode(t,n);r!==null&&s.add(r.name,r)}return s}endOfContent(e){return e.size()%16===0?(e.getOffset()+160+16&-16)>=e.size():e.getOffset()+160+16>=e.size()}parseNode(e,t){const n={},s=t>=7500?e.getUint64():e.getUint32(),r=t>=7500?e.getUint64():e.getUint32();t>=7500?e.getUint64():e.getUint32();const o=e.getUint8(),a=e.getString(o);if(s===0)return null;const l=[];for(let f=0;f<r;f++)l.push(this.parseProperty(e));const c=l.length>0?l[0]:"",u=l.length>1?l[1]:"",h=l.length>2?l[2]:"";for(n.singleProperty=r===1&&e.getOffset()===s;s>e.getOffset();){const f=this.parseNode(e,t);f!==null&&this.parseSubNode(a,n,f)}return n.propertyList=l,typeof c=="number"&&(n.id=c),u!==""&&(n.attrName=u),h!==""&&(n.attrType=h),a!==""&&(n.name=a),n}parseSubNode(e,t,n){if(n.singleProperty===!0){const s=n.propertyList[0];Array.isArray(s)?(t[n.name]=n,n.a=s):t[n.name]=s}else if(e==="Connections"&&n.name==="C"){const s=[];n.propertyList.forEach(function(r,o){o!==0&&s.push(r)}),t.connections===void 0&&(t.connections=[]),t.connections.push(s)}else if(n.name==="Properties70")Object.keys(n).forEach(function(r){t[r]=n[r]});else if(e==="Properties70"&&n.name==="P"){let s=n.propertyList[0],r=n.propertyList[1];const o=n.propertyList[2],a=n.propertyList[3];let l;s.indexOf("Lcl ")===0&&(s=s.replace("Lcl ","Lcl_")),r.indexOf("Lcl ")===0&&(r=r.replace("Lcl ","Lcl_")),r==="Color"||r==="ColorRGB"||r==="Vector"||r==="Vector3D"||r.indexOf("Lcl_")===0?l=[n.propertyList[4],n.propertyList[5],n.propertyList[6]]:l=n.propertyList[4],t[s]={type:r,type2:o,flag:a,value:l}}else t[n.name]===void 0?typeof n.id=="number"?(t[n.name]={},t[n.name][n.id]=n):t[n.name]=n:n.name==="PoseNode"?(Array.isArray(t[n.name])||(t[n.name]=[t[n.name]]),t[n.name].push(n)):t[n.name][n.id]===void 0&&(t[n.name][n.id]=n)}parseProperty(e){const t=e.getString(1);let n;switch(t){case"C":return e.getBoolean();case"D":return e.getFloat64();case"F":return e.getFloat32();case"I":return e.getInt32();case"L":return e.getInt64();case"R":return n=e.getUint32(),e.getArrayBuffer(n);case"S":return n=e.getUint32(),e.getString(n);case"Y":return e.getInt16();case"b":case"c":case"d":case"f":case"i":case"l":const s=e.getUint32(),r=e.getUint32(),o=e.getUint32();if(r===0)switch(t){case"b":case"c":return e.getBooleanArray(s);case"d":return e.getFloat64Array(s);case"f":return e.getFloat32Array(s);case"i":return e.getInt32Array(s);case"l":return e.getInt64Array(s)}const a=wS(new Uint8Array(e.getArrayBuffer(o))),l=new bf(a.buffer);switch(t){case"b":case"c":return l.getBooleanArray(s);case"d":return l.getFloat64Array(s);case"f":return l.getFloat32Array(s);case"i":return l.getInt32Array(s);case"l":return l.getInt64Array(s)}break;default:throw new Error("THREE.FBXLoader: Unknown property type "+t)}}}class bf{constructor(e,t){this.dv=new DataView(e),this.offset=0,this.littleEndian=t!==void 0?t:!0,this._textDecoder=new TextDecoder}getOffset(){return this.offset}size(){return this.dv.buffer.byteLength}skip(e){this.offset+=e}getBoolean(){return(this.getUint8()&1)===1}getBooleanArray(e){const t=[];for(let n=0;n<e;n++)t.push(this.getBoolean());return t}getUint8(){const e=this.dv.getUint8(this.offset);return this.offset+=1,e}getInt16(){const e=this.dv.getInt16(this.offset,this.littleEndian);return this.offset+=2,e}getInt32(){const e=this.dv.getInt32(this.offset,this.littleEndian);return this.offset+=4,e}getInt32Array(e){const t=[];for(let n=0;n<e;n++)t.push(this.getInt32());return t}getUint32(){const e=this.dv.getUint32(this.offset,this.littleEndian);return this.offset+=4,e}getInt64(){let e,t;return this.littleEndian?(e=this.getUint32(),t=this.getUint32()):(t=this.getUint32(),e=this.getUint32()),t&2147483648?(t=~t&4294967295,e=~e&4294967295,e===4294967295&&(t=t+1&4294967295),e=e+1&4294967295,-(t*4294967296+e)):t*4294967296+e}getInt64Array(e){const t=[];for(let n=0;n<e;n++)t.push(this.getInt64());return t}getUint64(){let e,t;return this.littleEndian?(e=this.getUint32(),t=this.getUint32()):(t=this.getUint32(),e=this.getUint32()),t*4294967296+e}getFloat32(){const e=this.dv.getFloat32(this.offset,this.littleEndian);return this.offset+=4,e}getFloat32Array(e){const t=[];for(let n=0;n<e;n++)t.push(this.getFloat32());return t}getFloat64(){const e=this.dv.getFloat64(this.offset,this.littleEndian);return this.offset+=8,e}getFloat64Array(e){const t=[];for(let n=0;n<e;n++)t.push(this.getFloat64());return t}getArrayBuffer(e){const t=this.dv.buffer.slice(this.offset,this.offset+e);return this.offset+=e,t}getString(e){const t=this.offset;let n=new Uint8Array(this.dv.buffer,t,e);this.skip(e);const s=n.indexOf(0);return s>=0&&(n=new Uint8Array(this.dv.buffer,t,s)),this._textDecoder.decode(n)}}class Zp{add(e,t){this[e]=t}}function BS(i){const e="Kaydara FBX Binary  \0";return i.byteLength>=e.length&&e===Jp(i,0,e.length)}function VS(i){const e=["K","a","y","d","a","r","a","\\","F","B","X","\\","B","i","n","a","r","y","\\","\\"];let t=0;function n(s){const r=i[s-1];return i=i.slice(t+s),t++,r}for(let s=0;s<e.length;++s)if(n(1)===e[s])return!1;return!0}function wf(i){const e=/FBXVersion: (\d+)/,t=i.match(e);if(t)return parseInt(t[1]);throw new Error("THREE.FBXLoader: Cannot find the version number for the file given.")}function HS(i){return i/46186158e3}const GS=[];function bo(i,e,t,n){let s;switch(n.mappingType){case"ByPolygonVertex":s=i;break;case"ByPolygon":s=e;break;case"ByVertice":s=t;break;case"AllSame":s=n.indices[0];break;default:console.warn("THREE.FBXLoader: unknown attribute mapping type "+n.mappingType)}n.referenceType==="IndexToDirect"&&(s=n.indices[s]);const r=s*n.dataSize,o=r+n.dataSize;return XS(GS,n.buffer,r,o)}const pl=new hn,hs=new D;function $p(i){const e=new De,t=new De,n=new De,s=new De,r=new De,o=new De,a=new De,l=new De,c=new De,u=new De,h=new De,f=new De,d=i.inheritType?i.inheritType:0;if(i.translation&&e.setPosition(hs.fromArray(i.translation)),i.preRotation){const R=i.preRotation.map(Ln.degToRad);R.push(i.eulerOrder||hn.DEFAULT_ORDER),t.makeRotationFromEuler(pl.fromArray(R))}if(i.rotation){const R=i.rotation.map(Ln.degToRad);R.push(i.eulerOrder||hn.DEFAULT_ORDER),n.makeRotationFromEuler(pl.fromArray(R))}if(i.postRotation){const R=i.postRotation.map(Ln.degToRad);R.push(i.eulerOrder||hn.DEFAULT_ORDER),s.makeRotationFromEuler(pl.fromArray(R)),s.invert()}i.scale&&r.scale(hs.fromArray(i.scale)),i.scalingOffset&&a.setPosition(hs.fromArray(i.scalingOffset)),i.scalingPivot&&o.setPosition(hs.fromArray(i.scalingPivot)),i.rotationOffset&&l.setPosition(hs.fromArray(i.rotationOffset)),i.rotationPivot&&c.setPosition(hs.fromArray(i.rotationPivot)),i.parentMatrixWorld&&(h.copy(i.parentMatrix),u.copy(i.parentMatrixWorld));const g=t.clone().multiply(n).multiply(s),p=new De;p.extractRotation(u);const m=new De;m.copyPosition(u);const _=m.clone().invert().multiply(u),M=p.clone().invert().multiply(_),x=r,w=new De;if(d===0)w.copy(p).multiply(g).multiply(M).multiply(x);else if(d===1)w.copy(p).multiply(M).multiply(g).multiply(x);else{const j=new De().scale(new D().setFromMatrixScale(h)).clone().invert(),Q=M.clone().multiply(j);w.copy(p).multiply(g).multiply(Q).multiply(x)}const S=c.clone().invert(),P=o.clone().invert();let I=e.clone().multiply(l).multiply(c).multiply(t).multiply(n).multiply(s).multiply(S).multiply(a).multiply(o).multiply(r).multiply(P);const v=new De().copyPosition(I),A=u.clone().multiply(v);return f.copyPosition(A),I=f.clone().multiply(w),I.premultiply(u.invert()),I}function Kp(i){i=i||0;const e=["ZYX","YZX","XZY","ZXY","YXZ","XYZ"];return i===6?(console.warn("THREE.FBXLoader: unsupported Euler Order: Spherical XYZ. Animations and rotations may be incorrect."),e[0]):e[i]}function ml(i){return i.split(",").map(function(t){return parseFloat(t)})}function Jp(i,e,t){return e===void 0&&(e=0),t===void 0&&(t=i.byteLength),new TextDecoder().decode(new Uint8Array(i,e,t))}function WS(i,e){for(let t=0,n=i.length,s=e.length;t<s;t++,n++)i[n]=e[t]}function XS(i,e,t,n){for(let s=t,r=0;s<n;s++,r++)i[r]=e[s];return i}function Sf(i,e,t){return i.slice(0,e).concat(t).concat(i.slice(e))}const jS=new FS,qS=i=>new Promise((e,t)=>{jS.load(i,n=>{e(n)},()=>{},n=>{t(n)})}),Qp=(i,e)=>{i.aspect=window.innerWidth/window.innerHeight,i.updateProjectionMatrix(),e.setSize(window.innerWidth,window.innerHeight),e.setPixelRatio(Math.min(window.devicePixelRatio,2))},em=i=>{const e=document.getElementById(i),t=new $w,n=new kt(60,window.innerWidth/window.innerHeight,1,1e5);t.add(n);const s=new hS(n,e);s.enableDamping=!0,s.enableZoom=!1,s.minDistance=100,s.maxDistance=2e3,t.add(new kp(11382189));const r=new jl(16777215,1,1e4);r.position.set(1e3,2e3,1e3),r.castShadow=!0,t.add(r);const o=new Mp({canvas:e});o.setSize(window.innerWidth,window.innerHeight),o.setPixelRatio(Math.min(window.devicePixelRatio,2)),o.setClearColor(new Pe(0),1),o.shadowMap.enabled=!0,o.shadowMap.type=np;const a=new aS(r.shadow.camera);return t.add(a),{scene:t,camera:n,controls:s,renderer:o}},tm=(i,e)=>{const t=document.body;t.onwheel=n=>{const s=n.clientX/window.innerWidth*2-1,r=-(n.clientY/window.innerHeight*2-1),o=new D(s,r,.5);o.unproject(i),o.sub(i.position).normalize();const a=30,l=n.wheelDelta/Math.abs(n.wheelDelta);i.position.x+=o.x*l*a,i.position.y+=o.y*l*a,i.position.z+=o.z*l*a,e.target.x+=o.x*l*a,e.target.y+=o.y*l*a,e.target.z+=o.z*l*a}},nm=(i,e,t)=>{let n=!0;document.onmousedown=()=>{n=!0,document.onmousemove=()=>{n=!1}},document.onmouseup=s=>{n&&YS(s,i,e,t),document.onmousemove=null}},YS=(i,e,t,n)=>{let s=null;const r=i.clientX/window.innerWidth*2-1,o=-(i.clientY/window.innerHeight*2-1),c=new D(r,o,.5).unproject(t).sub(t.position).normalize(),h=new oS(t.position,c).intersectObjects(e.children,!0);h.length&&(s=h[0]),s&&n(s,3,1e3)},jt={mesh:"#1B3045",head:"#ffffff",surroundLineColor:"#4f90bb",risingColor:"#5588aa",liveColor:"#ffffff",radarColor:"#ff8800",wallColor:"#fab73f",circleColor:"#00bbff",coneColor:"#ffff00",flyColor:"#00bbff",sparklesColor:[13758190,15263976,12374766,9498256,11592447,13296127,16759807,15794175,16777200,16758213,16775885,16767673,16774638,16119260,16777184,14745599]};class ZS{constructor(e,t,n,s){this.height=n,this.time=s,this.scene=e,this.child=t,this.createMesh(),this.createLine()}createMesh(){this.child.geometry.computeBoundingBox(),this.child.geometry.computeBoundingSphere();const{max:e,min:t}=this.child.geometry.boundingBox,n=e.z-t.z,s=new Ft({uniforms:{u_city_color:{value:new Pe(jt.mesh)},u_head_color:{value:new Pe(jt.head)},u_size:{value:n},u_rising_height:this.height,u_rising_color:{value:new Pe(jt.risingColor)},u_time:this.time},vertexShader:`
        uniform float u_time;
        
        varying vec3 v_position;

        void main() {
          float f_rising_duration = 4.0;
          float f_risen = u_time / f_rising_duration;
          if (f_risen > 1.0) {
            f_risen = 1.0;
          }
          float z = position.z * f_risen;

          v_position = position;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(vec2(position), z, 1.0);
        }
      `,fragmentShader:`
        uniform vec3 u_city_color;
        uniform vec3 u_head_color;
        uniform float u_size;
        uniform vec3 u_rising_color;
        uniform float u_rising_height;
        varying vec3 v_position;

        void main() {
          vec3 base_color = u_city_color;
          base_color = mix(base_color, u_head_color, v_position.z / u_size);
          if (u_rising_height > v_position.z && u_rising_height < v_position.z + 6.0) {
            float f_index = (u_rising_height - v_position.z) / 3.0;
            base_color = mix(u_rising_color, base_color, abs(f_index - 1.0));
          }
          
          gl_FragColor = vec4(base_color, 1.0);
        }
      `}),r=new et(this.child.geometry,s);r.position.copy(this.child.position),r.rotation.copy(this.child.rotation),r.scale.copy(this.child.scale),this.scene.add(r)}createLine(){const e=new f1(this.child.geometry),{max:t,min:n}=this.child.geometry.boundingBox,s=new Ft({uniforms:{line_color:{value:new Pe(jt.surroundLineColor)},u_time:this.time,u_max:{value:t},u_min:{value:n},live_color:{value:new Pe(jt.liveColor)}},vertexShader:`
        uniform float u_time;
        uniform vec3 line_color;
        uniform vec3 live_color;
        uniform vec3 u_max;
        uniform vec3 u_min;

        varying vec3 v_color;

        void main() {
          float f_rising_duration = 4.0;
          float f_risen = u_time / f_rising_duration;
          if (f_risen > 1.0) {
            f_risen = 1.0;
          }
          float z = position.z * f_risen;

          float new_time = mod(u_time * 0.1, 1.0);
          float rangY = mix(u_min.y, u_max.y, new_time);
          if (rangY < position.y && rangY > position.y - 200.0) {
            float f_index = 1.0 - sin((position.y - rangY) / 200.0 * 3.14);
            float r = mix(live_color.r, line_color.r, f_index);
            float g = mix(live_color.g, line_color.g, f_index);
            float b = mix(live_color.b, line_color.b, f_index);

            v_color = vec3(r, g, b);
          } else {
            v_color = line_color;
          }
          gl_Position = projectionMatrix * modelViewMatrix * vec4(vec2(position), z, 1.0);
        }
      `,fragmentShader:`
        varying vec3 v_color;

        void main() {
          gl_FragColor = vec4(v_color, 1.0);
        }
      `}),r=new wp(e,s);r.scale.copy(this.child.scale),r.rotation.copy(this.child.rotation),r.position.copy(this.child.position),this.scene.add(r)}}class $S{constructor(e){this.scene=e,this.url="/src/assets/black-bg.png",this.init()}init(){const e=new la,t=new Fn(5e3,32,32),n=new vi({side:Bt,map:e.load(this.url)}),s=new et(t,n);s.position.set(0,0,0),this.scene.add(s)}}class KS{constructor(e,t){this.scene=e,this.time=t,this.init()}init(){const t=new Nr(100,100,1,1),n=new Ft({uniforms:{u_color:{value:new Pe(jt.radarColor)},u_radius:{value:50},u_time:this.time},transparent:!0,side:Bt,vertexShader:`
        varying vec2 v_position;

        void main() {
          v_position = vec2(position);
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,fragmentShader:`
        precision mediump float;
        varying vec2 v_position;

        uniform float u_time;
        uniform float u_radius;
        uniform vec3 u_color;

        void main() {
          float angle = atan(v_position.x, v_position.y);
          float new_angle = mod(angle + u_time, 3.1215926 * 2.0);
          float dis = distance(vec2(0.0, 0.0), v_position);
          float borderWidth = 2.0;
          float f_opacity = 1.0;
          if (dis > u_radius) {// 处于雷达之外
            f_opacity = 0.0;
          } else if (dis > u_radius - borderWidth) {// 处于圆环上
            f_opacity = 1.0;
          } else {// 处于圆环内
            f_opacity = 1.0 - new_angle;
          }

          gl_FragColor = vec4(u_color, f_opacity);
        }
      `}),s=new et(t,n);s.position.set(300,10,0),s.rotateX(-Math.PI/2),this.scene.add(s)}}let im=class{constructor(e,t){this.scene=e,this.time=t}createCylinder(e){const t=new Bs(e.radius,e.radius,e.height,32,1,e.open);t.translate(0,e.height/2,0);const n=new Ft({uniforms:{u_time:this.time,u_color:{value:new Pe(e.color)},u_height:{value:e.height},u_opacity:{value:e.opacity},u_speed:{value:e.speed}},transparent:!0,side:Bt,depthTest:!1,vertexShader:`
        uniform float u_time;
        uniform float u_height;
        uniform float u_speed;

        varying float v_opacity;

        void main() {
          vec3 v_position = position * mod(u_time / u_speed, 1.0);
          v_opacity = (u_height - position.y) / u_height;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(v_position, 1.0);
        }
      `,fragmentShader:`
        uniform vec3 u_color;
        uniform float u_opacity;

        varying float v_opacity;

        void main() {
          gl_FragColor = vec4(u_color, v_opacity * u_opacity);
        }
      `}),s=new et(t,n);s.position.copy(e.position),this.scene.add(s)}};class JS{constructor(e,t){new im(e,t).createCylinder({radius:50,height:50,opacity:.6,speed:2,open:!0,color:jt.wallColor,position:{x:0,y:0,z:0}})}}class QS{constructor(e,t){new im(e,t).createCylinder({radius:50,height:1,opacity:.6,speed:1,open:!1,color:jt.circleColor,position:{x:300,y:0,z:300}})}}class eT{constructor(e,t){this.scene=e,this.time=t,this.init({color:jt.wallColor,height:60,opacity:.6,speed:4,position:{x:300,y:0,z:-200}})}init(e){const t=new Fn(50,32,32,Math.PI/2,Math.PI*2,0,Math.PI/2),n=new Ft({uniforms:{u_time:this.time,u_color:{value:new Pe(e.color)},u_height:{value:e.height},u_opacity:{value:e.opacity},u_speed:{value:e.speed}},transparent:!0,side:Bt,depthTest:!1,vertexShader:`
        uniform float u_time;
        uniform float u_height;
        uniform float u_speed;

        varying float v_opacity;

        void main() {
          vec3 v_position = position * mod(u_time / u_speed, 1.0);
          v_opacity = (u_height - position.y) / u_height;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(v_position, 1.0);
        }
      `,fragmentShader:`
        uniform vec3 u_color;
        uniform float u_opacity;

        varying float v_opacity;

        void main() {
          gl_FragColor = vec4(u_color, v_opacity * u_opacity);
        }
      `}),s=new et(t,n);s.position.copy(e.position),this.scene.add(s)}}class tT{constructor(e,t,n){this.scene=e,this.top=t,this.height=n,this.init({color:jt.coneColor,height:60,speed:4,position:{x:0,y:50,z:0}})}init(e){const t=new Ic(15,30,4),n=new Ft({uniforms:{u_color:{value:new Pe(e.color)},u_height:this.height,u_top:this.top},transparent:!0,side:Bt,depthTest:!1,vertexShader:`
        uniform float u_top;
        uniform float u_height;

        void main() {
          float f_angle = u_height / 10.0;
          float x = position.x * cos(f_angle) - position.z * sin(f_angle);
          float y = position.y + u_top;
          float z = position.z * cos(f_angle) + position.x * sin(f_angle);
          vec4 v_position = vec4(x, y, z, 1.0);
          gl_Position = projectionMatrix * modelViewMatrix * v_position;
        }
      `,fragmentShader:`
        uniform vec3 u_color;
        uniform float u_opacity;

        void main() {
          gl_FragColor = vec4(u_color, 0.6);
        }
      `}),s=new et(t,n);s.position.copy(e.position),s.rotateZ(Math.PI),this.scene.add(s)}}class nT{constructor(e,t){this.scene=e,this.time=t,this.init({source:{x:300,y:0,z:-200},target:{x:-500,y:0,z:-240},range:200,height:300,color:jt.flyColor,size:30})}init(e){const t=new D(e.source.x,e.source.y,e.source.z),n=new D(e.target.x,e.target.y,e.target.z),s=n.clone().lerp(t,.5);s.y+=e.height;const r=parseInt(t.distanceTo(n)),a=new Cp(t,s,n).getPoints(r),l=[],c=[];a.forEach((d,g)=>{l.push(d.x,d.y,d.z),c.push(g)});const u=new ct;u.setAttribute("position",new ke(l,3)),u.setAttribute("a_position",new ke(c,1));const h=new Ft({uniforms:{u_color:{value:new Pe(e.color)},u_range:{value:e.range},u_size:{value:e.size},u_total:{value:r},u_time:this.time},vertexShader:`
        attribute float a_position;
        uniform float u_range;
        uniform float u_size;
        uniform float u_total;
        uniform float u_time;
        varying float v_opacity;

        void main() {
          float size = u_size;
          float total = u_total * mod(u_time, 1.0);

          if (total > a_position && total < a_position + u_range) {
            float index = (a_position + u_range - total) / u_range;
            size *= index;
            v_opacity = 1.0;
          } else {
            v_opacity = 0.0;
          }

          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
          gl_PointSize = size / 10.0;
        }
      `,fragmentShader:`
        uniform vec3 u_color;
        varying float v_opacity;

        void main() {
          gl_FragColor = vec4(u_color, v_opacity);
        }
      `,transparent:!0}),f=new Pc(u,h);this.scene.add(f)}}class iT{constructor(e,t){this.scene=e,this.time=t,this.init({range:200,height:300,color:jt.flyColor,size:30})}init(e){const s=new Tp([new D(-320,0,160),new D(-150,0,-40),new D(-10,0,-35),new D(40,0,40),new D(30,0,150),new D(-100,0,310)]).getPoints(400),r=[],o=[];s.forEach((u,h)=>{r.push(u.x,u.y,u.z),o.push(h)});const a=new ct;a.setAttribute("position",new ke(r,3)),a.setAttribute("a_position",new ke(o,1));const l=new Ft({uniforms:{u_color:{value:new Pe(e.color)},u_range:{value:e.range},u_size:{value:e.size},u_total:{value:400},u_time:this.time},vertexShader:`
        attribute float a_position;
        uniform float u_range;
        uniform float u_size;
        uniform float u_total;
        uniform float u_time;
        varying float v_opacity;

        void main() {
          float size = u_size;
          float total = u_total * mod(u_time, 1.0);

          if (total > a_position && total < a_position + u_range) {
            float index = (a_position + u_range - total) / u_range;
            size *= index;
            v_opacity = 1.0;
          } else {
            v_opacity = 0.0;
          }

          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
          gl_PointSize = size / 10.0;
        }
      `,fragmentShader:`
        uniform vec3 u_color;
        varying float v_opacity;

        void main() {
          gl_FragColor = vec4(u_color, v_opacity);
        }
      `,transparent:!0}),c=new Pc(a,l);this.scene.add(c)}}class sT extends Ur{constructor(e){super(e)}load(e,t,n,s){const r=this,o=new Up(this.manager);o.setPath(this.path),o.setRequestHeader(this.requestHeader),o.setWithCredentials(this.withCredentials),o.load(e,function(a){const l=r.parse(JSON.parse(a));t&&t(l)},n,s)}parse(e){return new rT(e)}}class rT{constructor(e){this.isFont=!0,this.type="Font",this.data=e}generateShapes(e,t=100){const n=[],s=oT(e,t,this.data);for(let r=0,o=s.length;r<o;r++)n.push(...s[r].toShapes());return n}}function oT(i,e,t){const n=Array.from(i),s=e/t.resolution,r=(t.boundingBox.yMax-t.boundingBox.yMin+t.underlineThickness)*s,o=[];let a=0,l=0;for(let c=0;c<n.length;c++){const u=n[c];if(u===`
`)a=0,l-=r;else{const h=aT(u,s,a,l,t);a+=h.offsetX,o.push(h.path)}}return o}function aT(i,e,t,n,s){const r=s.glyphs[i]||s.glyphs["?"];if(!r){console.error('THREE.Font: character "'+i+'" does not exists in font family '+s.familyName+".");return}const o=new lS;let a,l,c,u,h,f,d,g;if(r.o){const p=r._cachedOutline||(r._cachedOutline=r.o.split(" "));for(let m=0,_=p.length;m<_;)switch(p[m++]){case"m":a=p[m++]*e+t,l=p[m++]*e+n,o.moveTo(a,l);break;case"l":a=p[m++]*e+t,l=p[m++]*e+n,o.lineTo(a,l);break;case"q":c=p[m++]*e+t,u=p[m++]*e+n,h=p[m++]*e+t,f=p[m++]*e+n,o.quadraticCurveTo(h,f,c,u);break;case"b":c=p[m++]*e+t,u=p[m++]*e+n,h=p[m++]*e+t,f=p[m++]*e+n,d=p[m++]*e+t,g=p[m++]*e+n,o.bezierCurveTo(h,f,d,g,c,u);break}}return{offsetX:r.ha*e,path:o}}class lT extends Fc{constructor(e,t={}){const n=t.font;if(n===void 0)super();else{const s=n.generateShapes(e,t.size);t.depth=t.height!==void 0?t.height:50,t.bevelThickness===void 0&&(t.bevelThickness=10),t.bevelSize===void 0&&(t.bevelSize=8),t.bevelEnabled===void 0&&(t.bevelEnabled=!1),super(s,t)}this.type="TextGeometry"}}class cT{constructor(e){this.scene=e,this.font=null,this.init()}init(){new sT().load("/STXinwei_Regular.json",t=>{this.font=t,this.createTextQueue()})}createTextQueue(){[{text:"最高楼",size:20,position:{x:-20,y:130,z:410},rotate:Math.PI/1.3,color:"#ffffff"},{text:"第二高楼",size:20,position:{x:180,y:110,z:-70},rotate:Math.PI/2,color:"#ffffff"}].forEach(e=>{this.createText(e)})}createText(e){const t=new lT(e.text,{font:this.font,size:e.size,height:2}),n=new Ft({uniforms:{u_color:{value:new Pe(e.color)}},vertexShader:`
        void main() {
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,fragmentShader:`
        uniform vec3 u_color;

        void main() {
          gl_FragColor = vec4(u_color, 1.0);
        }
      `}),s=new et(t,n);s.position.copy(e.position),s.rotateY(e.rotate),this.scene.add(s)}}class uT{constructor(e,{position:t,direction:n}){this.scene=e,this.position=t,this.direction=n,this.smokes=[],this.points=[],this.mesh=null,this.init()}init(){this.geometry=new ct,this.material=new Sp({size:50,map:new la().load("/src/assets/smoke.png"),transparent:!0,depthTest:!1}),this.material.onBeforeCompile=e=>{const t=`
        attribute float a_opacity;
        attribute float a_size;
        attribute float a_scale;
        varying float v_opacity;

        void main() {
          v_opacity = a_opacity;
      `;e.vertexShader=e.vertexShader.replace("void main() {",t);const n=`
        gl_PointSize = a_size * a_scale;
      `;e.vertexShader=e.vertexShader.replace("gl_PointSize = size;",n);const s=`
        varying float v_opacity;

        void main() {
      `;e.fragmentShader=e.fragmentShader.replace("void main() {",s);const r=`
        gl_FragColor = vec4(outgoingLight, diffuseColor.a * v_opacity);
      `;e.fragmentShader=e.fragmentShader.replace("gl_FragColor = vec4(outgoingLight, diffuseColor.a);",r)},this.mesh=new Pc(this.geometry,this.material),this.scene.add(this.mesh)}createParticle(){this.smokes.push({opacity:1,scale:1,size:50,x:this.position.x,y:this.position.y,z:this.position.z,vx:Math.random()*this.direction.x,vy:Math.random()+1,vz:Math.random()*this.direction.y})}setAttribute(e,t,n,s){this.geometry.setAttribute("position",new Vt(new Float32Array(e),3)),this.geometry.setAttribute("a_opacity",new Vt(new Float32Array(t),1)),this.geometry.setAttribute("a_size",new Vt(new Float32Array(n),1)),this.geometry.setAttribute("a_scale",new Vt(new Float32Array(s),1))}update(){const e=[],t=[],n=[],s=[];this.smokes=this.smokes.filter(r=>r.opacity<0?!1:(r.opacity-=.01,r.scale+=.02,r.x+=r.vx,r.y+=r.vy,r.z+=r.vz,e.push(r.x,r.y,r.z),t.push(r.opacity),n.push(r.size),s.push(r.scale),!0)),this.setAttribute(e,t,n,s)}animation(){this.createParticle(),this.update()}}class hT{constructor(e,t,n){this.scene=e,this.x=t.x,this.y=t.y,this.z=t.z,this.vx=t.vx,this.vy=t.vy,this.vz=t.vz,this.sparks=n,this.life=100,this.mesh=null,this.init()}init(){const e=Math.floor(Math.random()*jt.sparklesColor.length),t=new Fn(3,8,8,0,Math.PI*2,0,Math.PI*2),n=new vi({color:jt.sparklesColor[e]});this.mesh=new et(t,n),this.scene.add(this.mesh)}animation(){this.x+=this.vx,this.y+=this.vy,this.z+=this.vz,this.mesh.position.copy({x:this.x,y:this.y,z:this.z}),this.vy-=.05,this.vx*=.95,this.vy*=.95,this.vz*=.95,this.life--,this.life<10&&(this.scene.remove(this.mesh),this.sparks.splice(this.sparks.indexOf(this),1))}}class fT{constructor(e,t,n,s,r){this.scene=e,this.position=t,this.vy=n,this.fires=s,this.sparks=r,this.mesh=null,this.init()}init(){const e=new Fn(5,8,8,0,Math.PI*2,0,Math.PI*2),t=new vi({color:16777215});this.mesh=new et(e,t),this.scene.add(this.mesh)}animation(){if(this.position.y+=this.vy,this.vy-=.1,this.mesh.position.copy(this.position),this.vy<1){this.scene.remove(this.mesh),this.fires.splice(this.fires.indexOf(this),1);const e=Math.random()*5+5;for(let t=0;t<60;t++){const n=Math.random()*e,s=Math.cos(t*Math.PI/30)*n,r=(Math.random()*2-1)*n,o=Math.sin(t*Math.PI/30)*n;this.sparks.push(new hT(this.scene,{...this.position,vx:s,vy:r,vz:o},this.sparks))}}}}class dT{constructor(e,t,n){this.tweenPosition=null,this.tweenRotation=null,this.camera=t,this.scene=e,this.controls=n,this.risingHeight={value:0},this.time={value:0},this.coneTop={value:0},this.coneSpeed=.8,this.effects={},this.smoke=null,this.fires=[],this.sparks=[],this.countUp=0,this.firesCount=10,this.loadCity()}loadCity(){qS("/src/model/beijing.fbx").then(e=>{e.traverse(t=>{t.isMesh&&new ZS(this.scene,t,this.risingHeight,this.time)}),this.initEffect()})}initEffect(){new $S(this.scene),new KS(this.scene,this.time),new JS(this.scene,this.time),new QS(this.scene,this.time),new eT(this.scene,this.time),new tT(this.scene,this.coneTop,this.risingHeight),new nT(this.scene,this.time),new iT(this.scene,this.time),new cT(this.scene),this.smoke=new uT(this.scene,{position:{x:-20,y:50,z:360},direction:{x:1.3,y:-.7}}),nm(this.scene,this.camera,(e,t,n)=>{this.tweenPosition=new Vo(this.camera.position).to({x:e.point.x*t,y:e.point.y*t,z:e.point.z*t},n).start(),this.tweenRotation=new Vo(this.camera.rotation).to({x:this.camera.rotation.x,y:this.camera.rotation.y,z:this.camera.rotation.z},n).start()}),tm(this.camera,this.controls)}start(e){for(const t in this.effects)Object.hasOwnProperty.call(this.effects,t)&&this.effects[t].pointInstance.animation();this.smoke&&this.smoke.animation(),this.countUp<60?this.countUp++:(this.fires.push(new fT(this.scene,{x:(Math.random()*2-1)*400,y:0,z:(Math.random()*2-1)*200},Math.random()*2+9,this.fires,this.sparks)),this.countUp=0);for(const t of this.fires)t.animation();for(const t of this.sparks)t.animation();this.tweenPosition&&this.tweenRotation&&(this.tweenPosition.update(),this.tweenRotation.update()),this.time.value+=e,this.risingHeight.value+=.4,this.risingHeight.value>160&&(this.risingHeight.value=0),this.coneTop.value+=this.coneSpeed,(this.coneTop.value>15||this.coneTop.value<0)&&(this.coneSpeed=-1*this.coneSpeed)}}const pT=()=>{const{scene:i,camera:e,controls:t,renderer:n}=em("city");e.position.set(800,500,-800),t.target.set(0,300,0);const s=new dT(i,e,t),r=new Bp,o=()=>{s.start(r.getDelta()),t.update(),n.render(i,e),requestAnimationFrame(o)};o(),window.addEventListener("resize",()=>Qp(e,n))},Bc=(i,e)=>{const t=i.__vccOpts||i;for(const[n,s]of e)t[n]=s;return t},mT={data(){return{}},mounted(){pT()},unmounted(){window.removeEventListener("resize",()=>{})}},gT={id:"city"};function _T(i,e,t,n,s,r){return Ii(),gs("canvas",gT," 浏览器不支持canvas，请切换浏览器重试 ")}const xT=Bc(mT,[["render",_T]]);class Xn{constructor(e,t){this.scene=e,this.position=t.position||{x:0,y:0,z:0},this.rotation=t.rotation||{x:0,y:0,z:0},this.color=t.color||4473924,this.radius=t.radius||50,this.height=t.height||50,this.wrireframe=t.wrireframe||!1,this.open=t.open||!1,this.group=t.group||null,this.init()}init(){const e=new Bs(this.radius,this.radius,this.height,20,2,this.open),t=new xi({color:this.color}),n=new et(e,t);n.castShadow=!0,n.rotateX(this.rotation.x),n.rotateY(this.rotation.y),n.rotateZ(this.rotation.z),n.position.copy(this.position),this.group?this.group.add(n):this.scene.add(n)}}class Ge{constructor(e,t,n){this.scene=e,this.position=n.position||{x:0,y:0,z:0},this.rotation=n.rotation||{x:0,y:0,z:0},this.color=n.color||6710886,this.side=n.side||dn,this.verticesArr=t,this.group=n.group||null,this.init()}init(){const e=new Float32Array(this.verticesArr),t=new ct;t.setAttribute("position",new Vt(e,3)),t.computeVertexNormals();const n=new xi({color:this.color,side:this.side}),s=new et(t,n);s.castShadow=!0,s.rotateX(this.rotation.x),s.rotateY(this.rotation.y),s.rotateZ(this.rotation.z),s.position.copy(this.position),this.group?this.group.add(s):this.scene.add(s)}}class er{constructor(e,t){this.scene=e,this.position=t.position||{x:0,y:0,z:0},this.rotation=t.rotation||{x:0,y:0,z:0},this.color=t.color||2003199,this.radius=t.radius||100,this.side=t.side||dn,this.group=t.group||null,this.init()}init(){const e=new Fn(this.radius,20,20,Math.PI*2,Math.PI*2,Math.PI*2,Math.PI*2),t=new xi({color:this.color}),n=new et(e,t);n.castShadow=!0,n.rotateX(this.rotation.x),n.rotateY(this.rotation.y),n.rotateZ(this.rotation.z),n.position.copy(this.position),this.group?this.group.add(n):this.scene.add(n)}}class Tf{constructor(e,t){this.scene=e,this.position=t.position||{x:0,y:0,z:0},this.rotation=t.rotation||{x:0,y:0,z:0},this.color=t.color||255,this.init()}init(){const e=new Fn(110,20,20,0,Math.PI,0,Math.PI),t=new xi({color:this.color}),n=new et(e,t);n.castShadow=!0,n.rotateX(this.rotation.x),n.rotateY(this.rotation.y),n.rotateZ(this.rotation.z),n.position.copy(this.position),this.scene.add(n)}}class vT{constructor(e,t){this.scene=e,this.position=t.position||{x:0,y:0,z:0},this.rotation=t.rotation||{x:0,y:0,z:0},this.color=t.color||255,this.init()}init(){const e=new ra(110,20,0,Math.PI*2),t=new vi({color:this.color}),n=new et(e,t);n.castShadow=!0,n.rotateX(this.rotation.x),n.rotateY(this.rotation.y),n.rotateZ(this.rotation.z),n.position.copy(this.position),this.scene.add(n)}}const Ye=i=>[...i[0],...i[1],...i[2],...i[0],...i[2],...i[3],...i[0],...i[3],...i[7],...i[0],...i[7],...i[4],...i[1],...i[5],...i[6],...i[1],...i[6],...i[2],...i[0],...i[5],...i[1],...i[0],...i[4],...i[5],...i[2],...i[6],...i[7],...i[2],...i[7],...i[3],...i[4],...i[6],...i[5],...i[4],...i[7],...i[6]],Ef=[[10,50,30],[-10,50,30],[-10,0,30],[10,0,30],[10,100,-50],[-10,100,-50],[-10,10,-30],[10,10,-30]],Af=[[10,190,-40],[-10,190,-40],[-10,20,0],[10,20,0],[10,200,-50],[-10,200,-50],[10,100,-50],[-10,100,-50]],Cf=[[150,100,120],[-100,100,100],[-100,-100,100],[150,-100,120],[150,100,-100],[-100,100,-100],[-100,-100,-100],[150,-100,-100]],Pf=[[7,80,0],[-7,80,0],[-20,-10,0],[20,-10,0],[10,100,-20],[-10,100,-20],[-20,-10,-20],[20,-10,-20]],yT=[[10,50,100],[-10,50,100],[-20,-50,100],[20,-50,100],[20,40,80],[-20,40,80],[-50,-50,50],[50,-50,50]],MT=[[10,50,100],[-10,50,100],[-20,-50,100],[20,-50,100],[80,50,80],[-80,50,80],[-50,-50,80],[50,-50,80]],Lf=[[100,50,100],[0,50,100],[0,-350,100],[100,-350,100],[100,50,0],[0,50,0],[0,-350,0],[100,-350,0]],Rf=[[20,40,20],[0,40,20],[0,0,20],[20,0,20],[20,40,0],[0,40,0],[0,0,0],[20,0,0]],bT=[[180,0,50],[-180,0,50],[-180,-200,50],[180,-200,50],[180,0,-90],[-180,0,-90],[-180,-200,-90],[180,-200,-90]],gl=[[-10,-20,80],[-120,-20,80],[-120,-20,80],[-10,-20,80],[0,0,50],[-150,0,50],[-150,-70,50],[0,-70,50]],_l=[[120,-20,80],[10,-20,80],[10,-20,80],[120,-20,80],[150,0,50],[0,0,50],[0,-70,50],[150,-70,50]],wT=[[220,0,80],[-220,0,80],[-220,-150,80],[220,-150,80],[220,0,-100],[-220,0,-100],[-220,-150,-100],[220,-150,-100]],ST=[[30,0,80],[-30,0,80],[-20,-20,50],[20,-20,50],[30,0,-100],[-30,0,-100],[-20,-20,-70],[20,-20,-70]],Df=[[150,0,150],[0,0,150],[0,-500,150],[150,-500,150],[150,0,0],[0,0,0],[0,-500,0],[150,-500,0]],If=[[200,0,200],[0,0,200],[0,-500,200],[200,-500,200],[200,0,0],[0,0,0],[0,-500,0],[200,-500,0]],Ff=[[0,0,0],[-200,0,0],[-200,-100,0],[0,-100,0],[0,0,-100],[-200,0,-100],[-200,-100,-100],[0,-100,-100]],Of=[[0,-50,100],[-200,-50,100],[-200,-100,100],[0,-100,100],[0,0,-100],[-200,0,-100],[-200,-100,-100],[0,-100,-100]],TT=[[0,0,0],[-60,0,0],[-60,-200,0],[0,-200,0],[0,0,-60],[-60,0,-60],[-60,-200,-60],[0,-200,-60]],ET=[[0,0,0],[-20,0,0],[-20,-100,0],[0,-100,0],[0,0,-20],[-20,0,-20],[-20,-100,-20],[0,-100,-20]];class zf{constructor(e,t){this.scene=e,this.position=t.position||{x:0,y:0,z:0},this.rotation=t.rotation||{x:0,y:0,z:0},this.color=t.color||4473924,this.side=t.side||dn,this.init()}init(){const e=new As;e.moveTo(0,0),e.lineTo(0,40),e.lineTo(100,40),e.lineTo(60,0),e.lineTo(0,0),e.moveTo(20,23),e.lineTo(45,20),e.lineTo(55,25),e.lineTo(55,30),e.lineTo(20,30),e.lineTo(20,23);const t=new zc(e),n=new vi({color:this.color,side:this.side}),s=new et(t,n);s.castShadow=!0,s.rotateX(this.rotation.x),s.rotateY(this.rotation.y),s.rotateZ(this.rotation.z),s.position.copy(this.position),this.scene.add(s)}}class Nf{constructor(e,t){this.scene=e,this.position=t.position||{x:0,y:0,z:0},this.rotation=t.rotation||{x:0,y:0,z:0},this.color=t.color||255,this.init()}init(){const e=new Fn(40,10,10,0,Math.PI,0,Math.PI),t=new vi({color:this.color}),n=new et(e,t);n.castShadow=!0,n.rotateX(this.rotation.x),n.rotateY(this.rotation.y),n.rotateZ(this.rotation.z),n.position.copy(this.position),this.scene.add(n)}}const Uf=i=>[...i[0],...i[2],...i[1],...i[0],...i[3],...i[2],...i[0],...i[4],...i[3],...i[4],...i[5],...i[3],...i[4],...i[6],...i[5],...i[7],...i[8],...i[9],...i[7],...i[9],...i[10],...i[7],...i[10],...i[11],...i[11],...i[10],...i[12],...i[11],...i[12],...i[13],...i[1],...i[9],...i[8],...i[1],...i[2],...i[9],...i[2],...i[10],...i[9],...i[2],...i[3],...i[10],...i[3],...i[12],...i[10],...i[3],...i[5],...i[12]],kf=[[0,0,100],[0,150,100],[50,150,100],[120,120,100],[50,-30,100],[300,-100,100],[200,-120,100],[0,0,-10],[0,150,-10],[50,150,-10],[120,120,-10],[50,-30,-10],[300,-100,-10],[200,-120,-10]],Bf=i=>[...i[0],...i[4],...i[1],...i[1],...i[4],...i[2],...i[4],...i[3],...i[2],...i[0],...i[5],...i[4],...i[0],...i[6],...i[5],...i[0],...i[7],...i[6],...i[8],...i[9],...i[12],...i[9],...i[10],...i[12],...i[12],...i[10],...i[11],...i[8],...i[12],...i[13],...i[8],...i[13],...i[14],...i[8],...i[14],...i[15],...i[0],...i[9],...i[8],...i[0],...i[1],...i[9],...i[1],...i[10],...i[9],...i[1],...i[2],...i[10],...i[2],...i[11],...i[10],...i[2],...i[3],...i[11],...i[3],...i[12],...i[11],...i[3],...i[4],...i[12],...i[4],...i[13],...i[12],...i[4],...i[5],...i[13],...i[5],...i[14],...i[13],...i[5],...i[6],...i[14],...i[6],...i[15],...i[14],...i[6],...i[7],...i[15],...i[7],...i[8],...i[15],...i[7],...i[0],...i[8]],Vf=[[0,0,20],[0,50,20],[0,120,20],[20,120,20],[20,50,20],[50,50,20],[50,25,20],[40,0,20],[0,0,0],[0,50,0],[0,120,0],[20,120,0],[20,50,0],[50,50,0],[50,25,0],[40,0,0]];class AT{constructor(e,t){this.scene=e,this.position=t.position||{x:0,y:0,z:0},this.rotation=t.rotation||{x:0,y:0,z:0},this.color=t.color||4473924,this.radius=t.radius||20,this.height=t.height||50,this.wrireframe=t.wrireframe||!1,this.side=t.side||Ht,this.group=t.group||null,this.init()}init(){const e=new Bs(this.radius,this.radius,this.height,10,2,!0),t=new xi({color:this.color,side:this.side}),n=new et(e,t),s=new ra(this.radius,10);s.rotateX(-Math.PI/2),s.translate(0,this.height/2,0);const r=new et(s,new xi({color:255,side:this.side})),o=new ot;o.castShadow=!0,o.add(n),o.add(r),o.rotateX(this.rotation.x),o.rotateY(this.rotation.y),o.rotateZ(this.rotation.z),o.position.copy(this.position),this.group?this.group.add(o):this.scene.add(o)}}class CT{constructor(e,t){this.scene=e,this.position=t.position||{x:0,y:0,z:0},this.rotation=t.rotation||{x:0,y:0,z:0},this.color=t.color||4473924,this.radius=t.radius||30,this.wrireframe=t.wrireframe||!1,this.group=t.group||null,this.init()}init(){const e=new Oc(this.radius,this.radius-10,20),t=new xi({color:this.color}),n=new et(e,t);n.castShadow=!0,n.rotateX(this.rotation.x),n.rotateY(this.rotation.y),n.rotateZ(this.rotation.z),n.position.copy(this.position),this.group?this.group.add(n):this.scene.add(n)}}class PT{constructor(e,t){this.scene=e,this.position=t.position||{x:0,y:0,z:0},this.rotation=t.rotation||{x:0,y:0,z:0},this.color=t.color||10066329,this.init()}init(){const e=new Nr(1e5,1e5,10,10),t=new xi({color:this.color}),n=new et(e,t);n.receiveShadow=!0,n.rotateX(this.rotation.x),n.rotateY(this.rotation.y),n.rotateZ(this.rotation.z),n.position.copy(this.position),this.scene.add(n)}}class LT{constructor(e){this.scene=e,this.init()}init(){const e=new Fn(1e5,20,20,Math.PI*2,Math.PI*2,Math.PI*2,Math.PI*2);new la().load("/src/assets/sky.jpg",n=>{const s=new Fp({map:n}),r=new et(e,s);this.scene.add(r)})}}let RT=class{constructor(e,t,n,s){this.tweenPosition=null,this.tweenRotation=null,this.camera=t,this.scene=e,this.controls=n,this.renderer=s,this.time={value:0},this.rightHand=new Ui,this.countDown=60,this.direction=-1,this.initEffect()}initEffect(){new Ge(this.scene,Ye(Cf),{position:{x:-150,y:40,z:0}}),new Ge(this.scene,Ye(Cf),{position:{x:150,y:40,z:0},rotation:{x:0,y:0,z:Math.PI}}),new Xn(this.scene,{position:{x:0,y:145,z:0}}),new er(this.scene,{position:{x:0,y:250,z:0}}),new Ge(this.scene,Ye(MT),{position:{x:0,y:220,z:10},rotation:{x:.3,y:0,z:0}}),new Tf(this.scene,{position:{x:0,y:270,z:0},rotation:{x:Math.PI*1.5,y:0,z:0}}),new vT(this.scene,{position:{x:0,y:270,z:0},rotation:{x:Math.PI*.5,y:0,z:0}}),new Tf(this.scene,{position:{x:0,y:260,z:0},rotation:{x:3,y:0,z:0}}),new Ge(this.scene,Ye(yT),{position:{x:0,y:350,z:0},color:255}),new Ge(this.scene,Ye(Pf),{position:{x:0,y:290,z:110}}),new Ge(this.scene,Ye(Pf),{position:{x:0,y:200,z:80},rotation:{x:.5,y:0,z:0}}),new Ge(this.scene,Ye(Ef),{position:{x:80,y:180,z:70},rotation:{x:0,y:0,z:-.2},color:255}),new Ge(this.scene,Ye(Af),{position:{x:80,y:180,z:70},rotation:{x:0,y:0,z:-.2},color:255}),new Ge(this.scene,Ye(Ef),{position:{x:-80,y:180,z:70},rotation:{x:0,y:0,z:.2},color:255}),new Ge(this.scene,Ye(Af),{position:{x:-80,y:180,z:70},rotation:{x:0,y:0,z:.2},color:255}),new zf(this.scene,{position:{x:0,y:230,z:110},rotation:{x:0,y:.4,z:0},side:dn}),new zf(this.scene,{position:{x:0,y:230,z:110},rotation:{x:0,y:Math.PI-.4,z:0},side:Ht}),new Nf(this.scene,{position:{x:80,y:250,z:10},rotation:{x:-.2,y:Math.PI/2,z:0}}),new Nf(this.scene,{position:{x:-80,y:250,z:10},rotation:{x:Math.PI-.2,y:-Math.PI/2,z:0}}),new Xn(this.scene,{position:{x:270,y:90,z:0},rotation:{x:0,y:0,z:Math.PI/2}}),new Ge(this.scene,Ye(Lf),{position:{x:270,y:100,z:-50},rotation:{x:-.3,y:0,z:.2}}),new Ge(this.scene,Uf(kf),{position:{x:230,y:140,z:-60},rotation:{x:-.3,y:0,z:-.5},color:255,side:Bt}),new er(this.scene,{position:{x:390,y:-200,z:130},radius:50,color:4473924}),new Xn(this.scene,{position:{x:390,y:-120,z:290},rotation:{x:1.1,y:0,z:0},color:255,radius:50,height:300,wrireframe:!0}),new Xn(this.scene,{position:{x:390,y:-50,z:430},rotation:{x:1.1,y:0,z:0},radius:30,height:50}),new Ge(this.scene,Bf(Vf),{position:{x:410,y:-20,z:430},rotation:{x:1.1,y:-Math.PI/2,z:0},color:4095}),new Ge(this.scene,Ye(Rf),{position:{x:390,y:-20,z:430},rotation:{x:1.1,y:-Math.PI/2,z:0},color:4095}),this.rightHand.position.set(0,90,0),new Xn(this.scene,{position:{x:-270,y:0,z:0},rotation:{x:0,y:0,z:Math.PI/2},group:this.rightHand}),new Ge(this.scene,Ye(Lf),{position:{x:-370,y:10,z:-50},rotation:{x:-.3,y:0,z:-.2},group:this.rightHand}),new Ge(this.scene,Uf(kf),{position:{x:-230,y:70,z:30},rotation:{x:-.3,y:-Math.PI,z:-.5},color:255,side:Bt,group:this.rightHand}),new er(this.scene,{position:{x:-390,y:-310,z:100},radius:50,color:4473924,group:this.rightHand}),new Xn(this.scene,{position:{x:-390,y:-460,z:180},rotation:{x:-.5,y:0,z:0},color:255,radius:50,height:300,wrireframe:!0,group:this.rightHand}),new Xn(this.scene,{position:{x:-390,y:-620,z:270},rotation:{x:-.5,y:0,z:0},radius:30,height:50,group:this.rightHand}),new Ge(this.scene,Bf(Vf),{position:{x:-390,y:-620,z:300},rotation:{x:-Math.PI-.5,y:-Math.PI/2,z:0},color:4095,group:this.rightHand}),new Ge(this.scene,Ye(Rf),{position:{x:-370,y:-620,z:300},rotation:{x:-Math.PI-.5,y:-Math.PI/2,z:0},color:255,group:this.rightHand}),new Ge(this.scene,Ye(TT),{position:{x:-420,y:-800,z:400},rotation:{x:-Math.PI-.5,y:-Math.PI/2,z:0},color:1052688,group:this.rightHand}),new Ge(this.scene,Ye(ET),{position:{x:-400,y:-650,z:360},rotation:{x:-Math.PI-.5,y:-Math.PI/2,z:Math.PI/2},color:1052688,group:this.rightHand}),new Xn(this.scene,{position:{x:-390,y:-800,z:440},rotation:{x:-.5,y:0,z:0},radius:20,height:30,color:4473924,group:this.rightHand}),new Xn(this.scene,{position:{x:-390,y:-890,z:490},rotation:{x:-.5,y:0,z:0},radius:30,height:200,wrireframe:!0,open:!0,color:1052688,group:this.rightHand}),new CT(this.scene,{position:{x:-390,y:-978,z:538},rotation:{x:-Math.PI/2-.5,y:0,z:0},wrireframe:!0,color:1052688,group:this.rightHand}),new AT(this.scene,{position:{x:-390,y:-955,z:525},rotation:{x:-.5,y:0,z:0},wrireframe:!0,color:1052688,group:this.rightHand}),this.scene.add(this.rightHand),new Ge(this.scene,Ye(bT),{position:{x:0,y:-60,z:0}}),new Ge(this.scene,Ye(gl),{position:{x:-0,y:-60,z:0},color:4473924}),new Ge(this.scene,Ye(gl),{position:{x:-0,y:-130,z:0},color:4473924}),new Ge(this.scene,Ye(gl),{position:{x:-0,y:-200,z:0},color:4473924}),new Ge(this.scene,Ye(_l),{position:{x:-0,y:-60,z:0},color:4473924}),new Ge(this.scene,Ye(_l),{position:{x:-0,y:-130,z:0},color:4473924}),new Ge(this.scene,Ye(_l),{position:{x:-0,y:-200,z:0},color:4473924}),new Ge(this.scene,Ye(wT),{position:{x:0,y:-260,z:0}}),new Ge(this.scene,Ye(ST),{position:{x:0,y:-410,z:0},color:4473924}),new Ge(this.scene,Ye(Df),{position:{x:40,y:-410,z:-80},rotation:{x:0,y:0,z:.2}}),new Ge(this.scene,Ye(Df),{position:{x:-190,y:-380,z:-80},rotation:{x:0,y:0,z:-.2}}),new Ge(this.scene,Ye(If),{position:{x:-320,y:-860,z:-100},rotation:{x:0,y:0,z:-.2},color:255}),new Ge(this.scene,Ye(If),{position:{x:120,y:-900,z:-100},rotation:{x:0,y:0,z:.2},color:255}),new Ge(this.scene,Ye(Ff),{position:{x:-230,y:-1380,z:0},color:255}),new er(this.scene,{position:{x:-320,y:-1350,z:0},radius:80,color:4473924}),new Ge(this.scene,Ye(Of),{position:{x:-230,y:-1380,z:120},color:255}),new Ge(this.scene,Ye(Ff),{position:{x:430,y:-1380,z:0},color:255}),new er(this.scene,{position:{x:320,y:-1350,z:0},radius:80,color:4473924}),new Ge(this.scene,Ye(Of),{position:{x:430,y:-1380,z:120},color:255}),new PT(this.scene,{position:{x:0,y:-1480,z:0},rotation:{x:-Math.PI/2,y:0,z:0}}),new LT(this.scene),nm(this.scene,this.camera,(e,t,n)=>{this.tweenPosition=new Vo(this.camera.position).to({x:e.point.x*t,y:e.point.y*t,z:e.point.z*t},n).start(),this.tweenRotation=new Vo(this.camera.rotation).to({x:this.camera.rotation.x,y:this.camera.rotation.y,z:this.camera.rotation.z},n).start()}),tm(this.camera,this.controls)}start(e){this.tweenPosition&&this.tweenRotation&&(this.tweenPosition.update(),this.tweenRotation.update()),this.countDown+=this.direction,this.countDown<=-60?this.direction=1:this.countDown>=60&&(this.direction=-1),this.rightHand.rotateX(e*this.direction),this.time.value+=e}};const DT=()=>{const{scene:i,camera:e,controls:t,renderer:n}=em("tf");e.position.set(0,-1400,6e3),t.target.set(0,0,0);const s=new RT(i,e,t,n),r=new Bp,o=()=>{s.start(r.getDelta()),t.update(),n.render(i,e),requestAnimationFrame(o)};o(),window.addEventListener("resize",()=>Qp(e,n))},IT={data(){return{}},mounted(){DT()},unmounted(){window.removeEventListener("resize",()=>{})}},FT={id:"tf"};function OT(i,e,t,n,s,r){return Ii(),gs("canvas",FT," 浏览器不支持canvas，请切换浏览器重试 ")}const zT=Bc(IT,[["render",OT]]),sm=[{path:"/",component:xT,title:"3d city"},{path:"/transformer",component:zT,title:"transformer"}],NT=V_({history:i_(),routes:sm});const UT={data(){return{routes:sm,showMenus:!1}},methods:{switchShowMenus(){this.showMenus=!this.showMenus}}},kT=["onmouseleave"],BT=["onmouseenter"],VT={key:1,class:"menus-wrap"};function HT(i,e,t,n,s,r){const o=tu("router-link"),a=tu("router-view");return Ii(),gs("div",null,[pc("div",{class:"menus",onmouseleave:r.switchShowMenus},[s.showMenus?(Ii(),gs("div",VT,[(Ii(!0),gs(vn,null,Og(s.routes,l=>(Ii(),e0(o,{key:l.title,to:l.path},{default:vd(()=>[Bd(gm(l.title),1)]),_:2},1032,["to"]))),128))])):(Ii(),gs("a",{key:0,class:"more-icon",onmouseenter:r.switchShowMenus},"...",8,BT))],8,kT),en(a)])}const GT=Bc(UT,[["render",HT],["__scopeId","data-v-eacaee66"]]),rm=N0(GT);rm.use(NT);rm.mount("#app");
