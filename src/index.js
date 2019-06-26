import 'source-map-support/register';
import readlineSync from 'readline-sync';

const roundCount = 3;

export default (description, getDataGame) => {
  console.log('Welcome to the Brain Games!\n');
  console.log(`${description}\n`);

  const userName = readlineSync.question('May I have you name? ');

  console.log(`Hello, ${userName}!\n`);

  const iter = (round) => {
    if (round === 0) {
      console.log(`Congratulations, ${userName}!`);
      return;
    }

    const { correctAnswer, question } = getDataGame();
    console.log(`Question: ${question}`);
    const answerUser = readlineSync.question('Your answer: ');
    if (correctAnswer !== answerUser) {
      console.log(`'${answerUser}' is wrong answer ;(. `);
      console.log(`Correct answer was '${correctAnswer}'. Let's try again, ${userName}!`);
      return;
    }
    console.log('Correct!');
    iter(round - 1);
  };

  return iter(roundCount);
};
