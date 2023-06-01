import{r as s,j as e,d as o,P as T,F as P,B as w,f as U,a5 as M,g as A,h as B,i as O,L as j,a4 as N}from"./index-84f46720.js";import{q as D}from"./base-312a79a2.js";import{T as F,a as Q,b as W,c as q,d as p,e as H,f as V}from"./Edit-e94ab80e.js";import{B as I}from"./Box-ce147669.js";import{S as G,P as J}from"./PaginationComponent-3836369d.js";import{c as K}from"./commonApi-f45be029.js";import"./axiosCommon-f4db16ce.js";function X({values:g,onHandleEdit:f,userTemp:r}){const[c,n]=s.useState([]),[l,x]=s.useState(!1);s.useEffect(()=>{n(g)},[g]),s.useEffect(()=>{if(r){let t=[];g.forEach(i=>{r.quantrinhomdonvi.map(h=>h._id).includes(i.name)?t.push({name:i.name,monthi:i.monthi,isChecked:!0}):t.push({name:i.name,monthi:i.monthi,isChecked:!1})}),n(t)}else n(g)},[r]);const b=t=>{const{name:i,checked:h}=t.target;if(i==="allSelect"){let y=c.map(u=>({...u,isChecked:h}));n(y)}else{let y=c.map(u=>u.name===i?{...u,isChecked:h}:u);n(y)}},v=async()=>{let t=[];c.forEach(h=>{h.isChecked===!0&&t.push(h.name)});let i={id_edit:r._id,quantrinhomdonvi:t};x(!0),await f(i),x(!1)};return e("div",{className:"p-2",children:o(T,{style:{padding:"16px"},children:[o("h3",{className:"text-md text-center mt-2 font-bold",children:["Nhóm đơn vị được quản lý ",r&&o(P,{children:["bởi người dùng ",r.tentaikhoan]})]}),e("div",{className:"text-end",children:e(w,{variant:"contained",size:"small",disabled:r===null||l,onClick:v,children:"Lưu phân quyền"})}),o("div",{children:[e("input",{type:"checkbox",checked:c.filter(t=>(t==null?void 0:t.isChecked)!==!0).length<1,name:"allSelect",value:"allSelect",onChange:b}),e("span",{className:"text-red-900 font-bold ml-1",children:"Tất cả"})]}),e("div",{className:"flex flex-wrap",children:c&&c.map((t,i)=>o("div",{className:"flex space-x-1 basis-1/3",children:[e("input",{type:"checkbox",checked:(t==null?void 0:t.isChecked)||!1,name:t.name,onChange:b}),e("span",{className:"text-black",children:t.monthi})]},t.name))})]})})}const Y=({userList:g,userTemp:f,page:r,onClickSettingRoleUser:c})=>{const n=U(l=>l.authReducer.roles_x01);return e(I,{mt:4,children:e(F,{children:o(Q,{sx:{minWidth:650},"aria-label":"simple table",children:[e(W,{children:o(q,{children:[e(p,{align:"left",style:{fontSize:"14px"},children:"#"}),e(p,{align:"left",style:{fontSize:"14px"},children:"Tên tài khoản"}),e(p,{align:"left",style:{fontSize:"14px"},children:"Quyền quản lý môn thi"}),e(p,{align:"right",style:{fontSize:"14px"},children:"Thao tác"})]})}),e(H,{children:g.map((l,x)=>o(q,{className:f&&l._id===f._id?"bg-gray-300":"",sx:{"&:last-child td, &:last-child th":{border:0}},children:[e(p,{component:"th",scope:"row",children:(r-1)*5+1+x}),e(p,{align:"left",style:{fontWeight:"bold"},children:l.tentaikhoan}),e(p,{align:"left",children:l.quantrinhomdonvi.map(b=>b.tenmonthi).toString()}),e(p,{align:"right",style:{minWidth:"200px"},children:n&&n.includes("sửa phân quyền quản lý môn thi")&&o(w,{variant:"contained",color:"success",onClick:()=>c(l),size:"small",children:[e(V,{style:{fontSize:"20px",marginRight:"4px"}})," ","Phân quyền"]})})]},l._id))})]})})})},se=()=>{const[g,f]=s.useState(!0),[r,c]=s.useState([]),[n,l]=s.useState({page:1,total:1}),[x,b]=s.useState(!1),[v,t]=s.useState(null),i=M(),h=A();let[y,u]=B();const{enqueueSnackbar:S}=O(),k=s.useMemo(()=>{const d=D.parse(i.search);return{...d,page:Number(d.page)||1}},[i.search]),z=d=>{l({...n,page:d});const a={...k,page:d};u(a)},[E,_]=s.useState([]);s.useEffect(()=>{(async()=>{let a=await K.getAllMonthi();if(a&&a.data.length>0){let C=a.data.map(m=>({name:m._id,monthi:m.tenmonthi}));_(C)}})()},[]),s.useEffect(()=>{(async()=>{try{const a=await N.getUsers(k.page);console.log(a),c(a.data.users),l({page:Number(a.data.page),total:a.data.total}),f(!1)}catch(a){a.message==="Token không hợp lệ hoặc đã hết hạn. Vui lòng đăng nhập lại"?(S(a.message,{anchorOrigin:{vertical:"bottom",horizontal:"right"},variant:"error"}),h("/login")):(S(a.message,{anchorOrigin:{vertical:"bottom",horizontal:"right"},variant:"error"}),h("/login"))}})()},[k]);const L=d=>{t(d)},R=async d=>{let a=n.page;const C={...d,page:a};try{let m=await N.editQuanlydonvi(C);c(m.data.users),t(null),S(m.data.message,{anchorOrigin:{vertical:"bottom",horizontal:"right"},variant:"success"})}catch(m){m.message==="Token không hợp lệ hoặc đã hết hạn. Vui lòng đăng nhập lại"&&(h("/login"),S(m.message,{anchorOrigin:{vertical:"bottom",horizontal:"right"},variant:"error"})),S(m.message,{anchorOrigin:{vertical:"bottom",horizontal:"right"},variant:"error"})}};return o("div",{className:"flex flex-col mx-2 space-x-1 lg:flex-row",children:[o("div",{className:"lg:basis-2/3 bg-white px-4",children:[e("h1",{className:"text-gray-900 text-center mt-2 pt-4 font-bold sm:text-[14px] md:text-[18px]",children:"Phân quyền quản lý môn thi"}),x&&e(j,{}),g?e("div",{className:"mt-2",children:e(G,{variant:"rectangular",width:"100%",height:"450px"})}):o(P,{children:[e(Y,{userList:r,page:n.page,onClickSettingRoleUser:L,userTemp:v}),e(J,{page:n.page,totalPage:n.total,onChangePage:z})]})]}),e("div",{className:"lg:basis-1/3 bg-white",children:e(X,{userTemp:v,onHandleEdit:R,values:E})})]})};export{se as default};