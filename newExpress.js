var express = require('express');
var cors = require('cors');
var bodyParser = require('body-parser');
var app = express();

// app.use(bodyParser.json());
//
// app.use(bodyParser.urlencoded({extended:false}));


app.use(cors());

var corsOptions = {
  origin: 'http://localhost:8080',
  optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}

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
];

var ingredients = [
  {
    "id":1,
    "text":"ham"
  },
  {
    "id":2,
    "text":"cheese"
  },
  {
    "id":3,
    "text":"potatoes"
  },
];

app.get('/ingredients', cors(corsOptions), function(req,resp,next){
  resp.send(ingredients);
});

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
