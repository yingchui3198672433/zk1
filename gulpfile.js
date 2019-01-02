var gulp = require('gulp');
var sass = require('gulp-sass');
var mincss = require('gulp-clean-css');
var server = require('gulp-webserver');


gulp.task('devScss', function() {
    return gulp.src('./src/scss/*.scss')
        .pipe(sass())
        .pipe(mincss())
        .pipe(gulp.dest('./src/css'))
});

gulp.task('server', function() {
    return gulp.src('src')
        .pipe(server({
            port: '8080',
            open: true
        }))
})

gulp.task('watch', function() {
    gulp.watch('./src/scss/*.scss', gulp.series('devScss'))
});

gulp.task('dev', gulp.series('devScss', 'server', 'watch'));