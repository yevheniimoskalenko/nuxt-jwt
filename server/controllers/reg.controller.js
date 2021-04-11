const User = require('../model/user.model.js');
const { genSaltSync, hashSync } = require('bcrypt');
const salt = genSaltSync(10);
module.exports = async (req, res) => {
  const { email, password } = req.body;
  const candidate = await User.findOne({ email });
  if (candidate) {
    return res
      .status(401)
      .json({ message: 'такий користувач був створений раніше' });
  } else {
    const user = new User({
      email,
      password: hashSync(password, salt),
    });
    await user.save();
    const token = jwt.sign(
      {
        email: candidate.email,
        id: candidate.id,
      },
      process.env.secret
    );
    return res.json({ status: 'success', payload: token });
  }
};
