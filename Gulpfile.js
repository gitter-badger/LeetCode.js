var gulp = require('gulp');
var jshint = require('gulp-jshint');
var nodemon = require('gulp-nodemon');
var fs = require('fs');
var git = require('gulp-git');
var shell = require('gulp-shell');
var yargs = require('yargs').argv;

gulp.task('count', shell.task(
    "wc -l `find ./Src ./Test -name '*.js'`"
));

gulp.task('jshint', function () {
    gulp.src(['./Src/*.js', './Test/*.js'])
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
        if(yargs.n) {
            var to_add = "[x] " + yargs.n;
            var Reg = new RegExp('\\[ \\] '+yargs.n);
            data = data.replace(Reg, to_add);
        }

        var total = data.match(/- \[[x ]\]/gi).length;
        var completed = data.match(/\[x\]/gi).length;
        var percent = (completed / total * 100).toFixed(2);
        var url = "![Progress](https://img.shields.io/badge/Progress-" +
                    completed +
                    "%20%2F%20"+
                    total+
                    "%20%3D%20"+
                    percent+
                    "%25-green.svg)";
        var newdata = data.replace(/\!\[Progress\].*\)/, url);
        fs.writeFile('./README.md', newdata, 'utf-8');
    });
});

gulp.task('commit', ['update_percentage'], function() {
    return gulp.src('./README.md')
        .pipe(git.commit('update percentage'));
});

gulp.task('watch', function() {
  gulp.watch(['./Src/*.js', './Test/*.js'], ['jshint']);
});
