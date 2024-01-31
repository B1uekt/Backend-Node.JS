const connection = require('../config/database')

const getAllUsers = async () => {
    let [results, fields] = await connection.query('select * from Users ');
    return results;
}

const getUserbyId = async (userId) => {
    let [results, fields] = await connection.query(
        'SELECT * FROM Users WHERE id = ?', [userId]
    );

    let user = results.length && results.length > 0 ? results[0] : {};
    return user;
}
const updateUserbyId = async (email, myname, city, userId) => {
    let [results, fields] = await connection.query(
        'UPDATE Users set email = ?, name = ?, city = ? WHERE id = ?', [email, myname, city, userId],
    );
}

const createUser = async (email, myname, city) => {
    let [results, fields] = await connection.query(
        'INSERT INTO Users (email, name, city) VALUES (?,?,?)', [email, myname, city],
    );
}

module.exports = {
    getAllUsers,
    getUserbyId,
    updateUserbyId,
    createUser
}