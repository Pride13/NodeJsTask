const { tokinizer } = require('../../helpers');

module.exports = async (req, res) => {
    try {
        const user = req.user;
        const tokens = tokinizer(user);

        res.json(tokens)
    } catch (e) {
        res.json('BAD').status(403)
    }
};
