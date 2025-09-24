document.getElementById('search-btn').addEventListener('click',searchpokemon);
function searchpokemon(){
    const query=document.getElementById('search-input').value.toLowerCase().trim();
    if(query){
        const apiUrl=`https://pokeapi.co/api/v2/pokemon/${query}`;
        console.log("Query entered:",query);
        

//  fetch(apiurl).then (response=>{

//  console.log(response.json ()); })


fetch(apiUrl)
.then (response => {
    if (!response.ok){
        throw  new Error('pokemon not found');
    }
    return response.json();
})
.then(Data=>{
    displaypokemon(Data);
})
.catch(error=>{
console.error('error:',error); 
displayError(error.message);
})
    }
}
const result={
    name:"whatever",
    class:"10",
    arr :[
       {
        a:"22",
        b:"33"
    },
{

a:"55",
b:"66"
}

],
link:"https://google.com"
}

function displaypokemon(pokemon){
const pokemonInfo=document.getElementById('pokemon-info');
pokemonInfo.innerHTML=`

<div class="pokemon-name">${'pokemon.name'}</div>
<div class="pokemon-img">
<img src="${pokemon.sprites.front_default}"alt="${pokemon.name}
">
</div>
<div class="pokemon-details">
<p><strong>Height:</strong>${pokemon.height/10}m<p>
<p><strong>Height:</strong>${pokemon.weight/10}kg<p>
<p><strong>Type:</strong>${pokemon.types.map(type=> type.type.name).join(',')

}
</p>
</div>

`;


}

function displayError(message){
const pokemonInfo=document.getElementById('pokemon-info');
pokemonInfo.innerHTML=`<p class="error>${message}</p>`;

}

// https://pokeapi.co/api/v2/pokemon/${query}

















