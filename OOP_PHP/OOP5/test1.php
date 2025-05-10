<?php

interface Payable {
    public function payer($montant);
}

abstract class MoyenPaiement {
    protected $proprietaire;

    public function __construct($proprietaire) {
        $this->proprietaire = $proprietaire;
    }

    public function __toString() {
        return $this->proprietaire;
    }

    abstract public function verifierSolde(float $montant);

    public function getProprietaire() {
        return $this->proprietaire;
    }
}

class CarteBancaire extends MoyenPaiement implements Payable {
    protected $solde;

    public function __construct($proprietaire, $solde) {
        parent::__construct($proprietaire);
        $this->solde = $solde;
    }

    public function __toString() {
        return "Propriétaire: $this->proprietaire - Solde: $this->solde";
    }

    public function verifierSolde(float $montant) {
        if ($montant > $this->solde) {
            echo "Votre solde est insuffisant";
            return false;
        }
        return true;
    }

    public function payer($montant) {
        if ($this->verifierSolde($montant)) {
            $this->solde -= $montant;
            return $this->solde;
        }
        return false;
    }

    public function calculeTotal() {
        return $this->solde;
    }

    public function isPaid() {
        return true;
    }
}

class PayPal extends MoyenPaiement implements Payable {
    protected $email;
    protected $solde;

    public function __construct($proprietaire, $email, $solde) {
        parent::__construct($proprietaire);
        $this->email = $email;
        $this->solde = $solde;
    }

    public function __toString() {
        return "Propriétaire: $this->proprietaire - Email: $this->email - Solde: $this->solde";
    }

    public function verifierSolde(float $montant) {
        if ($montant > $this->solde) {
            echo "Votre solde est insuffisant";
            return false;
        }
        return true;
    }

    public function payer($montant) {
        if ($this->verifierSolde($montant)) {
            $this->solde -= $montant;
            return $this->solde;
        }
        return false;
    }

    public function calculeTotal() {
        return $this->solde;
    }

    public function isPaid() {
        return true;
    }
}

class Crypto extends MoyenPaiement implements Payable {
    protected $wallet;
    protected $solde;

    public function __construct($proprietaire, $wallet, $solde) {
        parent::__construct($proprietaire);
        $this->wallet = $wallet;
        $this->solde = $solde;
    }

    public function __toString() {
        return "Propriétaire: $this->proprietaire - Wallet: $this->wallet - Solde: $this->solde";
    }

    public function verifierSolde(float $montant) {
        if ($montant > $this->solde) {
            echo "Votre solde est insuffisant";
            return false;
        }
        return true;
    }

    public function payer($montant) {
        if ($this->verifierSolde($montant)) {
            $this->solde -= $montant;
            return $this->solde;
        }
        return false;
    }

    public function calculeTotal() {
        return $this->solde;
    }

    public function isPaid() {
        return true;
    }
}

$paypal = new PayPal("Ahmed", "ahmed@mail.com", 150);
$carte = new CarteBancaire("Salma", 200);
$crypto = new Crypto("Youssef", "0xA9DF...", 300);

echo $paypal . " <br> ";
echo $carte . " <br> ";
echo $crypto . " <br> ";

// Paiements valides
echo "Paiement PayPal : " . $paypal->payer(50) . " <br> ";  
echo "Paiement Carte : " . $carte->payer(100) . " <br> ";  
echo "Paiement Crypto : " . $crypto->payer(300) . " <br> "; 

// Paiement invalide
echo "Paiement PayPal (excessif) : ";
$paypal->payer(200); 
