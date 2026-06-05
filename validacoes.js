// 1. VALIDAÇÃO DO FORMULÁRIO DE LOGIN (login.html)
function validarLogin() {
    let username = document.getElementById("username");
    let nullPass = document.getElementById("password");
    let valido = true;

    // Validar Username
    if (username.value.trim() === "") {
        username.style.borderColor = "red";
        username.style.backgroundColor = "#fee2e2"; // Tom rosa claro para erro
        valido = false;
    } else {
        username.style.borderColor = "green";
        username.style.backgroundColor = "#f0fdf4"; // Tom verde claro para sucesso
    }

    // Validar Password (e garantir tamanho mínimo de 4 caracteres)
    if (nullPass.value.trim() === "") {
        nullPass.style.borderColor = "red";
        nullPass.style.backgroundColor = "#fee2e2";
        valido = false;
    } else if (nullPass.value.length < 4) {
        alert("A password deve ter pelo menos 4 caracteres.");
        nullPass.style.borderColor = "orange";
        valido = false;
    } else {
        nullPass.style.borderColor = "green";
        nullPass.style.backgroundColor = "#f0fdf4";
    }

    if (!valido) {
        alert("Por favor, preencha corretamente as suas credenciais.");
    }

    return valido; // Se for false, o formulário não é enviado para o PHP
}

// 2. VALIDAÇÃO DA PESQUISA DE DISPONIBILIDADE (index.html)
function validarPesquisa() {
    let destino = document.getElementById("destino");
    let data = document.getElementById("data");
    let valido = true;

    // Validar Destino
    if (destino.value.trim() === "") {
        destino.style.borderColor = "red";
        destino.style.backgroundColor = "#fee2e2";
        valido = false;
    } else {
        destino.style.borderColor = "green";
        destino.style.backgroundColor = "#f0fdf4";
    }

    // Validar Data
    if (data.value === "") {
        data.style.borderColor = "red";
        data.style.backgroundColor = "#fee2e2";
        valido = false;
    } else {
        data.style.borderColor = "green";
        data.style.backgroundColor = "#f0fdf4";
    }

    if (!valido) {
        alert("Introduza um destino e uma data válidos para pesquisar.");
    }

    return valido;
}

// 3. VALIDAÇÃO DA FINALIZAÇÃO DE RESERVA (reservas.html)
function validarReserva() {
    let nome = document.getElementById("nome");
    let email = document.getElementById("email");
    let destino = document.getElementById("destino");
    let data = document.getElementById("data");
    let valido = true;

    // Validar Nome
    if (nome.value.trim() === "") {
        nome.style.borderColor = "red";
        nome.style.backgroundColor = "#fee2e2";
        valido = false;
    } else {
        nome.style.borderColor = "green";
        nome.style.backgroundColor = "#f0fdf4";
    }

    // Validar Email (Verificação básica de formato)
    if (email.value.trim() === "" || !email.value.includes("@")) {
        email.style.borderColor = "red";
        email.style.backgroundColor = "#fee2e2";
        valido = false;
    } else {
        email.style.borderColor = "green";
        email.style.backgroundColor = "#f0fdf4";
    }

    // Validar Destino
    if (destino.value.trim() === "") {
        destino.style.borderColor = "red";
        destino.style.backgroundColor = "#fee2e2";
        valido = false;
    } else {
        destino.style.borderColor = "green";
        destino.style.backgroundColor = "#f0fdf4";
    }

    // Validar Data
    if (data.value === "") {
        data.style.borderColor = "red";
        data.style.backgroundColor = "#fee2e2";
        valido = false;
    } else {
        data.style.borderColor = "green";
        data.style.backgroundColor = "#f0fdf4";
    }

    if (!valido) {
        alert("Por favor, preencha todos os campos obrigatórios da reserva.");
    }

    return valido;
}