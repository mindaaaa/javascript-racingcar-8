import { MissionUtils } from '@woowacourse/mission-utils';
import Car from '../domain/Car.js';

export default class RacingGame {
  static #RANDOM_MIN = 0;
  static #RANDOM_MAX = 9;

  #cars;

  constructor(carNames) {
    this.#cars = carNames.map((name) => new Car(name));
  }

  playRound() {
    this.#cars.forEach((car) => {
      const randomValue = MissionUtils.Random.pickNumberInRange(
        RacingGame.#RANDOM_MIN,
        RacingGame.#RANDOM_MAX
      );

      car.move(randomValue);
    });
  }

  get cars() {
    return this.#cars;
  }

  getWinners() {
    const maxPosition = this.#getMaxPosition();
    return this.#cars
      .filter((car) => car.position === maxPosition)
      .map((car) => car.name);
  }

  #getMaxPosition() {
    return Math.max(...this.#cars.map((car) => car.position));
  }
}
