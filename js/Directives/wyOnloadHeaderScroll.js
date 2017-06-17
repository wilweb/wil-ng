define(["angular", "jquery", "jquery.easing"], function() {
'use strict';

  angular.module('myApp.directives.wyOnloadHeaderScroll', [])
    .directive('wyOnloadHeaderScroll', function($location, $route){
      return {
        // restrict to attribute: <ANY wy-onload-header-scroll></ANY>
        restrict: 'A',
        // This HTML will NOT replace the directive.
        replace: false,
        transclude: true,
        //template: '<h1>Onload Header Scroll</h1>', 
        
        // The linking function will add behavior to the template
        link: function(scope, element, attrs) {
              // do the following after template (.html) has loaded:
      
              // scroll to the bottom of the contact form
              var formPositionBottom = $('.contact').position().top + $('.contact').outerHeight(true);
              scroll(formPositionBottom);

              function scroll(offsetTop) {
                $('html, body').animate({
                    scrollTop: offsetTop
                }, 1000,'easeInOutExpo' );
              }
        
        } // end link:
      } // end return
    } // end .directive
  ); // end angular.module
}); // end define


    