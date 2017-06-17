define(["angular", "Services/services", "jquery", "jquery.easing", "mixitup", "fancybox"], function() {
'use strict';

  angular.module('myApp.directives.wyPortfolioGallery', ['myApp.services'])
    .directive('wyNgRepeatOnFinish', function() {
      return function(scope, element, attrs) {
        if (scope.$last){
          console.debug("wyNgRepeatOnFinish: ngRepeat finshed rendering last element.");
          scope.$emit('NgRepeatFinished');
        }
      };
    })
    .directive('wyPortfolioGallery', function(Api){
      return {
        // restrict to element: <wy-portofolio-gallery></wy-portfolio-gallery>
        restrict: 'E',
        // This HTML will NOT replace the directive.
        replace: false,
        transclude: true,
        //template: '<h1>WY Portfolio Gallery</h1>', 
        templateUrl: 'partials/forDirectives/wyPortfolioGallery.html',
        controller: function($scope, $element, $attrs, $http) { 

              // use service to populate $scope.portfolio for ng-repeat of portfolio projects.
              // DO NOT use Api.Porfolio service to get portfolio.json; otherwise, need to point to specific https server.
              //$scope.portfolio = Api.Portfolio.query();

              $http.get('json/portfolio.json').success(function(data) {
                $scope.portfolio = data;
              });
        },
        
        // The linking function will add behavior to the template
        link: function(scope, element, attrs) {
              // do the following after template (.html) has loaded:
              console.log('wy portfolio gallery');
              

              // After ngRepeat has rendered last element, 
              // initialize gallery (#myGrid)
              scope.$on('NgRepeatFinished', function(event){
                  galleryInit();

                  // initialize fancybox around all images
                  $(".fancybox").fancybox();
              });

              function galleryInit() { 
                $('#myGrid').mixitup({
                  layoutMode: 'list', // Start in list mode (display: block) by default
                  listClass: 'list', // Container class for when in list mode
                  gridClass: 'grid', // Container class for when in grid mode
                  effects: ['fade','blur'], // List of effects 
                  listEffects: ['fade','rotateX'] // List of effects ONLY for list mode
                });
                
                // HANDLE LAYOUT CHANGES
                
                // Bind layout buttons to toList and toGrid methods:
                
                $('#ToList').on('click',function(){
                  $('.button').removeClass('active');
                  $(this).addClass('active');
                  $('#myGrid').mixitup('toList');

                  // work around to hide the effects of .controls from expanding higher
                  // refresh top navbar and photo-gallery
                  $('.navbar-float-top').fadeIn().fadeOut();
                  $('wy-portfolio-gallery').fadeOut().fadeIn();
                });

                $('#ToGrid').on('click',function(){
                  $('.button').removeClass('active');
                  $(this).addClass('active');
                  $('#myGrid').mixitup('toGrid');
                });
                
                // HANDLE MULTI-DIMENSIONAL CHECKBOX FILTERING
                var $filters = $('#Filters').find('li'),
                  dimensions = {
                    category: 'all', // Create string for first dimension
                    recreation: 'all' // Create string for second dimension
                  };
                  
                // Bind checkbox click handlers:
                $filters.on('click',function(){
                  var $t = $(this),
                    dimension = $t.attr('data-dimension'),
                    filter = $t.attr('data-filter'),
                    filterString = dimensions[dimension];
                    
                  if(filter == 'all'){
                    // If "all"
                    if(!$t.hasClass('active')){
                      // if unchecked, check "all" and uncheck all other active filters
                      $t.addClass('active').siblings().removeClass('active');
                      // Replace entire string with "all"
                      filterString = 'all'; 
                    } else {
                      // Uncheck
                      $t.removeClass('active');
                      // Emtpy string
                      filterString = '';
                    }
                  } else {
                    // Else, uncheck "all"
                    $t.siblings('[data-filter="all"]').removeClass('active');
                    // Remove "all" from string
                    filterString = filterString.replace('all','');
                    if(!$t.hasClass('active')){
                      // Check checkbox
                      //$t.addClass('active');

                      //wy: check the checkbox and uncheck all other checkboxes
                      $t.addClass('active').siblings().removeClass('active');
                      
                      // Append filter to string
                      //filterString = filterString == '' ? filter : filterString+' '+filter;

                      //wy: Replace entire filter string with selected filter string
                      filterString = filter;
                    } else {
                      // Uncheck
                      $t.removeClass('active');
                      // Remove filter and preceeding space from string with RegEx
                      var re = new RegExp('(\\s|^)'+filter);
                      filterString = filterString.replace(re,'');
                    };
                  };
                  
                  // Set demension with filterString
                  dimensions[dimension] = filterString;
                  
                  // We now have two strings containing the filter arguments for each dimension:  
                  console.info('dimension 1: '+dimensions.category);
                  console.info('dimension 2: '+dimensions.recreation);
                  
                  /*
                  * We then send these strings to MixItUp using the filter method. We can send as
                  * many dimensions to MixitUp as we need using an array as the second argument
                  * of the "filter" method. Each dimension must be a space seperated string.
                  *
                  * In this case, MixItUp will show elements using OR logic within each dimension and
                  * AND logic between dimensions. At least one dimension must pass for the element to show.
                  */
                  
                  $('#myGrid').mixitup('filter',[dimensions.category, dimensions.recreation])     
                });
              };


        } // end link:
      } // end return
    } // end .directive
  ); // end angular.module
}); // end define


    