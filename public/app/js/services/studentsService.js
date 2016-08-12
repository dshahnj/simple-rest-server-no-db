app.factory('studentsService', function($http,$q){

	function addStudents(fname,lname){
		var studentInfo = {}
		studentInfo.fname = fname;
		studentInfo.lname = lname;

		return sendData(studentInfo);
	}

	function sendData(studentInfo){
		var request = $http({
			url:'/students',
			method:'POST',
			data:studentInfo
			
		});

		return sendRequest(request);
	}

	function sendRequest(config){
		var deferred = $q.defer();

		config.then(function(response){
			deferred.resolve(response);

		}, function(error){
			deferred.reject(error);
		})
		return deferred.promise;
	}

	function getStudents(){
		var request = $http({
			url:'/students',
			method:"GET"
		});
		return sendRequest(request);
	}

	return {
		addStudents:addStudents,
		getStudents:getStudents
	}
})