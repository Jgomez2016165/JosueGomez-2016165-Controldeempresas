'use strict'

var mongoose = require('mongoose')
var app = require('./app')
var port = 3400;
var userInit = require('./controllers/user.controller');

mongoose.Promise = global.Promise;
mongoose.set('useFindAndModify', false);
mongoose.connect('mongodb://localhost:27017/ControlDeEmpresas165', {useNewUrlParser: true, useUnifiedTopology: true})
    .then(()=>{
            console.log('Conectado a la Base de datos')
            userInit.createInit();
            app.listen(port, ()=>{
                console.log('El servidor de express esta corriendo')
        })
    })
    .catch((err)=>{console.log('Error al conectarse a la Base de Datos, err')})