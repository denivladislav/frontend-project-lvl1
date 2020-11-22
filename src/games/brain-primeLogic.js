import { isNumberPrime } from '../index.js';

const questionPrimeText = 'Answer "yes" if given number is prime. Otherwise answer "no".';

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
  questionPrimeText,
  makePrimeQuestion, makePrimeAnswer,
  numbersPrimeAmount, numbersPrimeRange,
};
