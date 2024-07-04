const bcrypt = require('bcryptjs');

export const hashed_pwd = (password) => { return bcrypt.hash(password, 8) };

export const compare_hashed_pwd = (p1, p2) => {return bcrypt.compare(p1, p2)};