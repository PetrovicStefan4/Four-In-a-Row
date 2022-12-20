const checkCombination = (
  firstField,
  secondField,
  thirdField,
  fourthField,
  allFields
) => {
  return (
    allFields.includes(`${firstField}`) &&
    allFields.includes(`${secondField}`) &&
    allFields.includes(`${thirdField}`) &&
    allFields.includes(`${fourthField}`)
  );
};

const checkHorizontalForWinner = (allFields) => {
  let isThereAWinner = false;

  if (!isThereAWinner) {
    for (let i = 60; i >= 10; i = i - 10) {
      let f1 = i + 1;
      let f2 = i + 2;
      let f3 = i + 3;
      let f4 = i + 4;
      let f5 = i + 5;
      let f6 = i + 6;
      let f7 = i + 7;

      if (
        checkCombination(f1, f2, f3, f4, allFields) ||
        checkCombination(f2, f3, f4, f5, allFields) ||
        checkCombination(f3, f4, f5, f6, allFields) ||
        checkCombination(f4, f5, f6, f7, allFields)
      ) {
        isThereAWinner = true;
      }
    }
  }
  return isThereAWinner;
};

const checkVerticalForWinner = (allFields) => {
  let isThereAWinner = false;

  if (!isThereAWinner) {
    for (let i = 1; i < 8; i++) {
      let f1 = i + 60;
      let f2 = i + 50;
      let f3 = i + 40;
      let f4 = i + 30;
      let f5 = i + 20;
      let f6 = i + 10;

      if (
        checkCombination(f1, f2, f3, f4, allFields) ||
        checkCombination(f2, f3, f4, f5, allFields) ||
        checkCombination(f3, f4, f5, f6, allFields)
      ) {
        isThereAWinner = true;
      }
    }
  }
  return isThereAWinner;
};

const checkDiagonal1ForWinner = (allFields) => {
  let isThereAWinner = false;

  if (!isThereAWinner) {
    for (let i = 11; i <= 67; i++) {
      if (i % 8 !== 0 || i % 9 !== 0 || i % 0 !== 0) {
        let f1 = i;
        let f2 = i - 9;
        let f3 = i - 18;
        let f4 = i - 27;
        let f5 = i - 36;
        let f6 = i - 45;

        if (
          checkCombination(f1, f2, f3, f4, allFields) ||
          checkCombination(f2, f3, f4, f5, allFields) ||
          checkCombination(f3, f4, f5, f6, allFields)
        ) {
          isThereAWinner = true;
        }
      }
    }
  }
  return isThereAWinner;
};

const checkDiagonal2ForWinner = (allFields) => {
  let isThereAWinner = false;

  if (!isThereAWinner) {
    for (let i = 67; i >= 1; i--) {
      if (i % 8 !== 0 || i % 9 !== 0 || i % 0 !== 0) {
        let f1 = i;
        let f2 = i - 11;
        let f3 = i - 22;
        let f4 = i - 33;
        let f5 = i - 44;
        let f6 = i - 55;

        if (
          checkCombination(f1, f2, f3, f4, allFields) ||
          checkCombination(f2, f3, f4, f5, allFields) ||
          checkCombination(f3, f4, f5, f6, allFields)
        ) {
          isThereAWinner = true;
        }
      }
    }
  }
  return isThereAWinner;
};

const checkForWinner = (allFields) => {
  let isThereAWinner = false;

  if (checkVerticalForWinner(allFields)) {
    return (isThereAWinner = true);
  }
  if (checkHorizontalForWinner(allFields)) {
    return (isThereAWinner = true);
  }
  if (checkDiagonal1ForWinner(allFields)) {
    return (isThereAWinner = true);
  }
  if (checkDiagonal2ForWinner(allFields)) {
    return (isThereAWinner = true);
  }

  return isThereAWinner;
};

export default checkForWinner;
