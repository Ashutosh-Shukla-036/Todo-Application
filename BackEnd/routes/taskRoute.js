const express = require('express');
const { authMiddleware } = require('../middlewares/authMiddleware')
const { AddTodo, GetTodo, UpdateTodo, DeleteTodo } = require('../controller/taskController');
const route = express.Router();

route.post('/task',authMiddleware,AddTodo);
route.get('/task',authMiddleware,GetTodo);
route.put('/task/:taskId',authMiddleware,UpdateTodo);
route.delete('/task/:taskId',authMiddleware,DeleteTodo);

module.exports = route;