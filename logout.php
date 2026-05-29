<?php
session_start();
session_unset();
session_destroy();
echo "<link rel='stylesheet' href='style.css'><div class='mensagem'><h2>Sessão terminada</h2><p>Logout efetuado com sucesso.</p><p><a href='index.html'>Voltar ao início</a></p></div>";
?>
