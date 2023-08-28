const gulp = require('gulp');
const less = require('gulp-less');

gulp.task('compile-less', function () {
    return gulp.src('assets/styles/main.less')
        .pipe(less())
        .pipe(gulp.dest('assets/styles'));
});

gulp.task('watch', function () {
    gulp.watch('assets/styles/*.less', gulp.series('compile-less'));
});
