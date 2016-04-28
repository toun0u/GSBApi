<?php
require("classePdo/PDOEvent.php");

$conx=PDOEvent::getPDOEvent();
$resu = $conx->validerParticipation($_REQUEST['idUser'], $_REQUEST['idEvent']);
echo json_encode($resu);
?>