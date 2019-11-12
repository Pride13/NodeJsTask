const router = require('express').Router();

const { user } = require('../../controllers');
const { users, checkAccessTokenMiddleware } = require('../../middleware');

router.post('/', users.checkUserValidation, user.registerUser);
router.patch('/:user_id',
    checkAccessTokenMiddleware,
    users.checkUpdateUserValidation,
    users.checkUserIdFromTokenMW,
    users.isUserUpdatePresent,
    user.updateUsers);

module.exports = router;
