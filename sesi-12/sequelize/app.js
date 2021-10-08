const express = require('express')
const app = express()
const port = 5000
const { Admin } = require('./models')

app.get('/admin', (req, res) => {
    Admin.findAll()
    .then(result => {
        return res.status(200).json({
            status: 'success',
            message: 'success get data',
            data: result
        })
    }).catch(err => {
        return res.status(400).json({
            status: 'error',
            message: err.message
        })
    })
})

app.post('/admin',  async (req, res) => {
    const {
        name, gender, age, birthdate
    } = req.body

    await Admin.create({
        name,
        gender,
        age,
        birthdate
    }).then(result => {
        return res.status(201).json({
            status: 'success',
            message: 'success add data',
            data: result
        })
    }).catch(err => {
        return res.status(400).json({
            status: 'error',
            message: err.message
        })
    })
})

app.listen(port, () => {
    console.log(`listening on http://localhost:${port}`);
})