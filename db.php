<?php
function ligarBD() {
    return new SQLite3('reservaja.db');
}
?>
