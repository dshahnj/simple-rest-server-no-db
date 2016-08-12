app.config(function($routeProvider){
	$routeProvider
		.when('/',
		{
			controller:'homeController',
			templateUrl:'templates/home.html'
		})
		.when('/courses',
		{
			controller:'coursesController',
			templateUrl:'templates/courses.html'
		})
		.when('/students',
		{
			controller:'studentsController',
			templateUrl:'templates/students.html'
		})
		
		
		.otherwise({redirectTo:'/'});
})

