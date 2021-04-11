const User = require('../model/user.model.js');
const { compareSync } = require('bcrypt');
const jwt = require('jsonwebtoken');
module.exports = async (req, res) => {
  const { email, password } = req.body;
  const candidate = await User.findOne({ email });

  if (candidate) {
    const isPassword = compareSync(password, candidate.password);
    if (isPassword) {
      const token = jwt.sign(
        {
          email: candidate.email,
          id: candidate.id,
        },
        process.env.secret
      );
      return res.json({ status: 'success', payload: token });
    } else {
      return res.status(401).json({
        status: 'error',
        message: 'Користувач не знайдений чи не підходить пароль',
      });
    }
  } else {
    res.status(401).json({
      status: 'error',
      message: 'Користувач не знайдений чи не підходить пароль',
    });
  }
};
