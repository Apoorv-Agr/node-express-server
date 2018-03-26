var express = require('express');
var bodyParser = require('body-parser');
var app = express();

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({extended:false}));

var animals = [
  "puppy",
  "kitten",
  "ferocious bear",
  "lion",
  "tiger",
  "wolf"
];

var wrondReq = 'Please use proper URL';

var todoitems = [
  {
    id:"3221321kfsdfasdf",
    title:"clean kitchen"
  },
  {
    id:"2313213werqwe",
    title:"kill bill"
  },
  {
    id:"1417474sdfgsdfg",
    title:"asdfasdfasdf"
  }
]

app.get('/', function(req, res){
  res.send(wrondReq);
  //console.log('Please use proper URL');
});

app.get('/animals', function (req, res) {
  res.send(animals);
});

app.get('/todo', function (req, res) {
  res.send(todoitems);
});

app.listen(6060);
