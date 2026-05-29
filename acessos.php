<?php
require_once 'db.php';
$db = ligarBD();
$result = $db->query("SELECT username, login_time FROM acessos ORDER BY login_time DESC");
?>
<!DOCTYPE html>
<html lang="pt">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>ReservaJá - Registos de Acesso</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <header>
        <div class="logo">ReservaJá</div>
        <nav>
            <a href="index.html">Início</a>
            <a href="login.html">Login</a>
            <a href="reservas.html">Reservar</a>
            <a href="acessos.php" class="ativo">Acessos</a>
        </nav>
    </header>

    <main class="conteudo-principal">
        <section class="banner-pesquisa">
            <h2>Consulta dos Registos de Acesso</h2>
            <table class="tabela-acessos">
                <tr>
                    <th>Username</th>
                    <th>Data/Hora do Login</th>
                </tr>
                <?php while ($row = $result->fetchArray(SQLITE3_ASSOC)): ?>
                <tr>
                    <td><?php echo htmlspecialchars($row['username']); ?></td>
                    <td><?php echo htmlspecialchars($row['login_time']); ?></td>
                </tr>
                <?php endwhile; ?>
            </table>
        </section>
    </main>

    <footer>
        <p>&copy; 2026 - P02 - Sistemas de Reservas Online | DEAPC - ISEP</p>
    </footer>
</body>
</html>
