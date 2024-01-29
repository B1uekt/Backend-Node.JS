
const getHomepage = (req, res) => {
    res.send('Hello');
}

const getABC = (req, res) => {
    res.send('ABC')
}

const testPage = (req, res) => {
    res.render('example.ejs');
}
module.exports = {
    getHomepage,
    getABC,
    testPage
}