import { MissionUtils } from '@woowacourse/mission-utils';

export default class OutputView {
  static MESSAGES = {
    RESULT_HEADER: '\n실행 결과',
    WINNER_PREFIX: '최종 우승자 : ',
  };

  static SEPARATOR = {
    COLON: ' : ',
    COMMA: ', ',
  };

  static POSITION_MARKER = '-';

  /**
   * 한 라운드의 결과를 출력합니다.
   * 각 자동차의 이름과 위치를 대시(-)로 표시합니다.
   * @param {Car[]} cars - 자동차 배열
   */
  static printRoundResult(cars) {
    cars.forEach((car) => {
      const position = this.POSITION_MARKER.repeat(car.position);
      MissionUtils.Console.print(
        `${car.name}${this.SEPARATOR.COLON}${position}`
      );
    });
    MissionUtils.Console.print('');
  }

  /**
   * 최종 우승자를 출력합니다.
   * 여러 명의 우승자는 쉼표로 구분하여 출력합니다.
   * @param {string[]} winners - 우승자 이름 배열
   */
  static printWinners(winners) {
    const winnerNames = winners.join(this.SEPARATOR.COMMA);
    MissionUtils.Console.print(`${this.MESSAGES.WINNER_PREFIX}${winnerNames}`);
  }

  /**
   * 실행 결과 헤더를 출력합니다.
   */
  static printResultHeader() {
    MissionUtils.Console.print(this.MESSAGES.RESULT_HEADER);
  }
}
