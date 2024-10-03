const frm = document.querySelector("form")
const resp = document.querySelector("h2")

frm.addEventListener("submit", (e) => {
    e.preventDefault()

    const horario = Number(frm.inHorario.value)
    let horaFranca = horario + 5
    if (horaFranca > 24) {
        horaFranca = horaFranca - 24
    }
    resp.innerText = `Hora na França ${horaFranca.toFixed(2)}`
})