import{V as y,h as g,W as x,X as A,Y as b,i as q,Z as S,$ as T,a0 as N,a1 as O,a2 as B,Q as k,l as E,s as C,a3 as L,m as I,n as M,a4 as P,r as j,a5 as H,a6 as U,T as V}from"./entry.9079e15b.js";const z=()=>null;function F(...n){var d;const a=typeof n[n.length-1]=="string"?n.pop():void 0;typeof n[0]!="string"&&n.unshift(a);let[e,l,r={}]=n;if(typeof e!="string")throw new TypeError("[nuxt] [asyncData] key must be a string.");if(typeof l!="function")throw new TypeError("[nuxt] [asyncData] handler must be a function.");r.server=r.server??!0,r.default=r.default??z,r.lazy=r.lazy??!1,r.immediate=r.immediate??!0;const t=y(),c=()=>t.isHydrating?t.payload.data[e]:t.static.data[e],u=()=>c()!==void 0;t._asyncData[e]||(t._asyncData[e]={data:g(c()??((d=r.default)==null?void 0:d.call(r))??null),pending:g(!u()),error:g(t.payload._errors[e]?x(t.payload._errors[e]):null)});const o={...t._asyncData[e]};o.refresh=o.execute=(i={})=>{if(t._asyncDataPromises[e]){if(i.dedupe===!1)return t._asyncDataPromises[e];t._asyncDataPromises[e].cancelled=!0}if(i._initial&&u())return c();o.pending.value=!0;const v=new Promise((s,p)=>{try{s(l(t))}catch(R){p(R)}}).then(s=>{if(v.cancelled)return t._asyncDataPromises[e];r.transform&&(s=r.transform(s)),r.pick&&(s=$(s,r.pick)),o.data.value=s,o.error.value=null}).catch(s=>{var p;if(v.cancelled)return t._asyncDataPromises[e];o.error.value=s,o.data.value=S(((p=r.default)==null?void 0:p.call(r))??null)}).finally(()=>{v.cancelled||(o.pending.value=!1,t.payload.data[e]=o.data.value,o.error.value&&(t.payload._errors[e]=x(o.error.value)),delete t._asyncDataPromises[e])});return t._asyncDataPromises[e]=v,t._asyncDataPromises[e]};const f=()=>o.refresh({_initial:!0}),m=r.server!==!1&&t.payload.serverRendered;{const i=T();if(i&&!i._nuxtOnBeforeMountCbs){i._nuxtOnBeforeMountCbs=[];const s=i._nuxtOnBeforeMountCbs;i&&(A(()=>{s.forEach(p=>{p()}),s.splice(0,s.length)}),b(()=>s.splice(0,s.length)))}m&&t.isHydrating&&u()?o.pending.value=!1:i&&(t.payload.serverRendered&&t.isHydrating||r.lazy)&&r.immediate?i._nuxtOnBeforeMountCbs.push(f):r.immediate&&f(),r.watch&&q(r.watch,()=>o.refresh());const v=t.hook("app:data:refresh",s=>{if(!s||s.includes(e))return o.refresh()});i&&b(v)}const h=Promise.resolve(t._asyncDataPromises[e]).then(()=>o);return Object.assign(h,o),h}function $(n,a){const e={};for(const l of a)e[l]=n[l];return e}function K(n,a){return y()._useHead(n,a)}const D="__nuxt_component";async function Q(n,a){const e=y(),l=N(),r=T(),{fetchKey:t}=r.proxy.$options,c=typeof t=="function"?t(()=>""):t||l.fullPath,{data:u}=await F(`options:asyncdata:${c}`,()=>a(e));u.value&&typeof u.value=="object"&&Object.assign(await n,O(B(u.value)))}const ae=function(a){const{setup:e}=a;return!e&&!a.asyncData&&!a.head?{[D]:!0,...a}:{[D]:!0,...a,setup(l,r){const t=(e==null?void 0:e(l,r))||{},c=[];if(a.asyncData&&c.push(Q(t,a.asyncData)),a.head){const u=y();K(typeof a.head=="function"?()=>a.head(u):a.head)}return Promise.resolve(t).then(()=>Promise.all(c)).then(()=>t).finally(()=>{c.length=0})}}},_=globalThis.requestIdleCallback||(n=>{const a=Date.now(),e={didTimeout:!1,timeRemaining:()=>Math.max(0,50-(Date.now()-a))};return setTimeout(()=>{n(e)},1)}),W=globalThis.cancelIdleCallback||(n=>{clearTimeout(n)}),X=n=>{const a=y();a.isHydrating?a.hooks.hookOnce("app:suspense:resolve",()=>{_(n)}):_(n)};async function w(n,a=k()){if(a._routePreloaded||(a._routePreloaded=new Set),a._routePreloaded.has(n))return;const e=a._preloadPromises=a._preloadPromises||[];if(e.length>4)return Promise.all(e).then(()=>w(n,a));a._routePreloaded.add(n);const l=a.resolve(n).matched.map(r=>{var t;return(t=r.components)==null?void 0:t.default}).filter(r=>typeof r=="function");for(const r of l){const t=Promise.resolve(r()).catch(()=>{}).finally(()=>e.splice(e.indexOf(t)));e.push(t)}await Promise.all(e)}const Y=(...n)=>n.find(a=>a!==void 0),Z="noopener noreferrer";function G(n){const a=n.componentName||"NuxtLink";return E({name:a,props:{to:{type:[String,Object],default:void 0,required:!1},href:{type:[String,Object],default:void 0,required:!1},target:{type:String,default:void 0,required:!1},rel:{type:String,default:void 0,required:!1},noRel:{type:Boolean,default:void 0,required:!1},prefetch:{type:Boolean,default:void 0,required:!1},noPrefetch:{type:Boolean,default:void 0,required:!1},activeClass:{type:String,default:void 0,required:!1},exactActiveClass:{type:String,default:void 0,required:!1},prefetchedClass:{type:String,default:void 0,required:!1},replace:{type:Boolean,default:void 0,required:!1},ariaCurrentValue:{type:String,default:void 0,required:!1},external:{type:Boolean,default:void 0,required:!1},custom:{type:Boolean,default:void 0,required:!1}},setup(e,{slots:l}){const r=k(),t=C(()=>e.to||e.href||""),c=C(()=>e.external||e.target&&e.target!=="_self"?!0:typeof t.value=="object"?!1:t.value===""||L(t.value,!0)),u=g(!1),o=g(null);if(e.prefetch!==!1&&e.noPrefetch!==!0&&e.target!=="_blank"&&!ee()){const m=y();let h,d=null;I(()=>{const i=J();X(()=>{h=_(()=>{var v;(v=o==null?void 0:o.value)!=null&&v.tagName&&(d=i.observe(o.value,async()=>{d==null||d(),d=null;const s=typeof t.value=="string"?t.value:r.resolve(t.value).fullPath;await Promise.all([m.hooks.callHook("link:prefetch",s).catch(()=>{}),!c.value&&w(t.value,r).catch(()=>{})]),u.value=!0}))})})}),M(()=>{h&&W(h),d==null||d(),d=null})}return()=>{var i,v;if(!c.value)return P(j("RouterLink"),{ref:s=>{o.value=s==null?void 0:s.$el},to:t.value,...u.value&&!e.custom?{class:e.prefetchedClass||n.prefetchedClass}:{},activeClass:e.activeClass||n.activeClass,exactActiveClass:e.exactActiveClass||n.exactActiveClass,replace:e.replace,ariaCurrentValue:e.ariaCurrentValue,custom:e.custom,rel:e.rel},l.default);const f=typeof t.value=="object"?((i=r.resolve(t.value))==null?void 0:i.href)??null:t.value||null,m=e.target||null,h=e.noRel?null:Y(e.rel,n.externalRelAttribute,f?Z:"")||null,d=()=>V(f,{replace:e.replace});return e.custom?l.default?l.default({href:f,navigate:d,get route(){if(!f)return;const s=H(f);return{path:s.pathname,fullPath:s.pathname,get query(){return U(s.search)},hash:s.hash,params:{},name:void 0,matched:[],redirectedFrom:void 0,meta:{},href:f}},rel:h,target:m,isExternal:c.value,isActive:!1,isExactActive:!1}):null:P("a",{ref:o,href:f,rel:h,target:m},(v=l.default)==null?void 0:v.call(l))}}})}const ne=G({componentName:"NuxtLink"});function J(){const n=y();if(n._observer)return n._observer;let a=null;const e=new Map,l=(t,c)=>(a||(a=new IntersectionObserver(u=>{for(const o of u){const f=e.get(o.target);(o.isIntersecting||o.intersectionRatio>0)&&f&&f()}})),e.set(t,c),a.observe(t),()=>{e.delete(t),a.unobserve(t),e.size===0&&(a.disconnect(),a=null)});return n._observer={observe:l}}function ee(){const n=navigator.connection;return!!(n&&(n.saveData||/2g/.test(n.effectiveType)))}const re=""+new URL("agency-logo.0a490f12.svg",import.meta.url).href,se={agency:{home:"/",contact:"/contact"}},oe={agency:{name:"Coastal Title Solutions",desc:"Ride the Title Wave. Coastal Title Solutions is a branch of Title Solutions Agency, providing professional title services with offices in Ft Lauderdale, Miami, and Tampa, focusing on personalized solutions in coastal regions.",prefix:"coastal",footerText:"Coastal Title Solutions - All Rights Reserved",logoText:"Coastal Title Solutions",projectName:"Coastal Title Solutions",url:"coastaltitlellc.com",img:"/static/images/coastal-logo.png",notifMsg:"notify-msg"}};export{ne as _,se as a,oe as b,ae as d,re as l,K as u};
