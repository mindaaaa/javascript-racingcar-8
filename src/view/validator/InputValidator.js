export default class InputValidator {
  /**
   * 입력값이 비어있지 않은지 검증합니다.
   * @param {string} input - 검증할 입력값
   * @throws {Error} 입력값이 null, undefined, 빈 문자열, 또는 공백만 있는 경우
   */
  static validateNotEmpty(input) {
    if (!input || !input.trim()) {
      throw new Error('[ERROR] 입력값이 비어있습니다.');
    }
  }

  /**
   * 값이 숫자로 변환 가능한지 검증합니다.
   * @param {*} value - 검증할 값
   * @throws {Error} 값이 NaN이거나 빈 문자열인 경우
   */
  static validateNumeric(value) {
    if (isNaN(value) || value === '') {
      throw new Error('[ERROR] 숫자를 입력해주세요.');
    }
  }

  /**
   * 배열이 비어있지 않은지 검증합니다.
   * @param {Array} array - 검증할 배열
   * @throws {Error} 배열이 비어있는 경우
   */
  static validateArrayNotEmpty(array) {
    if (array.length === 0) {
      throw new Error('[ERROR] 최소 1개 이상 입력해주세요.');
    }
  }
}
