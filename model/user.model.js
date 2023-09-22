const Sequelize = require("sequelize");

const db = require("../config/db");

const userSchema = {
    id: {
        type: Sequelize.DataTypes.STRING,
        primaryKey: true,
        autoincrement: true
    },
    username: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false
    },
    password: {
        type: Sequelize.DataTypes.STRING,
    },
    email: {
        type: Sequelize.DataTypes.STRING
    },
    age: {
        type: Sequelize.DataTypes.INTEGER,
        defaultValue: 21
    }
}

const options = {
    freezeTableName: true,
    timestamps: false
}


const User = db.define("user", userSchema, options);

// User.drop();

User.sync({ alert: true })
    .then(function () {
        console.log("User Table Sync Success (:");
    })
    .catch(function (err) {
        console.log("User Table Sync failed !!!");
    })

module.exports = User;