(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}})();function Il(i,e){const t=Object.create(null),n=i.split(",");for(let r=0;r<n.length;r++)t[n[r]]=!0;return e?r=>!!t[r.toLowerCase()]:r=>!!t[r]}function Fl(i){if(Ne(i)){const e={};for(let t=0;t<i.length;t++){const n=i[t],r=St(n)?Mp(n):Fl(n);if(r)for(const s in r)e[s]=r[s]}return e}else{if(St(i))return i;if(ct(i))return i}}const vp=/;(?![^(]*\))/g,xp=/:([^]+)/,yp=/\/\*.*?\*\//gs;function Mp(i){const e={};return i.replace(yp,"").split(vp).forEach(t=>{if(t){const n=t.split(xp);n.length>1&&(e[n[0].trim()]=n[1].trim())}}),e}function Ol(i){let e="";if(St(i))e=i;else if(Ne(i))for(let t=0;t<i.length;t++){const n=Ol(i[t]);n&&(e+=n+" ")}else if(ct(i))for(const t in i)i[t]&&(e+=t+" ");return e.trim()}const bp="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",wp=Il(bp);function sf(i){return!!i||i===""}const rt={},lr=[],mn=()=>{},Sp=()=>!1,Tp=/^on[^a-z]/,Po=i=>Tp.test(i),Nl=i=>i.startsWith("onUpdate:"),Pt=Object.assign,zl=(i,e)=>{const t=i.indexOf(e);t>-1&&i.splice(t,1)},Ep=Object.prototype.hasOwnProperty,je=(i,e)=>Ep.call(i,e),Ne=Array.isArray,Yr=i=>Lo(i)==="[object Map]",Ap=i=>Lo(i)==="[object Set]",Ue=i=>typeof i=="function",St=i=>typeof i=="string",Ul=i=>typeof i=="symbol",ct=i=>i!==null&&typeof i=="object",of=i=>ct(i)&&Ue(i.then)&&Ue(i.catch),Cp=Object.prototype.toString,Lo=i=>Cp.call(i),Pp=i=>Lo(i).slice(8,-1),Lp=i=>Lo(i)==="[object Object]",Bl=i=>St(i)&&i!=="NaN"&&i[0]!=="-"&&""+parseInt(i,10)===i,co=Il(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Ro=i=>{const e=Object.create(null);return t=>e[t]||(e[t]=i(t))},Rp=/-(\w)/g,An=Ro(i=>i.replace(Rp,(e,t)=>t?t.toUpperCase():"")),Dp=/\B([A-Z])/g,Sr=Ro(i=>i.replace(Dp,"-$1").toLowerCase()),Do=Ro(i=>i.charAt(0).toUpperCase()+i.slice(1)),ea=Ro(i=>i?`on${Do(i)}`:""),is=(i,e)=>!Object.is(i,e),ta=(i,e)=>{for(let t=0;t<i.length;t++)i[t](e)},xo=(i,e,t)=>{Object.defineProperty(i,e,{configurable:!0,enumerable:!1,value:t})},Ip=i=>{const e=parseFloat(i);return isNaN(e)?i:e};let wc;const Fp=()=>wc||(wc=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});let fn;class Op{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this.parent=fn,!e&&fn&&(this.index=(fn.scopes||(fn.scopes=[])).push(this)-1)}get active(){return this._active}run(e){if(this._active){const t=fn;try{return fn=this,e()}finally{fn=t}}}on(){fn=this}off(){fn=this.parent}stop(e){if(this._active){let t,n;for(t=0,n=this.effects.length;t<n;t++)this.effects[t].stop();for(t=0,n=this.cleanups.length;t<n;t++)this.cleanups[t]();if(this.scopes)for(t=0,n=this.scopes.length;t<n;t++)this.scopes[t].stop(!0);if(!this.detached&&this.parent&&!e){const r=this.parent.scopes.pop();r&&r!==this&&(this.parent.scopes[this.index]=r,r.index=this.index)}this.parent=void 0,this._active=!1}}}function Np(i,e=fn){e&&e.active&&e.effects.push(i)}function zp(){return fn}const kl=i=>{const e=new Set(i);return e.w=0,e.n=0,e},af=i=>(i.w&ai)>0,lf=i=>(i.n&ai)>0,Up=({deps:i})=>{if(i.length)for(let e=0;e<i.length;e++)i[e].w|=ai},Bp=i=>{const{deps:e}=i;if(e.length){let t=0;for(let n=0;n<e.length;n++){const r=e[n];af(r)&&!lf(r)?r.delete(i):e[t++]=r,r.w&=~ai,r.n&=~ai}e.length=t}},nl=new WeakMap;let Gr=0,ai=1;const il=30;let dn;const Ci=Symbol(""),rl=Symbol("");class Vl{constructor(e,t=null,n){this.fn=e,this.scheduler=t,this.active=!0,this.deps=[],this.parent=void 0,Np(this,n)}run(){if(!this.active)return this.fn();let e=dn,t=ri;for(;e;){if(e===this)return;e=e.parent}try{return this.parent=dn,dn=this,ri=!0,ai=1<<++Gr,Gr<=il?Up(this):Sc(this),this.fn()}finally{Gr<=il&&Bp(this),ai=1<<--Gr,dn=this.parent,ri=t,this.parent=void 0,this.deferStop&&this.stop()}}stop(){dn===this?this.deferStop=!0:this.active&&(Sc(this),this.onStop&&this.onStop(),this.active=!1)}}function Sc(i){const{deps:e}=i;if(e.length){for(let t=0;t<e.length;t++)e[t].delete(i);e.length=0}}let ri=!0;const cf=[];function Tr(){cf.push(ri),ri=!1}function Er(){const i=cf.pop();ri=i===void 0?!0:i}function Vt(i,e,t){if(ri&&dn){let n=nl.get(i);n||nl.set(i,n=new Map);let r=n.get(t);r||n.set(t,r=kl()),uf(r)}}function uf(i,e){let t=!1;Gr<=il?lf(i)||(i.n|=ai,t=!af(i)):t=!i.has(dn),t&&(i.add(dn),dn.deps.push(i))}function Hn(i,e,t,n,r,s){const o=nl.get(i);if(!o)return;let a=[];if(e==="clear")a=[...o.values()];else if(t==="length"&&Ne(i)){const l=Number(n);o.forEach((c,u)=>{(u==="length"||u>=l)&&a.push(c)})}else switch(t!==void 0&&a.push(o.get(t)),e){case"add":Ne(i)?Bl(t)&&a.push(o.get("length")):(a.push(o.get(Ci)),Yr(i)&&a.push(o.get(rl)));break;case"delete":Ne(i)||(a.push(o.get(Ci)),Yr(i)&&a.push(o.get(rl)));break;case"set":Yr(i)&&a.push(o.get(Ci));break}if(a.length===1)a[0]&&sl(a[0]);else{const l=[];for(const c of a)c&&l.push(...c);sl(kl(l))}}function sl(i,e){const t=Ne(i)?i:[...i];for(const n of t)n.computed&&Tc(n);for(const n of t)n.computed||Tc(n)}function Tc(i,e){(i!==dn||i.allowRecurse)&&(i.scheduler?i.scheduler():i.run())}const kp=Il("__proto__,__v_isRef,__isVue"),hf=new Set(Object.getOwnPropertyNames(Symbol).filter(i=>i!=="arguments"&&i!=="caller").map(i=>Symbol[i]).filter(Ul)),Vp=Gl(),Gp=Gl(!1,!0),Hp=Gl(!0),Ec=Wp();function Wp(){const i={};return["includes","indexOf","lastIndexOf"].forEach(e=>{i[e]=function(...t){const n=$e(this);for(let s=0,o=this.length;s<o;s++)Vt(n,"get",s+"");const r=n[e](...t);return r===-1||r===!1?n[e](...t.map($e)):r}}),["push","pop","shift","unshift","splice"].forEach(e=>{i[e]=function(...t){Tr();const n=$e(this)[e].apply(this,t);return Er(),n}}),i}function Xp(i){const e=$e(this);return Vt(e,"has",i),e.hasOwnProperty(i)}function Gl(i=!1,e=!1){return function(n,r,s){if(r==="__v_isReactive")return!i;if(r==="__v_isReadonly")return i;if(r==="__v_isShallow")return e;if(r==="__v_raw"&&s===(i?e?am:gf:e?mf:pf).get(n))return n;const o=Ne(n);if(!i){if(o&&je(Ec,r))return Reflect.get(Ec,r,s);if(r==="hasOwnProperty")return Xp}const a=Reflect.get(n,r,s);return(Ul(r)?hf.has(r):kp(r))||(i||Vt(n,"get",r),e)?a:Ct(a)?o&&Bl(r)?a:a.value:ct(a)?i?_f(a):Ms(a):a}}const jp=ff(),qp=ff(!0);function ff(i=!1){return function(t,n,r,s){let o=t[n];if(gr(o)&&Ct(o)&&!Ct(r))return!1;if(!i&&(!yo(r)&&!gr(r)&&(o=$e(o),r=$e(r)),!Ne(t)&&Ct(o)&&!Ct(r)))return o.value=r,!0;const a=Ne(t)&&Bl(n)?Number(n)<t.length:je(t,n),l=Reflect.set(t,n,r,s);return t===$e(s)&&(a?is(r,o)&&Hn(t,"set",n,r):Hn(t,"add",n,r)),l}}function Yp(i,e){const t=je(i,e);i[e];const n=Reflect.deleteProperty(i,e);return n&&t&&Hn(i,"delete",e,void 0),n}function $p(i,e){const t=Reflect.has(i,e);return(!Ul(e)||!hf.has(e))&&Vt(i,"has",e),t}function Kp(i){return Vt(i,"iterate",Ne(i)?"length":Ci),Reflect.ownKeys(i)}const df={get:Vp,set:jp,deleteProperty:Yp,has:$p,ownKeys:Kp},Zp={get:Hp,set(i,e){return!0},deleteProperty(i,e){return!0}},Jp=Pt({},df,{get:Gp,set:qp}),Hl=i=>i,Io=i=>Reflect.getPrototypeOf(i);function Cs(i,e,t=!1,n=!1){i=i.__v_raw;const r=$e(i),s=$e(e);t||(e!==s&&Vt(r,"get",e),Vt(r,"get",s));const{has:o}=Io(r),a=n?Hl:t?jl:rs;if(o.call(r,e))return a(i.get(e));if(o.call(r,s))return a(i.get(s));i!==r&&i.get(e)}function Ps(i,e=!1){const t=this.__v_raw,n=$e(t),r=$e(i);return e||(i!==r&&Vt(n,"has",i),Vt(n,"has",r)),i===r?t.has(i):t.has(i)||t.has(r)}function Ls(i,e=!1){return i=i.__v_raw,!e&&Vt($e(i),"iterate",Ci),Reflect.get(i,"size",i)}function Ac(i){i=$e(i);const e=$e(this);return Io(e).has.call(e,i)||(e.add(i),Hn(e,"add",i,i)),this}function Cc(i,e){e=$e(e);const t=$e(this),{has:n,get:r}=Io(t);let s=n.call(t,i);s||(i=$e(i),s=n.call(t,i));const o=r.call(t,i);return t.set(i,e),s?is(e,o)&&Hn(t,"set",i,e):Hn(t,"add",i,e),this}function Pc(i){const e=$e(this),{has:t,get:n}=Io(e);let r=t.call(e,i);r||(i=$e(i),r=t.call(e,i)),n&&n.call(e,i);const s=e.delete(i);return r&&Hn(e,"delete",i,void 0),s}function Lc(){const i=$e(this),e=i.size!==0,t=i.clear();return e&&Hn(i,"clear",void 0,void 0),t}function Rs(i,e){return function(n,r){const s=this,o=s.__v_raw,a=$e(o),l=e?Hl:i?jl:rs;return!i&&Vt(a,"iterate",Ci),o.forEach((c,u)=>n.call(r,l(c),l(u),s))}}function Ds(i,e,t){return function(...n){const r=this.__v_raw,s=$e(r),o=Yr(s),a=i==="entries"||i===Symbol.iterator&&o,l=i==="keys"&&o,c=r[i](...n),u=t?Hl:e?jl:rs;return!e&&Vt(s,"iterate",l?rl:Ci),{next(){const{value:h,done:f}=c.next();return f?{value:h,done:f}:{value:a?[u(h[0]),u(h[1])]:u(h),done:f}},[Symbol.iterator](){return this}}}}function jn(i){return function(...e){return i==="delete"?!1:this}}function Qp(){const i={get(s){return Cs(this,s)},get size(){return Ls(this)},has:Ps,add:Ac,set:Cc,delete:Pc,clear:Lc,forEach:Rs(!1,!1)},e={get(s){return Cs(this,s,!1,!0)},get size(){return Ls(this)},has:Ps,add:Ac,set:Cc,delete:Pc,clear:Lc,forEach:Rs(!1,!0)},t={get(s){return Cs(this,s,!0)},get size(){return Ls(this,!0)},has(s){return Ps.call(this,s,!0)},add:jn("add"),set:jn("set"),delete:jn("delete"),clear:jn("clear"),forEach:Rs(!0,!1)},n={get(s){return Cs(this,s,!0,!0)},get size(){return Ls(this,!0)},has(s){return Ps.call(this,s,!0)},add:jn("add"),set:jn("set"),delete:jn("delete"),clear:jn("clear"),forEach:Rs(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(s=>{i[s]=Ds(s,!1,!1),t[s]=Ds(s,!0,!1),e[s]=Ds(s,!1,!0),n[s]=Ds(s,!0,!0)}),[i,t,e,n]}const[em,tm,nm,im]=Qp();function Wl(i,e){const t=e?i?im:nm:i?tm:em;return(n,r,s)=>r==="__v_isReactive"?!i:r==="__v_isReadonly"?i:r==="__v_raw"?n:Reflect.get(je(t,r)&&r in n?t:n,r,s)}const rm={get:Wl(!1,!1)},sm={get:Wl(!1,!0)},om={get:Wl(!0,!1)},pf=new WeakMap,mf=new WeakMap,gf=new WeakMap,am=new WeakMap;function lm(i){switch(i){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function cm(i){return i.__v_skip||!Object.isExtensible(i)?0:lm(Pp(i))}function Ms(i){return gr(i)?i:Xl(i,!1,df,rm,pf)}function um(i){return Xl(i,!1,Jp,sm,mf)}function _f(i){return Xl(i,!0,Zp,om,gf)}function Xl(i,e,t,n,r){if(!ct(i)||i.__v_raw&&!(e&&i.__v_isReactive))return i;const s=r.get(i);if(s)return s;const o=cm(i);if(o===0)return i;const a=new Proxy(i,o===2?n:t);return r.set(i,a),a}function cr(i){return gr(i)?cr(i.__v_raw):!!(i&&i.__v_isReactive)}function gr(i){return!!(i&&i.__v_isReadonly)}function yo(i){return!!(i&&i.__v_isShallow)}function vf(i){return cr(i)||gr(i)}function $e(i){const e=i&&i.__v_raw;return e?$e(e):i}function xf(i){return xo(i,"__v_skip",!0),i}const rs=i=>ct(i)?Ms(i):i,jl=i=>ct(i)?_f(i):i;function yf(i){ri&&dn&&(i=$e(i),uf(i.dep||(i.dep=kl())))}function Mf(i,e){i=$e(i);const t=i.dep;t&&sl(t)}function Ct(i){return!!(i&&i.__v_isRef===!0)}function hm(i){return bf(i,!1)}function fm(i){return bf(i,!0)}function bf(i,e){return Ct(i)?i:new dm(i,e)}class dm{constructor(e,t){this.__v_isShallow=t,this.dep=void 0,this.__v_isRef=!0,this._rawValue=t?e:$e(e),this._value=t?e:rs(e)}get value(){return yf(this),this._value}set value(e){const t=this.__v_isShallow||yo(e)||gr(e);e=t?e:$e(e),is(e,this._rawValue)&&(this._rawValue=e,this._value=t?e:rs(e),Mf(this))}}function ur(i){return Ct(i)?i.value:i}const pm={get:(i,e,t)=>ur(Reflect.get(i,e,t)),set:(i,e,t,n)=>{const r=i[e];return Ct(r)&&!Ct(t)?(r.value=t,!0):Reflect.set(i,e,t,n)}};function wf(i){return cr(i)?i:new Proxy(i,pm)}var Sf;class mm{constructor(e,t,n,r){this._setter=t,this.dep=void 0,this.__v_isRef=!0,this[Sf]=!1,this._dirty=!0,this.effect=new Vl(e,()=>{this._dirty||(this._dirty=!0,Mf(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!r,this.__v_isReadonly=n}get value(){const e=$e(this);return yf(e),(e._dirty||!e._cacheable)&&(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}Sf="__v_isReadonly";function gm(i,e,t=!1){let n,r;const s=Ue(i);return s?(n=i,r=mn):(n=i.get,r=i.set),new mm(n,r,s||!r,t)}function si(i,e,t,n){let r;try{r=n?i(...n):i()}catch(s){Fo(s,e,t)}return r}function an(i,e,t,n){if(Ue(i)){const s=si(i,e,t,n);return s&&of(s)&&s.catch(o=>{Fo(o,e,t)}),s}const r=[];for(let s=0;s<i.length;s++)r.push(an(i[s],e,t,n));return r}function Fo(i,e,t,n=!0){const r=e?e.vnode:null;if(e){let s=e.parent;const o=e.proxy,a=t;for(;s;){const c=s.ec;if(c){for(let u=0;u<c.length;u++)if(c[u](i,o,a)===!1)return}s=s.parent}const l=e.appContext.config.errorHandler;if(l){si(l,null,10,[i,o,a]);return}}_m(i,t,r,n)}function _m(i,e,t,n=!0){console.error(i)}let ss=!1,ol=!1;const At=[];let wn=0;const hr=[];let Bn=null,wi=0;const Tf=Promise.resolve();let ql=null;function Ef(i){const e=ql||Tf;return i?e.then(this?i.bind(this):i):e}function vm(i){let e=wn+1,t=At.length;for(;e<t;){const n=e+t>>>1;os(At[n])<i?e=n+1:t=n}return e}function Yl(i){(!At.length||!At.includes(i,ss&&i.allowRecurse?wn+1:wn))&&(i.id==null?At.push(i):At.splice(vm(i.id),0,i),Af())}function Af(){!ss&&!ol&&(ol=!0,ql=Tf.then(Pf))}function xm(i){const e=At.indexOf(i);e>wn&&At.splice(e,1)}function ym(i){Ne(i)?hr.push(...i):(!Bn||!Bn.includes(i,i.allowRecurse?wi+1:wi))&&hr.push(i),Af()}function Rc(i,e=ss?wn+1:0){for(;e<At.length;e++){const t=At[e];t&&t.pre&&(At.splice(e,1),e--,t())}}function Cf(i){if(hr.length){const e=[...new Set(hr)];if(hr.length=0,Bn){Bn.push(...e);return}for(Bn=e,Bn.sort((t,n)=>os(t)-os(n)),wi=0;wi<Bn.length;wi++)Bn[wi]();Bn=null,wi=0}}const os=i=>i.id==null?1/0:i.id,Mm=(i,e)=>{const t=os(i)-os(e);if(t===0){if(i.pre&&!e.pre)return-1;if(e.pre&&!i.pre)return 1}return t};function Pf(i){ol=!1,ss=!0,At.sort(Mm);const e=mn;try{for(wn=0;wn<At.length;wn++){const t=At[wn];t&&t.active!==!1&&si(t,null,14)}}finally{wn=0,At.length=0,Cf(),ss=!1,ql=null,(At.length||hr.length)&&Pf()}}function bm(i,e,...t){if(i.isUnmounted)return;const n=i.vnode.props||rt;let r=t;const s=e.startsWith("update:"),o=s&&e.slice(7);if(o&&o in n){const u=`${o==="modelValue"?"model":o}Modifiers`,{number:h,trim:f}=n[u]||rt;f&&(r=t.map(d=>St(d)?d.trim():d)),h&&(r=t.map(Ip))}let a,l=n[a=ea(e)]||n[a=ea(An(e))];!l&&s&&(l=n[a=ea(Sr(e))]),l&&an(l,i,6,r);const c=n[a+"Once"];if(c){if(!i.emitted)i.emitted={};else if(i.emitted[a])return;i.emitted[a]=!0,an(c,i,6,r)}}function Lf(i,e,t=!1){const n=e.emitsCache,r=n.get(i);if(r!==void 0)return r;const s=i.emits;let o={},a=!1;if(!Ue(i)){const l=c=>{const u=Lf(c,e,!0);u&&(a=!0,Pt(o,u))};!t&&e.mixins.length&&e.mixins.forEach(l),i.extends&&l(i.extends),i.mixins&&i.mixins.forEach(l)}return!s&&!a?(ct(i)&&n.set(i,null),null):(Ne(s)?s.forEach(l=>o[l]=null):Pt(o,s),ct(i)&&n.set(i,o),o)}function Oo(i,e){return!i||!Po(e)?!1:(e=e.slice(2).replace(/Once$/,""),je(i,e[0].toLowerCase()+e.slice(1))||je(i,Sr(e))||je(i,e))}let nn=null,Rf=null;function Mo(i){const e=nn;return nn=i,Rf=i&&i.type.__scopeId||null,e}function wm(i,e=nn,t){if(!e||i._n)return i;const n=(...r)=>{n._d&&Vc(-1);const s=Mo(e);let o;try{o=i(...r)}finally{Mo(s),n._d&&Vc(1)}return o};return n._n=!0,n._c=!0,n._d=!0,n}function na(i){const{type:e,vnode:t,proxy:n,withProxy:r,props:s,propsOptions:[o],slots:a,attrs:l,emit:c,render:u,renderCache:h,data:f,setupState:d,ctx:g,inheritAttrs:p}=i;let m,_;const b=Mo(i);try{if(t.shapeFlag&4){const w=r||n;m=Mn(u.call(w,w,h,s,d,f,g)),_=l}else{const w=e;m=Mn(w.length>1?w(s,{attrs:l,slots:a,emit:c}):w(s,null)),_=e.props?l:Sm(l)}}catch(w){Kr.length=0,Fo(w,i,1),m=rn(Vn)}let v=m;if(_&&p!==!1){const w=Object.keys(_),{shapeFlag:S}=v;w.length&&S&7&&(o&&w.some(Nl)&&(_=Tm(_,o)),v=li(v,_))}return t.dirs&&(v=li(v),v.dirs=v.dirs?v.dirs.concat(t.dirs):t.dirs),t.transition&&(v.transition=t.transition),m=v,Mo(b),m}const Sm=i=>{let e;for(const t in i)(t==="class"||t==="style"||Po(t))&&((e||(e={}))[t]=i[t]);return e},Tm=(i,e)=>{const t={};for(const n in i)(!Nl(n)||!(n.slice(9)in e))&&(t[n]=i[n]);return t};function Em(i,e,t){const{props:n,children:r,component:s}=i,{props:o,children:a,patchFlag:l}=e,c=s.emitsOptions;if(e.dirs||e.transition)return!0;if(t&&l>=0){if(l&1024)return!0;if(l&16)return n?Dc(n,o,c):!!o;if(l&8){const u=e.dynamicProps;for(let h=0;h<u.length;h++){const f=u[h];if(o[f]!==n[f]&&!Oo(c,f))return!0}}}else return(r||a)&&(!a||!a.$stable)?!0:n===o?!1:n?o?Dc(n,o,c):!0:!!o;return!1}function Dc(i,e,t){const n=Object.keys(e);if(n.length!==Object.keys(i).length)return!0;for(let r=0;r<n.length;r++){const s=n[r];if(e[s]!==i[s]&&!Oo(t,s))return!0}return!1}function Am({vnode:i,parent:e},t){for(;e&&e.subTree===i;)(i=e.vnode).el=t,e=e.parent}const Cm=i=>i.__isSuspense;function Pm(i,e){e&&e.pendingBranch?Ne(i)?e.effects.push(...i):e.effects.push(i):ym(i)}function uo(i,e){if(lt){let t=lt.provides;const n=lt.parent&&lt.parent.provides;n===t&&(t=lt.provides=Object.create(n)),t[i]=e}}function kn(i,e,t=!1){const n=lt||nn;if(n){const r=n.parent==null?n.vnode.appContext&&n.vnode.appContext.provides:n.parent.provides;if(r&&i in r)return r[i];if(arguments.length>1)return t&&Ue(e)?e.call(n.proxy):e}}const Is={};function ho(i,e,t){return Df(i,e,t)}function Df(i,e,{immediate:t,deep:n,flush:r,onTrack:s,onTrigger:o}=rt){const a=zp()===(lt==null?void 0:lt.scope)?lt:null;let l,c=!1,u=!1;if(Ct(i)?(l=()=>i.value,c=yo(i)):cr(i)?(l=()=>i,n=!0):Ne(i)?(u=!0,c=i.some(v=>cr(v)||yo(v)),l=()=>i.map(v=>{if(Ct(v))return v.value;if(cr(v))return rr(v);if(Ue(v))return si(v,a,2)})):Ue(i)?e?l=()=>si(i,a,2):l=()=>{if(!(a&&a.isUnmounted))return h&&h(),an(i,a,3,[f])}:l=mn,e&&n){const v=l;l=()=>rr(v())}let h,f=v=>{h=_.onStop=()=>{si(v,a,4)}},d;if(ls)if(f=mn,e?t&&an(e,a,3,[l(),u?[]:void 0,f]):l(),r==="sync"){const v=Cg();d=v.__watcherHandles||(v.__watcherHandles=[])}else return mn;let g=u?new Array(i.length).fill(Is):Is;const p=()=>{if(_.active)if(e){const v=_.run();(n||c||(u?v.some((w,S)=>is(w,g[S])):is(v,g)))&&(h&&h(),an(e,a,3,[v,g===Is?void 0:u&&g[0]===Is?[]:g,f]),g=v)}else _.run()};p.allowRecurse=!!e;let m;r==="sync"?m=p:r==="post"?m=()=>Ut(p,a&&a.suspense):(p.pre=!0,a&&(p.id=a.uid),m=()=>Yl(p));const _=new Vl(l,m);e?t?p():g=_.run():r==="post"?Ut(_.run.bind(_),a&&a.suspense):_.run();const b=()=>{_.stop(),a&&a.scope&&zl(a.scope.effects,_)};return d&&d.push(b),b}function Lm(i,e,t){const n=this.proxy,r=St(i)?i.includes(".")?If(n,i):()=>n[i]:i.bind(n,n);let s;Ue(e)?s=e:(s=e.handler,t=e);const o=lt;_r(this);const a=Df(r,s.bind(n),t);return o?_r(o):Pi(),a}function If(i,e){const t=e.split(".");return()=>{let n=i;for(let r=0;r<t.length&&n;r++)n=n[t[r]];return n}}function rr(i,e){if(!ct(i)||i.__v_skip||(e=e||new Set,e.has(i)))return i;if(e.add(i),Ct(i))rr(i.value,e);else if(Ne(i))for(let t=0;t<i.length;t++)rr(i[t],e);else if(Ap(i)||Yr(i))i.forEach(t=>{rr(t,e)});else if(Lp(i))for(const t in i)rr(i[t],e);return i}function Rm(){const i={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return Uf(()=>{i.isMounted=!0}),Bf(()=>{i.isUnmounting=!0}),i}const Kt=[Function,Array],Dm={name:"BaseTransition",props:{mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:Kt,onEnter:Kt,onAfterEnter:Kt,onEnterCancelled:Kt,onBeforeLeave:Kt,onLeave:Kt,onAfterLeave:Kt,onLeaveCancelled:Kt,onBeforeAppear:Kt,onAppear:Kt,onAfterAppear:Kt,onAppearCancelled:Kt},setup(i,{slots:e}){const t=yg(),n=Rm();let r;return()=>{const s=e.default&&Of(e.default(),!0);if(!s||!s.length)return;let o=s[0];if(s.length>1){for(const p of s)if(p.type!==Vn){o=p;break}}const a=$e(i),{mode:l}=a;if(n.isLeaving)return ia(o);const c=Ic(o);if(!c)return ia(o);const u=al(c,a,n,t);ll(c,u);const h=t.subTree,f=h&&Ic(h);let d=!1;const{getTransitionKey:g}=c.type;if(g){const p=g();r===void 0?r=p:p!==r&&(r=p,d=!0)}if(f&&f.type!==Vn&&(!Si(c,f)||d)){const p=al(f,a,n,t);if(ll(f,p),l==="out-in")return n.isLeaving=!0,p.afterLeave=()=>{n.isLeaving=!1,t.update.active!==!1&&t.update()},ia(o);l==="in-out"&&c.type!==Vn&&(p.delayLeave=(m,_,b)=>{const v=Ff(n,f);v[String(f.key)]=f,m._leaveCb=()=>{_(),m._leaveCb=void 0,delete u.delayedLeave},u.delayedLeave=b})}return o}}},Im=Dm;function Ff(i,e){const{leavingVNodes:t}=i;let n=t.get(e.type);return n||(n=Object.create(null),t.set(e.type,n)),n}function al(i,e,t,n){const{appear:r,mode:s,persisted:o=!1,onBeforeEnter:a,onEnter:l,onAfterEnter:c,onEnterCancelled:u,onBeforeLeave:h,onLeave:f,onAfterLeave:d,onLeaveCancelled:g,onBeforeAppear:p,onAppear:m,onAfterAppear:_,onAppearCancelled:b}=e,v=String(i.key),w=Ff(t,i),S=(x,A)=>{x&&an(x,n,9,A)},P=(x,A)=>{const R=A[1];S(x,A),Ne(x)?x.every(j=>j.length<=1)&&R():x.length<=1&&R()},I={mode:s,persisted:o,beforeEnter(x){let A=a;if(!t.isMounted)if(r)A=p||a;else return;x._leaveCb&&x._leaveCb(!0);const R=w[v];R&&Si(i,R)&&R.el._leaveCb&&R.el._leaveCb(),S(A,[x])},enter(x){let A=l,R=c,j=u;if(!t.isMounted)if(r)A=m||l,R=_||c,j=b||u;else return;let Q=!1;const B=x._enterCb=N=>{Q||(Q=!0,N?S(j,[x]):S(R,[x]),I.delayedLeave&&I.delayedLeave(),x._enterCb=void 0)};A?P(A,[x,B]):B()},leave(x,A){const R=String(i.key);if(x._enterCb&&x._enterCb(!0),t.isUnmounting)return A();S(h,[x]);let j=!1;const Q=x._leaveCb=B=>{j||(j=!0,A(),B?S(g,[x]):S(d,[x]),x._leaveCb=void 0,w[R]===i&&delete w[R])};w[R]=i,f?P(f,[x,Q]):Q()},clone(x){return al(x,e,t,n)}};return I}function ia(i){if(No(i))return i=li(i),i.children=null,i}function Ic(i){return No(i)?i.children?i.children[0]:void 0:i}function ll(i,e){i.shapeFlag&6&&i.component?ll(i.component.subTree,e):i.shapeFlag&128?(i.ssContent.transition=e.clone(i.ssContent),i.ssFallback.transition=e.clone(i.ssFallback)):i.transition=e}function Of(i,e=!1,t){let n=[],r=0;for(let s=0;s<i.length;s++){let o=i[s];const a=t==null?o.key:String(t)+String(o.key!=null?o.key:s);o.type===yn?(o.patchFlag&128&&r++,n=n.concat(Of(o.children,e,a))):(e||o.type!==Vn)&&n.push(a!=null?li(o,{key:a}):o)}if(r>1)for(let s=0;s<n.length;s++)n[s].patchFlag=-2;return n}function Nf(i){return Ue(i)?{setup:i,name:i.name}:i}const fo=i=>!!i.type.__asyncLoader,No=i=>i.type.__isKeepAlive;function Fm(i,e){zf(i,"a",e)}function Om(i,e){zf(i,"da",e)}function zf(i,e,t=lt){const n=i.__wdc||(i.__wdc=()=>{let r=t;for(;r;){if(r.isDeactivated)return;r=r.parent}return i()});if(zo(e,n,t),t){let r=t.parent;for(;r&&r.parent;)No(r.parent.vnode)&&Nm(n,e,t,r),r=r.parent}}function Nm(i,e,t,n){const r=zo(e,i,n,!0);kf(()=>{zl(n[e],r)},t)}function zo(i,e,t=lt,n=!1){if(t){const r=t[i]||(t[i]=[]),s=e.__weh||(e.__weh=(...o)=>{if(t.isUnmounted)return;Tr(),_r(t);const a=an(e,t,i,o);return Pi(),Er(),a});return n?r.unshift(s):r.push(s),s}}const Wn=i=>(e,t=lt)=>(!ls||i==="sp")&&zo(i,(...n)=>e(...n),t),zm=Wn("bm"),Uf=Wn("m"),Um=Wn("bu"),Bm=Wn("u"),Bf=Wn("bum"),kf=Wn("um"),km=Wn("sp"),Vm=Wn("rtg"),Gm=Wn("rtc");function Hm(i,e=lt){zo("ec",i,e)}function mi(i,e,t,n){const r=i.dirs,s=e&&e.dirs;for(let o=0;o<r.length;o++){const a=r[o];s&&(a.oldValue=s[o].value);let l=a.dir[n];l&&(Tr(),an(l,t,8,[i.el,a,i,e]),Er())}}const Vf="components";function Wm(i,e){return jm(Vf,i,!0,e)||i}const Xm=Symbol();function jm(i,e,t=!0,n=!1){const r=nn||lt;if(r){const s=r.type;if(i===Vf){const a=Tg(s,!1);if(a&&(a===e||a===An(e)||a===Do(An(e))))return s}const o=Fc(r[i]||s[i],e)||Fc(r.appContext[i],e);return!o&&n?s:o}}function Fc(i,e){return i&&(i[e]||i[An(e)]||i[Do(An(e))])}const cl=i=>i?ed(i)?Jl(i)||i.proxy:cl(i.parent):null,$r=Pt(Object.create(null),{$:i=>i,$el:i=>i.vnode.el,$data:i=>i.data,$props:i=>i.props,$attrs:i=>i.attrs,$slots:i=>i.slots,$refs:i=>i.refs,$parent:i=>cl(i.parent),$root:i=>cl(i.root),$emit:i=>i.emit,$options:i=>$l(i),$forceUpdate:i=>i.f||(i.f=()=>Yl(i.update)),$nextTick:i=>i.n||(i.n=Ef.bind(i.proxy)),$watch:i=>Lm.bind(i)}),ra=(i,e)=>i!==rt&&!i.__isScriptSetup&&je(i,e),qm={get({_:i},e){const{ctx:t,setupState:n,data:r,props:s,accessCache:o,type:a,appContext:l}=i;let c;if(e[0]!=="$"){const d=o[e];if(d!==void 0)switch(d){case 1:return n[e];case 2:return r[e];case 4:return t[e];case 3:return s[e]}else{if(ra(n,e))return o[e]=1,n[e];if(r!==rt&&je(r,e))return o[e]=2,r[e];if((c=i.propsOptions[0])&&je(c,e))return o[e]=3,s[e];if(t!==rt&&je(t,e))return o[e]=4,t[e];ul&&(o[e]=0)}}const u=$r[e];let h,f;if(u)return e==="$attrs"&&Vt(i,"get",e),u(i);if((h=a.__cssModules)&&(h=h[e]))return h;if(t!==rt&&je(t,e))return o[e]=4,t[e];if(f=l.config.globalProperties,je(f,e))return f[e]},set({_:i},e,t){const{data:n,setupState:r,ctx:s}=i;return ra(r,e)?(r[e]=t,!0):n!==rt&&je(n,e)?(n[e]=t,!0):je(i.props,e)||e[0]==="$"&&e.slice(1)in i?!1:(s[e]=t,!0)},has({_:{data:i,setupState:e,accessCache:t,ctx:n,appContext:r,propsOptions:s}},o){let a;return!!t[o]||i!==rt&&je(i,o)||ra(e,o)||(a=s[0])&&je(a,o)||je(n,o)||je($r,o)||je(r.config.globalProperties,o)},defineProperty(i,e,t){return t.get!=null?i._.accessCache[e]=0:je(t,"value")&&this.set(i,e,t.value,null),Reflect.defineProperty(i,e,t)}};let ul=!0;function Ym(i){const e=$l(i),t=i.proxy,n=i.ctx;ul=!1,e.beforeCreate&&Oc(e.beforeCreate,i,"bc");const{data:r,computed:s,methods:o,watch:a,provide:l,inject:c,created:u,beforeMount:h,mounted:f,beforeUpdate:d,updated:g,activated:p,deactivated:m,beforeDestroy:_,beforeUnmount:b,destroyed:v,unmounted:w,render:S,renderTracked:P,renderTriggered:I,errorCaptured:x,serverPrefetch:A,expose:R,inheritAttrs:j,components:Q,directives:B,filters:N}=e;if(c&&$m(c,n,null,i.appContext.config.unwrapInjectedRef),o)for(const ie in o){const Y=o[ie];Ue(Y)&&(n[ie]=Y.bind(t))}if(r){const ie=r.call(t,t);ct(ie)&&(i.data=Ms(ie))}if(ul=!0,s)for(const ie in s){const Y=s[ie],fe=Ue(Y)?Y.bind(t,t):Ue(Y.get)?Y.get.bind(t,t):mn,de=!Ue(Y)&&Ue(Y.set)?Y.set.bind(t):mn,xe=Qt({get:fe,set:de});Object.defineProperty(n,ie,{enumerable:!0,configurable:!0,get:()=>xe.value,set:W=>xe.value=W})}if(a)for(const ie in a)Gf(a[ie],n,t,ie);if(l){const ie=Ue(l)?l.call(t):l;Reflect.ownKeys(ie).forEach(Y=>{uo(Y,ie[Y])})}u&&Oc(u,i,"c");function K(ie,Y){Ne(Y)?Y.forEach(fe=>ie(fe.bind(t))):Y&&ie(Y.bind(t))}if(K(zm,h),K(Uf,f),K(Um,d),K(Bm,g),K(Fm,p),K(Om,m),K(Hm,x),K(Gm,P),K(Vm,I),K(Bf,b),K(kf,w),K(km,A),Ne(R))if(R.length){const ie=i.exposed||(i.exposed={});R.forEach(Y=>{Object.defineProperty(ie,Y,{get:()=>t[Y],set:fe=>t[Y]=fe})})}else i.exposed||(i.exposed={});S&&i.render===mn&&(i.render=S),j!=null&&(i.inheritAttrs=j),Q&&(i.components=Q),B&&(i.directives=B)}function $m(i,e,t=mn,n=!1){Ne(i)&&(i=hl(i));for(const r in i){const s=i[r];let o;ct(s)?"default"in s?o=kn(s.from||r,s.default,!0):o=kn(s.from||r):o=kn(s),Ct(o)&&n?Object.defineProperty(e,r,{enumerable:!0,configurable:!0,get:()=>o.value,set:a=>o.value=a}):e[r]=o}}function Oc(i,e,t){an(Ne(i)?i.map(n=>n.bind(e.proxy)):i.bind(e.proxy),e,t)}function Gf(i,e,t,n){const r=n.includes(".")?If(t,n):()=>t[n];if(St(i)){const s=e[i];Ue(s)&&ho(r,s)}else if(Ue(i))ho(r,i.bind(t));else if(ct(i))if(Ne(i))i.forEach(s=>Gf(s,e,t,n));else{const s=Ue(i.handler)?i.handler.bind(t):e[i.handler];Ue(s)&&ho(r,s,i)}}function $l(i){const e=i.type,{mixins:t,extends:n}=e,{mixins:r,optionsCache:s,config:{optionMergeStrategies:o}}=i.appContext,a=s.get(e);let l;return a?l=a:!r.length&&!t&&!n?l=e:(l={},r.length&&r.forEach(c=>bo(l,c,o,!0)),bo(l,e,o)),ct(e)&&s.set(e,l),l}function bo(i,e,t,n=!1){const{mixins:r,extends:s}=e;s&&bo(i,s,t,!0),r&&r.forEach(o=>bo(i,o,t,!0));for(const o in e)if(!(n&&o==="expose")){const a=Km[o]||t&&t[o];i[o]=a?a(i[o],e[o]):e[o]}return i}const Km={data:Nc,props:yi,emits:yi,methods:yi,computed:yi,beforeCreate:It,created:It,beforeMount:It,mounted:It,beforeUpdate:It,updated:It,beforeDestroy:It,beforeUnmount:It,destroyed:It,unmounted:It,activated:It,deactivated:It,errorCaptured:It,serverPrefetch:It,components:yi,directives:yi,watch:Jm,provide:Nc,inject:Zm};function Nc(i,e){return e?i?function(){return Pt(Ue(i)?i.call(this,this):i,Ue(e)?e.call(this,this):e)}:e:i}function Zm(i,e){return yi(hl(i),hl(e))}function hl(i){if(Ne(i)){const e={};for(let t=0;t<i.length;t++)e[i[t]]=i[t];return e}return i}function It(i,e){return i?[...new Set([].concat(i,e))]:e}function yi(i,e){return i?Pt(Pt(Object.create(null),i),e):e}function Jm(i,e){if(!i)return e;if(!e)return i;const t=Pt(Object.create(null),i);for(const n in e)t[n]=It(i[n],e[n]);return t}function Qm(i,e,t,n=!1){const r={},s={};xo(s,Bo,1),i.propsDefaults=Object.create(null),Hf(i,e,r,s);for(const o in i.propsOptions[0])o in r||(r[o]=void 0);t?i.props=n?r:um(r):i.type.props?i.props=r:i.props=s,i.attrs=s}function eg(i,e,t,n){const{props:r,attrs:s,vnode:{patchFlag:o}}=i,a=$e(r),[l]=i.propsOptions;let c=!1;if((n||o>0)&&!(o&16)){if(o&8){const u=i.vnode.dynamicProps;for(let h=0;h<u.length;h++){let f=u[h];if(Oo(i.emitsOptions,f))continue;const d=e[f];if(l)if(je(s,f))d!==s[f]&&(s[f]=d,c=!0);else{const g=An(f);r[g]=fl(l,a,g,d,i,!1)}else d!==s[f]&&(s[f]=d,c=!0)}}}else{Hf(i,e,r,s)&&(c=!0);let u;for(const h in a)(!e||!je(e,h)&&((u=Sr(h))===h||!je(e,u)))&&(l?t&&(t[h]!==void 0||t[u]!==void 0)&&(r[h]=fl(l,a,h,void 0,i,!0)):delete r[h]);if(s!==a)for(const h in s)(!e||!je(e,h))&&(delete s[h],c=!0)}c&&Hn(i,"set","$attrs")}function Hf(i,e,t,n){const[r,s]=i.propsOptions;let o=!1,a;if(e)for(let l in e){if(co(l))continue;const c=e[l];let u;r&&je(r,u=An(l))?!s||!s.includes(u)?t[u]=c:(a||(a={}))[u]=c:Oo(i.emitsOptions,l)||(!(l in n)||c!==n[l])&&(n[l]=c,o=!0)}if(s){const l=$e(t),c=a||rt;for(let u=0;u<s.length;u++){const h=s[u];t[h]=fl(r,l,h,c[h],i,!je(c,h))}}return o}function fl(i,e,t,n,r,s){const o=i[t];if(o!=null){const a=je(o,"default");if(a&&n===void 0){const l=o.default;if(o.type!==Function&&Ue(l)){const{propsDefaults:c}=r;t in c?n=c[t]:(_r(r),n=c[t]=l.call(null,e),Pi())}else n=l}o[0]&&(s&&!a?n=!1:o[1]&&(n===""||n===Sr(t))&&(n=!0))}return n}function Wf(i,e,t=!1){const n=e.propsCache,r=n.get(i);if(r)return r;const s=i.props,o={},a=[];let l=!1;if(!Ue(i)){const u=h=>{l=!0;const[f,d]=Wf(h,e,!0);Pt(o,f),d&&a.push(...d)};!t&&e.mixins.length&&e.mixins.forEach(u),i.extends&&u(i.extends),i.mixins&&i.mixins.forEach(u)}if(!s&&!l)return ct(i)&&n.set(i,lr),lr;if(Ne(s))for(let u=0;u<s.length;u++){const h=An(s[u]);zc(h)&&(o[h]=rt)}else if(s)for(const u in s){const h=An(u);if(zc(h)){const f=s[u],d=o[h]=Ne(f)||Ue(f)?{type:f}:Object.assign({},f);if(d){const g=kc(Boolean,d.type),p=kc(String,d.type);d[0]=g>-1,d[1]=p<0||g<p,(g>-1||je(d,"default"))&&a.push(h)}}}const c=[o,a];return ct(i)&&n.set(i,c),c}function zc(i){return i[0]!=="$"}function Uc(i){const e=i&&i.toString().match(/^\s*(function|class) (\w+)/);return e?e[2]:i===null?"null":""}function Bc(i,e){return Uc(i)===Uc(e)}function kc(i,e){return Ne(e)?e.findIndex(t=>Bc(t,i)):Ue(e)&&Bc(e,i)?0:-1}const Xf=i=>i[0]==="_"||i==="$stable",Kl=i=>Ne(i)?i.map(Mn):[Mn(i)],tg=(i,e,t)=>{if(e._n)return e;const n=wm((...r)=>Kl(e(...r)),t);return n._c=!1,n},jf=(i,e,t)=>{const n=i._ctx;for(const r in i){if(Xf(r))continue;const s=i[r];if(Ue(s))e[r]=tg(r,s,n);else if(s!=null){const o=Kl(s);e[r]=()=>o}}},qf=(i,e)=>{const t=Kl(e);i.slots.default=()=>t},ng=(i,e)=>{if(i.vnode.shapeFlag&32){const t=e._;t?(i.slots=$e(e),xo(e,"_",t)):jf(e,i.slots={})}else i.slots={},e&&qf(i,e);xo(i.slots,Bo,1)},ig=(i,e,t)=>{const{vnode:n,slots:r}=i;let s=!0,o=rt;if(n.shapeFlag&32){const a=e._;a?t&&a===1?s=!1:(Pt(r,e),!t&&a===1&&delete r._):(s=!e.$stable,jf(e,r)),o=e}else e&&(qf(i,e),o={default:1});if(s)for(const a in r)!Xf(a)&&!(a in o)&&delete r[a]};function Yf(){return{app:null,config:{isNativeTag:Sp,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let rg=0;function sg(i,e){return function(n,r=null){Ue(n)||(n=Object.assign({},n)),r!=null&&!ct(r)&&(r=null);const s=Yf(),o=new Set;let a=!1;const l=s.app={_uid:rg++,_component:n,_props:r,_container:null,_context:s,_instance:null,version:Pg,get config(){return s.config},set config(c){},use(c,...u){return o.has(c)||(c&&Ue(c.install)?(o.add(c),c.install(l,...u)):Ue(c)&&(o.add(c),c(l,...u))),l},mixin(c){return s.mixins.includes(c)||s.mixins.push(c),l},component(c,u){return u?(s.components[c]=u,l):s.components[c]},directive(c,u){return u?(s.directives[c]=u,l):s.directives[c]},mount(c,u,h){if(!a){const f=rn(n,r);return f.appContext=s,u&&e?e(f,c):i(f,c,h),a=!0,l._container=c,c.__vue_app__=l,Jl(f.component)||f.component.proxy}},unmount(){a&&(i(null,l._container),delete l._container.__vue_app__)},provide(c,u){return s.provides[c]=u,l}};return l}}function dl(i,e,t,n,r=!1){if(Ne(i)){i.forEach((f,d)=>dl(f,e&&(Ne(e)?e[d]:e),t,n,r));return}if(fo(n)&&!r)return;const s=n.shapeFlag&4?Jl(n.component)||n.component.proxy:n.el,o=r?null:s,{i:a,r:l}=i,c=e&&e.r,u=a.refs===rt?a.refs={}:a.refs,h=a.setupState;if(c!=null&&c!==l&&(St(c)?(u[c]=null,je(h,c)&&(h[c]=null)):Ct(c)&&(c.value=null)),Ue(l))si(l,a,12,[o,u]);else{const f=St(l),d=Ct(l);if(f||d){const g=()=>{if(i.f){const p=f?je(h,l)?h[l]:u[l]:l.value;r?Ne(p)&&zl(p,s):Ne(p)?p.includes(s)||p.push(s):f?(u[l]=[s],je(h,l)&&(h[l]=u[l])):(l.value=[s],i.k&&(u[i.k]=l.value))}else f?(u[l]=o,je(h,l)&&(h[l]=o)):d&&(l.value=o,i.k&&(u[i.k]=o))};o?(g.id=-1,Ut(g,t)):g()}}}const Ut=Pm;function og(i){return ag(i)}function ag(i,e){const t=Fp();t.__VUE__=!0;const{insert:n,remove:r,patchProp:s,createElement:o,createText:a,createComment:l,setText:c,setElementText:u,parentNode:h,nextSibling:f,setScopeId:d=mn,insertStaticContent:g}=i,p=(y,T,F,G=null,k=null,te=null,re=!1,$=null,he=!!T.dynamicChildren)=>{if(y===T)return;y&&!Si(y,T)&&(G=ee(y),W(y,k,te,!0),y=null),T.patchFlag===-2&&(he=!1,T.dynamicChildren=null);const{type:ne,ref:E,shapeFlag:M}=T;switch(ne){case Uo:m(y,T,F,G);break;case Vn:_(y,T,F,G);break;case sa:y==null&&b(T,F,G,re);break;case yn:Q(y,T,F,G,k,te,re,$,he);break;default:M&1?S(y,T,F,G,k,te,re,$,he):M&6?B(y,T,F,G,k,te,re,$,he):(M&64||M&128)&&ne.process(y,T,F,G,k,te,re,$,he,ge)}E!=null&&k&&dl(E,y&&y.ref,te,T||y,!T)},m=(y,T,F,G)=>{if(y==null)n(T.el=a(T.children),F,G);else{const k=T.el=y.el;T.children!==y.children&&c(k,T.children)}},_=(y,T,F,G)=>{y==null?n(T.el=l(T.children||""),F,G):T.el=y.el},b=(y,T,F,G)=>{[y.el,y.anchor]=g(y.children,T,F,G,y.el,y.anchor)},v=({el:y,anchor:T},F,G)=>{let k;for(;y&&y!==T;)k=f(y),n(y,F,G),y=k;n(T,F,G)},w=({el:y,anchor:T})=>{let F;for(;y&&y!==T;)F=f(y),r(y),y=F;r(T)},S=(y,T,F,G,k,te,re,$,he)=>{re=re||T.type==="svg",y==null?P(T,F,G,k,te,re,$,he):A(y,T,k,te,re,$,he)},P=(y,T,F,G,k,te,re,$)=>{let he,ne;const{type:E,props:M,shapeFlag:U,transition:Z,dirs:se}=y;if(he=y.el=o(y.type,te,M&&M.is,M),U&8?u(he,y.children):U&16&&x(y.children,he,null,G,k,te&&E!=="foreignObject",re,$),se&&mi(y,null,G,"created"),I(he,y,y.scopeId,re,G),M){for(const be in M)be!=="value"&&!co(be)&&s(he,be,null,M[be],te,y.children,G,k,O);"value"in M&&s(he,"value",null,M.value),(ne=M.onVnodeBeforeMount)&&vn(ne,G,y)}se&&mi(y,null,G,"beforeMount");const me=(!k||k&&!k.pendingBranch)&&Z&&!Z.persisted;me&&Z.beforeEnter(he),n(he,T,F),((ne=M&&M.onVnodeMounted)||me||se)&&Ut(()=>{ne&&vn(ne,G,y),me&&Z.enter(he),se&&mi(y,null,G,"mounted")},k)},I=(y,T,F,G,k)=>{if(F&&d(y,F),G)for(let te=0;te<G.length;te++)d(y,G[te]);if(k){let te=k.subTree;if(T===te){const re=k.vnode;I(y,re,re.scopeId,re.slotScopeIds,k.parent)}}},x=(y,T,F,G,k,te,re,$,he=0)=>{for(let ne=he;ne<y.length;ne++){const E=y[ne]=$?ei(y[ne]):Mn(y[ne]);p(null,E,T,F,G,k,te,re,$)}},A=(y,T,F,G,k,te,re)=>{const $=T.el=y.el;let{patchFlag:he,dynamicChildren:ne,dirs:E}=T;he|=y.patchFlag&16;const M=y.props||rt,U=T.props||rt;let Z;F&&gi(F,!1),(Z=U.onVnodeBeforeUpdate)&&vn(Z,F,T,y),E&&mi(T,y,F,"beforeUpdate"),F&&gi(F,!0);const se=k&&T.type!=="foreignObject";if(ne?R(y.dynamicChildren,ne,$,F,G,se,te):re||Y(y,T,$,null,F,G,se,te,!1),he>0){if(he&16)j($,T,M,U,F,G,k);else if(he&2&&M.class!==U.class&&s($,"class",null,U.class,k),he&4&&s($,"style",M.style,U.style,k),he&8){const me=T.dynamicProps;for(let be=0;be<me.length;be++){const L=me[be],H=M[L],we=U[L];(we!==H||L==="value")&&s($,L,H,we,k,y.children,F,G,O)}}he&1&&y.children!==T.children&&u($,T.children)}else!re&&ne==null&&j($,T,M,U,F,G,k);((Z=U.onVnodeUpdated)||E)&&Ut(()=>{Z&&vn(Z,F,T,y),E&&mi(T,y,F,"updated")},G)},R=(y,T,F,G,k,te,re)=>{for(let $=0;$<T.length;$++){const he=y[$],ne=T[$],E=he.el&&(he.type===yn||!Si(he,ne)||he.shapeFlag&70)?h(he.el):F;p(he,ne,E,null,G,k,te,re,!0)}},j=(y,T,F,G,k,te,re)=>{if(F!==G){if(F!==rt)for(const $ in F)!co($)&&!($ in G)&&s(y,$,F[$],null,re,T.children,k,te,O);for(const $ in G){if(co($))continue;const he=G[$],ne=F[$];he!==ne&&$!=="value"&&s(y,$,ne,he,re,T.children,k,te,O)}"value"in G&&s(y,"value",F.value,G.value)}},Q=(y,T,F,G,k,te,re,$,he)=>{const ne=T.el=y?y.el:a(""),E=T.anchor=y?y.anchor:a("");let{patchFlag:M,dynamicChildren:U,slotScopeIds:Z}=T;Z&&($=$?$.concat(Z):Z),y==null?(n(ne,F,G),n(E,F,G),x(T.children,F,E,k,te,re,$,he)):M>0&&M&64&&U&&y.dynamicChildren?(R(y.dynamicChildren,U,F,k,te,re,$),(T.key!=null||k&&T===k.subTree)&&$f(y,T,!0)):Y(y,T,F,E,k,te,re,$,he)},B=(y,T,F,G,k,te,re,$,he)=>{T.slotScopeIds=$,y==null?T.shapeFlag&512?k.ctx.activate(T,F,G,re,he):N(T,F,G,k,te,re,he):J(y,T,he)},N=(y,T,F,G,k,te,re)=>{const $=y.component=xg(y,G,k);if(No(y)&&($.ctx.renderer=ge),Mg($),$.asyncDep){if(k&&k.registerDep($,K),!y.el){const he=$.subTree=rn(Vn);_(null,he,T,F)}return}K($,y,T,F,k,te,re)},J=(y,T,F)=>{const G=T.component=y.component;if(Em(y,T,F))if(G.asyncDep&&!G.asyncResolved){ie(G,T,F);return}else G.next=T,xm(G.update),G.update();else T.el=y.el,G.vnode=T},K=(y,T,F,G,k,te,re)=>{const $=()=>{if(y.isMounted){let{next:E,bu:M,u:U,parent:Z,vnode:se}=y,me=E,be;gi(y,!1),E?(E.el=se.el,ie(y,E,re)):E=se,M&&ta(M),(be=E.props&&E.props.onVnodeBeforeUpdate)&&vn(be,Z,E,se),gi(y,!0);const L=na(y),H=y.subTree;y.subTree=L,p(H,L,h(H.el),ee(H),y,k,te),E.el=L.el,me===null&&Am(y,L.el),U&&Ut(U,k),(be=E.props&&E.props.onVnodeUpdated)&&Ut(()=>vn(be,Z,E,se),k)}else{let E;const{el:M,props:U}=T,{bm:Z,m:se,parent:me}=y,be=fo(T);if(gi(y,!1),Z&&ta(Z),!be&&(E=U&&U.onVnodeBeforeMount)&&vn(E,me,T),gi(y,!0),M&&Me){const L=()=>{y.subTree=na(y),Me(M,y.subTree,y,k,null)};be?T.type.__asyncLoader().then(()=>!y.isUnmounted&&L()):L()}else{const L=y.subTree=na(y);p(null,L,F,G,y,k,te),T.el=L.el}if(se&&Ut(se,k),!be&&(E=U&&U.onVnodeMounted)){const L=T;Ut(()=>vn(E,me,L),k)}(T.shapeFlag&256||me&&fo(me.vnode)&&me.vnode.shapeFlag&256)&&y.a&&Ut(y.a,k),y.isMounted=!0,T=F=G=null}},he=y.effect=new Vl($,()=>Yl(ne),y.scope),ne=y.update=()=>he.run();ne.id=y.uid,gi(y,!0),ne()},ie=(y,T,F)=>{T.component=y;const G=y.vnode.props;y.vnode=T,y.next=null,eg(y,T.props,G,F),ig(y,T.children,F),Tr(),Rc(),Er()},Y=(y,T,F,G,k,te,re,$,he=!1)=>{const ne=y&&y.children,E=y?y.shapeFlag:0,M=T.children,{patchFlag:U,shapeFlag:Z}=T;if(U>0){if(U&128){de(ne,M,F,G,k,te,re,$,he);return}else if(U&256){fe(ne,M,F,G,k,te,re,$,he);return}}Z&8?(E&16&&O(ne,k,te),M!==ne&&u(F,M)):E&16?Z&16?de(ne,M,F,G,k,te,re,$,he):O(ne,k,te,!0):(E&8&&u(F,""),Z&16&&x(M,F,G,k,te,re,$,he))},fe=(y,T,F,G,k,te,re,$,he)=>{y=y||lr,T=T||lr;const ne=y.length,E=T.length,M=Math.min(ne,E);let U;for(U=0;U<M;U++){const Z=T[U]=he?ei(T[U]):Mn(T[U]);p(y[U],Z,F,null,k,te,re,$,he)}ne>E?O(y,k,te,!0,!1,M):x(T,F,G,k,te,re,$,he,M)},de=(y,T,F,G,k,te,re,$,he)=>{let ne=0;const E=T.length;let M=y.length-1,U=E-1;for(;ne<=M&&ne<=U;){const Z=y[ne],se=T[ne]=he?ei(T[ne]):Mn(T[ne]);if(Si(Z,se))p(Z,se,F,null,k,te,re,$,he);else break;ne++}for(;ne<=M&&ne<=U;){const Z=y[M],se=T[U]=he?ei(T[U]):Mn(T[U]);if(Si(Z,se))p(Z,se,F,null,k,te,re,$,he);else break;M--,U--}if(ne>M){if(ne<=U){const Z=U+1,se=Z<E?T[Z].el:G;for(;ne<=U;)p(null,T[ne]=he?ei(T[ne]):Mn(T[ne]),F,se,k,te,re,$,he),ne++}}else if(ne>U)for(;ne<=M;)W(y[ne],k,te,!0),ne++;else{const Z=ne,se=ne,me=new Map;for(ne=se;ne<=U;ne++){const Ee=T[ne]=he?ei(T[ne]):Mn(T[ne]);Ee.key!=null&&me.set(Ee.key,ne)}let be,L=0;const H=U-se+1;let we=!1,Ae=0;const Te=new Array(H);for(ne=0;ne<H;ne++)Te[ne]=0;for(ne=Z;ne<=M;ne++){const Ee=y[ne];if(L>=H){W(Ee,k,te,!0);continue}let Fe;if(Ee.key!=null)Fe=me.get(Ee.key);else for(be=se;be<=U;be++)if(Te[be-se]===0&&Si(Ee,T[be])){Fe=be;break}Fe===void 0?W(Ee,k,te,!0):(Te[Fe-se]=ne+1,Fe>=Ae?Ae=Fe:we=!0,p(Ee,T[Fe],F,null,k,te,re,$,he),L++)}const Pe=we?lg(Te):lr;for(be=Pe.length-1,ne=H-1;ne>=0;ne--){const Ee=se+ne,Fe=T[Ee],ke=Ee+1<E?T[Ee+1].el:G;Te[ne]===0?p(null,Fe,F,ke,k,te,re,$,he):we&&(be<0||ne!==Pe[be]?xe(Fe,F,ke,2):be--)}}},xe=(y,T,F,G,k=null)=>{const{el:te,type:re,transition:$,children:he,shapeFlag:ne}=y;if(ne&6){xe(y.component.subTree,T,F,G);return}if(ne&128){y.suspense.move(T,F,G);return}if(ne&64){re.move(y,T,F,ge);return}if(re===yn){n(te,T,F);for(let M=0;M<he.length;M++)xe(he[M],T,F,G);n(y.anchor,T,F);return}if(re===sa){v(y,T,F);return}if(G!==2&&ne&1&&$)if(G===0)$.beforeEnter(te),n(te,T,F),Ut(()=>$.enter(te),k);else{const{leave:M,delayLeave:U,afterLeave:Z}=$,se=()=>n(te,T,F),me=()=>{M(te,()=>{se(),Z&&Z()})};U?U(te,se,me):me()}else n(te,T,F)},W=(y,T,F,G=!1,k=!1)=>{const{type:te,props:re,ref:$,children:he,dynamicChildren:ne,shapeFlag:E,patchFlag:M,dirs:U}=y;if($!=null&&dl($,null,F,y,!0),E&256){T.ctx.deactivate(y);return}const Z=E&1&&U,se=!fo(y);let me;if(se&&(me=re&&re.onVnodeBeforeUnmount)&&vn(me,T,y),E&6)z(y.component,F,G);else{if(E&128){y.suspense.unmount(F,G);return}Z&&mi(y,null,T,"beforeUnmount"),E&64?y.type.remove(y,T,F,k,ge,G):ne&&(te!==yn||M>0&&M&64)?O(ne,T,F,!1,!0):(te===yn&&M&384||!k&&E&16)&&O(he,T,F),G&&oe(y)}(se&&(me=re&&re.onVnodeUnmounted)||Z)&&Ut(()=>{me&&vn(me,T,y),Z&&mi(y,null,T,"unmounted")},F)},oe=y=>{const{type:T,el:F,anchor:G,transition:k}=y;if(T===yn){ve(F,G);return}if(T===sa){w(y);return}const te=()=>{r(F),k&&!k.persisted&&k.afterLeave&&k.afterLeave()};if(y.shapeFlag&1&&k&&!k.persisted){const{leave:re,delayLeave:$}=k,he=()=>re(F,te);$?$(y.el,te,he):he()}else te()},ve=(y,T)=>{let F;for(;y!==T;)F=f(y),r(y),y=F;r(T)},z=(y,T,F)=>{const{bum:G,scope:k,update:te,subTree:re,um:$}=y;G&&ta(G),k.stop(),te&&(te.active=!1,W(re,y,T,F)),$&&Ut($,T),Ut(()=>{y.isUnmounted=!0},T),T&&T.pendingBranch&&!T.isUnmounted&&y.asyncDep&&!y.asyncResolved&&y.suspenseId===T.pendingId&&(T.deps--,T.deps===0&&T.resolve())},O=(y,T,F,G=!1,k=!1,te=0)=>{for(let re=te;re<y.length;re++)W(y[re],T,F,G,k)},ee=y=>y.shapeFlag&6?ee(y.component.subTree):y.shapeFlag&128?y.suspense.next():f(y.anchor||y.el),ce=(y,T,F)=>{y==null?T._vnode&&W(T._vnode,null,null,!0):p(T._vnode||null,y,T,null,null,null,F),Rc(),Cf(),T._vnode=y},ge={p,um:W,m:xe,r:oe,mt:N,mc:x,pc:Y,pbc:R,n:ee,o:i};let pe,Me;return e&&([pe,Me]=e(ge)),{render:ce,hydrate:pe,createApp:sg(ce,pe)}}function gi({effect:i,update:e},t){i.allowRecurse=e.allowRecurse=t}function $f(i,e,t=!1){const n=i.children,r=e.children;if(Ne(n)&&Ne(r))for(let s=0;s<n.length;s++){const o=n[s];let a=r[s];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=r[s]=ei(r[s]),a.el=o.el),t||$f(o,a)),a.type===Uo&&(a.el=o.el)}}function lg(i){const e=i.slice(),t=[0];let n,r,s,o,a;const l=i.length;for(n=0;n<l;n++){const c=i[n];if(c!==0){if(r=t[t.length-1],i[r]<c){e[n]=r,t.push(n);continue}for(s=0,o=t.length-1;s<o;)a=s+o>>1,i[t[a]]<c?s=a+1:o=a;c<i[t[s]]&&(s>0&&(e[n]=t[s-1]),t[s]=n)}}for(s=t.length,o=t[s-1];s-- >0;)t[s]=o,o=e[o];return t}const cg=i=>i.__isTeleport,yn=Symbol(void 0),Uo=Symbol(void 0),Vn=Symbol(void 0),sa=Symbol(void 0),Kr=[];let pn=null;function Kf(i=!1){Kr.push(pn=i?null:[])}function ug(){Kr.pop(),pn=Kr[Kr.length-1]||null}let as=1;function Vc(i){as+=i}function Zf(i){return i.dynamicChildren=as>0?pn||lr:null,ug(),as>0&&pn&&pn.push(i),i}function hg(i,e,t,n,r,s){return Zf(Qf(i,e,t,n,r,s,!0))}function fg(i,e,t,n,r){return Zf(rn(i,e,t,n,r,!0))}function pl(i){return i?i.__v_isVNode===!0:!1}function Si(i,e){return i.type===e.type&&i.key===e.key}const Bo="__vInternal",Jf=({key:i})=>i??null,po=({ref:i,ref_key:e,ref_for:t})=>i!=null?St(i)||Ct(i)||Ue(i)?{i:nn,r:i,k:e,f:!!t}:i:null;function Qf(i,e=null,t=null,n=0,r=null,s=i===yn?0:1,o=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:i,props:e,key:e&&Jf(e),ref:e&&po(e),scopeId:Rf,slotScopeIds:null,children:t,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:s,patchFlag:n,dynamicProps:r,dynamicChildren:null,appContext:null,ctx:nn};return a?(Zl(l,t),s&128&&i.normalize(l)):t&&(l.shapeFlag|=St(t)?8:16),as>0&&!o&&pn&&(l.patchFlag>0||s&6)&&l.patchFlag!==32&&pn.push(l),l}const rn=dg;function dg(i,e=null,t=null,n=0,r=null,s=!1){if((!i||i===Xm)&&(i=Vn),pl(i)){const a=li(i,e,!0);return t&&Zl(a,t),as>0&&!s&&pn&&(a.shapeFlag&6?pn[pn.indexOf(i)]=a:pn.push(a)),a.patchFlag|=-2,a}if(Eg(i)&&(i=i.__vccOpts),e){e=pg(e);let{class:a,style:l}=e;a&&!St(a)&&(e.class=Ol(a)),ct(l)&&(vf(l)&&!Ne(l)&&(l=Pt({},l)),e.style=Fl(l))}const o=St(i)?1:Cm(i)?128:cg(i)?64:ct(i)?4:Ue(i)?2:0;return Qf(i,e,t,n,r,o,s,!0)}function pg(i){return i?vf(i)||Bo in i?Pt({},i):i:null}function li(i,e,t=!1){const{props:n,ref:r,patchFlag:s,children:o}=i,a=e?gg(n||{},e):n;return{__v_isVNode:!0,__v_skip:!0,type:i.type,props:a,key:a&&Jf(a),ref:e&&e.ref?t&&r?Ne(r)?r.concat(po(e)):[r,po(e)]:po(e):r,scopeId:i.scopeId,slotScopeIds:i.slotScopeIds,children:o,target:i.target,targetAnchor:i.targetAnchor,staticCount:i.staticCount,shapeFlag:i.shapeFlag,patchFlag:e&&i.type!==yn?s===-1?16:s|16:s,dynamicProps:i.dynamicProps,dynamicChildren:i.dynamicChildren,appContext:i.appContext,dirs:i.dirs,transition:i.transition,component:i.component,suspense:i.suspense,ssContent:i.ssContent&&li(i.ssContent),ssFallback:i.ssFallback&&li(i.ssFallback),el:i.el,anchor:i.anchor,ctx:i.ctx,ce:i.ce}}function mg(i=" ",e=0){return rn(Uo,null,i,e)}function Mn(i){return i==null||typeof i=="boolean"?rn(Vn):Ne(i)?rn(yn,null,i.slice()):typeof i=="object"?ei(i):rn(Uo,null,String(i))}function ei(i){return i.el===null&&i.patchFlag!==-1||i.memo?i:li(i)}function Zl(i,e){let t=0;const{shapeFlag:n}=i;if(e==null)e=null;else if(Ne(e))t=16;else if(typeof e=="object")if(n&65){const r=e.default;r&&(r._c&&(r._d=!1),Zl(i,r()),r._c&&(r._d=!0));return}else{t=32;const r=e._;!r&&!(Bo in e)?e._ctx=nn:r===3&&nn&&(nn.slots._===1?e._=1:(e._=2,i.patchFlag|=1024))}else Ue(e)?(e={default:e,_ctx:nn},t=32):(e=String(e),n&64?(t=16,e=[mg(e)]):t=8);i.children=e,i.shapeFlag|=t}function gg(...i){const e={};for(let t=0;t<i.length;t++){const n=i[t];for(const r in n)if(r==="class")e.class!==n.class&&(e.class=Ol([e.class,n.class]));else if(r==="style")e.style=Fl([e.style,n.style]);else if(Po(r)){const s=e[r],o=n[r];o&&s!==o&&!(Ne(s)&&s.includes(o))&&(e[r]=s?[].concat(s,o):o)}else r!==""&&(e[r]=n[r])}return e}function vn(i,e,t,n=null){an(i,e,7,[t,n])}const _g=Yf();let vg=0;function xg(i,e,t){const n=i.type,r=(e?e.appContext:i.appContext)||_g,s={uid:vg++,vnode:i,type:n,parent:e,appContext:r,root:null,next:null,subTree:null,effect:null,update:null,scope:new Op(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(r.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Wf(n,r),emitsOptions:Lf(n,r),emit:null,emitted:null,propsDefaults:rt,inheritAttrs:n.inheritAttrs,ctx:rt,data:rt,props:rt,attrs:rt,slots:rt,refs:rt,setupState:rt,setupContext:null,suspense:t,suspenseId:t?t.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return s.ctx={_:s},s.root=e?e.root:s,s.emit=bm.bind(null,s),i.ce&&i.ce(s),s}let lt=null;const yg=()=>lt||nn,_r=i=>{lt=i,i.scope.on()},Pi=()=>{lt&&lt.scope.off(),lt=null};function ed(i){return i.vnode.shapeFlag&4}let ls=!1;function Mg(i,e=!1){ls=e;const{props:t,children:n}=i.vnode,r=ed(i);Qm(i,t,r,e),ng(i,n);const s=r?bg(i,e):void 0;return ls=!1,s}function bg(i,e){const t=i.type;i.accessCache=Object.create(null),i.proxy=xf(new Proxy(i.ctx,qm));const{setup:n}=t;if(n){const r=i.setupContext=n.length>1?Sg(i):null;_r(i),Tr();const s=si(n,i,0,[i.props,r]);if(Er(),Pi(),of(s)){if(s.then(Pi,Pi),e)return s.then(o=>{Gc(i,o,e)}).catch(o=>{Fo(o,i,0)});i.asyncDep=s}else Gc(i,s,e)}else td(i,e)}function Gc(i,e,t){Ue(e)?i.type.__ssrInlineRender?i.ssrRender=e:i.render=e:ct(e)&&(i.setupState=wf(e)),td(i,t)}let Hc;function td(i,e,t){const n=i.type;if(!i.render){if(!e&&Hc&&!n.render){const r=n.template||$l(i).template;if(r){const{isCustomElement:s,compilerOptions:o}=i.appContext.config,{delimiters:a,compilerOptions:l}=n,c=Pt(Pt({isCustomElement:s,delimiters:a},o),l);n.render=Hc(r,c)}}i.render=n.render||mn}_r(i),Tr(),Ym(i),Er(),Pi()}function wg(i){return new Proxy(i.attrs,{get(e,t){return Vt(i,"get","$attrs"),e[t]}})}function Sg(i){const e=n=>{i.exposed=n||{}};let t;return{get attrs(){return t||(t=wg(i))},slots:i.slots,emit:i.emit,expose:e}}function Jl(i){if(i.exposed)return i.exposeProxy||(i.exposeProxy=new Proxy(wf(xf(i.exposed)),{get(e,t){if(t in e)return e[t];if(t in $r)return $r[t](i)},has(e,t){return t in e||t in $r}}))}function Tg(i,e=!0){return Ue(i)?i.displayName||i.name:i.name||e&&i.__name}function Eg(i){return Ue(i)&&"__vccOpts"in i}const Qt=(i,e)=>gm(i,e,ls);function nd(i,e,t){const n=arguments.length;return n===2?ct(e)&&!Ne(e)?pl(e)?rn(i,null,[e]):rn(i,e):rn(i,null,e):(n>3?t=Array.prototype.slice.call(arguments,2):n===3&&pl(t)&&(t=[t]),rn(i,e,t))}const Ag=Symbol(""),Cg=()=>kn(Ag),Pg="3.2.47",Lg="http://www.w3.org/2000/svg",Ti=typeof document<"u"?document:null,Wc=Ti&&Ti.createElement("template"),Rg={insert:(i,e,t)=>{e.insertBefore(i,t||null)},remove:i=>{const e=i.parentNode;e&&e.removeChild(i)},createElement:(i,e,t,n)=>{const r=e?Ti.createElementNS(Lg,i):Ti.createElement(i,t?{is:t}:void 0);return i==="select"&&n&&n.multiple!=null&&r.setAttribute("multiple",n.multiple),r},createText:i=>Ti.createTextNode(i),createComment:i=>Ti.createComment(i),setText:(i,e)=>{i.nodeValue=e},setElementText:(i,e)=>{i.textContent=e},parentNode:i=>i.parentNode,nextSibling:i=>i.nextSibling,querySelector:i=>Ti.querySelector(i),setScopeId(i,e){i.setAttribute(e,"")},insertStaticContent(i,e,t,n,r,s){const o=t?t.previousSibling:e.lastChild;if(r&&(r===s||r.nextSibling))for(;e.insertBefore(r.cloneNode(!0),t),!(r===s||!(r=r.nextSibling)););else{Wc.innerHTML=n?`<svg>${i}</svg>`:i;const a=Wc.content;if(n){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}e.insertBefore(a,t)}return[o?o.nextSibling:e.firstChild,t?t.previousSibling:e.lastChild]}};function Dg(i,e,t){const n=i._vtc;n&&(e=(e?[e,...n]:[...n]).join(" ")),e==null?i.removeAttribute("class"):t?i.setAttribute("class",e):i.className=e}function Ig(i,e,t){const n=i.style,r=St(t);if(t&&!r){if(e&&!St(e))for(const s in e)t[s]==null&&ml(n,s,"");for(const s in t)ml(n,s,t[s])}else{const s=n.display;r?e!==t&&(n.cssText=t):e&&i.removeAttribute("style"),"_vod"in i&&(n.display=s)}}const Xc=/\s*!important$/;function ml(i,e,t){if(Ne(t))t.forEach(n=>ml(i,e,n));else if(t==null&&(t=""),e.startsWith("--"))i.setProperty(e,t);else{const n=Fg(i,e);Xc.test(t)?i.setProperty(Sr(n),t.replace(Xc,""),"important"):i[n]=t}}const jc=["Webkit","Moz","ms"],oa={};function Fg(i,e){const t=oa[e];if(t)return t;let n=An(e);if(n!=="filter"&&n in i)return oa[e]=n;n=Do(n);for(let r=0;r<jc.length;r++){const s=jc[r]+n;if(s in i)return oa[e]=s}return e}const qc="http://www.w3.org/1999/xlink";function Og(i,e,t,n,r){if(n&&e.startsWith("xlink:"))t==null?i.removeAttributeNS(qc,e.slice(6,e.length)):i.setAttributeNS(qc,e,t);else{const s=wp(e);t==null||s&&!sf(t)?i.removeAttribute(e):i.setAttribute(e,s?"":t)}}function Ng(i,e,t,n,r,s,o){if(e==="innerHTML"||e==="textContent"){n&&o(n,r,s),i[e]=t??"";return}if(e==="value"&&i.tagName!=="PROGRESS"&&!i.tagName.includes("-")){i._value=t;const l=t??"";(i.value!==l||i.tagName==="OPTION")&&(i.value=l),t==null&&i.removeAttribute(e);return}let a=!1;if(t===""||t==null){const l=typeof i[e];l==="boolean"?t=sf(t):t==null&&l==="string"?(t="",a=!0):l==="number"&&(t=0,a=!0)}try{i[e]=t}catch{}a&&i.removeAttribute(e)}function zg(i,e,t,n){i.addEventListener(e,t,n)}function Ug(i,e,t,n){i.removeEventListener(e,t,n)}function Bg(i,e,t,n,r=null){const s=i._vei||(i._vei={}),o=s[e];if(n&&o)o.value=n;else{const[a,l]=kg(e);if(n){const c=s[e]=Hg(n,r);zg(i,a,c,l)}else o&&(Ug(i,a,o,l),s[e]=void 0)}}const Yc=/(?:Once|Passive|Capture)$/;function kg(i){let e;if(Yc.test(i)){e={};let n;for(;n=i.match(Yc);)i=i.slice(0,i.length-n[0].length),e[n[0].toLowerCase()]=!0}return[i[2]===":"?i.slice(3):Sr(i.slice(2)),e]}let aa=0;const Vg=Promise.resolve(),Gg=()=>aa||(Vg.then(()=>aa=0),aa=Date.now());function Hg(i,e){const t=n=>{if(!n._vts)n._vts=Date.now();else if(n._vts<=t.attached)return;an(Wg(n,t.value),e,5,[n])};return t.value=i,t.attached=Gg(),t}function Wg(i,e){if(Ne(e)){const t=i.stopImmediatePropagation;return i.stopImmediatePropagation=()=>{t.call(i),i._stopped=!0},e.map(n=>r=>!r._stopped&&n&&n(r))}else return e}const $c=/^on[a-z]/,Xg=(i,e,t,n,r=!1,s,o,a,l)=>{e==="class"?Dg(i,n,r):e==="style"?Ig(i,t,n):Po(e)?Nl(e)||Bg(i,e,t,n,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):jg(i,e,n,r))?Ng(i,e,n,s,o,a,l):(e==="true-value"?i._trueValue=n:e==="false-value"&&(i._falseValue=n),Og(i,e,n,r))};function jg(i,e,t,n){return n?!!(e==="innerHTML"||e==="textContent"||e in i&&$c.test(e)&&Ue(t)):e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&i.tagName==="INPUT"||e==="type"&&i.tagName==="TEXTAREA"||$c.test(e)&&St(t)?!1:e in i}const qg={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String};Im.props;const Yg=Pt({patchProp:Xg},Rg);let Kc;function $g(){return Kc||(Kc=og(Yg))}const Kg=(...i)=>{const e=$g().createApp(...i),{mount:t}=e;return e.mount=n=>{const r=Zg(n);if(!r)return;const s=e._component;!Ue(s)&&!s.render&&!s.template&&(s.template=r.innerHTML),r.innerHTML="";const o=t(r,!1,r instanceof SVGElement);return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),o},e};function Zg(i){return St(i)?document.querySelector(i):i}const id=(i,e)=>{const t=i.__vccOpts||i;for(const[n,r]of e)t[n]=r;return t},Jg={};function Qg(i,e){const t=Wm("router-view");return Kf(),fg(t)}const e_=id(Jg,[["render",Qg]]);/*!
  * vue-router v4.1.6
  * (c) 2022 Eduardo San Martin Morote
  * @license MIT
  */const tr=typeof window<"u";function t_(i){return i.__esModule||i[Symbol.toStringTag]==="Module"}const Qe=Object.assign;function la(i,e){const t={};for(const n in e){const r=e[n];t[n]=gn(r)?r.map(i):i(r)}return t}const Zr=()=>{},gn=Array.isArray,n_=/\/$/,i_=i=>i.replace(n_,"");function ca(i,e,t="/"){let n,r={},s="",o="";const a=e.indexOf("#");let l=e.indexOf("?");return a<l&&a>=0&&(l=-1),l>-1&&(n=e.slice(0,l),s=e.slice(l+1,a>-1?a:e.length),r=i(s)),a>-1&&(n=n||e.slice(0,a),o=e.slice(a,e.length)),n=a_(n??e,t),{fullPath:n+(s&&"?")+s+o,path:n,query:r,hash:o}}function r_(i,e){const t=e.query?i(e.query):"";return e.path+(t&&"?")+t+(e.hash||"")}function Zc(i,e){return!e||!i.toLowerCase().startsWith(e.toLowerCase())?i:i.slice(e.length)||"/"}function s_(i,e,t){const n=e.matched.length-1,r=t.matched.length-1;return n>-1&&n===r&&vr(e.matched[n],t.matched[r])&&rd(e.params,t.params)&&i(e.query)===i(t.query)&&e.hash===t.hash}function vr(i,e){return(i.aliasOf||i)===(e.aliasOf||e)}function rd(i,e){if(Object.keys(i).length!==Object.keys(e).length)return!1;for(const t in i)if(!o_(i[t],e[t]))return!1;return!0}function o_(i,e){return gn(i)?Jc(i,e):gn(e)?Jc(e,i):i===e}function Jc(i,e){return gn(e)?i.length===e.length&&i.every((t,n)=>t===e[n]):i.length===1&&i[0]===e}function a_(i,e){if(i.startsWith("/"))return i;if(!i)return e;const t=e.split("/"),n=i.split("/");let r=t.length-1,s,o;for(s=0;s<n.length;s++)if(o=n[s],o!==".")if(o==="..")r>1&&r--;else break;return t.slice(0,r).join("/")+"/"+n.slice(s-(s===n.length?1:0)).join("/")}var cs;(function(i){i.pop="pop",i.push="push"})(cs||(cs={}));var Jr;(function(i){i.back="back",i.forward="forward",i.unknown=""})(Jr||(Jr={}));function l_(i){if(!i)if(tr){const e=document.querySelector("base");i=e&&e.getAttribute("href")||"/",i=i.replace(/^\w+:\/\/[^\/]+/,"")}else i="/";return i[0]!=="/"&&i[0]!=="#"&&(i="/"+i),i_(i)}const c_=/^[^#]+#/;function u_(i,e){return i.replace(c_,"#")+e}function h_(i,e){const t=document.documentElement.getBoundingClientRect(),n=i.getBoundingClientRect();return{behavior:e.behavior,left:n.left-t.left-(e.left||0),top:n.top-t.top-(e.top||0)}}const ko=()=>({left:window.pageXOffset,top:window.pageYOffset});function f_(i){let e;if("el"in i){const t=i.el,n=typeof t=="string"&&t.startsWith("#"),r=typeof t=="string"?n?document.getElementById(t.slice(1)):document.querySelector(t):t;if(!r)return;e=h_(r,i)}else e=i;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.pageXOffset,e.top!=null?e.top:window.pageYOffset)}function Qc(i,e){return(history.state?history.state.position-e:-1)+i}const gl=new Map;function d_(i,e){gl.set(i,e)}function p_(i){const e=gl.get(i);return gl.delete(i),e}let m_=()=>location.protocol+"//"+location.host;function sd(i,e){const{pathname:t,search:n,hash:r}=e,s=i.indexOf("#");if(s>-1){let a=r.includes(i.slice(s))?i.slice(s).length:1,l=r.slice(a);return l[0]!=="/"&&(l="/"+l),Zc(l,"")}return Zc(t,i)+n+r}function g_(i,e,t,n){let r=[],s=[],o=null;const a=({state:f})=>{const d=sd(i,location),g=t.value,p=e.value;let m=0;if(f){if(t.value=d,e.value=f,o&&o===g){o=null;return}m=p?f.position-p.position:0}else n(d);r.forEach(_=>{_(t.value,g,{delta:m,type:cs.pop,direction:m?m>0?Jr.forward:Jr.back:Jr.unknown})})};function l(){o=t.value}function c(f){r.push(f);const d=()=>{const g=r.indexOf(f);g>-1&&r.splice(g,1)};return s.push(d),d}function u(){const{history:f}=window;f.state&&f.replaceState(Qe({},f.state,{scroll:ko()}),"")}function h(){for(const f of s)f();s=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",u)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",u),{pauseListeners:l,listen:c,destroy:h}}function eu(i,e,t,n=!1,r=!1){return{back:i,current:e,forward:t,replaced:n,position:window.history.length,scroll:r?ko():null}}function __(i){const{history:e,location:t}=window,n={value:sd(i,t)},r={value:e.state};r.value||s(n.value,{back:null,current:n.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function s(l,c,u){const h=i.indexOf("#"),f=h>-1?(t.host&&document.querySelector("base")?i:i.slice(h))+l:m_()+i+l;try{e[u?"replaceState":"pushState"](c,"",f),r.value=c}catch(d){console.error(d),t[u?"replace":"assign"](f)}}function o(l,c){const u=Qe({},e.state,eu(r.value.back,l,r.value.forward,!0),c,{position:r.value.position});s(l,u,!0),n.value=l}function a(l,c){const u=Qe({},r.value,e.state,{forward:l,scroll:ko()});s(u.current,u,!0);const h=Qe({},eu(n.value,l,null),{position:u.position+1},c);s(l,h,!1),n.value=l}return{location:n,state:r,push:a,replace:o}}function v_(i){i=l_(i);const e=__(i),t=g_(i,e.state,e.location,e.replace);function n(s,o=!0){o||t.pauseListeners(),history.go(s)}const r=Qe({location:"",base:i,go:n,createHref:u_.bind(null,i)},e,t);return Object.defineProperty(r,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(r,"state",{enumerable:!0,get:()=>e.state.value}),r}function x_(i){return i=location.host?i||location.pathname+location.search:"",i.includes("#")||(i+="#"),v_(i)}function y_(i){return typeof i=="string"||i&&typeof i=="object"}function od(i){return typeof i=="string"||typeof i=="symbol"}const qn={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},ad=Symbol("");var tu;(function(i){i[i.aborted=4]="aborted",i[i.cancelled=8]="cancelled",i[i.duplicated=16]="duplicated"})(tu||(tu={}));function xr(i,e){return Qe(new Error,{type:i,[ad]:!0},e)}function Dn(i,e){return i instanceof Error&&ad in i&&(e==null||!!(i.type&e))}const nu="[^/]+?",M_={sensitive:!1,strict:!1,start:!0,end:!0},b_=/[.+*?^${}()[\]/\\]/g;function w_(i,e){const t=Qe({},M_,e),n=[];let r=t.start?"^":"";const s=[];for(const c of i){const u=c.length?[]:[90];t.strict&&!c.length&&(r+="/");for(let h=0;h<c.length;h++){const f=c[h];let d=40+(t.sensitive?.25:0);if(f.type===0)h||(r+="/"),r+=f.value.replace(b_,"\\$&"),d+=40;else if(f.type===1){const{value:g,repeatable:p,optional:m,regexp:_}=f;s.push({name:g,repeatable:p,optional:m});const b=_||nu;if(b!==nu){d+=10;try{new RegExp(`(${b})`)}catch(w){throw new Error(`Invalid custom RegExp for param "${g}" (${b}): `+w.message)}}let v=p?`((?:${b})(?:/(?:${b}))*)`:`(${b})`;h||(v=m&&c.length<2?`(?:/${v})`:"/"+v),m&&(v+="?"),r+=v,d+=20,m&&(d+=-8),p&&(d+=-20),b===".*"&&(d+=-50)}u.push(d)}n.push(u)}if(t.strict&&t.end){const c=n.length-1;n[c][n[c].length-1]+=.7000000000000001}t.strict||(r+="/?"),t.end?r+="$":t.strict&&(r+="(?:/|$)");const o=new RegExp(r,t.sensitive?"":"i");function a(c){const u=c.match(o),h={};if(!u)return null;for(let f=1;f<u.length;f++){const d=u[f]||"",g=s[f-1];h[g.name]=d&&g.repeatable?d.split("/"):d}return h}function l(c){let u="",h=!1;for(const f of i){(!h||!u.endsWith("/"))&&(u+="/"),h=!1;for(const d of f)if(d.type===0)u+=d.value;else if(d.type===1){const{value:g,repeatable:p,optional:m}=d,_=g in c?c[g]:"";if(gn(_)&&!p)throw new Error(`Provided param "${g}" is an array but it is not repeatable (* or + modifiers)`);const b=gn(_)?_.join("/"):_;if(!b)if(m)f.length<2&&(u.endsWith("/")?u=u.slice(0,-1):h=!0);else throw new Error(`Missing required param "${g}"`);u+=b}}return u||"/"}return{re:o,score:n,keys:s,parse:a,stringify:l}}function S_(i,e){let t=0;for(;t<i.length&&t<e.length;){const n=e[t]-i[t];if(n)return n;t++}return i.length<e.length?i.length===1&&i[0]===40+40?-1:1:i.length>e.length?e.length===1&&e[0]===40+40?1:-1:0}function T_(i,e){let t=0;const n=i.score,r=e.score;for(;t<n.length&&t<r.length;){const s=S_(n[t],r[t]);if(s)return s;t++}if(Math.abs(r.length-n.length)===1){if(iu(n))return 1;if(iu(r))return-1}return r.length-n.length}function iu(i){const e=i[i.length-1];return i.length>0&&e[e.length-1]<0}const E_={type:0,value:""},A_=/[a-zA-Z0-9_]/;function C_(i){if(!i)return[[]];if(i==="/")return[[E_]];if(!i.startsWith("/"))throw new Error(`Invalid path "${i}"`);function e(d){throw new Error(`ERR (${t})/"${c}": ${d}`)}let t=0,n=t;const r=[];let s;function o(){s&&r.push(s),s=[]}let a=0,l,c="",u="";function h(){c&&(t===0?s.push({type:0,value:c}):t===1||t===2||t===3?(s.length>1&&(l==="*"||l==="+")&&e(`A repeatable param (${c}) must be alone in its segment. eg: '/:ids+.`),s.push({type:1,value:c,regexp:u,repeatable:l==="*"||l==="+",optional:l==="*"||l==="?"})):e("Invalid state to consume buffer"),c="")}function f(){c+=l}for(;a<i.length;){if(l=i[a++],l==="\\"&&t!==2){n=t,t=4;continue}switch(t){case 0:l==="/"?(c&&h(),o()):l===":"?(h(),t=1):f();break;case 4:f(),t=n;break;case 1:l==="("?t=2:A_.test(l)?f():(h(),t=0,l!=="*"&&l!=="?"&&l!=="+"&&a--);break;case 2:l===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+l:t=3:u+=l;break;case 3:h(),t=0,l!=="*"&&l!=="?"&&l!=="+"&&a--,u="";break;default:e("Unknown state");break}}return t===2&&e(`Unfinished custom RegExp for param "${c}"`),h(),o(),r}function P_(i,e,t){const n=w_(C_(i.path),t),r=Qe(n,{record:i,parent:e,children:[],alias:[]});return e&&!r.record.aliasOf==!e.record.aliasOf&&e.children.push(r),r}function L_(i,e){const t=[],n=new Map;e=ou({strict:!1,end:!0,sensitive:!1},e);function r(u){return n.get(u)}function s(u,h,f){const d=!f,g=R_(u);g.aliasOf=f&&f.record;const p=ou(e,u),m=[g];if("alias"in u){const v=typeof u.alias=="string"?[u.alias]:u.alias;for(const w of v)m.push(Qe({},g,{components:f?f.record.components:g.components,path:w,aliasOf:f?f.record:g}))}let _,b;for(const v of m){const{path:w}=v;if(h&&w[0]!=="/"){const S=h.record.path,P=S[S.length-1]==="/"?"":"/";v.path=h.record.path+(w&&P+w)}if(_=P_(v,h,p),f?f.alias.push(_):(b=b||_,b!==_&&b.alias.push(_),d&&u.name&&!su(_)&&o(u.name)),g.children){const S=g.children;for(let P=0;P<S.length;P++)s(S[P],_,f&&f.children[P])}f=f||_,(_.record.components&&Object.keys(_.record.components).length||_.record.name||_.record.redirect)&&l(_)}return b?()=>{o(b)}:Zr}function o(u){if(od(u)){const h=n.get(u);h&&(n.delete(u),t.splice(t.indexOf(h),1),h.children.forEach(o),h.alias.forEach(o))}else{const h=t.indexOf(u);h>-1&&(t.splice(h,1),u.record.name&&n.delete(u.record.name),u.children.forEach(o),u.alias.forEach(o))}}function a(){return t}function l(u){let h=0;for(;h<t.length&&T_(u,t[h])>=0&&(u.record.path!==t[h].record.path||!ld(u,t[h]));)h++;t.splice(h,0,u),u.record.name&&!su(u)&&n.set(u.record.name,u)}function c(u,h){let f,d={},g,p;if("name"in u&&u.name){if(f=n.get(u.name),!f)throw xr(1,{location:u});p=f.record.name,d=Qe(ru(h.params,f.keys.filter(b=>!b.optional).map(b=>b.name)),u.params&&ru(u.params,f.keys.map(b=>b.name))),g=f.stringify(d)}else if("path"in u)g=u.path,f=t.find(b=>b.re.test(g)),f&&(d=f.parse(g),p=f.record.name);else{if(f=h.name?n.get(h.name):t.find(b=>b.re.test(h.path)),!f)throw xr(1,{location:u,currentLocation:h});p=f.record.name,d=Qe({},h.params,u.params),g=f.stringify(d)}const m=[];let _=f;for(;_;)m.unshift(_.record),_=_.parent;return{name:p,path:g,params:d,matched:m,meta:I_(m)}}return i.forEach(u=>s(u)),{addRoute:s,resolve:c,removeRoute:o,getRoutes:a,getRecordMatcher:r}}function ru(i,e){const t={};for(const n of e)n in i&&(t[n]=i[n]);return t}function R_(i){return{path:i.path,redirect:i.redirect,name:i.name,meta:i.meta||{},aliasOf:void 0,beforeEnter:i.beforeEnter,props:D_(i),children:i.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in i?i.components||null:i.component&&{default:i.component}}}function D_(i){const e={},t=i.props||!1;if("component"in i)e.default=t;else for(const n in i.components)e[n]=typeof t=="boolean"?t:t[n];return e}function su(i){for(;i;){if(i.record.aliasOf)return!0;i=i.parent}return!1}function I_(i){return i.reduce((e,t)=>Qe(e,t.meta),{})}function ou(i,e){const t={};for(const n in i)t[n]=n in e?e[n]:i[n];return t}function ld(i,e){return e.children.some(t=>t===i||ld(i,t))}const cd=/#/g,F_=/&/g,O_=/\//g,N_=/=/g,z_=/\?/g,ud=/\+/g,U_=/%5B/g,B_=/%5D/g,hd=/%5E/g,k_=/%60/g,fd=/%7B/g,V_=/%7C/g,dd=/%7D/g,G_=/%20/g;function Ql(i){return encodeURI(""+i).replace(V_,"|").replace(U_,"[").replace(B_,"]")}function H_(i){return Ql(i).replace(fd,"{").replace(dd,"}").replace(hd,"^")}function _l(i){return Ql(i).replace(ud,"%2B").replace(G_,"+").replace(cd,"%23").replace(F_,"%26").replace(k_,"`").replace(fd,"{").replace(dd,"}").replace(hd,"^")}function W_(i){return _l(i).replace(N_,"%3D")}function X_(i){return Ql(i).replace(cd,"%23").replace(z_,"%3F")}function j_(i){return i==null?"":X_(i).replace(O_,"%2F")}function wo(i){try{return decodeURIComponent(""+i)}catch{}return""+i}function q_(i){const e={};if(i===""||i==="?")return e;const n=(i[0]==="?"?i.slice(1):i).split("&");for(let r=0;r<n.length;++r){const s=n[r].replace(ud," "),o=s.indexOf("="),a=wo(o<0?s:s.slice(0,o)),l=o<0?null:wo(s.slice(o+1));if(a in e){let c=e[a];gn(c)||(c=e[a]=[c]),c.push(l)}else e[a]=l}return e}function au(i){let e="";for(let t in i){const n=i[t];if(t=W_(t),n==null){n!==void 0&&(e+=(e.length?"&":"")+t);continue}(gn(n)?n.map(s=>s&&_l(s)):[n&&_l(n)]).forEach(s=>{s!==void 0&&(e+=(e.length?"&":"")+t,s!=null&&(e+="="+s))})}return e}function Y_(i){const e={};for(const t in i){const n=i[t];n!==void 0&&(e[t]=gn(n)?n.map(r=>r==null?null:""+r):n==null?n:""+n)}return e}const $_=Symbol(""),lu=Symbol(""),ec=Symbol(""),pd=Symbol(""),vl=Symbol("");function Ir(){let i=[];function e(n){return i.push(n),()=>{const r=i.indexOf(n);r>-1&&i.splice(r,1)}}function t(){i=[]}return{add:e,list:()=>i,reset:t}}function ti(i,e,t,n,r){const s=n&&(n.enterCallbacks[r]=n.enterCallbacks[r]||[]);return()=>new Promise((o,a)=>{const l=h=>{h===!1?a(xr(4,{from:t,to:e})):h instanceof Error?a(h):y_(h)?a(xr(2,{from:e,to:h})):(s&&n.enterCallbacks[r]===s&&typeof h=="function"&&s.push(h),o())},c=i.call(n&&n.instances[r],e,t,l);let u=Promise.resolve(c);i.length<3&&(u=u.then(l)),u.catch(h=>a(h))})}function ua(i,e,t,n){const r=[];for(const s of i)for(const o in s.components){let a=s.components[o];if(!(e!=="beforeRouteEnter"&&!s.instances[o]))if(K_(a)){const c=(a.__vccOpts||a)[e];c&&r.push(ti(c,t,n,s,o))}else{let l=a();r.push(()=>l.then(c=>{if(!c)return Promise.reject(new Error(`Couldn't resolve component "${o}" at "${s.path}"`));const u=t_(c)?c.default:c;s.components[o]=u;const f=(u.__vccOpts||u)[e];return f&&ti(f,t,n,s,o)()}))}}return r}function K_(i){return typeof i=="object"||"displayName"in i||"props"in i||"__vccOpts"in i}function cu(i){const e=kn(ec),t=kn(pd),n=Qt(()=>e.resolve(ur(i.to))),r=Qt(()=>{const{matched:l}=n.value,{length:c}=l,u=l[c-1],h=t.matched;if(!u||!h.length)return-1;const f=h.findIndex(vr.bind(null,u));if(f>-1)return f;const d=uu(l[c-2]);return c>1&&uu(u)===d&&h[h.length-1].path!==d?h.findIndex(vr.bind(null,l[c-2])):f}),s=Qt(()=>r.value>-1&&e0(t.params,n.value.params)),o=Qt(()=>r.value>-1&&r.value===t.matched.length-1&&rd(t.params,n.value.params));function a(l={}){return Q_(l)?e[ur(i.replace)?"replace":"push"](ur(i.to)).catch(Zr):Promise.resolve()}return{route:n,href:Qt(()=>n.value.href),isActive:s,isExactActive:o,navigate:a}}const Z_=Nf({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:cu,setup(i,{slots:e}){const t=Ms(cu(i)),{options:n}=kn(ec),r=Qt(()=>({[hu(i.activeClass,n.linkActiveClass,"router-link-active")]:t.isActive,[hu(i.exactActiveClass,n.linkExactActiveClass,"router-link-exact-active")]:t.isExactActive}));return()=>{const s=e.default&&e.default(t);return i.custom?s:nd("a",{"aria-current":t.isExactActive?i.ariaCurrentValue:null,href:t.href,onClick:t.navigate,class:r.value},s)}}}),J_=Z_;function Q_(i){if(!(i.metaKey||i.altKey||i.ctrlKey||i.shiftKey)&&!i.defaultPrevented&&!(i.button!==void 0&&i.button!==0)){if(i.currentTarget&&i.currentTarget.getAttribute){const e=i.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return i.preventDefault&&i.preventDefault(),!0}}function e0(i,e){for(const t in e){const n=e[t],r=i[t];if(typeof n=="string"){if(n!==r)return!1}else if(!gn(r)||r.length!==n.length||n.some((s,o)=>s!==r[o]))return!1}return!0}function uu(i){return i?i.aliasOf?i.aliasOf.path:i.path:""}const hu=(i,e,t)=>i??e??t,t0=Nf({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(i,{attrs:e,slots:t}){const n=kn(vl),r=Qt(()=>i.route||n.value),s=kn(lu,0),o=Qt(()=>{let c=ur(s);const{matched:u}=r.value;let h;for(;(h=u[c])&&!h.components;)c++;return c}),a=Qt(()=>r.value.matched[o.value]);uo(lu,Qt(()=>o.value+1)),uo($_,a),uo(vl,r);const l=hm();return ho(()=>[l.value,a.value,i.name],([c,u,h],[f,d,g])=>{u&&(u.instances[h]=c,d&&d!==u&&c&&c===f&&(u.leaveGuards.size||(u.leaveGuards=d.leaveGuards),u.updateGuards.size||(u.updateGuards=d.updateGuards))),c&&u&&(!d||!vr(u,d)||!f)&&(u.enterCallbacks[h]||[]).forEach(p=>p(c))},{flush:"post"}),()=>{const c=r.value,u=i.name,h=a.value,f=h&&h.components[u];if(!f)return fu(t.default,{Component:f,route:c});const d=h.props[u],g=d?d===!0?c.params:typeof d=="function"?d(c):d:null,m=nd(f,Qe({},g,e,{onVnodeUnmounted:_=>{_.component.isUnmounted&&(h.instances[u]=null)},ref:l}));return fu(t.default,{Component:m,route:c})||m}}});function fu(i,e){if(!i)return null;const t=i(e);return t.length===1?t[0]:t}const n0=t0;function i0(i){const e=L_(i.routes,i),t=i.parseQuery||q_,n=i.stringifyQuery||au,r=i.history,s=Ir(),o=Ir(),a=Ir(),l=fm(qn);let c=qn;tr&&i.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=la.bind(null,z=>""+z),h=la.bind(null,j_),f=la.bind(null,wo);function d(z,O){let ee,ce;return od(z)?(ee=e.getRecordMatcher(z),ce=O):ce=z,e.addRoute(ce,ee)}function g(z){const O=e.getRecordMatcher(z);O&&e.removeRoute(O)}function p(){return e.getRoutes().map(z=>z.record)}function m(z){return!!e.getRecordMatcher(z)}function _(z,O){if(O=Qe({},O||l.value),typeof z=="string"){const y=ca(t,z,O.path),T=e.resolve({path:y.path},O),F=r.createHref(y.fullPath);return Qe(y,T,{params:f(T.params),hash:wo(y.hash),redirectedFrom:void 0,href:F})}let ee;if("path"in z)ee=Qe({},z,{path:ca(t,z.path,O.path).path});else{const y=Qe({},z.params);for(const T in y)y[T]==null&&delete y[T];ee=Qe({},z,{params:h(z.params)}),O.params=h(O.params)}const ce=e.resolve(ee,O),ge=z.hash||"";ce.params=u(f(ce.params));const pe=r_(n,Qe({},z,{hash:H_(ge),path:ce.path})),Me=r.createHref(pe);return Qe({fullPath:pe,hash:ge,query:n===au?Y_(z.query):z.query||{}},ce,{redirectedFrom:void 0,href:Me})}function b(z){return typeof z=="string"?ca(t,z,l.value.path):Qe({},z)}function v(z,O){if(c!==z)return xr(8,{from:O,to:z})}function w(z){return I(z)}function S(z){return w(Qe(b(z),{replace:!0}))}function P(z){const O=z.matched[z.matched.length-1];if(O&&O.redirect){const{redirect:ee}=O;let ce=typeof ee=="function"?ee(z):ee;return typeof ce=="string"&&(ce=ce.includes("?")||ce.includes("#")?ce=b(ce):{path:ce},ce.params={}),Qe({query:z.query,hash:z.hash,params:"path"in ce?{}:z.params},ce)}}function I(z,O){const ee=c=_(z),ce=l.value,ge=z.state,pe=z.force,Me=z.replace===!0,y=P(ee);if(y)return I(Qe(b(y),{state:typeof y=="object"?Qe({},ge,y.state):ge,force:pe,replace:Me}),O||ee);const T=ee;T.redirectedFrom=O;let F;return!pe&&s_(n,ce,ee)&&(F=xr(16,{to:T,from:ce}),de(ce,ce,!0,!1)),(F?Promise.resolve(F):A(T,ce)).catch(G=>Dn(G)?Dn(G,2)?G:fe(G):ie(G,T,ce)).then(G=>{if(G){if(Dn(G,2))return I(Qe({replace:Me},b(G.to),{state:typeof G.to=="object"?Qe({},ge,G.to.state):ge,force:pe}),O||T)}else G=j(T,ce,!0,Me,ge);return R(T,ce,G),G})}function x(z,O){const ee=v(z,O);return ee?Promise.reject(ee):Promise.resolve()}function A(z,O){let ee;const[ce,ge,pe]=r0(z,O);ee=ua(ce.reverse(),"beforeRouteLeave",z,O);for(const y of ce)y.leaveGuards.forEach(T=>{ee.push(ti(T,z,O))});const Me=x.bind(null,z,O);return ee.push(Me),zi(ee).then(()=>{ee=[];for(const y of s.list())ee.push(ti(y,z,O));return ee.push(Me),zi(ee)}).then(()=>{ee=ua(ge,"beforeRouteUpdate",z,O);for(const y of ge)y.updateGuards.forEach(T=>{ee.push(ti(T,z,O))});return ee.push(Me),zi(ee)}).then(()=>{ee=[];for(const y of z.matched)if(y.beforeEnter&&!O.matched.includes(y))if(gn(y.beforeEnter))for(const T of y.beforeEnter)ee.push(ti(T,z,O));else ee.push(ti(y.beforeEnter,z,O));return ee.push(Me),zi(ee)}).then(()=>(z.matched.forEach(y=>y.enterCallbacks={}),ee=ua(pe,"beforeRouteEnter",z,O),ee.push(Me),zi(ee))).then(()=>{ee=[];for(const y of o.list())ee.push(ti(y,z,O));return ee.push(Me),zi(ee)}).catch(y=>Dn(y,8)?y:Promise.reject(y))}function R(z,O,ee){for(const ce of a.list())ce(z,O,ee)}function j(z,O,ee,ce,ge){const pe=v(z,O);if(pe)return pe;const Me=O===qn,y=tr?history.state:{};ee&&(ce||Me?r.replace(z.fullPath,Qe({scroll:Me&&y&&y.scroll},ge)):r.push(z.fullPath,ge)),l.value=z,de(z,O,ee,Me),fe()}let Q;function B(){Q||(Q=r.listen((z,O,ee)=>{if(!ve.listening)return;const ce=_(z),ge=P(ce);if(ge){I(Qe(ge,{replace:!0}),ce).catch(Zr);return}c=ce;const pe=l.value;tr&&d_(Qc(pe.fullPath,ee.delta),ko()),A(ce,pe).catch(Me=>Dn(Me,12)?Me:Dn(Me,2)?(I(Me.to,ce).then(y=>{Dn(y,20)&&!ee.delta&&ee.type===cs.pop&&r.go(-1,!1)}).catch(Zr),Promise.reject()):(ee.delta&&r.go(-ee.delta,!1),ie(Me,ce,pe))).then(Me=>{Me=Me||j(ce,pe,!1),Me&&(ee.delta&&!Dn(Me,8)?r.go(-ee.delta,!1):ee.type===cs.pop&&Dn(Me,20)&&r.go(-1,!1)),R(ce,pe,Me)}).catch(Zr)}))}let N=Ir(),J=Ir(),K;function ie(z,O,ee){fe(z);const ce=J.list();return ce.length?ce.forEach(ge=>ge(z,O,ee)):console.error(z),Promise.reject(z)}function Y(){return K&&l.value!==qn?Promise.resolve():new Promise((z,O)=>{N.add([z,O])})}function fe(z){return K||(K=!z,B(),N.list().forEach(([O,ee])=>z?ee(z):O()),N.reset()),z}function de(z,O,ee,ce){const{scrollBehavior:ge}=i;if(!tr||!ge)return Promise.resolve();const pe=!ee&&p_(Qc(z.fullPath,0))||(ce||!ee)&&history.state&&history.state.scroll||null;return Ef().then(()=>ge(z,O,pe)).then(Me=>Me&&f_(Me)).catch(Me=>ie(Me,z,O))}const xe=z=>r.go(z);let W;const oe=new Set,ve={currentRoute:l,listening:!0,addRoute:d,removeRoute:g,hasRoute:m,getRoutes:p,resolve:_,options:i,push:w,replace:S,go:xe,back:()=>xe(-1),forward:()=>xe(1),beforeEach:s.add,beforeResolve:o.add,afterEach:a.add,onError:J.add,isReady:Y,install(z){const O=this;z.component("RouterLink",J_),z.component("RouterView",n0),z.config.globalProperties.$router=O,Object.defineProperty(z.config.globalProperties,"$route",{enumerable:!0,get:()=>ur(l)}),tr&&!W&&l.value===qn&&(W=!0,w(r.location).catch(ge=>{}));const ee={};for(const ge in qn)ee[ge]=Qt(()=>l.value[ge]);z.provide(ec,O),z.provide(pd,Ms(ee)),z.provide(vl,l);const ce=z.unmount;oe.add(z),z.unmount=function(){oe.delete(z),oe.size<1&&(c=qn,Q&&Q(),Q=null,l.value=qn,W=!1,K=!1),ce()}}};return ve}function zi(i){return i.reduce((e,t)=>e.then(()=>t()),Promise.resolve())}function r0(i,e){const t=[],n=[],r=[],s=Math.max(e.matched.length,i.matched.length);for(let o=0;o<s;o++){const a=e.matched[o];a&&(i.matched.find(c=>vr(c,a))?n.push(a):t.push(a));const l=i.matched[o];l&&(e.matched.find(c=>vr(c,l))||r.push(l))}return[t,n,r]}/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const tc="149",Ui={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},Bi={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},s0=0,du=1,o0=2,md=1,a0=2,Hr=3,ci=0,Yt=1,qt=2,oi=0,fr=1,pu=2,mu=3,gu=4,l0=5,nr=100,c0=101,u0=102,_u=103,vu=104,h0=200,f0=201,d0=202,p0=203,gd=204,_d=205,m0=206,g0=207,_0=208,v0=209,x0=210,y0=0,M0=1,b0=2,xl=3,w0=4,S0=5,T0=6,E0=7,Vo=0,A0=1,C0=2,Gn=0,P0=1,L0=2,R0=3,D0=4,I0=5,vd=300,yr=301,Mr=302,So=303,yl=304,Go=306,us=1e3,jt=1001,Ml=1002,Mt=1003,xu=1004,ha=1005,Jt=1006,F0=1007,hs=1008,Di=1009,O0=1010,N0=1011,xd=1012,z0=1013,Ai=1014,ni=1015,fs=1016,U0=1017,B0=1018,dr=1020,k0=1021,en=1023,V0=1024,G0=1025,Li=1026,br=1027,H0=1028,W0=1029,X0=1030,j0=1031,q0=1033,fa=33776,da=33777,pa=33778,ma=33779,yu=35840,Mu=35841,bu=35842,wu=35843,Y0=36196,Su=37492,Tu=37496,Eu=37808,Au=37809,Cu=37810,Pu=37811,Lu=37812,Ru=37813,Du=37814,Iu=37815,Fu=37816,Ou=37817,Nu=37818,zu=37819,Uu=37820,Bu=37821,ga=36492,$0=36283,ku=36284,Vu=36285,Gu=36286,To=2300,Eo=2301,_a=2302,Hu=2400,Wu=2401,Xu=2402,K0=2500,Ii=3e3,Je=3001,Z0=3200,J0=3201,nc=0,Q0=1,xn="srgb",ds="srgb-linear",va=7680,ev=519,ju=35044,qu="300 es",bl=1035;class Ni{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const r=n.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const Et=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Yu=1234567;const pr=Math.PI/180,ps=180/Math.PI;function Xn(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Et[i&255]+Et[i>>8&255]+Et[i>>16&255]+Et[i>>24&255]+"-"+Et[e&255]+Et[e>>8&255]+"-"+Et[e>>16&15|64]+Et[e>>24&255]+"-"+Et[t&63|128]+Et[t>>8&255]+"-"+Et[t>>16&255]+Et[t>>24&255]+Et[n&255]+Et[n>>8&255]+Et[n>>16&255]+Et[n>>24&255]).toLowerCase()}function bt(i,e,t){return Math.max(e,Math.min(t,i))}function ic(i,e){return(i%e+e)%e}function tv(i,e,t,n,r){return n+(i-e)*(r-n)/(t-e)}function nv(i,e,t){return i!==e?(t-i)/(e-i):0}function Qr(i,e,t){return(1-t)*i+t*e}function iv(i,e,t,n){return Qr(i,e,1-Math.exp(-t*n))}function rv(i,e=1){return e-Math.abs(ic(i,e*2)-e)}function sv(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function ov(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function av(i,e){return i+Math.floor(Math.random()*(e-i+1))}function lv(i,e){return i+Math.random()*(e-i)}function cv(i){return i*(.5-Math.random())}function uv(i){i!==void 0&&(Yu=i);let e=Yu+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function hv(i){return i*pr}function fv(i){return i*ps}function wl(i){return(i&i-1)===0&&i!==0}function yd(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function Ao(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function dv(i,e,t,n,r){const s=Math.cos,o=Math.sin,a=s(t/2),l=o(t/2),c=s((e+n)/2),u=o((e+n)/2),h=s((e-n)/2),f=o((e-n)/2),d=s((n-e)/2),g=o((n-e)/2);switch(r){case"XYX":i.set(a*u,l*h,l*f,a*c);break;case"YZY":i.set(l*f,a*u,l*h,a*c);break;case"ZXZ":i.set(l*h,l*f,a*u,a*c);break;case"XZX":i.set(a*u,l*g,l*d,a*c);break;case"YXY":i.set(l*d,a*u,l*g,a*c);break;case"ZYZ":i.set(l*g,l*d,a*u,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function Wr(i,e){switch(e.constructor){case Float32Array:return i;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function Nt(i,e){switch(e.constructor){case Float32Array:return i;case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}var Sn=Object.freeze({__proto__:null,DEG2RAD:pr,RAD2DEG:ps,ceilPowerOfTwo:yd,clamp:bt,damp:iv,degToRad:hv,denormalize:Wr,euclideanModulo:ic,floorPowerOfTwo:Ao,generateUUID:Xn,inverseLerp:nv,isPowerOfTwo:wl,lerp:Qr,mapLinear:tv,normalize:Nt,pingpong:rv,radToDeg:fv,randFloat:lv,randFloatSpread:cv,randInt:av,seededRandom:uv,setQuaternionFromProperEuler:dv,smootherstep:ov,smoothstep:sv});class ye{constructor(e=0,t=0){ye.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6],this.y=r[1]*t+r[4]*n+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),r=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*n-o*r+e.x,this.y=s*r+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class kt{constructor(){kt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1]}set(e,t,n,r,s,o,a,l,c){const u=this.elements;return u[0]=e,u[1]=r,u[2]=a,u[3]=t,u[4]=s,u[5]=l,u[6]=n,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,s=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],u=n[4],h=n[7],f=n[2],d=n[5],g=n[8],p=r[0],m=r[3],_=r[6],b=r[1],v=r[4],w=r[7],S=r[2],P=r[5],I=r[8];return s[0]=o*p+a*b+l*S,s[3]=o*m+a*v+l*P,s[6]=o*_+a*w+l*I,s[1]=c*p+u*b+h*S,s[4]=c*m+u*v+h*P,s[7]=c*_+u*w+h*I,s[2]=f*p+d*b+g*S,s[5]=f*m+d*v+g*P,s[8]=f*_+d*w+g*I,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return t*o*u-t*a*c-n*s*u+n*a*l+r*s*c-r*o*l}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],h=u*o-a*c,f=a*l-u*s,d=c*s-o*l,g=t*h+n*f+r*d;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const p=1/g;return e[0]=h*p,e[1]=(r*c-u*n)*p,e[2]=(a*n-r*o)*p,e[3]=f*p,e[4]=(u*t-r*l)*p,e[5]=(r*s-a*t)*p,e[6]=d*p,e[7]=(n*l-c*t)*p,e[8]=(o*t-n*s)*p,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,r,s,o,a){const l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*o+c*a)+o+e,-r*c,r*l,-r*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(xa.makeScale(e,t)),this}rotate(e){return this.premultiply(xa.makeRotation(-e)),this}translate(e,t){return this.premultiply(xa.makeTranslation(e,t)),this}makeTranslation(e,t){return this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<9;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const xa=new kt;function Md(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function ms(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Ri(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function mo(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}const ya={[xn]:{[ds]:Ri},[ds]:{[xn]:mo}},Dt={legacyMode:!0,get workingColorSpace(){return ds},set workingColorSpace(i){console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")},convert:function(i,e,t){if(this.legacyMode||e===t||!e||!t)return i;if(ya[e]&&ya[e][t]!==void 0){const n=ya[e][t];return i.r=n(i.r),i.g=n(i.g),i.b=n(i.b),i}throw new Error("Unsupported color space conversion.")},fromWorkingColorSpace:function(i,e){return this.convert(i,this.workingColorSpace,e)},toWorkingColorSpace:function(i,e){return this.convert(i,e,this.workingColorSpace)}},bd={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},dt={r:0,g:0,b:0},ln={h:0,s:0,l:0},Fs={h:0,s:0,l:0};function Ma(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}function Os(i,e){return e.r=i.r,e.g=i.g,e.b=i.b,e}class Re{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,t===void 0&&n===void 0?this.set(e):this.setRGB(e,t,n)}set(e){return e&&e.isColor?this.copy(e):typeof e=="number"?this.setHex(e):typeof e=="string"&&this.setStyle(e),this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=xn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Dt.toWorkingColorSpace(this,t),this}setRGB(e,t,n,r=Dt.workingColorSpace){return this.r=e,this.g=t,this.b=n,Dt.toWorkingColorSpace(this,r),this}setHSL(e,t,n,r=Dt.workingColorSpace){if(e=ic(e,1),t=bt(t,0,1),n=bt(n,0,1),t===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+t):n+t-n*t,o=2*n-s;this.r=Ma(o,s,e+1/3),this.g=Ma(o,s,e),this.b=Ma(o,s,e-1/3)}return Dt.toWorkingColorSpace(this,r),this}setStyle(e,t=xn){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^((?:rgb|hsl)a?)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return this.r=Math.min(255,parseInt(s[1],10))/255,this.g=Math.min(255,parseInt(s[2],10))/255,this.b=Math.min(255,parseInt(s[3],10))/255,Dt.toWorkingColorSpace(this,t),n(s[4]),this;if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return this.r=Math.min(100,parseInt(s[1],10))/100,this.g=Math.min(100,parseInt(s[2],10))/100,this.b=Math.min(100,parseInt(s[3],10))/100,Dt.toWorkingColorSpace(this,t),n(s[4]),this;break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a)){const l=parseFloat(s[1])/360,c=parseFloat(s[2])/100,u=parseFloat(s[3])/100;return n(s[4]),this.setHSL(l,c,u,t)}break}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.r=parseInt(s.charAt(0)+s.charAt(0),16)/255,this.g=parseInt(s.charAt(1)+s.charAt(1),16)/255,this.b=parseInt(s.charAt(2)+s.charAt(2),16)/255,Dt.toWorkingColorSpace(this,t),this;if(o===6)return this.r=parseInt(s.charAt(0)+s.charAt(1),16)/255,this.g=parseInt(s.charAt(2)+s.charAt(3),16)/255,this.b=parseInt(s.charAt(4)+s.charAt(5),16)/255,Dt.toWorkingColorSpace(this,t),this}return e&&e.length>0?this.setColorName(e,t):this}setColorName(e,t=xn){const n=bd[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ri(e.r),this.g=Ri(e.g),this.b=Ri(e.b),this}copyLinearToSRGB(e){return this.r=mo(e.r),this.g=mo(e.g),this.b=mo(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=xn){return Dt.fromWorkingColorSpace(Os(this,dt),e),bt(dt.r*255,0,255)<<16^bt(dt.g*255,0,255)<<8^bt(dt.b*255,0,255)<<0}getHexString(e=xn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Dt.workingColorSpace){Dt.fromWorkingColorSpace(Os(this,dt),t);const n=dt.r,r=dt.g,s=dt.b,o=Math.max(n,r,s),a=Math.min(n,r,s);let l,c;const u=(a+o)/2;if(a===o)l=0,c=0;else{const h=o-a;switch(c=u<=.5?h/(o+a):h/(2-o-a),o){case n:l=(r-s)/h+(r<s?6:0);break;case r:l=(s-n)/h+2;break;case s:l=(n-r)/h+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=Dt.workingColorSpace){return Dt.fromWorkingColorSpace(Os(this,dt),t),e.r=dt.r,e.g=dt.g,e.b=dt.b,e}getStyle(e=xn){return Dt.fromWorkingColorSpace(Os(this,dt),e),e!==xn?`color(${e} ${dt.r} ${dt.g} ${dt.b})`:`rgb(${dt.r*255|0},${dt.g*255|0},${dt.b*255|0})`}offsetHSL(e,t,n){return this.getHSL(ln),ln.h+=e,ln.s+=t,ln.l+=n,this.setHSL(ln.h,ln.s,ln.l),this}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(ln),e.getHSL(Fs);const n=Qr(ln.h,Fs.h,t),r=Qr(ln.s,Fs.s,t),s=Qr(ln.l,Fs.l,t);return this.setHSL(n,r,s),this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}Re.NAMES=bd;let ki;class wd{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{ki===void 0&&(ki=ms("canvas")),ki.width=e.width,ki.height=e.height;const n=ki.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=ki}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=ms("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const r=n.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=Ri(s[o]/255)*255;return n.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Ri(t[n]/255)*255):t[n]=Ri(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}class Sd{constructor(e=null){this.isSource=!0,this.uuid=Xn(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(ba(r[o].image)):s.push(ba(r[o]))}else s=ba(r);n.url=s}return t||(e.images[this.uuid]=n),n}}function ba(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?wd.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let pv=0;class wt extends Ni{constructor(e=wt.DEFAULT_IMAGE,t=wt.DEFAULT_MAPPING,n=jt,r=jt,s=Jt,o=hs,a=en,l=Di,c=wt.DEFAULT_ANISOTROPY,u=Ii){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:pv++}),this.uuid=Xn(),this.name="",this.source=new Sd(e),this.mipmaps=[],this.mapping=t,this.wrapS=n,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new ye(0,0),this.repeat=new ye(1,1),this.center=new ye(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new kt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.encoding=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.encoding=e.encoding,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.5,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,type:this.type,encoding:this.encoding,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==vd)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case us:e.x=e.x-Math.floor(e.x);break;case jt:e.x=e.x<0?0:1;break;case Ml:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case us:e.y=e.y-Math.floor(e.y);break;case jt:e.y=e.y<0?0:1;break;case Ml:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}}wt.DEFAULT_IMAGE=null;wt.DEFAULT_MAPPING=vd;wt.DEFAULT_ANISOTROPY=1;class Ke{constructor(e=0,t=0,n=0,r=1){Ke.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,r){return this.x=e,this.y=t,this.z=n,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*r+o[12]*s,this.y=o[1]*t+o[5]*n+o[9]*r+o[13]*s,this.z=o[2]*t+o[6]*n+o[10]*r+o[14]*s,this.w=o[3]*t+o[7]*n+o[11]*r+o[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,r,s;const l=e.elements,c=l[0],u=l[4],h=l[8],f=l[1],d=l[5],g=l[9],p=l[2],m=l[6],_=l[10];if(Math.abs(u-f)<.01&&Math.abs(h-p)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+f)<.1&&Math.abs(h+p)<.1&&Math.abs(g+m)<.1&&Math.abs(c+d+_-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const v=(c+1)/2,w=(d+1)/2,S=(_+1)/2,P=(u+f)/4,I=(h+p)/4,x=(g+m)/4;return v>w&&v>S?v<.01?(n=0,r=.707106781,s=.707106781):(n=Math.sqrt(v),r=P/n,s=I/n):w>S?w<.01?(n=.707106781,r=0,s=.707106781):(r=Math.sqrt(w),n=P/r,s=x/r):S<.01?(n=.707106781,r=.707106781,s=0):(s=Math.sqrt(S),n=I/s,r=x/s),this.set(n,r,s,t),this}let b=Math.sqrt((m-g)*(m-g)+(h-p)*(h-p)+(f-u)*(f-u));return Math.abs(b)<.001&&(b=1),this.x=(m-g)/b,this.y=(h-p)/b,this.z=(f-u)/b,this.w=Math.acos((c+d+_-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Fi extends Ni{constructor(e=1,t=1,n={}){super(),this.isWebGLRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new Ke(0,0,e,t),this.scissorTest=!1,this.viewport=new Ke(0,0,e,t);const r={width:e,height:t,depth:1};this.texture=new wt(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.encoding),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.internalFormat=n.internalFormat!==void 0?n.internalFormat:null,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:Jt,this.depthBuffer=n.depthBuffer!==void 0?n.depthBuffer:!0,this.stencilBuffer=n.stencilBuffer!==void 0?n.stencilBuffer:!1,this.depthTexture=n.depthTexture!==void 0?n.depthTexture:null,this.samples=n.samples!==void 0?n.samples:0}setSize(e,t,n=1){(this.width!==e||this.height!==t||this.depth!==n)&&(this.width=e,this.height=t,this.depth=n,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new Sd(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Td extends wt{constructor(e=null,t=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=Mt,this.minFilter=Mt,this.wrapR=jt,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class mv extends wt{constructor(e=null,t=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=Mt,this.minFilter=Mt,this.wrapR=jt,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class sn{constructor(e=0,t=0,n=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=r}static slerpFlat(e,t,n,r,s,o,a){let l=n[r+0],c=n[r+1],u=n[r+2],h=n[r+3];const f=s[o+0],d=s[o+1],g=s[o+2],p=s[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h;return}if(a===1){e[t+0]=f,e[t+1]=d,e[t+2]=g,e[t+3]=p;return}if(h!==p||l!==f||c!==d||u!==g){let m=1-a;const _=l*f+c*d+u*g+h*p,b=_>=0?1:-1,v=1-_*_;if(v>Number.EPSILON){const S=Math.sqrt(v),P=Math.atan2(S,_*b);m=Math.sin(m*P)/S,a=Math.sin(a*P)/S}const w=a*b;if(l=l*m+f*w,c=c*m+d*w,u=u*m+g*w,h=h*m+p*w,m===1-a){const S=1/Math.sqrt(l*l+c*c+u*u+h*h);l*=S,c*=S,u*=S,h*=S}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h}static multiplyQuaternionsFlat(e,t,n,r,s,o){const a=n[r],l=n[r+1],c=n[r+2],u=n[r+3],h=s[o],f=s[o+1],d=s[o+2],g=s[o+3];return e[t]=a*g+u*h+l*d-c*f,e[t+1]=l*g+u*f+c*h-a*d,e[t+2]=c*g+u*d+a*f-l*h,e[t+3]=u*g-a*h-l*f-c*d,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,r){return this._x=e,this._y=t,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t){const n=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(n/2),u=a(r/2),h=a(s/2),f=l(n/2),d=l(r/2),g=l(s/2);switch(o){case"XYZ":this._x=f*u*h+c*d*g,this._y=c*d*h-f*u*g,this._z=c*u*g+f*d*h,this._w=c*u*h-f*d*g;break;case"YXZ":this._x=f*u*h+c*d*g,this._y=c*d*h-f*u*g,this._z=c*u*g-f*d*h,this._w=c*u*h+f*d*g;break;case"ZXY":this._x=f*u*h-c*d*g,this._y=c*d*h+f*u*g,this._z=c*u*g+f*d*h,this._w=c*u*h-f*d*g;break;case"ZYX":this._x=f*u*h-c*d*g,this._y=c*d*h+f*u*g,this._z=c*u*g-f*d*h,this._w=c*u*h+f*d*g;break;case"YZX":this._x=f*u*h+c*d*g,this._y=c*d*h+f*u*g,this._z=c*u*g-f*d*h,this._w=c*u*h-f*d*g;break;case"XZY":this._x=f*u*h-c*d*g,this._y=c*d*h-f*u*g,this._z=c*u*g+f*d*h,this._w=c*u*h+f*d*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,r=Math.sin(n);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],r=t[4],s=t[8],o=t[1],a=t[5],l=t[9],c=t[2],u=t[6],h=t[10],f=n+a+h;if(f>0){const d=.5/Math.sqrt(f+1);this._w=.25/d,this._x=(u-l)*d,this._y=(s-c)*d,this._z=(o-r)*d}else if(n>a&&n>h){const d=2*Math.sqrt(1+n-a-h);this._w=(u-l)/d,this._x=.25*d,this._y=(r+o)/d,this._z=(s+c)/d}else if(a>h){const d=2*Math.sqrt(1+a-n-h);this._w=(s-c)/d,this._x=(r+o)/d,this._y=.25*d,this._z=(l+u)/d}else{const d=2*Math.sqrt(1+h-n-a);this._w=(o-r)/d,this._x=(s+c)/d,this._y=(l+u)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(bt(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const r=Math.min(1,t/n);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,r=e._y,s=e._z,o=e._w,a=t._x,l=t._y,c=t._z,u=t._w;return this._x=n*u+o*a+r*c-s*l,this._y=r*u+o*l+s*a-n*c,this._z=s*u+o*c+n*l-r*a,this._w=o*u-n*a-r*l-s*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,r=this._y,s=this._z,o=this._w;let a=o*e._w+n*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=n,this._y=r,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const d=1-t;return this._w=d*o+t*this._w,this._x=d*n+t*this._x,this._y=d*r+t*this._y,this._z=d*s+t*this._z,this.normalize(),this._onChangeCallback(),this}const c=Math.sqrt(l),u=Math.atan2(c,a),h=Math.sin((1-t)*u)/c,f=Math.sin(t*u)/c;return this._w=o*h+this._w*f,this._x=n*h+this._x*f,this._y=r*h+this._y*f,this._z=s*h+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=Math.random(),t=Math.sqrt(1-e),n=Math.sqrt(e),r=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(t*Math.cos(r),n*Math.sin(s),n*Math.cos(s),t*Math.sin(r))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class D{constructor(e=0,t=0,n=0){D.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion($u.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion($u.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*r,this.y=s[1]*t+s[4]*n+s[7]*r,this.z=s[2]*t+s[5]*n+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,s=e.elements,o=1/(s[3]*t+s[7]*n+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*r+s[12])*o,this.y=(s[1]*t+s[5]*n+s[9]*r+s[13])*o,this.z=(s[2]*t+s[6]*n+s[10]*r+s[14])*o,this}applyQuaternion(e){const t=this.x,n=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,c=l*t+o*r-a*n,u=l*n+a*t-s*r,h=l*r+s*n-o*t,f=-s*t-o*n-a*r;return this.x=c*l+f*-s+u*-a-h*-o,this.y=u*l+f*-o+h*-s-c*-a,this.z=h*l+f*-a+c*-o-u*-s,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*r,this.y=s[1]*t+s[5]*n+s[9]*r,this.z=s[2]*t+s[6]*n+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,r=e.y,s=e.z,o=t.x,a=t.y,l=t.z;return this.x=r*l-s*a,this.y=s*o-n*l,this.z=n*a-r*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return wa.copy(this).projectOnVector(e),this.sub(wa)}reflect(e){return this.sub(wa.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(bt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,r=this.z-e.z;return t*t+n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const r=Math.sin(t)*e;return this.x=r*Math.sin(n),this.y=Math.cos(t)*e,this.z=r*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,n=Math.sqrt(1-e**2);return this.x=n*Math.cos(t),this.y=n*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const wa=new D,$u=new sn;class bs{constructor(e=new D(1/0,1/0,1/0),t=new D(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){let t=1/0,n=1/0,r=1/0,s=-1/0,o=-1/0,a=-1/0;for(let l=0,c=e.length;l<c;l+=3){const u=e[l],h=e[l+1],f=e[l+2];u<t&&(t=u),h<n&&(n=h),f<r&&(r=f),u>s&&(s=u),h>o&&(o=h),f>a&&(a=f)}return this.min.set(t,n,r),this.max.set(s,o,a),this}setFromBufferAttribute(e){let t=1/0,n=1/0,r=1/0,s=-1/0,o=-1/0,a=-1/0;for(let l=0,c=e.count;l<c;l++){const u=e.getX(l),h=e.getY(l),f=e.getZ(l);u<t&&(t=u),h<n&&(n=h),f<r&&(r=f),u>s&&(s=u),h>o&&(o=h),f>a&&(a=f)}return this.min.set(t,n,r),this.max.set(s,o,a),this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=_i.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0)if(t&&n.attributes!=null&&n.attributes.position!==void 0){const s=n.attributes.position;for(let o=0,a=s.count;o<a;o++)_i.fromBufferAttribute(s,o).applyMatrix4(e.matrixWorld),this.expandByPoint(_i)}else n.boundingBox===null&&n.computeBoundingBox(),Sa.copy(n.boundingBox),Sa.applyMatrix4(e.matrixWorld),this.union(Sa);const r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,_i),_i.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Fr),Ns.subVectors(this.max,Fr),Vi.subVectors(e.a,Fr),Gi.subVectors(e.b,Fr),Hi.subVectors(e.c,Fr),Yn.subVectors(Gi,Vi),$n.subVectors(Hi,Gi),vi.subVectors(Vi,Hi);let t=[0,-Yn.z,Yn.y,0,-$n.z,$n.y,0,-vi.z,vi.y,Yn.z,0,-Yn.x,$n.z,0,-$n.x,vi.z,0,-vi.x,-Yn.y,Yn.x,0,-$n.y,$n.x,0,-vi.y,vi.x,0];return!Ta(t,Vi,Gi,Hi,Ns)||(t=[1,0,0,0,1,0,0,0,1],!Ta(t,Vi,Gi,Hi,Ns))?!1:(zs.crossVectors(Yn,$n),t=[zs.x,zs.y,zs.z],Ta(t,Vi,Gi,Hi,Ns))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return _i.copy(e).clamp(this.min,this.max).sub(e).length()}getBoundingSphere(e){return this.getCenter(e.center),e.radius=this.getSize(_i).length()*.5,e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(In[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),In[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),In[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),In[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),In[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),In[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),In[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),In[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(In),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const In=[new D,new D,new D,new D,new D,new D,new D,new D],_i=new D,Sa=new bs,Vi=new D,Gi=new D,Hi=new D,Yn=new D,$n=new D,vi=new D,Fr=new D,Ns=new D,zs=new D,xi=new D;function Ta(i,e,t,n,r){for(let s=0,o=i.length-3;s<=o;s+=3){xi.fromArray(i,s);const a=r.x*Math.abs(xi.x)+r.y*Math.abs(xi.y)+r.z*Math.abs(xi.z),l=e.dot(xi),c=t.dot(xi),u=n.dot(xi);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const gv=new bs,Or=new D,Ea=new D;class ws{constructor(e=new D,t=-1){this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):gv.setFromPoints(e).getCenter(n);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Or.subVectors(e,this.center);const t=Or.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),r=(n-this.radius)*.5;this.center.addScaledVector(Or,r/n),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Ea.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Or.copy(e.center).add(Ea)),this.expandByPoint(Or.copy(e.center).sub(Ea))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Fn=new D,Aa=new D,Us=new D,Kn=new D,Ca=new D,Bs=new D,Pa=new D;class Ho{constructor(e=new D,t=new D(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.direction).multiplyScalar(e).add(this.origin)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Fn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.direction).multiplyScalar(n).add(this.origin)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Fn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Fn.copy(this.direction).multiplyScalar(t).add(this.origin),Fn.distanceToSquared(e))}distanceSqToSegment(e,t,n,r){Aa.copy(e).add(t).multiplyScalar(.5),Us.copy(t).sub(e).normalize(),Kn.copy(this.origin).sub(Aa);const s=e.distanceTo(t)*.5,o=-this.direction.dot(Us),a=Kn.dot(this.direction),l=-Kn.dot(Us),c=Kn.lengthSq(),u=Math.abs(1-o*o);let h,f,d,g;if(u>0)if(h=o*l-a,f=o*a-l,g=s*u,h>=0)if(f>=-g)if(f<=g){const p=1/u;h*=p,f*=p,d=h*(h+o*f+2*a)+f*(o*h+f+2*l)+c}else f=s,h=Math.max(0,-(o*f+a)),d=-h*h+f*(f+2*l)+c;else f=-s,h=Math.max(0,-(o*f+a)),d=-h*h+f*(f+2*l)+c;else f<=-g?(h=Math.max(0,-(-o*s+a)),f=h>0?-s:Math.min(Math.max(-s,-l),s),d=-h*h+f*(f+2*l)+c):f<=g?(h=0,f=Math.min(Math.max(-s,-l),s),d=f*(f+2*l)+c):(h=Math.max(0,-(o*s+a)),f=h>0?s:Math.min(Math.max(-s,-l),s),d=-h*h+f*(f+2*l)+c);else f=o>0?-s:s,h=Math.max(0,-(o*f+a)),d=-h*h+f*(f+2*l)+c;return n&&n.copy(this.direction).multiplyScalar(h).add(this.origin),r&&r.copy(Us).multiplyScalar(f).add(Aa),d}intersectSphere(e,t){Fn.subVectors(e.center,this.origin);const n=Fn.dot(this.direction),r=Fn.dot(Fn)-n*n,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=n-o,l=n+o;return a<0&&l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,r,s,o,a,l;const c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,f=this.origin;return c>=0?(n=(e.min.x-f.x)*c,r=(e.max.x-f.x)*c):(n=(e.max.x-f.x)*c,r=(e.min.x-f.x)*c),u>=0?(s=(e.min.y-f.y)*u,o=(e.max.y-f.y)*u):(s=(e.max.y-f.y)*u,o=(e.min.y-f.y)*u),n>o||s>r||((s>n||isNaN(n))&&(n=s),(o<r||isNaN(r))&&(r=o),h>=0?(a=(e.min.z-f.z)*h,l=(e.max.z-f.z)*h):(a=(e.max.z-f.z)*h,l=(e.min.z-f.z)*h),n>l||a>r)||((a>n||n!==n)&&(n=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(n>=0?n:r,t)}intersectsBox(e){return this.intersectBox(e,Fn)!==null}intersectTriangle(e,t,n,r,s){Ca.subVectors(t,e),Bs.subVectors(n,e),Pa.crossVectors(Ca,Bs);let o=this.direction.dot(Pa),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Kn.subVectors(this.origin,e);const l=a*this.direction.dot(Bs.crossVectors(Kn,Bs));if(l<0)return null;const c=a*this.direction.dot(Ca.cross(Kn));if(c<0||l+c>o)return null;const u=-a*Kn.dot(Pa);return u<0?null:this.at(u/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class De{constructor(){De.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]}set(e,t,n,r,s,o,a,l,c,u,h,f,d,g,p,m){const _=this.elements;return _[0]=e,_[4]=t,_[8]=n,_[12]=r,_[1]=s,_[5]=o,_[9]=a,_[13]=l,_[2]=c,_[6]=u,_[10]=h,_[14]=f,_[3]=d,_[7]=g,_[11]=p,_[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new De().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,r=1/Wi.setFromMatrixColumn(e,0).length(),s=1/Wi.setFromMatrixColumn(e,1).length(),o=1/Wi.setFromMatrixColumn(e,2).length();return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,r=e.y,s=e.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(r),c=Math.sin(r),u=Math.cos(s),h=Math.sin(s);if(e.order==="XYZ"){const f=o*u,d=o*h,g=a*u,p=a*h;t[0]=l*u,t[4]=-l*h,t[8]=c,t[1]=d+g*c,t[5]=f-p*c,t[9]=-a*l,t[2]=p-f*c,t[6]=g+d*c,t[10]=o*l}else if(e.order==="YXZ"){const f=l*u,d=l*h,g=c*u,p=c*h;t[0]=f+p*a,t[4]=g*a-d,t[8]=o*c,t[1]=o*h,t[5]=o*u,t[9]=-a,t[2]=d*a-g,t[6]=p+f*a,t[10]=o*l}else if(e.order==="ZXY"){const f=l*u,d=l*h,g=c*u,p=c*h;t[0]=f-p*a,t[4]=-o*h,t[8]=g+d*a,t[1]=d+g*a,t[5]=o*u,t[9]=p-f*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const f=o*u,d=o*h,g=a*u,p=a*h;t[0]=l*u,t[4]=g*c-d,t[8]=f*c+p,t[1]=l*h,t[5]=p*c+f,t[9]=d*c-g,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const f=o*l,d=o*c,g=a*l,p=a*c;t[0]=l*u,t[4]=p-f*h,t[8]=g*h+d,t[1]=h,t[5]=o*u,t[9]=-a*u,t[2]=-c*u,t[6]=d*h+g,t[10]=f-p*h}else if(e.order==="XZY"){const f=o*l,d=o*c,g=a*l,p=a*c;t[0]=l*u,t[4]=-h,t[8]=c*u,t[1]=f*h+p,t[5]=o*u,t[9]=d*h-g,t[2]=g*h-d,t[6]=a*u,t[10]=p*h+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(_v,e,vv)}lookAt(e,t,n){const r=this.elements;return Wt.subVectors(e,t),Wt.lengthSq()===0&&(Wt.z=1),Wt.normalize(),Zn.crossVectors(n,Wt),Zn.lengthSq()===0&&(Math.abs(n.z)===1?Wt.x+=1e-4:Wt.z+=1e-4,Wt.normalize(),Zn.crossVectors(n,Wt)),Zn.normalize(),ks.crossVectors(Wt,Zn),r[0]=Zn.x,r[4]=ks.x,r[8]=Wt.x,r[1]=Zn.y,r[5]=ks.y,r[9]=Wt.y,r[2]=Zn.z,r[6]=ks.z,r[10]=Wt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,s=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],u=n[1],h=n[5],f=n[9],d=n[13],g=n[2],p=n[6],m=n[10],_=n[14],b=n[3],v=n[7],w=n[11],S=n[15],P=r[0],I=r[4],x=r[8],A=r[12],R=r[1],j=r[5],Q=r[9],B=r[13],N=r[2],J=r[6],K=r[10],ie=r[14],Y=r[3],fe=r[7],de=r[11],xe=r[15];return s[0]=o*P+a*R+l*N+c*Y,s[4]=o*I+a*j+l*J+c*fe,s[8]=o*x+a*Q+l*K+c*de,s[12]=o*A+a*B+l*ie+c*xe,s[1]=u*P+h*R+f*N+d*Y,s[5]=u*I+h*j+f*J+d*fe,s[9]=u*x+h*Q+f*K+d*de,s[13]=u*A+h*B+f*ie+d*xe,s[2]=g*P+p*R+m*N+_*Y,s[6]=g*I+p*j+m*J+_*fe,s[10]=g*x+p*Q+m*K+_*de,s[14]=g*A+p*B+m*ie+_*xe,s[3]=b*P+v*R+w*N+S*Y,s[7]=b*I+v*j+w*J+S*fe,s[11]=b*x+v*Q+w*K+S*de,s[15]=b*A+v*B+w*ie+S*xe,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],h=e[6],f=e[10],d=e[14],g=e[3],p=e[7],m=e[11],_=e[15];return g*(+s*l*h-r*c*h-s*a*f+n*c*f+r*a*d-n*l*d)+p*(+t*l*d-t*c*f+s*o*f-r*o*d+r*c*u-s*l*u)+m*(+t*c*h-t*a*d-s*o*h+n*o*d+s*a*u-n*c*u)+_*(-r*a*u-t*l*h+t*a*f+r*o*h-n*o*f+n*l*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],h=e[9],f=e[10],d=e[11],g=e[12],p=e[13],m=e[14],_=e[15],b=h*m*c-p*f*c+p*l*d-a*m*d-h*l*_+a*f*_,v=g*f*c-u*m*c-g*l*d+o*m*d+u*l*_-o*f*_,w=u*p*c-g*h*c+g*a*d-o*p*d-u*a*_+o*h*_,S=g*h*l-u*p*l-g*a*f+o*p*f+u*a*m-o*h*m,P=t*b+n*v+r*w+s*S;if(P===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const I=1/P;return e[0]=b*I,e[1]=(p*f*s-h*m*s-p*r*d+n*m*d+h*r*_-n*f*_)*I,e[2]=(a*m*s-p*l*s+p*r*c-n*m*c-a*r*_+n*l*_)*I,e[3]=(h*l*s-a*f*s-h*r*c+n*f*c+a*r*d-n*l*d)*I,e[4]=v*I,e[5]=(u*m*s-g*f*s+g*r*d-t*m*d-u*r*_+t*f*_)*I,e[6]=(g*l*s-o*m*s-g*r*c+t*m*c+o*r*_-t*l*_)*I,e[7]=(o*f*s-u*l*s+u*r*c-t*f*c-o*r*d+t*l*d)*I,e[8]=w*I,e[9]=(g*h*s-u*p*s-g*n*d+t*p*d+u*n*_-t*h*_)*I,e[10]=(o*p*s-g*a*s+g*n*c-t*p*c-o*n*_+t*a*_)*I,e[11]=(u*a*s-o*h*s-u*n*c+t*h*c+o*n*d-t*a*d)*I,e[12]=S*I,e[13]=(u*p*r-g*h*r+g*n*f-t*p*f-u*n*m+t*h*m)*I,e[14]=(g*a*r-o*p*r-g*n*l+t*p*l+o*n*m-t*a*m)*I,e[15]=(o*h*r-u*a*r+u*n*l-t*h*l-o*n*f+t*a*f)*I,this}scale(e){const t=this.elements,n=e.x,r=e.y,s=e.z;return t[0]*=n,t[4]*=r,t[8]*=s,t[1]*=n,t[5]*=r,t[9]*=s,t[2]*=n,t[6]*=r,t[10]*=s,t[3]*=n,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,r))}makeTranslation(e,t,n){return this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),r=Math.sin(t),s=1-n,o=e.x,a=e.y,l=e.z,c=s*o,u=s*a;return this.set(c*o+n,c*a-r*l,c*l+r*a,0,c*a+r*l,u*a+n,u*l-r*o,0,c*l-r*a,u*l+r*o,s*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,r,s,o){return this.set(1,n,s,0,e,1,o,0,t,r,1,0,0,0,0,1),this}compose(e,t,n){const r=this.elements,s=t._x,o=t._y,a=t._z,l=t._w,c=s+s,u=o+o,h=a+a,f=s*c,d=s*u,g=s*h,p=o*u,m=o*h,_=a*h,b=l*c,v=l*u,w=l*h,S=n.x,P=n.y,I=n.z;return r[0]=(1-(p+_))*S,r[1]=(d+w)*S,r[2]=(g-v)*S,r[3]=0,r[4]=(d-w)*P,r[5]=(1-(f+_))*P,r[6]=(m+b)*P,r[7]=0,r[8]=(g+v)*I,r[9]=(m-b)*I,r[10]=(1-(f+p))*I,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,n){const r=this.elements;let s=Wi.set(r[0],r[1],r[2]).length();const o=Wi.set(r[4],r[5],r[6]).length(),a=Wi.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],cn.copy(this);const c=1/s,u=1/o,h=1/a;return cn.elements[0]*=c,cn.elements[1]*=c,cn.elements[2]*=c,cn.elements[4]*=u,cn.elements[5]*=u,cn.elements[6]*=u,cn.elements[8]*=h,cn.elements[9]*=h,cn.elements[10]*=h,t.setFromRotationMatrix(cn),n.x=s,n.y=o,n.z=a,this}makePerspective(e,t,n,r,s,o){const a=this.elements,l=2*s/(t-e),c=2*s/(n-r),u=(t+e)/(t-e),h=(n+r)/(n-r),f=-(o+s)/(o-s),d=-2*o*s/(o-s);return a[0]=l,a[4]=0,a[8]=u,a[12]=0,a[1]=0,a[5]=c,a[9]=h,a[13]=0,a[2]=0,a[6]=0,a[10]=f,a[14]=d,a[3]=0,a[7]=0,a[11]=-1,a[15]=0,this}makeOrthographic(e,t,n,r,s,o){const a=this.elements,l=1/(t-e),c=1/(n-r),u=1/(o-s),h=(t+e)*l,f=(n+r)*c,d=(o+s)*u;return a[0]=2*l,a[4]=0,a[8]=0,a[12]=-h,a[1]=0,a[5]=2*c,a[9]=0,a[13]=-f,a[2]=0,a[6]=0,a[10]=-2*u,a[14]=-d,a[3]=0,a[7]=0,a[11]=0,a[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<16;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const Wi=new D,cn=new De,_v=new D(0,0,0),vv=new D(1,1,1),Zn=new D,ks=new D,Wt=new D,Ku=new De,Zu=new sn;class on{constructor(e=0,t=0,n=0,r=on.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,r=this._order){return this._x=e,this._y=t,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],l=r[1],c=r[5],u=r[9],h=r[2],f=r[6],d=r[10];switch(t){case"XYZ":this._y=Math.asin(bt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,d),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-bt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,s),this._z=0);break;case"ZXY":this._x=Math.asin(bt(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-h,d),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-bt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(f,d),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(bt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,s)):(this._x=0,this._y=Math.atan2(a,d));break;case"XZY":this._z=Math.asin(-bt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-u,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Ku.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Ku,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Zu.setFromEuler(this),this.setFromQuaternion(Zu,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}on.DEFAULT_ORDER="XYZ";class rc{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let xv=0;const Ju=new D,Xi=new sn,On=new De,Vs=new D,Nr=new D,yv=new D,Mv=new sn,Qu=new D(1,0,0),eh=new D(0,1,0),th=new D(0,0,1),bv={type:"added"},nh={type:"removed"};class st extends Ni{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:xv++}),this.uuid=Xn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=st.DEFAULT_UP.clone();const e=new D,t=new on,n=new sn,r=new D(1,1,1);function s(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new De},normalMatrix:{value:new kt}}),this.matrix=new De,this.matrixWorld=new De,this.matrixAutoUpdate=st.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=st.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.layers=new rc,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Xi.setFromAxisAngle(e,t),this.quaternion.multiply(Xi),this}rotateOnWorldAxis(e,t){return Xi.setFromAxisAngle(e,t),this.quaternion.premultiply(Xi),this}rotateX(e){return this.rotateOnAxis(Qu,e)}rotateY(e){return this.rotateOnAxis(eh,e)}rotateZ(e){return this.rotateOnAxis(th,e)}translateOnAxis(e,t){return Ju.copy(e).applyQuaternion(this.quaternion),this.position.add(Ju.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Qu,e)}translateY(e){return this.translateOnAxis(eh,e)}translateZ(e){return this.translateOnAxis(th,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(On.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Vs.copy(e):Vs.set(e,t,n);const r=this.parent;this.updateWorldMatrix(!0,!1),Nr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?On.lookAt(Nr,Vs,this.up):On.lookAt(Vs,Nr,this.up),this.quaternion.setFromRotationMatrix(On),r&&(On.extractRotation(r.matrixWorld),Xi.setFromRotationMatrix(On),this.quaternion.premultiply(Xi.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(bv)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(nh)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){for(let e=0;e<this.children.length;e++){const t=this.children[e];t.parent=null,t.dispatchEvent(nh)}return this.children.length=0,this}attach(e){return this.updateWorldMatrix(!0,!1),On.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),On.multiply(e.parent.matrixWorld)),e.applyMatrix4(On),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,r=this.children.length;n<r;n++){const o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t){let n=[];this[e]===t&&n.push(this);for(let r=0,s=this.children.length;r<s;r++){const o=this.children[r].getObjectsByProperty(e,t);o.length>0&&(n=n.concat(o))}return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Nr,e,yv),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Nr,Mv,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,r=t.length;n<r;n++){const s=t[n];(s.matrixWorldAutoUpdate===!0||e===!0)&&s.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++){const a=r[s];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.5,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON()));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const h=l[c];s(e.shapes,h)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(e.materials,this.material[l]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),h=o(e.shapes),f=o(e.skeletons),d=o(e.animations),g=o(e.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),h.length>0&&(n.shapes=h),f.length>0&&(n.skeletons=f),d.length>0&&(n.animations=d),g.length>0&&(n.nodes=g)}return n.object=r,n;function o(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const r=e.children[n];this.add(r.clone())}return this}}st.DEFAULT_UP=new D(0,1,0);st.DEFAULT_MATRIX_AUTO_UPDATE=!0;st.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const un=new D,Nn=new D,La=new D,zn=new D,ji=new D,qi=new D,ih=new D,Ra=new D,Da=new D,Ia=new D;class Tn{constructor(e=new D,t=new D,n=new D){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,r){r.subVectors(n,t),un.subVectors(e,t),r.cross(un);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,n,r,s){un.subVectors(r,t),Nn.subVectors(n,t),La.subVectors(e,t);const o=un.dot(un),a=un.dot(Nn),l=un.dot(La),c=Nn.dot(Nn),u=Nn.dot(La),h=o*c-a*a;if(h===0)return s.set(-2,-1,-1);const f=1/h,d=(c*l-a*u)*f,g=(o*u-a*l)*f;return s.set(1-d-g,g,d)}static containsPoint(e,t,n,r){return this.getBarycoord(e,t,n,r,zn),zn.x>=0&&zn.y>=0&&zn.x+zn.y<=1}static getUV(e,t,n,r,s,o,a,l){return this.getBarycoord(e,t,n,r,zn),l.set(0,0),l.addScaledVector(s,zn.x),l.addScaledVector(o,zn.y),l.addScaledVector(a,zn.z),l}static isFrontFacing(e,t,n,r){return un.subVectors(n,t),Nn.subVectors(e,t),un.cross(Nn).dot(r)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,r){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,n,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return un.subVectors(this.c,this.b),Nn.subVectors(this.a,this.b),un.cross(Nn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Tn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Tn.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,n,r,s){return Tn.getUV(e,this.a,this.b,this.c,t,n,r,s)}containsPoint(e){return Tn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Tn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,r=this.b,s=this.c;let o,a;ji.subVectors(r,n),qi.subVectors(s,n),Ra.subVectors(e,n);const l=ji.dot(Ra),c=qi.dot(Ra);if(l<=0&&c<=0)return t.copy(n);Da.subVectors(e,r);const u=ji.dot(Da),h=qi.dot(Da);if(u>=0&&h<=u)return t.copy(r);const f=l*h-u*c;if(f<=0&&l>=0&&u<=0)return o=l/(l-u),t.copy(n).addScaledVector(ji,o);Ia.subVectors(e,s);const d=ji.dot(Ia),g=qi.dot(Ia);if(g>=0&&d<=g)return t.copy(s);const p=d*c-l*g;if(p<=0&&c>=0&&g<=0)return a=c/(c-g),t.copy(n).addScaledVector(qi,a);const m=u*g-d*h;if(m<=0&&h-u>=0&&d-g>=0)return ih.subVectors(s,r),a=(h-u)/(h-u+(d-g)),t.copy(r).addScaledVector(ih,a);const _=1/(m+p+f);return o=p*_,a=f*_,t.copy(n).addScaledVector(ji,o).addScaledVector(qi,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}let wv=0;class ui extends Ni{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:wv++}),this.uuid=Xn(),this.name="",this.type="Material",this.blending=fr,this.side=ci,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.blendSrc=gd,this.blendDst=_d,this.blendEquation=nr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=xl,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=ev,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=va,this.stencilZFail=va,this.stencilZPass=va,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn("THREE.Material: '"+t+"' parameter is undefined.");continue}const r=this[t];if(r===void 0){console.warn("THREE."+this.type+": '"+t+"' is not a property of this material.");continue}r&&r.isColor?r.set(n):r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.5,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==fr&&(n.blending=this.blending),this.side!==ci&&(n.side=this.side),this.vertexColors&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=this.transparent),n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.stencilWrite=this.stencilWrite,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaToCoverage===!0&&(n.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=this.premultipliedAlpha),this.forceSinglePass===!0&&(n.forceSinglePass=this.forceSinglePass),this.wireframe===!0&&(n.wireframe=this.wireframe),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=this.flatShading),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(t){const s=r(e.textures),o=r(e.images);s.length>0&&(n.textures=s),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const r=t.length;n=new Array(r);for(let s=0;s!==r;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Ss extends ui{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Re(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Vo,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const ft=new D,Gs=new ye;class En{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=ju,this.updateRange={offset:0,count:-1},this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[n+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Gs.fromBufferAttribute(this,t),Gs.applyMatrix3(e),this.setXY(t,Gs.x,Gs.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)ft.fromBufferAttribute(this,t),ft.applyMatrix3(e),this.setXYZ(t,ft.x,ft.y,ft.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)ft.fromBufferAttribute(this,t),ft.applyMatrix4(e),this.setXYZ(t,ft.x,ft.y,ft.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)ft.fromBufferAttribute(this,t),ft.applyNormalMatrix(e),this.setXYZ(t,ft.x,ft.y,ft.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)ft.fromBufferAttribute(this,t),ft.transformDirection(e),this.setXYZ(t,ft.x,ft.y,ft.z);return this}set(e,t=0){return this.array.set(e,t),this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Wr(t,this.array)),t}setX(e,t){return this.normalized&&(t=Nt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Wr(t,this.array)),t}setY(e,t){return this.normalized&&(t=Nt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Wr(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Nt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Wr(t,this.array)),t}setW(e,t){return this.normalized&&(t=Nt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Nt(t,this.array),n=Nt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,r){return e*=this.itemSize,this.normalized&&(t=Nt(t,this.array),n=Nt(n,this.array),r=Nt(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this}setXYZW(e,t,n,r,s){return e*=this.itemSize,this.normalized&&(t=Nt(t,this.array),n=Nt(n,this.array),r=Nt(r,this.array),s=Nt(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==ju&&(e.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(e.updateRange=this.updateRange),e}copyColorsArray(){console.error("THREE.BufferAttribute: copyColorsArray() was removed in r144.")}copyVector2sArray(){console.error("THREE.BufferAttribute: copyVector2sArray() was removed in r144.")}copyVector3sArray(){console.error("THREE.BufferAttribute: copyVector3sArray() was removed in r144.")}copyVector4sArray(){console.error("THREE.BufferAttribute: copyVector4sArray() was removed in r144.")}}class sc extends En{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class Ed extends En{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class tt extends En{constructor(e,t,n){super(new Float32Array(e),t,n)}}let Sv=0;const Zt=new De,Fa=new st,Yi=new D,Xt=new bs,zr=new bs,yt=new D;class mt extends Ni{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Sv++}),this.uuid=Xn(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Md(e)?Ed:sc)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new kt().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Zt.makeRotationFromQuaternion(e),this.applyMatrix4(Zt),this}rotateX(e){return Zt.makeRotationX(e),this.applyMatrix4(Zt),this}rotateY(e){return Zt.makeRotationY(e),this.applyMatrix4(Zt),this}rotateZ(e){return Zt.makeRotationZ(e),this.applyMatrix4(Zt),this}translate(e,t,n){return Zt.makeTranslation(e,t,n),this.applyMatrix4(Zt),this}scale(e,t,n){return Zt.makeScale(e,t,n),this.applyMatrix4(Zt),this}lookAt(e){return Fa.lookAt(e),Fa.updateMatrix(),this.applyMatrix4(Fa.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Yi).negate(),this.translate(Yi.x,Yi.y,Yi.z),this}setFromPoints(e){const t=[];for(let n=0,r=e.length;n<r;n++){const s=e[n];t.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new tt(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new bs);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new D(-1/0,-1/0,-1/0),new D(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,r=t.length;n<r;n++){const s=t[n];Xt.setFromBufferAttribute(s),this.morphTargetsRelative?(yt.addVectors(this.boundingBox.min,Xt.min),this.boundingBox.expandByPoint(yt),yt.addVectors(this.boundingBox.max,Xt.max),this.boundingBox.expandByPoint(yt)):(this.boundingBox.expandByPoint(Xt.min),this.boundingBox.expandByPoint(Xt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ws);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new D,1/0);return}if(e){const n=this.boundingSphere.center;if(Xt.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){const a=t[s];zr.setFromBufferAttribute(a),this.morphTargetsRelative?(yt.addVectors(Xt.min,zr.min),Xt.expandByPoint(yt),yt.addVectors(Xt.max,zr.max),Xt.expandByPoint(yt)):(Xt.expandByPoint(zr.min),Xt.expandByPoint(zr.max))}Xt.getCenter(n);let r=0;for(let s=0,o=e.count;s<o;s++)yt.fromBufferAttribute(e,s),r=Math.max(r,n.distanceToSquared(yt));if(t)for(let s=0,o=t.length;s<o;s++){const a=t[s],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)yt.fromBufferAttribute(a,c),l&&(Yi.fromBufferAttribute(e,c),yt.add(Yi)),r=Math.max(r,n.distanceToSquared(yt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.array,r=t.position.array,s=t.normal.array,o=t.uv.array,a=r.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new En(new Float32Array(4*a),4));const l=this.getAttribute("tangent").array,c=[],u=[];for(let R=0;R<a;R++)c[R]=new D,u[R]=new D;const h=new D,f=new D,d=new D,g=new ye,p=new ye,m=new ye,_=new D,b=new D;function v(R,j,Q){h.fromArray(r,R*3),f.fromArray(r,j*3),d.fromArray(r,Q*3),g.fromArray(o,R*2),p.fromArray(o,j*2),m.fromArray(o,Q*2),f.sub(h),d.sub(h),p.sub(g),m.sub(g);const B=1/(p.x*m.y-m.x*p.y);isFinite(B)&&(_.copy(f).multiplyScalar(m.y).addScaledVector(d,-p.y).multiplyScalar(B),b.copy(d).multiplyScalar(p.x).addScaledVector(f,-m.x).multiplyScalar(B),c[R].add(_),c[j].add(_),c[Q].add(_),u[R].add(b),u[j].add(b),u[Q].add(b))}let w=this.groups;w.length===0&&(w=[{start:0,count:n.length}]);for(let R=0,j=w.length;R<j;++R){const Q=w[R],B=Q.start,N=Q.count;for(let J=B,K=B+N;J<K;J+=3)v(n[J+0],n[J+1],n[J+2])}const S=new D,P=new D,I=new D,x=new D;function A(R){I.fromArray(s,R*3),x.copy(I);const j=c[R];S.copy(j),S.sub(I.multiplyScalar(I.dot(j))).normalize(),P.crossVectors(x,j);const B=P.dot(u[R])<0?-1:1;l[R*4]=S.x,l[R*4+1]=S.y,l[R*4+2]=S.z,l[R*4+3]=B}for(let R=0,j=w.length;R<j;++R){const Q=w[R],B=Q.start,N=Q.count;for(let J=B,K=B+N;J<K;J+=3)A(n[J+0]),A(n[J+1]),A(n[J+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new En(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let f=0,d=n.count;f<d;f++)n.setXYZ(f,0,0,0);const r=new D,s=new D,o=new D,a=new D,l=new D,c=new D,u=new D,h=new D;if(e)for(let f=0,d=e.count;f<d;f+=3){const g=e.getX(f+0),p=e.getX(f+1),m=e.getX(f+2);r.fromBufferAttribute(t,g),s.fromBufferAttribute(t,p),o.fromBufferAttribute(t,m),u.subVectors(o,s),h.subVectors(r,s),u.cross(h),a.fromBufferAttribute(n,g),l.fromBufferAttribute(n,p),c.fromBufferAttribute(n,m),a.add(u),l.add(u),c.add(u),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(p,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let f=0,d=t.count;f<d;f+=3)r.fromBufferAttribute(t,f+0),s.fromBufferAttribute(t,f+1),o.fromBufferAttribute(t,f+2),u.subVectors(o,s),h.subVectors(r,s),u.cross(h),n.setXYZ(f+0,u.x,u.y,u.z),n.setXYZ(f+1,u.x,u.y,u.z),n.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}merge(){return console.error("THREE.BufferGeometry.merge() has been removed. Use THREE.BufferGeometryUtils.mergeBufferGeometries() instead."),this}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)yt.fromBufferAttribute(e,t),yt.normalize(),e.setXYZ(t,yt.x,yt.y,yt.z)}toNonIndexed(){function e(a,l){const c=a.array,u=a.itemSize,h=a.normalized,f=new c.constructor(l.length*u);let d=0,g=0;for(let p=0,m=l.length;p<m;p++){a.isInterleavedBufferAttribute?d=l[p]*a.data.stride+a.offset:d=l[p]*u;for(let _=0;_<u;_++)f[g++]=c[d++]}return new En(f,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new mt,n=this.index.array,r=this.attributes;for(const a in r){const l=r[a],c=e(l,n);t.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let u=0,h=c.length;u<h;u++){const f=c[u],d=e(f,n);l.push(d)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.5,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let h=0,f=c.length;h<f;h++){const d=c[h];u.push(d.toJSON(e.data))}u.length>0&&(r[l]=u,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const r=e.attributes;for(const c in r){const u=r[c];this.setAttribute(c,u.clone(t))}const s=e.morphAttributes;for(const c in s){const u=[],h=s[c];for(let f=0,d=h.length;f<d;f++)u.push(h[f].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,u=o.length;c<u;c++){const h=o[c];this.addGroup(h.start,h.count,h.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,e.parameters!==void 0&&(this.parameters=Object.assign({},e.parameters)),this}dispose(){this.dispatchEvent({type:"dispose"})}}const rh=new De,$i=new Ho,Oa=new ws,Ur=new D,Br=new D,kr=new D,Na=new D,Hs=new D,Ws=new ye,Xs=new ye,js=new ye,za=new D,qs=new D;class pt extends st{constructor(e=new mt,t=new Ss){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,t){const n=this.geometry,r=n.attributes.position,s=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(s&&a){Hs.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const u=a[l],h=s[l];u!==0&&(Na.fromBufferAttribute(h,e),o?Hs.addScaledVector(Na,u):Hs.addScaledVector(Na.sub(t),u))}t.add(Hs)}return this.isSkinnedMesh&&this.boneTransform(e,t),t}raycast(e,t){const n=this.geometry,r=this.material,s=this.matrixWorld;if(r===void 0||(n.boundingSphere===null&&n.computeBoundingSphere(),Oa.copy(n.boundingSphere),Oa.applyMatrix4(s),e.ray.intersectsSphere(Oa)===!1)||(rh.copy(s).invert(),$i.copy(e.ray).applyMatrix4(rh),n.boundingBox!==null&&$i.intersectsBox(n.boundingBox)===!1))return;let o;const a=n.index,l=n.attributes.position,c=n.attributes.uv,u=n.attributes.uv2,h=n.groups,f=n.drawRange;if(a!==null)if(Array.isArray(r))for(let d=0,g=h.length;d<g;d++){const p=h[d],m=r[p.materialIndex],_=Math.max(p.start,f.start),b=Math.min(a.count,Math.min(p.start+p.count,f.start+f.count));for(let v=_,w=b;v<w;v+=3){const S=a.getX(v),P=a.getX(v+1),I=a.getX(v+2);o=Ys(this,m,e,$i,c,u,S,P,I),o&&(o.faceIndex=Math.floor(v/3),o.face.materialIndex=p.materialIndex,t.push(o))}}else{const d=Math.max(0,f.start),g=Math.min(a.count,f.start+f.count);for(let p=d,m=g;p<m;p+=3){const _=a.getX(p),b=a.getX(p+1),v=a.getX(p+2);o=Ys(this,r,e,$i,c,u,_,b,v),o&&(o.faceIndex=Math.floor(p/3),t.push(o))}}else if(l!==void 0)if(Array.isArray(r))for(let d=0,g=h.length;d<g;d++){const p=h[d],m=r[p.materialIndex],_=Math.max(p.start,f.start),b=Math.min(l.count,Math.min(p.start+p.count,f.start+f.count));for(let v=_,w=b;v<w;v+=3){const S=v,P=v+1,I=v+2;o=Ys(this,m,e,$i,c,u,S,P,I),o&&(o.faceIndex=Math.floor(v/3),o.face.materialIndex=p.materialIndex,t.push(o))}}else{const d=Math.max(0,f.start),g=Math.min(l.count,f.start+f.count);for(let p=d,m=g;p<m;p+=3){const _=p,b=p+1,v=p+2;o=Ys(this,r,e,$i,c,u,_,b,v),o&&(o.faceIndex=Math.floor(p/3),t.push(o))}}}}function Tv(i,e,t,n,r,s,o,a){let l;if(e.side===Yt?l=n.intersectTriangle(o,s,r,!0,a):l=n.intersectTriangle(r,s,o,e.side===ci,a),l===null)return null;qs.copy(a),qs.applyMatrix4(i.matrixWorld);const c=t.ray.origin.distanceTo(qs);return c<t.near||c>t.far?null:{distance:c,point:qs.clone(),object:i}}function Ys(i,e,t,n,r,s,o,a,l){i.getVertexPosition(o,Ur),i.getVertexPosition(a,Br),i.getVertexPosition(l,kr);const c=Tv(i,e,t,n,Ur,Br,kr,za);if(c){r&&(Ws.fromBufferAttribute(r,o),Xs.fromBufferAttribute(r,a),js.fromBufferAttribute(r,l),c.uv=Tn.getUV(za,Ur,Br,kr,Ws,Xs,js,new ye)),s&&(Ws.fromBufferAttribute(s,o),Xs.fromBufferAttribute(s,a),js.fromBufferAttribute(s,l),c.uv2=Tn.getUV(za,Ur,Br,kr,Ws,Xs,js,new ye));const u={a:o,b:a,c:l,normal:new D,materialIndex:0};Tn.getNormal(Ur,Br,kr,u.normal),c.face=u}return c}class Ts extends mt{constructor(e=1,t=1,n=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],c=[],u=[],h=[];let f=0,d=0;g("z","y","x",-1,-1,n,t,e,o,s,0),g("z","y","x",1,-1,n,t,-e,o,s,1),g("x","z","y",1,1,e,n,t,r,o,2),g("x","z","y",1,-1,e,n,-t,r,o,3),g("x","y","z",1,-1,e,t,n,r,s,4),g("x","y","z",-1,-1,e,t,-n,r,s,5),this.setIndex(l),this.setAttribute("position",new tt(c,3)),this.setAttribute("normal",new tt(u,3)),this.setAttribute("uv",new tt(h,2));function g(p,m,_,b,v,w,S,P,I,x,A){const R=w/I,j=S/x,Q=w/2,B=S/2,N=P/2,J=I+1,K=x+1;let ie=0,Y=0;const fe=new D;for(let de=0;de<K;de++){const xe=de*j-B;for(let W=0;W<J;W++){const oe=W*R-Q;fe[p]=oe*b,fe[m]=xe*v,fe[_]=N,c.push(fe.x,fe.y,fe.z),fe[p]=0,fe[m]=0,fe[_]=P>0?1:-1,u.push(fe.x,fe.y,fe.z),h.push(W/I),h.push(1-de/x),ie+=1}}for(let de=0;de<x;de++)for(let xe=0;xe<I;xe++){const W=f+xe+J*de,oe=f+xe+J*(de+1),ve=f+(xe+1)+J*(de+1),z=f+(xe+1)+J*de;l.push(W,oe,z),l.push(oe,ve,z),Y+=6}a.addGroup(d,Y,A),d+=Y,f+=ie}}static fromJSON(e){return new Ts(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function wr(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const r=i[t][n];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?e[t][n]=r.clone():Array.isArray(r)?e[t][n]=r.slice():e[t][n]=r}}return e}function Ft(i){const e={};for(let t=0;t<i.length;t++){const n=wr(i[t]);for(const r in n)e[r]=n[r]}return e}function Ev(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function Ad(i){return i.getRenderTarget()===null&&i.outputEncoding===Je?xn:ds}const Av={clone:wr,merge:Ft};var Cv=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Pv=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Lt extends ui{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Cv,this.fragmentShader=Pv,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv2:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=wr(e.uniforms),this.uniformsGroups=Ev(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?t.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[r]={type:"m4",value:o.toArray()}:t.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader;const n={};for(const r in this.extensions)this.extensions[r]===!0&&(n[r]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class Cd extends st{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new De,this.projectionMatrix=new De,this.projectionMatrixInverse=new De}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(-t[8],-t[9],-t[10]).normalize()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class Ot extends Cd{constructor(e=50,t=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=ps*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(pr*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return ps*2*Math.atan(Math.tan(pr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,n,r,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(pr*.5*this.fov)/this.zoom,n=2*t,r=this.aspect*n,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*r/l,t-=o.offsetY*n/c,r*=o.width/l,n*=o.height/c}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-n,e,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Ki=-90,Zi=1;class Lv extends st{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n;const r=new Ot(Ki,Zi,e,t);r.layers=this.layers,r.up.set(0,1,0),r.lookAt(1,0,0),this.add(r);const s=new Ot(Ki,Zi,e,t);s.layers=this.layers,s.up.set(0,1,0),s.lookAt(-1,0,0),this.add(s);const o=new Ot(Ki,Zi,e,t);o.layers=this.layers,o.up.set(0,0,-1),o.lookAt(0,1,0),this.add(o);const a=new Ot(Ki,Zi,e,t);a.layers=this.layers,a.up.set(0,0,1),a.lookAt(0,-1,0),this.add(a);const l=new Ot(Ki,Zi,e,t);l.layers=this.layers,l.up.set(0,1,0),l.lookAt(0,0,1),this.add(l);const c=new Ot(Ki,Zi,e,t);c.layers=this.layers,c.up.set(0,1,0),c.lookAt(0,0,-1),this.add(c)}update(e,t){this.parent===null&&this.updateMatrixWorld();const n=this.renderTarget,[r,s,o,a,l,c]=this.children,u=e.getRenderTarget(),h=e.toneMapping,f=e.xr.enabled;e.toneMapping=Gn,e.xr.enabled=!1;const d=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0),e.render(t,r),e.setRenderTarget(n,1),e.render(t,s),e.setRenderTarget(n,2),e.render(t,o),e.setRenderTarget(n,3),e.render(t,a),e.setRenderTarget(n,4),e.render(t,l),n.texture.generateMipmaps=d,e.setRenderTarget(n,5),e.render(t,c),e.setRenderTarget(u),e.toneMapping=h,e.xr.enabled=f,n.texture.needsPMREMUpdate=!0}}class Pd extends wt{constructor(e,t,n,r,s,o,a,l,c,u){e=e!==void 0?e:[],t=t!==void 0?t:yr,super(e,t,n,r,s,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Rv extends Fi{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},r=[n,n,n,n,n,n];this.texture=new Pd(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.encoding),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Jt}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.encoding=t.encoding,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new Ts(5,5,5),s=new Lt({name:"CubemapFromEquirect",uniforms:wr(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Yt,blending:oi});s.uniforms.tEquirect.value=t;const o=new pt(r,s),a=t.minFilter;return t.minFilter===hs&&(t.minFilter=Jt),new Lv(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,n,r){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,r);e.setRenderTarget(s)}}const Ua=new D,Dv=new D,Iv=new kt;class Mi{constructor(e=new D(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,r){return this.normal.set(e,t,n),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const r=Ua.subVectors(n,t).cross(Dv.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(this.normal).multiplyScalar(-this.distanceToPoint(e)).add(e)}intersectLine(e,t){const n=e.delta(Ua),r=this.normal.dot(n);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(n).multiplyScalar(s).add(e.start)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||Iv.getNormalMatrix(e),r=this.coplanarPoint(Ua).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Ji=new ws,$s=new D;class oc{constructor(e=new Mi,t=new Mi,n=new Mi,r=new Mi,s=new Mi,o=new Mi){this.planes=[e,t,n,r,s,o]}set(e,t,n,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e){const t=this.planes,n=e.elements,r=n[0],s=n[1],o=n[2],a=n[3],l=n[4],c=n[5],u=n[6],h=n[7],f=n[8],d=n[9],g=n[10],p=n[11],m=n[12],_=n[13],b=n[14],v=n[15];return t[0].setComponents(a-r,h-l,p-f,v-m).normalize(),t[1].setComponents(a+r,h+l,p+f,v+m).normalize(),t[2].setComponents(a+s,h+c,p+d,v+_).normalize(),t[3].setComponents(a-s,h-c,p-d,v-_).normalize(),t[4].setComponents(a-o,h-u,p-g,v-b).normalize(),t[5].setComponents(a+o,h+u,p+g,v+b).normalize(),this}intersectsObject(e){const t=e.geometry;return t.boundingSphere===null&&t.computeBoundingSphere(),Ji.copy(t.boundingSphere).applyMatrix4(e.matrixWorld),this.intersectsSphere(Ji)}intersectsSprite(e){return Ji.center.set(0,0,0),Ji.radius=.7071067811865476,Ji.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ji)}intersectsSphere(e){const t=this.planes,n=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const r=t[n];if($s.x=r.normal.x>0?e.max.x:e.min.x,$s.y=r.normal.y>0?e.max.y:e.min.y,$s.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint($s)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Ld(){let i=null,e=!1,t=null,n=null;function r(s,o){t(s,o),n=i.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(r),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){i=s}}}function Fv(i,e){const t=e.isWebGL2,n=new WeakMap;function r(c,u){const h=c.array,f=c.usage,d=i.createBuffer();i.bindBuffer(u,d),i.bufferData(u,h,f),c.onUploadCallback();let g;if(h instanceof Float32Array)g=5126;else if(h instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(t)g=5131;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else g=5123;else if(h instanceof Int16Array)g=5122;else if(h instanceof Uint32Array)g=5125;else if(h instanceof Int32Array)g=5124;else if(h instanceof Int8Array)g=5120;else if(h instanceof Uint8Array)g=5121;else if(h instanceof Uint8ClampedArray)g=5121;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:d,type:g,bytesPerElement:h.BYTES_PER_ELEMENT,version:c.version}}function s(c,u,h){const f=u.array,d=u.updateRange;i.bindBuffer(h,c),d.count===-1?i.bufferSubData(h,0,f):(t?i.bufferSubData(h,d.offset*f.BYTES_PER_ELEMENT,f,d.offset,d.count):i.bufferSubData(h,d.offset*f.BYTES_PER_ELEMENT,f.subarray(d.offset,d.offset+d.count)),d.count=-1),u.onUploadCallback()}function o(c){return c.isInterleavedBufferAttribute&&(c=c.data),n.get(c)}function a(c){c.isInterleavedBufferAttribute&&(c=c.data);const u=n.get(c);u&&(i.deleteBuffer(u.buffer),n.delete(c))}function l(c,u){if(c.isGLBufferAttribute){const f=n.get(c);(!f||f.version<c.version)&&n.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const h=n.get(c);h===void 0?n.set(c,r(c,u)):h.version<c.version&&(s(h.buffer,c,u),h.version=c.version)}return{get:o,remove:a,update:l}}class Wo extends mt{constructor(e=1,t=1,n=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:r};const s=e/2,o=t/2,a=Math.floor(n),l=Math.floor(r),c=a+1,u=l+1,h=e/a,f=t/l,d=[],g=[],p=[],m=[];for(let _=0;_<u;_++){const b=_*f-o;for(let v=0;v<c;v++){const w=v*h-s;g.push(w,-b,0),p.push(0,0,1),m.push(v/a),m.push(1-_/l)}}for(let _=0;_<l;_++)for(let b=0;b<a;b++){const v=b+c*_,w=b+c*(_+1),S=b+1+c*(_+1),P=b+1+c*_;d.push(v,w,P),d.push(w,S,P)}this.setIndex(d),this.setAttribute("position",new tt(g,3)),this.setAttribute("normal",new tt(p,3)),this.setAttribute("uv",new tt(m,2))}static fromJSON(e){return new Wo(e.width,e.height,e.widthSegments,e.heightSegments)}}var Ov=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vUv ).g;
#endif`,Nv=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,zv=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,Uv=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Bv=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vUv2 ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,kv=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Vv="vec3 transformed = vec3( position );",Gv=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Hv=`vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
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
#endif`,Wv=`#ifdef USE_IRIDESCENCE
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
#endif`,Xv=`#ifdef USE_BUMPMAP
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
#endif`,jv=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,qv=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Yv=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,$v=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Kv=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Zv=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Jv=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,Qv=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,ex=`#define PI 3.141592653589793
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
}`,tx=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,nx=`vec3 transformedNormal = objectNormal;
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
#endif`,ix=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,rx=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vUv ).x * displacementScale + displacementBias );
#endif`,sx=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,ox=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,ax="gl_FragColor = linearToOutputTexel( gl_FragColor );",lx=`vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,cx=`#ifdef USE_ENVMAP
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
#endif`,ux=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,hx=`#ifdef USE_ENVMAP
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
#endif`,fx=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,dx=`#ifdef USE_ENVMAP
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
#endif`,px=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,mx=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,gx=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,_x=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,vx=`#ifdef USE_GRADIENTMAP
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
}`,xx=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vUv2 );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,yx=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Mx=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,bx=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,wx=`uniform bool receiveShadow;
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
#endif`,Sx=`#if defined( USE_ENVMAP )
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
#endif`,Tx=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Ex=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Ax=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Cx=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Px=`PhysicalMaterial material;
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
#endif`,Lx=`struct PhysicalMaterial {
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
}`,Rx=`
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
#endif`,Dx=`#if defined( RE_IndirectDiffuse )
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
#endif`,Ix=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,Fx=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Ox=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Nx=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,zx=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,Ux=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Bx=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,kx=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Vx=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	uniform mat3 uvTransform;
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Gx=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Hx=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Wx=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Xx=`#ifdef USE_MORPHNORMALS
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
#endif`,jx=`#ifdef USE_MORPHTARGETS
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
#endif`,qx=`#ifdef USE_MORPHTARGETS
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
#endif`,Yx=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 geometryNormal = normal;`,$x=`#ifdef OBJECTSPACE_NORMALMAP
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
#endif`,Kx=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Zx=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Jx=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Qx=`#ifdef USE_NORMALMAP
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
#endif`,ey=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,ty=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	#ifdef USE_TANGENT
		clearcoatNormal = normalize( vTBN * clearcoatMapN );
	#else
		clearcoatNormal = perturbNormal2Arb( - vViewPosition, clearcoatNormal, clearcoatMapN, faceDirection );
	#endif
#endif`,ny=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif`,iy=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,ry=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha + 0.1;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,sy=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,oy=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,ay=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,ly=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,cy=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,uy=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vUv );
	roughnessFactor *= texelRoughness.g;
#endif`,hy=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,fy=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,dy=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,py=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,my=`float getShadowMask() {
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
}`,gy=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,_y=`#ifdef USE_SKINNING
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
#endif`,vy=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,xy=`#ifdef USE_SKINNING
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
#endif`,yy=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,My=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,by=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,wy=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Sy=`#ifdef USE_TRANSMISSION
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
#endif`,Ty=`#ifdef USE_TRANSMISSION
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
#endif`,Ey=`#if ( defined( USE_UV ) && ! defined( UVS_VERTEX_ONLY ) )
	varying vec2 vUv;
#endif`,Ay=`#ifdef USE_UV
	#ifdef UVS_VERTEX_ONLY
		vec2 vUv;
	#else
		varying vec2 vUv;
	#endif
	uniform mat3 uvTransform;
#endif`,Cy=`#ifdef USE_UV
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
#endif`,Py=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	varying vec2 vUv2;
#endif`,Ly=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	attribute vec2 uv2;
	varying vec2 vUv2;
	uniform mat3 uv2Transform;
#endif`,Ry=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	vUv2 = ( uv2Transform * vec3( uv2, 1 ) ).xy;
#endif`,Dy=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Iy=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Fy=`uniform sampler2D t2D;
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
}`,Oy=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Ny=`#ifdef ENVMAP_TYPE_CUBE
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
}`,zy=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Uy=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,By=`#include <common>
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
}`,ky=`#if DEPTH_PACKING == 3200
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
}`,Vy=`#define DISTANCE
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
}`,Gy=`#define DISTANCE
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
}`,Hy=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Wy=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,Xy=`uniform float scale;
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
}`,jy=`uniform vec3 diffuse;
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
}`,qy=`#include <common>
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
}`,Yy=`uniform vec3 diffuse;
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
}`,$y=`#define LAMBERT
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
}`,Ky=`#define LAMBERT
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
}`,Zy=`#define MATCAP
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
}`,Jy=`#define MATCAP
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
}`,Qy=`#define NORMAL
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
}`,eM=`#define NORMAL
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
}`,tM=`#define PHONG
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
}`,nM=`#define PHONG
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
}`,iM=`#define STANDARD
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
}`,rM=`#define STANDARD
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
}`,sM=`#define TOON
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
}`,oM=`#define TOON
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
}`,aM=`uniform float size;
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
}`,lM=`uniform vec3 diffuse;
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
}`,cM=`#include <common>
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
}`,uM=`uniform vec3 color;
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
}`,hM=`uniform float rotation;
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
}`,fM=`uniform vec3 diffuse;
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
}`,ze={alphamap_fragment:Ov,alphamap_pars_fragment:Nv,alphatest_fragment:zv,alphatest_pars_fragment:Uv,aomap_fragment:Bv,aomap_pars_fragment:kv,begin_vertex:Vv,beginnormal_vertex:Gv,bsdfs:Hv,iridescence_fragment:Wv,bumpmap_pars_fragment:Xv,clipping_planes_fragment:jv,clipping_planes_pars_fragment:qv,clipping_planes_pars_vertex:Yv,clipping_planes_vertex:$v,color_fragment:Kv,color_pars_fragment:Zv,color_pars_vertex:Jv,color_vertex:Qv,common:ex,cube_uv_reflection_fragment:tx,defaultnormal_vertex:nx,displacementmap_pars_vertex:ix,displacementmap_vertex:rx,emissivemap_fragment:sx,emissivemap_pars_fragment:ox,encodings_fragment:ax,encodings_pars_fragment:lx,envmap_fragment:cx,envmap_common_pars_fragment:ux,envmap_pars_fragment:hx,envmap_pars_vertex:fx,envmap_physical_pars_fragment:Sx,envmap_vertex:dx,fog_vertex:px,fog_pars_vertex:mx,fog_fragment:gx,fog_pars_fragment:_x,gradientmap_pars_fragment:vx,lightmap_fragment:xx,lightmap_pars_fragment:yx,lights_lambert_fragment:Mx,lights_lambert_pars_fragment:bx,lights_pars_begin:wx,lights_toon_fragment:Tx,lights_toon_pars_fragment:Ex,lights_phong_fragment:Ax,lights_phong_pars_fragment:Cx,lights_physical_fragment:Px,lights_physical_pars_fragment:Lx,lights_fragment_begin:Rx,lights_fragment_maps:Dx,lights_fragment_end:Ix,logdepthbuf_fragment:Fx,logdepthbuf_pars_fragment:Ox,logdepthbuf_pars_vertex:Nx,logdepthbuf_vertex:zx,map_fragment:Ux,map_pars_fragment:Bx,map_particle_fragment:kx,map_particle_pars_fragment:Vx,metalnessmap_fragment:Gx,metalnessmap_pars_fragment:Hx,morphcolor_vertex:Wx,morphnormal_vertex:Xx,morphtarget_pars_vertex:jx,morphtarget_vertex:qx,normal_fragment_begin:Yx,normal_fragment_maps:$x,normal_pars_fragment:Kx,normal_pars_vertex:Zx,normal_vertex:Jx,normalmap_pars_fragment:Qx,clearcoat_normal_fragment_begin:ey,clearcoat_normal_fragment_maps:ty,clearcoat_pars_fragment:ny,iridescence_pars_fragment:iy,output_fragment:ry,packing:sy,premultiplied_alpha_fragment:oy,project_vertex:ay,dithering_fragment:ly,dithering_pars_fragment:cy,roughnessmap_fragment:uy,roughnessmap_pars_fragment:hy,shadowmap_pars_fragment:fy,shadowmap_pars_vertex:dy,shadowmap_vertex:py,shadowmask_pars_fragment:my,skinbase_vertex:gy,skinning_pars_vertex:_y,skinning_vertex:vy,skinnormal_vertex:xy,specularmap_fragment:yy,specularmap_pars_fragment:My,tonemapping_fragment:by,tonemapping_pars_fragment:wy,transmission_fragment:Sy,transmission_pars_fragment:Ty,uv_pars_fragment:Ey,uv_pars_vertex:Ay,uv_vertex:Cy,uv2_pars_fragment:Py,uv2_pars_vertex:Ly,uv2_vertex:Ry,worldpos_vertex:Dy,background_vert:Iy,background_frag:Fy,backgroundCube_vert:Oy,backgroundCube_frag:Ny,cube_vert:zy,cube_frag:Uy,depth_vert:By,depth_frag:ky,distanceRGBA_vert:Vy,distanceRGBA_frag:Gy,equirect_vert:Hy,equirect_frag:Wy,linedashed_vert:Xy,linedashed_frag:jy,meshbasic_vert:qy,meshbasic_frag:Yy,meshlambert_vert:$y,meshlambert_frag:Ky,meshmatcap_vert:Zy,meshmatcap_frag:Jy,meshnormal_vert:Qy,meshnormal_frag:eM,meshphong_vert:tM,meshphong_frag:nM,meshphysical_vert:iM,meshphysical_frag:rM,meshtoon_vert:sM,meshtoon_frag:oM,points_vert:aM,points_frag:lM,shadow_vert:cM,shadow_frag:uM,sprite_vert:hM,sprite_frag:fM},Se={common:{diffuse:{value:new Re(16777215)},opacity:{value:1},map:{value:null},uvTransform:{value:new kt},uv2Transform:{value:new kt},alphaMap:{value:null},alphaTest:{value:0}},specularmap:{specularMap:{value:null}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1}},emissivemap:{emissiveMap:{value:null}},bumpmap:{bumpMap:{value:null},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalScale:{value:new ye(1,1)}},displacementmap:{displacementMap:{value:null},displacementScale:{value:1},displacementBias:{value:0}},roughnessmap:{roughnessMap:{value:null}},metalnessmap:{metalnessMap:{value:null}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Re(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Re(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new kt}},sprite:{diffuse:{value:new Re(16777215)},opacity:{value:1},center:{value:new ye(.5,.5)},rotation:{value:0},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new kt}}},bn={basic:{uniforms:Ft([Se.common,Se.specularmap,Se.envmap,Se.aomap,Se.lightmap,Se.fog]),vertexShader:ze.meshbasic_vert,fragmentShader:ze.meshbasic_frag},lambert:{uniforms:Ft([Se.common,Se.specularmap,Se.envmap,Se.aomap,Se.lightmap,Se.emissivemap,Se.bumpmap,Se.normalmap,Se.displacementmap,Se.fog,Se.lights,{emissive:{value:new Re(0)}}]),vertexShader:ze.meshlambert_vert,fragmentShader:ze.meshlambert_frag},phong:{uniforms:Ft([Se.common,Se.specularmap,Se.envmap,Se.aomap,Se.lightmap,Se.emissivemap,Se.bumpmap,Se.normalmap,Se.displacementmap,Se.fog,Se.lights,{emissive:{value:new Re(0)},specular:{value:new Re(1118481)},shininess:{value:30}}]),vertexShader:ze.meshphong_vert,fragmentShader:ze.meshphong_frag},standard:{uniforms:Ft([Se.common,Se.envmap,Se.aomap,Se.lightmap,Se.emissivemap,Se.bumpmap,Se.normalmap,Se.displacementmap,Se.roughnessmap,Se.metalnessmap,Se.fog,Se.lights,{emissive:{value:new Re(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ze.meshphysical_vert,fragmentShader:ze.meshphysical_frag},toon:{uniforms:Ft([Se.common,Se.aomap,Se.lightmap,Se.emissivemap,Se.bumpmap,Se.normalmap,Se.displacementmap,Se.gradientmap,Se.fog,Se.lights,{emissive:{value:new Re(0)}}]),vertexShader:ze.meshtoon_vert,fragmentShader:ze.meshtoon_frag},matcap:{uniforms:Ft([Se.common,Se.bumpmap,Se.normalmap,Se.displacementmap,Se.fog,{matcap:{value:null}}]),vertexShader:ze.meshmatcap_vert,fragmentShader:ze.meshmatcap_frag},points:{uniforms:Ft([Se.points,Se.fog]),vertexShader:ze.points_vert,fragmentShader:ze.points_frag},dashed:{uniforms:Ft([Se.common,Se.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ze.linedashed_vert,fragmentShader:ze.linedashed_frag},depth:{uniforms:Ft([Se.common,Se.displacementmap]),vertexShader:ze.depth_vert,fragmentShader:ze.depth_frag},normal:{uniforms:Ft([Se.common,Se.bumpmap,Se.normalmap,Se.displacementmap,{opacity:{value:1}}]),vertexShader:ze.meshnormal_vert,fragmentShader:ze.meshnormal_frag},sprite:{uniforms:Ft([Se.sprite,Se.fog]),vertexShader:ze.sprite_vert,fragmentShader:ze.sprite_frag},background:{uniforms:{uvTransform:{value:new kt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ze.background_vert,fragmentShader:ze.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:ze.backgroundCube_vert,fragmentShader:ze.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ze.cube_vert,fragmentShader:ze.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ze.equirect_vert,fragmentShader:ze.equirect_frag},distanceRGBA:{uniforms:Ft([Se.common,Se.displacementmap,{referencePosition:{value:new D},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ze.distanceRGBA_vert,fragmentShader:ze.distanceRGBA_frag},shadow:{uniforms:Ft([Se.lights,Se.fog,{color:{value:new Re(0)},opacity:{value:1}}]),vertexShader:ze.shadow_vert,fragmentShader:ze.shadow_frag}};bn.physical={uniforms:Ft([bn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatNormalScale:{value:new ye(1,1)},clearcoatNormalMap:{value:null},iridescence:{value:0},iridescenceMap:{value:null},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},sheen:{value:0},sheenColor:{value:new Re(0)},sheenColorMap:{value:null},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},transmission:{value:0},transmissionMap:{value:null},transmissionSamplerSize:{value:new ye},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},attenuationDistance:{value:0},attenuationColor:{value:new Re(0)},specularIntensity:{value:1},specularIntensityMap:{value:null},specularColor:{value:new Re(1,1,1)},specularColorMap:{value:null}}]),vertexShader:ze.meshphysical_vert,fragmentShader:ze.meshphysical_frag};const Ks={r:0,b:0,g:0};function dM(i,e,t,n,r,s,o){const a=new Re(0);let l=s===!0?0:1,c,u,h=null,f=0,d=null;function g(m,_){let b=!1,v=_.isScene===!0?_.background:null;v&&v.isTexture&&(v=(_.backgroundBlurriness>0?t:e).get(v));const w=i.xr,S=w.getSession&&w.getSession();S&&S.environmentBlendMode==="additive"&&(v=null),v===null?p(a,l):v&&v.isColor&&(p(v,1),b=!0),(i.autoClear||b)&&i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil),v&&(v.isCubeTexture||v.mapping===Go)?(u===void 0&&(u=new pt(new Ts(1,1,1),new Lt({name:"BackgroundCubeMaterial",uniforms:wr(bn.backgroundCube.uniforms),vertexShader:bn.backgroundCube.vertexShader,fragmentShader:bn.backgroundCube.fragmentShader,side:Yt,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(P,I,x){this.matrixWorld.copyPosition(x.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),u.material.uniforms.envMap.value=v,u.material.uniforms.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=_.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,u.material.toneMapped=v.encoding!==Je,(h!==v||f!==v.version||d!==i.toneMapping)&&(u.material.needsUpdate=!0,h=v,f=v.version,d=i.toneMapping),u.layers.enableAll(),m.unshift(u,u.geometry,u.material,0,0,null)):v&&v.isTexture&&(c===void 0&&(c=new pt(new Wo(2,2),new Lt({name:"BackgroundMaterial",uniforms:wr(bn.background.uniforms),vertexShader:bn.background.vertexShader,fragmentShader:bn.background.fragmentShader,side:ci,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=v,c.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,c.material.toneMapped=v.encoding!==Je,v.matrixAutoUpdate===!0&&v.updateMatrix(),c.material.uniforms.uvTransform.value.copy(v.matrix),(h!==v||f!==v.version||d!==i.toneMapping)&&(c.material.needsUpdate=!0,h=v,f=v.version,d=i.toneMapping),c.layers.enableAll(),m.unshift(c,c.geometry,c.material,0,0,null))}function p(m,_){m.getRGB(Ks,Ad(i)),n.buffers.color.setClear(Ks.r,Ks.g,Ks.b,_,o)}return{getClearColor:function(){return a},setClearColor:function(m,_=1){a.set(m),l=_,p(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(m){l=m,p(a,l)},render:g}}function pM(i,e,t,n){const r=i.getParameter(34921),s=n.isWebGL2?null:e.get("OES_vertex_array_object"),o=n.isWebGL2||s!==null,a={},l=m(null);let c=l,u=!1;function h(N,J,K,ie,Y){let fe=!1;if(o){const de=p(ie,K,J);c!==de&&(c=de,d(c.object)),fe=_(N,ie,K,Y),fe&&b(N,ie,K,Y)}else{const de=J.wireframe===!0;(c.geometry!==ie.id||c.program!==K.id||c.wireframe!==de)&&(c.geometry=ie.id,c.program=K.id,c.wireframe=de,fe=!0)}Y!==null&&t.update(Y,34963),(fe||u)&&(u=!1,x(N,J,K,ie),Y!==null&&i.bindBuffer(34963,t.get(Y).buffer))}function f(){return n.isWebGL2?i.createVertexArray():s.createVertexArrayOES()}function d(N){return n.isWebGL2?i.bindVertexArray(N):s.bindVertexArrayOES(N)}function g(N){return n.isWebGL2?i.deleteVertexArray(N):s.deleteVertexArrayOES(N)}function p(N,J,K){const ie=K.wireframe===!0;let Y=a[N.id];Y===void 0&&(Y={},a[N.id]=Y);let fe=Y[J.id];fe===void 0&&(fe={},Y[J.id]=fe);let de=fe[ie];return de===void 0&&(de=m(f()),fe[ie]=de),de}function m(N){const J=[],K=[],ie=[];for(let Y=0;Y<r;Y++)J[Y]=0,K[Y]=0,ie[Y]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:J,enabledAttributes:K,attributeDivisors:ie,object:N,attributes:{},index:null}}function _(N,J,K,ie){const Y=c.attributes,fe=J.attributes;let de=0;const xe=K.getAttributes();for(const W in xe)if(xe[W].location>=0){const ve=Y[W];let z=fe[W];if(z===void 0&&(W==="instanceMatrix"&&N.instanceMatrix&&(z=N.instanceMatrix),W==="instanceColor"&&N.instanceColor&&(z=N.instanceColor)),ve===void 0||ve.attribute!==z||z&&ve.data!==z.data)return!0;de++}return c.attributesNum!==de||c.index!==ie}function b(N,J,K,ie){const Y={},fe=J.attributes;let de=0;const xe=K.getAttributes();for(const W in xe)if(xe[W].location>=0){let ve=fe[W];ve===void 0&&(W==="instanceMatrix"&&N.instanceMatrix&&(ve=N.instanceMatrix),W==="instanceColor"&&N.instanceColor&&(ve=N.instanceColor));const z={};z.attribute=ve,ve&&ve.data&&(z.data=ve.data),Y[W]=z,de++}c.attributes=Y,c.attributesNum=de,c.index=ie}function v(){const N=c.newAttributes;for(let J=0,K=N.length;J<K;J++)N[J]=0}function w(N){S(N,0)}function S(N,J){const K=c.newAttributes,ie=c.enabledAttributes,Y=c.attributeDivisors;K[N]=1,ie[N]===0&&(i.enableVertexAttribArray(N),ie[N]=1),Y[N]!==J&&((n.isWebGL2?i:e.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](N,J),Y[N]=J)}function P(){const N=c.newAttributes,J=c.enabledAttributes;for(let K=0,ie=J.length;K<ie;K++)J[K]!==N[K]&&(i.disableVertexAttribArray(K),J[K]=0)}function I(N,J,K,ie,Y,fe){n.isWebGL2===!0&&(K===5124||K===5125)?i.vertexAttribIPointer(N,J,K,Y,fe):i.vertexAttribPointer(N,J,K,ie,Y,fe)}function x(N,J,K,ie){if(n.isWebGL2===!1&&(N.isInstancedMesh||ie.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;v();const Y=ie.attributes,fe=K.getAttributes(),de=J.defaultAttributeValues;for(const xe in fe){const W=fe[xe];if(W.location>=0){let oe=Y[xe];if(oe===void 0&&(xe==="instanceMatrix"&&N.instanceMatrix&&(oe=N.instanceMatrix),xe==="instanceColor"&&N.instanceColor&&(oe=N.instanceColor)),oe!==void 0){const ve=oe.normalized,z=oe.itemSize,O=t.get(oe);if(O===void 0)continue;const ee=O.buffer,ce=O.type,ge=O.bytesPerElement;if(oe.isInterleavedBufferAttribute){const pe=oe.data,Me=pe.stride,y=oe.offset;if(pe.isInstancedInterleavedBuffer){for(let T=0;T<W.locationSize;T++)S(W.location+T,pe.meshPerAttribute);N.isInstancedMesh!==!0&&ie._maxInstanceCount===void 0&&(ie._maxInstanceCount=pe.meshPerAttribute*pe.count)}else for(let T=0;T<W.locationSize;T++)w(W.location+T);i.bindBuffer(34962,ee);for(let T=0;T<W.locationSize;T++)I(W.location+T,z/W.locationSize,ce,ve,Me*ge,(y+z/W.locationSize*T)*ge)}else{if(oe.isInstancedBufferAttribute){for(let pe=0;pe<W.locationSize;pe++)S(W.location+pe,oe.meshPerAttribute);N.isInstancedMesh!==!0&&ie._maxInstanceCount===void 0&&(ie._maxInstanceCount=oe.meshPerAttribute*oe.count)}else for(let pe=0;pe<W.locationSize;pe++)w(W.location+pe);i.bindBuffer(34962,ee);for(let pe=0;pe<W.locationSize;pe++)I(W.location+pe,z/W.locationSize,ce,ve,z*ge,z/W.locationSize*pe*ge)}}else if(de!==void 0){const ve=de[xe];if(ve!==void 0)switch(ve.length){case 2:i.vertexAttrib2fv(W.location,ve);break;case 3:i.vertexAttrib3fv(W.location,ve);break;case 4:i.vertexAttrib4fv(W.location,ve);break;default:i.vertexAttrib1fv(W.location,ve)}}}}P()}function A(){Q();for(const N in a){const J=a[N];for(const K in J){const ie=J[K];for(const Y in ie)g(ie[Y].object),delete ie[Y];delete J[K]}delete a[N]}}function R(N){if(a[N.id]===void 0)return;const J=a[N.id];for(const K in J){const ie=J[K];for(const Y in ie)g(ie[Y].object),delete ie[Y];delete J[K]}delete a[N.id]}function j(N){for(const J in a){const K=a[J];if(K[N.id]===void 0)continue;const ie=K[N.id];for(const Y in ie)g(ie[Y].object),delete ie[Y];delete K[N.id]}}function Q(){B(),u=!0,c!==l&&(c=l,d(c.object))}function B(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:h,reset:Q,resetDefaultState:B,dispose:A,releaseStatesOfGeometry:R,releaseStatesOfProgram:j,initAttributes:v,enableAttribute:w,disableUnusedAttributes:P}}function mM(i,e,t,n){const r=n.isWebGL2;let s;function o(c){s=c}function a(c,u){i.drawArrays(s,c,u),t.update(u,s,1)}function l(c,u,h){if(h===0)return;let f,d;if(r)f=i,d="drawArraysInstanced";else if(f=e.get("ANGLE_instanced_arrays"),d="drawArraysInstancedANGLE",f===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}f[d](s,c,u,h),t.update(u,s,h)}this.setMode=o,this.render=a,this.renderInstances=l}function gM(i,e,t){let n;function r(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){const I=e.get("EXT_texture_filter_anisotropic");n=i.getParameter(I.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function s(I){if(I==="highp"){if(i.getShaderPrecisionFormat(35633,36338).precision>0&&i.getShaderPrecisionFormat(35632,36338).precision>0)return"highp";I="mediump"}return I==="mediump"&&i.getShaderPrecisionFormat(35633,36337).precision>0&&i.getShaderPrecisionFormat(35632,36337).precision>0?"mediump":"lowp"}const o=typeof WebGL2RenderingContext<"u"&&i instanceof WebGL2RenderingContext;let a=t.precision!==void 0?t.precision:"highp";const l=s(a);l!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",l,"instead."),a=l);const c=o||e.has("WEBGL_draw_buffers"),u=t.logarithmicDepthBuffer===!0,h=i.getParameter(34930),f=i.getParameter(35660),d=i.getParameter(3379),g=i.getParameter(34076),p=i.getParameter(34921),m=i.getParameter(36347),_=i.getParameter(36348),b=i.getParameter(36349),v=f>0,w=o||e.has("OES_texture_float"),S=v&&w,P=o?i.getParameter(36183):0;return{isWebGL2:o,drawBuffers:c,getMaxAnisotropy:r,getMaxPrecision:s,precision:a,logarithmicDepthBuffer:u,maxTextures:h,maxVertexTextures:f,maxTextureSize:d,maxCubemapSize:g,maxAttributes:p,maxVertexUniforms:m,maxVaryings:_,maxFragmentUniforms:b,vertexTextures:v,floatFragmentTextures:w,floatVertexTextures:S,maxSamples:P}}function _M(i){const e=this;let t=null,n=0,r=!1,s=!1;const o=new Mi,a=new kt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,f){const d=h.length!==0||f||n!==0||r;return r=f,n=h.length,d},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(h,f){t=u(h,f,0)},this.setState=function(h,f,d){const g=h.clippingPlanes,p=h.clipIntersection,m=h.clipShadows,_=i.get(h);if(!r||g===null||g.length===0||s&&!m)s?u(null):c();else{const b=s?0:n,v=b*4;let w=_.clippingState||null;l.value=w,w=u(g,f,v,d);for(let S=0;S!==v;++S)w[S]=t[S];_.clippingState=w,this.numIntersection=p?this.numPlanes:0,this.numPlanes+=b}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(h,f,d,g){const p=h!==null?h.length:0;let m=null;if(p!==0){if(m=l.value,g!==!0||m===null){const _=d+p*4,b=f.matrixWorldInverse;a.getNormalMatrix(b),(m===null||m.length<_)&&(m=new Float32Array(_));for(let v=0,w=d;v!==p;++v,w+=4)o.copy(h[v]).applyMatrix4(b,a),o.normal.toArray(m,w),m[w+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=p,e.numIntersection=0,m}}function vM(i){let e=new WeakMap;function t(o,a){return a===So?o.mapping=yr:a===yl&&(o.mapping=Mr),o}function n(o){if(o&&o.isTexture&&o.isRenderTargetTexture===!1){const a=o.mapping;if(a===So||a===yl)if(e.has(o)){const l=e.get(o).texture;return t(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new Rv(l.height/2);return c.fromEquirectangularTexture(i,o),e.set(o,c),o.addEventListener("dispose",r),t(c.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:n,dispose:s}}class ac extends Cd{constructor(e=-1,t=1,n=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=n-e,o=n+e,a=r+t,l=r-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const sr=4,sh=[.125,.215,.35,.446,.526,.582],Ei=20,Ba=new ac,oh=new Re;let ka=null;const bi=(1+Math.sqrt(5))/2,Qi=1/bi,ah=[new D(1,1,1),new D(-1,1,1),new D(1,1,-1),new D(-1,1,-1),new D(0,bi,Qi),new D(0,bi,-Qi),new D(Qi,0,bi),new D(-Qi,0,bi),new D(bi,Qi,0),new D(-bi,Qi,0)];class lh{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,r=100){ka=this._renderer.getRenderTarget(),this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,n,r,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=hh(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=uh(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(ka),e.scissorTest=!1,Zs(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===yr||e.mapping===Mr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),ka=this._renderer.getRenderTarget();const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Jt,minFilter:Jt,generateMipmaps:!1,type:fs,format:en,encoding:Ii,depthBuffer:!1},r=ch(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=ch(e,t,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=xM(s)),this._blurMaterial=yM(s,e,t)}return r}_compileMaterial(e){const t=new pt(this._lodPlanes[0],e);this._renderer.compile(t,Ba)}_sceneToCubeUV(e,t,n,r){const a=new Ot(90,1,t,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,h=u.autoClear,f=u.toneMapping;u.getClearColor(oh),u.toneMapping=Gn,u.autoClear=!1;const d=new Ss({name:"PMREM.Background",side:Yt,depthWrite:!1,depthTest:!1}),g=new pt(new Ts,d);let p=!1;const m=e.background;m?m.isColor&&(d.color.copy(m),e.background=null,p=!0):(d.color.copy(oh),p=!0);for(let _=0;_<6;_++){const b=_%3;b===0?(a.up.set(0,l[_],0),a.lookAt(c[_],0,0)):b===1?(a.up.set(0,0,l[_]),a.lookAt(0,c[_],0)):(a.up.set(0,l[_],0),a.lookAt(0,0,c[_]));const v=this._cubeSize;Zs(r,b*v,_>2?v:0,v,v),u.setRenderTarget(r),p&&u.render(g,a),u.render(e,a)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=f,u.autoClear=h,e.background=m}_textureToCubeUV(e,t){const n=this._renderer,r=e.mapping===yr||e.mapping===Mr;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=hh()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=uh());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new pt(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;Zs(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(o,Ba)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;for(let r=1;r<this._lodPlanes.length;r++){const s=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=ah[(r-1)%ah.length];this._blur(e,r-1,r,s,o)}t.autoClear=n}_blur(e,t,n,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,r,"latitudinal",s),this._halfBlur(o,e,n,n,r,"longitudinal",s)}_halfBlur(e,t,n,r,s,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,h=new pt(this._lodPlanes[r],c),f=c.uniforms,d=this._sizeLods[n]-1,g=isFinite(s)?Math.PI/(2*d):2*Math.PI/(2*Ei-1),p=s/g,m=isFinite(s)?1+Math.floor(u*p):Ei;m>Ei&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Ei}`);const _=[];let b=0;for(let I=0;I<Ei;++I){const x=I/p,A=Math.exp(-x*x/2);_.push(A),I===0?b+=A:I<m&&(b+=2*A)}for(let I=0;I<_.length;I++)_[I]=_[I]/b;f.envMap.value=e.texture,f.samples.value=m,f.weights.value=_,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);const{_lodMax:v}=this;f.dTheta.value=g,f.mipInt.value=v-n;const w=this._sizeLods[r],S=3*w*(r>v-sr?r-v+sr:0),P=4*(this._cubeSize-w);Zs(t,S,P,3*w,2*w),l.setRenderTarget(t),l.render(h,Ba)}}function xM(i){const e=[],t=[],n=[];let r=i;const s=i-sr+1+sh.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);t.push(a);let l=1/a;o>i-sr?l=sh[o-i+sr-1]:o===0&&(l=0),n.push(l);const c=1/(a-2),u=-c,h=1+c,f=[u,u,h,u,h,h,u,u,h,h,u,h],d=6,g=6,p=3,m=2,_=1,b=new Float32Array(p*g*d),v=new Float32Array(m*g*d),w=new Float32Array(_*g*d);for(let P=0;P<d;P++){const I=P%3*2/3-1,x=P>2?0:-1,A=[I,x,0,I+2/3,x,0,I+2/3,x+1,0,I,x,0,I+2/3,x+1,0,I,x+1,0];b.set(A,p*g*P),v.set(f,m*g*P);const R=[P,P,P,P,P,P];w.set(R,_*g*P)}const S=new mt;S.setAttribute("position",new En(b,p)),S.setAttribute("uv",new En(v,m)),S.setAttribute("faceIndex",new En(w,_)),e.push(S),r>sr&&r--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function ch(i,e,t){const n=new Fi(i,e,t);return n.texture.mapping=Go,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Zs(i,e,t,n,r){i.viewport.set(e,t,n,r),i.scissor.set(e,t,n,r)}function yM(i,e,t){const n=new Float32Array(Ei),r=new D(0,1,0);return new Lt({name:"SphericalGaussianBlur",defines:{n:Ei,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:lc(),fragmentShader:`

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
		`,blending:oi,depthTest:!1,depthWrite:!1})}function uh(){return new Lt({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:lc(),fragmentShader:`

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
		`,blending:oi,depthTest:!1,depthWrite:!1})}function hh(){return new Lt({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:lc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:oi,depthTest:!1,depthWrite:!1})}function lc(){return`

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
	`}function MM(i){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){const l=a.mapping,c=l===So||l===yl,u=l===yr||l===Mr;if(c||u)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let h=e.get(a);return t===null&&(t=new lh(i)),h=c?t.fromEquirectangular(a,h):t.fromCubemap(a,h),e.set(a,h),h.texture}else{if(e.has(a))return e.get(a).texture;{const h=a.image;if(c&&h&&h.height>0||u&&h&&r(h)){t===null&&(t=new lh(i));const f=c?t.fromEquirectangular(a):t.fromCubemap(a);return e.set(a,f),a.addEventListener("dispose",s),f.texture}else return null}}}return a}function r(a){let l=0;const c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function s(a){const l=a.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function bM(i){const e={};function t(n){if(e[n]!==void 0)return e[n];let r;switch(n){case"WEBGL_depth_texture":r=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=i.getExtension(n)}return e[n]=r,r}return{has:function(n){return t(n)!==null},init:function(n){n.isWebGL2?t("EXT_color_buffer_float"):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(n){const r=t(n);return r===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),r}}}function wM(i,e,t,n){const r={},s=new WeakMap;function o(h){const f=h.target;f.index!==null&&e.remove(f.index);for(const g in f.attributes)e.remove(f.attributes[g]);f.removeEventListener("dispose",o),delete r[f.id];const d=s.get(f);d&&(e.remove(d),s.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function a(h,f){return r[f.id]===!0||(f.addEventListener("dispose",o),r[f.id]=!0,t.memory.geometries++),f}function l(h){const f=h.attributes;for(const g in f)e.update(f[g],34962);const d=h.morphAttributes;for(const g in d){const p=d[g];for(let m=0,_=p.length;m<_;m++)e.update(p[m],34962)}}function c(h){const f=[],d=h.index,g=h.attributes.position;let p=0;if(d!==null){const b=d.array;p=d.version;for(let v=0,w=b.length;v<w;v+=3){const S=b[v+0],P=b[v+1],I=b[v+2];f.push(S,P,P,I,I,S)}}else{const b=g.array;p=g.version;for(let v=0,w=b.length/3-1;v<w;v+=3){const S=v+0,P=v+1,I=v+2;f.push(S,P,P,I,I,S)}}const m=new(Md(f)?Ed:sc)(f,1);m.version=p;const _=s.get(h);_&&e.remove(_),s.set(h,m)}function u(h){const f=s.get(h);if(f){const d=h.index;d!==null&&f.version<d.version&&c(h)}else c(h);return s.get(h)}return{get:a,update:l,getWireframeAttribute:u}}function SM(i,e,t,n){const r=n.isWebGL2;let s;function o(f){s=f}let a,l;function c(f){a=f.type,l=f.bytesPerElement}function u(f,d){i.drawElements(s,d,a,f*l),t.update(d,s,1)}function h(f,d,g){if(g===0)return;let p,m;if(r)p=i,m="drawElementsInstanced";else if(p=e.get("ANGLE_instanced_arrays"),m="drawElementsInstancedANGLE",p===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}p[m](s,d,a,f*l,g),t.update(d,s,g)}this.setMode=o,this.setIndex=c,this.render=u,this.renderInstances=h}function TM(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,o,a){switch(t.calls++,o){case 4:t.triangles+=a*(s/3);break;case 1:t.lines+=a*(s/2);break;case 3:t.lines+=a*(s-1);break;case 2:t.lines+=a*s;break;case 0:t.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){t.frame++,t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:n}}function EM(i,e){return i[0]-e[0]}function AM(i,e){return Math.abs(e[1])-Math.abs(i[1])}function CM(i,e,t){const n={},r=new Float32Array(8),s=new WeakMap,o=new Ke,a=[];for(let c=0;c<8;c++)a[c]=[c,0];function l(c,u,h,f){const d=c.morphTargetInfluences;if(e.isWebGL2===!0){const p=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,m=p!==void 0?p.length:0;let _=s.get(u);if(_===void 0||_.count!==m){let K=function(){N.dispose(),s.delete(u),u.removeEventListener("dispose",K)};var g=K;_!==void 0&&_.texture.dispose();const w=u.morphAttributes.position!==void 0,S=u.morphAttributes.normal!==void 0,P=u.morphAttributes.color!==void 0,I=u.morphAttributes.position||[],x=u.morphAttributes.normal||[],A=u.morphAttributes.color||[];let R=0;w===!0&&(R=1),S===!0&&(R=2),P===!0&&(R=3);let j=u.attributes.position.count*R,Q=1;j>e.maxTextureSize&&(Q=Math.ceil(j/e.maxTextureSize),j=e.maxTextureSize);const B=new Float32Array(j*Q*4*m),N=new Td(B,j,Q,m);N.type=ni,N.needsUpdate=!0;const J=R*4;for(let ie=0;ie<m;ie++){const Y=I[ie],fe=x[ie],de=A[ie],xe=j*Q*4*ie;for(let W=0;W<Y.count;W++){const oe=W*J;w===!0&&(o.fromBufferAttribute(Y,W),B[xe+oe+0]=o.x,B[xe+oe+1]=o.y,B[xe+oe+2]=o.z,B[xe+oe+3]=0),S===!0&&(o.fromBufferAttribute(fe,W),B[xe+oe+4]=o.x,B[xe+oe+5]=o.y,B[xe+oe+6]=o.z,B[xe+oe+7]=0),P===!0&&(o.fromBufferAttribute(de,W),B[xe+oe+8]=o.x,B[xe+oe+9]=o.y,B[xe+oe+10]=o.z,B[xe+oe+11]=de.itemSize===4?o.w:1)}}_={count:m,texture:N,size:new ye(j,Q)},s.set(u,_),u.addEventListener("dispose",K)}let b=0;for(let w=0;w<d.length;w++)b+=d[w];const v=u.morphTargetsRelative?1:1-b;f.getUniforms().setValue(i,"morphTargetBaseInfluence",v),f.getUniforms().setValue(i,"morphTargetInfluences",d),f.getUniforms().setValue(i,"morphTargetsTexture",_.texture,t),f.getUniforms().setValue(i,"morphTargetsTextureSize",_.size)}else{const p=d===void 0?0:d.length;let m=n[u.id];if(m===void 0||m.length!==p){m=[];for(let S=0;S<p;S++)m[S]=[S,0];n[u.id]=m}for(let S=0;S<p;S++){const P=m[S];P[0]=S,P[1]=d[S]}m.sort(AM);for(let S=0;S<8;S++)S<p&&m[S][1]?(a[S][0]=m[S][0],a[S][1]=m[S][1]):(a[S][0]=Number.MAX_SAFE_INTEGER,a[S][1]=0);a.sort(EM);const _=u.morphAttributes.position,b=u.morphAttributes.normal;let v=0;for(let S=0;S<8;S++){const P=a[S],I=P[0],x=P[1];I!==Number.MAX_SAFE_INTEGER&&x?(_&&u.getAttribute("morphTarget"+S)!==_[I]&&u.setAttribute("morphTarget"+S,_[I]),b&&u.getAttribute("morphNormal"+S)!==b[I]&&u.setAttribute("morphNormal"+S,b[I]),r[S]=x,v+=x):(_&&u.hasAttribute("morphTarget"+S)===!0&&u.deleteAttribute("morphTarget"+S),b&&u.hasAttribute("morphNormal"+S)===!0&&u.deleteAttribute("morphNormal"+S),r[S]=0)}const w=u.morphTargetsRelative?1:1-v;f.getUniforms().setValue(i,"morphTargetBaseInfluence",w),f.getUniforms().setValue(i,"morphTargetInfluences",r)}}return{update:l}}function PM(i,e,t,n){let r=new WeakMap;function s(l){const c=n.render.frame,u=l.geometry,h=e.get(l,u);return r.get(h)!==c&&(e.update(h),r.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),t.update(l.instanceMatrix,34962),l.instanceColor!==null&&t.update(l.instanceColor,34962)),h}function o(){r=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:s,dispose:o}}const Rd=new wt,Dd=new Td,Id=new mv,Fd=new Pd,fh=[],dh=[],ph=new Float32Array(16),mh=new Float32Array(9),gh=new Float32Array(4);function Ar(i,e,t){const n=i[0];if(n<=0||n>0)return i;const r=e*t;let s=fh[r];if(s===void 0&&(s=new Float32Array(r),fh[r]=s),e!==0){n.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,i[o].toArray(s,a)}return s}function gt(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function _t(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function Xo(i,e){let t=dh[e];t===void 0&&(t=new Int32Array(e),dh[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function LM(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function RM(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(gt(t,e))return;i.uniform2fv(this.addr,e),_t(t,e)}}function DM(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(gt(t,e))return;i.uniform3fv(this.addr,e),_t(t,e)}}function IM(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(gt(t,e))return;i.uniform4fv(this.addr,e),_t(t,e)}}function FM(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(gt(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),_t(t,e)}else{if(gt(t,n))return;gh.set(n),i.uniformMatrix2fv(this.addr,!1,gh),_t(t,n)}}function OM(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(gt(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),_t(t,e)}else{if(gt(t,n))return;mh.set(n),i.uniformMatrix3fv(this.addr,!1,mh),_t(t,n)}}function NM(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(gt(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),_t(t,e)}else{if(gt(t,n))return;ph.set(n),i.uniformMatrix4fv(this.addr,!1,ph),_t(t,n)}}function zM(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function UM(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(gt(t,e))return;i.uniform2iv(this.addr,e),_t(t,e)}}function BM(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(gt(t,e))return;i.uniform3iv(this.addr,e),_t(t,e)}}function kM(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(gt(t,e))return;i.uniform4iv(this.addr,e),_t(t,e)}}function VM(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function GM(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(gt(t,e))return;i.uniform2uiv(this.addr,e),_t(t,e)}}function HM(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(gt(t,e))return;i.uniform3uiv(this.addr,e),_t(t,e)}}function WM(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(gt(t,e))return;i.uniform4uiv(this.addr,e),_t(t,e)}}function XM(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture2D(e||Rd,r)}function jM(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture3D(e||Id,r)}function qM(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTextureCube(e||Fd,r)}function YM(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture2DArray(e||Dd,r)}function $M(i){switch(i){case 5126:return LM;case 35664:return RM;case 35665:return DM;case 35666:return IM;case 35674:return FM;case 35675:return OM;case 35676:return NM;case 5124:case 35670:return zM;case 35667:case 35671:return UM;case 35668:case 35672:return BM;case 35669:case 35673:return kM;case 5125:return VM;case 36294:return GM;case 36295:return HM;case 36296:return WM;case 35678:case 36198:case 36298:case 36306:case 35682:return XM;case 35679:case 36299:case 36307:return jM;case 35680:case 36300:case 36308:case 36293:return qM;case 36289:case 36303:case 36311:case 36292:return YM}}function KM(i,e){i.uniform1fv(this.addr,e)}function ZM(i,e){const t=Ar(e,this.size,2);i.uniform2fv(this.addr,t)}function JM(i,e){const t=Ar(e,this.size,3);i.uniform3fv(this.addr,t)}function QM(i,e){const t=Ar(e,this.size,4);i.uniform4fv(this.addr,t)}function eb(i,e){const t=Ar(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function tb(i,e){const t=Ar(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function nb(i,e){const t=Ar(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function ib(i,e){i.uniform1iv(this.addr,e)}function rb(i,e){i.uniform2iv(this.addr,e)}function sb(i,e){i.uniform3iv(this.addr,e)}function ob(i,e){i.uniform4iv(this.addr,e)}function ab(i,e){i.uniform1uiv(this.addr,e)}function lb(i,e){i.uniform2uiv(this.addr,e)}function cb(i,e){i.uniform3uiv(this.addr,e)}function ub(i,e){i.uniform4uiv(this.addr,e)}function hb(i,e,t){const n=this.cache,r=e.length,s=Xo(t,r);gt(n,s)||(i.uniform1iv(this.addr,s),_t(n,s));for(let o=0;o!==r;++o)t.setTexture2D(e[o]||Rd,s[o])}function fb(i,e,t){const n=this.cache,r=e.length,s=Xo(t,r);gt(n,s)||(i.uniform1iv(this.addr,s),_t(n,s));for(let o=0;o!==r;++o)t.setTexture3D(e[o]||Id,s[o])}function db(i,e,t){const n=this.cache,r=e.length,s=Xo(t,r);gt(n,s)||(i.uniform1iv(this.addr,s),_t(n,s));for(let o=0;o!==r;++o)t.setTextureCube(e[o]||Fd,s[o])}function pb(i,e,t){const n=this.cache,r=e.length,s=Xo(t,r);gt(n,s)||(i.uniform1iv(this.addr,s),_t(n,s));for(let o=0;o!==r;++o)t.setTexture2DArray(e[o]||Dd,s[o])}function mb(i){switch(i){case 5126:return KM;case 35664:return ZM;case 35665:return JM;case 35666:return QM;case 35674:return eb;case 35675:return tb;case 35676:return nb;case 5124:case 35670:return ib;case 35667:case 35671:return rb;case 35668:case 35672:return sb;case 35669:case 35673:return ob;case 5125:return ab;case 36294:return lb;case 36295:return cb;case 36296:return ub;case 35678:case 36198:case 36298:case 36306:case 35682:return hb;case 35679:case 36299:case 36307:return fb;case 35680:case 36300:case 36308:case 36293:return db;case 36289:case 36303:case 36311:case 36292:return pb}}class gb{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.setValue=$M(t.type)}}class _b{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.size=t.size,this.setValue=mb(t.type)}}class vb{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,t[a.id],n)}}}const Va=/(\w+)(\])?(\[|\.)?/g;function _h(i,e){i.seq.push(e),i.map[e.id]=e}function xb(i,e,t){const n=i.name,r=n.length;for(Va.lastIndex=0;;){const s=Va.exec(n),o=Va.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===r){_h(t,c===void 0?new gb(a,i,e):new _b(a,i,e));break}else{let h=t.map[a];h===void 0&&(h=new vb(a),_h(t,h)),t=h}}}class go{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,35718);for(let r=0;r<n;++r){const s=e.getActiveUniform(t,r),o=e.getUniformLocation(t,s.name);xb(s,o,this)}}setValue(e,t,n,r){const s=this.map[t];s!==void 0&&s.setValue(e,n,r)}setOptional(e,t,n){const r=t[n];r!==void 0&&this.setValue(e,n,r)}static upload(e,t,n,r){for(let s=0,o=t.length;s!==o;++s){const a=t[s],l=n[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,t){const n=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in t&&n.push(o)}return n}}function vh(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}let yb=0;function Mb(i,e){const t=i.split(`
`),n=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=r;o<s;o++){const a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}function bb(i){switch(i){case Ii:return["Linear","( value )"];case Je:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported encoding:",i),["Linear","( value )"]}}function xh(i,e,t){const n=i.getShaderParameter(e,35713),r=i.getShaderInfoLog(e).trim();if(n&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const o=parseInt(s[1]);return t.toUpperCase()+`

`+r+`

`+Mb(i.getShaderSource(e),o)}else return r}function wb(i,e){const t=bb(e);return"vec4 "+i+"( vec4 value ) { return LinearTo"+t[0]+t[1]+"; }"}function Sb(i,e){let t;switch(e){case P0:t="Linear";break;case L0:t="Reinhard";break;case R0:t="OptimizedCineon";break;case D0:t="ACESFilmic";break;case I0:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function Tb(i){return[i.extensionDerivatives||i.envMapCubeUVHeight||i.bumpMap||i.tangentSpaceNormalMap||i.clearcoatNormalMap||i.flatShading||i.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(i.extensionFragDepth||i.logarithmicDepthBuffer)&&i.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",i.extensionDrawBuffers&&i.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(i.extensionShaderTextureLOD||i.envMap||i.transmission)&&i.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Xr).join(`
`)}function Eb(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function Ab(i,e){const t={},n=i.getProgramParameter(e,35721);for(let r=0;r<n;r++){const s=i.getActiveAttrib(e,r),o=s.name;let a=1;s.type===35674&&(a=2),s.type===35675&&(a=3),s.type===35676&&(a=4),t[o]={type:s.type,location:i.getAttribLocation(e,o),locationSize:a}}return t}function Xr(i){return i!==""}function yh(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Mh(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Cb=/^[ \t]*#include +<([\w\d./]+)>/gm;function Sl(i){return i.replace(Cb,Pb)}function Pb(i,e){const t=ze[e];if(t===void 0)throw new Error("Can not resolve #include <"+e+">");return Sl(t)}const Lb=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function bh(i){return i.replace(Lb,Rb)}function Rb(i,e,t,n){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function wh(i){let e="precision "+i.precision+` float;
precision `+i.precision+" int;";return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function Db(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===md?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===a0?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===Hr&&(e="SHADOWMAP_TYPE_VSM"),e}function Ib(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case yr:case Mr:e="ENVMAP_TYPE_CUBE";break;case Go:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Fb(i){let e="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case Mr:e="ENVMAP_MODE_REFRACTION";break}return e}function Ob(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Vo:e="ENVMAP_BLENDING_MULTIPLY";break;case A0:e="ENVMAP_BLENDING_MIX";break;case C0:e="ENVMAP_BLENDING_ADD";break}return e}function Nb(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function zb(i,e,t,n){const r=i.getContext(),s=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=Db(t),c=Ib(t),u=Fb(t),h=Ob(t),f=Nb(t),d=t.isWebGL2?"":Tb(t),g=Eb(s),p=r.createProgram();let m,_,b=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=[g].filter(Xr).join(`
`),m.length>0&&(m+=`
`),_=[d,g].filter(Xr).join(`
`),_.length>0&&(_+=`
`)):(m=[wh(t),"#define SHADER_NAME "+t.shaderName,g,t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.supportsVertexTextures?"#define VERTEX_TEXTURES":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.displacementMap&&t.supportsVertexTextures?"#define USE_DISPLACEMENTMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",t.specularColorMap?"#define USE_SPECULARCOLORMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEENCOLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Xr).join(`
`),_=[d,wh(t),"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",t.specularColorMap?"#define USE_SPECULARCOLORMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEENCOLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.physicallyCorrectLights?"#define PHYSICALLY_CORRECT_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Gn?"#define TONE_MAPPING":"",t.toneMapping!==Gn?ze.tonemapping_pars_fragment:"",t.toneMapping!==Gn?Sb("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",ze.encodings_pars_fragment,wb("linearToOutputTexel",t.outputEncoding),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Xr).join(`
`)),o=Sl(o),o=yh(o,t),o=Mh(o,t),a=Sl(a),a=yh(a,t),a=Mh(a,t),o=bh(o),a=bh(a),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(b=`#version 300 es
`,m=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,_=["#define varying in",t.glslVersion===qu?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===qu?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+_);const v=b+m+o,w=b+_+a,S=vh(r,35633,v),P=vh(r,35632,w);if(r.attachShader(p,S),r.attachShader(p,P),t.index0AttributeName!==void 0?r.bindAttribLocation(p,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(p,0,"position"),r.linkProgram(p),i.debug.checkShaderErrors){const A=r.getProgramInfoLog(p).trim(),R=r.getShaderInfoLog(S).trim(),j=r.getShaderInfoLog(P).trim();let Q=!0,B=!0;if(r.getProgramParameter(p,35714)===!1){Q=!1;const N=xh(r,S,"vertex"),J=xh(r,P,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(p,35715)+`

Program Info Log: `+A+`
`+N+`
`+J)}else A!==""?console.warn("THREE.WebGLProgram: Program Info Log:",A):(R===""||j==="")&&(B=!1);B&&(this.diagnostics={runnable:Q,programLog:A,vertexShader:{log:R,prefix:m},fragmentShader:{log:j,prefix:_}})}r.deleteShader(S),r.deleteShader(P);let I;this.getUniforms=function(){return I===void 0&&(I=new go(r,p)),I};let x;return this.getAttributes=function(){return x===void 0&&(x=Ab(r,p)),x},this.destroy=function(){n.releaseStatesOfProgram(this),r.deleteProgram(p),this.program=void 0},this.name=t.shaderName,this.id=yb++,this.cacheKey=e,this.usedTimes=1,this.program=p,this.vertexShader=S,this.fragmentShader=P,this}let Ub=0;class Bb{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new kb(e),t.set(e,n)),n}}class kb{constructor(e){this.id=Ub++,this.code=e,this.usedTimes=0}}function Vb(i,e,t,n,r,s,o){const a=new rc,l=new Bb,c=[],u=r.isWebGL2,h=r.logarithmicDepthBuffer,f=r.vertexTextures;let d=r.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function p(x,A,R,j,Q){const B=j.fog,N=Q.geometry,J=x.isMeshStandardMaterial?j.environment:null,K=(x.isMeshStandardMaterial?t:e).get(x.envMap||J),ie=K&&K.mapping===Go?K.image.height:null,Y=g[x.type];x.precision!==null&&(d=r.getMaxPrecision(x.precision),d!==x.precision&&console.warn("THREE.WebGLProgram.getParameters:",x.precision,"not supported, using",d,"instead."));const fe=N.morphAttributes.position||N.morphAttributes.normal||N.morphAttributes.color,de=fe!==void 0?fe.length:0;let xe=0;N.morphAttributes.position!==void 0&&(xe=1),N.morphAttributes.normal!==void 0&&(xe=2),N.morphAttributes.color!==void 0&&(xe=3);let W,oe,ve,z;if(Y){const Me=bn[Y];W=Me.vertexShader,oe=Me.fragmentShader}else W=x.vertexShader,oe=x.fragmentShader,l.update(x),ve=l.getVertexShaderID(x),z=l.getFragmentShaderID(x);const O=i.getRenderTarget(),ee=x.alphaTest>0,ce=x.clearcoat>0,ge=x.iridescence>0;return{isWebGL2:u,shaderID:Y,shaderName:x.type,vertexShader:W,fragmentShader:oe,defines:x.defines,customVertexShaderID:ve,customFragmentShaderID:z,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:d,instancing:Q.isInstancedMesh===!0,instancingColor:Q.isInstancedMesh===!0&&Q.instanceColor!==null,supportsVertexTextures:f,outputEncoding:O===null?i.outputEncoding:O.isXRRenderTarget===!0?O.texture.encoding:Ii,map:!!x.map,matcap:!!x.matcap,envMap:!!K,envMapMode:K&&K.mapping,envMapCubeUVHeight:ie,lightMap:!!x.lightMap,aoMap:!!x.aoMap,emissiveMap:!!x.emissiveMap,bumpMap:!!x.bumpMap,normalMap:!!x.normalMap,objectSpaceNormalMap:x.normalMapType===Q0,tangentSpaceNormalMap:x.normalMapType===nc,decodeVideoTexture:!!x.map&&x.map.isVideoTexture===!0&&x.map.encoding===Je,clearcoat:ce,clearcoatMap:ce&&!!x.clearcoatMap,clearcoatRoughnessMap:ce&&!!x.clearcoatRoughnessMap,clearcoatNormalMap:ce&&!!x.clearcoatNormalMap,iridescence:ge,iridescenceMap:ge&&!!x.iridescenceMap,iridescenceThicknessMap:ge&&!!x.iridescenceThicknessMap,displacementMap:!!x.displacementMap,roughnessMap:!!x.roughnessMap,metalnessMap:!!x.metalnessMap,specularMap:!!x.specularMap,specularIntensityMap:!!x.specularIntensityMap,specularColorMap:!!x.specularColorMap,opaque:x.transparent===!1&&x.blending===fr,alphaMap:!!x.alphaMap,alphaTest:ee,gradientMap:!!x.gradientMap,sheen:x.sheen>0,sheenColorMap:!!x.sheenColorMap,sheenRoughnessMap:!!x.sheenRoughnessMap,transmission:x.transmission>0,transmissionMap:!!x.transmissionMap,thicknessMap:!!x.thicknessMap,combine:x.combine,vertexTangents:!!x.normalMap&&!!N.attributes.tangent,vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!N.attributes.color&&N.attributes.color.itemSize===4,vertexUvs:!!x.map||!!x.bumpMap||!!x.normalMap||!!x.specularMap||!!x.alphaMap||!!x.emissiveMap||!!x.roughnessMap||!!x.metalnessMap||!!x.clearcoatMap||!!x.clearcoatRoughnessMap||!!x.clearcoatNormalMap||!!x.iridescenceMap||!!x.iridescenceThicknessMap||!!x.displacementMap||!!x.transmissionMap||!!x.thicknessMap||!!x.specularIntensityMap||!!x.specularColorMap||!!x.sheenColorMap||!!x.sheenRoughnessMap,uvsVertexOnly:!(x.map||x.bumpMap||x.normalMap||x.specularMap||x.alphaMap||x.emissiveMap||x.roughnessMap||x.metalnessMap||x.clearcoatNormalMap||x.iridescenceMap||x.iridescenceThicknessMap||x.transmission>0||x.transmissionMap||x.thicknessMap||x.specularIntensityMap||x.specularColorMap||x.sheen>0||x.sheenColorMap||x.sheenRoughnessMap)&&!!x.displacementMap,fog:!!B,useFog:x.fog===!0,fogExp2:B&&B.isFogExp2,flatShading:!!x.flatShading,sizeAttenuation:x.sizeAttenuation,logarithmicDepthBuffer:h,skinning:Q.isSkinnedMesh===!0,morphTargets:N.morphAttributes.position!==void 0,morphNormals:N.morphAttributes.normal!==void 0,morphColors:N.morphAttributes.color!==void 0,morphTargetsCount:de,morphTextureStride:xe,numDirLights:A.directional.length,numPointLights:A.point.length,numSpotLights:A.spot.length,numSpotLightMaps:A.spotLightMap.length,numRectAreaLights:A.rectArea.length,numHemiLights:A.hemi.length,numDirLightShadows:A.directionalShadowMap.length,numPointLightShadows:A.pointShadowMap.length,numSpotLightShadows:A.spotShadowMap.length,numSpotLightShadowsWithMaps:A.numSpotLightShadowsWithMaps,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:x.dithering,shadowMapEnabled:i.shadowMap.enabled&&R.length>0,shadowMapType:i.shadowMap.type,toneMapping:x.toneMapped?i.toneMapping:Gn,physicallyCorrectLights:i.physicallyCorrectLights,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===qt,flipSided:x.side===Yt,useDepthPacking:!!x.depthPacking,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionDerivatives:x.extensions&&x.extensions.derivatives,extensionFragDepth:x.extensions&&x.extensions.fragDepth,extensionDrawBuffers:x.extensions&&x.extensions.drawBuffers,extensionShaderTextureLOD:x.extensions&&x.extensions.shaderTextureLOD,rendererExtensionFragDepth:u||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:u||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:u||n.has("EXT_shader_texture_lod"),customProgramCacheKey:x.customProgramCacheKey()}}function m(x){const A=[];if(x.shaderID?A.push(x.shaderID):(A.push(x.customVertexShaderID),A.push(x.customFragmentShaderID)),x.defines!==void 0)for(const R in x.defines)A.push(R),A.push(x.defines[R]);return x.isRawShaderMaterial===!1&&(_(A,x),b(A,x),A.push(i.outputEncoding)),A.push(x.customProgramCacheKey),A.join()}function _(x,A){x.push(A.precision),x.push(A.outputEncoding),x.push(A.envMapMode),x.push(A.envMapCubeUVHeight),x.push(A.combine),x.push(A.vertexUvs),x.push(A.fogExp2),x.push(A.sizeAttenuation),x.push(A.morphTargetsCount),x.push(A.morphAttributeCount),x.push(A.numDirLights),x.push(A.numPointLights),x.push(A.numSpotLights),x.push(A.numSpotLightMaps),x.push(A.numHemiLights),x.push(A.numRectAreaLights),x.push(A.numDirLightShadows),x.push(A.numPointLightShadows),x.push(A.numSpotLightShadows),x.push(A.numSpotLightShadowsWithMaps),x.push(A.shadowMapType),x.push(A.toneMapping),x.push(A.numClippingPlanes),x.push(A.numClipIntersection),x.push(A.depthPacking)}function b(x,A){a.disableAll(),A.isWebGL2&&a.enable(0),A.supportsVertexTextures&&a.enable(1),A.instancing&&a.enable(2),A.instancingColor&&a.enable(3),A.map&&a.enable(4),A.matcap&&a.enable(5),A.envMap&&a.enable(6),A.lightMap&&a.enable(7),A.aoMap&&a.enable(8),A.emissiveMap&&a.enable(9),A.bumpMap&&a.enable(10),A.normalMap&&a.enable(11),A.objectSpaceNormalMap&&a.enable(12),A.tangentSpaceNormalMap&&a.enable(13),A.clearcoat&&a.enable(14),A.clearcoatMap&&a.enable(15),A.clearcoatRoughnessMap&&a.enable(16),A.clearcoatNormalMap&&a.enable(17),A.iridescence&&a.enable(18),A.iridescenceMap&&a.enable(19),A.iridescenceThicknessMap&&a.enable(20),A.displacementMap&&a.enable(21),A.specularMap&&a.enable(22),A.roughnessMap&&a.enable(23),A.metalnessMap&&a.enable(24),A.gradientMap&&a.enable(25),A.alphaMap&&a.enable(26),A.alphaTest&&a.enable(27),A.vertexColors&&a.enable(28),A.vertexAlphas&&a.enable(29),A.vertexUvs&&a.enable(30),A.vertexTangents&&a.enable(31),A.uvsVertexOnly&&a.enable(32),x.push(a.mask),a.disableAll(),A.fog&&a.enable(0),A.useFog&&a.enable(1),A.flatShading&&a.enable(2),A.logarithmicDepthBuffer&&a.enable(3),A.skinning&&a.enable(4),A.morphTargets&&a.enable(5),A.morphNormals&&a.enable(6),A.morphColors&&a.enable(7),A.premultipliedAlpha&&a.enable(8),A.shadowMapEnabled&&a.enable(9),A.physicallyCorrectLights&&a.enable(10),A.doubleSided&&a.enable(11),A.flipSided&&a.enable(12),A.useDepthPacking&&a.enable(13),A.dithering&&a.enable(14),A.specularIntensityMap&&a.enable(15),A.specularColorMap&&a.enable(16),A.transmission&&a.enable(17),A.transmissionMap&&a.enable(18),A.thicknessMap&&a.enable(19),A.sheen&&a.enable(20),A.sheenColorMap&&a.enable(21),A.sheenRoughnessMap&&a.enable(22),A.decodeVideoTexture&&a.enable(23),A.opaque&&a.enable(24),x.push(a.mask)}function v(x){const A=g[x.type];let R;if(A){const j=bn[A];R=Av.clone(j.uniforms)}else R=x.uniforms;return R}function w(x,A){let R;for(let j=0,Q=c.length;j<Q;j++){const B=c[j];if(B.cacheKey===A){R=B,++R.usedTimes;break}}return R===void 0&&(R=new zb(i,A,x,s),c.push(R)),R}function S(x){if(--x.usedTimes===0){const A=c.indexOf(x);c[A]=c[c.length-1],c.pop(),x.destroy()}}function P(x){l.remove(x)}function I(){l.dispose()}return{getParameters:p,getProgramCacheKey:m,getUniforms:v,acquireProgram:w,releaseProgram:S,releaseShaderCache:P,programs:c,dispose:I}}function Gb(){let i=new WeakMap;function e(s){let o=i.get(s);return o===void 0&&(o={},i.set(s,o)),o}function t(s){i.delete(s)}function n(s,o,a){i.get(s)[o]=a}function r(){i=new WeakMap}return{get:e,remove:t,update:n,dispose:r}}function Hb(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function Sh(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function Th(){const i=[];let e=0;const t=[],n=[],r=[];function s(){e=0,t.length=0,n.length=0,r.length=0}function o(h,f,d,g,p,m){let _=i[e];return _===void 0?(_={id:h.id,object:h,geometry:f,material:d,groupOrder:g,renderOrder:h.renderOrder,z:p,group:m},i[e]=_):(_.id=h.id,_.object=h,_.geometry=f,_.material=d,_.groupOrder=g,_.renderOrder=h.renderOrder,_.z=p,_.group=m),e++,_}function a(h,f,d,g,p,m){const _=o(h,f,d,g,p,m);d.transmission>0?n.push(_):d.transparent===!0?r.push(_):t.push(_)}function l(h,f,d,g,p,m){const _=o(h,f,d,g,p,m);d.transmission>0?n.unshift(_):d.transparent===!0?r.unshift(_):t.unshift(_)}function c(h,f){t.length>1&&t.sort(h||Hb),n.length>1&&n.sort(f||Sh),r.length>1&&r.sort(f||Sh)}function u(){for(let h=e,f=i.length;h<f;h++){const d=i[h];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:t,transmissive:n,transparent:r,init:s,push:a,unshift:l,finish:u,sort:c}}function Wb(){let i=new WeakMap;function e(n,r){const s=i.get(n);let o;return s===void 0?(o=new Th,i.set(n,[o])):r>=s.length?(o=new Th,s.push(o)):o=s[r],o}function t(){i=new WeakMap}return{get:e,dispose:t}}function Xb(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new D,color:new Re};break;case"SpotLight":t={position:new D,direction:new D,color:new Re,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new D,color:new Re,distance:0,decay:0};break;case"HemisphereLight":t={direction:new D,skyColor:new Re,groundColor:new Re};break;case"RectAreaLight":t={color:new Re,position:new D,halfWidth:new D,halfHeight:new D};break}return i[e.id]=t,t}}}function jb(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ye};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ye};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ye,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let qb=0;function Yb(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function $b(i,e){const t=new Xb,n=jb(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0};for(let u=0;u<9;u++)r.probe.push(new D);const s=new D,o=new De,a=new De;function l(u,h){let f=0,d=0,g=0;for(let j=0;j<9;j++)r.probe[j].set(0,0,0);let p=0,m=0,_=0,b=0,v=0,w=0,S=0,P=0,I=0,x=0;u.sort(Yb);const A=h!==!0?Math.PI:1;for(let j=0,Q=u.length;j<Q;j++){const B=u[j],N=B.color,J=B.intensity,K=B.distance,ie=B.shadow&&B.shadow.map?B.shadow.map.texture:null;if(B.isAmbientLight)f+=N.r*J*A,d+=N.g*J*A,g+=N.b*J*A;else if(B.isLightProbe)for(let Y=0;Y<9;Y++)r.probe[Y].addScaledVector(B.sh.coefficients[Y],J);else if(B.isDirectionalLight){const Y=t.get(B);if(Y.color.copy(B.color).multiplyScalar(B.intensity*A),B.castShadow){const fe=B.shadow,de=n.get(B);de.shadowBias=fe.bias,de.shadowNormalBias=fe.normalBias,de.shadowRadius=fe.radius,de.shadowMapSize=fe.mapSize,r.directionalShadow[p]=de,r.directionalShadowMap[p]=ie,r.directionalShadowMatrix[p]=B.shadow.matrix,w++}r.directional[p]=Y,p++}else if(B.isSpotLight){const Y=t.get(B);Y.position.setFromMatrixPosition(B.matrixWorld),Y.color.copy(N).multiplyScalar(J*A),Y.distance=K,Y.coneCos=Math.cos(B.angle),Y.penumbraCos=Math.cos(B.angle*(1-B.penumbra)),Y.decay=B.decay,r.spot[_]=Y;const fe=B.shadow;if(B.map&&(r.spotLightMap[I]=B.map,I++,fe.updateMatrices(B),B.castShadow&&x++),r.spotLightMatrix[_]=fe.matrix,B.castShadow){const de=n.get(B);de.shadowBias=fe.bias,de.shadowNormalBias=fe.normalBias,de.shadowRadius=fe.radius,de.shadowMapSize=fe.mapSize,r.spotShadow[_]=de,r.spotShadowMap[_]=ie,P++}_++}else if(B.isRectAreaLight){const Y=t.get(B);Y.color.copy(N).multiplyScalar(J),Y.halfWidth.set(B.width*.5,0,0),Y.halfHeight.set(0,B.height*.5,0),r.rectArea[b]=Y,b++}else if(B.isPointLight){const Y=t.get(B);if(Y.color.copy(B.color).multiplyScalar(B.intensity*A),Y.distance=B.distance,Y.decay=B.decay,B.castShadow){const fe=B.shadow,de=n.get(B);de.shadowBias=fe.bias,de.shadowNormalBias=fe.normalBias,de.shadowRadius=fe.radius,de.shadowMapSize=fe.mapSize,de.shadowCameraNear=fe.camera.near,de.shadowCameraFar=fe.camera.far,r.pointShadow[m]=de,r.pointShadowMap[m]=ie,r.pointShadowMatrix[m]=B.shadow.matrix,S++}r.point[m]=Y,m++}else if(B.isHemisphereLight){const Y=t.get(B);Y.skyColor.copy(B.color).multiplyScalar(J*A),Y.groundColor.copy(B.groundColor).multiplyScalar(J*A),r.hemi[v]=Y,v++}}b>0&&(e.isWebGL2||i.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=Se.LTC_FLOAT_1,r.rectAreaLTC2=Se.LTC_FLOAT_2):i.has("OES_texture_half_float_linear")===!0?(r.rectAreaLTC1=Se.LTC_HALF_1,r.rectAreaLTC2=Se.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),r.ambient[0]=f,r.ambient[1]=d,r.ambient[2]=g;const R=r.hash;(R.directionalLength!==p||R.pointLength!==m||R.spotLength!==_||R.rectAreaLength!==b||R.hemiLength!==v||R.numDirectionalShadows!==w||R.numPointShadows!==S||R.numSpotShadows!==P||R.numSpotMaps!==I)&&(r.directional.length=p,r.spot.length=_,r.rectArea.length=b,r.point.length=m,r.hemi.length=v,r.directionalShadow.length=w,r.directionalShadowMap.length=w,r.pointShadow.length=S,r.pointShadowMap.length=S,r.spotShadow.length=P,r.spotShadowMap.length=P,r.directionalShadowMatrix.length=w,r.pointShadowMatrix.length=S,r.spotLightMatrix.length=P+I-x,r.spotLightMap.length=I,r.numSpotLightShadowsWithMaps=x,R.directionalLength=p,R.pointLength=m,R.spotLength=_,R.rectAreaLength=b,R.hemiLength=v,R.numDirectionalShadows=w,R.numPointShadows=S,R.numSpotShadows=P,R.numSpotMaps=I,r.version=qb++)}function c(u,h){let f=0,d=0,g=0,p=0,m=0;const _=h.matrixWorldInverse;for(let b=0,v=u.length;b<v;b++){const w=u[b];if(w.isDirectionalLight){const S=r.directional[f];S.direction.setFromMatrixPosition(w.matrixWorld),s.setFromMatrixPosition(w.target.matrixWorld),S.direction.sub(s),S.direction.transformDirection(_),f++}else if(w.isSpotLight){const S=r.spot[g];S.position.setFromMatrixPosition(w.matrixWorld),S.position.applyMatrix4(_),S.direction.setFromMatrixPosition(w.matrixWorld),s.setFromMatrixPosition(w.target.matrixWorld),S.direction.sub(s),S.direction.transformDirection(_),g++}else if(w.isRectAreaLight){const S=r.rectArea[p];S.position.setFromMatrixPosition(w.matrixWorld),S.position.applyMatrix4(_),a.identity(),o.copy(w.matrixWorld),o.premultiply(_),a.extractRotation(o),S.halfWidth.set(w.width*.5,0,0),S.halfHeight.set(0,w.height*.5,0),S.halfWidth.applyMatrix4(a),S.halfHeight.applyMatrix4(a),p++}else if(w.isPointLight){const S=r.point[d];S.position.setFromMatrixPosition(w.matrixWorld),S.position.applyMatrix4(_),d++}else if(w.isHemisphereLight){const S=r.hemi[m];S.direction.setFromMatrixPosition(w.matrixWorld),S.direction.transformDirection(_),m++}}}return{setup:l,setupView:c,state:r}}function Eh(i,e){const t=new $b(i,e),n=[],r=[];function s(){n.length=0,r.length=0}function o(h){n.push(h)}function a(h){r.push(h)}function l(h){t.setup(n,h)}function c(h){t.setupView(n,h)}return{init:s,state:{lightsArray:n,shadowsArray:r,lights:t},setupLights:l,setupLightsView:c,pushLight:o,pushShadow:a}}function Kb(i,e){let t=new WeakMap;function n(s,o=0){const a=t.get(s);let l;return a===void 0?(l=new Eh(i,e),t.set(s,[l])):o>=a.length?(l=new Eh(i,e),a.push(l)):l=a[o],l}function r(){t=new WeakMap}return{get:n,dispose:r}}class Zb extends ui{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Z0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Jb extends ui{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.referencePosition=new D,this.nearDistance=1,this.farDistance=1e3,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.referencePosition.copy(e.referencePosition),this.nearDistance=e.nearDistance,this.farDistance=e.farDistance,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Qb=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,ew=`uniform sampler2D shadow_pass;
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
}`;function tw(i,e,t){let n=new oc;const r=new ye,s=new ye,o=new Ke,a=new Zb({depthPacking:J0}),l=new Jb,c={},u=t.maxTextureSize,h={[ci]:Yt,[Yt]:ci,[qt]:qt},f=new Lt({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ye},radius:{value:4}},vertexShader:Qb,fragmentShader:ew}),d=f.clone();d.defines.HORIZONTAL_PASS=1;const g=new mt;g.setAttribute("position",new En(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const p=new pt(g,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=md,this.render=function(w,S,P){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||w.length===0)return;const I=i.getRenderTarget(),x=i.getActiveCubeFace(),A=i.getActiveMipmapLevel(),R=i.state;R.setBlending(oi),R.buffers.color.setClear(1,1,1,1),R.buffers.depth.setTest(!0),R.setScissorTest(!1);for(let j=0,Q=w.length;j<Q;j++){const B=w[j],N=B.shadow;if(N===void 0){console.warn("THREE.WebGLShadowMap:",B,"has no shadow.");continue}if(N.autoUpdate===!1&&N.needsUpdate===!1)continue;r.copy(N.mapSize);const J=N.getFrameExtents();if(r.multiply(J),s.copy(N.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/J.x),r.x=s.x*J.x,N.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/J.y),r.y=s.y*J.y,N.mapSize.y=s.y)),N.map===null){const ie=this.type!==Hr?{minFilter:Mt,magFilter:Mt}:{};N.map=new Fi(r.x,r.y,ie),N.map.texture.name=B.name+".shadowMap",N.camera.updateProjectionMatrix()}i.setRenderTarget(N.map),i.clear();const K=N.getViewportCount();for(let ie=0;ie<K;ie++){const Y=N.getViewport(ie);o.set(s.x*Y.x,s.y*Y.y,s.x*Y.z,s.y*Y.w),R.viewport(o),N.updateMatrices(B,ie),n=N.getFrustum(),v(S,P,N.camera,B,this.type)}N.isPointLightShadow!==!0&&this.type===Hr&&_(N,P),N.needsUpdate=!1}m.needsUpdate=!1,i.setRenderTarget(I,x,A)};function _(w,S){const P=e.update(p);f.defines.VSM_SAMPLES!==w.blurSamples&&(f.defines.VSM_SAMPLES=w.blurSamples,d.defines.VSM_SAMPLES=w.blurSamples,f.needsUpdate=!0,d.needsUpdate=!0),w.mapPass===null&&(w.mapPass=new Fi(r.x,r.y)),f.uniforms.shadow_pass.value=w.map.texture,f.uniforms.resolution.value=w.mapSize,f.uniforms.radius.value=w.radius,i.setRenderTarget(w.mapPass),i.clear(),i.renderBufferDirect(S,null,P,f,p,null),d.uniforms.shadow_pass.value=w.mapPass.texture,d.uniforms.resolution.value=w.mapSize,d.uniforms.radius.value=w.radius,i.setRenderTarget(w.map),i.clear(),i.renderBufferDirect(S,null,P,d,p,null)}function b(w,S,P,I,x,A){let R=null;const j=P.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(j!==void 0)R=j;else if(R=P.isPointLight===!0?l:a,i.localClippingEnabled&&S.clipShadows===!0&&Array.isArray(S.clippingPlanes)&&S.clippingPlanes.length!==0||S.displacementMap&&S.displacementScale!==0||S.alphaMap&&S.alphaTest>0||S.map&&S.alphaTest>0){const Q=R.uuid,B=S.uuid;let N=c[Q];N===void 0&&(N={},c[Q]=N);let J=N[B];J===void 0&&(J=R.clone(),N[B]=J),R=J}return R.visible=S.visible,R.wireframe=S.wireframe,A===Hr?R.side=S.shadowSide!==null?S.shadowSide:S.side:R.side=S.shadowSide!==null?S.shadowSide:h[S.side],R.alphaMap=S.alphaMap,R.alphaTest=S.alphaTest,R.map=S.map,R.clipShadows=S.clipShadows,R.clippingPlanes=S.clippingPlanes,R.clipIntersection=S.clipIntersection,R.displacementMap=S.displacementMap,R.displacementScale=S.displacementScale,R.displacementBias=S.displacementBias,R.wireframeLinewidth=S.wireframeLinewidth,R.linewidth=S.linewidth,P.isPointLight===!0&&R.isMeshDistanceMaterial===!0&&(R.referencePosition.setFromMatrixPosition(P.matrixWorld),R.nearDistance=I,R.farDistance=x),R}function v(w,S,P,I,x){if(w.visible===!1)return;if(w.layers.test(S.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&x===Hr)&&(!w.frustumCulled||n.intersectsObject(w))){w.modelViewMatrix.multiplyMatrices(P.matrixWorldInverse,w.matrixWorld);const j=e.update(w),Q=w.material;if(Array.isArray(Q)){const B=j.groups;for(let N=0,J=B.length;N<J;N++){const K=B[N],ie=Q[K.materialIndex];if(ie&&ie.visible){const Y=b(w,ie,I,P.near,P.far,x);i.renderBufferDirect(P,null,j,Y,w,K)}}}else if(Q.visible){const B=b(w,Q,I,P.near,P.far,x);i.renderBufferDirect(P,null,j,B,w,null)}}const R=w.children;for(let j=0,Q=R.length;j<Q;j++)v(R[j],S,P,I,x)}}function nw(i,e,t){const n=t.isWebGL2;function r(){let V=!1;const ae=new Ke;let _e=null;const Ce=new Ke(0,0,0,0);return{setMask:function(Le){_e!==Le&&!V&&(i.colorMask(Le,Le,Le,Le),_e=Le)},setLocked:function(Le){V=Le},setClear:function(Le,Ze,vt,Tt,hi){hi===!0&&(Le*=Tt,Ze*=Tt,vt*=Tt),ae.set(Le,Ze,vt,Tt),Ce.equals(ae)===!1&&(i.clearColor(Le,Ze,vt,Tt),Ce.copy(ae))},reset:function(){V=!1,_e=null,Ce.set(-1,0,0,0)}}}function s(){let V=!1,ae=null,_e=null,Ce=null;return{setTest:function(Le){Le?ee(2929):ce(2929)},setMask:function(Le){ae!==Le&&!V&&(i.depthMask(Le),ae=Le)},setFunc:function(Le){if(_e!==Le){switch(Le){case y0:i.depthFunc(512);break;case M0:i.depthFunc(519);break;case b0:i.depthFunc(513);break;case xl:i.depthFunc(515);break;case w0:i.depthFunc(514);break;case S0:i.depthFunc(518);break;case T0:i.depthFunc(516);break;case E0:i.depthFunc(517);break;default:i.depthFunc(515)}_e=Le}},setLocked:function(Le){V=Le},setClear:function(Le){Ce!==Le&&(i.clearDepth(Le),Ce=Le)},reset:function(){V=!1,ae=null,_e=null,Ce=null}}}function o(){let V=!1,ae=null,_e=null,Ce=null,Le=null,Ze=null,vt=null,Tt=null,hi=null;return{setTest:function(it){V||(it?ee(2960):ce(2960))},setMask:function(it){ae!==it&&!V&&(i.stencilMask(it),ae=it)},setFunc:function(it,Ln,$t){(_e!==it||Ce!==Ln||Le!==$t)&&(i.stencilFunc(it,Ln,$t),_e=it,Ce=Ln,Le=$t)},setOp:function(it,Ln,$t){(Ze!==it||vt!==Ln||Tt!==$t)&&(i.stencilOp(it,Ln,$t),Ze=it,vt=Ln,Tt=$t)},setLocked:function(it){V=it},setClear:function(it){hi!==it&&(i.clearStencil(it),hi=it)},reset:function(){V=!1,ae=null,_e=null,Ce=null,Le=null,Ze=null,vt=null,Tt=null,hi=null}}}const a=new r,l=new s,c=new o,u=new WeakMap,h=new WeakMap;let f={},d={},g=new WeakMap,p=[],m=null,_=!1,b=null,v=null,w=null,S=null,P=null,I=null,x=null,A=!1,R=null,j=null,Q=null,B=null,N=null;const J=i.getParameter(35661);let K=!1,ie=0;const Y=i.getParameter(7938);Y.indexOf("WebGL")!==-1?(ie=parseFloat(/^WebGL (\d)/.exec(Y)[1]),K=ie>=1):Y.indexOf("OpenGL ES")!==-1&&(ie=parseFloat(/^OpenGL ES (\d)/.exec(Y)[1]),K=ie>=2);let fe=null,de={};const xe=i.getParameter(3088),W=i.getParameter(2978),oe=new Ke().fromArray(xe),ve=new Ke().fromArray(W);function z(V,ae,_e){const Ce=new Uint8Array(4),Le=i.createTexture();i.bindTexture(V,Le),i.texParameteri(V,10241,9728),i.texParameteri(V,10240,9728);for(let Ze=0;Ze<_e;Ze++)i.texImage2D(ae+Ze,0,6408,1,1,0,6408,5121,Ce);return Le}const O={};O[3553]=z(3553,3553,1),O[34067]=z(34067,34069,6),a.setClear(0,0,0,1),l.setClear(1),c.setClear(0),ee(2929),l.setFunc(xl),k(!1),te(du),ee(2884),F(oi);function ee(V){f[V]!==!0&&(i.enable(V),f[V]=!0)}function ce(V){f[V]!==!1&&(i.disable(V),f[V]=!1)}function ge(V,ae){return d[V]!==ae?(i.bindFramebuffer(V,ae),d[V]=ae,n&&(V===36009&&(d[36160]=ae),V===36160&&(d[36009]=ae)),!0):!1}function pe(V,ae){let _e=p,Ce=!1;if(V)if(_e=g.get(ae),_e===void 0&&(_e=[],g.set(ae,_e)),V.isWebGLMultipleRenderTargets){const Le=V.texture;if(_e.length!==Le.length||_e[0]!==36064){for(let Ze=0,vt=Le.length;Ze<vt;Ze++)_e[Ze]=36064+Ze;_e.length=Le.length,Ce=!0}}else _e[0]!==36064&&(_e[0]=36064,Ce=!0);else _e[0]!==1029&&(_e[0]=1029,Ce=!0);Ce&&(t.isWebGL2?i.drawBuffers(_e):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(_e))}function Me(V){return m!==V?(i.useProgram(V),m=V,!0):!1}const y={[nr]:32774,[c0]:32778,[u0]:32779};if(n)y[_u]=32775,y[vu]=32776;else{const V=e.get("EXT_blend_minmax");V!==null&&(y[_u]=V.MIN_EXT,y[vu]=V.MAX_EXT)}const T={[h0]:0,[f0]:1,[d0]:768,[gd]:770,[x0]:776,[_0]:774,[m0]:772,[p0]:769,[_d]:771,[v0]:775,[g0]:773};function F(V,ae,_e,Ce,Le,Ze,vt,Tt){if(V===oi){_===!0&&(ce(3042),_=!1);return}if(_===!1&&(ee(3042),_=!0),V!==l0){if(V!==b||Tt!==A){if((v!==nr||P!==nr)&&(i.blendEquation(32774),v=nr,P=nr),Tt)switch(V){case fr:i.blendFuncSeparate(1,771,1,771);break;case pu:i.blendFunc(1,1);break;case mu:i.blendFuncSeparate(0,769,0,1);break;case gu:i.blendFuncSeparate(0,768,0,770);break;default:console.error("THREE.WebGLState: Invalid blending: ",V);break}else switch(V){case fr:i.blendFuncSeparate(770,771,1,771);break;case pu:i.blendFunc(770,1);break;case mu:i.blendFuncSeparate(0,769,0,1);break;case gu:i.blendFunc(0,768);break;default:console.error("THREE.WebGLState: Invalid blending: ",V);break}w=null,S=null,I=null,x=null,b=V,A=Tt}return}Le=Le||ae,Ze=Ze||_e,vt=vt||Ce,(ae!==v||Le!==P)&&(i.blendEquationSeparate(y[ae],y[Le]),v=ae,P=Le),(_e!==w||Ce!==S||Ze!==I||vt!==x)&&(i.blendFuncSeparate(T[_e],T[Ce],T[Ze],T[vt]),w=_e,S=Ce,I=Ze,x=vt),b=V,A=!1}function G(V,ae){V.side===qt?ce(2884):ee(2884);let _e=V.side===Yt;ae&&(_e=!_e),k(_e),V.blending===fr&&V.transparent===!1?F(oi):F(V.blending,V.blendEquation,V.blendSrc,V.blendDst,V.blendEquationAlpha,V.blendSrcAlpha,V.blendDstAlpha,V.premultipliedAlpha),l.setFunc(V.depthFunc),l.setTest(V.depthTest),l.setMask(V.depthWrite),a.setMask(V.colorWrite);const Ce=V.stencilWrite;c.setTest(Ce),Ce&&(c.setMask(V.stencilWriteMask),c.setFunc(V.stencilFunc,V.stencilRef,V.stencilFuncMask),c.setOp(V.stencilFail,V.stencilZFail,V.stencilZPass)),$(V.polygonOffset,V.polygonOffsetFactor,V.polygonOffsetUnits),V.alphaToCoverage===!0?ee(32926):ce(32926)}function k(V){R!==V&&(V?i.frontFace(2304):i.frontFace(2305),R=V)}function te(V){V!==s0?(ee(2884),V!==j&&(V===du?i.cullFace(1029):V===o0?i.cullFace(1028):i.cullFace(1032))):ce(2884),j=V}function re(V){V!==Q&&(K&&i.lineWidth(V),Q=V)}function $(V,ae,_e){V?(ee(32823),(B!==ae||N!==_e)&&(i.polygonOffset(ae,_e),B=ae,N=_e)):ce(32823)}function he(V){V?ee(3089):ce(3089)}function ne(V){V===void 0&&(V=33984+J-1),fe!==V&&(i.activeTexture(V),fe=V)}function E(V,ae,_e){_e===void 0&&(fe===null?_e=33984+J-1:_e=fe);let Ce=de[_e];Ce===void 0&&(Ce={type:void 0,texture:void 0},de[_e]=Ce),(Ce.type!==V||Ce.texture!==ae)&&(fe!==_e&&(i.activeTexture(_e),fe=_e),i.bindTexture(V,ae||O[V]),Ce.type=V,Ce.texture=ae)}function M(){const V=de[fe];V!==void 0&&V.type!==void 0&&(i.bindTexture(V.type,null),V.type=void 0,V.texture=void 0)}function U(){try{i.compressedTexImage2D.apply(i,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Z(){try{i.compressedTexImage3D.apply(i,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function se(){try{i.texSubImage2D.apply(i,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function me(){try{i.texSubImage3D.apply(i,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function be(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function L(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function H(){try{i.texStorage2D.apply(i,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function we(){try{i.texStorage3D.apply(i,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Ae(){try{i.texImage2D.apply(i,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Te(){try{i.texImage3D.apply(i,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Pe(V){oe.equals(V)===!1&&(i.scissor(V.x,V.y,V.z,V.w),oe.copy(V))}function Ee(V){ve.equals(V)===!1&&(i.viewport(V.x,V.y,V.z,V.w),ve.copy(V))}function Fe(V,ae){let _e=h.get(ae);_e===void 0&&(_e=new WeakMap,h.set(ae,_e));let Ce=_e.get(V);Ce===void 0&&(Ce=i.getUniformBlockIndex(ae,V.name),_e.set(V,Ce))}function ke(V,ae){const Ce=h.get(ae).get(V);u.get(ae)!==Ce&&(i.uniformBlockBinding(ae,Ce,V.__bindingPointIndex),u.set(ae,Ce))}function et(){i.disable(3042),i.disable(2884),i.disable(2929),i.disable(32823),i.disable(3089),i.disable(2960),i.disable(32926),i.blendEquation(32774),i.blendFunc(1,0),i.blendFuncSeparate(1,0,1,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(513),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(519,0,4294967295),i.stencilOp(7680,7680,7680),i.clearStencil(0),i.cullFace(1029),i.frontFace(2305),i.polygonOffset(0,0),i.activeTexture(33984),i.bindFramebuffer(36160,null),n===!0&&(i.bindFramebuffer(36009,null),i.bindFramebuffer(36008,null)),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),f={},fe=null,de={},d={},g=new WeakMap,p=[],m=null,_=!1,b=null,v=null,w=null,S=null,P=null,I=null,x=null,A=!1,R=null,j=null,Q=null,B=null,N=null,oe.set(0,0,i.canvas.width,i.canvas.height),ve.set(0,0,i.canvas.width,i.canvas.height),a.reset(),l.reset(),c.reset()}return{buffers:{color:a,depth:l,stencil:c},enable:ee,disable:ce,bindFramebuffer:ge,drawBuffers:pe,useProgram:Me,setBlending:F,setMaterial:G,setFlipSided:k,setCullFace:te,setLineWidth:re,setPolygonOffset:$,setScissorTest:he,activeTexture:ne,bindTexture:E,unbindTexture:M,compressedTexImage2D:U,compressedTexImage3D:Z,texImage2D:Ae,texImage3D:Te,updateUBOMapping:Fe,uniformBlockBinding:ke,texStorage2D:H,texStorage3D:we,texSubImage2D:se,texSubImage3D:me,compressedTexSubImage2D:be,compressedTexSubImage3D:L,scissor:Pe,viewport:Ee,reset:et}}function iw(i,e,t,n,r,s,o){const a=r.isWebGL2,l=r.maxTextures,c=r.maxCubemapSize,u=r.maxTextureSize,h=r.maxSamples,f=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,d=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),g=new WeakMap;let p;const m=new WeakMap;let _=!1;try{_=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function b(E,M){return _?new OffscreenCanvas(E,M):ms("canvas")}function v(E,M,U,Z){let se=1;if((E.width>Z||E.height>Z)&&(se=Z/Math.max(E.width,E.height)),se<1||M===!0)if(typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&E instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&E instanceof ImageBitmap){const me=M?Ao:Math.floor,be=me(se*E.width),L=me(se*E.height);p===void 0&&(p=b(be,L));const H=U?b(be,L):p;return H.width=be,H.height=L,H.getContext("2d").drawImage(E,0,0,be,L),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+E.width+"x"+E.height+") to ("+be+"x"+L+")."),H}else return"data"in E&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+E.width+"x"+E.height+")."),E;return E}function w(E){return wl(E.width)&&wl(E.height)}function S(E){return a?!1:E.wrapS!==jt||E.wrapT!==jt||E.minFilter!==Mt&&E.minFilter!==Jt}function P(E,M){return E.generateMipmaps&&M&&E.minFilter!==Mt&&E.minFilter!==Jt}function I(E){i.generateMipmap(E)}function x(E,M,U,Z,se=!1){if(a===!1)return M;if(E!==null){if(i[E]!==void 0)return i[E];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+E+"'")}let me=M;return M===6403&&(U===5126&&(me=33326),U===5131&&(me=33325),U===5121&&(me=33321)),M===33319&&(U===5126&&(me=33328),U===5131&&(me=33327),U===5121&&(me=33323)),M===6408&&(U===5126&&(me=34836),U===5131&&(me=34842),U===5121&&(me=Z===Je&&se===!1?35907:32856),U===32819&&(me=32854),U===32820&&(me=32855)),(me===33325||me===33326||me===33327||me===33328||me===34842||me===34836)&&e.get("EXT_color_buffer_float"),me}function A(E,M,U){return P(E,U)===!0||E.isFramebufferTexture&&E.minFilter!==Mt&&E.minFilter!==Jt?Math.log2(Math.max(M.width,M.height))+1:E.mipmaps!==void 0&&E.mipmaps.length>0?E.mipmaps.length:E.isCompressedTexture&&Array.isArray(E.image)?M.mipmaps.length:1}function R(E){return E===Mt||E===xu||E===ha?9728:9729}function j(E){const M=E.target;M.removeEventListener("dispose",j),B(M),M.isVideoTexture&&g.delete(M)}function Q(E){const M=E.target;M.removeEventListener("dispose",Q),J(M)}function B(E){const M=n.get(E);if(M.__webglInit===void 0)return;const U=E.source,Z=m.get(U);if(Z){const se=Z[M.__cacheKey];se.usedTimes--,se.usedTimes===0&&N(E),Object.keys(Z).length===0&&m.delete(U)}n.remove(E)}function N(E){const M=n.get(E);i.deleteTexture(M.__webglTexture);const U=E.source,Z=m.get(U);delete Z[M.__cacheKey],o.memory.textures--}function J(E){const M=E.texture,U=n.get(E),Z=n.get(M);if(Z.__webglTexture!==void 0&&(i.deleteTexture(Z.__webglTexture),o.memory.textures--),E.depthTexture&&E.depthTexture.dispose(),E.isWebGLCubeRenderTarget)for(let se=0;se<6;se++)i.deleteFramebuffer(U.__webglFramebuffer[se]),U.__webglDepthbuffer&&i.deleteRenderbuffer(U.__webglDepthbuffer[se]);else{if(i.deleteFramebuffer(U.__webglFramebuffer),U.__webglDepthbuffer&&i.deleteRenderbuffer(U.__webglDepthbuffer),U.__webglMultisampledFramebuffer&&i.deleteFramebuffer(U.__webglMultisampledFramebuffer),U.__webglColorRenderbuffer)for(let se=0;se<U.__webglColorRenderbuffer.length;se++)U.__webglColorRenderbuffer[se]&&i.deleteRenderbuffer(U.__webglColorRenderbuffer[se]);U.__webglDepthRenderbuffer&&i.deleteRenderbuffer(U.__webglDepthRenderbuffer)}if(E.isWebGLMultipleRenderTargets)for(let se=0,me=M.length;se<me;se++){const be=n.get(M[se]);be.__webglTexture&&(i.deleteTexture(be.__webglTexture),o.memory.textures--),n.remove(M[se])}n.remove(M),n.remove(E)}let K=0;function ie(){K=0}function Y(){const E=K;return E>=l&&console.warn("THREE.WebGLTextures: Trying to use "+E+" texture units while this GPU supports only "+l),K+=1,E}function fe(E){const M=[];return M.push(E.wrapS),M.push(E.wrapT),M.push(E.wrapR||0),M.push(E.magFilter),M.push(E.minFilter),M.push(E.anisotropy),M.push(E.internalFormat),M.push(E.format),M.push(E.type),M.push(E.generateMipmaps),M.push(E.premultiplyAlpha),M.push(E.flipY),M.push(E.unpackAlignment),M.push(E.encoding),M.join()}function de(E,M){const U=n.get(E);if(E.isVideoTexture&&he(E),E.isRenderTargetTexture===!1&&E.version>0&&U.__version!==E.version){const Z=E.image;if(Z===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Z.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ce(U,E,M);return}}t.bindTexture(3553,U.__webglTexture,33984+M)}function xe(E,M){const U=n.get(E);if(E.version>0&&U.__version!==E.version){ce(U,E,M);return}t.bindTexture(35866,U.__webglTexture,33984+M)}function W(E,M){const U=n.get(E);if(E.version>0&&U.__version!==E.version){ce(U,E,M);return}t.bindTexture(32879,U.__webglTexture,33984+M)}function oe(E,M){const U=n.get(E);if(E.version>0&&U.__version!==E.version){ge(U,E,M);return}t.bindTexture(34067,U.__webglTexture,33984+M)}const ve={[us]:10497,[jt]:33071,[Ml]:33648},z={[Mt]:9728,[xu]:9984,[ha]:9986,[Jt]:9729,[F0]:9985,[hs]:9987};function O(E,M,U){if(U?(i.texParameteri(E,10242,ve[M.wrapS]),i.texParameteri(E,10243,ve[M.wrapT]),(E===32879||E===35866)&&i.texParameteri(E,32882,ve[M.wrapR]),i.texParameteri(E,10240,z[M.magFilter]),i.texParameteri(E,10241,z[M.minFilter])):(i.texParameteri(E,10242,33071),i.texParameteri(E,10243,33071),(E===32879||E===35866)&&i.texParameteri(E,32882,33071),(M.wrapS!==jt||M.wrapT!==jt)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),i.texParameteri(E,10240,R(M.magFilter)),i.texParameteri(E,10241,R(M.minFilter)),M.minFilter!==Mt&&M.minFilter!==Jt&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),e.has("EXT_texture_filter_anisotropic")===!0){const Z=e.get("EXT_texture_filter_anisotropic");if(M.magFilter===Mt||M.minFilter!==ha&&M.minFilter!==hs||M.type===ni&&e.has("OES_texture_float_linear")===!1||a===!1&&M.type===fs&&e.has("OES_texture_half_float_linear")===!1)return;(M.anisotropy>1||n.get(M).__currentAnisotropy)&&(i.texParameterf(E,Z.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,r.getMaxAnisotropy())),n.get(M).__currentAnisotropy=M.anisotropy)}}function ee(E,M){let U=!1;E.__webglInit===void 0&&(E.__webglInit=!0,M.addEventListener("dispose",j));const Z=M.source;let se=m.get(Z);se===void 0&&(se={},m.set(Z,se));const me=fe(M);if(me!==E.__cacheKey){se[me]===void 0&&(se[me]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,U=!0),se[me].usedTimes++;const be=se[E.__cacheKey];be!==void 0&&(se[E.__cacheKey].usedTimes--,be.usedTimes===0&&N(M)),E.__cacheKey=me,E.__webglTexture=se[me].texture}return U}function ce(E,M,U){let Z=3553;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(Z=35866),M.isData3DTexture&&(Z=32879);const se=ee(E,M),me=M.source;t.bindTexture(Z,E.__webglTexture,33984+U);const be=n.get(me);if(me.version!==be.__version||se===!0){t.activeTexture(33984+U),i.pixelStorei(37440,M.flipY),i.pixelStorei(37441,M.premultiplyAlpha),i.pixelStorei(3317,M.unpackAlignment),i.pixelStorei(37443,0);const L=S(M)&&w(M.image)===!1;let H=v(M.image,L,!1,u);H=ne(M,H);const we=w(H)||a,Ae=s.convert(M.format,M.encoding);let Te=s.convert(M.type),Pe=x(M.internalFormat,Ae,Te,M.encoding,M.isVideoTexture);O(Z,M,we);let Ee;const Fe=M.mipmaps,ke=a&&M.isVideoTexture!==!0,et=be.__version===void 0||se===!0,V=A(M,H,we);if(M.isDepthTexture)Pe=6402,a?M.type===ni?Pe=36012:M.type===Ai?Pe=33190:M.type===dr?Pe=35056:Pe=33189:M.type===ni&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),M.format===Li&&Pe===6402&&M.type!==xd&&M.type!==Ai&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),M.type=Ai,Te=s.convert(M.type)),M.format===br&&Pe===6402&&(Pe=34041,M.type!==dr&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),M.type=dr,Te=s.convert(M.type))),et&&(ke?t.texStorage2D(3553,1,Pe,H.width,H.height):t.texImage2D(3553,0,Pe,H.width,H.height,0,Ae,Te,null));else if(M.isDataTexture)if(Fe.length>0&&we){ke&&et&&t.texStorage2D(3553,V,Pe,Fe[0].width,Fe[0].height);for(let ae=0,_e=Fe.length;ae<_e;ae++)Ee=Fe[ae],ke?t.texSubImage2D(3553,ae,0,0,Ee.width,Ee.height,Ae,Te,Ee.data):t.texImage2D(3553,ae,Pe,Ee.width,Ee.height,0,Ae,Te,Ee.data);M.generateMipmaps=!1}else ke?(et&&t.texStorage2D(3553,V,Pe,H.width,H.height),t.texSubImage2D(3553,0,0,0,H.width,H.height,Ae,Te,H.data)):t.texImage2D(3553,0,Pe,H.width,H.height,0,Ae,Te,H.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){ke&&et&&t.texStorage3D(35866,V,Pe,Fe[0].width,Fe[0].height,H.depth);for(let ae=0,_e=Fe.length;ae<_e;ae++)Ee=Fe[ae],M.format!==en?Ae!==null?ke?t.compressedTexSubImage3D(35866,ae,0,0,0,Ee.width,Ee.height,H.depth,Ae,Ee.data,0,0):t.compressedTexImage3D(35866,ae,Pe,Ee.width,Ee.height,H.depth,0,Ee.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ke?t.texSubImage3D(35866,ae,0,0,0,Ee.width,Ee.height,H.depth,Ae,Te,Ee.data):t.texImage3D(35866,ae,Pe,Ee.width,Ee.height,H.depth,0,Ae,Te,Ee.data)}else{ke&&et&&t.texStorage2D(3553,V,Pe,Fe[0].width,Fe[0].height);for(let ae=0,_e=Fe.length;ae<_e;ae++)Ee=Fe[ae],M.format!==en?Ae!==null?ke?t.compressedTexSubImage2D(3553,ae,0,0,Ee.width,Ee.height,Ae,Ee.data):t.compressedTexImage2D(3553,ae,Pe,Ee.width,Ee.height,0,Ee.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ke?t.texSubImage2D(3553,ae,0,0,Ee.width,Ee.height,Ae,Te,Ee.data):t.texImage2D(3553,ae,Pe,Ee.width,Ee.height,0,Ae,Te,Ee.data)}else if(M.isDataArrayTexture)ke?(et&&t.texStorage3D(35866,V,Pe,H.width,H.height,H.depth),t.texSubImage3D(35866,0,0,0,0,H.width,H.height,H.depth,Ae,Te,H.data)):t.texImage3D(35866,0,Pe,H.width,H.height,H.depth,0,Ae,Te,H.data);else if(M.isData3DTexture)ke?(et&&t.texStorage3D(32879,V,Pe,H.width,H.height,H.depth),t.texSubImage3D(32879,0,0,0,0,H.width,H.height,H.depth,Ae,Te,H.data)):t.texImage3D(32879,0,Pe,H.width,H.height,H.depth,0,Ae,Te,H.data);else if(M.isFramebufferTexture){if(et)if(ke)t.texStorage2D(3553,V,Pe,H.width,H.height);else{let ae=H.width,_e=H.height;for(let Ce=0;Ce<V;Ce++)t.texImage2D(3553,Ce,Pe,ae,_e,0,Ae,Te,null),ae>>=1,_e>>=1}}else if(Fe.length>0&&we){ke&&et&&t.texStorage2D(3553,V,Pe,Fe[0].width,Fe[0].height);for(let ae=0,_e=Fe.length;ae<_e;ae++)Ee=Fe[ae],ke?t.texSubImage2D(3553,ae,0,0,Ae,Te,Ee):t.texImage2D(3553,ae,Pe,Ae,Te,Ee);M.generateMipmaps=!1}else ke?(et&&t.texStorage2D(3553,V,Pe,H.width,H.height),t.texSubImage2D(3553,0,0,0,Ae,Te,H)):t.texImage2D(3553,0,Pe,Ae,Te,H);P(M,we)&&I(Z),be.__version=me.version,M.onUpdate&&M.onUpdate(M)}E.__version=M.version}function ge(E,M,U){if(M.image.length!==6)return;const Z=ee(E,M),se=M.source;t.bindTexture(34067,E.__webglTexture,33984+U);const me=n.get(se);if(se.version!==me.__version||Z===!0){t.activeTexture(33984+U),i.pixelStorei(37440,M.flipY),i.pixelStorei(37441,M.premultiplyAlpha),i.pixelStorei(3317,M.unpackAlignment),i.pixelStorei(37443,0);const be=M.isCompressedTexture||M.image[0].isCompressedTexture,L=M.image[0]&&M.image[0].isDataTexture,H=[];for(let ae=0;ae<6;ae++)!be&&!L?H[ae]=v(M.image[ae],!1,!0,c):H[ae]=L?M.image[ae].image:M.image[ae],H[ae]=ne(M,H[ae]);const we=H[0],Ae=w(we)||a,Te=s.convert(M.format,M.encoding),Pe=s.convert(M.type),Ee=x(M.internalFormat,Te,Pe,M.encoding),Fe=a&&M.isVideoTexture!==!0,ke=me.__version===void 0||Z===!0;let et=A(M,we,Ae);O(34067,M,Ae);let V;if(be){Fe&&ke&&t.texStorage2D(34067,et,Ee,we.width,we.height);for(let ae=0;ae<6;ae++){V=H[ae].mipmaps;for(let _e=0;_e<V.length;_e++){const Ce=V[_e];M.format!==en?Te!==null?Fe?t.compressedTexSubImage2D(34069+ae,_e,0,0,Ce.width,Ce.height,Te,Ce.data):t.compressedTexImage2D(34069+ae,_e,Ee,Ce.width,Ce.height,0,Ce.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Fe?t.texSubImage2D(34069+ae,_e,0,0,Ce.width,Ce.height,Te,Pe,Ce.data):t.texImage2D(34069+ae,_e,Ee,Ce.width,Ce.height,0,Te,Pe,Ce.data)}}}else{V=M.mipmaps,Fe&&ke&&(V.length>0&&et++,t.texStorage2D(34067,et,Ee,H[0].width,H[0].height));for(let ae=0;ae<6;ae++)if(L){Fe?t.texSubImage2D(34069+ae,0,0,0,H[ae].width,H[ae].height,Te,Pe,H[ae].data):t.texImage2D(34069+ae,0,Ee,H[ae].width,H[ae].height,0,Te,Pe,H[ae].data);for(let _e=0;_e<V.length;_e++){const Le=V[_e].image[ae].image;Fe?t.texSubImage2D(34069+ae,_e+1,0,0,Le.width,Le.height,Te,Pe,Le.data):t.texImage2D(34069+ae,_e+1,Ee,Le.width,Le.height,0,Te,Pe,Le.data)}}else{Fe?t.texSubImage2D(34069+ae,0,0,0,Te,Pe,H[ae]):t.texImage2D(34069+ae,0,Ee,Te,Pe,H[ae]);for(let _e=0;_e<V.length;_e++){const Ce=V[_e];Fe?t.texSubImage2D(34069+ae,_e+1,0,0,Te,Pe,Ce.image[ae]):t.texImage2D(34069+ae,_e+1,Ee,Te,Pe,Ce.image[ae])}}}P(M,Ae)&&I(34067),me.__version=se.version,M.onUpdate&&M.onUpdate(M)}E.__version=M.version}function pe(E,M,U,Z,se){const me=s.convert(U.format,U.encoding),be=s.convert(U.type),L=x(U.internalFormat,me,be,U.encoding);n.get(M).__hasExternalTextures||(se===32879||se===35866?t.texImage3D(se,0,L,M.width,M.height,M.depth,0,me,be,null):t.texImage2D(se,0,L,M.width,M.height,0,me,be,null)),t.bindFramebuffer(36160,E),$(M)?f.framebufferTexture2DMultisampleEXT(36160,Z,se,n.get(U).__webglTexture,0,re(M)):(se===3553||se>=34069&&se<=34074)&&i.framebufferTexture2D(36160,Z,se,n.get(U).__webglTexture,0),t.bindFramebuffer(36160,null)}function Me(E,M,U){if(i.bindRenderbuffer(36161,E),M.depthBuffer&&!M.stencilBuffer){let Z=33189;if(U||$(M)){const se=M.depthTexture;se&&se.isDepthTexture&&(se.type===ni?Z=36012:se.type===Ai&&(Z=33190));const me=re(M);$(M)?f.renderbufferStorageMultisampleEXT(36161,me,Z,M.width,M.height):i.renderbufferStorageMultisample(36161,me,Z,M.width,M.height)}else i.renderbufferStorage(36161,Z,M.width,M.height);i.framebufferRenderbuffer(36160,36096,36161,E)}else if(M.depthBuffer&&M.stencilBuffer){const Z=re(M);U&&$(M)===!1?i.renderbufferStorageMultisample(36161,Z,35056,M.width,M.height):$(M)?f.renderbufferStorageMultisampleEXT(36161,Z,35056,M.width,M.height):i.renderbufferStorage(36161,34041,M.width,M.height),i.framebufferRenderbuffer(36160,33306,36161,E)}else{const Z=M.isWebGLMultipleRenderTargets===!0?M.texture:[M.texture];for(let se=0;se<Z.length;se++){const me=Z[se],be=s.convert(me.format,me.encoding),L=s.convert(me.type),H=x(me.internalFormat,be,L,me.encoding),we=re(M);U&&$(M)===!1?i.renderbufferStorageMultisample(36161,we,H,M.width,M.height):$(M)?f.renderbufferStorageMultisampleEXT(36161,we,H,M.width,M.height):i.renderbufferStorage(36161,H,M.width,M.height)}}i.bindRenderbuffer(36161,null)}function y(E,M){if(M&&M.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(36160,E),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(M.depthTexture).__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),de(M.depthTexture,0);const Z=n.get(M.depthTexture).__webglTexture,se=re(M);if(M.depthTexture.format===Li)$(M)?f.framebufferTexture2DMultisampleEXT(36160,36096,3553,Z,0,se):i.framebufferTexture2D(36160,36096,3553,Z,0);else if(M.depthTexture.format===br)$(M)?f.framebufferTexture2DMultisampleEXT(36160,33306,3553,Z,0,se):i.framebufferTexture2D(36160,33306,3553,Z,0);else throw new Error("Unknown depthTexture format")}function T(E){const M=n.get(E),U=E.isWebGLCubeRenderTarget===!0;if(E.depthTexture&&!M.__autoAllocateDepthBuffer){if(U)throw new Error("target.depthTexture not supported in Cube render targets");y(M.__webglFramebuffer,E)}else if(U){M.__webglDepthbuffer=[];for(let Z=0;Z<6;Z++)t.bindFramebuffer(36160,M.__webglFramebuffer[Z]),M.__webglDepthbuffer[Z]=i.createRenderbuffer(),Me(M.__webglDepthbuffer[Z],E,!1)}else t.bindFramebuffer(36160,M.__webglFramebuffer),M.__webglDepthbuffer=i.createRenderbuffer(),Me(M.__webglDepthbuffer,E,!1);t.bindFramebuffer(36160,null)}function F(E,M,U){const Z=n.get(E);M!==void 0&&pe(Z.__webglFramebuffer,E,E.texture,36064,3553),U!==void 0&&T(E)}function G(E){const M=E.texture,U=n.get(E),Z=n.get(M);E.addEventListener("dispose",Q),E.isWebGLMultipleRenderTargets!==!0&&(Z.__webglTexture===void 0&&(Z.__webglTexture=i.createTexture()),Z.__version=M.version,o.memory.textures++);const se=E.isWebGLCubeRenderTarget===!0,me=E.isWebGLMultipleRenderTargets===!0,be=w(E)||a;if(se){U.__webglFramebuffer=[];for(let L=0;L<6;L++)U.__webglFramebuffer[L]=i.createFramebuffer()}else{if(U.__webglFramebuffer=i.createFramebuffer(),me)if(r.drawBuffers){const L=E.texture;for(let H=0,we=L.length;H<we;H++){const Ae=n.get(L[H]);Ae.__webglTexture===void 0&&(Ae.__webglTexture=i.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&E.samples>0&&$(E)===!1){const L=me?M:[M];U.__webglMultisampledFramebuffer=i.createFramebuffer(),U.__webglColorRenderbuffer=[],t.bindFramebuffer(36160,U.__webglMultisampledFramebuffer);for(let H=0;H<L.length;H++){const we=L[H];U.__webglColorRenderbuffer[H]=i.createRenderbuffer(),i.bindRenderbuffer(36161,U.__webglColorRenderbuffer[H]);const Ae=s.convert(we.format,we.encoding),Te=s.convert(we.type),Pe=x(we.internalFormat,Ae,Te,we.encoding,E.isXRRenderTarget===!0),Ee=re(E);i.renderbufferStorageMultisample(36161,Ee,Pe,E.width,E.height),i.framebufferRenderbuffer(36160,36064+H,36161,U.__webglColorRenderbuffer[H])}i.bindRenderbuffer(36161,null),E.depthBuffer&&(U.__webglDepthRenderbuffer=i.createRenderbuffer(),Me(U.__webglDepthRenderbuffer,E,!0)),t.bindFramebuffer(36160,null)}}if(se){t.bindTexture(34067,Z.__webglTexture),O(34067,M,be);for(let L=0;L<6;L++)pe(U.__webglFramebuffer[L],E,M,36064,34069+L);P(M,be)&&I(34067),t.unbindTexture()}else if(me){const L=E.texture;for(let H=0,we=L.length;H<we;H++){const Ae=L[H],Te=n.get(Ae);t.bindTexture(3553,Te.__webglTexture),O(3553,Ae,be),pe(U.__webglFramebuffer,E,Ae,36064+H,3553),P(Ae,be)&&I(3553)}t.unbindTexture()}else{let L=3553;(E.isWebGL3DRenderTarget||E.isWebGLArrayRenderTarget)&&(a?L=E.isWebGL3DRenderTarget?32879:35866:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(L,Z.__webglTexture),O(L,M,be),pe(U.__webglFramebuffer,E,M,36064,L),P(M,be)&&I(L),t.unbindTexture()}E.depthBuffer&&T(E)}function k(E){const M=w(E)||a,U=E.isWebGLMultipleRenderTargets===!0?E.texture:[E.texture];for(let Z=0,se=U.length;Z<se;Z++){const me=U[Z];if(P(me,M)){const be=E.isWebGLCubeRenderTarget?34067:3553,L=n.get(me).__webglTexture;t.bindTexture(be,L),I(be),t.unbindTexture()}}}function te(E){if(a&&E.samples>0&&$(E)===!1){const M=E.isWebGLMultipleRenderTargets?E.texture:[E.texture],U=E.width,Z=E.height;let se=16384;const me=[],be=E.stencilBuffer?33306:36096,L=n.get(E),H=E.isWebGLMultipleRenderTargets===!0;if(H)for(let we=0;we<M.length;we++)t.bindFramebuffer(36160,L.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(36160,36064+we,36161,null),t.bindFramebuffer(36160,L.__webglFramebuffer),i.framebufferTexture2D(36009,36064+we,3553,null,0);t.bindFramebuffer(36008,L.__webglMultisampledFramebuffer),t.bindFramebuffer(36009,L.__webglFramebuffer);for(let we=0;we<M.length;we++){me.push(36064+we),E.depthBuffer&&me.push(be);const Ae=L.__ignoreDepthValues!==void 0?L.__ignoreDepthValues:!1;if(Ae===!1&&(E.depthBuffer&&(se|=256),E.stencilBuffer&&(se|=1024)),H&&i.framebufferRenderbuffer(36008,36064,36161,L.__webglColorRenderbuffer[we]),Ae===!0&&(i.invalidateFramebuffer(36008,[be]),i.invalidateFramebuffer(36009,[be])),H){const Te=n.get(M[we]).__webglTexture;i.framebufferTexture2D(36009,36064,3553,Te,0)}i.blitFramebuffer(0,0,U,Z,0,0,U,Z,se,9728),d&&i.invalidateFramebuffer(36008,me)}if(t.bindFramebuffer(36008,null),t.bindFramebuffer(36009,null),H)for(let we=0;we<M.length;we++){t.bindFramebuffer(36160,L.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(36160,36064+we,36161,L.__webglColorRenderbuffer[we]);const Ae=n.get(M[we]).__webglTexture;t.bindFramebuffer(36160,L.__webglFramebuffer),i.framebufferTexture2D(36009,36064+we,3553,Ae,0)}t.bindFramebuffer(36009,L.__webglMultisampledFramebuffer)}}function re(E){return Math.min(h,E.samples)}function $(E){const M=n.get(E);return a&&E.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function he(E){const M=o.render.frame;g.get(E)!==M&&(g.set(E,M),E.update())}function ne(E,M){const U=E.encoding,Z=E.format,se=E.type;return E.isCompressedTexture===!0||E.isVideoTexture===!0||E.format===bl||U!==Ii&&(U===Je?a===!1?e.has("EXT_sRGB")===!0&&Z===en?(E.format=bl,E.minFilter=Jt,E.generateMipmaps=!1):M=wd.sRGBToLinear(M):(Z!==en||se!==Di)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture encoding:",U)),M}this.allocateTextureUnit=Y,this.resetTextureUnits=ie,this.setTexture2D=de,this.setTexture2DArray=xe,this.setTexture3D=W,this.setTextureCube=oe,this.rebindTextures=F,this.setupRenderTarget=G,this.updateRenderTargetMipmap=k,this.updateMultisampleRenderTarget=te,this.setupDepthRenderbuffer=T,this.setupFrameBufferTexture=pe,this.useMultisampledRTT=$}function rw(i,e,t){const n=t.isWebGL2;function r(s,o=null){let a;if(s===Di)return 5121;if(s===U0)return 32819;if(s===B0)return 32820;if(s===O0)return 5120;if(s===N0)return 5122;if(s===xd)return 5123;if(s===z0)return 5124;if(s===Ai)return 5125;if(s===ni)return 5126;if(s===fs)return n?5131:(a=e.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(s===k0)return 6406;if(s===en)return 6408;if(s===V0)return 6409;if(s===G0)return 6410;if(s===Li)return 6402;if(s===br)return 34041;if(s===bl)return a=e.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(s===H0)return 6403;if(s===W0)return 36244;if(s===X0)return 33319;if(s===j0)return 33320;if(s===q0)return 36249;if(s===fa||s===da||s===pa||s===ma)if(o===Je)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(s===fa)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===da)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===pa)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===ma)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(s===fa)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===da)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===pa)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===ma)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===yu||s===Mu||s===bu||s===wu)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(s===yu)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===Mu)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===bu)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===wu)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===Y0)return a=e.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===Su||s===Tu)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(s===Su)return o===Je?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(s===Tu)return o===Je?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===Eu||s===Au||s===Cu||s===Pu||s===Lu||s===Ru||s===Du||s===Iu||s===Fu||s===Ou||s===Nu||s===zu||s===Uu||s===Bu)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(s===Eu)return o===Je?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===Au)return o===Je?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===Cu)return o===Je?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===Pu)return o===Je?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===Lu)return o===Je?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===Ru)return o===Je?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===Du)return o===Je?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===Iu)return o===Je?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===Fu)return o===Je?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===Ou)return o===Je?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===Nu)return o===Je?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===zu)return o===Je?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===Uu)return o===Je?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===Bu)return o===Je?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===ga)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(s===ga)return o===Je?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT}else return null;if(s===$0||s===ku||s===Vu||s===Gu)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(s===ga)return a.COMPRESSED_RED_RGTC1_EXT;if(s===ku)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===Vu)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===Gu)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===dr?n?34042:(a=e.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):i[s]!==void 0?i[s]:null}return{convert:r}}class sw extends Ot{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}let or=class extends st{constructor(){super(),this.isGroup=!0,this.type="Group"}};const ow={type:"move"};class Ga{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new or,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new or,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new D,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new D),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new or,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new D,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new D),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const p of e.hand.values()){const m=t.getJointPose(p,n),_=this._getHandJoint(c,p);m!==null&&(_.matrix.fromArray(m.transform.matrix),_.matrix.decompose(_.position,_.rotation,_.scale),_.jointRadius=m.radius),_.visible=m!==null}const u=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],f=u.position.distanceTo(h.position),d=.02,g=.005;c.inputState.pinching&&f>d+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=d-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=t.getPose(e.targetRaySpace,n),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(ow)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new or;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}class aw extends wt{constructor(e,t,n,r,s,o,a,l,c,u){if(u=u!==void 0?u:Li,u!==Li&&u!==br)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===Li&&(n=Ai),n===void 0&&u===br&&(n=dr),super(null,r,s,o,a,l,u,n,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:Mt,this.minFilter=l!==void 0?l:Mt,this.flipY=!1,this.generateMipmaps=!1}}class lw extends Ni{constructor(e,t){super();const n=this;let r=null,s=1,o=null,a="local-floor",l=1,c=null,u=null,h=null,f=null,d=null,g=null;const p=t.getContextAttributes();let m=null,_=null;const b=[],v=[],w=new Set,S=new Map,P=new Ot;P.layers.enable(1),P.viewport=new Ke;const I=new Ot;I.layers.enable(2),I.viewport=new Ke;const x=[P,I],A=new sw;A.layers.enable(1),A.layers.enable(2);let R=null,j=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(W){let oe=b[W];return oe===void 0&&(oe=new Ga,b[W]=oe),oe.getTargetRaySpace()},this.getControllerGrip=function(W){let oe=b[W];return oe===void 0&&(oe=new Ga,b[W]=oe),oe.getGripSpace()},this.getHand=function(W){let oe=b[W];return oe===void 0&&(oe=new Ga,b[W]=oe),oe.getHandSpace()};function Q(W){const oe=v.indexOf(W.inputSource);if(oe===-1)return;const ve=b[oe];ve!==void 0&&ve.dispatchEvent({type:W.type,data:W.inputSource})}function B(){r.removeEventListener("select",Q),r.removeEventListener("selectstart",Q),r.removeEventListener("selectend",Q),r.removeEventListener("squeeze",Q),r.removeEventListener("squeezestart",Q),r.removeEventListener("squeezeend",Q),r.removeEventListener("end",B),r.removeEventListener("inputsourceschange",N);for(let W=0;W<b.length;W++){const oe=v[W];oe!==null&&(v[W]=null,b[W].disconnect(oe))}R=null,j=null,e.setRenderTarget(m),d=null,f=null,h=null,r=null,_=null,xe.stop(),n.isPresenting=!1,n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(W){s=W,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(W){a=W,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(W){c=W},this.getBaseLayer=function(){return f!==null?f:d},this.getBinding=function(){return h},this.getFrame=function(){return g},this.getSession=function(){return r},this.setSession=async function(W){if(r=W,r!==null){if(m=e.getRenderTarget(),r.addEventListener("select",Q),r.addEventListener("selectstart",Q),r.addEventListener("selectend",Q),r.addEventListener("squeeze",Q),r.addEventListener("squeezestart",Q),r.addEventListener("squeezeend",Q),r.addEventListener("end",B),r.addEventListener("inputsourceschange",N),p.xrCompatible!==!0&&await t.makeXRCompatible(),r.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const oe={antialias:r.renderState.layers===void 0?p.antialias:!0,alpha:p.alpha,depth:p.depth,stencil:p.stencil,framebufferScaleFactor:s};d=new XRWebGLLayer(r,t,oe),r.updateRenderState({baseLayer:d}),_=new Fi(d.framebufferWidth,d.framebufferHeight,{format:en,type:Di,encoding:e.outputEncoding,stencilBuffer:p.stencil})}else{let oe=null,ve=null,z=null;p.depth&&(z=p.stencil?35056:33190,oe=p.stencil?br:Li,ve=p.stencil?dr:Ai);const O={colorFormat:32856,depthFormat:z,scaleFactor:s};h=new XRWebGLBinding(r,t),f=h.createProjectionLayer(O),r.updateRenderState({layers:[f]}),_=new Fi(f.textureWidth,f.textureHeight,{format:en,type:Di,depthTexture:new aw(f.textureWidth,f.textureHeight,ve,void 0,void 0,void 0,void 0,void 0,void 0,oe),stencilBuffer:p.stencil,encoding:e.outputEncoding,samples:p.antialias?4:0});const ee=e.properties.get(_);ee.__ignoreDepthValues=f.ignoreDepthValues}_.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await r.requestReferenceSpace(a),xe.setContext(r),xe.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}};function N(W){for(let oe=0;oe<W.removed.length;oe++){const ve=W.removed[oe],z=v.indexOf(ve);z>=0&&(v[z]=null,b[z].disconnect(ve))}for(let oe=0;oe<W.added.length;oe++){const ve=W.added[oe];let z=v.indexOf(ve);if(z===-1){for(let ee=0;ee<b.length;ee++)if(ee>=v.length){v.push(ve),z=ee;break}else if(v[ee]===null){v[ee]=ve,z=ee;break}if(z===-1)break}const O=b[z];O&&O.connect(ve)}}const J=new D,K=new D;function ie(W,oe,ve){J.setFromMatrixPosition(oe.matrixWorld),K.setFromMatrixPosition(ve.matrixWorld);const z=J.distanceTo(K),O=oe.projectionMatrix.elements,ee=ve.projectionMatrix.elements,ce=O[14]/(O[10]-1),ge=O[14]/(O[10]+1),pe=(O[9]+1)/O[5],Me=(O[9]-1)/O[5],y=(O[8]-1)/O[0],T=(ee[8]+1)/ee[0],F=ce*y,G=ce*T,k=z/(-y+T),te=k*-y;oe.matrixWorld.decompose(W.position,W.quaternion,W.scale),W.translateX(te),W.translateZ(k),W.matrixWorld.compose(W.position,W.quaternion,W.scale),W.matrixWorldInverse.copy(W.matrixWorld).invert();const re=ce+k,$=ge+k,he=F-te,ne=G+(z-te),E=pe*ge/$*re,M=Me*ge/$*re;W.projectionMatrix.makePerspective(he,ne,E,M,re,$)}function Y(W,oe){oe===null?W.matrixWorld.copy(W.matrix):W.matrixWorld.multiplyMatrices(oe.matrixWorld,W.matrix),W.matrixWorldInverse.copy(W.matrixWorld).invert()}this.updateCamera=function(W){if(r===null)return;A.near=I.near=P.near=W.near,A.far=I.far=P.far=W.far,(R!==A.near||j!==A.far)&&(r.updateRenderState({depthNear:A.near,depthFar:A.far}),R=A.near,j=A.far);const oe=W.parent,ve=A.cameras;Y(A,oe);for(let O=0;O<ve.length;O++)Y(ve[O],oe);A.matrixWorld.decompose(A.position,A.quaternion,A.scale),W.matrix.copy(A.matrix),W.matrix.decompose(W.position,W.quaternion,W.scale);const z=W.children;for(let O=0,ee=z.length;O<ee;O++)z[O].updateMatrixWorld(!0);ve.length===2?ie(A,P,I):A.projectionMatrix.copy(P.projectionMatrix)},this.getCamera=function(){return A},this.getFoveation=function(){if(!(f===null&&d===null))return l},this.setFoveation=function(W){l=W,f!==null&&(f.fixedFoveation=W),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=W)},this.getPlanes=function(){return w};let fe=null;function de(W,oe){if(u=oe.getViewerPose(c||o),g=oe,u!==null){const ve=u.views;d!==null&&(e.setRenderTargetFramebuffer(_,d.framebuffer),e.setRenderTarget(_));let z=!1;ve.length!==A.cameras.length&&(A.cameras.length=0,z=!0);for(let O=0;O<ve.length;O++){const ee=ve[O];let ce=null;if(d!==null)ce=d.getViewport(ee);else{const pe=h.getViewSubImage(f,ee);ce=pe.viewport,O===0&&(e.setRenderTargetTextures(_,pe.colorTexture,f.ignoreDepthValues?void 0:pe.depthStencilTexture),e.setRenderTarget(_))}let ge=x[O];ge===void 0&&(ge=new Ot,ge.layers.enable(O),ge.viewport=new Ke,x[O]=ge),ge.matrix.fromArray(ee.transform.matrix),ge.projectionMatrix.fromArray(ee.projectionMatrix),ge.viewport.set(ce.x,ce.y,ce.width,ce.height),O===0&&A.matrix.copy(ge.matrix),z===!0&&A.cameras.push(ge)}}for(let ve=0;ve<b.length;ve++){const z=v[ve],O=b[ve];z!==null&&O!==void 0&&O.update(z,oe,c||o)}if(fe&&fe(W,oe),oe.detectedPlanes){n.dispatchEvent({type:"planesdetected",data:oe.detectedPlanes});let ve=null;for(const z of w)oe.detectedPlanes.has(z)||(ve===null&&(ve=[]),ve.push(z));if(ve!==null)for(const z of ve)w.delete(z),S.delete(z),n.dispatchEvent({type:"planeremoved",data:z});for(const z of oe.detectedPlanes)if(!w.has(z))w.add(z),S.set(z,oe.lastChangedTime),n.dispatchEvent({type:"planeadded",data:z});else{const O=S.get(z);z.lastChangedTime>O&&(S.set(z,z.lastChangedTime),n.dispatchEvent({type:"planechanged",data:z}))}}g=null}const xe=new Ld;xe.setAnimationLoop(de),this.setAnimationLoop=function(W){fe=W},this.dispose=function(){}}}function cw(i,e){function t(p,m){m.color.getRGB(p.fogColor.value,Ad(i)),m.isFog?(p.fogNear.value=m.near,p.fogFar.value=m.far):m.isFogExp2&&(p.fogDensity.value=m.density)}function n(p,m,_,b,v){m.isMeshBasicMaterial||m.isMeshLambertMaterial?r(p,m):m.isMeshToonMaterial?(r(p,m),u(p,m)):m.isMeshPhongMaterial?(r(p,m),c(p,m)):m.isMeshStandardMaterial?(r(p,m),h(p,m),m.isMeshPhysicalMaterial&&f(p,m,v)):m.isMeshMatcapMaterial?(r(p,m),d(p,m)):m.isMeshDepthMaterial?r(p,m):m.isMeshDistanceMaterial?(r(p,m),g(p,m)):m.isMeshNormalMaterial?r(p,m):m.isLineBasicMaterial?(s(p,m),m.isLineDashedMaterial&&o(p,m)):m.isPointsMaterial?a(p,m,_,b):m.isSpriteMaterial?l(p,m):m.isShadowMaterial?(p.color.value.copy(m.color),p.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function r(p,m){p.opacity.value=m.opacity,m.color&&p.diffuse.value.copy(m.color),m.emissive&&p.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(p.map.value=m.map),m.alphaMap&&(p.alphaMap.value=m.alphaMap),m.bumpMap&&(p.bumpMap.value=m.bumpMap,p.bumpScale.value=m.bumpScale,m.side===Yt&&(p.bumpScale.value*=-1)),m.displacementMap&&(p.displacementMap.value=m.displacementMap,p.displacementScale.value=m.displacementScale,p.displacementBias.value=m.displacementBias),m.emissiveMap&&(p.emissiveMap.value=m.emissiveMap),m.normalMap&&(p.normalMap.value=m.normalMap,p.normalScale.value.copy(m.normalScale),m.side===Yt&&p.normalScale.value.negate()),m.specularMap&&(p.specularMap.value=m.specularMap),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest);const _=e.get(m).envMap;if(_&&(p.envMap.value=_,p.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=m.reflectivity,p.ior.value=m.ior,p.refractionRatio.value=m.refractionRatio),m.lightMap){p.lightMap.value=m.lightMap;const w=i.physicallyCorrectLights!==!0?Math.PI:1;p.lightMapIntensity.value=m.lightMapIntensity*w}m.aoMap&&(p.aoMap.value=m.aoMap,p.aoMapIntensity.value=m.aoMapIntensity);let b;m.map?b=m.map:m.specularMap?b=m.specularMap:m.displacementMap?b=m.displacementMap:m.normalMap?b=m.normalMap:m.bumpMap?b=m.bumpMap:m.roughnessMap?b=m.roughnessMap:m.metalnessMap?b=m.metalnessMap:m.alphaMap?b=m.alphaMap:m.emissiveMap?b=m.emissiveMap:m.clearcoatMap?b=m.clearcoatMap:m.clearcoatNormalMap?b=m.clearcoatNormalMap:m.clearcoatRoughnessMap?b=m.clearcoatRoughnessMap:m.iridescenceMap?b=m.iridescenceMap:m.iridescenceThicknessMap?b=m.iridescenceThicknessMap:m.specularIntensityMap?b=m.specularIntensityMap:m.specularColorMap?b=m.specularColorMap:m.transmissionMap?b=m.transmissionMap:m.thicknessMap?b=m.thicknessMap:m.sheenColorMap?b=m.sheenColorMap:m.sheenRoughnessMap&&(b=m.sheenRoughnessMap),b!==void 0&&(b.isWebGLRenderTarget&&(b=b.texture),b.matrixAutoUpdate===!0&&b.updateMatrix(),p.uvTransform.value.copy(b.matrix));let v;m.aoMap?v=m.aoMap:m.lightMap&&(v=m.lightMap),v!==void 0&&(v.isWebGLRenderTarget&&(v=v.texture),v.matrixAutoUpdate===!0&&v.updateMatrix(),p.uv2Transform.value.copy(v.matrix))}function s(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity}function o(p,m){p.dashSize.value=m.dashSize,p.totalSize.value=m.dashSize+m.gapSize,p.scale.value=m.scale}function a(p,m,_,b){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.size.value=m.size*_,p.scale.value=b*.5,m.map&&(p.map.value=m.map),m.alphaMap&&(p.alphaMap.value=m.alphaMap),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest);let v;m.map?v=m.map:m.alphaMap&&(v=m.alphaMap),v!==void 0&&(v.matrixAutoUpdate===!0&&v.updateMatrix(),p.uvTransform.value.copy(v.matrix))}function l(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.rotation.value=m.rotation,m.map&&(p.map.value=m.map),m.alphaMap&&(p.alphaMap.value=m.alphaMap),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest);let _;m.map?_=m.map:m.alphaMap&&(_=m.alphaMap),_!==void 0&&(_.matrixAutoUpdate===!0&&_.updateMatrix(),p.uvTransform.value.copy(_.matrix))}function c(p,m){p.specular.value.copy(m.specular),p.shininess.value=Math.max(m.shininess,1e-4)}function u(p,m){m.gradientMap&&(p.gradientMap.value=m.gradientMap)}function h(p,m){p.roughness.value=m.roughness,p.metalness.value=m.metalness,m.roughnessMap&&(p.roughnessMap.value=m.roughnessMap),m.metalnessMap&&(p.metalnessMap.value=m.metalnessMap),e.get(m).envMap&&(p.envMapIntensity.value=m.envMapIntensity)}function f(p,m,_){p.ior.value=m.ior,m.sheen>0&&(p.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),p.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(p.sheenColorMap.value=m.sheenColorMap),m.sheenRoughnessMap&&(p.sheenRoughnessMap.value=m.sheenRoughnessMap)),m.clearcoat>0&&(p.clearcoat.value=m.clearcoat,p.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(p.clearcoatMap.value=m.clearcoatMap),m.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap),m.clearcoatNormalMap&&(p.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),p.clearcoatNormalMap.value=m.clearcoatNormalMap,m.side===Yt&&p.clearcoatNormalScale.value.negate())),m.iridescence>0&&(p.iridescence.value=m.iridescence,p.iridescenceIOR.value=m.iridescenceIOR,p.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(p.iridescenceMap.value=m.iridescenceMap),m.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=m.iridescenceThicknessMap)),m.transmission>0&&(p.transmission.value=m.transmission,p.transmissionSamplerMap.value=_.texture,p.transmissionSamplerSize.value.set(_.width,_.height),m.transmissionMap&&(p.transmissionMap.value=m.transmissionMap),p.thickness.value=m.thickness,m.thicknessMap&&(p.thicknessMap.value=m.thicknessMap),p.attenuationDistance.value=m.attenuationDistance,p.attenuationColor.value.copy(m.attenuationColor)),p.specularIntensity.value=m.specularIntensity,p.specularColor.value.copy(m.specularColor),m.specularIntensityMap&&(p.specularIntensityMap.value=m.specularIntensityMap),m.specularColorMap&&(p.specularColorMap.value=m.specularColorMap)}function d(p,m){m.matcap&&(p.matcap.value=m.matcap)}function g(p,m){p.referencePosition.value.copy(m.referencePosition),p.nearDistance.value=m.nearDistance,p.farDistance.value=m.farDistance}return{refreshFogUniforms:t,refreshMaterialUniforms:n}}function uw(i,e,t,n){let r={},s={},o=[];const a=t.isWebGL2?i.getParameter(35375):0;function l(b,v){const w=v.program;n.uniformBlockBinding(b,w)}function c(b,v){let w=r[b.id];w===void 0&&(g(b),w=u(b),r[b.id]=w,b.addEventListener("dispose",m));const S=v.program;n.updateUBOMapping(b,S);const P=e.render.frame;s[b.id]!==P&&(f(b),s[b.id]=P)}function u(b){const v=h();b.__bindingPointIndex=v;const w=i.createBuffer(),S=b.__size,P=b.usage;return i.bindBuffer(35345,w),i.bufferData(35345,S,P),i.bindBuffer(35345,null),i.bindBufferBase(35345,v,w),w}function h(){for(let b=0;b<a;b++)if(o.indexOf(b)===-1)return o.push(b),b;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(b){const v=r[b.id],w=b.uniforms,S=b.__cache;i.bindBuffer(35345,v);for(let P=0,I=w.length;P<I;P++){const x=w[P];if(d(x,P,S)===!0){const A=x.__offset,R=Array.isArray(x.value)?x.value:[x.value];let j=0;for(let Q=0;Q<R.length;Q++){const B=R[Q],N=p(B);typeof B=="number"?(x.__data[0]=B,i.bufferSubData(35345,A+j,x.__data)):B.isMatrix3?(x.__data[0]=B.elements[0],x.__data[1]=B.elements[1],x.__data[2]=B.elements[2],x.__data[3]=B.elements[0],x.__data[4]=B.elements[3],x.__data[5]=B.elements[4],x.__data[6]=B.elements[5],x.__data[7]=B.elements[0],x.__data[8]=B.elements[6],x.__data[9]=B.elements[7],x.__data[10]=B.elements[8],x.__data[11]=B.elements[0]):(B.toArray(x.__data,j),j+=N.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(35345,A,x.__data)}}i.bindBuffer(35345,null)}function d(b,v,w){const S=b.value;if(w[v]===void 0){if(typeof S=="number")w[v]=S;else{const P=Array.isArray(S)?S:[S],I=[];for(let x=0;x<P.length;x++)I.push(P[x].clone());w[v]=I}return!0}else if(typeof S=="number"){if(w[v]!==S)return w[v]=S,!0}else{const P=Array.isArray(w[v])?w[v]:[w[v]],I=Array.isArray(S)?S:[S];for(let x=0;x<P.length;x++){const A=P[x];if(A.equals(I[x])===!1)return A.copy(I[x]),!0}}return!1}function g(b){const v=b.uniforms;let w=0;const S=16;let P=0;for(let I=0,x=v.length;I<x;I++){const A=v[I],R={boundary:0,storage:0},j=Array.isArray(A.value)?A.value:[A.value];for(let Q=0,B=j.length;Q<B;Q++){const N=j[Q],J=p(N);R.boundary+=J.boundary,R.storage+=J.storage}if(A.__data=new Float32Array(R.storage/Float32Array.BYTES_PER_ELEMENT),A.__offset=w,I>0){P=w%S;const Q=S-P;P!==0&&Q-R.boundary<0&&(w+=S-P,A.__offset=w)}w+=R.storage}return P=w%S,P>0&&(w+=S-P),b.__size=w,b.__cache={},this}function p(b){const v={boundary:0,storage:0};return typeof b=="number"?(v.boundary=4,v.storage=4):b.isVector2?(v.boundary=8,v.storage=8):b.isVector3||b.isColor?(v.boundary=16,v.storage=12):b.isVector4?(v.boundary=16,v.storage=16):b.isMatrix3?(v.boundary=48,v.storage=48):b.isMatrix4?(v.boundary=64,v.storage=64):b.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",b),v}function m(b){const v=b.target;v.removeEventListener("dispose",m);const w=o.indexOf(v.__bindingPointIndex);o.splice(w,1),i.deleteBuffer(r[v.id]),delete r[v.id],delete s[v.id]}function _(){for(const b in r)i.deleteBuffer(r[b]);o=[],r={},s={}}return{bind:l,update:c,dispose:_}}function hw(){const i=ms("canvas");return i.style.display="block",i}function Od(i={}){this.isWebGLRenderer=!0;const e=i.canvas!==void 0?i.canvas:hw(),t=i.context!==void 0?i.context:null,n=i.depth!==void 0?i.depth:!0,r=i.stencil!==void 0?i.stencil:!0,s=i.antialias!==void 0?i.antialias:!1,o=i.premultipliedAlpha!==void 0?i.premultipliedAlpha:!0,a=i.preserveDrawingBuffer!==void 0?i.preserveDrawingBuffer:!1,l=i.powerPreference!==void 0?i.powerPreference:"default",c=i.failIfMajorPerformanceCaveat!==void 0?i.failIfMajorPerformanceCaveat:!1;let u;t!==null?u=t.getContextAttributes().alpha:u=i.alpha!==void 0?i.alpha:!1;let h=null,f=null;const d=[],g=[];this.domElement=e,this.debug={checkShaderErrors:!0},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.outputEncoding=Ii,this.physicallyCorrectLights=!1,this.toneMapping=Gn,this.toneMappingExposure=1;const p=this;let m=!1,_=0,b=0,v=null,w=-1,S=null;const P=new Ke,I=new Ke;let x=null,A=e.width,R=e.height,j=1,Q=null,B=null;const N=new Ke(0,0,A,R),J=new Ke(0,0,A,R);let K=!1;const ie=new oc;let Y=!1,fe=!1,de=null;const xe=new De,W=new ye,oe=new D,ve={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function z(){return v===null?j:1}let O=t;function ee(C,q){for(let le=0;le<C.length;le++){const X=C[le],ue=e.getContext(X,q);if(ue!==null)return ue}return null}try{const C={alpha:!0,depth:n,stencil:r,antialias:s,premultipliedAlpha:o,preserveDrawingBuffer:a,powerPreference:l,failIfMajorPerformanceCaveat:c};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${tc}`),e.addEventListener("webglcontextlost",Pe,!1),e.addEventListener("webglcontextrestored",Ee,!1),e.addEventListener("webglcontextcreationerror",Fe,!1),O===null){const q=["webgl2","webgl","experimental-webgl"];if(p.isWebGL1Renderer===!0&&q.shift(),O=ee(q,C),O===null)throw ee(q)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}O.getShaderPrecisionFormat===void 0&&(O.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(C){throw console.error("THREE.WebGLRenderer: "+C.message),C}let ce,ge,pe,Me,y,T,F,G,k,te,re,$,he,ne,E,M,U,Z,se,me,be,L,H,we;function Ae(){ce=new bM(O),ge=new gM(O,ce,i),ce.init(ge),L=new rw(O,ce,ge),pe=new nw(O,ce,ge),Me=new TM,y=new Gb,T=new iw(O,ce,pe,y,ge,L,Me),F=new vM(p),G=new MM(p),k=new Fv(O,ge),H=new pM(O,ce,k,ge),te=new wM(O,k,Me,H),re=new PM(O,te,k,Me),se=new CM(O,ge,T),M=new _M(y),$=new Vb(p,F,G,ce,ge,H,M),he=new cw(p,y),ne=new Wb,E=new Kb(ce,ge),Z=new dM(p,F,G,pe,re,u,o),U=new tw(p,re,ge),we=new uw(O,Me,ge,pe),me=new mM(O,ce,Me,ge),be=new SM(O,ce,Me,ge),Me.programs=$.programs,p.capabilities=ge,p.extensions=ce,p.properties=y,p.renderLists=ne,p.shadowMap=U,p.state=pe,p.info=Me}Ae();const Te=new lw(p,O);this.xr=Te,this.getContext=function(){return O},this.getContextAttributes=function(){return O.getContextAttributes()},this.forceContextLoss=function(){const C=ce.get("WEBGL_lose_context");C&&C.loseContext()},this.forceContextRestore=function(){const C=ce.get("WEBGL_lose_context");C&&C.restoreContext()},this.getPixelRatio=function(){return j},this.setPixelRatio=function(C){C!==void 0&&(j=C,this.setSize(A,R,!1))},this.getSize=function(C){return C.set(A,R)},this.setSize=function(C,q,le){if(Te.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}A=C,R=q,e.width=Math.floor(C*j),e.height=Math.floor(q*j),le!==!1&&(e.style.width=C+"px",e.style.height=q+"px"),this.setViewport(0,0,C,q)},this.getDrawingBufferSize=function(C){return C.set(A*j,R*j).floor()},this.setDrawingBufferSize=function(C,q,le){A=C,R=q,j=le,e.width=Math.floor(C*le),e.height=Math.floor(q*le),this.setViewport(0,0,C,q)},this.getCurrentViewport=function(C){return C.copy(P)},this.getViewport=function(C){return C.copy(N)},this.setViewport=function(C,q,le,X){C.isVector4?N.set(C.x,C.y,C.z,C.w):N.set(C,q,le,X),pe.viewport(P.copy(N).multiplyScalar(j).floor())},this.getScissor=function(C){return C.copy(J)},this.setScissor=function(C,q,le,X){C.isVector4?J.set(C.x,C.y,C.z,C.w):J.set(C,q,le,X),pe.scissor(I.copy(J).multiplyScalar(j).floor())},this.getScissorTest=function(){return K},this.setScissorTest=function(C){pe.setScissorTest(K=C)},this.setOpaqueSort=function(C){Q=C},this.setTransparentSort=function(C){B=C},this.getClearColor=function(C){return C.copy(Z.getClearColor())},this.setClearColor=function(){Z.setClearColor.apply(Z,arguments)},this.getClearAlpha=function(){return Z.getClearAlpha()},this.setClearAlpha=function(){Z.setClearAlpha.apply(Z,arguments)},this.clear=function(C=!0,q=!0,le=!0){let X=0;C&&(X|=16384),q&&(X|=256),le&&(X|=1024),O.clear(X)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",Pe,!1),e.removeEventListener("webglcontextrestored",Ee,!1),e.removeEventListener("webglcontextcreationerror",Fe,!1),ne.dispose(),E.dispose(),y.dispose(),F.dispose(),G.dispose(),re.dispose(),H.dispose(),we.dispose(),$.dispose(),Te.dispose(),Te.removeEventListener("sessionstart",Ce),Te.removeEventListener("sessionend",Le),de&&(de.dispose(),de=null),Ze.stop()};function Pe(C){C.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),m=!0}function Ee(){console.log("THREE.WebGLRenderer: Context Restored."),m=!1;const C=Me.autoReset,q=U.enabled,le=U.autoUpdate,X=U.needsUpdate,ue=U.type;Ae(),Me.autoReset=C,U.enabled=q,U.autoUpdate=le,U.needsUpdate=X,U.type=ue}function Fe(C){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",C.statusMessage)}function ke(C){const q=C.target;q.removeEventListener("dispose",ke),et(q)}function et(C){V(C),y.remove(C)}function V(C){const q=y.get(C).programs;q!==void 0&&(q.forEach(function(le){$.releaseProgram(le)}),C.isShaderMaterial&&$.releaseShaderCache(C))}this.renderBufferDirect=function(C,q,le,X,ue,Ie){q===null&&(q=ve);const Oe=ue.isMesh&&ue.matrixWorld.determinant()<0,Be=pp(C,q,le,X,ue);pe.setMaterial(X,Oe);let Ve=le.index,qe=1;X.wireframe===!0&&(Ve=te.getWireframeAttribute(le),qe=2);const He=le.drawRange,We=le.attributes.position;let ut=He.start*qe,Gt=(He.start+He.count)*qe;Ie!==null&&(ut=Math.max(ut,Ie.start*qe),Gt=Math.min(Gt,(Ie.start+Ie.count)*qe)),Ve!==null?(ut=Math.max(ut,0),Gt=Math.min(Gt,Ve.count)):We!=null&&(ut=Math.max(ut,0),Gt=Math.min(Gt,We.count));const Rn=Gt-ut;if(Rn<0||Rn===1/0)return;H.setup(ue,X,Be,le,Ve);let fi,ht=me;if(Ve!==null&&(fi=k.get(Ve),ht=be,ht.setIndex(fi)),ue.isMesh)X.wireframe===!0?(pe.setLineWidth(X.wireframeLinewidth*z()),ht.setMode(1)):ht.setMode(4);else if(ue.isLine){let Xe=X.linewidth;Xe===void 0&&(Xe=1),pe.setLineWidth(Xe*z()),ue.isLineSegments?ht.setMode(1):ue.isLineLoop?ht.setMode(2):ht.setMode(3)}else ue.isPoints?ht.setMode(0):ue.isSprite&&ht.setMode(4);if(ue.isInstancedMesh)ht.renderInstances(ut,Rn,ue.count);else if(le.isInstancedBufferGeometry){const Xe=le._maxInstanceCount!==void 0?le._maxInstanceCount:1/0,Ko=Math.min(le.instanceCount,Xe);ht.renderInstances(ut,Rn,Ko)}else ht.render(ut,Rn)},this.compile=function(C,q){function le(X,ue,Ie){X.transparent===!0&&X.side===qt&&X.forceSinglePass===!1?(X.side=Yt,X.needsUpdate=!0,$t(X,ue,Ie),X.side=ci,X.needsUpdate=!0,$t(X,ue,Ie),X.side=qt):$t(X,ue,Ie)}f=E.get(C),f.init(),g.push(f),C.traverseVisible(function(X){X.isLight&&X.layers.test(q.layers)&&(f.pushLight(X),X.castShadow&&f.pushShadow(X))}),f.setupLights(p.physicallyCorrectLights),C.traverse(function(X){const ue=X.material;if(ue)if(Array.isArray(ue))for(let Ie=0;Ie<ue.length;Ie++){const Oe=ue[Ie];le(Oe,C,X)}else le(ue,C,X)}),g.pop(),f=null};let ae=null;function _e(C){ae&&ae(C)}function Ce(){Ze.stop()}function Le(){Ze.start()}const Ze=new Ld;Ze.setAnimationLoop(_e),typeof self<"u"&&Ze.setContext(self),this.setAnimationLoop=function(C){ae=C,Te.setAnimationLoop(C),C===null?Ze.stop():Ze.start()},Te.addEventListener("sessionstart",Ce),Te.addEventListener("sessionend",Le),this.render=function(C,q){if(q!==void 0&&q.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(m===!0)return;C.matrixWorldAutoUpdate===!0&&C.updateMatrixWorld(),q.parent===null&&q.matrixWorldAutoUpdate===!0&&q.updateMatrixWorld(),Te.enabled===!0&&Te.isPresenting===!0&&(Te.cameraAutoUpdate===!0&&Te.updateCamera(q),q=Te.getCamera()),C.isScene===!0&&C.onBeforeRender(p,C,q,v),f=E.get(C,g.length),f.init(),g.push(f),xe.multiplyMatrices(q.projectionMatrix,q.matrixWorldInverse),ie.setFromProjectionMatrix(xe),fe=this.localClippingEnabled,Y=M.init(this.clippingPlanes,fe),h=ne.get(C,d.length),h.init(),d.push(h),vt(C,q,0,p.sortObjects),h.finish(),p.sortObjects===!0&&h.sort(Q,B),Y===!0&&M.beginShadows();const le=f.state.shadowsArray;if(U.render(le,C,q),Y===!0&&M.endShadows(),this.info.autoReset===!0&&this.info.reset(),Z.render(h,C),f.setupLights(p.physicallyCorrectLights),q.isArrayCamera){const X=q.cameras;for(let ue=0,Ie=X.length;ue<Ie;ue++){const Oe=X[ue];Tt(h,C,Oe,Oe.viewport)}}else Tt(h,C,q);v!==null&&(T.updateMultisampleRenderTarget(v),T.updateRenderTargetMipmap(v)),C.isScene===!0&&C.onAfterRender(p,C,q),H.resetDefaultState(),w=-1,S=null,g.pop(),g.length>0?f=g[g.length-1]:f=null,d.pop(),d.length>0?h=d[d.length-1]:h=null};function vt(C,q,le,X){if(C.visible===!1)return;if(C.layers.test(q.layers)){if(C.isGroup)le=C.renderOrder;else if(C.isLOD)C.autoUpdate===!0&&C.update(q);else if(C.isLight)f.pushLight(C),C.castShadow&&f.pushShadow(C);else if(C.isSprite){if(!C.frustumCulled||ie.intersectsSprite(C)){X&&oe.setFromMatrixPosition(C.matrixWorld).applyMatrix4(xe);const Oe=re.update(C),Be=C.material;Be.visible&&h.push(C,Oe,Be,le,oe.z,null)}}else if((C.isMesh||C.isLine||C.isPoints)&&(C.isSkinnedMesh&&C.skeleton.frame!==Me.render.frame&&(C.skeleton.update(),C.skeleton.frame=Me.render.frame),!C.frustumCulled||ie.intersectsObject(C))){X&&oe.setFromMatrixPosition(C.matrixWorld).applyMatrix4(xe);const Oe=re.update(C),Be=C.material;if(Array.isArray(Be)){const Ve=Oe.groups;for(let qe=0,He=Ve.length;qe<He;qe++){const We=Ve[qe],ut=Be[We.materialIndex];ut&&ut.visible&&h.push(C,Oe,ut,le,oe.z,We)}}else Be.visible&&h.push(C,Oe,Be,le,oe.z,null)}}const Ie=C.children;for(let Oe=0,Be=Ie.length;Oe<Be;Oe++)vt(Ie[Oe],q,le,X)}function Tt(C,q,le,X){const ue=C.opaque,Ie=C.transmissive,Oe=C.transparent;f.setupLightsView(le),Y===!0&&M.setGlobalState(p.clippingPlanes,le),Ie.length>0&&hi(ue,q,le),X&&pe.viewport(P.copy(X)),ue.length>0&&it(ue,q,le),Ie.length>0&&it(Ie,q,le),Oe.length>0&&it(Oe,q,le),pe.buffers.depth.setTest(!0),pe.buffers.depth.setMask(!0),pe.buffers.color.setMask(!0),pe.setPolygonOffset(!1)}function hi(C,q,le){const X=ge.isWebGL2;de===null&&(de=new Fi(1,1,{generateMipmaps:!0,type:ce.has("EXT_color_buffer_half_float")?fs:Di,minFilter:hs,samples:X&&s===!0?4:0})),p.getDrawingBufferSize(W),X?de.setSize(W.x,W.y):de.setSize(Ao(W.x),Ao(W.y));const ue=p.getRenderTarget();p.setRenderTarget(de),p.clear();const Ie=p.toneMapping;p.toneMapping=Gn,it(C,q,le),p.toneMapping=Ie,T.updateMultisampleRenderTarget(de),T.updateRenderTargetMipmap(de),p.setRenderTarget(ue)}function it(C,q,le){const X=q.isScene===!0?q.overrideMaterial:null;for(let ue=0,Ie=C.length;ue<Ie;ue++){const Oe=C[ue],Be=Oe.object,Ve=Oe.geometry,qe=X===null?Oe.material:X,He=Oe.group;Be.layers.test(le.layers)&&Ln(Be,q,le,Ve,qe,He)}}function Ln(C,q,le,X,ue,Ie){C.onBeforeRender(p,q,le,X,ue,Ie),C.modelViewMatrix.multiplyMatrices(le.matrixWorldInverse,C.matrixWorld),C.normalMatrix.getNormalMatrix(C.modelViewMatrix),ue.onBeforeRender(p,q,le,X,C,Ie),ue.transparent===!0&&ue.side===qt&&ue.forceSinglePass===!1?(ue.side=Yt,ue.needsUpdate=!0,p.renderBufferDirect(le,q,X,ue,C,Ie),ue.side=ci,ue.needsUpdate=!0,p.renderBufferDirect(le,q,X,ue,C,Ie),ue.side=qt):p.renderBufferDirect(le,q,X,ue,C,Ie),C.onAfterRender(p,q,le,X,ue,Ie)}function $t(C,q,le){q.isScene!==!0&&(q=ve);const X=y.get(C),ue=f.state.lights,Ie=f.state.shadowsArray,Oe=ue.state.version,Be=$.getParameters(C,ue.state,Ie,q,le),Ve=$.getProgramCacheKey(Be);let qe=X.programs;X.environment=C.isMeshStandardMaterial?q.environment:null,X.fog=q.fog,X.envMap=(C.isMeshStandardMaterial?G:F).get(C.envMap||X.environment),qe===void 0&&(C.addEventListener("dispose",ke),qe=new Map,X.programs=qe);let He=qe.get(Ve);if(He!==void 0){if(X.currentProgram===He&&X.lightsStateVersion===Oe)return yc(C,Be),He}else Be.uniforms=$.getUniforms(C),C.onBuild(le,Be,p),C.onBeforeCompile(Be,p),He=$.acquireProgram(Be,Ve),qe.set(Ve,He),X.uniforms=Be.uniforms;const We=X.uniforms;(!C.isShaderMaterial&&!C.isRawShaderMaterial||C.clipping===!0)&&(We.clippingPlanes=M.uniform),yc(C,Be),X.needsLights=gp(C),X.lightsStateVersion=Oe,X.needsLights&&(We.ambientLightColor.value=ue.state.ambient,We.lightProbe.value=ue.state.probe,We.directionalLights.value=ue.state.directional,We.directionalLightShadows.value=ue.state.directionalShadow,We.spotLights.value=ue.state.spot,We.spotLightShadows.value=ue.state.spotShadow,We.rectAreaLights.value=ue.state.rectArea,We.ltc_1.value=ue.state.rectAreaLTC1,We.ltc_2.value=ue.state.rectAreaLTC2,We.pointLights.value=ue.state.point,We.pointLightShadows.value=ue.state.pointShadow,We.hemisphereLights.value=ue.state.hemi,We.directionalShadowMap.value=ue.state.directionalShadowMap,We.directionalShadowMatrix.value=ue.state.directionalShadowMatrix,We.spotShadowMap.value=ue.state.spotShadowMap,We.spotLightMatrix.value=ue.state.spotLightMatrix,We.spotLightMap.value=ue.state.spotLightMap,We.pointShadowMap.value=ue.state.pointShadowMap,We.pointShadowMatrix.value=ue.state.pointShadowMatrix);const ut=He.getUniforms(),Gt=go.seqWithValue(ut.seq,We);return X.currentProgram=He,X.uniformsList=Gt,He}function yc(C,q){const le=y.get(C);le.outputEncoding=q.outputEncoding,le.instancing=q.instancing,le.skinning=q.skinning,le.morphTargets=q.morphTargets,le.morphNormals=q.morphNormals,le.morphColors=q.morphColors,le.morphTargetsCount=q.morphTargetsCount,le.numClippingPlanes=q.numClippingPlanes,le.numIntersection=q.numClipIntersection,le.vertexAlphas=q.vertexAlphas,le.vertexTangents=q.vertexTangents,le.toneMapping=q.toneMapping}function pp(C,q,le,X,ue){q.isScene!==!0&&(q=ve),T.resetTextureUnits();const Ie=q.fog,Oe=X.isMeshStandardMaterial?q.environment:null,Be=v===null?p.outputEncoding:v.isXRRenderTarget===!0?v.texture.encoding:Ii,Ve=(X.isMeshStandardMaterial?G:F).get(X.envMap||Oe),qe=X.vertexColors===!0&&!!le.attributes.color&&le.attributes.color.itemSize===4,He=!!X.normalMap&&!!le.attributes.tangent,We=!!le.morphAttributes.position,ut=!!le.morphAttributes.normal,Gt=!!le.morphAttributes.color,Rn=X.toneMapped?p.toneMapping:Gn,fi=le.morphAttributes.position||le.morphAttributes.normal||le.morphAttributes.color,ht=fi!==void 0?fi.length:0,Xe=y.get(X),Ko=f.state.lights;if(Y===!0&&(fe===!0||C!==S)){const Ht=C===S&&X.id===w;M.setState(X,C,Ht)}let xt=!1;X.version===Xe.__version?(Xe.needsLights&&Xe.lightsStateVersion!==Ko.state.version||Xe.outputEncoding!==Be||ue.isInstancedMesh&&Xe.instancing===!1||!ue.isInstancedMesh&&Xe.instancing===!0||ue.isSkinnedMesh&&Xe.skinning===!1||!ue.isSkinnedMesh&&Xe.skinning===!0||Xe.envMap!==Ve||X.fog===!0&&Xe.fog!==Ie||Xe.numClippingPlanes!==void 0&&(Xe.numClippingPlanes!==M.numPlanes||Xe.numIntersection!==M.numIntersection)||Xe.vertexAlphas!==qe||Xe.vertexTangents!==He||Xe.morphTargets!==We||Xe.morphNormals!==ut||Xe.morphColors!==Gt||Xe.toneMapping!==Rn||ge.isWebGL2===!0&&Xe.morphTargetsCount!==ht)&&(xt=!0):(xt=!0,Xe.__version=X.version);let di=Xe.currentProgram;xt===!0&&(di=$t(X,q,ue));let Mc=!1,Dr=!1,Zo=!1;const Rt=di.getUniforms(),pi=Xe.uniforms;if(pe.useProgram(di.program)&&(Mc=!0,Dr=!0,Zo=!0),X.id!==w&&(w=X.id,Dr=!0),Mc||S!==C){if(Rt.setValue(O,"projectionMatrix",C.projectionMatrix),ge.logarithmicDepthBuffer&&Rt.setValue(O,"logDepthBufFC",2/(Math.log(C.far+1)/Math.LN2)),S!==C&&(S=C,Dr=!0,Zo=!0),X.isShaderMaterial||X.isMeshPhongMaterial||X.isMeshToonMaterial||X.isMeshStandardMaterial||X.envMap){const Ht=Rt.map.cameraPosition;Ht!==void 0&&Ht.setValue(O,oe.setFromMatrixPosition(C.matrixWorld))}(X.isMeshPhongMaterial||X.isMeshToonMaterial||X.isMeshLambertMaterial||X.isMeshBasicMaterial||X.isMeshStandardMaterial||X.isShaderMaterial)&&Rt.setValue(O,"isOrthographic",C.isOrthographicCamera===!0),(X.isMeshPhongMaterial||X.isMeshToonMaterial||X.isMeshLambertMaterial||X.isMeshBasicMaterial||X.isMeshStandardMaterial||X.isShaderMaterial||X.isShadowMaterial||ue.isSkinnedMesh)&&Rt.setValue(O,"viewMatrix",C.matrixWorldInverse)}if(ue.isSkinnedMesh){Rt.setOptional(O,ue,"bindMatrix"),Rt.setOptional(O,ue,"bindMatrixInverse");const Ht=ue.skeleton;Ht&&(ge.floatVertexTextures?(Ht.boneTexture===null&&Ht.computeBoneTexture(),Rt.setValue(O,"boneTexture",Ht.boneTexture,T),Rt.setValue(O,"boneTextureSize",Ht.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const Jo=le.morphAttributes;if((Jo.position!==void 0||Jo.normal!==void 0||Jo.color!==void 0&&ge.isWebGL2===!0)&&se.update(ue,le,X,di),(Dr||Xe.receiveShadow!==ue.receiveShadow)&&(Xe.receiveShadow=ue.receiveShadow,Rt.setValue(O,"receiveShadow",ue.receiveShadow)),X.isMeshGouraudMaterial&&X.envMap!==null&&(pi.envMap.value=Ve,pi.flipEnvMap.value=Ve.isCubeTexture&&Ve.isRenderTargetTexture===!1?-1:1),Dr&&(Rt.setValue(O,"toneMappingExposure",p.toneMappingExposure),Xe.needsLights&&mp(pi,Zo),Ie&&X.fog===!0&&he.refreshFogUniforms(pi,Ie),he.refreshMaterialUniforms(pi,X,j,R,de),go.upload(O,Xe.uniformsList,pi,T)),X.isShaderMaterial&&X.uniformsNeedUpdate===!0&&(go.upload(O,Xe.uniformsList,pi,T),X.uniformsNeedUpdate=!1),X.isSpriteMaterial&&Rt.setValue(O,"center",ue.center),Rt.setValue(O,"modelViewMatrix",ue.modelViewMatrix),Rt.setValue(O,"normalMatrix",ue.normalMatrix),Rt.setValue(O,"modelMatrix",ue.matrixWorld),X.isShaderMaterial||X.isRawShaderMaterial){const Ht=X.uniformsGroups;for(let Qo=0,_p=Ht.length;Qo<_p;Qo++)if(ge.isWebGL2){const bc=Ht[Qo];we.update(bc,di),we.bind(bc,di)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return di}function mp(C,q){C.ambientLightColor.needsUpdate=q,C.lightProbe.needsUpdate=q,C.directionalLights.needsUpdate=q,C.directionalLightShadows.needsUpdate=q,C.pointLights.needsUpdate=q,C.pointLightShadows.needsUpdate=q,C.spotLights.needsUpdate=q,C.spotLightShadows.needsUpdate=q,C.rectAreaLights.needsUpdate=q,C.hemisphereLights.needsUpdate=q}function gp(C){return C.isMeshLambertMaterial||C.isMeshToonMaterial||C.isMeshPhongMaterial||C.isMeshStandardMaterial||C.isShadowMaterial||C.isShaderMaterial&&C.lights===!0}this.getActiveCubeFace=function(){return _},this.getActiveMipmapLevel=function(){return b},this.getRenderTarget=function(){return v},this.setRenderTargetTextures=function(C,q,le){y.get(C.texture).__webglTexture=q,y.get(C.depthTexture).__webglTexture=le;const X=y.get(C);X.__hasExternalTextures=!0,X.__hasExternalTextures&&(X.__autoAllocateDepthBuffer=le===void 0,X.__autoAllocateDepthBuffer||ce.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),X.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(C,q){const le=y.get(C);le.__webglFramebuffer=q,le.__useDefaultFramebuffer=q===void 0},this.setRenderTarget=function(C,q=0,le=0){v=C,_=q,b=le;let X=!0,ue=null,Ie=!1,Oe=!1;if(C){const Ve=y.get(C);Ve.__useDefaultFramebuffer!==void 0?(pe.bindFramebuffer(36160,null),X=!1):Ve.__webglFramebuffer===void 0?T.setupRenderTarget(C):Ve.__hasExternalTextures&&T.rebindTextures(C,y.get(C.texture).__webglTexture,y.get(C.depthTexture).__webglTexture);const qe=C.texture;(qe.isData3DTexture||qe.isDataArrayTexture||qe.isCompressedArrayTexture)&&(Oe=!0);const He=y.get(C).__webglFramebuffer;C.isWebGLCubeRenderTarget?(ue=He[q],Ie=!0):ge.isWebGL2&&C.samples>0&&T.useMultisampledRTT(C)===!1?ue=y.get(C).__webglMultisampledFramebuffer:ue=He,P.copy(C.viewport),I.copy(C.scissor),x=C.scissorTest}else P.copy(N).multiplyScalar(j).floor(),I.copy(J).multiplyScalar(j).floor(),x=K;if(pe.bindFramebuffer(36160,ue)&&ge.drawBuffers&&X&&pe.drawBuffers(C,ue),pe.viewport(P),pe.scissor(I),pe.setScissorTest(x),Ie){const Ve=y.get(C.texture);O.framebufferTexture2D(36160,36064,34069+q,Ve.__webglTexture,le)}else if(Oe){const Ve=y.get(C.texture),qe=q||0;O.framebufferTextureLayer(36160,36064,Ve.__webglTexture,le||0,qe)}w=-1},this.readRenderTargetPixels=function(C,q,le,X,ue,Ie,Oe){if(!(C&&C.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Be=y.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&Oe!==void 0&&(Be=Be[Oe]),Be){pe.bindFramebuffer(36160,Be);try{const Ve=C.texture,qe=Ve.format,He=Ve.type;if(qe!==en&&L.convert(qe)!==O.getParameter(35739)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const We=He===fs&&(ce.has("EXT_color_buffer_half_float")||ge.isWebGL2&&ce.has("EXT_color_buffer_float"));if(He!==Di&&L.convert(He)!==O.getParameter(35738)&&!(He===ni&&(ge.isWebGL2||ce.has("OES_texture_float")||ce.has("WEBGL_color_buffer_float")))&&!We){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}q>=0&&q<=C.width-X&&le>=0&&le<=C.height-ue&&O.readPixels(q,le,X,ue,L.convert(qe),L.convert(He),Ie)}finally{const Ve=v!==null?y.get(v).__webglFramebuffer:null;pe.bindFramebuffer(36160,Ve)}}},this.copyFramebufferToTexture=function(C,q,le=0){const X=Math.pow(2,-le),ue=Math.floor(q.image.width*X),Ie=Math.floor(q.image.height*X);T.setTexture2D(q,0),O.copyTexSubImage2D(3553,le,0,0,C.x,C.y,ue,Ie),pe.unbindTexture()},this.copyTextureToTexture=function(C,q,le,X=0){const ue=q.image.width,Ie=q.image.height,Oe=L.convert(le.format),Be=L.convert(le.type);T.setTexture2D(le,0),O.pixelStorei(37440,le.flipY),O.pixelStorei(37441,le.premultiplyAlpha),O.pixelStorei(3317,le.unpackAlignment),q.isDataTexture?O.texSubImage2D(3553,X,C.x,C.y,ue,Ie,Oe,Be,q.image.data):q.isCompressedTexture?O.compressedTexSubImage2D(3553,X,C.x,C.y,q.mipmaps[0].width,q.mipmaps[0].height,Oe,q.mipmaps[0].data):O.texSubImage2D(3553,X,C.x,C.y,Oe,Be,q.image),X===0&&le.generateMipmaps&&O.generateMipmap(3553),pe.unbindTexture()},this.copyTextureToTexture3D=function(C,q,le,X,ue=0){if(p.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const Ie=C.max.x-C.min.x+1,Oe=C.max.y-C.min.y+1,Be=C.max.z-C.min.z+1,Ve=L.convert(X.format),qe=L.convert(X.type);let He;if(X.isData3DTexture)T.setTexture3D(X,0),He=32879;else if(X.isDataArrayTexture)T.setTexture2DArray(X,0),He=35866;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}O.pixelStorei(37440,X.flipY),O.pixelStorei(37441,X.premultiplyAlpha),O.pixelStorei(3317,X.unpackAlignment);const We=O.getParameter(3314),ut=O.getParameter(32878),Gt=O.getParameter(3316),Rn=O.getParameter(3315),fi=O.getParameter(32877),ht=le.isCompressedTexture?le.mipmaps[0]:le.image;O.pixelStorei(3314,ht.width),O.pixelStorei(32878,ht.height),O.pixelStorei(3316,C.min.x),O.pixelStorei(3315,C.min.y),O.pixelStorei(32877,C.min.z),le.isDataTexture||le.isData3DTexture?O.texSubImage3D(He,ue,q.x,q.y,q.z,Ie,Oe,Be,Ve,qe,ht.data):le.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),O.compressedTexSubImage3D(He,ue,q.x,q.y,q.z,Ie,Oe,Be,Ve,ht.data)):O.texSubImage3D(He,ue,q.x,q.y,q.z,Ie,Oe,Be,Ve,qe,ht),O.pixelStorei(3314,We),O.pixelStorei(32878,ut),O.pixelStorei(3316,Gt),O.pixelStorei(3315,Rn),O.pixelStorei(32877,fi),ue===0&&X.generateMipmaps&&O.generateMipmap(He),pe.unbindTexture()},this.initTexture=function(C){C.isCubeTexture?T.setTextureCube(C,0):C.isData3DTexture?T.setTexture3D(C,0):C.isDataArrayTexture||C.isCompressedArrayTexture?T.setTexture2DArray(C,0):T.setTexture2D(C,0),pe.unbindTexture()},this.resetState=function(){_=0,b=0,v=null,pe.reset(),H.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}class fw extends Od{}fw.prototype.isWebGL1Renderer=!0;class dw extends st{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}get autoUpdate(){return console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate}set autoUpdate(e){console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate=e}}const Ah=new D,Ch=new Ke,Ph=new Ke,pw=new D,Lh=new De;class mw extends pt{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode="attached",this.bindMatrix=new De,this.bindMatrixInverse=new De}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,this}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new Ke,t=this.geometry.attributes.skinWeight;for(let n=0,r=t.count;n<r;n++){e.fromBufferAttribute(t,n);const s=1/e.manhattanLength();s!==1/0?e.multiplyScalar(s):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode==="attached"?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode==="detached"?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}boneTransform(e,t){const n=this.skeleton,r=this.geometry;Ch.fromBufferAttribute(r.attributes.skinIndex,e),Ph.fromBufferAttribute(r.attributes.skinWeight,e),Ah.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let s=0;s<4;s++){const o=Ph.getComponent(s);if(o!==0){const a=Ch.getComponent(s);Lh.multiplyMatrices(n.bones[a].matrixWorld,n.boneInverses[a]),t.addScaledVector(pw.copy(Ah).applyMatrix4(Lh),o)}}return t.applyMatrix4(this.bindMatrixInverse)}}class Tl extends st{constructor(){super(),this.isBone=!0,this.type="Bone"}}class gw extends wt{constructor(e=null,t=1,n=1,r,s,o,a,l,c=Mt,u=Mt,h,f){super(null,o,a,l,c,u,r,s,h,f),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Rh=new De,_w=new De;class cc{constructor(e=[],t=[]){this.uuid=Xn(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.boneTextureSize=0,this.frame=-1,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,r=this.bones.length;n<r;n++)this.boneInverses.push(new De)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const n=new De;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const e=this.bones,t=this.boneInverses,n=this.boneMatrices,r=this.boneTexture;for(let s=0,o=e.length;s<o;s++){const a=e[s]?e[s].matrixWorld:_w;Rh.multiplyMatrices(a,t[s]),Rh.toArray(n,s*16)}r!==null&&(r.needsUpdate=!0)}clone(){return new cc(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=yd(e),e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const n=new gw(t,e,e,en,ni);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this.boneTextureSize=e,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){const r=this.bones[t];if(r.name===e)return r}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,r=e.bones.length;n<r;n++){const s=e.bones[n];let o=t[s];o===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",s),o=new Tl),this.bones.push(o),this.boneInverses.push(new De().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){const e={metadata:{version:4.5,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,n=this.boneInverses;for(let r=0,s=t.length;r<s;r++){const o=t[r];e.bones.push(o.uuid);const a=n[r];e.boneInverses.push(a.toArray())}return e}}class Nd extends ui{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Re(16777215),this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Dh=new D,Ih=new D,Fh=new De,Ha=new Ho,Js=new ws;class zd extends st{constructor(e=new mt,t=new Nd){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let r=1,s=t.count;r<s;r++)Dh.fromBufferAttribute(t,r-1),Ih.fromBufferAttribute(t,r),n[r]=n[r-1],n[r]+=Dh.distanceTo(Ih);e.setAttribute("lineDistance",new tt(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,r=this.matrixWorld,s=e.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Js.copy(n.boundingSphere),Js.applyMatrix4(r),Js.radius+=s,e.ray.intersectsSphere(Js)===!1)return;Fh.copy(r).invert(),Ha.copy(e.ray).applyMatrix4(Fh);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=new D,u=new D,h=new D,f=new D,d=this.isLineSegments?2:1,g=n.index,m=n.attributes.position;if(g!==null){const _=Math.max(0,o.start),b=Math.min(g.count,o.start+o.count);for(let v=_,w=b-1;v<w;v+=d){const S=g.getX(v),P=g.getX(v+1);if(c.fromBufferAttribute(m,S),u.fromBufferAttribute(m,P),Ha.distanceSqToSegment(c,u,f,h)>l)continue;f.applyMatrix4(this.matrixWorld);const x=e.ray.origin.distanceTo(f);x<e.near||x>e.far||t.push({distance:x,point:h.clone().applyMatrix4(this.matrixWorld),index:v,face:null,faceIndex:null,object:this})}}else{const _=Math.max(0,o.start),b=Math.min(m.count,o.start+o.count);for(let v=_,w=b-1;v<w;v+=d){if(c.fromBufferAttribute(m,v),u.fromBufferAttribute(m,v+1),Ha.distanceSqToSegment(c,u,f,h)>l)continue;f.applyMatrix4(this.matrixWorld);const P=e.ray.origin.distanceTo(f);P<e.near||P>e.far||t.push({distance:P,point:h.clone().applyMatrix4(this.matrixWorld),index:v,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}const Oh=new D,Nh=new D;class vw extends zd{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let r=0,s=t.count;r<s;r+=2)Oh.fromBufferAttribute(t,r),Nh.fromBufferAttribute(t,r+1),n[r]=r===0?0:n[r-1],n[r+1]=n[r]+Oh.distanceTo(Nh);e.setAttribute("lineDistance",new tt(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Ud extends ui{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Re(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const zh=new De,El=new Ho,Qs=new ws,eo=new D;class uc extends st{constructor(e=new mt,t=new Ud){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,r=this.matrixWorld,s=e.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Qs.copy(n.boundingSphere),Qs.applyMatrix4(r),Qs.radius+=s,e.ray.intersectsSphere(Qs)===!1)return;zh.copy(r).invert(),El.copy(e.ray).applyMatrix4(zh);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=n.index,h=n.attributes.position;if(c!==null){const f=Math.max(0,o.start),d=Math.min(c.count,o.start+o.count);for(let g=f,p=d;g<p;g++){const m=c.getX(g);eo.fromBufferAttribute(h,m),Uh(eo,m,l,r,e,t,this)}}else{const f=Math.max(0,o.start),d=Math.min(h.count,o.start+o.count);for(let g=f,p=d;g<p;g++)eo.fromBufferAttribute(h,g),Uh(eo,g,l,r,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function Uh(i,e,t,n,r,s,o){const a=El.distanceSqToPoint(i);if(a<t){const l=new D;El.closestPointToPoint(i,l),l.applyMatrix4(n);const c=r.ray.origin.distanceTo(l);if(c<r.near||c>r.far)return;s.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,object:o})}}class _n{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){const n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let n,r=this.getPoint(0),s=0;t.push(0);for(let o=1;o<=e;o++)n=this.getPoint(o/e),s+=n.distanceTo(r),t.push(s),r=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){const n=this.getLengths();let r=0;const s=n.length;let o;t?o=t:o=e*n[s-1];let a=0,l=s-1,c;for(;a<=l;)if(r=Math.floor(a+(l-a)/2),c=n[r]-o,c<0)a=r+1;else if(c>0)l=r-1;else{l=r;break}if(r=l,n[r]===o)return r/(s-1);const u=n[r],f=n[r+1]-u,d=(o-u)/f;return(r+d)/(s-1)}getTangent(e,t){let r=e-1e-4,s=e+1e-4;r<0&&(r=0),s>1&&(s=1);const o=this.getPoint(r),a=this.getPoint(s),l=t||(o.isVector2?new ye:new D);return l.copy(a).sub(o).normalize(),l}getTangentAt(e,t){const n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t){const n=new D,r=[],s=[],o=[],a=new D,l=new De;for(let d=0;d<=e;d++){const g=d/e;r[d]=this.getTangentAt(g,new D)}s[0]=new D,o[0]=new D;let c=Number.MAX_VALUE;const u=Math.abs(r[0].x),h=Math.abs(r[0].y),f=Math.abs(r[0].z);u<=c&&(c=u,n.set(1,0,0)),h<=c&&(c=h,n.set(0,1,0)),f<=c&&n.set(0,0,1),a.crossVectors(r[0],n).normalize(),s[0].crossVectors(r[0],a),o[0].crossVectors(r[0],s[0]);for(let d=1;d<=e;d++){if(s[d]=s[d-1].clone(),o[d]=o[d-1].clone(),a.crossVectors(r[d-1],r[d]),a.length()>Number.EPSILON){a.normalize();const g=Math.acos(bt(r[d-1].dot(r[d]),-1,1));s[d].applyMatrix4(l.makeRotationAxis(a,g))}o[d].crossVectors(r[d],s[d])}if(t===!0){let d=Math.acos(bt(s[0].dot(s[e]),-1,1));d/=e,r[0].dot(a.crossVectors(s[0],s[e]))>0&&(d=-d);for(let g=1;g<=e;g++)s[g].applyMatrix4(l.makeRotationAxis(r[g],d*g)),o[g].crossVectors(r[g],s[g])}return{tangents:r,normals:s,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.5,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class hc extends _n{constructor(e=0,t=0,n=1,r=1,s=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=r,this.aStartAngle=s,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(e,t){const n=t||new ye,r=Math.PI*2;let s=this.aEndAngle-this.aStartAngle;const o=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=r;for(;s>r;)s-=r;s<Number.EPSILON&&(o?s=0:s=r),this.aClockwise===!0&&!o&&(s===r?s=-r:s=s-r);const a=this.aStartAngle+e*s;let l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const u=Math.cos(this.aRotation),h=Math.sin(this.aRotation),f=l-this.aX,d=c-this.aY;l=f*u-d*h+this.aX,c=f*h+d*u+this.aY}return n.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class xw extends hc{constructor(e,t,n,r,s,o){super(e,t,n,n,r,s,o),this.isArcCurve=!0,this.type="ArcCurve"}}function fc(){let i=0,e=0,t=0,n=0;function r(s,o,a,l){i=s,e=a,t=-3*s+3*o-2*a-l,n=2*s-2*o+a+l}return{initCatmullRom:function(s,o,a,l,c){r(o,a,c*(a-s),c*(l-o))},initNonuniformCatmullRom:function(s,o,a,l,c,u,h){let f=(o-s)/c-(a-s)/(c+u)+(a-o)/u,d=(a-o)/u-(l-o)/(u+h)+(l-a)/h;f*=u,d*=u,r(o,a,f,d)},calc:function(s){const o=s*s,a=o*s;return i+e*s+t*o+n*a}}}const to=new D,Wa=new fc,Xa=new fc,ja=new fc;class Bd extends _n{constructor(e=[],t=!1,n="centripetal",r=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=r}getPoint(e,t=new D){const n=t,r=this.points,s=r.length,o=(s-(this.closed?0:1))*e;let a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/s)+1)*s:l===0&&a===s-1&&(a=s-2,l=1);let c,u;this.closed||a>0?c=r[(a-1)%s]:(to.subVectors(r[0],r[1]).add(r[0]),c=to);const h=r[a%s],f=r[(a+1)%s];if(this.closed||a+2<s?u=r[(a+2)%s]:(to.subVectors(r[s-1],r[s-2]).add(r[s-1]),u=to),this.curveType==="centripetal"||this.curveType==="chordal"){const d=this.curveType==="chordal"?.5:.25;let g=Math.pow(c.distanceToSquared(h),d),p=Math.pow(h.distanceToSquared(f),d),m=Math.pow(f.distanceToSquared(u),d);p<1e-4&&(p=1),g<1e-4&&(g=p),m<1e-4&&(m=p),Wa.initNonuniformCatmullRom(c.x,h.x,f.x,u.x,g,p,m),Xa.initNonuniformCatmullRom(c.y,h.y,f.y,u.y,g,p,m),ja.initNonuniformCatmullRom(c.z,h.z,f.z,u.z,g,p,m)}else this.curveType==="catmullrom"&&(Wa.initCatmullRom(c.x,h.x,f.x,u.x,this.tension),Xa.initCatmullRom(c.y,h.y,f.y,u.y,this.tension),ja.initCatmullRom(c.z,h.z,f.z,u.z,this.tension));return n.set(Wa.calc(l),Xa.calc(l),ja.calc(l)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const r=e.points[t];this.points.push(r.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const r=this.points[t];e.points.push(r.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const r=e.points[t];this.points.push(new D().fromArray(r))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function Bh(i,e,t,n,r){const s=(n-e)*.5,o=(r-t)*.5,a=i*i,l=i*a;return(2*t-2*n+s+o)*l+(-3*t+3*n-2*s-o)*a+s*i+t}function yw(i,e){const t=1-i;return t*t*e}function Mw(i,e){return 2*(1-i)*i*e}function bw(i,e){return i*i*e}function es(i,e,t,n){return yw(i,e)+Mw(i,t)+bw(i,n)}function ww(i,e){const t=1-i;return t*t*t*e}function Sw(i,e){const t=1-i;return 3*t*t*i*e}function Tw(i,e){return 3*(1-i)*i*i*e}function Ew(i,e){return i*i*i*e}function ts(i,e,t,n,r){return ww(i,e)+Sw(i,t)+Tw(i,n)+Ew(i,r)}class kd extends _n{constructor(e=new ye,t=new ye,n=new ye,r=new ye){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=r}getPoint(e,t=new ye){const n=t,r=this.v0,s=this.v1,o=this.v2,a=this.v3;return n.set(ts(e,r.x,s.x,o.x,a.x),ts(e,r.y,s.y,o.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class Aw extends _n{constructor(e=new D,t=new D,n=new D,r=new D){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=r}getPoint(e,t=new D){const n=t,r=this.v0,s=this.v1,o=this.v2,a=this.v3;return n.set(ts(e,r.x,s.x,o.x,a.x),ts(e,r.y,s.y,o.y,a.y),ts(e,r.z,s.z,o.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class dc extends _n{constructor(e=new ye,t=new ye){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new ye){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t){const n=t||new ye;return n.copy(this.v2).sub(this.v1).normalize(),n}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Cw extends _n{constructor(e=new D,t=new D){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new D){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Vd extends _n{constructor(e=new ye,t=new ye,n=new ye){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new ye){const n=t,r=this.v0,s=this.v1,o=this.v2;return n.set(es(e,r.x,s.x,o.x),es(e,r.y,s.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Gd extends _n{constructor(e=new D,t=new D,n=new D){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new D){const n=t,r=this.v0,s=this.v1,o=this.v2;return n.set(es(e,r.x,s.x,o.x),es(e,r.y,s.y,o.y),es(e,r.z,s.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Hd extends _n{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new ye){const n=t,r=this.points,s=(r.length-1)*e,o=Math.floor(s),a=s-o,l=r[o===0?o:o-1],c=r[o],u=r[o>r.length-2?r.length-1:o+1],h=r[o>r.length-3?r.length-1:o+2];return n.set(Bh(a,l.x,c.x,u.x,h.x),Bh(a,l.y,c.y,u.y,h.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const r=e.points[t];this.points.push(r.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const r=this.points[t];e.points.push(r.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const r=e.points[t];this.points.push(new ye().fromArray(r))}return this}}var Wd=Object.freeze({__proto__:null,ArcCurve:xw,CatmullRomCurve3:Bd,CubicBezierCurve:kd,CubicBezierCurve3:Aw,EllipseCurve:hc,LineCurve:dc,LineCurve3:Cw,QuadraticBezierCurve:Vd,QuadraticBezierCurve3:Gd,SplineCurve:Hd});class Pw extends _n{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){const e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);e.equals(t)||this.curves.push(new dc(t,e))}getPoint(e,t){const n=e*this.getLength(),r=this.getCurveLengths();let s=0;for(;s<r.length;){if(r[s]>=n){const o=r[s]-n,a=this.curves[s],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,t)}s++}return null}getLength(){const e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let t=0;for(let n=0,r=this.curves.length;n<r;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){const t=[];let n;for(let r=0,s=this.curves;r<s.length;r++){const o=s[r],a=o.isEllipseCurve?e*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?e*o.points.length:e,l=o.getPoints(a);for(let c=0;c<l.length;c++){const u=l[c];n&&n.equals(u)||(t.push(u),n=u)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const r=e.curves[t];this.curves.push(r.clone())}return this.autoClose=e.autoClose,this}toJSON(){const e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){const r=this.curves[t];e.curves.push(r.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const r=e.curves[t];this.curves.push(new Wd[r.type]().fromJSON(r))}return this}}class Al extends Pw{constructor(e){super(),this.type="Path",this.currentPoint=new ye,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){const n=new dc(this.currentPoint.clone(),new ye(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,r){const s=new Vd(this.currentPoint.clone(),new ye(e,t),new ye(n,r));return this.curves.push(s),this.currentPoint.set(n,r),this}bezierCurveTo(e,t,n,r,s,o){const a=new kd(this.currentPoint.clone(),new ye(e,t),new ye(n,r),new ye(s,o));return this.curves.push(a),this.currentPoint.set(s,o),this}splineThru(e){const t=[this.currentPoint.clone()].concat(e),n=new Hd(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,r,s,o){const a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+a,t+l,n,r,s,o),this}absarc(e,t,n,r,s,o){return this.absellipse(e,t,n,n,r,s,o),this}ellipse(e,t,n,r,s,o,a,l){const c=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(e+c,t+u,n,r,s,o,a,l),this}absellipse(e,t,n,r,s,o,a,l){const c=new hc(e,t,n,r,s,o,a,l);if(this.curves.length>0){const h=c.getPoint(0);h.equals(this.currentPoint)||this.lineTo(h.x,h.y)}this.curves.push(c);const u=c.getPoint(1);return this.currentPoint.copy(u),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){const e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}}class jo extends mt{constructor(e=1,t=1,n=1,r=32,s=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:r,heightSegments:s,openEnded:o,thetaStart:a,thetaLength:l};const c=this;r=Math.floor(r),s=Math.floor(s);const u=[],h=[],f=[],d=[];let g=0;const p=[],m=n/2;let _=0;b(),o===!1&&(e>0&&v(!0),t>0&&v(!1)),this.setIndex(u),this.setAttribute("position",new tt(h,3)),this.setAttribute("normal",new tt(f,3)),this.setAttribute("uv",new tt(d,2));function b(){const w=new D,S=new D;let P=0;const I=(t-e)/n;for(let x=0;x<=s;x++){const A=[],R=x/s,j=R*(t-e)+e;for(let Q=0;Q<=r;Q++){const B=Q/r,N=B*l+a,J=Math.sin(N),K=Math.cos(N);S.x=j*J,S.y=-R*n+m,S.z=j*K,h.push(S.x,S.y,S.z),w.set(J,I,K).normalize(),f.push(w.x,w.y,w.z),d.push(B,1-R),A.push(g++)}p.push(A)}for(let x=0;x<r;x++)for(let A=0;A<s;A++){const R=p[A][x],j=p[A+1][x],Q=p[A+1][x+1],B=p[A][x+1];u.push(R,j,B),u.push(j,Q,B),P+=6}c.addGroup(_,P,0),_+=P}function v(w){const S=g,P=new ye,I=new D;let x=0;const A=w===!0?e:t,R=w===!0?1:-1;for(let Q=1;Q<=r;Q++)h.push(0,m*R,0),f.push(0,R,0),d.push(.5,.5),g++;const j=g;for(let Q=0;Q<=r;Q++){const N=Q/r*l+a,J=Math.cos(N),K=Math.sin(N);I.x=A*K,I.y=m*R,I.z=A*J,h.push(I.x,I.y,I.z),f.push(0,R,0),P.x=J*.5+.5,P.y=K*.5*R+.5,d.push(P.x,P.y),g++}for(let Q=0;Q<r;Q++){const B=S+Q,N=j+Q;w===!0?u.push(N,N+1,B):u.push(N+1,N,B),x+=3}c.addGroup(_,x,w===!0?1:2),_+=x}}static fromJSON(e){return new jo(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class pc extends jo{constructor(e=1,t=1,n=32,r=1,s=!1,o=0,a=Math.PI*2){super(0,e,t,n,r,s,o,a),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:r,openEnded:s,thetaStart:o,thetaLength:a}}static fromJSON(e){return new pc(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}const no=new D,io=new D,qa=new D,ro=new Tn;class Lw extends mt{constructor(e=null,t=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:e,thresholdAngle:t},e!==null){const r=Math.pow(10,4),s=Math.cos(pr*t),o=e.getIndex(),a=e.getAttribute("position"),l=o?o.count:a.count,c=[0,0,0],u=["a","b","c"],h=new Array(3),f={},d=[];for(let g=0;g<l;g+=3){o?(c[0]=o.getX(g),c[1]=o.getX(g+1),c[2]=o.getX(g+2)):(c[0]=g,c[1]=g+1,c[2]=g+2);const{a:p,b:m,c:_}=ro;if(p.fromBufferAttribute(a,c[0]),m.fromBufferAttribute(a,c[1]),_.fromBufferAttribute(a,c[2]),ro.getNormal(qa),h[0]=`${Math.round(p.x*r)},${Math.round(p.y*r)},${Math.round(p.z*r)}`,h[1]=`${Math.round(m.x*r)},${Math.round(m.y*r)},${Math.round(m.z*r)}`,h[2]=`${Math.round(_.x*r)},${Math.round(_.y*r)},${Math.round(_.z*r)}`,!(h[0]===h[1]||h[1]===h[2]||h[2]===h[0]))for(let b=0;b<3;b++){const v=(b+1)%3,w=h[b],S=h[v],P=ro[u[b]],I=ro[u[v]],x=`${w}_${S}`,A=`${S}_${w}`;A in f&&f[A]?(qa.dot(f[A].normal)<=s&&(d.push(P.x,P.y,P.z),d.push(I.x,I.y,I.z)),f[A]=null):x in f||(f[x]={index0:c[b],index1:c[v],normal:qa.clone()})}}for(const g in f)if(f[g]){const{index0:p,index1:m}=f[g];no.fromBufferAttribute(a,p),io.fromBufferAttribute(a,m),d.push(no.x,no.y,no.z),d.push(io.x,io.y,io.z)}this.setAttribute("position",new tt(d,3))}}}class _o extends Al{constructor(e){super(e),this.uuid=Xn(),this.type="Shape",this.holes=[]}getPointsHoles(e){const t=[];for(let n=0,r=this.holes.length;n<r;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const r=e.holes[t];this.holes.push(r.clone())}return this}toJSON(){const e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){const r=this.holes[t];e.holes.push(r.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const r=e.holes[t];this.holes.push(new Al().fromJSON(r))}return this}}const Rw={triangulate:function(i,e,t=2){const n=e&&e.length,r=n?e[0]*t:i.length;let s=Xd(i,0,r,t,!0);const o=[];if(!s||s.next===s.prev)return o;let a,l,c,u,h,f,d;if(n&&(s=Nw(i,e,s,t)),i.length>80*t){a=c=i[0],l=u=i[1];for(let g=t;g<r;g+=t)h=i[g],f=i[g+1],h<a&&(a=h),f<l&&(l=f),h>c&&(c=h),f>u&&(u=f);d=Math.max(c-a,u-l),d=d!==0?32767/d:0}return gs(s,o,t,a,l,d,0),o}};function Xd(i,e,t,n,r){let s,o;if(r===qw(i,e,t,n)>0)for(s=e;s<t;s+=n)o=kh(s,i[s],i[s+1],o);else for(s=t-n;s>=e;s-=n)o=kh(s,i[s],i[s+1],o);return o&&qo(o,o.next)&&(vs(o),o=o.next),o}function Oi(i,e){if(!i)return i;e||(e=i);let t=i,n;do if(n=!1,!t.steiner&&(qo(t,t.next)||ot(t.prev,t,t.next)===0)){if(vs(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function gs(i,e,t,n,r,s,o){if(!i)return;!o&&s&&Vw(i,n,r,s);let a=i,l,c;for(;i.prev!==i.next;){if(l=i.prev,c=i.next,s?Iw(i,n,r,s):Dw(i)){e.push(l.i/t|0),e.push(i.i/t|0),e.push(c.i/t|0),vs(i),i=c.next,a=c.next;continue}if(i=c,i===a){o?o===1?(i=Fw(Oi(i),e,t),gs(i,e,t,n,r,s,2)):o===2&&Ow(i,e,t,n,r,s):gs(Oi(i),e,t,n,r,s,1);break}}}function Dw(i){const e=i.prev,t=i,n=i.next;if(ot(e,t,n)>=0)return!1;const r=e.x,s=t.x,o=n.x,a=e.y,l=t.y,c=n.y,u=r<s?r<o?r:o:s<o?s:o,h=a<l?a<c?a:c:l<c?l:c,f=r>s?r>o?r:o:s>o?s:o,d=a>l?a>c?a:c:l>c?l:c;let g=n.next;for(;g!==e;){if(g.x>=u&&g.x<=f&&g.y>=h&&g.y<=d&&ar(r,a,s,l,o,c,g.x,g.y)&&ot(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function Iw(i,e,t,n){const r=i.prev,s=i,o=i.next;if(ot(r,s,o)>=0)return!1;const a=r.x,l=s.x,c=o.x,u=r.y,h=s.y,f=o.y,d=a<l?a<c?a:c:l<c?l:c,g=u<h?u<f?u:f:h<f?h:f,p=a>l?a>c?a:c:l>c?l:c,m=u>h?u>f?u:f:h>f?h:f,_=Cl(d,g,e,t,n),b=Cl(p,m,e,t,n);let v=i.prevZ,w=i.nextZ;for(;v&&v.z>=_&&w&&w.z<=b;){if(v.x>=d&&v.x<=p&&v.y>=g&&v.y<=m&&v!==r&&v!==o&&ar(a,u,l,h,c,f,v.x,v.y)&&ot(v.prev,v,v.next)>=0||(v=v.prevZ,w.x>=d&&w.x<=p&&w.y>=g&&w.y<=m&&w!==r&&w!==o&&ar(a,u,l,h,c,f,w.x,w.y)&&ot(w.prev,w,w.next)>=0))return!1;w=w.nextZ}for(;v&&v.z>=_;){if(v.x>=d&&v.x<=p&&v.y>=g&&v.y<=m&&v!==r&&v!==o&&ar(a,u,l,h,c,f,v.x,v.y)&&ot(v.prev,v,v.next)>=0)return!1;v=v.prevZ}for(;w&&w.z<=b;){if(w.x>=d&&w.x<=p&&w.y>=g&&w.y<=m&&w!==r&&w!==o&&ar(a,u,l,h,c,f,w.x,w.y)&&ot(w.prev,w,w.next)>=0)return!1;w=w.nextZ}return!0}function Fw(i,e,t){let n=i;do{const r=n.prev,s=n.next.next;!qo(r,s)&&jd(r,n,n.next,s)&&_s(r,s)&&_s(s,r)&&(e.push(r.i/t|0),e.push(n.i/t|0),e.push(s.i/t|0),vs(n),vs(n.next),n=i=s),n=n.next}while(n!==i);return Oi(n)}function Ow(i,e,t,n,r,s){let o=i;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&Ww(o,a)){let l=qd(o,a);o=Oi(o,o.next),l=Oi(l,l.next),gs(o,e,t,n,r,s,0),gs(l,e,t,n,r,s,0);return}a=a.next}o=o.next}while(o!==i)}function Nw(i,e,t,n){const r=[];let s,o,a,l,c;for(s=0,o=e.length;s<o;s++)a=e[s]*n,l=s<o-1?e[s+1]*n:i.length,c=Xd(i,a,l,n,!1),c===c.next&&(c.steiner=!0),r.push(Hw(c));for(r.sort(zw),s=0;s<r.length;s++)t=Uw(r[s],t);return t}function zw(i,e){return i.x-e.x}function Uw(i,e){const t=Bw(i,e);if(!t)return e;const n=qd(t,i);return Oi(n,n.next),Oi(t,t.next)}function Bw(i,e){let t=e,n=-1/0,r;const s=i.x,o=i.y;do{if(o<=t.y&&o>=t.next.y&&t.next.y!==t.y){const f=t.x+(o-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(f<=s&&f>n&&(n=f,r=t.x<t.next.x?t:t.next,f===s))return r}t=t.next}while(t!==e);if(!r)return null;const a=r,l=r.x,c=r.y;let u=1/0,h;t=r;do s>=t.x&&t.x>=l&&s!==t.x&&ar(o<c?s:n,o,l,c,o<c?n:s,o,t.x,t.y)&&(h=Math.abs(o-t.y)/(s-t.x),_s(t,i)&&(h<u||h===u&&(t.x>r.x||t.x===r.x&&kw(r,t)))&&(r=t,u=h)),t=t.next;while(t!==a);return r}function kw(i,e){return ot(i.prev,i,e.prev)<0&&ot(e.next,i,i.next)<0}function Vw(i,e,t,n){let r=i;do r.z===0&&(r.z=Cl(r.x,r.y,e,t,n)),r.prevZ=r.prev,r.nextZ=r.next,r=r.next;while(r!==i);r.prevZ.nextZ=null,r.prevZ=null,Gw(r)}function Gw(i){let e,t,n,r,s,o,a,l,c=1;do{for(t=i,i=null,s=null,o=0;t;){for(o++,n=t,a=0,e=0;e<c&&(a++,n=n.nextZ,!!n);e++);for(l=c;a>0||l>0&&n;)a!==0&&(l===0||!n||t.z<=n.z)?(r=t,t=t.nextZ,a--):(r=n,n=n.nextZ,l--),s?s.nextZ=r:i=r,r.prevZ=s,s=r;t=n}s.nextZ=null,c*=2}while(o>1);return i}function Cl(i,e,t,n,r){return i=(i-t)*r|0,e=(e-n)*r|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,i|e<<1}function Hw(i){let e=i,t=i;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==i);return t}function ar(i,e,t,n,r,s,o,a){return(r-o)*(e-a)>=(i-o)*(s-a)&&(i-o)*(n-a)>=(t-o)*(e-a)&&(t-o)*(s-a)>=(r-o)*(n-a)}function Ww(i,e){return i.next.i!==e.i&&i.prev.i!==e.i&&!Xw(i,e)&&(_s(i,e)&&_s(e,i)&&jw(i,e)&&(ot(i.prev,i,e.prev)||ot(i,e.prev,e))||qo(i,e)&&ot(i.prev,i,i.next)>0&&ot(e.prev,e,e.next)>0)}function ot(i,e,t){return(e.y-i.y)*(t.x-e.x)-(e.x-i.x)*(t.y-e.y)}function qo(i,e){return i.x===e.x&&i.y===e.y}function jd(i,e,t,n){const r=oo(ot(i,e,t)),s=oo(ot(i,e,n)),o=oo(ot(t,n,i)),a=oo(ot(t,n,e));return!!(r!==s&&o!==a||r===0&&so(i,t,e)||s===0&&so(i,n,e)||o===0&&so(t,i,n)||a===0&&so(t,e,n))}function so(i,e,t){return e.x<=Math.max(i.x,t.x)&&e.x>=Math.min(i.x,t.x)&&e.y<=Math.max(i.y,t.y)&&e.y>=Math.min(i.y,t.y)}function oo(i){return i>0?1:i<0?-1:0}function Xw(i,e){let t=i;do{if(t.i!==i.i&&t.next.i!==i.i&&t.i!==e.i&&t.next.i!==e.i&&jd(t,t.next,i,e))return!0;t=t.next}while(t!==i);return!1}function _s(i,e){return ot(i.prev,i,i.next)<0?ot(i,e,i.next)>=0&&ot(i,i.prev,e)>=0:ot(i,e,i.prev)<0||ot(i,i.next,e)<0}function jw(i,e){let t=i,n=!1;const r=(i.x+e.x)/2,s=(i.y+e.y)/2;do t.y>s!=t.next.y>s&&t.next.y!==t.y&&r<(t.next.x-t.x)*(s-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==i);return n}function qd(i,e){const t=new Pl(i.i,i.x,i.y),n=new Pl(e.i,e.x,e.y),r=i.next,s=e.prev;return i.next=e,e.prev=i,t.next=r,r.prev=t,n.next=t,t.prev=n,s.next=n,n.prev=s,n}function kh(i,e,t,n){const r=new Pl(i,e,t);return n?(r.next=n.next,r.prev=n,n.next.prev=r,n.next=r):(r.prev=r,r.next=r),r}function vs(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function Pl(i,e,t){this.i=i,this.x=e,this.y=t,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function qw(i,e,t,n){let r=0;for(let s=e,o=t-n;s<t;s+=n)r+=(i[o]-i[s])*(i[s+1]+i[o+1]),o=s;return r}class mr{static area(e){const t=e.length;let n=0;for(let r=t-1,s=0;s<t;r=s++)n+=e[r].x*e[s].y-e[s].x*e[r].y;return n*.5}static isClockWise(e){return mr.area(e)<0}static triangulateShape(e,t){const n=[],r=[],s=[];Vh(e),Gh(n,e);let o=e.length;t.forEach(Vh);for(let l=0;l<t.length;l++)r.push(o),o+=t[l].length,Gh(n,t[l]);const a=Rw.triangulate(n,r);for(let l=0;l<a.length;l+=3)s.push(a.slice(l,l+3));return s}}function Vh(i){const e=i.length;e>2&&i[e-1].equals(i[0])&&i.pop()}function Gh(i,e){for(let t=0;t<e.length;t++)i.push(e[t].x),i.push(e[t].y)}class mc extends mt{constructor(e=new _o([new ye(.5,.5),new ye(-.5,.5),new ye(-.5,-.5),new ye(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];const n=this,r=[],s=[];for(let a=0,l=e.length;a<l;a++){const c=e[a];o(c)}this.setAttribute("position",new tt(r,3)),this.setAttribute("uv",new tt(s,2)),this.computeVertexNormals();function o(a){const l=[],c=t.curveSegments!==void 0?t.curveSegments:12,u=t.steps!==void 0?t.steps:1,h=t.depth!==void 0?t.depth:1;let f=t.bevelEnabled!==void 0?t.bevelEnabled:!0,d=t.bevelThickness!==void 0?t.bevelThickness:.2,g=t.bevelSize!==void 0?t.bevelSize:d-.1,p=t.bevelOffset!==void 0?t.bevelOffset:0,m=t.bevelSegments!==void 0?t.bevelSegments:3;const _=t.extrudePath,b=t.UVGenerator!==void 0?t.UVGenerator:Yw;let v,w=!1,S,P,I,x;_&&(v=_.getSpacedPoints(u),w=!0,f=!1,S=_.computeFrenetFrames(u,!1),P=new D,I=new D,x=new D),f||(m=0,d=0,g=0,p=0);const A=a.extractPoints(c);let R=A.shape;const j=A.holes;if(!mr.isClockWise(R)){R=R.reverse();for(let y=0,T=j.length;y<T;y++){const F=j[y];mr.isClockWise(F)&&(j[y]=F.reverse())}}const B=mr.triangulateShape(R,j),N=R;for(let y=0,T=j.length;y<T;y++){const F=j[y];R=R.concat(F)}function J(y,T,F){return T||console.error("THREE.ExtrudeGeometry: vec does not exist"),T.clone().multiplyScalar(F).add(y)}const K=R.length,ie=B.length;function Y(y,T,F){let G,k,te;const re=y.x-T.x,$=y.y-T.y,he=F.x-y.x,ne=F.y-y.y,E=re*re+$*$,M=re*ne-$*he;if(Math.abs(M)>Number.EPSILON){const U=Math.sqrt(E),Z=Math.sqrt(he*he+ne*ne),se=T.x-$/U,me=T.y+re/U,be=F.x-ne/Z,L=F.y+he/Z,H=((be-se)*ne-(L-me)*he)/(re*ne-$*he);G=se+re*H-y.x,k=me+$*H-y.y;const we=G*G+k*k;if(we<=2)return new ye(G,k);te=Math.sqrt(we/2)}else{let U=!1;re>Number.EPSILON?he>Number.EPSILON&&(U=!0):re<-Number.EPSILON?he<-Number.EPSILON&&(U=!0):Math.sign($)===Math.sign(ne)&&(U=!0),U?(G=-$,k=re,te=Math.sqrt(E)):(G=re,k=$,te=Math.sqrt(E/2))}return new ye(G/te,k/te)}const fe=[];for(let y=0,T=N.length,F=T-1,G=y+1;y<T;y++,F++,G++)F===T&&(F=0),G===T&&(G=0),fe[y]=Y(N[y],N[F],N[G]);const de=[];let xe,W=fe.concat();for(let y=0,T=j.length;y<T;y++){const F=j[y];xe=[];for(let G=0,k=F.length,te=k-1,re=G+1;G<k;G++,te++,re++)te===k&&(te=0),re===k&&(re=0),xe[G]=Y(F[G],F[te],F[re]);de.push(xe),W=W.concat(xe)}for(let y=0;y<m;y++){const T=y/m,F=d*Math.cos(T*Math.PI/2),G=g*Math.sin(T*Math.PI/2)+p;for(let k=0,te=N.length;k<te;k++){const re=J(N[k],fe[k],G);ee(re.x,re.y,-F)}for(let k=0,te=j.length;k<te;k++){const re=j[k];xe=de[k];for(let $=0,he=re.length;$<he;$++){const ne=J(re[$],xe[$],G);ee(ne.x,ne.y,-F)}}}const oe=g+p;for(let y=0;y<K;y++){const T=f?J(R[y],W[y],oe):R[y];w?(I.copy(S.normals[0]).multiplyScalar(T.x),P.copy(S.binormals[0]).multiplyScalar(T.y),x.copy(v[0]).add(I).add(P),ee(x.x,x.y,x.z)):ee(T.x,T.y,0)}for(let y=1;y<=u;y++)for(let T=0;T<K;T++){const F=f?J(R[T],W[T],oe):R[T];w?(I.copy(S.normals[y]).multiplyScalar(F.x),P.copy(S.binormals[y]).multiplyScalar(F.y),x.copy(v[y]).add(I).add(P),ee(x.x,x.y,x.z)):ee(F.x,F.y,h/u*y)}for(let y=m-1;y>=0;y--){const T=y/m,F=d*Math.cos(T*Math.PI/2),G=g*Math.sin(T*Math.PI/2)+p;for(let k=0,te=N.length;k<te;k++){const re=J(N[k],fe[k],G);ee(re.x,re.y,h+F)}for(let k=0,te=j.length;k<te;k++){const re=j[k];xe=de[k];for(let $=0,he=re.length;$<he;$++){const ne=J(re[$],xe[$],G);w?ee(ne.x,ne.y+v[u-1].y,v[u-1].x+F):ee(ne.x,ne.y,h+F)}}}ve(),z();function ve(){const y=r.length/3;if(f){let T=0,F=K*T;for(let G=0;G<ie;G++){const k=B[G];ce(k[2]+F,k[1]+F,k[0]+F)}T=u+m*2,F=K*T;for(let G=0;G<ie;G++){const k=B[G];ce(k[0]+F,k[1]+F,k[2]+F)}}else{for(let T=0;T<ie;T++){const F=B[T];ce(F[2],F[1],F[0])}for(let T=0;T<ie;T++){const F=B[T];ce(F[0]+K*u,F[1]+K*u,F[2]+K*u)}}n.addGroup(y,r.length/3-y,0)}function z(){const y=r.length/3;let T=0;O(N,T),T+=N.length;for(let F=0,G=j.length;F<G;F++){const k=j[F];O(k,T),T+=k.length}n.addGroup(y,r.length/3-y,1)}function O(y,T){let F=y.length;for(;--F>=0;){const G=F;let k=F-1;k<0&&(k=y.length-1);for(let te=0,re=u+m*2;te<re;te++){const $=K*te,he=K*(te+1),ne=T+G+$,E=T+k+$,M=T+k+he,U=T+G+he;ge(ne,E,M,U)}}}function ee(y,T,F){l.push(y),l.push(T),l.push(F)}function ce(y,T,F){pe(y),pe(T),pe(F);const G=r.length/3,k=b.generateTopUV(n,r,G-3,G-2,G-1);Me(k[0]),Me(k[1]),Me(k[2])}function ge(y,T,F,G){pe(y),pe(T),pe(G),pe(T),pe(F),pe(G);const k=r.length/3,te=b.generateSideWallUV(n,r,k-6,k-3,k-2,k-1);Me(te[0]),Me(te[1]),Me(te[3]),Me(te[1]),Me(te[2]),Me(te[3])}function pe(y){r.push(l[y*3+0]),r.push(l[y*3+1]),r.push(l[y*3+2])}function Me(y){s.push(y.x),s.push(y.y)}}}toJSON(){const e=super.toJSON(),t=this.parameters.shapes,n=this.parameters.options;return $w(t,n,e)}static fromJSON(e,t){const n=[];for(let s=0,o=e.shapes.length;s<o;s++){const a=t[e.shapes[s]];n.push(a)}const r=e.options.extrudePath;return r!==void 0&&(e.options.extrudePath=new Wd[r.type]().fromJSON(r)),new mc(n,e.options)}}const Yw={generateTopUV:function(i,e,t,n,r){const s=e[t*3],o=e[t*3+1],a=e[n*3],l=e[n*3+1],c=e[r*3],u=e[r*3+1];return[new ye(s,o),new ye(a,l),new ye(c,u)]},generateSideWallUV:function(i,e,t,n,r,s){const o=e[t*3],a=e[t*3+1],l=e[t*3+2],c=e[n*3],u=e[n*3+1],h=e[n*3+2],f=e[r*3],d=e[r*3+1],g=e[r*3+2],p=e[s*3],m=e[s*3+1],_=e[s*3+2];return Math.abs(a-u)<Math.abs(o-c)?[new ye(o,1-l),new ye(c,1-h),new ye(f,1-g),new ye(p,1-_)]:[new ye(a,1-l),new ye(u,1-h),new ye(d,1-g),new ye(m,1-_)]}};function $w(i,e,t){if(t.shapes=[],Array.isArray(i))for(let n=0,r=i.length;n<r;n++){const s=i[n];t.shapes.push(s.uuid)}else t.shapes.push(i.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}class Cr extends mt{constructor(e=1,t=32,n=16,r=0,s=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:r,phiLength:s,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const l=Math.min(o+a,Math.PI);let c=0;const u=[],h=new D,f=new D,d=[],g=[],p=[],m=[];for(let _=0;_<=n;_++){const b=[],v=_/n;let w=0;_==0&&o==0?w=.5/t:_==n&&l==Math.PI&&(w=-.5/t);for(let S=0;S<=t;S++){const P=S/t;h.x=-e*Math.cos(r+P*s)*Math.sin(o+v*a),h.y=e*Math.cos(o+v*a),h.z=e*Math.sin(r+P*s)*Math.sin(o+v*a),g.push(h.x,h.y,h.z),f.copy(h).normalize(),p.push(f.x,f.y,f.z),m.push(P+w,1-v),b.push(c++)}u.push(b)}for(let _=0;_<n;_++)for(let b=0;b<t;b++){const v=u[_][b+1],w=u[_][b],S=u[_+1][b],P=u[_+1][b+1];(_!==0||o>0)&&d.push(v,w,P),(_!==n-1||l<Math.PI)&&d.push(w,S,P)}this.setIndex(d),this.setAttribute("position",new tt(g,3)),this.setAttribute("normal",new tt(p,3)),this.setAttribute("uv",new tt(m,2))}static fromJSON(e){return new Cr(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Ya extends ui{constructor(e){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new Re(16777215),this.specular=new Re(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Re(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=nc,this.normalScale=new ye(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Vo,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Kw extends ui{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Re(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Re(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=nc,this.normalScale=new ye(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Vo,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}function Jn(i,e,t){return Yd(i)?new i.constructor(i.subarray(e,t!==void 0?t:i.length)):i.slice(e,t)}function ao(i,e,t){return!i||!t&&i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}function Yd(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function Zw(i){function e(r,s){return i[r]-i[s]}const t=i.length,n=new Array(t);for(let r=0;r!==t;++r)n[r]=r;return n.sort(e),n}function Hh(i,e,t){const n=i.length,r=new i.constructor(n);for(let s=0,o=0;o!==n;++s){const a=t[s]*e;for(let l=0;l!==e;++l)r[o++]=i[a+l]}return r}function $d(i,e,t,n){let r=1,s=i[0];for(;s!==void 0&&s[n]===void 0;)s=i[r++];if(s===void 0)return;let o=s[n];if(o!==void 0)if(Array.isArray(o))do o=s[n],o!==void 0&&(e.push(s.time),t.push.apply(t,o)),s=i[r++];while(s!==void 0);else if(o.toArray!==void 0)do o=s[n],o!==void 0&&(e.push(s.time),o.toArray(t,t.length)),s=i[r++];while(s!==void 0);else do o=s[n],o!==void 0&&(e.push(s.time),t.push(o)),s=i[r++];while(s!==void 0)}class Yo{constructor(e,t,n,r){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=r!==void 0?r:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let n=this._cachedIndex,r=t[n],s=t[n-1];n:{e:{let o;t:{i:if(!(e<r)){for(let a=n+2;;){if(r===void 0){if(e<s)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(s=r,r=t[++n],e<r)break e}o=t.length;break t}if(!(e>=s)){const a=t[1];e<a&&(n=2,s=a);for(let l=n-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(r=s,s=t[--n-1],e>=s)break e}o=n,n=0;break t}break n}for(;n<o;){const a=n+o>>>1;e<t[a]?o=a:n=a+1}if(r=t[n],s=t[n-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(r===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,s,r)}return this.interpolate_(n,s,e,r)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,r=this.valueSize,s=e*r;for(let o=0;o!==r;++o)t[o]=n[s+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class Jw extends Yo{constructor(e,t,n,r){super(e,t,n,r),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Hu,endingEnd:Hu}}intervalChanged_(e,t,n){const r=this.parameterPositions;let s=e-2,o=e+1,a=r[s],l=r[o];if(a===void 0)switch(this.getSettings_().endingStart){case Wu:s=e,a=2*t-n;break;case Xu:s=r.length-2,a=t+r[s]-r[s+1];break;default:s=e,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case Wu:o=e,l=2*n-t;break;case Xu:o=1,l=n+r[1]-r[0];break;default:o=e-1,l=t}const c=(n-t)*.5,u=this.valueSize;this._weightPrev=c/(t-a),this._weightNext=c/(l-n),this._offsetPrev=s*u,this._offsetNext=o*u}interpolate_(e,t,n,r){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=this._offsetPrev,h=this._offsetNext,f=this._weightPrev,d=this._weightNext,g=(n-t)/(r-t),p=g*g,m=p*g,_=-f*m+2*f*p-f*g,b=(1+f)*m+(-1.5-2*f)*p+(-.5+f)*g+1,v=(-1-d)*m+(1.5+d)*p+.5*g,w=d*m-d*p;for(let S=0;S!==a;++S)s[S]=_*o[u+S]+b*o[c+S]+v*o[l+S]+w*o[h+S];return s}}class Qw extends Yo{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=(n-t)/(r-t),h=1-u;for(let f=0;f!==a;++f)s[f]=o[c+f]*h+o[l+f]*u;return s}}class eS extends Yo{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e){return this.copySampleValue_(e-1)}}class Pn{constructor(e,t,n,r){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=ao(t,this.TimeBufferType),this.values=ao(n,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:ao(e.times,Array),values:ao(e.values,Array)};const r=e.getInterpolation();r!==e.DefaultInterpolation&&(n.interpolation=r)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new eS(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Qw(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Jw(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case To:t=this.InterpolantFactoryMethodDiscrete;break;case Eo:t=this.InterpolantFactoryMethodLinear;break;case _a:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return To;case this.InterpolantFactoryMethodLinear:return Eo;case this.InterpolantFactoryMethodSmooth:return _a}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]*=e}return this}trim(e,t){const n=this.times,r=n.length;let s=0,o=r-1;for(;s!==r&&n[s]<e;)++s;for(;o!==-1&&n[o]>t;)--o;if(++o,s!==0||o!==r){s>=o&&(o=Math.max(o,1),s=o-1);const a=this.getValueSize();this.times=Jn(n,s,o),this.values=Jn(this.values,s*a,o*a)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);const n=this.times,r=this.values,s=n.length;s===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==s;a++){const l=n[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),e=!1;break}if(o!==null&&o>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,o),e=!1;break}o=l}if(r!==void 0&&Yd(r))for(let a=0,l=r.length;a!==l;++a){const c=r[a];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,c),e=!1;break}}return e}optimize(){const e=Jn(this.times),t=Jn(this.values),n=this.getValueSize(),r=this.getInterpolation()===_a,s=e.length-1;let o=1;for(let a=1;a<s;++a){let l=!1;const c=e[a],u=e[a+1];if(c!==u&&(a!==1||c!==e[0]))if(r)l=!0;else{const h=a*n,f=h-n,d=h+n;for(let g=0;g!==n;++g){const p=t[h+g];if(p!==t[f+g]||p!==t[d+g]){l=!0;break}}}if(l){if(a!==o){e[o]=e[a];const h=a*n,f=o*n;for(let d=0;d!==n;++d)t[f+d]=t[h+d]}++o}}if(s>0){e[o]=e[s];for(let a=s*n,l=o*n,c=0;c!==n;++c)t[l+c]=t[a+c];++o}return o!==e.length?(this.times=Jn(e,0,o),this.values=Jn(t,0,o*n)):(this.times=e,this.values=t),this}clone(){const e=Jn(this.times,0),t=Jn(this.values,0),n=this.constructor,r=new n(this.name,e,t);return r.createInterpolant=this.createInterpolant,r}}Pn.prototype.TimeBufferType=Float32Array;Pn.prototype.ValueBufferType=Float32Array;Pn.prototype.DefaultInterpolation=Eo;class Pr extends Pn{}Pr.prototype.ValueTypeName="bool";Pr.prototype.ValueBufferType=Array;Pr.prototype.DefaultInterpolation=To;Pr.prototype.InterpolantFactoryMethodLinear=void 0;Pr.prototype.InterpolantFactoryMethodSmooth=void 0;class Kd extends Pn{}Kd.prototype.ValueTypeName="color";class xs extends Pn{}xs.prototype.ValueTypeName="number";class tS extends Yo{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-t)/(r-t);let c=e*a;for(let u=c+a;c!==u;c+=4)sn.slerpFlat(s,0,o,c-a,o,c,l);return s}}class Lr extends Pn{InterpolantFactoryMethodLinear(e){return new tS(this.times,this.values,this.getValueSize(),e)}}Lr.prototype.ValueTypeName="quaternion";Lr.prototype.DefaultInterpolation=Eo;Lr.prototype.InterpolantFactoryMethodSmooth=void 0;class Rr extends Pn{}Rr.prototype.ValueTypeName="string";Rr.prototype.ValueBufferType=Array;Rr.prototype.DefaultInterpolation=To;Rr.prototype.InterpolantFactoryMethodLinear=void 0;Rr.prototype.InterpolantFactoryMethodSmooth=void 0;class ys extends Pn{}ys.prototype.ValueTypeName="vector";class nS{constructor(e,t=-1,n,r=K0){this.name=e,this.tracks=n,this.duration=t,this.blendMode=r,this.uuid=Xn(),this.duration<0&&this.resetDuration()}static parse(e){const t=[],n=e.tracks,r=1/(e.fps||1);for(let o=0,a=n.length;o!==a;++o)t.push(rS(n[o]).scale(r));const s=new this(e.name,e.duration,t,e.blendMode);return s.uuid=e.uuid,s}static toJSON(e){const t=[],n=e.tracks,r={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let s=0,o=n.length;s!==o;++s)t.push(Pn.toJSON(n[s]));return r}static CreateFromMorphTargetSequence(e,t,n,r){const s=t.length,o=[];for(let a=0;a<s;a++){let l=[],c=[];l.push((a+s-1)%s,a,(a+1)%s),c.push(0,1,0);const u=Zw(l);l=Hh(l,1,u),c=Hh(c,1,u),!r&&l[0]===0&&(l.push(s),c.push(c[0])),o.push(new xs(".morphTargetInfluences["+t[a].name+"]",l,c).scale(1/n))}return new this(e,-1,o)}static findByName(e,t){let n=e;if(!Array.isArray(e)){const r=e;n=r.geometry&&r.geometry.animations||r.animations}for(let r=0;r<n.length;r++)if(n[r].name===t)return n[r];return null}static CreateClipsFromMorphTargetSequences(e,t,n){const r={},s=/^([\w-]*?)([\d]+)$/;for(let a=0,l=e.length;a<l;a++){const c=e[a],u=c.name.match(s);if(u&&u.length>1){const h=u[1];let f=r[h];f||(r[h]=f=[]),f.push(c)}}const o=[];for(const a in r)o.push(this.CreateFromMorphTargetSequence(a,r[a],t,n));return o}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const n=function(h,f,d,g,p){if(d.length!==0){const m=[],_=[];$d(d,m,_,g),m.length!==0&&p.push(new h(f,m,_))}},r=[],s=e.name||"default",o=e.fps||30,a=e.blendMode;let l=e.length||-1;const c=e.hierarchy||[];for(let h=0;h<c.length;h++){const f=c[h].keys;if(!(!f||f.length===0))if(f[0].morphTargets){const d={};let g;for(g=0;g<f.length;g++)if(f[g].morphTargets)for(let p=0;p<f[g].morphTargets.length;p++)d[f[g].morphTargets[p]]=-1;for(const p in d){const m=[],_=[];for(let b=0;b!==f[g].morphTargets.length;++b){const v=f[g];m.push(v.time),_.push(v.morphTarget===p?1:0)}r.push(new xs(".morphTargetInfluence["+p+"]",m,_))}l=d.length*o}else{const d=".bones["+t[h].name+"]";n(ys,d+".position",f,"pos",r),n(Lr,d+".quaternion",f,"rot",r),n(ys,d+".scale",f,"scl",r)}}return r.length===0?null:new this(s,l,r,a)}resetDuration(){const e=this.tracks;let t=0;for(let n=0,r=e.length;n!==r;++n){const s=this.tracks[n];t=Math.max(t,s.times[s.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function iS(i){switch(i.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return xs;case"vector":case"vector2":case"vector3":case"vector4":return ys;case"color":return Kd;case"quaternion":return Lr;case"bool":case"boolean":return Pr;case"string":return Rr}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+i)}function rS(i){if(i.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=iS(i.type);if(i.times===void 0){const t=[],n=[];$d(i.keys,t,n,"value"),i.times=t,i.values=n}return e.parse!==void 0?e.parse(i):new e(i.name,i.times,i.values,i.interpolation)}const Co={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(this.files[i]=e)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};class sS{constructor(e,t,n){const r=this;let s=!1,o=0,a=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(u){a++,s===!1&&r.onStart!==void 0&&r.onStart(u,o,a),s=!0},this.itemEnd=function(u){o++,r.onProgress!==void 0&&r.onProgress(u,o,a),o===a&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(u){r.onError!==void 0&&r.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,h){return c.push(u,h),this},this.removeHandler=function(u){const h=c.indexOf(u);return h!==-1&&c.splice(h,2),this},this.getHandler=function(u){for(let h=0,f=c.length;h<f;h+=2){const d=c[h],g=c[h+1];if(d.global&&(d.lastIndex=0),d.test(u))return g}return null}}}const oS=new sS;class Es{constructor(e){this.manager=e!==void 0?e:oS,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(r,s){n.load(e,r,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}const Un={};class aS extends Error{constructor(e,t){super(e),this.response=t}}class Zd extends Es{constructor(e){super(e)}load(e,t,n,r){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=Co.get(e);if(s!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(s),this.manager.itemEnd(e)},0),s;if(Un[e]!==void 0){Un[e].push({onLoad:t,onProgress:n,onError:r});return}Un[e]=[],Un[e].push({onLoad:t,onProgress:n,onError:r});const o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),a=this.mimeType,l=this.responseType;fetch(o).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;const u=Un[e],h=c.body.getReader(),f=c.headers.get("Content-Length")||c.headers.get("X-File-Size"),d=f?parseInt(f):0,g=d!==0;let p=0;const m=new ReadableStream({start(_){b();function b(){h.read().then(({done:v,value:w})=>{if(v)_.close();else{p+=w.byteLength;const S=new ProgressEvent("progress",{lengthComputable:g,loaded:p,total:d});for(let P=0,I=u.length;P<I;P++){const x=u[P];x.onProgress&&x.onProgress(S)}_.enqueue(w),b()}})}}});return new Response(m)}else throw new aS(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(u=>new DOMParser().parseFromString(u,a));case"json":return c.json();default:if(a===void 0)return c.text();{const h=/charset="?([^;"\s]*)"?/i.exec(a),f=h&&h[1]?h[1].toLowerCase():void 0,d=new TextDecoder(f);return c.arrayBuffer().then(g=>d.decode(g))}}}).then(c=>{Co.add(e,c);const u=Un[e];delete Un[e];for(let h=0,f=u.length;h<f;h++){const d=u[h];d.onLoad&&d.onLoad(c)}}).catch(c=>{const u=Un[e];if(u===void 0)throw this.manager.itemError(e),c;delete Un[e];for(let h=0,f=u.length;h<f;h++){const d=u[h];d.onError&&d.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class lS extends Es{constructor(e){super(e)}load(e,t,n,r){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,o=Co.get(e);if(o!==void 0)return s.manager.itemStart(e),setTimeout(function(){t&&t(o),s.manager.itemEnd(e)},0),o;const a=ms("img");function l(){u(),Co.add(e,this),t&&t(this),s.manager.itemEnd(e)}function c(h){u(),r&&r(h),s.manager.itemError(e),s.manager.itemEnd(e)}function u(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),s.manager.itemStart(e),a.src=e,a}}class gc extends Es{constructor(e){super(e)}load(e,t,n,r){const s=new wt,o=new lS(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){s.image=a,s.needsUpdate=!0,t!==void 0&&t(s)},n,r),s}}class $o extends st{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Re(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}}const $a=new De,Wh=new D,Xh=new D;class _c{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ye(512,512),this.map=null,this.mapPass=null,this.matrix=new De,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new oc,this._frameExtents=new ye(1,1),this._viewportCount=1,this._viewports=[new Ke(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;Wh.setFromMatrixPosition(e.matrixWorld),t.position.copy(Wh),Xh.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Xh),t.updateMatrixWorld(),$a.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix($a),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply($a)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class cS extends _c{constructor(){super(new Ot(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){const t=this.camera,n=ps*2*e.angle*this.focus,r=this.mapSize.width/this.mapSize.height,s=e.distance||t.far;(n!==t.fov||r!==t.aspect||s!==t.far)&&(t.fov=n,t.aspect=r,t.far=s,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class uS extends $o{constructor(e,t,n=0,r=Math.PI/3,s=0,o=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(st.DEFAULT_UP),this.updateMatrix(),this.target=new st,this.distance=n,this.angle=r,this.penumbra=s,this.decay=o,this.map=null,this.shadow=new cS}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const jh=new De,Vr=new D,Ka=new D;class hS extends _c{constructor(){super(new Ot(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new ye(4,2),this._viewportCount=6,this._viewports=[new Ke(2,1,1,1),new Ke(0,1,1,1),new Ke(3,1,1,1),new Ke(1,1,1,1),new Ke(3,0,1,1),new Ke(1,0,1,1)],this._cubeDirections=[new D(1,0,0),new D(-1,0,0),new D(0,0,1),new D(0,0,-1),new D(0,1,0),new D(0,-1,0)],this._cubeUps=[new D(0,1,0),new D(0,1,0),new D(0,1,0),new D(0,1,0),new D(0,0,1),new D(0,0,-1)]}updateMatrices(e,t=0){const n=this.camera,r=this.matrix,s=e.distance||n.far;s!==n.far&&(n.far=s,n.updateProjectionMatrix()),Vr.setFromMatrixPosition(e.matrixWorld),n.position.copy(Vr),Ka.copy(n.position),Ka.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(Ka),n.updateMatrixWorld(),r.makeTranslation(-Vr.x,-Vr.y,-Vr.z),jh.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(jh)}}class qh extends $o{constructor(e,t,n=0,r=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=r,this.shadow=new hS}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class fS extends _c{constructor(){super(new ac(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Jd extends $o{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(st.DEFAULT_UP),this.updateMatrix(),this.target=new st,this.shadow=new fS}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class Qd extends $o{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class dS{static decodeText(e){if(typeof TextDecoder<"u")return new TextDecoder().decode(e);let t="";for(let n=0,r=e.length;n<r;n++)t+=String.fromCharCode(e[n]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}class pS{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Yh(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=Yh();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function Yh(){return(typeof performance>"u"?Date:performance).now()}const vc="\\[\\]\\.:\\/",mS=new RegExp("["+vc+"]","g"),xc="[^"+vc+"]",gS="[^"+vc.replace("\\.","")+"]",_S=/((?:WC+[\/:])*)/.source.replace("WC",xc),vS=/(WCOD+)?/.source.replace("WCOD",gS),xS=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",xc),yS=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",xc),MS=new RegExp("^"+_S+vS+xS+yS+"$"),bS=["material","materials","bones","map"];class wS{constructor(e,t,n){const r=n||Ye.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,r)}getValue(e,t){this.bind();const n=this._targetGroup.nCachedObjects_,r=this._bindings[n];r!==void 0&&r.getValue(e,t)}setValue(e,t){const n=this._bindings;for(let r=this._targetGroup.nCachedObjects_,s=n.length;r!==s;++r)n[r].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}}class Ye{constructor(e,t,n){this.path=t,this.parsedPath=n||Ye.parseTrackName(t),this.node=Ye.findNode(e,this.parsedPath.nodeName)||e,this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new Ye.Composite(e,t,n):new Ye(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(mS,"")}static parseTrackName(e){const t=MS.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},r=n.nodeName&&n.nodeName.lastIndexOf(".");if(r!==void 0&&r!==-1){const s=n.nodeName.substring(r+1);bS.indexOf(s)!==-1&&(n.nodeName=n.nodeName.substring(0,r),n.objectName=s)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){const n=function(s){for(let o=0;o<s.length;o++){const a=s[o];if(a.name===t||a.uuid===t)return a;const l=n(a.children);if(l)return l}return null},r=n(e.children);if(r)return r}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)e[t++]=n[r]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)n[r]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)n[r]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)n[r]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,n=t.objectName,r=t.propertyName;let s=t.propertyIndex;if(e||(e=Ye.findNode(this.rootNode,t.nodeName)||this.rootNode,this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.error("THREE.PropertyBinding: Trying to update node for track: "+this.path+" but it wasn't found.");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let u=0;u<e.length;u++)if(e[u].name===c){c=u;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}const o=e[r];if(o===void 0){const c=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+r+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(s!==void 0){if(r==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[s]!==void 0&&(s=e.morphTargetDictionary[s])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=s}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=r;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}Ye.Composite=wS;Ye.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Ye.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Ye.prototype.GetterByBindingType=[Ye.prototype._getValue_direct,Ye.prototype._getValue_array,Ye.prototype._getValue_arrayElement,Ye.prototype._getValue_toArray];Ye.prototype.SetterByBindingTypeAndVersioning=[[Ye.prototype._setValue_direct,Ye.prototype._setValue_direct_setNeedsUpdate,Ye.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Ye.prototype._setValue_array,Ye.prototype._setValue_array_setNeedsUpdate,Ye.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Ye.prototype._setValue_arrayElement,Ye.prototype._setValue_arrayElement_setNeedsUpdate,Ye.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Ye.prototype._setValue_fromArray,Ye.prototype._setValue_fromArray_setNeedsUpdate,Ye.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];class SS{constructor(e,t,n=0,r=1/0){this.ray=new Ho(e,t),this.near=n,this.far=r,this.camera=null,this.layers=new rc,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}intersectObject(e,t=!0,n=[]){return Ll(e,this,n,t),n.sort($h),n}intersectObjects(e,t=!0,n=[]){for(let r=0,s=e.length;r<s;r++)Ll(e[r],this,n,t);return n.sort($h),n}}function $h(i,e){return i.distance-e.distance}function Ll(i,e,t,n){if(i.layers.test(e.layers)&&i.raycast(e,t),n===!0){const r=i.children;for(let s=0,o=r.length;s<o;s++)Ll(r[s],e,t,!0)}}class Kh{constructor(e=1,t=0,n=0){return this.radius=e,this.phi=t,this.theta=n,this}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(bt(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class TS{constructor(){this.type="ShapePath",this.color=new Re,this.subPaths=[],this.currentPath=null}moveTo(e,t){return this.currentPath=new Al,this.subPaths.push(this.currentPath),this.currentPath.moveTo(e,t),this}lineTo(e,t){return this.currentPath.lineTo(e,t),this}quadraticCurveTo(e,t,n,r){return this.currentPath.quadraticCurveTo(e,t,n,r),this}bezierCurveTo(e,t,n,r,s,o){return this.currentPath.bezierCurveTo(e,t,n,r,s,o),this}splineThru(e){return this.currentPath.splineThru(e),this}toShapes(e){function t(_){const b=[];for(let v=0,w=_.length;v<w;v++){const S=_[v],P=new _o;P.curves=S.curves,b.push(P)}return b}function n(_,b){const v=b.length;let w=!1;for(let S=v-1,P=0;P<v;S=P++){let I=b[S],x=b[P],A=x.x-I.x,R=x.y-I.y;if(Math.abs(R)>Number.EPSILON){if(R<0&&(I=b[P],A=-A,x=b[S],R=-R),_.y<I.y||_.y>x.y)continue;if(_.y===I.y){if(_.x===I.x)return!0}else{const j=R*(_.x-I.x)-A*(_.y-I.y);if(j===0)return!0;if(j<0)continue;w=!w}}else{if(_.y!==I.y)continue;if(x.x<=_.x&&_.x<=I.x||I.x<=_.x&&_.x<=x.x)return!0}}return w}const r=mr.isClockWise,s=this.subPaths;if(s.length===0)return[];let o,a,l;const c=[];if(s.length===1)return a=s[0],l=new _o,l.curves=a.curves,c.push(l),c;let u=!r(s[0].getPoints());u=e?!u:u;const h=[],f=[];let d=[],g=0,p;f[g]=void 0,d[g]=[];for(let _=0,b=s.length;_<b;_++)a=s[_],p=a.getPoints(),o=r(p),o=e?!o:o,o?(!u&&f[g]&&g++,f[g]={s:new _o,p},f[g].s.curves=a.curves,u&&g++,d[g]=[]):d[g].push({h:a,p:p[0]});if(!f[0])return t(s);if(f.length>1){let _=!1,b=0;for(let v=0,w=f.length;v<w;v++)h[v]=[];for(let v=0,w=f.length;v<w;v++){const S=d[v];for(let P=0;P<S.length;P++){const I=S[P];let x=!0;for(let A=0;A<f.length;A++)n(I.p,f[A].p)&&(v!==A&&b++,x?(x=!1,h[A].push(I)):_=!0);x&&h[v].push(I)}}b>0&&_===!1&&(d=h)}let m;for(let _=0,b=f.length;_<b;_++){l=f[_].s,c.push(l),m=d[_];for(let v=0,w=m.length;v<w;v++)l.holes.push(m[v].h)}return c}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:tc}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=tc);/*!
fflate - fast JavaScript compression/decompression
<https://101arrowz.github.io/fflate>
Licensed under MIT. https://github.com/101arrowz/fflate/blob/master/LICENSE
version 0.6.9
*/var Zh=function(i){return URL.createObjectURL(new Blob([i],{type:"text/javascript"}))};try{URL.revokeObjectURL(Zh(""))}catch{Zh=function(e){return"data:application/javascript;charset=UTF-8,"+encodeURI(e)}}var tn=Uint8Array,ii=Uint16Array,Rl=Uint32Array,ep=new tn([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0,0]),tp=new tn([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,0,0]),ES=new tn([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),np=function(i,e){for(var t=new ii(31),n=0;n<31;++n)t[n]=e+=1<<i[n-1];for(var r=new Rl(t[30]),n=1;n<30;++n)for(var s=t[n];s<t[n+1];++s)r[s]=s-t[n]<<5|n;return[t,r]},ip=np(ep,2),rp=ip[0],AS=ip[1];rp[28]=258,AS[258]=28;var CS=np(tp,0),PS=CS[0],Dl=new ii(32768);for(var nt=0;nt<32768;++nt){var Qn=(nt&43690)>>>1|(nt&21845)<<1;Qn=(Qn&52428)>>>2|(Qn&13107)<<2,Qn=(Qn&61680)>>>4|(Qn&3855)<<4,Dl[nt]=((Qn&65280)>>>8|(Qn&255)<<8)>>>1}var ns=function(i,e,t){for(var n=i.length,r=0,s=new ii(e);r<n;++r)++s[i[r]-1];var o=new ii(e);for(r=0;r<e;++r)o[r]=o[r-1]+s[r-1]<<1;var a;if(t){a=new ii(1<<e);var l=15-e;for(r=0;r<n;++r)if(i[r])for(var c=r<<4|i[r],u=e-i[r],h=o[i[r]-1]++<<u,f=h|(1<<u)-1;h<=f;++h)a[Dl[h]>>>l]=c}else for(a=new ii(n),r=0;r<n;++r)i[r]&&(a[r]=Dl[o[i[r]-1]++]>>>15-i[r]);return a},As=new tn(288);for(var nt=0;nt<144;++nt)As[nt]=8;for(var nt=144;nt<256;++nt)As[nt]=9;for(var nt=256;nt<280;++nt)As[nt]=7;for(var nt=280;nt<288;++nt)As[nt]=8;var sp=new tn(32);for(var nt=0;nt<32;++nt)sp[nt]=5;var LS=ns(As,9,1),RS=ns(sp,5,1),Za=function(i){for(var e=i[0],t=1;t<i.length;++t)i[t]>e&&(e=i[t]);return e},hn=function(i,e,t){var n=e/8|0;return(i[n]|i[n+1]<<8)>>(e&7)&t},Ja=function(i,e){var t=e/8|0;return(i[t]|i[t+1]<<8|i[t+2]<<16)>>(e&7)},DS=function(i){return(i/8|0)+(i&7&&1)},IS=function(i,e,t){(e==null||e<0)&&(e=0),(t==null||t>i.length)&&(t=i.length);var n=new(i instanceof ii?ii:i instanceof Rl?Rl:tn)(t-e);return n.set(i.subarray(e,t)),n},FS=function(i,e,t){var n=i.length;if(!n||t&&!t.l&&n<5)return e||new tn(0);var r=!e||t,s=!t||t.i;t||(t={}),e||(e=new tn(n*3));var o=function(O){var ee=e.length;if(O>ee){var ce=new tn(Math.max(ee*2,O));ce.set(e),e=ce}},a=t.f||0,l=t.p||0,c=t.b||0,u=t.l,h=t.d,f=t.m,d=t.n,g=n*8;do{if(!u){t.f=a=hn(i,l,1);var p=hn(i,l+1,3);if(l+=3,p)if(p==1)u=LS,h=RS,f=9,d=5;else if(p==2){var v=hn(i,l,31)+257,w=hn(i,l+10,15)+4,S=v+hn(i,l+5,31)+1;l+=14;for(var P=new tn(S),I=new tn(19),x=0;x<w;++x)I[ES[x]]=hn(i,l+x*3,7);l+=w*3;for(var A=Za(I),R=(1<<A)-1,j=ns(I,A,1),x=0;x<S;){var Q=j[hn(i,l,R)];l+=Q&15;var m=Q>>>4;if(m<16)P[x++]=m;else{var B=0,N=0;for(m==16?(N=3+hn(i,l,3),l+=2,B=P[x-1]):m==17?(N=3+hn(i,l,7),l+=3):m==18&&(N=11+hn(i,l,127),l+=7);N--;)P[x++]=B}}var J=P.subarray(0,v),K=P.subarray(v);f=Za(J),d=Za(K),u=ns(J,f,1),h=ns(K,d,1)}else throw"invalid block type";else{var m=DS(l)+4,_=i[m-4]|i[m-3]<<8,b=m+_;if(b>n){if(s)throw"unexpected EOF";break}r&&o(c+_),e.set(i.subarray(m,b),c),t.b=c+=_,t.p=l=b*8;continue}if(l>g){if(s)throw"unexpected EOF";break}}r&&o(c+131072);for(var ie=(1<<f)-1,Y=(1<<d)-1,fe=l;;fe=l){var B=u[Ja(i,l)&ie],de=B>>>4;if(l+=B&15,l>g){if(s)throw"unexpected EOF";break}if(!B)throw"invalid length/literal";if(de<256)e[c++]=de;else if(de==256){fe=l,u=null;break}else{var xe=de-254;if(de>264){var x=de-257,W=ep[x];xe=hn(i,l,(1<<W)-1)+rp[x],l+=W}var oe=h[Ja(i,l)&Y],ve=oe>>>4;if(!oe)throw"invalid distance";l+=oe&15;var K=PS[ve];if(ve>3){var W=tp[ve];K+=Ja(i,l)&(1<<W)-1,l+=W}if(l>g){if(s)throw"unexpected EOF";break}r&&o(c+131072);for(var z=c+xe;c<z;c+=4)e[c]=e[c-K],e[c+1]=e[c+1-K],e[c+2]=e[c+2-K],e[c+3]=e[c+3-K];c=z}}t.l=u,t.p=fe,t.b=c,u&&(a=1,t.m=f,t.d=h,t.n=d)}while(!a);return c==e.length?e:IS(e,0,c)},OS=new tn(0),NS=function(i){if((i[0]&15)!=8||i[0]>>>4>7||(i[0]<<8|i[1])%31)throw"invalid zlib data";if(i[1]&32)throw"invalid zlib data: preset dictionaries not supported"};function zS(i,e){return FS((NS(i),i.subarray(2,-4)),e)}var US=typeof TextDecoder<"u"&&new TextDecoder,BS=0;try{US.decode(OS,{stream:!0}),BS=1}catch{}function op(i,e,t){const n=t.length-i-1;if(e>=t[n])return n-1;if(e<=t[i])return i;let r=i,s=n,o=Math.floor((r+s)/2);for(;e<t[o]||e>=t[o+1];)e<t[o]?s=o:r=o,o=Math.floor((r+s)/2);return o}function kS(i,e,t,n){const r=[],s=[],o=[];r[0]=1;for(let a=1;a<=t;++a){s[a]=e-n[i+1-a],o[a]=n[i+a]-e;let l=0;for(let c=0;c<a;++c){const u=o[c+1],h=s[a-c],f=r[c]/(u+h);r[c]=l+u*f,l=h*f}r[a]=l}return r}function VS(i,e,t,n){const r=op(i,n,e),s=kS(r,n,i,e),o=new Ke(0,0,0,0);for(let a=0;a<=i;++a){const l=t[r-i+a],c=s[a],u=l.w*c;o.x+=l.x*u,o.y+=l.y*u,o.z+=l.z*u,o.w+=l.w*c}return o}function GS(i,e,t,n,r){const s=[];for(let h=0;h<=t;++h)s[h]=0;const o=[];for(let h=0;h<=n;++h)o[h]=s.slice(0);const a=[];for(let h=0;h<=t;++h)a[h]=s.slice(0);a[0][0]=1;const l=s.slice(0),c=s.slice(0);for(let h=1;h<=t;++h){l[h]=e-r[i+1-h],c[h]=r[i+h]-e;let f=0;for(let d=0;d<h;++d){const g=c[d+1],p=l[h-d];a[h][d]=g+p;const m=a[d][h-1]/a[h][d];a[d][h]=f+g*m,f=p*m}a[h][h]=f}for(let h=0;h<=t;++h)o[0][h]=a[h][t];for(let h=0;h<=t;++h){let f=0,d=1;const g=[];for(let p=0;p<=t;++p)g[p]=s.slice(0);g[0][0]=1;for(let p=1;p<=n;++p){let m=0;const _=h-p,b=t-p;h>=p&&(g[d][0]=g[f][0]/a[b+1][_],m=g[d][0]*a[_][b]);const v=_>=-1?1:-_,w=h-1<=b?p-1:t-h;for(let P=v;P<=w;++P)g[d][P]=(g[f][P]-g[f][P-1])/a[b+1][_+P],m+=g[d][P]*a[_+P][b];h<=b&&(g[d][p]=-g[f][p-1]/a[b+1][h],m+=g[d][p]*a[h][b]),o[p][h]=m;const S=f;f=d,d=S}}let u=t;for(let h=1;h<=n;++h){for(let f=0;f<=t;++f)o[h][f]*=u;u*=t-h}return o}function HS(i,e,t,n,r){const s=r<i?r:i,o=[],a=op(i,n,e),l=GS(a,n,i,s,e),c=[];for(let u=0;u<t.length;++u){const h=t[u].clone(),f=h.w;h.x*=f,h.y*=f,h.z*=f,c[u]=h}for(let u=0;u<=s;++u){const h=c[a-i].clone().multiplyScalar(l[u][0]);for(let f=1;f<=i;++f)h.add(c[a-i+f].clone().multiplyScalar(l[u][f]));o[u]=h}for(let u=s+1;u<=r+1;++u)o[u]=new Ke(0,0,0);return o}function WS(i,e){let t=1;for(let r=2;r<=i;++r)t*=r;let n=1;for(let r=2;r<=e;++r)n*=r;for(let r=2;r<=i-e;++r)n*=r;return t/n}function XS(i){const e=i.length,t=[],n=[];for(let s=0;s<e;++s){const o=i[s];t[s]=new D(o.x,o.y,o.z),n[s]=o.w}const r=[];for(let s=0;s<e;++s){const o=t[s].clone();for(let a=1;a<=s;++a)o.sub(r[s-a].clone().multiplyScalar(WS(s,a)*n[a]));r[s]=o.divideScalar(n[0])}return r}function jS(i,e,t,n,r){const s=HS(i,e,t,n,r);return XS(s)}class qS extends _n{constructor(e,t,n,r,s){super(),this.degree=e,this.knots=t,this.controlPoints=[],this.startKnot=r||0,this.endKnot=s||this.knots.length-1;for(let o=0;o<n.length;++o){const a=n[o];this.controlPoints[o]=new Ke(a.x,a.y,a.z,a.w)}}getPoint(e,t=new D){const n=t,r=this.knots[this.startKnot]+e*(this.knots[this.endKnot]-this.knots[this.startKnot]),s=VS(this.degree,this.knots,this.controlPoints,r);return s.w!==1&&s.divideScalar(s.w),n.set(s.x,s.y,s.z)}getTangent(e,t=new D){const n=t,r=this.knots[0]+e*(this.knots[this.knots.length-1]-this.knots[0]),s=jS(this.degree,this.knots,this.controlPoints,r,1);return n.copy(s[1]).normalize(),n}}let Ge,at,zt;class YS extends Es{constructor(e){super(e)}load(e,t,n,r){const s=this,o=s.path===""?dS.extractUrlBase(e):s.path,a=new Zd(this.manager);a.setPath(s.path),a.setResponseType("arraybuffer"),a.setRequestHeader(s.requestHeader),a.setWithCredentials(s.withCredentials),a.load(e,function(l){try{t(s.parse(l,o))}catch(c){r?r(c):console.error(c),s.manager.itemError(e)}},n,r)}parse(e,t){if(e1(e))Ge=new QS().parse(e);else{const r=up(e);if(!t1(r))throw new Error("THREE.FBXLoader: Unknown format.");if(Qh(r)<7e3)throw new Error("THREE.FBXLoader: FBX version not supported, FileVersion: "+Qh(r));Ge=new JS().parse(r)}const n=new gc(this.manager).setPath(this.resourcePath||t).setCrossOrigin(this.crossOrigin);return new $S(n,this.manager).parse(Ge)}}class $S{constructor(e,t){this.textureLoader=e,this.manager=t}parse(){at=this.parseConnections();const e=this.parseImages(),t=this.parseTextures(e),n=this.parseMaterials(t),r=this.parseDeformers(),s=new KS().parse(r);return this.parseScene(r,s,n),zt}parseConnections(){const e=new Map;return"Connections"in Ge&&Ge.Connections.connections.forEach(function(n){const r=n[0],s=n[1],o=n[2];e.has(r)||e.set(r,{parents:[],children:[]});const a={ID:s,relationship:o};e.get(r).parents.push(a),e.has(s)||e.set(s,{parents:[],children:[]});const l={ID:r,relationship:o};e.get(s).children.push(l)}),e}parseImages(){const e={},t={};if("Video"in Ge.Objects){const n=Ge.Objects.Video;for(const r in n){const s=n[r],o=parseInt(r);if(e[o]=s.RelativeFilename||s.Filename,"Content"in s){const a=s.Content instanceof ArrayBuffer&&s.Content.byteLength>0,l=typeof s.Content=="string"&&s.Content!=="";if(a||l){const c=this.parseImage(n[r]);t[s.RelativeFilename||s.Filename]=c}}}}for(const n in e){const r=e[n];t[r]!==void 0?e[n]=t[r]:e[n]=e[n].split("\\").pop()}return e}parseImage(e){const t=e.Content,n=e.RelativeFilename||e.Filename,r=n.slice(n.lastIndexOf(".")+1).toLowerCase();let s;switch(r){case"bmp":s="image/bmp";break;case"jpg":case"jpeg":s="image/jpeg";break;case"png":s="image/png";break;case"tif":s="image/tiff";break;case"tga":this.manager.getHandler(".tga")===null&&console.warn("FBXLoader: TGA loader not found, skipping ",n),s="image/tga";break;default:console.warn('FBXLoader: Image type "'+r+'" is not supported.');return}if(typeof t=="string")return"data:"+s+";base64,"+t;{const o=new Uint8Array(t);return window.URL.createObjectURL(new Blob([o],{type:s}))}}parseTextures(e){const t=new Map;if("Texture"in Ge.Objects){const n=Ge.Objects.Texture;for(const r in n){const s=this.parseTexture(n[r],e);t.set(parseInt(r),s)}}return t}parseTexture(e,t){const n=this.loadTexture(e,t);n.ID=e.id,n.name=e.attrName;const r=e.WrapModeU,s=e.WrapModeV,o=r!==void 0?r.value:0,a=s!==void 0?s.value:0;if(n.wrapS=o===0?us:jt,n.wrapT=a===0?us:jt,"Scaling"in e){const l=e.Scaling.value;n.repeat.x=l[0],n.repeat.y=l[1]}if("Translation"in e){const l=e.Translation.value;n.offset.x=l[0],n.offset.y=l[1]}return n}loadTexture(e,t){let n;const r=this.textureLoader.path,s=at.get(e.id).children;s!==void 0&&s.length>0&&t[s[0].ID]!==void 0&&(n=t[s[0].ID],(n.indexOf("blob:")===0||n.indexOf("data:")===0)&&this.textureLoader.setPath(void 0));let o;const a=e.FileName.slice(-3).toLowerCase();if(a==="tga"){const l=this.manager.getHandler(".tga");l===null?(console.warn("FBXLoader: TGA loader not found, creating placeholder texture for",e.RelativeFilename),o=new wt):(l.setPath(this.textureLoader.path),o=l.load(n))}else a==="psd"?(console.warn("FBXLoader: PSD textures are not supported, creating placeholder texture for",e.RelativeFilename),o=new wt):o=this.textureLoader.load(n);return this.textureLoader.setPath(r),o}parseMaterials(e){const t=new Map;if("Material"in Ge.Objects){const n=Ge.Objects.Material;for(const r in n){const s=this.parseMaterial(n[r],e);s!==null&&t.set(parseInt(r),s)}}return t}parseMaterial(e,t){const n=e.id,r=e.attrName;let s=e.ShadingModel;if(typeof s=="object"&&(s=s.value),!at.has(n))return null;const o=this.parseParameters(e,t,n);let a;switch(s.toLowerCase()){case"phong":a=new Ya;break;case"lambert":a=new Kw;break;default:console.warn('THREE.FBXLoader: unknown material type "%s". Defaulting to MeshPhongMaterial.',s),a=new Ya;break}return a.setValues(o),a.name=r,a}parseParameters(e,t,n){const r={};e.BumpFactor&&(r.bumpScale=e.BumpFactor.value),e.Diffuse?r.color=new Re().fromArray(e.Diffuse.value):e.DiffuseColor&&(e.DiffuseColor.type==="Color"||e.DiffuseColor.type==="ColorRGB")&&(r.color=new Re().fromArray(e.DiffuseColor.value)),e.DisplacementFactor&&(r.displacementScale=e.DisplacementFactor.value),e.Emissive?r.emissive=new Re().fromArray(e.Emissive.value):e.EmissiveColor&&(e.EmissiveColor.type==="Color"||e.EmissiveColor.type==="ColorRGB")&&(r.emissive=new Re().fromArray(e.EmissiveColor.value)),e.EmissiveFactor&&(r.emissiveIntensity=parseFloat(e.EmissiveFactor.value)),e.Opacity&&(r.opacity=parseFloat(e.Opacity.value)),r.opacity<1&&(r.transparent=!0),e.ReflectionFactor&&(r.reflectivity=e.ReflectionFactor.value),e.Shininess&&(r.shininess=e.Shininess.value),e.Specular?r.specular=new Re().fromArray(e.Specular.value):e.SpecularColor&&e.SpecularColor.type==="Color"&&(r.specular=new Re().fromArray(e.SpecularColor.value));const s=this;return at.get(n).children.forEach(function(o){const a=o.relationship;switch(a){case"Bump":r.bumpMap=s.getTexture(t,o.ID);break;case"Maya|TEX_ao_map":r.aoMap=s.getTexture(t,o.ID);break;case"DiffuseColor":case"Maya|TEX_color_map":r.map=s.getTexture(t,o.ID),r.map!==void 0&&(r.map.encoding=Je);break;case"DisplacementColor":r.displacementMap=s.getTexture(t,o.ID);break;case"EmissiveColor":r.emissiveMap=s.getTexture(t,o.ID),r.emissiveMap!==void 0&&(r.emissiveMap.encoding=Je);break;case"NormalMap":case"Maya|TEX_normal_map":r.normalMap=s.getTexture(t,o.ID);break;case"ReflectionColor":r.envMap=s.getTexture(t,o.ID),r.envMap!==void 0&&(r.envMap.mapping=So,r.envMap.encoding=Je);break;case"SpecularColor":r.specularMap=s.getTexture(t,o.ID),r.specularMap!==void 0&&(r.specularMap.encoding=Je);break;case"TransparentColor":case"TransparencyFactor":r.alphaMap=s.getTexture(t,o.ID),r.transparent=!0;break;case"AmbientColor":case"ShininessExponent":case"SpecularFactor":case"VectorDisplacementColor":default:console.warn("THREE.FBXLoader: %s map is not supported in three.js, skipping texture.",a);break}}),r}getTexture(e,t){return"LayeredTexture"in Ge.Objects&&t in Ge.Objects.LayeredTexture&&(console.warn("THREE.FBXLoader: layered textures are not supported in three.js. Discarding all but first layer."),t=at.get(t).children[0].ID),e.get(t)}parseDeformers(){const e={},t={};if("Deformer"in Ge.Objects){const n=Ge.Objects.Deformer;for(const r in n){const s=n[r],o=at.get(parseInt(r));if(s.attrType==="Skin"){const a=this.parseSkeleton(o,n);a.ID=r,o.parents.length>1&&console.warn("THREE.FBXLoader: skeleton attached to more than one geometry is not supported."),a.geometryID=o.parents[0].ID,e[r]=a}else if(s.attrType==="BlendShape"){const a={id:r};a.rawTargets=this.parseMorphTargets(o,n),a.id=r,o.parents.length>1&&console.warn("THREE.FBXLoader: morph target attached to more than one geometry is not supported."),t[r]=a}}}return{skeletons:e,morphTargets:t}}parseSkeleton(e,t){const n=[];return e.children.forEach(function(r){const s=t[r.ID];if(s.attrType!=="Cluster")return;const o={ID:r.ID,indices:[],weights:[],transformLink:new De().fromArray(s.TransformLink.a)};"Indexes"in s&&(o.indices=s.Indexes.a,o.weights=s.Weights.a),n.push(o)}),{rawBones:n,bones:[]}}parseMorphTargets(e,t){const n=[];for(let r=0;r<e.children.length;r++){const s=e.children[r],o=t[s.ID],a={name:o.attrName,initialWeight:o.DeformPercent,id:o.id,fullWeights:o.FullWeights.a};if(o.attrType!=="BlendShapeChannel")return;a.geoID=at.get(parseInt(s.ID)).children.filter(function(l){return l.relationship===void 0})[0].ID,n.push(a)}return n}parseScene(e,t,n){zt=new or;const r=this.parseModels(e.skeletons,t,n),s=Ge.Objects.Model,o=this;r.forEach(function(l){const c=s[l.ID];o.setLookAtProperties(l,c),at.get(l.ID).parents.forEach(function(h){const f=r.get(h.ID);f!==void 0&&f.add(l)}),l.parent===null&&zt.add(l)}),this.bindSkeleton(e.skeletons,t,r),this.createAmbientLight(),zt.traverse(function(l){if(l.userData.transformData){l.parent&&(l.userData.transformData.parentMatrix=l.parent.matrix,l.userData.transformData.parentMatrixWorld=l.parent.matrixWorld);const c=lp(l.userData.transformData);l.applyMatrix4(c),l.updateWorldMatrix()}});const a=new ZS().parse();zt.children.length===1&&zt.children[0].isGroup&&(zt.children[0].animations=a,zt=zt.children[0]),zt.animations=a}parseModels(e,t,n){const r=new Map,s=Ge.Objects.Model;for(const o in s){const a=parseInt(o),l=s[o],c=at.get(a);let u=this.buildSkeleton(c,e,a,l.attrName);if(!u){switch(l.attrType){case"Camera":u=this.createCamera(c);break;case"Light":u=this.createLight(c);break;case"Mesh":u=this.createMesh(c,t,n);break;case"NurbsCurve":u=this.createCurve(c,t);break;case"LimbNode":case"Root":u=new Tl;break;case"Null":default:u=new or;break}u.name=l.attrName?Ye.sanitizeNodeName(l.attrName):"",u.ID=a}this.getTransformData(u,l),r.set(a,u)}return r}buildSkeleton(e,t,n,r){let s=null;return e.parents.forEach(function(o){for(const a in t){const l=t[a];l.rawBones.forEach(function(c,u){if(c.ID===o.ID){const h=s;s=new Tl,s.matrixWorld.copy(c.transformLink),s.name=r?Ye.sanitizeNodeName(r):"",s.ID=n,l.bones[u]=s,h!==null&&s.add(h)}})}}),s}createCamera(e){let t,n;if(e.children.forEach(function(r){const s=Ge.Objects.NodeAttribute[r.ID];s!==void 0&&(n=s)}),n===void 0)t=new st;else{let r=0;n.CameraProjectionType!==void 0&&n.CameraProjectionType.value===1&&(r=1);let s=1;n.NearPlane!==void 0&&(s=n.NearPlane.value/1e3);let o=1e3;n.FarPlane!==void 0&&(o=n.FarPlane.value/1e3);let a=window.innerWidth,l=window.innerHeight;n.AspectWidth!==void 0&&n.AspectHeight!==void 0&&(a=n.AspectWidth.value,l=n.AspectHeight.value);const c=a/l;let u=45;n.FieldOfView!==void 0&&(u=n.FieldOfView.value);const h=n.FocalLength?n.FocalLength.value:null;switch(r){case 0:t=new Ot(u,c,s,o),h!==null&&t.setFocalLength(h);break;case 1:t=new ac(-a/2,a/2,l/2,-l/2,s,o);break;default:console.warn("THREE.FBXLoader: Unknown camera type "+r+"."),t=new st;break}}return t}createLight(e){let t,n;if(e.children.forEach(function(r){const s=Ge.Objects.NodeAttribute[r.ID];s!==void 0&&(n=s)}),n===void 0)t=new st;else{let r;n.LightType===void 0?r=0:r=n.LightType.value;let s=16777215;n.Color!==void 0&&(s=new Re().fromArray(n.Color.value));let o=n.Intensity===void 0?1:n.Intensity.value/100;n.CastLightOnObject!==void 0&&n.CastLightOnObject.value===0&&(o=0);let a=0;n.FarAttenuationEnd!==void 0&&(n.EnableFarAttenuation!==void 0&&n.EnableFarAttenuation.value===0?a=0:a=n.FarAttenuationEnd.value);const l=1;switch(r){case 0:t=new qh(s,o,a,l);break;case 1:t=new Jd(s,o);break;case 2:let c=Math.PI/3;n.InnerAngle!==void 0&&(c=Sn.degToRad(n.InnerAngle.value));let u=0;n.OuterAngle!==void 0&&(u=Sn.degToRad(n.OuterAngle.value),u=Math.max(u,1)),t=new uS(s,o,a,c,u,l);break;default:console.warn("THREE.FBXLoader: Unknown light type "+n.LightType.value+", defaulting to a PointLight."),t=new qh(s,o);break}n.CastShadows!==void 0&&n.CastShadows.value===1&&(t.castShadow=!0)}return t}createMesh(e,t,n){let r,s=null,o=null;const a=[];return e.children.forEach(function(l){t.has(l.ID)&&(s=t.get(l.ID)),n.has(l.ID)&&a.push(n.get(l.ID))}),a.length>1?o=a:a.length>0?o=a[0]:(o=new Ya({color:13421772}),a.push(o)),"color"in s.attributes&&a.forEach(function(l){l.vertexColors=!0}),s.FBX_Deformer?(r=new mw(s,o),r.normalizeSkinWeights()):r=new pt(s,o),r}createCurve(e,t){const n=e.children.reduce(function(s,o){return t.has(o.ID)&&(s=t.get(o.ID)),s},null),r=new Nd({color:3342591,linewidth:1});return new zd(n,r)}getTransformData(e,t){const n={};"InheritType"in t&&(n.inheritType=parseInt(t.InheritType.value)),"RotationOrder"in t?n.eulerOrder=cp(t.RotationOrder.value):n.eulerOrder="ZYX","Lcl_Translation"in t&&(n.translation=t.Lcl_Translation.value),"PreRotation"in t&&(n.preRotation=t.PreRotation.value),"Lcl_Rotation"in t&&(n.rotation=t.Lcl_Rotation.value),"PostRotation"in t&&(n.postRotation=t.PostRotation.value),"Lcl_Scaling"in t&&(n.scale=t.Lcl_Scaling.value),"ScalingOffset"in t&&(n.scalingOffset=t.ScalingOffset.value),"ScalingPivot"in t&&(n.scalingPivot=t.ScalingPivot.value),"RotationOffset"in t&&(n.rotationOffset=t.RotationOffset.value),"RotationPivot"in t&&(n.rotationPivot=t.RotationPivot.value),e.userData.transformData=n}setLookAtProperties(e,t){"LookAtProperty"in t&&at.get(e.ID).children.forEach(function(r){if(r.relationship==="LookAtProperty"){const s=Ge.Objects.Model[r.ID];if("Lcl_Translation"in s){const o=s.Lcl_Translation.value;e.target!==void 0?(e.target.position.fromArray(o),zt.add(e.target)):e.lookAt(new D().fromArray(o))}}})}bindSkeleton(e,t,n){const r=this.parsePoseNodes();for(const s in e){const o=e[s];at.get(parseInt(o.ID)).parents.forEach(function(l){if(t.has(l.ID)){const c=l.ID;at.get(c).parents.forEach(function(h){n.has(h.ID)&&n.get(h.ID).bind(new cc(o.bones),r[h.ID])})}})}}parsePoseNodes(){const e={};if("Pose"in Ge.Objects){const t=Ge.Objects.Pose;for(const n in t)if(t[n].attrType==="BindPose"&&t[n].NbPoseNodes>0){const r=t[n].PoseNode;Array.isArray(r)?r.forEach(function(s){e[s.Node]=new De().fromArray(s.Matrix.a)}):e[r.Node]=new De().fromArray(r.Matrix.a)}}return e}createAmbientLight(){if("GlobalSettings"in Ge&&"AmbientColor"in Ge.GlobalSettings){const e=Ge.GlobalSettings.AmbientColor.value,t=e[0],n=e[1],r=e[2];if(t!==0||n!==0||r!==0){const s=new Re(t,n,r);zt.add(new Qd(s,1))}}}}class KS{constructor(){this.negativeMaterialIndices=!1}parse(e){const t=new Map;if("Geometry"in Ge.Objects){const n=Ge.Objects.Geometry;for(const r in n){const s=at.get(parseInt(r)),o=this.parseGeometry(s,n[r],e);t.set(parseInt(r),o)}}return this.negativeMaterialIndices===!0&&console.warn("THREE.FBXLoader: The FBX file contains invalid (negative) material indices. The asset might not render as expected."),t}parseGeometry(e,t,n){switch(t.attrType){case"Mesh":return this.parseMeshGeometry(e,t,n);case"NurbsCurve":return this.parseNurbsGeometry(t)}}parseMeshGeometry(e,t,n){const r=n.skeletons,s=[],o=e.parents.map(function(h){return Ge.Objects.Model[h.ID]});if(o.length===0)return;const a=e.children.reduce(function(h,f){return r[f.ID]!==void 0&&(h=r[f.ID]),h},null);e.children.forEach(function(h){n.morphTargets[h.ID]!==void 0&&s.push(n.morphTargets[h.ID])});const l=o[0],c={};"RotationOrder"in l&&(c.eulerOrder=cp(l.RotationOrder.value)),"InheritType"in l&&(c.inheritType=parseInt(l.InheritType.value)),"GeometricTranslation"in l&&(c.translation=l.GeometricTranslation.value),"GeometricRotation"in l&&(c.rotation=l.GeometricRotation.value),"GeometricScaling"in l&&(c.scale=l.GeometricScaling.value);const u=lp(c);return this.genGeometry(t,a,s,u)}genGeometry(e,t,n,r){const s=new mt;e.attrName&&(s.name=e.attrName);const o=this.parseGeoNode(e,t),a=this.genBuffers(o),l=new tt(a.vertex,3);if(l.applyMatrix4(r),s.setAttribute("position",l),a.colors.length>0&&s.setAttribute("color",new tt(a.colors,3)),t&&(s.setAttribute("skinIndex",new sc(a.weightsIndices,4)),s.setAttribute("skinWeight",new tt(a.vertexWeights,4)),s.FBX_Deformer=t),a.normal.length>0){const c=new kt().getNormalMatrix(r),u=new tt(a.normal,3);u.applyNormalMatrix(c),s.setAttribute("normal",u)}if(a.uvs.forEach(function(c,u){let h="uv"+(u+1).toString();u===0&&(h="uv"),s.setAttribute(h,new tt(a.uvs[u],2))}),o.material&&o.material.mappingType!=="AllSame"){let c=a.materialIndex[0],u=0;if(a.materialIndex.forEach(function(h,f){h!==c&&(s.addGroup(u,f-u,c),c=h,u=f)}),s.groups.length>0){const h=s.groups[s.groups.length-1],f=h.start+h.count;f!==a.materialIndex.length&&s.addGroup(f,a.materialIndex.length-f,c)}s.groups.length===0&&s.addGroup(0,a.materialIndex.length,a.materialIndex[0])}return this.addMorphTargets(s,e,n,r),s}parseGeoNode(e,t){const n={};if(n.vertexPositions=e.Vertices!==void 0?e.Vertices.a:[],n.vertexIndices=e.PolygonVertexIndex!==void 0?e.PolygonVertexIndex.a:[],e.LayerElementColor&&(n.color=this.parseVertexColors(e.LayerElementColor[0])),e.LayerElementMaterial&&(n.material=this.parseMaterialIndices(e.LayerElementMaterial[0])),e.LayerElementNormal&&(n.normal=this.parseNormals(e.LayerElementNormal[0])),e.LayerElementUV){n.uv=[];let r=0;for(;e.LayerElementUV[r];)e.LayerElementUV[r].UV&&n.uv.push(this.parseUVs(e.LayerElementUV[r])),r++}return n.weightTable={},t!==null&&(n.skeleton=t,t.rawBones.forEach(function(r,s){r.indices.forEach(function(o,a){n.weightTable[o]===void 0&&(n.weightTable[o]=[]),n.weightTable[o].push({id:s,weight:r.weights[a]})})})),n}genBuffers(e){const t={vertex:[],normal:[],colors:[],uvs:[],materialIndex:[],vertexWeights:[],weightsIndices:[]};let n=0,r=0,s=!1,o=[],a=[],l=[],c=[],u=[],h=[];const f=this;return e.vertexIndices.forEach(function(d,g){let p,m=!1;d<0&&(d=d^-1,m=!0);let _=[],b=[];if(o.push(d*3,d*3+1,d*3+2),e.color){const v=lo(g,n,d,e.color);l.push(v[0],v[1],v[2])}if(e.skeleton){if(e.weightTable[d]!==void 0&&e.weightTable[d].forEach(function(v){b.push(v.weight),_.push(v.id)}),b.length>4){s||(console.warn("THREE.FBXLoader: Vertex has more than 4 skinning weights assigned to vertex. Deleting additional weights."),s=!0);const v=[0,0,0,0],w=[0,0,0,0];b.forEach(function(S,P){let I=S,x=_[P];w.forEach(function(A,R,j){if(I>A){j[R]=I,I=A;const Q=v[R];v[R]=x,x=Q}})}),_=v,b=w}for(;b.length<4;)b.push(0),_.push(0);for(let v=0;v<4;++v)u.push(b[v]),h.push(_[v])}if(e.normal){const v=lo(g,n,d,e.normal);a.push(v[0],v[1],v[2])}e.material&&e.material.mappingType!=="AllSame"&&(p=lo(g,n,d,e.material)[0],p<0&&(f.negativeMaterialIndices=!0,p=0)),e.uv&&e.uv.forEach(function(v,w){const S=lo(g,n,d,v);c[w]===void 0&&(c[w]=[]),c[w].push(S[0]),c[w].push(S[1])}),r++,m&&(r>4&&console.warn("THREE.FBXLoader: Polygons with more than four sides are not supported. Make sure to triangulate the geometry during export."),f.genFace(t,e,o,p,a,l,c,u,h,r),n++,r=0,o=[],a=[],l=[],c=[],u=[],h=[])}),t}genFace(e,t,n,r,s,o,a,l,c,u){for(let h=2;h<u;h++)e.vertex.push(t.vertexPositions[n[0]]),e.vertex.push(t.vertexPositions[n[1]]),e.vertex.push(t.vertexPositions[n[2]]),e.vertex.push(t.vertexPositions[n[(h-1)*3]]),e.vertex.push(t.vertexPositions[n[(h-1)*3+1]]),e.vertex.push(t.vertexPositions[n[(h-1)*3+2]]),e.vertex.push(t.vertexPositions[n[h*3]]),e.vertex.push(t.vertexPositions[n[h*3+1]]),e.vertex.push(t.vertexPositions[n[h*3+2]]),t.skeleton&&(e.vertexWeights.push(l[0]),e.vertexWeights.push(l[1]),e.vertexWeights.push(l[2]),e.vertexWeights.push(l[3]),e.vertexWeights.push(l[(h-1)*4]),e.vertexWeights.push(l[(h-1)*4+1]),e.vertexWeights.push(l[(h-1)*4+2]),e.vertexWeights.push(l[(h-1)*4+3]),e.vertexWeights.push(l[h*4]),e.vertexWeights.push(l[h*4+1]),e.vertexWeights.push(l[h*4+2]),e.vertexWeights.push(l[h*4+3]),e.weightsIndices.push(c[0]),e.weightsIndices.push(c[1]),e.weightsIndices.push(c[2]),e.weightsIndices.push(c[3]),e.weightsIndices.push(c[(h-1)*4]),e.weightsIndices.push(c[(h-1)*4+1]),e.weightsIndices.push(c[(h-1)*4+2]),e.weightsIndices.push(c[(h-1)*4+3]),e.weightsIndices.push(c[h*4]),e.weightsIndices.push(c[h*4+1]),e.weightsIndices.push(c[h*4+2]),e.weightsIndices.push(c[h*4+3])),t.color&&(e.colors.push(o[0]),e.colors.push(o[1]),e.colors.push(o[2]),e.colors.push(o[(h-1)*3]),e.colors.push(o[(h-1)*3+1]),e.colors.push(o[(h-1)*3+2]),e.colors.push(o[h*3]),e.colors.push(o[h*3+1]),e.colors.push(o[h*3+2])),t.material&&t.material.mappingType!=="AllSame"&&(e.materialIndex.push(r),e.materialIndex.push(r),e.materialIndex.push(r)),t.normal&&(e.normal.push(s[0]),e.normal.push(s[1]),e.normal.push(s[2]),e.normal.push(s[(h-1)*3]),e.normal.push(s[(h-1)*3+1]),e.normal.push(s[(h-1)*3+2]),e.normal.push(s[h*3]),e.normal.push(s[h*3+1]),e.normal.push(s[h*3+2])),t.uv&&t.uv.forEach(function(f,d){e.uvs[d]===void 0&&(e.uvs[d]=[]),e.uvs[d].push(a[d][0]),e.uvs[d].push(a[d][1]),e.uvs[d].push(a[d][(h-1)*2]),e.uvs[d].push(a[d][(h-1)*2+1]),e.uvs[d].push(a[d][h*2]),e.uvs[d].push(a[d][h*2+1])})}addMorphTargets(e,t,n,r){if(n.length===0)return;e.morphTargetsRelative=!0,e.morphAttributes.position=[];const s=this;n.forEach(function(o){o.rawTargets.forEach(function(a){const l=Ge.Objects.Geometry[a.geoID];l!==void 0&&s.genMorphGeometry(e,t,l,r,a.name)})})}genMorphGeometry(e,t,n,r,s){const o=t.PolygonVertexIndex!==void 0?t.PolygonVertexIndex.a:[],a=n.Vertices!==void 0?n.Vertices.a:[],l=n.Indexes!==void 0?n.Indexes.a:[],c=e.attributes.position.count*3,u=new Float32Array(c);for(let g=0;g<l.length;g++){const p=l[g]*3;u[p]=a[g*3],u[p+1]=a[g*3+1],u[p+2]=a[g*3+2]}const h={vertexIndices:o,vertexPositions:u},f=this.genBuffers(h),d=new tt(f.vertex,3);d.name=s||n.attrName,d.applyMatrix4(r),e.morphAttributes.position.push(d)}parseNormals(e){const t=e.MappingInformationType,n=e.ReferenceInformationType,r=e.Normals.a;let s=[];return n==="IndexToDirect"&&("NormalIndex"in e?s=e.NormalIndex.a:"NormalsIndex"in e&&(s=e.NormalsIndex.a)),{dataSize:3,buffer:r,indices:s,mappingType:t,referenceType:n}}parseUVs(e){const t=e.MappingInformationType,n=e.ReferenceInformationType,r=e.UV.a;let s=[];return n==="IndexToDirect"&&(s=e.UVIndex.a),{dataSize:2,buffer:r,indices:s,mappingType:t,referenceType:n}}parseVertexColors(e){const t=e.MappingInformationType,n=e.ReferenceInformationType,r=e.Colors.a;let s=[];return n==="IndexToDirect"&&(s=e.ColorIndex.a),{dataSize:4,buffer:r,indices:s,mappingType:t,referenceType:n}}parseMaterialIndices(e){const t=e.MappingInformationType,n=e.ReferenceInformationType;if(t==="NoMappingInformation")return{dataSize:1,buffer:[0],indices:[0],mappingType:"AllSame",referenceType:n};const r=e.Materials.a,s=[];for(let o=0;o<r.length;++o)s.push(o);return{dataSize:1,buffer:r,indices:s,mappingType:t,referenceType:n}}parseNurbsGeometry(e){const t=parseInt(e.Order);if(isNaN(t))return console.error("THREE.FBXLoader: Invalid Order %s given for geometry ID: %s",e.Order,e.id),new mt;const n=t-1,r=e.KnotVector.a,s=[],o=e.Points.a;for(let h=0,f=o.length;h<f;h+=4)s.push(new Ke().fromArray(o,h));let a,l;if(e.Form==="Closed")s.push(s[0]);else if(e.Form==="Periodic"){a=n,l=r.length-1-a;for(let h=0;h<n;++h)s.push(s[h])}const u=new qS(n,r,s,a,l).getPoints(s.length*12);return new mt().setFromPoints(u)}}class ZS{parse(){const e=[],t=this.parseClips();if(t!==void 0)for(const n in t){const r=t[n],s=this.addClip(r);e.push(s)}return e}parseClips(){if(Ge.Objects.AnimationCurve===void 0)return;const e=this.parseAnimationCurveNodes();this.parseAnimationCurves(e);const t=this.parseAnimationLayers(e);return this.parseAnimStacks(t)}parseAnimationCurveNodes(){const e=Ge.Objects.AnimationCurveNode,t=new Map;for(const n in e){const r=e[n];if(r.attrName.match(/S|R|T|DeformPercent/)!==null){const s={id:r.id,attr:r.attrName,curves:{}};t.set(s.id,s)}}return t}parseAnimationCurves(e){const t=Ge.Objects.AnimationCurve;for(const n in t){const r={id:t[n].id,times:t[n].KeyTime.a.map(n1),values:t[n].KeyValueFloat.a},s=at.get(r.id);if(s!==void 0){const o=s.parents[0].ID,a=s.parents[0].relationship;a.match(/X/)?e.get(o).curves.x=r:a.match(/Y/)?e.get(o).curves.y=r:a.match(/Z/)?e.get(o).curves.z=r:a.match(/d|DeformPercent/)&&e.has(o)&&(e.get(o).curves.morph=r)}}}parseAnimationLayers(e){const t=Ge.Objects.AnimationLayer,n=new Map;for(const r in t){const s=[],o=at.get(parseInt(r));o!==void 0&&(o.children.forEach(function(l,c){if(e.has(l.ID)){const u=e.get(l.ID);if(u.curves.x!==void 0||u.curves.y!==void 0||u.curves.z!==void 0){if(s[c]===void 0){const h=at.get(l.ID).parents.filter(function(f){return f.relationship!==void 0})[0].ID;if(h!==void 0){const f=Ge.Objects.Model[h.toString()];if(f===void 0){console.warn("THREE.FBXLoader: Encountered a unused curve.",l);return}const d={modelName:f.attrName?Ye.sanitizeNodeName(f.attrName):"",ID:f.id,initialPosition:[0,0,0],initialRotation:[0,0,0],initialScale:[1,1,1]};zt.traverse(function(g){g.ID===f.id&&(d.transform=g.matrix,g.userData.transformData&&(d.eulerOrder=g.userData.transformData.eulerOrder))}),d.transform||(d.transform=new De),"PreRotation"in f&&(d.preRotation=f.PreRotation.value),"PostRotation"in f&&(d.postRotation=f.PostRotation.value),s[c]=d}}s[c]&&(s[c][u.attr]=u)}else if(u.curves.morph!==void 0){if(s[c]===void 0){const h=at.get(l.ID).parents.filter(function(_){return _.relationship!==void 0})[0].ID,f=at.get(h).parents[0].ID,d=at.get(f).parents[0].ID,g=at.get(d).parents[0].ID,p=Ge.Objects.Model[g],m={modelName:p.attrName?Ye.sanitizeNodeName(p.attrName):"",morphName:Ge.Objects.Deformer[h].attrName};s[c]=m}s[c][u.attr]=u}}}),n.set(parseInt(r),s))}return n}parseAnimStacks(e){const t=Ge.Objects.AnimationStack,n={};for(const r in t){const s=at.get(parseInt(r)).children;s.length>1&&console.warn("THREE.FBXLoader: Encountered an animation stack with multiple layers, this is currently not supported. Ignoring subsequent layers.");const o=e.get(s[0].ID);n[r]={name:t[r].attrName,layer:o}}return n}addClip(e){let t=[];const n=this;return e.layer.forEach(function(r){t=t.concat(n.generateTracks(r))}),new nS(e.name,-1,t)}generateTracks(e){const t=[];let n=new D,r=new sn,s=new D;if(e.transform&&e.transform.decompose(n,r,s),n=n.toArray(),r=new on().setFromQuaternion(r,e.eulerOrder).toArray(),s=s.toArray(),e.T!==void 0&&Object.keys(e.T.curves).length>0){const o=this.generateVectorTrack(e.modelName,e.T.curves,n,"position");o!==void 0&&t.push(o)}if(e.R!==void 0&&Object.keys(e.R.curves).length>0){const o=this.generateRotationTrack(e.modelName,e.R.curves,r,e.preRotation,e.postRotation,e.eulerOrder);o!==void 0&&t.push(o)}if(e.S!==void 0&&Object.keys(e.S.curves).length>0){const o=this.generateVectorTrack(e.modelName,e.S.curves,s,"scale");o!==void 0&&t.push(o)}if(e.DeformPercent!==void 0){const o=this.generateMorphTrack(e);o!==void 0&&t.push(o)}return t}generateVectorTrack(e,t,n,r){const s=this.getTimesForAllAxes(t),o=this.getKeyframeTrackValues(s,t,n);return new ys(e+"."+r,s,o)}generateRotationTrack(e,t,n,r,s,o){t.x!==void 0&&(this.interpolateRotations(t.x),t.x.values=t.x.values.map(Sn.degToRad)),t.y!==void 0&&(this.interpolateRotations(t.y),t.y.values=t.y.values.map(Sn.degToRad)),t.z!==void 0&&(this.interpolateRotations(t.z),t.z.values=t.z.values.map(Sn.degToRad));const a=this.getTimesForAllAxes(t),l=this.getKeyframeTrackValues(a,t,n);r!==void 0&&(r=r.map(Sn.degToRad),r.push(o),r=new on().fromArray(r),r=new sn().setFromEuler(r)),s!==void 0&&(s=s.map(Sn.degToRad),s.push(o),s=new on().fromArray(s),s=new sn().setFromEuler(s).invert());const c=new sn,u=new on,h=[];for(let f=0;f<l.length;f+=3)u.set(l[f],l[f+1],l[f+2],o),c.setFromEuler(u),r!==void 0&&c.premultiply(r),s!==void 0&&c.multiply(s),c.toArray(h,f/3*4);return new Lr(e+".quaternion",a,h)}generateMorphTrack(e){const t=e.DeformPercent.curves.morph,n=t.values.map(function(s){return s/100}),r=zt.getObjectByName(e.modelName).morphTargetDictionary[e.morphName];return new xs(e.modelName+".morphTargetInfluences["+r+"]",t.times,n)}getTimesForAllAxes(e){let t=[];if(e.x!==void 0&&(t=t.concat(e.x.times)),e.y!==void 0&&(t=t.concat(e.y.times)),e.z!==void 0&&(t=t.concat(e.z.times)),t=t.sort(function(n,r){return n-r}),t.length>1){let n=1,r=t[0];for(let s=1;s<t.length;s++){const o=t[s];o!==r&&(t[n]=o,r=o,n++)}t=t.slice(0,n)}return t}getKeyframeTrackValues(e,t,n){const r=n,s=[];let o=-1,a=-1,l=-1;return e.forEach(function(c){if(t.x&&(o=t.x.times.indexOf(c)),t.y&&(a=t.y.times.indexOf(c)),t.z&&(l=t.z.times.indexOf(c)),o!==-1){const u=t.x.values[o];s.push(u),r[0]=u}else s.push(r[0]);if(a!==-1){const u=t.y.values[a];s.push(u),r[1]=u}else s.push(r[1]);if(l!==-1){const u=t.z.values[l];s.push(u),r[2]=u}else s.push(r[2])}),s}interpolateRotations(e){for(let t=1;t<e.values.length;t++){const n=e.values[t-1],r=e.values[t]-n,s=Math.abs(r);if(s>=180){const o=s/180,a=r/o;let l=n+a;const c=e.times[t-1],h=(e.times[t]-c)/o;let f=c+h;const d=[],g=[];for(;f<e.times[t];)d.push(f),f+=h,g.push(l),l+=a;e.times=ef(e.times,t,d),e.values=ef(e.values,t,g)}}}}class JS{getPrevNode(){return this.nodeStack[this.currentIndent-2]}getCurrentNode(){return this.nodeStack[this.currentIndent-1]}getCurrentProp(){return this.currentProp}pushStack(e){this.nodeStack.push(e),this.currentIndent+=1}popStack(){this.nodeStack.pop(),this.currentIndent-=1}setCurrentProp(e,t){this.currentProp=e,this.currentPropName=t}parse(e){this.currentIndent=0,this.allNodes=new ap,this.nodeStack=[],this.currentProp=[],this.currentPropName="";const t=this,n=e.split(/[\r\n]+/);return n.forEach(function(r,s){const o=r.match(/^[\s\t]*;/),a=r.match(/^[\s\t]*$/);if(o||a)return;const l=r.match("^\\t{"+t.currentIndent+"}(\\w+):(.*){",""),c=r.match("^\\t{"+t.currentIndent+"}(\\w+):[\\s\\t\\r\\n](.*)"),u=r.match("^\\t{"+(t.currentIndent-1)+"}}");l?t.parseNodeBegin(r,l):c?t.parseNodeProperty(r,c,n[++s]):u?t.popStack():r.match(/^[^\s\t}]/)&&t.parseNodePropertyContinued(r)}),this.allNodes}parseNodeBegin(e,t){const n=t[1].trim().replace(/^"/,"").replace(/"$/,""),r=t[2].split(",").map(function(l){return l.trim().replace(/^"/,"").replace(/"$/,"")}),s={name:n},o=this.parseNodeAttr(r),a=this.getCurrentNode();this.currentIndent===0?this.allNodes.add(n,s):n in a?(n==="PoseNode"?a.PoseNode.push(s):a[n].id!==void 0&&(a[n]={},a[n][a[n].id]=a[n]),o.id!==""&&(a[n][o.id]=s)):typeof o.id=="number"?(a[n]={},a[n][o.id]=s):n!=="Properties70"&&(n==="PoseNode"?a[n]=[s]:a[n]=s),typeof o.id=="number"&&(s.id=o.id),o.name!==""&&(s.attrName=o.name),o.type!==""&&(s.attrType=o.type),this.pushStack(s)}parseNodeAttr(e){let t=e[0];e[0]!==""&&(t=parseInt(e[0]),isNaN(t)&&(t=e[0]));let n="",r="";return e.length>1&&(n=e[1].replace(/^(\w+)::/,""),r=e[2]),{id:t,name:n,type:r}}parseNodeProperty(e,t,n){let r=t[1].replace(/^"/,"").replace(/"$/,"").trim(),s=t[2].replace(/^"/,"").replace(/"$/,"").trim();r==="Content"&&s===","&&(s=n.replace(/"/g,"").replace(/,$/,"").trim());const o=this.getCurrentNode();if(o.name==="Properties70"){this.parseNodeSpecialProperty(e,r,s);return}if(r==="C"){const l=s.split(",").slice(1),c=parseInt(l[0]),u=parseInt(l[1]);let h=s.split(",").slice(3);h=h.map(function(f){return f.trim().replace(/^"/,"")}),r="connections",s=[c,u],r1(s,h),o[r]===void 0&&(o[r]=[])}r==="Node"&&(o.id=s),r in o&&Array.isArray(o[r])?o[r].push(s):r!=="a"?o[r]=s:o.a=s,this.setCurrentProp(o,r),r==="a"&&s.slice(-1)!==","&&(o.a=el(s))}parseNodePropertyContinued(e){const t=this.getCurrentNode();t.a+=e,e.slice(-1)!==","&&(t.a=el(t.a))}parseNodeSpecialProperty(e,t,n){const r=n.split('",').map(function(u){return u.trim().replace(/^\"/,"").replace(/\s/,"_")}),s=r[0],o=r[1],a=r[2],l=r[3];let c=r[4];switch(o){case"int":case"enum":case"bool":case"ULongLong":case"double":case"Number":case"FieldOfView":c=parseFloat(c);break;case"Color":case"ColorRGB":case"Vector3D":case"Lcl_Translation":case"Lcl_Rotation":case"Lcl_Scaling":c=el(c);break}this.getPrevNode()[s]={type:o,type2:a,flag:l,value:c},this.setCurrentProp(this.getPrevNode(),s)}}class QS{parse(e){const t=new Jh(e);t.skip(23);const n=t.getUint32();if(n<6400)throw new Error("THREE.FBXLoader: FBX version not supported, FileVersion: "+n);const r=new ap;for(;!this.endOfContent(t);){const s=this.parseNode(t,n);s!==null&&r.add(s.name,s)}return r}endOfContent(e){return e.size()%16===0?(e.getOffset()+160+16&-16)>=e.size():e.getOffset()+160+16>=e.size()}parseNode(e,t){const n={},r=t>=7500?e.getUint64():e.getUint32(),s=t>=7500?e.getUint64():e.getUint32();t>=7500?e.getUint64():e.getUint32();const o=e.getUint8(),a=e.getString(o);if(r===0)return null;const l=[];for(let f=0;f<s;f++)l.push(this.parseProperty(e));const c=l.length>0?l[0]:"",u=l.length>1?l[1]:"",h=l.length>2?l[2]:"";for(n.singleProperty=s===1&&e.getOffset()===r;r>e.getOffset();){const f=this.parseNode(e,t);f!==null&&this.parseSubNode(a,n,f)}return n.propertyList=l,typeof c=="number"&&(n.id=c),u!==""&&(n.attrName=u),h!==""&&(n.attrType=h),a!==""&&(n.name=a),n}parseSubNode(e,t,n){if(n.singleProperty===!0){const r=n.propertyList[0];Array.isArray(r)?(t[n.name]=n,n.a=r):t[n.name]=r}else if(e==="Connections"&&n.name==="C"){const r=[];n.propertyList.forEach(function(s,o){o!==0&&r.push(s)}),t.connections===void 0&&(t.connections=[]),t.connections.push(r)}else if(n.name==="Properties70")Object.keys(n).forEach(function(s){t[s]=n[s]});else if(e==="Properties70"&&n.name==="P"){let r=n.propertyList[0],s=n.propertyList[1];const o=n.propertyList[2],a=n.propertyList[3];let l;r.indexOf("Lcl ")===0&&(r=r.replace("Lcl ","Lcl_")),s.indexOf("Lcl ")===0&&(s=s.replace("Lcl ","Lcl_")),s==="Color"||s==="ColorRGB"||s==="Vector"||s==="Vector3D"||s.indexOf("Lcl_")===0?l=[n.propertyList[4],n.propertyList[5],n.propertyList[6]]:l=n.propertyList[4],t[r]={type:s,type2:o,flag:a,value:l}}else t[n.name]===void 0?typeof n.id=="number"?(t[n.name]={},t[n.name][n.id]=n):t[n.name]=n:n.name==="PoseNode"?(Array.isArray(t[n.name])||(t[n.name]=[t[n.name]]),t[n.name].push(n)):t[n.name][n.id]===void 0&&(t[n.name][n.id]=n)}parseProperty(e){const t=e.getString(1);let n;switch(t){case"C":return e.getBoolean();case"D":return e.getFloat64();case"F":return e.getFloat32();case"I":return e.getInt32();case"L":return e.getInt64();case"R":return n=e.getUint32(),e.getArrayBuffer(n);case"S":return n=e.getUint32(),e.getString(n);case"Y":return e.getInt16();case"b":case"c":case"d":case"f":case"i":case"l":const r=e.getUint32(),s=e.getUint32(),o=e.getUint32();if(s===0)switch(t){case"b":case"c":return e.getBooleanArray(r);case"d":return e.getFloat64Array(r);case"f":return e.getFloat32Array(r);case"i":return e.getInt32Array(r);case"l":return e.getInt64Array(r)}const a=zS(new Uint8Array(e.getArrayBuffer(o))),l=new Jh(a.buffer);switch(t){case"b":case"c":return l.getBooleanArray(r);case"d":return l.getFloat64Array(r);case"f":return l.getFloat32Array(r);case"i":return l.getInt32Array(r);case"l":return l.getInt64Array(r)}break;default:throw new Error("THREE.FBXLoader: Unknown property type "+t)}}}class Jh{constructor(e,t){this.dv=new DataView(e),this.offset=0,this.littleEndian=t!==void 0?t:!0,this._textDecoder=new TextDecoder}getOffset(){return this.offset}size(){return this.dv.buffer.byteLength}skip(e){this.offset+=e}getBoolean(){return(this.getUint8()&1)===1}getBooleanArray(e){const t=[];for(let n=0;n<e;n++)t.push(this.getBoolean());return t}getUint8(){const e=this.dv.getUint8(this.offset);return this.offset+=1,e}getInt16(){const e=this.dv.getInt16(this.offset,this.littleEndian);return this.offset+=2,e}getInt32(){const e=this.dv.getInt32(this.offset,this.littleEndian);return this.offset+=4,e}getInt32Array(e){const t=[];for(let n=0;n<e;n++)t.push(this.getInt32());return t}getUint32(){const e=this.dv.getUint32(this.offset,this.littleEndian);return this.offset+=4,e}getInt64(){let e,t;return this.littleEndian?(e=this.getUint32(),t=this.getUint32()):(t=this.getUint32(),e=this.getUint32()),t&2147483648?(t=~t&4294967295,e=~e&4294967295,e===4294967295&&(t=t+1&4294967295),e=e+1&4294967295,-(t*4294967296+e)):t*4294967296+e}getInt64Array(e){const t=[];for(let n=0;n<e;n++)t.push(this.getInt64());return t}getUint64(){let e,t;return this.littleEndian?(e=this.getUint32(),t=this.getUint32()):(t=this.getUint32(),e=this.getUint32()),t*4294967296+e}getFloat32(){const e=this.dv.getFloat32(this.offset,this.littleEndian);return this.offset+=4,e}getFloat32Array(e){const t=[];for(let n=0;n<e;n++)t.push(this.getFloat32());return t}getFloat64(){const e=this.dv.getFloat64(this.offset,this.littleEndian);return this.offset+=8,e}getFloat64Array(e){const t=[];for(let n=0;n<e;n++)t.push(this.getFloat64());return t}getArrayBuffer(e){const t=this.dv.buffer.slice(this.offset,this.offset+e);return this.offset+=e,t}getString(e){const t=this.offset;let n=new Uint8Array(this.dv.buffer,t,e);this.skip(e);const r=n.indexOf(0);return r>=0&&(n=new Uint8Array(this.dv.buffer,t,r)),this._textDecoder.decode(n)}}class ap{add(e,t){this[e]=t}}function e1(i){const e="Kaydara FBX Binary  \0";return i.byteLength>=e.length&&e===up(i,0,e.length)}function t1(i){const e=["K","a","y","d","a","r","a","\\","F","B","X","\\","B","i","n","a","r","y","\\","\\"];let t=0;function n(r){const s=i[r-1];return i=i.slice(t+r),t++,s}for(let r=0;r<e.length;++r)if(n(1)===e[r])return!1;return!0}function Qh(i){const e=/FBXVersion: (\d+)/,t=i.match(e);if(t)return parseInt(t[1]);throw new Error("THREE.FBXLoader: Cannot find the version number for the file given.")}function n1(i){return i/46186158e3}const i1=[];function lo(i,e,t,n){let r;switch(n.mappingType){case"ByPolygonVertex":r=i;break;case"ByPolygon":r=e;break;case"ByVertice":r=t;break;case"AllSame":r=n.indices[0];break;default:console.warn("THREE.FBXLoader: unknown attribute mapping type "+n.mappingType)}n.referenceType==="IndexToDirect"&&(r=n.indices[r]);const s=r*n.dataSize,o=s+n.dataSize;return s1(i1,n.buffer,s,o)}const Qa=new on,er=new D;function lp(i){const e=new De,t=new De,n=new De,r=new De,s=new De,o=new De,a=new De,l=new De,c=new De,u=new De,h=new De,f=new De,d=i.inheritType?i.inheritType:0;if(i.translation&&e.setPosition(er.fromArray(i.translation)),i.preRotation){const R=i.preRotation.map(Sn.degToRad);R.push(i.eulerOrder||on.DEFAULT_ORDER),t.makeRotationFromEuler(Qa.fromArray(R))}if(i.rotation){const R=i.rotation.map(Sn.degToRad);R.push(i.eulerOrder||on.DEFAULT_ORDER),n.makeRotationFromEuler(Qa.fromArray(R))}if(i.postRotation){const R=i.postRotation.map(Sn.degToRad);R.push(i.eulerOrder||on.DEFAULT_ORDER),r.makeRotationFromEuler(Qa.fromArray(R)),r.invert()}i.scale&&s.scale(er.fromArray(i.scale)),i.scalingOffset&&a.setPosition(er.fromArray(i.scalingOffset)),i.scalingPivot&&o.setPosition(er.fromArray(i.scalingPivot)),i.rotationOffset&&l.setPosition(er.fromArray(i.rotationOffset)),i.rotationPivot&&c.setPosition(er.fromArray(i.rotationPivot)),i.parentMatrixWorld&&(h.copy(i.parentMatrix),u.copy(i.parentMatrixWorld));const g=t.clone().multiply(n).multiply(r),p=new De;p.extractRotation(u);const m=new De;m.copyPosition(u);const _=m.clone().invert().multiply(u),b=p.clone().invert().multiply(_),v=s,w=new De;if(d===0)w.copy(p).multiply(g).multiply(b).multiply(v);else if(d===1)w.copy(p).multiply(b).multiply(g).multiply(v);else{const j=new De().scale(new D().setFromMatrixScale(h)).clone().invert(),Q=b.clone().multiply(j);w.copy(p).multiply(g).multiply(Q).multiply(v)}const S=c.clone().invert(),P=o.clone().invert();let I=e.clone().multiply(l).multiply(c).multiply(t).multiply(n).multiply(r).multiply(S).multiply(a).multiply(o).multiply(s).multiply(P);const x=new De().copyPosition(I),A=u.clone().multiply(x);return f.copyPosition(A),I=f.clone().multiply(w),I.premultiply(u.invert()),I}function cp(i){i=i||0;const e=["ZYX","YZX","XZY","ZXY","YXZ","XYZ"];return i===6?(console.warn("THREE.FBXLoader: unsupported Euler Order: Spherical XYZ. Animations and rotations may be incorrect."),e[0]):e[i]}function el(i){return i.split(",").map(function(t){return parseFloat(t)})}function up(i,e,t){return e===void 0&&(e=0),t===void 0&&(t=i.byteLength),new TextDecoder().decode(new Uint8Array(i,e,t))}function r1(i,e){for(let t=0,n=i.length,r=e.length;t<r;t++,n++)i[n]=e[t]}function s1(i,e,t,n){for(let r=t,s=0;r<n;r++,s++)i[s]=e[r];return i}function ef(i,e,t){return i.slice(0,e).concat(t).concat(i.slice(e))}const o1=new YS,a1=i=>new Promise((e,t)=>{o1.load(i,n=>{e(n)},()=>{},n=>{t(n)})});var vo={Linear:{None:function(i){return i}},Quadratic:{In:function(i){return i*i},Out:function(i){return i*(2-i)},InOut:function(i){return(i*=2)<1?.5*i*i:-.5*(--i*(i-2)-1)}},Cubic:{In:function(i){return i*i*i},Out:function(i){return--i*i*i+1},InOut:function(i){return(i*=2)<1?.5*i*i*i:.5*((i-=2)*i*i+2)}},Quartic:{In:function(i){return i*i*i*i},Out:function(i){return 1- --i*i*i*i},InOut:function(i){return(i*=2)<1?.5*i*i*i*i:-.5*((i-=2)*i*i*i-2)}},Quintic:{In:function(i){return i*i*i*i*i},Out:function(i){return--i*i*i*i*i+1},InOut:function(i){return(i*=2)<1?.5*i*i*i*i*i:.5*((i-=2)*i*i*i*i+2)}},Sinusoidal:{In:function(i){return 1-Math.cos(i*Math.PI/2)},Out:function(i){return Math.sin(i*Math.PI/2)},InOut:function(i){return .5*(1-Math.cos(Math.PI*i))}},Exponential:{In:function(i){return i===0?0:Math.pow(1024,i-1)},Out:function(i){return i===1?1:1-Math.pow(2,-10*i)},InOut:function(i){return i===0?0:i===1?1:(i*=2)<1?.5*Math.pow(1024,i-1):.5*(-Math.pow(2,-10*(i-1))+2)}},Circular:{In:function(i){return 1-Math.sqrt(1-i*i)},Out:function(i){return Math.sqrt(1- --i*i)},InOut:function(i){return(i*=2)<1?-.5*(Math.sqrt(1-i*i)-1):.5*(Math.sqrt(1-(i-=2)*i)+1)}},Elastic:{In:function(i){return i===0?0:i===1?1:-Math.pow(2,10*(i-1))*Math.sin((i-1.1)*5*Math.PI)},Out:function(i){return i===0?0:i===1?1:Math.pow(2,-10*i)*Math.sin((i-.1)*5*Math.PI)+1},InOut:function(i){return i===0?0:i===1?1:(i*=2,i<1?-.5*Math.pow(2,10*(i-1))*Math.sin((i-1.1)*5*Math.PI):.5*Math.pow(2,-10*(i-1))*Math.sin((i-1.1)*5*Math.PI)+1)}},Back:{In:function(i){var e=1.70158;return i*i*((e+1)*i-e)},Out:function(i){var e=1.70158;return--i*i*((e+1)*i+e)+1},InOut:function(i){var e=2.5949095;return(i*=2)<1?.5*(i*i*((e+1)*i-e)):.5*((i-=2)*i*((e+1)*i+e)+2)}},Bounce:{In:function(i){return 1-vo.Bounce.Out(1-i)},Out:function(i){return i<1/2.75?7.5625*i*i:i<2/2.75?7.5625*(i-=1.5/2.75)*i+.75:i<2.5/2.75?7.5625*(i-=2.25/2.75)*i+.9375:7.5625*(i-=2.625/2.75)*i+.984375},InOut:function(i){return i<.5?vo.Bounce.In(i*2)*.5:vo.Bounce.Out(i*2-1)*.5+.5}}},jr;typeof self>"u"&&typeof process<"u"&&process.hrtime?jr=function(){var i=process.hrtime();return i[0]*1e3+i[1]/1e6}:typeof self<"u"&&self.performance!==void 0&&self.performance.now!==void 0?jr=self.performance.now.bind(self.performance):Date.now!==void 0?jr=Date.now:jr=function(){return new Date().getTime()};var ir=jr,l1=function(){function i(){this._tweens={},this._tweensAddedDuringUpdate={}}return i.prototype.getAll=function(){var e=this;return Object.keys(this._tweens).map(function(t){return e._tweens[t]})},i.prototype.removeAll=function(){this._tweens={}},i.prototype.add=function(e){this._tweens[e.getId()]=e,this._tweensAddedDuringUpdate[e.getId()]=e},i.prototype.remove=function(e){delete this._tweens[e.getId()],delete this._tweensAddedDuringUpdate[e.getId()]},i.prototype.update=function(e,t){e===void 0&&(e=ir()),t===void 0&&(t=!1);var n=Object.keys(this._tweens);if(n.length===0)return!1;for(;n.length>0;){this._tweensAddedDuringUpdate={};for(var r=0;r<n.length;r++){var s=this._tweens[n[r]],o=!t;s&&s.update(e,o)===!1&&!t&&delete this._tweens[n[r]]}n=Object.keys(this._tweensAddedDuringUpdate)}return!0},i}(),qr={Linear:function(i,e){var t=i.length-1,n=t*e,r=Math.floor(n),s=qr.Utils.Linear;return e<0?s(i[0],i[1],n):e>1?s(i[t],i[t-1],t-n):s(i[r],i[r+1>t?t:r+1],n-r)},Bezier:function(i,e){for(var t=0,n=i.length-1,r=Math.pow,s=qr.Utils.Bernstein,o=0;o<=n;o++)t+=r(1-e,n-o)*r(e,o)*i[o]*s(n,o);return t},CatmullRom:function(i,e){var t=i.length-1,n=t*e,r=Math.floor(n),s=qr.Utils.CatmullRom;return i[0]===i[t]?(e<0&&(r=Math.floor(n=t*(1+e))),s(i[(r-1+t)%t],i[r],i[(r+1)%t],i[(r+2)%t],n-r)):e<0?i[0]-(s(i[0],i[0],i[1],i[1],-n)-i[0]):e>1?i[t]-(s(i[t],i[t],i[t-1],i[t-1],n-t)-i[t]):s(i[r?r-1:0],i[r],i[t<r+1?t:r+1],i[t<r+2?t:r+2],n-r)},Utils:{Linear:function(i,e,t){return(e-i)*t+i},Bernstein:function(i,e){var t=qr.Utils.Factorial;return t(i)/t(e)/t(i-e)},Factorial:function(){var i=[1];return function(e){var t=1;if(i[e])return i[e];for(var n=e;n>1;n--)t*=n;return i[e]=t,t}}(),CatmullRom:function(i,e,t,n,r){var s=(t-i)*.5,o=(n-e)*.5,a=r*r,l=r*a;return(2*e-2*t+s+o)*l+(-3*e+3*t-2*s-o)*a+s*r+e}}},c1=function(){function i(){}return i.nextId=function(){return i._nextId++},i._nextId=0,i}(),hp=new l1,tf=function(){function i(e,t){t===void 0&&(t=hp),this._object=e,this._group=t,this._isPaused=!1,this._pauseStart=0,this._valuesStart={},this._valuesEnd={},this._valuesStartRepeat={},this._duration=1e3,this._initialRepeat=0,this._repeat=0,this._yoyo=!1,this._isPlaying=!1,this._reversed=!1,this._delayTime=0,this._startTime=0,this._easingFunction=vo.Linear.None,this._interpolationFunction=qr.Linear,this._chainedTweens=[],this._onStartCallbackFired=!1,this._id=c1.nextId(),this._isChainStopped=!1,this._goToEnd=!1}return i.prototype.getId=function(){return this._id},i.prototype.isPlaying=function(){return this._isPlaying},i.prototype.isPaused=function(){return this._isPaused},i.prototype.to=function(e,t){return this._valuesEnd=Object.create(e),t!==void 0&&(this._duration=t),this},i.prototype.duration=function(e){return this._duration=e,this},i.prototype.start=function(e){if(this._isPlaying)return this;if(this._group&&this._group.add(this),this._repeat=this._initialRepeat,this._reversed){this._reversed=!1;for(var t in this._valuesStartRepeat)this._swapEndStartRepeatValues(t),this._valuesStart[t]=this._valuesStartRepeat[t]}return this._isPlaying=!0,this._isPaused=!1,this._onStartCallbackFired=!1,this._isChainStopped=!1,this._startTime=e!==void 0?typeof e=="string"?ir()+parseFloat(e):e:ir(),this._startTime+=this._delayTime,this._setupProperties(this._object,this._valuesStart,this._valuesEnd,this._valuesStartRepeat),this},i.prototype._setupProperties=function(e,t,n,r){for(var s in n){var o=e[s],a=Array.isArray(o),l=a?"array":typeof o,c=!a&&Array.isArray(n[s]);if(!(l==="undefined"||l==="function")){if(c){var u=n[s];if(u.length===0)continue;u=u.map(this._handleRelativeValue.bind(this,o)),n[s]=[o].concat(u)}if((l==="object"||a)&&o&&!c){t[s]=a?[]:{};for(var h in o)t[s][h]=o[h];r[s]=a?[]:{},this._setupProperties(o,t[s],n[s],r[s])}else typeof t[s]>"u"&&(t[s]=o),a||(t[s]*=1),c?r[s]=n[s].slice().reverse():r[s]=t[s]||0}}},i.prototype.stop=function(){return this._isChainStopped||(this._isChainStopped=!0,this.stopChainedTweens()),this._isPlaying?(this._group&&this._group.remove(this),this._isPlaying=!1,this._isPaused=!1,this._onStopCallback&&this._onStopCallback(this._object),this):this},i.prototype.end=function(){return this._goToEnd=!0,this.update(1/0),this},i.prototype.pause=function(e){return e===void 0&&(e=ir()),this._isPaused||!this._isPlaying?this:(this._isPaused=!0,this._pauseStart=e,this._group&&this._group.remove(this),this)},i.prototype.resume=function(e){return e===void 0&&(e=ir()),!this._isPaused||!this._isPlaying?this:(this._isPaused=!1,this._startTime+=e-this._pauseStart,this._pauseStart=0,this._group&&this._group.add(this),this)},i.prototype.stopChainedTweens=function(){for(var e=0,t=this._chainedTweens.length;e<t;e++)this._chainedTweens[e].stop();return this},i.prototype.group=function(e){return this._group=e,this},i.prototype.delay=function(e){return this._delayTime=e,this},i.prototype.repeat=function(e){return this._initialRepeat=e,this._repeat=e,this},i.prototype.repeatDelay=function(e){return this._repeatDelayTime=e,this},i.prototype.yoyo=function(e){return this._yoyo=e,this},i.prototype.easing=function(e){return this._easingFunction=e,this},i.prototype.interpolation=function(e){return this._interpolationFunction=e,this},i.prototype.chain=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];return this._chainedTweens=e,this},i.prototype.onStart=function(e){return this._onStartCallback=e,this},i.prototype.onUpdate=function(e){return this._onUpdateCallback=e,this},i.prototype.onRepeat=function(e){return this._onRepeatCallback=e,this},i.prototype.onComplete=function(e){return this._onCompleteCallback=e,this},i.prototype.onStop=function(e){return this._onStopCallback=e,this},i.prototype.update=function(e,t){if(e===void 0&&(e=ir()),t===void 0&&(t=!0),this._isPaused)return!0;var n,r,s=this._startTime+this._duration;if(!this._goToEnd&&!this._isPlaying){if(e>s)return!1;t&&this.start(e)}if(this._goToEnd=!1,e<this._startTime)return!0;this._onStartCallbackFired===!1&&(this._onStartCallback&&this._onStartCallback(this._object),this._onStartCallbackFired=!0),r=(e-this._startTime)/this._duration,r=this._duration===0||r>1?1:r;var o=this._easingFunction(r);if(this._updateProperties(this._object,this._valuesStart,this._valuesEnd,o),this._onUpdateCallback&&this._onUpdateCallback(this._object,r),r===1)if(this._repeat>0){isFinite(this._repeat)&&this._repeat--;for(n in this._valuesStartRepeat)!this._yoyo&&typeof this._valuesEnd[n]=="string"&&(this._valuesStartRepeat[n]=this._valuesStartRepeat[n]+parseFloat(this._valuesEnd[n])),this._yoyo&&this._swapEndStartRepeatValues(n),this._valuesStart[n]=this._valuesStartRepeat[n];return this._yoyo&&(this._reversed=!this._reversed),this._repeatDelayTime!==void 0?this._startTime=e+this._repeatDelayTime:this._startTime=e+this._delayTime,this._onRepeatCallback&&this._onRepeatCallback(this._object),!0}else{this._onCompleteCallback&&this._onCompleteCallback(this._object);for(var a=0,l=this._chainedTweens.length;a<l;a++)this._chainedTweens[a].start(this._startTime+this._duration);return this._isPlaying=!1,!1}return!0},i.prototype._updateProperties=function(e,t,n,r){for(var s in n)if(t[s]!==void 0){var o=t[s]||0,a=n[s],l=Array.isArray(e[s]),c=Array.isArray(a),u=!l&&c;u?e[s]=this._interpolationFunction(a,r):typeof a=="object"&&a?this._updateProperties(e[s],o,a,r):(a=this._handleRelativeValue(o,a),typeof a=="number"&&(e[s]=o+(a-o)*r))}},i.prototype._handleRelativeValue=function(e,t){return typeof t!="string"?t:t.charAt(0)==="+"||t.charAt(0)==="-"?e+parseFloat(t):parseFloat(t)},i.prototype._swapEndStartRepeatValues=function(e){var t=this._valuesStartRepeat[e],n=this._valuesEnd[e];typeof n=="string"?this._valuesStartRepeat[e]=this._valuesStartRepeat[e]+parseFloat(n):this._valuesStartRepeat[e]=this._valuesEnd[e],this._valuesEnd[e]=t},i}(),Cn=hp;Cn.getAll.bind(Cn);Cn.removeAll.bind(Cn);Cn.add.bind(Cn);Cn.remove.bind(Cn);Cn.update.bind(Cn);const Bt={mesh:"#1B3045",head:"#ffffff",surroundLineColor:"#4f90bb",risingColor:"#5588aa",liveColor:"#ffffff",radarColor:"#ff8800",wallColor:"#fab73f",circleColor:"#00bbff",coneColor:"#ffff00",flyColor:"#00bbff",sparklesColor:[13758190,15263976,12374766,9498256,11592447,13296127,16759807,15794175,16777200,16758213,16775885,16767673,16774638,16119260,16777184,14745599]};class u1{constructor(e,t,n,r){this.height=n,this.time=r,this.scene=e,this.child=t,this.createMesh(),this.createLine()}createMesh(){this.child.geometry.computeBoundingBox(),this.child.geometry.computeBoundingSphere();const{max:e,min:t}=this.child.geometry.boundingBox,n=e.z-t.z,r=new Lt({uniforms:{u_city_color:{value:new Re(Bt.mesh)},u_head_color:{value:new Re(Bt.head)},u_size:{value:n},u_rising_height:this.height,u_rising_color:{value:new Re(Bt.risingColor)},u_time:this.time},vertexShader:`
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
      `}),s=new pt(this.child.geometry,r);s.position.copy(this.child.position),s.rotation.copy(this.child.rotation),s.scale.copy(this.child.scale),this.scene.add(s)}createLine(){const e=new Lw(this.child.geometry),{max:t,min:n}=this.child.geometry.boundingBox,r=new Lt({uniforms:{line_color:{value:new Re(Bt.surroundLineColor)},u_time:this.time,u_max:{value:t},u_min:{value:n},live_color:{value:new Re(Bt.liveColor)}},vertexShader:`
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
      `}),s=new vw(e,r);s.scale.copy(this.child.scale),s.rotation.copy(this.child.rotation),s.position.copy(this.child.position),this.scene.add(s)}}class h1{constructor(e){this.scene=e,this.url="/src/assets/black-bg.png",this.init()}init(){const e=new gc,t=new Cr(5e3,32,32),n=new Ss({side:qt,map:e.load(this.url)}),r=new pt(t,n);r.position.set(0,0,0),this.scene.add(r)}}class f1{constructor(e,t){this.scene=e,this.time=t,this.init()}init(){const t=new Wo(100,100,1,1),n=new Lt({uniforms:{u_color:{value:new Re(Bt.radarColor)},u_radius:{value:50},u_time:this.time},transparent:!0,side:qt,vertexShader:`
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
      `}),r=new pt(t,n);r.position.set(300,10,0),r.rotateX(-Math.PI/2),this.scene.add(r)}}class fp{constructor(e,t){this.scene=e,this.time=t}createCylinder(e){const t=new jo(e.radius,e.radius,e.height,32,1,e.open);t.translate(0,e.height/2,0);const n=new Lt({uniforms:{u_time:this.time,u_color:{value:new Re(e.color)},u_height:{value:e.height},u_opacity:{value:e.opacity},u_speed:{value:e.speed}},transparent:!0,side:qt,depthTest:!1,vertexShader:`
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
      `}),r=new pt(t,n);r.position.copy(e.position),this.scene.add(r)}}class d1{constructor(e,t){new fp(e,t).createCylinder({radius:50,height:50,opacity:.6,speed:2,open:!0,color:Bt.wallColor,position:{x:0,y:0,z:0}})}}class p1{constructor(e,t){new fp(e,t).createCylinder({radius:50,height:1,opacity:.6,speed:1,open:!1,color:Bt.circleColor,position:{x:300,y:0,z:300}})}}class m1{constructor(e,t){this.scene=e,this.time=t,this.init({color:Bt.wallColor,height:60,opacity:.6,speed:4,position:{x:300,y:0,z:-200}})}init(e){const t=new Cr(50,32,32,Math.PI/2,Math.PI*2,0,Math.PI/2),n=new Lt({uniforms:{u_time:this.time,u_color:{value:new Re(e.color)},u_height:{value:e.height},u_opacity:{value:e.opacity},u_speed:{value:e.speed}},transparent:!0,side:qt,depthTest:!1,vertexShader:`
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
      `}),r=new pt(t,n);r.position.copy(e.position),this.scene.add(r)}}class g1{constructor(e,t,n){this.scene=e,this.top=t,this.height=n,this.init({color:Bt.coneColor,height:60,speed:4,position:{x:0,y:50,z:0}})}init(e){const t=new pc(15,30,4),n=new Lt({uniforms:{u_color:{value:new Re(e.color)},u_height:this.height,u_top:this.top},transparent:!0,side:qt,depthTest:!1,vertexShader:`
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
      `}),r=new pt(t,n);r.position.copy(e.position),r.rotateZ(Math.PI),this.scene.add(r)}}class _1{constructor(e,t){this.scene=e,this.time=t,this.init({source:{x:300,y:0,z:-200},target:{x:-500,y:0,z:-240},range:200,height:300,color:Bt.flyColor,size:30})}init(e){const t=new D(e.source.x,e.source.y,e.source.z),n=new D(e.target.x,e.target.y,e.target.z),r=n.clone().lerp(t,.5);r.y+=e.height;const s=parseInt(t.distanceTo(n)),a=new Gd(t,r,n).getPoints(s),l=[],c=[];a.forEach((d,g)=>{l.push(d.x,d.y,d.z),c.push(g)});const u=new mt;u.setAttribute("position",new tt(l,3)),u.setAttribute("a_position",new tt(c,1));const h=new Lt({uniforms:{u_color:{value:new Re(e.color)},u_range:{value:e.range},u_size:{value:e.size},u_total:{value:s},u_time:this.time},vertexShader:`
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
      `,transparent:!0}),f=new uc(u,h);this.scene.add(f)}}class v1{constructor(e,t){this.scene=e,this.time=t,this.init({range:200,height:300,color:Bt.flyColor,size:30})}init(e){const r=new Bd([new D(-320,0,160),new D(-150,0,-40),new D(-10,0,-35),new D(40,0,40),new D(30,0,150),new D(-100,0,310)]).getPoints(400),s=[],o=[];r.forEach((u,h)=>{s.push(u.x,u.y,u.z),o.push(h)});const a=new mt;a.setAttribute("position",new tt(s,3)),a.setAttribute("a_position",new tt(o,1));const l=new Lt({uniforms:{u_color:{value:new Re(e.color)},u_range:{value:e.range},u_size:{value:e.size},u_total:{value:400},u_time:this.time},vertexShader:`
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
      `,transparent:!0}),c=new uc(a,l);this.scene.add(c)}}class x1 extends Es{constructor(e){super(e)}load(e,t,n,r){const s=this,o=new Zd(this.manager);o.setPath(this.path),o.setRequestHeader(this.requestHeader),o.setWithCredentials(this.withCredentials),o.load(e,function(a){const l=s.parse(JSON.parse(a));t&&t(l)},n,r)}parse(e){return new y1(e)}}class y1{constructor(e){this.isFont=!0,this.type="Font",this.data=e}generateShapes(e,t=100){const n=[],r=M1(e,t,this.data);for(let s=0,o=r.length;s<o;s++)n.push(...r[s].toShapes());return n}}function M1(i,e,t){const n=Array.from(i),r=e/t.resolution,s=(t.boundingBox.yMax-t.boundingBox.yMin+t.underlineThickness)*r,o=[];let a=0,l=0;for(let c=0;c<n.length;c++){const u=n[c];if(u===`
`)a=0,l-=s;else{const h=b1(u,r,a,l,t);a+=h.offsetX,o.push(h.path)}}return o}function b1(i,e,t,n,r){const s=r.glyphs[i]||r.glyphs["?"];if(!s){console.error('THREE.Font: character "'+i+'" does not exists in font family '+r.familyName+".");return}const o=new TS;let a,l,c,u,h,f,d,g;if(s.o){const p=s._cachedOutline||(s._cachedOutline=s.o.split(" "));for(let m=0,_=p.length;m<_;)switch(p[m++]){case"m":a=p[m++]*e+t,l=p[m++]*e+n,o.moveTo(a,l);break;case"l":a=p[m++]*e+t,l=p[m++]*e+n,o.lineTo(a,l);break;case"q":c=p[m++]*e+t,u=p[m++]*e+n,h=p[m++]*e+t,f=p[m++]*e+n,o.quadraticCurveTo(h,f,c,u);break;case"b":c=p[m++]*e+t,u=p[m++]*e+n,h=p[m++]*e+t,f=p[m++]*e+n,d=p[m++]*e+t,g=p[m++]*e+n,o.bezierCurveTo(h,f,d,g,c,u);break}}return{offsetX:s.ha*e,path:o}}class w1 extends mc{constructor(e,t={}){const n=t.font;if(n===void 0)super();else{const r=n.generateShapes(e,t.size);t.depth=t.height!==void 0?t.height:50,t.bevelThickness===void 0&&(t.bevelThickness=10),t.bevelSize===void 0&&(t.bevelSize=8),t.bevelEnabled===void 0&&(t.bevelEnabled=!1),super(r,t)}this.type="TextGeometry"}}class S1{constructor(e){this.scene=e,this.font=null,this.init()}init(){new x1().load("/STXinwei_Regular.json",t=>{this.font=t,this.createTextQueue()})}createTextQueue(){[{text:"最高楼",size:20,position:{x:-20,y:130,z:410},rotate:Math.PI/1.3,color:"#ffffff"},{text:"第二高楼",size:20,position:{x:180,y:110,z:-70},rotate:Math.PI/2,color:"#ffffff"}].forEach(e=>{this.createText(e)})}createText(e){const t=new w1(e.text,{font:this.font,size:e.size,height:2}),n=new Lt({uniforms:{u_color:{value:new Re(e.color)}},vertexShader:`
        void main() {
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,fragmentShader:`
        uniform vec3 u_color;

        void main() {
          gl_FragColor = vec4(u_color, 1.0);
        }
      `}),r=new pt(t,n);r.position.copy(e.position),r.rotateY(e.rotate),this.scene.add(r)}}class T1{constructor(e,{position:t,direction:n}){this.scene=e,this.position=t,this.direction=n,this.points=[],this.mesh=null,this.init()}init(){const e=new Ud({size:30,map:new gc().load("/src/assets/smoke.png"),transparent:!0,opacity:.5,depthTest:!1}),t=new mt;for(let n=0;n<500;n++){const r=new D(this.position.x,this.position.y,this.position.z);r.speedX=Math.random()*this.direction.x,r.speedY=Math.random()*5,r.speedZ=Math.random()*this.direction.y,this.points.push(r)}t.setFromPoints(this.points),this.mesh=new uc(t,e),this.scene.add(this.mesh)}animation(){this.points.forEach(e=>{e.x+=e.speedX,e.y+=e.speedY,e.z+=e.speedZ,e.y>=this.position.y+200&&e.copy(this.position),this.mesh.geometry.setFromPoints(this.points)})}}class E1{constructor(e,t,n){this.scene=e,this.x=t.x,this.y=t.y,this.z=t.z,this.vx=t.vx,this.vy=t.vy,this.vz=t.vz,this.sparks=n,this.life=100,this.mesh=null,this.init()}init(){const e=Math.floor(Math.random()*Bt.sparklesColor.length),t=new Cr(3,8,8,0,Math.PI*2,0,Math.PI*2),n=new Ss({color:Bt.sparklesColor[e]});this.mesh=new pt(t,n),this.scene.add(this.mesh)}animation(){this.x+=this.vx,this.y+=this.vy,this.z+=this.vz,this.mesh.position.copy({x:this.x,y:this.y,z:this.z}),this.vy-=.05,this.vx*=.95,this.vy*=.95,this.vz*=.95,this.life--,this.life<10&&(this.scene.remove(this.mesh),this.sparks.splice(this.sparks.indexOf(this),1))}}class A1{constructor(e,t,n,r,s){this.scene=e,this.position=t,this.vy=n,this.fires=r,this.sparks=s,this.mesh=null,this.init()}init(){const e=new Cr(5,8,8,0,Math.PI*2,0,Math.PI*2),t=new Ss({color:16777215});this.mesh=new pt(e,t),this.scene.add(this.mesh)}animation(){if(this.position.y+=this.vy,this.vy-=.1,this.mesh.position.copy(this.position),this.vy<1){this.scene.remove(this.mesh),this.fires.splice(this.fires.indexOf(this),1);const e=Math.random()*5+5;for(let t=0;t<60;t++){const n=Math.random()*e,r=Math.cos(t*Math.PI/30)*n,s=(Math.random()*2-1)*n,o=Math.sin(t*Math.PI/30)*n;this.sparks.push(new E1(this.scene,{...this.position,vx:r,vy:s,vz:o},this.sparks))}}}}class C1{constructor(e,t,n){this.tweenPosition=null,this.tweenRotation=null,this.camera=t,this.scene=e,this.controls=n,this.risingHeight={value:0},this.time={value:0},this.coneTop={value:0},this.coneSpeed=.8,this.effects={},this.smoke=null,this.fires=[],this.sparks=[],this.countUp=0,this.firesCount=10,this.loadCity()}loadCity(){a1("/src/model/beijing.fbx").then(e=>{e.traverse(t=>{t.isMesh&&new u1(this.scene,t,this.risingHeight,this.time)}),this.initEffect()})}initEffect(){new h1(this.scene),new f1(this.scene,this.time),new d1(this.scene,this.time),new p1(this.scene,this.time),new m1(this.scene,this.time),new g1(this.scene,this.coneTop,this.risingHeight),new _1(this.scene,this.time),new v1(this.scene,this.time),new S1(this.scene),this.smoke=new T1(this.scene,{position:{x:-20,y:50,z:360},direction:{x:1.3,y:-.7}}),this.addMouseClick(),this.addMouseWheel()}addMouseWheel(){const e=document.body;e.onwheel=t=>{const n=t.clientX/window.innerWidth*2-1,r=-(t.clientY/window.innerHeight*2-1),s=new D(n,r,.5);s.unproject(this.camera),s.sub(this.camera.position).normalize();const o=30,a=t.wheelDelta/Math.abs(t.wheelDelta);this.camera.position.x+=s.x*a*o,this.camera.position.y+=s.y*a*o,this.camera.position.z+=s.z*a*o,this.controls.target.x+=s.x*a*o,this.controls.target.y+=s.y*a*o,this.controls.target.z+=s.z*a*o}}addMouseClick(){let e=!0;document.onmousedown=()=>{e=!0,document.onmousemove=()=>{e=!1}},document.onmouseup=t=>{e&&this.click(t),document.onmousemove=null}}click(e){let t=null;const n=e.clientX/window.innerWidth*2-1,r=-(e.clientY/window.innerHeight*2-1),a=new D(n,r,.5).unproject(this.camera).sub(this.camera.position).normalize(),c=new SS(this.camera.position,a).intersectObjects(this.scene.children,!0);c.length&&(t=c[0]),t&&(this.tweenPosition=new tf(this.camera.position).to({x:t.point.x*3,y:t.point.y*3,z:t.point.z*3},1e3).start(),this.tweenRotation=new tf(this.camera.rotation).to({x:this.camera.rotation.x,y:this.camera.rotation.y,z:this.camera.rotation.z},1e3).start())}start(e){for(const t in this.effects)Object.hasOwnProperty.call(this.effects,t)&&this.effects[t].pointInstance.animation();this.smoke&&this.smoke.animation(),this.countUp<60?this.countUp++:(this.fires.push(new A1(this.scene,{x:(Math.random()*2-1)*400,y:0,z:(Math.random()*2-1)*200},Math.random()*2+9,this.fires,this.sparks)),this.countUp=0);for(const t of this.fires)t.animation();for(const t of this.sparks)t.animation();this.tweenPosition&&this.tweenRotation&&(this.tweenPosition.update(),this.tweenRotation.update()),this.time.value+=e,this.risingHeight.value+=.4,this.risingHeight.value>160&&(this.risingHeight.value=0),this.coneTop.value+=this.coneSpeed,(this.coneTop.value>15||this.coneTop.value<0)&&(this.coneSpeed=-1*this.coneSpeed)}}const nf={type:"change"},tl={type:"start"},rf={type:"end"};class P1 extends Ni{constructor(e,t){super(),this.object=e,this.domElement=t,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new D,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Ui.ROTATE,MIDDLE:Ui.DOLLY,RIGHT:Ui.PAN},this.touches={ONE:Bi.ROTATE,TWO:Bi.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return a.phi},this.getAzimuthalAngle=function(){return a.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(L){L.addEventListener("keydown",ne),this._domElementKeyEvents=L},this.saveState=function(){n.target0.copy(n.target),n.position0.copy(n.object.position),n.zoom0=n.object.zoom},this.reset=function(){n.target.copy(n.target0),n.object.position.copy(n.position0),n.object.zoom=n.zoom0,n.object.updateProjectionMatrix(),n.dispatchEvent(nf),n.update(),s=r.NONE},this.update=function(){const L=new D,H=new sn().setFromUnitVectors(e.up,new D(0,1,0)),we=H.clone().invert(),Ae=new D,Te=new sn,Pe=2*Math.PI;return function(){const Fe=n.object.position;L.copy(Fe).sub(n.target),L.applyQuaternion(H),a.setFromVector3(L),n.autoRotate&&s===r.NONE&&A(I()),n.enableDamping?(a.theta+=l.theta*n.dampingFactor,a.phi+=l.phi*n.dampingFactor):(a.theta+=l.theta,a.phi+=l.phi);let ke=n.minAzimuthAngle,et=n.maxAzimuthAngle;return isFinite(ke)&&isFinite(et)&&(ke<-Math.PI?ke+=Pe:ke>Math.PI&&(ke-=Pe),et<-Math.PI?et+=Pe:et>Math.PI&&(et-=Pe),ke<=et?a.theta=Math.max(ke,Math.min(et,a.theta)):a.theta=a.theta>(ke+et)/2?Math.max(ke,a.theta):Math.min(et,a.theta)),a.phi=Math.max(n.minPolarAngle,Math.min(n.maxPolarAngle,a.phi)),a.makeSafe(),a.radius*=c,a.radius=Math.max(n.minDistance,Math.min(n.maxDistance,a.radius)),n.enableDamping===!0?n.target.addScaledVector(u,n.dampingFactor):n.target.add(u),L.setFromSpherical(a),L.applyQuaternion(we),Fe.copy(n.target).add(L),n.object.lookAt(n.target),n.enableDamping===!0?(l.theta*=1-n.dampingFactor,l.phi*=1-n.dampingFactor,u.multiplyScalar(1-n.dampingFactor)):(l.set(0,0,0),u.set(0,0,0)),c=1,h||Ae.distanceToSquared(n.object.position)>o||8*(1-Te.dot(n.object.quaternion))>o?(n.dispatchEvent(nf),Ae.copy(n.object.position),Te.copy(n.object.quaternion),h=!1,!0):!1}}(),this.dispose=function(){n.domElement.removeEventListener("contextmenu",U),n.domElement.removeEventListener("pointerdown",F),n.domElement.removeEventListener("pointercancel",te),n.domElement.removeEventListener("wheel",he),n.domElement.removeEventListener("pointermove",G),n.domElement.removeEventListener("pointerup",k),n._domElementKeyEvents!==null&&n._domElementKeyEvents.removeEventListener("keydown",ne)};const n=this,r={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let s=r.NONE;const o=1e-6,a=new Kh,l=new Kh;let c=1;const u=new D;let h=!1;const f=new ye,d=new ye,g=new ye,p=new ye,m=new ye,_=new ye,b=new ye,v=new ye,w=new ye,S=[],P={};function I(){return 2*Math.PI/60/60*n.autoRotateSpeed}function x(){return Math.pow(.95,n.zoomSpeed)}function A(L){l.theta-=L}function R(L){l.phi-=L}const j=function(){const L=new D;return function(we,Ae){L.setFromMatrixColumn(Ae,0),L.multiplyScalar(-we),u.add(L)}}(),Q=function(){const L=new D;return function(we,Ae){n.screenSpacePanning===!0?L.setFromMatrixColumn(Ae,1):(L.setFromMatrixColumn(Ae,0),L.crossVectors(n.object.up,L)),L.multiplyScalar(we),u.add(L)}}(),B=function(){const L=new D;return function(we,Ae){const Te=n.domElement;if(n.object.isPerspectiveCamera){const Pe=n.object.position;L.copy(Pe).sub(n.target);let Ee=L.length();Ee*=Math.tan(n.object.fov/2*Math.PI/180),j(2*we*Ee/Te.clientHeight,n.object.matrix),Q(2*Ae*Ee/Te.clientHeight,n.object.matrix)}else n.object.isOrthographicCamera?(j(we*(n.object.right-n.object.left)/n.object.zoom/Te.clientWidth,n.object.matrix),Q(Ae*(n.object.top-n.object.bottom)/n.object.zoom/Te.clientHeight,n.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),n.enablePan=!1)}}();function N(L){n.object.isPerspectiveCamera?c/=L:n.object.isOrthographicCamera?(n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom*L)),n.object.updateProjectionMatrix(),h=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function J(L){n.object.isPerspectiveCamera?c*=L:n.object.isOrthographicCamera?(n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/L)),n.object.updateProjectionMatrix(),h=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function K(L){f.set(L.clientX,L.clientY)}function ie(L){b.set(L.clientX,L.clientY)}function Y(L){p.set(L.clientX,L.clientY)}function fe(L){d.set(L.clientX,L.clientY),g.subVectors(d,f).multiplyScalar(n.rotateSpeed);const H=n.domElement;A(2*Math.PI*g.x/H.clientHeight),R(2*Math.PI*g.y/H.clientHeight),f.copy(d),n.update()}function de(L){v.set(L.clientX,L.clientY),w.subVectors(v,b),w.y>0?N(x()):w.y<0&&J(x()),b.copy(v),n.update()}function xe(L){m.set(L.clientX,L.clientY),_.subVectors(m,p).multiplyScalar(n.panSpeed),B(_.x,_.y),p.copy(m),n.update()}function W(L){L.deltaY<0?J(x()):L.deltaY>0&&N(x()),n.update()}function oe(L){let H=!1;switch(L.code){case n.keys.UP:L.ctrlKey||L.metaKey||L.shiftKey?R(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):B(0,n.keyPanSpeed),H=!0;break;case n.keys.BOTTOM:L.ctrlKey||L.metaKey||L.shiftKey?R(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):B(0,-n.keyPanSpeed),H=!0;break;case n.keys.LEFT:L.ctrlKey||L.metaKey||L.shiftKey?A(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):B(n.keyPanSpeed,0),H=!0;break;case n.keys.RIGHT:L.ctrlKey||L.metaKey||L.shiftKey?A(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):B(-n.keyPanSpeed,0),H=!0;break}H&&(L.preventDefault(),n.update())}function ve(){if(S.length===1)f.set(S[0].pageX,S[0].pageY);else{const L=.5*(S[0].pageX+S[1].pageX),H=.5*(S[0].pageY+S[1].pageY);f.set(L,H)}}function z(){if(S.length===1)p.set(S[0].pageX,S[0].pageY);else{const L=.5*(S[0].pageX+S[1].pageX),H=.5*(S[0].pageY+S[1].pageY);p.set(L,H)}}function O(){const L=S[0].pageX-S[1].pageX,H=S[0].pageY-S[1].pageY,we=Math.sqrt(L*L+H*H);b.set(0,we)}function ee(){n.enableZoom&&O(),n.enablePan&&z()}function ce(){n.enableZoom&&O(),n.enableRotate&&ve()}function ge(L){if(S.length==1)d.set(L.pageX,L.pageY);else{const we=be(L),Ae=.5*(L.pageX+we.x),Te=.5*(L.pageY+we.y);d.set(Ae,Te)}g.subVectors(d,f).multiplyScalar(n.rotateSpeed);const H=n.domElement;A(2*Math.PI*g.x/H.clientHeight),R(2*Math.PI*g.y/H.clientHeight),f.copy(d)}function pe(L){if(S.length===1)m.set(L.pageX,L.pageY);else{const H=be(L),we=.5*(L.pageX+H.x),Ae=.5*(L.pageY+H.y);m.set(we,Ae)}_.subVectors(m,p).multiplyScalar(n.panSpeed),B(_.x,_.y),p.copy(m)}function Me(L){const H=be(L),we=L.pageX-H.x,Ae=L.pageY-H.y,Te=Math.sqrt(we*we+Ae*Ae);v.set(0,Te),w.set(0,Math.pow(v.y/b.y,n.zoomSpeed)),N(w.y),b.copy(v)}function y(L){n.enableZoom&&Me(L),n.enablePan&&pe(L)}function T(L){n.enableZoom&&Me(L),n.enableRotate&&ge(L)}function F(L){n.enabled!==!1&&(S.length===0&&(n.domElement.setPointerCapture(L.pointerId),n.domElement.addEventListener("pointermove",G),n.domElement.addEventListener("pointerup",k)),Z(L),L.pointerType==="touch"?E(L):re(L))}function G(L){n.enabled!==!1&&(L.pointerType==="touch"?M(L):$(L))}function k(L){se(L),S.length===0&&(n.domElement.releasePointerCapture(L.pointerId),n.domElement.removeEventListener("pointermove",G),n.domElement.removeEventListener("pointerup",k)),n.dispatchEvent(rf),s=r.NONE}function te(L){se(L)}function re(L){let H;switch(L.button){case 0:H=n.mouseButtons.LEFT;break;case 1:H=n.mouseButtons.MIDDLE;break;case 2:H=n.mouseButtons.RIGHT;break;default:H=-1}switch(H){case Ui.DOLLY:if(n.enableZoom===!1)return;ie(L),s=r.DOLLY;break;case Ui.ROTATE:if(L.ctrlKey||L.metaKey||L.shiftKey){if(n.enablePan===!1)return;Y(L),s=r.PAN}else{if(n.enableRotate===!1)return;K(L),s=r.ROTATE}break;case Ui.PAN:if(L.ctrlKey||L.metaKey||L.shiftKey){if(n.enableRotate===!1)return;K(L),s=r.ROTATE}else{if(n.enablePan===!1)return;Y(L),s=r.PAN}break;default:s=r.NONE}s!==r.NONE&&n.dispatchEvent(tl)}function $(L){switch(s){case r.ROTATE:if(n.enableRotate===!1)return;fe(L);break;case r.DOLLY:if(n.enableZoom===!1)return;de(L);break;case r.PAN:if(n.enablePan===!1)return;xe(L);break}}function he(L){n.enabled===!1||n.enableZoom===!1||s!==r.NONE||(L.preventDefault(),n.dispatchEvent(tl),W(L),n.dispatchEvent(rf))}function ne(L){n.enabled===!1||n.enablePan===!1||oe(L)}function E(L){switch(me(L),S.length){case 1:switch(n.touches.ONE){case Bi.ROTATE:if(n.enableRotate===!1)return;ve(),s=r.TOUCH_ROTATE;break;case Bi.PAN:if(n.enablePan===!1)return;z(),s=r.TOUCH_PAN;break;default:s=r.NONE}break;case 2:switch(n.touches.TWO){case Bi.DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;ee(),s=r.TOUCH_DOLLY_PAN;break;case Bi.DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;ce(),s=r.TOUCH_DOLLY_ROTATE;break;default:s=r.NONE}break;default:s=r.NONE}s!==r.NONE&&n.dispatchEvent(tl)}function M(L){switch(me(L),s){case r.TOUCH_ROTATE:if(n.enableRotate===!1)return;ge(L),n.update();break;case r.TOUCH_PAN:if(n.enablePan===!1)return;pe(L),n.update();break;case r.TOUCH_DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;y(L),n.update();break;case r.TOUCH_DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;T(L),n.update();break;default:s=r.NONE}}function U(L){n.enabled!==!1&&L.preventDefault()}function Z(L){S.push(L)}function se(L){delete P[L.pointerId];for(let H=0;H<S.length;H++)if(S[H].pointerId==L.pointerId){S.splice(H,1);return}}function me(L){let H=P[L.pointerId];H===void 0&&(H=new ye,P[L.pointerId]=H),H.set(L.pageX,L.pageY)}function be(L){const H=L.pointerId===S[0].pointerId?S[1]:S[0];return P[H.pointerId]}n.domElement.addEventListener("contextmenu",U),n.domElement.addEventListener("pointerdown",F),n.domElement.addEventListener("pointercancel",te),n.domElement.addEventListener("wheel",he,{passive:!1}),this.update()}}const L1=()=>{const i=document.getElementById("webgl"),e=new dw,t=new Ot(60,window.innerWidth/window.innerHeight,1,1e5);t.position.set(800,500,-800),e.add(t);const n=new P1(t,i);n.enableDamping=!0,n.enableZoom=!1,n.minDistance=100,n.maxDistance=2e3,n.target.set(0,300,0),e.add(new Qd(11382189));const r=new Jd(16777215);r.position.set(0,0,0),e.add(r);const s=new Od({canvas:i});s.setSize(window.innerWidth,window.innerHeight),s.setPixelRatio(Math.min(window.devicePixelRatio,2)),s.setClearColor(new Re(0),1);const o=new C1(e,t,n),a=new pS,l=()=>{o.start(a.getDelta()),n.update(),s.render(e,t),requestAnimationFrame(l)};l(),window.addEventListener("resize",()=>{t.aspect=window.innerWidth/window.innerHeight,t.updateProjectionMatrix(),s.setSize(window.innerWidth,window.innerHeight),s.setPixelRatio(Math.min(window.devicePixelRatio,2))})},R1={data(){return{}},mounted(){L1()}},D1={id:"webgl"};function I1(i,e,t,n,r,s){return Kf(),hg("canvas",D1," 浏览器不支持canvas，请切换浏览器重试 ")}const F1=id(R1,[["render",I1]]),O1=i0({history:x_(),routes:[{path:"/",component:F1}]}),dp=Kg(e_);dp.use(O1);dp.mount("#app");
