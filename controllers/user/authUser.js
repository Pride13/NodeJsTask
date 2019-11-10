const { provider } = require('../../dataBase');

module.exports = async (req, res) => {

    const email = req.email;

    res.json(`Congratulations, ${email}`);
};

