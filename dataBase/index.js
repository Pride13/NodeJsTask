const Sequelize = require('sequelize');
const fs = require('fs');
const {resolve} = require('path');

let {DB_NAME, DB_PASS, DB_USER} = require('./constants/constant');

module.exports = (() => {
    let instance;

    function initConnection() {
        const client = new Sequelize(DB_NAME, DB_PASS, DB_USER, {
            host: 'localhost',
            dialect: 'mysql'
        });
        // const client = new Sequelize('userreg', 'root', 'root', {
        //     host: 'localhost',
        //     dialect: 'mysql'
        // });

        const models = {};

        function getModels() {
            fs.readdir('./dataBase/models', (err, file) => {
                file.forEach(file => {
                    const [modelName] = file.split('.');

                    models[modelName] = client.import(resolve(`./dataBase/models/${modelName}`))
                })
            })
        }

        return {
            setModels: () => getModels(),
            getModel: modelName => models[modelName]
        }
    }

    return {
        getInstance: () => {
            if (!instance) {
                instance = initConnection();
            }

            return instance;
        }
    }
})();
