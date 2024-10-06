const frm = document.querySelector("form")
const resp1 = document.querySelector("#outResp1")
const resp2 = document.querySelector("#outResp2")

frm.addEventListener("submit", (e) => {
    e.preventDefault()

    // Limpar o segundo campo de resposta
    resp2.innerText = ""

    // Ler o valor digitado no campo de formulário
    const valor = Number(frm.inValor.value)

    // Caso valor insuficiente
    if (valor < 1.00) {
        alert("Valor insuficiente (no mínimo, R$ 1.00)")
        frm.inValor.focus()
        return
    }

    // Declaração de variáveis
    let tempo
    let troco

    // Cria as condições para verificar tempo e troco
    if (valor >= 3.00) {
        tempo = 120
        troco = valor - 3.00
    } else if (valor >= 1.75) {
        tempo = 60
        troco = valor - 1.75
    } else {
        tempo = 30
        troco = valor - 1.00
    }

    // Exibe as respostas
    resp1.innerText = `Tempo: ${tempo} min`
    if (troco > 0) {
        resp2.innerText = `Troco: ${troco.toFixed(2)}`
    }
})