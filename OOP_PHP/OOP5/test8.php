<?php
interface Payment {
    public function paye($date);
}

abstract class Facture {
    protected string $numeroF;
    private float $montant;

    public function __construct(string $numeroF , float $montant)
    {
        $this->numeroF = $numeroF;
        $this->montant = $montant;
    }
    public function GetMontant(){
        return $this->montant;
    }
}

class Electricite extends Facture implements Payment{
    protected float $penalite;

    public function __construct(string $numeroF , float $montant, float $penalite)
    {
        parent::__construct( $numeroF , $montant);
        $this->penalite = $penalite;
    }
    public function paye($date) {
        if($date > 6) {
            $this->penalite = $this->GetMontant()*1.2;
        }
    }
}

class Internet extends Facture implements Payment{
    protected float $discount;

    public function paye($date) {
        if($date > 6) {
            $this->discount = $this->GetMontant()*0.9;
        }
    }
}