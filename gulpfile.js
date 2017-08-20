'use strict';

// require node modules
let gulp = require('gulp');
let sass = require('gulp-sass');
let maps = require('gulp-sourcemaps');
let autoprefixer = require('gulp-autoprefixer');
let bs = require('browser-sync').create();

// compile sass
gulp.task('compileSass', function () {
    return gulp.src('scss/*.scss')
        .pipe(sass().on('error', sass.logError))
        // .pipe(maps.init())
        .pipe(sass({ outputStyle: 'expanded' }))
        .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))
        .pipe(maps.write('./'))
        .pipe(gulp.dest('css'))
        .pipe(bs.stream({match: '**/*.css'}));
});

// gulp watch
gulp.task('watch', ['browser-sync'], function () {
    gulp.watch('**/*.scss', ['compileSass']);
    gulp.watch('**/*.html').on('change', bs.reload);
    gulp.watch('**/*.js').on('change', bs.reload);
});

// browswer sync
gulp.task('browser-sync', function () {
    bs.init({
        server: {
            baseDir: './'
        },
        notify: {
            styles: {
                top: 'auto',
                bottom: '0'
            }
        }
    });
});

gulp.task('default', ['watch']);
