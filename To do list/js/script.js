// sélectionner les éléments
// sélectionner le bouton effacer, const qui nous permettra d'accéder à l'élement qu'on voudra supprimer 
const clear= document.querySelector("clear"); 
// sélectionner l'élément avec l'id "date"
const dateElement=document.getElementById("date"); 
// sélectionner la liste
const list=document.getElementById("list"); 
// sélectionner l'input, la saisie
const input= document.getElementById("input"); 

// classe names
// classe Font awesome permettant d'obtenir le rond check
const CHECK= "fa-check-circle"; 
// classe Font awesome permettant d'obtenir le rond 
const UNCHECK="fa-plus-circle"; 
// classe Font awesome permettant d'obtenir l'effet rayer
const LINE_THROUGH="lineThrough"; 



//récupérer "to do" dans la memoire locale 
let data= localStorage.getItem("TODO"); //getItem permet de récuperer la liste 
//controle de si elle n'est pas vide pour la récuperer

if(data){
    LIST=JSON.parse(data); 
    loadToDo(LIST); // charge la liste
    id= LIST.length; 
} else{ LIST=[]; 
        id=0; 

}

//fonction qui permet de récupérer les infos(name,id...)
function loadToDo(array){
    array.array.forEach(function(item) {
                            addToDo(item.name, item.id, item.done, item.trash); 
        
    });
}

//effacer le stockage local avec localStorage.clear 
clear.addEventListener('click', ()=>{ localStorage.clear(); 
                                      location.reload(); //rafraichir la page   
                                    }); 


//afficher la date 
//je stock les options d'affichage de la date
let options= {weekday:'long', month:'short', day: 'numeric'}; 
//j'attribus a var today la date actuelle 
let today = new Date(); 
//modifie la date avec dateElement.innerHTML et attribution de la valeur locale 
dateElement.innerHTML =today.toLocaleDateString("fr-FR", options); 

//fonction pour continuer ou arreter si la tâche est dans la poubelle
function addTodo(toDo, id,done, trash){
    // si todo dans poubelle on arrete sinon on continue
    if(trash){
        return; 
    }

//selectionne des classes name FontAwesome
//opérateur ternaire if true=CHECK else=UNCHECK
const DONE=done ? CHECK : UNCHECK; 

//si done est true=LINE_TH sinon false""
const LINE= done ? LINE_THROUGH : ""; 

//text représentant le code html de la tâche : a certaine position (beforeend) on insère du html
const text= `<li class="item">
<i class="fa  ${DONE}  co" job="complete" id="${id}"></i> 
<p class="text ${LINE}"> ${toDo} </p>
<i class="fa fa-trash-o de" job="delete" id="${id}"></i>
</li>`;

//ajout text a la position beforeend avec inserAdjacentHTML(deux parametres)
const position= "beforeend"; 
list.insertAdjacentElement(position,text); 

};

//on récupère l'input (toDo) et on ecoute les touches pressees 
// on ecoute pour savoir si la touche entrée est pressée

document.addEventListener("keyup", function(event){
    //si touche pressée (keyup) et enter k13 
    if (event.keyCode==13){
        //récupère l'input
        const toDo=input.value; 
        //controle si l'input est vide 
        if(toDo){
            // 4 parametres: 
            // a) name = l'input
            // b) id= représente son index 
            // c) "done"= si true le ToDo est effectué     
            // d) "trash"= si true le ToDo est effacé
            addTodo(toDo, id, false, false); 

            //ajout d'un élément a la fin de la liste avec  LIST.push 
            LIST.push({
                name:toDo,
                id: id, 
                done: false, 
                trash: false
            });
             
        }

        input.value=""; 
        //incrementé l'id pour l'ajout d'élément 
        id++; 

    }}); 

//to do effectuee 
//element.classList pour retourner la classe de notre element
function completeTodo(element){
    //si element a pour classe CHECK on efface
    element.classList.toggle(CHECK);
    //sinon uncheck 
    element.classList.toggle(UNCHECK). 
    //parentNde pour acceder a l'element parent
    //querySelctor pour acceder a l'élement texte et lui donner la classe L_T
    element.parentNode.querySelector(".text").classList.toggle(LINE_THROUGH); 
    //ternaire pour actualiser 
    LIST[element.id].done = LIST[element.id].done? false : true ; 
}; 

//effacer une tâche: on doit accéder à l'élement parent du grand parent puis effacer l'enfant du grand ^parent 
function removeTodo(element){
    element.parentNode.parentNode.removeChild(element.parentNode); 
    //pour actualiser la LIST : 
    LIST[element.id].trash=true; 
};

//Cibler un élément créé
//on écoute les clics 
list.addEventListener("click", function(event){
    let element = event.target; //retourne l'élément cliqué
    const elementJob = event.target.attributes.job.value; //récupère job attribute supprimé ou exécuté 

    //si la tache est faite
    if(elementJob == "complete"){
        completeTodo(element); 

    //si tâche est effacée    
    } else if (elementJob == "delete"){
        removeTodo(element); 
    }

    //sauvegarder le To do dans la mémoire locale 
    localStorage.setItem('TODO', JSON.stringify(LIST)); 
});

//horloge
// 
setInterval(setClock, 1000)
// récuperer l'aiguille des heures , des minutes, et secondes
const hourHand = document.querySelector('[data-hour-hand]')
const minuteHand = document.querySelector('[data-minute-hand]')
const secondHand = document.querySelector('[data-second-hand]')


function setClock() {
    // on récupère l'heure actuelle
  const currentDate = new Date()
  // transformation de l'heure en seconde
  const secondsRatio = currentDate.getSeconds() / 60
  // en minute
  const minutesRatio = (secondsRatio + currentDate.getMinutes()) / 60
  // en heure
  const hoursRatio = (minutesRatio + currentDate.getHours()) / 12
  // assigne les données aux aiguilles
  setRotation(secondHand, secondsRatio)
  setRotation(minuteHand, minutesRatio)
  setRotation(hourHand, hoursRatio)
}


function setRotation(element, rotationRatio) {
  element.style.setProperty('--rotation', rotationRatio * 360)
}

// lancer la fonction et afficher l'heure
setClock()











