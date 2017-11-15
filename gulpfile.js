// Requiring Gulp
var gulp = require('gulp'),
    sass = require('gulp-sass'),                 // Requiring gulp-sass (compiles SCSS)
    sourcemaps = require('gulp-sourcemaps'),     // Requiring sourcemaps (helps working locally)
    autoprefixer = require('gulp-autoprefixer'), // Requiring autoprefixer (adds browser prefixes)
    cssnano = require('gulp-cssnano'),           // Requiring cssnano (minifies CSS)
    imagemin = require('gulp-imagemin');         // Requiring imagemin (lossless image optimization)

// Start stylesheets task
gulp.task('stylesheets', function () {
    gulp.src('source/stylesheets/*.scss') // Get all *.scss files
        .pipe(sourcemaps.init()) // Initialize sourcemap plugin
        .pipe(sass().on('error', sass.logError)) // Compiling sass
        .pipe(autoprefixer('last 2 version')) // Adding browser prefixes
        .pipe(sourcemaps.write()) // Writing sourcemaps
        .pipe(cssnano()) // Compress
        .pipe(gulp.dest('build/stylesheets'));
});

// Start scripts task
gulp.task('scripts', function () {
    gulp.src(['source/scripts/main.js'])
        .pipe(gulp.dest('build/scripts'));
});

// Start images task
gulp.task('images', function () {

    gulp.src('source/images/**')
        .pipe(imagemin())
        .pipe(gulp.dest('build/images'));

});

// Start watch groups of tasks
gulp.task('default', [ 'stylesheets', 'images', 'scripts'], function () {
    gulp.watch('source/stylesheets/**/*.scss', ['stylesheets']); // Watch for SCSS changes
    gulp.watch('source/images/**/*', ['images']); // Watch for image changes
    gulp.watch('source/scripts/**/*.js', ['scripts']); // Watch for JS changes
});

// Start build task
gulp.task('build', ['stylesheets', 'images', 'scripts'], function () {
});
