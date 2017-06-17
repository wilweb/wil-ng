define(["angular", "jquery"], function() {
'use strict';

  angular.module('myApp.directives.wyOnHomeHide', [])
    .directive('wyOnHomeHide', function($location, $route){
      return {
        // restrict to attribute: <ANY wy-on-home-hide></ANY>
        restrict: 'A',
        // This HTML will replace the directive.
        replace: true,
        transclude: true,
        //template: '<h1>Hidden Footer</h1>', 
        
        // The linking function will add behavior to the template
        link: function(scope, element, attrs) {
              // do the following after template (.html) has loaded:

              // whenever $route changes i.e. navigates using navbar
              scope.$on('$routeChangeStart', function(next, current) { 
                // hide element if element is on home page
                if ($location.path() == '/home') {
                  $(element).hide();

                // otherwise, show element
                } else {
                  $(element).show();
                }
              });
        
        } // end link:
      } // end return
    } // end .directive
  ); // end angular.module
}); // end define


    