export default class CarValidator {
  static MAX_NAME_LENGTH = 5;

  /**
   * 모든 자동차 이름을 검증합니다.
   * 각 이름의 길이와 중복 여부를 확인합니다.
   * @param {string[]} names - 검증할 자동차 이름 배열
   * @throws {Error} 이름이 5자를 초과하거나 중복된 경우
   */
  static validateCarNames(names) {
    names.forEach((name) => this.validateNameLength(name));
    this.validateNoDuplicates(names);
  }

  /**
   * 자동차 이름의 길이를 검증합니다.
   * @param {string} name - 검증할 자동차 이름
   * @throws {Error} 이름이 5자를 초과하는 경우
   */
  static validateNameLength(name) {
    if (name.length > this.MAX_NAME_LENGTH) {
      throw new Error('[ERROR] 이름은 5자 이하만 가능합니다.');
    }
  }

  /**
   * 자동차 이름의 중복 여부를 검증합니다.
   * @param {string[]} names - 검증할 자동차 이름 배열
   * @throws {Error} 중복된 이름이 있는 경우
   */
  static validateNoDuplicates(names) {
    const uniqueNames = new Set(names);
    if (uniqueNames.size !== names.length) {
      throw new Error('[ERROR] 중복된 이름이 있습니다.');
    }
  }
}
