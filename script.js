const distanciaInput = document.getElementById('distancia')
const tempoInput = document.getElementById('tempo')
const botaoCalcular = document.getElementById('botaoCalcular')
const result = document.getElementById('result')
const kmPercorridos = document.getElementById('kmnPercorrido')
const minPercorridos = document.getElementById('minPercorrido')
const horasPercorridas = document.getElementById('horasPercorridas')
const kmh = document.getElementById('kmh')
const ms = document.getElementById('ms')
const valorNegativo = document.getElementById('valorNegativo')

function calculo(distancia, tempo){
    let resultado = distancia / tempo
    ms.innerText = resultado.toFixed(2) 
    kmh.innerText = (resultado * 3.6).toFixed(1)
    kmPercorridos.innerText = (Number(distanciaInput.value) / 1000).toFixed(1)
    minPercorridos.innerText = Number(tempoInput.value).toFixed(0)
    horasPercorridas.innerText = Number(tempoInput.value / 60).toFixed(0)

}

tempoInput.addEventListener('click', () => {
    valorNegativo.style.display = "none" 
})

distanciaInput.addEventListener('click', () => {
    valorNegativo.style.display = "none" 
})

botaoCalcular.addEventListener('click', (e) => {
    e.preventDefault() 

    let tempo = Number(tempoInput.value) * 60
    let distancia = Number(distanciaInput.value)

    if (tempo <= 0 || distancia <= 0) {
        valorNegativo.style.display = "block"  // mostra o erro
        kmh.innerText = "--"
        ms.innerText = "--"
        kmPercorridos.innerText = "--"
        minPercorridos.innerText = "--"
        horasPercorridas.innerText = "--"
        return
    }

    valorNegativo.style.display = "none" 
    calculo(distancia, tempo)
})