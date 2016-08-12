
('use strict');

//creating a contoller (anonymous function) and register it to the module.
// controller set the inital state of a $scope object 

app.controller("mainController", function($scope){
	$scope.message = "Angular tutorial"; //the $scope.message is model here which we attach to the view

	$scope.employees = [
			{firstname:'Darshan',salary:30000, gender:'female'},
			{firstname:'Pinal',salary:140000, gender:'Male'},
			{firstname:'Harshi',salary:68000, gender:'Male'},
			{firstname:'Kunjika',salary:20000, gender:'female'}
		];

	$scope.employeeView ="employeeTable.html";

	$scope.countries = [
		{
			name:'UK',
			cities:
			[
					{name:"London"},
				 	{name:'Manchester'},
				 	{name:'Birmingham'}
				
			]
		},

		{
			name:'USA',
			cities:
			[
					{name:"Parsippany"},
				 	{name:'Chicago'},
				 	{name:'LA'}
				
			]	
		},
		{
			name:'INDIA',
			cities:
			[
					{name:"Bombay"},
				 	{name:'Ahmedabad'},
				 	{name:'Nagpur'}
				
			]
		}
	]

	$scope.technologies = [
		{name:'C#',likes:0,dislikes:0},
		{name:'SQL',likes:0,dislikes:0},
		{name:'ASP.NET',likes:0,dislikes:0},
		{name:'AngularJS',likes:0,dislikes:0},
	];

	$scope.incrementLikes = function(technology){
		technology.likes++;
	}

	$scope.incrementDisLikes = function(technology){
		technology.dislikes++;
	}





















});