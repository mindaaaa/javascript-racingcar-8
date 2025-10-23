export default class Car {
  static #FORWARD_TRIGGER_VALUE = 4;
  #name;
  #position = 0;

  /**
   * 자동차를 생성합니다.
   * @param {string} name - 자동차 이름
   */
  constructor(name) {
    this.#name = name;
  }

  /**
   * 랜덤값에 따라 자동차를 이동시킵니다.
   * 랜덤값이 4 이상이면 전진하고, 미만이면 정지합니다.
   * @param {number} randomValue - 0~9 사이의 랜덤값
   */
  move(randomValue) {
    if (randomValue >= Car.#FORWARD_TRIGGER_VALUE) {
      this.#position++;
    }
  }

  /**
   * 자동차 이름을 반환합니다.
   * @returns {string} 자동차 이름
   */
  get name() {
    return this.#name;
  }

  /**
   * 자동차의 현재 위치를 반환합니다.
   * @returns {number} 현재 위치
   */
  get position() {
    return this.#position;
  }
}
