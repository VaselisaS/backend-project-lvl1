import randomNumber from '../random-helper';
import run from '..';

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".\n';

const isPrime = (number) => {
  if (number < 2) {
    return false;
  }
  const iter = (counter) => {
    if (counter > number / 2) {
      return true;
    }
    if (number % counter === 0) {
      return false;
    }
    return iter(counter + 1);
  };
  return iter(2);
};

const generatorDataGame = () => {
  const number = randomNumber(0, 99);
  const question = number;
  const correctAnswer = isPrime(number) ? 'yes' : 'no';
  return { correctAnswer, question };
};

export default () => run(description, generatorDataGame);
