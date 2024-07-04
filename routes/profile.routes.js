const {Router} = require('express');
const {controller} = require('../controllers');
const {middleware} = require('../middlewares');
const {validator} = require('../validators');

const profile_router = Router();

profile_router.get('/', middleware.auth_middleware);

profile_router.post('/add-vehicle', middleware.auth_middleware, validator.add_vehicle, controller.add_vehicle_controller);
profile_router.get('/show-vehicles', middleware.auth_middleware, controller.show_vehicles_controller);

profile_router.get('/logout', middleware.auth_middleware, controller.logout_controller);

export {profile_router};