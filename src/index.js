import promptly from 'promptly';

function getRandomInt(min, max) {
  const minNum = Math.ceil(min);
  const maxNum = Math.floor(max);
  return Math.floor(Math.random() * (maxNum - minNum)) + minNum;
}

async function brainEvenStart() {
  console.log('Welcome to the Brain Games!');
  const name = await promptly.prompt('May i have your name?: ');
  console.log(`Hello, ${name}!`);
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  let correctAnswerCounter = 0;

  while (correctAnswerCounter < 3) {
    const number = getRandomInt(-1000, 1001);
    const answer = await promptly.prompt(`Question: ${number}`);
    let isEven = true;
    if (number % 2 !== 0) isEven = false;
    if ((answer === 'yes' && isEven) || (answer === 'no' && !isEven)) {
      correctAnswerCounter += 1;
      console.log('Correct!');
    } else {
      if (isEven) {
        console.log('Wrong answer ;(. The correct answer was \'yes\'');
      } else console.log('Wrong answer ;(. The correct answer was \'no\'');
      console.log(`Let's try again, ${name}!`);
      return null;
    }
  }

  console.log(`Congratulations, ${name}!`);
  return null;
}

export default brainEvenStart;
