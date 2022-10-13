// __________________________________________________ Variables
let editedPlayer = 0;

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

const editPlayer1Btn = document.getElementById("player1Btn");
const editPlayer2Btn = document.getElementById("player2Btn");

const formElement = document.querySelector("form");
const errOutput = document.getElementById("configErr");

// __________________________________________________ Event Listeners

editPlayer1Btn.addEventListener("click", openPlayerConfig);
editPlayer2Btn.addEventListener("click", openPlayerConfig);

cancelConfigOverlay.addEventListener("click", closePlayerConfig);
backdrop.addEventListener("click", closePlayerConfig);

formElement.addEventListener("submit", savePlayerConfig);

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