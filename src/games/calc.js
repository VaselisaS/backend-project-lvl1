import run from '..';
import randomNumber from '../random-helper';

const operators = '+-*';

const getCountedExpression = (operator, firstNum, secondNum) => {
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

const getDataGame = () => {
  const operator = operators[randomNumber(0, operators.length)];
  const firstOperand = randomNumber(0, 99);
  const secondOperand = randomNumber(0, 99);
  const question = `${firstOperand} ${operator} ${secondOperand}`;
  const correctAnswer = `${getCountedExpression(operator, firstOperand, secondOperand)}`;
  return { question, correctAnswer };
};

const description = 'What is the result of the expression?';

export default () => run(description, getDataGame);
