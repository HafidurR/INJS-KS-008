const express = require('express')
const app = express()
const port = 5000

app.use(express.static("public"))


// app.get('/gambar', (req, res) => {
//     res.sendFile('./public/gambar.jpg', {root : __dirname})
// })

app.get('/pertama', (req, res) => {
    res.sendFile('./public/index.html', {root : __dirname})
})

app.get('/kedua', (req, res) => {
    res.sendFile('./public/trial.html', {root : __dirname})
})

app.get('/ketiga', (req, res) => {
    res.sendFile('./public/trial2.html', {root : __dirname})
})

app.listen(port, () => {
    console.log(`Listening on port : ${port}`);
})
