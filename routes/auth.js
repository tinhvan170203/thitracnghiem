const express = require('express');

const router = express.Router();

const auth = require('../controllers/auth');
const checkRole = require('../middlewares/checkRole');
const middlewareController = require('../middlewares/verifyToken');

router.post('/login', auth.login )
router.post('/change-pass', auth.changePassword )
router.get('/logout', middlewareController.verifyToken, auth.logout)
router.get('/users/fetch', middlewareController.verifyToken, checkRole('xem tài khoản'), auth.getUserList)
router.get('/requestRefreshToken', auth.requestRefreshToken)
router.post('/users/add', middlewareController.verifyToken,checkRole('thêm tài khoản'), auth.addUser)
router.delete('/users/delete/:id',middlewareController.verifyToken,checkRole('xóa tài khoản'),  auth.deleteUser)
router.put('/users/edit/:id',middlewareController.verifyToken,checkRole('sửa tài khoản'),  auth.editUser)
router.put('/users/edit-phanquyendonvi/:id',middlewareController.verifyToken,checkRole('sửa phân quyền quản lý môn thi'),  auth.editPhanquyendonvi)

module.exports = router