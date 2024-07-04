const {mysql_db} = require('../database');
const {compare_hashed_pwd} = require('../helpers/hash_pwd.js');
const {signed_jwt} = require('../helpers/jwt.js');
const {cookie_options} = require('../config');

export const login = (req, res) => {
    const {email, password} = req.body;

    return new Promise((resolve, reject) => {

        mysql_db.query('SELECT * FROM user WHERE email = ?', [email], async (error, result) => {
            if(error){
                reject(error);
                return;
            }
            if(result.length === 0 || !(await compare_hashed_pwd(password, result[0].password))){
                reject('user doesnt exist');
                return;
            }

            const token = signed_jwt(result[0].id);
            res.cookie('jwt', token, cookie_options);

            resolve(`user ${result[0].name} logged`);
        });
    });    
};