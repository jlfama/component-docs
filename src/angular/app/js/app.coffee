angular.module(
  'Picatic.Components',
  [
    'ng', 'ngAnimate', 'ngSanitize', 'ui.router', 'ngMaterial'
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
      name: 'Avatar'
      state: 'avatar'
      url: '/avatar'
      templateUrl: 'app/views/avatar.html'
    }
    {
      type: 'components'
      name: 'Button'
      state: 'button'
      url: '/button'
      templateUrl: 'app/views/button.html'
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
      name: 'List'
      state: 'list'
      url: '/list'
      templateUrl: 'app/views/list.html'
    }
    {
      type: 'components'
      name: 'Snackbar'
      state: 'snackbar'
      url: '/snackbar'
      templateUrl: 'app/views/snackbar.html'
    }
    {
      type: 'components'
      name: 'Table'
      state: 'table'
      url: '/table'
      templateUrl: 'app/views/table.html'
    }
    {
      type: 'components'
      name: 'Menu'
      state: 'menu'
      url: '/menu'
      templateUrl: 'app/views/menu.html'
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

  .config(['$mdThemingProvider', '$stateProvider', '$urlRouterProvider', 'StyleExamplesConstant', 'ExamplesConstant', ($mdThemingProvider, $stateProvider, $urlRouterProvider, StyleExamplesConstant, ExamplesConstant) ->

    greyMap = $mdThemingProvider.extendPalette('grey', {
      '50': '#fff'
    })
    $mdThemingProvider.definePalette('grey', greyMap)
    $mdThemingProvider.definePalette('black', {
      '50': 'rgba(0,0,0,0.05)'
      '100': 'rgba(0,0,0,0.1)'
      '200': 'rgba(0,0,0,0.2)'
      '300': 'rgba(0,0,0,0.26)'
      '400': 'rgba(0,0,0,0.4)'
      '500': 'rgba(0,0,0,0.54)'
      '600': 'rgba(0,0,0,0.6)'
      '700': 'rgba(0,0,0,0.7)'
      '800': 'rgba(0,0,0,0.87)'
      '900': 'rgba(0,0,0,0.9)'
      'A100': 'rgba(0,0,0,0.26)'
      'A200': 'rgba(0,0,0,0.3)'
      'A400': 'rgba(0,0,0,0.4)'
      'A700': 'rgba(0,0,0,0.7)'
      'contrastDefaultColor': 'light'
      'contrastDarkColors': ['50', '100', 'A100']
    })
    $mdThemingProvider.definePalette('redOrange', {
      '50': '#fff5f6'
      '100': '#ffd6d9'
      '200': '#f6a09d'
      '300': '#ee7672'
      '400': '#f95b53'
      '500': '#ff4632'
      '600': '#f13b32'
      '700': '#e1332d'
      '800': '#dc241e'
      '900': '#c91913'
      'A100': '#ff978a'
      'A200': '#ff615c'
      'A400': '#ff2448'
      'A700': '#e00700'
      'contrastDefaultColor': 'light'
      'contrastDarkColors': ['50', '100', '200', '300', 'A100']
    })
    $mdThemingProvider.definePalette('shamrock', {
      '50': '#ebfaf3'
      '100': '#c3efd7'
      '200': '#9be4bd'
      '300': '#72daa4'
      '400': '#56d292'
      '500': '#34cb7b'
      '600': '#2ebd73'
      '700': '#26a664'
      '800': '#1e9457'
      '900': '#107040'
      'A100': '#b9f6ca'
      'A200': '#34cb7b'
      'A400': '#00e676'
      'A700': '#26a664'
      'contrastDefaultColor': 'light'
      'contrastDarkColors': ['50', '100', '200', '300', '400', 'A100', 'A400']
      'contrastStrongLightColors': ['500', 'A200']
    })
    $mdThemingProvider.definePalette('purpleHeart', {
      '50': '#ede7f6'
      '100': '#d1c4e9'
      '200': '#b39ddb'
      '300': '#9575cd'
      '400': '#7e57c2'
      '500': '#673ab7'
      '600': '#512da8'
      '700': '#512da8'
      '800': '#4527a0'
      '900': '#311b92'
      'A100': '#b388ff'
      'A200': '#673ab7'
      'A400': '#512da8'
      'A700': '#512da8'
      'contrastDefaultColor': 'light'
      'contrastDarkColors': ['50', '100', '200', '300', '400']
      'contrastStrongLightColors': ['500', 'A200']
    })
    $mdThemingProvider.definePalette('ceruleanBlue', {
      '50': '#e8eaf6'
      '100': '#c5cbe9'
      '200': '#9fa8da'
      '300': '#7986cb'
      '400': '#5c6bc0'
      '500': '#3f51b5'
      '600': '#303f9f'
      '700': '#303f9f'
      '800': '#283593'
      '900': '#1a237e'
      'A100': '#8c9eff'
      'A200': '#3f51b5'
      'A400': '#303f9f'
      'A700': '#303f9f'
      'contrastDefaultColor': 'light'
      'contrastDarkColors': ['50', '100', '200', '300', '400']
      'contrastStrongLightColors': ['500', 'A200']
    })
    $mdThemingProvider.theme('default').primaryPalette('shamrock').accentPalette('black').warnPalette('redOrange')
    $mdThemingProvider.theme('cerulean').primaryPalette('ceruleanBlue').accentPalette('shamrock')
    $mdThemingProvider.theme('purpleHeart').primaryPalette('purpleHeart').accentPalette('shamrock')

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

  .run(['$rootScope', '$mdTheming', '$state', 'StyleExamplesConstant', 'ExamplesConstant', ($rootScope, $mdTheming, $state, StyleExamplesConstant, ExamplesConstant) ->
    $mdTheming.generateTheme('default')
    $mdTheming.generateTheme('cerulean')
    $mdTheming.generateTheme('purpleHeart')
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



