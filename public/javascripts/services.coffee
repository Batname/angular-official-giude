phonecatServices = angular.module("phonecatServices", ["ngResource"])
phonecatServices.factory "Phone", [
  "$resource"
  ($resource) ->
    return $resource("data/:phoneId.json", {},
      query:
        method: "GET"
        params:
          phoneId: "phones"

        isArray: true
    )
]