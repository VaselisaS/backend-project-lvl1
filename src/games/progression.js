import { question } from '../user';
import { randomNumber } from '../random-helper';

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

export const questionUser = (numFirst, numSecond) => question(progression(numFirst, numSecond));

export const correctAnswer = () => data.answer;
