import promptly from 'promptly';
import getRandomInt from '../index.js';

async function brainEvenStart() {
  console.log('Welcome to the Brain Games!');
  const name = await promptly.prompt('May i have your name?: ');
  console.log(`Hello, ${name}!`);
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  let correctAnswerCounter = 0;

  while (correctAnswerCounter < 3) {
    const number = getRandomInt(-1000, 1001);
    const answer = await promptly.prompt(`Question: ${number}`);
    const isEven = (number % 2 === 0);
    if ((answer === 'yes' && isEven) || (answer === 'no' && !isEven)) {
      correctAnswerCounter += 1;
      console.log('Correct!');
    } else {
      if (isEven) {
        console.log('Wrong answer ;(. The correct answer was \'yes\'.');
      } else console.log('Wrong answer ;(. The correct answer was \'no\'.');
      console.log(`Let's try again, ${name}!`);
      return null;
    }
  }

  console.log(`Congratulations, ${name}!`);
  return null;
}

export default brainEvenStart;
