const router = require('express').Router();

const { user } = require('../../controllers');
const { users } = require('../../middleware');

router.post('/', users.checkUserValidation, user.registerUser);
router.patch('/:user_id', users.checkUpdateUserValidation, users.isUserUpdatePresent, user.updateUsers);

module.exports = router;
