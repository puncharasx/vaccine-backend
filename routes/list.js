const express = require('express');
const router = express.Router();

const listController = require('../controller/list')

router.post('/',listController.add );

module.exports = router;
