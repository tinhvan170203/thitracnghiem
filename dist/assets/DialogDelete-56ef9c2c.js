import{j as e,d as i,B as t,r as s,S as d}from"./index-a3e82b42.js";import{a as p,b as m}from"./DeleteOutline-95df8af9.js";import{D as f,d as g}from"./Cancel-62c222e1.js";import{D as u,a as h}from"./DialogContent-66228f14.js";import{D as x}from"./DialogContentText-e4ee471d.js";const D=s.forwardRef(function(o,a){return e(d,{direction:"up",ref:a,...o})});function v({open:n,onCloseDialogDelete:o,onConfirmDelete:a,onCancelDelete:l}){return e("div",{children:i(u,{disableEscapeKeyDown:!0,onClose:(c,r)=>{r!=="backdropClick"&&o(c,r)},open:n,TransitionComponent:D,keepMounted:!0,"aria-describedby":"alert-dialog-slide-description",children:[i(f,{style:{display:"flex",borderBottom:"1px solid #ccc",margin:"0 12px"},children:[e(p,{style:{color:"red",fontSize:"32px"}}),e("span",{children:"Bạn có chắc chắn muốn xóa mục này hay không?"})]}),i(h,{children:[e("img",{className:"p-4 mx-auto",src:"https://www.iconexperience.com/_img/v_collection_png/256x256/shadow/garbage_delete.png",alt:"icon-trash"}),e(x,{id:"alert-dialog-slide-description"})]}),i("div",{className:"flex justify-evenly pb-4",children:[i(t,{variant:"contained",color:"success",onClick:a,children:[e(m,{})," Đồng ý"]}),i(t,{variant:"contained",color:"error",onClick:l,children:[e(g,{})," Cancel"]})]})]})})}export{v as D};