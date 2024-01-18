const express = require('express')
const path = require('path')
require('dotenv').config()

//console.log(process.env)
const app = express()
const port = process.env.PORT || 8888;
const hostname = process.env.HOST_NAME;
//config template engine
// app.set('views', './src/views/')
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs')

app.get('/', (req, res) => {
    res.send('Hello World && Zeusttttt')
})

app.get('/test', (req, res) => {
    res.render('example.ejs')
})

app.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});