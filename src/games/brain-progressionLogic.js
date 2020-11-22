import { getRandomInt } from '../index.js';

const numbersProgressionRange = [-100, 100];

const numbersProgressionAmount = 2;

function makeProgressionQuestion(numbers) {
  const hiddenElement = numbers[0];
  const diff = numbers[1];
  const length = getRandomInt(6, 11);
  const hiddenElementIndex = getRandomInt(0, length);
  let firstElement = hiddenElement;
  if (hiddenElementIndex !== 0) {
    firstElement = hiddenElement - (hiddenElementIndex) * diff;
  }
  const progression = [];
  console.log('firstElement:', firstElement, 'hiddenElement', hiddenElement, 'hiddenElementIndex', hiddenElementIndex, 'diff', diff, 'length', length);
  let nextElement = firstElement;
  for (let i = 0; i < length; i += 1) {
    progression.push(nextElement);
    nextElement += diff;
  }
  progression[hiddenElementIndex] = '..';
  return progression.join(' ');
}

function makeProgessionAnswer(numbers) {
  return numbers[0];
}

export {
  makeProgressionQuestion, makeProgessionAnswer,
  numbersProgressionAmount, numbersProgressionRange,
};
