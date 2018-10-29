const mongoose = require('mongoose');
const URI = 'mongodb://localhost/portfolio';

mongoose.connect(URI,{ useNewUrlParser: true })
    .then(db => console.log("DB is connect"))
    .catch(error => console.error(error));

module.exports = mongoose;