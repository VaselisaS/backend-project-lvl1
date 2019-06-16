import { question } from '../user';

export const questionUser = (numberFirst, numberSecond) => question(`${numberFirst} ${numberSecond}`);

export const correctAnswer = (numberFirst, numberSecond) => {
  if (numberSecond === 0) {
    return `${numberFirst}`;
  }
  return correctAnswer(numberSecond, numberFirst % numberSecond);
};
