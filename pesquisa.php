<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $tipo = htmlspecialchars($_POST['tipo'] ?? '');
    $destino = htmlspecialchars($_POST['destino'] ?? '');
    $data = htmlspecialchars($_POST['data'] ?? '');

    echo "<link rel='stylesheet' href='style.css'><div class='mensagem'>";
    echo "<h2>Resultado da Pesquisa</h2>";
    echo "<p><strong>Tipo:</strong> $tipo</p>";
    echo "<p><strong>Destino/Evento:</strong> $destino</p>";
    echo "<p><strong>Data:</strong> $data</p>";
    echo "<p>Pesquisa processada com sucesso no servidor.</p>";
    echo "<p><a href='reservas.html'>Prosseguir para reserva</a></p>";
    echo "</div>";
}
?>
