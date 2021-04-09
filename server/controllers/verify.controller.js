const jwt = require('jsonwebtoken');
module.exports = async (req, res) => {
  const { authorization } = req.headers;
  const token = authorization.replace('Bearer ', '');
  if (token === '') {
    return res.json({
      status: 'error',
      message: 'не встановлений токен'
    });
  }
  try {
    const obj = jwt.verify(token, process.env.secret);
    return res.json({
      status: 'ok',
      payload: {
        obj
      }
    });
  } catch (err) {
    return res.json(err);
  }
};
