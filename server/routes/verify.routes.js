const { Router } = require('express');
const verify = require('../controllers/verify.controller.js');
const router = Router();

router.get('/verefy', verify);

module.exports = router;
