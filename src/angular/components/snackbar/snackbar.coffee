angular.module('Picatic.Components').controller('SnackbarDemoController', [ '$mdToast', ($mdToast) ->
  self = this
  self.popToast1 = () ->
    $mdToast.show(
      $mdToast.simple()
        .textContent('Message sent')
        .hideDelay(6500)
        .position('bottom center')
        .toastClass('pt-toast')
        .theme('purpleHeart')
    )

  self.popToast2 = (highlightClass=null) ->
    $mdToast.show(
      $mdToast.simple()
        .textContent('Message sent')
        .action('Undo')
        .hideDelay(0)
        .position('bottom center')
        .toastClass('pt-toast')
        .theme('purpleHeart')
        .highlightAction(true)
        .highlightClass(highlightClass)
    )

  self.popToast3 = () ->
    $mdToast.show(
      $mdToast.simple()
        .textContent('Connection timed out. You will see limited information until you reconnect.')
        .hideDelay(6500)
        .position('bottom center')
        .toastClass('pt-toast')
        .theme('purpleHeart')
    )

  self.popToast4 = () ->
    $mdToast.show(
      $mdToast.simple()
        .textContent('Connection timed out. You will see limited information until you reconnect.')
        .action('Reload')
        .hideDelay(0)
        .position('bottom center')
        .toastClass('pt-toast')
        .theme('purpleHeart')
    )

  return
])
