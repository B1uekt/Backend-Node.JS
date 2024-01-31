const connection = require('../config/database')
const { getAllUsers, getUserbyId, updateUserbyId, createUser } = require('../services/CRUDServices')
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

const EditUserPage = async (req, res) => {
    const userId = req.params.id;
    let user = await getUserbyId(userId);
    res.render('EditUser.ejs', { userEdit: user }); //lấy biến user gán cho userEdit để trả về cho file view 
}

const postCreateUser = async (req, res) => {

    let { email, myname, city } = req.body;

    await createUser(email, myname, city);
    res.redirect('/');
}

const getCreateUserPage = (req, res) => {
    res.render('CreateUser.ejs');
}

const postUpdateUser = async (req, res) => {

    let { email, myname, city, userId } = req.body;
    await updateUserbyId(email, myname, city, userId);

    // res.send('update user succeed !')
    res.redirect('/');
}

module.exports = {
    getHomepage,
    getABC,
    testPage,
    postCreateUser,
    getCreateUserPage,
    EditUserPage,
    postUpdateUser
}