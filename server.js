const express = require('express')
const app = express()

app.set('view engine', 'ejs')

app.get('/', function (req, res) {
    const items = [
        {
            title: 'D',
            message: 'Desenvolver aplicações/serviçoes de forma fácil'
        },
        {
            title: 'E',
            message: 'EJS usa JavaScript para renderizar HTML'
        },
        {
            title: 'M',
            message: 'Muito fácil de usar'
        },
        {
            title: 'A',
            message: 'Amado por muitos devs'
        },
        {
            title: 'I',
            message: 'install EJS'
        },
        {
            title: 'S',
            message: 'Sintaxe simples'
        },
    ]

    const subtitle = 'Uma linguagem de modelagem para criação de página HTML utilizando JS'

    res.render('pages/index', {
        qualitys: items,
        subtitle: subtitle
    })
})

app.get('/sobre', function (req, res) {
    res.render('pages/about')
})

app.listen(8080)

console.log('Rodando...')