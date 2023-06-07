import{r as u,j as e,S as U,s as J,I as D,c as R,a as $,b as w,u as B,o as E,F as V,d as i,L as X,e as v,B as T,N as De,O as Te,Q as _e,g as Z,f as j,R as we,P as Pe,H as ze,i as Oe,h as Ne,A as Me,J as $e,K as qe}from"./index-a3e82b42.js";import{d as Ve}from"./Search-55d4aa39.js";import{d as Le}from"./Backspace-038edbe0.js";import{q as Re}from"./base-312a79a2.js";import{d as I}from"./Add-9694775e.js";import{M as Be}from"./ModalLoading-3897000e.js";import{d as Ee}from"./Dashboard-8dac7142.js";import{d as ee}from"./AutoAwesomeMotion-8a5a096b.js";import{D as te,d as ie}from"./Cancel-62c222e1.js";import{d as q}from"./dayjs.min-a0318176.js";import{D as ae}from"./index-63752ce7.js";import{D as ne,a as re}from"./DialogContent-66228f14.js";import{B as A}from"./Box-7be78753.js";import{G as x}from"./Grid-f09340a2.js";import{D as le}from"./DialogActions-759a18d8.js";import{m as _}from"./monthiApi-5cda8ab6.js";import{p as M}from"./index-4d501b15.js";import{T as je,d as G,a as Y,b as H,c as Q}from"./LastPage-0a843a96.js";import{c as L,d as g,f as Ie,T as Ae,a as Fe,b as We,e as Ke}from"./Edit-1fc0b27c.js";import{d as Ge}from"./DeleteOutline-95df8af9.js";import{d as Ye,a as He}from"./Settings-2e2fe5ed.js";import{M as z}from"./MenuItem-91678fe0.js";import{d as Qe}from"./MoreVertOutlined-a5f11836.js";import{D as Ue}from"./DialogDelete-56ef9c2c.js";import"./KeyboardArrowRight-48102fd5.js";import"./Toolbar-410dc0fa.js";import"./DialogContentText-e4ee471d.js";const Je=u.forwardRef(function(o,s){return e(U,{direction:"up",ref:s,...o})}),Xe=J(D)({position:"absolute",right:"16px",top:"4px"}),Ze=R({tencuocthi:$().required("Lỗi: Vui lòng nhập tên cuộc thi"),soluongcauhoi:w().required("Lỗi: Vui lòng chọn số lượng câu hỏi"),thoigianthi:w().required("Lỗi: Vui lòng chọn thời gian thi"),ngaytochucthi:$().required("Lỗi: Vui lòng chọn ngày tổ chức thi"),password:w().required("Lỗi: Vui lòng chọn số điểm")}).required();function et({open:l,onCloseDialogAddCauhoi:o,onSubmit:s}){const r=B({defaultValues:{tencuocthi:"",password:"",thoigianthi:90,soluongcauhoi:50,ngaytochucthi:q(Date.now())},resolver:E(Ze)}),a=async c=>{s&&(await s(c),r.reset(),o())},{isSubmitting:t}=r.formState;return e(V,{children:i(ne,{maxWidth:"lg",fullWidth:!0,disableEscapeKeyDown:!0,onClose:(c,y)=>{y!=="backdropClick"&&o(c,y)},open:l,TransitionComponent:Je,keepMounted:!0,"aria-describedby":"alert-dialog-slide-description",children:[i(te,{style:{display:"flex",borderBottom:"1px solid #ccc",margin:"0 12px"},children:[e(ee,{style:{color:"#333",fontSize:"32px"}}),e("span",{children:"Thêm mới cuộc thi trắc nghiệm"}),e(Xe,{onClick:()=>o(),children:e(ie,{style:{color:"#d32b2b"}})})]}),e(re,{children:i(A,{children:[t?e(X,{}):"",i("form",{onSubmit:r.handleSubmit(a),style:{width:"100%"},children:[i(x,{container:!0,spacing:1,style:{alignItems:"center",justifyContent:"center"},children:[e(x,{item:!0,xs:12,md:12,lg:12,children:e(v,{name:"tencuocthi",form:r,label:"Tên cuộc thi trắc nghiệm *",type:"text",disabled:!1})}),e(x,{item:!0,xs:3,md:3,lg:3,children:e(v,{name:"soluongcauhoi",form:r,label:"Số lượng câu hỏi thi *",type:"number",disabled:!1})}),e(x,{item:!0,xs:3,md:3,lg:3,children:e(v,{name:"thoigianthi",form:r,label:"Thời gian làm bài thi tính bằng phút *",type:"number",disabled:!1})}),e(x,{item:!0,xs:3,md:3,lg:3,children:e(v,{name:"password",form:r,label:"Số điểm cuộc thi *",type:"number",disabled:!1})}),e(x,{item:!0,xs:3,md:3,lg:3,children:e(ae,{name:"ngaytochucthi",form:r,label:"Ngày tổ chức cuộc thi *",disabled:!1})})]}),e(le,{children:i(T,{color:"primary",variant:"contained",disabled:t,type:"submit",style:{margin:"4px auto"},children:[e(I,{}),e("span",{children:"Thêm mới cuộc thi"})]})})]})]})})]})})}var F={},tt=Te;Object.defineProperty(F,"__esModule",{value:!0});var oe=F.default=void 0,it=tt(De()),at=_e,nt=(0,it.default)((0,at.jsx)("path",{d:"M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z"}),"Group");oe=F.default=nt;const rt=({onClose:l,row:o,onHandleChangeStatusCuocthi:s})=>{const r=Z(),a=async()=>{await s(o._id),l()},t=j(c=>c.authReducer.roles_x01);return i(V,{children:[i("h3",{className:"text-center p-2 px-4 text-black font-medium",children:['Quản trị cuộc thi trắc nghiệm " ',o.tencuocthi,' "']}),e("hr",{}),t&&t.includes("xem thí sinh")&&e(z,{onClick:()=>r(`/admin/cuoc-thi/${o._id}/thi-sinh`),children:i("div",{className:"flex items-center justify-between space-x-4 hover:bg-slate-200 p-1 rounded-md w-full",children:[e(oe,{color:"primary"}),e("span",{className:"text-sm",children:"Thí sinh dự thi"})]})}),e(z,{onClick:()=>r(`/admin/ket-qua-thi/cuoc-thi/${o._id}`),children:i("div",{className:"flex items-center justify-between space-x-4 hover:bg-slate-200 p-1 rounded-md w-full",children:[e(Ye,{color:"primary"}),e("span",{className:"text-sm",children:"Kết quả thi"})]})}),t&&t.includes("sửa trạng thái cuộc thi")&&e(z,{onClick:()=>a(),children:i("div",{className:"flex items-center justify-between space-x-4 hover:bg-slate-200 p-1 rounded-md w-full",children:[e(He,{color:"primary"}),e("span",{className:"text-sm",children:"Thay đổi trạng thái thi"})]})})]})},lt=({row:l,onClickOpenDialogEdit:o,onClickOpenDialogDelete:s,onHandleChangeStatusCuocthi:r})=>{const[a,t]=u.useState(null),c=Boolean(a),y=m=>{t(m.currentTarget)},p=()=>{t(null)},d=j(m=>m.authReducer.roles_x01);return i(L,{children:[e(g,{className:"border-r border-slate-300",align:"left",style:{fontWeight:"bold"},children:l.tencuocthi}),i(g,{className:"border-r border-slate-300",align:"left",children:[l.soluongcauhoi," (câu)"]}),i(g,{className:"border-r border-slate-300",align:"left",children:[l.thoigianthi," (phút)"]}),e(g,{className:"border-r border-slate-300",align:"left",style:{fontWeight:"bold"},children:q(l.ngaytochucthi).format("DD/MM/YYYY")}),e(g,{className:"border-r border-slate-300",align:"left",children:l.password}),e(g,{className:"border-r border-slate-300",align:"left",style:{color:"red"},children:l.status===!0?e("span",{className:"text-green-600 font-bold",children:"Đang diễn ra"}):"Không diễn ra"}),i(g,{align:"right",className:"bg-gray-300 flex justify-center items-center space-x-1",style:{width:"250px"},children:[d&&d.includes("sửa cuộc thi")&&e(T,{variant:"contained",color:"success",size:"small",onClick:()=>o(l),children:e(Ie,{style:{fontSize:"20px"}})}),d&&d.includes("xóa cuộc thi")&&e(T,{variant:"contained",color:"error",size:"small",style:{marginLeft:"4px"},onClick:()=>s(l._id),children:e(Ge,{style:{fontSize:"20px"}})}),e(D,{id:"basic-button","aria-controls":c?"basic-menu":void 0,"aria-haspopup":"true","aria-expanded":c?"true":void 0,onClick:y,children:e(Qe,{})}),e(we,{id:"basic-menu",anchorEl:a,anchorOrigin:{vertical:"top",horizontal:"center"},transformOrigin:{vertical:"bottom",horizontal:"right"},open:c,onClose:p,MenuListProps:{"aria-labelledby":"basic-button"},children:e(rt,{onClose:p,onHandleChangeStatusCuocthi:r,row:l})})]})]},l._id)};function se(l){const o=ze(),{count:s,page:r,rowsPerPage:a,onPageChange:t}=l,c=m=>{t(m,0)},y=m=>{t(m,r-1)},p=m=>{t(m,r+1)},d=m=>{t(m,Math.max(0,Math.ceil(s/a)-1))};return i(A,{sx:{flexShrink:0,ml:2.5},children:[e(D,{onClick:c,disabled:r===0,"aria-label":"first page",children:o.direction==="rtl"?e(G,{}):e(Y,{})}),e(D,{onClick:y,disabled:r===0,"aria-label":"previous page",children:o.direction==="rtl"?e(H,{}):e(Q,{})}),e(D,{onClick:p,disabled:r>=Math.ceil(s/a)-1,"aria-label":"next page",children:o.direction==="rtl"?e(Q,{}):e(H,{})}),e(D,{onClick:d,disabled:r>=Math.ceil(s/a)-1,"aria-label":"last page",children:o.direction==="rtl"?e(Y,{}):e(G,{})})]})}se.propTypes={count:M.number.isRequired,onPageChange:M.func.isRequired,page:M.number.isRequired,rowsPerPage:M.number.isRequired};function ot({list:l,onClickOpenDialogEdit:o,onClickOpenDialogDelete:s,onHandleChangeStatusCuocthi:r}){const[a,t]=u.useState(0),[c,y]=u.useState(10),p=a>0?Math.max(0,(1+a)*c-l.length):0,d=(C,f)=>{t(f)},m=C=>{y(parseInt(C.target.value,10)),t(0)};return i(V,{children:[e(Ae,{component:Pe,children:i(Fe,{"aria-label":"custom pagination table",children:[e(We,{children:i(L,{children:[e(g,{align:"left",style:{fontSize:"14px",color:"#fff",padding:"8px 8px",backgroundColor:"#1976d2"},children:"Tên cuộc thi"}),e(g,{align:"left",style:{fontSize:"14px",color:"#fff",padding:"8px 8px",backgroundColor:"#1976d2"},children:"Số lượng câu hỏi"}),e(g,{align:"left",style:{fontSize:"14px",color:"#fff",padding:"8px 8px",backgroundColor:"#1976d2"},children:"Thời gian làm bài thi"}),e(g,{align:"left",style:{fontSize:"14px",color:"#fff",padding:"8px 8px",backgroundColor:"#1976d2"},children:"Ngày tổ chức thi"}),e(g,{align:"left",style:{fontSize:"14px",color:"#fff",padding:"8px 8px",backgroundColor:"#1976d2"},children:"Số điểm của cuộc thi"}),e(g,{align:"left",style:{fontSize:"14px",color:"#fff",padding:"8px 8px",backgroundColor:"#1976d2"},children:"Trạng thái"}),e(g,{align:"center",style:{fontSize:"14px",color:"#fff",padding:"8px 8px",backgroundColor:"#1976d2",maxWidth:"150px"},children:"Thao tác"})]})}),i(Ke,{children:[(c>0?l.slice(a*c,a*c+c):l).map(C=>e(lt,{row:C,onClickOpenDialogEdit:o,onClickOpenDialogDelete:s,onHandleChangeStatusCuocthi:r},C._id)),p>0&&e(L,{style:{height:53*p},children:e(g,{colSpan:6})})]})]})}),e("div",{children:e(je,{rowsPerPageOptions:[10,25,50,100,{label:"Tất cả",value:-1}],count:l.length,rowsPerPage:c,page:a,SelectProps:{inputProps:{"aria-label":"rows per page"},native:!0},component:"div",onPageChange:d,onRowsPerPageChange:m,ActionsComponent:se,labelRowsPerPage:"Số bản ghi hiển thị trên mỗi trang",labelDisplayedRows:function({from:f,to:O,count:S}){return`hiển thị ${f} đến ${O} bản ghi trong tổng số ${S!==-1?S:`more than ${O}`} bản ghi`}})})]})}const st=u.forwardRef(function(o,s){return e(U,{direction:"up",ref:s,...o})}),ct=J(D)({position:"absolute",right:"16px",top:"4px"}),ht=R({tencuocthi:$().required("Lỗi: Vui lòng nhập tên cuộc thi"),soluongcauhoi:w().required("Lỗi: Vui lòng chọn số lượng câu hỏi"),thoigianthi:w().required("Lỗi: Vui lòng chọn thời gian thi"),ngaytochucthi:$().required("Lỗi: Vui lòng chọn ngày tổ chức thi"),password:w().required("Lỗi: Vui lòng chọn số điểm")}).required();function dt({open:l,onCloseDialogEdit:o,item:s,onSubmit:r}){const a=B({defaultValues:{tencuocthi:"",password:"",thoigianthi:90,soluongcauhoi:50,ngaytochucthi:q(Date.now())},resolver:E(ht)}),t=a.setValue;u.useEffect(()=>{s&&(t("tencuocthi",s.tencuocthi,{shouldValidate:!0}),t("password",s.password),t("thoigianthi",s.thoigianthi),t("ngaytochucthi",q(s.ngaytochucthi)),t("soluongcauhoi",s.soluongcauhoi))},[s]);const c=async p=>{if(r){const d={...p,id_edit:s._id};await r(d),o()}},{isSubmitting:y}=a.formState;return e(V,{children:i(ne,{maxWidth:"lg",fullWidth:!0,disableEscapeKeyDown:!0,onClose:(p,d)=>{d!=="backdropClick"&&o(p,d)},open:l,TransitionComponent:st,keepMounted:!0,"aria-describedby":"alert-dialog-slide-description",children:[i(te,{style:{display:"flex",borderBottom:"1px solid #ccc",margin:"0 12px"},children:[e(ee,{style:{color:"#333",fontSize:"32px"}}),e("span",{children:"Chỉnh sửa thông số cuộc thi trắc nghiệm"}),e(ct,{onClick:()=>o(),children:e(ie,{style:{color:"#d32b2b"}})})]}),e(re,{children:i(A,{children:[y?e(X,{}):"",i("form",{onSubmit:a.handleSubmit(c),style:{width:"100%"},children:[i(x,{container:!0,spacing:1,style:{alignItems:"center",justifyContent:"center"},children:[e(x,{item:!0,xs:12,md:12,lg:12,children:e(v,{name:"tencuocthi",form:a,label:"Tên cuộc thi trắc nghiệm *",type:"text",disabled:!1})}),e(x,{item:!0,xs:3,md:3,lg:3,children:e(v,{name:"soluongcauhoi",form:a,label:"Số lượng câu hỏi thi *",type:"number",disabled:!1})}),e(x,{item:!0,xs:3,md:3,lg:3,children:e(v,{name:"thoigianthi",form:a,label:"Thời gian làm bài thi tính bằng phút *",type:"number",disabled:!1})}),e(x,{item:!0,xs:3,md:3,lg:3,children:e(v,{name:"password",form:a,label:"Số điểm của cuộc thi *",type:"number",disabled:!1})}),e(x,{item:!0,xs:3,md:3,lg:3,children:e(ae,{name:"ngaytochucthi",form:a,label:"Ngày tổ chức cuộc thi *",disabled:!1})})]}),e(le,{children:i(T,{color:"primary",variant:"contained",disabled:y,type:"submit",style:{margin:"4px auto"},children:[e(I,{}),e("span",{children:"Cập nhật"})]})})]})]})})]})})}const ut=R({}).required(),jt=()=>{const l=B({defaultValues:{tencuocthi:""},resolver:E(ut)}),o=j(n=>n.authReducer.roles_x01),[s,r]=u.useState([]),a=Z(),{enqueueSnackbar:t}=Oe();let[c,y]=Ne();const[p,d]=u.useState(!1),[m,C]=u.useState([]),[f,O]=u.useState(null),[S,W]=u.useState({status:!1,item:null}),ce=n=>{W({item:n,status:!0})},he=()=>{W({...S,status:!1})},[P,N]=u.useState({status:!1,id_Delete:null}),de=n=>{N({status:!0,id_Delete:n})},ue=()=>{N({...P,status:!1})},me=()=>{N({...P,status:!1})},k=u.useMemo(()=>{const n=Re.parse(location.search);return{...n,tencuocthi:n.tencuocthi||""}},[location.search]);u.useEffect(()=>{(async()=>{try{let h=await _.getMonthiOfUser();C(h.data)}catch(h){h.message==="Token không hợp lệ hoặc đã hết hạn. Vui lòng đăng nhập lại"&&(a("/login"),t(h.message,{anchorOrigin:{vertical:"bottom",horizontal:"right"},variant:"error"})),t(h.message,{anchorOrigin:{vertical:"bottom",horizontal:"right"},variant:"error"})}})()},[]),u.useEffect(()=>{f&&(async()=>{try{d(!0);let h=await _.getCuocthis({...k,id_monthi:f});r(h.data),setTimeout(()=>{d(!1)},1e3)}catch(h){h.message==="Token không hợp lệ hoặc đã hết hạn. Vui lòng đăng nhập lại"&&(a("/login"),t(h.message,{anchorOrigin:{vertical:"bottom",horizontal:"right"},variant:"error"})),t(h.message,{anchorOrigin:{vertical:"bottom",horizontal:"right"},variant:"error"})}})()},[f,k]);const ge=async n=>{y({...k,...n})},pe=()=>{l.reset()},[fe,K]=u.useState(!1),be=()=>{K(!1)},ye=()=>{K(!0)},xe=n=>{O(n.target.value)},ve=async n=>{if(!f){t("Vui lòng chọn môn thi trắc nghiệm",{anchorOrigin:{vertical:"bottom",horizontal:"right"},variant:"error"});return}try{let h={...n,queryParams:k},b=await _.addCuocthi(f,h);r(b.data.items),t("Thêm mới thành công!",{anchorOrigin:{vertical:"bottom",horizontal:"right"},variant:"success"})}catch(h){h.message==="Token không hợp lệ hoặc đã hết hạn. Vui lòng đăng nhập lại"&&(a("/login"),t(h.message,{anchorOrigin:{vertical:"bottom",horizontal:"right"},variant:"error"})),t(h.message,{anchorOrigin:{vertical:"bottom",horizontal:"right"},variant:"error"}),d(!1),a("/login")}},Ce=async()=>{try{let n=await _.deleteCuocthi(P.id_Delete,{...k,id_monthi:f});r(n.data.items),N({...P,status:!1}),t(n.data.message,{anchorOrigin:{vertical:"bottom",horizontal:"right"},variant:"success"})}catch(n){n.message==="Token không hợp lệ hoặc đã hết hạn. Vui lòng đăng nhập lại"&&(a("/login"),t(n.message,{anchorOrigin:{vertical:"bottom",horizontal:"right"},variant:"error"})),t(n.message,{anchorOrigin:{vertical:"bottom",horizontal:"right"},variant:"error"})}},Se=async n=>{let h={...k,id_monthi:f,id_cuocthi:n};try{let b=await _.editStatusCuocthi(h);r(b.data),t("Thay đổi trạng thái cuộc thi thành công!",{anchorOrigin:{vertical:"bottom",horizontal:"right"},variant:"success"})}catch(b){b.message==="Token không hợp lệ hoặc đã hết hạn. Vui lòng đăng nhập lại"&&(a("/login"),t(b.message,{anchorOrigin:{vertical:"bottom",horizontal:"right"},variant:"error"})),t(b.message,{anchorOrigin:{vertical:"bottom",horizontal:"right"},variant:"error"}),d(!1)}},ke=async n=>{let h={...n,queryParams:{...k},id_cuocthi:n.id_edit,id_monthi:f};try{let b=await _.updateOptionCuocthi(h);r(b.data.items),t(b.data.message,{anchorOrigin:{vertical:"bottom",horizontal:"right"},variant:"success"})}catch(b){b.message==="Token không hợp lệ hoặc đã hết hạn. Vui lòng đăng nhập lại"&&(a("/login"),t(b.message,{anchorOrigin:{vertical:"bottom",horizontal:"right"},variant:"error"})),t(b.message,{anchorOrigin:{vertical:"bottom",horizontal:"right"},variant:"error"}),d(!1)}};return i("div",{className:"mx-2 bg-white pb-2 px-4 shadow-2xl py-2",children:[i("h3",{className:"flex items-center space-x-2",children:[e(Ee,{}),e("span",{className:"text-lg font-semibold",children:"Quản lý cuộc thi trắc nghiệm"})]}),i("div",{className:"py-4 ml-4 mt-2",children:[e("div",{className:"my-2 mb-4",children:i(Me,{fullWidth:!0,children:[e($e,{id:"demo-simple-select-label",children:"Môn thi trắc ngiệm"}),i(qe,{labelId:"demo-simple-select-label",id:"demo-simple-select",label:"Môn thi trắc ngiệm",value:f!==null?f:" ",size:"small",onChange:xe,children:[e(z,{value:" ",disabled:!0,hidden:!0,children:"Vui lòng chọn môn thi"}),m.map(n=>e(z,{value:n._id,children:n.tenmonthi},n._id))]})]})}),e("form",{onSubmit:l.handleSubmit(ge),className:"bg-gray-100 rounded-xl mt-8",children:i("fieldset",{style:{border:"1px solid #ccc",paddingBlockEnd:"12px"},children:[e("legend",{style:{paddingInline:"12px",fontWeight:"bold"},children:"Tra cứu cuộc thi:"}),e("div",{className:"flex p-4 flex-1 flex-wrap",children:e("div",{className:"px-1 w-full",children:e(v,{name:"tencuocthi",form:l,label:"Tên cuộc thi",type:"text",disabled:!1})})}),i("div",{className:"flex flex-col px-4 space-y-2 md:space-y-0 md:space-x-2 md:items-center md:justify-center md:flex-row",children:[i(T,{color:"primary",variant:"contained",type:"submit",children:[e(Ve,{}),e("span",{children:"Tìm kiếm cuộc thi"})]}),i(T,{variant:"contained",onClick:pe,color:"warning",children:[e("span",{className:"mr-2",children:"Xóa trắng"}),e(Le,{})]})]})]})}),o&&o.includes("thêm cuộc thi")&&e("div",{className:"text-end mb-4 mt-8",children:i(T,{variant:"contained",onClick:ye,children:[e(I,{}),"Tạo mới cuộc thi"]})}),p&&e(Be,{open:p})]}),e(ot,{list:s,item:S.item,onClickOpenDialogDelete:de,onClickOpenDialogEdit:ce,onHandleChangeStatusCuocthi:Se}),e(et,{open:fe,onCloseDialogAddCauhoi:be,onSubmit:ve}),e(dt,{open:S.status,item:S.item,onCloseDialogEdit:he,onSubmit:ke}),e(Ue,{open:P.status,onCloseDialogDelete:ue,onConfirmDelete:Ce,onCancelDelete:me})]})};export{jt as default};
