import{d as b,u as $,b as p}from"./brand.b0552b8a.js";import{T as g}from"./ThemeWrapper.07ca40d6.js";import{H as y,F as w}from"./Footer.c59b2a51.js";import{_ as i,r as e,o as u,c as C,a as o,w as r,b as t,t as c,d as E,u as N,e as k}from"./entry.9079e15b.js";import"./uiTheme.c82aa39c.js";const B={props:{errCode:{type:String,default:"404"},text:{type:String,default:""}}},j={class:"error-wrap"},F={class:"flex"},H={class:"deco"},S={class:"text"},T={class:"text-h4"};function V(n,a,_,f,v,h){const s=e("v-col"),d=e("v-btn"),l=e("v-row"),m=e("v-container");return u(),C("div",j,[o(m,{class:"max-md"},{default:r(()=>[o(l,null,{default:r(()=>[o(s,{cols:"12",md:"5"},{default:r(()=>[t("div",F,[t("div",H,[t("h3",null,c(_.errCode),1)])])]),_:1}),o(s,{cols:"12",md:"7"},{default:r(()=>[t("div",S,[t("h4",T,c(_.text),1),t("p",null,c(n.$t("common.404_subtitle")),1),o(d,{variant:"outlined",color:"primary",href:"/",size:"large",class:"button"},{default:r(()=>[E(c(n.$t("common.back")),1)]),_:1})])]),_:1})]),_:1})]),_:1})])}const O=i(B,[["render",V],["__scopeId","data-v-4c8ff9d6"]]),z=b({components:{"main-header":y,"main-footer":w,ThemeWrapper:g,Error:O},setup(){const a=N()._object.error;console.log(a),$({title:a.statusCode===404?p.agency.name+" - Not Found":p.agency.name+" - An error occurred"})}});function A(n,a,_,f,v,h){const s=e("main-header"),d=e("Error",!0),l=e("main-footer"),m=e("v-app"),x=e("theme-wrapper");return u(),k(x,{theme:"ocean"},{default:r(()=>[o(m,null,{default:r(()=>[t("div",null,[o(s,{invert:""}),o(d,{"error-code":"errObj.statusCode",text:n.$t("common.404")},null,8,["text"]),o(l)])]),_:1})]),_:1})}const J=i(z,[["render",A]]);export{J as default};
