const questionCalcText = 'What is the result of the expression?';

const numbersCalcRange = [0, 100];

const numbersCalcAmount = 2;

const mathSignsCalcAmount = 1;

function makeCalcQuestion(numbers, mathSigns) {
  return `${numbers[0]} ${mathSigns[0]} ${numbers[1]}`;
}

function makeCalcAnswer(numbers, mathSigns) {
  switch (mathSigns[0]) {
    case '+':
      return (numbers[0] + numbers[1]);
    case '-':
      return (numbers[0] - numbers[1]);
    case '*':
      return (numbers[0] * numbers[1]);
    default:
      console.log('Unknown operation.');
      return null;
  }
}

export {
  questionCalcText,
  makeCalcQuestion, makeCalcAnswer,
  numbersCalcRange, numbersCalcAmount,
  mathSignsCalcAmount,
};
