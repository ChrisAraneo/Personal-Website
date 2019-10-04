module.exports = function (grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON("package.json"),

        cssmin: {
            target: {
                files: {
                    "dist/styles/index.min.css": "src/styles/index.css"
                }
            }
        },

        processhtml: {
            dist: {
                files: {
                    "dist/index.html": ["src/index.html"]
                }
            }
        },

        htmlmin: {
            dist: {
                options: {
                    removeComments: true,
                    collapseWhitespace: true
                },
                files: {
                    'dist/index.html': 'dist/index.html'
                }
            }
        },

        watch: {
            target: {
                files: ["src/styles/**.css", "src/**.html"],
                tasks: ["cssmin", "processhtml", "htmlmin"],
                options: {
                    "livereload": true
                }
            }
        }
    });
    grunt.loadNpmTasks("grunt-contrib-cssmin");
    grunt.loadNpmTasks("grunt-processhtml");
    grunt.loadNpmTasks("grunt-contrib-htmlmin");
    grunt.loadNpmTasks("grunt-contrib-watch");
};