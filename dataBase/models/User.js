module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define('User', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            validate: {
                isEmail: {
                    msg: 'Wrong format email'
                },
                notNull: {
                    msg: 'Please enter your email'
                }
            }
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notNull: {
                    msg: 'Please enter your password'
                },
                len: {
                    args: [6, 40],
                    msg: 'Password must be from 6 to 40 symbols'
                }
            }
        },
        firstName: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notNull: {
                    msg: 'Please enter your name'
                },
                isAlpha: {
                    msg: 'Only allow letters'
                },
                len: {
                    args: [2, 40],
                    msg: 'Name must be from 2 to 40 symbols'
                }
            }
        },
        lastName: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    }, {
        tableName: 'user',
        timestamps: false
    });

    return User;
};
