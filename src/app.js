const express = require('express');

const app = express()

const userRouter = require('./users/users.router')

const port= 9000;

app.use(express.json())

app.get('/', (req, res) => {
    res.status(200).json({message:'Server OK!'})
})

app.use('/', userRouter)

app.listen(port, () => {
    console.log('Server started at port 9000');
})