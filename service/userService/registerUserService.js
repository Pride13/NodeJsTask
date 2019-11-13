const dataBase = require('../../dataBase').getInstance();

module.exports = userToCreate => {
    const UserModel = dataBase.getModel('User');

    return UserModel.create(userToCreate);
};
