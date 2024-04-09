export default function taskBlock(trueOrFalse) {
  let task = false;
  let task2 = true;

  if (trueOrFalse) {
    task = true; // eslint-disable-line no-param-reassign
    task2 = false; // eslint-disable-line no-param-reassign
  }

  return [task, task2];
}
