import { question } from '../user';

export const questionUser = numberFirst => question(`${numberFirst}`);

export const correctAnswer = (numberFirst) => {
  if (numberFirst < 2) {
    return 'no';
  }
  const iter = (counter) => {
    if (counter > numberFirst / 2) {
      return 'yes';
    }
    if (numberFirst % counter === 0) {
      return 'no';
    }
    return iter(counter + 1);
  };
  return iter(2);
};
