import run from '..';
import randomNumber from '../random-helper';

const operators = '+-*';

const calculateExpression = (operator, leftOperand, rightOperand) => {
  switch (operator) {
    case '+':
      return leftOperand + rightOperand;
    case '-':
      return leftOperand - rightOperand;
    case '*':
      return leftOperand * rightOperand;
    default:
      return false;
  }
};

const getRoundData = () => {
  const operator = operators[randomNumber(0, operators.length - 1)];
  const leftOperand = randomNumber(1, 100);
  const rightOperand = randomNumber(1, 100);
  const question = `${leftOperand} ${operator} ${rightOperand}`;
  const correctAnswer = `${calculateExpression(operator, leftOperand, rightOperand)}`;
  return { question, correctAnswer };
};

const description = 'What is the result of the expression?';

export default () => run(description, getRoundData);
