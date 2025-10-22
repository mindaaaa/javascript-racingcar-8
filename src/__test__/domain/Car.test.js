import Car from '../../domain/Car.js';

describe('Car 도메인 클래스', () => {
  describe('move 메서드는', () => {
    test('4 이상이면 전진한다.', () => {
      // given
      const pobiCar = new Car('pobi');

      // when & then
      pobiCar.move(4);
      expect(pobiCar.position).toBe(1);

      pobiCar.move(7);
      expect(pobiCar.position).toBe(2);
    });

    test('3 이하면 정지한다.', () => {
      // given
      const pobiCar = new Car('pobi');

      // when & then
      pobiCar.move(3);
      expect(pobiCar.position).toBe(0);

      pobiCar.move(0);
      expect(pobiCar.position).toBe(0);
    });
  });

  test('자동차의 초기 위치는 0이다.', () => {
    // given
    const mindaCar = new Car('mindaaaa');

    // when & then
    expect(mindaCar.position).toBe(0);
  });

  test('자동차는 자신의 이름을 반환할 수 있다.', () => {
    // given
    const mindaCar = new Car('mindaaaa');

    // when & then
    expect(mindaCar.name).toBe('mindaaaa');
  });
});
