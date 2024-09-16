import{l as I,b as g,a as D,_ as R,d as $}from"./brand.b0552b8a.js";import{H as B}from"./Hidden.2c779e66.js";import{_ as p,r as l,o as v,c as f,a as e,w as s,d as u,b as c,t as _,p as E,f as L,g as H}from"./entry.9079e15b.js";const z={components:{Hidden:B},data(){return{valid:!0,snackbar:!1,name:"",nameRules:[n=>!!n||"Name is required"],email:"",emailRules:[n=>!!n||"E-mail is required",n=>/.+@.+\..+/.test(n)||"E-mail must be valid"],phone:"",company:"",message:"",checkbox:!1,logo:I,brand:g,routeLink:D}},methods:{validate(){this.$refs.form.validate()&&(this.snackbar=!0)}}},b=n=>(E("data-v-5e8a5b55"),n=n(),L(),n),M={class:"form-wrap"},T=b(()=>c("div",{class:"action"}," Message Sent ",-1)),Y={class:"logo logo-header"},j=["src"],A=b(()=>c("i",{class:"ion-ios-home-outline"},null,-1)),F=b(()=>c("i",{class:"ion-ios-arrow-round-back-outline"},null,-1)),G={class:"use-text-title pb-3 text-center"},J={class:"desc use-text-subtitle2 text-center"},K={class:"form"},O={class:"btn-area"},P={class:"form-control-label"},Q={href:"#",class:"mx-3"};function W(n,t,k,y,o,h){const d=l("v-icon"),i=l("v-btn"),x=l("v-snackbar"),w=R,V=l("hidden"),m=l("v-text-field"),r=l("v-col"),C=l("v-textarea"),U=l("v-row"),N=l("v-checkbox"),S=l("v-form"),q=l("v-container");return v(),f("div",M,[e(x,{modelValue:o.snackbar,"onUpdate:modelValue":t[1]||(t[1]=a=>o.snackbar=a),timeout:4e3,top:"",right:"",class:"notification"},{default:s(()=>[T,e(i,{text:"",icon:"",onClick:t[0]||(t[0]=a=>o.snackbar=!1)},{default:s(()=>[e(d,null,{default:s(()=>[u("mdi-close")]),_:1})]),_:1})]),_:1},8,["modelValue"]),e(V,{point:"mdUp"},{default:s(()=>[c("div",Y,[e(w,{to:o.routeLink.agency.home},{default:s(()=>[c("img",{src:o.logo,alt:"logo"},null,8,j)]),_:1},8,["to"])])]),_:1}),e(V,{point:"smDown"},{default:s(()=>[e(i,{href:o.routeLink.agency.home,icon:"",variant:"text",class:"backtohome"},{default:s(()=>[A,F]),_:1},8,["href"])]),_:1}),e(q,{class:"max-md"},{default:s(()=>[c("h3",G,_(n.$t("common.contact_title")),1),c("p",J,_(n.$t("common.contact_subtitle")),1),c("div",K,[e(S,{ref:"form",modelValue:o.valid,"onUpdate:modelValue":t[8]||(t[8]=a=>o.valid=a)},{default:s(()=>[e(U,{class:"spacing6 margin"},{default:s(()=>[e(r,{cols:"12",sm:"6",class:"pa-6"},{default:s(()=>[e(m,{modelValue:o.name,"onUpdate:modelValue":t[2]||(t[2]=a=>o.name=a),rules:o.nameRules,label:n.$t("common.form_name"),variant:"underlined",color:"primary",class:"input",required:""},null,8,["modelValue","rules","label"])]),_:1}),e(r,{cols:"12",sm:"6",class:"pa-6"},{default:s(()=>[e(m,{modelValue:o.email,"onUpdate:modelValue":t[3]||(t[3]=a=>o.email=a),rules:o.emailRules,label:n.$t("common.form_email"),variant:"underlined",class:"input",color:"primary",required:""},null,8,["modelValue","rules","label"])]),_:1}),e(r,{cols:"12",sm:"6",class:"pa-6"},{default:s(()=>[e(m,{modelValue:o.phone,"onUpdate:modelValue":t[4]||(t[4]=a=>o.phone=a),label:n.$t("common.form_phone"),variant:"underlined",class:"input",color:"primary"},null,8,["modelValue","label"])]),_:1}),e(r,{cols:"12",sm:"6",class:"pa-6"},{default:s(()=>[e(m,{modelValue:o.company,"onUpdate:modelValue":t[5]||(t[5]=a=>o.company=a),label:n.$t("common.form_company"),variant:"underlined",class:"input",color:"primary"},null,8,["modelValue","label"])]),_:1}),e(r,{cols:"12",class:"pa-6"},{default:s(()=>[e(C,{modelValue:o.message,"onUpdate:modelValue":t[6]||(t[6]=a=>o.message=a),label:n.$t("common.form_message"),rows:"6",variant:"underlined",class:"input",color:"primary"},null,8,["modelValue","label"])]),_:1})]),_:1}),c("div",O,[c("div",P,[e(N,{modelValue:o.checkbox,"onUpdate:modelValue":t[7]||(t[7]=a=>o.checkbox=a),color:"primary",rules:[a=>!!a||"You must agree to continue!"],label:n.$t("common.form_terms"),required:"","hide-details":""},null,8,["modelValue","rules","label"]),c("a",Q,_(n.$t("common.form_privacy")),1)]),e(i,{color:"primary",variant:"outlined",size:"large",onClick:h.validate},{default:s(()=>[u(_(n.$t("common.form_send"))+" ",1),e(d,{class:"right-icon"},{default:s(()=>[u(" mdi-send ")]),_:1})]),_:1},8,["onClick"])])]),_:1},8,["modelValue"])])]),_:1})])}const X=p(z,[["render",W],["__scopeId","data-v-5e8a5b55"]]);const Z={},ee={class:"decoration"},oe=H('<div class="deco-top" data-v-6b210af6><div class="primary" data-v-6b210af6></div><div class="secondary" data-v-6b210af6></div></div><div class="deco-bottom" data-v-6b210af6><div class="primary" data-v-6b210af6></div><div class="secondary" data-v-6b210af6></div></div>',2),ne=[oe];function te(n,t){return v(),f("div",ee,ne)}const ae=p(Z,[["render",te],["__scopeId","data-v-6b210af6"]]),se=$({components:{Contact:X,Decoration:ae},head(){return{title:g.agency.name+" - Contact"}}});function le(n,t,k,y,o,h){const d=l("decoration"),i=l("contact",!0);return v(),f("div",null,[e(d),e(i)])}const de=p(se,[["render",le]]);export{de as default};