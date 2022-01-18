'use strict';
const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
gulp.task('default', () => {
    gulp.watch(["./sass/**/*.scss"], function(){
        return gulp.src('./sass/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('../dst/styles/'));
    })
})