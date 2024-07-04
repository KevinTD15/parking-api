const {services} = require('../services');

export const create_rol_controller = async (req, res) => {
    try {
        const result = await services.create_rol(req);
        return res.send(result);
    } catch (error) {
        return res.status(400).send(error);
    }
};

export const assign_rol_controller = async (req, res) => {
    try {
        const result = await services.assign_rol(req);
        return res.send(result);
    } catch (error) {
        return res.status(400).send(error);
    }
};