const mongoose = require("mongoose");
const {Schema} = mongoose;

const UserSchema = new Schema({
    name:{type:String, require:true},
    pass: {type:String, require:true ,match: [/^[a-zA-Z0-9]+$/, 'La contraseña no es valida']},
    surname: {type : String, require:false}
});

module.exports = mongoose.model("Usuario",UserSchema);