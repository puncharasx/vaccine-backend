const { DB_HOST,DB_USER,DB_PASS, DB_NAME } = require('../config/index')
const Sequelize = require('sequelize')

const sequelize = new Sequelize(DB_NAME.trim(),DB_USER.trim(),DB_PASS.trim(), {
    host : DB_HOST.trim(),
    dialect : 'mysql',
    timezone : "+07:00"
})

module.exports = sequelize
