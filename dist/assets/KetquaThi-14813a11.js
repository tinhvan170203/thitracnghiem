import{r,f as L,d as l,j as a,B as F,F as R,P as K,H as I,I as g,S as H,s as j,M as A}from"./index-2d1dc0c1.js";import{m as O}from"./monthiApi-5b0dc95c.js";import{d as W}from"./Dashboard-ffb2a08f.js";import{d as Y,M as X}from"./ModalLoading-c29ac187.js";import{p as N,T as V,d as $,a as B,b as D,c as M}from"./LastPage-faafd030.js";import{c as T,d as o,f as G,T as J,a as Q,b as U,e as Z}from"./Edit-26eca3cd.js";import{B as w}from"./Box-0ccc74d0.js";import{d as ee}from"./AutoAwesomeMotion-870b7cee.js";import{D as ae,a as te,d as ne,b as le}from"./Cancel-720b6a37.js";import{a as C}from"./Radio-67fb50e8.js";import{C as ie,d as se}from"./index-cb65228e.js";import"./Toolbar-8ec8d9a4.js";function oe(e){let n=e/1e3;const t=parseInt(n/3600);n=n%3600;const i=parseInt(n/60);return n=n%60,t===0?`${i}m:${n.toFixed()}s`:`${t}h:${i}m:${n.toFixed()}s`}const ce=({row:e,cuocthi:n,onClickOpenDialogEdit:t})=>{r.useState(null);const i=L(d=>d.authReducer.roles_x01);return l(T,{children:[a(o,{className:"border-r border-slate-300",align:"left",style:{fontWeight:"bold"},children:e==null?void 0:e.thisinh.sbd}),a(o,{className:"border-r border-slate-300",align:"left",style:{fontWeight:"bold"},children:e==null?void 0:e.thisinh.hoten}),a(o,{className:"border-r border-slate-300",align:"left",children:e==null?void 0:e.thisinh.capbac}),a(o,{className:"border-r border-slate-300",align:"left",children:e==null?void 0:e.thisinh.chucvu}),a(o,{className:"border-r border-slate-300",align:"left",children:e==null?void 0:e.thisinh.donvi.kyhieu}),a(o,{className:"border-r border-slate-300",align:"left",children:e.solanthi>0?l("span",{children:[e==null?void 0:e.baithi.socaudung,"/",n.soluongcauhoi," ="," ",a("span",{className:"text-red-700 font-bold",children:((e==null?void 0:e.baithi.socaudung)/n.soluongcauhoi*n.password).toFixed(2)})," ","(điểm)"]}):a("span",{children:"Chưa thi"})}),a(o,{className:"border-r border-slate-300",align:"left",children:e==null?void 0:e.solanthi}),a(o,{className:"border-r border-slate-300",align:"left",children:e.solanthi>0?a("span",{children:oe(e.baithi.thoigiannopbai-e.baithi.thoigianbatdau)}):""}),a(o,{align:"right",className:"bg-gray-300 flex justify-center items-center space-x-1",children:i&&i.includes("sửa câu hỏi")&&l(F,{variant:"contained",color:"success",size:"small",onClick:()=>t(e),children:[a(G,{style:{fontSize:"20px"}}),"Xem bài thi"]})})]},e==null?void 0:e.thisinh._id)};function E(e){const n=I(),{count:t,page:i,rowsPerPage:d,onPageChange:h}=e,b=c=>{h(c,0)},s=c=>{h(c,i-1)},f=c=>{h(c,i+1)},m=c=>{h(c,Math.max(0,Math.ceil(t/d)-1))};return l(w,{sx:{flexShrink:0,ml:2.5},children:[a(g,{onClick:b,disabled:i===0,"aria-label":"first page",children:n.direction==="rtl"?a($,{}):a(B,{})}),a(g,{onClick:s,disabled:i===0,"aria-label":"previous page",children:n.direction==="rtl"?a(D,{}):a(M,{})}),a(g,{onClick:f,disabled:i>=Math.ceil(t/d)-1,"aria-label":"next page",children:n.direction==="rtl"?a(M,{}):a(D,{})}),a(g,{onClick:m,disabled:i>=Math.ceil(t/d)-1,"aria-label":"last page",children:n.direction==="rtl"?a(B,{}):a($,{})})]})}E.propTypes={count:N.number.isRequired,onPageChange:N.func.isRequired,page:N.number.isRequired,rowsPerPage:N.number.isRequired};function de({list:e,onClickOpenDialogEdit:n,cuocthi:t}){const[i,d]=r.useState(0),[h,b]=r.useState(10),s=i>0?Math.max(0,(1+i)*h-e.length):0,f=(c,x)=>{d(x)},m=c=>{b(parseInt(c.target.value,10)),d(0)};return l(R,{children:[a(J,{component:K,children:l(Q,{"aria-label":"custom pagination table",children:[a(U,{children:l(T,{children:[a(o,{align:"left",style:{fontSize:"14px",color:"#fff",padding:"8px 8px",backgroundColor:"#1976d2"},children:"SBD"}),a(o,{align:"left",style:{fontSize:"14px",color:"#fff",padding:"8px 8px",backgroundColor:"#1976d2",minWidth:"150px"},children:"Họ tên"}),a(o,{align:"left",style:{fontSize:"14px",color:"#fff",padding:"8px 8px",backgroundColor:"#1976d2"},children:"Cấp bậc"}),a(o,{align:"left",style:{fontSize:"14px",color:"#fff",padding:"8px 8px",backgroundColor:"#1976d2"},children:"Chức vụ"}),a(o,{align:"left",style:{fontSize:"14px",color:"#fff",padding:"8px 8px",backgroundColor:"#1976d2"},children:"Đơn vị công tác"}),a(o,{align:"left",style:{fontSize:"14px",color:"#fff",padding:"8px 8px",backgroundColor:"#1976d2"},children:"Số câu trả lời đúng"}),a(o,{align:"left",style:{fontSize:"14px",color:"#fff",padding:"8px 8px",backgroundColor:"#1976d2"},children:"Số lượt thi"}),a(o,{align:"left",style:{fontSize:"14px",color:"#fff",padding:"8px 8px",backgroundColor:"#1976d2"},children:"Thời gian làm bài thi"}),a(o,{align:"center",style:{fontSize:"14px",color:"#fff",padding:"8px 8px",backgroundColor:"#1976d2"},children:"Thao tác"})]})}),l(Z,{children:[(h>0?e.slice(i*h,i*h+h):e).map(c=>a(ce,{row:c,cuocthi:t,onClickOpenDialogEdit:n},c.thisinh._id)),s>0&&a(T,{style:{height:53*s},children:a(o,{colSpan:6})})]})]})}),a("div",{children:a(V,{rowsPerPageOptions:[10,25,50,100,{label:"Tất cả",value:-1}],count:e.length,rowsPerPage:h,page:i,SelectProps:{inputProps:{"aria-label":"rows per page"},native:!0},component:"div",onPageChange:f,onRowsPerPageChange:m,ActionsComponent:E,labelRowsPerPage:"Số bản ghi hiển thị trên mỗi trang",labelDisplayedRows:function({from:x,to:k,count:u}){return`hiển thị ${x} đến ${k} bản ghi trong tổng số ${u!==-1?u:`more than ${k}`} bản ghi`}})})]})}const S=(e,n,t)=>{if(e===n===t||e===t&&n!==t)return"primary";if(e!==t&&n===t)return"error"},re=({question:e,index:n})=>{const[t,i]=r.useState(()=>e.choice);return r.useEffect(()=>{i(e.choice)},[e]),l("div",{className:"mb-8",children:[l("h4",{className:"font-semibold text-black",children:[l("span",{className:"text-red-600 font-bold",children:[e.question.answer===t?a("span",{className:"text-red-800",children:"(Đúng)"}):a("span",{className:"text-blue-800",children:"(Sai)"})," Câu ",n,":  "]}),e.question.question]}),l("ul",{className:"flex flex-col md:flex-row flex-wrap",children:[l("li",{className:"flex items-start space-x-2 basis-1/2",children:[a(C,{name:e._id,checked:t==="option_a"||e.question.answer==="option_a",color:S(t,e.question.answer,"option_a")}),l("span",{className:"pt-2 text-black",children:[a("span",{className:"font-bold",children:"A."})," ",e.question.option_a]})]}),l("li",{className:"flex items-start space-x-2 basis-1/2",children:[a(C,{name:e._id,checked:t==="option_b"||e.question.answer==="option_b",color:S(t,e.question.answer,"option_b")}),l("span",{className:"pt-2 text-black",children:[a("span",{className:"font-bold",children:"B."})," ",e.question.option_b]})]}),l("li",{className:"flex items-start space-x-2 basis-1/2",children:[a(C,{name:e._id,checked:t==="option_c"||e.question.answer==="option_c",color:S(t,e.question.answer,"option_c")}),l("span",{className:"pt-2 text-black",children:[a("span",{className:"font-bold",children:"C."})," ",e.question.option_c]})]}),l("li",{className:"flex items-start space-x-2 basis-1/2",children:[a(C,{name:e._id,checked:t==="option_d"||e.question.answer==="option_d",color:S(t,e.question.answer,"option_d")}),l("span",{className:"pt-2 text-black",children:[a("span",{className:"font-bold",children:"D."})," ",e.question.option_d]})]})]})]})},he=r.forwardRef(function(n,t){return a(H,{direction:"up",ref:t,...n})}),pe=j(g)({position:"absolute",right:"16px",top:"4px"});function ue({open:e,onCloseDialogEdit:n,item:t}){return a(R,{children:l(ae,{maxWidth:"lg",fullWidth:!0,disableEscapeKeyDown:!0,onClose:(i,d)=>{d!=="backdropClick"&&n(i,d)},open:e,TransitionComponent:he,keepMounted:!0,"aria-describedby":"alert-dialog-slide-description",children:[l(te,{style:{display:"flex",borderBottom:"1px solid #ccc",margin:"0 12px"},children:[a(ee,{style:{color:"#333",fontSize:"32px"}}),l("span",{children:["Xem chi tiết bài thi của thí sinh ",t==null?void 0:t.thisinh.hoten," - SBD ",t==null?void 0:t.thisinh.sbd]}),a(pe,{onClick:()=>n(),children:a(ne,{style:{color:"#d32b2b"}})})]}),a(le,{children:l("div",{className:"md:px-12 py-4 md:mx-10 mt-4 px-2",children:[a("p",{className:"mb-4",children:"Phương án thí sinh tích chọn có màu xanh da trời. Những câu hỏi thí sinh trả lời sai, đáp án đúng là đáp án được tô đỏ."}),(t==null?void 0:t.baithi.questions.length)>0&&(t==null?void 0:t.baithi.questions.map((i,d)=>a(re,{question:i,index:d+1},i.question._id)))]})})]})})}let ge=[{label:"SBD",key:"sbd"},{label:"Họ tên",key:"hoten"},{label:"Cấp bậc",key:"capbac"},{label:"Chức vụ",key:"chucvu"},{label:"Đơn vị",key:"donvi"},{label:"Số câu trả lời đúng",key:"socaudung"},{label:"Số lần thi",key:"solanthi"},{label:"Thời gian hoàn thành bài thi",key:"thoigianhoanthanh"}];function be(e){let n=e/1e3;const t=parseInt(n/3600);n=n%3600;const i=parseInt(n/60);return n=n%60,t===0?`${i}m:${n.toFixed()}s`:`${t}h:${i}m:${n.toFixed()}s`}const $e=()=>{let{id:e}=A();const[n,t]=r.useState(!0);let[i,d]=r.useState(0),[h,b]=r.useState(0),[s,f]=r.useState(null),[m,c]=r.useState([]),[x,k]=r.useState([]);const[u,_]=r.useState({status:!1,item:null}),z=P=>{_({item:P,status:!0})},q=()=>{_({...u,status:!1})};return r.useEffect(()=>{(async()=>{let y=await O.getKetquaThi(e);f(y.data.cuocthi),d(y.data.data.length);let v=0;y.data.data.forEach(p=>v+=p.solanthi),b(v),c(y.data.data),k(y.data.data.map(p=>({sbd:p.thisinh.sbd,hoten:p.thisinh.hoten,capbac:p.thisinh.capbac,chucvu:p.thisinh.chucvu,donvi:p.thisinh.donvi.kyhieu,socaudung:p.baithi.socaudung,solanthi:p.solanthi,thoigianhoanthanh:be(p.baithi.thoigiannopbai-p.baithi.thoigianbatdau)}))),t(!1)})()},[e]),l("div",{className:"mx-2 bg-white pb-2 px-4 shadow-2xl py-2",children:[l("h3",{className:"flex items-center space-x-2",children:[a(W,{}),l("span",{className:"text-lg font-semibold",children:["Kết quả cuộc thi ",s==null?void 0:s.tencuocthi]})]}),l("ul",{className:"mt-2 ml-4",children:[l("li",{className:"text-gray-600 my-1",children:["Số lượng câu hỏi: ",a("span",{className:"font-bold ml-2 text-black",children:s==null?void 0:s.soluongcauhoi})]}),l("li",{className:"text-gray-600 my-1",children:["Thời gian làm bài: ",l("span",{className:"font-bold ml-2 text-black",children:[s==null?void 0:s.thoigianthi," phút"]})]}),l("li",{className:"text-gray-600 my-1",children:["Ngày thi: ",a("span",{className:"font-bold ml-2 text-black",children:Y(s==null?void 0:s.ngaytochucthi).format("DD/MM/YYYY")})]}),l("li",{className:"text-gray-600 my-1",children:["Tổng số thí sinh dự thi: ",a("span",{className:"font-bold ml-2 text-black",children:i})]}),l("li",{className:"text-gray-600 my-1",children:["Tổng số lượt thi: ",a("span",{className:"font-bold ml-2 text-black",children:h})]})]}),a("h4",{className:"text-center my-4 font-bold",children:"Bảng thống kê kết quả thi xếp từ cao xuống thấp theo số lượng câu trả lời đúng"}),a("div",{className:"text-end mb-2",children:a(g,{children:a(ie,{data:x,headers:ge,filename:`ketquacuocthi_${s==null?void 0:s.tencuocthi}`,children:l("div",{className:"flex items-center shadow-md space-x-2 bg-green-300 px-2 py-1 rounded-md",children:[a(se,{}),a("span",{className:"text-sm text-green-800",children:"Xuất file excel"})]})})})}),a(de,{list:m,cuocthi:s,item:u.item,onClickOpenDialogEdit:z}),n&&a(X,{open:n}),a(ue,{open:u.status,item:u.item,onCloseDialogEdit:q})]})};export{$e as default};
