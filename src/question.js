import readlineSync from 'readline-sync';
import { congratulationsUser, wrongAnswerUser } from './user';

export default (name, minNumber, maxNumber) => {
  const iter = (counter) => {
    if (counter === 0) {
      return congratulationsUser(name);
    }
    const randomNumber = Math.floor(Math.random() * (maxNumber - minNumber)) + minNumber;
    console.log(`Question: ${randomNumber}`);

    const userAnswer = readlineSync.question('Your answer: ', {
      trueValue: ['yes'],
      falseValue: ['no'],
    });
    const correctAnswer = randomNumber % 2 === 0;

    if (correctAnswer !== userAnswer) {
      const answer = correctAnswer ? 'yes' : 'no';
      return wrongAnswerUser(userAnswer, answer, name);
    }

    console.log('Correct!');

    const newCounter = counter - 1;
    return iter(newCounter);
  };
  return iter(3);
};
