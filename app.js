var myApp = angular.module('myApp', ['ui.router'])
myApp.config(function ($stateProvider, $urlRouterProvider) {

$stateProvider

.state('home', {
    url: '/home',
    controller: 'mainCtrl',
    templateUrl: '/routes/home.html'
})
.state('about', {
  url: '/about',
  controller: 'mainCtrl',
  templateUrl: '/routes/about.html'
})
.state('experience',{
  url:'/experience',
  controller: 'mainCtrl',
  templateUrl: '/routes/experience.html'
})
.state('contact', {
  url: '/contact',
  templateUrl: '/routes/contact.html'
})

$urlRouterProvider.otherwise('/routes/home');

});
