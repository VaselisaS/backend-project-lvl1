import randomNumber from '../random-helper';
import run from '..';

const description = 'What number is missing in the progression?';
const progressionLength = 10;

const getProgression = (start, step, length) => {
  const iter = (counter, acc) => {
    if (counter === length) {
      return acc;
    }
    return iter(counter + 1, [...acc, start + counter * step]);
  };
  return iter(0, []);
};

const getRoundData = () => {
  const start = randomNumber(1, 100);
  const step = randomNumber(1, 100);
  const progression = getProgression(start, step, progressionLength);
  const hiddenKey = randomNumber(0, progressionLength - 1);
  const question = progression
    .map((currentValue, index) => (index === hiddenKey ? '..' : currentValue))
    .join(' ');
  const correctAnswer = `${progression[hiddenKey]}`;
  return { correctAnswer, question };
};

export default () => run(description, getRoundData);
