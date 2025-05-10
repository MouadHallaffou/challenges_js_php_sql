<?php

interface Combattant
{
    public function attaquer(): int;
    public function subirDegats(int $degats): void;
    public function estVivant(): bool;
}

abstract class Personnage implements Combattant
{
    protected string $nom;
    protected int $vie;
    protected int $force;

    public function __construct(string $nom, int $vie, int $force)
    {
        $this->nom = $nom;
        $this->vie = $vie;
        $this->force = $force;
    }

    public function afficherStatut(): void
    {
        echo "{$this->nom} - Vie : {$this->vie}, Force : {$this->force}\n";
    }

    public function estVivant(): bool
    {
        return $this->vie > 0;
    }

    public function subirDegats(int $degats): void
    {
        $this->vie -= $degats;
        if ($this->vie < 0) {
            $this->vie = 0;
        }
    }
}

class Guerrier extends Personnage
{
    public function attaquer(): int
    {
        return $this->force;
    }
}

class Mage extends Personnage
{
    public function attaquer(): int
    {
        return (int)($this->force * 1.5);
    }
}


$guerrier = new Guerrier("Thor", 100, 20);
$mage = new Mage("Gandalf", 80, 25);

