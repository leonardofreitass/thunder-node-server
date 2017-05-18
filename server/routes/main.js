'use strict';

const express = require('express');
const ViewHandler = require('../handlers/view');

const router = express.Router();

router.route('*')
  .get(ViewHandler.index);

module.exports = router;
