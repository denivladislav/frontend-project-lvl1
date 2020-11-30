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
      throw new Error(`Unknown operator: ${mathSign})`);
  }
}

function makeGameData() {
  const number1 = getRandomInt(0, 100);
  const number2 = getRandomInt(0, 100);
  const mathSign = getRandomMathSign();

  const question = `${number1} ${mathSign} ${number2}`;
  const answer = String(solveMathExpression(number1, mathSign, number2));

  return [question, answer];
}

export default function gameEvenStart() {
  return gameStart(questionText, makeGameData);
}
