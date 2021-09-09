const express = require('express')
const app = express()
const port = 3000
const fs = require('fs')
const ini = require('./ini.json')

app.use(express.json())
app.use(express.urlencoded({extended : true}))

app.get('/', (req, res) => {
    res.send(ini)
})

app.get('/:id', (req, res) => {
    res.send(ini[req.params.id - 1])
})

app.post('/post', (req, res) => {
    const { id_pengguna, nama, email, alamat} = req.body
     
    ini.push({
        id_pengguna,
        nama,
        email,
        alamat
    })  
    fs.writeFile('./ini.json', JSON.stringify(ini, null, 2), () => {
        console.log('Success add data');
    })  
    res.send({
        statusCode: '201',
        status: 'success',
        message: 'success add data'
    })
})


app.patch('/patch', (req, res) => {
    res.send('Ini halaman patch')
})

app.put('/put', (req, res) => {
    res.send('Ini adalah halaman PUT')
})

app.delete('/delete/:id', (req, res) => {
    if (ini === id) {
        
    }
    fs.readFile('./ini.json', JSON.stringify(ini, null, 2), () => {
        console.log('Success delete data');
    })
    res.send({
        statusCode: '200',
        status: 'success',
        message: 'delete'
    })
})

app.listen(port, () => {
    console.log(`listening on http://localhost${port}`);
})