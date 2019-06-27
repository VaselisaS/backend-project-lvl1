import randomNumber from '../random-helper';
import run from '..';

const description = 'What number is missing in the progression?';
const progressionLength = 10;

const getProgression = (start, step, lengthOfProgression) => {
  const iter = (counter, valueProgression, acc) => {
    if (counter === 0) {
      return acc;
    }
    return iter(counter - 1, valueProgression + step, [...acc, valueProgression]);
  };
  return iter(lengthOfProgression, start, []);
};

const getRoundData = () => {
  const start = randomNumber(0, 99);
  const step = randomNumber(0, 99);
  const hiddenKey = randomNumber(0, 9);
  const progression = getProgression(start, step, progressionLength);
  const question = progression.map((p, i) => (i === hiddenKey ? '..' : p)).join(' ');
  const correctAnswer = `${progression[hiddenKey]}`;
  return { correctAnswer, question };
};

export default () => run(description, getRoundData);
