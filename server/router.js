var express = require('express');
var path        = require('path');
var fs          = require('fs');


module.exports = function(app) {
    var router = express.Router();

    app.use('api/v1', router);
}