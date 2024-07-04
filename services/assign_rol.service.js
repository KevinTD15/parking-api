const {mysql_db} = require('../database');

export const assign_rol = (req) => {
    const {rol, user_id} = req.body;

    return new Promise((resolve, reject) => {
        mysql_db.query('SELECT * FROM user_roles WHERE role_id = ? AND user_id_r = ?', [rol, user_id], (error, result) => {
            if(error){
                reject(error);
                return;
            }
            if(result.length > 0){
                reject('User already has those permisions');
                return;
            }

            mysql_db.query('INSERT INTO user_roles SET ?', {role_id: rol, user_id_r: user_id}, (error, result) => {
                if(error){
                    reject(error);
                    return;
                }
                resolve('Permisions assigned');
            });

        });
    });
}