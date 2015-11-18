var gulp = require('gulp');
var jshint = require('gulp-jshint');
var nodemon = require('gulp-nodemon');
var fs = require('fs');
var watch = require('gulp-watch');
var git = require('gulp-git');
var shell = require('gulp-shell');
var yargs = require('yargs').argv;

gulp.task('count', shell.task(
    "wc -l `find ./Src ./Test -name '*.js'`"
));

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
        var completed = "[x] " + yargs.n;
        var Reg = new RegExp('\\[ \\] '+yargs.n);
        var do_data = data.replace(Reg, completed);

        var total = do_data.match(/- \[[x ]\]/gi).length;
        var completed = do_data.match(/\[x\]/gi).length;
        var percent = (completed / total * 100).toFixed(2);
        var url = "![Progress](https://img.shields.io/badge/Progress-"
                    + completed
                    + "%20%2F%20"
                    + total
                    + "%20%3D%20"
                    + percent
                    + "%25-green.svg)";
        var newdata = do_data.replace(/\!\[Progress\].*\)/, url);
        fs.writeFile('./README.md', newdata, 'utf-8');
    });
});

gulp.task('add', function(){
    gulp.src('./README.md')
        .pipe(git.add());
});

gulp.task('commit', ['update_percentage'], function() {
    return gulp.src('./README.md')
        .pipe(git.commit('update percentage'));
});

gulp.task('watch', function() {
  gulp.watch(['./Src/*.js', './Test/*.js'], ['jshint']);
});
