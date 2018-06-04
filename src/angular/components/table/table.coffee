angular.module('Picatic.Components').controller('TableDemoController', [ '$mdDialog', ($mdDialog) ->
  self = this

  self.updateSearch = (result) ->
    $mdDialog.show(
      $mdDialog.alert()
        .title('Search Text')
        .textContent("You searched for '#{result}'.")
        .ok('OK!')
        .theme('purpleHeart')
    );
    return

  self.formClear = () ->
    $mdDialog.show(
      $mdDialog.alert()
        .title('Clear Search Field')
        .textContent("The search field has been cleared.")
        .ok('OK!')
        .theme('purpleHeart')
    );

  return
])
