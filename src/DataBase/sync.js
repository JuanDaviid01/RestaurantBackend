const connection = require('./connection');

//Models
const restaurant = require('../Models/restaurant');
const product = require('../Models/product');
const department = require('../Models/department');
const city = require('../Models/city');

//JSON
const departamentjson = require('./jsonfiles/departmentjson');
const cityjson = require('./jsonfiles/cityjson');

async function sync(){
    //Foreign Key restaurant - product
    restaurant.hasMany(product,{
        foreignKey: 'restaurantId',
        onDelete: 'restrict',
        onUpdate:'cascade'
    });
    product.belongsTo(restaurant,{
        foreignKey: 'restaurantId'
    });

    //Foreign Key departament - city
    department.hasMany(city, {
        foreignKey: 'departmentId',
        onDelete: 'restrict',
        onUpdate:'cascade'
    });
    city.belongsTo(department,{
        foreignKey: 'departmentId'
    })

    //Foreign Key city - restaurant
    city.hasMany(restaurant,{
        foreignKey: 'cityId',
        onDelete: 'restrict',
        onUpdate:'cascade'
    });
    restaurant.belongsTo(city,{
        foreignKey: 'cityId'
    });

    await connection.sync({force: false})
    .then(() => { 
        console.log('Synchronized DataBase');
    })
    .catch((error) => { 
        console.error('Error syncing DataBase' + error);
    }); 

    //create json
    departamentjson.createDepartments();
    cityjson.createCities();
}

sync();