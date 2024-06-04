/**
 * Write a script that reads and waits for user input using
 * stdin.
 */
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

process.stdout.write('Welcome to Holberton School, what is your name?\n');

rl.question('', (name) => {
  console.log(`Your name is: ${name}`);
  rl.close();
});
