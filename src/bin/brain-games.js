#!/usr/bin/env node
import { startGame, userName, welcomUser } from '..';

startGame();

const name = userName();

welcomUser(name);
