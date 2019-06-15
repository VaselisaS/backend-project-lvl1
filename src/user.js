import readlineSync from 'readline-sync';

export const userName = () => readlineSync.question('May I have you name? ');
export const welcomUser = name => console.log(`Hello, ${name}!`);
export const congratulationsUser = name => console.log(`Congratulations, ${name}`);
export const wrongAnswerUser = (wrongAnswer, correctAnswer, name) => console.log(`'${wrongAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.
Let's try again, ${name}!`);
