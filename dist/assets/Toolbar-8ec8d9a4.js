import{l as d,k as g,s as b,_ as e,r as v,n as m,p as T,j as f,v as x,w as R}from"./index-2d1dc0c1.js";function C(s){return d("MuiToolbar",s)}g("MuiToolbar",["root","gutters","regular","dense"]);const G=["className","component","disableGutters","variant"],w=s=>{const{classes:t,disableGutters:o,variant:a}=s;return R({root:["root",!o&&"gutters",a]},C,t)},y=b("div",{name:"MuiToolbar",slot:"Root",overridesResolver:(s,t)=>{const{ownerState:o}=s;return[t.root,!o.disableGutters&&t.gutters,t[o.variant]]}})(({theme:s,ownerState:t})=>e({position:"relative",display:"flex",alignItems:"center"},!t.disableGutters&&{paddingLeft:s.spacing(2),paddingRight:s.spacing(2),[s.breakpoints.up("sm")]:{paddingLeft:s.spacing(3),paddingRight:s.spacing(3)}},t.variant==="dense"&&{minHeight:48}),({theme:s,ownerState:t})=>t.variant==="regular"&&s.mixins.toolbar),M=v.forwardRef(function(t,o){const a=m({props:t,name:"MuiToolbar"}),{className:r,component:n="div",disableGutters:l=!1,variant:c="regular"}=a,u=T(a,G),i=e({},a,{component:n,disableGutters:l,variant:c}),p=w(i);return f(y,e({as:n,className:x(p.root,r),ref:o,ownerState:i},u))}),_=M;export{_ as T};
