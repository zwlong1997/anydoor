const gulp = require('gulp');
const less = require('gulp-less');
const plumber = require('gulp-plumber');

gulp.task('less',() => {
    gulp.src('src/**/*.less')
    .pipe(plumber())
    .pipe(less())
    .pipe(gulp.dest('build'));
})

gulp.task('default',gulp.series(['less'],(done) => {
    console.log(done);
    done();
}));