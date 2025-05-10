<?php

class Etudiant {
    protected string $name;
    protected int $age;

    public function __construct(string $name, int $age) {
        $this->name = $name;
        $this->age = $age;
    }

    public function getName(): string {
        return $this->name;
    }

    public function getAge(): int {
        return $this->age;
    }
}

class GroupeEtudiants {
    protected array $etudiants = [];

    public function add (Etudiant $etudiant) {
        $this->etudiants[] = $etudiant;
    }

    public function plusage() {
        $max = $this->etudiants[0];
        foreach ($this->etudiants as $etudiant) {
            if ($etudiant->getAge() > $max->getAge()) {
                $max = $etudiant;
            }
        }
        return $max;
    }
}

$group = new GroupeEtudiants();
$group->add(new Etudiant("mouad" ,12));
$group->add(new Etudiant("ali" ,22));
$group->add(new Etudiant("sdfgdsg" ,14));

$plusage = $group->plusage();

if ($plusage!=null) {
    echo $plusage->getName();
}