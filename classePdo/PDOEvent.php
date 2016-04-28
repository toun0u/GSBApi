<?php
require("PDOGsb.php");
class PDOEvent extends PDOGsb 
{
	private static $monPdoEvent;
	public function __construct(){
		parent::__construct();
	}
	public  static function getPDOEvent()
	{
		if(PDOEvent::$monPdoEvent == null)
		{
			PDOEvent::$monPdoEvent= new PDOEvent();
		}
		return PDOEvent::$monPdoEvent;  
	}
	/**
	 * Retourne toutes les actions sous forme d'un tableau associatif
	 *
	 * @return le tableau associatif des actions 
	*/
	public function getAllEvent($id)
	{
		$req = "select distinct even.id, lieu, description, dateDebut, dateFin, heureDebut, heureFin, libelle from even inner join participer on even.id = id_Event where participer.id != ".$id;
		$res = $this->monPdo->query($req);
		$lesLignes = $res->fetchAll();
		return $lesLignes;
	}
	public function validerParticipation($id, $event)
	{
		$req="insert into participer value (1, 'présent',".$id.",".$event.")";
		$this->monPdo->query($req);
	}
	public function refuserParticipation($id, $event, $reason)
	{
		$req = "insert into participer value (0,'".$reason."',".$id.",".$event.")";
		$this->monPdo->query($req); 
	}
}
?>