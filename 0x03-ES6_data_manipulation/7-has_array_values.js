/**
 * Checks if a set contains each element in an array.
 * @param {Set} set - The collection of unique items.
 * @param {*} array - The array of items.
 * @author Daniel Etchie <https://github.com/danthecm>
 * @returns {Boolean}
 */
export default function hasValuesFromArray(set, arr) {
  if (Array.isArray(arr) && set instanceof Set) {
    return arr.every((val) => set.has(val));
  }
  return (false);
}
