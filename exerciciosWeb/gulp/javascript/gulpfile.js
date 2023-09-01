const { series }= require('gulp')
const gulp = require('gulp')
const concat = require('gulp-concat')
const uglify = require('gulp-uglify')
const babel = require('gulp-babel')

function padrao(cb){
    gulp.src('src/**/*.js')
        .bipe(babel({
            coments: false,
            presents: ["env"]
        }))
        .pipe(uglify())// Unifica o codigo em uma linha
        .pipe(concat('codigo.min.js'))
        .pipe(gulp.dest('build'))
    return cb()
}

exports.default = series(padrao)