(function() {
  var phonecatAnimations;

  phonecatAnimations = angular.module("phonecatAnimations", ["ngAnimate"]);

  phonecatAnimations.animation(".phone", function() {
    var animateDown, animateUp;
    animateUp = function(element, className, done) {
      if (className !== "active") {
        return;
      }
      element.css({
        position: "absolute",
        top: 500,
        left: 0,
        display: "block"
      });
      jQuery(element).animate({
        top: 0
      }, done);
      return function(cancel) {
        if (cancel) {
          element.stop();
        }
      };
    };
    animateDown = function(element, className, done) {
      if (className !== "active") {
        return;
      }
      element.css({
        position: "absolute",
        left: 0,
        top: 0
      });
      jQuery(element).animate({
        top: -500
      }, done);
      return function(cancel) {
        if (cancel) {
          element.stop();
        }
      };
    };
    return {
      addClass: animateUp,
      removeClass: animateDown
    };
  });

}).call(this);

(function() {
  var phonecatApp;

  phonecatApp = angular.module("phonecatApp", ["ngRoute", "phonecatAnimations", "phonecatControllers", "phonecatFilters", "phonecatServices"]);

  phonecatApp.config([
    "$routeProvider", function($routeProvider) {
      return $routeProvider.when("/phones", {
        templateUrl: "views/partials/phone-list.html",
        controller: "PhoneListCtrl"
      }).when("/phones/:phoneId", {
        templateUrl: "views/partials/phone-detail.html",
        controller: "PhoneDetailCtrl"
      }).otherwise({
        redirectTo: "/phones"
      });
    }
  ]);

}).call(this);

(function() {
  var phonecatControllers;

  phonecatControllers = angular.module("phonecatControllers", []);

  phonecatControllers.controller("PhoneListCtrl", [
    "$scope", "Phone", function($scope, Phone) {
      $scope.phones = Phone.query();
      $scope.orderProp = "age";
    }
  ]);

  phonecatControllers.controller("PhoneDetailCtrl", [
    "$scope", "$routeParams", "Phone", function($scope, $routeParams, Phone) {
      $scope.phone = Phone.get({
        phoneId: $routeParams.phoneId
      }, function(phone) {
        $scope.mainImageUrl = phone.images[0];
      });
      return $scope.setImage = function(imageUrl) {
        $scope.mainImageUrl = imageUrl;
      };
    }
  ]);

}).call(this);

(function() {
  angular.module('phonecatFilters', []).filter("checkmark", function() {
    return function(input) {
      if (input) {
        return "\u2713";
      } else {
        return "\u2718";
      }
    };
  });

}).call(this);

(function() {
  var phonecatServices;

  phonecatServices = angular.module("phonecatServices", ["ngResource"]);

  phonecatServices.factory("Phone", [
    "$resource", function($resource) {
      return $resource("data/:phoneId.json", {}, {
        query: {
          method: "GET",
          params: {
            phoneId: "phones"
          },
          isArray: true
        }
      });
    }
  ]);

}).call(this);
