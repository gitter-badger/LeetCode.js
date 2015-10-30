var gulp = require('gulp'),
    nodemon = require('gulp-nodemon'),
    jshint = require('gulp-jshint');

gulp.task('jshint', function() {
    // 将你的默认的任务代码放在这
    gulp.src('./Test/*js')
        .pipe(jshint());
});

gulp.task('run', function () {
    nodemon({ script: './Test/1Two_Sum_Test.js'});
});
