let results = [];

async function getPokemons() {
  for (let i = 1; i <= 150; i++) {
    const url = `https://pokeapi.co/api/v2/pokemon/${i}`;
    const response = await fetch(url);
    const data = await response.json();
    results.push(data);
  }

  const pokemons = results.map((result) => ({
    name: result.name,
    image: result.sprites["front_default"],
    type: result.types.map((type) => type.type.name).join(", "),
    id: result.id,
  }));

  console.log(pokemons);

  pokemons.forEach( pokemon => drawCharacters(pokemon) );
}

function drawCharacters(pokemon) {
  const cardTitle = document.createElement("h2");
  cardTitle.classList.add("card-title");
  cardTitle.innerText = pokemon.name;

  const cardSubtitle = document.createElement("h3");
  cardSubtitle.classList.add("card-subtitle");
  cardSubtitle.innerText = pokemon.type;

  const cardImage = document.createElement("img");
  cardImage.classList.add("card-image");
  cardImage.src = pokemon.image;

  const cardId = document.createElement("h3");
  cardId.classList.add("card-id");
  cardId.innerText = pokemon.id;

  const pokemonDiv = document.createElement("div");
  pokemonDiv.classList.add("card");
  pokemonDiv.appendChild(cardImage);
  pokemonDiv.appendChild(cardTitle);
  pokemonDiv.appendChild(cardId);
  pokemonDiv.appendChild(cardSubtitle);

  
  const pokedex = document.getElementById("pokedex");
  pokedex.appendChild(pokemonDiv);
}

getPokemons();


