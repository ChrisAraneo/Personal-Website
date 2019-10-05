const gulp = require('gulp');
const gulpif = require('gulp-if');
const useref = require('gulp-useref');
const sass = require('gulp-sass');
const uglify = require('gulp-uglify');
const cleancss = require('gulp-clean-css');
const htmlmin = require('gulp-htmlmin');

gulp.task('sass', function () {
    return gulp.src('src/css/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('src/css/'));
});

// gulp.task('htmlmin', function () {
//     return gulp.src('dist/*.html')
//         .pipe(htmlmin({ collapseWhitespace: true }))
//         .pipe(gulp.dest('dist'));
// });

gulp.task('html', function () {
    return gulp.src('src/*.html')
        .pipe(useref())
        // .pipe(gulpif('*.js', uglify()))
        .pipe(gulpif('*.css', cleancss()))
        .pipe(gulpif('*.html', htmlmin({ collapseWhitespace: true })))
        .pipe(gulp.dest('dist'));
});

gulp.task('watch', function () {
    gulp.watch('src/css/*.scss', gulp.series('sass'));

    gulp.watch('src/css/*.css', gulp.series('html'));
    gulp.watch('src/js/*.js', gulp.series('html'));
    gulp.watch('src/*.html', gulp.series('html'));
});