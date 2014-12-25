phonecatApp = angular.module("phonecatApp", [
  "ngRoute"
  "phonecatAnimations"
  "phonecatControllers"
  "phonecatFilters"
  "phonecatServices"
])
phonecatApp.config [
  "$routeProvider"
  ($routeProvider) ->
    $routeProvider.when("/phones",
      templateUrl: "views/partials/phone-list.html"
      controller: "PhoneListCtrl"
    ).when("/phones/:phoneId",
      templateUrl: "views/partials/phone-detail.html"
      controller: "PhoneDetailCtrl"
    ).otherwise redirectTo: "/phones"
]