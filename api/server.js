let express = require('express')
let app = express()
let bodyParser = require('body-parser')
let port = 4300;

// import routes
const USERS_ROUTES = require('./routes/users')

// middleware
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
    next()
})

// register routes
app.use('/api/users', USERS_ROUTES)

// start server
app.listen(port, function() {
    console.log(`AES mock API started on port ${port}`)
})