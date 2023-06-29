import{l as W,k as S,s as N,P as Y,m as p,_ as l,r as C,n as G,p as M,j as e,v as k,w as J,aB as sr,ap as cr,H as dr,S as pr,aj as b,ab as D,ak as B,f as U,W as ur,g as hr,i as mr,am as vr,d as i,I as fr,aC as x,aD as xr,aE as gr,aF as kr,aG as yr}from"./index-30f8b152.js";import{a as br,d as Dr}from"./Settings-f1675f4f.js";import{B as Q}from"./Box-502f7273.js";import{T as Br}from"./Toolbar-d10093fc.js";function _r(r){return W("MuiAppBar",r)}S("MuiAppBar",["root","positionFixed","positionAbsolute","positionSticky","positionStatic","positionRelative","colorDefault","colorPrimary","colorSecondary","colorInherit","colorTransparent"]);const Ar=["className","color","enableColorOnDark","position"],$r=r=>{const{color:o,position:a,classes:n}=r,c={root:["root",`color${p(o)}`,`position${p(a)}`]};return J(c,_r,n)},$=(r,o)=>r?`${r==null?void 0:r.replace(")","")}, ${o})`:o,Cr=N(Y,{name:"MuiAppBar",slot:"Root",overridesResolver:(r,o)=>{const{ownerState:a}=r;return[o.root,o[`position${p(a.position)}`],o[`color${p(a.color)}`]]}})(({theme:r,ownerState:o})=>{const a=r.palette.mode==="light"?r.palette.grey[100]:r.palette.grey[900];return l({display:"flex",flexDirection:"column",width:"100%",boxSizing:"border-box",flexShrink:0},o.position==="fixed"&&{position:"fixed",zIndex:(r.vars||r).zIndex.appBar,top:0,left:"auto",right:0,"@media print":{position:"absolute"}},o.position==="absolute"&&{position:"absolute",zIndex:(r.vars||r).zIndex.appBar,top:0,left:"auto",right:0},o.position==="sticky"&&{position:"sticky",zIndex:(r.vars||r).zIndex.appBar,top:0,left:"auto",right:0},o.position==="static"&&{position:"static"},o.position==="relative"&&{position:"relative"},!r.vars&&l({},o.color==="default"&&{backgroundColor:a,color:r.palette.getContrastText(a)},o.color&&o.color!=="default"&&o.color!=="inherit"&&o.color!=="transparent"&&{backgroundColor:r.palette[o.color].main,color:r.palette[o.color].contrastText},o.color==="inherit"&&{color:"inherit"},r.palette.mode==="dark"&&!o.enableColorOnDark&&{backgroundColor:null,color:null},o.color==="transparent"&&l({backgroundColor:"transparent",color:"inherit"},r.palette.mode==="dark"&&{backgroundImage:"none"})),r.vars&&l({},o.color==="default"&&{"--AppBar-background":o.enableColorOnDark?r.vars.palette.AppBar.defaultBg:$(r.vars.palette.AppBar.darkBg,r.vars.palette.AppBar.defaultBg),"--AppBar-color":o.enableColorOnDark?r.vars.palette.text.primary:$(r.vars.palette.AppBar.darkColor,r.vars.palette.text.primary)},o.color&&!o.color.match(/^(default|inherit|transparent)$/)&&{"--AppBar-background":o.enableColorOnDark?r.vars.palette[o.color].main:$(r.vars.palette.AppBar.darkBg,r.vars.palette[o.color].main),"--AppBar-color":o.enableColorOnDark?r.vars.palette[o.color].contrastText:$(r.vars.palette.AppBar.darkColor,r.vars.palette[o.color].contrastText)},{backgroundColor:"var(--AppBar-background)",color:o.color==="inherit"?"inherit":"var(--AppBar-color)"},o.color==="transparent"&&{backgroundImage:"none",backgroundColor:"transparent",color:"inherit"}))}),Nr=C.forwardRef(function(o,a){const n=G({props:o,name:"MuiAppBar"}),{className:c,color:h="primary",enableColorOnDark:m=!1,position:v="fixed"}=n,f=M(n,Ar),s=l({},n,{color:h,position:v,enableColorOnDark:m}),t=$r(s);return e(Cr,l({square:!0,component:"header",ownerState:s,elevation:4,className:k(t.root,c,v==="fixed"&&"mui-fixed"),ref:a},f))}),Pr=Nr;function Mr(r){return W("MuiDrawer",r)}S("MuiDrawer",["root","docked","paper","paperAnchorLeft","paperAnchorRight","paperAnchorTop","paperAnchorBottom","paperAnchorDockedLeft","paperAnchorDockedRight","paperAnchorDockedTop","paperAnchorDockedBottom","modal"]);const Rr=["BackdropProps"],zr=["anchor","BackdropProps","children","className","elevation","hideBackdrop","ModalProps","onClose","open","PaperProps","SlideProps","TransitionComponent","transitionDuration","variant"],K=(r,o)=>{const{ownerState:a}=r;return[o.root,(a.variant==="permanent"||a.variant==="persistent")&&o.docked,o.modal]},jr=r=>{const{classes:o,anchor:a,variant:n}=r,c={root:["root"],docked:[(n==="permanent"||n==="persistent")&&"docked"],modal:["modal"],paper:["paper",`paperAnchor${p(a)}`,n!=="temporary"&&`paperAnchorDocked${p(a)}`]};return J(c,Mr,o)},qr=N(sr,{name:"MuiDrawer",slot:"Root",overridesResolver:K})(({theme:r})=>({zIndex:(r.vars||r).zIndex.drawer})),E=N("div",{shouldForwardProp:cr,name:"MuiDrawer",slot:"Docked",skipVariantsResolver:!1,overridesResolver:K})({flex:"0 0 auto"}),Ir=N(Y,{name:"MuiDrawer",slot:"Paper",overridesResolver:(r,o)=>{const{ownerState:a}=r;return[o.paper,o[`paperAnchor${p(a.anchor)}`],a.variant!=="temporary"&&o[`paperAnchorDocked${p(a.anchor)}`]]}})(({theme:r,ownerState:o})=>l({overflowY:"auto",display:"flex",flexDirection:"column",height:"100%",flex:"1 0 auto",zIndex:(r.vars||r).zIndex.drawer,WebkitOverflowScrolling:"touch",position:"fixed",top:0,outline:0},o.anchor==="left"&&{left:0},o.anchor==="top"&&{top:0,left:0,right:0,height:"auto",maxHeight:"100%"},o.anchor==="right"&&{right:0},o.anchor==="bottom"&&{top:"auto",left:0,bottom:0,right:0,height:"auto",maxHeight:"100%"},o.anchor==="left"&&o.variant!=="temporary"&&{borderRight:`1px solid ${(r.vars||r).palette.divider}`},o.anchor==="top"&&o.variant!=="temporary"&&{borderBottom:`1px solid ${(r.vars||r).palette.divider}`},o.anchor==="right"&&o.variant!=="temporary"&&{borderLeft:`1px solid ${(r.vars||r).palette.divider}`},o.anchor==="bottom"&&o.variant!=="temporary"&&{borderTop:`1px solid ${(r.vars||r).palette.divider}`})),X={left:"right",right:"left",top:"down",bottom:"up"};function Tr(r){return["left","right"].indexOf(r)!==-1}function Lr(r,o){return r.direction==="rtl"&&Tr(o)?X[o]:o}const Or=C.forwardRef(function(o,a){const n=G({props:o,name:"MuiDrawer"}),c=dr(),h={enter:c.transitions.duration.enteringScreen,exit:c.transitions.duration.leavingScreen},{anchor:m="left",BackdropProps:v,children:f,className:s,elevation:t=16,hideBackdrop:d=!1,ModalProps:{BackdropProps:T}={},onClose:ar,open:P=!1,PaperProps:L={},SlideProps:tr,TransitionComponent:nr=pr,transitionDuration:O=h,variant:_="temporary"}=n,ir=M(n.ModalProps,Rr),A=M(n,zr),H=C.useRef(!1);C.useEffect(()=>{H.current=!0},[]);const lr=Lr(c,m),g=l({},n,{anchor:m,elevation:t,open:P,variant:_},A),u=jr(g),V=e(Ir,l({elevation:_==="temporary"?t:0,square:!0},L,{className:k(u.paper,L.className),ownerState:g,children:f}));if(_==="permanent")return e(E,l({className:k(u.root,u.docked,s),ownerState:g,ref:a},A,{children:V}));const w=e(nr,l({in:P,direction:X[lr],timeout:O,appear:H.current},tr,{children:V}));return _==="persistent"?e(E,l({className:k(u.root,u.docked,s),ownerState:g,ref:a},A,{children:w})):e(qr,l({BackdropProps:l({},v,T,{transitionDuration:O}),className:k(u.root,u.modal,s),open:P,ownerState:g,onClose:ar,hideBackdrop:d,ref:a},A,ir,{children:w}))}),Hr=Or;var R={},Vr=D;Object.defineProperty(R,"__esModule",{value:!0});var Z=R.default=void 0,wr=Vr(b()),Ur=B,Qr=(0,wr.default)((0,Ur.jsx)("path",{d:"M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"}),"Menu");Z=R.default=Qr;var z={},Er=D;Object.defineProperty(z,"__esModule",{value:!0});var rr=z.default=void 0,Fr=Er(b()),F=B,Wr=(0,Fr.default)([(0,F.jsx)("circle",{cx:"10",cy:"8",r:"4"},"0"),(0,F.jsx)("path",{d:"M10.67 13.02c-.22-.01-.44-.02-.67-.02-2.42 0-4.68.67-6.61 1.82-.88.52-1.39 1.5-1.39 2.53V20h9.26c-.79-1.13-1.26-2.51-1.26-4 0-1.07.25-2.07.67-2.98zM20.75 16c0-.22-.03-.42-.06-.63l1.14-1.01-1-1.73-1.45.49c-.32-.27-.68-.48-1.08-.63L18 11h-2l-.3 1.49c-.4.15-.76.36-1.08.63l-1.45-.49-1 1.73 1.14 1.01c-.03.21-.06.41-.06.63s.03.42.06.63l-1.14 1.01 1 1.73 1.45-.49c.32.27.68.48 1.08.63L16 21h2l.3-1.49c.4-.15.76-.36 1.08-.63l1.45.49 1-1.73-1.14-1.01c.03-.21.06-.41.06-.63zM17 18c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z"},"1")],"ManageAccounts");rr=z.default=Wr;var j={},Sr=D;Object.defineProperty(j,"__esModule",{value:!0});var y=j.default=void 0,Yr=Sr(b()),Gr=B,Jr=(0,Yr.default)((0,Gr.jsx)("path",{d:"M12 1 3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm2.5 11.59.9 3.88-3.4-2.05-3.4 2.05.9-3.87-3-2.59 3.96-.34L12 6.02l1.54 3.64 3.96.34-3 2.59z"}),"LocalPolice");y=j.default=Jr;var q={},Kr=D;Object.defineProperty(q,"__esModule",{value:!0});var or=q.default=void 0,Xr=Kr(b()),Zr=B,ro=(0,Xr.default)((0,Zr.jsx)("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 4c1.93 0 3.5 1.57 3.5 3.5S13.93 13 12 13s-3.5-1.57-3.5-3.5S10.07 6 12 6zm0 14c-2.03 0-4.43-.82-6.14-2.88C7.55 15.8 9.68 15 12 15s4.45.8 6.14 2.12C16.43 19.18 14.03 20 12 20z"}),"AccountCircle");or=q.default=ro;var I={},oo=D;Object.defineProperty(I,"__esModule",{value:!0});var er=I.default=void 0,eo=oo(b()),ao=B,to=(0,eo.default)((0,ao.jsx)("path",{d:"m17 7-1.41 1.41L18.17 11H8v2h10.17l-2.58 2.58L17 17l5-5zM4 5h8V3H4c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h8v-2H4V5z"}),"Logout");er=I.default=to;function po(){const r=U(t=>t.authReducer.roles_x01),[o,a]=ur.useState(!1),n=hr(),c=U(t=>t.authReducer),{enqueueSnackbar:h}=mr(),m=vr(),v=async()=>{const t=gr();try{const d=await m(t),T=kr(d);h("Đăng xuất tài khoản thành công!",{anchorOrigin:{vertical:"bottom",horizontal:"right"},variant:"success"}),yr.remove("refreshToken_thitracnghiem"),n("/login")}catch(d){console.log(d),h("Lỗi khi đăng xuất tài khoản",{anchorOrigin:{vertical:"bottom",horizontal:"right"},variant:"error"})}},f=t=>d=>{d.type==="keydown"&&(d.key==="Tab"||d.key==="Shift")||a(!o)};let s={textDecoration:"underline",fontWeight:"bold",color:"grey"};return i("div",{className:"bg-gray-300",children:[e(Q,{sx:{flexGrow:1},children:e(Pr,{position:"static",children:i(Br,{children:[e(fr,{size:"large",edge:"start",color:"inherit","aria-label":"menu",onClick:f(),children:e(Z,{})}),e("img",{src:"/cong-an-hieu.png",className:"w-[50px] ml-0 md:ml-2"}),i("p",{className:"flex-grow",children:[e("span",{className:"md:inline hidden",children:"Hệ thống thi trắc nghiệm Công an tỉnh Hưng Yên"}),e("span",{className:"md:hidden inline text-sm",children:"PM thi trắc nghiệm CA Hưng Yên"})]}),i("div",{className:"hidden md:items-center md:space-x-2 md:flex",children:[e(or,{fontSize:"large"}),e("p",{className:"md:text-xl text:md",children:c.user})]})]})})}),e(Hr,{anchor:"left",open:o,onClose:f(),children:i("div",{className:"min-w-[300px] p-4 mt-2",children:[i("div",{className:"flex items-center space-x-2",children:[e(br,{color:"primary"}),e("p",{className:"text-xl text-gray-800 font-bold",children:"Danh mục quản trị"})]}),e("hr",{className:"mt-2"}),i("ul",{className:"mt-2 px-4",children:[r&&r.includes("xem tài khoản")&&e("li",{className:"text-md my-2 hover:font-bold transition-all",children:e(x,{to:"/admin/quan-ly-tai-khoan",style:({isActive:t})=>t?s:void 0,children:i("div",{className:"flex items-center space-x-2",children:[e(rr,{color:"primary"}),e("span",{children:"Quản lý tài khoản"})]})})}),r&&r.includes("xem đơn vị")&&e("li",{className:"text-md my-2 hover:font-bold transition-all",children:e(x,{to:"/admin/quan-ly-don-vi",style:({isActive:t})=>t?s:void 0,children:i("div",{className:"flex items-center space-x-2",children:[e(y,{color:"primary"}),e("span",{children:"Quản lý đơn vị"})]})})}),r&&r.includes("xem môn thi")&&e("li",{className:"text-md my-2 hover:font-bold transition-all",children:e(x,{to:"/admin/quan-ly-mon-thi",style:({isActive:t})=>t?s:void 0,children:i("div",{className:"flex items-center space-x-2",children:[e(y,{color:"primary"}),e("span",{children:"Quản lý môn thi"})]})})}),r&&r.includes("xem phân quyền quản lý môn thi")&&e("li",{className:"text-md my-2 hover:font-bold transition-all",children:e(x,{to:"/admin/phan-quyen-quan-ly-mon-thi",style:({isActive:t})=>t?s:void 0,children:i("div",{className:"flex items-center space-x-2",children:[e(Dr,{color:"primary"}),e("span",{children:"Phân quyền QL môn thi"})]})})}),r&&r.includes("xem câu hỏi")&&e("li",{className:"text-md my-2 hover:font-bold transition-all",children:e(x,{to:"/admin/danh-sach-cau-hoi",style:({isActive:t})=>t?s:void 0,children:i("div",{className:"flex items-center space-x-2",children:[e(y,{color:"primary"}),e("span",{children:"Ngân hàng câu hỏi"})]})})}),r&&r.includes("xem cuộc thi")&&e("li",{className:"text-md my-2 hover:font-bold transition-all",children:e(x,{to:"/admin/quan-ly-cac-cuoc-thi",style:({isActive:t})=>t?s:void 0,children:i("div",{className:"flex items-center space-x-2",children:[e(y,{color:"primary"}),e("span",{children:"Quản lý cuộc thi"})]})})}),e("li",{className:"text-md my-2 hover:font-bold transition-all hover:cursor-pointer",onClick:v,children:e("div",{children:i("div",{className:"flex items-center space-x-2",children:[e(er,{color:"primary"}),e("span",{children:"Đăng xuất"})]})})})]})]})}),e(Q,{className:"mt-2",children:e(xr,{})}),i("div",{className:"bg-[#1976d2] py-4 pl-4 mb-2 text-white text-sm mx-2 mr-2 p-2 border-t-black border-t-[1px] shadow-md",children:[e("h5",{children:"@2023 - Bản quyền thuộc đội Công nghệ thông tin - PV01"}),i("p",{children:["Thiết kế hệ thống phần mềm: ",e("span",{children:"Vũ Văn Tính"})]})]})]})}export{po as default};
