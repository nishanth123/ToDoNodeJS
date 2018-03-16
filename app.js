var express = require('express');
var app = express();

var mongoose = require('mongoose');
var config = require('./config');

var port = process.env.PORT || 3000;

console.log('Here', port)
app.use('/assets', express.static(__dirname + '/public'));
app.get('/', (req, res) => res.send('Hello World!'))

app.set('view engine', 'ejs');

mongoose.connect(config.getDbConnectionString());  
app.listen(port, () => console.log('Example app listening on port 3000!'));