var express = require('express');
var path        = require('path');
var fs          = require('fs');
var ubidots     = require('./controller/ubidots');

module.exports = function(app) {
    var router = express.Router();
    router.get('/temperature' , ubidots.getTemperature);
    router.get('/humidity' , ubidots.getHumidity);
    app.use('/api/v1', router);
}

