import{_ as l,u,a as p,o as t,f as o,F as m,g,h as a,t as r}from"./index-20da9aaa.js";import{g as v}from"./commodity-8f96276f.js";const h={class:"product-list"},f=["onClick"],x=["src","alt"],k={class:"product__name"},y={class:"product__price"},B={__name:"index",setup(C){const n=u(),c=p([]),_=()=>{v().then(e=>{c.value=e.list})},i=e=>{n.push({name:"CommodityDetail",params:{id:e.id}})};return _(),(e,D)=>(t(),o("div",h,[(t(!0),o(m,null,g(c.value,(s,d)=>(t(),o("div",{class:"product",key:d,onClick:L=>i(s)},[a("img",{src:s.imgUrl,onerror:"this.src = '/src/assets/vue.svg'",alt:s.name},null,8,x),a("div",k,r(s.name),1),a("div",y,"￥: "+r(s.price),1)],8,f))),128))]))}},G=l(B,[["__scopeId","data-v-18c91245"]]);export{G as default};