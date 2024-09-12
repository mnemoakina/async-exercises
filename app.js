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

document.addEventListener("DOMContentLoaded", function () {
  const musicControlButton = document.getElementById("music-control");
  const audio = document.getElementById("background-music");

  let isPlaying = false;

  musicControlButton.addEventListener("click", function () {
    if (isPlaying) {
      audio.pause();
      musicControlButton.textContent = "🎶";
    } else {
      audio.play();
      musicControlButton.textContent = "🔇";
    }
    isPlaying = !isPlaying;
  });
});
// END FOR FUN CODE

// TODO, El ejercicio empieza aca 👇
// Note: las funciones 0,1,2 hay que comentar la llamada para evitar que molesten al resto del ejercicio.

// 0 - rickRollingUser() una funcion
// que dado un tiempo por ejemplo 30 segundos redirija al
// usuario a:
// https://www.youtube.com/watch?v=dQw4w9WgXcQ

/* function rickRollingUser(){
  setTimeout(function () {
    window.location.href = "https://www.youtube.com/watch?v=dQw4w9WgXcQ";
  }, 30000);
} */

// 1 -  Cambiar el titulo de la pagina por cada un segundo.
// "80' game 🎮 ", "insert 🪙 "  y "🥔 You won!"

/* function changeTitle() {
  const titles = ["80' game 🎮", "insert 🪙", "🥔 You won!"];
  let index = 0;
 
  setInterval(() => {
    document.title = titles[index];
    index = (index + 1) % titles.length;
  }, 1000);  
} */

// 2 - annoyingMessage() hacer una funcion que
// cada 1 minuto aparezca un alert con el mensaje  "Get a Premium Account 🤩"
/* function annoyingMessage(){
  setInterval(()=>{
  window.alert("Get a Premium Account 🤩")  
  },60000);
} */

// 4 - Hacer intermitente el mensaje de "Please, insert coin 🪙..."
// tip: utilizar las clases de css fadeIn fadeOut
/* const msgCoin = document.getElementById("msgCoin");
setInterval(()=>{
  msgCoin.classList.toggle("fadeIn");
  msgCoin.classList.toggle("fadeOut");
},1000); */

// 5 - Implementar la funcion fetchScores()
// traer los datos de la tabla de posiciones
// utilizando fetch(), puede ser desde un json
// server o de alguna fake api como mocki.io.
// se provee de un db.json de ejemplo

const URL = "http://localhost:8000/scores";

function taskList(data){
return `
<div></div>
  <ul class="scoreRecord">    
    ${data.map (e => `<li class="scoreRecordItem">${e.score} ${e.name} ${e.character}</li>`).join('\n')}    
  </ul>
  <div></div>
`

}

function showScore(score){
  const scorelist = document.querySelector(".scoreList");
  scorelist.innerHTML = score;
}

async function fetchData(){
  try {
    const res = await fetch(URL, {method:"GET"});
    const data = await res.json();
    //console.log(data);
    const score = await taskList(data); 
    await showScore(score);    
  } catch (error) {
    console.log(error);    
  } finally { 
    console.log("Finally contenido");
  }  
}
fetchData();  


// 6 - Actualizar constantemente el scoreboard
// de la pagina utilizando polling.

/* async function fetchData(){
  try {
    const res = await fetch(URL, {method:"GET"});
    const data = await res.json();
    console.log(data);    
  } catch (error) {
    console.log(error);    
  } finally { 
    console.log("Finally contenido");
  }
}
setInterval(fetchData,1000) */

