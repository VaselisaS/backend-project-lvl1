import randomNumber from '../random-helper';
import run from '..';

const description = 'Answer "yes" if number even otherwise answer "no".';

const isEven = number => number % 2 === 0;

const getRoundData = () => {
  const question = randomNumber(1, 100);
  const correctAnswer = isEven(question) ? 'yes' : 'no';
  return { correctAnswer, question };
};

export default () => run(description, getRoundData);
