const {services} = require('../services');

export const auth_middleware = async (req, res, next) => {
    try {
        const result = await services.auth(req);
        req.user = result;
        return next();
    } catch (error) {
        return res.status(400).send(error);
    }
};