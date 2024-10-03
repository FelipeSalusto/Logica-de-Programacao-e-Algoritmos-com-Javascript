const prompt = require("prompt-sync")()

const pesoKg = Number(prompt("Peso da Ração(Kg): "))
const consumo = Number(prompt("Consumo diário(gr): "))

const pesoGr = pesoKg * 1000 // Cria uma variável auxiliar
const duracao = Math.floor(pesoGr / consumo) // Cálculo das respostas
const sobra = pesoGr % consumo

console.log(`Duração: ${duracao} dias`)
console.log(`Sobra: ${sobra}gr`)