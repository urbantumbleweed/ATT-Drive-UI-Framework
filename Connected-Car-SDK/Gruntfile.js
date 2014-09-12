// Generated on 2014-08-25 using generator-angular 0.9.5
'use strict';

// # Globbing
// for performance reasons we're only matching one level down:
// 'test/spec/{,*/}*.js'
// use this if you want to recursively match all subfolders:
// 'test/spec/**/*.js'

module.exports = function (grunt) {

    // Load grunt tasks automatically
    require('load-grunt-tasks')(grunt);

    grunt.loadNpmTasks('grunt-contrib-uglify');

    // Time how long tasks take. Can help when optimizing build times
    require('time-grunt')(grunt);

    // Configurable paths for the application
    var appConfig = {
        app: require('./bower.json').appPath || 'app',
        dist: 'dist'
    };

    // Define the configuration for all the tasks
    grunt.initConfig({
        
        pkg: grunt.file.readJSON('package.json'),

        modules: [], //to be filled in by build task
        meta: {
            modules: 'angular.module(\'connectedCarSDK\', [<%= modules %>]);',
            all: 'angular.module(\'connectedCarSDK\', [\'connectedCarSDK.tpls\', <%= modules %>]);'
        },

        html2js: {
            options: {
                // custom options, see below
                base: 'app/',
                module: 'connectedCarSDK.tpls'
            },
            main: {
                src: ['app/templates/**/*.html'],
                dest: 'app/templates/templates.js'
            },
        },

        // Project settings
        sdk: appConfig,

        less: {
            development: {
                options: {
                    paths: ['./app/less'],
                    compress: true,
                    optimization: 2
                },
                files: {
                    // target.css file: source.less file
                    './app/styles/att-sdk.css': './app/less/att-sdk.less'
                }
            },
            dist: {
                options: {
                    paths: ['./app/less'],
                    compress: true,
                    optimization: 2
                },
                files: {
                    // target.css file: source.less file
                    './dist/styles/att-sdk.css': './app/less/att-sdk.less'
                }
            }

        },

        // Watches files for changes and runs tasks based on the changed files
        watch: {
            bower: {
                files: ['bower.json'],
                tasks: ['wiredep']
            },
            js: {
                files: ['<%= sdk.app %>/scripts/{,*/}*.js'],
                tasks: ['newer:jshint:all'],
                options: {
                    livereload: '<%= connect.options.livereload %>'
                }
            },
            jsTest: {
                files: ['test/spec/{,*/}*.js'],
                tasks: ['newer:jshint:test', 'karma']
            },
            styles: {
                files: ['<%= sdk.app %>/styles/{,*/}*.css'],
                tasks: ['newer:copy:styles']
            },
            gruntfile: {
                files: ['Gruntfile.js']
            },
            livereload: {
                options: {
                    livereload: '<%= connect.options.livereload %>'
                },
                files: [
                  '<%= sdk.app %>/{,*/}*.html',
                  '.tmp/styles/{,*/}*.css',
                  '<%= sdk.app %>/images/{,*/}*.{png,jpg,jpeg,gif,webp,svg}'
                ]
            }
        },

        // The actual grunt server settings
        connect: {
            options: {
                port: 9000,
                // Change this to '0.0.0.0' to access the server from outside.
                hostname: 'localhost',
                livereload: 35729
            },
            livereload: {
                options: {
                    open: true,
                    middleware: function (connect) {
                        return [
                          connect.static('.tmp'),
                          connect().use(
                            '/bower_components',
                            connect.static('./bower_components')
                          ),
                          connect.static(appConfig.app)
                        ];
                    }
                }
            },
            test: {
                options: {
                    port: 9001,
                    middleware: function (connect) {
                        return [
                          connect.static('.tmp'),
                          connect.static('test'),
                          connect().use(
                            '/bower_components',
                            connect.static('./bower_components')
                          ),
                          connect.static(appConfig.app)
                        ];
                    }
                }
            },
            dist: {
                options: {
                    open: true,
                    base: '<%= sdk.dist %>'
                }
            }
        },

        // Make sure code styles are up to par and there are no obvious mistakes
        jshint: {
            options: {
                jshintrc: '.jshintrc',
                reporter: require('jshint-stylish')
            },
            all: {
                src: [
                  'Gruntfile.js',
                  '<%= sdk.app %>/scripts/{,*/}*.js'
                ]
            },
            test: {
                options: {
                    jshintrc: 'test/.jshintrc'
                },
                src: ['test/spec/{,*/}*.js']
            }
        },

        // Empties folders to start fresh
        clean: {
            dist: {
                files: [{
                    dot: true,
                    src: [
                      '.tmp',
                      '<%= sdk.dist %>/{,*/}*',
                      '!<%= sdk.dist %>/.git*',
                      'app/templates/templates.js'
                    ]
                }]
            },
            server: '.tmp'
        },
        
        // Automatically inject Bower components into the app
        wiredep: {
            app: {
                src: ['<%= sdk.app %>/index.html'],
                ignorePath: /\.\.\//
            }
        },
        
        // Reads HTML for usemin blocks to enable smart builds that automatically
        // concat, minify and revision files. Creates configurations in memory so
        // additional tasks can operate on them
        useminPrepare: {
            html: '<%= sdk.app %>/index.html',
            options: {
                dest: '<%= sdk.dist %>',
                flow: {
                    html: {
                        steps: {
                            js: ['concat'],
                            css: ['cssmin']
                        },
                        post: {}
                    }
                }
            }
        },

        // Performs rewrites based on filerev and the useminPrepare configuration
        usemin: {
            html: ['<%= sdk.dist %>/{,*/}*.html'],
            css: ['<%= sdk.dist %>/styles/{,*/}*.css'],
            options: {
                assetsDirs: ['<%= sdk.dist %>', '<%= sdk.dist %>/images']
            }
        },

        // The following *-min tasks will produce minified files in the dist folder
        // By default, your `index.html`'s <!-- Usemin block --> will take care of
        // minification. These next options are pre-configured if you do not wish
        // to use the Usemin blocks.
        // cssmin: {
        //   dist: {
        //     files: {
        //       '<%= sdk.dist %>/styles/main.css': [
        //         '.tmp/styles/{,*/}*.css'
        //       ]
        //     }
        //   }
        // },

        uglify: {
            dist: {
                options: {
                    mangle: false
                },
                files: {
                    'dist/scripts/<%= pkg.name %>-<%= pkg.version %>.min.js': [
                        'dist/scripts/<%= pkg.name %>-<%= pkg.version %>.js'
                    ],
                    'dist/scripts/<%= pkg.name %>-tpls-<%= pkg.version %>.min.js': [
                        'dist/scripts/<%= pkg.name %>-tpls-<%= pkg.version %>.js'
                    ]
                }
            }
        },

        concat: {
            dist: {
                options: {
                    stripBanners: true,
                    banner: '<%= meta.modules %>',
                },
                src: ['app/scripts/services/*', 'app/scripts/directives/*'],
                dest: 'dist/scripts/<%= pkg.name %>-<%= pkg.version %>.js',
            },
            dist_tpls: {
                options: {
                    stripBanners: true,
                    banner: '<%= meta.all %>',
                },
                src: ['app/scripts/services/*', 'app/scripts/directives/*', 'app/templates/templates.js'],
                dest: 'dist/scripts/<%= pkg.name %>-tpls-<%= pkg.version %>.js',
            }
        },

        imagemin: {
            dist: {
                files: [{
                    expand: true,
                    cwd: '<%= sdk.app %>/images',
                    src: '{,*/}*.{png,jpg,jpeg,gif}',
                    dest: '<%= sdk.dist %>/images'
                }]
            }
        },

        svgmin: {
            dist: {
                files: [{
                    expand: true,
                    cwd: '<%= sdk.app %>/images',
                    src: '{,*/}*.svg',
                    dest: '<%= sdk.dist %>/images'
                }]
            }
        },

        htmlmin: {
            dist: {
                options: {
                    collapseWhitespace: true,
                    conservativeCollapse: true,
                    collapseBooleanAttributes: true,
                    removeCommentsFromCDATA: true,
                    removeOptionalTags: true
                },
                files: [{
                    expand: true,
                    cwd: '<%= sdk.dist %>',
                    src: ['*.html', 'views/{,*/}*.html'],
                    dest: '<%= sdk.dist %>'
                }]
            }
        },

        // ngmin tries to make the code safe for minification automatically by
        // using the Angular long form for dependency injection. It doesn't work on
        // things like resolve or inject so those have to be done manually.
        ngmin: {
            dist: {
                files: [{
                    expand: true,
                    cwd: '.tmp/concat/scripts',
                    src: '*.js',
                    dest: '.tmp/concat/scripts'
                }]
            }
        },
        
        // Copies remaining files to places other tasks can use
        copy: {
            dist: {
                files: [{
                    expand: true,
                    dot: true,
                    cwd: '<%= sdk.app %>',
                    dest: '<%= sdk.dist %>',
                    src: [
                      //'*.{ico,png,txt}',
                      //'.htaccess',
                      //'*.html',
                      'templates/{,*/}*.html',
                      'images/{,*/}*',
                      'fonts/*'
                    ]
                }, {
                    expand: true,
                    cwd: '.tmp/images',
                    dest: '<%= sdk.dist %>/images',
                    src: ['generated/*']
                }]
            },
            styles: {
                expand: true,
                cwd: '<%= sdk.app %>/styles',
                dest: '.tmp/styles/',
                src: '{,*/}*.css'
            }
        },

        // Run some tasks in parallel to speed up the build process
        concurrent: {
            server: [
              'copy:styles'
            ],
            test: [
              'copy:styles'
            ],
            dist: [
              'copy:styles',
              //'imagemin',
              'svgmin'
            ]
        },

        // Test settings
        karma: {
            unit: {
                configFile: 'test/karma.conf.js',
                singleRun: true
            }
        }
    });


    grunt.registerTask('serve', 'Compile then start a connect web server', function (target) {
        if (target === 'dist') {
            return grunt.task.run(['build', 'connect:dist:keepalive']);
        }

        grunt.task.run([
          'clean:server',
          'wiredep',
          'concurrent:server',
          'connect:livereload',
          'watch'
        ]);
    });

    grunt.registerTask('server', 'DEPRECATED TASK. Use the "serve" task instead', function (target) {
        grunt.log.warn('The `server` task has been deprecated. Use `grunt serve` to start a server.');
        grunt.task.run(['serve:' + target]);
    });

    grunt.registerTask('test', [
      'clean:server',
      'concurrent:test',
      'connect:test',
      'karma'
    ]);

    grunt.registerTask('build', 'build new version of assets/styles/directives into dist folder', function () {
        
        grunt.task.run([
            'clean:dist',
            'wiredep',
            'loadModules', // figure out all module names by iterating over directives and services, put the result in modules[] config value
            'html2js', // go through all template files from app/templates/*.html and create one template.js file with angular templates of each directive 
            'concat',   // concatenate all services/directives/template.js files into one output in /dist/scripts directory
            'useminPrepare',
            'concurrent:dist',
            'ngmin',
            'copy:dist',
            'cssmin',
            'uglify',
            'usemin',
            'htmlmin'
        ]);
        
    });

    grunt.registerTask('default', [
      'newer:jshint',
      'test',
      'build'
    ]);

    grunt.registerTask('loadModules', 'figure out all module names by iterating over directives and services, put the result in modules[] config value', function() {

        var src = [
            'app/scripts/directives/*.js',
            'app/scripts/services/*.js'
        ];

        grunt.file.expand({ filter: 'isFile' }, src).forEach(function (path) {
            grunt.log.ok(path);

            grunt.config('modules', grunt.config('modules')
                .concat("'connectedCarSDK." + path.substring(path.lastIndexOf('/') + 1,
                        path.lastIndexOf('.')) + "'"));
            
        });

        grunt.log.ok(grunt.config('modules'));

    });
    
};
