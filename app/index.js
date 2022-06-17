import PokemonGetter from '../src/PokemonGetter.js';

var getter = new PokemonGetter();

var el = document.querySelector('#appid');
el.innerText = 'help me please!!'

var getPokeman = async function() {
  getter.getPokeman().then(onPokemanSuccess, onPokemanFailure);
}

var onPokemanSuccess = (data) => {
  el.innerText = `${data.name}`;

  var img = document.createElement('img');
  img.src = `${data.sprites.front_default}`

  el.appendChild(img)
}

var onPokemanFailure = (error) => {
  el.innerText = JSON.stringify(error);
  console.log(error);
}

getPokeman();
