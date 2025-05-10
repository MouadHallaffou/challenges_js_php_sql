<?php
   // Créer un mini système d’emprunt de livres.
   // Spécifications :
   // Créer une classe Livre avec :
   // Attributs : titre, auteur, disponible
   // Méthodes :
   // emprunter()
   // rendre()
   // afficherInfos()
   // Créer une classe Utilisateur avec :
   // Attributs : name, emprunts (tableau de livres)
   // Méthodes :
   // emprunterLivre(Livre $livre)
   // rendreLivre(Livre $livre)
   // afficherEmprunts()
   // Cas d’usage :
   // Créer 3 livres, 2 utilisateurs
   // Effectuer des emprunts/rendus
   // Afficher l’historique

class Livre {
   public string $titre;
   public string $auteur;
   public bool $disponible;

   public function __construct(string $titre, string $auteur)
   {
      $this->titre = $titre;     
      $this->auteur = $auteur;
      $this->disponible = true;
   }

   public function emprunter() {
      if($this->disponible){
         $this->disponible = false;
         return true;
      }
      return false;
   }

   public function render (){
      return $this->disponible = true;
   }

   public function afficheInfos() {
      echo "Titre : $this->titre | Auteur : $this->auteur | Disponible : " . ($this->disponible ? "Oui" : "Non") . "<br>";
   }
}

class Client {
   public string $name;
   public array $emprunts = [];

   public function __construct(string $name)
   {
      $this->name = $name;
   }

   public function emprunterLivre(Livre $livre) {
      if ($livre->emprunter()) {
         $this->emprunts[] = $livre;
         echo "$this->name a emprunté le livre : $livre->titre<br>";
      }
   }
   public function rendreLivre(Livre $livre) {
      foreach ($this->emprunts as $index => $emprunt) {
         if ($emprunt === $livre) {
            $livre->render();
            unset($this->emprunts[$index]);
            echo"$this->name a rendu le livre : $livre->titre";
            return;
         }
      }
      echo "$this->name n’a pas ce livre en sa possession.<br>";
   }

   public function afficherEmprunts() {
      echo "Livres empruntés par $this->name :<br>";
      foreach ($this->emprunts as $livre) {
         $livre->afficheInfos();
      }
   }
}

$livre1 = new Livre('data' , 'mouad');
$livre1 = new Livre('java' , 'rayane');
$livre1 = new Livre('js' , 'yassiine');

$user1 = new Client("anass");
$user2 = new Client("asmae");

$user1->emprunterLivre($livre1);
$user2->emprunterLivre($livre1); 
$user1->afficherEmprunts();
$user1->rendreLivre($livre1);
$user2->emprunterLivre($livre1);

