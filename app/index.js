'use strict';

var db = process.env.DB;
var port = process.env.PORT;

var express = require('express');
var app = express();
var config = require('./lib/config');
config(app);
//super ninja way of doing it
//require('./lib/config')(app);

require('./lib/pipeline')(app, express);
require('./lib/mongodb')(db);

app.listen(port, function(){
    console.log('Express is now listening on PORT',port);
});
