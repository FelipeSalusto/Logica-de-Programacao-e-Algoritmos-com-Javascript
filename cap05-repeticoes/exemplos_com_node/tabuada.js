// Tabuada com nodejs

const prompt = require("prompt-sync")()
let numero = Number(prompt("Digite um número:"))
let resposta = ""
for (let i = 1; i <= 10; i++) {
    resposta = `${resposta}${numero} X ${i} = ${numero * i}\n`
}

console.log(resposta)