angular.module('Picatic.Components').controller('Table3DemoController', [ () ->
  self = this
  self.row1 = ['Col 1', 'Col 2', 'Col 3', 'Col 4', 'Col 5', 'Col 6', 'Col 7']
  self.row2 = angular.copy(self.row1)
  self.row2.push('Col 8')
  self.row3 =
    avatar: 'img/aiden.jpg'
    name: 'Carl Harrison'
    caption: 'Col 1 Caption'
    columns: ['Col 2', 'Col 3', 'Col 4', 'Col 5', 'Col 6', 'Col 7']

  return
])
