('use strict')

app.controller('viewController',function($scope,viewFactory){

	$scope.customers = [];

	init();

	function init(){

		$scope.customers = viewFactory.getCustomer();
	}
});