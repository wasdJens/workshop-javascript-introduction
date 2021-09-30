const express = require('express');
const app = express();
const port = 8080;

app.use(express.urlencoded({extended: true}));
app.use(express.json());

const beers = [];

app.listen(port, () => {
    console.log('Running...');
});
