const mongoose = require("mongoose");
const {Schema} = mongoose;

const AplicationSchema = new Schema({
    name:{type:String, require:true},
    desc: {type:String, require:true},
    languajes: {type : String},
    url : {type: String},
    img : {type : String}
});

module.exports = mongoose.model("Aplication",AplicationSchema);