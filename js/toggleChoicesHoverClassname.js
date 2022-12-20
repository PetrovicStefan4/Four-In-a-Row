const toggleChoicesHoverClassName = (choices) => {
  choices.forEach((choice) => {
    choice.classList.toggle("red");
  });
};

export default toggleChoicesHoverClassName;
