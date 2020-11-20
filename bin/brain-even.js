#!/usr/bin/env node
import {
  makeEvenQuestion, makeEvenAnswer,
  numbersEvenRange, numbersEvenAmount,
} from '../src/games/brain-evenLogic.js';

import { gameStart } from '../src/index.js';

gameStart(makeEvenQuestion, makeEvenAnswer, numbersEvenAmount, numbersEvenRange);
