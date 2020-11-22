import { isNumberPrime } from '../index.js';

const numbersPrimeRange = [2, 1000];

const numbersPrimeAmount = 1;

function makePrimeQuestion(numbers) {
  return numbers[0];
}

function makePrimeAnswer(numbers) {
  let answer;
  if (isNumberPrime(numbers[0])) {
    answer = 'yes';
  } else answer = 'no';

  return answer;
}

export {
  makePrimeQuestion, makePrimeAnswer,
  numbersPrimeAmount, numbersPrimeRange,
};
