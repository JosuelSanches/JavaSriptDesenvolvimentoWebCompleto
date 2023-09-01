const gulp = require('gulp')
const { series, parallel } = require('gulp')
// const { series } = require('gulp')

const series = gulp.series

const antes = cb => {
    console.log('tarefa antes!')
    return cb()
}

const antes2 = cb => {
    console.log('tarefa antes 2!')
    return cb()
}

function copiar(cb){
    console.log('Tarefa de copiar.')
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