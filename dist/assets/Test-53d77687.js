import{N as k,O as C,Q as j,r,j as e,d as a,S as A,s as B,I as E,F as Q,B as b,g as H,i as F,P as J}from"./index-3d1a5215.js";import{d as L}from"./dayjs.min-a8799c8e.js";import{c as w}from"./commonApi-b66317af.js";import{a as g}from"./Radio-b4b75d18.js";import{M as P}from"./ModalLoading-209f6483.js";import{D as Y,a as V}from"./DialogContent-f048b8d6.js";import{B as K}from"./Box-8e0b89d7.js";import{D as W}from"./DialogActions-b248474c.js";import"./axiosCommon-d6374f71.js";var y={},G=C;Object.defineProperty(y,"__esModule",{value:!0});var N=y.default=void 0,U=G(k()),X=j,Z=(0,U.default)((0,X.jsx)("path",{d:"m22 5.72-4.6-3.86-1.29 1.53 4.6 3.86L22 5.72zM7.88 3.39 6.6 1.86 2 5.71l1.29 1.53 4.59-3.85zM12.5 8H11v6l4.75 2.85.75-1.23-4-2.37V8zM12 4c-4.97 0-9 4.03-9 9s4.02 9 9 9c4.97 0 9-4.03 9-9s-4.03-9-9-9zm0 16c-3.87 0-7-3.13-7-7s3.13-7 7-7 7 3.13 7 7-3.13 7-7 7z"}),"AccessAlarm");N=y.default=Z;var S={},q=C;Object.defineProperty(S,"__esModule",{value:!0});var D=S.default=void 0,ee=q(k()),T=j,te=(0,ee.default)([(0,T.jsx)("path",{d:"M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"},"0"),(0,T.jsx)("path",{d:"M12.5 7H11v6l5.25 3.15.75-1.23-4.5-2.67z"},"1")],"AccessTime");D=S.default=te;function ae(n){let c=n/1e3;const s=parseInt(c/3600);c=c%3600;const l=parseInt(c/60);return c=c%60,s===0?`${l} phút ${c.toFixed()} giây`:`${s} giờ ${l} phút ${c.toFixed()} giây`}const ne=({thoigianketthuc:n,onHandleSubmitTest:c,stop:s})=>{const[l,d]=r.useState(()=>{let f=new Date().getTime();return n-f});let t=r.useRef();const m=()=>d(o=>o-1e3);return r.useEffect(()=>(t.current=setInterval(m,1e3),()=>clearInterval(t.current)),[]),r.useEffect(()=>{l<=0&&(clearInterval(t.current),console.log("rểnder"),c())},[l]),r.useEffect(()=>{s&&clearInterval(t.current)},[s]),e("div",{className:"bg-green-200 p-2 text-green-900 my-1 rounded-md",children:ae(l)})},ce=({question:n,index:c,onHandleChangeChoice:s})=>{const[l,d]=r.useState(()=>n.choice),t=m=>{d(m.target.value),s(n._id,m.target.value)};return a("div",{className:"mb-8",children:[a("h4",{className:"font-semibold text-black",children:[a("span",{className:"text-red-600 font-bold",children:["Câu ",c,": "]})," ",n.question]}),a("ul",{className:"flex flex-col md:flex-row flex-wrap",children:[a("li",{className:"flex items-start space-x-2 basis-1/2",children:[e(g,{name:n._id,onChange:t,checked:l==="option_a",value:"option_a"}),a("span",{className:"pt-2",children:[e("span",{className:"font-bold",children:"A."})," ",n.option_a]})]}),a("li",{className:"flex items-start space-x-2 basis-1/2",children:[e(g,{name:n._id,onChange:t,checked:l==="option_b",value:"option_b"}),a("span",{className:"pt-2",children:[e("span",{className:"font-bold",children:"B."})," ",n.option_b]})]}),a("li",{className:"flex items-start space-x-2 basis-1/2",children:[e(g,{name:n._id,onChange:t,checked:l==="option_c",value:"option_c"}),a("span",{className:"pt-2",children:[e("span",{className:"font-bold",children:"C."})," ",n.option_c]})]}),a("li",{className:"flex items-start space-x-2 basis-1/2",children:[e(g,{name:n._id,onChange:t,checked:l==="option_d",value:"option_d"}),a("span",{className:"pt-2",children:[e("span",{className:"font-bold",children:"D."})," ",n.option_d]})]})]})]})},se=({questions:n})=>e("div",{className:"flex flex-wrap",children:n==null?void 0:n.map((c,s)=>c.choice!==void 0?e("div",{className:"h-[28px] w-[28px] bg-green-800 flex items-center justify-center mx-1 mt-1",children:e("span",{className:"text-white",children:s+1})},c._id):e("div",{className:"h-[28px] w-[28px] bg-slate-500 flex items-center justify-center mx-1 mt-1",children:e("span",{className:"text-white",children:s+1})},c._id))}),le=r.forwardRef(function(c,s){return e(A,{direction:"up",ref:s,...c})});B(E)({position:"absolute",right:"16px",top:"4px"});function re({open:n,onCloseDialogSuccessTest:c,result:s,onSubmit:l}){const d=()=>{l()};return e(Q,{children:e(Y,{fullWidth:!0,disableEscapeKeyDown:!0,onClose:(t,m)=>{m!=="backdropClick"&&c(t,m)},open:n,TransitionComponent:le,keepMounted:!0,"aria-describedby":"alert-dialog-slide-description",children:a(V,{children:[e("img",{src:"/congrate.jpg",alt:"img"}),a("p",{className:"text-center",children:["Chúc mừng thí sinh đã hoàn thành bài thi với ",a("span",{className:"font-bold",children:[s.choicedTrue,"/",s.allQuestion]})," câu trả lời đúng"]}),e(K,{children:e(W,{children:e(b,{color:"error",variant:"contained",type:"submit",style:{margin:"4px auto"},onClick:d,children:e("span",{children:"Kết thúc"})})})})]})})})}const be=()=>{const[n,c]=r.useState(!1),s=()=>{c(!1)},l=H(),{enqueueSnackbar:d}=F(),[t,m]=r.useState(()=>JSON.parse(localStorage.getItem("thongtinthisinh"))),[o,f]=r.useState(()=>JSON.parse(localStorage.getItem("question_list"))),[i,ie]=r.useState(()=>JSON.parse(localStorage.getItem("thongtinbaithi"))),[I,oe]=r.useState(!1),[_,M]=r.useState({choicedTrue:0,allQuestion:0}),[z,O]=r.useState(!1);r.useEffect(()=>{(!t||!o||!i)&&(l("/tracnghiem"),d("Vui lòng đăng nhập để vào thi",{anchorOrigin:{vertical:"bottom",horizontal:"right"},variant:"error"})),(async()=>{try{let h=await w.checkedTest(i._id);console.log(h)}catch(h){l("/tracnghiem"),d(h.response.data.message,{anchorOrigin:{vertical:"bottom",horizontal:"right"},variant:"error"})}})()},[]);const $=(u,h)=>{let p=o.map(v=>v._id.toString()===u?{...v,choice:h}:v);localStorage.setItem("question_list",JSON.stringify(p)),f(p)},x=async(u,h)=>{try{let p=await w.submitTest(i._id,o);M({..._,choicedTrue:p.data.choicedTrue,allQuestion:p.data.allQuestion}),c(!0),O(!0)}catch(p){console.log(p),d(p.message,{anchorOrigin:{vertical:"bottom",horizontal:"right"},variant:"error"})}},R=()=>{localStorage.removeItem("thongtinthisinh"),localStorage.removeItem("question_list"),localStorage.removeItem("thongtinbaithi"),c(!1),l("/tracnghiem")};return a("div",{children:[e("div",{className:"banner bg-blue-500 w-full md:h-[150px] md:fixed md:top-0 md:left-0 shadow-md z-10",children:e("img",{src:"/banner.jpg",alt:"banner",className:"w-full"})}),a("div",{className:"flex md:mt-[150px] flex-col md:flex-row",children:[e("div",{className:"w-full md:w-[320px] bg-gray-200 p-2 top-[150px] md:overflow-auto md:scrollbar-hidden md:sticky md:h-[calc(100vh_-_150px)]",children:a("div",{className:"text-black bg-white px-2 py-4 rounded-md shadow-lg relative",children:[e("img",{src:"/anhnenthisinh.png",alt:"icon-congan",className:"w-[150px] absolute left-10 top-4 opacity-50"}),a("div",{className:"my-2 flex items-center justify-between",children:[e("span",{className:"text-gray-900",children:"Số báo danh: "}),e("span",{children:t==null?void 0:t.sbd})]}),a("div",{className:"my-2 flex items-center justify-between",children:[e("span",{className:"text-gray-900",children:"Họ tên: "}),e("span",{className:"font-bold",children:t==null?void 0:t.hoten})]}),a("div",{className:"my-2 flex items-center justify-between",children:[e("span",{className:"text-gray-900",children:"Cấp bậc: "}),e("span",{children:t==null?void 0:t.capbac})]}),a("div",{className:"my-2 flex items-center justify-between",children:[e("span",{className:"text-gray-900",children:"Chức vụ: "}),e("span",{children:t==null?void 0:t.chucvu})]}),a("div",{className:"my-2 flex items-center justify-between",children:[e("span",{className:"text-gray-900",children:"Đơn vị: "}),e("span",{children:t==null?void 0:t.donvi.kyhieu})]}),a("div",{className:"my-2 flex items-center justify-between",children:[a("span",{className:"text-red-600 font-bold flex items-center space-x-1",children:[e(N,{}),e("span",{children:"Thời gian bắt đầu thi: "})]}),e("span",{className:"font-bold text-red-600",children:new Date(i==null?void 0:i.thoigianbatdau).toLocaleString().slice(0,8)})]}),a("div",{className:"my-2 flex items-center justify-between",children:[a("span",{className:"text-black font-bold flex items-center space-x-1",children:[e(N,{}),e("span",{children:"Thời gian kết thúc:"})]}),e("span",{className:"font-bold",children:new Date(i==null?void 0:i.thoigianketthuc).toLocaleString().slice(0,8)})]}),a("div",{className:"my-2",children:[a("span",{className:"text-green-800 font-bold flex items-center space-x-1",children:[e(D,{color:"success"}),e("span",{children:"Thời gian còn lại:"})]}),e("br",{}),a("div",{className:" bg-green-200 flex items-center rounded-lg py-1 px-2 justify-between",children:[e("img",{src:"/clock.png",alt:"clock",className:"w-12"}),e(ne,{stop:z,onHandleSubmitTest:x,thoigianketthuc:i==null?void 0:i.thoigianketthuc})]})]}),e(se,{questions:o}),e(b,{variant:"contained",style:{width:"100%",marginTop:"16px"},onClick:x,children:"Nộp bài thi"})]})}),a("div",{className:"flex-1 p-4",children:[a("h3",{className:"text-center text-xl font-bold",children:["Thi trắc nghiệm: ",t==null?void 0:t.cuocthi.tencuocthi]}),a("p",{className:"text-center my-2 font-semibold",children:["Thời gian làm bài: ",t==null?void 0:t.cuocthi.thoigianthi," phút"]}),a("p",{className:"text-center my-2 font-semibold",children:["Ngày tổ chức thi:"," ",L(t==null?void 0:t.cuocthi.ngaytochucthi).format("DD/MM/YYYY")]}),e("div",{className:"mb-4 px-8 text-center text-red-800",children:a("i",{children:["( Thí sinh dự thi cần thực hiện nghiêm các qui định của hội đồng coi thi. ",e("br",{})," Nếu bị phát hiện gian lận trong quá trình thi, thí sinh sẽ phải dừng thi. Đơn vị tổ chức cuộc thi sẽ thông báo về đơn vị chủ quản để có biện pháp xử lý kỉ luật đối với cá nhân vi phạm. )"]})}),e(J,{className:"px-12 py-4 mx-10",children:o==null?void 0:o.map((u,h)=>e(ce,{question:u,index:h+1,onHandleChangeChoice:$},u._id))}),e("div",{className:"md:hidden",children:e(b,{variant:"contained",style:{width:"100%",marginTop:"16px"},onClick:x,children:"Nộp bài thi"})}),I&&e(P,{}),e(re,{open:n,onCloseDialogSuccessTest:s,result:_,onSubmit:R})]})]})]})};export{be as default};
