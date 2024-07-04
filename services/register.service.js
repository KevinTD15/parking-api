const {mysql_db} = require('../database');
const {hashed_pwd} = require('../helpers/hash_pwd.js');

export const register = (req) => {
    const {name, email, password} = req.body;

    return new Promise((resolve, reject) => {

        mysql_db.query('SELECT email FROM user WHERE email = ?', [email], async (error, result) => {
            if(error){
                reject(error);
                return;
            }
            if(result.length > 0){
                reject('Email is already in use');
                return;
            }

            let pwd = await hashed_pwd(password);

            mysql_db.query('INSERT INTO user SET ?', {name: name, email: email, password: pwd}, (error, results) => {
                if(error){
                    reject(error);
                    return;
                }
                resolve('user registered');
            });
        });
    });
};