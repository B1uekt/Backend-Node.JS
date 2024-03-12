const connection = require('../config/database')
const db = require('../models/index')

const getAllUsers = async () => {
    try {
        let users = await db.User.findAll();
        return users;
    } catch (error) {
        throw error;
    }
}

const createUser = async (email, firstname, lastname, address, gender, role) => {
    try {
        let newGender = (gender === 'Men') ? true : false;
        await db.User.create({
            email: email,
            firstName: firstname,
            lastName: lastname,
            address: address,
            gender: newGender,
            roleid: role
        });
    } catch (error) {
        console.error('Error:', error);
    }
}

const getUserbyId = async (userId) => {
    try {
        let results = await db.User.findOne({
            where: {
                id: userId
            }
        });
        return results
    }
    catch (error) {
        console.error('Error:', error);
    }
}

const updateUserbyId = async (email, firstname, lastname, address, gender, role, userId) => {
    try {
        let newGender = (gender === 'Men') ? true : false;
        await db.User.update({
            email: email,
            firstName: firstname,
            lastName: lastname,
            address: address,
            gender: newGender,
            roleid: role
        },
            {
                where: {
                    id: userId
                }
            });
    }
    catch (error) {
        console.error('Error:', error)
    }
}



const deleteUser = async (userId) => {
    await db.User.destroy({
        where: {
            id: userId
        }
    });
}

module.exports = {
    getAllUsers,
    getUserbyId,
    updateUserbyId,
    createUser,
    deleteUser
}