const {Sequilze} = require('sequelize');
var dataBase = 'restaurantBD';
var userName = 'postgres';
var password = '12345678';

const connection = new Sequilze(dataBase, userName, password, {
    host: 'localhost',
    dialect: 'postgres'
});

module.exports = connection;