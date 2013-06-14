var app = angular.module("nimmo", []).config(function($routeProvider){
    $routeProvider.when('/hello', {
    templateUrl: 'hello.html'
    });

    $routeProvider.when('/about', {
    templateUrl: 'about.html'
    });

    $routeProvider.when('/work', {
    templateUrl: 'work.html',
    controller: 'WorkCtrl'
    });

    $routeProvider.when('/etc', {
    templateUrl: 'etc.html'
    });


    $routeProvider.otherwise({ redirectTo : 'hello' });
});

app.directive('showsSettings', function(){
    return{
        restrict: "A",
        link: function(scope, element, attributes){
            element.bind("click", function(){
                alert("Sorry, this doesn't do anything yet!");

            });
            element.bind("click", function(){

            });
        }
    }
});