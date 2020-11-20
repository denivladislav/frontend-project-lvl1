#!/usr/bin/env node
import { brainEvenLogic, numberEvenRange } from '../src/games/brain-evenLogic.js';
import { gameStart } from '../src/index.js';

gameStart(numberEvenRange, brainEvenLogic);
