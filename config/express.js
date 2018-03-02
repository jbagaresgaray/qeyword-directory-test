/*jshint camelcase: false */

'use strict';

var express = require('express');
var middleware = require('../app/utils/middleware');
var serveIndex = require('serve-index')

module.exports = function(app, config) {    
    app.use('/directory', express.static(__dirname + './../public'));
    app.use('/public', express.static(__dirname + './../public'));
    app.use('/', express.static(__dirname + './../public'));
    app.set('port', config.port || process.env.PORT || 5001);
    app.set('ip', config.ip);
    app.set('env', config.env);
    app.set('config', config);
    app.set('api_version', process.env.APP_VER || config.api_version);
    app.set('view engine', 'ejs');
    app.set('views', 'app/views/');
    app.use(middleware.allowCrossDomain);
    app.enable('trust proxy');
};
