import promptly from 'promptly';
import {
  getRandomInt, isNumberPrime,
  correctAnswerAmount, showLoseMessage,
  showWinMessage, showCorrectAnswerMessage,
} from '../index.js';

async function brainPrimeStart() {
  const name = await promptly.prompt('May i have your name?: ');
  console.log(`Hello, ${name}!\nAnswer "yes" if given number is prime. Otherwise answer "no".`);
  let correctAnswerCounter = 0;

  while (correctAnswerCounter < correctAnswerAmount) {
    const number = getRandomInt(2, 1000);
    const answer = await promptly.prompt(`Question: ${number}`);

    console.log(`Your answer: ${answer}`);

    const isPrime = isNumberPrime(number);

    if ((answer === 'yes' && isPrime) || (answer === 'no' && !isPrime)) {
      correctAnswerCounter += 1;
      showCorrectAnswerMessage();
    } else {
      if (isPrime) {
        showLoseMessage(answer, 'yes', name);
      } else showLoseMessage(answer, 'no', name);
      return null;
    }
  }
  showWinMessage(name);
  return null;
}

export default brainPrimeStart;
