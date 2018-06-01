angular.module(
  'Picatic.Components',
  [
    'ng', 'ngAnimate', 'ngSanitize', 'ui.router'
  ])


  .constant('StyleExamplesConstant', [
    {
      type: 'style'
      name: 'Typography'
      state: 'typography'
      url: '/typography'
      templateUrl: 'app/views/typography.html'
    }
  ])

  .constant('ExamplesConstant', [
    {
      type: 'components'
      name: 'Button'
      state: 'button'
      url: '/button'
      templateUrl: 'app/views/button.html'
    }
    {
      type: 'components'
      name: 'Avatar'
      state: 'avatar'
      url: '/avatar'
      templateUrl: 'app/views/avatar.html'
    }
    {
      type: 'components'
      name: 'Badge'
      state: 'badge'
      url: '/badge'
      templateUrl: 'app/views/badge.html'
    }
    {
      type: 'components'
      name: 'Card'
      state: 'card'
      url: '/card'
      templateUrl: 'app/views/card.html'
    }
    {
      type: 'components'
      name: 'Ticket Widget'
      state: 'ticketWidget'
      url: '/ticket-widget'
      templateUrl: 'app/views/ticketWidget.html'
    }
  ])

  .config(['$stateProvider', '$urlRouterProvider', 'StyleExamplesConstant', 'ExamplesConstant', ($stateProvider, $urlRouterProvider, StyleExamplesConstant, ExamplesConstant) ->

    $urlRouterProvider.otherwise('/')

    StyleExamplesConstant.forEach( (ex) ->
      $stateProvider.state(ex.state,
        url: ex.url
        templateUrl: ex.templateUrl
        controller: 'ComponentDocCtrl'
        resolve:
          component: () -> return ex
      )
    )

    ExamplesConstant.forEach( (ex) ->
      $stateProvider.state(ex.state,
        url: ex.url
        templateUrl: ex.templateUrl
        controller: 'ComponentDocCtrl'
        resolve:
          component: () -> return ex
      )
    )

  ])

  .run(['$rootScope', '$state', 'StyleExamplesConstant', 'ExamplesConstant', ($rootScope, $state, StyleExamplesConstant, ExamplesConstant) ->
    $rootScope.$state = $state
    $rootScope.examples = ExamplesConstant
    $rootScope.styleExamples = StyleExamplesConstant
  ])

  .controller('ComponentDocCtrl', ['$scope', '$state', '$templateCache', 'component', ($scope, $state, $templateCache, component) ->
    $scope.markupUrl = "#{component.type}/#{$state.current.name}/#{$state.current.name}.tmpl.html"
    $scope.markupUrl2 = "#{component.type}/#{$state.current.name}/#{$state.current.name}-2.tmpl.html"
    $scope.markupUrl3 = "#{component.type}/#{$state.current.name}/#{$state.current.name}-3.tmpl.html"
    $scope.markupUrl4 = "#{component.type}/#{$state.current.name}/#{$state.current.name}-4.tmpl.html"
    $scope.markup = $templateCache.get($scope.markupUrl)
    $scope.markup2 = $templateCache.get($scope.markupUrl2)
    $scope.markup3 = $templateCache.get($scope.markupUrl3)
    $scope.markup4 = $templateCache.get($scope.markupUrl4)
    $scope.css = $templateCache.get("components/#{$state.current.name}/#{$state.current.name}.less")
    $scope.component = component
  ])

  .directive('hljs', ['$timeout', '$q', '$interpolate', ($timeout, $q, $interpolate) ->
    restrict: 'E'
    compile: (element, attr) ->
      code: undefined
      # No attribute? Code is in the content
      if !attr.code
        code = element.html()
        element.empty()

      return (scope, element, attr) ->

        render = (contents, parent) ->
          codeElement = parent.find('code')
          # Strip excessive newlines and the leading/trailing newline (otherwise the whitespace
          # calculations below are not correct).
          strippedContents = contents.replace(/\n{2,}/g, '\n\n').replace(/^\n/, '').replace(/\n$/, '')
          lines = strippedContents.split('\n')
          # Make it so each line starts at 0 whitespace
          firstLineWhitespace = lines[0].match(/^\s*/)[0]
          startingWhitespaceRegex = new RegExp('^' + firstLineWhitespace)
          lines = lines.map((line) ->
            line.replace(startingWhitespaceRegex, '').replace /\s+$/, ''
          )
          highlightedCode = hljs.highlight(attr.language or attr.lang, lines.join('\n'), true)
          highlightedCode.value = highlightedCode.value.replace(RegExp('=<span class="hljs-value">""<\\/span>', 'gi'), '').replace('<head>', '').replace('<head/>', '')
          codeElement.append(highlightedCode.value).addClass 'highlight'
          return

        if attr.code
          # Attribute? code is the evaluation
          code = scope.$eval(attr.code)
        shouldInterpolate = scope.$eval(attr.shouldInterpolate)
        $q.when(code).then (code) ->
          if code
            if shouldInterpolate
              code = $interpolate(code)(scope)
            contentParent = angular.element('<pre><code class="highlight" ng-non-bindable></code></pre>')
            element.append contentParent
            # Defer highlighting 1-frame to prevent GA interference...
            $timeout (->
              render code, contentParent
              return
            ), 34, false
          return
        return
  ])

  .directive('demoContainer', [ () ->
    scope: true
    restrict: 'E'
    controller: ($scope) ->
      $scope.showSource = false
  ])

  .directive('demoTabs', [ () ->
    scope: true
    replace: true
    restrict: 'E'
    transclude: true
    template: '\
      <div class="demo-source-tabs"> \
        <ul class="demo-tabs-wrapper"> \
          <li ng-repeat="tab in tabs" ng-class="{ active: currentTab == $index }" ng-click="selectTab($index)" ng-bind="tab"></li> \
        </ul> \
        <div class="demo-tabs-content-wrapper" ng-transclude></div> \
      </div>'
    controller: ($scope) ->
      $scope.currentTab = 0
      $scope.tabs = []
      $scope.selectTab = (index) ->
        $scope.currentTab = index
        return
      return $scope
  ])

  .directive('demoTab', [ () ->
    require: '^demoTabs'
    restrict: 'E'
    transclude: true
    replace: true
    scope: true
    template: '<div ng-show="showTab()" class="demo-source-container" ng-transclude></div>'
    link: (scope, elem, attrs, ctrl) ->
      tabId = ctrl.tabs.length
      scope.showTab = () ->
        return tabId == ctrl.currentTab
      ctrl.tabs.push(attrs.dtHeading)
  ])

  .directive('stateBreadcrumbs', [ '$state', 'StyleExamplesConstant', 'ExamplesConstant', ($state, StyleExamplesConstant, ExamplesConstant) ->
    restrict: 'A'
    scope: true
    template: '<h2 ng-bind-html="breadcrumb"></h2>'
    link: (scope, elem, attrs, ctrl) ->

      updateBreadcrumbs = () ->
        section = 'Demo'
        ex = ExamplesConstant.find( (e) ->
          return e.state is $state.current.name
        )
        if !ex
          ex = StyleExamplesConstant.find( (e) ->
            return e.state is $state.current.name
          )
          section = 'Style'
        if !ex
          return
        _breadcrumb = []
        _breadcrumb.push(section)
        _breadcrumb.push('<i class="material-icons">chevron_right</i>')
        _breadcrumb.push(ex.name)
        scope.breadcrumb = _breadcrumb.join(' ')
        return

      scope.$on('$stateChangeSuccess', () ->
        updateBreadcrumbs()
      )

      return
  ])



