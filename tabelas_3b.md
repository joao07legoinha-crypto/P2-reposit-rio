# Alínea 3b - Tabelas da Base de Dados

## Tabela `users`

| Campo | Tipo | Descrição |
|---|---|---|
| id | INTEGER PRIMARY KEY AUTOINCREMENT | Identificador do utilizador |
| username | TEXT UNIQUE NOT NULL | Nome de utilizador |
| email | TEXT UNIQUE NOT NULL | Email do utilizador |
| password_hash | TEXT NOT NULL | Password cifrada |
| last_access | TEXT | Data e hora do último acesso |

## Tabela `reservas`

| Campo | Tipo | Descrição |
|---|---|---|
| id | INTEGER PRIMARY KEY AUTOINCREMENT | Identificador da reserva |
| user_id | INTEGER | Utilizador associado |
| nome_cliente | TEXT NOT NULL | Nome do cliente |
| email_cliente | TEXT NOT NULL | Email do cliente |
| tipo_reserva | TEXT NOT NULL | hotel, voo ou evento |
| destino | TEXT NOT NULL | Destino ou nome do evento |
| data_reserva | TEXT NOT NULL | Data pretendida |
| metodo_pagamento | TEXT NOT NULL | Método de pagamento |
| created_at | TEXT NOT NULL | Data e hora de criação |

## Tabela `acessos`

| Campo | Tipo | Descrição |
|---|---|---|
| id | INTEGER PRIMARY KEY AUTOINCREMENT | Identificador do registo |
| user_id | INTEGER NOT NULL | ID do utilizador |
| username | TEXT NOT NULL | Username do utilizador |
| login_time | TEXT NOT NULL | Data e hora do acesso |
