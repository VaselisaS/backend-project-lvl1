#!/usr/bin/env node
import { game } from '..';
import { questionUser, correctAnswer } from '../games/even';

game('Answer "yes" if number even otherwise answer "no".\n', questionUser, correctAnswer, 99, 0);
