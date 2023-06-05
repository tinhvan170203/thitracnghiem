import{k as fe,l as pe,s as H,Y as Le,m as ke,_ as m,r as i,n as me,p as re,v as E,d as B,w as ve,aj as be,ak as $e,j as p,H as Fe,al as de,am as Ue,X as Ve,M as je,a5 as Ge,g as Je,i as Qe,A as Ze,J as et,K as tt,ab as ot}from"./index-e0961e99.js";import{m as lt}from"./monthiApi-537ed8d8.js";import{M as rt}from"./MenuItem-38c8e3d3.js";import{K as nt,a as at}from"./KeyboardArrowRight-9c20a043.js";let X;function Ae(){if(X)return X;const e=document.createElement("div"),t=document.createElement("div");return t.style.width="10px",t.style.height="1px",e.appendChild(t),e.dir="rtl",e.style.fontSize="14px",e.style.width="4px",e.style.height="1px",e.style.position="absolute",e.style.top="-1000px",e.style.overflow="scroll",document.body.appendChild(e),X="reverse",e.scrollLeft>0?X="default":(e.scrollLeft=1,e.scrollLeft===0&&(X="negative")),document.body.removeChild(e),X}function Re(e,t){const l=e.scrollLeft;if(t!=="rtl")return l;switch(Ae()){case"negative":return e.scrollWidth-e.clientWidth+l;case"reverse":return e.scrollWidth-e.clientWidth-l;default:return l}}function st(e){return pe("MuiTab",e)}const it=fe("MuiTab",["root","labelIcon","textColorInherit","textColorPrimary","textColorSecondary","selected","disabled","fullWidth","wrapped","iconWrapper"]),A=it,ct=["className","disabled","disableFocusRipple","fullWidth","icon","iconPosition","indicator","label","onChange","onClick","onFocus","selected","selectionFollowsFocus","textColor","value","wrapped"],dt=e=>{const{classes:t,textColor:l,fullWidth:a,wrapped:n,icon:d,label:h,selected:v,disabled:u}=e,g={root:["root",d&&h&&"labelIcon",`textColor${ke(l)}`,a&&"fullWidth",n&&"wrapped",v&&"selected",u&&"disabled"],iconWrapper:["iconWrapper"]};return ve(g,st,t)},ut=H(Le,{name:"MuiTab",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:l}=e;return[t.root,l.label&&l.icon&&t.labelIcon,t[`textColor${ke(l.textColor)}`],l.fullWidth&&t.fullWidth,l.wrapped&&t.wrapped]}})(({theme:e,ownerState:t})=>m({},e.typography.button,{maxWidth:360,minWidth:90,position:"relative",minHeight:48,flexShrink:0,padding:"12px 16px",overflow:"hidden",whiteSpace:"normal",textAlign:"center"},t.label&&{flexDirection:t.iconPosition==="top"||t.iconPosition==="bottom"?"column":"row"},{lineHeight:1.25},t.icon&&t.label&&{minHeight:72,paddingTop:9,paddingBottom:9,[`& > .${A.iconWrapper}`]:m({},t.iconPosition==="top"&&{marginBottom:6},t.iconPosition==="bottom"&&{marginTop:6},t.iconPosition==="start"&&{marginRight:e.spacing(1)},t.iconPosition==="end"&&{marginLeft:e.spacing(1)})},t.textColor==="inherit"&&{color:"inherit",opacity:.6,[`&.${A.selected}`]:{opacity:1},[`&.${A.disabled}`]:{opacity:(e.vars||e).palette.action.disabledOpacity}},t.textColor==="primary"&&{color:(e.vars||e).palette.text.secondary,[`&.${A.selected}`]:{color:(e.vars||e).palette.primary.main},[`&.${A.disabled}`]:{color:(e.vars||e).palette.text.disabled}},t.textColor==="secondary"&&{color:(e.vars||e).palette.text.secondary,[`&.${A.selected}`]:{color:(e.vars||e).palette.secondary.main},[`&.${A.disabled}`]:{color:(e.vars||e).palette.text.disabled}},t.fullWidth&&{flexShrink:1,flexGrow:1,flexBasis:0,maxWidth:"none"},t.wrapped&&{fontSize:e.typography.pxToRem(12)})),ht=i.forwardRef(function(t,l){const a=me({props:t,name:"MuiTab"}),{className:n,disabled:d=!1,disableFocusRipple:h=!1,fullWidth:v,icon:u,iconPosition:g="top",indicator:C,label:w,onChange:f,onClick:b,onFocus:J,selected:z,selectionFollowsFocus:T,textColor:Q="inherit",value:N,wrapped:ne=!1}=a,O=re(a,ct),I=m({},a,{disabled:d,disableFocusRipple:h,selected:z,icon:!!u,iconPosition:g,label:!!w,fullWidth:v,textColor:Q,wrapped:ne}),Y=dt(I),L=u&&w&&i.isValidElement(u)?i.cloneElement(u,{className:E(Y.iconWrapper,u.props.className)}):u,K=k=>{!z&&f&&f(k,N),b&&b(k)},_=k=>{T&&!z&&f&&f(k,N),J&&J(k)};return B(ut,m({focusRipple:!h,className:E(Y.root,n),ref:l,role:"tab","aria-selected":z,disabled:d,onClick:K,onFocus:_,ownerState:I,tabIndex:z?0:-1},O,{children:[g==="top"||g==="start"?B(i.Fragment,{children:[L,w]}):B(i.Fragment,{children:[w,L]}),C]}))}),ue=ht;function bt(e){return(1+Math.sin(Math.PI*e-Math.PI/2))/2}function ft(e,t,l,a={},n=()=>{}){const{ease:d=bt,duration:h=300}=a;let v=null;const u=t[e];let g=!1;const C=()=>{g=!0},w=f=>{if(g){n(new Error("Animation cancelled"));return}v===null&&(v=f);const b=Math.min(1,(f-v)/h);if(t[e]=d(b)*(l-u)+u,b>=1){requestAnimationFrame(()=>{n(null)});return}requestAnimationFrame(w)};return u===l?(n(new Error("Element already at target position")),C):(requestAnimationFrame(w),C)}const pt=["onChange"],mt={width:99,height:99,position:"absolute",top:-9999,overflow:"scroll"};function vt(e){const{onChange:t}=e,l=re(e,pt),a=i.useRef(),n=i.useRef(null),d=()=>{a.current=n.current.offsetHeight-n.current.clientHeight};return i.useEffect(()=>{const h=be(()=>{const u=a.current;d(),u!==a.current&&t(a.current)}),v=$e(n.current);return v.addEventListener("resize",h),()=>{h.clear(),v.removeEventListener("resize",h)}},[t]),i.useEffect(()=>{d(),t(a.current)},[t]),p("div",m({style:mt,ref:n},l))}function gt(e){return pe("MuiTabScrollButton",e)}const St=fe("MuiTabScrollButton",["root","vertical","horizontal","disabled"]),xt=St;var We,Ee;const Ct=["className","direction","orientation","disabled"],yt=e=>{const{classes:t,orientation:l,disabled:a}=e;return ve({root:["root",l,a&&"disabled"]},gt,t)},wt=H(Le,{name:"MuiTabScrollButton",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:l}=e;return[t.root,l.orientation&&t[l.orientation]]}})(({ownerState:e})=>m({width:40,flexShrink:0,opacity:.8,[`&.${xt.disabled}`]:{opacity:0}},e.orientation==="vertical"&&{width:"100%",height:40,"& svg":{transform:`rotate(${e.isRtl?-90:90}deg)`}})),Tt=i.forwardRef(function(t,l){const a=me({props:t,name:"MuiTabScrollButton"}),{className:n,direction:d}=a,h=re(a,Ct),u=Fe().direction==="rtl",g=m({isRtl:u},a),C=yt(g);return p(wt,m({component:"div",className:E(C.root,n),ref:l,role:null,ownerState:g,tabIndex:null},h,{children:d==="left"?We||(We=p(nt,{fontSize:"small"})):Ee||(Ee=p(at,{fontSize:"small"}))}))}),Mt=Tt;function Bt(e){return pe("MuiTabs",e)}const Rt=fe("MuiTabs",["root","vertical","flexContainer","flexContainerVertical","centered","scroller","fixed","scrollableX","scrollableY","hideScrollbar","scrollButtons","scrollButtonsHideMobile","indicator"]),he=Rt,Wt=["aria-label","aria-labelledby","action","centered","children","className","component","allowScrollButtonsMobile","indicatorColor","onChange","orientation","ScrollButtonComponent","scrollButtons","selectionFollowsFocus","TabIndicatorProps","TabScrollButtonProps","textColor","value","variant","visibleScrollbar"],ze=(e,t)=>e===t?e.firstChild:t&&t.nextElementSibling?t.nextElementSibling:e.firstChild,Ne=(e,t)=>e===t?e.lastChild:t&&t.previousElementSibling?t.previousElementSibling:e.lastChild,le=(e,t,l)=>{let a=!1,n=l(e,t);for(;n;){if(n===e.firstChild){if(a)return;a=!0}const d=n.disabled||n.getAttribute("aria-disabled")==="true";if(!n.hasAttribute("tabindex")||d)n=l(e,n);else{n.focus();return}}},Et=e=>{const{vertical:t,fixed:l,hideScrollbar:a,scrollableX:n,scrollableY:d,centered:h,scrollButtonsHideMobile:v,classes:u}=e;return ve({root:["root",t&&"vertical"],scroller:["scroller",l&&"fixed",a&&"hideScrollbar",n&&"scrollableX",d&&"scrollableY"],flexContainer:["flexContainer",t&&"flexContainerVertical",h&&"centered"],indicator:["indicator"],scrollButtons:["scrollButtons",v&&"scrollButtonsHideMobile"],scrollableX:[n&&"scrollableX"],hideScrollbar:[a&&"hideScrollbar"]},Bt,u)},zt=H("div",{name:"MuiTabs",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:l}=e;return[{[`& .${he.scrollButtons}`]:t.scrollButtons},{[`& .${he.scrollButtons}`]:l.scrollButtonsHideMobile&&t.scrollButtonsHideMobile},t.root,l.vertical&&t.vertical]}})(({ownerState:e,theme:t})=>m({overflow:"hidden",minHeight:48,WebkitOverflowScrolling:"touch",display:"flex"},e.vertical&&{flexDirection:"column"},e.scrollButtonsHideMobile&&{[`& .${he.scrollButtons}`]:{[t.breakpoints.down("sm")]:{display:"none"}}})),Nt=H("div",{name:"MuiTabs",slot:"Scroller",overridesResolver:(e,t)=>{const{ownerState:l}=e;return[t.scroller,l.fixed&&t.fixed,l.hideScrollbar&&t.hideScrollbar,l.scrollableX&&t.scrollableX,l.scrollableY&&t.scrollableY]}})(({ownerState:e})=>m({position:"relative",display:"inline-block",flex:"1 1 auto",whiteSpace:"nowrap"},e.fixed&&{overflowX:"hidden",width:"100%"},e.hideScrollbar&&{scrollbarWidth:"none","&::-webkit-scrollbar":{display:"none"}},e.scrollableX&&{overflowX:"auto",overflowY:"hidden"},e.scrollableY&&{overflowY:"auto",overflowX:"hidden"})),It=H("div",{name:"MuiTabs",slot:"FlexContainer",overridesResolver:(e,t)=>{const{ownerState:l}=e;return[t.flexContainer,l.vertical&&t.flexContainerVertical,l.centered&&t.centered]}})(({ownerState:e})=>m({display:"flex"},e.vertical&&{flexDirection:"column"},e.centered&&{justifyContent:"center"})),Lt=H("span",{name:"MuiTabs",slot:"Indicator",overridesResolver:(e,t)=>t.indicator})(({ownerState:e,theme:t})=>m({position:"absolute",height:2,bottom:0,width:"100%",transition:t.transitions.create()},e.indicatorColor==="primary"&&{backgroundColor:(t.vars||t).palette.primary.main},e.indicatorColor==="secondary"&&{backgroundColor:(t.vars||t).palette.secondary.main},e.vertical&&{height:"100%",width:2,right:0})),kt=H(vt,{name:"MuiTabs",slot:"ScrollbarSize"})({overflowX:"auto",overflowY:"hidden",scrollbarWidth:"none","&::-webkit-scrollbar":{display:"none"}}),Ie={},$t=i.forwardRef(function(t,l){const a=me({props:t,name:"MuiTabs"}),n=Fe(),d=n.direction==="rtl",{"aria-label":h,"aria-labelledby":v,action:u,centered:g=!1,children:C,className:w,component:f="div",allowScrollButtonsMobile:b=!1,indicatorColor:J="primary",onChange:z,orientation:T="horizontal",ScrollButtonComponent:Q=Mt,scrollButtons:N="auto",selectionFollowsFocus:ne,TabIndicatorProps:O={},TabScrollButtonProps:I={},textColor:Y="primary",value:L,variant:K="standard",visibleScrollbar:_=!1}=a,k=re(a,Wt),R=K==="scrollable",x=T==="vertical",q=x?"scrollTop":"scrollLeft",Z=x?"top":"left",ee=x?"bottom":"right",ae=x?"clientHeight":"clientWidth",U=x?"height":"width",V=m({},a,{component:f,allowScrollButtonsMobile:b,indicatorColor:J,orientation:T,vertical:x,scrollButtons:N,textColor:Y,variant:K,visibleScrollbar:_,fixed:!R,hideScrollbar:R&&!_,scrollableX:R&&!x,scrollableY:R&&x,centered:g&&!R,scrollButtonsHideMobile:!b}),W=Et(V),[ge,He]=i.useState(!1),[$,Se]=i.useState(Ie),[P,Pe]=i.useState({start:!1,end:!1}),[xe,De]=i.useState({overflow:"hidden",scrollbarWidth:0}),Ce=new Map,M=i.useRef(null),j=i.useRef(null),ye=()=>{const o=M.current;let r;if(o){const c=o.getBoundingClientRect();r={clientWidth:o.clientWidth,scrollLeft:o.scrollLeft,scrollTop:o.scrollTop,scrollLeftNormalized:Re(o,n.direction),scrollWidth:o.scrollWidth,top:c.top,bottom:c.bottom,left:c.left,right:c.right}}let s;if(o&&L!==!1){const c=j.current.children;if(c.length>0){const S=c[Ce.get(L)];s=S?S.getBoundingClientRect():null}}return{tabsMeta:r,tabMeta:s}},G=de(()=>{const{tabsMeta:o,tabMeta:r}=ye();let s=0,c;if(x)c="top",r&&o&&(s=r.top-o.top+o.scrollTop);else if(c=d?"right":"left",r&&o){const y=d?o.scrollLeftNormalized+o.clientWidth-o.scrollWidth:o.scrollLeft;s=(d?-1:1)*(r[c]-o[c]+y)}const S={[c]:s,[U]:r?r[U]:0};if(isNaN($[c])||isNaN($[U]))Se(S);else{const y=Math.abs($[c]-S[c]),D=Math.abs($[U]-S[U]);(y>=1||D>=1)&&Se(S)}}),se=(o,{animation:r=!0}={})=>{r?ft(q,M.current,o,{duration:n.transitions.duration.standard}):M.current[q]=o},we=o=>{let r=M.current[q];x?r+=o:(r+=o*(d?-1:1),r*=d&&Ae()==="reverse"?-1:1),se(r)},Te=()=>{const o=M.current[ae];let r=0;const s=Array.from(j.current.children);for(let c=0;c<s.length;c+=1){const S=s[c];if(r+S[ae]>o){c===0&&(r=o);break}r+=S[ae]}return r},Xe=()=>{we(-1*Te())},Oe=()=>{we(Te())},Ye=i.useCallback(o=>{De({overflow:null,scrollbarWidth:o})},[]),Ke=()=>{const o={};o.scrollbarSizeListener=R?p(kt,{onChange:Ye,className:E(W.scrollableX,W.hideScrollbar)}):null;const r=P.start||P.end,s=R&&(N==="auto"&&r||N===!0);return o.scrollButtonStart=s?p(Q,m({orientation:T,direction:d?"right":"left",onClick:Xe,disabled:!P.start},I,{className:E(W.scrollButtons,I.className)})):null,o.scrollButtonEnd=s?p(Q,m({orientation:T,direction:d?"left":"right",onClick:Oe,disabled:!P.end},I,{className:E(W.scrollButtons,I.className)})):null,o},Me=de(o=>{const{tabsMeta:r,tabMeta:s}=ye();if(!(!s||!r)){if(s[Z]<r[Z]){const c=r[q]+(s[Z]-r[Z]);se(c,{animation:o})}else if(s[ee]>r[ee]){const c=r[q]+(s[ee]-r[ee]);se(c,{animation:o})}}}),F=de(()=>{if(R&&N!==!1){const{scrollTop:o,scrollHeight:r,clientHeight:s,scrollWidth:c,clientWidth:S}=M.current;let y,D;if(x)y=o>1,D=o<r-s-1;else{const oe=Re(M.current,n.direction);y=d?oe<c-S-1:oe>1,D=d?oe>1:oe<c-S-1}(y!==P.start||D!==P.end)&&Pe({start:y,end:D})}});i.useEffect(()=>{const o=be(()=>{M.current&&(G(),F())}),r=$e(M.current);r.addEventListener("resize",o);let s;return typeof ResizeObserver<"u"&&(s=new ResizeObserver(o),Array.from(j.current.children).forEach(c=>{s.observe(c)})),()=>{o.clear(),r.removeEventListener("resize",o),s&&s.disconnect()}},[G,F]);const ie=i.useMemo(()=>be(()=>{F()}),[F]);i.useEffect(()=>()=>{ie.clear()},[ie]),i.useEffect(()=>{He(!0)},[]),i.useEffect(()=>{G(),F()}),i.useEffect(()=>{Me(Ie!==$)},[Me,$]),i.useImperativeHandle(u,()=>({updateIndicator:G,updateScrollButtons:F}),[G,F]);const Be=p(Lt,m({},O,{className:E(W.indicator,O.className),ownerState:V,style:m({},$,O.style)}));let te=0;const _e=i.Children.map(C,o=>{if(!i.isValidElement(o))return null;const r=o.props.value===void 0?te:o.props.value;Ce.set(r,te);const s=r===L;return te+=1,i.cloneElement(o,m({fullWidth:K==="fullWidth",indicator:s&&!ge&&Be,selected:s,selectionFollowsFocus:ne,onChange:z,textColor:Y,value:r},te===1&&L===!1&&!o.props.tabIndex?{tabIndex:0}:{}))}),qe=o=>{const r=j.current,s=Ue(r).activeElement;if(s.getAttribute("role")!=="tab")return;let S=T==="horizontal"?"ArrowLeft":"ArrowUp",y=T==="horizontal"?"ArrowRight":"ArrowDown";switch(T==="horizontal"&&d&&(S="ArrowRight",y="ArrowLeft"),o.key){case S:o.preventDefault(),le(r,s,Ne);break;case y:o.preventDefault(),le(r,s,ze);break;case"Home":o.preventDefault(),le(r,null,ze);break;case"End":o.preventDefault(),le(r,null,Ne);break}},ce=Ke();return B(zt,m({className:E(W.root,w),ownerState:V,ref:l,as:f},k,{children:[ce.scrollButtonStart,ce.scrollbarSizeListener,B(Nt,{className:W.scroller,ownerState:V,style:{overflow:xe.overflow,[x?`margin${d?"Left":"Right"}`:"marginBottom"]:_?void 0:-xe.scrollbarWidth},ref:M,onScroll:ie,children:[p(It,{"aria-label":h,"aria-labelledby":v,"aria-orientation":T==="vertical"?"vertical":null,className:W.flexContainer,ownerState:V,onKeyDown:qe,ref:j,role:"tablist",children:_e}),ge&&Be]}),ce.scrollButtonEnd]}))}),Ft=$t,Xt=()=>{const[e,t]=Ve.useState("danh-sach-cau-hoi"),[l,a]=i.useState([]),[n,d]=i.useState(null);let{id:h}=je(),v=Ge();i.useEffect(()=>{let f=v.pathname.lastIndexOf("/"),b=v.pathname.slice(f+1);t(b)},[]);const u=Je(),g=(f,b)=>{t(b),u(`/admin/quan-ly-mon-thi-nang-cao/${h}/${b}`)},{enqueueSnackbar:C}=Qe();return i.useEffect(()=>{(async()=>{try{let b=await lt.getMonthiDetail(h);d(b.data.item),a(b.data.quantrinhommonthi)}catch(b){b.message==="Token không hợp lệ hoặc đã hết hạn. Vui lòng đăng nhập lại"&&(u("/login"),C(b.message,{anchorOrigin:{vertical:"bottom",horizontal:"right"},variant:"error"})),C(b.response.data.message,{anchorOrigin:{vertical:"bottom",horizontal:"right"},variant:"error"})}})()},[h]),B("div",{className:"mx-2 bg-white pb-2 px-4 shadow-2xl",children:[B("div",{className:"py-4 ml-4 mt-2",children:[p("div",{className:"my-2",children:B(Ze,{fullWidth:!0,children:[p(et,{id:"demo-simple-select-label",children:"Thay đổi quản trị môn thi"}),p(tt,{labelId:"demo-simple-select-label",id:"demo-simple-select",value:h,label:"Thay đổi quản trị môn thi",size:"small",onChange:f=>{t("danh-sach-cau-hoi"),u(`/admin/quan-ly-mon-thi-nang-cao/${f.target.value}/danh-sach-cau-hoi`)},children:l.map(f=>p(rt,{value:f._id,children:f.tenmonthi}))})]})}),p("ul",{className:"ml-4 mt-2",children:B("li",{className:"font-semibold text-sm text-gray-700",children:["Môn thi: ",p("span",{className:"text-red-800 text-md",children:n==null?void 0:n.tenmonthi})]})})]}),B(Ft,{variant:"fullWidth",value:e,onChange:g,"aria-label":"basic tabs example",scrollButtons:!0,allowScrollButtonsMobile:!0,children:[p(ue,{label:"Ngân hàng câu hỏi",value:"danh-sach-cau-hoi"}),p(ue,{label:"Quản lý cuộc thi",value:"cuoc-thi"}),p(ue,{label:"Thí sinh dự thi",value:"thi-sinh-du-thi"})]}),p(ot,{context:{}})]})};export{Xt as default};