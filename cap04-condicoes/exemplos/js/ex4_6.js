const frm = document.querySelector("form")
const resp1 = document.querySelector("#outResp1")
const resp2 = document.querySelector("#outResp2")
const resp3 = document.querySelector("#outResp3")

frm.addEventListener("submit", (e) => {

    e.preventDefault()

    // Utilizado para resetar os valores a cada submissão
    resp1.innerText = ""
    resp2.innerText = ""
    resp3.innerText = ""

    const saque = Number(frm.inSaque.value)

    if (saque % 10 != 0) {
        alert(`Valor inválido para notas disponíveis (R$ 10. 50 e 100)`)
        frm.inSaque.focus()
        return
    }
    // Utilizando como exemplo o valor de R$ 490 para saque
    const notasCem = Math.floor(saque / 100) // 4 notas de 100
    let resto = saque % 100 // 90

    const notasCinquenta = Math.floor(resto / 50) // 1 nota de 50
    resto = resto % 50 // 40

    const notasDez = Math.floor(resto / 10) // 4 notas de 10

    if (notasCem > 0) {
        resp1.innerText = `Notas de R$ 100: ${notasCem}`
    }
    if (notasCinquenta > 0) {
        resp2.innerText = `Notas de R$ 50: ${notasCinquenta}`
    }
    if (notasDez > 0) {
        resp3.innerText = `Notas de R$ 10: ${notasDez}`
    }
})