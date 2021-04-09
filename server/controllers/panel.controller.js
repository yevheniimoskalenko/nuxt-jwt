const User = require('../model/user.model.js');
const { genSaltSync, hashSync } = require('bcrypt');
module.exports = async (req, res) => {
  const { email, password } = req.body;
  return res.json(req.user);
};
