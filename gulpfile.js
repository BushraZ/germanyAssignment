// let webpack = require('webpack-stream');
// // require gulp module
// let gulp = require("gulp");
// let OUT_DIR = './build';

//    // create a task to copy static html to the build folder
// gulp.task('copy:html', () => gulp.src('./template/index.html').pipe(gulp.dest(OUT_DIR)));
// // copy css to build folder
// gulp.task('copy:css', () => gulp.src('./template/style.css').pipe(gulp.dest(OUT_DIR)));
// // if any assets are present, copy them to the build folder as well
// gulp.task('copy:assets', () => gulp.src('./assets/*').pipe(gulp.dest(OUT_DIR + '/assets/')));

// gulp.task('webpack', () => {
//     return gulp.src('build/')
//     .pipe(webpack(require('./webpack.config.js')))
//     .pipe(gulp.dest('build/'));
//     });
//     gulp.task('default', ['copy:html', 'copy:css', 'copy:assets', 'webpack']); 


const gulp = require("gulp");
var sass = require('gulp-sass');
const browserSync = require('browser-sync').create();
const  OUT_DIR = './build';

function html(){
    return gulp.src('./template/index.html').pipe(gulp.dest(OUT_DIR))
}
gulp.task(html);

function css(){
    return gulp.src('./template/style.css').pipe(gulp.dest(OUT_DIR))
}
gulp.task(css);

function assets(){
    return  gulp.src('./assets/*').pipe(gulp.dest(OUT_DIR + '/assets/'))
}
gulp.task(assets);

function sassTask(){
   return gulp.src('sass/**/*.scss')
            .pipe(sass().on('error', sass.logError))
            .pipe(gulp.dest((OUT_DIR + '/assets/')));// './css/'));
   
    
    //Watch task
    // gulp.task('default',function() {
    //     gulp.watch('sass/**/*.scss',['styles']);
    // });
}
gulp.task(sassTask);

function watchSass(){
    return gulp.watch('sass/**/*.scss',['sassTask']);
}
gulp.task(watchSass);

// function webpackTask(){
//     return gulp.src('build/')
//         .pipe(webpackTask(require('./webpack.config.js')))
//         .pipe(gulp.dest(OUT_DIR + '/assets/'))//(gulp.dest('build/'));
//        // .pipe(browserSync.stream());
// }
// gulp.task(webpackTask);

gulp.task('start', gulp.series(html, css,assets,sassTask));//webpackTask 
