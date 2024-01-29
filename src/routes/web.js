//khai báo route
const express = require('express');
const { getHomepage, getABC, testPage } = require('../controllers/HomeController');
const router = express.Router()

router.get('/', getHomepage);
router.get('/abc', getABC);
router.get('/test', testPage)



module.exports = router