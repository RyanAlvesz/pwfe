'use strict'

const botaoMostrarTodosNumeros = document.getElementById('botao-mostrar-todos-numeros')
const botaoMostrarNumerosPares = document.getElementById('botao-mostrar-numeros-pares')
const botaoMostrarNumerosImpares = document.getElementById('botao-mostrar-numeros-impares')
const botaoMostrarNumerosMultiplos3 = document.getElementById('botao-mostrar-numeros-multiplos-3')
const botaoMostrarNumerosMultiplos3Ou4 = document.getElementById('botao-mostrar-numeros-multiplos-3-ou-4')
const botaoMostrarNumerosMultiplos3E4 = document.getElementById('botao-mostrar-numeros-multiplos-3-e-4')
const botaoMostrarProximoNumero = document.getElementById('botao-mostrar-proximo-numero')
const botaoMostrarProximoNumeroPar = document.getElementById('botao-mostrar-proximo-numero-par')
const botaoMostrarDobro = document.getElementById('botao-mostrar-dobro')

function mostrarTodosNumeros () {
    const numeros = document.getElementById('numeros').value.split(',')
    const container = document.getElementById('container-todos-numeros')

    container.replaceChildren('')
    const ultimoIndice = numeros.length

    for (let indice = 0; indice < ultimoIndice; indice++ ){
        const novoSpan = document.createElement('span')
        novoSpan.textContent = numeros[indice]
        container.appendChild(novoSpan)
    }
}

function mostrarNumerosPares () {
    const numeros = document.getElementById('numeros').value.split(',')
    const container = document.getElementById('container-numeros-pares')

    container.replaceChildren('')
    const ultimoIndice = numeros.length

    for (let indice = 0; indice < ultimoIndice; indice++ ){

        if(numeros[indice] % 2 == 0){
            const novoSpan = document.createElement('span')
            novoSpan.textContent = numeros[indice]
            container.appendChild(novoSpan)
        }
    }

}

function mostrarNumerosImpares () {
    const numeros = document.getElementById('numeros').value.split(',')
    const container = document.getElementById('container-numeros-impares')

    container.replaceChildren('')
    const ultimoIndice = numeros.length

    for (let indice = 0; indice < ultimoIndice; indice++ ){

        if(numeros[indice] % 2 != 0){
            const novoSpan = document.createElement('span')
            novoSpan.textContent = numeros[indice]
            container.appendChild(novoSpan)
        }
    }

}

function mostrarMultiplos3 () {
    const numeros = document.getElementById('numeros').value.split(',')
    const container = document.getElementById('container-numeros-multiplos-3')

    container.replaceChildren('')
    const ultimoIndice = numeros.length

    for (let indice = 0; indice < ultimoIndice; indice++ ){

        if(numeros[indice] % 3 == 0){
            const novoSpan = document.createElement('span')
            novoSpan.textContent = numeros[indice]
            container.appendChild(novoSpan)
        }
    }
}

function mostrarMultiplos3Ou4 () {
    const numeros = document.getElementById('numeros').value.split(',')
    const container = document.getElementById('container-numeros-multiplos-3-ou-4')

    container.replaceChildren('')
    const ultimoIndice = numeros.length

    for (let indice = 0; indice < ultimoIndice; indice++ ){

        if(numeros[indice] % 3 == 0 || numeros[indice] % 4 == 0){
            const novoSpan = document.createElement('span')
            novoSpan.textContent = numeros[indice]
            container.appendChild(novoSpan)
        }
    }
}

function mostrarMultiplos3E4 () {
    const numeros = document.getElementById('numeros').value.split(',')
    const container = document.getElementById('container-numeros-multiplos-3-e-4')

    container.replaceChildren('')
    const ultimoIndice = numeros.length

    for (let indice = 0; indice < ultimoIndice; indice++ ){

        if(numeros[indice] % 3 == 0 && numeros[indice] % 4 == 0){
            const novoSpan = document.createElement('span')
            novoSpan.textContent = numeros[indice]
            container.appendChild(novoSpan)
        }
    }
}

function mostrarProximoNumero () {
    const numeros = document.getElementById('numeros').value.split(',')
    const container = document.getElementById('container-proximo-numero')

    container.replaceChildren('')
    const ultimoIndice = numeros.length

    for (let indice = 0; indice < ultimoIndice; indice++ ){
        const novoSpan = document.createElement('span')
        novoSpan.textContent = Number(numeros[indice]) + 1
        container.appendChild(novoSpan)
    }
}

function mostrarProximoNumeroPar () {
    const numeros = document.getElementById('numeros').value.split(',')
    const container = document.getElementById('container-proximo-numero-par')

    container.replaceChildren('')
    const ultimoIndice = numeros.length

    for (let indice = 0; indice < ultimoIndice; indice++ ){
        if (numeros[indice] % 2 == 0){
            const novoSpan = document.createElement('span')
            novoSpan.textContent = Number(numeros[indice]) + 2
            container.appendChild(novoSpan)
        }else{
            const novoSpan = document.createElement('span')
            novoSpan.textContent = Number(numeros[indice]) + 1
            container.appendChild(novoSpan)
        }
    }
}

function mostrarDobro () {
    const numeros = document.getElementById('numeros').value.split(',')
    const container = document.getElementById('container-dobro')

    container.replaceChildren('')
    const ultimoIndice = numeros.length

    for (let indice = 0; indice < ultimoIndice; indice++){
        const novoSpan = document.createElement('span')
        novoSpan.textContent = Number(numeros[indice]) * 2
        container.appendChild(novoSpan)
    }


}

botaoMostrarTodosNumeros.addEventListener('click', mostrarTodosNumeros)
botaoMostrarNumerosPares.addEventListener('click', mostrarNumerosPares)
botaoMostrarNumerosImpares.addEventListener('click', mostrarNumerosImpares)
botaoMostrarNumerosMultiplos3.addEventListener('click', mostrarMultiplos3)
botaoMostrarNumerosMultiplos3Ou4.addEventListener('click', mostrarMultiplos3Ou4)
botaoMostrarNumerosMultiplos3E4.addEventListener('click', mostrarMultiplos3E4)
botaoMostrarProximoNumero.addEventListener('click', mostrarProximoNumero)
botaoMostrarProximoNumeroPar.addEventListener('click', mostrarProximoNumeroPar)
botaoMostrarDobro.addEventListener('click', mostrarDobro)