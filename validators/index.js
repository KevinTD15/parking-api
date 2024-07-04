const {validate} = require('./validator.js');
const {schemas} = require('../schemas');

const login = (req, res, next) => {
    const {email, password} = req.body;
    const login_validator = validate(schemas.login_schema);
    if(!login_validator({email, password}))
        return res.status(400).send(login_validator.errors[0].message); //res.render('login', {message: ajv.errorsText(validate.errors, {separator: "\n"})});
    next();
};

const register = (req, res, next) => {
    const {email, password, name} = req.body;
    const register_validator = validate(schemas.register_schema);
    if(!register_validator({email, password, name}))
        return res.status(400).send(register_validator.errors[0].message); //res.render('register', {message: ajv.errorsText(validate.errors, {separator: "\n"})});
    next();
};

const add_vehicle = (req, res, next) => {
    const {plate, model} = req.body;
    const add_vehicle_validator = validate(schemas.add_vehicle_schema);
    if(!add_vehicle_validator({plate, model}))
        return res.status(400).send(add_vehicle_validator.errors[0].message); //res.render('register', {message: ajv.errorsText(validate.errors, {separator: "\n"})});
    next();
};

export const validator = {
    login,
    register,
    add_vehicle
}