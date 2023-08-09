'use strict'

const ligar = document.getElementById('ligar')
const desligar = document.getElementById('desligar')
const lamp = document.getElementById('lamp')

function ligar () {
    lamp.src = 'ligada.jpg'
}

ligar.addEventListener('click', ligar)