var express = require('express');
var path        = require('path');
var fs          = require('fs');
var ubidots     = require('./controller/ubidots');

module.exports = function(app) {
    var router = express.Router();
    router.get('/temperature' , ubidots.getTemperature);
    router.get('/humidity' , ubidots.getHumidity);
    router.get('/light' , ubidots.getLight);
    // router.get('/dust' , ubidots.getDust);
    // router.get('/rain' , ubidots.getRain);
    // router.get('/pressure' , ubidots.getPressure);
    app.use('/api/v1', router);
}

