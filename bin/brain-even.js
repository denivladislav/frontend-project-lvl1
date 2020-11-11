#!/usr/bin/env node
import promptly from 'promptly';

async function askName() {
  console.log('Welcome to the Brain Games!');
  const name = await promptly.prompt('May i have your name?: ');
  console.log(`Hello, ${name}!`);
}

askName();
