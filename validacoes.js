//marcar campo como erro
function marcarErro(campo, mensagem) {
    campo.style.borderColor = "red";
    campo.style.backgroundColor = "#fee2e2";
    // Mostrar mensagem de erro junto ao campo (em vez de apenas alert)
    let msgId = campo.id + "-erro";
    let msgExistente = document.getElementById(msgId);
    if (!msgExistente) {
        let span = document.createElement("span");
        span.id = msgId;
        span.style.color = "red";
        span.style.fontSize = "0.85em";
        span.style.display = "block";
        campo.parentNode.appendChild(span);
    }
    document.getElementById(msgId).textContent = mensagem;
}

//marcar campo como válido
function marcarValido(campo) {
    campo.style.borderColor = "green";
    campo.style.backgroundColor = "#f0fdf4";
    let msgId = campo.id + "-erro";
    let msgExistente = document.getElementById(msgId);
    if (msgExistente) msgExistente.textContent = "";
}

//validar formato de email
function emailValido(email) {
    // Expressão regular básica para validação de email
    let re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

//verificar se data não é no passado
function dataValida(valorData) {
    if (!valorData) return false;
    let dataEscolhida = new Date(valorData);
    let hoje = new Date();
    hoje.setHours(0, 0, 0, 0);
    return dataEscolhida >= hoje;
}

//VALIDAÇÃO DO FORMULÁRIO DE LOGIN (login.html)
function validarLogin() {
    let username = document.getElementById("username");
    let password = document.getElementById("password");
    let valido = true;

    if (username.value.trim() === "") {
        marcarErro(username, "O username é obrigatório.");
        valido = false;
    } else {
        marcarValido(username);
    }

    if (password.value.trim() === "") {
        marcarErro(password, "A password é obrigatória.");
        valido = false;
    } else if (password.value.length < 4) {
        marcarErro(password, "A password deve ter pelo menos 4 caracteres.");
        valido = false;
    } else {
        marcarValido(password);
    }

    return valido;
}



//VALIDAÇÃO DA PESQUISA DE DISPONIBILIDADE (index.html)
function validarPesquisa() {
    let destino = document.getElementById("destino");
    let data = document.getElementById("data");
    let valido = true;

    if (destino.value.trim() === "") {
        marcarErro(destino, "Introduza um destino ou nome de evento.");
        valido = false;
    } else {
        marcarValido(destino);
    }

    if (data.value === "") {
        marcarErro(data, "Selecione uma data.");
        valido = false;
    } else if (!dataValida(data.value)) {
        marcarErro(data, "A data não pode ser no passado.");
        valido = false;
    } else {
        marcarValido(data);
    }

    return valido;
}

//VALIDAÇÃO DA FINALIZAÇÃO DE RESERVA (reservas.html)
function validarReserva() {
    let nome = document.getElementById("nome");
    let email = document.getElementById("email");
    let destino = document.getElementById("destino");
    let data = document.getElementById("data");
    let valido = true;

    if (nome.value.trim() === "") {
        marcarErro(nome, "O nome completo é obrigatório.");
        valido = false;
    } else if (nome.value.trim().split(" ").length < 2) {
        marcarErro(nome, "Introduza o seu nome e apelido.");
        valido = false;
    } else {
        marcarValido(nome);
    }

    if (email.value.trim() === "") {
        marcarErro(email, "O e-mail de contacto é obrigatório.");
        valido = false;
    } else if (!emailValido(email.value.trim())) {
        marcarErro(email, "Formato de e-mail inválido. Ex: nome@dominio.pt");
        valido = false;
    } else {
        marcarValido(email);
    }

    if (destino.value.trim() === "") {
        marcarErro(destino, "Introduza o destino ou nome do evento.");
        valido = false;
    } else {
        marcarValido(destino);
    }

    if (data.value === "") {
        marcarErro(data, "Selecione uma data.");
        valido = false;
    } else if (!dataValida(data.value)) {
        marcarErro(data, "A data da reserva não pode ser no passado.");
        valido = false;
    } else {
        marcarValido(data);
    }

    return valido;
}


//EXERCÍCIO 2 — Interação DOM: painel info do grupo
function toggleInfoGrupo() {
    let painelInfo = document.getElementById("info-grupo");

    if (painelInfo.style.display === "none" || painelInfo.style.display === "") {
        painelInfo.style.display = "block";
    } else {
        painelInfo.style.display = "none";
    }
}



// 5.(DOMContentLoaded)
document.addEventListener("DOMContentLoaded", function () {

    //login
    let formLogin = document.querySelector("form[action='login.php']");
    if (formLogin) {
        formLogin.addEventListener("submit", function (e) {
            if (!validarLogin()) {
                e.preventDefault(); // bloqueia o envio se inválido
            }
        });
    }

    //pesquisa
    let formPesquisa = document.querySelector("form[action='pesquisa.php']");
    if (formPesquisa) {
        formPesquisa.addEventListener("submit", function (e) {
            if (!validarPesquisa()) {
                e.preventDefault();
            }
        });
    }

    //Reserva
    let formReserva = document.querySelector("form[action='novareserva.php']");
    if (formReserva) {
        formReserva.addEventListener("submit", function (e) {
            if (!validarReserva()) {
                e.preventDefault();
            }
        });
    }

    // Garantir que o painel de info começa escondido
    let painelInfo = document.getElementById("info-grupo");
    if (painelInfo) {
        painelInfo.style.display = "none";
    }
});