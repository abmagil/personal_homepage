var concat     = require('gulp-concat');
var gulp       = require('gulp');
var livereload = require('gulp-livereload');
var merge      = require('merge-stream');
var moment     = require('moment');
var path       = require('path');
var pug        = require('gulp-pug');
var scss       = require('gulp-scss');
var wrap       = require('gulp-wrap');
var jobsData   = require('./my-story');


gulp.task('reload', function() {
  jobsData = require('./my-story');
});

gulp.task('compile:pug', function() {
  gulp.src('src/templates/_*.pug')
    .pipe(pug())
    .pipe(gulp.dest(''));

  gulp.src('index.pug')
    .pipe(pug({locals: jobsData}))
    .pipe(gulp.dest('build/'))
    .pipe(livereload());
});

gulp.task('copy', function(){
  gulp.src('src/css/*.css')
    .pipe(gulp.dest('build/css/'));
  gulp.src('src/img/*')
    .pipe(gulp.dest('build/img/'));
});

gulp.task('compile:css', function() {
  gulp.src("src/css/application.scss")
  .pipe(scss())
  .pipe(concat('application.css'))
  .pipe(gulp.dest("build/css/"))
  .pipe(livereload());
})

gulp.watch('index.pug', ['compile:pug']);
gulp.watch('src/templates/*.pug', ['compile:pug']);
gulp.watch('gulpfile.js', ['all']);
gulp.watch('src/css/*.scss', ['compile:css'])
gulp.watch('./my-story.js', ['reload', 'compile:pug'])

gulp.task("watch", function() {
  livereload.listen();
})

// Default task
gulp.task('all', ['copy', 'compile:pug', 'compile:css']);
gulp.task('default', ["reload", "watch"])

