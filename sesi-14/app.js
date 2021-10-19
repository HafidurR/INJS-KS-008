const express = require('express');
const app = express();
const port = 3000

app.get('/user', function (req, res) {
    res.status(200).json({
        name: 'john'
    });
});

// app.listen(port, () => {
//     console.log();
// })