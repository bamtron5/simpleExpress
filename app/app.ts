/// <reference types="angular" />
/// <reference types="angular-ui-router" />

namespace app {
  angular.module('app', ['ui.router'])
    .config([
      '$locationProvider',
      '$stateProvider',
      '$urlRouterProvider',
      '$httpProvider',
      (
        $locationProvider: ng.ILocationProvider,
        $stateProvider: angular.ui.IStateProvider,
        $urlRouterProvider: ng.ui.IUrlRouterProvider,
        $httpProvider: ng.IHttpProvider
      ) => {
        $stateProvider
          .state('home', {
            url: '/',
            controller: app.controllers.Home,
            templateUrl: '/app/views/home.html',
            controllerAs: 'vm'
          });

        $locationProvider.html5Mode(true);
        $urlRouterProvider.otherwise('/');
      }]
    )
    .run([() => {}]);
}
