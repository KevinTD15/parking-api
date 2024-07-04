const {mysql_db} = require('../database');

export const rol_admin = (req) => {
    return new Promise((resolve, reject) => {

        const user =  req.user;

        mysql_db.query('SELECT role_id FROM user_roles WHERE user_id_r = ?', [user.id], (error, result) => {
            if(error){
                reject(error);
                return;
            }
            for(let i =0; i < result.length; i++) {
                if(result[i].role_id === 1) {
                    resolve();
                    return;
                }
            }
            reject('You have no permision');
            return;
        });
    });
};