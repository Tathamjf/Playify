// MENU
let menu = document.getElementById("menu")

let iconeBarras = document.getElementById("icone-barras")
let iconeX = document.getElementById("icone-x")

function abrirFecharMenu() {
    // se o menu está fechado
    if (menu.classList.contains("menu-fechado")) {
        // Abrir o menu
        menu.classList.remove("menu-fechado")

        // Mostrar icone-x 
        iconeX.style.display = "inline"

        // Esconder icone-barras
        iconeBarras.style.display = "none"

    } else {
        // Fechar o menu
        menu.classList.add("menu-fechado")

        // Esconder icone-x 
        iconeX.style.display = "none"

        // MOstrar icone-barras
        iconeBarras.style.display = "inline"
    }
}

window.onresize = () => {
    menu.classList.remove("menu-fechado")
    iconeX.style.display = "inline"   
    iconeBarras.style.display = "none"
}



// FORMULÁRIO
const solicitarContato = (event) => {
    // Pegar valores dos inputs
    let valorNome = document.getElementById("campo-nome").value
    let valorTelefone = document.getElementById("campo-telefone").value
    let valorEmail = document.getElementById("campo-email").value

    // Organizar objeto com os valores
    let dadosForm = {
        nome: valorNome,
        telefone: valorTelefone,
        email: valorEmail
    }

    // Enviar requição para a API 
    // Método HTTP POST - Create -> Cadastrar ou criar 
    fetch("http://localhost:3000/solicitarContato", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(dadosForm)
    })
    .then(resposta => {
        console.log(resposta)

        // Limpar os campos
        document.querySelector("#contato form").reset()

        // Mostrar alert com msg de sucesso
        alert("Solicitação cadastrada")
    })
    .catch(erro => {
        // CASO ERRO - alert com msg erro
        console.erro(erro)
        alert("Erro na requisição")
    })
    
    event.preventDefault()
}