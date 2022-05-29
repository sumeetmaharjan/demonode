const express = require('express');
const path = require('path');

const app = express();
const port = 4200;

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/views/landing.html'));
})


app.listen(port);
console.log('Server started' + port);