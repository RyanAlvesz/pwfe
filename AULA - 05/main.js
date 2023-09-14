'use strict'

// Funções puras não interagem com o mundo de fora. Elas precisam de parâmetros e retornam valores
// Responsabilidade única (SOLID) - Funções só executam uma tarefa

// Arrow function - São atribuidas a variáveis - Const variavel = (a, b) => {a + b}

// Jeito atual de liberar array - funcionarios.forEach(funcionarios => console.log(funcionarios.nome))


const funcionario = [
    {
        nome: "Maria Souza",
        cargo: "Designer",
        imagem: "maria.jpg"   
    },
    {
        nome: "João Silva",
        cargo: "Desempregado",
        imagem: "joao.jpg"   
    },
    {
        nome: "Hugo Pereira",
        cargo: "Front-End",
        imagem: "hugo.jpg"   
    },
    {
        nome: "Ana Maria",
        cargo: "Back-End",
        imagem: "ana.jpg"   
    }
]

const criarCard = (funcionario) => {
    const card = document.createElement('div')
    card.classList.add('card')

    const imagem = document.createElement('img')
    imagem.src = `./img/${funcionario.imagem}`
    imagem.alt = funcionario.nome

    const nome = document.createElement('h3')
    nome.textContent = funcionario.nome

    const cargo = document.createElement('p')
    cargo.textContent = funcionario.cargo

    card.appendChild(imagem)
    card.appendChild(nome)
    card.appendChild(cargo)

    return card
}

const mostrarCards = (funcionario) => {

    const cardContainer = document.getElementById('card-container')
    const card = criarCard(funcionario)
    cardContainer.appendChild(card)

}

funcionario.forEach(mostrarCards)