const correctAnswerAmount = 3;

function showGreetingMessage() {
  console.log('Welcome to the Brain Games!');
}

function showCorrectAnswerMessage() {
  console.log('Correct!');
}

function showLoseMessage(answer, correctAnswer, name) {
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

function getMathProgression(length = getRandomInt(6, 11)) {
  const diff = getRandomInt(-100, 100);
  const firstElement = getRandomInt(-100, 100);
  console.log('length:', length, 'diff:', diff, 'firstElement:', firstElement);
  const progression = [`${firstElement} `];
  let nextElement = firstElement;
  for (let i = 1; i < length; i += 1) {
    nextElement += diff;
    progression.push(`${nextElement} `);
  }
  return progression;
}

function hideProgressionElement(progression, index = 0) {
  const clonedProgression = progression.slice(0);
  clonedProgression[index] = '.. ';
  return clonedProgression;
}

export {
  getRandomInt, getRandomMathSign,
  makeNumericOperation, getGcd,
  showLoseMessage, showWinMessage,
  showGreetingMessage, correctAnswerAmount,
  showCorrectAnswerMessage, getMathProgression,
  hideProgressionElement,
};
