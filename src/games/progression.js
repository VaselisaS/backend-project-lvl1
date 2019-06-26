import randomNumber from '../random-helper';
import run from '..';

const description = 'What number is missing in the progression?';
const progressionLength = 10;

const getProgression = (start, increment, hiddenKey) => {
  const iter = (counter, progression, question, correctAnswer) => {
    if (counter === 0) {
      return { correctAnswer, question };
    }
    const newValueProgression = counter === hiddenKey ? '..' : progression;
    const newAnswer = newValueProgression === '..' ? `${progression}` : correctAnswer;
    const newQuestion = `${question} ${newValueProgression}`;
    return iter(counter - 1, progression + increment, newQuestion, newAnswer);
  };
  return iter(progressionLength, start, '', '');
};

const getDataGame = () => {
  const start = randomNumber(0, 99);
  const increment = randomNumber(0, 99);
  const hiddenKey = randomNumber(1, 10);
  const { question, correctAnswer } = getProgression(start, increment, hiddenKey);
  return { correctAnswer, question };
};

export default () => run(description, getDataGame);
