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
      return NaN;
  }
};

const getDataGame = () => {
  const operator = operators[randomNumber(0, operators.length)];
  const leftOperand = randomNumber(0, 99);
  const rightOperand = randomNumber(0, 99);
  const question = `${leftOperand} ${operator} ${rightOperand}`;
  const correctAnswer = `${calculateExpression(operator, leftOperand, rightOperand)}`;
  return { question, correctAnswer };
};

const description = 'What is the result of the expression?';

export default () => run(description, getDataGame);
