<?php
require("classePdo/PDOEvent.php");

$conx=PDOEvent::getPDOEvent();
$resu = $conx->getForComingEvent($_REQUEST['id']);
echo json_encode($resu);
?>