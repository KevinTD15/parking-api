const {services} = require('../services');

export const rol_admin_middleware = async (req, res, next) => {
    try {
        const result = await services.rol_admin(req);
        //res.send(result);
        return next();
    } catch (error) {
        return res.status(400).send(error);
    }
};