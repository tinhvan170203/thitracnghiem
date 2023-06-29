import{r as o,d as m,j as e,L as F,B as R,P as ee,f as Q,av as te,g as ae,h as ne,am as ie,i as le,af as _,F as se,aw as D,az as he,aA as oe}from"./index-30f8b152.js";import{c as N,d as i,T as W,a as j,b as B,e as A,f as re}from"./Edit-2cf38396.js";import{d as ce,D as me}from"./DeleteOutline-931c49bb.js";import{B as de}from"./Box-502f7273.js";import{S as ge,P as ue}from"./PaginationComponent-edc6e2d1.js";import{q as fe}from"./base-312a79a2.js";import"./Cancel-2bceaa6a.js";function y({label:a,values:u,onChangeRoleList:r,userTemp:x}){const[g,c]=o.useState([]);o.useEffect(()=>{c(u)},[]),o.useEffect(()=>{if(x){let n=[];u.forEach(h=>{x.roles.includes(h.name)?n.push({name:h.name,isChecked:!0}):n.push({name:h.name,isChecked:!1})}),c(n)}else c(u)},[x]);const l=n=>{const{name:h,checked:v}=n.target;if(h==="allSelect"){let k=g.map(s=>({...s,isChecked:v}));c(k);let p=[],d=[];k.forEach(s=>{s.isChecked===!0?p.push(s.name):d.push(s.name)}),r(p,d)}else{let k=g.map(s=>s.name===h?{...s,isChecked:v}:s);c(k);let p=[],d=[];k.forEach(s=>{s.isChecked===!0?p.push(s.name):d.push(s.name)}),r(p,d)}};return m(N,{sx:{"&:last-child td, &:last-child th":{border:0}},children:[e(i,{component:"th",scope:"row",children:e("span",{className:"font-bold",children:a})}),g&&g.map((n,h)=>e(i,{align:"right",children:e("input",{type:"checkbox",checked:(n==null?void 0:n.isChecked)||!1,name:n.name,onChange:l})},n.name)),e(i,{align:"right",children:e("input",{type:"checkbox",checked:g.filter(n=>(n==null?void 0:n.isChecked)!==!0).length<1,name:"allSelect",value:"allSelect",onChange:l})})]})}function pe({userTemp:a,onHandleEditUser:u}){let r=[];const[x,g]=o.useState([]),[c,l]=o.useState(!1);o.useEffect(()=>{g(a!==null?a.roles:[])},[a]);const n=async()=>{let v={id_edit:a._id,roles:x};l(!0),await u(v),l(!1),g([])},h=(v,k)=>{r=x,k.length>0&&k.forEach(p=>{let d=r.findIndex(s=>s===p);d!==-1&&r.splice(d,1)}),r=r.concat(v),r=Array.from(new Set(r)),g(r)};return m("div",{className:"px-2 py-4",children:[c&&e(F,{}),m("h3",{className:"text-center text-black font-bold sm:text-[14px] md:text-[16px]",children:["Phân quyền cho tài khoản",e("span",{className:"ml-1",children:a&&a.tentaikhoan})]}),e("div",{className:"text-right mb-2",children:e(R,{variant:"contained",onClick:n,disabled:a===null||c,children:"Cập nhật"})}),e(W,{component:ee,children:m(j,{children:[e(B,{children:m(N,{children:[e(i,{}),e(i,{align:"right",children:"Xem"}),e(i,{align:"right",children:"Thêm"}),e(i,{align:"right",children:"Sửa"}),e(i,{align:"right",children:"Xóa"}),e(i,{align:"right",children:"Full"})]})}),m(A,{children:[e(y,{label:"QL tài khoản",values:[{name:"xem tài khoản"},{name:"thêm tài khoản"},{name:"sửa tài khoản"},{name:"xóa tài khoản"}],onChangeRoleList:h,userTemp:a}),e(y,{label:"Phân quyền QL môn thi",values:[{name:"xem phân quyền quản lý môn thi"},{name:"thêm phân quyền quản lý môn thi"},{name:"sửa phân quyền quản lý môn thi"},{name:"xóa phân quyền quản lý môn thi"}],onChangeRoleList:h,userTemp:a}),e(y,{label:"QL đơn vị",values:[{name:"xem đơn vị"},{name:"thêm đơn vị"},{name:"sửa đơn vị"},{name:"xóa đơn vị"}],onChangeRoleList:h,userTemp:a}),e(y,{label:"QL môn thi",values:[{name:"xem môn thi"},{name:"thêm môn thi"},{name:"sửa môn thi"},{name:"xóa môn thi"}],onChangeRoleList:h,userTemp:a}),e(y,{label:"QL cuộc thi",values:[{name:"xem cuộc thi"},{name:"thêm cuộc thi"},{name:"sửa cuộc thi"},{name:"xóa cuộc thi"}],onChangeRoleList:h,userTemp:a}),e(y,{label:"QL thí sinh",values:[{name:"xem thí sinh"},{name:"thêm thí sinh"},{name:"sửa thí sinh"},{name:"xóa thí sinh"}],onChangeRoleList:h,userTemp:a}),e(y,{label:"QL câu hỏi",values:[{name:"xem câu hỏi"},{name:"thêm câu hỏi"},{name:"sửa câu hỏi"},{name:"xóa câu hỏi"}],onChangeRoleList:h,userTemp:a}),e(y,{label:"Thay đổi trạng thái cuộc thi",values:[{name:"xem trạng thái cuộc thi"},{name:"thêm trạng thái cuộc thi"},{name:"sửa trạng thái cuộc thi"},{name:"xóa trạng thái cuộc thi"}],onChangeRoleList:h,userTemp:a})]})]})})]})}const xe=({userList:a,userTemp:u,page:r,onClickOpenDialogDelete:x,onClickSettingRoleUser:g})=>{const c=Q(l=>l.authReducer.roles_x01);return e(de,{mt:4,children:e(W,{children:m(j,{sx:{minWidth:650},"aria-label":"simple table",children:[e(B,{children:m(N,{children:[e(i,{align:"left",style:{fontSize:"14px"},children:"#"}),e(i,{align:"left",style:{fontSize:"14px"},children:"Tên tài khoản"}),e(i,{align:"left",style:{fontSize:"14px"},children:"Mật khẩu"}),e(i,{align:"left",style:{fontSize:"14px"},children:"Thứ tự"}),e(i,{align:"left",style:{fontSize:"14px"},children:"Quyền hệ thống"}),e(i,{align:"right",style:{fontSize:"14px"},children:"Thao tác"})]})}),e(A,{children:a.map((l,n)=>m(N,{className:u&&l._id===u._id?"bg-gray-300":"",sx:{"&:last-child td, &:last-child th":{border:0}},children:[e(i,{component:"th",scope:"row",children:(r-1)*5+1+n}),e(i,{align:"left",style:{fontWeight:"bold"},children:l.tentaikhoan}),e(i,{align:"left",children:l.matkhau}),e(i,{align:"left",children:l.thutu}),e(i,{align:"left",children:l.roles.toString()}),m(i,{align:"right",style:{minWidth:"200px"},children:[c&&c.includes("sửa tài khoản")&&m(R,{variant:"contained",color:"success",onClick:()=>g(l),size:"small",children:[e(re,{style:{fontSize:"20px",marginRight:"4px"}})," ","Phân quyền"]}),c&&c.includes("xóa tài khoản")&&m(R,{variant:"contained",color:"error",size:"small",style:{marginTop:"4px"},onClick:()=>x(l._id),disabled:u&&l._id===u._id,children:[e(ce,{style:{fontSize:"20px",marginRight:"4px"}})," ","Xóa"]})]})]},l._id))})]})})})},be=xe;function De(){const[a,u]=o.useState(""),[r,x]=o.useState(""),[g,c]=o.useState(1),[l,n]=o.useState(!1),[h,v]=o.useState(!0),[k,p]=o.useState([]),[d,s]=o.useState({page:1,total:1}),[P,q]=o.useState(null),U=te(),C=ae();let[ke,O]=ne();const[w,L]=o.useState({status:!1,id_Delete:null});o.useState({status:!1,user:null});const I=ie(),T=Q(t=>t.authReducer.roles_x01),z=o.useMemo(()=>{const t=fe.parse(U.search);return{...t,page:Number(t.page)||1}},[U.search]),{enqueueSnackbar:b}=le(),M=()=>{L({...w,status:!1})},V=t=>{L({status:!0,id_Delete:t})},X=t=>{s({...d,page:t});const f={...z,page:t};O(f)},H=async()=>{try{n(!0);let t=await D.addUser({tentaikhoan:a,matkhau:r,thutu:g});n(!1),b("Thêm mới tài khoản thành công!",{anchorOrigin:{vertical:"bottom",horizontal:"right"},variant:"success"}),u(""),x(""),c(1),p(t.data.users),s({page:1,total:t.data.total})}catch(t){t.message==="Token không hợp lệ vui lòng đăng nhập hoặc đã hết hạn. Vui lòng đăng nhập lại"&&(C("/login"),b(t.message,{anchorOrigin:{vertical:"bottom",horizontal:"right"},variant:"error"})),b(t.response.data.message,{anchorOrigin:{vertical:"bottom",horizontal:"right"},variant:"error"})}},$=async t=>{let f=d.page;const E={...t,page:f};try{let S=await D.editUser(E);const Y=localStorage.getItem("accessToken_thitracnghiem"),Z=he(Y);E.id_edit===Z.userId&&I(oe(t.roles)),p(S.data.users),q(null),b(S.data.message,{anchorOrigin:{vertical:"bottom",horizontal:"right"},variant:"success"})}catch(S){S.message==="Token không hợp lệ vui lòng đăng nhập hoặc đã hết hạn. Vui lòng đăng nhập lại"&&(C("/login"),b(S.message,{anchorOrigin:{vertical:"bottom",horizontal:"right"},variant:"error"})),b(S.message,{anchorOrigin:{vertical:"bottom",horizontal:"right"},variant:"error"})}},G=async()=>{try{let t=await D.deleteUser(w.id_Delete);p(t.data.users),s({...d,page:1,total:t.data.total});const f={...z,page:1};O(f),L({...w,status:!1}),b(t.data.message,{anchorOrigin:{vertical:"bottom",horizontal:"right"},variant:"success"})}catch(t){t.message==="Token không hợp lệ hoặc đã hết hạn. Vui lòng đăng nhập lại"&&(C("/login"),b(t.message,{anchorOrigin:{vertical:"bottom",horizontal:"right"},variant:"error"})),b(t.message,{anchorOrigin:{vertical:"bottom",horizontal:"right"},variant:"error"})}},J=()=>{L({...w,status:!1})};o.useEffect(()=>{(async()=>{try{const f=await D.getUsers(z.page);p(f.data.users),s({page:Number(f.data.page),total:f.data.total}),v(!1)}catch(f){f.message==="Token không hợp lệ hoặc đã hết hạn. Vui lòng đăng nhập lại"?(b(f.message,{anchorOrigin:{vertical:"bottom",horizontal:"right"},variant:"error"}),C("/login")):(b(f.message,{anchorOrigin:{vertical:"bottom",horizontal:"right"},variant:"error"}),C("/login"))}})()},[z]);const K=t=>{q(t)};return m("div",{className:"flex flex-col mx-2 space-x-1 lg:flex-row",children:[m("div",{className:"lg:basis-2/3 bg-white px-4",children:[e("h1",{className:"text-gray-900 text-center mt-2 pt-4 font-bold sm:text-[14px] md:text-[16px]",children:"Quản lý tài khoản người dùng"}),l&&e(F,{}),T&&T.includes("thêm tài khoản")&&m("form",{className:"flex flex-col items-center space-x-0 justify-start mt-8 flex-wrap md:flex-row md:space-x-4",children:[e("div",{className:"my-2 w-full md:w-[auto]",children:e(_,{name:"tentaikhoan",fullWidth:!0,label:"Tên tài khoản",value:a,onChange:t=>u(t.target.value),size:"small"})}),e("div",{className:"my-2 w-full md:w-[auto]",children:e(_,{name:"matkhau",fullWidth:!0,label:"Mật khẩu",value:r,onChange:t=>x(t.target.value),size:"small"})}),e("div",{className:"my-2 w-full md:w-[auto]",children:e(_,{name:"thutu",fullWidth:!0,label:"Thứ tự",value:g,onChange:t=>c(t.target.value),type:"number",size:"small"})}),e("div",{className:"my-2 w-full md:w-[auto] text-center",children:e(R,{onClick:H,variant:"contained",disabled:l,children:"Thêm mới"})})]}),h?e("div",{className:"mt-2",children:e(ge,{variant:"rectangular",width:"100%",height:"450px"})}):m(se,{children:[e(be,{userList:k,page:d.page,onClickOpenDialogDelete:V,onClickSettingRoleUser:K,userTemp:P}),e(ue,{page:d.page,totalPage:d.total,onChangePage:X})]})]}),e("div",{className:"lg:basis-1/3 bg-white",children:e(pe,{userTemp:P,onHandleEditUser:$})}),e(me,{open:w.status,onCloseDialogDelete:M,onConfirmDelete:G,onCancelDelete:J})]})}export{De as default};
