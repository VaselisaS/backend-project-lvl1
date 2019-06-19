import { randomNumber } from '../random-helper';
import run from '../index';

const massege = 'Answer "yes" if given number is prime. Otherwise answer "no".\n';

const data = () => randomNumber(0, 99);

const getQuestionMassege = number => `${number}`;

const getCorrectAnswer = (number) => {
  if (number < 2) {
    return 'no';
  }
  const iter = (counter) => {
    if (counter > number / 2) {
      return 'yes';
    }
    if (number % counter === 0) {
      return 'no';
    }
    return iter(counter + 1);
  };
  return iter(2);
};

export default () => run(massege, getCorrectAnswer, data, getQuestionMassege);
