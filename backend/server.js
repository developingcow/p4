const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());

let clickCount = 0;

app.post('/click', (req, res) => {
    clickCount++;
    res.send(clickCount.toString());
});

app.get('/count', (req, res) => {
    res.send(clickCount.toString());
});

app.listen(3000, () => console.log('Server running on http://localhost:3000'));
