<?php

// Classe abstraite de base
abstract class Forme
{
    abstract public function afficherInfos();
}

// Héritage + Override correct
class Cercle extends Forme
{
    protected float $rayon;

    // Constructeur pour initialiser le rayon
    public function __construct(float $rayon)
    {
        $this->rayon = $rayon;
    }

    // Surcharge (override) de la méthode abstraite
    public function afficherInfos()
    {
        echo "Cercle de rayon " . $this->rayon . "\n";
    }
}

// Classe qui simule l'overload avec __call()
class Calculatrice
{
    public function __call($name, $arguments)
    {
        if ($name === 'additionner') {
            return array_sum($arguments);
        } else {
            throw new BadMethodCallException("Méthode $name inconnue");
        }
    }
}

// ----------- TEST DU CODE ------------
// $form = new Cercle(5);
// $form->afficherInfos();

// $calc = new Calculatrice();
// echo $calc->additionner(2, 3) . "\n";
// echo $calc->additionner(2, 3, 4) . "\n";
// echo $calc->additionner(1, 2, 3, 4, 5) . "\n";


class BankAccount
{
    private string $accountNumber;
    private float $balance;

    public function __construct($accountNumber, $balance)
    {
        $this->accountNumber = $accountNumber;
        $this->balance = $balance;
    }

    public function deposit($amount) {
        if ($amount>0) {
            return $this->balance += $amount;
        }
    }
    public function withdraw($solde){
        if ($solde>0 && $this->balance>$solde) {
            return $this->balance -= $solde;
        }else{
            echo"votre sold insufusant";
        }
    }
    public function getBalance() {
        return $this->balance;
    }
    public function getAccountNumber() {
        return $this->accountNumber;
    }
    public function setBalance($balance){
        $this->balance = $balance;
    }
    public function setAccountNumber($accountNumber){
        $this->accountNumber = $accountNumber;
    }
}

$count = new BankAccount("123321ABCD123", 123.23);
$count->deposit(100);
$count->withdraw(200);
$count->getBalance();
print_r($count);