const express = require('express');

const cookieParser = require('cookie-parser');
const bodyParser   = require('body-parser');

const exphbs = require('express-handlebars');

const routes  = require('./routes/index.js');


var app = express();

app.set('views', __dirname+'/views');
app.engine('handlebars', exphbs({defaultLayout: 'layout'}));
app.set('view engine', 'handlebars');

app.use(express.static(__dirname +'/public'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(cookieParser());

app.use('/',routes);

app.listen(3000,()=>{
  console.log('Listening on 3000');
})
