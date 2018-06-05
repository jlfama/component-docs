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
          '../../docs/angular/js/app.js': 'app/js/**/*.coffee'
      docComponents:
        options:
          bare: false
        files: [
          '../../docs/angular/js/components.js': ['components/**/*.coffee']
        ]
      js:
        options:
          bare: false
        files:
          '../../docs/angular/js/picatic.components.js': 'js/**/*.coffee'

    ngtemplates:
      docs:
        options:
          module: 'Picatic.Components'
        src: [ 'app/views/**.html', 'components/**/*.html', 'components/**/*.less', 'components/**/*.coffee', 'style/**/*.html', 'style/**/*.less' ]
        dest: '../../docs/angular/js/templates.js'

    copy:
      docs:
        files: [
          {
            src: ['app/index.html']
            dest: '../../docs/angular/index.html'
          }
          {
            src: ['app/js/highlight.pack.js']
            dest: '../../docs/angular/js/highlight.pack.js'
          }
          {
            src: ['app/less/highlightjs.css']
            dest: '../../docs/angular/css/highlightjs.css'
          }
          {
            expand: true
            cwd: 'app'
            src: ['img/*']
            dest: '../../docs/angular/'
            filter: 'isFile'
          }

          {
            expand: true
            cwd: 'app'
            src: ['fonts/*']
            dest: '../../docs/angular/'
            filter: 'isFile'
          }
        ]
      dist:
        files: [
          {
            src: ['../../docs/angular/js/picatic.components.js']
            dest: '../../dist/angular/picatic.components.js'
          }
        ]

    less:
      docs:
        options:
          paths: ['less']
        files: [
          '../../docs/angular/css/app.css': 'app/less/app.less'
        ]
      docComponents:
        options:
          paths: ['less']
        files: [
          '../../docs/angular/css/components.css': ['style/**/*.less', 'components/**/*.less']
        ]
      dist:
        options:
          paths: ['less']
        files: [
          {
            expand: true
            cwd: 'style/'
            src: ['**/*.less']
            dest: '../../dist/angular/style/'
            ext: '.css'
          }
          {
            expand: true
            cwd: 'components/'
            src: ['**/*.less']
            dest: '../../dist/angular/components/'
            ext: '.css'
          }
        ]

    concat:
      dist:
        src: ['../../dist/angular/style/**/*.css', '!../../dist/angular/style/**/*.min.css', '../../dist/angular/components/**/*.css', '!../../dist/angular/components/**/*.min.css']
        dest: '../../dist/angular/picatic-components.css'

    csso:
      dist:
        files: [
          {
            expand: true
            cwd: '../../dist/angular/'
            src: ['picatic-components.css']
            dest: '../../dist/angular/'
            ext: '.min.css'
          }
          {
            expand: true
            cwd: '../../dist/angular/components/'
            src: ['**/*.css']
            dest: '../../dist/angular/components/'
            ext: '.min.css'
          }
          {
            expand: true
            cwd: '../../dist/angular/style/'
            src: ['**/*.css']
            dest: '../../dist/angular/style/'
            ext: '.min.css'
          }
        ]
        options:
          restructure: true
          report: 'min'

    uglify:
      options:
        mangle: false
      dist:
        files:
          '../../dist/angular/picatic.components.min.js': ['../../dist/angular/picatic.components.js']

    watch:
      less:
        files: [ 'app/**', 'base/**', 'style/**', 'components/**', 'js/**' ]
        tasks: [ 'coffee:docs', 'ngtemplates:docs', 'less:docs', 'copy:docs', 'coffee:docComponents', 'less:docComponents', 'coffee:js' ]

  })

  grunt.loadNpmTasks('grunt-contrib-less')
  grunt.loadNpmTasks('grunt-contrib-watch')
  grunt.loadNpmTasks('grunt-contrib-concat')
  grunt.loadNpmTasks('grunt-contrib-jshint')
  grunt.loadNpmTasks('grunt-contrib-copy')
  grunt.loadNpmTasks('grunt-csso')
  grunt.loadNpmTasks('grunt-contrib-uglify')
  grunt.loadNpmTasks('grunt-contrib-coffee')
  grunt.loadNpmTasks('grunt-coffeelint')
  grunt.loadNpmTasks('grunt-angular-templates')
  grunt.loadNpmTasks('grunt-contrib-clean')

  grunt.registerTask('default', ['coffee', 'ngtemplates', 'less', 'copy', 'concat', 'csso', 'uglify'])
