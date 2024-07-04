const {auth_middleware} = require('./auth.middleware.js');
const {rol_admin_middleware} = require('./rol_admin.middleware.js');

export const middleware = {
    auth_middleware,
    rol_admin_middleware
};