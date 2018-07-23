let express = require('express')
let jsonfile = require('jsonfile')
let router = express.Router()
let users = require('../data/users.json')

router.get('/', (req, res) => {
    return res.json(users)
})
router.get('/:id', (req, res) => {
    users
        .find(user => {
            if (user.id == req.params.id) {
                 return res.json(user);
            }
    })
    res.end()
})

module.exports = router