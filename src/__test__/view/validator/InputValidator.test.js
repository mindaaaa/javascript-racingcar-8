import InputValidator from '../../../view/validator/InputValidator.js';

describe('InputValidator 입력 검증 클래스', () => {
  describe('validateNotEmpty 메서드는', () => {
    test('빈 문자열에 대해 에러를 발생시킨다.', () => {
      // given
      const emptyInput = '';

      // when & then
      expect(() => InputValidator.validateNotEmpty(emptyInput)).toThrow(
        '[ERROR] 입력값이 비어있습니다.'
      );
    });

    test('공백만 있는 문자열에 대해 에러를 발생시킨다.', () => {
      // given
      const whitespaceInput = '   ';

      // when & then
      expect(() => InputValidator.validateNotEmpty(whitespaceInput)).toThrow(
        '[ERROR] 입력값이 비어있습니다.'
      );
    });

    test('null에 대해 에러를 발생시킨다.', () => {
      // given
      const nullInput = null;

      // when & then
      expect(() => InputValidator.validateNotEmpty(nullInput)).toThrow(
        '[ERROR] 입력값이 비어있습니다.'
      );
    });

    test('undefined에 대해 에러를 발생시킨다.', () => {
      // given
      const undefinedInput = undefined;

      // when & then
      expect(() => InputValidator.validateNotEmpty(undefinedInput)).toThrow(
        '[ERROR] 입력값이 비어있습니다.'
      );
    });

    test('유효한 문자열을 허용한다.', () => {
      // given
      const validInput = 'pobi,woni';

      // when & then
      expect(() => InputValidator.validateNotEmpty(validInput)).not.toThrow();
    });
  });

  describe('validateNumeric 메서드는', () => {
    test('숫자로 변환 가능한 문자열을 허용한다.', () => {
      // given
      const numericValue = 5;

      // when & then
      expect(() => InputValidator.validateNumeric(numericValue)).not.toThrow();
    });

    test('0을 허용한다.', () => {
      // given
      const zeroValue = 0;

      // when & then
      expect(() => InputValidator.validateNumeric(zeroValue)).not.toThrow();
    });

    test('NaN에 대해 에러를 발생시킨다.', () => {
      // given
      const nanValue = NaN;

      // when & then
      expect(() => InputValidator.validateNumeric(nanValue)).toThrow(
        '[ERROR] 숫자를 입력해주세요.'
      );
    });

    test('빈 문자열에 대해 에러를 발생시킨다.', () => {
      // given
      const emptyString = '';

      // when & then
      expect(() => InputValidator.validateNumeric(emptyString)).toThrow(
        '[ERROR] 숫자를 입력해주세요.'
      );
    });

    test('숫자로 변환 불가능한 값에 대해 에러를 발생시킨다.', () => {
      // given
      const invalidValue = NaN;

      // when & then
      expect(() => InputValidator.validateNumeric(invalidValue)).toThrow(
        '[ERROR] 숫자를 입력해주세요.'
      );
    });
  });

  describe('validateArrayNotEmpty 메서드는', () => {
    test('빈 배열에 대해 에러를 발생시킨다.', () => {
      // given
      const emptyArray = [];

      // when & then
      expect(() => InputValidator.validateArrayNotEmpty(emptyArray)).toThrow(
        '[ERROR] 최소 1개 이상 입력해주세요.'
      );
    });

    test('요소가 있는 배열을 허용한다.', () => {
      // given
      const validArray = ['pobi'];

      // when & then
      expect(() =>
        InputValidator.validateArrayNotEmpty(validArray)
      ).not.toThrow();
    });

    test('여러 요소가 있는 배열을 허용한다.', () => {
      // given
      const multipleArray = ['pobi', 'woni', 'jun'];

      // when & then
      expect(() =>
        InputValidator.validateArrayNotEmpty(multipleArray)
      ).not.toThrow();
    });
  });
});
