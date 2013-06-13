var app = angular.module("nimmo", []).config(function($routeProvider){
    $routeProvider.when('/hello', {
    templateUrl: 'hello.html'
    });


    $routeProvider.when('/about', {
    templateUrl: 'about.html'
    });

    $routeProvider.when('/work', {
    templateUrl: 'work.html'
    });

    $routeProvider.when('/etc', {
    templateUrl: 'etc.html'
    });


    $routeProvider.otherwise({ redirectTo : 'hello' });
});