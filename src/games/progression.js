import randomNumber from '../random-helper';
import run from '..';

const description = 'What number is missing in the progression?\n';

const getProgression = (startNumber, increment) => {
  const indexDots = randomNumber(1, 10);
  const iter = (counter, num, question, correctAnswer) => {
    if (counter === 0) {
      return { correctAnswer, question };
    }
    const strNum = counter === indexDots ? '..' : num;
    const newAnswer = strNum === '..' ? `${num}` : correctAnswer;
    return iter(counter - 1, num + increment, `${question} ${strNum}`, newAnswer);
  };
  return iter(10, startNumber, '', '');
};

const generatorDataGame = () => {
  const startNumber = randomNumber(0, 99);
  const increment = randomNumber(0, 99);
  const { question, correctAnswer } = getProgression(startNumber, increment);
  return { correctAnswer, question };
};

export default () => run(description, generatorDataGame);
