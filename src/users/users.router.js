//* /users [POST, GET]
//* /users:id [GET]


const router = require('express').Router()

const userServices = require('./users.services')

router.get('/users', userServices.getUsers)

router.post('/users', userServices.createNewUser)

router.get('/users/:id', userServices.getOneUser)

//?Export Default
module.exports = router