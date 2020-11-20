const numbersCalcRange = [0, 100];

const numbersCalcAmount = 2;

const mathSignsCalcAmount = 1;

function makeCalcQuestion(numbers, mathSigns) {
  return `${numbers[0]} ${mathSigns[0]} ${numbers[1]}`;
}

function makeCalcAnswer(numbers, mathSigns) {
  switch (mathSigns[0]) {
    case '+':
      return String(numbers[0] + numbers[1]);
    case '-':
      return String(numbers[0] - numbers[1]);
    case '*':
      return String(numbers[0] * numbers[1]);
    default:
      console.log('Unknown operation.');
      return null;
  }
}

export {
  makeCalcQuestion, makeCalcAnswer,
  numbersCalcRange, numbersCalcAmount,
  mathSignsCalcAmount,
};
