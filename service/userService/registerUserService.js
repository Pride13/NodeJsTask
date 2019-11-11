const dataBase = require('../../dataBase').getInstance();

module.exports = async (userToCreate) => {
    const UserModel = dataBase.getModel('User');

    const registerUser = await UserModel.create(userToCreate);

    return registerUser;
};
