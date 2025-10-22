export default class RoundValidator {
  static MIN_ROUND = 1;

  static validateMinimum(rounds) {
    if (rounds < this.MIN_ROUND) {
      throw new Error('[ERROR] 시도 횟수는 1 이상이어야 합니다.');
    }
  }

  static validateInteger(rounds) {
    if (!Number.isInteger(rounds)) {
      throw new Error('[ERROR] 시도 횟수는 정수여야 합니다.');
    }
  }
}
