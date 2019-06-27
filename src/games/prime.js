import randomNumber from '../random-helper';
import run from '..';

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

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

const getRoundData = () => {
  const question = randomNumber(0, 99);
  const correctAnswer = isPrime(question) ? 'yes' : 'no';
  return { correctAnswer, question };
};

export default () => run(description, getRoundData);
