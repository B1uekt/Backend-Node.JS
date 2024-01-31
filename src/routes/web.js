//khai báo route
const express = require('express');
const { getHomepage, getABC, testPage, postCreateUser, getCreateUserPage } = require('../controllers/HomeController');
const router = express.Router()

router.get('/', getHomepage);
router.get('/abc', getABC);
router.get('/test', testPage)
router.get('/create', getCreateUserPage)
router.post('/create-user', postCreateUser);

module.exports = router