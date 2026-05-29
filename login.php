<?php
session_start();
require_once 'db.php';

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $username = trim($_POST['username'] ?? '');
    $password = trim($_POST['password'] ?? '');

    $db = ligarBD();
    $stmt = $db->prepare("SELECT * FROM users WHERE username = :username");
    $stmt->bindValue(':username', $username, SQLITE3_TEXT);
    $result = $stmt->execute();
    $user = $result->fetchArray(SQLITE3_ASSOC);

    if ($user && password_verify($password, $user['password_hash'])) {
        $_SESSION['user_id'] = $user['id'];
        $_SESSION['username'] = $user['username'];

        $agora = date('Y-m-d H:i:s');

        $stmt = $db->prepare("UPDATE users SET last_access = :last_access WHERE id = :id");
        $stmt->bindValue(':last_access', $agora, SQLITE3_TEXT);
        $stmt->bindValue(':id', $user['id'], SQLITE3_INTEGER);
        $stmt->execute();

        $stmt = $db->prepare("INSERT INTO acessos (user_id, username, login_time) VALUES (:user_id, :username, :login_time)");
        $stmt->bindValue(':user_id', $user['id'], SQLITE3_INTEGER);
        $stmt->bindValue(':username', $user['username'], SQLITE3_TEXT);
        $stmt->bindValue(':login_time', $agora, SQLITE3_TEXT);
        $stmt->execute();

        echo "<link rel='stylesheet' href='style.css'><div class='mensagem'><h2>Login efetuado com sucesso</h2><p>Bem-vindo, " . htmlspecialchars($user['username']) . ".</p><p><a href='index.html'>Voltar ao início</a> | <a href='acessos.php'>Ver acessos</a></p></div>";
    } else {
        echo "<link rel='stylesheet' href='style.css'><div class='mensagem'><h2>Erro de autenticação</h2><p>Credenciais inválidas.</p><p><a href='login.html'>Tentar novamente</a></p></div>";
    }
}
?>
