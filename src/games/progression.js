import randomNumber from '../random-helper';
import run from '..';

const description = 'What number is missing in the progression?';

const getProgression = (startNumber, increment, hiddenNumberIndex, progressionLength) => {
  const iter = (counter, num, question, correctAnswer) => {
    if (counter === 0) {
      return { correctAnswer, question };
    }
    const strNum = counter === hiddenNumberIndex ? '..' : num;
    const newAnswer = strNum === '..' ? `${num}` : correctAnswer;
    return iter(counter - 1, num + increment, `${question} ${strNum}`, newAnswer);
  };
  return iter(progressionLength, startNumber, '', '');
};

const getDataGame = () => {
  const startNumber = randomNumber(0, 99);
  const increment = randomNumber(0, 99);
  const { question, correctAnswer } = getProgression(
    startNumber,
    increment,
    randomNumber(1, 10),
    10,
  );
  return { correctAnswer, question };
};

export default () => run(description, getDataGame);
