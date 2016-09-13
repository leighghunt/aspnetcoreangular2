/// <binding Clean='clean' ProjectOpened='copy-deps' />
"use strict";

var gulp = require("gulp"),
    rimraf = require("rimraf"),
    concat = require("gulp-concat"),
    cssmin = require("gulp-cssmin"),
    uglify = require("gulp-uglify"),
    browserSync = require('browser-sync').create();

gulp.task('browser-sync', function() {
    browserSync.init({
        proxy: "localhost:5000",
        files: [
          "Views/**/*.cshtml",
          "wwwroot/app/*.js",
          "wwwroot/app/*.html",
          "wwwroot/css/style.css",
          "wwwroot/js/*.js"
        ]
    });
});

var paths = {
    webroot: "./wwwroot/"
};

paths.js = paths.webroot + "js/**/*.js";
paths.minJs = paths.webroot + "js/**/*.min.js";
paths.css = paths.webroot + "css/**/*.css";
paths.minCss = paths.webroot + "css/**/*.min.css";
paths.concatJsDest = paths.webroot + "js/site.min.js";
paths.concatCssDest = paths.webroot + "css/site.min.css";
paths.npmSrc = "./node_modules/";
paths.npmLibs = paths.webroot + "lib/npmlibs/";

gulp.task("clean:js", function (cb) {
    rimraf(paths.concatJsDest, cb);
});

gulp.task("clean:css", function (cb) {
    rimraf(paths.concatCssDest, cb);
});

gulp.task("clean", ["clean:js", "clean:css"]);

gulp.task("min:js", function () {
    return gulp.src([paths.js, "!" + paths.minJs], { base: "." })
        .pipe(concat(paths.concatJsDest))
        .pipe(uglify())
        .pipe(gulp.dest("."));
});

gulp.task("min:css", function () {
    return gulp.src([paths.css, "!" + paths.minCss])
        .pipe(concat(paths.concatCssDest))
        .pipe(cssmin())
        .pipe(gulp.dest("."));
});

gulp.task("min", ["min:js", "min:css"]);

gulp.task("copy-deps:systemjs", function () {
    return gulp.src(paths.npmSrc + '/systemjs/dist/**/*.*', { base: paths.npmSrc + '/systemjs/dist/' })
         .pipe(gulp.dest(paths.npmLibs + '/systemjs/'));
});

gulp.task("copy-deps:angular2", function () {
    return gulp.src(paths.npmSrc + '/@angular/**/bundles/**/*.js', { base: paths.npmSrc + '/@angular/' })
         .pipe(gulp.dest(paths.npmLibs + '/@angular/'));
});

gulp.task("copy-deps:es6-shim", function () {
    return gulp.src(paths.npmSrc + '/es6-shim/es6-sh*', { base: paths.npmSrc + '/es6-shim/' })
         .pipe(gulp.dest(paths.npmLibs + '/es6-shim/'));
});

gulp.task("copy-deps:rxjs-bundles", function () {
    return gulp.src(paths.npmSrc + '/rxjs/bundles/*.*', { base: paths.npmSrc + '/rxjs/bundles/' })
         .pipe(gulp.dest(paths.npmLibs + '/rxjs/'));
});

gulp.task("copy-deps:rxjs", function () {
    return gulp.src(paths.npmSrc + '/rxjs/**/*.*', { base: paths.npmSrc + '/rxjs/' })
         .pipe(gulp.dest(paths.npmLibs + '/rxjs/'));
});

gulp.task("copy-deps:zone.js", function () {
    return gulp.src(paths.npmSrc + '/zone.js/dist/*.*', { base: paths.npmSrc + '/zone.js/dist/' })
         .pipe(gulp.dest(paths.npmLibs + '/zone.js/'));
});

gulp.task("copy-deps:reflect-metadata", function () {
    return gulp.src(paths.npmSrc + '/reflect-metadata/*.*', { base: paths.npmSrc + '/reflect-metadata/' })
         .pipe(gulp.dest(paths.npmLibs + '/reflect-metadata/'));
});

gulp.task("copy-deps:ng2-file-upload", function () {
    return gulp.src(paths.npmSrc + '/ng2-file-upload/bundles/*.*', { base: paths.npmSrc + '/ng2-file-upload/bundles/' })
         .pipe(gulp.dest(paths.npmLibs + '/ng2-file-upload/'));
});

/*
gulp.task("copy-deps:ng2-bootstrap", function () {
    return gulp.src(paths.npmSrc + '/ng2-bootstrap/*.*', { base: paths.npmSrc + '/ng2-bootstrap/' })
         .pipe(gulp.dest(paths.npmLibs + '/ng2-bootstrap/'));
});
*/

gulp.task("copy-deps", ["copy-deps:rxjs", "copy-deps:rxjs-bundles", 'copy-deps:angular2', 'copy-deps:systemjs', 'copy-deps:es6-shim', 'copy-deps:zone.js', 'copy-deps:reflect-metadata', 'copy-deps:ng2-file-upload' /*, 'copy-deps:ng2-bootstrap'*/ ]);
