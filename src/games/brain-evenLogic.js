import promptly from 'promptly';
import { getRandomInt, correctAnswerAmount } from '../index.js';

async function brainEvenStart() {
  console.log('Welcome to the Brain Games!');
  const name = await promptly.prompt('May i have your name?: ');
  console.log(`Hello, ${name}!\nAnswer "yes" if the number is even, otherwise answer "no".`);
  let correctAnswerCounter = 0;

  while (correctAnswerCounter < correctAnswerAmount) {
    const number = getRandomInt(-1000, 1001);
    const answer = await promptly.prompt(`Question: ${number}`);
    console.log(`Your answer: ${answer}`);
    const isEven = (number % 2 === 0);
    if ((answer === 'yes' && isEven) || (answer === 'no' && !isEven)) {
      correctAnswerCounter += 1;
      console.log('Correct!');
    } else {
      if (isEven) {
        console.log(`Wrong answer ;(. The correct answer was 'yes'.\nLet's try again, ${name}!`);
      } else console.log(`Wrong answer ;(. The correct answer was 'no'.\nLet's try again, ${name}!`);
      return null;
    }
  }

  console.log(`Congratulations, ${name}!`);
  return null;
}

export default brainEvenStart;
