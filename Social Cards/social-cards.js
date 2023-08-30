'use strict'

const pessoas = [

    {
        nome: 'Alissa',
        imagem: 'Alissa.jpg',
        mensagem: 'Já levei as crianças para a escola',
        contato: 'Vida',
        tempo: 'Há 1 hora',
        quantidade: '2'
    },

    {
        nome: 'Clarissa',
        imagem: 'clarissa.jpg',
        mensagem: 'Me passa seu pix',
        contato: 'Clarrisa Trabalho',
        tempo: 'Há 2 horas',
        quantidade: '5'
    }

]

const criarCard = (pessoa) => {

    const card = document.createElement('div')
    card.classList.add('card')

    const img = document.createElement('img')
    img.src = `./img/${pessoa.nome}`

    const info = document.createElement('div')

    const nomeContainer = document.createElement('div')

    const nome = document.createElement('h3')

    const qntMsg = document.createElement('span')

    const mensagem = document.createElement('p')

    const tempo = document.createElement('p')

    const contatoCard = document.createElement('div')

    const contato = document.createElement('p')


}