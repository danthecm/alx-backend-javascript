function validateType(variable, name, type) {
  if (type === 'array') {
    if (Array.isArray(variable)) {
      return true;
    }
    throw new TypeError(`${name} must be an array`);
  } else if (type === 'number') {
    if (typeof variable === 'number') {
      return variable;
    }
  } else if (type === 'string') {
    if (typeof variable === 'string') {
      return variable;
    }
  }
  throw new TypeError(`${name} must be a ${type}`);
}

export default class HolbertonCourse {
  constructor(name, length, students) {
    this.name = name;
    this.length = length;
    this.students = students;
  }

  get name() {
    return this._name;
  }

  set name(name) {
    this._name = validateType(name, 'Name', 'string');
  }

  get length() {
    return this._length;
  }

  set length(length) {
    this._length = validateType(length, 'Length', 'number');
  }

  get students() {
    return this._students;
  }

  set students(students) {
    validateType(students, 'Students', 'array');
    students.every((elem) => validateType(elem, 'Student', 'string'));
    this._students = students;
  }
}
