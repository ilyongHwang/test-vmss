const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Hello World !! Hello Friends!!\n');
});

app.listen(3000, () => {
    console.log('Server On!\n');
});
