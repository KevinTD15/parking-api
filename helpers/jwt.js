const jwt = require('jsonwebtoken');
const {jwt_config} = require('../config');

export const signed_jwt = (id) => {
    return jwt.sign({id:id}, jwt_config.JWT_SECRET, {
        expiresIn: jwt_config.JWT_EXPIRES
    }
)};

export const decoded_jwt = (cookies_jwt) => {return (jwt.verify)(cookies_jwt, jwt_config.JWT_SECRET)};
