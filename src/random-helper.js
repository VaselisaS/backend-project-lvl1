export const randomNumber = (max, min) => Math.floor(Math.random() * (max - min)) + min;
export const randomOperator = () => {
  const operators = '+-*';
  const index = randomNumber(0, operators.length);
  return operators[index];
};
