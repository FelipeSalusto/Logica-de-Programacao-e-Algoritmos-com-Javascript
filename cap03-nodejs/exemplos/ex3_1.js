const prompt = require("prompt-sync")() // Adiciona pacote de entrada de dados

const num1 = Number(prompt("1° Número: "))
const num2 = Number(prompt("2° Número: "))

const soma = num1 + num2

console.log(`A soma é: ${soma}`)