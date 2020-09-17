const express = require('express')
const routes = express.Router() // responsável pela criação das rotas
const ProductController = require('./app/controllers/ProductController')

routes.get('/', ( req, res ) => {
    return res.render('layout.njk')
})

routes.get('/products/create', ProductController.create )
routes.post('/products', ProductController.post)


routes.get('/ads/create', ( req, res ) => {
    return res.redirect('/products/create.njk')
})

module.exports = routes

/*
HTTP VERBS

GET: Receber RESOURCE
POST: Criar um novo RESOURCE com dados enviados
PUT: Atualizar RESOURCE
DELETE: Deletar RESOURCE
*/