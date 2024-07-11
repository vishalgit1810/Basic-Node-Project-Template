// This is router for routes

const express = require('express');
const router = express.Router();

const v1Routes = require('./vi');

router.use('/v1', v1Routes);            //if request comes like "/v1" we'll redirect it to v1Routes
// or more like we're registering a middleware to all request

module.exports = router;