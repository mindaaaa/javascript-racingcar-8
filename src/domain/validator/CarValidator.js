export default class CarValidator {
  static MAX_NAME_LENGTH = 5;

  static validateCarNames(names) {
    names.forEach((name) => this.validateNameLength(name));
    this.validateNoDuplicates(names);
  }

  static validateNameLength(name) {
    if (name.length > this.MAX_NAME_LENGTH) {
      throw new Error('[ERROR] 이름은 5자 이하만 가능합니다.');
    }
  }

  static validateNoDuplicates(names) {
    const uniqueNames = new Set(names);
    if (uniqueNames.size !== names.length) {
      throw new Error('[ERROR] 중복된 이름이 있습니다.');
    }
  }
}
