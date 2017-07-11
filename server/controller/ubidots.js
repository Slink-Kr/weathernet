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
