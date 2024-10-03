const frm = document.querySelector("form")
const resp1 = document.querySelector("#outResp1")
const resp2 = document.querySelector("h3")

frm.addEventListener("submit", (e) => {
    const nome = frm.inNome.value
    const nota1 = Number(frm.inNota1.value)
    const nota2 = Number(frm.inNota2.value)
    const nota3 = Number(frm.inNota3.value)

    const media = (nota1 + nota2 + nota3) / 3

    resp1.innerText = `Sua média é: ${media.toFixed(1)}`

    if (media >= 7) {
        resp2.innerText = `Parábens, ${nome}!`
        resp2.style.color = "green" // utilização do css para alterar a cor no elemento resp2
    } else if (media >= 5) {
        resp2.innerText = `Da para melhorar!`
        resp2.style.color = "orange"
    } else {
        resp2.innerText = `Ops... Você precisa revisar as aulas!`
        resp2.style.color = "red"
    }

    e.preventDefault()
})