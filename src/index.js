import promptly from 'promptly';

async function gameStart(questionText, makeGameData) {
  console.log('Welcome to the Brain Games!');
  const name = await promptly.prompt('May i have your name?');
  console.log(`Hello, ${name}!\n${questionText}`);

  let correctAnswerCounter = 0;
  const correctAnswerAmount = 3;

  while (correctAnswerCounter < correctAnswerAmount) {
    const gameData = makeGameData();
    const question = gameData[0];
    const correctAnswer = gameData[1];
    const answer = await promptly.prompt(`Question: ${question}`);

    console.log(`Your answer: ${answer}`);
    if (answer === correctAnswer) {
      correctAnswerCounter += 1;
      console.log('Correct!');
    } else {
      console.log(`'${answer}' is a wrong answer ;(. The correct answer was '${correctAnswer}'.\nLet's try again, ${name}!`);
      return null;
    }
  }

  console.log(`Congratulations, ${name}!`);
  return null;
}

export default gameStart;
