myApp.config(function ($routeProvider){
	$routeProvider
		.when('/',
		{
			controller:'mainController',
			templateUrl:'templates/view1.html'
		})
		.when('/view2',
		{
			controller:'mainController',
			templateUrl:'templates/view2.html'
		})
		otherwise({ redirectTo: '/'});
})