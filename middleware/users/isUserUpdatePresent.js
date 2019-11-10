const { provider } = require('../../dataBase');

module.exports = async (req, res, next) => {
    try {
        const {id} = req.body;
        const query =  `select * from user where id = ${id}`;

        const [isUserPresent] = await provider.promise().query(query);

        if (!isUserPresent.length) {
            throw new Error(`User with email ${id} is not present`)
        }

        next()
    } catch (e) {
        res.status(400).json(e.message)
    }
};
