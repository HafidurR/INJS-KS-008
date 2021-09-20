const express = require('express')
const app = express()
const port = 3000
const data = require('./data.json')
const fs = require('fs')

app.use(express.urlencoded( {extended: true} )) //agar express mau menerima inputan 
app.use(express.static('public'))//supaya express bisa melihat folder public yang kita buat
app.set('view engine', 'ejs')

app.get('/', (req, res) => {
  
  if(req.query.nama === undefined) {
      res.render('coba.ejs', { data: data })
  } else {
      let input = req.query.nama
      let cari = data.find((e) => {
        return (input.toLowerCase() === e.nama.toLowerCase())
      })
      res.render('coba.ejs', { data: [cari] })
  }//merender index.ejs yg sdah dibuat sbelumnya
})

app.get('/:id', (req, res) => {
    let find = data.find(item => {
      return item.id_pengguna === Number(req.params.id)
    })
    res.send(find) 
})

app.post('/create', (req, res) => {
    //console.log(req.body)
    let ex = {
      id_pengguna: data.length,
      nama: req.body.nama,
      email: req.body.email,
      alamat: req.body.alamat,
    }
    data.push(ex)
    fs.writeFileSync('./data.json', JSON.stringify(data, null, 2), 'utf-8')
    res.redirect('/') // GET
})

app.listen(port, () => {
    console.log(`Listening on http://localhost:${port}`);
})