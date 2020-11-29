import getRandomInt from '../utils.js';
import gameStart from '../index.js';

const questionText = 'What is the result of the expression?';

function getRandomMathSign(mathSigns = ['+', '-', '*']) {
  const signIndex = getRandomInt(0, mathSigns.length);
  return mathSigns[signIndex];
}

function solveMathExpression(number1, mathSign, number2) {
  switch (mathSign) {
    case '+':
      return (number1 + number2);
    case '-':
      return (number1 - number2);
    case '*':
      return (number1 * number2);
    default:
      console.log('Unknown operation.');
      return null;
  }
}

function makeGameData() {
  const intRange = [0, 100];

  const number1 = getRandomInt(intRange[0], intRange[1]);
  const number2 = getRandomInt(intRange[0], intRange[1]);
  const mathSign = getRandomMathSign();

  const question = `${number1} ${mathSign} ${number2}`;
  const answer = String(solveMathExpression(number1, mathSign, number2));

  const gameData = [question, answer];
  return gameData;
}

export default function gameEvenStart() {
  return gameStart(questionText, makeGameData);
}
