const express = require('express');

const router = express.Router();

const common = require('../controllers/common');
const checkRole = require('../middlewares/checkRole');
const middlewareController = require('../middlewares/verifyToken');


router.get('/fetch/danhsachdonvi', common.getDonviList)
// router.get('/fetch/bacham', common.getBacHam)
// router.get('/fetch/chucvu', common.getChucvus)
// router.get('/fetch/hesoluong', common.getHesoluongs)
// router.get('/fetch/all-doi', common.getAllDoi)

// router.get('/them-can-bo/fetched/phuthuoc', middlewareController.verifyToken, checkRole('thêm cán bộ'), common.getDataForAddCanbo)
// router.get('/them-can-bo/fetch/getDoiOfDonviChanged', middlewareController.verifyToken, checkRole('thêm cán bộ'), common.getDoiWhenDonviChange)

//thitracnghiem
router.get('/fetch/danhsachmonthi', common.getAllMonthi)
router.get('/info/cuoc-thi/:id', common.getInfoCuocthi)
router.get('/checkedTest', common.checkActiveTest)
router.post('/loginTest', common.loginTest)
router.get('/checkedTest/:id', common.checkedTest) // id laf lich sử thi hay bài thi
router.post('/:id/submitTest', common.submitTest)

module.exports = router