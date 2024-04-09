export default function appendToEachArrayValue (array, appendString) {
  const myArr = [];
  for (const i of array) {
    myArr.push(`${appendString}${i}`);
  }
  return myArr;
}
