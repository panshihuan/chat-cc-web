import{r as z,u as C}from"./use-route-492d9a18.js";import{x as I,C as R,aa as l,G as q,y as D,ap as N,j as o,I as p,V as w,aq as L,B as O}from"./index-20da9aaa.js";const[U,a]=I("button"),V=R({},z,{tag:l("button"),text:String,icon:String,type:l("default"),size:l("normal"),color:String,block:Boolean,plain:Boolean,round:Boolean,square:Boolean,loading:Boolean,hairline:Boolean,disabled:Boolean,iconPrefix:String,nativeType:l("button"),loadingSize:q,loadingText:String,loadingType:String,iconPosition:l("left")});var _=D({name:U,props:V,emits:["click"],setup(n,{emit:g,slots:t}){const f=C(),b=()=>t.loading?t.loading():o(L,{size:n.loadingSize,type:n.loadingType,class:a("loading")},null),c=()=>{if(n.loading)return b();if(t.icon)return o("div",{class:a("icon")},[t.icon()]);if(n.icon)return o(p,{name:n.icon,class:a("icon"),classPrefix:n.iconPrefix},null)},m=()=>{let e;if(n.loading?e=n.loadingText:e=t.default?t.default():n.text,e)return o("span",{class:a("text")},[e])},x=()=>{const{color:e,plain:r}=n;if(e){const i={color:r?e:"white"};return r||(i.background=e),e.includes("gradient")?i.border=0:i.borderColor=e,i}},y=e=>{n.loading?w(e):n.disabled||(g("click",e),f())};return()=>{const{tag:e,type:r,size:i,block:B,round:S,plain:P,square:k,loading:T,disabled:s,hairline:d,nativeType:h,iconPosition:u}=n,v=[a([r,i,{plain:P,block:B,round:S,square:k,loading:T,disabled:s,hairline:d}]),{[N]:d}];return o(e,{type:h,class:v,style:x(),disabled:s,onClick:y},{default:()=>[o("div",{class:a("content")},[u==="left"&&c(),m(),u==="right"&&c()])]})}}});const G=O(_);export{G as B};