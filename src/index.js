function getRandomInt(min, max) {
  const minNum = Math.ceil(min);
  const maxNum = Math.floor(max);
  return Math.floor(Math.random() * (maxNum - minNum)) + minNum;
}

function getRandomMathSign() {
  const mathSigns = ['+', '-', '*'];
  const signIndex = getRandomInt(0, 4);
  return mathSigns[signIndex];
}

export { getRandomInt, getRandomMathSign };
