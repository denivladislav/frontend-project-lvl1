import getRandomInt from '../utils.js';
import gameStart from '../index.js';

const questionText = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (number) => number % 2 === 0;

function makeGameData() {
  const intRange = [-1000, 1000];
  const number = getRandomInt(intRange[0], intRange[1]);

  const question = String(number);
  const answer = isEven(number) ? 'yes' : 'no';

  const gameData = [question, answer];
  return gameData;
}

export default function gameEvenStart() {
  return gameStart(questionText, makeGameData);
}
