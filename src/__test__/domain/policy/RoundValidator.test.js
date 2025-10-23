import RoundValidator from '../../../domain/policy/RoundValidator.js';

describe('RoundValidator 라운드 검증 클래스', () => {
  describe('validateMinimum 메서드는', () => {
    test('1 이상의 값을 허용한다.', () => {
      // given
      const validRounds = [1, 5, 10, 100];

      // when & then
      validRounds.forEach((rounds) => {
        expect(() => RoundValidator.validateMinimum(rounds)).not.toThrow();
      });
    });

    test('1 미만의 값에 대해 에러를 발생시킨다.', () => {
      // given
      const zeroRound = 0;

      // when & then
      expect(() => RoundValidator.validateMinimum(zeroRound)).toThrow(
        '[ERROR] 시도 횟수는 1 이상이어야 합니다.'
      );
    });

    test('음수에 대해 에러를 발생시킨다.', () => {
      // given
      const negativeRound = -1;

      // when & then
      expect(() => RoundValidator.validateMinimum(negativeRound)).toThrow(
        '[ERROR] 시도 횟수는 1 이상이어야 합니다.'
      );
    });

    test('경계값 1을 허용한다.', () => {
      // given
      const minRound = 1;

      // when & then
      expect(() => RoundValidator.validateMinimum(minRound)).not.toThrow();
    });
  });

  describe('validateInteger 메서드는', () => {
    test('정수를 허용한다.', () => {
      // given
      const validIntegers = [1, 5, 10, 100];

      // when & then
      validIntegers.forEach((rounds) => {
        expect(() => RoundValidator.validateInteger(rounds)).not.toThrow();
      });
    });

    test('소수에 대해 에러를 발생시킨다.', () => {
      // given
      const decimalRound = 1.5;

      // when & then
      expect(() => RoundValidator.validateInteger(decimalRound)).toThrow(
        '[ERROR] 시도 횟수는 정수여야 합니다.'
      );
    });

    test('0을 허용한다 (정수 검증만 수행).', () => {
      // given
      const zeroRound = 0;

      // when & then
      expect(() => RoundValidator.validateInteger(zeroRound)).not.toThrow();
    });

    test('음수 정수를 허용한다 (정수 검증만 수행).', () => {
      // given
      const negativeInteger = -5;

      // when & then
      expect(() =>
        RoundValidator.validateInteger(negativeInteger)
      ).not.toThrow();
    });

    test('NaN에 대해 에러를 발생시킨다.', () => {
      // given
      const nanValue = NaN;

      // when & then
      expect(() => RoundValidator.validateInteger(nanValue)).toThrow(
        '[ERROR] 시도 횟수는 정수여야 합니다.'
      );
    });
  });
});
