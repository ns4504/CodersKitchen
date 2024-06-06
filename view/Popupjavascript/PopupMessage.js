export class Message {
  constructor(id, name, message, timestamp) {
    this._id = id;
    this._name = name;
    this._message = message;
    this._timestamp = timestamp;
  }

  get id() {
    return this._id;
  }

  set id(value) {
    this._id = value;
  }

  get name() {
    return this._name;
  }

  set name(value) {
    this._name = value;
  }

  get message() {
    return this._message;
  }

  set message(value) {
    this._message = value;
  }

  get timestamp() {
    return this._timestamp;
  }

  set timestamp(value) {
    this._timestamp = value;
  }
}
