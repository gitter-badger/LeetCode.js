var gulp = require('gulp');
var jshint = require('gulp-jshint');
var nodemon = require('gulp-nodemon');
var fs = require('fs');
var watch = require('gulp-watch');
var git = require('gulp-git');

gulp.task('jshint', function () {
    gulp.src('./Src/*.js')
        .pipe(jshint())
        .pipe(jshint.reporter('default'));

    gulp.src('./Test/*.js')
        .pipe(jshint())
        .pipe(jshint.reporter('default'));
});

gulp.task('node',['jshint'], function () {
    nodemon({
        script: './Test/LeetCodetest.js'
    });
});


gulp.task('update_percentage', function () {
    fs.readFile('./README.md', "utf-8", function(err, data) {
        var total = data.match(/- \[[x ]\]/gi).length;
        var completed = data.match(/\[x\]/gi).length;
        var percent = (completed / total * 100).toFixed(2);
        var url = "![Progress](https://img.shields.io/badge/Progress-"
                    + completed
                    + "%20%2F%20"
                    + total
                    + "%20%3D%20"
                    + percent
                    + "%25-green.svg)";
        var newdata = data.replace(/\!\[Progress\].*\)/, url);
        fs.writeFile('./README.md', newdata, 'utf-8');
    });
});

gulp.task('add', function(){
    gulp.src('./README.md')
        .pipe(git.add());
});

gulp.task('commit', ['update_percentage', 'add'], function() {
    return gulp.src('./README.md')
        .pipe(git.commit('update percentage'));
});

gulp.task('watch', function() {
  gulp.watch(['./Src/*.js', './Test/*.js'], ['jshint']);
});
