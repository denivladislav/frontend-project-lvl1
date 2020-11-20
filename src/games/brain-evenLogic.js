const numberEvenRange = [-1000, 1001];

const numberAmount = 1;

const brainEvenLogic = (number) => {
  const isEven = (number % 2 === 0);
  let answer;
  if (isEven === true) {
    answer = 'yes';
  } else {
    answer = 'no';
  }

  return answer;
};

export { numberEvenRange, numberAmount, brainEvenLogic };
