const { provider } = require('../../dataBase');

module.exports = async (req, res, next) => {
    try {
        const { email, password } = req.body;
        const query = `SELECT * FROM user WHERE email = '${email}' AND password = '${password}'`;

        const [isUserAuthPresent]= await provider.promise().query(query);

        if (!isUserAuthPresent.length) {
            throw new Error(`${email} doesnt exist or incorrectly entered data. Please check`)
        }

        req.email = email;

        next();
    } catch (e) {
        res.status(400).json(e.message)
    }
};
