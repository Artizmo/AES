let express = require('express')
let app = express()
let bodyParser = require('body-parser')
let chalk = require('chalk')
let path = require('path')
let bcrypt = require('bcrypt')
let jwt = require('jsonwebtoken')
let port = 4300;

// consts
const saltRounds = 10

// mock data
let users = require('./data/users.json')
let pwdHash = require('./data/password_hash.json')

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

app.use('/api/login', (req, res) => {
    // get username and password
    let username = req.body.username
    let password = req.body.password
    // find username in mock data
    users
        .forEach(user => {
            if (user.username == username) {
                // compare password hashes
                pwdHash
                    .forEach(pHash => {
                        if (pHash.id == user.id) {
                            bcrypt
                                .compare(password, pHash.hash)
                                .then(cres => {
                                    if (cres) {                                         
                                        // get user id and user roles
                                        // sign token with user data
                                        // put token in secure cookie
                                        // return success status and cookie in header
                                        res
                                            .status(200)
                                            .cookie('aes-token', 1234, { httpOnly: true, path: '/' })
                                            .send()
                                    } else {
                                        res
                                            .status(401).send()
                                    }
                                })
                        }
                    })
            }
        })    
})

// login page
app.get('/login.html', (req, res) => {
    res.sendFile(path.join(`${__dirname}/login.html`))
})

// start server
app.listen(port, function() {
    console.log(chalk.hex('#FFFF00')(`AES mock API started on port ${port}`))
})