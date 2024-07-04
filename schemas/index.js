const {login_schema} = require('./login.schema.js');
const {register_schema} = require('./register.schema.js');
const {add_vehicle_schema} = require('./add_vehicle.schema.js');

export const schemas = {
    login_schema,
    register_schema,
    add_vehicle_schema
};