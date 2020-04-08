const gulp = require('gulp');
const less = require('gulp-less');
const autoprefixer = require('gulp-autoprefixer');
const cleanCSS = require('gulp-clean-css');
const del = require('del');

gulp.task('clean',(done) => {
    del.sync('build');
    done();
});

gulp.task('less',(done)=>{
    gulp.src('src/**/*.less')
        .pipe(less())
        .pipe(autoprefixer({
            overrideBrowserslist: ['last 2 versions'],
            cascade: true
        }))
        .pipe(cleanCSS())
        .pipe(gulp.dest('build'));
    done();
})

gulp.task('default',gulp.series('clean','less',(done)=>{
    console.log('done!');
    done();
}));

gulp.task('watch',() => {
    const watcher = gulp.watch('src/**/*',gulp.series('default'));
    watcher.on('change',(path,stats) => {
        console.log(`File ${path} was changed`);
    })
})