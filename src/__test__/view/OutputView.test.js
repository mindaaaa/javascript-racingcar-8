import { MissionUtils } from '@woowacourse/mission-utils';
import OutputView from '../../view/OutputView.js';
import Car from '../../domain/Car.js';

describe('OutputView 뷰 클래스', () => {
  let logSpy;

  beforeEach(() => {
    logSpy = jest.spyOn(MissionUtils.Console, 'print');
    logSpy.mockClear();
  });

  describe('printRoundResult 메서드는', () => {
    test('자동차들의 현재 위치를 출력한다', () => {
      // given
      const pobi = new Car('pobi');
      const woni = new Car('woni');
      pobi.move(5);
      woni.move(2);

      const cars = [pobi, woni];

      // when
      OutputView.printRoundResult(cars);

      // then
      expect(logSpy).toHaveBeenCalledWith('pobi : -');
      expect(logSpy).toHaveBeenCalledWith('woni : ');
      expect(logSpy).toHaveBeenCalledWith(''); // 빈 줄
    });

    test('위치가 0이면 대시 없이 출력한다', () => {
      // given
      const car = new Car('pobi');

      // when
      OutputView.printRoundResult([car]);

      // then
      expect(logSpy).toHaveBeenCalledWith('pobi : ');
    });

    test('여러 칸 전진한 경우 대시를 반복한다', () => {
      // given
      const car = new Car('pobi');
      car.move(5);
      car.move(7);
      car.move(9);

      // when
      OutputView.printRoundResult([car]);

      // then
      expect(logSpy).toHaveBeenCalledWith('pobi : ---');
    });
  });

  describe('printWinners 메서드는', () => {
    test('단독 우승자를 출력한다', () => {
      // given
      const winners = ['pobi'];

      // when
      OutputView.printWinners(winners);

      // then
      expect(logSpy).toHaveBeenCalledWith('최종 우승자 : pobi');
    });

    test('공동 우승자를 쉼표로 구분하여 출력한다', () => {
      // given
      const winners = ['pobi', 'jun'];

      // when
      OutputView.printWinners(winners);

      // then
      expect(logSpy).toHaveBeenCalledWith('최종 우승자 : pobi, jun');
    });
  });

  describe('printResultHeader 메서드는', () => {
    test('실행 결과 헤더를 출력한다', () => {
      // when
      OutputView.printResultHeader();

      // then
      expect(logSpy).toHaveBeenCalledWith('\n실행 결과');
    });
  });
});
