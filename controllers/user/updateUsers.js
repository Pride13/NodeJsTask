const { provider } = require('../../dataBase');

module.exports = async (req, res) => {
    try {
        const {id, email, password, firstName, lastName } = req.body;
        const query = `UPDATE user SET email = ?, password = ?, firstName = ?, lastName = ? WHERE id = ${id}`;

        await provider.promise().query(query, [email, password, firstName, lastName]);

        res.render('updateUser')
    } catch (e) {
        res.json(e.message);
    }
};
