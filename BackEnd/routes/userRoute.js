const express = require('express');
const { SignUp, Login } = require('../controller/authController');
const route = express.Router();


route.post('/auth/signup',SignUp);
route.post('/auth/login',Login);

module.exports = route;