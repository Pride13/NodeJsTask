const router = require('express').Router();

const { user } = require('../../controllers');
const { users } = require('../../middleware');

router.post('/', users.isUserAuthPresent, user.authUser);

module.exports = router;
