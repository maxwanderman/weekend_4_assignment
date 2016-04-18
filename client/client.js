var app = angular.module('ticketApp', []);
console.log('something else');
app.controller('TicketController', ['$http', function($http){
  console.log('something');
  var that = this;
  that.system = {};
  that.systems = [];
  that.fetchTickets = function() {
    $http.get('/tickets/all').then(function(response){
      console.log(response);
      that.systems = response.data;
    });
  };
  that.add = function(){
    console.log(that.system);
    $http.post('/tickets/add', that.system).then(function(response){
      console.log(response);
      that.system = {};
      that.fetchTickets();
    });
  };
  that.removeTicket = function(){

  };

that.fetchTickets();
}]);
