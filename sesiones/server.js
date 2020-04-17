const express = require('express');
const session = require('express-session');


const app = express();

app.use(session({
  secret: ['demo','123yguasbdhjasbdy'],
  resave: false,
  saveUninitialized: false
}));

app.get('/',function(req,res){
  req.session.visits = req.session.visits || 0;

	req.session.visits = req.session.visits + 1;

	res.send(`${req.session.visits} visita(s)`);
});

app.listen(3000);
