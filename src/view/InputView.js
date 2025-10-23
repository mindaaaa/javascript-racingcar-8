import { MissionUtils } from '@woowacourse/mission-utils';

export default class InputView {
  static MESSAGES = {
    INPUT_CAR_NAMES:
      '경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n',
    INPUT_ROUNDS: '시도할 횟수는 몇 회인가요?\n',
  };

  static DELIMITER = ',';

  /**
   * 자동차 이름을 입력받습니다.
   * 쉼표로 구분된 이름을 배열로 파싱하고, 각 이름의 공백을 제거합니다.
   * @returns {Promise<string[]>} 자동차 이름 배열
   */
  static async readCarNames() {
    const input = await MissionUtils.Console.readLineAsync(
      this.MESSAGES.INPUT_CAR_NAMES
    );
    return input.split(this.DELIMITER).map((name) => name.trim());
  }

  /**
   * 시도 횟수를 입력받습니다.
   * 입력값을 숫자로 변환하여 반환합니다.
   * @returns {Promise<number>} 시도 횟수
   */
  static async readRounds() {
    const input = await MissionUtils.Console.readLineAsync(
      this.MESSAGES.INPUT_ROUNDS
    );
    return Number(input);
  }
}
