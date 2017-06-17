define(["angular", "jquery"], function() {
'use strict';

  angular.module('myApp.directives.wyBtnMobile', [])
    .directive('wyBtnMobile', function($location){
      return {
        // restrict to element: <wy-btn-mobile></wy-btn-mobile>
        restrict: 'E',
        // This HTML will replace the directive.
        replace: true,
        transclude: true,
        template: '<a title="View Mobile Version" href="#/mobile" class="icon icon-mobile"></a>', 
        
        // The linking function will add behavior to the template
        link: function(scope, element, attrs) {
              // do the following after template (.html) has loaded:

              // when mobile icon is clicked, open new window
              $('a.icon-mobile').bind('click',function(event){
                sizeToMobile();
              });
              
              function sizeToMobile() {
                var is_chrome = navigator.userAgent.toLowerCase().indexOf('chrome') > -1; 
                //newwindow=window.open('http://wyan.htpwebdesign.ca/portfolio','mobile_version','height=547,width=390,screenX=350,screenY=100,scrollbars=yes'); 
                var newwindow = window.open($location.absUrl(),'mobile_version','height=645,width=480,screenX=300,screenY=80,scrollbars=yes'); 
                if (is_chrome) {newwindow.parent.blur();} 
                newwindow.focus(); 
              }
        
        } // end link:
      } // end return
    } // end .directive
  ); // end angular.module
}); // end define


    