const express = require('express')
const app = express()
const port = 3000
const stylus = require('stylus')

app.get('/some-css', (req, res) => {
    const css = stylus(`
        body
            color: blue 
    `)
    res.send(css)
})

app.listen(port, () => {
    console.log(`listening on port: ${port}`);
})