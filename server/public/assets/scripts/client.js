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

myApp.controller("SomeController", ["$scope", "$http", "$location", function($scope, $http, $location){
    console.log("SomeController");
    $http.get("/user").then(function(response){
        if(response.data !== true){
          console.log("NOT LOGGED IN!");
          $location.path("/login");
        } else {
          console.log("LOGGED IN! ", response.data);
          $http.get("/user/name").then(function(response){
              console.log(response.data);
          });
        }
    });

}]);

myApp.controller("AnotherController", ["$scope", "$http", function($scope, $http){
    console.log("AnotherController");
}]);
