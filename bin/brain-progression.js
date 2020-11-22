#!/usr/bin/env node
import {
  makeProgressionQuestion, makeProgessionAnswer,
  numbersProgressionAmount, numbersProgressionRange,
} from '../src/games/brain-progressionLogic.js';
import { gameStart } from '../src/index.js';

gameStart(makeProgressionQuestion, makeProgessionAnswer,
  numbersProgressionAmount, numbersProgressionRange);
