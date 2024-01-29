//khai báo route
const express = require('express');

const router = express.Router()
router.get('/', (req, res) => {
    res.send('Hello World && Zeusttttt')
})

router.get('/test', (req, res) => {
    res.render('example.ejs')
});



module.exports = router