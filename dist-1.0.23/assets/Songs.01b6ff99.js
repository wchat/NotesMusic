import{_ as h,o as a,c as s,s as S,d as u,C as x,D as y,E as f,t as c,u as n,L as b,F as L,h as A,G as C,e as N,r as $,H as m,J as d,a as g,I as B,b as r,S as I,K as w}from"./index.dd783b7f.js";const V={__name:"LinkWithArtists",props:{artisits:{require:!0,default:()=>[],type:Array}},setup(e){return(i,o)=>(a(!0),s(L,null,S(e.artisits,t=>(a(),u(n(b),{class:"LinkWithArtists",to:`/artists/${t.id}`,key:t.id},{default:x(()=>[y(i.$slots,"default",{},()=>[f(c(t.name)+"\xA0",1)],!0)]),_:2},1032,["to"]))),128))}};var W=h(V,[["__scopeId","data-v-122fea04"]]);const H={class:"btn-song"},D={class:""},E=["title"],F=["title"],q=["title"],z={__name:"Songs",props:{image:String,title:String,name:String,desc:{type:Array,default:()=>[]},id:Number,index:Number,subtitle:String,notShowHover:Boolean},setup(e){const i=A(),o=C(()=>i.state.sound.current_id),t=N(!1),k=l=>{l&&(t.value=!0,i.dispatch("fetch_song_data",l).then(()=>{t.value=!1}).catch(()=>{t.value=!1}))};return(l,v)=>{const _=$("svg-icon");return a(),s("div",{class:m(["wapper",[o.value===e.id&&!e.notShowHover&&"active"]])},[e.index?(a(),s("div",{key:0,class:m(["index",[e.index===3&&"rank-3",e.index===2&&"rank-2",e.index===1&&"rank-1"]])},c(`${e.index}`.padStart(2,"0")),3)):d("",!0),e.image?(a(),s("div",{key:1,class:"song",onClick:v[0]||(v[0]=G=>k(e.id))},[g(n(B),{class:"image",animate:"animate__slideInUp",src:e.image,alt:e.name},null,8,["src","alt"]),r("div",H,[t.value?(a(),u(n(I),{key:0,color:"var(--color-body-bg)"})):(a(),u(_,{key:1,class:"play","icon-class":o.value===e.id?"pause":"play",alt:""},null,8,["icon-class"]))])])):d("",!0),r("div",D,[r("div",{class:"title",title:e.name},[f(c(e.name)+" ",1),e.subtitle?(a(),s("span",{key:0,title:e.subtitle},c(e.subtitle),9,F)):d("",!0)],8,E),r("div",{class:"auth",title:n(w)(e.desc)},[g(n(W),{artisits:e.desc},null,8,["artisits"])],8,q)]),y(l.$slots,"default",{},void 0,!0)],2)}}};var K=h(z,[["__scopeId","data-v-6c220e97"]]);export{W as L,K as S};
