import{r as u,j as e,S as X,s as Q,I as D,c as B,a as v,u as R,F as E,d as n,L as J,e as P,B as k,o as M,f as U,P as ye,H as xe,g as Te,i as Ce,h as Se,M as De}from"./index-062f957e.js";import{c as j}from"./commonApi-0cde8b65.js";import{d as Pe}from"./Search-a3e122e1.js";import{d as ke}from"./Backspace-4deea80c.js";import{q as _e}from"./base-312a79a2.js";import"./dayjs.min-aac666db.js";import{M as Ne}from"./ModalLoading-9021568c.js";import{d as A}from"./Add-e56f17fd.js";import{d as Ve}from"./Dashboard-b8f414b1.js";import{m as z}from"./monthiApi-52b6fb22.js";import{S as qe}from"./index-2ef3a645.js";import{d as Y}from"./AutoAwesomeMotion-31ff343a.js";import{D as Z,d as ee}from"./Cancel-8937e614.js";import{S as N}from"./index-aefdd792.js";import{D as ne,a as ae}from"./DialogContent-f84fc6ad.js";import{B as F}from"./Box-bf90436a.js";import{G as b}from"./Grid-a7040e01.js";import{D as te}from"./DialogActions-f287847c.js";import{p as L}from"./index-4d501b15.js";import{T as we,d as H,a as W,b as G,c as K}from"./LastPage-d948916c.js";import{c as O,d as p,f as ze,T as Le,a as $e,b as Oe,e as Be}from"./Edit-863c701d.js";import{d as Re}from"./DeleteOutline-948d5e41.js";import{D as Ee}from"./DialogDelete-8ca5256c.js";import{C as Me,d as Ae}from"./index-45751cc8.js";import"./axiosCommon-bb0a1a26.js";import"./MenuItem-e2fd54c1.js";import"./KeyboardArrowRight-737b2a8a.js";import"./Toolbar-b498bb22.js";import"./DialogContentText-ef6c130a.js";const Fe=u.forwardRef(function(o,a){return e(X,{direction:"up",ref:a,...o})}),Ie=Q(D)({position:"absolute",right:"16px",top:"4px"}),je=B({hoten:v().required("Lỗi: Vui lòng nhập họ tên thí sinh"),sbd:v().required("Lỗi: Vui lòng nhập số báo danh"),donvi:v().required("Lỗi: Vui lòng chọn đơn vị công tác"),capbac:v().required("Lỗi: Vui lòng chọn cấp bậc hàm"),chucvu:v().required("Lỗi: Vui lòng chọn chức vụ"),namsinh:v().required("Lỗi: Vui lòng nhập năm sinh")}).required();function He({open:l,onCloseDialogAdd:o,onSubmit:a,donviList:r}){const s=R({defaultValues:{hoten:"",sbd:"",donvi:"",namsinh:"1996",capbac:"",chucvu:""},resolver:M(je)}),t=async c=>{a&&(await a(c),s.reset())},{isSubmitting:d}=s.formState;return e(E,{children:n(ne,{fullWidth:!0,disableEscapeKeyDown:!0,onClose:(c,y)=>{y!=="backdropClick"&&o(c,y)},open:l,TransitionComponent:Fe,keepMounted:!0,"aria-describedby":"alert-dialog-slide-description",children:[n(Z,{style:{display:"flex",borderBottom:"1px solid #ccc",margin:"0 12px"},children:[e(Y,{style:{color:"#333",fontSize:"32px"}}),e("span",{children:"Thêm mới thí sinh dự thi"}),e(Ie,{onClick:()=>o(),children:e(ee,{style:{color:"#d32b2b"}})})]}),e(ae,{children:n(F,{children:[d?e(J,{}):"",n("form",{onSubmit:s.handleSubmit(t),style:{width:"100%"},children:[n(b,{container:!0,spacing:1,style:{alignItems:"center",justifyContent:"center"},children:[e(b,{item:!0,xs:12,md:12,lg:12,children:e(P,{name:"hoten",form:s,label:"Họ và tên *",type:"text",disabled:!1})}),e(b,{item:!0,xs:12,md:12,lg:12,children:e(P,{name:"sbd",form:s,label:"Số báo danh *",type:"text",disabled:!1})}),e(b,{item:!0,xs:12,md:12,lg:12,children:e(P,{name:"namsinh",form:s,label:"Năm sinh *",type:"text",disabled:!1})}),e(b,{item:!0,xs:12,md:12,lg:12,children:e(N,{name:"capbac",form:s,label:"Cấp bậc hàm *",disabled:!1,options:[{value:"Trung sĩ",label:"Trung sĩ"},{value:"Thượng sĩ",label:"Thượng sĩ"},{value:"Thiếu úy",label:"Thiếu úy"},{value:"Trung úy",label:"Trung úy"},{value:"Thượng úy",label:"Thượng úy"},{value:"Đại úy",label:"Đại úy"},{value:"Thiếu tá",label:"Thiếu tá"},{value:"Trung tá",label:"Trung tá"},{value:"Thượng tá",label:"Thượng tá"},{value:"Đại tá",label:"Đại tá"}]})}),e(b,{item:!0,xs:12,md:12,lg:12,children:e(N,{name:"chucvu",form:s,label:"Chức vụ công tác *",disabled:!1,options:[{value:"Chiến sĩ",label:"Chiến sĩ"},{value:"Cán bộ",label:"Cán bộ"},{value:"Phó đội trưởng và tương đương",label:"Phó đội trưởng và tương đương"},{value:"Đội trưởng và tương đương",label:"Đội trưởng và tương đương"},{value:"Phó Trưởng Công an xã",label:"Phó Trưởng Công an xã"},{value:"Trưởng Công an xã",label:"Trưởng Công an xã"},{value:"Phó Trưởng Công an huyện, thị, thành phố",label:"Phó Trưởng Công an huyện, thị, thành phố"},{value:"Trưởng Công an huyện, thị, thành phố",label:"Trưởng Công an huyện, thị, thành phố"},{value:"Phó Trưởng phòng",label:"Phó Trưởng phòng"},{value:"Trưởng phòng",label:"Trưởng phòng"}]})}),e(b,{item:!0,xs:12,md:12,lg:12,children:e(N,{name:"donvi",form:s,label:"Đơn vị công tác *",disabled:!1,options:r})})]}),e(te,{children:n(k,{color:"primary",variant:"contained",disabled:d,type:"submit",style:{margin:"4px auto"},children:[e(A,{}),e("span",{children:"Thêm mới thí sinh"})]})})]})]})})]})})}const We=({row:l,onClickOpenDialogEdit:o,onClickOpenDialogDelete:a})=>{u.useState(null);const r=U(s=>s.authReducer.roles_x01);return n(O,{children:[e(p,{className:"border-r border-slate-300",align:"left",style:{fontWeight:"bold"},children:l.sbd}),e(p,{className:"border-r border-slate-300",align:"left",style:{fontWeight:"bold"},children:l.hoten}),e(p,{className:"border-r border-slate-300",align:"left",children:l.namsinh}),e(p,{className:"border-r border-slate-300",align:"left",children:l.capbac}),e(p,{className:"border-r border-slate-300",align:"left",children:l.chucvu}),e(p,{className:"border-r border-slate-300",align:"left",children:l.donvi.kyhieu}),n(p,{align:"right",className:"bg-gray-300 flex justify-center items-center space-x-1",style:{width:"180px"},children:[r&&r.includes("sửa thí sinh")&&e(k,{variant:"contained",color:"success",size:"small",onClick:()=>o(l),children:e(ze,{style:{fontSize:"20px"}})}),r&&r.includes("xóa thí sinh")&&e(k,{variant:"contained",color:"error",size:"small",style:{marginLeft:"4px"},onClick:()=>a(l._id),children:e(Re,{style:{fontSize:"20px"}})})]})]},l._id)};function le(l){const o=xe(),{count:a,page:r,rowsPerPage:s,onPageChange:t}=l,d=h=>{t(h,0)},c=h=>{t(h,r-1)},y=h=>{t(h,r+1)},x=h=>{t(h,Math.max(0,Math.ceil(a/s)-1))};return n(F,{sx:{flexShrink:0,ml:2.5},children:[e(D,{onClick:d,disabled:r===0,"aria-label":"first page",children:o.direction==="rtl"?e(H,{}):e(W,{})}),e(D,{onClick:c,disabled:r===0,"aria-label":"previous page",children:o.direction==="rtl"?e(G,{}):e(K,{})}),e(D,{onClick:y,disabled:r>=Math.ceil(a/s)-1,"aria-label":"next page",children:o.direction==="rtl"?e(K,{}):e(G,{})}),e(D,{onClick:x,disabled:r>=Math.ceil(a/s)-1,"aria-label":"last page",children:o.direction==="rtl"?e(W,{}):e(H,{})})]})}le.propTypes={count:L.number.isRequired,onPageChange:L.func.isRequired,page:L.number.isRequired,rowsPerPage:L.number.isRequired};function Ge({list:l,onClickOpenDialogEdit:o,onClickOpenDialogDelete:a}){const[r,s]=u.useState(0),[t,d]=u.useState(10),c=r>0?Math.max(0,(1+r)*t-l.length):0,y=(h,C)=>{s(C)},x=h=>{d(parseInt(h.target.value,10)),s(0)};return n(E,{children:[e(Le,{component:ye,children:n($e,{"aria-label":"custom pagination table",children:[e(Oe,{children:n(O,{children:[e(p,{align:"left",style:{fontSize:"14px",color:"#fff",padding:"8px 8px",backgroundColor:"#1976d2"},children:"SBD"}),e(p,{align:"left",style:{fontSize:"14px",color:"#fff",padding:"8px 8px",backgroundColor:"#1976d2"},children:"Họ tên"}),e(p,{align:"left",style:{fontSize:"14px",color:"#fff",padding:"8px 8px",backgroundColor:"#1976d2"},children:"Năm sinh"}),e(p,{align:"left",style:{fontSize:"14px",color:"#fff",padding:"8px 8px",backgroundColor:"#1976d2"},children:"Cấp bậc"}),e(p,{align:"left",style:{fontSize:"14px",color:"#fff",padding:"8px 8px",backgroundColor:"#1976d2"},children:"Chức vụ"}),e(p,{align:"left",style:{fontSize:"14px",color:"#fff",padding:"8px 8px",backgroundColor:"#1976d2"},children:"Đơn vị công tác"}),e(p,{align:"center",style:{fontSize:"14px",color:"#fff",padding:"8px 8px",backgroundColor:"#1976d2",maxWidth:"150px"},children:"Thao tác"})]})}),n(Be,{children:[(t>0?l.slice(r*t,r*t+t):l).map(h=>e(We,{row:h,onClickOpenDialogEdit:o,onClickOpenDialogDelete:a},h._id)),c>0&&e(O,{style:{height:53*c},children:e(p,{colSpan:6})})]})]})}),e("div",{children:e(we,{rowsPerPageOptions:[10,25,50,100,{label:"Tất cả",value:-1}],count:l.length,rowsPerPage:t,page:r,SelectProps:{inputProps:{"aria-label":"rows per page"},native:!0},component:"div",onPageChange:y,onRowsPerPageChange:x,ActionsComponent:le,labelRowsPerPage:"Số bản ghi hiển thị trên mỗi trang",labelDisplayedRows:function({from:C,to:S,count:V}){return`hiển thị ${C} đến ${S} bản ghi trong tổng số ${V!==-1?V:`more than ${S}`} bản ghi`}})})]})}const Ke=u.forwardRef(function(o,a){return e(X,{direction:"up",ref:a,...o})}),Xe=Q(D)({position:"absolute",right:"16px",top:"4px"}),Qe=B({hoten:v().required("Lỗi: Vui lòng nhập họ tên thí sinh"),sbd:v().required("Lỗi: Vui lòng nhập số báo danh"),capbac:v().required("Lỗi: Vui lòng chọn cấp hàm"),chucvu:v().required("Lỗi: Vui lòng chọn chức vụ"),donvi:v().required("Lỗi: Vui lòng chọn đơn vị công tác"),namsinh:v().required("Lỗi: Vui lòng nhập năm sinh")}).required();function Je({open:l,onCloseDialogEdit:o,item:a,onSubmit:r,donviList:s}){const t=R({defaultValues:{hoten:"",sbd:"",donvi:"",namsinh:"1996",capbac:"Trung úy",chucvu:"Chiến sĩ"},resolver:M(Qe)}),d=t.setValue;u.useEffect(()=>{a&&(d("hoten",a.hoten,{shouldValidate:!0}),d("sbd",a.sbd,{shouldValidate:!0}),d("namsinh",a.namsinh,{shouldValidate:!0}),d("donvi",a.donvi._id,{shouldValidate:!0}),d("capbac",a.capbac,{shouldValidate:!0}),d("chucvu",a.chucvu,{shouldValidate:!0}))},[a]);const c=async x=>{if(r){const h={...x,id_edit:a._id};await r(h),o()}},{isSubmitting:y}=t.formState;return e(E,{children:n(ne,{fullWidth:!0,disableEscapeKeyDown:!0,onClose:(x,h)=>{h!=="backdropClick"&&o(x,h)},open:l,TransitionComponent:Ke,keepMounted:!0,"aria-describedby":"alert-dialog-slide-description",children:[n(Z,{style:{display:"flex",borderBottom:"1px solid #ccc",margin:"0 12px"},children:[e(Y,{style:{color:"#333",fontSize:"32px"}}),e("span",{children:"Chỉnh sửa thông tin thí sinh"}),e(Xe,{onClick:()=>o(),children:e(ee,{style:{color:"#d32b2b"}})})]}),e(ae,{children:n(F,{children:[y?e(J,{}):"",n("form",{onSubmit:t.handleSubmit(c),style:{width:"100%"},children:[n(b,{container:!0,spacing:1,style:{alignItems:"center",justifyContent:"center"},children:[e(b,{item:!0,xs:12,md:12,lg:12,children:e(P,{name:"hoten",form:t,label:"Họ và tên *",type:"text",disabled:!1})}),e(b,{item:!0,xs:12,md:12,lg:12,children:e(P,{name:"sbd",form:t,label:"Số báo danh *",type:"text",disabled:!1})}),e(b,{item:!0,xs:12,md:12,lg:12,children:e(P,{name:"namsinh",form:t,label:"Năm sinh *",type:"text",disabled:!1})}),e(b,{item:!0,xs:12,md:12,lg:12,children:e(N,{name:"capbac",form:t,label:"Cấp bậc hàm *",disabled:!1,options:[{value:"Trung sĩ",label:"Trung sĩ"},{value:"Thượng sĩ",label:"Thượng sĩ"},{value:"Thiếu úy",label:"Thiếu úy"},{value:"Trung úy",label:"Trung úy"},{value:"Thượng úy",label:"Thượng úy"},{value:"Đại úy",label:"Đại úy"},{value:"Thiếu tá",label:"Thiếu tá"},{value:"Trung tá",label:"Trung tá"},{value:"Thượng tá",label:"Thượng tá"},{value:"Đại tá",label:"Đại tá"}]})}),e(b,{item:!0,xs:12,md:12,lg:12,children:e(N,{name:"chucvu",form:t,label:"Chức vụ công tác *",disabled:!1,options:[{value:"Chiến sĩ",label:"Chiến sĩ"},{value:"Cán bộ",label:"Cán bộ"},{value:"Phó đội trưởng và tương đương",label:"Phó đội trưởng và tương đương"},{value:"Đội trưởng và tương đương",label:"Đội trưởng và tương đương"},{value:"Phó Trưởng Công an xã",label:"Phó Trưởng Công an xã"},{value:"Trưởng Công an xã",label:"Trưởng Công an xã"},{value:"Phó Trưởng Công an huyện, thị, thành phố",label:"Phó Trưởng Công an huyện, thị, thành phố"},{value:"Trưởng Công an huyện, thị, thành phố",label:"Trưởng Công an huyện, thị, thành phố"},{value:"Phó Trưởng phòng",label:"Phó Trưởng phòng"},{value:"Trưởng phòng",label:"Trưởng phòng"}]})}),e(b,{item:!0,xs:12,md:12,lg:12,children:e(N,{name:"donvi",form:t,label:"Đơn vị công tác *",disabled:!1,options:s})})]}),e(te,{children:n(k,{color:"primary",variant:"contained",disabled:y,type:"submit",style:{margin:"4px auto"},children:[e(A,{}),e("span",{children:"Cập nhật"})]})})]})]})})]})})}let Ue=[{label:"SBD",key:"sbd"},{label:"Họ tên",key:"hoten"},{label:"Cấp bậc",key:"capbac"},{label:"Chức vụ",key:"chucvu"},{label:"Đơn vị",key:"donvi.kyhieu"}];const Ye=B({}).required(),Vn=()=>{const l=R({defaultValues:{hoten:"",donvi:""},resolver:M(Ye)}),o=U(i=>i.authReducer.roles_x01),[a,r]=u.useState([]);u.useState(null);const[s,t]=u.useState([]),d=Te(),{enqueueSnackbar:c}=Ce();let[y,x]=Se();const[h,C]=u.useState(!1),[S,V]=u.useState({status:!1,item:null}),ie=i=>{V({item:i,status:!0})},re=()=>{V({...S,status:!1})},[q,w]=u.useState({status:!1,id_Delete:null}),se=i=>{w({status:!0,id_Delete:i})},oe=()=>{w({...q,status:!1})},ce=()=>{w({...q,status:!1})},_=u.useMemo(()=>{const i=_e.parse(location.search);return{...i,hoten:i.hoten||"",donvi:i.donvi||""}},[location.search]),{id:T}=De(),[m,he]=u.useState(null);u.useEffect(()=>{(async(g,f)=>{try{let $=await j.getInfoCuocthi(T);he($.data)}catch($){console.log($.message)}})()},[T]),u.useEffect(()=>{(async()=>{try{let g=await j.getDanhsachDonvi();r(g.data.donvis.map(f=>({value:f._id,label:f.tendonvi})))}catch(g){console.log(g.message)}})()},[]),u.useEffect(()=>{T&&(async()=>{try{C(!0);let g=await z.getThisinhs({..._,id_cuocthi:T});t(g.data),setTimeout(()=>{C(!1)},1e3)}catch(g){g.message==="Token không hợp lệ hoặc đã hết hạn. Vui lòng đăng nhập lại"&&(d("/login"),c(g.message,{anchorOrigin:{vertical:"bottom",horizontal:"right"},variant:"error"})),c(g.message,{anchorOrigin:{vertical:"bottom",horizontal:"right"},variant:"error"})}})()},[T,_]);const de=async i=>{x({..._,...i})},ge=()=>{l.reset()},[ue,I]=u.useState(!1),me=()=>{I(!1)},pe=()=>{I(!0)},be=async i=>{try{let g={...i,queryParams:_},f=await z.addThisinh(T,g);t(f.data.items),c("Thêm mới thành công!",{anchorOrigin:{vertical:"bottom",horizontal:"right"},variant:"success"})}catch(g){g.message==="Token không hợp lệ hoặc đã hết hạn. Vui lòng đăng nhập lại"&&(d("/login"),c(g.message,{anchorOrigin:{vertical:"bottom",horizontal:"right"},variant:"error"})),c(g.message,{anchorOrigin:{vertical:"bottom",horizontal:"right"},variant:"error"}),C(!1)}},fe=async i=>{console.log(i);const g={...i,queryParams:_,id_cuocthi:T,id_thisinh:i.id_edit};try{let f=await z.editThisinh(g);t(f.data.items),c(f.data.message,{anchorOrigin:{vertical:"bottom",horizontal:"right"},variant:"success"})}catch(f){f.message==="Token không hợp lệ hoặc đã hết hạn. Vui lòng đăng nhập lại"&&(d("/login"),c(f.message,{anchorOrigin:{vertical:"bottom",horizontal:"right"},variant:"error"})),c(f.message,{anchorOrigin:{vertical:"bottom",horizontal:"right"},variant:"error"})}},ve=async()=>{try{let i=await z.deleteThisinh(T,q.id_Delete,{..._});t(i.data.items),w({...q,status:!1}),c(i.data.message,{anchorOrigin:{vertical:"bottom",horizontal:"right"},variant:"success"})}catch(i){i.message==="Token không hợp lệ hoặc đã hết hạn. Vui lòng đăng nhập lại"&&(d("/login"),c(i.message,{anchorOrigin:{vertical:"bottom",horizontal:"right"},variant:"error"})),c(i.message,{anchorOrigin:{vertical:"bottom",horizontal:"right"},variant:"error"})}};return n("div",{className:"mx-2 bg-white pb-2 px-4 shadow-2xl",children:[n("div",{className:"py-4 ml-4 mt-2",children:[n("h3",{className:"flex items-center space-x-2",children:[e(Ve,{}),e("span",{className:"text-lg font-semibold",children:"Quản lý thí sinh dự thi"})]}),e("div",{className:"mt-4 pl-4",children:n("div",{children:[n("p",{children:["Môn thi: ",m==null?void 0:m.monthi.tenmonthi]}),n("p",{children:["Cuộc thi: ",m==null?void 0:m.tencuocthi]}),n("p",{children:["Số lượng câu hỏi: ",m==null?void 0:m.soluongcauhoi]}),n("p",{children:["Thời gian làm bài: ",m==null?void 0:m.thoigianthi," phút"]})]})}),e("form",{onSubmit:l.handleSubmit(de),className:"bg-gray-100 rounded-xl mt-8",children:n("fieldset",{style:{border:"1px solid #ccc",paddingBlockEnd:"12px"},children:[e("legend",{style:{paddingInline:"12px",fontWeight:"bold"},children:"Tra cứu thí sinh dự thi:"}),n("div",{className:"flex p-4 flex-1 flex-wrap",children:[e("div",{className:"px-1 basis-1/2",children:e(P,{name:"hoten",form:l,label:"Họ và tên",type:"text",disabled:!1})}),e("div",{className:"px-1 basis-1/2",children:e(qe,{name:"donvi",form:l,label:"Đơn vị công tác",disabled:!1,options:a})})]}),n("div",{className:"flex items-center justify-center space-x-2 my-2",children:[n(k,{color:"primary",variant:"contained",type:"submit",style:{marginRight:"4px"},children:[e(Pe,{}),e("span",{children:"Tìm kiếm thí sinh"})]}),n(k,{variant:"contained",onClick:ge,color:"warning",children:[e("span",{className:"mr-2",children:"Xóa trắng"}),e(ke,{})]})]})]})}),o&&o.includes("thêm thí sinh")&&e("div",{className:"text-end mb-4 mt-8",children:n(k,{variant:"contained",onClick:pe,children:[e(A,{}),"Thêm mới thí sinh"]})}),h&&e(Ne,{open:h})]}),e(He,{open:ue,onCloseDialogAdd:me,onSubmit:be,donviList:a}),e("div",{className:"text-end mb-2",children:e(D,{children:e(Me,{data:s,headers:Ue,filename:`danhsachthisinh_${m==null?void 0:m.tencuocthi}`,children:n("div",{className:"flex items-center shadow-md space-x-2 bg-green-300 px-2 py-1 rounded-md",children:[e(Ae,{}),e("span",{className:"text-sm text-green-800",children:"Xuất file excel"})]})})})}),e(Ge,{list:s,item:S.item,onClickOpenDialogDelete:se,onClickOpenDialogEdit:ie}),e(Je,{open:S.status,item:S.item,onCloseDialogEdit:re,onSubmit:fe,donviList:a}),e(Ee,{open:q.status,onCloseDialogDelete:oe,onConfirmDelete:ve,onCancelDelete:ce})]})};export{Vn as default};
