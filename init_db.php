<?php
require_once 'db.php';
$db = ligarBD();

$db->exec("CREATE TABLE IF NOT EXISTS users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    username TEXT UNIQUE NOT NULL,
    email TEXT UNIQUE NOT NULL,
    password_hash TEXT NOT NULL,
    last_access TEXT
)");

$db->exec("CREATE TABLE IF NOT EXISTS reservas (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    user_id INTEGER,
    nome_cliente TEXT NOT NULL,
    email_cliente TEXT NOT NULL,
    tipo_reserva TEXT NOT NULL,
    destino TEXT NOT NULL,
    data_reserva TEXT NOT NULL,
    metodo_pagamento TEXT NOT NULL,
    created_at TEXT NOT NULL,
    FOREIGN KEY(user_id) REFERENCES users(id)
)");

$db->exec("CREATE TABLE IF NOT EXISTS acessos (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    user_id INTEGER NOT NULL,
    username TEXT NOT NULL,
    login_time TEXT NOT NULL,
    FOREIGN KEY(user_id) REFERENCES users(id)
)");

$username = 'admin';
$email = 'admin@reservaja.pt';
$passwordHash = password_hash('admin123', PASSWORD_DEFAULT);

$stmt = $db->prepare("INSERT OR IGNORE INTO users (username, email, password_hash) VALUES (:username, :email, :password_hash)");
$stmt->bindValue(':username', $username, SQLITE3_TEXT);
$stmt->bindValue(':email', $email, SQLITE3_TEXT);
$stmt->bindValue(':password_hash', $passwordHash, SQLITE3_TEXT);
$stmt->execute();

echo "Base de dados criada com sucesso. Utilizador de teste: admin / admin123";
?>
