#!/usr/bin/env node
import promptly from 'promptly';

console.log('Welcome to the Brain Games!');

async function askName() {
  const name = await promptly.prompt('May i have your name?: ');
  console.log(`Hello, ${name}!`);
}
