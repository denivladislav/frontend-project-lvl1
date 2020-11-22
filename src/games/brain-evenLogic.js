const questionEvenText = 'Answer "yes" if the number is even, otherwise answer "no".';

const numbersEvenRange = [-1000, 1000];

const numbersEvenAmount = 1;

function makeEvenQuestion(numbers) {
  return numbers[0];
}

function makeEvenAnswer(numbers) {
  const isEven = (numbers[0] % 2 === 0);
  let answer;
  if (isEven === true) {
    answer = 'yes';
  } else {
    answer = 'no';
  }

  return answer;
}

export {
  questionEvenText,
  makeEvenQuestion, makeEvenAnswer,
  numbersEvenRange, numbersEvenAmount,
};
