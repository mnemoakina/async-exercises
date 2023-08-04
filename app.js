// FOR FUN SELECTED CHARACTER CODE
const charactersSoundMap = [
  { name: "ryu", file: "assets/hadouken.mp3" },
  { name: "ken", file: "assets/shoryuken.mp3" },
  { name: "chun-li", file: "assets/kikoken.mp3" },
];

function addCharacterHandlers() {
  const characterElements = [
    ...document.getElementsByClassName("character-section"),
  ];
  characterElements.forEach((e) => {
    e.addEventListener("click", (event) => onClickCharacter(event));
  });
}

function onClickCharacter(event) {
  const clickedCharacterName = event.target.id;
  const clickedCharacterSound = charactersSoundMap.find(
    (e) => e.name === clickedCharacterName
  ).file;
  const audio = new Audio(clickedCharacterSound);
  audio.play();
}

addCharacterHandlers();
// END FOR FUN CODE

// 0 - rickRollingUser() una funcion
// que dado un tiempo redirija al
// usuario a:
// https://www.youtube.com/watch?v=dQw4w9WgXcQ

// 2 -  Cambiar el titulo de la pagina por
// "80' game 🎮 ", "insert 🪙 "  y "🥔 You won!"

// 3 - annoyingMessage() hacer una funcion que
// cada 5 segundos aparezca un alert con el mensaje

// 4 - Hacer intermitente el mensaje de "Please, insert coin 🪙..."
// tip: utilizar las clases de css fadeIn fadeOut

// 5 - Implementar la funcion fetchScores()
// traer los datos de la tabla de posiciones
// utilizando fetch(), puede ser desde un json
// server o de alguna fake api. se provee db.json de ejemplo
// let scores = [];

// 6 - Actualizar constantemente el scoreboard
// de la pagina utilizando polling.
