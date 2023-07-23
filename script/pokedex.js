// const main$$ = document.querySelector(".main")
// // fetch("https://amiiboapi.com/api/amiibo/")
// //   .then((response) => response.json())
// //   .then((res) => console.log(res.amiibo))

// const getCharacters = async () => {
//   // recuperar la información de la respuesta de mi url, que en una futuro va a ser mi base de datos y segun la tenga pasa a la siguiente linea
//   const response = await fetch("https://starwars-server.vercel.app/characters");
//   //   segun tiene ya todos los datos de mi respuesta lo que le estamos diciendo con el await es oye esperate que tengas todos mis datos y segun los tengas ya me los conviertes a json para que yo pueda leerlos adecuadamente.
//   const res = await response.json();
//     console.log(res.data.characters);
//   return res.data.characters;
// };

const fetchPokemon = () => {
      const url = `https://pokeapi.co/api/v2/pokemon/?name=${name}`
      fetch(url)
      .then (res =>{
          return res.json();
              })
      .then (data => {
          console.log(data);
      })
  
  }
  // fetchPokemon();

  // function getPokemonByName(name) {
//   // Crear la URL de la solicitud
//   const url = `https://pokeapi.co/api/v2/pokemon/?name=${name}`;
const mappedCharacters = (characterswithoutMapped) => {
  // console.log(characterswithoutMapped);
  return characterswithoutMapped.map((character) => ({
    nombre: character.name,
    imagen: character.image,
    rol: character.role,
  }));
};

const pokemon = results.map((result) => ({
  name: result.name,
  image: result.sprites['front_default'],
  type: result.types.map((type) => type.type.name).join(', '),
  id: result.id
const drawCharacters = (characters) => {
    main$$.innerHTML=""
 for (const character of characters) {
