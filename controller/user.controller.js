const Sequelize = require("sequelize");
const { Op } = Sequelize;

const User = require("../model/user.model");
const Student = require("../model/student.model");



async function createUser(req, res) {

    // 1 . build
    // const user = await User.build({
    //     id: 1,
    //     username: "rajesh",
    //     password: "12345678",
    //     email: "rajesh@gmail.com"
    // }).save();


    // 2 . create
    // const user = await User.create({
    //     id:2,
    //     username: "siva",
    //     password: "12345678",
    //     email: "siva@gmail.com"
    // });


    //3. bulkCreate
    const bulkUser = await User.bulkCreate([
        {
            id: 3,
            username: "ajay",
            password: "12345678",
            email: "ajay@gmail.com",
            age: 10
        },
        {
            id: 4,
            username: "balaji",
            password: "12345678",
            email: "balaji@gmail.com",
            age: 15
        },
        {
            id: 5,
            username: "chandru",
            password: "12345678",
            email: "chandru@gmail.com",
            age: 18
        },
        {
            id: 6,
            username: "dhina",
            password: "12345678",
            email: "dhina@gmail.com",
            age: 21
        },
        {
            id: 7,
            username: "elan",
            password: "12345678",
            email: "elan@gmail.com",
            age: 23
        }
    ]);
    return res.status(200).json({ Message: "Successfully User Created" });
}




async function readUser(req, res) {


    // const user = await User.findAll();     // --> all document 

    // const user = await User.findAll({ attributes: ["id", "username", "age"] });    // --> only display id username & age in all document
    // const user = await User.findAll({ attributes: [["id", "UniqueId"], ["username", "Name"], ["age", "Age"]] });    // --> rename id as UniqueId ,username as Name , age as Age

    // const user = await User.findAll({ attributes: [[Sequelize.fn('SUM', Sequelize.col('age')), "Total (add all age in table):"]] });    // --> add all age in table
    // const user = await User.findAll({ attributes: [[Sequelize.fn("AVG", Sequelize.col("age")), "Avarage Age: "]] });    // -->  average age in table

    // const user = await User.findAll({ attributes: { exclude: ["email", "createdAt", "updatedAt"] } });     // --> remove these fields

    // const user = await User.findAll({ where: { username: "chandru" } });    // --> find username is chandru all document
    // const user = await User.findAll({ where: { age: 21 } });     //--> find age is 23 all document
    // const user = await User.findAll({ attributes: ["username"], where: { age: 23 } });     //--> age is 23 and dispaly name only
    // const user = await User.findAll({ where: { age: 21, username: "dhina" } });     // --> age 21 and name dhina

    // const user = await User.findAll({ limit: 2 });    // --> limit only first 2 document

    // const user = await User.findAll({ order: [["age", "ASC"]] });
    // const user = await User.findAll({ order: [["age", "DESC"]] });

    // const user = await User.findAll({
    //     attributes: ['username', [Sequelize.fn("SUM", Sequelize.col("age")), 'agesum:']],   // --> add the same name age
    //     group: "username"
    // });


    // import Op

    // const user = await User.findAll({ where: { [Op.and]: { age: 21, username: "dhina" } } });  //--> username dhina and age 21
    // const user = await User.findAll({ where: { [Op.or]: { age: 21, username: "dhina" } } });  //--> username dhina or age 21

    // const user = await User.findAll({ where: { age: { [Op.lt]: 21 } } });  //--> age less than 21
    // const user = await User.findAll({ where: { age: { [Op.lte]: 21 } } }); //--> age less than or equal to 21

    // const user = await User.findAll({ where: { age: { [Op.gt]: 21 } } }); //--> age greater than 21    // const user = await User.findAll({ where: { age: { [Op.gte]: 21 } } }); //--> age greater than or equal to 21

    // const user = await User.findAll({ where: { age: { [Op.or]: { [Op.lt]: 21, [Op.eq]: 23 } } } });  //--> age less than 21 or 23
    // const user = await User.findAll({ where: Sequelize.where(Sequelize.fn('char_length', Sequelize.col('username')), 4) });  // --> name length 4 char

    // const user = await User.findOne(); // find first element
    // const user = await User.findByPk("5");  // find by primary key
    // const user = await User.findOrCreate({ where: { id: "8", username: "ragul", password: "12345", email: "ragul@gmail.com" } });  // --> user find or create 
    // const user = await User.findAndCountAll(); //--> over all count and row data in tables


    // const user = await User.findAndCountAll({
    //     where: {
    //         username: 'ragul'
    //     }
    // });

    //  const user = await User.min('age');
    //  const user = await User.sum('age');
    const user = await User.sum('age', { where: { age: 21 } });

    return res.status(200).json(user);
}




async function updateUser(req, res) {
    const updateUser = await User.update({ username: "srija" }, { where: { id: 8 } });
    // const updateUser = await User.update({ username: "srija" }, { where: { age:{[Op.gt]:1}  } });
    return res.status(200).json(updateUser);
}




async function deleteUser(req, res) {
    // const deleteUser = await User.destroy({ where: { username: "siva" } }); //--> delete name contain siva
    // const deleteUser = await User.destroy({ where: { age: { [Op.gte]: 21 } } }); //--> delete age greater than 21
    const deleteUser = await User.destroy({ truncate: true });  //--> delete all table
    return res.status(200).json(deleteUser);
}







// Another Example

async function studentCreate(req, res) {

    const student = await Student.bulkCreate([
        { student_id: 1, name: "ajay", favourite_class: "10", school_year: "1" },
        { student_id: 2, name: "bala", favourite_class: "12", school_year: "2" },
        { student_id: 3, name: "bala", favourite_class: "10", school_year: "1" }],
        { validate: true });
    return res.status(200).json(student);
}

async function studentRead(req, res) {

    // const student = await Student.findAll({
    //     attributes: ['name'],
    //     where: {
    //         [Op.or]: { name: "bala" }
    //     }
    // })


    const student = await Student.findAll({
        attributes: ["student_id", Sequelize.fn("COUNT", Sequelize.col('student_id')), 'student_id'],
        group: 'student_id'
    })
    return res.status(200).json(student);
}



module.exports = {
    createUser, readUser, updateUser, deleteUser,
    studentCreate, studentRead
}
