import{G as A,r as h,j as e,S as P,s as X,I as R,c as j,a as C,b as W,u as L,F as I,d as i,L as K,e as x,B as v,o as M,f as G,h as fe,g as be,i as xe}from"./index-484a20f9.js";import{S as ye,P as ve}from"./PaginationComponent-dc7ad706.js";import{d as q}from"./Add-e46fe588.js";import{d as De}from"./Search-722ccc49.js";import{d as Se}from"./Backspace-371c2afd.js";import{q as Ce}from"./base-312a79a2.js";import{D as ke}from"./DialogDelete-fa70bb81.js";import{S as Te}from"./index-493fbffb.js";import{d as Q}from"./AutoAwesomeMotion-b2af1770.js";import{D as H,d as J}from"./Cancel-0de889ae.js";import{S as U}from"./index-c9980294.js";import{D as Y,a as Z}from"./DialogContent-ae71f54b.js";import{B as E}from"./Box-b19bece4.js";import{G as c}from"./Grid-6315e44d.js";import{D as ee}from"./DialogActions-10bf4cc1.js";import{T as ze,a as we,b as Oe,c as N,d as p,e as Ae,f as Ve}from"./Edit-caa17f44.js";import{d as _e}from"./DeleteOutline-771fa745.js";import{d as Le}from"./donviApi-9c2666a3.js";import"./DialogContentText-dc7333b8.js";import"./MenuItem-9e8b7541.js";const V={getDoi(l){const n="api/doi/fetch";return A.get(n,{params:l})},addDoi(l){const n="api/doi/add";return A.post(n,l)},editDoi(l){const n=`api/doi/edit/${l.id_edit}`;return A.put(n,l)},deleteDoi(l,n){const o=`api/doi/delete/${l}`;return A.delete(o,{params:n})}},qe=h.forwardRef(function(n,o){return e(P,{direction:"up",ref:o,...n})}),Ee=X(R)({position:"absolute",right:"16px",top:"4px"}),$e=j({tendoi:C().required("Lỗi: Vui lòng nhập tên đội, CAX"),kyhieu:C().required("Lỗi: Vui lòng nhập ký hiệu"),donvi:C().required("Lỗi: Chưa chọn đơn vị cấp trên"),thutu:W().required("Lỗi: Vui lòng nhập thứ tự").min(1,"Thứ tự phải lớn hơn 1")}).required();function Fe({open:l,onCloseDialogAddDonvi:n,onSubmit:o,donvicha:y}){const d=L({defaultValues:{tendoi:"",kyhieu:"",donvi:"",thutu:1},resolver:M($e)}),r=async m=>{o&&(await o(m),d.reset())},{isSubmitting:s}=d.formState;return e(I,{children:i(Y,{maxWidth:"lg",fullWidth:!0,disableEscapeKeyDown:!0,onClose:(m,f)=>{f!=="backdropClick"&&n(m,f)},open:l,TransitionComponent:qe,keepMounted:!0,"aria-describedby":"alert-dialog-slide-description",children:[i(H,{style:{display:"flex",borderBottom:"1px solid #ccc",margin:"0 12px"},children:[e(Q,{style:{color:"#333",fontSize:"32px"}}),e("span",{children:"Thêm mới đội nghiệp vụ, CAX và tương đương"}),e(Ee,{onClick:()=>n(),children:e(J,{style:{color:"#d32b2b"}})})]}),e(Z,{children:i(E,{children:[s?e(K,{}):"",i("form",{onSubmit:d.handleSubmit(r),style:{width:"100%"},children:[i(c,{container:!0,spacing:1,style:{alignItems:"center",justifyContent:"center"},children:[e(c,{item:!0,xs:12,md:3,lg:3,children:e(U,{name:"donvi",form:d,label:"Đơn vị",options:y,disabled:!1})}),e(c,{item:!0,xs:12,md:4,lg:4,children:e(x,{name:"tendoi",form:d,label:"Tên đội, cax *",type:"text",disabled:!1})}),e(c,{item:!0,xs:12,md:3,lg:3,children:e(x,{name:"kyhieu",form:d,label:"Ký hiệu *",type:"text",disabled:!1})}),e(c,{item:!0,xs:12,md:2,lg:2,children:e(x,{name:"thutu",form:d,label:"Thứ tự",type:"number",disabled:!1})})]}),e(ee,{children:i(v,{color:"primary",variant:"contained",disabled:s,type:"submit",style:{margin:"4px auto"},children:[e(q,{}),e("span",{children:"Thêm mới"})]})})]})]})})]})})}const Be=({donviList:l,page:n,onClickOpenDialogDelete:o,onClickOpenDialogEditDonvi:y,tongbanghi:d})=>{const r=G(s=>s.authReducer.roles_x01);return i(E,{mt:4,children:[i("p",{className:"text-end my-2",children:["Tổng cộng có: ",e("span",{className:"text-xl font-bold",children:d})," bản ghi"]}),e(ze,{children:i(we,{sx:{minWidth:650},"aria-label":"simple table",children:[e(Oe,{style:{backgroundColor:"#ed6c02"},children:i(N,{children:[e(p,{align:"left",style:{fontSize:"14px",color:"#fff",padding:"8px 8px"},children:"#"}),e(p,{align:"left",style:{fontSize:"14px",color:"#fff",padding:"8px 8px"},children:"Tên đội, CAX"}),e(p,{align:"left",style:{fontSize:"14px",color:"#fff",padding:"8px 8px"},children:"Ký hiệu"}),e(p,{align:"left",style:{fontSize:"14px",color:"#fff",padding:"8px 8px"},children:"Đơn vị"}),e(p,{align:"left",style:{fontSize:"14px",color:"#fff",padding:"8px 8px"},children:"Thứ tự"}),e(p,{align:"right",style:{fontSize:"14px",color:"#fff",padding:"8px 8px"},children:"Thao tác"})]})}),e(Ae,{children:l.map((s,m)=>i(N,{sx:{"&:last-child td, &:last-child th":{border:0}},children:[e(p,{component:"th",scope:"row",children:(n-1)*5+1+m}),e(p,{align:"left",style:{fontWeight:"bold"},children:s.tendoi}),e(p,{align:"left",children:s.kyhieu}),e(p,{align:"left",children:s.donvi.tendonvi}),e(p,{align:"left",children:s.thutu}),i(p,{align:"right",children:[r&&r.includes("sửa đội")&&i(v,{variant:"contained",color:"success",size:"small",onClick:()=>y(s),children:[e(Ve,{style:{fontSize:"20px",marginRight:"4px"}})," ","Sửa"]}),r&&r.includes("xóa đội")&&i(v,{variant:"contained",color:"error",size:"small",style:{marginLeft:"4px"},onClick:()=>o(s._id),children:[e(_e,{style:{fontSize:"20px",marginRight:"4px"}})," ","Xóa"]})]})]},s._id))})]})})]})},Ne=h.forwardRef(function(n,o){return e(P,{direction:"up",ref:o,...n})}),Pe=X(R)({position:"absolute",right:"16px",top:"4px"}),Xe=j({tendoi:C().required("Lỗi: Vui lòng nhập tên đội, CAX"),kyhieu:C().required("Lỗi: Vui lòng nhập ký hiệu"),donvi:C().required("Lỗi: Vui lòng chọn đơn vị"),thutu:W().required("Lỗi: Vui lòng nhập thứ tự").min(1,"Thứ tự phải lớn hơn 1")}).required();function Re({open:l,onCloseDialogEditDonvi:n,donvi:o,onSubmit:y,donvicha:d}){const r=L({defaultValues:{tendoi:"",donvi:"",kyhieu:"",thutu:1},resolver:M(Xe)}),s=r.setValue;h.useEffect(()=>{o&&(s("tendoi",o.tendoi,{shouldValidate:!0}),s("donvi",o.donvi._id,{shouldValidate:!0}),s("thutu",o.thutu,{shouldValidate:!0}),s("kyhieu",o.kyhieu,{shouldValidate:!0}))},[o]);const m=async k=>{if(y){const D={...k,id_edit:o._id};await y(D),n()}},{isSubmitting:f}=r.formState;return e(I,{children:i(Y,{maxWidth:"lg",fullWidth:!0,disableEscapeKeyDown:!0,onClose:(k,D)=>{D!=="backdropClick"&&n(k,D)},open:l,TransitionComponent:Ne,keepMounted:!0,"aria-describedby":"alert-dialog-slide-description",children:[i(H,{style:{display:"flex",borderBottom:"1px solid #ccc",margin:"0 12px"},children:[e(Q,{style:{color:"#333",fontSize:"32px"}}),e("span",{children:"Chỉnh sửa đội nghiệp vụ, CAX"}),e(Pe,{onClick:()=>n(),children:e(J,{style:{color:"#d32b2b"}})})]}),e(Z,{children:i(E,{children:[f?e(K,{}):"",i("form",{onSubmit:r.handleSubmit(m),style:{width:"100%"},children:[i(c,{container:!0,spacing:1,style:{alignItems:"center",justifyContent:"center"},children:[e(c,{item:!0,xs:12,md:3,lg:3,children:e(U,{name:"donvi",form:r,label:"Đơn vị",options:d,disabled:!1})}),e(c,{item:!0,xs:12,md:4,lg:4,children:e(x,{name:"tendoi",form:r,label:"Tên đội, cax *",type:"text",disabled:!1})}),e(c,{item:!0,xs:12,md:3,lg:3,children:e(x,{name:"kyhieu",form:r,label:"Ký hiệu *",type:"text",disabled:!1})}),e(c,{item:!0,xs:12,md:2,lg:2,children:e(x,{name:"thutu",form:r,label:"Thứ tự",type:"number",disabled:!1})})]}),e(ee,{children:i(v,{color:"primary",variant:"contained",disabled:f,type:"submit",style:{margin:"4px auto"},children:[e(q,{}),e("span",{children:"Cập nhật"})]})})]})]})})]})})}const st=()=>{const l=G(t=>t.authReducer.roles_x01),[n,o]=h.useState({page:1,total:1});let[y,d]=fe();const r=be(),[s,m]=h.useState(0),[f,k]=h.useState([]),[D,w]=h.useState([]),b=h.useMemo(()=>{const t=Ce.parse(location.search);return{...t,kyhieu:t.kyhieu||"",tendoi:t.tendoi||"",donvi:t.donvi||"",page:Number(t.page)||1}},[location.search]),[T,O]=h.useState({status:!1,id_Delete:null}),[_,$]=h.useState({status:!1,donvi:null}),[te,F]=h.useState(!1),[ie,S]=h.useState(!1),ne=()=>{F(!1)},ae=t=>{F(!0)},{enqueueSnackbar:g}=xe(),z=L({defaultValues:{tendoi:"",kyhieu:"",donvi:""}}),oe=t=>{o({...n,page:t});const a={...b,page:t};d(a)},le=async t=>{d({...b,...t,page:1})};h.useEffect(()=>{(async()=>{try{let{data:a}=await Le.getDonviQuanly();const u=[];a.donvis.forEach(B=>u.push({label:B.kyhieu,value:B._id})),k(u)}catch(a){g(a.response.data.message,{anchorOrigin:{vertical:"bottom",horizontal:"right"},variant:"error"})}})()},[]),h.useEffect(()=>{(async()=>{try{S(!0);let a=await V.getDoi(b);w(a.data.donvis),o({page:a.data.page,total:a.data.total}),m(a.data.tongbanghi),S(!1)}catch(a){a.message==="Token không hợp lệ hoặc đã hết hạn. Vui lòng đăng nhập lại"&&(r("/login"),g(a.message,{anchorOrigin:{vertical:"bottom",horizontal:"right"},variant:"error"})),g(a.response.data.message,{anchorOrigin:{vertical:"bottom",horizontal:"right"},variant:"error"}),S(!1)}})()},[b]);const re=async t=>{try{let a={...t,queryParams:b};S(!0);let u=await V.addDoi(a);w(u.data.donvis),o({...n,total:u.data.total}),m(u.data.tongbanghi),S(!1),g("Thêm mới đội, CAX thành công!",{anchorOrigin:{vertical:"bottom",horizontal:"right"},variant:"success"})}catch(a){a.message==="Token không hợp lệ hoặc đã hết hạn. Vui lòng đăng nhập lại"&&(r("/login"),g(a.message,{anchorOrigin:{vertical:"bottom",horizontal:"right"},variant:"error"})),g(a.response.data.message,{anchorOrigin:{vertical:"bottom",horizontal:"right"},variant:"error"}),S(!1)}},se=()=>{z.reset()},de=t=>{O({status:!0,id_Delete:t})},ce=()=>{$({..._,status:!1})},he=t=>{$({donvi:t,status:!0})},ue=()=>{O({...T,status:!1})},ge=async t=>{const a={...t,queryParams:b};try{let u=await V.editDoi(a);w(u.data.donvis),g(u.data.message,{anchorOrigin:{vertical:"bottom",horizontal:"right"},variant:"success"})}catch(u){u.message==="Token không hợp lệ hoặc đã hết hạn. Vui lòng đăng nhập lại"&&(r("/login"),g(u.message,{anchorOrigin:{vertical:"bottom",horizontal:"right"},variant:"error"})),g(u.response.data.message,{anchorOrigin:{vertical:"bottom",horizontal:"right"},variant:"error"})}},pe=async()=>{try{let t=await V.deleteDoi(T.id_Delete,b);w(t.data.donvis),m(t.data.tongbanghi);const a={...b,page:1};d(a),O({...T,status:!1}),g(t.data.message,{anchorOrigin:{vertical:"bottom",horizontal:"right"},variant:"success"})}catch(t){t.message==="Token không hợp lệ hoặc đã hết hạn. Vui lòng đăng nhập lại"&&(r("/login"),g(t.message,{anchorOrigin:{vertical:"bottom",horizontal:"right"},variant:"error"})),g(t.response.data.message,{anchorOrigin:{vertical:"bottom",horizontal:"right"},variant:"error"})}},me=()=>{O({...T,status:!1})};return i("div",{className:"mx-2 bg-white pb-2 px-4",children:[e("img",{className:"w-[80px] m-auto mt-2 pt-2",src:"https://thuviensocongantinhhungyen.vercel.app/cong-an-hieu.png",alt:"anhnen"}),e("h3",{className:"text-xl text-gray-900 text-center font-bold",children:"Quản lý tên đội nghiệp vụ và công an cấp xã"}),l&&l.includes("thêm đội")&&e("div",{className:"text-end mb-4",children:i(v,{variant:"contained",onClick:ae,children:[e(q,{}),"Thêm mới đội, CAX"]})}),e("div",{className:"p-2 rounded-md shadow-lg",children:e("form",{onSubmit:z.handleSubmit(le),style:{width:"100%"},children:i("fieldset",{style:{border:"1px solid #ccc",paddingBlockEnd:"12px"},children:[e("legend",{style:{paddingInline:"12px",fontWeight:"bold"},children:"Tra cứu đội nghiệp vụ, CAX và tương đương:"}),i(c,{container:!0,spacing:1,style:{padding:"16px"},children:[e(c,{item:!0,xs:12,md:4,lg:4,children:e(Te,{name:"donvi",form:z,label:"Đơn vị",options:f,disabled:!1})}),e(c,{item:!0,xs:12,md:4,lg:5,children:e(x,{name:"tendoi",label:"Tên đội, CAX",form:z,disabled:!1})}),e(c,{item:!0,xs:12,md:4,lg:3,children:e(x,{name:"kyhieu",label:"Ký hiệu",form:z,disabled:!1})}),i(c,{item:!0,xs:12,md:12,lg:12,style:{textAlign:"center",display:"flex",justifyContent:"center"},children:[i(v,{color:"primary",variant:"contained",type:"submit",style:{marginRight:"4px"},children:[e(De,{}),e("span",{children:"Tìm kiếm"})]}),i(v,{variant:"contained",onClick:se,color:"warning",children:[e("span",{className:"mr-2",children:"Xóa trắng"}),e(Se,{})]})]})]})]})})}),e("div",{children:ie?e(ye,{variant:"rectangular",width:"100%",height:400}):e(Be,{donviList:D,page:n.page,onClickOpenDialogDelete:de,onClickOpenDialogEditDonvi:he,tongbanghi:s})}),e(Fe,{donvicha:f,open:te,onCloseDialogAddDonvi:ne,onSubmit:re}),e(Re,{open:_.status,donvi:_.donvi,onCloseDialogEditDonvi:ce,onSubmit:ge,donvicha:f}),e(ke,{open:T.status,onCloseDialogDelete:ue,onConfirmDelete:pe,onCancelDelete:me}),e(ve,{page:n.page,totalPage:n.total,onChangePage:oe})]})};export{st as default};