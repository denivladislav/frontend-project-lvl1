#!/usr/bin/env node
import {
  questionEvenText,
  makeEvenQuestion, makeEvenAnswer,
  numbersEvenRange, numbersEvenAmount,
} from '../src/games/brain-evenLogic.js';

import { gameStart } from '../src/index.js';

gameStart(questionEvenText, makeEvenQuestion, makeEvenAnswer, numbersEvenAmount, numbersEvenRange);
