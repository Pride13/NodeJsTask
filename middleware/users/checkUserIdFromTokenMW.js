module.exports = async  (req, res, next) => {
    try {
        const { id } = req.user;
        const { user_id } = req.params;

        if (+user_id !== id) {
            throw new Error('This is not your user');
        }

        next()
    } catch (e) {
        res.status(400).json(e.message);
    }
};
