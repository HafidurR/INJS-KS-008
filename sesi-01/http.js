const http = require('http'); //memanggil modul http bawaan dari nodejs
const port = 3000; //membuat port untuk alamat di web server kita

const server = http.createServer( (req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.write('Hello world from NodeJS');
    res.end();
})

server.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`)
})
/* Module http memiliki dua method atau fungsi utama yaitu createServer() untuk membuat server baru
dan listen() untuk mendefinisikan port dari web server yang dalam hal ini menggunakan port 3000.
Fungsi ini juga memiliki setidaknya dua argumen yaitu req (request) dan res (response). Argumen req untuk
menangkap request dari luar, sedangkan argumen res untuk merespon request ke luar. */