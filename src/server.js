require('dotenv').config()
const express = require('express')
const configviewEngine = require('./config/viewEngine')
const webRoutes = require('./routes/web')

const app = express()
const port = process.env.PORT || 8888;
const hostname = process.env.HOST_NAME;

//config req.body 
app.use(express.json()); // Used to parse JSON bodies
app.use(express.urlencoded()); //Parse URL-encoded bodies

//config template engine
configviewEngine(app);
app.use('/', webRoutes)





app.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});

