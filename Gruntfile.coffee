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
  })

  grunt.loadNpmTasks('grunt-contrib-clean')

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
