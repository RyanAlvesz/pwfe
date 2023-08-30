'use strict'

const pessoas = [

    {
        nome: 'Alissa',
        imagem: 'alissa.jpg',
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
    },

    {
        nome: 'Liz',
        imagem: 'eliza.jpg',
        mensagem: 'Já passei no mercado',
        contato: 'Elizabeth',
        tempo: 'Há 3 horas',
        quantidade: '7'
    },

    {
        nome: 'Jihyo',
        imagem: 'jihyo.jpg',
        mensagem: 'Amei o presente!',
        contato: 'Jihyo',
        tempo: 'Há 4 horas',
        quantidade: '5'
    },

    {
        nome: 'Marina',
        imagem: 'marina.jpg',
        mensagem: 'Boa noite!',
        contato: 'Marina Sena',
        tempo: 'Há 6 horas',
        quantidade: '1'
    },

    {
        nome: 'Nath',
        imagem: 'natalia.jpg',
        mensagem: 'Sim hahaha',
        contato: 'Natália',
        tempo: 'Há 1 dia',
        quantidade: '10'
    },

    {
        nome: 'Sydney',
        imagem: 'sydney.jpg',
        mensagem: 'KKKKKKKKKKKK',
        contato: 'Sidney Faculdade',
        tempo: 'Há 1 dia',
        quantidade: '2'
    },

    {
        nome: 'Mãe',
        imagem: 'talita.jpg',
        mensagem: 'Leva o casaco',
        contato: 'Talita',
        tempo: 'Há 1 dia',
        quantidade: '10'
    }

]

const criarCard = (pessoa) => {

    const card = document.createElement('div')
    card.classList.add('card')

    const img = document.createElement('img')
    img.src = `./img/${pessoa.imagem}`
    img.alt = pessoa.nome

    const info = document.createElement('div')
    info.classList.add('info')

    const nomeContainer = document.createElement('div')
    nomeContainer.classList.add('nome-container')

    const nome = document.createElement('h3')
    nome.classList.add('nome')
    nome.textContent = pessoa.nome

    const qntMsg = document.createElement('span')
    qntMsg.classList.add('qnt-msg')
    qntMsg.textContent = pessoa.quantidade

    const mensagem = document.createElement('p')
    mensagem.classList.add('mensagem')
    mensagem.textContent = pessoa.mensagem

    const tempo = document.createElement('p')
    tempo.classList.add('tempo')
    tempo.textContent = pessoa.tempo

    const contatoCard = document.createElement('div')
    contatoCard.classList.add('contato')

    const contato = document.createElement('p')
    contato.textContent = pessoa.contato

    card.appendChild(img)
    card.appendChild(info)
    card.appendChild(tempo)
    card.appendChild(contatoCard)
    info.appendChild(nomeContainer)
    info.appendChild(mensagem)
    nomeContainer.appendChild(nome)
    nomeContainer.appendChild(qntMsg)
    contatoCard.appendChild(contato)

    return card

}

const mostrarCards = (pessoa) => {

    const containerChat = document.getElementById('container-chat')
    const card = criarCard(pessoa)
    containerChat.appendChild(card)

} 

pessoas.forEach(mostrarCards)
