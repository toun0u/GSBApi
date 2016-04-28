<?php
require("classePdo/PDOEvent.php");

$conx=PDOEvent::getPDOEvent();
$resu = $conx->getAllEvent($_REQUEST['id']);
echo json_encode($resu);
?>