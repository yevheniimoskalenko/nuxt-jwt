const { Router } = require('express');
const reg = require('../controllers/reg.controller.js');
const router = Router();

router.post('/reg', reg);

module.exports = router;
