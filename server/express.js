var express 	= require('express')
var path 		= require('path')
var bodyParser 	= require('body-parser')
var compress	= require('compression')
var cors 		= require('cors')
var morgan		= require('morgan')

module.exports = function(app) {
    app.use(compress());
    app.use(bodyParser.urlencoded({ extended: true }));
	app.use(bodyParser.json({limit: '50mb'}))
	app.use(cors());
    app.use(express.static(path.join(__dirname, '../build'), { maxAge: 0}))
}