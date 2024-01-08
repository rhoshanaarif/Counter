const express = require('express');
const countCountroller = require('../controllers/countController');
const router = express.Router();

router.get('/count', countCountroller.getCount);
router.get('/count/decrease', countCountroller.decrementCount);
router.get('/count/increase', countCountroller.incrementCount);
router.get('/count/reset', countCountroller.reset);
module.exports = router;