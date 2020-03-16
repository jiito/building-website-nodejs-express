const express = require('express');
const path = require('path');

const routes = require('./routes');

const app = express();

// define port
const port = 3000;

// set up EJS template framework
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, './views'));

//  static middleware
app.use(express.static(path.join(__dirname, './static')));

app.use('/', routes());

app.get('/speakers', (request, response) => {
  response.sendFile(path.join(__dirname, './static/speakers.html'));
});

app.listen(port, () => {
  console.log(`Express server listening on port ${port}`);
});
