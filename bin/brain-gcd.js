#!/usr/bin/env node
import {
  makeGcdQuestion, makeGcdAnswer,
  numbersGcdRange, numbersGcdAmount,
} from '../src/games/brain-gcdLogic.js';
import { gameStart } from '../src/index.js';

gameStart(makeGcdQuestion, makeGcdAnswer, numbersGcdAmount, numbersGcdRange);
