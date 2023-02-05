const role = (...roles) => {
 return (req, res,next) => {
  if(!req.user.isAdmin) {
   return next('You are not an admin')
  }
  next();
  }
 }

module.exports = {role}