//khai báo route
const express = require('express');
const { getHomepage, getABC, testPage, postCreateUser, getCreateUserPage, EditUserPage, postUpdateUser } = require('../controllers/HomeController');
const router = express.Router()

router.get('/', getHomepage);
router.get('/abc', getABC);
router.get('/test', testPage)
router.get('/create', getCreateUserPage)
router.post('/create-user', postCreateUser);
router.get('/edit/:id', EditUserPage);
router.post('/update-user', postUpdateUser)
module.exports = router