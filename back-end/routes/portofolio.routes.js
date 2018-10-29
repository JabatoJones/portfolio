const express = require("express");
const router = express.Router();

const userCtrl = require("../controllers/usuario.controller");
router.get('/',userCtrl.getAllUser);
router.get('/:id',userCtrl.getDataUser);
router.post('/',userCtrl.createUser);
router.put('/:id',userCtrl.editUser);

module.exports = router;