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

  static printRoundResult(cars) {
    cars.forEach((car) => {
      const position = this.POSITION_MARKER.repeat(car.position);
      MissionUtils.Console.print(
        `${car.name}${this.SEPARATOR.COLON}${position}`
      );
    });
    MissionUtils.Console.print('');
  }

  static printWinners(winners) {
    const winnerNames = winners.join(this.SEPARATOR.COMMA);
    MissionUtils.Console.print(`${this.MESSAGES.WINNER_PREFIX}${winnerNames}`);
  }

  static printResultHeader() {
    MissionUtils.Console.print(this.MESSAGES.RESULT_HEADER);
  }
}
