import{a as e}from"./axiosCommon-bb0a1a26.js";import{G as n}from"./index-062f957e.js";const u={getDanhsachDonvi(){const t="fetch/danhsachdonvi";return e.get(t)},getDataForAddCanbo(){const t="them-can-bo/fetched/phuthuoc";return n.get(t)},getDoiOfDonviChanged(t){const o="them-can-bo/fetch/getDoiOfDonviChanged";return n.get(o,{params:{donvi:t}})},getBacHams(){const t="fetch/bacham";return e.get(t)},getChucvus(){const t="fetch/chucvu";return e.get(t)},getHesoluongs(){const t="fetch/hesoluong";return e.get(t)},getAllDoi(){const t="fetch/all-doi";return e.get(t)},getAllMonthi(){const t="fetch/danhsachmonthi";return e.get(t)},getInfoCuocthi(t){const o=`/info/cuoc-thi/${t}`;return e.get(o)},loginTest(t){const o="/loginTest";return e.post(o,t)},checkedTest(t){const o=`/checkedTest/${t}`;return e.get(o)},submitTest(t,o){const r=`/${t}/submitTest`;return e.post(r,o)}};export{u as c};
