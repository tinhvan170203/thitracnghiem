const express = require('express');

const router = express.Router();

const common = require('../controllers/common');



router.get('/fetch/danhsachdonvi', common.getDonviList)

//thitracnghiem
router.get('/fetch/danhsachmonthi', common.getAllMonthi)
router.get('/info/cuoc-thi/:id', common.getInfoCuocthi)
router.get('/checkedTest', common.checkActiveTest)
router.post('/loginTest', common.loginTest)
router.get('/checkedTest/:id', common.checkedTest) // id laf lich sử thi hay bài thi
router.post('/:id/submitTest', common.submitTest)

module.exports = router