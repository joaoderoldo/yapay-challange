var express = require('express');
var fs = require('fs');
var multer  = require('multer');
var upload = multer({ dest: '/tmp/'});
var app = express();
var jsonServer = require('json-server');
var cors = require('cors')

app.use(cors());

app.post('/upload', upload.single('file'), function(req, res) {
  var fileName = req.file.originalname.replace(/\s+/g, '-').split('_').join('-').toLowerCase();
  var file = 'uploads' + '/' + fileName;

  fs.rename(req.file.path, file.toLowerCase(), function(err) {
    if (err) {
      res.send(500);
    } else {
      res.json({
        filename: fileName
      });
    }
  });
});

app.get('/image/:name', function (req, res) {
  var image = req.params.name;

  res.sendFile(__dirname + `/uploads/${image}`);
});

app.use('/', jsonServer.router('db.json'));

app.listen(9004);