var Usuario = require("../models/user");
const usuarioCtrl = {};

usuarioCtrl.login = async (req,res)=>{
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    var user = req.body.user;
    var pass = req.body.pass;
    var response = await Usuario.findOne({user,pass});
    if(!response) {
        //login incorrecto
        console.log('user incorrect');
        res.json({
            error : "Usuario/Password incorrecto"
        })
    }else{
        //make session and setear al usuario.
        console.log('Usuario logado correctamente');
        res.json(response);
    }
}

usuarioCtrl.getAllUser = async (req, res) => {
    try {
        const userData = await Usuario.find();
        res.json(userData);
    } catch (error) {
        console.error(error);
    }
    
}

usuarioCtrl.getDataUser = async (req, res) => {
    const user = await Usuario.findById(req.params.id);
    res.json(user);
}

usuarioCtrl.register = async (req, res) => {
    try {
        const user = new Usuario(req.body);
    await user.save();
    res.json({
        'status': 'Usuario Guardado',
    })
    } catch (error) {
        console.error(error);
        res.json({
            'error': error.message,
        })
    }    
}

usuarioCtrl.editUser = async (req, res) => {
    const usuario = {
        name: req.body.name,
        pass: req.body.pass,
        suname : req.body.surname,
    }

    await Usuario.findByIdAndUpdate(req.params.id, { $set: usuario }, {new:true});
    res.json({status : "Datos del usuario actualziados"})
}

usuarioCtrl.removeApp = async (req, res) => {
    const {id} = req.params.id;
    await Usuario.findByIdAndRemove(id);
    res.json({stauts:"App eliminada"})
}




module.exports = usuarioCtrl; 