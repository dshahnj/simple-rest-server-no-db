('use strict');


app.factory('viewFactory',function($http){

	var customers = [
			{name:'John Smith',city:'Parsippany'},
			{name:'John Dow',city:'Denvil'},
			{name:'Mary Dow',city:'Hanover'}
		]
		var myFactory = {};

		myFactory.getCustomer = function(){
			return customers; // if we use $http, ajax call will go here
		}
		myFactory.addCustomer = function(customer){

		}
		return myFactory;

})