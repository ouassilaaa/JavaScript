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

//! ----------------------EXO CLASS BANCAIRE----------------------
/*EXO POO CLASSE : Les comptes bancaire 

## Exception+POO 

## Enoncé gérer des comptes en banques 

## Consignes
 - créer une classe CompteBancaire avec les méthodes de crédit, de retrait et de visualisation de l'état du compte
on doit pouvoir également faire un virement d'un membre à un autre 
- générer une exception sur le prélèvement / retrait interdit (qui dépasse le solde)

 ## Détails 

Faire un scénario avec gestion de 3 comptes crédités à 1000 chacun (Alex, Clovis, Marco), puis Alex retire 100, puis Marco fait un virement de 300 à Clovis... Enfin Alex tente un retrait de 1200. Afficher tous les soldes finaux. Ces comptes sont placés dans un tableau associatif de clients. les sorties sont dans la console*/

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

  class CompteBancaire {
    constructor(nom){
      this.nom= nom;
      this.credit = 0;
    }
    Credit(montantCred){ 
      this.credit+=montantCred;              
      console.log(`Ajout de: ${montantCred}€ pour ${this.nom}.`);
      return this.credit;
    }
    retrait(montantRetrait){
      if(this.credit<montantRetrait){
      console.log(`retrait de ${montantRetrait}€ refusé, t'as plus une thune mec.`)
      }else{
      console.log(`${this.nom} à retiré ${montantRetrait}€`);
      return this.credit -= montantRetrait;
      }
    }
    creditDisplay(){
      console.log(`${this.nom}, il te reste ${this.credit}€.`);
    }
    virement(montant,compte){
      if(this.credit<montant){
        console.log(`virement de ${montant}€ refusé, t'as plus une thune mec.`);
      }else{
        compte.Credit(montant);
        console.log(`${this.nom} à fait un virement de ${montant}€ à ${compte.nom}.`);
        this.credit -= montant;
      }
    }
  }
  
  const lesComptes2 = {
    "Alex" : new CompteBancaire("Alex"),
    "Clovis" : new CompteBancaire("Clovis"),
    "Marco" : new CompteBancaire("Marco"),
  }
  
  console.log(lesComptes);
  
  for (let key in lesComptes)
        lesComptes[key].Credit(1000);
  
  lesComptes["Alex"].creditDisplay();
  
  lesComptes["Marco"].virement(300, lesComptes["Clovis"]);
  
  lesComptes["Marco"].creditDisplay();
  lesComptes["Clovis"].creditDisplay(); 