#!/usr/bin/env node
import {
  questionProgessionText,
  makeProgressionQuestion, makeProgessionAnswer,
  numbersProgressionAmount, numbersProgressionRange,
} from '../src/games/brain-progressionLogic.js';
import { gameStart } from '../src/index.js';

gameStart(questionProgessionText, makeProgressionQuestion, makeProgessionAnswer,
  numbersProgressionAmount, numbersProgressionRange);
