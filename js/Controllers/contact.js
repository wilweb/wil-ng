 define(["angular", "Services/services"], function() {
'use strict'; 

  angular.module('myApp.controllers.contact', ['myApp.services'])
    .controller('ContactCtrl', function($scope, Api, $location) {

      $scope.master= {};

      // return true if form fields are unchanged; false otherwise
      $scope.isUnchanged = function(fields) {
          return angular.equals(fields, $scope.master);
      };
          
      // reset form fields
      $scope.reset = function() {
          $scope.fields = {} //angular.copy($scope.master);
      };

      // submit form fields
      $scope.submit = function(fields) {
          $scope.master = angular.copy(fields);

          var strFormData = '';
          strFormData += 'subject=' + "wil-net.com Contact Form";
          strFormData += '&message=' + $scope.fields.comments;
          strFormData += '&fromEmail=' + $scope.fields.email;
          strFormData += '&fromName=' + escape($scope.fields.name);

          //var strFormData = 'id=' +  strRandomId + '&quote=quote66&author=author66&image=image66';
          console.log('ContactCtrl.create(): strFormData = ' + strFormData);

          $scope.contact = Api.Contact.sendmail({}, strFormData,
              function success() {
                  console.log('sendmail() success');
                  $location.path('/contact/success');
              },
              function error() {
                  console.log('sendmail() error')
              }
            );
      
      };

      $scope.reset();
    }
  );
});
