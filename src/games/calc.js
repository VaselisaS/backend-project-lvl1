import { question } from '../user';

const calculate = (operator, firstNum, secondNum) => {
  switch (operator) {
    case '+':
      return firstNum + secondNum;
    case '-':
      return firstNum - secondNum;
    case '*':
      return firstNum * secondNum;
    default:
      return NaN;
  }
};

export const questionUser = (numberFirst, numberSecond, operator) => question(`${numberFirst} ${operator} ${numberSecond}`);

export const correctAnswer = (numberFirst, numberSecond, operator) => `${calculate(operator, numberFirst, numberSecond)}`;
