// Définissez une classe vide appelée Voiture avec class Voiture {}.
// Créez un objet maVoiture à partir de cette classe avec new Voiture() et affichez-le.
// Ajoutez une propriété marque à la classe Voiture, instanciez un objet avec marque = "Toyota", et affichez la marque.
class Voiture{
    constructor(marque){
        this.marque = marque
    }
};

const maVoiture = new Voiture("Unknown");
console.log(maVoiture);

const maVoiture2 = new Voiture('toyota');
console.log(maVoiture2);

// Créez une classe Animal avec une propriété nom, et instanciez deux animaux (ex. "Lion", "Chat") en affichant leurs noms.
// Ajoutez une méthode parler() à Animal qui affiche "L'animal fait un son", et appelez-la pour un objet.
// Créez une classe Rectangle avec les propriétés longueur et largeur, et instanciez un rectangle (ex. 5 et 3).
// Ajoutez une méthode aire() à Rectangle qui retourne longueur * largeur, et affichez l’aire d’un rectangle.
class Animal{
    constructor(name){
        this.name = name;
    }
    parler(){
        console.log(`${this.name} fait un son` );
    }
}

const lion = new Animal('lion')
console.log(lion);
lion.parler();

class Rectangle {
    height;
    width;
    constructor(height, width){
        this.width = width;
        this.height = height;
    }
    aire(){
        return this.width * this.height;
    }
}

const example = new Rectangle(5 ,3);
console.log(example.aire());


// Créez une classe Personne avec un constructeur constructor(nom, age) qui initialise ces propriétés, et instanciez une personne.
// Instanciez deux objets Personne (ex. "Alice", 25 et "Bob", 30), et affichez leurs propriétés.
// Ajoutez une méthode saluer() à Personne qui affiche "Bonjour, je m'appelle [nom]", et testez-la.
class Personne {
    constructor(nom , age){
        this.nom = nom;
        this.age = age;
    }
    saluer(){
       console.log(`Bonjour, je m'appelle ${this.nom}.`);
    }
}
const mouad = new Personne('mouad', 10);

const Alice = new Personne("alice" , 25);
console.log(Alice)
const Bob = new Personne("bob", 30);
console.log(Bob);
Bob.saluer();

