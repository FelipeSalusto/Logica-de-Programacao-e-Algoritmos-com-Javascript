const prompt = require("prompt-sync")() // Adiciona pacote prompt-sync

const pessoas = Number(prompt("N° Pessoas: "))
const peixes = Number(prompt("N° Peixes: "))

let pagar 
if (peixes <= pessoas) {
    pagar = pessoas * 20
} else {
    pagar = (pessoas * 20) + ((peixes - pessoas) * 12)
}

console.log(`Pagar R$ R$ ${pagar.toFixed(2)}`)