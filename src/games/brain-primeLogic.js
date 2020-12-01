import getRandomInt from '../utils.js';
import gameStart from '../index.js';

const task = 'Answer "yes" if given number is prime. Otherwise answer "no".';

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

  return divisionTo1(number, number - 1);
}

function makeGameData() {
  const number = getRandomInt(0, 1000);

  const question = number;
  const answer = isPrime(number) ? 'yes' : 'no';

  return [question, answer];
}

export default function gamePrimeStart() {
  return gameStart(task, makeGameData);
}
