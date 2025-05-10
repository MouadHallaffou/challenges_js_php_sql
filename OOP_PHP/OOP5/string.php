<?php

class User {
    private $name;
    private $email;

    // Constructeur pour initialiser l'objet
    public function __construct($name, $email) {
        $this->name = $name;
        $this->email = $email;
    }

    public function __toString()
    {
        return "Nom : {$this->name} || email: {$this->email}";
    }
    
}

// // Instanciation d'un objet User
// $user = new User("Mouad", "mouad@example.com");

// // Utilisation directe avec echo ( automatiquement __toString)
// echo $user;


class Developer {
    private int $id;
    private string $name;

    public function __construct(int $id, string $name)
    {
        $this->id = $id;
        $this->name = $name;   
    }
    public function __toString()
    {
        return "{$this->name}";
    }
}

class Task {
    private string $id;
    private string $title;
    private string $status;
    private Developer $developer;

    public function __construct(int $id,string $title, string $status, Developer $developer) {
        $this->id = $id;
        $this->title = $title;
        $this->status = $status;
        $this->developer = $developer;
    }

    public function __toString()
    {
        return "title: {$this->title} || status: {$this->status} || le developeur: {$this->developer}";
    }
}

$dev = new Developer(1,"Mouad");
$task = new Task(1,"Intégration API", "en cours", $dev);

echo $task;
// echo print "Hello"; // Affiche "Hello1"
