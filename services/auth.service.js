const {mysql_db} = require('../database');
const {decoded_jwt} = require('../helpers/jwt.js');

export const auth = (req) => {
    return new Promise((resolve, reject) => {

        const decoded =  decoded_jwt(req.cookies.jwt);

        mysql_db.query('SELECT * FROM user WHERE id = ?', [decoded.id], (error, result) => {
            if(error){
                reject(error);
                return;
            }
            if(result)
                resolve(result[0]);
        });
    });
};