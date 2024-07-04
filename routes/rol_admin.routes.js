const {Router} = require('express');
const {controller} = require('../controllers');
const {middleware} = require('../middlewares');
const {validator} = require('../validators');

const rol_admin_router = Router();

rol_admin_router.post('/create', middleware.auth_middleware, middleware.rol_admin_middleware, controller.create_rol_controller);
rol_admin_router.post('/assign', middleware.auth_middleware, middleware.rol_admin_middleware, controller.assign_rol_controller);

export {rol_admin_router};