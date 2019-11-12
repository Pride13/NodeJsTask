const dataBase = require('../../dataBase').getInstance();

const userAttributes = ['id', 'email'];

module.exports = async objectToSearch => {
    const UserModel = dataBase.getModel('User');

    const user = await UserModel.findOne({
        where: objectToSearch,
        attributes: userAttributes
    });

    return user && user.dataValues
};
