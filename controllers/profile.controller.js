const {services} = require('../services');

export const add_vehicle_controller = async (req, res) => {
    try {
        const result = await services.add_vehicle(req);
        return res.send(result);
    } catch (error) {
        return res.status(400).send(error);
    }
};

export const show_vehicles_controller = async (req, res) => {
    try {
        const result = await services.show_vehicles(req);
        return res.send(result);
    } catch (error) {
        return res.status(400).send(error);
    }
};

export const logout_controller = (req, res) => {
    try {
        const result = services.logout(res);
        return res.send(result);
    } catch (error) {
        return res.status(400).send(error);
    }
};