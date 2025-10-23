import InputView from './view/InputView.js';
import OutputView from './view/OutputView.js';
import InputValidator from './view/validator/InputValidator.js';
import CarValidator from './domain/policy/CarValidator.js';
import RoundValidator from './domain/policy/RoundValidator.js';
import RacingGame from './service/RacingGame.js';

class App {
  /**
   * 애플리케이션을 실행합니다.
   * @throws {Error} 입력값이 유효하지 않은 경우
   */
  async run() {
    try {
      const carNames = await this.#readAndValidateCarNames();
      const rounds = await this.#readAndValidateRounds();

      this.#playGame(carNames, rounds);
    } catch (error) {
      throw error;
    }
  }

  /**
   * 자동차 이름을 입력받고 검증합니다.
   * @private
   * @returns {Promise<string[]>} 검증된 자동차 이름 배열
   * @throws {Error} 입력값이 유효하지 않은 경우
   */
  async #readAndValidateCarNames() {
    const carNames = await InputView.readCarNames();

    InputValidator.validateArrayNotEmpty(carNames);
    CarValidator.validateCarNames(carNames);

    return carNames;
  }

  /**
   * 시도 횟수를 입력받고 검증합니다.
   * @private
   * @returns {Promise<number>} 검증된 시도 횟수
   * @throws {Error} 입력값이 유효하지 않은 경우
   */
  async #readAndValidateRounds() {
    const rounds = await InputView.readRounds();

    InputValidator.validateNumeric(rounds);
    RoundValidator.validateInteger(rounds);
    RoundValidator.validateMinimum(rounds);

    return rounds;
  }

  /**
   * 게임을 진행하고 결과를 출력합니다.
   * @private
   * @param {string[]} carNames - 자동차 이름 배열
   * @param {number} rounds - 시도 횟수
   */
  #playGame(carNames, rounds) {
    const game = new RacingGame(carNames);

    OutputView.printResultHeader();

    for (let i = 0; i < rounds; i++) {
      game.playRound();
      OutputView.printRoundResult(game.cars);
    }

    const winners = game.getWinners();
    OutputView.printWinners(winners);
  }
}

export default App;
