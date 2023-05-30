import{r as h,j as e,S as P,s as q,I as B,c as L,a as A,b as N,u as F,F as R,d as n,L as j,e as z,B as D,o as W,f as I,G as T,h as ce,g as he,i as de}from"./index-062f957e.js";import{S as ue,P as ge}from"./PaginationComponent-ff799b5b.js";import{d as w}from"./Add-e56f17fd.js";import{q as pe}from"./base-312a79a2.js";import{D as me}from"./DialogDelete-8ca5256c.js";import{d as M}from"./AutoAwesomeMotion-31ff343a.js";import{D as G,d as K}from"./Cancel-8937e614.js";import{D as Q,a as H}from"./DialogContent-f84fc6ad.js";import{B as _}from"./Box-bf90436a.js";import{G as x}from"./Grid-a7040e01.js";import{D as X}from"./DialogActions-f287847c.js";import{T as fe,a as be,b as ve,c as E,d as f,e as xe,f as ye}from"./Edit-863c701d.js";import{d as Ce}from"./DeleteOutline-948d5e41.js";import"./DialogContentText-ef6c130a.js";const De=h.forwardRef(function(t,o){return e(P,{direction:"up",ref:o,...t})}),Se=q(B)({position:"absolute",right:"16px",top:"4px"}),Te=L({tenchucvu:A().required("Lỗi: Vui lòng nhập tên chức vụ"),thutu:N().required("Lỗi: Vui lòng nhập thứ tự").min(1,"Thứ tự phải lớn hơn 1")}).required();function ke({open:r,onCloseDialogAdd:t,onSubmit:o}){const d=F({defaultValues:{tenchucvu:"",thutu:1},resolver:W(Te)}),c=async s=>{o&&(await o(s),d.reset())},{isSubmitting:l}=d.formState;return e(R,{children:n(Q,{maxWidth:"lg",fullWidth:!0,disableEscapeKeyDown:!0,onClose:(s,u)=>{u!=="backdropClick"&&t(s,u)},open:r,TransitionComponent:De,keepMounted:!0,"aria-describedby":"alert-dialog-slide-description",children:[n(G,{style:{display:"flex",borderBottom:"1px solid #ccc",margin:"0 12px"},children:[e(M,{style:{color:"#333",fontSize:"32px"}}),e("span",{children:"Thêm mới cấp bậc hàm"}),e(Se,{onClick:()=>t(),children:e(K,{style:{color:"#d32b2b"}})})]}),e(H,{children:n(_,{children:[l?e(j,{}):"",n("form",{onSubmit:d.handleSubmit(c),style:{width:"100%"},children:[n(x,{container:!0,spacing:1,style:{alignItems:"center",justifyContent:"center"},children:[e(x,{item:!0,xs:12,md:7,lg:7,children:e(z,{name:"tenchucvu",form:d,label:"Tên chức vụ, chức danh *",type:"text",disabled:!1})}),e(x,{item:!0,xs:12,md:5,lg:5,children:e(z,{name:"thutu",form:d,label:"Thứ tự",type:"number",disabled:!1})})]}),e(X,{children:n(D,{color:"primary",variant:"contained",disabled:l,type:"submit",style:{margin:"4px auto"},children:[e(w,{}),e("span",{children:"Thêm mới"})]})})]})]})})]})})}const ze=h.forwardRef(function(t,o){return e(P,{direction:"up",ref:o,...t})}),Oe=q(B)({position:"absolute",right:"16px",top:"4px"}),we=L({tenchucvu:A().required("Lỗi: Vui lòng nhập tên cấp bậc hàm"),thutu:N().required("Lỗi: Vui lòng nhập thứ tự").min(1,"Thứ tự phải lớn hơn 1")}).required();function _e({open:r,item:t,onCloseDialogEdit:o,onSubmit:d}){const c=F({defaultValues:{tenchucvu:"",thutu:1},resolver:W(we)}),l=c.setValue;h.useEffect(()=>{t&&(l("tenchucvu",t.tenchucvu,{shouldValidate:!0}),l("thutu",t.thutu,{shouldValidate:!0}))},[t]);const s=async y=>{if(d){const m={...y,id_edit:t._id};await d(m),o()}},{isSubmitting:u}=c.formState;return e(R,{children:n(Q,{maxWidth:"lg",fullWidth:!0,disableEscapeKeyDown:!0,onClose:(y,m)=>{m!=="backdropClick"&&o(y,m)},open:r,TransitionComponent:ze,keepMounted:!0,"aria-describedby":"alert-dialog-slide-description",children:[n(G,{style:{display:"flex",borderBottom:"1px solid #ccc",margin:"0 12px"},children:[e(M,{style:{color:"#333",fontSize:"32px"}}),e("span",{children:"Chỉnh sửa cấp bậc hàm"}),e(Oe,{onClick:()=>o(),children:e(K,{style:{color:"#d32b2b"}})})]}),e(H,{children:n(_,{children:[u?e(j,{}):"",n("form",{onSubmit:c.handleSubmit(s),style:{width:"100%"},children:[n(x,{container:!0,spacing:1,style:{alignItems:"center",justifyContent:"center"},children:[e(x,{item:!0,xs:12,md:7,lg:7,children:e(z,{name:"tenchucvu",form:c,label:"Tên chức danh, chức vụ *",type:"text",disabled:!1})}),e(x,{item:!0,xs:12,md:5,lg:5,children:e(z,{name:"thutu",form:c,label:"Thứ tự",type:"number",disabled:!1})})]}),e(X,{children:n(D,{color:"primary",variant:"contained",disabled:u,type:"submit",style:{margin:"4px auto"},children:[e(w,{}),e("span",{children:"Cập nhật"})]})})]})]})})]})})}const Ve=({list:r,page:t,onClickOpenDialogDelete:o,onClickOpenDialogEdit:d,tongbanghi:c})=>{const l=I(s=>s.authReducer.roles_x01);return n(_,{mt:4,children:[n("p",{className:"text-end my-2",children:["Tổng cộng có: ",e("span",{className:"text-xl font-bold",children:c})," bản ghi"]}),e(fe,{children:n(be,{sx:{minWidth:650},"aria-label":"simple table",children:[e(ve,{style:{backgroundColor:"#ed6c02"},children:n(E,{children:[e(f,{align:"left",style:{fontSize:"14px",color:"#fff",padding:"8px 8px"},children:"#"}),e(f,{align:"left",style:{fontSize:"14px",color:"#fff",padding:"8px 8px"},children:"Tên chức vụ, chức danh"}),e(f,{align:"left",style:{fontSize:"14px",color:"#fff",padding:"8px 8px"},children:"Thứ tự"}),e(f,{align:"right",style:{fontSize:"14px",color:"#fff",padding:"8px 8px"},children:"Thao tác"})]})}),e(xe,{children:r.map((s,u)=>n(E,{sx:{"&:last-child td, &:last-child th":{border:0}},children:[e(f,{component:"th",scope:"row",children:(t-1)*5+1+u}),e(f,{align:"left",style:{fontWeight:"bold"},children:s.tenchucvu}),e(f,{align:"left",children:s.thutu}),n(f,{align:"right",children:[l&&l.includes("sửa chức vụ")&&n(D,{variant:"contained",color:"success",size:"small",onClick:()=>d(s),children:[e(ye,{style:{fontSize:"20px",marginRight:"4px"}})," ","Sửa"]}),l&&l.includes("xóa chức vụ")&&n(D,{variant:"contained",color:"error",size:"small",style:{marginLeft:"4px"},onClick:()=>o(s._id),children:[e(Ce,{style:{fontSize:"20px",marginRight:"4px"}})," ","Xóa"]})]})]},s._id))})]})})]})},k={getChucvu(r){const t="chuc-vu/fetch";return T.get(t,{params:r})},addChucvu(r){const t="chuc-vu/add";return T.post(t,r)},editChucvu(r){const t=`chuc-vu/edit/${r.id_edit}`;return T.put(t,r)},deleteChucvu(r){const t=`chuc-vu/delete/${r}`;return T.delete(t)}},Ge=()=>{const r=I(a=>a.authReducer.roles_x01),[t,o]=h.useState({page:1,total:1});let[d,c]=ce();const l=he(),[s,u]=h.useState(0),[y,m]=h.useState([]),b=h.useMemo(()=>{const a=pe.parse(location.search);return{...a,page:Number(a.page)||1}},[location.search]),[C,S]=h.useState({status:!1,id_Delete:null}),[O,V]=h.useState({status:!1,item:null}),[J,$]=h.useState(!1),[U,v]=h.useState(!1),Y=()=>{$(!1)},Z=a=>{$(!0)},{enqueueSnackbar:g}=de(),ee=a=>{o({...t,page:a});const i={...b,page:a};c(i)};h.useEffect(()=>{(async()=>{try{v(!0);let i=await k.getChucvu(b);m(i.data.donvis),o({page:i.data.page,total:i.data.total}),u(i.data.tongbanghi),v(!1)}catch(i){i.message==="Token không hợp lệ hoặc đã hết hạn. Vui lòng đăng nhập lại"&&(l("/login"),g(i.message,{anchorOrigin:{vertical:"bottom",horizontal:"right"},variant:"error"})),g(i.response.data.message,{anchorOrigin:{vertical:"bottom",horizontal:"right"},variant:"error"}),v(!1)}})()},[b]);const te=async a=>{try{let i={...a,queryParams:b};v(!0);let p=await k.addChucvu(i);m(p.data.donvis),o({...t,total:p.data.total}),u(p.data.tongbanghi),v(!1),g("Thêm mới chức vụ thành công!",{anchorOrigin:{vertical:"bottom",horizontal:"right"},variant:"success"})}catch(i){i.message==="Token không hợp lệ hoặc đã hết hạn. Vui lòng đăng nhập lại"&&(l("/login"),g(i.message,{anchorOrigin:{vertical:"bottom",horizontal:"right"},variant:"error"})),g(i.response.data.message,{anchorOrigin:{vertical:"bottom",horizontal:"right"},variant:"error"}),v(!1)}},ae=a=>{S({status:!0,id_Delete:a})},ne=()=>{V({...O,status:!1})},ie=a=>{V({item:a,status:!0})},re=()=>{S({...C,status:!1})},oe=async a=>{const i={...a,queryParams:b};try{let p=await k.editChucvu(i);m(p.data.donvis),g(p.data.message,{anchorOrigin:{vertical:"bottom",horizontal:"right"},variant:"success"})}catch(p){p.message==="Token không hợp lệ hoặc đã hết hạn. Vui lòng đăng nhập lại"&&(l("/login"),g(p.message,{anchorOrigin:{vertical:"bottom",horizontal:"right"},variant:"error"})),g(p.response.data.message,{anchorOrigin:{vertical:"bottom",horizontal:"right"},variant:"error"})}},le=async()=>{try{let a=await k.deleteChucvu(C.id_Delete,b);m(a.data.donvis),u(a.data.tongbanghi);const i={...b,page:1};c(i),S({...C,status:!1}),g(a.data.message,{anchorOrigin:{vertical:"bottom",horizontal:"right"},variant:"success"})}catch(a){a.message==="Token không hợp lệ hoặc đã hết hạn. Vui lòng đăng nhập lại"&&(l("/login"),g(a.message,{anchorOrigin:{vertical:"bottom",horizontal:"right"},variant:"error"})),g(a.response.data.message,{anchorOrigin:{vertical:"bottom",horizontal:"right"},variant:"error"})}},se=()=>{S({...C,status:!1})};return n("div",{className:"mx-2 bg-white pb-2 px-4",children:[e("img",{className:"w-[80px] m-auto mt-2 pt-2",src:"https://thuviensocongantinhhungyen.vercel.app/cong-an-hieu.png",alt:"anhnen"}),e("h3",{className:"text-xl text-gray-900 text-center font-bold",children:"Quản lý chức vụ, chức danh công tác trong CAND"}),r&&r.includes("thêm chức vụ")&&e("div",{className:"text-end mb-4",children:n(D,{variant:"contained",onClick:Z,children:[e(w,{}),"Thêm mới chức vụ"]})}),e("div",{children:U?e(ue,{variant:"rectangular",width:"100%",height:400}):e(Ve,{list:y,page:t.page,onClickOpenDialogDelete:ae,onClickOpenDialogEdit:ie,tongbanghi:s})}),e(ke,{open:J,onCloseDialogAdd:Y,onSubmit:te}),e(_e,{open:O.status,item:O.item,onCloseDialogEdit:ne,onSubmit:oe}),e(me,{open:C.status,onCloseDialogDelete:re,onConfirmDelete:le,onCancelDelete:se}),e(ge,{page:t.page,totalPage:t.total,onChangePage:ee})]})};export{Ge as default};
