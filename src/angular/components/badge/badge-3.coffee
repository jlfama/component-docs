angular.module('Picatic.Components').controller('Badge3DemoController', [ () ->
  self = this
  self.fruitNames = [
    'Apple'
    'Banana'
    'Orange'
  ]

  self.newVeg = (chip) ->
    {
      name: chip
    }

  return
])
