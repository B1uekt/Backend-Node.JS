
const { getAllUsers, getUserbyId, updateUserbyId, createUser, deleteUser } = require('../services/CRUDServices')

const getHomepage = async (req, res) => {
    let data = await getAllUsers();
    return res.render('HomePage.ejs', { listUsers: data });
}

const getCreateUserPage = (req, res) => {
    res.render('CreateUser.ejs');
}

const postCreateUser = async (req, res) => {

    let { email, firstname, lastname, address, gender, role } = req.body;

    await createUser(email, firstname, lastname, address, gender, role);
    res.redirect('/');
}

const EditUserPage = async (req, res) => {
    const userId = req.params.id;
    let user = await getUserbyId(userId);
    res.render('EditUser.ejs', { userEdit: user }); //lấy biến user gán cho userEdit để trả về cho file view 
}

const testPage = (req, res) => {
    res.render('example.ejs');
}


const postUpdateUser = async (req, res) => {

    let { email, firstname, lastname, address, gender, role, userId } = req.body;
    await updateUserbyId(email, firstname, lastname, address, gender, role, userId);

    // res.send('update user succeed !')
    res.redirect('/');
}


const DeleteUser = async (req, res) => {
    const userId = req.params.id;
    await deleteUser(userId)
    res.redirect('/');
}
module.exports = {
    getHomepage,
    testPage,
    postCreateUser,
    getCreateUserPage,
    EditUserPage,
    postUpdateUser,
    DeleteUser
}