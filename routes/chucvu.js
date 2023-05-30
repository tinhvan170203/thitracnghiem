const express = require('express');

const router = express.Router();

const chucvu = require('../controllers/chucvu');
const checkRole = require('../middlewares/checkRole');
const middlewareController = require('../middlewares/verifyToken');


router.get('/fetch', middlewareController.verifyToken, checkRole('xem chức vụ'), chucvu.getChucvuList)

router.post('/add', middlewareController.verifyToken,checkRole('thêm chức vụ'), chucvu.addChucvu)
router.delete('/delete/:id',middlewareController.verifyToken,checkRole('xóa chức vụ'),  chucvu.deleteChucvu)
router.put('/edit/:id',middlewareController.verifyToken,checkRole('sửa chức vụ'),  chucvu.editChucvu)

module.exports = router