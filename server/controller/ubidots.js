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

