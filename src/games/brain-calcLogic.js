import getRandomInt from '../utils.js';
import playGame from '../index.js';

const task = 'What is the result of the expression?';

const getRandomMathSign = (mathSigns = ['+', '-', '*']) => {
  const signIndex = getRandomInt(0, mathSigns.length);
  return mathSigns[signIndex];
};

const calculateMathExpression = (number1, mathSign, number2) => {
  switch (mathSign) {
    case '+':
      return (number1 + number2);
    case '-':
      return (number1 - number2);
    case '*':
      return (number1 * number2);
    default:
      throw new Error(`Unknown operator: ${mathSign})`);
  }
};

const makeGameData = () => {
  const number1 = getRandomInt(0, 100);
  const number2 = getRandomInt(0, 100);
  const mathSign = getRandomMathSign();

  const question = `${number1} ${mathSign} ${number2}`;
  const answer = String(calculateMathExpression(number1, mathSign, number2));

  return [question, answer];
};

export default () => playGame(task, makeGameData);
