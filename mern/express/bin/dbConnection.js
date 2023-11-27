const config = require('../config.json');
const { Sequelize } = require("sequelize");

const database = new Sequelize(config.db)

database
    .authenticate()
    .then(() => {
        console.log('Database connected')
    }).catch((err) => {
        console.log('Error connecting to database', err)
    });

module.exports = database;

