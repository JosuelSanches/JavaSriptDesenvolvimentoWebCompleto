const porta = 3009

const express = require('express')
const app = express()

app.get('/produtos', (req, res, next)=>{
    console.log('Middleware 1...')
    next()
})
app.get('/produtos', (req, res, next)=>{
    res.send({nome: 'JBL Boobox 3', preco: 2500.00}) // Converte para JSON
})

app.listen(porta, ()=>{
    console.log(`Servidor executando na porta ${porta}.`)
})