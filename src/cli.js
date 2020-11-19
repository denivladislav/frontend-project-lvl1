import promptly from 'promptly';

async function askName() {
  const name = await promptly.prompt('May i have your name? ');
  console.log(`Hello, ${name}!`);
}

export default askName;
