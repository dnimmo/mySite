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
  
    /*Angular presentation stuff*/  
    $routeProvider.when('/angular', {
    templateUrl: 'angular/angular.html'
    });
  
    $routeProvider.when('/directives', {
    templateUrl: 'angular/directives.html'
    });
  
    $routeProvider.when('/filters', {
    templateUrl: 'angular/filters.html'
    });


    $routeProvider.otherwise({ redirectTo : 'hello' });
});