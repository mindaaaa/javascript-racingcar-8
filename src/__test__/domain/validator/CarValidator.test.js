import CarValidator from '../../../domain/validator/CarValidator.js';

describe('CarValidator 도메인 검증 클래스', () => {
  describe('validateNameLength 메서드는', () => {
    test('5자 이하의 이름을 허용한다.', () => {
      // given
      const validNames = ['pobi', 'woni', 'a', '12345'];

      // when & then
      validNames.forEach((name) => {
        expect(() => CarValidator.validateNameLength(name)).not.toThrow();
      });
    });

    test('5자를 초과하는 이름에 대해 에러를 발생시킨다.', () => {
      // given
      const longName = 'toolong';

      // when & then
      expect(() => CarValidator.validateNameLength(longName)).toThrow(
        '[ERROR] 이름은 5자 이하만 가능합니다.'
      );
    });

    test('빈 문자열을 허용한다 (길이 검증만 수행).', () => {
      // given
      const emptyName = '';

      // when & then
      expect(() => CarValidator.validateNameLength(emptyName)).not.toThrow();
    });
  });

  describe('validateNoDuplicates 메서드는', () => {
    test('중복되지 않은 이름을 허용한다.', () => {
      // given
      const uniqueNames = ['pobi', 'woni', 'jun'];

      // when & then
      expect(() =>
        CarValidator.validateNoDuplicates(uniqueNames)
      ).not.toThrow();
    });

    test('중복된 이름에 대해 에러를 발생시킨다.', () => {
      // given
      const duplicateNames = ['pobi', 'woni', 'pobi'];

      // when & then
      expect(() => CarValidator.validateNoDuplicates(duplicateNames)).toThrow(
        '[ERROR] 중복된 이름이 있습니다.'
      );
    });
  });

  describe('validateCarNames 메서드는', () => {
    test('유효한 자동차 이름들을 허용한다.', () => {
      // given
      const validNames = ['pobi', 'woni', 'jun'];

      // when & then
      expect(() => CarValidator.validateCarNames(validNames)).not.toThrow();
    });

    test('5자를 초과하는 이름이 있으면 에러를 발생시킨다.', () => {
      // given
      const namesWithLongName = ['pobi', 'toolong', 'jun'];

      // when & then
      expect(() => CarValidator.validateCarNames(namesWithLongName)).toThrow(
        '[ERROR] 이름은 5자 이하만 가능합니다.'
      );
    });

    test('중복된 이름이 있으면 에러를 발생시킨다.', () => {
      // given
      const duplicateNames = ['pobi', 'woni', 'pobi'];

      // when & then
      expect(() => CarValidator.validateCarNames(duplicateNames)).toThrow(
        '[ERROR] 중복된 이름이 있습니다.'
      );
    });

    test('여러 검증을 순차적으로 수행한다.', () => {
      // given
      const invalidNames = ['pobi', 'toolongname'];

      // when & then - 길이 검증이 먼저 실행됨
      expect(() => CarValidator.validateCarNames(invalidNames)).toThrow(
        '[ERROR] 이름은 5자 이하만 가능합니다.'
      );
    });
  });
});
