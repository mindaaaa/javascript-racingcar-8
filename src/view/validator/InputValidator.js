export default class InputValidator {
  static validateNotEmpty(input) {
    if (!input || !input.trim()) {
      throw new Error('[ERROR] 입력값이 비어있습니다.');
    }
  }

  static validateNumeric(value) {
    if (isNaN(value) || value === '') {
      throw new Error('[ERROR] 숫자를 입력해주세요.');
    }
  }

  static validateArrayNotEmpty(array) {
    if (array.length === 0) {
      throw new Error('[ERROR] 최소 1개 이상 입력해주세요.');
    }
  }
}
