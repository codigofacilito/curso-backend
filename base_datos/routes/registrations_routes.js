const express = require('express');

let RegistrationsController = require('../controllers/registrations');
let router = express.Router();


router.get('/signup',RegistrationsController.new);

router.route('/users').post(RegistrationsController.create);

module.exports = router;
