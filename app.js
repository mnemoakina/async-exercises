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
// FOR FUN SELECTED CHARACTER CODE

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
function rickRollingUser() {
  setTimeout(() => {
    window.location = "https://www.youtube.com/watch?v=dQw4w9WgXcQ";
  }, 300000);
}

rickRollingUser();

// 1 -  Cambiar el titulo de la pagina por
// "80' game 🎮 ", "insert 🪙 "
// let isFirstTitleTurn = true;

// function alternateTitle() {
//   const firstTitle = "80' game 🎮 ";
//   const secondTitle = "Insert a 🪙 ";
//   let currentTitle;

//   if (isFirstTitleTurn) {
//     currentTitle = firstTitle;
//   } else {
//     currentTitle = secondTitle;
//   }
//   isFirstTitleTurn = !isFirstTitleTurn;
//   document.title = currentTitle;
// }

// function titleTimer() {
//   setInterval(alternateTitle, 1000);
// }

// titleTimer();

// 2 -  Cambiar el titulo de la pagina por
// "80' game 🎮 ", "insert 🪙 "  y "🥔 You won!"
let iterator = 0;

function changeTitle() {
  const titleCollection = ["80' game 🎮 ", "insert 🪙 ", "🥔 You won!"];
  const titleIndex = iterator % titleCollection.length;
  const newTitle = titleCollection[titleIndex];
  document.title = newTitle;
  iterator++;
}

function alternateTitle() {
  setInterval(changeTitle, 1000);
}

alternateTitle();

// 3 - annoyingMessage() hacer una funcion que
// cada 5 segundos aparezca un alert con el mensaje
// "Get a Premium Account 🤩"
function annoyingMessage() {
  setInterval(() => {
    window.alert("Get a Premium Account 🤩");
  }, 5000);
}

// annoyingMessage();

// 4 - Hacer intermitente el mensaje de "Please, insert coin 🪙..."
// tip: utilizar las clases de css fadeIn fadeOut
function fadeIn() {
  const waitingBoardElem = document.getElementsByClassName("waiting-board")[0];
  waitingBoardElem.setAttribute("class", "waiting-board up");
}

function fadeOut() {
  const waitingBoardElem = document.getElementsByClassName("waiting-board")[0];
  waitingBoardElem.setAttribute("class", "waiting-board down");
}

let isFadeIn = true;

function fadingMessage() {
  console.log("aca");
  setInterval(() => {
    if (isFadeIn) {
      fadeIn();
    } else {
      fadeOut();
    }
    isFadeIn = !isFadeIn;
  }, 1000);
}

fadingMessage();

// 5 - Implementar la funcion fetchScores()
// traer los datos de la tabla de posiciones
// utilizando fetch(), puede ser desde un json
// server o de alguna fake api. se provee db.json de ejemplo
let scores = [];

const url = "http://localhost:3000/scores";

async function fetchScores() {
  try {
    const response = await fetch(url, { method: "GET" });
    const data = await response.json();

    if (JSON.stringify(data) === JSON.stringify(scores)) {
      deleteOldScores();
    }

    scores = data;
    console.log("scores in fetch: ", scores);
  } catch (error) {
    console.log("Error fetching data: ", error);
  }
}

function showScores() {
  const list = document.getElementsByTagName("ul")[0];
  let positionNumber = 1;
  scores.forEach((e) => {
    const newItem = document.createElement("li");
    const textNode = document.createTextNode(
      `Position: ${positionNumber} Score: ${e.score}, Name: ${e.name}, Character: ${e.character}.`
    );
    newItem.appendChild(textNode);
    list.appendChild(newItem);
    positionNumber++;
  });
}

async function fetchAndShowScores() {
  await fetchScores();
  showScores();
}

fetchAndShowScores();

// 6 - Actualizar constantemente el scoreboard
// de la pagina utilizando polling.
function deleteOldScores() {
  scores = [];
  const scoreElemets = [...document.getElementsByTagName("li")];
  console.log("scoreElments: ", scoreElemets);
  scoreElemets.forEach((e) => {
    e.remove();
  });
}

async function pollingFetch() {
  setInterval(() => {
    fetchAndShowScores();
  }, 1000);
}

pollingFetch();
