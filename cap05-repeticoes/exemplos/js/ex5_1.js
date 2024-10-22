const frm = document.querySelector("form")
const resp = document.querySelector("pre")

frm.addEventListener("submit", (e) => {
    e.preventDefault()

    const numero = Number(frm.inNumero.value)

    // Variável do tipo string para concatenar a resposta
    let resposta = ""

    // Cria um laço de repetição (i começa em 1 e é incrementado até 10)
    for (let i = 1; i <= 10; i++) {
        // A variável resposta vai acumulando os novos conteúdos (nos 2 formatos)
        //  resposta = resposta + numero + " X " + i + " = " + (numero * i) + "\n"
        resposta = `${resposta}${numero} X ${i} = ${numero * i}\n`
    }
    // O conteúdo da tag pre é alterado para exibir a tabuada do número
    resp.innerText = resposta
})