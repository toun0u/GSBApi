<?php
require("classePdo/PDOEvent.php");

$conx=PDOEvent::getPDOEvent();
$resu = $conx->refuserParticipation($_REQUEST['idUser'], $_REQUEST['idEvent'], $_REQUEST['reason']);
echo json_encode($resu);
?>