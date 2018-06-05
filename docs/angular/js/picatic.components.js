(function() {
  angular.module('ptComponents', ['ngMaterial', 'pt.searchInput']);

}).call(this);

(function() {
  angular.module('pt.searchInput', []).run([
    '$templateCache', function($templateCache) {
      return $templateCache.put('pt-components/pt-search.html', '<form ng-submit="ctrl.onFormSubmit({search: ctrl.searchValue})">' + '<div class="pt-input-group">' + '<div class="pt-input-group-prepend">' + '<div class="pt-input-group-text">' + '<md-icon>search</md-icon>' + '</div><!-- /.pt-input-group-text -->' + '</div><!-- /.pt-input-group-prepend -->' + '<input type="text" placeholder="{{ctrl.placeholder}}" ng-model="ctrl.searchValue">' + '<div class="pt-input-group-append" ng-style="!ctrl.searchValue && {visibility:\'hidden\'}">' + '<md-button class="md-icon-button" ng-click="ctrl.clear()">' + '<md-icon>close</md-icon>' + '</md-button>' + '</div><!-- /.pt-input-group-prepend -->' + '</div><!-- /.pt-input-group -->' + '</form>' + '');
    }
  ]).component('ptSearch', {
    bindings: {
      onFormSubmit: '&',
      onFormClear: '&',
      placeholder: '@'
    },
    templateUrl: 'pt-components/pt-search.html',
    controller: 'PtSearchController',
    controllerAs: 'ctrl'
  }).controller('PtSearchController', function() {
    var vm;
    vm = this;
    if (!vm.placeholder) {
      vm.placeholder = 'Search';
    }
    vm.clear = function() {
      vm.searchValue = void 0;
      vm.onFormClear();
    };
  });

}).call(this);
