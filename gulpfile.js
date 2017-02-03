var gulp      = require('gulp');
var webserver = require('gulp-webserver');
var requireOptimize = require('gulp-requirejs-optimize');

//local webserver
gulp.task('webserver', function() {
  gulp.src('./')
    .pipe(webserver({
      fallback: 'index.html',
      directoryListing: false,
      livereload: true,
      open: true
    }));
});

//watch task
gulp.task('watch', function(){
  gulp.watch(['index.htm', 'js/app.js', 'js/layer-tree.js', 'css/app.css']);
});

//default task
gulp.task('default', ['webserver', 'watch']);