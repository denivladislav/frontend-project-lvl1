import getRandomInt from '../utils.js';
import playGame from '../index.js';

const task = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (number) => {
  const divisionTo1 = (x, y) => {
    if (y === 1) {
      return true;
    }
    if (x % y === 0) {
      return false;
    }
    return divisionTo1(x, y - 1);
  };

  return divisionTo1(number, number - 1);
};

const makeGameData = () => {
  const number = getRandomInt(1, 1000);

  const question = number;
  const answer = isPrime(number) ? 'yes' : 'no';

  return [question, answer];
};

export default () => playGame(task, makeGameData);
