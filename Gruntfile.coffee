module.exports =  (grunt) ->
  'use strict'

  externalFile = require('./src/html/Gruntfile.coffee')
  externalFile = require('./src/angular/Gruntfile.coffee')

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json')

    clean:
      docs: [
        'docs'
      ]
      dist: [
        'dist'
      ]
    copy:
      docs:
        files: [
          {
            src: ['environment.json']
            dest: 'docs/angular/environment.json'
          }
          {
            src: ['environment.json']
            dest: 'docs/html/environment.json'
          }
        ]
    bump:
      options:
        files: ['package.json', 'bower.json', 'environment.json', 'docs/angular/environment.json', 'docs/html/environment.json']
        updateConfigs: []
        commit: true
        commitMessage: 'Release v%VERSION%'
        commitFiles: ['-a'] # 'package.json', 'bower.json' for tag release files only
        createTag: true
        tagName: 'v%VERSION%'
        tagMessage: 'Version %VERSION%'
        push: true
        pushTo: 'origin'
        gitDescribeOptions: '--tags --always --abbrev=1 --dirty=-d' # options to use with '$ git describe'
    connect:
      ng:
        options:
          port: 3030
          base: 'docs/angular/'
          keepalive: true
          open:
            target: 'http://localhost:3030'
      html:
        options:
          port: 3030
          base: 'docs/html/'
          keepalive: true
          open:
            target: 'http://localhost:3030'
    exec:
      deploy:
        command: 'make deploy BUCKET=prod'
  })

  grunt.loadNpmTasks('grunt-contrib-clean')
  grunt.loadNpmTasks('grunt-contrib-copy')
  grunt.loadNpmTasks('grunt-bump')
  grunt.loadNpmTasks('grunt-contrib-connect')
  grunt.loadNpmTasks('grunt-exec')

  grunt.registerTask('builddist', (dir) ->
    done = this.async()
    grunt.log.writeln('processing ' + dir)
    if dir is 'src/html'
      spawnArgs = ['coffee', 'ngtemplates', 'less', 'copy', 'concat', 'csso']
    else
      spawnArgs = ['coffee', 'ngtemplates', 'less', 'copy', 'concat', 'csso', 'uglify']
    grunt.util.spawn(
      {
        grunt: true
        args: spawnArgs
        opts:
          cwd: dir
      }
      (err, result, code) ->
        if err is null
          grunt.log.writeln('processed ' + dir)
          done()
        else
          grunt.log.writeln('processing ' + dir + ' failed: ' + code)
          done(false)
    )
  )

  grunt.registerTask('dist', () ->
    grunt.task.run(['clean'])
    grunt.task.run(['builddist:src/html'])
    grunt.task.run(['builddist:src/angular'])
  )

  grunt.registerTask('release', () ->
    grunt.task.run(['clean'])
    grunt.task.run(['builddist:src/html'])
    grunt.task.run(['builddist:src/angular'])
    grunt.task.run(['copy'])
    grunt.task.run(['bump'])
    grunt.task.run(['exec'])
  )
