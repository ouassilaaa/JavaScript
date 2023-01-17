// EXO POKEMON : aire en sorte d'afficher les noms des pokemon dans une page 

const pokemonListe = document.getElementById('pokeListe');
//de base une ƒ° => est anonyme, astuce pour désanonymiser, on la stocke dans une variable
const pokemonApiContact = async () => {
    //Data va récup Toutes les données de l'api
    const pokemonData = await fetch('https://pokeapi.co/api/v2/pokemon');
    console.log(pokemonData);
    //Plutot que de Travailler sur la réponse, on va la transformé pour 
    //qu'elle deviennt un OBJET JS (+ pratique)
    const pokemonDataTransformed = await pokemonData.json();
    console.log(pokemonDataTransformed);
    console.log(pokemonDataTransformed.results[0].name);
    // Boucle pour parcourir le tableau results dans la réponse
    for(let i=0;i<pokemonDataTransformed.results.length;i++){
        let listElement = document.createElement('li');
        listElement.innerText = pokemonDataTransformed.results[i].name;
        pokemonListe.append(listElement);
    }
    const pokemonName = document.createElement('h1');
    pokemonName.innerText = pokemonDataTransformed.results[0].name;
    document.body.append(pokemonName);
};
pokemonApiContact();