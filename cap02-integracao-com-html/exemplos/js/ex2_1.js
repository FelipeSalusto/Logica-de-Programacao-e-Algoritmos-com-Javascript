// Cria referência ao form e ao elemento h3 (onde será exibida a resposta)
const frm = document.querySelector("form") // Selecionando a tag <form> e adicionando a variável 'frm'
const resp = document.querySelector("h3") // Selecionando a tag <h3> e adicionando a variável 'resp'

// Cria um "ouvinte" de evento, acionado quando o botão submit for clicado
frm.addEventListener("submit", (e) => {
    const nome = frm.inNome.value // Obtém o nome digitado no form
    resp.innerText = `Olá, ${nome}!` // Exibe a resposta do programa

    e.preventDefault() // Evita o envio do form
})