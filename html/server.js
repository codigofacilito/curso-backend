const express = require('express');

const app = express();

app.set('view engine','ejs');

app.use('/public',express.static('assets',{
  etag: false,
  maxAge: '5h'
})); // middleware

app.get('/',function(req,res){
  res.render('index');
});

app.listen(3000);


// If-None-Match: W/"48-1643caf68ee"
