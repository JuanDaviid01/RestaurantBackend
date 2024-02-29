const express = require('express');
const restaurantController = require('../Controllers/restaurantController');
const router = express.Router();

router.post('/createRestaurant', restaurantController.createRestaurant);
router.get('/listRestaurant', restaurantController.listRestaurants);
router.put('/updateRestaurant', restaurantController.updateRestaurant);
router.put('/destroyRestaurant', restaurantController.disableRestaurant);

module.exports = router;