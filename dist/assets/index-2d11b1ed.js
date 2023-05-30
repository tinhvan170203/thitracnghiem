import{l as L,k as O,s as y,P as J,m as g,_ as l,r as k,n as w,p as z,j as a,v as D,w as H,Z as lr,aa as ir,$ as sr,H as cr,S as dr,N as I,O as q,Q as j,f as G,X as pr,g as ur,i as vr,U as hr,d as u,I as fr,T as mr,ab as A,ac as gr,ad as xr,ae as kr,af as yr}from"./index-062f957e.js";import{a as br,d as Ar}from"./Settings-f2a4698c.js";import{B as Y}from"./Box-bf90436a.js";import{T as Dr}from"./Toolbar-b498bb22.js";function Br(r){return L("MuiAppBar",r)}O("MuiAppBar",["root","positionFixed","positionAbsolute","positionSticky","positionStatic","positionRelative","colorDefault","colorPrimary","colorSecondary","colorInherit","colorTransparent"]);const Nr=["className","color","enableColorOnDark","position"],$r=r=>{const{color:o,position:e,classes:t}=r,i={root:["root",`color${g(o)}`,`position${g(e)}`]};return H(i,Br,t)},M=(r,o)=>r?`${r==null?void 0:r.replace(")","")}, ${o})`:o,Cr=y(J,{name:"MuiAppBar",slot:"Root",overridesResolver:(r,o)=>{const{ownerState:e}=r;return[o.root,o[`position${g(e.position)}`],o[`color${g(e.color)}`]]}})(({theme:r,ownerState:o})=>{const e=r.palette.mode==="light"?r.palette.grey[100]:r.palette.grey[900];return l({display:"flex",flexDirection:"column",width:"100%",boxSizing:"border-box",flexShrink:0},o.position==="fixed"&&{position:"fixed",zIndex:(r.vars||r).zIndex.appBar,top:0,left:"auto",right:0,"@media print":{position:"absolute"}},o.position==="absolute"&&{position:"absolute",zIndex:(r.vars||r).zIndex.appBar,top:0,left:"auto",right:0},o.position==="sticky"&&{position:"sticky",zIndex:(r.vars||r).zIndex.appBar,top:0,left:"auto",right:0},o.position==="static"&&{position:"static"},o.position==="relative"&&{position:"relative"},!r.vars&&l({},o.color==="default"&&{backgroundColor:e,color:r.palette.getContrastText(e)},o.color&&o.color!=="default"&&o.color!=="inherit"&&o.color!=="transparent"&&{backgroundColor:r.palette[o.color].main,color:r.palette[o.color].contrastText},o.color==="inherit"&&{color:"inherit"},r.palette.mode==="dark"&&!o.enableColorOnDark&&{backgroundColor:null,color:null},o.color==="transparent"&&l({backgroundColor:"transparent",color:"inherit"},r.palette.mode==="dark"&&{backgroundImage:"none"})),r.vars&&l({},o.color==="default"&&{"--AppBar-background":o.enableColorOnDark?r.vars.palette.AppBar.defaultBg:M(r.vars.palette.AppBar.darkBg,r.vars.palette.AppBar.defaultBg),"--AppBar-color":o.enableColorOnDark?r.vars.palette.text.primary:M(r.vars.palette.AppBar.darkColor,r.vars.palette.text.primary)},o.color&&!o.color.match(/^(default|inherit|transparent)$/)&&{"--AppBar-background":o.enableColorOnDark?r.vars.palette[o.color].main:M(r.vars.palette.AppBar.darkBg,r.vars.palette[o.color].main),"--AppBar-color":o.enableColorOnDark?r.vars.palette[o.color].contrastText:M(r.vars.palette.AppBar.darkColor,r.vars.palette[o.color].contrastText)},{backgroundColor:"var(--AppBar-background)",color:o.color==="inherit"?"inherit":"var(--AppBar-color)"},o.color==="transparent"&&{backgroundImage:"none",backgroundColor:"transparent",color:"inherit"}))}),Rr=k.forwardRef(function(o,e){const t=w({props:o,name:"MuiAppBar"}),{className:i,color:d="primary",enableColorOnDark:v=!1,position:s="fixed"}=t,h=z(t,Nr),c=l({},t,{color:d,position:s,enableColorOnDark:v}),n=$r(c);return a(Cr,l({square:!0,component:"header",ownerState:c,elevation:4,className:D(n.root,i,s==="fixed"&&"mui-fixed"),ref:e},h))}),Pr=Rr,_r=lr(a("path",{d:"M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"}),"Person");function Mr(r){return L("MuiAvatar",r)}O("MuiAvatar",["root","colorDefault","circular","rounded","square","img","fallback"]);const zr=["alt","children","className","component","imgProps","sizes","src","srcSet","variant"],Ir=r=>{const{classes:o,variant:e,colorDefault:t}=r;return H({root:["root",e,t&&"colorDefault"],img:["img"],fallback:["fallback"]},Mr,o)},qr=y("div",{name:"MuiAvatar",slot:"Root",overridesResolver:(r,o)=>{const{ownerState:e}=r;return[o.root,o[e.variant],e.colorDefault&&o.colorDefault]}})(({theme:r,ownerState:o})=>l({position:"relative",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0,width:40,height:40,fontFamily:r.typography.fontFamily,fontSize:r.typography.pxToRem(20),lineHeight:1,borderRadius:"50%",overflow:"hidden",userSelect:"none"},o.variant==="rounded"&&{borderRadius:(r.vars||r).shape.borderRadius},o.variant==="square"&&{borderRadius:0},o.colorDefault&&l({color:(r.vars||r).palette.background.default},r.vars?{backgroundColor:r.vars.palette.Avatar.defaultBg}:{backgroundColor:r.palette.mode==="light"?r.palette.grey[400]:r.palette.grey[600]}))),jr=y("img",{name:"MuiAvatar",slot:"Img",overridesResolver:(r,o)=>o.img})({width:"100%",height:"100%",textAlign:"center",objectFit:"cover",color:"transparent",textIndent:1e4}),Tr=y(_r,{name:"MuiAvatar",slot:"Fallback",overridesResolver:(r,o)=>o.fallback})({width:"75%",height:"75%"});function Lr({crossOrigin:r,referrerPolicy:o,src:e,srcSet:t}){const[i,d]=k.useState(!1);return k.useEffect(()=>{if(!e&&!t)return;d(!1);let v=!0;const s=new Image;return s.onload=()=>{v&&d("loaded")},s.onerror=()=>{v&&d("error")},s.crossOrigin=r,s.referrerPolicy=o,s.src=e,t&&(s.srcset=t),()=>{v=!1}},[r,o,e,t]),i}const Or=k.forwardRef(function(o,e){const t=w({props:o,name:"MuiAvatar"}),{alt:i,children:d,className:v,component:s="div",imgProps:h,sizes:c,src:n,srcSet:p,variant:$="circular"}=t,T=z(t,zr);let f=null;const C=Lr(l({},h,{src:n,srcSet:p})),R=n||p,P=R&&C!=="error",b=l({},t,{colorDefault:!P,component:s,variant:$}),m=Ir(b);return P?f=a(jr,l({alt:i,src:n,srcSet:p,sizes:c,ownerState:b,className:m.img},h)):d!=null?f=d:R&&i?f=i[0]:f=a(Tr,{className:m.fallback}),a(qr,l({as:s,ownerState:b,className:D(m.root,v),ref:e},T,{children:f}))}),wr=Or;function Hr(r){return L("MuiDrawer",r)}O("MuiDrawer",["root","docked","paper","paperAnchorLeft","paperAnchorRight","paperAnchorTop","paperAnchorBottom","paperAnchorDockedLeft","paperAnchorDockedRight","paperAnchorDockedTop","paperAnchorDockedBottom","modal"]);const Fr=["BackdropProps"],Ur=["anchor","BackdropProps","children","className","elevation","hideBackdrop","ModalProps","onClose","open","PaperProps","SlideProps","TransitionComponent","transitionDuration","variant"],K=(r,o)=>{const{ownerState:e}=r;return[o.root,(e.variant==="permanent"||e.variant==="persistent")&&o.docked,o.modal]},Vr=r=>{const{classes:o,anchor:e,variant:t}=r,i={root:["root"],docked:[(t==="permanent"||t==="persistent")&&"docked"],modal:["modal"],paper:["paper",`paperAnchor${g(e)}`,t!=="temporary"&&`paperAnchorDocked${g(e)}`]};return H(i,Hr,o)},Qr=y(ir,{name:"MuiDrawer",slot:"Root",overridesResolver:K})(({theme:r})=>({zIndex:(r.vars||r).zIndex.drawer})),X=y("div",{shouldForwardProp:sr,name:"MuiDrawer",slot:"Docked",skipVariantsResolver:!1,overridesResolver:K})({flex:"0 0 auto"}),Sr=y(J,{name:"MuiDrawer",slot:"Paper",overridesResolver:(r,o)=>{const{ownerState:e}=r;return[o.paper,o[`paperAnchor${g(e.anchor)}`],e.variant!=="temporary"&&o[`paperAnchorDocked${g(e.anchor)}`]]}})(({theme:r,ownerState:o})=>l({overflowY:"auto",display:"flex",flexDirection:"column",height:"100%",flex:"1 0 auto",zIndex:(r.vars||r).zIndex.drawer,WebkitOverflowScrolling:"touch",position:"fixed",top:0,outline:0},o.anchor==="left"&&{left:0},o.anchor==="top"&&{top:0,left:0,right:0,height:"auto",maxHeight:"100%"},o.anchor==="right"&&{right:0},o.anchor==="bottom"&&{top:"auto",left:0,bottom:0,right:0,height:"auto",maxHeight:"100%"},o.anchor==="left"&&o.variant!=="temporary"&&{borderRight:`1px solid ${(r.vars||r).palette.divider}`},o.anchor==="top"&&o.variant!=="temporary"&&{borderBottom:`1px solid ${(r.vars||r).palette.divider}`},o.anchor==="right"&&o.variant!=="temporary"&&{borderLeft:`1px solid ${(r.vars||r).palette.divider}`},o.anchor==="bottom"&&o.variant!=="temporary"&&{borderTop:`1px solid ${(r.vars||r).palette.divider}`})),rr={left:"right",right:"left",top:"down",bottom:"up"};function Er(r){return["left","right"].indexOf(r)!==-1}function Wr(r,o){return r.direction==="rtl"&&Er(o)?rr[o]:o}const Gr=k.forwardRef(function(o,e){const t=w({props:o,name:"MuiDrawer"}),i=cr(),d={enter:i.transitions.duration.enteringScreen,exit:i.transitions.duration.leavingScreen},{anchor:v="left",BackdropProps:s,children:h,className:c,elevation:n=16,hideBackdrop:p=!1,ModalProps:{BackdropProps:$}={},onClose:T,open:f=!1,PaperProps:C={},SlideProps:R,TransitionComponent:P=dr,transitionDuration:b=d,variant:m="temporary"}=t,tr=z(t.ModalProps,Fr),_=z(t,Ur),S=k.useRef(!1);k.useEffect(()=>{S.current=!0},[]);const nr=Wr(i,v),B=l({},t,{anchor:v,elevation:n,open:f,variant:m},_),x=Vr(B),E=a(Sr,l({elevation:m==="temporary"?n:0,square:!0},C,{className:D(x.paper,C.className),ownerState:B,children:h}));if(m==="permanent")return a(X,l({className:D(x.root,x.docked,c),ownerState:B,ref:e},_,{children:E}));const W=a(P,l({in:f,direction:rr[nr],timeout:b,appear:S.current},R,{children:E}));return m==="persistent"?a(X,l({className:D(x.root,x.docked,c),ownerState:B,ref:e},_,{children:W})):a(Qr,l({BackdropProps:l({},s,$,{transitionDuration:b}),className:D(x.root,x.modal,c),open:f,ownerState:B,onClose:T,hideBackdrop:p,ref:e},_,tr,{children:W}))}),Yr=Gr;var F={},Xr=q;Object.defineProperty(F,"__esModule",{value:!0});var or=F.default=void 0,Zr=Xr(I()),Jr=j,Kr=(0,Zr.default)((0,Jr.jsx)("path",{d:"M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"}),"Menu");or=F.default=Kr;var U={},ro=q;Object.defineProperty(U,"__esModule",{value:!0});var ar=U.default=void 0,oo=ro(I()),Z=j,ao=(0,oo.default)([(0,Z.jsx)("circle",{cx:"10",cy:"8",r:"4"},"0"),(0,Z.jsx)("path",{d:"M10.67 13.02c-.22-.01-.44-.02-.67-.02-2.42 0-4.68.67-6.61 1.82-.88.52-1.39 1.5-1.39 2.53V20h9.26c-.79-1.13-1.26-2.51-1.26-4 0-1.07.25-2.07.67-2.98zM20.75 16c0-.22-.03-.42-.06-.63l1.14-1.01-1-1.73-1.45.49c-.32-.27-.68-.48-1.08-.63L18 11h-2l-.3 1.49c-.4.15-.76.36-1.08.63l-1.45-.49-1 1.73 1.14 1.01c-.03.21-.06.41-.06.63s.03.42.06.63l-1.14 1.01 1 1.73 1.45-.49c.32.27.68.48 1.08.63L16 21h2l.3-1.49c.4-.15.76-.36 1.08-.63l1.45.49 1-1.73-1.14-1.01c.03-.21.06-.41.06-.63zM17 18c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z"},"1")],"ManageAccounts");ar=U.default=ao;var V={},eo=q;Object.defineProperty(V,"__esModule",{value:!0});var N=V.default=void 0,to=eo(I()),no=j,lo=(0,to.default)((0,no.jsx)("path",{d:"M12 1 3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm2.5 11.59.9 3.88-3.4-2.05-3.4 2.05.9-3.87-3-2.59 3.96-.34L12 6.02l1.54 3.64 3.96.34-3 2.59z"}),"LocalPolice");N=V.default=lo;var Q={},io=q;Object.defineProperty(Q,"__esModule",{value:!0});var er=Q.default=void 0,so=io(I()),co=j,po=(0,so.default)((0,co.jsx)("path",{d:"m17 7-1.41 1.41L18.17 11H8v2h10.17l-2.58 2.58L17 17l5-5zM4 5h8V3H4c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h8v-2H4V5z"}),"Logout");er=Q.default=po;function go(){const r=G(n=>n.authReducer.roles_x01),[o,e]=pr.useState(!1),t=ur(),i=G(n=>n.authReducer),{enqueueSnackbar:d}=vr(),v=hr(),s=async()=>{const n=xr();try{const p=await v(n),$=kr(p);d("Đăng xuất tài khoản thành công!",{anchorOrigin:{vertical:"bottom",horizontal:"right"},variant:"success"}),yr.remove("refreshToken_thitracnghiem"),t("/login")}catch(p){console.log(p),d("Lỗi khi đăng xuất tài khoản",{anchorOrigin:{vertical:"bottom",horizontal:"right"},variant:"error"})}},h=n=>p=>{p.type==="keydown"&&(p.key==="Tab"||p.key==="Shift")||e(!o)};let c={textDecoration:"underline",fontWeight:"bold",color:"grey"};return u("div",{className:"bg-gray-300",children:[a(Y,{sx:{flexGrow:1},children:a(Pr,{position:"static",children:u(Dr,{children:[a(fr,{size:"large",edge:"start",color:"inherit","aria-label":"menu",sx:{mr:2},onClick:h(),children:a(or,{})}),a("img",{src:"/cong-an-hieu.png",className:"w-[50px]"}),a(mr,{variant:"p",component:"div",sx:{flexGrow:1},children:"Hệ thống thi trắc nghiệm Công an tỉnh Hưng Yên"}),u("div",{className:"flex items-center space-x-2",children:[a(wr,{sx:{bgcolor:"gray"},children:"CA"}),a("p",{className:"text-xl",children:i.user})]})]})})}),a(Yr,{anchor:"left",open:o,onClose:h(),children:u("div",{className:"min-w-[300px] p-4 mt-2",children:[u("div",{className:"flex items-center space-x-2",children:[a(br,{color:"primary"}),a("p",{className:"text-xl text-gray-800 font-bold",children:"Danh mục quản trị"})]}),a("hr",{className:"mt-2"}),u("ul",{className:"mt-2 px-4",children:[r&&r.includes("xem tài khoản")&&a("li",{className:"text-md my-2 hover:font-bold transition-all",children:a(A,{to:"/admin/quan-ly-tai-khoan",style:({isActive:n})=>n?c:void 0,children:u("div",{className:"flex items-center space-x-2",children:[a(ar,{color:"primary"}),a("span",{children:"Quản lý tài khoản"})]})})}),r&&r.includes("xem đơn vị")&&a("li",{className:"text-md my-2 hover:font-bold transition-all",children:a(A,{to:"/admin/quan-ly-don-vi",style:({isActive:n})=>n?c:void 0,children:u("div",{className:"flex items-center space-x-2",children:[a(N,{color:"primary"}),a("span",{children:"Quản lý đơn vị"})]})})}),r&&r.includes("xem môn thi")&&a("li",{className:"text-md my-2 hover:font-bold transition-all",children:a(A,{to:"/admin/quan-ly-mon-thi",style:({isActive:n})=>n?c:void 0,children:u("div",{className:"flex items-center space-x-2",children:[a(N,{color:"primary"}),a("span",{children:"Quản lý môn thi"})]})})}),r&&r.includes("xem phân quyền quản lý môn thi")&&a("li",{className:"text-md my-2 hover:font-bold transition-all",children:a(A,{to:"/admin/phan-quyen-quan-ly-mon-thi",style:({isActive:n})=>n?c:void 0,children:u("div",{className:"flex items-center space-x-2",children:[a(Ar,{color:"primary"}),a("span",{children:"Phân quyền QL môn thi"})]})})}),r&&r.includes("xem câu hỏi")&&a("li",{className:"text-md my-2 hover:font-bold transition-all",children:a(A,{to:"/admin/danh-sach-cau-hoi",style:({isActive:n})=>n?c:void 0,children:u("div",{className:"flex items-center space-x-2",children:[a(N,{color:"primary"}),a("span",{children:"Ngân hàng câu hỏi"})]})})}),r&&r.includes("xem cuộc thi")&&a("li",{className:"text-md my-2 hover:font-bold transition-all",children:a(A,{to:"/admin/quan-ly-cac-cuoc-thi",style:({isActive:n})=>n?c:void 0,children:u("div",{className:"flex items-center space-x-2",children:[a(N,{color:"primary"}),a("span",{children:"Quản lý cuộc thi"})]})})}),a("li",{className:"text-md my-2 hover:font-bold transition-all hover:cursor-pointer",onClick:s,children:a("div",{children:u("div",{className:"flex items-center space-x-2",children:[a(er,{color:"primary"}),a("span",{children:"Đăng xuất"})]})})})]})]})}),a(Y,{className:"my-2 pb-2",children:a(gr,{})})]})}export{go as default};
