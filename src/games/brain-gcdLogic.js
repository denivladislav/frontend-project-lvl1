import promptly from 'promptly';
import {
  getRandomInt, getGcd,
  correctAnswerAmount, showWrongAnswerMessage,
  showWinMessage, showCorrectAnswerMessage,
} from '../index.js';

async function brainGcdStart() {
  const name = await promptly.prompt('May i have your name?: ');
  console.log(`Hello, ${name}!\nFind the greatest common divisor of given numbers.`);
  let correctAnswerCounter = 0;

  while (correctAnswerCounter < correctAnswerAmount) {
    const number1 = getRandomInt(-100, 100);
    const number2 = getRandomInt(-100, 100);
    const answer = await promptly.prompt(`Question: ${number1} ${number2}`);
    const integerAnswer = Number(answer);

    console.log(`Your answer: ${integerAnswer}`);

    const correctAnswer = getGcd(number1, number2);

    if (correctAnswer === integerAnswer) {
      correctAnswerCounter += 1;
      showCorrectAnswerMessage();
    } else {
      showWrongAnswerMessage(answer, correctAnswer, name);
      return null;
    }
  }
  showWinMessage(name);
  return null;
}

export default brainGcdStart;
