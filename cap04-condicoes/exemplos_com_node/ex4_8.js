const prompt = require("prompt-sync")()

const valor = Number(prompt("Valor da compra: "))

const aux = Math.floor(valor/20) // Essa constante auxiliar serve para verificar a quantidade de parcelas que será dividido o valor da compra, o valor é dividido por 20 pois cada valor de parcela deve ser no minimo de 20 reais, utilizando a função Math o resultado é arredondado para baixo, por exemplo: digitando o valor da compra de R$ 150 / 20 o resultado seria 7.5, arredondando para baixo o valor fica igual a 7.

if (aux == 0) {
    parcelas = 1
} else if (aux > 6) { // No exemplo acima como o valor da constante aux é igual a 7, essa parte do código será executada
    parcelas = 6 // Como o valor máximo de parcelas é de 6x, o valor total da compra neste caso será dividido por 6
} else {
    parcelas = aux
}

const valorParcela = valor / parcelas // Exemplo: 150 / 6 = R$ 25,00

console.log(`Pode pagar em ${parcelas}x de R$${valorParcela.toFixed(2)}`)