import { getGcd } from '../index.js';

const questionGcdText = 'Find the greatest common divisor of given numbers.';

const numbersGcdRange = [0, 100];

const numbersGcdAmount = 2;

function makeGcdQuestion(numbers) {
  return `${numbers[0]} ${numbers[1]}`;
}

function makeGcdAnswer(numbers) {
  return getGcd(numbers[0], numbers[1]);
}

export {
  questionGcdText,
  makeGcdQuestion, makeGcdAnswer,
  numbersGcdRange, numbersGcdAmount,
};
