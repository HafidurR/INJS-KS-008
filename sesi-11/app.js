const express = require('express')
const app = express()
const port = 5000
const Barang = require('./model/Barang')

app.use(express.json());
app.use(express.urlencoded({ extended: true}))


app.get('/barang', Barang.read);
app.get('/barang/:id', Barang.read_id);

app.post('/barang', Barang.create);

app.put('/barang/:id', Barang.update);

app.delete('/barang/:id', Barang.delete);

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
})