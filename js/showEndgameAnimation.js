let showEndgameAnimation = (winner) => {
  let index = 0;

  let notChosenFields = document.querySelectorAll(".field:not(.disabled)");

  let timer = setInterval(function () {
    notChosenFields[index].classList.add("bg-black");
    index++;

    if (index === notChosenFields.length) {
      clearInterval(timer);
    }
  }, 30);

  displayWinnerAlert(winner);
};

let displayWinnerAlert = (winner) => {
  let notChosenFields = document.querySelectorAll(".field:not(.disabled)");
  let time = (notChosenFields.length + 1) * 30;

  setTimeout(() => {
    alert(`Winner is ${winner} player.`);
  }, time);
};

export default showEndgameAnimation;
