<?php
require("PDOGsb.php");
class PDOUser extends PDOGsb 
{
	private static $monPdoUser;
	public function __construct(){
		parent::__construct();
	}
	public  static function getPDOUser()
	{
		if(PDOUser::$monPdoUser == null)
		{
			PDOUser::$monPdoUser= new PDOUser();
		}
		return PDOUser::$monPdoUser;  
	}
	/**
	 * Retourne toutes les actions sous forme d'un tableau associatif
	 *
	 * @return le tableau associatif des actions 
	*/
	public function verifUser($mail, $pwd)
	{
		$req = "select count(*),id from user where mail = '".$mail."' and mdp = '".$pwd."'";
		$res = $this->monPdo->query($req);
		$lesLignes = $res->fetchAll();
		return $lesLignes;
	}
}
?>