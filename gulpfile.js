var gulp = require('gulp');
var sass = require('gulp-sass');
var mincss = require('gulp-clean-css');
var minjs = require('gulp-uglify');
var concat = require('gulp-concat');
var server = require('gulp-webserver');


gulp.task('devScss', function() {
    return gulp.src('./src/scss/*.scss')
        .pipe(sass())
        .pipe(mincss())
        .pipe(gulp.dest('./src/css'))
});

gulp.task('browserSync', function() {
    return gulp.src('src')
        .pipe(server({
            port: '8080',
            open: true
        }))
});

gulp.task('devJs', function() {
    return gulp.src('./src/js/*.js')
        .pipe(minjs())
        .pipe(gulp.dest('./src/js'))
});

gulp.task('watch', function() {
    gulp.watch('./src/scss/*.scss', gulp.series('devScss'))
});

gulp.task('default', gulp.series('devScss', 'devJs', 'browserSync', 'watch'));

gulp.task('html', function() {
    return gulp.src('./src/index.html')
        .pipe(gulp.dest('./dist'))
});

gulp.task('css', function() {
    return gulp.src('./src/css/*.css')
        .pipe(gulp.dest('./dist/css'))
});

gulp.task('js', function() {
    return gulp.src('./src/js/*.js')
        .pipe(gulp.dest('./dist/js'))
});


gulp.task('build', gulp.series('html', 'css', 'js'));