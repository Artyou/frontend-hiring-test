angular.module('requestModule', ["isteven-multi-select"])  
.controller('GithubController', GithubController);


function GithubController($scope, $http) {
	$scope.sizes = [ {name: 'The Red Chapel'}, {name: '2014'}];
  
  $scope.sendMessage = function () {
  	$scope.data = [];
  	console.log(JSON.stringify($scope.outputBrowsers, null, 4));
  	//$scope.adress = document.getElementById("valueAdress").value;
		console.log($scope.data.repeatSelect);

		var REQ = {
	    url: 'http://netflixroulette.net/api/api.php?&type=plain',
	    method: 'GET'
	  };
	  $http(REQ)
	    .success(function(data){
	    	$scope.loading = false;
	      $scope.data = data;


	    })
	    .error(function(err){
	    	$scope.loading = false;
	      console.log('Nenhum título encontrado');
	    });
  };    
   
  	
  
};

GithubController.$inject = ['$scope', '$http'];
