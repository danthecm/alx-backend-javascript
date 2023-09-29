export default class Building {
  constructor(sqft) {
    if (new.target !== Building) {
      if (this.evacuationWarningMessage === undefined) {
        throw new Error(
          'Class extending Building must override evacuationWarningMessage',
        );
      }
    }
    this.sqft = sqft;
  }

  get sqft() {
    return this._sqft;
  }

  set sqft(value) {
    this._sqft = value;
  }
}

const b = new Building(100);
console.log(b);

class TestBuilding extends Building {}

try {
  TestBuilding(200);
} catch (err) {
  console.log(err);
}
