const frm = document.querySelector("form")
const resp = document.querySelector("h2")

frm.addEventListener("submit", (e) => {

    e.preventDefault()

    const num = Number(frm.inNumero.value)
    const raiz = Math.sqrt(num)

    if (Number.isInteger(raiz)) {
        resp.innerText = `Raiz quadrada : ${raiz}`
    }
    else {
        resp.innerText =`Não há raiz exata para ${num}`
    }
})

/* Dentro da condição if() também pode ser realizado o cálculo raiz % 1 == 0 ficando 

if (raiz % 1 == 0) {
    Código
} 
else {
    Código
 }

*/