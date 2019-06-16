#!/usr/bin/env node
import { game } from '..';
import { questionUser, correctAnswer } from '../games/prime';

game(
  'Answer "yes" if given number is prime. Otherwise answer "no".\n',
  questionUser,
  correctAnswer,
  99,
  0,
);
