//set up module called chirpApp 
var app = angular.module('chirpApp', ['ngRoute']);

app.config(function($routeProvider){
  $routeProvider
    //the timeline display
    .when('/', {
      templateUrl: 'main.html',
      controller: 'mainController'
    })
    //the login display
    .when('/login', {
      templateUrl: 'login.html',
      controller: 'authController'
    })
    //the signup display
    .when('/register', {
      templateUrl: 'register.html',
      controller: 'authController'
    });
});


//set up module maincontroller
app.controller('mainController', function($scope){
  $scope.posts = [];
  $scope.newPost = {created_by: '', text: '', created_at: ''};
 
  $scope.post = function(){
	$scope.newPost.created_at = Date.now();
	$scope.posts.push($scope.newPost);
	$scope.newPost = {created_by: '', text: '', created_at: ''};
  };
});

//set up module authcontroller
app.controller('authController', function($scope){
  $scope.user = {username: '', password: ''};
  $scope.error_message = '';

  $scope.login = function(){
    //placeholder until authentication is implemented
    $scope.error_message = 'login request for ' + $scope.user.username;
  };

  $scope.register = function(){
    //placeholder until authentication is implemented
    $scope.error_message = 'registeration request for ' + $scope.user.username;
  };
});