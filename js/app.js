define(
["angular",
"Services/services",

"Directives/directives",
"Directives/wySplash",
"Directives/wyFadeOnload",
"Directives/wyPortfolioGallery",
"Directives/wyBtnMobile",
"Directives/wyOnHomeHide",
"Directives/wyOnloadHeaderScroll",
//"Directives/wyTiledGalleryStatic",

"Filters/filters",

"Controllers/home",
"Controllers/navbar",
"Controllers/portfolio",
"Controllers/photos",
"Controllers/contact"
],

function BaseManager(angular,Services,Directives,Filters){
    var initialize = function () {
        var app = angular.module('myApp', ['myApp.filters', 'myApp.services', 'myApp.directives', 'myApp.directives.wySplash', 'myApp.directives.wyFadeOnload', 'myApp.directives.wyPortfolioGallery', 'myApp.directives.wyBtnMobile', 'myApp.directives.wyOnHomeHide', 'myApp.directives.wyOnloadHeaderScroll','myApp.controllers.navbar', 'myApp.controllers.home', 'myApp.controllers.portfolio', 'myApp.controllers.contact', 'myApp.controllers.photos'],
            function($routeProvider, $httpProvider) {

            // config $routeProvider
            $routeProvider.when('/home', {templateUrl: 'partials/home.html', controller: 'HomeCtrl'});
            $routeProvider.when('/portfolio', {templateUrl: 'partials/portfolio.html', controller: 'PortfolioCtrl'});
            $routeProvider.when('/photos', {templateUrl: 'partials/photos.html', controller: 'PhotosCtrl'});
            $routeProvider.when('/contact', {templateUrl: 'partials/contact.html', controller: 'ContactCtrl'});
            $routeProvider.when('/contact/success', {templateUrl: 'partials/contact-success.html', controller: 'ContactCtrl'});
            $routeProvider.when('/about', {templateUrl: 'partials/about.html', controller: 'ContactCtrl'});

            $routeProvider.otherwise({redirectTo: "/home"});

            // config $httpProvider
            $httpProvider.defaults.headers.put['Content-Type'] = 'application/x-www-form-urlencoded';
            $httpProvider.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
        });

        angular.bootstrap(document,["myApp"]);
    };
    
    return {
        initialize : initialize
    };
});