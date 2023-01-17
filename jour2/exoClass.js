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

 class Employes{
    constructor(nom, prenom, age, salaire){
        this.nom=nom; 
        this.prenom=prenom; 
        this.age=age;
        this.salaire=salaire;
    }

 } 

 class Pme{
    constructor(nom, team){
        this.nom=nom; 
        this.team=team; 
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