<?php

namespace models;

/**
 * Classe d'accès aux données. 
 
 * Utilise les services de la classe PDO
 * pour l'application 
 * Les attributs sont tous statiques,
 * les 4 premiers pour la connexion
 * $monPdo de type PDO 
 * $monPdo qui contiendra l'unique instance de la classe
 *
 * @package 	models
 * @author 		ED
 * @version    	1.0
 * @link       	http://www.php.net/manual/fr/book.pdo.php
 */

abstract class PdoBoursoBase
{   		
      	private static $serveur='mysql:host=localhost';
      	private static $bdd='dbname=symfobourso';   		
      	private static $user='root' ;    		
      	private static $mdp='' ;	
		protected $monPdo;

/**
 * Constructeur privé, crée l'instance de PDO qui sera sollicitée
 * pour toutes les méthodes de la classe
 */				
	public function __construct()
	{
    		$this->monPdo = new \PDO(PdoBoursoBase::$serveur.';'.PdoBoursoBase::$bdd, PdoBoursoBase::$user, PdoBoursoBase::$mdp);
			$this->monPdo->query("SET CHARACTER SET utf8");
	}
}
?>