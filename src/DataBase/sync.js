const connection = require('./connection');
//models
const restaurant = require('../Models/restaurant');
const product = require('../Models/product');
const department = require('../Models/department');
const city = require('../Models/city');
//JSON
const departmentjson= require('./jsonFiles/departmentjson');
const cityjson= require('./jsonFiles/cityjson');
function sync() {
    //llave foranea restaurante . prpducto
    restaurant.hasMany(product, {
        foreignKey: 'restarantId',
        onDelete: 'restrict',
        onUpdate: 'cascade'
    });
    product.belongsTo(restaurant, {
        foreignKey: 'restarantId',
    });
    //llave foranea restaurante . departamento
    department.hasMany(city, {
        foreignKey: 'departmentId',
        onDelete: 'restrict',
        onUpdate: 'cascade'
    });
    city.belongsTo(department, {
        foreignKey: 'departmentId',
    });
    //llave foranea restaurante. ciudad
    city.hasMany(restaurant, {
        foreignKey: 'cityId',
        onDelete:'restrict',
        onUpdate: 'cascade'
    });
    restaurant.belongsTo(city, {
        foreignKey: 'cityId',
    });

    departmentjson.createDepartments();
    cityjson.createCities();
}

sync();