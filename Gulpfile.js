gulp = require('gulp');
jshint = require('gulp-jshint');
nodemon = require('gulp-nodemon');

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

function sad() {
    console.log('sad');
}
gulp.task('default', function (sad) {
    sad();
});
