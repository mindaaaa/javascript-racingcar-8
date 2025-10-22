import { MissionUtils } from '@woowacourse/mission-utils';
import InputView from '../../view/InputView.js';

describe('InputView 뷰 클래스는', () => {
  let mockReadLine;

  beforeEach(() => {
    mockReadLine = jest.fn();
    MissionUtils.Console.readLineAsync = mockReadLine;
  });

  describe('readCarNames 메서드는', () => {
    test('쉼표로 구분된 이름을 배열로 반환한다.', async () => {
      // given
      mockReadLine.mockResolvedValue('pobi,woni,jun');

      // when
      const result = await InputView.readCarNames();

      // then
      expect(result).toEqual(['pobi', 'woni', 'jun']);
    });

    test('공백을 제거한다', async () => {
      // given
      mockReadLine.mockResolvedValue(' pobi , woni ');

      // when
      const result = await InputView.readCarNames();

      // then
      expect(result).toEqual(['pobi', 'woni']);
    });
  });

  describe('readRounds 메서드는', () => {
    test('문자열을 숫자로 변환한다', async () => {
      // given
      mockReadLine.mockResolvedValue('5');

      // when
      const result = await InputView.readRounds();

      // then
      expect(result).toBe(5);
    });
  });
});
