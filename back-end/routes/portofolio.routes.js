const express = require("express");
const router = express.Router();

const userCtrl = require("../controllers/usuario.controller");
router.get('/api/',(req,res)=>{  
    res.redirect('http://localhost:3000'+'/')
});
router.post('/api/login',userCtrl.login);
router.get('/',userCtrl.getAllUser);
router.get('/:id',userCtrl.getDataUser);
router.post('/',userCtrl.register);
router.put('/:id',userCtrl.editUser);

module.exports = router;