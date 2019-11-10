const { userValidators } = require('../../validator');

module.exports = (req, res, next) => {
    try {
        const user = req.body;

        userValidators.newUserVal(user);

        next()
    } catch (e) {
        res.json(400).json(e.message)
    }
};
