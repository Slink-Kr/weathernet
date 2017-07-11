var ubidots = require('ubidots');

var client = ubidots.createClient('e9e511defa8aa541a2517aeacd53071f290a07db');

exports.getTemperature = function(req, res) {
   client.auth(function () {
        var temperature = this.getVariable('5925c78f7625427b24284209');
        temperature.getValues(function(err, data) {
            res.json({data});
        })
    }); 
}

exports.getHumidity = function(req, res) {
   client.auth(function () {
        var humidity = this.getVariable('5925c7b27625427b25ea1083');
        humidity.getValues(function(err, data) {
            debugger
            res.json({data});
        })
    }); 
}

exports.getLight = function(req, res) {
   client.auth(function () {
        var light = this.getVariable('59288c227625424e2af19fb9');
        light.getValues(function(err, data) {
            debugger
            res.json({data});
        })
    }); 
}

exports.getDust = function(req, res) {
   client.auth(function () {
        var dust = this.getVariable('592893fe7625424e2af220f9');
        dust.getValues(function(err, data) {
            res.json({data});
        })
    }); 
}

exports.getRain = function(req, res) {
   client.auth(function () {
        var rain = this.getVariable('5928e92e7625424e2b8e2d76');
        rain.getValues(function(err, data) {
            debugger
            res.json({data});
        })
    }); 
}

exports.getPressure = function(req, res) {
   client.auth(function () {
        var pressure = this.getVariable('5925cfaa7625427b25ea8f55');
        pressure.getValues(function(err, data) {
            debugger
            res.json({data});
        })
    }); 
}

