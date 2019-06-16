#!/usr/bin/env node
import { game } from '..';
import { questionUser, correctAnswer } from '../games/gcd';

game('Find the greatest common divisor of given numbers.\n', questionUser, correctAnswer, 99, 0);
