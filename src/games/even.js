import randomNumber from '../random-helper';
import run from '..';

const description = 'Answer "yes" if number even otherwise answer "no".\n';

const isEven = number => number % 2 === 0;

const generatorDataGame = () => {
  const number = randomNumber(0, 99);
  const question = number;
  const correctAnswer = isEven(number) ? 'yes' : 'no';
  return { correctAnswer, question };
};

export default () => run(description, generatorDataGame);
