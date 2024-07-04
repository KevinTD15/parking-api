const {services} = require('../services');

export const login_controller = async (req, res) => {
    try {
        const result = await services.login(req, res);
        return res.json(result);
    } catch (error) {
        return res.status(400).send(error);
    }
};