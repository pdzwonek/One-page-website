var gulp = require("gulp");

var watch = require("gulp-watch");

var sass = require("gulp-sass");

var sourcemaps = require("gulp-sourcemaps");


//kompilacja sassa na css!
gulp.task("sass", function(){
    return gulp.src("scss/main.scss")
    .pipe(sourcemaps.init())
    .pipe(sass().on("error", sass.logError))//zeby nam nie wywalal w konsoli
    .pipe(sass({
        outputStyle:"compressed"
    }))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest("css"))//wysle do tego folderu i nazwie domyslnie style.css
});

//tworzymy task z watcherem

gulp.task("watch", function(){
    gulp.watch("scss/*.scss", ["sass"]);//wyswietli blad jak znajdzie
});
