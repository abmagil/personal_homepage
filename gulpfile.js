var path       = require('path');
var gulp       = require('gulp');
var wrap       = require('gulp-wrap');
var concat     = require('gulp-concat');
var merge      = require('merge-stream');
var handlebars = require('gulp-handlebars');
var scss       = require("gulp-scss");

gulp.task('templates', function() {


  // Assume all partials start with an underscore
  // You could also put them in a folder such as source/templates/partials/*.hbs
  var partials = gulp.src(['src/templates/_*.hbs'])
    .pipe(handlebars())
    .pipe(wrap('Handlebars.registerPartial(<%= processPartialName(file.relative) %>, Handlebars.template(<%= contents %>));', {}, {
      imports: {
        processPartialName: function(fileName) {
          // Strip the extension and the underscore
          // Escape the output with JSON.stringify
          return JSON.stringify(path.basename(fileName, '.js').substr(1));
        }
      }
    }));

  var templates = gulp.src('src/templates/**/[^_]*.hbs')
    .pipe(handlebars())
    .pipe(wrap('Handlebars.template(<%= contents %>)'));

  // Output both the partials and the templates as build/js/templates.js
  return merge(partials, templates)
    .pipe(concat('templates.js'))
    .pipe(gulp.dest('build/js/'));
});

gulp.task('copy', function(){
  gulp.src('node_modules/handlebars/dist/handlebars.runtime.js')
    .pipe(gulp.dest('build/js/'));

  gulp.src('index.html')
    .pipe(gulp.dest('build/'));

  gulp.src('src/css/normalize.css')
    .pipe(gulp.dest('build/css/'));
});

gulp.task('compile:css', function() {
  gulp.src(
      "src/css/*.scss"
  ).pipe(scss())
  .pipe(concat('application.css'))
  .pipe(gulp.dest("build/css/"));
})

// Default task
gulp.task('default', ['copy', 'templates', 'compile:css']);


gulp.watch('src/templates/*.hbs', ['default']);
gulp.watch('index.html', ['default']);
gulp.watch('gulpfile.js', ['default']);
gulp.watch('src/css/*.scss', ['compile:css'])
