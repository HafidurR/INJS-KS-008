const express = require('express')
const app = express()
const port = 5000
const { Admin } = require('./models')

app.use(express.json())
app.use(express.urlencoded({ extended: true}))

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

app.get('/admin/:id', async (req, res) => {
    const id = req.params.id;

    await Admin.findOne({
        where: { id }
    }).then(result => {
        if (result === null) {
            return res.status(404).json({
                status: 'error',
                message: 'data not found'
            })
        } else {
            return res.status(200).json({
                status: 'success',
                message: 'success get by id',
                data: result
            })
        }
    }).catch(error => {
        return res.status(400).json({
            status: 'error',
            message: error.message
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

app.put('/admin/:id', async (req, res) => {
    const id = req.params.id;
    const {
        name, gender, age, birthdate
    } = req.body;

    await Admin.update({
        name, gender, age, birthdate
    }).then()
})

app.delete('/admin/:id', async (req, res) => {
    const id = req.params.id

    await Admin.destroy({
        where: {id}
    }).then(result => {
        return res.status(200).json({
            status: 'success',
            message: 'success delete data'
        })
    }).catch(error => {
        return res.status(400).json({
            status: 'error',
            message: error.message
        })
    })
})

app.listen(port, () => {
    console.log(`listening on http://localhost:${port}`);
})