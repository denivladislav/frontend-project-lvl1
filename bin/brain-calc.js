#!/usr/bin/env node
import {
  questionCalcText,
  makeCalcQuestion, makeCalcAnswer,
  numbersCalcAmount, numbersCalcRange,
  mathSignsCalcAmount,
} from '../src/games/brain-calcLogic.js';

import { gameStart } from '../src/index.js';

gameStart(questionCalcText, makeCalcQuestion, makeCalcAnswer,
  numbersCalcAmount, numbersCalcRange, mathSignsCalcAmount);
