const User = require('.././model/user/User')
const Category = require('.././model/Category/Category')


const Premium = (...categories) => {
 return (req, res, next) => {
  if(!req.user.Premium) {
   return next("You can not access to this category")
  }
  next();
 }
}