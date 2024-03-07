require('./DataBase/sync.js');

const connection = require('./DataBase/connection');
const express = require('express');
const app = express();
const port = process.env.PORT || 1337;
const restaurantRouter = require('./Routers/restaurantRouter.js');
const productRouter = require('./Routers/productRouter.js');
const departmentRouter = require('./Routers/departmentRouter');
const restaurant = require('./Models/restaurant.js');
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

connection.sync({ force: false })
    .then(() => {
        console.log('Base de datos sincronizada');
        app.listen(port, () => {
            console.log("the app is running on port" + port);
        });
    })
    .catch((error) => {
        console.error('error al sincronizar la base de datos', error);
    });

    app.use('/api', restaurantRouter);
    app.use('/api', productRouter);
    app.use('/api', departmentRouter);