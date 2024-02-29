const { Sequelize } = require('sequelize');
var dataBase = 'restaurantBD';
var userName = 'postgres';
var password = '2101';

const connection = new Sequelize(dataBase, userName, password, {
    host: 'localhost',
    dialect: 'postgres'
});

module.exports = connection;