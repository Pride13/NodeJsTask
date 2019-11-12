const router = require('express').Router();

const { auth } = require('../../controllers');
const { users } = require('../../middleware');

router.post('/',
    users.isUserAuthPresent,
    users.getUserAuthMiddleware,
    auth.authUserController,
);

module.exports = router;
