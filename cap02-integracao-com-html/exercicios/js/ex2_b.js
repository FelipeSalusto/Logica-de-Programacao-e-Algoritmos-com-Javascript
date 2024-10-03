const frm = document.querySelector("form")
const resp = document.querySelector("h3")

frm.addEventListener("submit", (e) => {
    const valor = Number(frm.inValor.value)
    const tempo = Number(frm.inTempo.value)

    const aPagar = Math.ceil(tempo / 15) * valor // Neste caso o tempo é dividido por 15 para descobrir o número de intervalos de 15 minutos existentes, caso o número seja quebrado o valor é arredondado para cima com a função Math.ceil(), depois disso é feita a multiplicação pelo valor de cada 15 minutos.

    resp.innerText = `Valor a Pagar R$ ${aPagar.toFixed(2)}`

    e.preventDefault()
})