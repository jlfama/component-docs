module.exports =  (grunt) ->
  'use strict'

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json')

    clean:
      app: [
        'example'
      ]

    coffeelint:
      options:
        no_implicit_parens:
          level: 'warn'
        no_unnecessary_double_quotes:
          level: 'warn'
        no_unnecessary_fat_arrows:
          level: 'ignore'
        max_line_length:
          level: 'ignore'

    coffee:
      app:
        options:
          bare: false
        files:
          'example/js/app.js': 'app/js/**/*.coffee'

    ngtemplates:
      app:
        options:
          module: 'Picatic.Components'
        src: [ 'app/views/**.html', 'app/components/**/*.html', 'app/components/**/*.less' ]
        dest: 'example/js/templates.js'

    concat: {}

    copy:
      app:
        files: [
          {
            src: ['app/index.html']
            dest: 'example/index.html'
          }
          {
            src: ['app/js/highlight.pack.js']
            dest: 'example/js/highlight.pack.js'
          }
          {
            src: ['app/less/highlightjs.css']
            dest: 'example/css/highlightjs.css'
          }
        ]

    less:
      app:
        options:
          paths: ['less']
        files:
          'example/css/components.css': 'app/less/components.less'
          'example/css/app.css': 'app/less/app.less'

    watch:
      less:
        files: [ 'app/**' ]
        tasks: [ 'coffee:app', 'ngtemplates:app', 'less:app', 'copy:app' ]

  })

  grunt.loadNpmTasks('grunt-contrib-less')
  grunt.loadNpmTasks('grunt-contrib-watch')
  grunt.loadNpmTasks('grunt-contrib-concat')
  grunt.loadNpmTasks('grunt-contrib-jshint')
  grunt.loadNpmTasks('grunt-contrib-copy')
  grunt.loadNpmTasks('grunt-contrib-coffee')
  grunt.loadNpmTasks('grunt-coffeelint')
  grunt.loadNpmTasks('grunt-angular-templates')
  grunt.loadNpmTasks('grunt-contrib-clean')

  grunt.registerTask('default', ['coffee', 'ngtemplates', 'less', 'copy'])
