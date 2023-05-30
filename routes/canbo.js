const express = require('express');

const router = express.Router();

const canbo = require('../controllers/canbo');
const checkRole = require('../middlewares/checkRole');
const middlewareController = require('../middlewares/verifyToken');


router.get('/fetch', middlewareController.verifyToken, checkRole('xem cán bộ'), canbo.getCanboOfDonviQuanLy)
router.post('/add', middlewareController.verifyToken,checkRole('thêm cán bộ'), canbo.addCanbo)
router.put('/edit/:id',middlewareController.verifyToken,checkRole('sửa cán bộ'),  canbo.updatedCanbo)
router.put('/edit/bac-ham/:id',middlewareController.verifyToken,checkRole('sửa cán bộ'),  canbo.changeBacHam)
router.put('/edit/chuc-vu/:id',middlewareController.verifyToken,checkRole('sửa cán bộ'),  canbo.changeChucvu)
router.put('/edit/he-so-luong/:id',middlewareController.verifyToken,checkRole('sửa cán bộ'),  canbo.changeHesoluong)
router.put('/move/:id',middlewareController.verifyToken,checkRole('sửa cán bộ'),  canbo.moveCanbo)
router.delete('/delete/:id',middlewareController.verifyToken,checkRole('xóa cán bộ'),  canbo.deleteCanbo)


router.get('/fetch/advanced/:id', middlewareController.verifyToken, checkRole('xem cán bộ'), canbo.fetchedThongtinCanboAdvanced)
router.put('/edit/chuc-vu-nang-cao/:id/:id1',middlewareController.verifyToken,checkRole('sửa biến động chức vụ'),  canbo.changeChucvuAdvanced)
router.delete('/delete/chuc-vu-nang-cao/:id/:id1',middlewareController.verifyToken,checkRole('xóa biến động chức vụ'),  canbo.deleteChucvuAdvanced)
router.put('/edit/bac-ham-nang-cao/:id/:id1',middlewareController.verifyToken,checkRole('sửa biến động bậc hàm'),  canbo.changeBachamAdvanced)
router.delete('/delete/bac-ham-nang-cao/:id/:id1',middlewareController.verifyToken,checkRole('xóa biến động bậc hàm'),  canbo.deleteBachamAdvanced)
router.put('/edit/he-so-luong-nang-cao/:id/:id1',middlewareController.verifyToken,checkRole('sửa biến động hệ số lương'),  canbo.changeHesoluongAdvanced)
router.delete('/delete/he-so-luong-nang-cao/:id/:id1',middlewareController.verifyToken,checkRole('xóa biến động hệ số lương'),  canbo.deleteHesoluongAdvanced)
router.put('/edit/don-vi-nang-cao/:id/:id1',middlewareController.verifyToken,checkRole('sửa biến động đơn vị'),  canbo.changeDonviAdvanced)
router.delete('/delete/don-vi-nang-cao/:id/:id1',middlewareController.verifyToken,checkRole('xóa biến động đơn vị'),  canbo.deleteDonviAdvanced)
router.put('/edit/doi-nang-cao/:id/:id1',middlewareController.verifyToken,checkRole('sửa biến động đội'),  canbo.changeDoiAdvanced)
router.delete('/delete/doi-nang-cao/:id/:id1',middlewareController.verifyToken,checkRole('xóa biến động đội'),  canbo.deleteDoiAdvanced)

module.exports = router