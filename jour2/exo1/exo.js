// !------------- CONTACTER DES API ------------------
// TODO 1: récupérer le titre h2 dans une variable counter
// TODO 2-1: créer une variable majCounter à laquelle on assigne une fonction fléchée
// TODO 2-2: dans la F =>, créer une variable data à laquelle on assigne la fonction fetch()
// TODO 2-3: fetch(), prend en param l'Url de l'API
// TODO 2-4: Faire un console.log de data
// TODO 3-1: Tjrs dans la F =>,créer une variable dataTransformed à laquelle on assigne data
// TODO 3-2: sur la variable data on utilise la fonction .json()
// TODO 3-3: Faire un console log de dataTransformed
// TODO 4-1: Tjrs dans la F =>,au InnerHTML de counter, assigner la value dans dataTransformed
// TODO 4-2: remmettre le filter de counter en "blur(0)"
// TODO 5: on éxecute notre fonction majCounter quelquepart dans notre programm



//** METHODE avec Fetch + async Await */
const counter = document.getElementById('counter');
//de base une ƒ° => est anonyme, astuce pour désanonymiser, on la stocke dans une variable
const majCounter = async () => {
    //Data va récup Toutes les données de l'api
    const data = await fetch('https://api.countapi.xyz/hit/sltcava/visites');
    console.log(data);
    //Plutot que de Travailler sur la réponse, on va la transformé pour 
    //qu'elle deviennt un OBJET JS (+ pratique)
    const dataTransformed = await data.json();
    console.log(dataTransformed);
    counter.innerText = dataTransformed.value;
    counter.style.filter = 'blur(0)';
};
majCounter();



//** METHODE avec Fetch +then + catch + async Await */
// const counter = document.getElementById('counter');
// const majCounter = ()=>{
//     // fetch("https://api.npms.io/v2/invalid-url")
//     fetch("https://api.countapi.xyz/hit/sltcava/visites")
//  .then(async response => {
//    const data = await response.json();
//    // check for error response
//    if (!response.ok) {
//      // get error message from body or default to response statusText
//      const error = (data && data.message) || response.statusText;
//      //ƒ° native de JS utilisé sur les objets de type Promise
//      return Promise.reject(error);
//    }
//    counter.innerText = data.value;
//    counter.style.filter = 'blur(0)';
//  })
//  .catch(error => {
//    console.error("There was an error!", error);
//  });
// }
//  majCounter();

// EXO POKEMON : aire en sorte d'afficher les noms des pokemon dans une page 

const countPokemon = document.getElementById('counter');
const majCounterPokemon = async () => {
    let data = await fetch('https://pokeapi.co/api/v2/pokemon');
    console.log(data);
    const dataTransformed = await data.json();
    console.log(dataTransformed);
    counter.innerText = dataTransformed.value;
    counter.style.filter = 'blur(0)';
};
majCounter();