const {userService} = require('../../service');

module.exports = async (req, res) => {
    try {
        const patchUserObject = req.body;
        const { user_id } = req.params;

        await userService.updateUserService({id: user_id}, patchUserObject);

        res.redirect(`/users/${user_id}`)
    } catch (e) {
        res.json(e.message);
    }
};
