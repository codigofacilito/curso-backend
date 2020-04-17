const User = require('../models').User;

module.exports = {
  new: function(req,res){
    res.render('registrations/new');
  },
  create: function(req,res){
    let data = {
      email: req.body.email,
      password: req.body.password
    };

    User.create(data).then(result=>{
      res.json(result);
    }).catch(err=>{
      res.json(err);
    });
  }
};
