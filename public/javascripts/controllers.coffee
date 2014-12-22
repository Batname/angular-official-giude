phonecatControllers = angular.module("phonecatControllers", [])
phonecatControllers.controller "PhoneListCtrl", [
  "$scope"
  "$http"
  ($scope, $http) ->
    $http.get("data/phones.json").success (data) ->
      $scope.phones = data
      return

    $scope.orderProp = "age"
]
phonecatControllers.controller "PhoneDetailCtrl", [
  "$scope"
  "$routeParams"
  ($scope, $routeParams) ->
    $scope.phoneId = $routeParams.phoneId
]