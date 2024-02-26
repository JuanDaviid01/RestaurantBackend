const {Model, datype, DataTypes} = require('sequelize');
const connection = require('../DataBase/connection');

class restaurant extends Model{}
restaurant.init({
    restarantId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    restarantNamed: {
        type: DataTypes.STRING,
        allowNull: false
    },
    restaurantsNit: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false
    },
    restaurantsAddress: {
        type: DataTypes.STRING,
        allowNull: false
    },
    restaurantsPhone: {
        type: DataTypes.STRING,
        allowNull: false
    },
    cityID: {
        type: DataTypes.STRING,
        allowNull: false
    },
},{
    sequelize: connection,
    tableName:'restaurants',
    paranoid: true,
    deleteAt: 'destroyTime'
});

module.exports = restaurant;