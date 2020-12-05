import getRandomInt from '../utils.js';
import playGame from '../index.js';

const task = 'What number is missing in the progression?';

const makeProgression = (length, diff, firstElement) => {
  const progression = [];
  let nextElement = firstElement;
  for (let i = 0; i < length; i += 1) {
    progression.push(nextElement);
    nextElement += diff;
  }
  return progression;
};

const makeQuestion = (progression, hiddenElementIndex) => {
  const copyOfProgression = progression.slice('');
  copyOfProgression[hiddenElementIndex] = '..';
  return copyOfProgression.join(' ');
};

const makeGameData = () => {
  const length = getRandomInt(6, 11);
  const diff = getRandomInt(-11, 11);
  const firstElement = getRandomInt(-50, 50);

  const progression = makeProgression(length, diff, firstElement);
  const hiddenElementIndex = getRandomInt(0, progression.length);

  const question = makeQuestion(progression, hiddenElementIndex);
  const answer = String(progression[hiddenElementIndex]);

  return [question, answer];
};

export default () => playGame(task, makeGameData);
