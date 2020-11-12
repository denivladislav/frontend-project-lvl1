import promptly from 'promptly';
import { getRandomInt, getRandomMathSign, correctAnswerAmount } from '../index.js';

async function brainCalcStart() {
  console.log('Welcome to the Brain Games!');
  const name = await promptly.prompt('May i have your name?: ');
  console.log(`Hello, ${name}!\nWhat is the result of the expression?`);
  let correctAnswerCounter = 0;

  while (correctAnswerCounter < correctAnswerAmount) {
    const number1 = getRandomInt(-100, 100);
    const number2 = getRandomInt(0, 100);
    const mathSign = getRandomMathSign();
    const answer = await promptly.prompt(`Question: ${number1} ${mathSign} ${number2} =`);
    const integerAnswer = Number(answer);

    console.log(`Your answer: ${integerAnswer}`);

    let correctAnswer = 0;
    switch (mathSign) {
      case '+':
        correctAnswer = number1 + number2;
        break;
      case '-':
        correctAnswer = number1 - number2;
        break;
      case '*':
        correctAnswer = number1 * number2;
        break;
      default:
        console.log('Unknown operation.');
        return null;
    }
    if (correctAnswer === integerAnswer) {
      correctAnswerCounter += 1;
      console.log('Correct!');
    } else {
      console.log(`Wrong answer ;(. The correct answer was '${correctAnswer}.'\nLet's try again, ${name}!`);
      return null;
    }
  }

  console.log(`Congratulations, ${name}!`);
  return null;
}

export default brainCalcStart;
