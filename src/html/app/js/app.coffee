angular.module(
  'Picatic.Components',
  [
    'ng', 'ngAnimate', 'ngSanitize', 'ui.router', 'ngMaterial', 'ngCookies'
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
    $mdThemingProvider.theme('purpleHeart').primaryPalette('purpleHeart').accentPalette('shamrock')

    $urlRouterProvider.otherwise('/')
    $stateProvider.state('login',
      url: '/login'
      templateUrl: 'app/views/login.html'
      data:
        breadcrumb: 'Login'
    )
    $stateProvider.state('index',
      url: '/'
      templateUrl: 'app/views/index.html'
      data:
        breadcrumb: 'Introduction'
    )
    $stateProvider.state('getting-started',
      url: '/getting-started'
      templateUrl: 'app/views/getting-started.html'
      data:
        breadcrumb: 'Getting Started'
    )
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

  .run(['$rootScope', '$http', '$cookies', '$mdTheming', '$mdSidenav', '$state', 'StyleExamplesConstant', 'ExamplesConstant', ($rootScope, $http, $cookies, $mdTheming, $mdSidenav, $state, StyleExamplesConstant, ExamplesConstant) ->
    # Check for logged in user
    $rootScope.globals = $cookies.getObject('globals') || {}
    $rootScope.$on('$stateChangeStart', (event, toState, toParams, fromState, fromParams, options) ->
      if toState.name isnt 'login' and !$rootScope.globals.currentUser
        event.preventDefault()
        $state.go('login')
    )
    $rootScope.$on('$stateChangeSuccess', (event, toState, toParams, fromState, fromParams) ->
      $rootScope.pageClass = "#{toState.name}-page"
      $rootScope.currentState = toState
    )
    $rootScope.$on('clearCredentials', () ->
      $rootScope.globals = {}
    )
    $rootScope.$on('setCredentials', () ->
      $rootScope.globals = $cookies.getObject('globals')
    )

    $mdTheming.generateTheme('purpleHeart')
    $rootScope.$state = $state
    $rootScope.examples = ExamplesConstant
    $rootScope.styleExamples = StyleExamplesConstant
    $http.get('../environment.json').then( (response) ->
      $rootScope.version = response.data.version
    )
    $rootScope.toggleMenu = () ->
      $mdSidenav('left').toggle()
      return
    $rootScope.closeMenu = () ->
      $mdSidenav('left').close()
      return
    $rootScope.isSelected = (state) ->
      return state is $state.current.name
  ])

  .factory('AuthService', ['$rootScope', '$http', '$q', '$cookies', 'Base64', ($rootScope, $http, $q, $cookies, Base64) ->
    service =
      login: (email, password) ->
        deferred = $q.defer()
        credentials =
          email: email
          password: password
        $http.post('https://api.picatic.com/v1/auth/login', credentials).then( (response) ->
          deferred.resolve(response)
        , (error) ->
          deferred.reject(error)
        )
        return deferred.promise

      getUser: (accessKey) ->
        deferred = $q.defer()
        params =
          headers:
            'x-picatic-access-key': accessKey
        $http.get('https://api.picatic.com/v2/user/me', params).then( (response) ->
          deferred.resolve(response.data.data.attributes)
        , (error) ->
          deferred.reject(error)
        )
        return deferred.promise

      setCredentials: (email, password) ->
        authdata = Base64.encode(email + ':' + password)
        globals =
          currentUser:
            email: email
            authdata: authdata
        expireDate = new Date()
        expireDate.setDate(expireDate.getDate() + 7)
        $cookies.putObject('globals', globals, {
          expires: expireDate
        })
        $rootScope.$emit('setCredentials')
        return

      clearCredentials: () ->
        $rootScope.$emit('clearCredentials')
        $cookies.remove('globals')
        return

    return service
  ])

  .factory('Base64', [ () ->
    keyStr = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/='
    service =
      encode: (input) ->
        output = ''
        chr1 = undefined
        chr2 = undefined
        chr3 = ''
        enc1 = undefined
        enc2 = undefined
        enc3 = undefined
        enc4 = ''
        i = 0
        loop
          chr1 = input.charCodeAt(i++)
          chr2 = input.charCodeAt(i++)
          chr3 = input.charCodeAt(i++)
          enc1 = chr1 >> 2
          enc2 = (chr1 & 3) << 4 | chr2 >> 4
          enc3 = (chr2 & 15) << 2 | chr3 >> 6
          enc4 = chr3 & 63
          if isNaN(chr2)
            enc3 = enc4 = 64
          else if isNaN(chr3)
            enc4 = 64
          output = output + keyStr.charAt(enc1) + keyStr.charAt(enc2) + keyStr.charAt(enc3) + keyStr.charAt(enc4)
          chr1 = chr2 = chr3 = ''
          enc1 = enc2 = enc3 = enc4 = ''
          unless i < input.length
            break
        return output

      decode: (input) ->
        output = ''
        chr1 = undefined
        chr2 = undefined
        chr3 = ''
        enc1 = undefined
        enc2 = undefined
        enc3 = undefined
        enc4 = ''
        i = 0
        # remove all characters that are not A-Z, a-z, 0-9, +, /, or =
        base64test = /[^A-Za-z0-9\+\/\=]/g
        if base64test.exec(input)
          window.alert 'There were invalid base64 characters in the input text.\n' + 'Valid base64 characters are A-Z, a-z, 0-9, \'+\', \'/\',and \'=\'\n' + 'Expect errors in decoding.'
        input = input.replace(/[^A-Za-z0-9\+\/\=]/g, '')
        loop
          enc1 = keyStr.indexOf(input.charAt(i++))
          enc2 = keyStr.indexOf(input.charAt(i++))
          enc3 = keyStr.indexOf(input.charAt(i++))
          enc4 = keyStr.indexOf(input.charAt(i++))
          chr1 = enc1 << 2 | enc2 >> 4
          chr2 = (enc2 & 15) << 4 | enc3 >> 2
          chr3 = (enc3 & 3) << 6 | enc4
          output = output + String.fromCharCode(chr1)
          if enc3 != 64
            output = output + String.fromCharCode(chr2)
          if enc4 != 64
            output = output + String.fromCharCode(chr3)
          chr1 = chr2 = chr3 = ''
          enc1 = enc2 = enc3 = enc4 = ''
          unless i < input.length
            break
        return output

    return service
  ])

  .controller('LoginDialogCtrl', ['$scope', '$rootScope', '$state', '$mdDialog', '$q', 'AuthService', ($scope, $rootScope, $state, $mdDialog, $q, AuthService) ->
    AuthService.clearCredentials()

    $scope.login = () ->
      $scope.dataLoading = true
      AuthService.login($scope.email, $scope.password).then( (response) ->
        return AuthService.getUser(response.data.access_key)
      , (error) ->
        return $q.reject(error)
      ).then( (user) ->
        if user.is_admin
          AuthService.setCredentials($scope.email, $scope.password)
          $mdDialog.cancel()
          $state.go('index')
        else
          $scope.error =
            title: 'Access Denied'
            desc: 'You do not have the correct permissions to view this page.'
          $scope.dataLoading = false
          return
      , (error) ->
        if error.status is 401
          errorMsg =
            title: 'Login Failed'
            desc: 'Your username and/or password do not match.'
        else if error.status is 400
          errorMsg =
            title: 'Login Failed'
            desc: error.data.message
        else
          errorMsg =
            title: 'Login Failed'
            desc: 'Cause unknown.'
        $scope.error = errorMsg
        $scope.dataLoading = false
        return
      )
      return
  ])

  .controller('LoginCtrl', ['$scope', '$mdDialog', ($scope, $mdDialog) ->

    showLogin = () ->
      $mdDialog.show({
        controller: 'LoginDialogCtrl'
        templateUrl: 'app/views/login-dialog.html'
        parent: angular.element(document.body)
        clickOutsideToClose: false
        escapeToClose: false
        fullscreen: false
        panelClass: 'test'
      })
      return
    showLogin()
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
          scope.breadcrumb = $state.current.data.breadcrumb
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
