import run from '..';
import randomNumber from '../random-helper';

const description = 'Find the greatest common divisor of given numbers.\n';

const getGcd = (numberFirst, numberSecond) => {
  const iter = (a, b) => {
    if (b === 0) {
      return `${a}`;
    }
    return iter(b, a % b);
  };
  return iter(numberFirst, numberSecond);
};

const generatorDataGame = () => {
  const numberFirst = randomNumber(0, 99);
  const numberSecond = randomNumber(0, 99);
  const question = `${numberFirst} ${numberSecond}`;
  const correctAnswer = getGcd(numberFirst, numberSecond);
  return { correctAnswer, question };
};

export default () => run(description, generatorDataGame);
