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
    const all = { id_pengguna, nama, email, alamat} = req.body

    ini.push(all)  
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
    const {nama, email, alamat} = req.body
    const data = ini.findIndex((b) => b.id_pengguna == req.params.id);
    ini[data] = { ...ini[data], nama, email, alamat}
    //console.log(ini[data]);
    if (data < 0 ) {
        return res.status(404).json({
            status: 'error',
            message: 'Not found'
        })
    }
    fs.writeFile('./ini.json', JSON.stringify(ini, null, 2), () => {
        console.log('Success edit data');
    })
    res.status(200).json({
        status: 'success',
        message: 'Success edit data'
    })
})

app.delete('/delete/:id', (req, res) => {
    const data = ini.findIndex((b) => b.id_pengguna == req.params.id);
    //console.log(data);
    if (data < 0) {
        res.status(404).json({
            status: 'error',
            message: 'Not found'
        })
    }
    ini.splice(data,  1)
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
