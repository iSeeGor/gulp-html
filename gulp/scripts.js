const concat = require('gulp-concat'),
      uglify = require('gulp-uglify'),
      babel = require("gulp-babel");

const jsFiles = [
    'src/js/_common.js',
    'src/js/_components.js',
]

module.exports = function(){

    $.gulp.task('js:dev', () =>{

        return Promise.all([
            $.gulp.src(jsFiles)
            .pipe(concat('scripts.js'))
            .pipe($.gulp.dest("assets/js"))
            .pipe($.browserSync.stream()),
        ]);

    });

    $.gulp.task('js:build', () =>{

        return Promise.all([
            $.gulp.src("src/js/scripts.js")
            .pipe(babel())
            .pipe(uglify())
            .pipe($.gulp.dest("assets/js")),
            
            $.gulp.src("src/js/vendor/**/*.js")
            .pipe(concat('vendor.js'))
            .pipe($.gulp.dest("assets/js/vendor"))
        ]);

    });

};