const { Model, DataTypes } = require('sequelize');
const connection = require('../DataBase/connection');

class product extends Model { }

product.init({
    productID: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    productName: {
        type: DataTypes.STRING,
        allowNull: false
    },
    productDescription: {
        type: DataTypes.STRING,
        allowNull: false
    },
    productPrice: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    restaurantID: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
}, {
    sequelize: connection,
    modelName: 'product',
    paranoid: true,
    deletedAt: 'destroyTime'
})

module.exports = product;