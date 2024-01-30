const connection = require('../config/database')

const getHomepage = (req, res) => {
    let users = [];
    connection.query(
        'SELECT * FROM Users u',
        function (err, results, fields) {
            users = results;
            console.log(">>>> result= ", results);

            //console.log(">>>> check user", users);
            res.send(JSON.stringify(users));
        }
    );

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