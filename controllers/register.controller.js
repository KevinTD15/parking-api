const {services} = require('../services');

export const register_controller = async (req, res) => {
    try {
        const result = await services.register(req);
        return res.send(result);
    } catch (error) {
        return res.status(400).send(error);
    }
};