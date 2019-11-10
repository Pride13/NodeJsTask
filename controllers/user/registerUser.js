const { provider } = require('../../dataBase');

module.exports = async (req, res) => {
    try {
        const { email, password, firstName, lastName} = req.body;
        const query = `insert into user(email, password, firstName, lastName) values (?, ?, ?, ?)`;

        await provider.promise().query(query, [email, password, firstName, lastName]);

        res.render('logination')
    } catch (e) {
        res.json(e.message);
    }
};
