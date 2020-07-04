module.exports = function(req, res, next){
  let admins = ['Ada', 'Greta', 'Vim', 'Tim'];

  if(!req.query.user || !admins.includes(req.query.user)){
    res.send('No tenes los privilegios');
  }

  next();
}