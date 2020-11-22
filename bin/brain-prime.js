#!/usr/bin/env node
import {
  makePrimeQuestion, makePrimeAnswer,
  numbersPrimeAmount, numbersPrimeRange,
} from '../src/games/brain-primeLogic.js';

import { gameStart } from '../src/index.js';

gameStart(makePrimeQuestion, makePrimeAnswer, numbersPrimeAmount, numbersPrimeRange);
