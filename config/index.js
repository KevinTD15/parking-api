const dotenv = require('dotenv');

dotenv.config({path:'./src/env/.env'});

export const server_config = {
    PORT: process.env.PORT
};

export const db_auth = {
    DB_HOST : process.env.DB_HOST,
    DB_USER : process.env.DB_USER,
    DB_PASSWORD : process.env.DB_PASSWORD,
    DB_NAME : process.env.DB_NAME
}

export const jwt_config = {
    JWT_SECRET : process.env.JWT_SECRET,
    JWT_EXPIRES : process.env.JWT_EXPIRES,
    JWT_COOKIE_EXPIRES : process.env.JWT_COOKIE_EXPIRES
};

export const cookie_options = {
    expires: new Date(Date.now() + process.env.JWT_COOKIE_EXPIRES * 24 * 60 * 60 * 100),
    httpOnly: true
};

