const connection = require('./dataBase.connection');
const express = require('express');
const app = express();
const port = process.env.PORT || 1337;

app.use(express.json());
app.use(express.urlencoded({extended: false}));

connection.sync()
.then(() =>{
    console.log('Base de datos sincronizada');
    app.listen(port, ()=>{
        console.log("the app is running on port" + port);
    });
    })
    .catch((error) => {
        console.error('error al sincronizar la base de datos', error);
    });