<?php
interface EmployeInterface {
    public function travailler();
}

abstract class Employe implements EmployeInterface {
    private $nom;
    private $poste;

    public function __construct($nom, $poste) {
        $this->nom = $nom;
        $this->poste = $poste;
    }

    public function getNom() {
        return $this->nom;
    }

    public function setNom($nom) {
        $this->nom = $nom;
    }

    public function getPoste() {
        return $this->poste;
    }

    public function setPoste($poste) {
        $this->poste = $poste;
    }

    
}

class Developpeur extends Employe {
    public function travailler() {
        echo $this->getNom(). " travaille comme " . $this->getPoste() . "\n";
    }
}

$dev = new Developpeur("Mouad", "Développeur Fullstack");
// $dev->travailler();
echo $dev->getNom(); 
