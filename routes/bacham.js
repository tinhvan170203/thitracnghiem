const express = require('express');

const router = express.Router();

const bacham = require('../controllers/bacham');
const checkRole = require('../middlewares/checkRole');
const middlewareController = require('../middlewares/verifyToken');


router.get('/fetch', middlewareController.verifyToken, checkRole('xem quân hàm'), bacham.getBachamList)

router.post('/add', middlewareController.verifyToken,checkRole('thêm quân hàm'), bacham.addBacham)
router.delete('/delete/:id',middlewareController.verifyToken,checkRole('xóa quân hàm'),  bacham.deleteBacham)
router.put('/edit/:id',middlewareController.verifyToken,checkRole('sửa quân hàm'),  bacham.editBacham)


router.get('/hesoluong/fetch', middlewareController.verifyToken, checkRole('xem hệ số lương'), bacham.getHesoluongList)

router.post('/hesoluong/add', middlewareController.verifyToken,checkRole('thêm hệ số lương'), bacham.addHesoluong)
router.delete('/hesoluong/delete/:id',middlewareController.verifyToken,checkRole('xóa hệ số lương'),  bacham.deleteHesoluong)
router.put('/hesoluong/edit/:id',middlewareController.verifyToken,checkRole('sửa hệ số lương'),  bacham.editHesoluong)

module.exports = router