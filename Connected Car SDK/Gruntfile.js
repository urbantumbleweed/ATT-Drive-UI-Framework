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

    // Time how long tasks take. Can help when optimizing build times
    require('time-grunt')(grunt);

    // Configurable paths for the application
    var appConfig = {
        app: require('./bower.json').appPath || 'app',
        dist: 'dist'
    };

    // Define the configuration for all the tasks
    grunt.initConfig({

        modules: [], //to be filled in by build task
        meta: {
            modules: 'angular.module("connectedCarSDK", [<%= srcModules %>]);',
            tplmodules: 'angular.module("connectedCarSDK.tpls", [<%= tplModules %>]);',
            all: 'angular.module("connectedCarSDK", ["connectedCarSDK.tpls", <%= srcModules %>]);'
        },

        html2js: {
            options: {
                // custom options, see below
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
                tasks: ['newer:copy:styles', 'autoprefixer']
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
                      '!<%= sdk.dist %>/.git*'
                    ]
                }]
            },
            server: '.tmp'
        },

        // Add vendor prefixed styles
        autoprefixer: {
            options: {
                browsers: ['last 1 version']
            },
            dist: {
                files: [{
                    expand: true,
                    cwd: '.tmp/styles/',
                    src: '{,*/}*.css',
                    dest: '.tmp/styles/'
                }]
            }
        },

        // Automatically inject Bower components into the app
        wiredep: {
            options: {
                cwd: '<%= sdk.app %>'
            },
            app: {
                src: ['<%= sdk.app %>/index.html'],
                ignorePath: /\.\.\//
            }
        },

        // Renames files for browser caching purposes
        //filerev: {
        //    dist: {
        //        src: [
        //          '<%= sdk.dist %>/scripts/{,*/}*.js',
        //          '<%= sdk.dist %>/styles/{,*/}*.css',
        //          '<%= sdk.dist %>/images/{,*/}*.{png,jpg,jpeg,gif,webp,svg}',
        //          '<%= sdk.dist %>/styles/fonts/*'
        //        ]
        //    }
        //},

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
        // uglify: {
        //   dist: {
        //     files: {
        //       '<%= sdk.dist %>/scripts/scripts.js': [
        //         '<%= sdk.dist %>/scripts/scripts.js'
        //       ]
        //     }
        //   }
        // },
        // concat: {
        //   dist: {}
        // },

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

        // Replace Google CDN references
        cdnify: {
            dist: {
                html: ['<%= sdk.dist %>/*.html']
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
                      '*.{ico,png,txt}',
                      '.htaccess',
                      '*.html',
                      'templates/{,*/}*.html',
                      'images/{,*/}*.{webp}',
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
          'autoprefixer',
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
      'autoprefixer',
      'connect:test',
      'karma'
    ]);

    grunt.registerTask('build', [
      'clean:dist',
      'wiredep',
      'useminPrepare',
      'concurrent:dist',
      'autoprefixer',
      'concat',
      'ngmin',
      'merge',
      'copy:dist',
      'cdnify',
      'cssmin',
      //'uglify',
      //'filerev',
      'usemin',
      'htmlmin'
    ]);

    grunt.registerTask('default', [
      'newer:jshint',
      'test',
      'build'
    ]);

    grunt.registerTask('merge', 'Reads content of all directives and merges them together in one file, under one module', function() {
        grunt.log.writeln('Merging directives');
    });

    grunt.registerTask('convert', ['html2js']);

    var foundModules = {};
    function findModule(name) {
        if (foundModules[name]) { return; }
        foundModules[name] = true;

        function breakup(text, separator) {
            return text.replace(/[A-Z]/g, function (match) {
                return separator + match;
            });
        }
        function ucwords(text) {
            return text.replace(/^([a-z])|\s+([a-z])/g, function ($1) {
                return $1.toUpperCase();
            });
        }
        function enquote(str) {
            return '"' + str + '"';
        }

        var module = {
            name: name,
            moduleName: enquote('connectedCarSDK.' + name),
            displayName: ucwords(breakup(name, ' ')),
            srcFiles: grunt.file.expand("app/scripts/directives"+name+"/*.js"),
            tplFiles: grunt.file.expand("template/"+name+"/*.html"),
            tpljsFiles: grunt.file.expand("template/"+name+"/*.html.js"),
            tplModules: grunt.file.expand("template/"+name+"/*.html").map(enquote),
            dependencies: dependenciesForModule(name),
            //docs: {
            //    md: grunt.file.expand("src/"+name+"/docs/*.md")
            //      .map(grunt.file.read).map(markdown).join("\n"),
            //    js: grunt.file.expand("src/"+name+"/docs/*.js")
            //      .map(grunt.file.read).join("\n"),
            //    html: grunt.file.expand("src/"+name+"/docs/*.html")
            //      .map(grunt.file.read).join("\n")
            //}
        };
        module.dependencies.forEach(findModule);
        grunt.config('modules', grunt.config('modules').concat(module));
    }

    function dependenciesForModule(name) {
        var deps = [];
        grunt.file.expand('src/' + name + '/*.js')
        .map(grunt.file.read)
        .forEach(function (contents) {
            //Strategy: find where module is declared,
            //and from there get everything inside the [] and split them by comma
            var moduleDeclIndex = contents.indexOf('angular.module(');
            var depArrayStart = contents.indexOf('[', moduleDeclIndex);
            var depArrayEnd = contents.indexOf(']', depArrayStart);
            var dependencies = contents.substring(depArrayStart + 1, depArrayEnd);
            dependencies.split(',').forEach(function (dep) {
                if (dep.indexOf('ui.bootstrap.') > -1) {
                    var depName = dep.trim().replace('ui.bootstrap.', '').replace(/['"]/g, '');
                    if (deps.indexOf(depName) < 0) {
                        deps.push(depName);
                        //Get dependencies for this new dependency
                        deps = deps.concat(dependenciesForModule(depName));
                    }
                }
            });
        });
        return deps;
    }

};
