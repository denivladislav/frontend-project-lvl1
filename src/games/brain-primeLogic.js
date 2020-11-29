import getRandomInt from '../utils.js';
import gameStart from '../index.js';

const questionText = 'Answer "yes" if given number is prime. Otherwise answer "no".';

function isPrime(number) {
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

function makeGameData() {
  const intRange = [0, 1000];
  const number = getRandomInt(intRange[0], intRange[1]);

  const question = String(number);
  const answer = isPrime(number) ? 'yes' : 'no';

  const gameData = [question, answer];
  return gameData;
}

export default function gamePrimeStart() {
  return gameStart(questionText, makeGameData);
}
