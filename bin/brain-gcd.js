#!/usr/bin/env node
import {
  questionGcdText,
  makeGcdQuestion, makeGcdAnswer,
  numbersGcdRange, numbersGcdAmount,
} from '../src/games/brain-gcdLogic.js';
import { gameStart } from '../src/index.js';

gameStart(questionGcdText, makeGcdQuestion, makeGcdAnswer, numbersGcdAmount, numbersGcdRange);
