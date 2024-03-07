const express = require('express');
const restaurantController = require('../Controllers/restaurantController');
const router = express.Router();

router.post('/createRestaurant', restaurantController.createRestaurant);
router.get('/listRestaurant', restaurantController.listRestaurants);
router.put('/updateRestaurant/:restaurantId', restaurantController.updateRestaurant);
router.put('/disableRestaurant/:restaurantId', restaurantController.disableRestaurant);
router.put('/enableRestaurant/:restaurantId', restaurantController.enableRestaurant);

module.exports = router;