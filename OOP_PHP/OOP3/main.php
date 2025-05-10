<?php 
class Livre {
    private int $id;
    private string $titre;
    private string $auteur;
    private string $datePublication;

    public function getId(){
        return $this->id;
    }
    public function getTitre(){
        return $this->titre;
    }
    public function getAuteur(){
        return $this->auteur;
    }
    public function getDatePublication(){
        return $this->datePublication;
    }

    public function setId($id) {
        $this->id = $id;
    }
    
    public function setTitre($titre) {
        $this->titre = $titre;
    }
    
    public function setAuteur($auteur) {
        $this->auteur = $auteur;
    }
    
    public function setDatePublication($datePublication) {
        $this->datePublication = $datePublication;
    }    
}

class Bibliotheque {
    private array $livres = [];

    public function addBook(Livre $book){
        return array_push($this->livres, $book);
    }

    public function display(){
        foreach ($this->livres as $book) {
            echo $book->getId() ."<li>". $book->getTitre() . "<br>";
        }
    }

    public function delete($id){
        foreach ($this->livres as $key => $book) {
            if ($book->getId() === $id) {
                unset($this->livres[$key]);
                return true;
            }
        }
        return false;
    }

    public function searcheParTitre($titre){
        foreach ($this->livres as $book) {
           if ($book->getTitre() === $titre) {
            echo $book->getId() ."<li>". $book->getTitre() . "<br>";
           }else{
               echo " book not found";
           }
        }
    }
}

$book1 = new Livre();
$book1->setId(1);
$book1->setTitre("data");
$book1->setAuteur("mouad");
$book1->setDatePublication("10-11-2000");

$book2 = new Livre();
$book2->setId(2);
$book2->setTitre("data2");
$book2->setAuteur("mouad2");
$book2->setDatePublication("10-20-2000");

$bib = new Bibliotheque();
$bib->addBook($book1);
$bib->addBook($book2);

$bib->delete(1);
$bib->display();
$bib->searcheParTitre("data1");
