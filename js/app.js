var app = angular.module("nimmo", []).config(function($routeProvider){
    $routeProvider.when('/hello', {
    templateUrl: 'about.html'
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