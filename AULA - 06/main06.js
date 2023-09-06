'use strict'

const botaoPesquisar = document.getElementById('botao-pesquisar')
const input = document.getElementById('pesquisa')

const pegarImagens = async () => {
    const pesquisa = document.getElementById('pesquisa').value
    const url = 'https://dog.ceo/api/breed/' + pesquisa + '/images'    
    if (pesquisa == ''){
        url = 'https://dog.ceo/api/breed/hound/images'
    }
    const response = await fetch(url)
    const imagens = await response.json()
    return imagens.message
}

const criarTagImg = (imagem) => {
    const galeria = document.getElementById('galeria')
    const tagImg = document.createElement('img')
    tagImg.src = imagem
    galeria.appendChild(tagImg)
}

const carregarFotos = async () => {
    const galeria = document.getElementById('galeria')
    galeria.replaceChildren('')
    const imagens = await pegarImagens()
    imagens.forEach(criarTagImg)
}

botaoPesquisar.addEventListener('click' , carregarFotos)
input.addEventListener('keydown', (carregarFotos) => {
    
})

carregarFotos()