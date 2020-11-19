import promptly from 'promptly';
import {
  getMathProgression, hideProgressionElement,
  getRandomInt, correctAnswerAmount, showLoseMessage,
  showWinMessage, showCorrectAnswerMessage,
} from '../index.js';

async function brainProgressionStart() {
  const name = await promptly.prompt('May i have your name? ');
  console.log(`Hello, ${name}!\nWhat number is missing in the progression?`);
  let correctAnswerCounter = 0;

  while (correctAnswerCounter < correctAnswerAmount) {
    const progression = getMathProgression();
    const indexOfHiddenElement = getRandomInt(0, progression.length);
    const hiddenElement = progression[indexOfHiddenElement];
    const integerHiddenElement = Number(hiddenElement.trim());
    const progressionWithHidden = hideProgressionElement(progression, indexOfHiddenElement);
    const answer = await promptly.prompt(`Question: ${progressionWithHidden.join('')}`);
    const integerAnswer = Number(answer);

    console.log(`Your answer: ${answer}`);

    if (integerAnswer === integerHiddenElement) {
      correctAnswerCounter += 1;
      showCorrectAnswerMessage();
    } else {
      showLoseMessage(answer, integerHiddenElement, name);
      return null;
    }
  }
  showWinMessage(name);
  return null;
}

export default brainProgressionStart;
