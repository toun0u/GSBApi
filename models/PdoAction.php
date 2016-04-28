<?php

namespace models;

class PdoAction extends PdoBoursoBase 
{
	public function __construct(){
		parent::__construct();
	}
	/**
	 * Retourne toutes les actions sous forme d'un tableau associatif
	 *
	 * @return le tableau associatif des actions 
	*/
		public function getAll()
		{
			$req = "select * from action";
			$res = $this->monPdo->query($req);
			$lesLignes = $res->fetchAll();
			return $lesLignes;
		}
}
?>