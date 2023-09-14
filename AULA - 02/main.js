'use strict'

const forma1 = document.getElementById('forma1')
const forma2 = document.getElementById('forma2')
const forma3 = document.getElementById('forma3')
const forma4 = document.getElementById('forma4')
const forma5 = document.getElementById('forma5')
const forma6 = document.getElementById('forma6')
const forma7 = document.getElementById('forma7')

const container = document.getElementById('container')
const item = document.getElementById('item')
const button = document.getElementById('button')
const footer = document.getElementById('footer')

function trocarCor () {
    forma1.classList.toggle ('roxo')
}

function trocarForma () {
    forma2.classList.toggle ('circulo')
}

function girar () {
    forma3.classList.toggle ('animation')
}

function excluir () {
    container.classList.add('sumir')
    footer.classList.add('display')
}

function adicionar () {
    container.classList.remove('sumir')
    footer.classList.remove('display')
}

function inverter () {
    forma5.classList.toggle('inverter')
}

function foto () {
    forma6.classList.toggle('foto')
}

function ordem () {
    item.classList.toggle('mudar-posicao')
}

forma1.addEventListener('click', trocarCor)
forma2.addEventListener('click', trocarForma)
forma3.addEventListener('click', girar)
forma4.addEventListener('click', excluir)
forma5.addEventListener('click', inverter)
forma6.addEventListener('click', foto)
forma7.addEventListener('click', ordem)
button.addEventListener('click', adicionar)