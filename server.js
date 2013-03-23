var express = require('express');
var app = express();

function read_example(){
  var fileName = "example.json";
  var fs = require("fs");
  
  var data = fs.readFileSync(fileName, "utf8");

  return data;
};

function parse_file(){
  var json = JSON.parse(read_example());
  return json;
}

app.get('/example.json', function(req, res){
  var body = read_example();
  res.setHeader('Content-Type', 'text/plain');
  res.setHeader('Content-Length', body.length);
  res.end(body);
});

app.get('/tags.js', function(req, res) {
  keys = Object.keys(parse_file());
  console.log(keys);
  res.render('tags.ejs');
});

app.get('/', function(req, res) {
  res.render('index.jade');
});

app.listen(3000);
console.log('Listening on port 3000');
