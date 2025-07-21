// @ts-check

var express = require('express');
var cors = require('cors');
var uploadMiddleware = require('./middlewares/upload.middleware.js');
var uploadController = require('./controllers/file.controller.js');
require('dotenv').config()

var app = express();

app.use(cors());
app.use('/public', express.static(process.cwd() + '/public'));

app.get('/', function (req, res) {
  res.sendFile(process.cwd() + '/views/index.html');
});


app.post('/api/fileanalyse', uploadMiddleware, uploadController);


const port = process.env.PORT || 3000;
app.listen(port, function () {
  console.log('Your app is listening on port ' + port)
});
