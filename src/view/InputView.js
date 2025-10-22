import { MissionUtils } from '@woowacourse/mission-utils';

export default class InputView {
  static MESSAGES = {
    INPUT_CAR_NAMES:
      '경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n',
    INPUT_ROUNDS: '시도할 횟수는 몇 회인가요?\n',
  };

  static DELIMITER = ',';

  static async readCarNames() {
    const input = await MissionUtils.Console.readLineAsync(
      this.MESSAGES.INPUT_CAR_NAMES
    );
    return input.split(this.DELIMITER).map((name) => name.trim());
  }

  static async readRounds() {
    const input = await MissionUtils.Console.readLineAsync(
      this.MESSAGES.INPUT_ROUNDS
    );
    return Number(input);
  }
}
