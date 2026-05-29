<?php
session_start();
require_once 'db.php';

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $nome = trim($_POST['nome'] ?? '');
    $email = trim($_POST['email'] ?? '');
    $tipo = trim($_POST['tipo'] ?? '');
    $destino = trim($_POST['destino'] ?? '');
    $data = trim($_POST['data'] ?? '');
    $pagamento = trim($_POST['pagamento'] ?? '');
    $user_id = $_SESSION['user_id'] ?? null;
    $agora = date('Y-m-d H:i:s');

    $db = ligarBD();
    $stmt = $db->prepare("INSERT INTO reservas (user_id, nome_cliente, email_cliente, tipo_reserva, destino, data_reserva, metodo_pagamento, created_at)
                          VALUES (:user_id, :nome, :email, :tipo, :destino, :data, :pagamento, :created_at)");

    if ($user_id === null) {
        $stmt->bindValue(':user_id', null, SQLITE3_NULL);
    } else {
        $stmt->bindValue(':user_id', $user_id, SQLITE3_INTEGER);
    }

    $stmt->bindValue(':nome', $nome, SQLITE3_TEXT);
    $stmt->bindValue(':email', $email, SQLITE3_TEXT);
    $stmt->bindValue(':tipo', $tipo, SQLITE3_TEXT);
    $stmt->bindValue(':destino', $destino, SQLITE3_TEXT);
    $stmt->bindValue(':data', $data, SQLITE3_TEXT);
    $stmt->bindValue(':pagamento', $pagamento, SQLITE3_TEXT);
    $stmt->bindValue(':created_at', $agora, SQLITE3_TEXT);
    $stmt->execute();

    echo "<link rel='stylesheet' href='style.css'><div class='mensagem'>";
    echo "<h2>Reserva guardada com sucesso</h2>";
    echo "<p><strong>Nome:</strong> " . htmlspecialchars($nome) . "</p>";
    echo "<p><strong>Email:</strong> " . htmlspecialchars($email) . "</p>";
    echo "<p><strong>Tipo:</strong> " . htmlspecialchars($tipo) . "</p>";
    echo "<p><strong>Destino:</strong> " . htmlspecialchars($destino) . "</p>";
    echo "<p><strong>Data:</strong> " . htmlspecialchars($data) . "</p>";
    echo "<p><strong>Pagamento:</strong> " . htmlspecialchars($pagamento) . "</p>";
    echo "<p><a href='reservas.html'>Nova reserva</a> | <a href='index.html'>Voltar ao início</a></p>";
    echo "</div>";
}
?>
