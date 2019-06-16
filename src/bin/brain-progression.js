#!/usr/bin/env node
import { game } from '..';
import { questionUser, correctAnswer } from '../games/progression';

game('What number is missing in the progression?\n', questionUser, correctAnswer, 99, 0);
