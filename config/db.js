const Sequelize = require("sequelize");

module.exports = new Sequelize("demo", "postgres", "root", {
    dialect: "postgres"
    // define: {
    //     freezeTableName: true
    // }
})



// sequelize.drop({match:/_test$/});
// pizza_test
// user_testdb