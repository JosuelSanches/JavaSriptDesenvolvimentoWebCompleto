const porta = 3009

const express = require('express')
const app = express()

app.get('/produtos', (req, res, next)=>{
    console.log('Middleware 1...')
    next()
})
const bodyParser = require('body-parser')
const bancoDeDados = require('./bancoDeDados')

app.use(bodyParser.urlencoded({extended: true}))

app.get('/produtos', (req, res, next)=>{
    res.send(bancoDeDados.getProdutos())
})
app.get('/produto/:id', (req, res, next)=>{
    res.send(bancoDeDados.getProduto(req.params.id))
})
app.post('/produtos', (req, res, next)=>{
    const produto = bancoDeDados.salvarProduto({
        nome: req.body.nome,
        preco: req.body.preco
    })
    res.send(produto) //JSON
})
app.put('/produtos/:id', (req, res, next)=>{
    const produto = bancoDeDados.salvarProduto({
        id: req.params.id,
        nome: req.body.nome,
        preco: req.body.preco
    })
    res.send(produto) //JSON
})

app.listen(porta, ()=>{
    console.log(`Servidor executando na porta ${porta}.`)
})