import run from '../index';
import { randomNumber, randomOperator } from '../random-helper';

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

const data = () => ({
  numberFirst: randomNumber(0, 99),
  numberSecond: randomNumber(0, 99),
  operator: randomOperator(),
});

const massege = 'What is the result of the expression?\n';

const getQuestionMassege = ({ numberFirst, numberSecond, operator }) => `${numberFirst} ${operator} ${numberSecond}`;

const getCorrectAnswer = ({ numberFirst, numberSecond, operator }) => `${calculate(operator, numberFirst, numberSecond)}`;

export default () => run(massege, getCorrectAnswer, data, getQuestionMassege);
