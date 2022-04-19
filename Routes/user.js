const express = require('express');
const userController = require('../Controllers/user');
const fileuploader = require('../MiddleWare/UploadFiles');
const route = express.Router();

route.get('/', userController.GetAll);

route.get('/:id', userController.FindById);

route.patch('/:id', userController.updateuser);

route.delete('/:id', userController.Delete);

route.post('/add', fileuploader.single('image'), userController.Ajouter);

route.post('/login', userController.login);

route.post('/register', userController.Register);

module.exports = route