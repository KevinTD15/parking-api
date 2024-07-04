const {Router} = require('express');
const {home_router} = require('./home.routes');
const {profile_router} = require('./profile.routes');
const {rol_admin_router} = require('./rol_admin.routes');

const router = Router();

router.use('/api-parking', home_router);
router.use('/api-parking/profile', profile_router);
router.use('/api-parking/rol-admin', rol_admin_router);

export {router}



