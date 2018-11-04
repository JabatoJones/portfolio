const express = require('express');
const app = express();
const morgan = require("morgan");
const {moongoose}  = require("./database")
var cors = require('cors');

app.options('*', cors()); // preflight OPTIONS; put before other routes
app.listen(80, function(){
  console.log('CORS-enabled web server listening on port 80');
});

//Settings
app.set('port', process.env.PORT || 3000);
//Middlewares
app.use(morgan('dev'));
app.use(express.json());


//Routes
app.use(require("./routes/portofolio.routes")); 
//Starting server

app.listen(app.get('port'), ()=> console.log("Corriendo en el puerto", app.get('port'))); 