const {register} = require('./register.service.js');
const {login} = require('./login.service.js');
const {auth} = require('./auth.service.js');
const {logout} = require('./logout.service.js');
const {add_vehicle} = require('./add_vehicle.service.js');
const {show_vehicles} = require('./show_vehicles.service.js');
const {create_rol} = require('./create_rol.service.js');
const {rol_admin} = require('./rol_admin.service.js');
const {assign_rol} = require('./assign_rol.service.js');

export const services = {
    register,
    login,
    auth,
    logout,
    add_vehicle,
    show_vehicles,
    create_rol,
    rol_admin,
    assign_rol
};