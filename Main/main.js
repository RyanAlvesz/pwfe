'use strict'

const aula = [
    {
        titulo: 'AULA - 01',
        descricao: 'Introdução aos conceitos básicos de Javascript',
        data: '02/08/2023',
        linkAula: './AULA - 01/index.html'
    },
    {
        titulo: 'AULA - 02',
        descricao: 'Exercícios com Javascript',
        data: '09/08/2023',
        linkAula: './AULA - 02/index.html'
    },
    {
        titulo: 'AULA - 03',
        descricao: 'Cálculos com Javascript',
        data: '16/08/2023',
        linkAula: './AULA - 03/index.html'
    },
    {
        titulo: 'AULA - 04',
        descricao: 'Propriedades de Array e criação de elementos HTML',
        data: '23/08/2023',
        linkAula: './AULA - 04/index.html'
    },
    {
        titulo: 'AULA - 05',
        descricao: 'Aula Bacana',
        data: '30/08/2023',
        linkAula: './AULA - 05/index.html'
    },
    {
        titulo: 'AULA - 06',
        descricao: 'Criação de elementos HTML consumindo DOG API',
        data: '06/09/2023',
        linkAula: './AULA - 06/index.html'
    },
    {
        titulo: 'AULA - 07',
        descricao: 'Consumindo ViaCEP API',
        data: '13/09/2023',
        linkAula: './AULA - 07/index.html'
    },
    {
        titulo: 'Atividade - Lâmpada',
        descricao: 'Troca de imagem com Javascript',
        data: '09/08/2023',
        linkAula: './Lamp/lamp.html'
    },
    {
        titulo: 'Atividade - Chat',
        descricao: 'Criação de elementos a partir do Javascript',
        data: '30/08/2023',
        linkAula: './Chat/chat.html'
    },
    {
        titulo: 'Atividade - Harry Potter API',
        descricao: 'Wiki com informações sobre os personagens, poções e feitiços do universo de Harry Potter',
        data: '13/10/2023',
        linkAula: 'https://ryanalvesz.github.io/harry_potter/'
    },
    {
        titulo: 'Atividade - Tony Pizzaria',
        descricao: 'Site responsivo de uma pizzaria',
        data: '25/10/2023',
        linkAula: 'https://ryanalvesz.github.io/tony-pizzaria/'
    }
]

const criarLinha = (aula) => {

    const linha = document.createElement('tr')
    const titulo = document.createElement('td')
    const linkAula = document.createElement('a')
    linkAula.href = aula.linkAula
    linkAula.textContent = aula.titulo
    const descricao = document.createElement('td')
    descricao.textContent = aula.descricao
    const data = document.createElement('td')
    data.textContent = aula.data

    linha.replaceChildren(titulo, descricao, data)
    titulo.appendChild(linkAula)

    return linha
}

const mostrarTabela = (aula) => {
    const tabela = document.getElementById('tabela')
    const linha = criarLinha(aula)
    tabela.appendChild(linha)
}

aula.forEach(mostrarTabela)
