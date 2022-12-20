import checkForWinner from "./js/checkForWinner.js";
import showEndgameAnimation from "./js/showEndgameAnimation.js";
import disableChoices from "./js/disableChoices.js";
import enableChoices from "./js/enableChoices.js";
import toggleChoicesHoverClassName from "./js/toggleChoicesHoverClassname.js";

// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyDUqrtdvZUkC6jMJrYKZCVPd-xz5dRNtLo",
//   authDomain: "four-in-a-row-ee355.firebaseapp.com",
//   projectId: "four-in-a-row-ee355",
//   storageBucket: "four-in-a-row-ee355.appspot.com",
//   messagingSenderId: "646074762323",
//   appId: "1:646074762323:web:625b64718ac9264b5172a6",
//   measurementId: "G-3MT4SZTRG8",
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

// App

let btn = document.getElementById("btn");

let choices = document.querySelectorAll(".choice");

let firstPlayerChoosenMoves = [];
let secondPlayerChoosenMoves = [];
let firstPlayersMove = true;
let isGameEnded = false;
let loadingAnimation = false;

choices.forEach((choice) => {
  choice.addEventListener("click", async (e) => {
    e.preventDefault();

    if (isGameEnded || loadingAnimation) {
      return;
    }

    const availableFieldsInChosenCol = document.querySelectorAll(
      `.x-${choice.id}:not(.disabled)`
    );

    if (!availableFieldsInChosenCol.length) {
      alert("You can't play move in this column");
    }

    const firstAvailableField =
      availableFieldsInChosenCol?.[availableFieldsInChosenCol.length - 1];

    if (!firstAvailableField) {
      return;
    }

    if (firstPlayersMove) {
      firstPlayerChoosenMoves.push(firstAvailableField?.id);
      disableChoices();
      loadingAnimation = true;
      await animateFallingElement(availableFieldsInChosenCol, firstPlayersMove);
      enableChoices();
      firstAvailableField?.classList.add("bg-danger", "disabled");
    } else {
      secondPlayerChoosenMoves.push(firstAvailableField?.id);
      disableChoices();
      loadingAnimation = true;
      await animateFallingElement(availableFieldsInChosenCol, firstPlayersMove);
      enableChoices();
      firstAvailableField?.classList.add("bg-warning", "disabled");
    }

    firstPlayersMove = !firstPlayersMove;
    toggleChoicesHoverClassName(choices);

    if (checkForWinner(firstPlayerChoosenMoves)) {
      isGameEnded = true;
      disableChoices();
      showEndgameAnimation("red");
    } else if (checkForWinner(secondPlayerChoosenMoves)) {
      isGameEnded = true;
      disableChoices();
      showEndgameAnimation("yellow");
    }
  });
});

const animateFallingElement = (fields, firstPlayersMove) => {
  let index = 0;
  let className = "bg-danger";

  if (!firstPlayersMove) {
    className = "bg-warning";
  }

  return new Promise((resolve) => {
    let timer = setInterval(function () {
      fields?.[index - 1]?.classList.remove(className);
      fields[index].classList.add(className);

      if (index === fields.length - 1) {
        clearInterval(timer);
        loadingAnimation = false;
        resolve("resolved");
      }
      index++;
    }, 150);
  });
};

btn.addEventListener("click", (e) => {
  e.preventDefault();
  location.reload();
});
