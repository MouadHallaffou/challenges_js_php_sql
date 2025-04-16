Exercice : Système de gestion de facturation freelance
Contexte :
Vous travaillez dans une startup spécialisée dans la mise en relation entre freelances et clients. Votre équipe a pour mission de développer un système de gestion de factures, permettant à la plateforme de générer, suivre et regrouper les paiements des freelances.
Ce système doit être pensé en programmation orientée objet (POO) en respectant les principes SOLID, l’encapsulation, l’héritage, le polymorphisme, les interfaces, les classes abstraites, les méthodes statiques, et les classes finales.

Objectifs :
Manipuler les concepts avancés de la POO en PHP
Comprendre l'intérêt de l'encapsulation, des interfaces, des classes abstraites et finales
Appliquer le polymorphisme pour gérer différents types de factures
Organiser le code en modules réutilisables et cohérents

Consignes techniques :
Créer une interface Payable avec les méthodes :
calculateTotal() : retourne le montant total à payer.
isPaid() : retourne si la facture est payée.

// Créer une classe abstraite AbstractInvoice contenant les attributs suivants :
// number (string) : numéro de facture
// clientName (string) : nom du client
// amount (float) : montant de base
// paid (bool) : statut de paiement

// Cette classe doit :
// Implémenter l’interface Payable
// Fournir des getters et setters avec validation
// Fournir une méthode markAsPaid() pour changer le statut
// Avoir une méthode abstraite calculateTotal()

<?php

interface Payable
{
    public function calculeTotal();
    public function isPaid();
}


abstract class AbstractInvoice implements Payable
{
    protected string $number;
    protected string $clientName;
    protected float $amount;
    protected bool $paid;

    public function __construct($number, $clientName, $amount, $paid)
    {
        $this->number = $number;
        $this->clientName = $clientName;
        $this->amount = $amount;
        $this->paid = $paid;
    }

    public function getNumber(){
        return $this->number;
    }
    public function getClientName(){
        return $this->clientName;
    }
    // .....

    public function setNumber($number){
        $this->number = $number;
    }
     public function setClientName($clientName){
        $this->clientName = $clientName;
     }

    //  .....

    public function markAsPaid(){
        return $this->paid = true;
    }

    public abstract function calculateTotal();

}








// Créer trois classes filles de AbstractInvoice, chacune avec sa logique spécifique :
// StandardInvoice : le total = montant de base
// DiscountedInvoice : applique un taux de réduction (ex : 20%)
// RecurringInvoice : multiplie le montant par le nombre de mois (abonnement)


// Créer une classe finale InvoiceManager contenant uniquement des méthodes statiques pour :
// Afficher un résumé des factures (numéro, client, total, statut)
// Calculer le total des impayés
// Regrouper les factures par client


// Créer un script de test :


// Créez plusieurs factures avec des clients et types différents
// Marquez certaines comme payées
// Utilisez InvoiceManager pour afficher le récapitulatif, le total impayé et les factures par client

// ✅ Exemple attendu dans l'affichage :
// Facture INV001 - Client : Houssam - Montant : 500MAD - Statut : Non payée
// Facture INV002 - Client : Khalid - Montant : 640MAD - Statut : Payée
// Facture INV003 - Client : Houssam - Montant : 1200MAD - Statut : Non payée

// Total des impayés : 1700MAD

// Factures pour Houssam:
// - INV001
// - INV003 