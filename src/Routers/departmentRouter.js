const express = require('express');
const productController = require('../Controllers/departmentController');
const router = express.Router();

router.get('/listDepartments',departmentController.listDepartments);

module.exports = router;