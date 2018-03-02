/*jshint camelcase: false */

'use strict';
let path = require('path');

module.exports = function (app, config, middleware) {

    app.get('/', (req, res) => {
        res.sendFile(path.join(__dirname, '../../public', 'index.html'));
    });

    app.all('/*', (req, res, next) => {
        res.sendFile(path.join(__dirname, '../../public', 'index.html'));
    });
};
