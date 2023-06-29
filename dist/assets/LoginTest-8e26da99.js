import{c as x,a as d,am as N,r,u as v,g as S,i as y,j as e,d as a,L as T,e as m,B as q,an as w,o as k,ao as C}from"./index-30f8b152.js";import{c as I}from"./commonApi-84501ff3.js";import"./axiosCommon-e0d69143.js";const V=x({sbd:d().required("Vui lòng nhập số báo danh"),hoten:d().required("Vui lòng nhập họ tên thí sinh")}).required();function j(L){N();const[c,i]=r.useState(""),[t,u]=r.useState(null),n=v({defaultValues:{sbd:"",hoten:""},resolver:k(V)}),g=S(),{enqueueSnackbar:p}=y();r.useEffect(()=>{(async(o,s)=>{try{let h=await C.get("https://thitracnghiem.onrender.com/checkedTest");u(h.data)}catch{i("Không có cuộc thi nào đang diễn ra trong hệ thống. Xin vui lòng liên hệ quản trị viên hoặc xem lại lịch thi. Trân trọng!!")}})()},[]);const b=async l=>{let o={...l,id_cuocthi:t._id};i(null);try{let s=await I.loginTest(o);localStorage.setItem("thongtinthisinh",JSON.stringify(s.data.item)),localStorage.setItem("question_list",JSON.stringify(s.data.questionsSendClient)),localStorage.setItem("thongtinbaithi",JSON.stringify(s.data.cuocthi)),g("/vao-thi"),p("Chúc thí sinh đạt kết quả tốt nhất!",{anchorOrigin:{vertical:"bottom",horizontal:"right"},variant:"success"})}catch(s){i(s.response.data.message)}},{isSubmitting:f}=n.formState;return e("div",{className:"bg-gray-300 h-[100vh] flex justify-center items-center",children:a("div",{className:"w-[90%] bg-white py-8 px-2 rounded-md shadow-lg flex space-x-2 items-center",children:[e("div",{className:"md:basis-1/2 sm:basis-0 lg:basis-2/3 basis-0",children:e("img",{src:"/loginimage.png",className:"rounded-md md:p-8 sm:p-0 w-full shadow-md"})}),a("div",{className:"md:basis-1/2 sm:basis-full lg:basis-1/3 p-4",children:[f&&e(T,{}),a("div",{className:"flex flex-col items-center",children:[e("img",{src:"/cong-an-hieu.png",alt:"conganhieu",className:"w-[100px]"}),e("p",{className:"font-bold text-center",children:"Hệ thống thi trắc nghiệm trên nền tảng số Công an tỉnh Hưng Yên"})]}),t&&a("p",{className:"text-md text-green-700 font-semibold text-center",children:["Cuộc thi: ",t.tencuocthi]}),e("hr",{}),a("form",{onSubmit:n.handleSubmit(b),className:"mt-1",children:[e(m,{name:"sbd",label:"Số báo danh",form:n,disabled:t===null}),e(m,{name:"hoten",label:"Họ và tên thí sinh",form:n,disabled:t===null}),c&&e("p",{className:"text-md text-center m-2 text-red-800",children:c}),e("div",{className:"flex space-x-2",children:e("div",{className:"basis-full",children:e(q,{type:"submit",disabled:t===null,variant:"contained",startIcon:e(w,{}),fullWidth:!0,style:{margin:"8px auto"},children:"Làm bài thi"})})}),e("p",{className:"text-center text-slate-500 mt-2 text-sm",children:"Công trình thanh niên của chi đoàn Phòng Tham mưu"}),e("p",{className:"text-center text-slate-500 text-sm",children:"@2023 - Design by Vu Van Tinh"})]})]})]})})}j.propTypes={};export{j as default};