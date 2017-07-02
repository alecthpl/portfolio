'use strict';

// require node modules
var gulp = require('gulp'),
    sass = require('gulp-sass'),
    maps = require('gulp-sourcemaps'),
    autoprefixer = require('gulp-autoprefixer'),
    bs = require('browser-sync').create();

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
