// sélectionner les éléments
// sélectionner le bouton effacer, const qui nous permettra d'accéder à l'élement qu'on voudra supprimer 
const clear= document.querySelector(".clear"); 
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






