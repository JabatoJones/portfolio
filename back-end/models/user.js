const mongoose = require("mongoose");
var modelAplication = require("../models/app");
const {Schema} = mongoose;
var apli = new Schema({ aplication: [] });

const UserSchema = new Schema({
    name:{type:String},
    pass: {type:String, require:true ,match: [/^[a-zA-Z0-9]+$/, 'La contraseña no es valida']},
    surname: {type : String},
    email: {type: String,require:true,unique: true},
    aplications : {type:apli},
    aptitudes : {type : String},
    logros :{type : String},
    img : {type:String}

});

module.exports = mongoose.model("Usuario",UserSchema);