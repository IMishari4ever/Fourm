const User = require('.././model/user/User')

const reward = async (req,res,next) => {
  const {id} = req.user
  if(req.user.postCount >= 103){
   const updateUser = await User.findByIdAndUpdate(id, {
    role: "VIP",
    })
    next();
  }
}

module.exports = {reward}