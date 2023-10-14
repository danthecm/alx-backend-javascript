export default class HolbertonClass {
  constructor(size, location) {
    this.size = size;
    this.location = location;
  }

  set location(location) {
    this._location = location;
  }

  get location() {
    return this._location;
  }

  set size(size) {
    this._size = size;
  }

  get size() {
    return this._size;
  }

  // eslint-disable-next-line consistent-return
  [Symbol.toPrimitive](type) {
    if (type === 'number') {
      return this.size;
    }
    if (type === 'string') {
      return this.location;
    }
  }
}
