const prompt = require("prompt-sync")()

const numero = Number(prompt("Número (centena): ")) // Exemplo de número digitado: 568

if (numero < 100 || numero >= 1000) {
    console.log("Erro... O número digitado deve ser uma centena!") // Apresenta esse erro se o número não for uma centena
    return
}

const num1 = Math.floor(numero / 100) // A constante num1 recebe o valor de 5, pois 568 / 100 = 5.68, mas é arredondado para 5
const sobra = numero % 100 // A constante sobra recebe o resto da divisão de 568 / 100 = 68

const num2 = Math.floor(sobra / 10) // A constate num2 recebe o valor de 68 / 10 = 6, pois o valor é arredondado para baixo

const num3 = sobra % 10 // A constante num3 recebe o valor de 8 que é o resto da divisão de 68 / 10

console.log(`Número Invertido: ${num3}${num2}${num1}`) // Aqui é exibido os valores ao contrario do que foi digitado pelo usuário, neste caso 865