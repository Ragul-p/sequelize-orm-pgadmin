const Sequelize = require("sequelize");
const db = require("../config/db");

const studentSchema = {
    student_id: {
        type: Sequelize.DataTypes.INTEGER,
        autoincrement: true
    },
    name: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false
    },
    favourite_class: {
        type: Sequelize.DataTypes.STRING(255),
    },
    school_year: {
        type: Sequelize.DataTypes.INTEGER
    }
}

const option = {
    freezeTableName: true,
    timestamps: false
}

const Student = db.define("student", studentSchema, option);

Student.sync().then(function () { console.log("Student sync success (:"); })
    .catch(function () { console.log("Student sync failed !!!"); })

module.exports = Student;