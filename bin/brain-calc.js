#!/usr/bin/env node
import {
  makeCalcQuestion, makeCalcAnswer,
  numbersCalcAmount, numbersCalcRange,
  mathSignsCalcAmount,
} from '../src/games/brain-calcLogic.js';

import { gameStart } from '../src/index.js';

gameStart(makeCalcQuestion, makeCalcAnswer,
  numbersCalcAmount, numbersCalcRange, mathSignsCalcAmount);
