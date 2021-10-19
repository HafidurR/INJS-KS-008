const express = require('express')
const app = express()
const port = 3000
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const data = require('./data.json')
const fs = require('fs')
const verifyToken = require('./middlewares/verifyToken')

app.use(express.json());
app.use(express.urlencoded({ extended: true }))

app.get('/', (req, res) => {
    res.send('Ini adalah Home')
})

app.post('/register', async (req, res) => {
    const id = data.length + 1;
    const {  nama, age, username, password} = req.body
    //const hash = await bcrypt.hash(password, 10);

    await data.push({id, nama, age, username, password})
    fs.writeFile('./data.json', JSON.stringify(data, null, 2), () => {
        console.log('Success register');
    })  
    res.status(201).json({
        status: 'success',
        message: 'Success register'
    })
})

app.post('/login', (req, res) => {
    let cari = data.find(result => {
        //console.log(data);
        return result.username === req.body.username && result.password === req.body.password
    })
    
    if (cari) {
        let token = jwt.sign(cari, 'Rahasia Banget');
        res.status(200).json({
            token: token,
            message: 'Success login',
        })
    } else {
        res.status(401).json({
            message: "Username and Password is not valid !"
        });
    }
})


app.get('/admin', verifyToken, (req, res) => {
    res.send(data)
})

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
})