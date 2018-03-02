'use strict';

process.env.TZ = 'UTC';

require('./config/env')();
var env = process.env.NODE_ENV || 'development';
process.env.NODE_ENV = env;


var application = require('./config/application'),
    express = require('express'),
    config = require('./config/environment/' + env),
    http = require('http'),
    app = express(),
    server = http.createServer(app);

var router = express.Router({
    strict: true,
    caseSensitive: true
});


require(application.utils + 'helper')(server, config);
require(application.config + 'express')(app, config);
require(application.routes + '/')(app, config);

module.exports = app;
