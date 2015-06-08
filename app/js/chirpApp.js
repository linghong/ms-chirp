//set up module called chirpApp 
var app = angular.module('chirpApp', []);

//set up module controller
app.controller('mainController', function($scope){
  $scope.posts = [];
  $scope.newPost = {created_by: '', text: '', created_at: ''};
 
  $scope.post = function(){
	$scope.newPost.created_at = Date.now();
	$scope.posts.push($scope.newPost);
	$scope.newPost = {created_by: '', text: '', created_at: ''};
  };
});