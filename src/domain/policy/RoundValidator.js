export default class RoundValidator {
  static MIN_ROUND = 1;

  /**
   * 라운드 횟수가 최소값 이상인지 검증합니다.
   * @param {number} rounds - 검증할 라운드 횟수
   * @throws {Error} 라운드 횟수가 1 미만인 경우
   */
  static validateMinimum(rounds) {
    if (rounds < this.MIN_ROUND) {
      throw new Error('[ERROR] 시도 횟수는 1 이상이어야 합니다.');
    }
  }

  /**
   * 라운드 횟수가 정수인지 검증합니다.
   * @param {number} rounds - 검증할 라운드 횟수
   * @throws {Error} 라운드 횟수가 정수가 아닌 경우
   */
  static validateInteger(rounds) {
    if (!Number.isInteger(rounds)) {
      throw new Error('[ERROR] 시도 횟수는 정수여야 합니다.');
    }
  }
}
