import { question } from '../user';

export const questionUser = number => question(number);

export const correctAnswer = number => (number % 2 === 0 ? 'yes' : 'no');
