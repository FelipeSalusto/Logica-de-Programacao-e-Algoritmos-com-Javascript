const frm = document.querySelector("form")
const resp = document.querySelector("h2")

frm.addEventListener("submit", (e) => {
    e.preventDefault()

    const vPermitida = Number(frm.inVpermitida.value)
    const vCondutor = Number(frm.inVcondutor.value)

    const tolerancia = vPermitida + (vPermitida * 0.2)

    if (vCondutor <= vPermitida) {
        resp.innerText = `Situação: Sem Multa`
    } else if (vCondutor <= tolerancia) {
        resp.innerText = `Situação: Multa Leve`
    } else {
        resp.innerText = `Situação: Multa Grave`
    }
})