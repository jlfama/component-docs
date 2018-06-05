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
    bump:
      options:
        files: ['package.json', 'bower.json']
        updateConfigs: []
        commit: true
        commitMessage: 'Release v%VERSION%'
        commitFiles: ['package.json', 'bower.json'] # '-a' for all files
        createTag: true
        tagName: 'v%VERSION%'
        tagMessage: 'Version %VERSION%'
        push: true
        pushTo: 'origin'
        gitDescribeOptions: '--tags --always --abbrev=1 --dirty=-d' # options to use with '$ git describe'
  })

  grunt.loadNpmTasks('grunt-contrib-clean')
  grunt.loadNpmTasks('grunt-bump')

  grunt.registerTask('dist', ['clean'])

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
    grunt.task.run(['bump'])
  )
