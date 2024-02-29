const connection = require('./connection');

//models
const restaurant = require('../Models/restaurant');
const product = require('../Models/product');
function sync() {
    restaurant.hasMany(product, {
        foreignKey: 'restarantId',
        onDelete: 'restrict',
        onUpdate: 'cascade'
    });
    product.belongsTo(restaurant, {
        foreignKey: 'restarantId',
    });
}

sync();