define(["angular", "ui.bootstrap", "jquery", "jquery.easing"], function() {
'use strict';

  angular.module('myApp.controllers.navbar', ['ui.bootstrap'])
    .controller('NavbarAngularuiCtrl', function($scope) {

      stickyNavbarFloatOnScroll();

      // Implement sticky navbar-float on document scroll 
      // dependencies: jquery.js --> 
      function stickyNavbarFloatOnScroll() {
          var navbarFixedTopOffset = $('.navbar-fixed-top').height();
          var navbarFloatTopOffset = $('.navbar-float')[0].offsetTop;
          var totalOffset = navbarFloatTopOffset - navbarFixedTopOffset;

          $(window).scroll(function() {
              var docScroll = $(document).scrollTop();

              if (docScroll >= totalOffset) {
                  $('.navbar-float').addClass('navbar-float-sticky');
              } else {
                  $('.navbar-float').removeClass('navbar-float-sticky');  
              }
          });
      }


      $scope.scrollUp = function() {
        // hide .main-content
        $('.main-content').hide();

        // scroll up
        var offsetTop = 0;
        scroll(offsetTop);
        
        // play home tween
        //
        // todo: remove homeTween function from navbar.js and communicate
        // with splash.js directive directly to play homeTween();
        homeTween(true);

        function homeTween(animateMainNav){
          // lettering.js to split up letters for animation
          $('#title-line0').lettering();
          
          var tl = new TimelineLite();
          
          $('#title-line0 span').each(function() {
              TweenLite.from(this, 1, {css:{top: Math.random()*-500-600, 
                            left: (Math.random()*3000)-500, 
                            rotation:Math.random()*3720-360, 
                            'font-size': Math.random()*300+150}, ease:Quad.easeOut});
          });
          
          tl.from($('#title-line1'), 1, {css:{left: -1000}, ease:Quad.easeOut});
          tl.from($('#title-line2'), 1, {css:{left: 1000}, ease:Quad.easeOut},-1);
          tl.from($('#title-line4'), 3, {css:{opacity:0, top:-300}, ease:Elastic.easeOut},0);
          tl.from($('#title-line5'), 1, {css:{opacity:0, left:1000}, ease:Quad.easeOut}, -4);
          
        };
      } 

      $scope.desktopScrollDown = function() {
        $('.main-content').show();

        var navbarFixedTopHeight = $('.navbar-fixed-top').height();
        var navbarFloatHeight = $('.navbar-float').height();
        var mainContentOffset = $('.main-content').offset();
        var netOffsetTop =  mainContentOffset.top - navbarFixedTopHeight - navbarFloatHeight + 10;

        $('.main-content').show();
        scroll(netOffsetTop);
      }

    	$scope.mobileScrollDown = function() {
        $('.main-content').show();

    		var navbarFixedTopHeight = $('.navbar-fixed-top').outerHeight();
   			var mainContentOffset = $('.main-content').offset();
   			var netOffsetTop =  mainContentOffset.top - navbarFixedTopHeight;

    		scroll(netOffsetTop);
    	}

      function scroll(offsetTop) {
        // todo: move DOM access from controller to directive later
        $('html, body').animate({
            scrollTop: offsetTop
        }, 1000,'easeInOutExpo' );
      }
    }
  );
});
