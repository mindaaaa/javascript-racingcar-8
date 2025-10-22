import { MissionUtils } from '@woowacourse/mission-utils';
import RacingGame from '../../service/RacingGame.js';

describe('RacingGame 서비스 클래스', () => {
  describe('constructor는', () => {
    test('자동차 이름 배열을 받아 Car 인스턴스들을 생성한다.', () => {
      // given
      const carNames = ['pobi', 'woni', 'jun'];

      // when
      const game = new RacingGame(carNames);

      // then
      const cars = game.cars;
      expect(cars).toHaveLength(3);
      expect(cars[0].name).toBe('pobi');
      expect(cars[1].name).toBe('woni');
      expect(cars[2].name).toBe('jun');
    });

    test('생성된 자동차들의 초기 위치는 0이다.', () => {
      // given
      const carNames = ['pobi', 'woni'];

      // when
      const game = new RacingGame(carNames);

      // then
      const cars = game.cars;
      cars.forEach((car) => {
        expect(car.position).toBe(0);
      });
    });
  });

  describe('playRound 메서드는', () => {
    test('모든 자동차가 랜덤값으로 이동한다.', () => {
      // given
      const carNames = ['pobi', 'woni'];
      const game = new RacingGame(carNames);

      MissionUtils.Random.pickNumberInRange = jest.fn();
      MissionUtils.Random.pickNumberInRange
        .mockReturnValueOnce(4) /* pobi 전진 */
        .mockReturnValueOnce(3); /* woni 정지 */

      // when
      game.playRound();

      // then
      const cars = game.cars;
      expect(cars[0].position).toBe(1);
      expect(cars[1].position).toBe(0);
    });

    test('여러 라운드를 진행할 수 있다.', () => {
      // given
      const carNames = ['pobi'];
      const game = new RacingGame(carNames);

      MissionUtils.Random.pickNumberInRange = jest.fn();
      MissionUtils.Random.pickNumberInRange.mockReturnValue(5); // 항상 전진

      // when
      game.playRound();
      game.playRound();
      game.playRound();

      // then
      expect(game.cars[0].position).toBe(3);
    });
  });

  describe('getWinners 메서드는', () => {
    test('단독 우승자를 반환한다.', () => {
      // given
      const carNames = ['pobi', 'woni'];
      const game = new RacingGame(carNames);

      MissionUtils.Random.pickNumberInRange = jest.fn();
      MissionUtils.Random.pickNumberInRange
        .mockReturnValueOnce(5) /* pobi 전진 */
        .mockReturnValueOnce(2); /* woni 정지 */

      game.playRound();

      // when
      const winners = game.getWinners();

      // then
      expect(winners).toEqual(['pobi']);
    });

    test('공동 우승자를 반환한다.', () => {
      // given
      const carNames = ['pobi', 'woni', 'jun'];
      const game = new RacingGame(carNames);

      MissionUtils.Random.pickNumberInRange = jest.fn();
      MissionUtils.Random.pickNumberInRange
        .mockReturnValueOnce(5) /* pobi 전진 */
        .mockReturnValueOnce(5) /* woni 전진 */
        .mockReturnValueOnce(2); /* jun 정지 */

      game.playRound();

      // when
      const winners = game.getWinners();

      // then
      expect(winners).toEqual(['pobi', 'woni']);
    });

    test('모두 정지한 경우 모두 우승 처리된다.', () => {
      // given
      const carNames = ['pobi', 'woni'];
      const game = new RacingGame(carNames);

      // when - 한 번도 안 움직임
      const winners = game.getWinners();

      // then
      expect(winners).toEqual(['pobi', 'woni']);
    });
  });
});
