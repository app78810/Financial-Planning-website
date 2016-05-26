/**
 * Created by Amita on 5/18/2016.
 *
 */
var app = angular.module('myApp',['ngRoute']);


app.controller('myController', ['$scope', '$http', function ($scope, $http, $location){

            $scope.users = [
                {"username": "pawaramita90",  "password": "123456"},
                {"username": "pawarajit",  "password": "123456"},
                {"username": "pawaramol",  "password": "123456"},
                {"username": "pawarpopat",  "password": "123456"},
                {"username": "pawarchaya",  "password": "123456"},
                {"username": "pawaramita9",  "password": "123456"}
            ];


       // $http.get('/PersonalLoan/script/users.json').success(function(data) {
         //   $scope.users = data;
// http://stackoverflow.com/questions/33720267/how-to-navigate-one-page-to-another-page-using-angularjs
        //});
            $scope.login = function () {
                var loggedin = false;

               var allUsers = $scope.users.length;
                var usernameTyped = $scope.user;
                var passwordTyped = $scope.pw;

                for (var i = 0; i < allUsers; i++) {

                    if (( $scope.users[i].username === usernameTyped) && ($scope.users[i].password === passwordTyped)) {
                        loggedin = true;
                        break;
                    }
                }

                if (loggedin === true) {
                    alert("login successful");
                   //var url = "http://PersonalLoan/html/Portfolio.html";
                    //$window.location.href = url;
                     $location.path("/login");
                   //window.location = "http://PersonalLoan/html/Portfolio.html";
                } else {
                    alert("username does not exist")
                }

            }



    }]);

app.controller('registerController',['$scope',  function ($scope, $location) {

           $scope.register = function () {
             $location.url("/register");
            }
}]);

app.controller("Portfolio", function($scope, $location) {

});
// till this line everything is correct

//routeProvider code is correct
app.config(['$routeProvider', '$locationProvider',
  function ($routeProvider, $locationProvider) {
    $routeProvider.
       when('/login', {
           templateUrl: 'html/Portfolio.html',
           controller: 'Portfolio'
        }).
    when('/register', {
        templateUrl: 'html/register.html',
        controller: 'registerController'
    }).
       otherwise({
          redirectTo : '/login'
        });

    }]);
