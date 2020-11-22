import promptly from 'promptly';

const correctAnswerAmount = 3;

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

async function gameStart(questionText = 'Question Text needed', makeQuestion = undefined, makeAnswer = undefined, numbersAmount = 10,
  numbersRange = [-100, 100], mathSignsAmount = 0) {
  console.log('Welcome to the Brain Games!');
  const name = await promptly.prompt('May i have your name?');
  console.log(`Hello, ${name}!\n${questionText}`);

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
  getGcd, isNumberPrime, gameStart,
};
