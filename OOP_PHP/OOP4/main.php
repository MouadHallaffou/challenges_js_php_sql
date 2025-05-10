<?php

abstract class User
{
    protected int $id;
    protected string $nom;
    protected string $email;

    public abstract function registre(int $id, string $nom, string $email);
    public abstract function login($id);
    public function logout()
    {
        echo "vous etes logout avec success";
    }
}

class Admin extends User
{
    private array $admins = [];
    public function __construct()
    {
        $this->admins = [];
    }
    public function registre(int $id, string $nom, string $email)
    {
        $this->admins[] = [
            'id' => $id,
            'nom' => $nom,
            'email' => $email,
        ];
    }
    public function login($id)
    {
        $found = false;
        foreach ($this->admins as $admin) {
            if ($admin["id"] === $id) {
                echo "bienvenue: {$admin["nom"]}";
                $found = true;
                break;
            }
        }

        if (!$found) {
            echo "votre edantifient incorrect";
        }
    }
    public function logout()
    {
        echo "vous etes deconnected";
    }
}

class Client extends User
{
    public array $clients = [];
    private ?array $currentClient = null;
    public function __construct()
    {
        $this->clients = [];
    }
    public function registre(int $id, string $nom, string $email)
    {
        $this->clients[] = [
            "id" => $id,
            "nom" => $nom,
            "email" => $email,
        ];
    }
    public function login($id)
    {
        $found = false;
        foreach ($this->clients as $client) {
            if ($client["id"] === $id) {
                echo "bienvenue: {$client["nom"]}";
                $found = true;
                break;
            }
        }
        if (!$found) {
            echo "votre edantifient incorrect";
        }
    }
    public function logout()
    {
        if ($this->currentClient !== null) {
            echo "Au revoir, {$this->currentClient['nom']}\n";
            $this->currentClient = null;
        } else {
            echo "Aucun client connecté\n";
        }
    }
}

class Visitor
{
    // les visitors doit seulement accede a la page home afin de visualise les produits disponible dans la platforme.
}

class Author
{
    private int $id;
    private string $nom;
    private string $bio;

    public function __construct(int $id, string $nom, string $bio)
    {
        $this->id = $id;
        $this->nom = $nom;
        $this->bio = $bio;
    }
    public function getNom()
    {
        return $this->nom;
    }
    public function affichProfile()
    {
        echo "<h1>All Authors:</h1> <br>";
        echo "<li>Nom: {$this->nom} , bio: {$this->bio}</li>";
    }
}

class Category
{
    protected int $id;
    protected string $nom;
    protected string $description;
    public function __construct(int $id, string $nom, string $description)
    {
        $this->id = $id;
        $this->nom = $nom;
        $this->description = $description;
    }
    public function getNom()
    {
        return "<li> Categorie name: $this->nom</li>";
    }
    public function getDescription()
    {
        return "<li> Categories Description: $this->description</li>";
    }
}

class Book
{
    private int $id;
    private string $title;
    private string $description;
    private float $prix;
    public Author $author;
    public Category $category;
    public array $books = [];

    public function __construct(int $id, string $title, string $description, float $prix)
    {
        $this->id = $id;
        $this->title = $title;
        $this->description = $description;
        $this->prix = $prix;
    }
    public function getId()
    {
        return $this->id;
    }
    public function getNom()
    {
        return $this->title;
    }
    public function getDescription()
    {
        return $this->description;
    }
    public function getPrix()
    {
        return $this->prix;
    }
    public function createBook($id, $title, $description, $prix, Author $author, Category $category)
    {
        $this->books = [
            "id" => $id,
            "title" => $title,
            "description" => $description,
            "prix" => $prix,
            "author" => $author->getNom(),
            "category" => $category->getNom(),
        ];
    }
}

class Panier
{
    public array $livres = [];
    public int $total;
    public function ajouterLivre(Book $book)
    {
        return array_push($this->livres, $book);
    }
    public function retirerLivre($id)
    {
        foreach ($this->livres as $key => $livre) {
            if ($livre->getId() === $id) {
                unset($this->livres[$key]);
            }
        }
    }
    public function afficherContenu()
    {
        echo "<h1>All Articles panier </h1>";
        foreach ($this->livres as $livre) {
            echo "<li>ID: {$livre->getId()}</li>";
            echo "<li>Titre: {$livre->getNom()}</li>";
            echo "<li>Prix: {$livre->getPrix()} MAD</li>";
        }
    }
    public function calculerTotal()
    {
        echo "<h1>total panier:</h1>";
        $total = 0;
        foreach ($this->livres as $livre) {
            $total += $livre->getPrix();
        }
        return "le total est : " . $total;
    }
}

class Wishlist
{
    public array $livres = [];
    public function ajouterLivre(Book $book)
    {
        return array_push($this->livres, $book);
    }
    public function retirerLivre($id)
    {
        foreach ($this->livres as $key => $livre) {
            if ($livre->getId() === $id) {
                unset($this->livres[$key]);
            }
        }
    }
    public function afficheWishlistContent()
    {
        echo "<h1>all articles</h1>";
        foreach ($this->livres as $livre) {
            echo "<li>{$livre->getId()}</li>";
            echo "<li>{$livre->getNom()}</li>";
            echo "<li>{$livre->getPrix()}</li>";
        }
    }
}

// $admin1 = new Admin();
// $admin1->registre(1, "mouad", "mouad@gmail.com");
// $admin1->login(1) ;echo"<br>";      
// $admin1->login(99); echo"<br>";     
// $admin1->logout();  echo"<br>";       


$client1 = new Client();
$client1->registre(2, "jabir", "jabir@gmail.com");
// $client1->login(2); echo"<br>";        
// $client1->login(100); echo"<br>";      
// $client1->logout();    echo"<br>"; 

$author1 = new Author(1, "Ahmed Sefrioui", "Bio de Ahmed Sefrioui");
$author1->affichProfile();

$cat = new Category(1, "Web", "Web Dev Courses");
echo $cat->getNom(); 
echo $cat->getDescription();   


$author1 = new Author(1, "Ahmed Sefrioui", "Author bio");
$category1 = new Category(1, "PHP", "Backend");
$book1 = new Book(1, "php", "Intro to php", 90.9);
$book1->createBook(1, "Laravel", "Intro to Laravel", 90.9, $author1, $category1);

$author2 = new Author(2, "Ahmed Sefrioui", "bio bio");
$category2 = new Category(2, "PHP", "Backend");
$book2 = new Book(2, "php", "Intro to php", 99.9);
$book2->createBook(2, "Laravel", "Intro to Laravel", 99.9, $author2, $category2);

$panier = new Panier();
$panier->ajouterLivre($book1);
$panier->ajouterLivre($book2);
$panier->retirerLivre(1);
$panier->afficherContenu();
echo $panier->calculerTotal(); 

$wishlist = new Wishlist();
$wishlist->ajouterLivre($book1);
$wishlist->afficheWishlistContent();
