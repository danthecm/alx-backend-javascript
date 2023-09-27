export default function iterateThroughObject(reportWithIterator) {
  let index = 0;
  let result = '';
  for (const item of reportWithIterator) {
    result += index > 0 ? ` | ${item}` : item;
    index += 1;
  }
  return result;
}
