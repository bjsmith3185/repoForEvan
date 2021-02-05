//Ref:  Routes index.js from edate project

const path = require('path');
const router = require("express").Router();
const healthCheckRoute = require('./health-check');
const emailRoute = require('./email-route');

// API Route

router.use('/api/contact', emailRoute);

router.use('/api', healthCheckRoute);


module.exports = router;