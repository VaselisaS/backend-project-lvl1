#!/usr/bin/env node
import {
  startGame, userName, welcomUser, question,
} from '..';

startGame();

console.log('Answer "yes" if number even otherwise answer "no".\n');

const name = userName();

welcomUser(name);
console.log('\n');

question(name, 0, 99);
