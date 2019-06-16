import readlineSync from 'readline-sync';

export const startMassege = (massege = '') => console.log(`Welcome to the Brain Games!\n${massege}`);
export const userName = () => readlineSync.question('May I have you name? ');
export const welcomUser = name => console.log(`Hello, ${name}!`);
export const congratulationsUser = name => console.log(`Congratulations, ${name}`);

export const wrongAnswerMessage = (wrongAnswer, correctAnswer, name) => console.log(`'${wrongAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.
Let's try again, ${name}!`);

export const question = messega => console.log(`Question: ${messega}`);
export const answer = () => readlineSync.question('Your answer: ');

export const checkUserAnswer = (userAnswer, correctAnswer, name) => {
  if (correctAnswer !== userAnswer) {
    wrongAnswerMessage(userAnswer, correctAnswer, name);
    return false;
  }
  console.log('Correct!');
  return true;
};
