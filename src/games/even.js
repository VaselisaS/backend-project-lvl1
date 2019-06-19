import { randomNumber } from '../random-helper';
import run from '../index';

const massege = 'Answer "yes" if number even otherwise answer "no".\n';

const data = () => randomNumber(0, 99);

const getQuestionMassege = number => `${number}`;

const getCorrectAnswer = number => (number % 2 === 0 ? 'yes' : 'no');

export default () => run(massege, getCorrectAnswer, data, getQuestionMassege);
