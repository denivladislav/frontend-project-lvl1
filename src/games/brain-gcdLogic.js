import getRandomInt from '../utils.js';
import playGame from '../index.js';

const task = 'Find the greatest common divisor of given numbers.';

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

function makeGameData() {
  const number1 = getRandomInt(0, 100);
  const number2 = getRandomInt(0, 100);

  const question = `${number1} ${number2}`;
  const answer = String(getGcd(number1, number2));

  return [question, answer];
}

export default function gameEvenStart() {
  return playGame(task, makeGameData);
}
