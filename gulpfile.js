'use strict';

var gulp = require('gulp');
var gulpif = require('gulp-if');
var less = require('gulp-less');

gulp.task('default', function() {
  return gulp.src('*.less')
    .pipe(gulpif(/\.less$/, less()))
    .pipe(gulp.dest('dist'));
});
