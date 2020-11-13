import promptly from 'promptly';
import {
  getRandomInt, getRandomMathSign, makeNumericOperation,
  correctAnswerAmount, showWrongAnswerMessage,
  showWinMessage, showCorrectAnswerMessage,
} from '../index.js';

async function brainCalcStart() {
  const name = await promptly.prompt('May i have your name?: ');
  console.log(`Hello, ${name}!\nWhat is the result of the expression?`);
  let correctAnswerCounter = 0;

  while (correctAnswerCounter < correctAnswerAmount) {
    const number1 = getRandomInt(-100, 100);
    const number2 = getRandomInt(0, 100);
    const mathSign = getRandomMathSign();
    const answer = await promptly.prompt(`Question: ${number1} ${mathSign} ${number2} =`);
    const integerAnswer = Number(answer);

    console.log(`Your answer: ${answer}`);

    const correctAnswer = makeNumericOperation(number1, mathSign, number2);

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

export default brainCalcStart;
