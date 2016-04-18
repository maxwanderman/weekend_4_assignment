var express = require('express');
var Ticket = require('../../model/ticket.js');
var router = express.Router();



router.get('/', function(request, response){
  response.send("OOK");
});

router.get('/all', function(request, response){
  Ticket.find({}, function(err, tickets){
    if(err){
      console.log(err);
      response.sendStatus(500);
    } else {
      response.send(tickets);
      // response.sendStatus(200);
    }
  });
});

router.post('/add', function(request, response){
  console.log('Requested with a body of', request.body);

  var data = request.body;

  var newTicket = new Ticket({
    name : data.name,
    type : data.type,
    priority : data.priority,
    description : data.description,
    assignee: data.assignee,
    reporter: data.reporter,
    dateCreated: new Date(),
    dateUpdated: new Date()
  });

  newTicket.save(function(err){
    if(err){
      console.log(err);
      response.sendStatus(500);
    } else {
      console.log('Assignment saved!');
      response.sendStatus(200);
    }
  });

});

router.delete('/remove', function(request, response){

});

module.exports = router;
