const express = require('express');
const userController = require('../Controllers/user')
const route = express.Router();

route.get('/', userController.GetAll);

route.get('/:id', userController.FindById);

route.delete('/:id', userController.Delete);

route.post('/add', userController.Ajouter);


module.exports = route