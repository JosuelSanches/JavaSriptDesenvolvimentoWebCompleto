const { series} = require('gulp')
const gulp = require('gulp')
const concat = require('gulp-concat')
const uglify = require('gulp-uglify')
const babel = require('gulp-babel')

function transformacaoJs(cb) {
    gulp.src('src/**/*.js')
        .bipe(babel({
            coments: false,
            presents: ["env"]
        }))
        .pipe(uglify())// Unifica o codigo em uma linha
        .on('err', err=> console.log(err))
        .pipe(concat('codigo.min.js'))
        .pipe(gulp.dest('build'))
        function fim(cb){
            console.log('Fim...')
            return cb()

    }
}

exports.default = series(transformacaoJs, fim)