(function() {
  var phonecatApp;

  phonecatApp = angular.module("phonecatApp", ["ngRoute", "phonecatControllers"]);

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
    "$scope", "$http", function($scope, $http) {
      $http.get("data/phones.json").success(function(data) {
        $scope.phones = data;
      });
      return $scope.orderProp = "age";
    }
  ]);

  phonecatControllers.controller("PhoneDetailCtrl", [
    "$scope", "$routeParams", function($scope, $routeParams) {
      return $scope.phoneId = $routeParams.phoneId;
    }
  ]);

}).call(this);
