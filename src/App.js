import InputView from './view/InputView.js';
import OutputView from './view/OutputView.js';
import InputValidator from './view/validator/InputValidator.js';
import CarValidator from './domain/validator/CarValidator.js';
import RoundValidator from './service/validator/RoundValidator.js';
import RacingGame from './service/RacingGame.js';

class App {
  async run() {
    try {
      const carNames = await this.#readAndValidateCarNames();
      const rounds = await this.#readAndValidateRounds();

      this.#playGame(carNames, rounds);
    } catch (error) {
      throw error;
    }
  }

  async #readAndValidateCarNames() {
    const carNames = await InputView.readCarNames();

    InputValidator.validateArrayNotEmpty(carNames);
    CarValidator.validateCarNames(carNames);

    return carNames;
  }

  async #readAndValidateRounds() {
    const rounds = await InputView.readRounds();

    InputValidator.validateNumeric(rounds);
    RoundValidator.validateInteger(rounds);
    RoundValidator.validateMinimum(rounds);

    return rounds;
  }

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
