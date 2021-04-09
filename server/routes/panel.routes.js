const { Router } = require('express');
const middleware = require('../middleware/verify.middleware.js');
const panel = require('../controllers/panel.controller.js');
const router = Router();

router.get('/panel', middleware, panel);
module.exports = router;
