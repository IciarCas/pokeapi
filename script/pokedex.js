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

    // let characterFigure$$ = document.createElement("figure")
    // let characterH2$$ = document.createElement("h2")
    // let characterImg$$ = document.createElement("img")
    // let characterFigcaption$$ =document.createElement("figcaption")

    // characterH2$$.textContent=character.nombre
    // characterImg$$.setAttribute("src",character.imagen)
    // characterImg$$.setAttribute("alt",character.nombre)
    // characterFigcaption$$.textContent=character.rol

    // characterFigure$$.appendChild(characterH2$$)
    // characterFigure$$.appendChild(characterImg$$)
    // characterFigure$$.appendChild(characterFigcaption$$)
    // main$$.appendChild(characterFigure$$)

    let characterFigure$$ = document.createElement("figure")
    characterFigure$$.innerHTML=
    `
        <h2>${character.nombre}</h2>
        <img src="${character.imagen}" alt="${character.nombre}">
        <figcaption>${character.rol}</figcaption>
    `
    main$$.appendChild(characterFigure$$)

 }

}
const drawInput = (characters) => {
    // console.log(characters);
    const input$$ = document.querySelector("input")
    input$$.addEventListener("input", ()=> searchCharacters(input$$.value,characters))
}
const searchCharacters=(filtro, characters)=> {
   let filteredCharacters = characters.filter((character)=>character.nombre.toLowerCase().includes(filtro.toLowerCase()))
//    console.log(filteredCharacters);
   drawCharacters(filteredCharacters)
}
const init = async () => {
  // primero hago mi petición y me espero a que esten todos mis personajes aqui dentro de la función porque no existen en otro lado
  const characters = await getCharacters();
  //    le mandamos nuestros characters sin mapear a nuestra funcion mapear y esta nos devuelve un retorno del map con ya nuestro array con los campos como nosotros le hemos puesto
  const mappeCharacter = mappedCharacters(characters);
  
  drawCharacters(mappeCharacter)

  drawInput(mappeCharacter)

};
init();




const main$$ = document.querySelector(".main")
// fetch("https://amiiboapi.com/api/amiibo/")
//   .then((response) => response.json())
//   .then((res) => console.log(res.amiibo))

