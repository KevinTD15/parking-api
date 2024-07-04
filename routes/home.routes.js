const {Router} = require('express');
const {controller} = require('../controllers');
const {validator} = require('../validators');

const home_router = Router();

home_router.post('/register', validator.register, controller.register_controller);
home_router.post('/login', validator.login, controller.login_controller);


export {home_router};