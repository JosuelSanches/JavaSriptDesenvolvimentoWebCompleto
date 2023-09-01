const gulp = require('gulp')
const { series, parallel } = require('gulp')
// const { series } = require('gulp')

// const series = gulp.series

const antes = cb => {
    console.log('tarefa antes!')
    return cb()
}

const antes2 = cb => {
    console.log('tarefa antes 2!')
    return cb()
}

function copiar(cb){
    // gulp.src(['pastaA/arquivo1.txt', 'pastaA/arquivo2.txt'])
    gulp.src('pastaA/**/*.txt')
    // .pipe(imagePelaMetade())
    // .pipe(imageEmPretoEBranco())
    // .pipe(tranformacaoA())
    // .pipe(tranformacaoB())
    // .pipe(tranformacaoC())
    /*Essa transformacoes sao so um exemplo para mostrar como o processo ocorre. */
        .pipe(gulp.dest('pastaB'))
    return cb()
}


const fim = cb => {
    console.log('tarefa fim!')
    return cb()
}
module.exports.default = series(
    parallel(antes, antes2),
    copiar,
    fim,
    )