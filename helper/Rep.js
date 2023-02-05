const User = require('.././model/user/User')


const rep = async (req,res,next) => {
  const { userId } = req.body;
  const user = await User.findById(userId);
  const loginUserId = req?.user?._id;
  const isLiked = user?.isReped;
  const alreadyDisliked = user?.reps?.find(
    userId => userId?.toString() === loginUserId?.toString()
  );
  const h = alreadyDisliked ? 0 : 1
  const p = premium ? 1 || 2 || 3 || 4 || 5 || 6 : 1
  const u = ultra ? 1 || 2 || 3 : 1
  if (alreadyDisliked) {
    const user = await User.findByIdAndUpdate(
      userId,
      {
        $pull: { reps: loginUserId },
        isReped: false,
      },
      { new: true }
    );
    res.json(user);
  }
  if (isLiked) {
    const user = await User.findByIdAndUpdate(
      userId,
      {
        $pull: { reps: loginUserId },
        isLiked: false,
      },
      { new: true }
    );
    res.json(user);
  } else {
    //add to likes
    const user = await User.findByIdAndUpdate(
      userId,
      {
        $push: { reps: loginUserId },
        $inc: {rep: h},
        isLiked: true,
      },
      { new: true }
    );
  }
}

module.exports = {rep}