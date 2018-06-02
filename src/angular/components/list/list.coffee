angular.module('Picatic.Components').controller('ListDemoController', [ () ->
  self = this
  self.toppings = [
    { name: 'Pepperoni', wanted: true },
    { name: 'Sausage', wanted: false },
    { name: 'Black Olives', wanted: true },
    { name: 'Green Peppers', wanted: false }
  ]

  return
])
