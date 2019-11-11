const dataBase = require('../../dataBase').getInstance();

module.exports = async (email, password) => {
    const UserModel = dataBase.getModel('User');

    const userAuth = await UserModel.findOne({
        where: {
            email,
            password
        },
        attributes: ['id', 'email', 'firstName']
    });

    if (!userAuth) {
        throw new Error(`${email} doesnt exist or incorrectly entered data. Please check`);
    }

    return userAuth;

};
