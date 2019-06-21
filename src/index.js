import 'source-map-support/register';
import readlineSync from 'readline-sync';

export default (welcomeMassege = '', generatorDataGame) => {
  console.log('Welcome to the Brain Games!\n');
  console.log(welcomeMassege);

  const userName = readlineSync.question('May I have you name? ');

  console.log(`Hello, ${userName}!\n`);

  if (welcomeMassege === '') {
    return false;
  }

  const iter = (counter) => {
    if (counter === 0) {
      console.log(`Congratulations, ${userName}!`);
      return true;
    }

    const { correctAnswer, question } = generatorDataGame();
    console.log(`Question: ${question}`);
    const answerUser = readlineSync.question('Your answer: ');
    if (correctAnswer !== answerUser) {
      console.log(
        `'${answerUser}' is wrong answer ;(. Correct answer was '${correctAnswer}'. Let's try again, ${userName}!`,
      );
      return false;
    }
    console.log('Correct!');

    return iter(counter - 1);
  };

  return iter(3);
};
