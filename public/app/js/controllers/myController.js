('use strict');

app.controller("myController", function($scope){

	
	$scope.reverse = function(name = "") {

		/*$scope.reverseArray = [];

		for(var i = name.length; i > 0 ; i-- ){
			$scope.reverseArray.push(name[i]);
		} */

		return name.split("").reverse().join("");
		
	}

});
