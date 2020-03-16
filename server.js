const express = require("express");
const path = require("path");

const app = express();

// define port
const port = 3000;

//middleware 
app.use(express.static(path.join(__dirname, './static')));

//serve a static file
app.get('/', (request, response) => {
    response.sendFile(path.join(__dirname, './static/index.html'));
});
app.get('/speakers', (request, response) => {
    response.sendFile(path.join(__dirname, './static/speakers.html'));
});


app.listen(port, () => {
    console.log(`Express server listening on port ${port}`);
});