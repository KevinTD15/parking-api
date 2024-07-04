const {register_controller} = require('./register.controller.js');
const {login_controller} = require('./login.controller.js');
const {create_rol_controller, assign_rol_controller} = require('./rol_admin.controller.js');
const {logout_controller, add_vehicle_controller, show_vehicles_controller} = require('./profile.controller.js');

export const controller = {
    register_controller,
    login_controller,
    logout_controller,
    add_vehicle_controller,
    show_vehicles_controller,
    create_rol_controller,
    assign_rol_controller
};