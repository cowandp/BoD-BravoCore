var gulp = require("gulp");
var concat = require("gulp-concat");
var rename = require("gulp-rename");
var uglify = require("gulp-uglify");

var inputs = ["./bravo.js", "./lib/*.js"];

gulp.task("dist", function () {
    return gulp.src(inputs)
        .pipe(concat("bravo.js"))
        .pipe(gulp.dest("dist"))
        .pipe(rename("bravo.min.js"))
        .pipe(uglify())
        .pipe(gulp.dest("dist"));
});

gulp.task('watch', function () {
    return gulp
    // Watch the input folder for change,
    // and run `sass` task when something happens
        .watch(inputs, ['dist'])
        // When there is a change,
        // log a message in the console
        .on('change', function (event) {
            console.log('File ' + event.path + ' was ' + event.type + ', running tasks...');
        });
});

gulp.task("default", ["dist"]);