import promptly from 'promptly';
import {
  getRandomInt, correctAnswerAmount,
  showLoseMessage, showWinMessage,
  showCorrectAnswerMessage,
} from '../index.js';

async function brainEvenStart() {
  const name = await promptly.prompt('May i have your name?');
  console.log(`Hello, ${name}!\nAnswer "yes" if the number is even, otherwise answer "no".`);
  let correctAnswerCounter = 0;

  while (correctAnswerCounter < correctAnswerAmount) {
    const number = getRandomInt(-1000, 1001);
    const answer = await promptly.prompt(`Question: ${number}`);

    console.log(`Your answer: ${answer}`);

    const isEven = (number % 2 === 0);
    if ((answer === 'yes' && isEven) || (answer === 'no' && !isEven)) {
      correctAnswerCounter += 1;
      showCorrectAnswerMessage();
    } else {
      if (isEven) {
        showLoseMessage(answer, 'yes', name);
      } else showLoseMessage(answer, 'no', name);
      return null;
    }
  }

  showWinMessage(name);
  return null;
}

export default brainEvenStart;
