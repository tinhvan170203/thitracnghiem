import{c as u,a as s,g as c,r as g,u as p,i as b,j as a,d as t,e as k,ax as n,B as f,aq as x,ay as v,o as y,aw as N}from"./index-7b6a1e29.js";const w=u({tentaikhoan:s().required("Vui lòng nhập tên tài khoản"),matkhau:s().required("Vui lòng nhập mật khẩu"),matkhaumoi:s().required("Vui lòng nhập mật khẩu mới")}).required();function q(S){const r=c(),[i,l]=g.useState(""),e=p({defaultValues:{tentaikhoan:"",matkhau:"",matkhaumoi:""},resolver:y(w)}),{enqueueSnackbar:m}=b(),d=async o=>{try{await N.changePage(o),m("Đổi mật khẩu thành công. Vui lòng đăng nhập lại",{anchorOrigin:{vertical:"bottom",horizontal:"right"},variant:"success"}),r("/login")}catch(h){l(h.message)}};return a("div",{className:"bg-gray-300 h-[100vh] flex justify-center items-center",children:t("div",{className:"w-[80%] bg-white py-8 px-2 rounded-md shadow-lg flex space-x-2 items-center",children:[a("div",{className:"md:basis-1/2 sm:basis-0 lg:basis-2/3 basis-0",children:a("img",{src:"/loginimage.png",className:"rounded-md md:p-8 sm:p-0 w-full shadow-md"})}),t("div",{className:"md:basis-1/2 sm:basis-full lg:basis-1/3 p-4",children:[a("p",{className:"text-md font-bold text-center",children:"Đổi mật khẩu tài khoản"}),t("form",{onSubmit:e.handleSubmit(d),children:[a(k,{name:"tentaikhoan",label:"Tên tài khoản",form:e,disabled:!1}),a(n,{name:"matkhau",label:"Mật khẩu cũ",form:e,disabled:!1}),a(n,{name:"matkhaumoi",label:"Mật khẩu mới",form:e,disabled:!1}),i&&a("p",{className:"text-sm text-red-800",children:i}),a("div",{children:a(f,{type:"submit",variant:"contained",startIcon:a(x,{}),fullWidth:!0,style:{margin:"8px auto"},children:"Đổi mật khẩu"})}),a(v,{to:"/login",children:a("p",{className:"my-2 text-end underline font-semibold text-red-800",children:"Quay lại đăng nhập"})})]})]})]})})}q.propTypes={};export{q as default};
