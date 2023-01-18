//! ----------------------CLASS------------------------------
//? Le nom des classes commence toujours par une majuscule (par convention)
//? On utilise la fonction constructor qui aura en paramètre des données que l'on juge indispensable 


//? Pour créer des nouveaux Film
class Film {
  constructor(title, author, duration){
    // Dans la classe on va déclarer des variables qui recevront chaque paramètres
    // Ces variables de classe sont déclarées et manipulées avec this
    this.title = title;//*attribut en IN MODE (passés en paramètres)
    this.author = author;
    this.duration = duration;
    this.nombreLikes = 0; //**On peut aussi avoir des attributs en OUT mode (pas besoin de les passer en paramètre)
  }
};

//? Une fois notre classe créee on peut créer + facilement + rapidement des nouveaux films 
//?(on va les stocker dans des variables)

let taxi3 = new Film('Taxi III','Luk Bresson',120);
console.log(taxi3);

class Voiture{
  // On peut aussi avoir des classes qui n'ont rien dans le constructor
  constructor(){
    this.moteurAllumé = false;
  };
  // Chaque class peut avoir des fonction (plutot méthodes d'instances)
  // Qui ne pourrons être utilisées QUE sur des objets de cette classe
  demarrerMoteur(){
    this.moteurAllumé = true;
    console.log('On va Faire des Drift sur le Périph !');
  };
};

let superCar = new Voiture;
superCar.demarrerMoteur();
console.log(superCar);

class User {
  //* Constructor -> initialise les données
  constructor(nom, prenom, mail) {
    this._nom = nom;        //! 3 attributes en In mode
    this._prenom = prenom;
    this._mail = mail;
  }
}
//! ----------------------EXO CLASS IMC----------------------
// TODO

// Créer une classe Imc qui a dans son constructor 3 variables
//   °nom
//   ° poids 
//   ° taille 
//   Dans cette classe on a une fonction calculImc() qui calcule et retourne l’ imc.
//   on a aussi une fonction display() qui affiche les infos dans la console du navigateur
//   Exemple de ce que ça afficheSébastien 
//   Chabal (135 kg, 1.89 M) a un IMC de: 37.79
//   En dehors de cette classe on a une variable liste qui est un tableau contenant 
//   2 nouvelles instances (param au choix dans le constructor) de la classe Imc.
//   Trouver un moyen de parcourir cette liste de manière à utiliser la fonction display sur chaque élément de la liste.
console.log('------------------IMC-----------------');


class Imc {
  //* Constructor -> initialise les données
  constructor(nom, poids, taille) {
    this._nom = nom;        //! 3 attributes en In mode
    this._poids = poids;
    this._taille = taille;
    this._imc = this.calculImc();    //! attribute en OUT mode (à calculer)
  }
    //* Le calcul
  calculImc() {    //* Format simple (2 nombres après le . ou la ,)
    // return this._poids/(this._taille*this._taille);
    //  return (this._poids/Math.pow(this._taille, 2)).toFixed(2);
    return (this._poids/(this._taille ** 2)).toFixed(2);
  }
    //* Affichage
  display() {
    console.log
    (this._nom + " (" + this._poids + " kg, " + this._taille + " M) a un IMC de: " + this._imc);
  }
}

  //* progr principal -> injection des données
const list = [
    new Imc("Sébastien Chabal",135, 1.70),
    new Imc("Escaladeuse Ultra Svelte", 45, 1.68),
    new Imc("JOJO ", 300, 2),
    new Imc("Gontrand ", 90, 1.75),
    new Imc("Colonel Gran Jean ", 200, 1.75),
    new Imc("JOsiane de la Vega", 99, 1.55),
    ];
//*Boucle forEach qui parcourt le tableau avec une variable temporaire uneCase
list.forEach(uneCase => uneCase.display());

//! ----------------------EXO CLASS PME----------------------
console.log('------------------MA PME-----------------');
class Employee {
  constructor(nom, prenom, age, salaireMensuel) {
    this._nom = nom;    
    this._prenom = prenom;
    this._age = age;
    this._salaireMensuel = salaireMensuel;
    this._cout = this.calculCout();// Calcul cout annuel de l'employé :attribut en outMode
  }
// me servira à passer le cout d 1 employé dans la classe PME
  getCout() {
      return this._cout;
  }
//calcul cout total d 1 salarié
  calculCout() {    
    const NB_MOIS_SAL = 12; 
    const LA_TAXE = 0.9;     
    //Un léger calcul
    return this._salaireMensuel * NB_MOIS_SAL * (1 + LA_TAXE);
  }
}

