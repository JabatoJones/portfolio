var Aplication = require("../models/app");
var Usuario = require("../models/user");
const uploadFolder = "./../uploads/";
const fs = require('fs');
var mongoose = require('mongoose');
const {Schema} = mongoose;
const UserSchema = new Schema({
    id:{type:String},
    name:{type:String},
    pass: {type:String, require:true ,match: [/^[a-zA-Z0-9]+$/, 'La contraseña no es valida']},
    surname: {type : String},
    email: {type: String,require:true,unique: true},
    aplications : {type:[]},
    aptitudes : {type : String},
    logros :{type : String},
    img : {type:String}
});

const usuarioCtrl = {};

usuarioCtrl.login = async (req,res)=>{
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    console.log(req.body);
    var userRes,errorRes= null;
    //El tercer argumento es el nombre de la colección que se utilizará en lugar de lo que se determinará en función del nombre del modelo.
    var userModel = mongoose.model('user', UserSchema, 'usuarios');
    var response = await userModel.findOne({'email':req.body.email, 'pass':req.body.pass});

    if(!response) {
        //login incorrecto
        console.log("Usuario/Password incorrecto",response);
        errorRes = 'Usuario/Password incorrecto';
        userRes = response;
    }else{
        //make session and setear al usuario.
        console.log('Usuario logado correctamente');
        userRes = new Usuario(response);
    }
    res.json({
        error : errorRes,
        user: userRes
    })
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
    await Usuario.findOneAndUpdate({'email':req.body.email}, { $set: req.body }, {new:true});
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
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    // Get the temporary location of the file
    var tmp_path = req.files.thumbnail.path;    
    // Set where the file should actually exists - in this case it is in the "images" directory.
    target_path = '/tmp/' + req.files.thumbnail.name;
    // Move the file from the temporary location to the intended location
    fs.rename(tmp_path, target_path, function(err) {
        if (err){
            throw err;
        }   
        else{
            fs.unlink(tmp_path, function () {
                if (err){
                    throw err;
                }  else{
                    console.log(req.file.filename);
                    res.send('File uploaded successfully! -> filename = ' + req.file.filename);
                }
            });
        }
        
    });
}

 
usuarioCtrl.uploadFile = (req, res) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    res.json(req.file.filename);
}

module.exports = usuarioCtrl; 