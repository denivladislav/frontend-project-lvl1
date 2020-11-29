import getRandomInt from '../utils.js';
import gameStart from '../index.js';

const questionText = 'Find the greatest common divisor of given numbers.';

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
  const intRange = [0, 100];

  const number1 = getRandomInt(intRange[0], intRange[1]);
  const number2 = getRandomInt(intRange[0], intRange[1]);

  const question = `${number1} ${number2}`;
  const answer = String(getGcd(number1, number2));

  const gameData = [question, answer];
  return gameData;
}

export default function gameEvenStart() {
  return gameStart(questionText, makeGameData);
}
