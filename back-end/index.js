const express = require('express');
const app = express();
const morgan = require("morgan");
const {moongoose}  = require("./database")

/*const http = require('http');
const path = require('path');
*/
//Settings
app.set('port', process.env.PORT || 3000);
//Middlewares
app.use(morgan('dev'));
app.use(express.json());


//Routes
app.use(require("./routes/portofolio.routes")); 
//Starting server

app.listen(app.get('port'), ()=> console.log("Corriendo en el puerto", app.get('port'))); 