class Pme {
  constructor(nom, equipe, ventes, coutsFixes, achats) {
      this._nom = nom;
      this._equipe = equipe;
      this._cout = coutsFixes + achats;// On peut assigner directement un calcul ici
      this._ventes = ventes;
      this._bilan = 0;    // attribut en OutMode a calculer
  }

  bilanCalculed () {        
    let cumulEquipe = 0;
    console.log(`${this._nom} : Cout Initial : ${this._cout}`);

//Boucle qui parcourt le tableau des salariés (equipe)
//Sur chaque salarié parcouru dans le tableau, on récupère et cumule le cout de ce Salarié
    for (let unSalarie of this._equipe){ 
          cumulEquipe += unSalarie.getCout();
        }

    console.log(`${this._nom} : Cout Total Equipe : ${cumulEquipe}`);
  //Ensuite dans les couts de l'entreprise on cumul le cout de toute l'équipe
    this._cout += cumulEquipe;
    console.log(`${this._nom} : VENTES : ${this._ventes}`);
//Dans les _cout on va avoir les frais fixe + frais achat et 
//on vient de rajouter en + le cout total d'une equipe
//donc le bilan de la pme : les ventes moins tous les couts (frais fixes, achat + cout total de l'equipe à l'année)
    this._bilan = this._ventes - this._cout;
    console.log(`${this._nom} : BILAN : ${this._bilan}`);
  }
}
    

// Scénario
const pme = new Pme (
  //Le nom entreprise
    "Ma Petite Entreprise - ", 
    //L'equipe de salariés (un tableau)
    [new Employee ("Duval", "Paul", 30, 2000),
    new Employee ("Durand", "Alain", 40, 3000),
    new Employee ("Dois", "Sylvia", 50, 4000),],
     //le revenu , frais fixe, frais d'achat
    300000,
    20000,
    50000);
pme.bilanCalculed();

// EXO CLASS BANK 
// Comptes bancaires
class CompteBancaire {
    constructor(titulaire) {
      this.titulaire = titulaire;
      this.solde = 0;
    }
    // Ajoute un montant au solde
    crediter(montant) {
      //Cumul du montant dans le solde du compte bancaire
      this.solde += montant;
      console.log ("Ajout de: " + montant + " pour: " + this.titulaire);
    }

      // Retirer un montant au solde
    retirer(montant) {
      try {
          if (this.solde < montant){
              throw this.titulaire + ", retrait de: " +  montant + " refusé avec solde: " + this.solde;
          }
          // Ci dessous l'opération du retrait
              this.solde -= montant;
          console.log ("Retrait de: " + montant + " pour: " + this.titulaire);
      }
      catch (error) {
        //Quand il y a une exception elle est détectée par catch
        //Qui va afficher l'erreur (msg de throw) dans un console log
          console.log ("--J'AI ATTRAPÉ MON ERREUR CUSTOM--->" + error);
      }
    } 

// Le virement sera utilisé sur 1 instance de CompteBancaire 
    virer(montant, membre) {
        console.log ("Virement de: " + montant + " de la part: " + this.titulaire + " vers: " +
              membre.titulaire);
              console.log(this)

        membre.crediter(montant);
        this.retirer(montant);// Ici le this va récupérer l'instance sur laquelle on utilise .virer() 
    }
  
    // Renvoie la description du compte
    decrire() {
      return "titulaire: " + this.titulaire + ", solde: " + this.solde;
    }
  }

  // Main scénario, gère 3 comptes bancaires dans un tableau associatif 
  const lesComptes = {
      "Alex" : new CompteBancaire("Alex"),
      "Clovis" : new CompteBancaire("Clovis"),
      "Marco" : new CompteBancaire("Marco"),
  }  
  // lecture tableau associatif ou Objet["truc"] 
  // Boucle FOR IN qui Crédite et décrit chaque compte
  for (let element in lesComptes)
      lesComptes[element].crediter(1000);
      
  // un retrait de la part d'ALex
  lesComptes["Alex"].retirer (100);
  // un petit virement de Marco à Clovis :
  lesComptes["Marco"].virer (300, lesComptes["Clovis"]);
  // un petit retrait incorrect pour Alex
  lesComptes["Alex"].retirer (1200);
  // bilan
  for (let unTruc in lesComptes)
      console.log(lesComptes[unTruc].decrire());




