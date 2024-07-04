const {mysql_db} = require('../database');
const {decoded_jwt} = require('../helpers/jwt.js');

export const create_rol = (req) => {
    const {rol} = req.body;

    return new Promise((resolve, reject) => {
        mysql_db.query('SELECT rol FROM roles WHERE rol = ?', [rol], (error, result) => {
            if(error){
                reject(error);
                return;
            }
            if(result.length > 0){
                reject('Rol already in use');
                return;
            }

            mysql_db.query('INSERT INTO roles SET ?', {rol: rol}, (error, result) => {
                if(error){
                    reject(error);
                    return;
                }
                resolve('Role succesfully created');
            });

        });
    });
}