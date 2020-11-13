const correctAnswerAmount = 3;

function showGreetingMessage() {
  console.log('Welcome to the Brain Games!');
}

function showCorrectAnswerMessage() {
  console.log('Correct!');
}

function showWrongAnswerMessage(answer, correctAnswer, name) {
  console.log(`'${answer}' is a wrong answer ;(. The correct answer was '${correctAnswer}'.\nLet's try again, ${name}!`);
}

function showWinMessage(name) {
  console.log(`Congratulations, ${name}!`);
}

function getRandomInt(min, max) {
  const minNum = Math.ceil(min);
  const maxNum = Math.floor(max);
  return Math.floor(Math.random() * (maxNum - minNum)) + minNum;
}

function getRandomMathSign(mathSigns = ['+', '-', '*']) {
  const signIndex = getRandomInt(0, mathSigns.length);
  return mathSigns[signIndex];
}

function makeNumericOperation(number1, mathSign, number2) {
  switch (mathSign) {
    case '+':
      return number1 + number2;
    case '-':
      return number1 - number2;
    case '*':
      return number1 * number2;
    default:
      console.log('Unknown operation.');
      return null;
  }
}

function getGcd(number1, number2) {
  let a = number1;
  let b = number2;
  while (a !== 0 && b !== 0) {
    if (a > b) {
      a %= b;
    } else b %= a;
  }
  return a + b;
}

export {
  getRandomInt, getRandomMathSign,
  makeNumericOperation, getGcd,
  showWrongAnswerMessage, showWinMessage,
  showGreetingMessage, correctAnswerAmount,
  showCorrectAnswerMessage,
};
