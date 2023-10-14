/**
 * Creates a set from an array.
 * @param {Array} array - The source array.
 * @author Daniel Etchie <https://github.com/B3zaleel>
 * @returns {Set}
 */
export default function setFromArray(arr) {
  if (Array.isArray(arr)) {
    return new Set(arr);
  }
  return new Set();
}