const getCharacters = async () => {




// const promises = [];
// for (let i = 1; 1 < 150; i++); {
//   const url = `https://pokeapi.co/api/v2/pokemon/$(i)`;
//   promises.push(fetch(url).then((res) => res.json()));
// }

// Promise.all(promises).then(results) => {
//   const pokemon = results.map(data) => ({
//     name: data.name,
//     id: data.id,
//     image: data.sprites [`front_default`],
//     type: data.types.map((type) => type.type.name).join(',')

//   })
//   displayPokemon(pokemon);
// }

//for (let i = 1; 1<=150; i++){
  //  const url = `https://pokeapi.co/api/v2/pokemon/$(i)`;
    //fetch(url)
    //.then((response) => response.json())
    //.then((res) => pokedex.push(res));

//}

//const pokedex = [];
//console.log(pokedex);


// const fetchPokemon = () => {
//     const url = `https://pokeapi.co/api/v2/pokemon/1`
//     fetch(url)
// //     .then (res =>{
// //         return res.json();
// //             })
// //     .then (data => {
// //         console.log(data);
// //     })

// // }
// // fetchPokemon();


// // Importar el módulo `fetch`
// const fetch = require('fetch');

// // Definir la función `getPokemon`
// function getPokemon(id) {
//   // Crear la URL de la solicitud
//   const url = `https://pokeapi.co/api/v2/pokemon/${id}/`;

//   // Realizar la solicitud
//   return fetch(url)
//     .then(response => response.json())
//     .catch(error => {
//       console.log(error);
//       throw error;
//     });
// }

// // Definir la función `getPokemonByName`
// function getPokemonByName(name) {
//   // Crear la URL de la solicitud
//   const url = `https://pokeapi.co/api/v2/pokemon/?name=${name}`;

//   // Realizar la solicitud
//   return fetch(url)
//     .then(response => response.json())
//     .catch(error => {
//       console.log(error);
//       throw error;
//     });
// }

// // Definir la función `getAllPokemon`
// function getAllPokemon() {
//   // Crear la URL de la solicitud
//   const url = `https://pokeapi.co/api/v2/pokemon/`;

//   // Realizar la solicitud
//   return fetch(url)
//     .then(response => response.json())
//     .catch(error => {
//       console.log(error);
//       throw error;
//     });



















// const pokeBtn = document.querySelector('#pokeBtn')
// pokeBtn.addEventListener('click', getName)

// function getName (){
//     console.log('sjjdj')
// }

// async function getPokemon (id){
//     const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`)
//     const data = await response.json()
//     return data
// }
// async function init(){
//     const firstPokemon = await getPokemon(150)
//     window.pokemon.textContent = firstPokemon.name
//     window.image.setAttribute('src', firstPokemon.sprites.front_default)
// }
// init()


//const main$$ = document.querySelector(".main")
// fetch("https://amiiboapi.com/api/amiibo/")
//   .then((response) => response.json())
//   .then((res) => console.log(res.amiibo))

//const getCharacters = async () => {
  // recuperar la información de la respuesta de mi url, que en una futuro va a ser mi base de datos y segun la tenga pasa a la siguiente linea
  //const response = await fetch("https://starwars-server.vercel.app/characters");
  //   segun tiene ya todos los datos de mi respuesta lo que le estamos diciendo con el await es oye esperate que tengas todos mis datos y segun los tengas ya me los conviertes a json para que yo pueda leerlos adecuadamente.
  //const res = await response.json();
    //console.log(res.data.characters);
  //return res.data.characters;
//};
//const mappedCharacters = (characterswithoutMapped) => {
  // console.log(characterswithoutMapped);
  // return characterswithoutMapped.map((character) => ({
  //   nombre: character.name,
  //   imagen: character.image,
  //   rol: character.role,
  // }));
// };
// const drawCharacters = (characters) => {
//     main$$.innerHTML=""
//  for (const character of characters) {

    // let characterFigure$$ = document.createElement("figure")
    // let characterH2$$ = document.createElement("h2")
    // let characterImg$$ = document.createElement("img")
    // let characterFigcaption$$ =document.createElement("figcaption")

    // characterH2$$.textContent=character.nombre
    // characterImg$$.setAttribute("src",character.imagen)
    // characterImg$$.setAttribute("alt",character.nombre)
    // characterFigcaption$$.textContent=character.rol

    // characterFigure$$.appendChild(characterH2$$)
    // characterFigure$$.appendChild(characterImg$$)
    // characterFigure$$.appendChild(characterFigcaption$$)
    // main$$.appendChild(characterFigure$$)

//     let characterFigure$$ = document.createElement("figure")
//     characterFigure$$.innerHTML=
//     `
//         <h2>${character.nombre}</h2>
//         <img src="${character.imagen}" alt="${character.nombre}">
//         <figcaption>${character.rol}</figcaption>
//     `
//     main$$.appendChild(characterFigure$$)

//  }

// }
// const drawInput = (characters) => {
//     // console.log(characters);
//     const input$$ = document.querySelector("input")
//     input$$.addEventListener("input", ()=> searchCharacters(input$$.value,characters))
// }
// const searchCharacters=(filtro, characters)=> {
//    let filteredCharacters = characters.filter((character)=>character.nombre.toLowerCase().includes(filtro.toLowerCase()))
// //    console.log(filteredCharacters);
//    drawCharacters(filteredCharacters)
// }
// const init = async () => {
//   // primero hago mi petición y me espero a que esten todos mis personajes aqui dentro de la función porque no existen en otro lado
//   const characters = await getCharacters();
//   //    le mandamos nuestros characters sin mapear a nuestra funcion mapear y esta nos devuelve un retorno del map con ya nuestro array con los campos como nosotros le hemos puesto
//   const mappeCharacter = mappedCharacters(characters);
  
//   drawCharacters(mappeCharacter)

//   drawInput(mappeCharacter)

// };
// init();