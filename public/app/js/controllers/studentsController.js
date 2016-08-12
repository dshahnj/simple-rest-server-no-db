app.controller("studentsController",function($scope,studentsService){

	$scope.fname = '';
	$scope.lname = '';
	$scope.students;



	$scope.addStudents = function(fname,lname){
		$scope.fname = fname;
		$scope.lname = lname;
		console.log(fname + " "+ lname);
		studentsService.addStudents(fname,lname).then(
			function(response){
				var result = response.data;
				alert(result.fname + " " + result.lname +" is successfully added in the list");

			}, function(error){
				console.log("Error : "+error);
			});
	}

	$scope.getStudents = function() {
		studentsService.getStudents().then(
			function(response){
				
				$scope.students = response.data; 
				
			},function(error){
				console.log("Error : "+error.data);
			});
	}

	$scope.getStudents();
	//console.log($scope.studentInfo);

    
    

});

