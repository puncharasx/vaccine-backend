const Sequelize  = require('sequelize')

const sequelize = require('../until/database')

const List = sequelize.define('list', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    id_card: {
        type: Sequelize.STRING(13),
        allowNull: false,
        unique: true
    },
    tell: {
        type: Sequelize.STRING(10),
        allowNull: false,
    },
    birth_day: {
        type: Sequelize.DATEONLY,
        allowNull: false
    },
    status: {
        type: Sequelize.STRING,
        allowNull: false,
        defaultValue: 'check'
        
    },
    book_day: {
        type: Sequelize.DATEONLY,
        allowNull: false
    },
    createdAt: {
        type: Sequelize.DATEONLY   
    },
    updatedAt: {
        type: Sequelize.DATEONLY   
    }
})

module.exports = List