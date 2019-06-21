import run from '..';
import randomNumber from '../random-helper';

const randomOperator = () => {
  const operators = '+-*';
  const index = randomNumber(0, operators.length);
  return operators[index];
};

const getQuestion = (firstNum, operator, secondNum) => `${firstNum} ${operator} ${secondNum}`;

const count = (operator, firstNum, secondNum) => {
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

const generatorDataGame = () => {
  const operator = randomOperator();
  const firstOperand = randomNumber(0, 99);
  const secondOperand = randomNumber(0, 99);
  const question = getQuestion(firstOperand, operator, secondOperand);
  const correctAnswer = `${count(operator, firstOperand, secondOperand)}`;
  return { question, correctAnswer };
};

const description = 'What is the result of the expression?\n';

export default () => run(description, generatorDataGame);
