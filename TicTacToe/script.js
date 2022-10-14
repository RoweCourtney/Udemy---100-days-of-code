// __________________________________________________ Variables
let editedPlayer = 0;
let activePlayer = 0;
let currentRound = 1;
let gameIsOver = false;

const gameData = [
   [0, 0, 0],
   [0, 0, 0],
   [0, 0, 0],
];

const players = [
   {
      name: "",
      token: "X"
   },

   {
      name: "",
      token: "O"
   },
];

const playerConfigOverlay = document.getElementById("configOverlay");
const cancelConfigOverlay = document.getElementById("cancelBtn");
const backdrop = document.getElementById("backdrop");

const gameContent = document.getElementById("activeGame");

const editPlayer1Btn = document.getElementById("player1Btn");
const editPlayer2Btn = document.getElementById("player2Btn");
const newGame = document.getElementById("startBtn");

const formElement = document.querySelector("form");
const errOutput = document.getElementById("configErr");
const startErr = document.getElementById("nameErr");
const selectionErr = document.getElementById("notEmpty");

// const gameSquares = document.querySelectorAll("#gameBoard li");
const gameSquares = document.getElementById("gameBoard");
const activePlayerName = document.getElementById("activePlayer");

const gameOver = document.getElementById("gameOver");

// __________________________________________________ Event Listeners

editPlayer1Btn.addEventListener("click", openPlayerConfig);
editPlayer2Btn.addEventListener("click", openPlayerConfig);

cancelConfigOverlay.addEventListener("click", closePlayerConfig);
backdrop.addEventListener("click", closePlayerConfig);

formElement.addEventListener("submit", savePlayerConfig);

newGame.addEventListener("click", startNewGame)

gameSquares.addEventListener("click", selectedGameSquare);
// for (const gameSquare of gameSquares) {
//    gameSquare.addEventListener("click", selectedGameSquare);
// };

// __________________________________________________ Functions

function openPlayerConfig() {
   editedPlayer = +event.target.dataset.playerid;
   playerConfigOverlay.style.display = "block";
   backdrop.style.display = "block";
};

function closePlayerConfig() {
   playerConfigOverlay.style.display = "none";
   backdrop.style.display = "none";
   errOutput.textContent = "";
   startErr.textContent = "";
   // selectionErr.textContent = "";
   formElement.firstElementChild.lastElementChild.value = "";
};

function savePlayerConfig(event) {
   event.preventDefault();
   const formData = new FormData(event.target);
   const enteredPlayerName = formData.get("playerName").trim();

   if (!enteredPlayerName) {
      errOutput.textContent = "Please Enter A Valid Name";
      return;
   };

   const updatedPlayerData = document.getElementById("player" + editedPlayer + "Data");
   updatedPlayerData.children[1].textContent = enteredPlayerName;

   players[editedPlayer - 1].name = enteredPlayerName;

   closePlayerConfig();
};

function resetGame() {
   activePlayer = 0;
   currentRound = 1;
   gameIsOver = false;
   gameOver.firstElementChild.innerHTML = "You Won, <span>Player Name</span>!";
   gameOver.style.display = "none";

   let gameBoardIndex = 0;

   for(let i = 0; i < 3; i++) {
      for(let j =0; j < 3; j++) {
         gameData[i][j] = 0;

         const gameBoardItem = gameSquares.children[gameBoardIndex];
         gameBoardItem.textContent = "";
         gameBoardItem.classList.remove("disabled");
         gameBoardIndex++;
      };
   };
};

function startNewGame() {
   if (players[0].name === "" || players[1].name === "") {
      startErr.textContent = "Please Enter Player Names To Continue";
      return;
   };

   resetGame();

   activePlayerName.textContent =players[activePlayer].name;
   gameContent.style.display = "block";
};

function switchPlayer() {
   if(activePlayer === 0) {
      activePlayer = 1;
   }else {
      activePlayer = 0;
   };
   activePlayerName.textContent = players[activePlayer].name;
};

function selectedGameSquare(event) {
   if (event.target.tagName !== "LI" || gameIsOver) {
      return;
   };

   const selectedSquare = event.target;
   const selectedColumn = selectedSquare.dataset.col - 1;
   const selectedRow = selectedSquare.dataset.row - 1;

   if(gameData[selectedRow][selectedColumn] > 0) {
      selectionErr.textContent = "Square is Taken. Please Make New Selection.";
      return;
   };

   selectedSquare.textContent = players[activePlayer].token;
   selectedSquare.classList.add("disabled");

   gameData[selectedRow][selectedColumn] = activePlayer + 1;

   selectionErr.textContent = "";

   const winnerID = gameOverCheck();

   if (winnerID !== 0) {
      endGame(winnerID);
   };

   currentRound++;
   switchPlayer();
};

function gameOverCheck() {
   for (let i = 0; i < 3; i++) {
      if (gameData[i][0] > 0 && 
          gameData[i][0] === gameData[i][1] &&
          gameData[i][1] === gameData[i][2]) {
           return gameData[i][0];
         };
   }; 
   for (let i = 0; i < 3; i++) {
      if (gameData[0][i] > 0 && 
          gameData[0][i] === gameData[1][i] &&
          gameData[0][i] === gameData[2][i]) {
           return gameData[0][i];
         };
   };
   if (gameData[0][0] > 0 &&
       gameData[0][0] === gameData[1][1] && 
       gameData[1][1] === gameData[2][2]) {
         return gameData[0][0];
    };

   if (gameData[2][0] > 0 &&
       gameData[2][0] === gameData[1][1] && 
       gameData[1][1] === gameData[0][2]) {
         return gameData[2][0];
   };
   
   if (currentRound === 9) {
      return -1;
   }
   return 0;
};

function endGame(winnerID) {
   gameIsOver = true;
   gameOver.style.display = "block";
   if (winnerID > 0) {
      const winnerName = players[winnerID - 1].name;
       gameOver.firstElementChild.firstElementChild.textContent = winnerName;
   } else {
      gameOver.firstElementChild.textContent = "Game is a Draw!"
   };
   
};