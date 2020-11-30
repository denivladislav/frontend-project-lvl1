import getRandomInt from '../utils.js';
import gameStart from '../index.js';

const questionText = 'What number is missing in the progression?';

function makeProgression(number) {
  const hiddenElement = number;
  const diff = getRandomInt(0, 100);
  const length = getRandomInt(6, 11);
  const hiddenElementIndex = getRandomInt(0, length);
  let firstElement = hiddenElement;
  if (hiddenElementIndex !== 0) {
    firstElement = hiddenElement - hiddenElementIndex * diff;
  }
  const progression = [];
  let nextElement = firstElement;
  for (let i = 0; i < length; i += 1) {
    progression.push(nextElement);
    nextElement += diff;
  }
  progression[hiddenElementIndex] = '..';
  return progression.join(' ');
}

function makeGameData() {
  const number = getRandomInt(-100, 100);

  const question = makeProgression(number);
  const answer = String(number);

  return [question, answer];
}

export default function gameProgresstionStart() {
  return gameStart(questionText, makeGameData);
}
