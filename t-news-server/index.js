const express = require('express');
const app = express();
const port = process.env.PORT || 1000;
const cors = require('cors')

app.use(cors());

const categories = require('./data/categories.json');

app.get('/', (req, res) => {
     res.send('News api running')
})

app.get('/news-categories', (req, res) => {
    res.send(categories)
})

app.listen(port, () => {
    console.log('T-News server running on port', port);
});