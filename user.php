<?php
require("classePdo/PDOUser.php");

$conx=PDOUser::getPDOUser();
$resu = $conx->verifUser($_REQUEST['name'], $_REQUEST['pwd']);
echo json_encode($resu);
?>