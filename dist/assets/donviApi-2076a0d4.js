import{G as e}from"./index-062f957e.js";const r={getDonvi(t){const n="api/donvi/fetch";return e.get(n,{params:t})},getDonviQuanly(t){const n="api/donviquanly/fetch";return e.get(n,{params:t})},addDonvi(t){const n="api/donvi/add";return e.post(n,t)},editDonvi(t){const n=`api/donvi/edit/${t.id_edit}`;return e.put(n,t)},deleteDonvi(t,n){const i=`api/donvi/delete/${t}`;return e.delete(i,{params:n})}};export{r as d};
