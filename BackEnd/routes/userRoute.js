const express = require('express');
const { SignUp, Login } = require('../controller/authController');
const route = express.Router();


route.post('/signup',SignUp);
route.post('/login',Login);

module.exports = route;