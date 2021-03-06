define(["angular", "jquery"], function() {
'use strict';

  angular.module('myApp.directives.wyFadeOnload', [])
    .directive('wyFadeOnload', function(){
      return {
        // restrict to attribute, e.g: <img ng-src="" wy-fade-onload/>
        restrict: 'A',
        // This HTML will NOT replace the directive.
        replace: false,
        transclude: true,
        //template: '<p>fading</p>', 
        
        // The linking function will add behavior to the template
        link: function(scope, element, attrs) {

                // detect when element (e.g. img) has loaded
                element.bind("load" , function(e){ 
                    //console.log('wyFadeOnload: element loaded');
                    // fade the element's parent
                     $(element).parent().addClass('loaded');
                    
                }); // end element.bind

        } // end link:
      } // end return
    } // end .directive
  ); // end angular.module
}); // end define


    