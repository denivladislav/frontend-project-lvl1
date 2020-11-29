#!/usr/bin/env node
import { questionText, makeGameData } from '../src/games/brain-evenLogic.js';

import gameStart from '../src/index.js';

gameStart(questionText, makeGameData);
