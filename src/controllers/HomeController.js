const connection = require('../config/database')
const { getAllUsers } = require('../services/CRUDServices')
const getHomepage = async (req, res) => {
    let results = await getAllUsers();
    return res.render('HomePage.ejs', { listUsers: results });
}

const getABC = (req, res) => {
    res.send('ABC')
}

const testPage = (req, res) => {
    res.render('example.ejs');
}

const postCreateUser = async (req, res) => {
    // console.log('>>>>req.body', req.body)
    let { email, myname, city } = req.body;
    // connection.query(
    //     'INSERT INTO Users (email, name, city) VALUES (?,?,?)', [email, myname, city],
    //     function (err, results, fields) {
    //         console.log(results);
    //         res.send('create user succeed !')
    //     }
    // );

    let [results, fields] = await connection.query(
        'INSERT INTO Users (email, name, city) VALUES (?,?,?)', [email, myname, city],
    );
    res.send('create user succeed !')
}

const getCreateUserPage = (req, res) => {
    res.render('CreateUser.ejs');
}

module.exports = {
    getHomepage,
    getABC,
    testPage,
    postCreateUser,
    getCreateUserPage
}