import{_ as R,N as I,e as w,O as N,j as U,P as B,Q as C,g as P,o as s,c as l,a as h,C as $,T as S,u as _,F as n,b as c,t as y,d as o,x as V,s as t,L as j,J as d}from"./index.dd783b7f.js";import{S as L}from"./Songs.01b6ff99.js";import{a as M}from"./Albums.669f5fff.js";import{a as T,_ as q}from"./Playlists.2c9f44d7.js";import{v as A,_ as D,d as E}from"./Videos.1a020761.js";import{m as F,M as J}from"./ModalWithVideo.cb56cbff.js";const Q={key:0},W={class:"title"},z=["id"],G={key:0,class:"box fr-3",style:{gap:"0px 10px"}},H={key:1,class:"box fr-5",style:{gap:"36px 24px"}},K={key:2,class:"box fr-5"},X={key:3,class:"box fr-4",style:{gap:"36px 24px"}},Y={key:4,class:"box fr-4",style:{gap:"36px 24px"}},Z={key:5,class:"box fr-4",style:{gap:"36px 24px"}},ee={key:6,class:"box fr-5",style:{gap:"36px 24px"}},ae={key:7,class:"box fr-4",style:{gap:"36px 24px"}},se={__name:"index",setup(le){const i=I(),k=w([]),v=w(!0),p=N({open:!1,url:""});U(async()=>{b()}),B(i,()=>{b()});const O=()=>{p.open=!1},x=r=>{console.log(r),r&&(p.open=!0,p.url=r)},b=()=>{const r=[1,10,100,1e3,1002,1004,1009,1014];v.value=!0,Promise.all(r.map(m=>C({...i.params,type:m,limit:10,offset:0}))).then(m=>{v.value=!1,k.value=m.map(({result:a,code:f})=>{if(f!==200)a={};else{let e={};for(const u in a)if(Object.hasOwnProperty.call(a,u)){const g=a[u];Array.isArray(g)?(e.label=u,e.values=g):e[u]=g}a=e}return a}),P(()=>{if(i.query.type){const a=i.query.type;document.getElementById(a).scrollIntoView({behavior:"smooth",block:"start"})}})}).catch(m=>{throw v.value=!1,m})};return(r,m)=>(s(),l(n,null,[h(S,{"enter-active-class":"animate__animated animate__fadeIn","leave-active-class":"animate__animated animate__fadeOut"},{default:$(()=>[c("main",null,[c("h1",null,[c("strong",null,'"'+y(_(i).params.keywords)+'"',1),c("span",null,"\xA0"+y(r.$t("searchResult.searchResult")),1)]),v.value?(s(),o(_(V),{key:0,style:{margin:"3%"},width:"100%",height:"40vh",animated:"",bg:"transparent"})):(s(!0),l(n,{key:1},t(k.value,(a,f)=>(s(),l("div",{key:f},[a.values?(s(),l("div",Q,[c("div",W,[c("h1",{id:a.label},y(r.$t(`searchResult.${a.label}`)),9,z),h(_(j),{to:`/detail/${_(i).params.keywords}/${a.label}`},{default:$(()=>[c("span",null,y(r.$t("searchResult.more")),1)]),_:2},1032,["to"])]),a.label==="songs"?(s(),l("div",G,[(s(!0),l(n,null,t(a.values,e=>{var u;return s(),o(L,{key:e.id,image:(u=e==null?void 0:e.al)==null?void 0:u.picUrl,name:e.name,id:e.id,desc:e==null?void 0:e.ar},null,8,["image","name","id","desc"])}),128))])):d("",!0),a.label==="artists"?(s(),l("div",H,[(s(!0),l(n,null,t(a.values,e=>(s(),o(T,{key:e.id,image:e.picUrl,name:e.name,id:e.id},null,8,["image","name","id"]))),128))])):d("",!0),a.label==="albums"?(s(),l("div",K,[(s(!0),l(n,null,t(a.values,e=>(s(),o(M,{key:e.id,image:e.picUrl,name:e.name,desc:e.artists,id:e.id},null,8,["image","name","desc","id"]))),128))])):d("",!0),a.label==="mvs"?(s(),l("div",X,[(s(!0),l(n,null,t(a.values,e=>(s(),o(F,{key:e.id,image:e.cover,name:e.name,desc:e.artistName,id:e.id,onOnPlay:x},null,8,["image","name","desc","id"]))),128))])):d("",!0),a.label==="videos"?(s(),l("div",Y,[(s(!0),l(n,null,t(a.values,e=>(s(),o(A,{key:e.id,image:e.coverUrl,name:e.title,desc:e.aliaName,id:e.vid,onOnPlay:x},null,8,["image","name","desc","id"]))),128))])):d("",!0),a.label==="playlists"?(s(),l("div",Z,[(s(!0),l(n,null,t(a.values,e=>(s(),o(q,{key:e.vid,image:e.coverUrl||"",name:e.title,id:e.vid},null,8,["image","name","id"]))),128))])):d("",!0),a.label==="userprofiles"?(s(),l("div",ee,[(s(!0),l(n,null,t(a.values,e=>(s(),o(D,{key:e.userId,image:e==null?void 0:e.avatarUrl,name:e.nickname,id:e.userId},null,8,["image","name","id"]))),128))])):d("",!0),a.label==="djRadios"?(s(),l("div",ae,[(s(!0),l(n,null,t(a.values,e=>(s(),o(E,{key:e.id,it:e},null,8,["it"]))),128))])):d("",!0)])):d("",!0)]))),128))])]),_:1}),h(_(J),{open:p.open,url:p.url,onOnClose:O},null,8,["open","url"])],64))}};var ce=R(se,[["__scopeId","data-v-5e93b81c"]]);export{ce as default};
