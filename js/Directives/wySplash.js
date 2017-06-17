define(["angular", "jquery", "lettering", "gsCss", "gsEase", "gsTweenLite", "gsTimelineLite"], function() {
'use strict';

  angular.module('myApp.directives.wySplash', [])
    .directive('wySplash', function($http){
      return {
        // restrict to element name: <wy-splash></wy-splash>
        restrict: 'E',
        // This HTML will NOT replace the splash directive.
        replace: false,
        transclude: true,
        templateUrl: 'partials/forDirectives/wySplash.html', 
        // The linking function will add behavior to the template
        link: function(scope, element, attrs) {

            homeTween(true);

            function homeTween(animateMainNav){
              // lettering.js to split up letters for animation
              $('#title-line0').lettering();
              
              var tl = new TimelineLite();
              
              $('#title-line0 span').each(function() {
                  TweenLite.from(this, 1, {css:{bottom: Math.random()*-500-600, 
                                left: (Math.random()*3000)-500, 
                                rotation:Math.random()*3720-360, 
                                'font-size': Math.random()*300+150}, ease:Quad.easeOut});
              });
              
              tl.from($('#title-line1'), 1, {css:{left: -1000}, ease:Quad.easeOut});
              tl.from($('#title-line2'), 1, {css:{left: 1000}, ease:Quad.easeOut},-1);
              tl.from($('#title-line4'), 3, {css:{opacity:0, top:-300}, ease:Elastic.easeOut},0);
              tl.from($('#title-line5'), 1, {css:{opacity:0, left:1000}, ease:Quad.easeOut}, -4);
              
            };

        } // end link:
      } // end return
    } // end .directive
  ); // end angular.module
}); // end define


    