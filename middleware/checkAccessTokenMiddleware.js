const { tokenVereficator } = require('../helpers');

module.exports = (req, res, next) => {
    try {
        const token = req.get('Authorization');

        if (!token) {
            next(new Error('NO TOKEN'))
        }

        const userFromToken = tokenVereficator(token);

        req.user = userFromToken;

        next();
    } catch (e) {
        res.status(403).json(e.message)
    }
};
