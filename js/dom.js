let showItems = (pokeData) => {
   let pokeDisplay = document.getElementById("poke-display");

   pokeData.forEach((pokemon) => {
      let pokeBlock = buildPokemon(pokemon);
      pokeDisplay.innerHTML += pokeBlock;
   });
}

let buildPokemon = (pokemon) =>{
   //building a string to create the visual display
   //notice commas - define many with one let
   let block = `<div class="col-md">`,
      card = `<div class="card" style="width: 18rem;">`,
      img = `<img class="card-img-top" src="${pokemon.ThumbnailImage}" alt="${pokemon.name}">`,
      content = `<div class="card-body">
                        <h4 class="card-title">${pokemon.name}</h4>
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <a href="https://www.pokemon.com/us/pokedex/${pokemon.name}" class="btn btn-primary" target="_blank">Details: ${pokemon.name}</a>
                    </div>
                </div>`
   block += `${card + img + content}</div>`;
   return block;
}