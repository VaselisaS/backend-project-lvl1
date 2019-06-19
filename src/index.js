import 'source-map-support/register';
import readlineSync from 'readline-sync';

export default (welcomeMassege = '', getCorrectAnswer, data, getQuestionMassege) => {
  console.log(`Welcome to the Brain Games!\n${welcomeMassege}`);

  const userName = readlineSync.question('May I have you name? ');

  console.log(`Hello, ${userName}!`);

  if (welcomeMassege === '') {
    return false;
  }
  console.log('\n');

  const iter = (counter) => {
    if (counter === 0) {
      return console.log(`Congratulations, ${userName}!`);
    }

    const randomData = data();
    console.log(`Question: ${getQuestionMassege(randomData)}`);

    const answerUser = readlineSync.question('Your answer: ');
    const correctAnswer = getCorrectAnswer(randomData);
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
