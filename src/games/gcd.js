import run from '../index';
import { randomNumber } from '../random-helper';

const data = () => ({
  numberFirst: randomNumber(0, 99),
  numberSecond: randomNumber(0, 99),
});

const massege = 'Find the greatest common divisor of given numbers.\n';

const getQuestionMassege = ({ numberFirst, numberSecond }) => `${numberFirst} ${numberSecond}`;

const getCorrectAnswer = ({ numberFirst, numberSecond }) => {
  const iter = (a, b) => {
    if (b === 0) {
      return `${a}`;
    }
    return iter(b, a % b);
  };
  return iter(numberFirst, numberSecond);
};

export default () => run(massege, getCorrectAnswer, data, getQuestionMassege);
