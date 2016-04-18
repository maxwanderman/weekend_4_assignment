var express = require('express');
var mongoose = require('mongoose');
var index = require('./routes/index');
var bodyParser = require('body-parser');
var ticketRouter = require('./routes/ticketRouter');

var app = express();


//[[[[[[[[[[[[[[ Global Configuration ]]]]]]]]]]]]]]]]]]]]]]]]]]]]
app.use(bodyParser.json());
app.use(express.static('server/public'));


//[[[[[[[[[[[[[[[[[[[[[[[[[[[ Routers ]]]]]]]]]]]]]]]]]]]]]]]]]]]
app.use('/', index);
app.use('/tickets', ticketRouter);


//[[[[[[[[[[[[[[[[[[[[[[[[[[[ MONGODB ]]]]]]]]]]]]]]]]]]]]]]]]]]]
var mongoURI = 'mongodb://localhost/newTickets';
var MongoDB = mongoose.connect(mongoURI).connection;

MongoDB.on('error', function(err){
  console.log('MongoDB connection error:', err);
});

MongoDB.once('open', function(){
  console.log('MongDB connection open');
});

var server = app.listen(3000, function() {
    var port = server.address().port;
    console.log('Listening on port: ', port);
});
