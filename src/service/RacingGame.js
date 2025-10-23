import { MissionUtils } from '@woowacourse/mission-utils';
import Car from '../domain/Car.js';

export default class RacingGame {
  static #RANDOM_MIN = 0;
  static #RANDOM_MAX = 9;
  #cars;

  /**
   * 자동차 경주 게임을 생성합니다.
   * @param {string[]} carNames - 자동차 이름 배열
   */
  constructor(carNames) {
    this.#cars = carNames.map((name) => new Car(name));
  }

  /**
   * 한 라운드를 진행합니다.
   * 모든 자동차에게 랜덤값을 부여하여 이동시킵니다.
   */
  playRound() {
    this.#cars.forEach((car) => {
      const randomValue = MissionUtils.Random.pickNumberInRange(
        RacingGame.#RANDOM_MIN,
        RacingGame.#RANDOM_MAX
      );

      car.move(randomValue);
    });
  }

  /**
   * 현재 참여 중인 자동차 배열을 반환합니다.
   * @returns {Car[]} 자동차 배열
   */
  get cars() {
    return this.#cars;
  }

  /**
   * 경주의 우승자를 반환합니다.
   * 가장 멀리 이동한 자동차들의 이름을 배열로 반환합니다. (공동 우승 가능)
   * @returns {string[]} 우승자 이름 배열
   */
  getWinners() {
    const maxPosition = this.#getMaxPosition();
    return this.#cars
      .filter((car) => car.position === maxPosition)
      .map((car) => car.name);
  }

  /**
   * 자동차들 중 최대 위치를 반환합니다.
   * @private
   * @returns {number} 최대 위치값
   */
  #getMaxPosition() {
    return Math.max(...this.#cars.map((car) => car.position));
  }
}
