const express = require("express");
const router = express.Router();

const userCtrl = require("../controllers/usuario.controller");

router.get('/',userCtrl.getAllUser);
router.post('/api/login',userCtrl.login);
router.get('/api/register/:id',userCtrl.getDataUser);
router.post('/api/register',userCtrl.register);
router.put('/:id',userCtrl.editUser);
router.delete('/:id',userCtrl.removeApp)

module.exports = router;