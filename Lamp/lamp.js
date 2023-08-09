'use strict'

const botaoLigar = document.getElementById('ligar')
const botaoDesligar = document.getElementById('desligar')
const lamp = document.getElementById('lamp')

function ligar () {
    lamp.src = './img/ligada.jpg'
}

function desligar () {
    lamp.src = './img/desligada.jpg'
}

function quebrar () {
    lamp.src = './img/quebrada.jpg'
}

botaoLigar.addEventListener('click', ligar)
botaoDesligar.addEventListener('click', desligar)
lamp.addEventListener('dblclick', quebrar)