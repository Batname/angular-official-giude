phonecatAnimations = angular.module("phonecatAnimations", ["ngAnimate"])
phonecatAnimations.animation ".phone", ->
  animateUp = (element, className, done) ->
    return  unless className is "active"
    element.css
      position: "absolute"
      top: 500
      left: 0
      display: "block"

    jQuery(element).animate
      top: 0
    , done
    (cancel) ->
      element.stop()  if cancel
      return

  animateDown = (element, className, done) ->
    return  unless className is "active"
    element.css
      position: "absolute"
      left: 0
      top: 0

    jQuery(element).animate
      top: -500
    , done
    (cancel) ->
      element.stop()  if cancel
      return

  addClass: animateUp
  removeClass: animateDown
