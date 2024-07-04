const {mysql_db} = require('../database');
const {decoded_jwt} = require('../helpers/jwt.js');

export const show_vehicles = (req) => {
    return new Promise((resolve, reject) => {

        const user =  decoded_jwt(req.cookies.jwt);

        mysql_db.query('SELECT plate, model FROM vehicles WHERE user_id = ?', [user.id], async (error, result) => {
            if(error){
                reject(error);
                return;
            }
            if(result.length > 0){
                resolve(result);
                return;
            }
            reject('You have no vehicles registered');
        });
    });
};