import run from '..';
import randomNumber from '../random-helper';

const description = 'Find the greatest common divisor of given numbers.';

const getGcd = (a, b) => {
  if (b === 0) {
    return `${a}`;
  }
  return getGcd(b, a % b);
};

const getRoundData = () => {
  const value1 = randomNumber(0, 99);
  const value2 = randomNumber(0, 99);
  const question = `${value1} ${value2}`;
  const correctAnswer = getGcd(value1, value2);
  return { correctAnswer, question };
};

export default () => run(description, getRoundData);
