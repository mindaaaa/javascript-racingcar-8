export default class Car {
  static #FORWARD_TRIGGER_VALUE = 4;
  #name;
  #position = 0;

  constructor(name) {
    this.#name = name;
  }

  move(randomValue) {
    if (randomValue >= Car.#FORWARD_TRIGGER_VALUE) {
      this.#position++;
    }
  }

  get name() {
    return this.#name;
  }

  get position() {
    return this.#position;
  }
}
