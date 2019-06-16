#!/usr/bin/env node
import { game } from '..';
import { questionUser, correctAnswer } from '../games/calc';

game('What is the result of the expression?\n', questionUser, correctAnswer, 99, 0);
