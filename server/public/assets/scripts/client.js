var myApp = angular.module("myApp", ["ngRoute"]);

myApp.config(["$routeProvider", function($routeProvider){
    $routeProvider.
        when("/user", {
            templateUrl: "/assets/views/routes/user.html",
            controller: "SomeController"
        }).
        when("/another", {
            templateUrl: "/assets/views/routes/another.html",
            controller: "AnotherController"
        }).
        when("/login", {
            templateUrl: "/assets/views/routes/login.html"
        }).
        otherwise({
            redirectTo: 'user'
        });
}]);

myApp.controller("SomeController", ["$scope", "UserService", function($scope, UserService){
    console.log("SomeController");
    UserService.getUser();
}]);

myApp.controller("AnotherController", ["$scope", "UserService", function($scope, UserService){
    console.log("AnotherController");


    UserService.getUser();
}]);

myApp.factory("UserService", ["$http", "$location", function($http, $location){
    var user;
    var userLoggedIn = false;



    var getUser = function() {
      if(!userLoggedIn){
        $http.get("/user/name").then(function(response){
          console.log(response);
            if(response.data === undefined){
              console.log("NOT LOGGED IN!");
              $location.path("/login");
            } else {
              user = response.data;
              userLoggedIn = true;
              console.log(user);

            }
        });
      } else {
      }
    };

    return {
        user : user,
        getUser : getUser
    };
}]);
