import{r as c,j as e,S as B,s as L,I as P,c as q,a as F,b as N,u as O,F as A,d as n,L as R,e as y,B as D,o as j,f as W,g as I,h as me,i as ge}from"./index-30f8b152.js";import{S as ue,P as pe}from"./PaginationComponent-edc6e2d1.js";import{G as h,d as M,a as fe,b as be}from"./Backspace-c4848dc5.js";import{q as xe}from"./base-312a79a2.js";import{d as ye,D as De}from"./DeleteOutline-931c49bb.js";import{d as K}from"./AutoAwesomeMotion-d0209c3c.js";import{D as X,a as G,d as H,b as Q}from"./Cancel-2bceaa6a.js";import{B as V}from"./Box-502f7273.js";import{D as J}from"./DialogActions-ad1c760b.js";import{T as ve,a as Se,b as Te,c as $,d as f,e as Ce,f as ke}from"./Edit-2cf38396.js";import{m as w}from"./monthiApi-591537cb.js";const we=c.forwardRef(function(l,a){return e(B,{direction:"up",ref:a,...l})}),ze=L(P)({position:"absolute",right:"16px",top:"4px"}),Oe=q({tenmonthi:F().required("Lỗi: Vui lòng nhập tên môn thi"),thutu:N().required("Lỗi: Vui lòng nhập thứ tự").min(1,"Thứ tự phải lớn hơn 1")}).required();function Me({open:u,onCloseDialogAddDonvi:l,onSubmit:a}){const d=O({defaultValues:{tenmonthi:"",mota:"",thutu:1},resolver:j(Oe)}),s=async r=>{a&&(await a(r),d.reset())},{isSubmitting:o}=d.formState;return e(A,{children:n(X,{maxWidth:"lg",fullWidth:!0,disableEscapeKeyDown:!0,onClose:(r,m)=>{m!=="backdropClick"&&l(r,m)},open:u,TransitionComponent:we,keepMounted:!0,"aria-describedby":"alert-dialog-slide-description",children:[n(G,{style:{display:"flex",borderBottom:"1px solid #ccc",margin:"0 12px"},children:[e(K,{style:{color:"#333",fontSize:"32px"}}),e("span",{children:"Thêm mới tên môn thi"}),e(ze,{onClick:()=>l(),children:e(H,{style:{color:"#d32b2b"}})})]}),e(Q,{children:n(V,{children:[o?e(R,{}):"",n("form",{onSubmit:d.handleSubmit(s),style:{width:"100%"},children:[n(h,{container:!0,spacing:1,style:{alignItems:"center",justifyContent:"center"},children:[e(h,{item:!0,xs:12,md:4,lg:4,children:e(y,{name:"tenmonthi",form:d,label:"Tên môn thi *",type:"text",disabled:!1})}),e(h,{item:!0,xs:12,md:6,lg:6,children:e(y,{name:"mota",form:d,label:"Mô tả",type:"text",disabled:!1})}),e(h,{item:!0,xs:12,md:2,lg:2,children:e(y,{name:"thutu",form:d,label:"Thứ tự",type:"number",disabled:!1})})]}),e(J,{children:n(D,{color:"primary",variant:"contained",disabled:o,type:"submit",style:{margin:"4px auto"},children:[e(M,{}),e("span",{children:"Thêm mới"})]})})]})]})})]})})}const Ve=({donviList:u,page:l,onClickOpenDialogDelete:a,onClickOpenDialogEditDonvi:d,tongbanghi:s})=>{const o=W(r=>r.authReducer.roles_x01);return I(),n(V,{mt:4,children:[n("p",{className:"text-end my-2",children:["Tổng cộng có: ",e("span",{className:"text-xl font-bold",children:s})," bản ghi"]}),e(ve,{children:n(Se,{sx:{minWidth:650},"aria-label":"simple table",children:[e(Te,{style:{backgroundColor:"#1976d2"},children:n($,{children:[e(f,{align:"left",style:{fontSize:"14px",color:"#fff",padding:"8px 8px"},children:"#"}),e(f,{align:"left",style:{fontSize:"14px",color:"#fff",padding:"8px 8px"},children:"Tên môn thi"}),e(f,{align:"left",style:{fontSize:"14px",color:"#fff",padding:"8px 8px"},children:"Mô tả"}),e(f,{align:"left",style:{fontSize:"14px",color:"#fff",padding:"8px 8px"},children:"Thứ tự"}),e(f,{align:"right",style:{fontSize:"14px",color:"#fff",padding:"8px 8px"},children:"Thao tác"})]})}),e(Ce,{children:u.map((r,m)=>n($,{sx:{"&:last-child td, &:last-child th":{border:0}},children:[e(f,{component:"th",scope:"row",children:(l-1)*5+1+m}),e(f,{align:"left",style:{fontWeight:"bold"},children:r.tenmonthi}),e(f,{align:"left",children:r.mota}),e(f,{align:"left",children:r.thutu}),n(f,{align:"right",children:[o&&o.includes("sửa môn thi")&&n(D,{variant:"contained",color:"success",size:"small",onClick:()=>d(r),children:[e(ke,{style:{fontSize:"20px",marginRight:"4px"}})," ","Sửa"]}),o&&o.includes("xóa môn thi")&&n(D,{variant:"contained",color:"error",size:"small",style:{marginLeft:"4px"},onClick:()=>a(r._id),children:[e(ye,{style:{fontSize:"20px",marginRight:"4px"}})," ","Xóa"]})]})]},r._id))})]})})]})},_e=c.forwardRef(function(l,a){return e(B,{direction:"up",ref:a,...l})}),Ee=L(P)({position:"absolute",right:"16px",top:"4px"}),$e=q({tenmonthi:F().required("Lỗi: Vui lòng nhập tên môn thi"),thutu:N().required("Lỗi: Vui lòng nhập thứ tự").min(1,"Thứ tự phải lớn hơn 1")}).required();function Be({open:u,onCloseDialogEditDonvi:l,donvi:a,onSubmit:d}){const s=O({defaultValues:{tenmonthi:"",mota:"",thutu:1},resolver:j($e)}),o=s.setValue;c.useEffect(()=>{a&&(o("tenmonthi",a.tenmonthi,{shouldValidate:!0}),o("thutu",a.thutu,{shouldValidate:!0}),o("mota",a.mota,{shouldValidate:!0}))},[a]);const r=async S=>{if(d){const b={...S,id_edit:a._id};await d(b),l()}},{isSubmitting:m}=s.formState;return e(A,{children:n(X,{maxWidth:"lg",fullWidth:!0,disableEscapeKeyDown:!0,onClose:(S,b)=>{b!=="backdropClick"&&l(S,b)},open:u,TransitionComponent:_e,keepMounted:!0,"aria-describedby":"alert-dialog-slide-description",children:[n(G,{style:{display:"flex",borderBottom:"1px solid #ccc",margin:"0 12px"},children:[e(K,{style:{color:"#333",fontSize:"32px"}}),e("span",{children:"Chỉnh sửa đội nghiệp vụ, CAX"}),e(Ee,{onClick:()=>l(),children:e(H,{style:{color:"#d32b2b"}})})]}),e(Q,{children:n(V,{children:[m?e(R,{}):"",n("form",{onSubmit:s.handleSubmit(r),style:{width:"100%"},children:[n(h,{container:!0,spacing:1,style:{alignItems:"center",justifyContent:"center"},children:[e(h,{item:!0,xs:12,md:4,lg:4,children:e(y,{name:"tenmonthi",form:s,label:"Tên đội, cax *",type:"text",disabled:!1})}),e(h,{item:!0,xs:12,md:6,lg:6,children:e(y,{name:"mota",form:s,label:"Ký hiệu *",type:"text",disabled:!1})}),e(h,{item:!0,xs:12,md:2,lg:2,children:e(y,{name:"thutu",form:s,label:"Thứ tự",type:"number",disabled:!1})})]}),e(J,{children:n(D,{color:"primary",variant:"contained",disabled:m,type:"submit",style:{margin:"4px auto"},children:[e(M,{}),e("span",{children:"Cập nhật"})]})})]})]})})]})})}const Xe=()=>{const u=W(t=>t.authReducer.roles_x01),[l,a]=c.useState({page:1,total:1});let[d,s]=me();const o=I(),[r,m]=c.useState(0),[S,b]=c.useState([]),x=c.useMemo(()=>{const t=xe.parse(location.search);return{...t,mota:t.mota||"",tenmonthi:t.tenmonthi||"",page:Number(t.page)||1}},[location.search]),[T,C]=c.useState({status:!1,id_Delete:null}),[z,_]=c.useState({status:!1,donvi:null}),[U,E]=c.useState(!1),[Y,v]=c.useState(!1),Z=()=>{E(!1)},ee=t=>{E(!0)},{enqueueSnackbar:g}=ge(),k=O({defaultValues:{tenmonthi:"",mota:""}}),te=t=>{a({...l,page:t});const i={...x,page:t};s(i)},ne=async t=>{s({...x,...t,page:1})};c.useEffect(()=>{(async()=>{try{v(!0);let i=await w.getMonthi(x);b(i.data.donvis),a({page:i.data.page,total:i.data.total}),m(i.data.tongbanghi),v(!1)}catch(i){i.message==="Token không hợp lệ hoặc đã hết hạn. Vui lòng đăng nhập lại"&&(o("/login"),g(i.message,{anchorOrigin:{vertical:"bottom",horizontal:"right"},variant:"error"})),g(i.message,{anchorOrigin:{vertical:"bottom",horizontal:"right"},variant:"error"}),v(!1)}})()},[x]);const ae=async t=>{try{let i={...t,queryParams:x};v(!0);let p=await w.addMonthi(i);b(p.data.donvis),a({...l,total:p.data.total}),m(p.data.tongbanghi),v(!1),g("Thêm mới môn thi thành công!",{anchorOrigin:{vertical:"bottom",horizontal:"right"},variant:"success"})}catch(i){i.message==="Token không hợp lệ hoặc đã hết hạn. Vui lòng đăng nhập lại"&&(o("/login"),g(i.message,{anchorOrigin:{vertical:"bottom",horizontal:"right"},variant:"error"})),g(i.message,{anchorOrigin:{vertical:"bottom",horizontal:"right"},variant:"error"}),v(!1)}},ie=()=>{k.reset()},le=t=>{C({status:!0,id_Delete:t})},oe=()=>{_({...z,status:!1})},re=t=>{_({donvi:t,status:!0})},se=()=>{C({...T,status:!1})},de=async t=>{const i={...t,queryParams:x};try{let p=await w.editMonthi(i);b(p.data.donvis),g(p.data.message,{anchorOrigin:{vertical:"bottom",horizontal:"right"},variant:"success"})}catch(p){p.message==="Token không hợp lệ hoặc đã hết hạn. Vui lòng đăng nhập lại"&&(o("/login"),g(p.message,{anchorOrigin:{vertical:"bottom",horizontal:"right"},variant:"error"})),g(p.message,{anchorOrigin:{vertical:"bottom",horizontal:"right"},variant:"error"})}},ce=async()=>{try{let t=await w.deleteMonthi(T.id_Delete,x);b(t.data.donvis),m(t.data.tongbanghi),a({...l,total:t.data.total});const i={...x,page:1};s(i),C({...T,status:!1}),g(t.data.message,{anchorOrigin:{vertical:"bottom",horizontal:"right"},variant:"success"})}catch(t){t.message==="Token không hợp lệ hoặc đã hết hạn. Vui lòng đăng nhập lại"&&(o("/login"),g(t.message,{anchorOrigin:{vertical:"bottom",horizontal:"right"},variant:"error"})),g(t.message,{anchorOrigin:{vertical:"bottom",horizontal:"right"},variant:"error"})}},he=()=>{C({...T,status:!1})};return n("div",{className:"mx-2 bg-white pb-2 px-4",children:[e("h3",{className:"text-gray-900 text-center mt-2 pt-4 font-bold sm:text-[14px] md:text-[18px]",children:"Quản lý môn thi nghiệp vụ"}),e("div",{className:"p-2 rounded-md shadow-lg",children:e("form",{onSubmit:k.handleSubmit(ne),style:{width:"100%"},children:n("fieldset",{style:{border:"1px solid #ccc",paddingBlockEnd:"12px"},children:[e("legend",{style:{paddingInline:"12px",fontWeight:"bold"},children:"Tra cứu môn thi:"}),n(h,{container:!0,spacing:1,style:{padding:"16px"},children:[e(h,{item:!0,xs:12,md:6,lg:6,children:e(y,{name:"tenmonthi",label:"Tên môn thi",form:k,disabled:!1})}),e(h,{item:!0,xs:12,md:6,lg:6,children:e(y,{name:"mota",label:"Mô tả",form:k,disabled:!1})}),e(h,{item:!0,xs:12,md:12,lg:12,children:n("div",{className:"flex flex-col space-y-2 md:space-y-0 md:space-x-2 md:items-center md:justify-center md:flex-row",children:[n(D,{color:"primary",variant:"contained",type:"submit",style:{marginRight:"4px"},children:[e(fe,{}),e("span",{children:"Tìm kiếm"})]}),n(D,{variant:"contained",onClick:ie,color:"warning",children:[e("span",{className:"mr-2",children:"Xóa trắng"}),e(be,{})]})]})})]})]})})}),u&&u.includes("thêm môn thi")&&e("div",{className:"text-end mb-4 mt-4",children:n(D,{variant:"contained",onClick:ee,children:[e(M,{}),"Thêm mới môn thi"]})}),e("div",{children:Y?e(ue,{variant:"rectangular",width:"100%",height:400}):e(Ve,{donviList:S,page:l.page,onClickOpenDialogDelete:le,onClickOpenDialogEditDonvi:re,tongbanghi:r})}),e(Me,{open:U,onCloseDialogAddDonvi:Z,onSubmit:ae}),e(Be,{open:z.status,donvi:z.donvi,onCloseDialogEditDonvi:oe,onSubmit:de}),e(De,{open:T.status,onCloseDialogDelete:se,onConfirmDelete:ce,onCancelDelete:he}),e(pe,{page:l.page,totalPage:l.total,onChangePage:te})]})};export{Xe as default};
