var Aplication = require("../models/app");
var Usuario = require("../models/user");

const usuarioCtrl = {};

usuarioCtrl.login = async (req,res)=>{
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    console.log(req.body);
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
        console.log(response);
        var user = new Usuario(response);
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
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    try {
    const user = new Usuario(req.body);
    await user.save();
    res.json({
        'status': 'Usuario Guardado',
        'user' : user
    })
    } catch (error) {
        console.error(error);
        res.json({
            'error': error.message,
        })
    }    
}

usuarioCtrl.editUser = async (req, res) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    await Usuario.findOneAndUpdate({'id':req.body.id}, { $set: req.body }, {new:true});
    res.json({
        'status': 'Usuario Actualizado',
        'user' : req.body
    })
};

usuarioCtrl.removeApp = async (req, res) => {
    const {id} = req.params.id;
    await Usuario.findOneAndRemove({'id':id});
    res.json({stauts:"App eliminada"})
}
usuarioCtrl.uploadImage = async (req, res) => {
    // Get the temporary location of the file
    var tmp_path = req.files.thumbnail.path;    
    // Set where the file should actually exists - in this case it is in the "images" directory.
    target_path = '/tmp/' + req.files.thumbnail.name;
    // Move the file from the temporary location to the intended location
    fs.rename(tmp_path, target_path, function(err) {
        if (err)
            throw err;
        // Delete the temporary file, so that the explicitly set temporary upload dir does not get filled with unwanted files.
        fs.unlink(tmp_path, function() {
            if (err)
                throw err;
            //
        });
    });
}




module.exports = usuarioCtrl; 