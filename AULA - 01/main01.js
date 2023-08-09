// Evitar erros e deixar restrito. Rigoroso.

'use strict'

// Declarando variáveis

// 3 - var   -> Mutável  -> Global
// 2 - let   -> Mutável  -> Bloco
// 1 - const -> Imutável -> Bloco

// Para utilizar função utilize () -> A função sempre é executada quando solicitada

function trocarTitulo () {

    // Criando variável e selecionando tag por ID
    const tituloPagina = document.getElementById('titulo')

    // Criando variável e definindo que o conteúdo o usuário irá digitar 
    let tituloDigitado = prompt('Digite um título')

    if (tituloDigitado == ''){
            tituloDigitado = 'Ryan'
        }

    // Alterando o texto da página
    tituloPagina.textContent = tituloDigitado

}

// Criando variável e selecionando tag por ID
const botaoTrocarTitulo = document.getElementById('trocar-titulo')

// Adicionando evento que executa função
botaoTrocarTitulo.addEventListener('click', trocarTitulo)

// ========================================================

function cadastrar () {

    const nome = document.getElementById('nome')
    const idade = document.getElementById('idade')
    const cidade = document.getElementById('cidade')
    const media = document.getElementById('media')

    let nomeDigitado = prompt('Digite seu nome')

    while(nomeDigitado == ''){
        nomeDigitado = prompt('Digite seu nome')
    }

    nome.textContent = 'Nome: ' + nomeDigitado

    let idadeDigitada = prompt('Digite sua idade')
    idade.textContent = `Idade: ${idadeDigitada}`

    let cidadeDigitada = prompt('Digite sua cidade')
    cidade.textContent = 'Cidade: ' + cidadeDigitada

    let mediaDigitada = prompt('Digite sua média')
    media.textContent = `Média: ${mediaDigitada}`

    if (mediaDigitada >= 5){
        media.classList.add('azul')
    }else{
        media.classList.add('vermelho')
    }
}

const botaoCadastrar = document.getElementById('botao-cadastrar')
botaoCadastrar.addEventListener('click', cadastrar)