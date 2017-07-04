

const robots = require('./data.js');

const express = require('express');
const path = require('path');
var mustacheExpress = require('mustache-express');

var data = require('./data.js');

const app = express();
app.engine('mustache', mustacheExpress());

// app.set('views', './views')
app.set('view engine', 'mustache')
app.set('views', __dirname + '/views');
app.use(express.static('./public'));

app.get('/robots/', function (req, res) {
  res.render('index', robots);
})


app.listen(3000, function () {
  console.log('Successfully started express application!');
})
