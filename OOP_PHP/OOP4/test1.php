<?php
abstract class CompteBancaire {
    protected string $titulaire;
    protected float $solde;

    public function deposer(float $montant){
        return $this->solde += $montant;
    }
    public function retirer(float $montant){
        if ($this->solde>$montant) {
            $this->solde -= $montant;
        }
    }
    public function afficherSolde(){
        echo"$this->solde";
    }
    public function getSolde() {
        return $this->solde;
    }
    abstract public function calculerInteret() :float;
}

class CompteCourant extends CompteBancaire{
    
    public function calculeeInteret() {
        return $this->getSolde();
    }
    
}
class CompteEpargne  extends CompteBancaire{
    
    public function calculeeInteret() {
        $solde = 0;
        $solde = $this->getSolde() * 0.03;
        return $solde;
    }
}
class Banque {
    protected string $number;
    protected array $comptes = [];

    public function addCompte(){
        foreach ($this->comptes as $compte) {
            
        }
    }

    public function afficherSolde(){
        echo"";
    }

}