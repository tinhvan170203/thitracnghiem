import{aj as I,ab as M,ak as $,r as s,j as e,F as S,d as t,S as z,s as B,I as O,B as b,g as W,i as X,P as G}from"./index-7b6a1e29.js";import{d as U}from"./dayjs.min-1fb409ce.js";import{c as j}from"./commonApi-c70d1340.js";import{a as x}from"./Radio-806eda25.js";import{M as Z}from"./ModalLoading-04d0bfbb.js";import{D as R,b as A,a as q,d as ee}from"./Cancel-106abbd1.js";import{B as E}from"./Box-d34d2ebe.js";import{D as F}from"./DialogActions-75d297a3.js";import{d as te}from"./AutoAwesomeMotion-4efc4403.js";import"./axiosCommon-3c967518.js";var _={},ae=M;Object.defineProperty(_,"__esModule",{value:!0});var y=_.default=void 0,ne=ae(I()),ce=$,ie=(0,ne.default)((0,ce.jsx)("path",{d:"m22 5.72-4.6-3.86-1.29 1.53 4.6 3.86L22 5.72zM7.88 3.39 6.6 1.86 2 5.71l1.29 1.53 4.59-3.85zM12.5 8H11v6l4.75 2.85.75-1.23-4-2.37V8zM12 4c-4.97 0-9 4.03-9 9s4.02 9 9 9c4.97 0 9-4.03 9-9s-4.03-9-9-9zm0 16c-3.87 0-7-3.13-7-7s3.13-7 7-7 7 3.13 7 7-3.13 7-7 7z"}),"AccessAlarm");y=_.default=ie;var w={},se=M;Object.defineProperty(w,"__esModule",{value:!0});var Q=w.default=void 0,le=se(I()),D=$,re=(0,le.default)([(0,D.jsx)("path",{d:"M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"},"0"),(0,D.jsx)("path",{d:"M12.5 7H11v6l5.25 3.15.75-1.23-4.5-2.67z"},"1")],"AccessTime");Q=w.default=re;function oe(n){let c=n/1e3;const i=parseInt(c/3600);c=c%3600;const l=parseInt(c/60);return c=c%60,i===0?`${l} phút ${c.toFixed()} giây`:`${i} giờ ${l} phút ${c.toFixed()} giây`}const de=({thoigianketthuc:n,onHandleSubmitTest:c,stop:i,timeNow:l})=>{const[m,r]=s.useState(1e15),[h,v]=s.useState(!1);s.useEffect(()=>{if(l){let a=n-l;v(!0),r(a)}},[l]);let p=s.useRef();const g=()=>r(a=>a-1e3);return s.useEffect(()=>(p.current=setInterval(g,1e3),()=>clearInterval(p.current)),[]),s.useEffect(()=>{m<=0&&(clearInterval(p.current),c())},[m]),s.useEffect(()=>{i&&clearInterval(p.current)},[i]),e(S,{children:h&&e("div",{className:"bg-green-200 p-2 text-green-900 my-1 rounded-md",children:oe(m)})})},me=({question:n,index:c,onHandleChangeChoice:i})=>{const[l,m]=s.useState(()=>n.choice),r=h=>{m(h.target.value),i(n._id,h.target.value)};return t("div",{className:"mb-8",children:[t("h4",{className:"font-semibold text-black",children:[t("span",{className:"text-red-600 font-bold",children:["Câu ",c,": "]})," ",n.question]}),t("ul",{className:"flex flex-col md:flex-row flex-wrap",children:[t("li",{className:"flex items-start space-x-2 basis-1/2",children:[e(x,{name:n._id,onChange:r,checked:l==="option_a",value:"option_a"}),t("span",{className:"pt-2",children:[e("span",{className:"font-bold",children:"A."})," ",n.option_a]})]}),t("li",{className:"flex items-start space-x-2 basis-1/2",children:[e(x,{name:n._id,onChange:r,checked:l==="option_b",value:"option_b"}),t("span",{className:"pt-2",children:[e("span",{className:"font-bold",children:"B."})," ",n.option_b]})]}),t("li",{className:"flex items-start space-x-2 basis-1/2",children:[e(x,{name:n._id,onChange:r,checked:l==="option_c",value:"option_c"}),t("span",{className:"pt-2",children:[e("span",{className:"font-bold",children:"C."})," ",n.option_c]})]}),t("li",{className:"flex items-start space-x-2 basis-1/2",children:[e(x,{name:n._id,onChange:r,checked:l==="option_d",value:"option_d"}),t("span",{className:"pt-2",children:[e("span",{className:"font-bold",children:"D."})," ",n.option_d]})]})]})]})},he=({questions:n})=>e("div",{className:"flex flex-wrap",children:n==null?void 0:n.map((c,i)=>c.choice!==void 0?e("div",{className:"h-[28px] w-[28px] rounded-sm bg-blue-900 flex items-center justify-center mx-1 mt-1",children:e("span",{className:"text-white",children:i+1})},c._id):e("div",{className:"h-[28px] w-[28px] rounded-sm bg-slate-500 flex items-center justify-center mx-1 mt-1",children:e("span",{className:"text-white",children:i+1})},c._id))}),pe=s.forwardRef(function(c,i){return e(z,{direction:"up",ref:i,...c})});B(O)({position:"absolute",right:"16px",top:"4px"});function ue({open:n,onCloseDialogSuccessTest:c,result:i,onSubmit:l}){const m=()=>{l()};return e(S,{children:e(R,{fullWidth:!0,disableEscapeKeyDown:!0,onClose:(r,h)=>{h!=="backdropClick"&&c(r,h)},open:n,TransitionComponent:pe,keepMounted:!0,"aria-describedby":"alert-dialog-slide-description",sx:{zIndex:1e7},children:t(A,{children:[e("img",{src:"/congrate.jpg",alt:"img"}),t("p",{className:"text-center",children:["Chúc mừng thí sinh đã hoàn thành bài thi với ",t("span",{className:"font-bold",children:[i.choicedTrue,"/",i.allQuestion]})," câu trả lời đúng, tương đương",t("span",{className:"font-bold text-red-800",children:[" ",i.choicedTrue/i.allQuestion*i.diem," "]}),"điểm"]}),e(E,{children:e(F,{children:e(b,{color:"error",variant:"contained",type:"submit",style:{margin:"4px auto"},onClick:m,children:e("span",{children:"Kết thúc"})})})})]})})})}const fe=s.forwardRef(function(c,i){return e(z,{direction:"up",ref:i,...c})}),ge=B(O)({position:"absolute",right:"16px",top:"4px"});function xe({open:n,onCloseDialogConfirmNopBai:c,onSubmit:i}){return e(S,{children:t(R,{fullWidth:!0,disableEscapeKeyDown:!0,onClose:(m,r)=>{r!=="backdropClick"&&c(m,r)},open:n,TransitionComponent:fe,keepMounted:!0,"aria-describedby":"alert-dialog-slide-description",children:[t(q,{style:{display:"flex",borderBottom:"1px solid #ccc",margin:"0 12px"},children:[e(te,{style:{color:"#333",fontSize:"32px"}}),e("span",{children:"Xác nhận nộp bài"}),e(ge,{onClick:()=>c(),children:e(ee,{style:{color:"#d32b2b"}})})]}),t(A,{children:[e("img",{src:"/the end.jpg",alt:"img"}),e("p",{className:"text-center",children:"Thí sinh có chắc chắn muốn nộp bài thi hay không?"}),e(E,{children:e(F,{children:e(b,{color:"error",variant:"contained",type:"submit",style:{margin:"4px auto"},onClick:async()=>{await i()},children:e("span",{children:"Đồng ý nộp bài thi"})})})})]})]})})}const Me=()=>{const[n,c]=s.useState(null),[i,l]=s.useState(!1),m=()=>{l(!1)},[r,h]=s.useState(!1),v=()=>{h(!1)},p=W(),{enqueueSnackbar:g}=X(),[a,be]=s.useState(()=>JSON.parse(localStorage.getItem("thongtinthisinh"))),[u,H]=s.useState(()=>JSON.parse(localStorage.getItem("question_list"))),[o,ve]=s.useState(()=>JSON.parse(localStorage.getItem("thongtinbaithi"))),[J,Ne]=s.useState(!1),[C,L]=s.useState({choicedTrue:0,allQuestion:0,diem:0}),[P,Y]=s.useState(!1);s.useEffect(()=>{(!a||!u||!o)&&(p("/tracnghiem"),g("Vui lòng đăng nhập để vào thi",{anchorOrigin:{vertical:"bottom",horizontal:"right"},variant:"error"})),(async()=>{try{let f=await j.checkedTest(o._id);c(f.data.timeNow)}catch(f){p("/tracnghiem"),g(f.response.data.message,{anchorOrigin:{vertical:"bottom",horizontal:"right"},variant:"error"})}})()},[]);const K=(d,f)=>{let k=u.map(N=>N._id.toString()===d?{...N,choice:f}:N);localStorage.setItem("question_list",JSON.stringify(k)),H(k)},T=async()=>{try{let d=await j.submitTest(o._id,u);L({...C,choicedTrue:d.data.choicedTrue,allQuestion:d.data.allQuestion,diem:d.data.diem}),Y(!0),l(!0)}catch(d){console.log(d),g(d.message,{anchorOrigin:{vertical:"bottom",horizontal:"right"},variant:"error"})}},V=()=>{localStorage.removeItem("thongtinthisinh"),localStorage.removeItem("question_list"),localStorage.removeItem("thongtinbaithi"),l(!1),p("/tracnghiem")};return t("div",{children:[e("div",{className:"banner bg-blue-500 w-full md:h-[150px] md:fixed md:top-0 md:left-0 shadow-md z-10",children:e("img",{src:"/banner.jpg",alt:"banner",className:"w-full"})}),t("div",{className:"flex md:mt-[150px] flex-col md:flex-row",children:[e("div",{className:"w-full md:w-[320px] bg-gray-200 p-2 top-[150px] md:overflow-auto md:scrollbar-hidden md:sticky md:h-[calc(100vh_-_150px)]",children:t("div",{className:"text-black bg-white px-2 py-4 rounded-md shadow-lg relative",children:[e("img",{src:"/anhnenthisinh.png",alt:"icon-congan",className:"w-[150px] absolute left-10 top-4 opacity-50"}),t("div",{className:"my-2 flex items-center justify-between",children:[e("span",{className:"text-gray-900",children:"Số báo danh: "}),e("span",{children:a==null?void 0:a.sbd})]}),t("div",{className:"my-2 flex items-center justify-between",children:[e("span",{className:"text-gray-900",children:"Họ tên: "}),e("span",{className:"font-bold",children:a==null?void 0:a.hoten})]}),t("div",{className:"my-2 flex items-center justify-between",children:[e("span",{className:"text-gray-900",children:"Cấp bậc: "}),e("span",{children:a==null?void 0:a.capbac})]}),t("div",{className:"my-2 flex items-center justify-between",children:[e("span",{className:"text-gray-900",children:"Chức vụ: "}),e("span",{children:a==null?void 0:a.chucvu})]}),t("div",{className:"my-2 flex items-center justify-between",children:[e("span",{className:"text-gray-900",children:"Đơn vị: "}),e("span",{children:a==null?void 0:a.donvi.kyhieu})]}),t("div",{className:"my-2 flex items-center justify-between",children:[t("span",{className:"text-red-600 font-bold flex items-center space-x-1",children:[e(y,{}),e("span",{children:"Thời gian bắt đầu thi: "})]}),e("span",{className:"font-bold text-red-600",children:new Date(o==null?void 0:o.thoigianbatdau).toLocaleString().slice(0,8)})]}),t("div",{className:"my-2 flex items-center justify-between",children:[t("span",{className:"text-black font-bold flex items-center space-x-1",children:[e(y,{}),e("span",{children:"Thời gian kết thúc:"})]}),e("span",{className:"font-bold",children:new Date(o==null?void 0:o.thoigianketthuc).toLocaleString().slice(0,8)})]}),t("div",{className:"my-2",children:[t("span",{className:"text-green-800 font-bold flex items-center space-x-1",children:[e(Q,{color:"success"}),e("span",{children:"Thời gian còn lại:"})]}),e("br",{}),t("div",{className:" bg-green-200 flex items-center rounded-lg py-1 px-2 justify-between",children:[e("img",{src:"/clock.png",alt:"clock",className:"w-12"}),e(de,{timeNow:n,stop:P,onHandleSubmitTest:T,thoigianketthuc:o==null?void 0:o.thoigianketthuc})]})]}),e(he,{questions:u}),e(b,{variant:"contained",style:{width:"100%",marginTop:"16px"},onClick:()=>h(!0),children:"Nộp bài thi"})]})}),t("div",{className:"flex-1 p-4",children:[t("h3",{className:"text-center text-xl font-bold",children:["Thi trắc nghiệm: ",a==null?void 0:a.cuocthi.tencuocthi]}),t("p",{className:"text-center my-2 font-semibold",children:["Thời gian làm bài: ",a==null?void 0:a.cuocthi.thoigianthi," phút"]}),t("p",{className:"text-center my-2 font-semibold",children:["Ngày tổ chức thi:"," ",U(a==null?void 0:a.cuocthi.ngaytochucthi).format("DD/MM/YYYY")]}),e("div",{className:"mb-4 px-8 text-center text-red-800",children:t("i",{children:["( Thí sinh dự thi cần thực hiện nghiêm các qui định của hội đồng coi thi. ",e("br",{})," Nếu bị phát hiện gian lận trong quá trình thi, thí sinh sẽ phải dừng thi. Đơn vị tổ chức cuộc thi sẽ thông báo về đơn vị chủ quản để có biện pháp xử lý kỉ luật đối với cá nhân vi phạm. )"]})}),e(G,{className:"md:px-12 py-4 md:mx-10 px-2",children:u==null?void 0:u.map((d,f)=>e(me,{question:d,index:f+1,onHandleChangeChoice:K},d._id))}),e("div",{className:"md:hidden",children:e(b,{variant:"contained",style:{width:"100%",marginTop:"16px"},onClick:()=>h(!0),children:"Nộp bài thi"})}),J&&e(Z,{}),e(ue,{open:i,onCloseDialogSuccessTest:m,result:C,onSubmit:V}),e(xe,{open:r,onCloseDialogConfirmNopBai:v,onSubmit:T})]})]})]})};export{Me as default};
