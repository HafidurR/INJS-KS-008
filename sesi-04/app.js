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
    const data = ini.filter((b) => b.id_pengguna == req.params.id)[0];
    res.send(data)
})

app.post('/post', (req, res) => {
    const { id_pengguna, nama, email, alamat} = req.body
     
    ini.push({
        id_pengguna,
        nama,
        email,
        alamat
    })  
    // console.log(ini);
    fs.writeFile('./ini.json', JSON.stringify(ini, null, 2), () => {
        console.log('Success add data');
    })  
    res.status(201).json({
        status: 'success',
        message: 'Success add data'
    })
})


app.patch('/patch', (req, res) => {
    res.send('Ini halaman patch')
})

app.put('/put/:id', (req, res) => {
    let data = [ini[req.params.id - 1]]
    data = ({
        id_pengguna: req.body.id_pengguna === undefined ? data.id_pengguna : req.body.id_pengguna,
        nama: req.body.nama === undefined ? data.nama : req.body.nama,  
        email: req.body.email === undefined ? data.email : req.body.email,  
        alamat: req.body.alamat === undefined ? data.alamat : req.body.alamat  
    })
    //console.log(JSON.parse(data));
    fs.writeFile('./ini.json', JSON.stringify(data, null, 2), () => {
        console.log('Success edit data');
    })
    res.status(200).json({
        status: 'success',
        message: 'Success edit data'
    })
})

app.delete('/delete/:id', (req, res) => {
    if (!req.params.id || req.params.id > ini.length) {
        return res.status(404).json({
            status: 'error',
            message: 'Not found'
        })
    } 
    ini.splice(req.params.id, 1)
    fs.writeFile('./ini.json', JSON.stringify(ini, null, 2), () => {
        console.log('Success delete data');
    })
    res.status(200).json({
        status: 'success',
        message: 'Success delete data'
    })
})

app.listen(port, () => {
    console.log(`listening on http://localhost:${port}`);
})
