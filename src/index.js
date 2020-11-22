import promptly from 'promptly';

const correctAnswerAmount = 3;

function showGreetingMessage() {
  console.log('Welcome to the Brain Games!');
}

function showCorrectAnswerMessage() {
  console.log('Correct!');
}

function showLoseMessage(answer, correctAnswer, name) {
  console.log(`'${answer}' is a wrong answer ;(. The correct answer was '${correctAnswer}'.\nLet's try again, ${name}!`);
}

function showWinMessage(name) {
  console.log(`Congratulations, ${name}!`);
}

function getRandomInt(min, max) {
  const minNum = Math.ceil(min);
  const maxNum = Math.floor(max);
  return Math.floor(Math.random() * (maxNum - minNum)) + minNum;
}

function getRandomMathSign(mathSigns = ['+', '-', '*']) {
  const signIndex = getRandomInt(0, mathSigns.length);
  return mathSigns[signIndex];
}

function getGcd(number1, number2) {
  let a = number1;
  let b = number2;
  while (a !== 0 && b !== 0) {
    if (a > b) {
      a %= b;
    } else b %= a;
  }
  return a + b;
}

function getMathProgression(length = getRandomInt(6, 11)) {
  const diff = getRandomInt(-100, 100);
  const firstElement = getRandomInt(-100, 100);
  const progression = [`${firstElement} `];
  let nextElement = firstElement;
  for (let i = 1; i < length; i += 1) {
    nextElement += diff;
    progression.push(`${nextElement} `);
  }
  return progression;
}

function hideProgressionElement(progression, index = 0) {
  const clonedProgression = progression.slice(0);
  clonedProgression[index] = '.. ';
  return clonedProgression;
}

function isNumberPrime(number) {
  if (number === 1) {
    return `${number}: is a special case`;
  }
  const divisionTo1 = (x, y) => {
    if (y === 1) {
      return true;
    }
    if (x % y === 0) {
      return false;
    } return divisionTo1(x, y - 1);
  };

  if (divisionTo1(number, number - 1)) {
    return true;
  }
  return false;
}

async function gameStart(makeQuestion, makeAnswer, numbersAmount = 10,
  numbersRange = [-100, 100], mathSignsAmount = 0) {
  console.log('Welcome to the Brain Games!');
  const name = await promptly.prompt('May i have your name?');
  console.log(`Hello, ${name}!\nAnswer "yes" if the number is even, otherwise answer "no".`);

  let correctAnswerCounter = 0;

  while (correctAnswerCounter < correctAnswerAmount) {
    const numbers = [];
    const mathSigns = [];
    for (let i = 0; i < numbersAmount; i += 1) {
      numbers.push(getRandomInt(numbersRange[0], numbersRange[1]));
    }
    if (mathSignsAmount !== 0) {
      for (let i = 0; i < mathSignsAmount; i += 1) {
        mathSigns.push(getRandomMathSign());
      }
    }
    const question = makeQuestion(numbers, mathSigns);
    const correctAnswer = String(makeAnswer(numbers, mathSigns));
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

export {
  getRandomInt, getRandomMathSign,
  getGcd,
  showLoseMessage, showWinMessage,
  showGreetingMessage, correctAnswerAmount,
  showCorrectAnswerMessage, getMathProgression,
  hideProgressionElement, isNumberPrime,
  gameStart,
};
