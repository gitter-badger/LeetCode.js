var gulp = require('gulp');
var jshint = require('gulp-jshint');
var nodemon = require('gulp-nodemon');
var fs = require('fs');

gulp.task('jshint', function () {
    gulp.src('./Src/*.js')
        .pipe(jshint())
        .pipe(jshint.reporter('default'));

    gulp.src('./Test/*.js')
        .pipe(jshint())
        .pipe(jshint.reporter('default'));
});

gulp.task('node', function () {
    nodemon({
        script: './Test/LeetCodetest.js',
        task: ['jshint']
    });
});


gulp.task('update_percentage', function () {
    fs.readFile('./README.md', "utf-8", function(err, data) {
        var total = 274;
        var completed = data.match(/\[x\]/gi).length;
        var percent = (completed / 274 * 100).toFixed(2);
        var url = "![Progress](https://img.shields.io/badge/Progress-"
                    + completed
                    + "%20%2F%20"
                    + total
                    + "%20%3D%2"
                    + percent
                    + "%25-green.svg)";
        var newdata = data.replace(/\!\[Progress\].*\)/, url);
        fs.writeFile('./README.md', newdata, 'utf-8');
    });
});
