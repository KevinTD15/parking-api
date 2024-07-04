const {mysql_db} = require('../database');
const {decoded_jwt} = require('../helpers/jwt.js');

export const add_vehicle = (req) => {
    const {plate, model} = req.body;

    return new Promise((resolve, reject) => {

        const user =  decoded_jwt(req.cookies.jwt);

        mysql_db.query('SELECT plate FROM vehicles WHERE plate = ?', [plate], (error, result) => {
            if(error){
                reject(error);
                return;
            }
            if(result.length > 0){
                reject(`Vehicle with plate \"${plate}\" is already registered`);
                return;
            }

            mysql_db.query('INSERT INTO vehicles SET ?', {user_id: user.id, plate: plate, model: model}, (error, results) => {
                if(error){
                    reject(error);
                    return;
                }
                resolve('vehicle registered');
            });
        });
    });
};