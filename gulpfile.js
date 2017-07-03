var gulp = require('gulp'); 
var concat      = require('gulp-concat');
var stripDebug  = require('gulp-strip-debug');
var sass        = require('gulp-sass');
var cleanCSS    = require('gulp-clean-css');

var sass_files = [
  './css/bootstrap/css/bootstrap.min.css',
  './css/palette.scss', 
  './css/app.scss',
  './pages/**/*.scss'
]

gulp.task('sass', function () {
  gulp.src(sass_files)
    .pipe(concat("app.min.css"))
    .pipe(sass())
    .pipe(cleanCSS())
    .pipe(gulp.dest('./dist')); 
});

var js_files = [
	'./js/app.js',
  './pages/**/*.js', 
  './services/*.js'
];

gulp.task('scripts', function() {
  gulp.src(js_files)
    .pipe(concat("app.min.js"))
    .pipe(stripDebug()) 
    .pipe(gulp.dest("./dist/"));

});

var ng_files = [
  './js/angular.min.js',
  './js/angular-route.min.js',
  './js/angular-resource.min.js'
];

gulp.task('angular', function() {
  gulp.src(ng_files)
    .pipe(concat("lib.min.js"))
    .pipe(stripDebug()) 
    .pipe(gulp.dest("./dist/"));
});