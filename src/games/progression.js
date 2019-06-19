import { randomNumber } from '../random-helper';
import run from '../index';

const massege = 'What number is missing in the progression?\n';

const data = {
  answer: '',
  question: '',
};

const progression = (startNumber, increment) => {
  const indexDots = randomNumber(1, 10);
  const iter = (counter, num, acc) => {
    if (counter === 0) {
      data.question = acc.trim();
      return data.question;
    }
    const strNum = counter === indexDots ? '..' : num;
    if (strNum === '..') {
      data.answer = `${num}`;
    }
    return iter(counter - 1, num + increment, `${acc} ${strNum}`);
  };
  return iter(10, startNumber, '');
};

const runCreateData = () => progression(randomNumber(0, 99), randomNumber(0, 99));

const getQuestionMassege = () => data.question;

const getCorrectAnswer = () => data.answer;

export default () => run(massege, getCorrectAnswer, runCreateData, getQuestionMassege);
