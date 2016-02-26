var myApp = angular.module('myApp', ['ui.router'])
myApp.config(function ($stateProvider, $urlRouterProvider) {

$stateProvider

.state('home', {
    url: '/home',
    controller: 'homeCtrl',
    templateUrl: '/routes/home.html'
})
.state('about', {
  url: '/about',
  controller: 'aboutCtrl',
  templateUrl: '/routes/about.html'
})
.state('experience',{
  url:'/experience',
  controller: 'expCtrl',
  templateUrl: '/routes/experience.html'
})
.state('messages', {
  url: '/messages',
  templateUrl: '/routes/messages.html'
})
$urlRouterProvider.otherwise('/routes/home');

});
