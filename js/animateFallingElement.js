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

export default animateFallingElement;
