<?php
class Livre {
    protected string $titre;
    protected string $author;
    protected float $prix;

    public function __construct(string $titre , string $author, float $prix)
    {
    $this->titre = $titre ;
    $this->author = $author ;        
    $this->prix = $prix ;        
    }
    public function getPrix(){
        return $this->prix;
    }
    public function getTitre(){
        return $this->titre;
    }
}
class Panier {
    protected array $livres = [];

    public function add(Livre $livre){
        return $this->livres [] = $livre;
    }
    public function delete($titre){
        foreach ($this->livres as $key => $livre) {
            if ($titre == $livre->getTitre()) {
                unset($this->livres[$key]);
                return true;
            }
        }
        echo"undefined book";
    }
    public function total(){
        $total = 0;
        foreach ($this->livres as $livre) {
            $total += $livre->getPrix(); 
        }
        return $total;
    }
    public function getLivres() {
        return $this->livres;
    }
}
abstract class MoyenPaiement {
    protected float  $solde;
    public function __construct(float $solde)
    {
        $this->solde = $solde;
    }
    public function payer(float $montant) {
        if ($this->solde >= $montant) {
            $this->solde -= $montant;
            echo "Paiement de $montant effectué avec succès. Reste du solde : $this->solde\n";
            return true;
        }else{
            echo" votre solde insufisant $this->solde";
            return false;
        }
    }
    public function getSolde() {
        return $this->solde;
    }
}
class Commande {
    protected string $numero;
    protected Panier $panier;
    protected MoyenPaiement $paiement;
    protected bool $estPayee = false;

    public function __construct(string $numero, Panier $panier, MoyenPaiement $paiement)
    {
        $this->numero = $numero;
        $this->panier = $panier;
        $this->paiement = $paiement;
    }
    public function validerPaiement() {
        $montant = $this->panier->total();
        if ($this->paiement->payer($montant)) {
            $this->estPayee = true;
            echo "Commande #{$this->numero} payée avec succès.\n";
        } else {
            echo "Échec du paiement pour la commande #{$this->numero}.\n";
        }
    }
    public function afficherRecapitulatif() {
        echo"commande #{$this->numero} :\n";
        foreach ($this->panier->getLivres() as $livre) {
            echo"- {$livre->getTitre()} : {$livre->getPrix()} DH\n";
        }
    }
}

class CarteBancaire extends MoyenPaiement {
    
} 
class PayPal extends MoyenPaiement {
    
} 
class Crypto extends MoyenPaiement {
    
}
class User {
    protected string $name;
    protected string $email;

    public function __construct(string $name , string $email)
    {
        $this->name = $name;
        $this->email = $email;
    }
    public function getName(){
        return $this->name;
    }
    public function getEmail() {
        return $this->email;
    }
}

$livre1 = new Livre("PHP Moderne", "Rachid L.", 120);
$livre2 = new Livre("Laravel Masterclass", "Zineb E.", 80);

$panier = new Panier();
$panier->add($livre1);
$panier->add($livre2);

$moyenPaiement = new PayPal(250); 
$moyenPaiement1 = new CarteBancaire(200); 

$commande = new Commande("CMD001", $panier, $moyenPaiement1);
$commande->validerPaiement();
$commande->afficherRecapitulatif();


