module.exports =  (grunt) ->
  'use strict'

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json')

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
      docs:
        options:
          bare: false
        files:
          '../../docs/html/js/app.js': 'app/js/**/*.coffee'

    ngtemplates:
      docs:
        options:
          module: 'Picatic.Components'
        src: [ 'app/views/**.html', 'components/**/*.html', 'components/**/*.less', 'style/**/*.html', 'style/**/*.less' ]
        dest: '../../docs/html/js/templates.js'

    copy:
      docs:
        files: [
          {
            src: ['app/index.html']
            dest: '../../docs/html/index.html'
          }
          {
            src: ['app/js/highlight.pack.js']
            dest: '../../docs/html/js/highlight.pack.js'
          }
          {
            src: ['app/less/highlightjs.css']
            dest: '../../docs/html/css/highlightjs.css'
          }
          {
            expand: true
            cwd: 'app'
            src: ['fonts/*']
            dest: '../../docs/html/'
            filter: 'isFile'
          }
        ]

    less:
      docs:
        options:
          paths: ['less']
        files: [
          '../../docs/html/css/app.css': 'app/less/app.less'
        ]
      docComponents:
        options:
          paths: ['less']
        files: [
          '../../docs/html/css/components.css': ['style/**/*.less', 'components/**/*.less']
        ]
      dist:
        options:
          paths: ['less']
        files: [
          {
            expand: true
            cwd: 'style/'
            src: ['**/*.less']
            dest: '../../dist/html/style/'
            ext: '.css'
          }
          {
            expand: true
            cwd: 'components/'
            src: ['**/*.less']
            dest: '../../dist/html/components/'
            ext: '.css'
          }
        ]

    concat:
      dist:
        src: ['../../dist/html/style/**/*.css', '!../../dist/html/style/**/*.min.css', '../../dist/html/components/**/*.css', '!../../dist/html/components/**/*.min.css']
        dest: '../../dist/html/picatic-components.css'

    csso:
      dist:
        files: [
          {
            expand: true
            cwd: '../../dist/html/'
            src: ['picatic-components.css']
            dest: '../../dist/html/'
            ext: '.min.css'
          }
          {
            expand: true
            cwd: '../../dist/html/components/'
            src: ['**/*.css']
            dest: '../../dist/html/components/'
            ext: '.min.css'
          }
          {
            expand: true
            cwd: '../../dist/html/style/'
            src: ['**/*.css']
            dest: '../../dist/html/style/'
            ext: '.min.css'
          }
        ]
        options:
          restructure: true
          report: 'min'

    watch:
      less:
        files: [ 'app/**', 'base/**', 'style/**', 'components/**' ]
        tasks: [ 'coffee:docs', 'ngtemplates:docs', 'less:docs', 'copy:docs', 'less:docComponents' ]

  })

  grunt.loadNpmTasks('grunt-contrib-less')
  grunt.loadNpmTasks('grunt-contrib-watch')
  grunt.loadNpmTasks('grunt-contrib-concat')
  grunt.loadNpmTasks('grunt-contrib-jshint')
  grunt.loadNpmTasks('grunt-contrib-copy')
  grunt.loadNpmTasks('grunt-csso')
  grunt.loadNpmTasks('grunt-contrib-coffee')
  grunt.loadNpmTasks('grunt-coffeelint')
  grunt.loadNpmTasks('grunt-angular-templates')
  grunt.loadNpmTasks('grunt-contrib-clean')

  grunt.registerTask('default', ['coffee', 'ngtemplates', 'less', 'copy', 'concat', 'csso'])
