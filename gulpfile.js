/**
 * Created by root on 17-7-28.
 */
var gulp = require("gulp"),
 uglify = require("gulp-uglify"),
 miniCss = require("gulp-minify-css"),
 rename = require("gulp-rename"),
 del = require("del");

gulp.task("script",function () {
    gulp.src("components/page/*.js")
        .pipe(uglify())
        .pipe(gulp.dest("compress/js/"))
});

gulp.task("css-mini",function () {
    gulp.src("dist/*.css")
        .pipe(miniCss())
        .pipe(gulp.dest("compress/css/"))
});

gulp.task("clean",function () {
    del(["compress/css","compress/js"])
});

gulp.task("default",["clean"],function () {
    gulp.start("css-mini","script");
});

