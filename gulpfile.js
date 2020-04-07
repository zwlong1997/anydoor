const gulp = require('gulp');
const less = require('gulp-less');

gulp.task('less',(done)=>{
    gulp.src('src/**/*.less')
        .pipe(less())
        .pipe(gulp.dest('build'));
    done();
})

gulp.task('default',gulp.series('less',(done)=>{
    console.log('done!');
    done();
}));