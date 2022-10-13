// __________ Sum Numbers (for)__________
const calculateSumBtn = document.querySelector("#calculator button");

function calculateSum() {
   const userNumber = document.getElementById("user-number");

   const enteredNumber = userNumber.value;

   let sumUpToNumber = 0;

   for (let i = 0; i<= enteredNumber; i++) {
      sumUpToNumber = sumUpToNumber + i;
   }

   const outputResult = document.getElementById("calculated-sum");

   outputResult.textContent = sumUpToNumber;
   outputResult.style.display = "block";
};

calculateSumBtn.addEventListener("click", calculateSum);

// __________ Highlight Links (for of)__________
const highlightLinksBtn = document.querySelector("#highlight-links button");

function highlightLinks() {
   const anchorElements = document.querySelectorAll("#highlight-links a");

   for (const anchorElement of anchorElements) {
      anchorElement.classList.add("highlight")
   };
};

highlightLinksBtn.addEventListener("click", highlightLinks);

// __________ User Data  (for in) __________
const dummyUserData = {
   firstname: "Courtney",
   lastname: "Rowe",
   age: 33
};

const displayUserDataBtn = document.querySelector("#user-data button");

function displayUserData() {
   const outputData = document.getElementById("output-user-data");

   outputData.innerHTML = ""; 
   // prevents duplication of information upon click

   for (const key in dummyUserData) {
      const newUserDataListItem = document.createElement ("li");

      const outputText = key.toUpperCase() + ": " + dummyUserData[key];

      newUserDataListItem.textContent = outputText;

      outputData.append(newUserDataListItem);
   };
};

displayUserDataBtn.addEventListener("click", displayUserData);

// __________ Statistics (while)__________
const rollDiceBtn = document.querySelector("#statistics button");

function rollDice() {
   return Math.floor(Math.random() * 6) + 1;
};

function diceRolls() {
   const targetNumber = document.getElementById("user-target-number");

   const diceRollsList = document.getElementById("dice-rolls");

   const enteredNumber = targetNumber.value;

   diceRollsList.innerHTML = "";

   let rolledTargetNumber = false;
   let numberOfRolls = 0;

   while (!rolledTargetNumber) {
     const rolledNumber = rollDice();

     numberOfRolls++;

     const newRollListItem = document.createElement("li");

     const outputText = "Roll " + numberOfRolls + ": " + rolledNumber;

     newRollListItem.textContent = outputText;

     diceRollsList.append(newRollListItem);

     rolledTargetNumber = rolledNumber == enteredNumber;
   //   if (rolledNumber == enteredNumber) {
   //    rolledTargetNumber = true;
   //   };     **same as line above comment
   };

   const outputTotalRolls = document.getElementById("output-total-rolls");

   const outputTargetNumber = document.getElementById("output-target-number");

   outputTotalRolls.textContent = numberOfRolls;
   outputTargetNumber.textContent = enteredNumber;
};

rollDiceBtn.addEventListener("click", diceRolls);