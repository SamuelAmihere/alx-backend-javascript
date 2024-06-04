/**
 * Write a script that reads and waits for user input using
 * stdin.
 */
process.stdout.write('Welcome to Holberton School, what is your name?\n');

process.stdin.on('data', (data) => {
  const name = data.toString().trim();
  if (name) {
    process.stdout.write(`Your name is: ${name}\n`);
    process.exit();
  } else {
    process.stdout.write('You need to provide a name\n');
  }
});
process.stdin.on('end', () => {
  process.stdout.write('This important software is now closing\n');
});

