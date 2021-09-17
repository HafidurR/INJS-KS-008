const express = require('express')
const app = express()
const port = 3000
const data = require('./data.json')

app.use(express.static('public'))//supaya express bisa melihat folder public yang kita buat
app.set('view engine', 'ejs')

app.get('/home', (req, res) => {
    res.render('index.ejs', {
        nama: 'M. Hafidurrohman',
        semester: 7,
        universitas: 'Universitas Nurul Jadid',
        alamat: 'Probolinggo'
    })//merender index.ejs yg sdah dibuat sbelumnya
})

app.get('/', (req, res) => {
    res.send(req.query)
})

app.listen(port, () => {
    console.log(`Listening on http://localhost:${port}`);
})