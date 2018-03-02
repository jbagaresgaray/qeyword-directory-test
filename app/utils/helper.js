'use strict';

module.exports = function(server, config) {
    server.listen(process.env.PORT || config.port, function connection(err) {
        if (err instanceof Error) {
            console.error('ENVIRONMENT: ' + config.env + ' Unable to start Server', app.get('port'));
        } else {
            console.info('ENVIRONMENT: ' + config.env + ' Server started at PORT: ' + config.port);
        }
    });
};
