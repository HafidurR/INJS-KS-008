const http = require('http'); 
const port = 3000; 
const fs = require('fs')
// const axios = require('axios')

const server = http.createServer( (req, res) => {
    let data = fs.readFileSync('./index.html', { encoding: 'utf-8'}, (err) => {
        if (err) throw err
    })
    // let hasil = axios({
    //     method: 'get',
    //     url: '153.92.4.229/users/'
    // })
    res.writeHead(200, {
        'Content-Type':'text/html'
    })
    res.write(data);
    res.end();
})

server.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`)
})
