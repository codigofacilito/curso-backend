const User = require('../models').User;

module.exports = function(req,res,next){

  if(!req.session.userId) return next();

  User.findById(req.session.userId,{
    include: [
      {
        association: 'tasks'
      }
    ]
  }).then(user=>{
    if(user){
      req.user = user;
      next();
    }
  })
}
