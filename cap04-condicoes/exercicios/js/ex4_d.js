const frm = document.querySelector("form")
const resp1 = document.querySelector("#outResp1")
const resp2 = document.querySelector("#outResp2")

frm.addEventListener("submit", (e) => {
    e.preventDefault()

    const A = Number(frm.A.value)
    const B = Number(frm.B.value)
    const C = Number(frm.C.value)

    if (A + B < C) {
        resp1.innerText = "Não podem formar um triângulo"
    } else if (B + C < A) {
        resp1.innerText = "Não podem formar um triângulo"
    } else if (A + C < B) {
        resp1.innerText = "Não podem formar um triângulo"
    } else {
        resp1.innerText = "Lados podem Formar um triângulo"
    }

    if (A == B && B == C) {
        resp2.innerText = "Tipo: Equilátero"
    } else if (A == B || A == C || B == C) {
        resp2.innerText = "Tipo: Isósceles"
    } else {
        resp2.innerText = "Tipo: Escaleno"
    }
})