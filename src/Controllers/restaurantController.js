require('express');
const restaurant = require('../Models/restaurant');
async function createRestaurant(req, res) {
    try {
        await restaurant.create({
            restaurantName: req.body.restaurantName,
            restaurantNit: req.body.restaurantNit,
            restaurantAddress: req.body.restaurantAddress,
            restaurantPhone: req.body.restaurantPhone,
            cityId: req.body.cityId
        }).then(function (data) {
            return res.status(200).json({
                data: data
            });
        }).catch(error => {
            return res.status(400).json({
                error: error
            });

        })
    }//try
    catch (e) {
        console.log(e);
    }//catch
}//crear restaurants

async function listRestaurants(req, res) {
    try {
        await restaurant.findAll({
            atributes: [
                'restaurantName',
                'restaurantNit',
                'restaurantAdress',
                'restaurantPhone',
                'cityId'
            ],
            order: ['restaurantName']
        }).then(function (data) {
            return res.status(200).json({
                data: data
            });
        }).catch(error => {
            return res.status(400).json({
                error: error
            });
        })
    }//try
    catch (e) {
        console.log(e);
    }//catch
}//listar resturants

async function updateRestaurant(req, res) {
    try {
        await restaurant.update({
            restaurantName: req.body.restaurantName,
            restaurantNit: req.body.restaurantNit,
            restaurantAddress: req.body.restaurantAddress,
            restaurantPhone: req.body.restaurantPhone,
            cityId: req.body.cityId
        }, {
            where: {
                restaurantId: req.params.restaurantId
            }
        }).then(function (data) {
            return res.status(200).json({
                data: data
            });
        }).catch(error => {
            return res.status(400).json({
                error: error
            });
        })
    }//try
    catch (e) {
        console.log(e);
    }//catch
}// actualizar restaurants

async function disableRestaurant(req, res) {
    try {
        await restaurant.destroy({
            where: {
                restaurantId: req.params.restaurantId
            }
        }).then(function (data) {
            return res.status(200).json({
                data: data
            });
        }).catch(error => {
            return res.status(400).json({
                error: error
            });
        })
    }//try
    catch (e) {
        console.log(e);
    }//catch
}//desabilitar restaurants

async function enableRestaurant(req, res) {

    try {
        await restaurant.restore({
            where: {
                restaurantId: req.params.restaurantId
            }
        }).then(function (data) {
            return res.status(200).json({
                data: data
            });
        }).catch(error => {
            return res.status(400).json({
                error: error
            });
        })
    }//try
    catch (e) {
        console.log(e);
    }//catch
}// habilitar restaurants

module.exports = {
    createRestaurant,
    listRestaurants,
    updateRestaurant,
    disableRestaurant,
    enableRestaurant
}//esportar