// script para sempre destacar qual a seção atual:
const secoes = document.querySelectorAll("section");
const links = document.querySelectorAll("nav a");

window.addEventListener("scroll", () => {

    let secaoAtual = "";

    secoes.forEach(secao => {
        const topo = secao.offsetTop - 150;
        const altura = secao.offsetHeight;

        if (window.scrollY >= topo && window.scrollY < topo + altura) {
            secaoAtual = secao.id;
        }
    });

    links.forEach(link => {
        link.classList.remove("ativo");

        if (link.getAttribute("href") === "#" + secaoAtual) {
            link.classList.add("ativo");
        }
    });

});

// validação no formulario de contato: 
const formulario = document.getElementById("formContato");
const status = document.getElementById("mensagemStatus");

formulario.addEventListener("submit", function(event){

    // Impede o envio do formulário
    event.preventDefault();

    const nome = document.getElementById("nome").value.trim();
    const email = document.getElementById("email").value.trim();
    const mensagem = document.getElementById("mensagem").value.trim();

    // Validação do nome
    if(nome.length < 3){
        status.textContent = "O nome deve possuir pelo menos 3 caracteres.";
        status.style.color = "red";
        return;
    }

    // Validação do e-mail
    if(!email.includes("@") || !email.includes(".")){
        status.textContent = "Digite um e-mail válido.";
        status.style.color = "red";
        return;
    }

    // Validação da mensagem
    if(mensagem.length < 10){
        status.textContent = "A mensagem deve possuir pelo menos 10 caracteres.";
        status.style.color = "red";
        return;
    }

    // Sucesso ao enviar a mensagem
    status.textContent = "Mensagem enviada com sucesso!";
    status.style.color = "limegreen";

    formulario.reset();

});