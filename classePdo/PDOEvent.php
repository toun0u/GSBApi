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
	//renvoie tout les Events auxquel l'utilisateurs participe
	public function getAllEvent($id)
	{
		$req = "select distinct even.id, lieu, description, dateDebut, dateFin, heureDebut, heureFin, Libelle from even inner join participer on even.id = id_Event where participer.id = ".$id;
		$res = $this->monPdo->query($req);
		$lesLignes = $res->fetchAll();
		return $lesLignes;
	}

	//renvoie tout les Events auxquel l'utilisateur n'a pas encore répondu
	public function getForComingEvent($id)
	{
		$req = 'select distinct even.id, lieu, description, dateDebut, dateFin, heureDebut, heureFin, Libelle from even where even.id not in (select id_Event from participer where id = '.$id.')';
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