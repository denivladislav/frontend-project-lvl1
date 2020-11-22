#!/usr/bin/env node
import {
  questionPrimeText,
  makePrimeQuestion, makePrimeAnswer,
  numbersPrimeAmount, numbersPrimeRange,
} from '../src/games/brain-primeLogic.js';

import { gameStart } from '../src/index.js';

gameStart(questionPrimeText, makePrimeQuestion,
  makePrimeAnswer, numbersPrimeAmount, numbersPrimeRange);
