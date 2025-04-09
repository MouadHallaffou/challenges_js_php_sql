<!-- Créer un programme en PHP qui modélise un système de gestion des véhicules en utilisant les principes OOP.
**Instructions :**
1. Créer une classe abstraite Vehicle :
- Propriétés : brand, model, year, price.
- Méthodes :
 - Une méthode abstraite getDescription() : retourne une description spécifique du véhicule.
 - Implémentez des getters et setters pour toutes les propriétés.
2. Créer une classe Car qui hérite de Vehicle :
- Propriétés supplémentaires : fuelType (essence, diesel, électrique).
- Méthode :
 - Implémentation de getDescription(), retourne une chaîne comprenant toutes les informations du véhicule.
3. Créer une classe Motorcycle qui hérite de Vehicle :
- Propriétés supplémentaires : type (sport, cruiser, off-road).
- Méthode :
 - Implémentation de getDescription(), retourne une chaîne comprenant toutes les informations du véhicule.
4. Créer une interface Discountable :
- Méthodes : calculateDiscount($percentage) : calcule une remise sur le prix du véhicule.
5. Implémenter l'interface Discountable dans Car et Motorcycle :
- Ajoutez la logique pour réduire le prix du véhicule selon un pourcentage donné.
6. Créer une classe statique VehicleUtils :
- Méthodes statiques :
 - comparePrices($vehicle1, $vehicle2): Compare les prix de deux véhicules et retourne le plus abordable. -->

<?php

abstract class Vehicule {
    protected $brand;
    protected $model;
    protected $year;
    protected $price;
    
    public function __construct($brand, $model, $year, $price)
    {
        $this->brand = $brand;        
        $this->model = $model;
        $this->year = $year;
        $this->price = $price;        
    }

    public abstract function getDescription();

    public function getBrand(){
        return $this->brand;
    }
    public function getModel(){
        return $this->model;
    }
    public function getYear(){
        return $this->year;
    }
    public function getPrice(){
        return $this->price;
    }

    public function setBrand($brand){
        $this->brand = $brand;
    }
    public function setModel($model){
        $this->model = $model;
    }
    public function setYear($year){
        $this->year = $year;
    }
    public function setPrice($price){
        $this->price = $price;
    }

}

class Car extends Vehicule implements Discountable{
    protected $fuelType;

    public function __construct($brand, $model, $year, $price, $fuelType)
    {
        parent::__construct($brand, $model, $year, $price);
        $this->fuelType = $fuelType;
    }
    public function getDescription()
    {
        return "marke: {$this->brand} , brand: {$this->model}, price: {$this->price}";
    }

    public function calculateDiscount($percentage){
        return $this->price -= ($this->price * ($percentage / 100));
    }
}


class Motorcycle extends Vehicule implements Discountable{
    protected $type;

    public function __construct($brand, $model, $year, $price, $type)
    {
        parent::__construct($brand, $model, $year, $price);
        $this->type = $type;
    }

    public function getDescription()
    {
        return "description: {$this->model}";
    }

    public function calculateDiscount($percentage){
        return $this->price -= ($this->price * ($percentage / 100));
    }
}


interface Discountable{
    public function calculateDiscount($percentage);
}


class VehicleUtils {
    public static function comparePrices(Vehicule $vehicle1, Vehicule $vehicle2) {
        if ($vehicle1->getPrice() < $vehicle2->getPrice()) {
            return $vehicle1;
        } else {
            return $vehicle2;
        }
    }
}