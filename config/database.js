const { Sequelize } = require('sequelize'); 

const sequelize = new Sequelize('nodejstesting', 'thettun', '*****', {
    host: "172.24.0.3",
    dialect: "mysql"
});

module.exports = sequelize;