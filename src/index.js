import 'source-map-support/register';
import {
  userName,
  welcomUser,
  startMassege,
  congratulationsUser,
  checkUserAnswer,
  answer,
} from './user';
import { randomNumber, randomOperator } from './random-helper';

const game = (massege = '', questionUser, correctAnswer, maxNumber = 0, minNumber = 99) => {
  startMassege(massege);
  const name = userName();
  welcomUser(name);
  if (massege === '') {
    return false;
  }
  console.log('\n');

  const iter = (counter) => {
    if (counter === 0) {
      return congratulationsUser(name);
    }

    const numberFirst = randomNumber(maxNumber, minNumber);
    const numberSecond = randomNumber(maxNumber, minNumber);
    const operator = randomOperator();

    questionUser(numberFirst, numberSecond, operator);
    const corAnswer = correctAnswer(numberFirst, numberSecond, operator);
    const answerUser = checkUserAnswer(answer(), corAnswer, name);
    if (!answerUser) {
      return false;
    }
    return iter(counter - 1);
  };
  return iter(3);
};

export {
  game, userName, welcomUser, startMassege,
};
